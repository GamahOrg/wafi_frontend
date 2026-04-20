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
import { QualificationFacilityCertificationComponent } from '../qualification-facility-certification/qualification-facility-certification.component';
import { TechnicalCapabilitiesRequirementsComponent } from '../technical-capabilities-requirements/technical-capabilities-requirements.component';
import { WafiTrainingComponent } from '../wafi-training/wafi-training.component';
import { QualificationServiceRequestService } from '../../../qualifying/services/qualification-type/qualification-service-request.service';
import { Subscription, map } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { RequestValidation, TabsError } from 'src/app/core/models/request-validation.model';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse, FacilityTypeCategory } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-facility-data',
  templateUrl: './facility-data.component.html',
  styleUrls: ['./facility-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FacilityDataComponent implements OnInit, OnDestroy {
  validationError: RequestValidation | null = null;
  subscriptions: Subscription[] = [];

  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: "البيانات العامة",
    tabsComponentList: [
      {
        icon: '',
        title: 'البيانات الأساسية',
        Component: FacilityBasicInfoComponent,
        disabled: false,
        id: 'FacilityBasicInfoComponent',
        errNum: 0,
        tabCode: 'FacilityInfo' ,
        isVisible: true,
      },
      {
        icon: '',
        title: 'تدريب الهيئة العامة للعقار للبيع على الخارطة',
        Component: WafiTrainingComponent,
        disabled: false,
        errNum: 0,
        tabCode: 'WafiTraining',
        isVisible: true,
      },
      {
        icon: '',
        title: 'متطلبات القدرات المالية',
        Component: FinancialCapabilitiesRequirementsComponent,
        id: 'FinancialCapabilitiesRequirementsComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'FinancialCapabilitiesRequirements',
        isVisible: true,
      },
      {
        icon: '',
        title: ' متطلبات القدرات المؤسسية و الموارد البشرية',
        Component: JobRequirementsAndHumanResourcesComponent,
        id: 'JobRequirementsAndHumanResourcesComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'JobRequirementsAndHumanResources',
        isVisible: true,
      },
      {
        icon: '',
        title: 'متطلبات القدرات الفنية',
        Component: TechnicalCapabilitiesRequirementsComponent,
        id: 'TechnicalCapabilitiesRequirementsComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'TechnicalCapabilitiesRequirements',
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
        title: 'القدرات المؤسسية والموارد الإضافية',
        Component: InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
        id: 'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources',
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
        title: 'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
        Component: EngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
        id: 'EngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'EngineersWithSufficientTrainingForTheEngineeringConsultant',
        isVisible: true,
      },
      {
        icon: '',
        title: 'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
        Component: AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
        id: 'AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
        disabled: false,
        errNum: 0,
        tabCode: 'AccountantsCompletedWafiTrainingProgramForAccountingSupervision',
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
    private _userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.observeValidationError();
    this.observeFacilityTypeForTabTitle();
  }

  private observeFacilityTypeForTabTitle(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        if (res && res.facilities && res.facilities.length > 0) {
          const facilityTypeCategory = res.facilities[0].facilityTypeCategory;
          let certifiedTabTitle = 'مهندسين الشركة المعتمدين';
          if (facilityTypeCategory === FacilityTypeCategory.Accountant) {
             certifiedTabTitle = 'محاسبي المكتب المعتمدين';
           } else if (facilityTypeCategory === FacilityTypeCategory.Engineering) {
              certifiedTabTitle = 'مهندسين المكتب المعتمدين';
           }
          const certifiedTab = this.tabContent.tabsComponentList.find(t => t.tabCode === 'CertifiedFacilityEngineers');
          if (certifiedTab) {
            certifiedTab.title = certifiedTabTitle;
          }
          this.updateVerticalTabContent();
        }
      })
    );
  }
  private updateVerticalTabContent() {
    console.log("update vertical tabs", "this.tabContent", this.tabContent)
    this._tabsService.updateVerticalTabContent(this.tabContent)
  }
  private getTabErrors(tabCode: string) {
    let errsNum = 0;

    if (this.validationError) {
      console.log("this.validationError", this.validationError)
      errsNum =
        this.validationError.tabs.find((tab: TabsError) => tab.tabCode === tabCode)
          ?.tabErrors.length ?? 0;
    }
    console.log("errsNum", errsNum)
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
          console.log("this.tabContent", this.tabContent)
          this.updateVerticalTabContent();

        })
    );
  }
  private resetRequestValidation() {
    this._requestValidationService.updateRequestValidation(null)
  }
  ngOnDestroy(): void {
    this.resetRequestValidation()
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
