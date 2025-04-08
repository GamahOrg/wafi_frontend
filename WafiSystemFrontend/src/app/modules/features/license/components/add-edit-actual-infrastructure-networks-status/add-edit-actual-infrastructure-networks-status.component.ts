import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ActualLicenseProjectInfrastructureNetworksStatusDto } from '../../dataModels/actual-license-project-infrastructure-networks-status-dto';
import { ActualLicenseProjectInfrastructureNetworksStatusCreateUpdateDto } from '../../dataModels/actual-license-project-infrastructure-networks-status-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from '../../services/engineering-supervision-planned-report-actual-infrastructure.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-add-edit-actual-infrastructure-networks-status',
  templateUrl: './add-edit-actual-infrastructure-networks-status.component.html',
  styleUrls: ['./add-edit-actual-infrastructure-networks-status.component.scss']
})
export class AddEditActualInfrastructureNetworksStatusComponent {
subscriptions: Subscription[] = [];
actualLicenseProjectInfrastructureNetworksStatus?:ActualLicenseProjectInfrastructureNetworksStatusDto;
actualLicenseProjectInfrastructureNetworksStatusCreateUpdate?:ActualLicenseProjectInfrastructureNetworksStatusCreateUpdateDto;
actualInfrastructureNetworksStatusForm =
this._formBuilder.group({
  actualMonthlyPlannedCompletionPercentage: this._formBuilder.control<number | null>(null, [Validators.required]),
  notes: this._formBuilder.control<string | null>(null, [Validators.required]),
});

get controls() {
return this.actualInfrastructureNetworksStatusForm.controls;
}

licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
showValidation: boolean = false;

  constructor(
    private _engineeringSupervisionPlannedReportActualInfrastructureService: EngineeringSupervisionPlannedReportActualInfrastructureService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getActualLicenseProjectInfrastructureNetworksStatus();
  }


 

  getActualLicenseProjectInfrastructureNetworksStatus() {
    this.subscriptions.push(
      this._engineeringSupervisionPlannedReportActualInfrastructureService.getActualLicenseProjectInfrastructureNetworksStatusDto().subscribe(res => {
        if (res) {
        debugger;
         this.actualLicenseProjectInfrastructureNetworksStatus=res as ActualLicenseProjectInfrastructureNetworksStatusDto; 
         this.actualInfrastructureNetworksStatusForm.patchValue(this.actualLicenseProjectInfrastructureNetworksStatus as any)
        }
      })
    )
  }

  
  save(): void {
    debugger;
    if (!this.actualInfrastructureNetworksStatusForm.valid) {
      this.showValidation = true;
      return;
    }

    debugger;
    this.actualLicenseProjectInfrastructureNetworksStatusCreateUpdate = this.actualInfrastructureNetworksStatusForm.value as {} as ActualLicenseProjectInfrastructureNetworksStatusCreateUpdateDto;
    this.actualLicenseProjectInfrastructureNetworksStatusCreateUpdate.id=this.actualLicenseProjectInfrastructureNetworksStatus?.id as string;

    this.subscriptions.push(
      this._engineeringSupervisionPlannedReportActualInfrastructureService.SaveActual(this.actualLicenseProjectInfrastructureNetworksStatusCreateUpdate).subscribe((res) => {

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
      this.actualInfrastructureNetworksStatusForm.valueChanges.subscribe(
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
