import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { licenseActivationRequestDetailsDto } from 'src/app/modules/features/license/models/license-activation-request-details-dto';
import { environment } from 'src/environments/environment';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseProjectDDL } from 'src/app/modules/features/license/models/license-project-by-facilityid-dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { ReactivateLicenseService } from '../../services/reactivate-license.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';

@Component({
  selector: 'app-create-reactivate-license-request',
  templateUrl: './create-reactivate-license-request.component.html',
  styleUrls: ['./create-reactivate-license-request.component.scss']
})
export class CreateReactivateLicenseRequestComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  projectActiveRequestDetails: licenseActivationRequestDetailsDto | any;
  projectId: string | null = "";
  baseUrl = `${environment.baseURL}/`;
  licenseProjects: LicenseProjectDDL[] = [];

  // @Input() justificationsAndReasons: string = '';
  licenseProjectActivationRequestFiles: any[] = [];
  facilityId: string = '00000000-0000-0000-0000-000000000000';

  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private reactivateLicenseService: ReactivateLicenseService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,

  ) {
    this.form = this._formBuilder.group({
      justificationsAndReasons: ['', Validators.required],
      licenseProjectId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.observeConfirmAction();
    this.obseveCustomerData();
  }
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.ReActivateLicense)
      .subscribe(
        (response: any) => {
          this.licenseProjects = response || [];
        },
      );
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getLicenseProjectByType();
        })
    );
  }
  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }

  cancelRequest() {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);
  }

  save(): void {

    if (this.form.invalid) {
      this.showValidation = true;
      return;
    }

    if (this.licenseProjectActivationRequestFiles.length == 0) {
      this.showValidation = true;
      return;
    }

    const requestPayload: any = {
      justificationsAndReasons: this.form.get('justificationsAndReasons')?.value,
      licenseProjectActivationRequestFiles: this.licenseProjectActivationRequestFiles,
      licenseProjectId: this.form.get('licenseProjectId')?.value,
      facilityId: this.facilityId,
    };
    this.reactivateLicenseService.createReactivateRquest(requestPayload).subscribe((res: any) => {
      if (res.isDone === true) {
        this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res.data)
        this._toastrNotificationService.showSuccess('تم الحفظ');
        this.redirctToActivateLicenseRequestDetails();
        this.closeDialog();
      }
    })
  }
  onLicenseProjectActivationRequestFiles(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectActivationRequestFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.licenseProjectActivationRequestFiles) {
      this.licenseProjectActivationRequestFiles = [];
    }

    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectActivationRequestFiles.push({
        documentFileId: data.id
      });
    });
  }
  redirctToActivateLicenseRequestDetails(): void {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary}`]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
