import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateRealEstateDeveloperRequestDto, LicenseProjectCancellationRequestFileDto } from '../../models/create-real-estate-developer-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-create-cancel-license-request',
  templateUrl: './create-cancel-license-request.component.html',
  styleUrls: ['./create-cancel-license-request.component.scss']
})
export class CreateCancelLicenseRequestComponent implements OnInit, OnDestroy {
  form!: FormGroup; // Mark it as definitely initialized
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  baseUrl = `${environment.baseURL}/`;
  licenseProjects: LicenseProjectDDL[] = [];
  @Input() facilityId: string = '00000000-0000-0000-0000-000000000000';
  @Input() isClearanceEngineeringConsultantDone: boolean = false;
  @Input() clearanceEngineeringConsultantFileId: string = '00000000-0000-0000-0000-000000000000';
  @Input() reasonsForNotFinalizingEngineeringConsultantClearance: string = '';
  @Input() nonClearanceDocumentEngineeringConsultantFiles: LicenseProjectCancellationRequestFileDto[] = [];
  @Input() isClearanceAccountantDone: boolean = false;
  @Input() clearanceAccountantFileId: string = '00000000-0000-0000-0000-000000000000';
  @Input() reasonsForNotFinalizingAccountantClearance: string = '';
  @Input() justificationsAndReasons: string = '';
  @Input() nonClearanceDocumentAccountantFiles: LicenseProjectCancellationRequestFileDto[] = [];
  @Input() documentSupportingJustificationFiles: LicenseProjectCancellationRequestFileDto[] = [];
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  constructor(
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _router: Router,
    private _licenseRequestService: LincenseRequestProjectService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _cancelLicenseRequestService: CancelLicenseRequestService
  ) {
    // Initialize the form in the constructor
    this.form = this._formBuilder.group({
      isClearanceEngineeringConsultantDone: [false, Validators.required],
      reasonsForNotFinalizingEngineeringConsultantClearance: [''],
      isClearanceAccountantDone: [false, Validators.required],
      reasonsForNotFinalizingAccountantClearance: [''],
      justificationsAndReasons: [this.justificationsAndReasons, Validators.required],
      licenseProjectId: ['', [Validators.required]],
    });
  }

  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };

  ngOnInit(): void {
    this.observePopupEvents();
    this.obseveCustomerData();
    // this.getLicenseProjectByType();

  }

  observePopupEvents(): void {
    this.observeConfirmAction();
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }
  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.CancelLicense)
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
          this.getLicenseProjectByType()
        })
    );
  }

  cancelRequest() {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`]);

  }

  ValidateFiles() {

    debugger
    if (this.isClearanceAccountantDone && (this.clearanceAccountantFileId == null || this.clearanceAccountantFileId == undefined || this.clearanceAccountantFileId == '00000000-0000-0000-0000-000000000000')) {
      return false;
    }

    if (this.isClearanceEngineeringConsultantDone && (this.clearanceEngineeringConsultantFileId == null || this.clearanceEngineeringConsultantFileId == undefined || this.clearanceEngineeringConsultantFileId == '00000000-0000-0000-0000-000000000000')) {
      return false;
    }

    if (!this.isClearanceAccountantDone && (this.nonClearanceDocumentAccountantFiles == null || this.nonClearanceDocumentAccountantFiles.length == 0)) {
      return false;
    }

    if (!this.isClearanceEngineeringConsultantDone && (this.nonClearanceDocumentEngineeringConsultantFiles == null || this.nonClearanceDocumentEngineeringConsultantFiles.length == 0)) {
      return false;
    }

    if (this.documentSupportingJustificationFiles == null || this.documentSupportingJustificationFiles.length == 0) {
      return false;
    }

    return true;
  }

  save(): void {

     if (this.form.invalid || !this.ValidateFiles()) {
      this.showValidation = true;
      return;
    }

    const requestPayload: CreateRealEstateDeveloperRequestDto = {
      isClearanceEngineeringConsultantDone: this.form.get('isClearanceEngineeringConsultantDone')?.value,
      clearanceEngineeringConsultantFileId: this.clearanceEngineeringConsultantFileId,
      reasonsForNotFinalizingEngineeringConsultantClearance: this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.value,
      nonClearanceDocumentEngineeringConsultantFiles: this.nonClearanceDocumentEngineeringConsultantFiles,
      isClearanceAccountantDone: this.form.get('isClearanceAccountantDone')?.value,
      clearanceAccountantFileId: this.clearanceAccountantFileId,
      reasonsForNotFinalizingAccountantClearance: this.form.get('reasonsForNotFinalizingAccountantClearance')?.value,
      nonClearanceDocumentAccountantFiles: this.nonClearanceDocumentAccountantFiles,
      justificationsAndReasons: this.justificationsAndReasons,
      documentSupportingJustificationFiles: this.documentSupportingJustificationFiles,
      licenseProjectId: this.form.get('licenseProjectId')?.value,
      facilityId: this.facilityId,
    };
    this._cancelLicenseRequestService.createRealEstateDeveloper(requestPayload).subscribe((res: any) => {
      if (res.isDone === true) {
        this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res.data)
        this._toastrNotificationService.showSuccess('تم الحفظ');
        this.redirctToLicenseRequestDetails();
        this.closeDialog();
      }
    })
  }
  redirctToLicenseRequestDetails(): void {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.cancelLicenseSummary}`]);
  }
  onNonClearanceDocumentEngineeringConsultantFilesUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.nonClearanceDocumentEngineeringConsultantFiles) {
      this.nonClearanceDocumentEngineeringConsultantFiles = [];
    }

    filesData.eventRes.data.forEach((data: any) => {
      this.nonClearanceDocumentEngineeringConsultantFiles.push({
        documentId: data.id
      });
    });
  }
  onClearanceChangeEngineer(value: boolean): void {
    this.isClearanceEngineeringConsultantDone = value;

    if (value) {
      this.form.get('clearanceEngineeringConsultantFileId')?.setValidators(Validators.required);
      this.nonClearanceDocumentEngineeringConsultantFiles =[];
      this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.clearValidators();
      this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.reset();
    } else {

      this.form.get('clearanceEngineeringConsultantFileId')?.clearValidators();
      this.form.get('clearanceEngineeringConsultantFileId')?.reset();
      this.clearanceEngineeringConsultantFileId ='00000000-0000-0000-0000-000000000000'
      this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.setValidators(Validators.required);

    }
    this.form.get('clearanceEngineeringConsultantFileId')?.updateValueAndValidity();
    this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.updateValueAndValidity();
  }
  onClearanceChangeAccount(value: boolean): void {
    debugger
    this.isClearanceAccountantDone = value;
    if (value) {
      this.form.get('clearanceAccountantFileId')?.setValidators(Validators.required);

      this.nonClearanceDocumentAccountantFiles = [];
      this.form.get('reasonsForNotFinalizingAccountantClearance')?.clearValidators();
      this.form.get('reasonsForNotFinalizingAccountantClearance')?.reset();
    } else {
      this.form.get('clearanceAccountantFileId')?.clearValidators();
      this.form.get('clearanceAccountantFileId')?.reset();
      this.clearanceAccountantFileId = '00000000-0000-0000-0000-000000000000'

      this.form.get('reasonsForNotFinalizingAccountantClearance')?.setValidators(Validators.required);
    }
    this.form.get('clearanceAccountantFileId')?.updateValueAndValidity();
    this.form.get('reasonsForNotFinalizingAccountantClearance')?.updateValueAndValidity();
  }
  clearanceEngineeringConsultantFileUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    this.clearanceEngineeringConsultantFileId = filesData.eventRes.data[0].id
  }
  clearanceAccountantFileUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.clearanceAccountantFileId = filesData.eventRes.data[0].id
  }
  onClearanceDocumentAccountantFilesUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.nonClearanceDocumentAccountantFiles) {
      this.nonClearanceDocumentAccountantFiles = [];
    }

    filesData.eventRes.data.forEach((data: any) => {
      this.nonClearanceDocumentAccountantFiles.push({
        documentId: data.id
      });
    });
  }
  onDocumentSupportingJustificationFilesUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.documentSupportingJustificationFiles) {
      this.documentSupportingJustificationFiles = [];
    }

    filesData.eventRes.data.forEach((data: any) => {
      this.documentSupportingJustificationFiles.push({
        documentId: data.id
      });
    });
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}