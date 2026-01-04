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
import { FinalTenantContractComponent } from '../final-tenant-contract/final-tenant-contract.component';
import { BusinessPaymentTemplatesComponent } from '../../pages/business-payment-templates/business-payment-templates.component';
import { FawriaLicenseprojectEngineeringConsultantsContainerComponent } from '../FawriaLicenseProject/fawria-licenseproject-engineering-consultants-container/fawria-licenseproject-engineering-consultants-container.component';
import { FawriaLicenseprojectCharteredAccountantsContainerComponent } from '../FawriaLicenseProject/fawria-licenseproject-chartered-accountants-container/fawria-licenseproject-chartered-accountants-container.component';
import { FawriaLicenseprojectDeedOwnersContainerComponent } from '../FawriaLicenseProject/fawria-licenseproject-deed-owners-container/fawria-licenseproject-deed-owners-container.component';
import { FawriaLicenseprojectEscrowAccountCreateComponent } from '../FawriaLicenseProject/fawria-licenseproject-escrow-account-create/fawria-licenseproject-escrow-account-create.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-project-parties',
  templateUrl: './project-parties.component.html',
  styleUrls: ['./project-parties.component.scss']
})
export class ProjectPartiesComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
    licenseProjectId: string | null = null;
  completedTapCodes: string[] = [];
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
      isCompleted:false
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
      isCompleted: false,
    },
     {
      icon: '',
      title: 'اتفاقية الملاك',
      Component: FawriaLicenseprojectDeedOwnersContainerComponent,
      disabled: false,
      id: 'fawriaLicenseProjectDeedOwners',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectDeedOwners,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      icon: '',
      title: 'الاستشاري الهندسي',
      Component: FawriaLicenseprojectEngineeringConsultantsContainerComponent,
      disabled: false,
      id: 'fawriaLicenseProjectEngineeringConsultants',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectEngineeringConsultants,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      icon: '',
      title: 'المحاسب القانوني',
      Component: FawriaLicenseprojectCharteredAccountantsContainerComponent,
      disabled: false,
      id: 'fawriaLicenseProjectCharteredAccountants',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectCharteredAccountants,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      icon: '',
      title: 'حساب الضمان',
      Component: FawriaLicenseprojectEscrowAccountCreateComponent,
      disabled: false,
      id: 'fawriaLicenseProjectEscrowAccount',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectEscrowAccount,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
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
      isCompleted: false,
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
      isCompleted: false,
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
      isCompleted: false,
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
      isCompleted: false,
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
      isCompleted: false,
    },
    {
      icon: '',
      title: 'البنود الإضافية',
      Component: BeneficiaryContractFormAdditionalTermsComponent,
      disabled: false,
      id: 'BeneficiaryContractFormAdditionalTermsComponent',
      errNum: 0,
      tabCode: TabCode.beneficiaryContractFormAdditionalTerms,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      icon: '',
      title: 'الدفعات المالية',
      Component: BusinessPaymentTemplatesComponent,
      disabled: false,
      id: 'BusinessPaymentTemplatesComponent',
      errNum: 0,
      tabCode: TabCode.LicenseProjectBusinessPayment,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
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
    private _sharedLicenseProjectService: SharedLicenseProjectService,
     private _tabsService: TabsService,

  ) { };
  ngOnInit(): void {
    this.observeValidationError();
    this.getLicenseProjectIdStorage();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    console.log('ProjectDataComponent - licenseProjectId:', this.licenseProjectId);
    if (this.licenseProjectId) {
      this.GetCompletedLicenseProjectProfileTaps();
      this.observeUpdateCompletedTapCodes();
    }
  }

  private observeUpdateCompletedTapCodes() {
    this._licenseRequestService.updateCompletedTapCodesIsClicked.subscribe(
      (res) => {
        this.GetCompletedLicenseProjectProfileTaps();
      }
    );
  }

  GetCompletedLicenseProjectProfileTaps() {
    console.log('ProjectDataComponent - GetCompletedLicenseProjectProfileTaps called');
    this._dataVisibilityOfLicenseProjectService
      .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId!)
      .subscribe((res) => {
        console.log('ProjectDataComponent - completedTapCodes:', res);
        this.completedTapCodes = res;

        // Update isCompleted for tabs that are in completedTapCodes
        this.mainTabsComponentList.forEach(tab => {
          if (tab.tabCode && this.completedTapCodes.includes(tab.tabCode)) {
            tab.isCompleted = true;
            console.log('ProjectDataComponent - tab marked as completed:', tab.tabCode);
          }
        });

        // Refresh the vertical tabs to reflect the isCompleted changes
        const currentTabContent = this._tabsService.verticalTabContent.getValue();
        console.log('ProjectDataComponent - currentTabContent:', currentTabContent);
        if (currentTabContent && currentTabContent.tabsComponentList) {
          this._tabsService.updateVerticalTabContent({ ...currentTabContent });
        }
      });
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
