import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { Route, Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import {
  RequestValidation,
  TabErrors,
  TabsError,
} from 'src/app/core/models/request-validation.model';
import { tabError, tabsComponent } from 'src/app/shared/models/tabs.model';

@Component({
  selector: 'app-request-validation-popup',
  templateUrl: './request-validation-popup.component.html',
  styleUrls: ['./request-validation-popup.component.scss'],
})
export class RequestValidationPopupComponent implements OnInit, OnDestroy {
  validationError: RequestValidation | null = null;
  generalErrorTab: TabsError | undefined;
  tabsComponentList: tabsComponent[] = [
    {
      icon: '',
      title: 'البيانات الأساسية',
      disabled: false,
      id: 'FacilityBasicInfoComponent',
      errNum: 0,
      tabCode: 'FacilityInfo' ,
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'تدريب الهيئة العامة للعقار للبيع على الخارطة',
      disabled: false,
      id: 'WafiTrainingComponent',
      errNum: 0,
      tabCode: 'WafiTraining',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'متطلبات القدرات المالية',
      id: 'FinancialCapabilitiesRequirementsComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'FinancialCapabilitiesRequirements',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: ' متطلبات القدرات المؤسسية و الموارد البشرية',
      id: 'JobRequirementsAndHumanResourcesComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'JobRequirementsAndHumanResources',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'متطلبات القدرات الفنية',
      id: 'TechnicalCapabilitiesRequirementsComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'TechnicalCapabilitiesRequirements',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'موظفين الشركة المعتمدين',
      id: 'CertifiedFacilityEngineersComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'CertifiedFacilityEngineers',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'القدرات المؤسسية والموارد الإضافية',
      id: 'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
      disabled: false,
      errNum: 0,
      tabCode:
        'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'القدارت الفنية الإضافية',
      id: 'DistinctiveAdditionalTechnicalCapabilitiesComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'DistinctiveAdditionalTechnicalCapabilities',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
      id: 'EngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'EngineersWithSufficientTrainingForTheEngineeringConsultant',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
      id: 'AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
      disabled: false,
      errNum: 0,
      tabCode:
        'AccountantsCompletedWafiTrainingProgramForAccountingSupervision',
      tabErrors: [],
      isVisible: false,
    },
    {
      icon: '',
      title: 'عنوان المنشأة',
      disabled: false,
      id: 'NationalAddressesComponent',
      errNum: 0,
      tabCode: 'NationalAddresses',
      tabErrors: [],
      isVisible: false,
    },
  ];

  subscriptions: Subscription[] = [];
  constructor(
    private _popupService: PopupService,
    private _router: Router,
    private _requestValidationService: RequestValidationService
  ) { }

  ngOnInit(): void {
    this.observeValidationError();
    this.observePopupEvents();
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        // console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        // console.log(res);
        this.navigateToFacilityProfile();
        this.closeDialog();
      })
    );
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  private navigateToFacilityProfile(): void {
    this._router.navigate([
      `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityProfile}`,
    ]);
  }
  private observeValidationError(): void {
    this.subscriptions.push(
      this._requestValidationService
        .getRequestValidation()
        .subscribe((res: RequestValidation | null) => {
          //

          console.log('observeValidationError');
          console.log(res);

          this.validationError = res;
          console.log(res);

          this.validateTabs();
          this.setTabErrorMsgArr()
        })
    );
  }
  private validateTabs() {
    this.tabsComponentList.map((t: tabsComponent) => {
      return (t.errNum = this.getTabErrors(t.tabCode as string));
    });
    console.log(this.tabsComponentList);

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


  private setTabErrorMsgArr() {
    // this.validationError

    this.tabsComponentList.map((tab: tabsComponent) => {
      // find tab by tab code
      // console.log("tab.tabErrors", tab, tab.tabErrors)
      tab.tabErrors = this.getTabByTabCode(tab.tabCode as string) as tabError[];
    })
     console.log("this.tabContent.tabsComponentList", this.tabsComponentList)
  }
  private getTabByTabCode(TabCode: string): tabError[] {

    let tabErrorsMsg = [] as tabError[]

    if (this.validationError) {

      this.validationError.tabs.map((tab: TabsError) => {
        if (tab.tabCode === TabCode) {

          // console.log("tab", tab)
          tabErrorsMsg = tab.tabErrors
        }
      })
    }

    return tabErrorsMsg
  }
  getGeneralErrorTab() {

    if (this.validationError && this.validationError.tabs && this.validationError.tabs.length)
      this.generalErrorTab = this.validationError.tabs.find(x => x.tabCode == 'General');
    return this.generalErrorTab;
  }
  checkNotGeneralErrorTabsExist() {

    if (this.validationError && this.validationError.tabs && this.validationError.tabs.length) {
      let notGeneralError = this.validationError.tabs.find(x => x.tabCode != 'General');
      return notGeneralError ? true : false;
    }

    return false;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
