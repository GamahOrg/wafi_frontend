import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto } from '../../models/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto } from '../../models/master-license-project-engineering-supervision-planned-details-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailDto } from '../../models/master-license-project-engineering-supervision-planned-report-dto';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-engineering-infrastructure-rates',
  templateUrl: './add-edit-engineering-infrastructure-rates.component.html',
  styleUrls: ['./add-edit-engineering-infrastructure-rates.component.scss'],
})
export class AddEditEngineeringInfrastructureRatesComponent {
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
    this.observelicenseProjectEngineeringSupervisionPlannedReport();
    this.observePopupEvents();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetLicenseProjectEngineeringDetails();
    }
  }
  GetLicenseProjectEngineeringDetails() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringDetails(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.years = this.getYearsBetween(
              new Date(res.startOn),
              new Date(res.endOn)
            );
            if (this.years && this.years.length != 0 && !this.currenrYear)
              this.currenrYear = this.years[0] as number;
            this.getLicenseProjectEngineeringInfrastructureRates();
          }
        })
    );
  }

  getLicenseProjectEngineeringInfrastructureRates(): void {
    this.licenseProjectEngineeringSupervisionPlannedReportForm.controls.currenrYear.setValue(
      this.currenrYear as number
    );
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringInfrastructureRates(
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
          .SaveLicenseProjectEngineeringInfrastructureRates(
            this
              .licenseProjectEngineeringSupervisionPlannedReportDetailList as LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[]
          )
          .subscribe((res) => {
            if (res || res == 0) {
              this._toastrNotificationService.showSuccess(
                'تم حفظ بيانات السنة'
              );
              this.getLicenseProjectEngineeringInfrastructureRates();
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
            (licenseProjectEngineeringSupervisionPlannedReportDetail) =>
              licenseProjectEngineeringSupervisionPlannedReportDetail.monthDate ===
              item.monthDate
          );

        if (
          item.id == '00000000-0000-0000-0000-000000000000' ||
          item.infrastructureMonthlyPlannedCompletionRate == null ||
          item.infrastructureMonthlyPlannedCompletionRate == 0
        )
          cumulativeAmountPriorToThatYear = 0;
        if (currentIndex == 0) {
          let firstObj =
            licenseProjectEngineeringSupervisionPlannedReportDetailList[
              currentIndex
            ];
          firstObj.cumulativeplannedcompletionpercentage =
            (item.infrastructureMonthlyPlannedCompletionRate as number) +
            cumulativeAmountPriorToThatYear;
        } else {
          let lastobj =
            licenseProjectEngineeringSupervisionPlannedReportDetailList[
              currentIndex - 1
            ];
          item.cumulativeplannedcompletionpercentage =
            (item.infrastructureMonthlyPlannedCompletionRate as number) +
            (lastobj.cumulativeplannedcompletionpercentage as number);
        }
        let currentobj = this._formBuilder.group({
          id: item.id,
          licenseProjectUnitId: this.licenseProjectId,
          monthDate: item.monthDate,
          monthName: item.monthName,
          infrastructureMonthlyPlannedCompletionRate:
            item.infrastructureMonthlyPlannedCompletionRate,
          cumulativeplannedcompletionpercentage:
            item.cumulativeplannedcompletionpercentage,
        });
        this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr.push(
          currentobj
        );
      }
    );
  }

  private observelicenseProjectEngineeringSupervisionPlannedReport() {
    this.subscriptions.push(
      this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr.valueChanges.subscribe(
        (Arr) => {
          console.log(Arr);
          Arr.forEach((item: any) => {
            if (item && item.infrastructureMonthlyPlannedCompletionRate) {
              let currentIndex = Arr.findIndex(
                (
                  licenseProjectEngineeringSupervisionPlannedReportDetail: any
                ) =>
                  licenseProjectEngineeringSupervisionPlannedReportDetail.monthDate ===
                  item.monthDate
              ) as number;
              let newValue = Arr[currentIndex];
              if (currentIndex == 0)
                newValue.cumulativeplannedcompletionpercentage =
                  (item.infrastructureMonthlyPlannedCompletionRate as number) +
                  (this.cumulativeAmountPriorToThatYear as number);
              else {
                let lastValue = Arr[currentIndex - 1];
                newValue.cumulativeplannedcompletionpercentage =
                  (item.infrastructureMonthlyPlannedCompletionRate as number) +
                  (lastValue.cumulativeplannedcompletionpercentage as number);
              }
              this.licenseProjectEngineeringSupervisionPlannedReportDetailsFormArr
                .at(currentIndex)
                .patchValue(newValue, { emitEvent: false });
            }
          });
        }
      )
    );
  }
  // popup
  observePopupEvents(): void {
    this.observeconfirmAction();
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.save();
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
