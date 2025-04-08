import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { environment } from 'src/environments/environment';
import { UpdateChangePlanForCharteredAccountantDto } from '../../models/update-change-plan-for-chartered-accountant-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-add-edit-changeplan-license-request-accountant-summary',
  templateUrl: './add-edit-changeplan-license-request-accountant-summary.component.html',
  styleUrls: ['./add-edit-changeplan-license-request-accountant-summary.component.scss']
})
export class AddEditChangeplanLicenseRequestAccountantSummaryComponent {
  subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  licenseProjectRequestChangePlanFull?:LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  updateChangePlanForCharteredAccountant?: UpdateChangePlanForCharteredAccountantDto;
  changePlanForCharteredAccountantForm = this._formBuilder.group({
    totalProjectCosts: this._formBuilder.control<number | null>(null, [Validators.required]),
    escrowAccountBalance: this._formBuilder.control<number | null>(null, [Validators.required]),
    isProjectStartedCharteredAccountant:this._formBuilder.control<boolean | null>(false),
    isThereUnitsSold:this._formBuilder.control<boolean | null>(false)
  });
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  lastFinancialReportId?:string;
  soldUnitsAttachmentId?:string;
  get controls() {
    return this.changePlanForCharteredAccountantForm.controls;
  }
  
  constructor(
    private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
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
         this.lastFinancialReportId=this.licenseProjectRequestChangePlanFull.lastFinancialReportId;
         this.soldUnitsAttachmentId=this.licenseProjectRequestChangePlanFull.soldUnitsAttachmentId;
          this.changePlanForCharteredAccountantForm.patchValue(this.licenseProjectRequestChangePlanFull as any);
        }
      }),
    )
  }


  onExistLastFinancialReportFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.lastFinancialReportId=data.id;
    });
  }
  onExistSoldUnitsAttachmentFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.soldUnitsAttachmentId=data.id;
    });
  }
  save(): void {
    
    if (!this.changePlanForCharteredAccountantForm.valid) {
      this.showValidation = true;
      return;
    }

    this.updateChangePlanForCharteredAccountant = this.changePlanForCharteredAccountantForm.value as {} as UpdateChangePlanForCharteredAccountantDto;
    this.updateChangePlanForCharteredAccountant.licenseProjectRequestId = this.licenseProjectRequestId as string;
    this.updateChangePlanForCharteredAccountant.id = this.licenseProjectRequestChangePlanFull?.id as string;

    if(!this.lastFinancialReportId && this.updateChangePlanForCharteredAccountant.isProjectStartedCharteredAccountant==false)
      {
        this.showValidation = true;
        return;
      }
        this.updateChangePlanForCharteredAccountant.lastFinancialReportId=this.lastFinancialReportId as string;
        
        if(!this.soldUnitsAttachmentId && this.updateChangePlanForCharteredAccountant.isThereUnitsSold==false)
          {
            this.showValidation = true;
            return;
          }
          this.updateChangePlanForCharteredAccountant.soldUnitsAttachmentId=this.soldUnitsAttachmentId as string;

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.updateChangePlanForCharteredAccountant(this.updateChangePlanForCharteredAccountant).subscribe((res) => {

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
