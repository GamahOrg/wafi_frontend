import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { TabCode } from '../../models/tab-code.model';
import { BusinessPaymentTemplatesComponent } from '../../pages/business-payment-templates/business-payment-templates.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { BeneficiaryContractFormAdditionalTermsComponent } from '../beneficiary-contract-form-additional-terms/beneficiary-contract-form-additional-terms.component';
import { FawriaContactInfoEndBeneficiaryComponent } from '../../pages/fawria-contact-info-end-beneficiary/fawria-contact-info-end-beneficiary.component';
import { FawriaFinalBeneficiaryAgreementComponent } from '../../pages/fawria-final-beneficiary-agreement/fawria-final-beneficiary-agreement.component';

@Component({
  selector: 'app-fawria-unified-sales-model',
  templateUrl: './fawria-unified-sales-model.component.html',
  styleUrls: ['./fawria-unified-sales-model.component.scss']
})
export class FawriaUnifiedSalesModelComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'عقد المستفيد النهائي',
      Component: FawriaFinalBeneficiaryAgreementComponent,
      disabled: false,
      id: 'FawriaFinalBeneficiaryAgreementComponent',
      errNum: 0,
      tabCode: TabCode.FawriaFinalBeneficiaryAgreement,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'البنود الإضافية',
      Component: BeneficiaryContractFormAdditionalTermsComponent,
      disabled: false,
      id: 'BeneficiaryContractFormAdditionalTermsComponent',
      errNum: 0,
      tabCode: TabCode.fawriaBeneficiaryContractFormAdditionalTerms,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'نماذج الدفعات المالية',
      Component: BusinessPaymentTemplatesComponent,
      disabled: false,
      id: 'BusinessPaymentTemplatesComponent',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectBusinessPayment,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات التواصل',
      Component: FawriaContactInfoEndBeneficiaryComponent,
      disabled: false,
      id: 'FawriaContactInfoEndBeneficiaryComponent',
      errNum: 0,
      tabCode: TabCode.fawriaContactInfoEndBeneficiaryComponent,
      tabErrors: [],
      isVisible: true,
    },

  ]
  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: "",
    tabsComponentList: []
  };
  constructor(
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,

  ) { };
  ngOnInit(): void {
    this.observeValidationError();
  }
  private getDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, false, true)
  }
  // private updateVerticalTabContent() {
  //   this._tabsService.updateVerticalTabContent(this.tabContent)
  // }
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
