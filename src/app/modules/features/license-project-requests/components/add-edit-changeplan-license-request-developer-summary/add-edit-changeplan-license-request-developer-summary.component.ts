import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { environment } from 'src/environments/environment';
import { CreateUpdateChangePlanForRealEstateDeveloperDto } from '../../models/create-update-change-plan-for-real-estate-developer-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { DatePipe } from '@angular/common';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-add-edit-changeplan-license-request-developer-summary',
  templateUrl: './add-edit-changeplan-license-request-developer-summary.component.html',
  styleUrls: ['./add-edit-changeplan-license-request-developer-summary.component.scss']
})
export class AddEditChangeplanLicenseRequestDeveloperSummaryComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  licenseProjectRequestChangePlanFull?:LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  createUpdateChangePlanForRealEstateDeveloper?: CreateUpdateChangePlanForRealEstateDeveloperDto;
  changePlanForRealEstateDeveloperForm = this._formBuilder.group({
    projectEndDate: [(new Date).toDateString(), [Validators.required]],
    justificationsAndReasons: this._formBuilder.control<string | null>(null, [Validators.required]),

  });
  showValidation: boolean = false;
  mueltiFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  buyersApprovalLetterFileId?:string;
  approvalLetterForStartEndDateId?:string;
  get controls() {
    return this.changePlanForRealEstateDeveloperForm.controls;
  }
  
  constructor(
    private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private datePipe: DatePipe,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,


  ) {this.getSelectedRequestIdFromLocalStorage() }
  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
    this.observePopupEvents();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }
  private getLicenseProjectRequestChangePlan(): void {

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.getLicenseProjectRequestChangePlan().subscribe((res: LicenseProjectRequestChangePlanFullDto | null) => {
        if (res) {
          
          this.licenseProjectRequestChangePlanFull = res;
          this.approvalLetterForStartEndDateId=this.licenseProjectRequestChangePlanFull.approvalLetterForStartEndDateId;
          this.buyersApprovalLetterFileId=this.licenseProjectRequestChangePlanFull.buyersApprovalLetterFileId;
          this.licenseProjectRequestChangePlanFull.projectEndDate = this.datePipe.transform(this.licenseProjectRequestChangePlanFull.projectEndDate, 'yyyy-MM-dd') as any;
          this.changePlanForRealEstateDeveloperForm.patchValue(this.licenseProjectRequestChangePlanFull as any);
          this.changePlanForRealEstateDeveloperForm.controls.projectEndDate.setValue(this.licenseProjectRequestChangePlanFull.projectEndDate as any);
        }
      }),
    )
  }


  onExistBuyersApprovalLetterFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.buyersApprovalLetterFileId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.buyersApprovalLetterFileId=data.id;
    });
  }
  onExistApprovalLetterForStartEndDateFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.approvalLetterForStartEndDateId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.approvalLetterForStartEndDateId=data.id;
    });
  }
  save(): void {
    
    if (!this.changePlanForRealEstateDeveloperForm.valid) {
      this.showValidation = true;
      return;
    }

    this.createUpdateChangePlanForRealEstateDeveloper = this.changePlanForRealEstateDeveloperForm.value as {} as CreateUpdateChangePlanForRealEstateDeveloperDto;
    this.createUpdateChangePlanForRealEstateDeveloper.licenseProjectRequestId = this.licenseProjectRequestId as string;
    this.createUpdateChangePlanForRealEstateDeveloper.id = this.licenseProjectRequestChangePlanFull?.id as string;

    if(!this.buyersApprovalLetterFileId)
      {
        this.showValidation = true;
        return;
      }
        this.createUpdateChangePlanForRealEstateDeveloper.buyersApprovalLetterFileId=this.buyersApprovalLetterFileId as string;
        
        if(!this.approvalLetterForStartEndDateId && !this.licenseProjectRequestChangePlanFull?.approvalLetterForStartEndDateId)
          {
            this.showValidation = true;
            return;
          }
          this.createUpdateChangePlanForRealEstateDeveloper.approvalLetterForStartEndDateId=this.approvalLetterForStartEndDateId as string;

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.createOrUpdateChangePlanForRealEstateDeveloper(this.createUpdateChangePlanForRealEstateDeveloper).subscribe((res) => {

        if (res?.isDone) {
          
          this._cahngePlaneRequestDetailsService.setLicenseProjectRequestChangePlan(res.data as LicenseProjectRequestChangePlanFullDto);
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
