import { Component } from '@angular/core';
import { LicenseProjectFinancialIndicatorCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-financial-indicator-create-update-dto';
import { LicenseProjectFinancialIndicatorService } from '../../services/feasibilityStudyServices/license-project-financial-indicator.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { SysYearCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-year-create-update-dto';
import { SysYearService } from '../../services/feasibilityStudyServices/sys-year.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectFinancialIndicatorDto } from '../../models/feasibilityStudyDtos/license-project-financial-indicator-dto';

@Component({
  selector: 'app-license-project-financial-indicator-form',
  templateUrl: './license-project-financial-indicator-form.component.html',
  styleUrls: ['./license-project-financial-indicator-form.component.scss']
})
export class LicenseProjectFinancialIndicatorFormComponent {
  subscriptions: Subscription[] = [];
  licenseProjectFinancialIndicatorCreateUpdateDto: LicenseProjectFinancialIndicatorCreateUpdateDto = new LicenseProjectFinancialIndicatorCreateUpdateDto();
  licenseProjectFinancialIndicatorForm = this._formBuilder.group({
    id: [''],
    licenseProjectFeasibilityStudyId: [''],
    yearId: ['', [Validators.required]],
    totalProfit: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    netProfit: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    returnOnEquityInTheProject: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    returnOnProjectAssets: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    averageNetProfitLoss: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    assetsYearToYear: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    netRevenue: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    netIncreaseDecreaseInCashAndCashEquivalentsDuringTheFiscalYear: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    netPresentValue: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
  })
  sysYears: SysYearCreateUpdateDto[] = [];
  showValidation: boolean = false;
  /**
 *
 */
  constructor(private _formBuilder: FormBuilder,
    private _licenseProjectFinancialIndicatorService: LicenseProjectFinancialIndicatorService,
    private _popupService: PopupService,
    private _sysYearService: SysYearService,
    private toastr: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  ngOnInit(): void {
    this.getAllsysYears();
    this.getProjectAnnualBalanceSheetObj();
    this.observePopupEvents();
  }
  getProjectAnnualBalanceSheetObj(): void {
    this.subscriptions.push(
      this._licenseProjectFinancialIndicatorService.getProjectFinancialIndicatorObj().subscribe((exp: any) => {
        if (exp && exp.licenseProjectFeasibilityStudyId) {
          this.licenseProjectFinancialIndicatorCreateUpdateDto = exp;
          this.licenseProjectFinancialIndicatorForm.patchValue(this.licenseProjectFinancialIndicatorCreateUpdateDto);
        }
      })
    )
  }

  getAllsysYears(): void {
    this.subscriptions.push(
      this._sysYearService.GetAll().subscribe((years) => {
        this.sysYears = years;
      })
    )
  }

  save(): void {
    if (!this.licenseProjectFinancialIndicatorForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.licenseProjectFinancialIndicatorForm?.markAllAsTouched();
      return;
    }
    if (this.controls.licenseProjectFeasibilityStudyId.value != "00000000-0000-0000-0000-000000000000") {
      this.licenseProjectFinancialIndicatorCreateUpdateDto = this.licenseProjectFinancialIndicatorForm.value as LicenseProjectFinancialIndicatorCreateUpdateDto;
      this.licenseProjectFinancialIndicatorCreateUpdateDto.id = this.licenseProjectFinancialIndicatorCreateUpdateDto.id ? this.licenseProjectFinancialIndicatorCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
      this.subscriptions.push(
        this._licenseProjectFinancialIndicatorService.Save(this.licenseProjectFinancialIndicatorCreateUpdateDto).subscribe(res => {
          if (res.isDone) {
            this._licenseProjectFinancialIndicatorService.setFinancialIndicatorList(res.data as LicenseProjectFinancialIndicatorDto[]);
            this.toastr.success('تم الحفظ');
            this.closeDialog();
          }
          else {
            this._toastrNotificationService.showError(res.message)
          }
        })
      )
    }
    else {
      this._toastrNotificationService.showError(" يجب ادخال بيانات دراسة الجدوى الخاصة بالمشروع أولا ");
    }
  }

  get controls() {
    return this.licenseProjectFinancialIndicatorForm.controls;
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    )
  }
}
