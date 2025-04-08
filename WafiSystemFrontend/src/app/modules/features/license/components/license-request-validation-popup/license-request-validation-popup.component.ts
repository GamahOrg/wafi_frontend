import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { tabError, tabsComponent } from 'src/app/shared/models/tabs.model';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';

@Component({
  selector: 'app-license-request-validation-popup',
  templateUrl: './license-request-validation-popup.component.html',
  styleUrls: ['./license-request-validation-popup.component.scss']
})
export class LicenseRequestValidationPopupComponent implements OnInit, OnDestroy {
  validationError: RequestValidation | null = null;
  generalErrorTab: TabsError | undefined;
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: '',
      title: 'بيانات المطور عقاري',
      disabled: false,
      id: 'RealEstateDeveloperDataComponent',
      errNum: 0,
      tabCode: TabCode.realEStateDeveloper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات ملف منشأة',
      disabled: false,
      id: 'FacilityBasicInfoComponent',
      errNum: 0,
      tabCode: TabCode.facilityInfo,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات البنك',
      disabled: false,
      id: 'AccoutKeeperDataComponent',
      errNum: 0,
      tabCode: TabCode.accountKeeper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الحساب البنكي',
      disabled: false,
      id: 'BankingAccountComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectBackAccount,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: "",
      title: 'بيانات المفوضون للتوقيع على وثيقه الصرف',
      disabled: false,
      isVisible: true,
      id: '',
      errNum: 0,
      tabCode: TabCode.licenseProjectDelegator,
      tabErrors: [],
    },
    {
      icon: '',
      title: 'البيان المالي لمشروع الترخيص',
      disabled: false,
      id: 'LicenseProjectFinancialStatementComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectFinancialStatement,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: ' بيانات الأساسية للمشروع',
      disabled: false,
      id: 'ProjectBasicDataComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectMainData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عنوان المشروع',
      disabled: false,
      id: 'ProjectAddressComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectAddress,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عنوان المشروع',
      disabled: false,
      id: 'ProjectExternalAddressComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectExternalAddress,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'مرفقات الطلب',
      disabled: false,
      id: 'RequestAttachmentsComponent',
      errNum: 0,
      tabCode: TabCode.requestAttachments,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المطور عقاري',
      disabled: false,
      id: 'ProjectDeveloperComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDeveloper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أرض المشروع',
      disabled: false,
      id: 'ProjectLandComponent',
      errNum: 0,
      tabCode: TabCode.projectLandData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الاستشاري الهندسي الزائر',
      disabled: false,
      id: 'VisitorEngineeringConsultantComponent',
      errNum: 0,
      tabCode: TabCode.visitorEngineeringConsultant,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات المعرض',
      disabled: false,
      id: 'ExhibitionDataComponent',
      errNum: 0,
      tabCode: TabCode.exhibitionData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'صكوك أرض المشروع',
      disabled: false,
      id: 'ProjectLandTitleDeedsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDeed,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الزون و بلوكات وعمائر المشروع',
      disabled: false,
      id: 'BlocksAndbuildingsAndunitsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectZone,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أنواع الوحدات بالبلوك / العمارة',
      disabled: false,
      id: 'ProjectModuleModelsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectModel,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أكواد وحدات المشروع',
      disabled: false,
      id: 'ProjectUnitCodesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectCodes,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'ملفات التصاميم المعمارية للمشروع',
      disabled: false,
      id: 'ArchitecturalDesignFilesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDesign,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'وحدات المشروع',
      disabled: false,
      id: 'DetachedLicenseProjectUnitsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectUnits,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الرخص الإنشائية',
      disabled: false,
      id: 'ConstructionLicensesComponent',
      errNum: 0,
      tabCode: TabCode.constructionLicense,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'وثائق الطلب',
      disabled: false,
      id: 'ExternalProjectInformationComponent',
      errNum: 0,
      tabCode: TabCode.externalProjectInformation,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'وثائق المشروع',
      disabled: false,
      id: 'ProjectDocumentDataComponent',
      errNum: 0,
      tabCode: TabCode.projectDocumentData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'جدول كميات المشروع',
      disabled: false,
      id: 'ProjectQuantitiesTableComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectQuantitiesTableFiles,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الخدمات الإضافية',
      disabled: false,
      id: 'AdditionalServicesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectServices,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'دراسة الجدوى الخاصة بالمشروع',
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
      disabled: false,
      id: 'ExpectedAnnualBalanceSheetComponent',
      errNum: 0,
      tabCode: TabCode.expectedAnnualBalanceSheet,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيان بالتدفقات النقدية السنوية المتوقعة',
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
      disabled: false,
      id: 'LicenseProjectExpectedFundingSourceComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectExpectedFundingSource,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الاستشاري الهندسي',
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
      disabled: false,
      id: 'SubDeveloperComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectSubDevelopers,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المطور الرئيسي',
      disabled: false,
      id: 'MainRealStateDeveloperComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectMainRealStateDeveloper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المسوق',
      disabled: false,
      id: 'MarketerComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectRealStateMarketers,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عقد المستفيد النهائي',
      disabled: false,
      id: 'FinalBeneficiaryContractComponent',
      errNum: 0,
      tabCode: TabCode.sysLicenseBeneficiaryContractForms,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عقد المستأجر النهائي',
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
      disabled: false,
      id: 'BeneficiaryContractFormAdditionalTermsComponent',
      errNum: 0,
      tabCode: TabCode.beneficiaryContractFormAdditionalTerms,
      tabErrors: [],
      isVisible: true,
    },
    // {
    //   icon: '',
    //   title: 'سند لأمر',
    //   disabled: false,
    //   id: 'LicenseProjectPromissoryNoteComponent',
    //   errNum: 0,
    //   tabCode: TabCode.licenseProjectPromissoryNote,
    //   tabErrors: [],
    //   isVisible: true,
    // },
  ];
  tabsComponentList: tabsComponent[] = []
  subscriptions: Subscription[] = [];
  constructor(
    private _popupService: PopupService,
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,

  ) { }

  ngOnInit(): void {
    this.observeValidationError();
    this.observePopupEvents();
  }
  private getDataVisibilityOfLicenseProject() {
    this.tabsComponentList = [];
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProject().subscribe((res: string[]) => {
        this.mainTabsComponentList.forEach(tab => {
          if (res.includes(tab.tabCode as string)) {
            this.tabsComponentList.push(tab)
          }
        }
        )
      })
    )
  }

  // popup
  observePopupEvents(): void {
    // this.observecancelAction();
    this.observeconfirmAction();
  }

  // private observecancelAction() {
  //   this.subscriptions.push(
  //     this._popupService.cancelAction.subscribe((res: PopupData) => {
  //       // console.log(res);
  //     })
  //   );
  // }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (res.id == "LicenseRequestValidationPopupComponent") {
          this.closeDialog();
        }
      })
    );
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private observeValidationError(): void {
    this.subscriptions.push(
      this._licenseRequestService
        .getRequestValidation()
        .subscribe((res: RequestValidation | null) => {
          this.validationError = res;
          this.validateTabs();
          this.setTabErrorMsgArr()
          this.getDataVisibilityOfLicenseProject()
        })
    );
  }
  private validateTabs() {
    this.mainTabsComponentList.map((t: tabsComponent) => {
      return (t.errNum = this.getTabErrors(t.tabCode as string));
    });
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
    this.mainTabsComponentList.map((tab: tabsComponent) => {
      // find tab by tab code
      tab.tabErrors = this.getTabByTabCode(tab.tabCode as string) as tabError[];
    })
  }
  private getTabByTabCode(TabCode: string): tabError[] {
    let tabErrorsMsg = [] as tabError[]
    if (this.validationError) {
      this.validationError.tabs.map((tab: TabsError) => {
        if (tab.tabCode === TabCode) {
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
    // this.resetDataVisibilityOfLicenseProject();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
