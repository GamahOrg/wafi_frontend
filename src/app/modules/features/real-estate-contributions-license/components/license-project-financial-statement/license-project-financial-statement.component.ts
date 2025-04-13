import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectFinancialStatementDto } from '../../models/LicenseProjectFinancialStatementDto';
import { Subscription } from 'rxjs';
import { LicenseFinancialStatmenentService } from '../../services/licenseFinancialStatmenentService/LicenseFinancialStatmenent.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-license-project-financial-statement',
  templateUrl: './license-project-financial-statement.component.html',
  styleUrls: ['./license-project-financial-statement.component.scss']
})
export class LicenseProjectFinancialStatementComponent implements OnInit, OnDestroy{
  financialStatement: LicenseProjectFinancialStatementDto = new LicenseProjectFinancialStatementDto();
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;

  subscriptions: Subscription[] = [];

  localization = {
    title: "البيان المالي لمشروع الترخيص",
    projectCost: "سعر المشروع",
    projectSaleEstimatedValue: "القيمة التقديرية لبيع المشروع",
    cashSources: "المصادر النقدية",
    prepaidCost: "تكلفة الدفع المسبق",
    deficitCoveragePlanAndWaysToFinanceTheProject: "خطة تغطية العجز وطرق تمويل المشروع",
    landPrice: "سعر الأرض",
    financialObligations: "الالتزامات المالية",
    marketingPlanAndTargetSegment: "خطة التسويق والقطاع المستهدف",
    expectedConstructionCost: "تكلفة البناء المتوقعة",
    expectedProfitMargin: "هامش الربح المتوقع",

    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ كمسودة',
    savedSuccessfully: 'تم الحفظ',
    numberPattern: 'من فضلك ادخل رقم صحيح',
    send: "إرسال الطلب",
    next: 'التالي',
    PleaseAddAllRequiredFields:
      'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  }

  licenseFinancialStatmenentForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    projectCost: [0, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]],
    projectSaleEstimatedValue: [0, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]],
    cashSources: ['', [Validators.required]],
    prepaidCost: [0, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]],
    deficitCoveragePlanAndWaysToFinanceTheProject: ['', [Validators.required,]],
    landPrice: [0, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]],
    financialObligations: ['', [Validators.required]],
    marketingPlanAndTargetSegment: ['', [Validators.required]],
    expectedConstructionCost: [0, [Validators.pattern(Configuration.validators.numberOnly)]],
    expectedProfitMargin: [0, [Validators.pattern(Configuration.validators.numberOnly)]],
    licenseProjectId:['', [Validators.required]],
  })

  get controls() {
    return this.licenseFinancialStatmenentForm.controls;
  }

  constructor(
    private _licenseFinancialStatmenentService: LicenseFinancialStatmenentService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    public _toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
    ) { }


  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getFinancialStatement();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  getFinancialStatement(): void {
    this.subscriptions.push(
      this._licenseFinancialStatmenentService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe((res:any) => {
        if(res)  
          this.setResponseToForm(res.data as LicenseProjectFinancialStatementDto);
      })
    )
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  setResponseToForm(res: any): void {
    if(res)
    {
      this.licenseFinancialStatmenentForm.patchValue({ ...res as LicenseProjectFinancialStatementDto});
      this.financialStatement = res;
    }
  }

  save(moveToNextTab: boolean = false): void {
    if (!this.licenseFinancialStatmenentForm.valid) {
      this._toastService.showError(this.localization.PleaseAddAllRequiredFields);
        this.showValidation = true;
      return;
    }
    if (!this.financialStatement.id) 
    {
      this.financialStatement.id = '00000000-0000-0000-0000-000000000000';
    }
    this.controls.licenseProjectId.setValue(this.licenseProjectId);
  

    this.financialStatement.licenseProjectId = this.licenseProjectId as string;

    this.financialStatement = this.licenseFinancialStatmenentForm.value as LicenseProjectFinancialStatementDto;

    this.subscriptions.push(
      this._licenseFinancialStatmenentService.Save(this.financialStatement).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this.setResponseToForm(res.data as LicenseProjectFinancialStatementDto);
          if (moveToNextTab) this.moveToNextTab()
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
