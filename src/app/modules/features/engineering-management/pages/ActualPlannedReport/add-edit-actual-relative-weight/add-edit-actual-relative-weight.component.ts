import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { ConstructionWorkStatusCreateUpdateDto } from '../../../models/construction-work-status-create-update-dto';
import { ConstructionWorkStatusActualDto } from '../../../models/construction-work-status-actual-dto';
import { LicenseProjectEngineeringActualRelativeWeightDto } from '../../../models/license-project-engineering-actual-relative-weight-dto';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../../services/engineering-supervision-report-actual-quality-and-business.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
@Component({
  selector: 'app-add-edit-actual-relative-weight',
  templateUrl: './add-edit-actual-relative-weight.component.html',
  styleUrls: ['./add-edit-actual-relative-weight.component.scss'],
})
export class AddEditActualRelativeWeightComponent {
  subscriptions: Subscription[] = [];
  actualValueReport?: ActualValueReportPagingListDto;
  constructionWorkStatusCreateUpdate?: ConstructionWorkStatusCreateUpdateDto;
  licenseProjectEngineeringConstructionWorkStatusForm = this._formBuilder.group(
    {
      actualMonthlyPlannedCompletionPercentage: this._formBuilder.control<
        number | null
      >(null, [Validators.required]),
      notes: this._formBuilder.control<string | null>(null, [
        Validators.required,
      ]),
    }
  );
  totalContrastCompletionRateColor?: string;
  contrastCompletionRateColor?: string;
  get controls() {
    return this.licenseProjectEngineeringConstructionWorkStatusForm.controls;
  }
  monthDate?: any;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  constructionWorkStatusActual?: ConstructionWorkStatusActualDto;
  licenseProjectEngineeringActualRelativeWeight?: LicenseProjectEngineeringActualRelativeWeightDto;

  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService
  ) {}

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();

    if (this.licenseProjectId) this.getmonthDate();
  }
  getmonthDate() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService
        .getmonthDate()
        .subscribe((res) => {
          if (res) {
            this.actualValueReport = res as ActualValueReportPagingListDto;
            this.monthDate = this.actualValueReport.monthDate as Date;
            this.getLicenseProjectEngineeringActualRelativeWeight();
          }
        })
    );
  }

  getLicenseProjectEngineeringActualRelativeWeight() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService
        .getLicenseProjectEngineeringActualRelativeWeightObj()
        .subscribe((res) => {
          if (res) {
            this.licenseProjectEngineeringActualRelativeWeight =
              res as LicenseProjectEngineeringActualRelativeWeightDto;
            this.getlicenseProjectActualRelativeWeightDetails();
          }
        })
    );
  }
  getlicenseProjectActualRelativeWeightDetails() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService
        .getLicenseProjectActualRelativeWeightDetails(
          this.licenseProjectId as string,
          this.licenseProjectEngineeringActualRelativeWeight
            ?.licenseRelativeWeightId as string,
          this.monthDate as Date
        )
        .subscribe((res) => {
          if (res) {
            this.constructionWorkStatusActual =
              res as ConstructionWorkStatusActualDto;
            if (
              this.constructionWorkStatusActual &&
              this.constructionWorkStatusActual.totalContrastCompletionRate < 0
            )
              this.totalContrastCompletionRateColor = 'red';
            if (
              this.constructionWorkStatusActual &&
              this.constructionWorkStatusActual.contrastCompletionRate < 0
            )
              this.contrastCompletionRateColor = 'red';
            this.licenseProjectEngineeringConstructionWorkStatusForm.patchValue(
              this.constructionWorkStatusActual as any
            );
          }
        })
    );
  }

  save(): void {
    if (!this.licenseProjectEngineeringConstructionWorkStatusForm.valid) {
      this.showValidation = true;
      return;
    }

    this.constructionWorkStatusCreateUpdate = this
      .licenseProjectEngineeringConstructionWorkStatusForm
      .value as {} as ConstructionWorkStatusCreateUpdateDto;
    this.constructionWorkStatusCreateUpdate.id = this
      .constructionWorkStatusActual?.id as string;
    this.constructionWorkStatusCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId =
      this.constructionWorkStatusActual
        ?.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;

    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService
        .savelicenseProjectAcualRelativeWeightRates(
          this.constructionWorkStatusCreateUpdate
        )
        .subscribe((res) => {
          if (res?.isDone) {
            this._engineeringSupervisionReportActualQualityAndBusinessService.submitSuccessfullyEventEmitter.emit();
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialog();
          }
        })
    );
  }
  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringConstructionWorkStatusForm.valueChanges.subscribe(
        (changes) => {}
      )
    );
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.save();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
