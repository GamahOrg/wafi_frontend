import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { EngineeringSupervisionPlannedReportActualInfrastructureDto } from '../../dataModels/engineering-supervision-planned-report-actual-infrastructure-dto';
import { ActualInfrastructureCreateUpdateDto } from '../../dataModels/actual-infrastructure-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from '../../services/engineering-supervision-planned-report-actual-infrastructure.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-edit-actual-infrastructur',
  templateUrl: './add-edit-actual-infrastructur.component.html',
  styleUrls: ['./add-edit-actual-infrastructur.component.scss']
})
export class AddEditActualInfrastructurComponent {

  subscriptions: Subscription[] = [];
  actualInfrastructureCreateUpdate?:ActualInfrastructureCreateUpdateDto;
  engineeringSupervisionPlannedReportActualInfrastructure?:EngineeringSupervisionPlannedReportActualInfrastructureDto;
  actualInfrastructureForm =
  this._formBuilder.group({
    approvedExtension: this._formBuilder.control<number | null>(null, [Validators.required]),
    actualStartDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    forecastCompletionDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    actualInfrastructureMonthlyPlannedCompletionRate: this._formBuilder.control<number | null>(0, [Validators.required]),
  });
  
  get controls() {
  return this.actualInfrastructureForm.controls;
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
    this.getLicenseProjectEngineeringActualQualityFirstParte();
  }

  getLicenseProjectEngineeringActualQualityFirstParte() {
    this.subscriptions.push(
      this._engineeringSupervisionPlannedReportActualInfrastructureService.getEngineeringSupervisionPlannedReportActualInfrastructureDto().subscribe(res => {
        if(res) {
          this.engineeringSupervisionPlannedReportActualInfrastructure=res as EngineeringSupervisionPlannedReportActualInfrastructureDto; 
          this.actualInfrastructureForm.patchValue(this.engineeringSupervisionPlannedReportActualInfrastructure as any)
          this.actualInfrastructureForm.controls.actualStartDate.setValue(formatDate(this.engineeringSupervisionPlannedReportActualInfrastructure.actualStartDate,'yyyy-MM-dd',this.locale));
          this.actualInfrastructureForm.controls.forecastCompletionDate.setValue(formatDate(this.engineeringSupervisionPlannedReportActualInfrastructure.forecastCompletionDate,'yyyy-MM-dd',this.locale));
        }
      })
    )
  }

  save(): void {
    if(!this.actualInfrastructureForm.valid) {
      this.showValidation = true;
      return;
    }

    this.actualInfrastructureCreateUpdate = this.actualInfrastructureForm.value as {} as ActualInfrastructureCreateUpdateDto;
    this.actualInfrastructureCreateUpdate.id=this.engineeringSupervisionPlannedReportActualInfrastructure?.id as string;

    this.subscriptions.push(
      this._engineeringSupervisionPlannedReportActualInfrastructureService.saveLicenseProjectEngineeringActualInfrastructureRates(this.actualInfrastructureCreateUpdate).subscribe((res) => {
        if (res?.isDone) {
          this._engineeringSupervisionPlannedReportActualInfrastructureService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }
      })
    )
  }

  // private observeLicenseProjectEngineeringSupervisionActualReportForm() {
  //   this.subscriptions.push(
  //     this.actualInfrastructureForm.valueChanges.subscribe(
  //       (changes) => {
  // }))}

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
