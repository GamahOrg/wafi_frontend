import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { ActualValueReportService } from '../../../services/actual-value-report.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';


@Component({
  selector: 'app-update-month-submitted',
  templateUrl: './update-month-submitted.component.html',
  styleUrls: ['./update-month-submitted.component.scss']
})
export class UpdateMonthSubmittedComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  updateMonthSubmittedForm = this._formBuilder.group({
    actualValueReportId:this._formBuilder.control<string | null>(null, [Validators.required]),
  });
  actualValueReportList?: ActualValueReportPagingListDto[]
  showValidation:boolean=false;
  get controls() {
    return this.updateMonthSubmittedForm.controls;
  }

  constructor(
    private _actualValueReportService: ActualValueReportService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();

  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getActualLookUpValues();
    }
  }
  private getActualLookUpValues() {
    this.subscriptions.push(
      this._actualValueReportService.getActualLookUpValues(this.licenseProjectId as string).subscribe((res) => {
        this.actualValueReportList=res as ActualValueReportPagingListDto[];
     
  }))
  }


 

  save(): void {
  
    if (!this.updateMonthSubmittedForm.valid )
      {
      this.showValidation = true;
      return;
      }
    this.subscriptions.push(
      this._actualValueReportService.updateMonthSubmitted(this.updateMonthSubmittedForm.value.actualValueReportId as string).subscribe((res) => {
       
        if (res) {
          this._actualValueReportService.submitSuccessfullyEventEmitter.emit()
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
