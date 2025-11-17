import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringNonConformityReportCreateUpdateDto } from '../../dataModels/license-project-engineering-non-conformity-report-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { LicenseProjectEngineeringNonConformityReportDto } from '../../dataModels/license-project-engineering-non-conformity-report-dto';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../services/engineering-supervision-report-actual-quality-and-business.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-non-conformity-report',
  templateUrl: './add-edit-non-conformity-report.component.html',
  styleUrls: ['./add-edit-non-conformity-report.component.scss']
})
export class AddEditNonConformityReportComponent {
 subscriptions: Subscription[] = [];
 licenseProjectEngineeringNonConformityReportCreateUpdate?:LicenseProjectEngineeringNonConformityReportCreateUpdateDto;
licenseProjectEngineeringNonConformityReportForm =
this._formBuilder.group({
  noOfClosed: this._formBuilder.control<number | null>(null, [Validators.required]),
  noOfOpened: this._formBuilder.control<number | null>(null, [Validators.required]),
  noOfUnderReview: this._formBuilder.control<number | null>(null, [Validators.required]),
  notes: this._formBuilder.control<string | null>(null, [Validators.required]),
});

get controls() {
return this.licenseProjectEngineeringNonConformityReportForm.controls;
}

licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
showValidation: boolean = false;
licenseProjectEngineeringNonConformityReport?: LicenseProjectEngineeringNonConformityReportDto ;

  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectEngineeringNonConformityReport();
  }


  getLicenseProjectEngineeringNonConformityReport() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringNonConformityReportObj().subscribe(res => {
        if (res) {
        
         this.licenseProjectEngineeringNonConformityReport=res as LicenseProjectEngineeringNonConformityReportDto; 
         this.licenseProjectEngineeringNonConformityReportForm.patchValue(this.licenseProjectEngineeringNonConformityReport as any)

        }
      })
    )
  }

  
  save(): void {
    
    if (!this.licenseProjectEngineeringNonConformityReportForm.valid) {
      this.showValidation = true;
      return;
    }

    
    this.licenseProjectEngineeringNonConformityReportCreateUpdate = this.licenseProjectEngineeringNonConformityReportForm.value as {} as LicenseProjectEngineeringNonConformityReportCreateUpdateDto;
    this.licenseProjectEngineeringNonConformityReportCreateUpdate.id=this.licenseProjectEngineeringNonConformityReport?.id as string;
    this.licenseProjectEngineeringNonConformityReportCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId=this.licenseProjectEngineeringNonConformityReport?.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;

    
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.saveLicenseProjectEngineeringNonConformityReport(this.licenseProjectEngineeringNonConformityReportCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._engineeringSupervisionReportActualQualityAndBusinessService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringNonConformityReportForm.valueChanges.subscribe(
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
