import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { LicenseRequestPriceFinancialAnalysisComponent } from '../license-request-price-financial-analysis/license-request-price-financial-analysis.component';
import { LicenseRequestListOfProjectExpectedIncomeComponent } from '../license-request-list-of-project-expected-income/license-request-list-of-project-expected-income.component';
import { LicenseRequestLicenseProjectExpectedFundingSourceComponent } from '../license-request-license-project-expected-funding-source/license-request-license-project-expected-funding-source.component';
import { LicenseRequestLicenseProjectFinancialIndicatorComponent } from '../license-request-license-project-financial-indicator/license-request-license-project-financial-indicator.component';
import { LicenseRequestStatementOfExpectedAnnualCashFlowsComponent } from '../license-request-statement-of-expected-annual-cash-flows/license-request-statement-of-expected-annual-cash-flows.component';
import { LicenseRequestExpectedAnnualBalanceSheetComponent } from '../license-request-expected-annual-balance-sheet/license-request-expected-annual-balance-sheet.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';

@Component({
  selector: 'app-license-request-feasibility-study',
  templateUrl: './license-request-feasibility-study.component.html',
  styleUrls: ['./license-request-feasibility-study.component.scss'],
})
export class LicenseRequestFeasibilityStudyComponent {
  subscriptions: Subscription[] = [];
  mainAccordionComponentList = [
    {
      icon: "",
      title: 'دراسة الجدوى الخاصة بالمشروع',
      component: LicenseRequestPriceFinancialAnalysisComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.priceFinancialAnalysis,
    },
    {
      icon: '',
      title: 'قائمة الدخل المتوقع للمشروع',
      component: LicenseRequestListOfProjectExpectedIncomeComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.listOfProjectExpectedIncome,
    },
    {
      icon: '',
      title: 'الميزانية العمومية السنوية المتوقعة',
      component: LicenseRequestExpectedAnnualBalanceSheetComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.expectedAnnualBalanceSheet,
    },
    {
      icon: '',
      title: 'بيان بالتدفقات النقدية السنوية المتوقعة',
      component: LicenseRequestStatementOfExpectedAnnualCashFlowsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.statementOfExpectedAnnualCashFlows,
    },
    {
      icon: '',
      title: 'ملخص بأهم النتائج والمؤشرات المالية للمشروع',
      component: LicenseRequestLicenseProjectFinancialIndicatorComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectFinancialIndicator,
    },
    {
      icon: '',
      title: 'مصادر التمويل المتوقعة ',
      component: LicenseRequestLicenseProjectExpectedFundingSourceComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectExpectedFundingSource,
    },
  ];
  // accordionContent: accordionContent =
  //   {
  //     oneAtATime: true,
  //     isAnimated: true,
  //     accordionComponentList: []
  //   }
  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) {}
  ngOnInit(): void {
    this.observeDataVisibilityOfLicenseProject();
  }

  private observeDataVisibilityOfLicenseProject() {
    // this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainAccordion(this.subscriptions, this.mainAccordionComponentList, this.accordionContent)
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainAccordion(
      this.subscriptions,
      this.mainAccordionComponentList
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
