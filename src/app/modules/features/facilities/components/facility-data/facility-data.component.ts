import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from '../accountants-completed-wafi-training-program-for-accounting-supervision/accountants-completed-wafi-training-program-for-accounting-supervision.component';
import { CertifiedFacilityEngineersComponent } from '../certified-facility-engineers/certified-facility-engineers.component';
import { DistinctiveAdditionalTechnicalCapabilitiesComponent } from '../distinctive-additional-technical-capabilities/distinctive-additional-technical-capabilities.component';
import { EngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from '../engineers-with-sufficient-training-for-the-engineering-consultant/engineers-with-sufficient-training-for-the-engineering-consultant.component';
import { FacilityBasicInfoComponent } from '../facility-basic-info/facility-basic-info.component';
import { FinancialCapabilitiesRequirementsComponent } from '../financial-capabilities-requirements/financial-capabilities-requirements.component';
import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from '../institutional-capabilities-and-additional-discriminatory-human-resources/institutional-capabilities-and-additional-discriminatory-human-resources.component';
import { JobRequirementsAndHumanResourcesComponent } from '../job-requirements-and-human-resources/job-requirements-and-human-resources.component';
import { NationalAddressesComponent } from '../national-addresses/national-addresses.component';
import { TechnicalCapabilitiesRequirementsComponent } from '../technical-capabilities-requirements/technical-capabilities-requirements.component';
import { WafiTrainingComponent } from '../wafi-training/wafi-training.component';
import { WafiTrainingEngineersComponent } from '../wafi-training-engineers/wafi-training-engineers.component';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import {
  RequestValidation,
  TabsError,
} from 'src/app/core/models/request-validation.model';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import {
  FacilityTypeCategory,
  customerResponse,
} from '../../../../../shared/models/customer.model';
import { RealEstateDeveloperDataComponent } from '../real-estate-developer-data/real-estate-developer-data.component';
import { LegalAccountantDataComponent } from '../legal-accountant-data/legal-accountant-data.component';
import { FacilityBasicDataInfoAllTypesComponent } from '../facility-basic-data-info-all-types/facility-basic-data-info-all-types.component';

@Component({
  selector: 'app-facility-data',
  templateUrl: './facility-data.component.html',
  styleUrls: ['./facility-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FacilityDataComponent implements OnInit, OnDestroy {
  validationError: RequestValidation | null = null;
  subscriptions: Subscription[] = [];
  facilityTypeCategory: FacilityTypeCategory | null = null;
  userData: customerResponse | null = null;

  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    // tabTitle: 'البيانات العامة',
    tabsComponentList: [
      {
        icon: '',
        title: 'البيانات الأساسية',
        Component: FacilityBasicInfoComponent,
        disabled: false,
        id: 'FacilityBasicInfoComponent',
        errNum: 0,
        tabCode: 'FacilityInfo',
        isVisible: true,
      },
      {
        icon: '',
        title: 'القدرات المالية',
        Component: FinancialCapabilitiesRequirementsComponent,
        id: 'FinancialCapabilitiesRequirementsComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'FinancialCapabilitiesRequirements',
        isVisible: true,
      },
      {
        icon: '',
        title: 'القدرات الفنية',
        Component: TechnicalCapabilitiesRequirementsComponent,
        id: 'TechnicalCapabilitiesRequirementsComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'TechnicalCapabilitiesRequirements',
        isVisible: true,
      },
      {
        icon: '',
        title: 'القدرات المؤسسية و الموارد البشرية',
        Component: JobRequirementsAndHumanResourcesComponent,
        id: 'JobRequirementsAndHumanResourcesComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'JobRequirementsAndHumanResources',
        isVisible: true,
      },

      {
        icon: '',
        title: 'موظفين الشركة المعتمدين',
        Component: CertifiedFacilityEngineersComponent,
        id: 'CertifiedFacilityEngineersComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'CertifiedFacilityEngineers',
        isVisible: true,
      },
      {
        icon: '',
        title: 'تدريب الهيئة العامة للعقار للبيع على الخارطة',
        Component: WafiTrainingEngineersComponent,
        disabled: false,
        errNum: 0,
        tabCode: 'WafiTraining',
        isVisible: true,
      },
      {
        icon: '',
        title: 'القدرات المؤسسية والموارد الإضافية',
        Component:
          InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
        id: 'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
        disabled: false,
        errNum: 0,
        tabCode:
          'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources',
        isVisible: true,
      },
      {
        icon: '',
        title: 'القدارت الفنية الإضافية',
        Component: DistinctiveAdditionalTechnicalCapabilitiesComponent,
        id: 'DistinctiveAdditionalTechnicalCapabilitiesComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'DistinctiveAdditionalTechnicalCapabilities',
        isVisible: true,
      },
      {
        icon: '',
        title:
          'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
        Component:
          EngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
        id: 'EngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'EngineersWithSufficientTrainingForTheEngineeringConsultant',
        isVisible: true,
      },
      {
        icon: '',
        title:
          'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
        Component:
          AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
        id: 'AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
        disabled: false,
        errNum: 0,
        tabCode:
          'AccountantsCompletedWafiTrainingProgramForAccountingSupervision',
        isVisible: true,
      },
      {
        icon: '',
        title: 'عنوان المنشأة',
        Component: NationalAddressesComponent,
        disabled: false,
        errNum: 0,
        tabCode: 'NationalAddresses',
        isVisible: true,
      },
    ],
  };

  constructor(
    private _requestValidationService: RequestValidationService,
    private _tabsService: TabsService,
    private _customerService: UserDataService,
  ) { }

  ngOnInit(): void {
    this.updateVerticalTabContent();
    this.observeValidationError();
    this.obseveCustomerData();
  }
  private updateVerticalTabContent() {
    console.log('update vertical tabs', 'this.tabContent', this.tabContent);
    this._tabsService.updateVerticalTabContent(this.tabContent);
  }
  private getTabErrors(tabCode: string) {
    let errsNum = 0;

    if (this.validationError) {
      console.log('this.validationError', this.validationError);
      errsNum =
        this.validationError.tabs.find(
          (tab: TabsError) => tab.tabCode === tabCode,
        )?.tabErrors.length ?? 0;
    }
    return errsNum;
  }

  private validateTabs() {
    this.tabContent.tabsComponentList.map((t: tabsComponent) => {
      return (t.errNum = this.getTabErrors(t.tabCode as string));
    });
  }

  private observeValidationError(): void {
    this.subscriptions.push(
      this._requestValidationService
        .getRequestValidation()
        .subscribe((res: any | null) => {
          this.validationError = res;
          this.validateTabs();
          this.updateVerticalTabContent();
        }),
    );
  }
  private resetRequestValidation() {
    this._requestValidationService.updateRequestValidation(null);
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._customerService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (
            this.userData &&
            this.userData.facilities &&
            this.userData.facilities.length > 0
          ) {
            //console.log(this.userData.facilities[0].id)
            this.facilityTypeCategory =
              this.userData.facilities[0].facilityTypeCategory ?? null;
            if (this.facilityTypeCategory) {
              this.updateCertifiedTabTitle();
              if (this.facilityTypeCategory == FacilityTypeCategory.Developer) {
                this.updateDeveloperComponents();
              }
              if (
                this.facilityTypeCategory == FacilityTypeCategory.Accountant
              ) {
                this.updateAccountantComponents();
              }
              if (
                this.facilityTypeCategory == FacilityTypeCategory.Engineering
              ) {
                this.updateEngineeringComponents();
              }
              // this.updateTabsVisibility();
              this.updateVerticalTabContent();
            }
          }
        }),
    );
  }

  updateDeveloperComponents() {
    this.tabContent.tabsComponentList = [
      {
        title: 'البيانات الأساسية',
        disabled: false,
        isVisible: true,
        children: [
          {
            icon: '',
            title: 'البيانات الأساسية',
            Component: FacilityBasicInfoComponent,
            id: 'FacilityBasicInfoComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'FacilityInfo',
            isVisible: true,
          },
          {
            icon: '',
            title: 'بيانات المطور العقاري',
            Component: FacilityBasicDataInfoAllTypesComponent,
            id: 'RealEstateDeveloperDataComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'DeveloperInfo',
            isVisible: true,
          },
        ],
      },
      {
        icon: '',
        title: 'القدرات المالية',
        Component: FinancialCapabilitiesRequirementsComponent,
        id: 'FinancialCapabilitiesRequirementsComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'FinancialCapabilitiesRequirements',
        isVisible: true,
      },
      {
        icon: '',
        title: 'القدرات الفنية',
        Component: TechnicalCapabilitiesRequirementsComponent,
        id: 'TechnicalCapabilitiesRequirementsComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'TechnicalCapabilitiesRequirements',
        isVisible: true,
      },
      {
        title: 'القدرات المؤسسية و الموارد البشرية',
        disabled: false,
        isVisible: true,
        children: [
          {
            icon: '',
            title: 'القدرات المؤسسية و الموارد البشرية',
            Component: JobRequirementsAndHumanResourcesComponent,
            id: 'JobRequirementsAndHumanResourcesComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'JobRequirementsAndHumanResources',
            isVisible: true,
          },
          {
            icon: '',
            title: 'الموظفين الحاصلين على التدريب',
            Component: WafiTrainingEngineersComponent,
            disabled: false,
            errNum: 0,
            tabCode: 'WafiTraining',
            isVisible: true,
          },
          {
            icon: '',
            title: 'مهندسين الشركة المعتمدين',
            Component: CertifiedFacilityEngineersComponent,
            id: 'CertifiedFacilityEngineersComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'CertifiedFacilityEngineers',
            isVisible: true,
          },
        ],
      },
      {
        icon: '',
        title: 'عنوان المنشأة',
        Component: NationalAddressesComponent,
        disabled: false,
        errNum: 0,
        tabCode: 'NationalAddresses',
        isVisible: true,
      },
    ];
  }

  updateAccountantComponents() {
    this.tabContent.tabsComponentList = [
      {
        title: 'البيانات الأساسية',
        disabled: false,
        isVisible: true,
        children: [
          {
            icon: '',
            title: 'البيانات الأساسية',
            Component: FacilityBasicInfoComponent,
            id: 'FacilityBasicInfoComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'FacilityInfo',
            isVisible: true,
          },
          {
            icon: '',
            title: 'بيانات المحاسب القانوني',
            Component: FacilityBasicDataInfoAllTypesComponent,
            id: 'RealEstateDeveloperDataComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'DeveloperInfo',
            isVisible: true,
          },
        ],
      },
      {
        icon: '',
        title: 'محاسبي المكتب المعتمدين',
        Component: CertifiedFacilityEngineersComponent,
        id: 'CertifiedFacilityEngineersComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'CertifiedFacilityEngineers',
        isVisible: true,
      },
      {
        icon: '',
        title: 'عنوان المنشأة',
        Component: NationalAddressesComponent,
        disabled: false,
        errNum: 0,
        tabCode: 'NationalAddresses',
        isVisible: true,
      },
    ];
  }

  updateEngineeringComponents() {
    this.tabContent.tabsComponentList = [
      {
        title: 'البيانات الأساسية',
        disabled: false,
        isVisible: true,
        children: [
          {
            icon: '',
            title: 'البيانات الأساسية',
            Component: FacilityBasicInfoComponent,
            id: 'FacilityBasicInfoComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'FacilityInfo',
            isVisible: true,
          },
          {
            icon: '',
            title: 'بيانات الاستشاري الهندسي',
            Component: FacilityBasicDataInfoAllTypesComponent,
            id: 'LegalAccountantDataComponent',
            disabled: false,
            errNum: 0,
            tabCode: 'LegalAccountantInfo',
            isVisible: true,
          },
        ],
      },
      {
        icon: '',
        title: 'مهندسين المكتب المعتمدين',
        Component: CertifiedFacilityEngineersComponent,
        id: 'CertifiedFacilityEngineersComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'CertifiedFacilityEngineers',
        isVisible: true,
      },
      {
        icon: '',
        title: 'عنوان المنشأة',
        Component: NationalAddressesComponent,
        disabled: false,
        errNum: 0,
        tabCode: 'NationalAddresses',
        isVisible: true,
      },
    ];
  }

  private updateCertifiedTabTitle(): void {
    let certifiedTabTitle = 'مهندسين الشركة المعتمدين';
    if (this.facilityTypeCategory === FacilityTypeCategory.Accountant) {
      certifiedTabTitle = 'محاسبي المكتب المعتمدين';
    } else if (this.facilityTypeCategory === FacilityTypeCategory.Engineering) {
      certifiedTabTitle = 'مهندسين المكتب المعتمدين';
    }
    const certifiedTab = this.tabContent.tabsComponentList.find(
      (t) => t.tabCode === 'CertifiedFacilityEngineers',
    );
    if (certifiedTab) {
      certifiedTab.title = certifiedTabTitle;
    }
  }

  private updateTabsVisibility(): void {
    const tabsToHideMap: Record<FacilityTypeCategory, string[]> = {
      [FacilityTypeCategory.Developer]: [
        'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources',
        'DistinctiveAdditionalTechnicalCapabilities',
        'EngineersWithSufficientTrainingForTheEngineeringConsultant',
        'AccountantsCompletedWafiTrainingProgramForAccountingSupervision',
      ],
      [FacilityTypeCategory.Engineering]: [
        'FinancialCapabilitiesRequirements', // القدرات المالية
        'JobRequirementsAndHumanResources', // القدرات المؤسسية والموارد البشرية
        'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources', // القدرات المؤسسية والموارد الإضافية
        'DistinctiveAdditionalTechnicalCapabilities', // القدرات الفنية الإضافية
        'AccountantsCompletedWafiTrainingProgramForAccountingSupervision', // محاسبي الشركة الحاصلين على برنامج التدريب
      ],
      [FacilityTypeCategory.Accountant]: [
        'FinancialCapabilitiesRequirements', // القدرات المالية
        'TechnicalCapabilitiesRequirements', // القدرات الفنية
        'JobRequirementsAndHumanResources', // القدرات المؤسسية والموارد البشرية
        'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources', // القدرات المؤسسية والموارد الإضافية
        'DistinctiveAdditionalTechnicalCapabilities', // القدرات الفنية الإضافية
        'EngineersWithSufficientTrainingForTheEngineeringConsultant', // مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار
      ],
    };

    this.tabContent.tabsComponentList.forEach((tab) => {
      tab.isVisible = true;

      if (
        this.facilityTypeCategory &&
        tabsToHideMap[this.facilityTypeCategory]?.includes(
          tab.tabCode as string,
        )
      ) {
        tab.isVisible = false;
      }
    });

    this.updateVerticalTabContent();
  }

  ngOnDestroy(): void {
    this.resetRequestValidation();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
