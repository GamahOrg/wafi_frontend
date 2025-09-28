import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectHealthAndSafetyMonitoringDto } from '../../../models/license-project-health-and-safety-monitoring-dto';
import { LicenseProjectHealthAndSafetyMonitoringCreateUpdateDto } from '../../../models/license-project-health-and-safety-monitoring-create-update-dto';
import { SysLicenseProjectQualityStatusDto } from '../../../models/sys-license-project-quality-status-dto';
import { LicenseProjectHealthAndSafetyMonitoringService } from '../../../services/license-project-health-and-safety-monitoring.service';

@Component({
  selector: 'app-add-edit-health-and-safety-monitoring',
  templateUrl: './add-edit-health-and-safety-monitoring.component.html',
  styleUrls: ['./add-edit-health-and-safety-monitoring.component.scss']
})
export class AddEditHealthAndSafetyMonitoringComponent {
subscriptions: Subscription[] = [];
licenseProjectHealthAndSafetyMonitoringCreateUpdate?:LicenseProjectHealthAndSafetyMonitoringCreateUpdateDto;
licenseProjectHealthAndSafetyMonitoring?:LicenseProjectHealthAndSafetyMonitoringDto;
licenseProjectQualityStatusList?:SysLicenseProjectQualityStatusDto[]
licenseProjectHealthAndSafetyMonitoringForm =
this._formBuilder.group({
  hsePlanStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
  preventiveMeasures: this._formBuilder.control<string | null>(null, [Validators.required]),
  majorIncidentsAtReportDate: this._formBuilder.control<number | null>(null, [Validators.required]),
  lostTimeInjuriesAtReportDate: this._formBuilder.control<number | null>(0, [Validators.required]),
  nearMissReportsAtReportDate: this._formBuilder.control<number | null>(0, [Validators.required]),
  notes: this._formBuilder.control<string | null>(null, [Validators.required]),
});

get controls() {
return this.licenseProjectHealthAndSafetyMonitoringForm.controls;
}

licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
showValidation: boolean = false;

  constructor(
    private _licenseProjectHealthAndSafetyMonitoringService: LicenseProjectHealthAndSafetyMonitoringService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectEngineeringActualQualityFirstParte();
    this.getLicenseProjectQualityStatusList();
  }


  getLicenseProjectQualityStatusList() {
    this.subscriptions.push(
      this._licenseProjectHealthAndSafetyMonitoringService.getLicenseProjectQualityStatusList().subscribe(res => {
        if (res) {
        
        this.licenseProjectQualityStatusList=res as SysLicenseProjectQualityStatusDto[];

        }
      })
    )
  }

  getLicenseProjectEngineeringActualQualityFirstParte() {
    this.subscriptions.push(
      this._licenseProjectHealthAndSafetyMonitoringService.getLicenseProjectHealthAndSafetyMonitoring().subscribe(res => {
        if (res) {
        debugger;
         this.licenseProjectHealthAndSafetyMonitoring=res as LicenseProjectHealthAndSafetyMonitoringDto; 
         this.licenseProjectHealthAndSafetyMonitoringForm.patchValue(this.licenseProjectHealthAndSafetyMonitoring as any)
        // this.licenseProjectHealthAndSafetyMonitoringForm.controls.hSEPlanStatusId.setValue(this.licenseProjectHealthAndSafetyMonitoring?.hSEPlanStatusId as number);

        }
      })
    )
  }

  
  save(): void {
    debugger;
    if (!this.licenseProjectHealthAndSafetyMonitoringForm.valid) {
      this.showValidation = true;
      return;
    }

    debugger;
    this.licenseProjectHealthAndSafetyMonitoringCreateUpdate = this.licenseProjectHealthAndSafetyMonitoringForm.value as {} as LicenseProjectHealthAndSafetyMonitoringCreateUpdateDto;
    this.licenseProjectHealthAndSafetyMonitoringCreateUpdate.id=this.licenseProjectHealthAndSafetyMonitoring?.id as string;
    this.licenseProjectHealthAndSafetyMonitoringCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId=this.licenseProjectHealthAndSafetyMonitoring?.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;

    this.licenseProjectHealthAndSafetyMonitoringCreateUpdate.hsePlanStatusId=Number(this.licenseProjectHealthAndSafetyMonitoringCreateUpdate.hsePlanStatusId);
    this.subscriptions.push(
      this._licenseProjectHealthAndSafetyMonitoringService.save(this.licenseProjectHealthAndSafetyMonitoringCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseProjectHealthAndSafetyMonitoringService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.licenseProjectHealthAndSafetyMonitoringForm.valueChanges.subscribe(
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
