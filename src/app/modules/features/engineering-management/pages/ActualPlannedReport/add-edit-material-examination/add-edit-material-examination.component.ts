import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringMaterialExaminationCreateUpdateDto } from '../../../models/license-project-engineering-material-examination-create-update-dto';
import { LicenseProjectEngineeringMaterialExaminationDto } from '../../../models/license-project-engineering-material-examination-dto';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../../services/engineering-supervision-report-actual-quality-and-business.service';

@Component({
  selector: 'app-add-edit-material-examination',
  templateUrl: './add-edit-material-examination.component.html',
  styleUrls: ['./add-edit-material-examination.component.scss']
})
export class AddEditMaterialExaminationComponent {
 subscriptions: Subscription[] = [];
 licenseProjectEngineeringMaterialExaminationCreateUpdate?:LicenseProjectEngineeringMaterialExaminationCreateUpdateDto;
licenseProjectEngineeringMaterialExaminationForm =
this._formBuilder.group({
  noOfApproved: this._formBuilder.control<number | null>(null, [Validators.required]),
  noOfRejected: this._formBuilder.control<number | null>(null, [Validators.required]),
  noOfUnderReview: this._formBuilder.control<number | null>(null, [Validators.required]),
  notes: this._formBuilder.control<string | null>(null, [Validators.required]),
});

get controls() {
return this.licenseProjectEngineeringMaterialExaminationForm.controls;
}

licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
showValidation: boolean = false;
licenseProjectEngineeringMaterialExamination?: LicenseProjectEngineeringMaterialExaminationDto ;

  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectEngineeringWorksExamination();
  }


  getLicenseProjectEngineeringWorksExamination() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringMaterialExaminationObj().subscribe(res => {
        if (res) {
        
         this.licenseProjectEngineeringMaterialExamination=res as LicenseProjectEngineeringMaterialExaminationDto; 
         this.licenseProjectEngineeringMaterialExaminationForm.patchValue(this.licenseProjectEngineeringMaterialExamination as any)

        }
      })
    )
  }

  
  save(): void {
    
    if (!this.licenseProjectEngineeringMaterialExaminationForm.valid) {
      this.showValidation = true;
      return;
    }

    
    this.licenseProjectEngineeringMaterialExaminationCreateUpdate = this.licenseProjectEngineeringMaterialExaminationForm.value as {} as LicenseProjectEngineeringMaterialExaminationCreateUpdateDto;
    this.licenseProjectEngineeringMaterialExaminationCreateUpdate.id=this.licenseProjectEngineeringMaterialExamination?.id as string;
    this.licenseProjectEngineeringMaterialExaminationCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId=this.licenseProjectEngineeringMaterialExamination?.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;

    
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.saveLicenseProjectEngineeringMaterialExamination(this.licenseProjectEngineeringMaterialExaminationCreateUpdate).subscribe((res) => {

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
      this.licenseProjectEngineeringMaterialExaminationForm.valueChanges.subscribe(
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
