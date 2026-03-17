import { Component } from '@angular/core';
import { SysFundingTypeService } from '../../services/feasibilityStudyServices/sys-funding-type.service';
import { SysFundingTypeCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-funding-type-create-update-dto';
import { LicenseProjectExpectedFundingSourceCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-expected-funding-source-create-update-dto';
import { LicenseProjectExpectedFundingSourceService } from '../../services/feasibilityStudyServices/license-project-expected-funding-source.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectExpectedFundingSourceDto } from '../../models/feasibilityStudyDtos/license-project-expected-funding-source-dto';

@Component({
  selector: 'app-license-project-expected-funding-source-form',
  templateUrl: './license-project-expected-funding-source-form.component.html',
  styleUrls: ['./license-project-expected-funding-source-form.component.scss']
})
export class LicenseProjectExpectedFundingSourceFormComponent {
  subscriptions: Subscription[] = [];
  licenseProjectExpectedFundingSourceCreateUpdateDto: LicenseProjectExpectedFundingSourceCreateUpdateDto = new LicenseProjectExpectedFundingSourceCreateUpdateDto();
  licenseProjectExpectedFundingSourceForm = this._formBuilder.group({
    id: [''],
    licenseProjectFeasibilityStudyId: [''],
    fundingTypeId: [null as string | null, [Validators.required]],
    financingTypeDescription: ['', [Validators.required]],
    funderNationalNumber: ['', [Validators.required]],
    funderEmailAddress: ['', [Validators.required, Validators.email]],
    funderPhoneNumber: ['', [Validators.required]],
  })
  sysFundingTypes: SysFundingTypeCreateUpdateDto[] = [];
  showValidation: boolean = false;
  /**
 *
 */
  constructor(private _formBuilder: FormBuilder,
    private _licenseProjectExpectedFundingSourceService: LicenseProjectExpectedFundingSourceService,
    private _popupService: PopupService,
    private _sysFundingTypeService: SysFundingTypeService,
    private toastr: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getAllsysFundingTypes();
    this.getProjectAnnualBalanceSheetObj();
    this.observePopupEvents()
  }

  getProjectAnnualBalanceSheetObj(): void {
    this.subscriptions.push(
      this._licenseProjectExpectedFundingSourceService.getProjectExpectedFundingSourceObj().subscribe((exp: any) => {
        if (exp && exp.licenseProjectFeasibilityStudyId) {
          this.licenseProjectExpectedFundingSourceCreateUpdateDto = exp;
          this.licenseProjectExpectedFundingSourceForm.patchValue(this.licenseProjectExpectedFundingSourceCreateUpdateDto);
        }
      })
    )
  }

  getAllsysFundingTypes(): void {

    this.subscriptions.push(
      this._sysFundingTypeService.GetAll().subscribe((FundingTypes) => {
        this.sysFundingTypes = FundingTypes;
      })
    )
  }

  save(): void {
    if (!this.licenseProjectExpectedFundingSourceForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.licenseProjectExpectedFundingSourceForm?.markAllAsTouched();
      return;
    }
    if (this.controls.licenseProjectFeasibilityStudyId.value != "00000000-0000-0000-0000-000000000000") {
      this.licenseProjectExpectedFundingSourceCreateUpdateDto = this.licenseProjectExpectedFundingSourceForm.value as LicenseProjectExpectedFundingSourceCreateUpdateDto;
      this.licenseProjectExpectedFundingSourceCreateUpdateDto.id = this.licenseProjectExpectedFundingSourceCreateUpdateDto.id ? this.licenseProjectExpectedFundingSourceCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
      this.subscriptions.push(
        this._licenseProjectExpectedFundingSourceService.Save(this.licenseProjectExpectedFundingSourceCreateUpdateDto).subscribe(res => {
          if (res.isDone) {
            this._licenseProjectExpectedFundingSourceService.setExpectedFundingSourceList(res.data as LicenseProjectExpectedFundingSourceDto[]);
            this.toastr.success('تم الحفظ')
            this.closeDialog();
          }else{
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
    return this.licenseProjectExpectedFundingSourceForm.controls;
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
