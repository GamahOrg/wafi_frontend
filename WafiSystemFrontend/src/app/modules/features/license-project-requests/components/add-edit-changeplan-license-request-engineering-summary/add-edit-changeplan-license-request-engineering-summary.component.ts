import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { LicenseProjectRequestChangePlanProjectAttachmentCreateUpdateDto, ProjecTimelineFileAttachmentCreateUpdateDto, UpdateChangePlanForEngineeringConsultantDto } from '../../models/update-change-plan-for-engineering-consultant-dto';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-add-edit-changeplan-license-request-engineering-summary',
  templateUrl: './add-edit-changeplan-license-request-engineering-summary.component.html',
  styleUrls: ['./add-edit-changeplan-license-request-engineering-summary.component.scss']
})
export class AddEditChangeplanLicenseRequestEngineeringSummaryComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  licenseProjectRequestChangePlanFull?:LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  updateChangePlanForEngineeringConsultant?: UpdateChangePlanForEngineeringConsultantDto;
  changePlanForEngineeringConsultantForm = this._formBuilder.group({
    reasonsAndJustificationsForChangingProjectPlan: this._formBuilder.control<string | null>(null, [Validators.required]),
    achievementRate: this._formBuilder.control<number | null>(null, [Validators.required]),
    isProjectStartedForEngineeringConsultant:this._formBuilder.control<boolean | null>(false),
  });
  showValidation: boolean = false;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  lastEngineeringReportId?:string;
  projecTimelineFileAttachments: ProjecTimelineFileAttachmentCreateUpdateDto[] = [];
  licenseProjectRequestChangePlanProjectAttachments: LicenseProjectRequestChangePlanProjectAttachmentCreateUpdateDto[] = [];
  get controls() {
    return this.changePlanForEngineeringConsultantForm.controls;
  }
  
  constructor(
    private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,

  ) {this.getSelectedRequestIdFromLocalStorage()}
  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
    this.observePopupEvents();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    debugger;
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }

  private getLicenseProjectRequestChangePlan(): void {

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.getLicenseProjectRequestChangePlan().subscribe((res: LicenseProjectRequestChangePlanFullDto | null) => {
        if (res) {
          this.licenseProjectRequestChangePlanFull = res;
         this.lastEngineeringReportId=this.licenseProjectRequestChangePlanFull.lastEngineeringReportId;
         this.projecTimelineFileAttachments=this.licenseProjectRequestChangePlanFull.projecTimelineFileAttachments;
         this.licenseProjectRequestChangePlanProjectAttachments =this.licenseProjectRequestChangePlanFull.licenseProjectRequestChangePlanProjectAttachments;
          this.changePlanForEngineeringConsultantForm.patchValue(this.licenseProjectRequestChangePlanFull as any);
        }
      }),
    )
  }


  onExistLastEngineeringReportFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.lastEngineeringReportId=data.id;
    });
  }
 
  save(): void {
    debugger;
    if (!this.changePlanForEngineeringConsultantForm.valid) 
    {
      this.showValidation = true;
      return;
    }
if(!this.projecTimelineFileAttachments || this.projecTimelineFileAttachments.length ==0)
  {
    this.showValidation = true;
      return;
  }
  if (!this.licenseProjectRequestChangePlanProjectAttachments ||  this.licenseProjectRequestChangePlanProjectAttachments.length ==0)
    {
      this.showValidation = true;
      return;
    }
    this.updateChangePlanForEngineeringConsultant = this.changePlanForEngineeringConsultantForm.value as {} as UpdateChangePlanForEngineeringConsultantDto;
    this.updateChangePlanForEngineeringConsultant.licenseProjectRequestId = this.licenseProjectRequestId as string;
    this.updateChangePlanForEngineeringConsultant.id = this.licenseProjectRequestChangePlanFull?.id as string;
    this.updateChangePlanForEngineeringConsultant.licenseProjectRequestChangePlanProjectAttachments = this.licenseProjectRequestChangePlanProjectAttachments;
    this.updateChangePlanForEngineeringConsultant.projecTimelineFileAttachments = this.projecTimelineFileAttachments;
    if(!this.lastEngineeringReportId && this.updateChangePlanForEngineeringConsultant.isProjectStartedForEngineeringConsultant==false)
      {
        this.showValidation = true;
        return;
      }
        this.updateChangePlanForEngineeringConsultant.lastEngineeringReportId=this.lastEngineeringReportId as string;
       

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.updateChangePlanForEngineeringConsultant(this.updateChangePlanForEngineeringConsultant).subscribe((res) => {

        if (res?.isDone) {
          debugger;
          this._cahngePlaneRequestDetailsService.setLicenseProjectRequestChangePlan(res.data as LicenseProjectRequestChangePlanFullDto);
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }

  onExistProjecTimelineFileAttachmentsFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.projecTimelineFileAttachments) this.projecTimelineFileAttachments = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.projecTimelineFileAttachments.push({
        documentFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectRequestChangePlanId: this.licenseProjectRequestChangePlanFull?.id ? this.licenseProjectRequestChangePlanFull?.id : "00000000-0000-0000-0000-000000000000"

      });
    });
  }
  onExistlicenseProjectRequestChangePlanProjectAttachmentFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectRequestChangePlanProjectAttachments) this.licenseProjectRequestChangePlanProjectAttachments = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectRequestChangePlanProjectAttachments.push({
        documentFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectRequestChangePlanId: this.licenseProjectRequestChangePlanFull?.id ? this.licenseProjectRequestChangePlanFull.id : "00000000-0000-0000-0000-000000000000"

      });
    });
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
