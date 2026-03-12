import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { LicenseProjectCancellationRequestFileDto } from 'src/app/modules/features/license/models/update-clearance-engineering-component-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { LincenseRequestProjectService } from '../../../services/lincense-request-project.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { UpdateClearanceAccountantComponentDto } from 'src/app/modules/features/license/models/clearance-account-dto';
import { CancelLicenseRequestService } from '../../../services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-update-clearance-account',
  templateUrl: './update-clearance-account.component.html',
  styleUrls: ['./update-clearance-account.component.scss']
})
export class UpdateClearanceAccountComponent implements OnInit, OnDestroy {
  form!: FormGroup; // Mark it as definitely initialized
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  projectDetails: LicenseProjectRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  lastFinancialReportId: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectSoldUnitAttachmentFiles: LicenseProjectCancellationRequestFileDto[] = [];
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  constructor(
    private _formBuilder: FormBuilder,
    private _filemangementService : FileManagementService,
    private _toastrNotificationService: ToastrNotificatioService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _popupService: PopupService,
    private _cancelLicenseRequestService: CancelLicenseRequestService
  ) {

  }

  ngOnInit(): void {
    this.observePopupEvents();
    this.form = this._formBuilder.group({
      escrowAccountBalance: [0.0, Validators.required],
      lastFinancialReportId: ['', Validators.required],
    });
    this.ObserveSelectedRequest();

  }
  
  deletLastFinancialReportFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.lastFinancialReportId = ""
      }
      console.log("Deleted res", res)
    })
  }

  deletLicenseProjectSoldUnitAttachmentFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      console.log("Deleted res", res)
    })
  }

  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._cancelLicenseRequestService.selectedRequest$.subscribe((res: LicenseProjectRequestDetailsDto | null) => {

        if (res) {
          this.projectDetails = res;
          this.form.patchValue(res)
          if (res.lastFinancialReportId)
            this.lastFinancialReportId = res.lastFinancialReportId;
        }
      })
    )
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

  save(): void {

    if (this.form.invalid || (this.lastFinancialReportId == null || this.lastFinancialReportId == '00000000-0000-0000-0000-000000000000') || (this.licenseProjectSoldUnitAttachmentFiles == null || this.licenseProjectSoldUnitAttachmentFiles.length == 0)) {
      this.showValidation = true;
      return;
    }

    const requestPayload: UpdateClearanceAccountantComponentDto = {
      escrowAccountBalance: this.form.get('escrowAccountBalance')?.value,
      lastFinancialReportId: this.lastFinancialReportId,
      licenseProjectSoldUnitAttachmentFiles: this.licenseProjectSoldUnitAttachmentFiles
    };
    this._cancelLicenseRequestService.updateAccountantRequestData(requestPayload, this.projectDetails.licenseProjectRequestCancellationId).subscribe((res: any) => {
      if (res.isDone === true) {
        this.projectDetails.escrowAccountBalance = requestPayload.escrowAccountBalance;
        this.projectDetails.lastFinancialReportId = requestPayload.lastFinancialReportId;
        this.projectDetails.licenseProjectSoldUnitAttachmentFiles = requestPayload.licenseProjectSoldUnitAttachmentFiles;
        this._cancelLicenseRequestService.updateSelectedRequest(res.data);
        this._toastrNotificationService.showSuccess('تم التعديل');
        this.emitDataIsUpdate();
        this.closeDialog();
      }
    })
  }

  emitDataIsUpdate() {
    this._cancelLicenseRequestService.dataIsUpdate.emit();
  }


  onLicenseProjectSoldUnitAttachmentFilesUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectSoldUnitAttachmentFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.licenseProjectSoldUnitAttachmentFiles) {
      this.licenseProjectSoldUnitAttachmentFiles = [];
    }

    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectSoldUnitAttachmentFiles.push({
        documentId: data.id
      });
    });
  }

  clearanceLastFinancialReportIdFileUpload(filesData: any): void {
    if (filesData.eventRes.data.length === 0) {
      this.form.get('lastFinancialReportId')?.setValue(null)
      this.lastFinancialReportId = '00000000-0000-0000-0000-000000000000'
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) {
      this.form.get('lastFinancialReportId')?.setValue(null)
      this.lastFinancialReportId = '00000000-0000-0000-0000-000000000000'
      return;
    }

    this.form.get('lastFinancialReportId')?.setValue(filesData.eventRes.data[0].id)
    this.lastFinancialReportId = filesData.eventRes.data[0].id
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
