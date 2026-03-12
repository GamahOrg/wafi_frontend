import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { FacilityShortDto } from '../../../license/models/facility-short-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangePartiesAgreementRequestService } from '../../services/change-parties-agreement-request.service';
import { CreateOrUpdateChangePartiesAgreement } from '../../models/change-parties-agreement-request-dto';

@Component({
  selector: 'app-create-change-parties-agreement-request',
  templateUrl: './create-change-parties-agreement-request.component.html',
  styleUrls: ['./create-change-parties-agreement-request.component.scss']
})
export class CreateChangePartiesAgreementRequestComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjects: LicenseProjectDDL[] = [];
  facility: FacilityShortDto | undefined = undefined;
  showValidation: boolean = false;
  price?: number;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  changePartiesAgreementForm = this._formBuilder.group({
    licenseProjectId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    applicationFormFileId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    newAgreementCopyId: this._formBuilder.control<
      string | null
    >(null, [Validators.required]),
  });
  get controls() {
    return this.changePartiesAgreementForm.controls;
  }
  constructor(
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _changePartiesAgreementRequestService: ChangePartiesAgreementRequestService
  ) {}

  ngOnInit() {
    this.observePopupEvents();
    this.obseveCustomerData();
    this.observePrice();
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changePartiesAgreementForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.ChangePartiesAgreement).subscribe((res: any) => {
        this.price = res;
      })
    )
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {})
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  save() {
    if (!this.changePartiesAgreementForm.valid) {
      this.showValidation = true;
      return;
    }
    var requestPayload = this.changePartiesAgreementForm
      .value as {} as CreateOrUpdateChangePartiesAgreement;
    requestPayload.facilityId = this.facilityId;
    this._changePartiesAgreementRequestService
      .saveChangePartiesAgreementRequest(requestPayload)
      .subscribe((res: any) => {
        if (res.isDone === true) {
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
            res?.data?.licenseProjectRequestId
          );
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.redirctToLicenseRequestDetails();
          this.closeDialog();
        }
      });
  }
  applicationFormFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changePartiesAgreementForm.controls[
        'applicationFormFileId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changePartiesAgreementForm.controls['applicationFormFileId'].setValue(
      filesData.eventRes.data[0].id
    );
  }
  newAgreementCopyUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.changePartiesAgreementForm.controls[
        'newAgreementCopyId'
      ].setValue(null);
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.changePartiesAgreementForm.controls[
      'newAgreementCopyId'
    ].setValue(filesData.eventRes.data[0].id);
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
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(
        this.facilityId,
        LicenseProjectRequestTypeEnum.ChangePartiesAgreement
      )
      .subscribe((response: any) => {
        this.licenseProjects = response || [];
      });
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    ]);
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePartiesAgreementRequestSummary}`,
    ]);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
