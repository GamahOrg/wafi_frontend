import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto } from '../../dataModels/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailDto } from '../../dataModels/master-license-project-engineering-supervision-planned-report-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto } from '../../dataModels/master-license-project-engineering-supervision-planned-details-dto';
import { PopupData } from 'src/app/shared/models/popup.model';

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
  ) {}

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
            this.years = this.getYearsBetween(
              new Date(res.startOn),
              new Date(res.endOn)
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
            if (
              res &&
              res.licenseProjectEngineeringSupervisionPlannedReportDetails
                .length > 0
            ) {
              this.cumulativeAmountPriorToThatYear =
                res.cumulativeAmountPriorToThatYear;
              this.addValuesToArrayForm(
                res.licenseProjectEngineeringSupervisionPlannedReportDetails,
                res.cumulativeAmountPriorToThatYear
              );
            }
          }
        )
    );
  }
  save(): void {
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
    cumulativeAmountPriorToThatYear: number
  ) {
    this.licenseProjectEngineeringSupervisionPlannedReportForm.controls.licenseProjectEngineeringSupervisionPlannedReportDetails.clear();
    // Caculate the cumulative planned completionper centage
    licenseProjectEngineeringSupervisionPlannedReportDetailList.forEach(
      (item) => {
        let currentIndex =
          licenseProjectEngineeringSupervisionPlannedReportDetailList.findIndex(
            (x: any) => x.monthDate === item.monthDate
          );

        if (
          item.id == '00000000-0000-0000-0000-000000000000' ||
          item.projectMonthlyPlannedCompletionRate == null ||
          item.projectMonthlyPlannedCompletionRate == 0
        )
          cumulativeAmountPriorToThatYear = 0;
        if (currentIndex == 0) {
          let firstObj =
            licenseProjectEngineeringSupervisionPlannedReportDetailList[
              currentIndex
            ];
          firstObj.cumulativeplannedcompletionpercentage =
            (item.projectMonthlyPlannedCompletionRate as number) +
            cumulativeAmountPriorToThatYear;
        } else {
          let lastobj =
            licenseProjectEngineeringSupervisionPlannedReportDetailList[
              currentIndex - 1
            ];
          item.cumulativeplannedcompletionpercentage =
            (item.projectMonthlyPlannedCompletionRate as number) +
            (lastobj.cumulativeplannedcompletionpercentage as number);
        }
        let currentobj = this._formBuilder.group({
          id: item.id,
          licenseProjectUnitId: this.licenseProjectId,
          monthDate: item.monthDate,
          monthName: item.monthName,
          projectMonthlyPlannedCompletionRate:
            item.projectMonthlyPlannedCompletionRate,
          monthlyTotalPlannedEmployees: item.monthlyTotalPlannedEmployees,
          cumulativeplannedcompletionpercentage:
            item.cumulativeplannedcompletionpercentage,
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
      console.log(Arr);
      Arr.forEach((item: any) => {
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
          this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr
            .at(currentIndex)
            .patchValue(newValue, { emitEvent: false });
        }
      });
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
