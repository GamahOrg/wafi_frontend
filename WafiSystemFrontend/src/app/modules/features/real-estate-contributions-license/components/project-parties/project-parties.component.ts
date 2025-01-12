import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { EngineeringConsultantComponent } from '../engineering-consultant/engineering-consultant.component';
import { CharteredAccountantComponent } from '../chartered-accountant/chartered-accountant.component';
import { SubDeveloperComponent } from '../sub-developer/sub-developer.component';
import { MarketerComponent } from '../marketer/marketer.component';
import { FinalBeneficiaryContractComponent } from '../final-beneficiary-contract/final-beneficiary-contract.component';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { LicenseRequestService } from '../../services/license-request.service';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { MainRealStateDeveloperComponent } from '../main-real-state-developer/main-real-state-developer.component';
import { TabCode } from '../../models/tab-code.model';
import { BeneficiaryContractFormAdditionalTermsComponent } from '../beneficiary-contract-form-additional-terms/beneficiary-contract-form-additional-terms.component';
import { AgreementsComponent } from '../agreements/agreements.component';
import { MainContributionDataComponent } from '../main-contribution-data/main-contribution-data.component';
import { FinalTenantContractComponent } from '../final-tenant-contract/final-tenant-contract.component';

@Component({
  selector: 'app-project-parties',
  templateUrl: './project-parties.component.html',
  styleUrls: ['./project-parties.component.scss']
})
export class ProjectPartiesComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'الاستشاري الهندسي',
      Component: EngineeringConsultantComponent,
      disabled: false,
      id: 'EngineeringConsultantComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectEngineeringConsultants,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المحاسب القانوني',
      Component: CharteredAccountantComponent,
      disabled: false,
      id: 'CharteredAccountantComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectCharteredAccountants,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المطور الفرعى',
      Component: SubDeveloperComponent,
      disabled: false,
      id: 'SubDeveloperComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectSubDevelopers,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المسوق',
      Component: MarketerComponent,
      disabled: false,
      id: 'MarketerComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectRealStateMarketers,
      tabErrors: [],
      isVisible: true,

    },
    {
      icon: '',
      title: 'المطور الرئيسي',
      Component: MainRealStateDeveloperComponent,
      disabled: false,
      id: 'MainRealStateDeveloperComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectMainRealStateDeveloper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عقد المستفيد النهائي',
      Component: FinalBeneficiaryContractComponent,
      disabled: false,
      id: 'FinalBeneficiaryContractComponent',
      errNum: 0,
      tabCode: TabCode.sysLicenseBeneficiaryContractForms,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عقد المستأجر',
      Component: FinalTenantContractComponent,
      disabled: false,
      id: 'FinalTenantContractComponent',
      errNum: 0,
      tabCode: TabCode.FinalTenantContract,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
      Component: BeneficiaryContractFormAdditionalTermsComponent,
      disabled: false,
      id: 'BeneficiaryContractFormAdditionalTermsComponent',
      errNum: 0,
      tabCode: TabCode.beneficiaryContractFormAdditionalTerms,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عقد المستفيد',
      Component: AgreementsComponent,
      disabled: false,
      id: 'AgreementsComponent',
      errNum: 0,
      tabCode: TabCode.agreements,
      tabErrors: [],
      isVisible: true,
    },
  
  ]
  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: "",
    tabsComponentList: [
   
    ]
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
