import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectAnnualCashFlowDto } from '../../models/feasibilityStudyDtos/license-project-annual-cash-flow-dto';
import { LicenseProjectAnnualCashFlowCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-annual-cash-flow-create-update-dto';
import { LicenseProjectAnnualCashFlowService } from '../../services/feasibilityStudyServices/license-project-annual-cash-flow.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { SysYearCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-year-create-update-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SysYearService } from '../../services/feasibilityStudyServices/sys-year.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-statement-of-expected-annual-cash-flows-form',
  templateUrl: './statement-of-expected-annual-cash-flows-form.component.html',
  styleUrls: ['./statement-of-expected-annual-cash-flows-form.component.scss']
})
export class StatementOfExpectedAnnualCashFlowsFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectAnnualCashFlowCreateUpdateDto: LicenseProjectAnnualCashFlowCreateUpdateDto = new LicenseProjectAnnualCashFlowCreateUpdateDto();
  licenseProjectAnnualCashFlowForm = this._formBuilder.group({
    id: [''],
    licenseProjectFeasibilityStudyId: [''],
    yearId: [null as string | null, [Validators.required]],
    cashFlowsCollectedForTheProject: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    amountsCollectedFromOperationsSaleUnits: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalCashFlowsCollected: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    projectCashFlows: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    contractorPayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    marketingAndAdvertisingPayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    designPayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    supervisionPayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    paymentsOfAdministrativeAndGeneralFees: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    landCostPayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    pcPurchasePayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    zakatPayments: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    loanPaidToOwnerOfTheProjectExpectedFinancingFees: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalCashFlowPaid: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    netIncreaseDecreaseInCash: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    cashBalanceAtBeginningOfThePeriod: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    balanceOfCashAndCashEquivalentsAtTheEndOfThePeriod: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),

  })
  sysYears: SysYearCreateUpdateDto[] = [];
  showValidation: boolean = false;
  /**
 *
 */
  constructor(private _formBuilder: FormBuilder,
    private _licenseProjectAnnualCashFlowService: LicenseProjectAnnualCashFlowService,
    private _popupService: PopupService,
    private _sysYearService: SysYearService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _toastrService: ToastrService,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getAllsysYears();
    this.getProjectAnnualCashFlowObj();
    this.observePopupEvents();
  }

  getProjectAnnualCashFlowObj(): void {
    this.subscriptions.push(
      this._licenseProjectAnnualCashFlowService.getProjectAnnualCashFlowObj().subscribe((exp: any) => {
        if (exp && exp.licenseProjectFeasibilityStudyId) {
          this.licenseProjectAnnualCashFlowCreateUpdateDto = exp as LicenseProjectAnnualCashFlowDto;
          this.licenseProjectAnnualCashFlowForm.patchValue(this.licenseProjectAnnualCashFlowCreateUpdateDto);
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
    if (!this.licenseProjectAnnualCashFlowForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.licenseProjectAnnualCashFlowForm?.markAllAsTouched();
      return;
    }
    if (this.controls.licenseProjectFeasibilityStudyId.value != "00000000-0000-0000-0000-000000000000") {
      this.licenseProjectAnnualCashFlowCreateUpdateDto = this.licenseProjectAnnualCashFlowForm.value as LicenseProjectAnnualCashFlowCreateUpdateDto;
      this.licenseProjectAnnualCashFlowCreateUpdateDto.id = this.licenseProjectAnnualCashFlowCreateUpdateDto.id ? this.licenseProjectAnnualCashFlowCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
      this.subscriptions.push(
        this._licenseProjectAnnualCashFlowService.Save(this.licenseProjectAnnualCashFlowCreateUpdateDto).subscribe(res => {
          if (res.isDone) {
            this._licenseProjectAnnualCashFlowService.setAnnualCashFlowList(res.data as LicenseProjectAnnualCashFlowDto[]);
            this._toastrService.success('تم الحفظ');
            this.closeDialog();
          }
          else{
            this._toastrNotificationService.showError(res.message);
          }
        })
      )
    }
    else {
      this._toastrNotificationService.showError(" يجب ادخال بيانات دراسة الجدوى الخاصة بالمشروع أولا ");
    }
  }

  get controls() {
    return this.licenseProjectAnnualCashFlowForm.controls;
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
