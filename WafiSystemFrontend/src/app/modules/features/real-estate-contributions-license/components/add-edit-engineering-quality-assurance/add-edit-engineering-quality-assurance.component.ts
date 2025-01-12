import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateDto } from '../../models/license-project-engineering-monthly-consultant-staff-rates-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { QualityAndBusinessProgressService } from '../../services/quality-and-business-progress.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectEngineeringMonthlyConsultantStaffRatesDto } from '../../models/license-project-engineering-monthly-consultant-staff-rates-dto';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-engineering-quality-assurance',
  templateUrl: './add-edit-engineering-quality-assurance.component.html',
  styleUrls: ['./add-edit-engineering-quality-assurance.component.scss'],
})
export class AddEditEngineeringQualityAssuranceComponent {
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateList: LicenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateDto[] =
    [];
  currenrYear?: number;
  years?: number[];
  licenseProjectEngineeringMonthlyConsultantStaffRatesForm =
    this._formBuilder.group({
      currenrYear: [0],
      licenseProjectEngineeringMonthlyConsultantStaffRates:
        this._formBuilder.array([]),
    });
  get controls() {
    return this.licenseProjectEngineeringMonthlyConsultantStaffRatesForm
      .controls;
  }
  get licenseProjectEngineeringMonthlyConsultantStaffRatesFormArr() {
    return this.licenseProjectEngineeringMonthlyConsultantStaffRatesForm.get(
      'licenseProjectEngineeringMonthlyConsultantStaffRates'
    ) as FormArray;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;

  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _qualityAndBusinessProgressService: QualityAndBusinessProgressService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
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
            this.GetLicenseProjectEngineeringMonthlyConsultantStaffRates();
          }
        })
    );
  }

  GetLicenseProjectEngineeringMonthlyConsultantStaffRates(): void {
    this.licenseProjectEngineeringMonthlyConsultantStaffRatesForm.controls.currenrYear.setValue(
      this.currenrYear as number
    );
    this.subscriptions.push(
      this._qualityAndBusinessProgressService
        .GetLicenseProjectEngineeringMonthlyConsultantStaffRates(
          this.licenseProjectId as string,
          this.currenrYear as number
        )
        .subscribe(
          (
            res:
              | LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[]
              | null
          ) => {
            if (res && res.length > 0) {
              this.addValuesToArrayForm(
                res as LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[]
              );
            }
          }
        )
    );
  }
  save(): void {
    this.licenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateList =
      this.licenseProjectEngineeringMonthlyConsultantStaffRatesForm.controls
        .licenseProjectEngineeringMonthlyConsultantStaffRates
        .value as LicenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateDto[];
    if (
      this
        .licenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateList &&
      this.licenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateList
        .length > 0
    ) {
      this.licenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateList.forEach(
        (item) => {
          item.licenseProjectId = this.licenseProjectId as string;
        }
      );

      this.subscriptions.push(
        this._qualityAndBusinessProgressService
          .SaveLicenseProjectEngineeringMonthlyConsultantStaffRates(
            this
              .licenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateList
          )
          .subscribe((res) => {
            if (res || res == 0) {
              this._toastrNotificationService.showSuccess(
                'تم حفظ بيانات السنة'
              );
              this.GetLicenseProjectEngineeringMonthlyConsultantStaffRates();
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
    licenseProjectEngineeringMonthlyConsultantStaffRatesList: LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[]
  ) {
    this.licenseProjectEngineeringMonthlyConsultantStaffRatesForm.controls.licenseProjectEngineeringMonthlyConsultantStaffRates.clear();
    // set Values into FormArr
    licenseProjectEngineeringMonthlyConsultantStaffRatesList.forEach((item) => {
      let currentobj = this._formBuilder.group({
        id: item.id,
        licenseProjectUnitId: this.licenseProjectId,
        monthDate: item.monthDate,
        monthName: item.monthName,
        monthlyConsultantEngineerStaffAccordingPlan:
          item.monthlyConsultantEngineerStaffAccordingPlan,
        monthlyConsultantInspectorStaffAccordingPlan:
          item.monthlyConsultantInspectorStaffAccordingPlan,
      });
      this.licenseProjectEngineeringMonthlyConsultantStaffRatesFormArr.push(
        currentobj
      );
    });
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
