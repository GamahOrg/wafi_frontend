import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { LicenseProjectEngineeringWorksExaminationCreateUpdateDto, LicenseProjectEngineeringWorksExaminationPagingDto } from '../../../models/license-project-engineering-works-examination-paging-dto';
import { LicenseProjectEngineeringWorksExaminationDetails, SysLicenseProjectEngineeringWorksDto } from '../../../models/license-project-engineering-works-examination-details';
import { LicenseProjectEngineeringActualQualityPlanAndAssuranceDto } from '../../../models/license-project-engineering-actual-quality-plan-and-assurance-dto';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../../services/engineering-supervision-report-actual-quality-and-business.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-add-edit-actual-quality-control',
  templateUrl: './add-edit-actual-quality-control.component.html',
  styleUrls: ['./add-edit-actual-quality-control.component.scss']
})
export class AddEditActualQualityControlComponent {
  subscriptions: Subscription[] = [];
  actualValueReport?: ActualValueReportPagingListDto;
  licenseProjectEngineeringWorksExaminationCreateUpdate?: LicenseProjectEngineeringWorksExaminationCreateUpdateDto;
  licenseProjectEngineeringSupervisionActualQualityControlForm =
    this._formBuilder.group({
      sysLicenseProjectEngineeringWorksId: this._formBuilder.control<string | null>(null, [Validators.required]),
      noOfApproved: this._formBuilder.control<number | null>(null, [Validators.required]),
      noOfRejected: this._formBuilder.control<number | null>(null, [Validators.required]),
      noOfUnderReview: this._formBuilder.control<number | null>(null, [Validators.required]),
      notes: this._formBuilder.control<string | null>(null, [Validators.required]),
    });

  get controls() {
    return this.licenseProjectEngineeringSupervisionActualQualityControlForm.controls;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  monthDate?: Date;
  showValidation: boolean = false;
  showUI: boolean = false;
  licenseProjectEngineeringWorksList?: SysLicenseProjectEngineeringWorksDto[]
  licenseProjectEngineeringWorksExamination?: LicenseProjectEngineeringWorksExaminationPagingDto;
  licenseProjectEngineeringWorksExaminationDetails?: LicenseProjectEngineeringWorksExaminationDetails;
  licenseProjectEngineeringActualQualityPlanAndAssurance?: LicenseProjectEngineeringActualQualityPlanAndAssuranceDto;

  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,

  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getSysLicenseProjectEngineeringWorkList();
    this.getLicenseProjectIdStorage();

  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    debugger;
    if (this.licenseProjectId)
      this.getmonthDate()
  }
  getmonthDate() {
    debugger;
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        debugger;
        if (res) {
          debugger;
          this.actualValueReport = res as ActualValueReportPagingListDto;
          this.monthDate = this.actualValueReport.monthDate as Date;
          this.getLicenseProjectEngineeringWorksExamination();
        }
      })
    )
  }


  getSysLicenseProjectEngineeringWorkList() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getSysLicenseProjectEngineeringWorkList().subscribe(res => {
        if (res) {

          this.licenseProjectEngineeringWorksList = res as SysLicenseProjectEngineeringWorksDto[];

        }
      })
    )
  }

  getLicenseProjectEngineeringWorksExamination() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringWorksExamination().subscribe(res => {
        if (res) {

          this.licenseProjectEngineeringWorksExamination = res as LicenseProjectEngineeringWorksExaminationPagingDto;
          if (this.licenseProjectEngineeringWorksExamination && this.licenseProjectEngineeringWorksExamination.id) {
            this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringWorksExaminationDetails(this.licenseProjectId as string,
              this.licenseProjectEngineeringWorksExamination.licenseProjectEngineeringSupervisionPlannedReportDetailId as string,
              this.licenseProjectEngineeringWorksExamination.sysLicenseProjectEngineeringWorksId as string
            ).subscribe(res => {
              debugger;
              if (res) {
                debugger;
                this.showUI = true;
                this.licenseProjectEngineeringWorksExaminationDetails = res as LicenseProjectEngineeringWorksExaminationDetails;
                this.licenseProjectEngineeringSupervisionActualQualityControlForm.patchValue(this.licenseProjectEngineeringWorksExaminationDetails as any)

              }
            })
          }
          else
            this.showUI = false;

        }
      })
    )
  }
  onChangeLicenseProjectEngineeringWorks(event: any) {
    debugger;
    let sysLicenseProjectEngineeringWorksId = event.target.value;

    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringActualQualityPlanAndAssuranceObj().subscribe(res => {
        if (res) {
          debugger;
          this.licenseProjectEngineeringActualQualityPlanAndAssurance = res as LicenseProjectEngineeringActualQualityPlanAndAssuranceDto;
          if (this.licenseProjectEngineeringActualQualityPlanAndAssurance && this.licenseProjectEngineeringActualQualityPlanAndAssurance.id) {
            this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringWorksExaminationDetails(this.licenseProjectId as string,
              this.licenseProjectEngineeringActualQualityPlanAndAssurance.id as string,
              sysLicenseProjectEngineeringWorksId as string
            ).subscribe(res => {
              debugger;
              if (res) {
                debugger;
                this.showUI = true;
                this.licenseProjectEngineeringWorksExaminationDetails = res as LicenseProjectEngineeringWorksExaminationDetails;
                this.licenseProjectEngineeringSupervisionActualQualityControlForm.patchValue(this.licenseProjectEngineeringWorksExaminationDetails as any)
              }
            })
          }
          else
            this.showUI = false;

        }
      })
    )
  }

  save(): void {
    debugger;
    if (!this.licenseProjectEngineeringSupervisionActualQualityControlForm.valid) {
      this.showValidation = true;
      return;
    }

    debugger;
    this.licenseProjectEngineeringWorksExaminationCreateUpdate = this.licenseProjectEngineeringSupervisionActualQualityControlForm.value as {} as LicenseProjectEngineeringWorksExaminationCreateUpdateDto;
    this.licenseProjectEngineeringWorksExaminationCreateUpdate.id = this.licenseProjectEngineeringWorksExamination?.id as string;
    if (this.licenseProjectEngineeringWorksExamination?.licenseProjectEngineeringSupervisionPlannedReportDetailId)
      this.licenseProjectEngineeringWorksExaminationCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.licenseProjectEngineeringWorksExamination?.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;
    else
      this.licenseProjectEngineeringWorksExaminationCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.licenseProjectEngineeringActualQualityPlanAndAssurance?.id as string;

    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.saveLicenseProjectEngineeringWorksExamination(this.licenseProjectEngineeringWorksExaminationCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._engineeringSupervisionReportActualQualityAndBusinessService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  /*  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
     this.subscriptions.push(
       this.licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm.valueChanges.subscribe(
         (changes) => {
   }))} */
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
