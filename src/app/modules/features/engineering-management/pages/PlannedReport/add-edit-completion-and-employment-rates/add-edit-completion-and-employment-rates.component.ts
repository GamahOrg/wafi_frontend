import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto } from '../../../models/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../../services/license-project-engineering-supervision-planned-report-detail.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto } from '../../../models/master-license-project-engineering-supervision-planned-details-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailDto } from '../../../models/master-license-project-engineering-supervision-planned-report-dto';

@Component({
  selector: 'app-add-edit-completion-and-employment-rates',
  templateUrl: './add-edit-completion-and-employment-rates.component.html',
  styleUrls: ['./add-edit-completion-and-employment-rates.component.scss'],
})
export class AddEditCompletionAndEmploymentRatesComponent {
  showRateFlag: boolean = true;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringSupervisionPlannedReportDetailList?: LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[];
  currenrYear?: number;
  years?: number[];
  cumulativeAmountPriorToThatYear?: number;
  constructionCostBeforeThisYear?: number;
  expectedConstructionCost: number = 0;
  isExpectedConstructionCostError = false;
  expectedConstructionCostDuringMonthValue: number = 0;
  licenseProjectEngineeringSupervisionPlannedReportForm =
    this._formBuilder.group({
      currenrYear: [0],
      licenseProjectEngineeringSupervisionPlannedReportDetails:
        this._formBuilder.array([]),
    });
  get controls() {
    return this.licenseProjectEngineeringSupervisionPlannedReportForm.controls;
  }
  get licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr() {
    return this.licenseProjectEngineeringSupervisionPlannedReportForm.get(
      'licenseProjectEngineeringSupervisionPlannedReportDetails'
    ) as FormArray;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;

  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observelicenseProjectEngineeringSupervisionPlannedReportForm();
    this.observePopupEvents();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetByLicenseProjectId();
    }
  }

  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringDetails(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.showRateFlag = true;
            this.expectedConstructionCost = res.expectedConstructionCost;
            this.years = this.getYearsBetween(
              new Date(res.contractualStartDate),
              new Date(res.contractualFinishDate)
            );
            this.getLicenseProjectEngineeringCompletionAndEmploymentRates();
          } else this.showRateFlag = false;
        })
    );
  }

  getLicenseProjectEngineeringCompletionAndEmploymentRates(): void {
    if (this.years && this.years.length != 0 && !this.currenrYear)
      this.currenrYear = this.years[0] as number;
    this.licenseProjectEngineeringSupervisionPlannedReportForm.controls.currenrYear.setValue(
      this.currenrYear as number
    );
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringCompletionAndEmploymentRates(
          this.licenseProjectId as string,
          this.currenrYear as number
        )
        .subscribe(
          (
            res: MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto | null
          ) => {
            if (res && res.licenseProjectEngineeringSupervisionPlannedReportDetails.length > 0) {
              this.cumulativeAmountPriorToThatYear = res.cumulativeAmountPriorToThatYear;
              this.constructionCostBeforeThisYear = res.constructionCostBeforeThisYear;
              this.addValuesToArrayForm(
                res.licenseProjectEngineeringSupervisionPlannedReportDetails,
                res.cumulativeAmountPriorToThatYear,
                res.constructionCostBeforeThisYear
              );
            }
          }
        )
    );
  }

  save(): void {
    if (this.expectedConstructionCostDuringMonthValue > this.expectedConstructionCost) {
      this._toastrNotificationService.showError('التكلفة الانشائية المتوقعة التراكمية أكبر من التكلفة الانشائية للمشروع');
      return;
    }

    this.licenseProjectEngineeringSupervisionPlannedReportDetailList = this
      .licenseProjectEngineeringSupervisionPlannedReportForm.controls
      .licenseProjectEngineeringSupervisionPlannedReportDetails
      .value as LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[];
    if (
      this.licenseProjectEngineeringSupervisionPlannedReportDetailList &&
      this.licenseProjectEngineeringSupervisionPlannedReportDetailList.length >
      0
    ) {
      this.licenseProjectEngineeringSupervisionPlannedReportDetailList.forEach(
        (item) => {
          item.licenseProjectId = this.licenseProjectId as string;
        }
      );

      this.subscriptions.push(
        this._licenseProjectEngineeringSupervisionPlannedReportDetailService
          .SaveLicenseProjectEngineeringCompletionAndEmploymentRates(
            this
              .licenseProjectEngineeringSupervisionPlannedReportDetailList as LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[]
          )
          .subscribe((res) => {
            if (res || res == 0) {
              this._toastrNotificationService.showSuccess(
                'تم حفظ بيانات السنة'
              );
              this.getLicenseProjectEngineeringCompletionAndEmploymentRates();
            }
          })
      );
    }
  }

  onChangeYear(data: any) {
    this.currenrYear = Number(data.target.value);
    this.save();
  }

  getYearsBetween(startDate: Date, endDate: Date): number[] {
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    years.sort((a, b) => a - b); // Sort in ascending order
    return years;
  }

  addValuesToArrayForm(
    licenseProjectEngineeringSupervisionPlannedReportDetailList: LicenseProjectEngineeringSupervisionPlannedReportDetailDto[],
    cumulativeAmountPriorToThatYear: number, constructionCostBeforeThisYear: number
  ) {

    this.licenseProjectEngineeringSupervisionPlannedReportForm.controls.licenseProjectEngineeringSupervisionPlannedReportDetails.clear();
    // Caculate the cumulative planned completionper centage
    licenseProjectEngineeringSupervisionPlannedReportDetailList.forEach(
      (item) => {
        let currentIndex =
          licenseProjectEngineeringSupervisionPlannedReportDetailList.findIndex(
            (x: any) => x.monthDate === item.monthDate
          );

        if (item.id == '00000000-0000-0000-0000-000000000000' || item.projectMonthlyPlannedCompletionRate == null ||
          item.projectMonthlyPlannedCompletionRate == 0)
          cumulativeAmountPriorToThatYear = this.cumulativeAmountPriorToThatYear as number;

        if (item.id == '00000000-0000-0000-0000-000000000000' || item.projectMonthlyPlannedMonthCost == null ||
          item.projectMonthlyPlannedMonthCost == 0)
          constructionCostBeforeThisYear = this.constructionCostBeforeThisYear as number;

        if (currentIndex == 0) {
          let firstObj =
            licenseProjectEngineeringSupervisionPlannedReportDetailList[
            currentIndex
            ];
          firstObj.cumulativeplannedcompletionpercentage =
            (item.projectMonthlyPlannedCompletionRate as number) +
            cumulativeAmountPriorToThatYear;

          firstObj.expectedConstructionCostDuringMonth =
            (item.projectMonthlyPlannedMonthCost as number) +
            constructionCostBeforeThisYear;
          if (isNaN(firstObj.expectedConstructionCostDuringMonth))
            firstObj.expectedConstructionCostDuringMonth = 0;

        } else {
          let lastobj =
            licenseProjectEngineeringSupervisionPlannedReportDetailList[
            currentIndex - 1
            ];
          item.cumulativeplannedcompletionpercentage =
            (item.projectMonthlyPlannedCompletionRate as number) +
            (lastobj.cumulativeplannedcompletionpercentage as number);

          item.expectedConstructionCostDuringMonth =
            (item.projectMonthlyPlannedMonthCost as number) +
            (lastobj.expectedConstructionCostDuringMonth as number);

          if (isNaN(item.expectedConstructionCostDuringMonth) || item.expectedConstructionCostDuringMonth == 0)
            item.expectedConstructionCostDuringMonth = 0;
        }

        let currentobj = this._formBuilder.group({
          id: item.id,
          licenseProjectUnitId: this.licenseProjectId,
          monthDate: item.monthDate,
          monthName: item.monthName,
          projectMonthlyPlannedCompletionRate: item.projectMonthlyPlannedCompletionRate,
          monthlyTotalPlannedEmployees: item.monthlyTotalPlannedEmployees,
          cumulativeplannedcompletionpercentage: item.cumulativeplannedcompletionpercentage,
          projectMonthlyPlannedMonthCost: item.projectMonthlyPlannedMonthCost,
          expectedConstructionCostDuringMonth: item.expectedConstructionCostDuringMonth ?? 0
        });

        this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr.push(
          currentobj
        );
      }
    );
  }

  private observelicenseProjectEngineeringSupervisionPlannedReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringSupervisionPlannedReportForm.valueChanges.subscribe(
        (changes) => {
          this.observelicenseProjectEngineeringSupervisionPlannedReport();
        }
      )
    );
  }

  private observelicenseProjectEngineeringSupervisionPlannedReport() {
    const projectMonthlyPlannedCompletionRateArray =
      this.licenseProjectEngineeringSupervisionPlannedReportForm.get(
        'licenseProjectEngineeringSupervisionPlannedReportDetails'
      ) as FormArray;

    projectMonthlyPlannedCompletionRateArray.valueChanges.subscribe((Arr) => {
      // console.log(Arr);
      for (let index = 0; index < Arr.length; index++) {
        const item = Arr[index];
        if (item && item.projectMonthlyPlannedCompletionRate) {
          let currentIndex = Arr.findIndex(
            (x: any) => x.monthDate === item.monthDate
          ) as number;
          let newValue = Arr[currentIndex];
          if (currentIndex == 0)
            newValue.cumulativeplannedcompletionpercentage =
              (item.projectMonthlyPlannedCompletionRate as number) +
              (this.cumulativeAmountPriorToThatYear as number);
          else {
            let lastValue = Arr[currentIndex - 1];
            newValue.cumulativeplannedcompletionpercentage =
              (item.projectMonthlyPlannedCompletionRate as number) +
              (lastValue.cumulativeplannedcompletionpercentage as number);
          }

          // Update current item
          this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr
            .at(currentIndex)
            .patchValue(newValue, { emitEvent: false });

          // Update all subsequent items (cascade the cumulative values)
          for (let i = currentIndex + 1; i < Arr.length; i++) {
            let subsequentItem = Arr[i];
            let previousCumulative = Arr[i - 1].cumulativeplannedcompletionpercentage || 0;
            let monthlyRate = subsequentItem.projectMonthlyPlannedCompletionRate || 0;

            subsequentItem.cumulativeplannedcompletionpercentage =
              (monthlyRate as number) + (previousCumulative as number);

            this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr
              .at(i)
              .patchValue(subsequentItem, { emitEvent: false });
          }

        }

        if (item && item.projectMonthlyPlannedMonthCost) {
          let currentIndex = Arr.findIndex(
            (x: any) => x.monthDate === item.monthDate
          ) as number;
          let newValue = Arr[currentIndex];
          if (currentIndex == 0)
            newValue.expectedConstructionCostDuringMonth =
              (item.projectMonthlyPlannedMonthCost as number) +
              (this.constructionCostBeforeThisYear as number);
          else {
            let lastValue = Arr[currentIndex - 1];
            newValue.expectedConstructionCostDuringMonth =
              (item.projectMonthlyPlannedMonthCost as number) +
              (lastValue.expectedConstructionCostDuringMonth as number);
          }

          this.expectedConstructionCostDuringMonthValue = newValue.expectedConstructionCostDuringMonth;
          if (newValue.expectedConstructionCostDuringMonth > this.expectedConstructionCost && !this.isExpectedConstructionCostError) {
            this.isExpectedConstructionCostError = true;
            this._toastrNotificationService.showError('التكلفة الانشائية المتوقعة التراكمية أكبر من التكلفة الانشائية للمشروع');
            return;
          }

          // Update current item
          this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr
            .at(currentIndex)
            .patchValue(newValue, { emitEvent: false });

          // Update all subsequent items (cascade the cumulative values)
          for (let i = currentIndex + 1; i < Arr.length; i++) {
            let subsequentItem = Arr[i];
            let previousCumulative = Arr[i - 1].expectedConstructionCostDuringMonth || 0;
            let monthlyRate = subsequentItem.projectMonthlyPlannedMonthCost || 0;

            subsequentItem.expectedConstructionCostDuringMonth =
              (monthlyRate as number) + (previousCumulative as number);

            this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr
              .at(i)
              .patchValue(subsequentItem, { emitEvent: false });
          }
        }

      }
    });
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
