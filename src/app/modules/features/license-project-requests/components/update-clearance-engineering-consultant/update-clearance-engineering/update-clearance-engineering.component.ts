import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LincenseRequestProjectService } from '../../../services/lincense-request-project.service';
import { LicenseProjectCancellationRequestFileDto, UpdateClearanceEngineeringComponentDto } from 'src/app/modules/features/license/models/update-clearance-engineering-component-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { CancelLicenseRequestService } from '../../../services/cancel-license-request.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-update-clearance-engineering',
  templateUrl: './update-clearance-engineering.component.html',
  styleUrls: ['./update-clearance-engineering.component.scss']
})
export class UpdateClearanceEngineeringComponent implements OnInit, OnDestroy {
  form!: FormGroup; // Mark it as definitely initialized
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  projectDetails: LicenseProjectRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;

  // @Input() achievementRate: number = 0.0;
  lastEngineeringReportId: string | null = null;

  singleFilesUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    requiredErrorMsg: 'حقل مطلوب',
  };
  constructor(
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _cancelLicenseRequestService: CancelLicenseRequestService
  ) {

  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      achievementRate: [0, Validators.required],
      lastEngineeringReportId: ['', Validators.required]
    });

    this.observePopupEvents();
    this.ObserveSelectedRequest()
    // Initialize the form in the constructor  
  }
  // getSelectedRequestIdFromLocalStorage(): void {
  //   this.projectId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
  //   if (this.projectId) {
  //     this.getProjectDetails();
  //   }
  // }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._cancelLicenseRequestService.selectedRequest$.subscribe((res: LicenseProjectRequestDetailsDto | null) => {

        if (res) {
          this.projectDetails = res;
          this.form.patchValue(res)
          if (res.lastEngineeringReportId)
            this.lastEngineeringReportId = res.lastEngineeringReportId;
        }
      })
    )
  }
  // getProjectDetails() {
  //   this.subscriptions.push(
  //     this._cancelLicenseRequestService.getLicenseProjectDetailsById(this.projectId as string).subscribe(res => {
  //       if (res) {
  //         console.log('getProjectDetails');
  //         console.log(res);

  //         this.projectDetails = res;
  //         this._cancelLicenseRequestService.selectedRequest$.next(res);
  //         this.form.patchValue(res)
  //         if (res.lastEngineeringReportId)
  //           this.lastEngineeringReportId = res.lastEngineeringReportId;
  //       }
  //     }))
  // }
  observePopupEvents(): void {
    this.observeConfirmAction();
  }
  deletFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      console.log("Deleted res", res)
    })
  }
  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }

  save(): void {

    console.log(this.form);
    console.log(this.form.value);

    if (this.form.invalid) {
      this.showValidation = true;
      return;
    }

    const requestPayload: UpdateClearanceEngineeringComponentDto = {
      achievementRate: this.form.get('achievementRate')?.value,
      lastEngineeringReportId: this.form.get('lastEngineeringReportId')?.value,
    };
    this._cancelLicenseRequestService.updateEngineeringConsultantRequestData(requestPayload, this.projectDetails.licenseProjectRequestCancellationId).subscribe((res: any) => {
      if (res.isDone === true) {
        this.projectDetails.achievementRate = requestPayload.achievementRate;
        this.projectDetails.lastEngineeringReportId = requestPayload.lastEngineeringReportId;
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


  clearanceEngineeringConsultantFileUpload(filesData: any): void {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) {
      this.form.get('lastEngineeringReportId')?.setValue(null);
      return;
    }

    this.form.get('lastEngineeringReportId')?.setValue(filesData.eventRes.data[0].id);
    this.lastEngineeringReportId = filesData.eventRes.data[0].id

  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
