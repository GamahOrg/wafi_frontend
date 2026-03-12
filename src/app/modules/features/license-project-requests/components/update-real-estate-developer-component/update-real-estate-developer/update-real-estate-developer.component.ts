import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LincenseRequestProjectService } from '../../../services/lincense-request-project.service';
import { LicenseProjectCancellationRequestFileDto } from 'src/app/modules/features/license/models/update-clearance-engineering-component-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { UpdateRealEstateDeveloperRequestDto } from 'src/app/modules/features/license/models/update-real-estate-developer-request-dto';
import { CancelLicenseRequestService } from '../../../services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
@Component({
  selector: 'app-update-real-estate-developer',
  templateUrl: './update-real-estate-developer.component.html',
  styleUrls: ['./update-real-estate-developer.component.scss']
})
export class UpdateRealEstateDeveloperComponent implements OnInit, OnDestroy {
  form!: FormGroup; // Mark it as definitely initialized
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  projectDetails: LicenseProjectRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  projectId: string | null = "";

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
    private _filemangementService: FileManagementService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _cancelLicenseRequestService: CancelLicenseRequestService
  ) {
    // Initialize the form in the constructor

  }
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  deletFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      console.log("Deleted res", res)
    })
  }
  deletClearanceEngineeringConsultantFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.clearanceEngineeringConsultantFileId = ""
      }
      console.log("Deleted res", res)
    })
  }
  deletClearanceAccountantFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.clearanceAccountantFileId = ""
      }
      console.log("Deleted res", res)
    })
  }
  ngOnInit(): void {
    this.observePopupEvents();
    this.getSelectedRequestIdFromLocalStorage()
    this.form = this._formBuilder.group({
      isClearanceEngineeringConsultantDone: [false, Validators.required],
      reasonsForNotFinalizingEngineeringConsultantClearance: [''],
      isClearanceAccountantDone: [false, Validators.required],
      reasonsForNotFinalizingAccountantClearance: [''],
      justificationsAndReasons: ['', Validators.required]
    });
    this.ObserveSelectedRequest();
  }
  get rf() { return this.form.controls; }
  getSelectedRequestIdFromLocalStorage(): void {
    this.projectId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._cancelLicenseRequestService.selectedRequest$.subscribe((res: LicenseProjectRequestDetailsDto | null) => {
        this.projectDetails = res;
        if (res) {
          this.form.patchValue(res)
          this.isClearanceAccountantDone = res.isClearanceAccountantDone;
          this.isClearanceEngineeringConsultantDone = res.isClearanceEngineeringConsultantDone;

          if (res.clearanceEngineeringConsultantFileId)
            this.clearanceEngineeringConsultantFileId = res.clearanceEngineeringConsultantFileId;


          if (res.nonClearanceDocumentEngineeringConsultantFiles.length > 0) {
            res.nonClearanceDocumentEngineeringConsultantFiles.forEach((data: any) => {
              this.nonClearanceDocumentEngineeringConsultantFiles.push({
                documentId: data.id
              });
            });
          }

          if (res.clearanceAccountantFileId) {
            this.clearanceAccountantFileId = res.clearanceAccountantFileId
          }

          if (res.nonClearanceDocumentAccountantFiles.length > 0) {
            res.nonClearanceDocumentAccountantFiles.forEach((data: any) => {
              this.nonClearanceDocumentAccountantFiles.push({
                documentId: data.id
              });
            });
          }

          if (res.documentSupportingJustificationFiles.length > 0) {
            res.documentSupportingJustificationFiles.forEach((data: any) => {
              this.documentSupportingJustificationFiles.push({
                documentId: data.id
              });
            });
          }

        }
        // this.form.setValue({
        //   isClearanceAccountantDone: this.projectDetails.isClearanceEngineeringConsultantDone,
        //   reasonsForNotFinalizingEngineeringConsultantClearance: this.projectDetails.reasonsForNotFinalizingEngineeringConsultantClearance,
        //   isClearanceEngineeringConsultantDone: this.projectDetails.isClearanceEngineeringConsultantDone,
        //   reasonsForNotFinalizingAccountantClearance: this.projectDetails.reasonsForNotFinalizingAccountantClearance,
        //   justificationsAndReasons: this.projectDetails.justificationsAndReasons,
        // })
      })
    )
  }
  getProjectDetails() {
    this.subscriptions.push(
      this._cancelLicenseRequestService.getLicenseProjectDetailsById(this.projectId as string).subscribe(res => {
        this._cancelLicenseRequestService.selectedRequest$.next(res);
      }))
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

  ValidateFiles() {

    
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

    console.log(this.form);
    console.log(this.form.value);

    if (this.form.invalid || !this.ValidateFiles()) {
      this.showValidation = true;
      return;
    }


    const requestPayload: UpdateRealEstateDeveloperRequestDto = {
      isClearanceEngineeringConsultantDone: this.form.get('isClearanceEngineeringConsultantDone')?.value,
      clearanceEngineeringConsultantFileId: this.clearanceEngineeringConsultantFileId,
      reasonsForNotFinalizingEngineeringConsultantClearance: this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.value,
      nonClearanceDocumentEngineeringConsultantFiles: this.nonClearanceDocumentEngineeringConsultantFiles,
      isClearanceAccountantDone: this.form.get('isClearanceAccountantDone')?.value,
      clearanceAccountantFileId: this.clearanceAccountantFileId,
      reasonsForNotFinalizingAccountantClearance: this.form.get('reasonsForNotFinalizingAccountantClearance')?.value,
      nonClearanceDocumentAccountantFiles: this.nonClearanceDocumentAccountantFiles,
      justificationsAndReasons: this.form.get('justificationsAndReasons')?.value,
      documentSupportingJustificationFiles: this.documentSupportingJustificationFiles,


    };
    this._cancelLicenseRequestService.updateRealestateDeveloperRequestData(requestPayload, this.projectDetails.licenseProjectRequestCancellationId).subscribe((res: any) => {
      if (res.isDone === true) {
        this.projectDetails.isClearanceEngineeringConsultantDone = requestPayload.isClearanceEngineeringConsultantDone;
        this.projectDetails.clearanceEngineeringConsultantFileId = requestPayload.clearanceEngineeringConsultantFileId;
        this.projectDetails.reasonsForNotFinalizingEngineeringConsultantClearance = requestPayload.reasonsForNotFinalizingEngineeringConsultantClearance;
        this.projectDetails.nonClearanceDocumentEngineeringConsultantFiles = requestPayload.nonClearanceDocumentEngineeringConsultantFiles;
        this.projectDetails.isClearanceAccountantDone = requestPayload.isClearanceAccountantDone;
        this.projectDetails.clearanceAccountantFileId = requestPayload.clearanceAccountantFileId;
        this.projectDetails.reasonsForNotFinalizingAccountantClearance = requestPayload.reasonsForNotFinalizingAccountantClearance;
        this.projectDetails.nonClearanceDocumentAccountantFiles = requestPayload.nonClearanceDocumentAccountantFiles;
        this.projectDetails.justificationsAndReasons = requestPayload.justificationsAndReasons;
        this.projectDetails.documentSupportingJustificationFiles = requestPayload.documentSupportingJustificationFiles;
        this._cancelLicenseRequestService.updateSelectedRequest(res.data);
        this._toastrNotificationService.showSuccess('تم التعديل');
        this.emitDataIsUpdate()
        this.closeDialog();
      }
    })
  }

  emitDataIsUpdate() {
    this._cancelLicenseRequestService.dataIsUpdate.emit();
  }

  onNonClearanceDocumentEngineeringConsultantFilesUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.nonClearanceDocumentEngineeringConsultantFiles = [];
      return;
    }
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

      this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.clearValidators();
      this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.reset();
    } else {

      this.form.get('clearanceEngineeringConsultantFileId')?.clearValidators();
      this.form.get('clearanceEngineeringConsultantFileId')?.reset();

      this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.setValidators(Validators.required);

    }
    this.form.get('clearanceEngineeringConsultantFileId')?.updateValueAndValidity();
    this.form.get('reasonsForNotFinalizingEngineeringConsultantClearance')?.updateValueAndValidity();
  }
  onClearanceChangeAccount(value: boolean): void {
    
    this.isClearanceAccountantDone = value;
    if (value) {
      this.form.get('clearanceAccountantFileId')?.setValidators(Validators.required);

      this.form.get('reasonsForNotFinalizingAccountantClearance')?.clearValidators();
      this.form.get('reasonsForNotFinalizingAccountantClearance')?.reset();
    } else {
      this.form.get('clearanceAccountantFileId')?.clearValidators();
      this.form.get('clearanceAccountantFileId')?.reset();

      this.form.get('reasonsForNotFinalizingAccountantClearance')?.setValidators(Validators.required);
    }
    this.form.get('clearanceAccountantFileId')?.updateValueAndValidity();
    this.form.get('reasonsForNotFinalizingAccountantClearance')?.updateValueAndValidity();
  }
  clearanceEngineeringConsultantFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.clearanceEngineeringConsultantFileId = '00000000-0000-0000-0000-000000000000';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    this.clearanceEngineeringConsultantFileId = filesData.eventRes.data[0].id
  }
  clearanceAccountantFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.clearanceAccountantFileId = '00000000-0000-0000-0000-000000000000';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.clearanceAccountantFileId = filesData.eventRes.data[0].id
  }
  onClearanceDocumentAccountantFilesUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.nonClearanceDocumentAccountantFiles = [];
      return;
    }
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
    if (filesData.eventRes.data.length === 0) {
      this.documentSupportingJustificationFiles = [];
      return;
    }
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