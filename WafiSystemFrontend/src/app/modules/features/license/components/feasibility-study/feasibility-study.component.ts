import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { PriceFinancialAnalysisComponent } from '../price-financial-analysis/price-financial-analysis.component';
import { ListOfProjectExpectedIncomeComponent } from '../list-of-project-expected-income/list-of-project-expected-income.component';
import { ExpectedAnnualBalanceSheetComponent } from '../expected-annual-balance-sheet/expected-annual-balance-sheet.component';
import { StatementOfExpectedAnnualCashFlowsComponent } from '../statement-of-expected-annual-cash-flows/statement-of-expected-annual-cash-flows.component';
import { LicenseProjectFinancialIndicatorComponent } from '../license-project-financial-indicator/license-project-financial-indicator.component';
import { LicenseProjectExpectedFundingSourceComponent } from '../license-project-expected-funding-source/license-project-expected-funding-source.component';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { LicenseRequestService } from '../../services/license-request.service';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { TabCode } from '../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';

@Component({
  selector: 'app-feasibility-study',
  templateUrl: './feasibility-study.component.html',
  styleUrls: ['./feasibility-study.component.scss']
})
export class FeasibilityStudyComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList= [
    {
      icon: '',
      title: 'دراسة الجدوى الخاصة بالمشروع',
      Component: PriceFinancialAnalysisComponent,
      disabled: false,
      id: 'PriceFinancialAnalysisComponent',
      errNum: 0,
      tabCode: TabCode.priceFinancialAnalysis,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'قائمة الدخل المتوقع للمشروع',
      Component: ListOfProjectExpectedIncomeComponent,
      disabled: false,
      id: 'ListOfProjectExpectedIncomeComponent',
      errNum: 0,
      tabCode: TabCode.listOfProjectExpectedIncome,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الميزانية العمومية السنوية المتوقعة',
      Component: ExpectedAnnualBalanceSheetComponent,
      disabled: false,
      id: TabCode.expectedAnnualBalanceSheet,
      errNum: 0,
      tabCode: TabCode.expectedAnnualBalanceSheet,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيان بالتدفقات النقدية السنوية المتوقعة',
      Component: StatementOfExpectedAnnualCashFlowsComponent,
      disabled: false,
      id: 'StatementOfExpectedAnnualCashFlowsComponent',
      errNum: 0,
      tabCode: TabCode.statementOfExpectedAnnualCashFlows,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'ملخص بأهم النتائج والمؤشرات المالية للمشروع',
      Component: LicenseProjectFinancialIndicatorComponent,
      disabled: false,
      id: 'LicenseProjectFinancialIndicatorComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectFinancialIndicator,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'مصادر التمويل المتوقعة ',
      Component: LicenseProjectExpectedFundingSourceComponent,
      disabled: false,
      id: 'LicenseProjectExpectedFundingSourceComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectExpectedFundingSource,
      tabErrors: [],
      isVisible: true,
    },
  ]
  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: "",
    tabsComponentList: [],
  };
  constructor(
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,

  ) { };
  ngOnInit(): void {
    this.observeValidationError();
  }

  private getTabErrors(tabCode: string) {
    let errsNum = 0;
    if (this.validationError) {
      errsNum =
        this.validationError.tabs.find((tab: TabsError) => tab.tabCode === tabCode)
          ?.tabErrors.length ?? 0;
    }
    return errsNum;
  }
  private validateTabs() {
    this.mainTabsComponentList.map((t: tabsComponent) => {
      return (t.errNum = this.getTabErrors(t.tabCode as string));
    });
  }

  private getDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, false, true)
  }

  private observeValidationError(): void {
    this.subscriptions.push(
      this._licenseRequestService
        .getRequestValidation()
        .subscribe((res: any | null) => {
          this.validationError = res;
          this.validateTabs();
          this.getDataVisibilityOfLicenseProject()
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
