import { Component, Inject, LOCALE_ID } from '@angular/core';
import {forkJoin, Subscription } from 'rxjs';
import { LicenseProjectConnectionWithServicesProviderCreateUpdateDto } from '../../dataModels/license-project-connection-with-services-provider-create-update-dto';
import { LicenseProjectConnectionWithServicesProviderDto,SysLicenseProjectTieConnectionStatusDto,SysLicenseProjectActivationStatusDto,SysLicenseProjectServiceTypeStatusDto,LicenseProjectTieConnectionStatusEnum } from '../../dataModels/license-project-connection-with-services-provider-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from '../../services/engineering-supervision-planned-report-actual-infrastructure.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { formatDate } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-connection-with-services-provider',
  templateUrl: './add-edit-connection-with-services-provider.component.html',
  styleUrls: ['./add-edit-connection-with-services-provider.component.scss']
})
export class AddEditConnectionWithServicesProviderComponent {

  subscriptions: Subscription[] = [];
  licenseProjectConnectionWithServicesProviderCreateUpdate?:LicenseProjectConnectionWithServicesProviderCreateUpdateDto;
  licenseProjectConnectionWithServicesProvider?:LicenseProjectConnectionWithServicesProviderDto;
  licenseProjectTieConnectionStatusList?:SysLicenseProjectTieConnectionStatusDto[];
  licenseProjectServiceTypeStatusList?:SysLicenseProjectServiceTypeStatusDto[];
  licenseProjectActivationStatusList?:SysLicenseProjectActivationStatusDto[];
  licenseProjectTieConnectionStatusEnum=LicenseProjectTieConnectionStatusEnum;
  licenseProjectConnectionWithServicesProviderForm =
  this._formBuilder.group({
    electricityTieConnectionStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    electricityServiceTypeStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    electricityTieConnectionDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    electricityConnectionStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    electricityNotes:this._formBuilder.control<string | null>(null, [Validators.required]),
    waterTieConnectionStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    waterServiceTypeStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    waterTieConnectionDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    waterConnectionStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    waterNotes: this._formBuilder.control<string | null>(null, [Validators.required]),
    sewageTieConnectionStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    sewageServiceTypeStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    sewageTieConnectionDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    sewageConnectionStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    sewageNotes: this._formBuilder.control<string | null>(null, [Validators.required]),

  });
  
  get controls() {
  return this.licenseProjectConnectionWithServicesProviderForm.controls;
  }
  
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  
    constructor(
       @Inject(LOCALE_ID) private locale: string,
      private _engineeringSupervisionPlannedReportActualInfrastructureService: EngineeringSupervisionPlannedReportActualInfrastructureService,
      private _popupService: PopupService,
      private _formBuilder: FormBuilder,
      private _toastrNotificationService: ToastrNotificatioService,
    ) { }
  
    ngOnInit(): void {
      this.observePopupEvents();
      this.loadComponentData();
      this.getLicenseProjectConnectionWithServicesProvider();
    }
  
  
     private loadComponentData() {
        const requests = [
          this._engineeringSupervisionPlannedReportActualInfrastructureService.getSysLicenseProjectServiceTypeStatusList(),
          this._engineeringSupervisionPlannedReportActualInfrastructureService.getSysLicenseProjectTieConnectionStatusList(),
          this._engineeringSupervisionPlannedReportActualInfrastructureService.getSysLicenseProjectActivationStatusoList()
        ];
    
        const subscriptions = forkJoin(requests).subscribe((results) => {
          this.licenseProjectServiceTypeStatusList=results[0] as SysLicenseProjectServiceTypeStatusDto[];
          this.licenseProjectTieConnectionStatusList=results[1] as SysLicenseProjectTieConnectionStatusDto[];
          this.licenseProjectActivationStatusList=results[2] as SysLicenseProjectActivationStatusDto[];
         
        });
    
        this.subscriptions.push(subscriptions);
      } 
  
        getLicenseProjectConnectionWithServicesProvider() {
      this.subscriptions.push(
        this._engineeringSupervisionPlannedReportActualInfrastructureService.getLicenseProjectConnectionWithServicesProviderDto().subscribe(res => {
          if (res) {
          debugger;
           this.licenseProjectConnectionWithServicesProvider=res as LicenseProjectConnectionWithServicesProviderDto; 
           if(this.licenseProjectConnectionWithServicesProvider && this.licenseProjectConnectionWithServicesProvider.id && this.licenseProjectConnectionWithServicesProvider.id !="00000000-0000-0000-0000-000000000000")
            {
              this.licenseProjectConnectionWithServicesProviderForm.patchValue(this.licenseProjectConnectionWithServicesProvider as any)
              this.licenseProjectConnectionWithServicesProviderForm.controls.electricityTieConnectionDate.setValue(formatDate(this.licenseProjectConnectionWithServicesProvider.electricityTieConnectionDate,'yyyy-MM-dd',this.locale));
              this.licenseProjectConnectionWithServicesProviderForm.controls.waterTieConnectionDate.setValue(formatDate(this.licenseProjectConnectionWithServicesProvider.waterTieConnectionDate,'yyyy-MM-dd',this.locale));
              this.licenseProjectConnectionWithServicesProviderForm.controls.sewageTieConnectionDate.setValue(formatDate(this.licenseProjectConnectionWithServicesProvider.sewageTieConnectionDate,'yyyy-MM-dd',this.locale));
            }
          }
        })
      )
    }
  
    
    save(): void {
      debugger;
      if (!this.licenseProjectConnectionWithServicesProviderForm.valid) {
        this.showValidation = true;
        return;
      }
  
      debugger;
      this.licenseProjectConnectionWithServicesProviderCreateUpdate = this.licenseProjectConnectionWithServicesProviderForm.value as {} as LicenseProjectConnectionWithServicesProviderCreateUpdateDto;
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.id=this.licenseProjectConnectionWithServicesProvider?.id as string;
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId=this.licenseProjectConnectionWithServicesProvider?.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.electricityTieConnectionStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.electricityTieConnectionStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.electricityServiceTypeStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.electricityServiceTypeStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.electricityConnectionStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.electricityConnectionStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.waterTieConnectionStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.waterTieConnectionStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.waterServiceTypeStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.waterServiceTypeStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.waterConnectionStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.waterConnectionStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.sewageTieConnectionStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.sewageTieConnectionStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.sewageServiceTypeStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.sewageServiceTypeStatusId.value);
      this.licenseProjectConnectionWithServicesProviderCreateUpdate.sewageConnectionStatusId =Number(this.licenseProjectConnectionWithServicesProviderForm.controls.sewageConnectionStatusId.value);
      this.subscriptions.push(
        this._engineeringSupervisionPlannedReportActualInfrastructureService.saveLicenseProjectConnectionWithServicesProvider(this.licenseProjectConnectionWithServicesProviderCreateUpdate).subscribe((res) => {
  
          if (res?.isDone) {
            this._engineeringSupervisionPlannedReportActualInfrastructureService.submitSuccessfullyEventEmitter.emit()
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialog();
          }
  
        })
      )
    }
    private observeLicenseProjectEngineeringSupervisionActualReportForm() {
      this.subscriptions.push(
        this.licenseProjectConnectionWithServicesProviderForm.valueChanges.subscribe(
          (changes) => {
    }))}
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
