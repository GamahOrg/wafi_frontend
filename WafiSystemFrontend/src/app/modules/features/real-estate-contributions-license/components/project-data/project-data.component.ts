import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { ProjectBasicDataComponent } from '../project-basic-data/project-basic-data.component';
import { ProjectAddressComponent } from '../project-address/project-address.component';
import { BlocksAndbuildingsAndunitsComponent } from '../blocks-andbuildings-andunits/blocks-andbuildings-andunits.component';
import { ArchitecturalDesignFilesComponent } from '../architectural-design-files/architectural-design-files.component';
import { ConstructionLicensesComponent } from '../construction-licenses/construction-licenses.component';
import { AdditionalServicesComponent } from '../additional-services/additional-services.component';
import { ProjectLandComponent } from '../project-land/project-land.component';
import { ProjectLandTitleDeedsComponent } from '../project-land-title-deeds/project-land-title-deeds.component';
import { ProjectModuleModelsComponent } from '../project-module-models/project-module-models.component';
import { ProjectUnitCodesComponent } from '../project-unit-codes/project-unit-codes.component';
import { LicenseRequestService } from '../../services/license-request.service';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { ProjectQuantitiesTableComponent } from '../project-quantities-table/project-quantities-table.component';
import { ExternalProjectInformationComponent } from '../external-project-information/external-project-information.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';
import { ProjectExternalAddressComponent } from '../project-external-address/project-external-address.component';
import { ProjectDocumentDataComponent } from '../project-document-data/project-document-data.component';
import { ExhibitionDataComponent } from '../exhibition-data/exhibition-data.component';
import { DetachedLicenseProjectUnitsComponent } from '../detached-license-project-units/detached-license-project-units.component';
import { VisitorEngineeringConsultantComponent } from '../visitor-engineering-consultant/visitor-engineering-consultant.component';
import { ProjectDeveloperComponent } from '../project-developer/project-developer.component';
import { RequestAttachmentsComponent } from '../request-attachments/request-attachments.component';
import { PromissoryNoteComponent } from '../promissory-note/promissory-note.component';
import { MainContributionDataComponent } from '../main-contribution-data/main-contribution-data.component';
import { CertifiedLicenseDataComponent } from '../certified-license-data/certified-license-data.component';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.scss']
})
export class ProjectDataComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'البيانات الأساسية للمشروع',
      Component: ProjectBasicDataComponent,
      disabled: false,
      id: 'ProjectBasicDataComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectMainData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات رخصة المشروع',
      Component: CertifiedLicenseDataComponent,
      disabled: false,
      id: 'CertifiedLicenseDataComponent',
      errNum: 0,
      tabCode: TabCode.certifiedLicenseData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'سند لأمر',
      Component: PromissoryNoteComponent,
      disabled: false,
      id: 'PromissoryNoteComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectPromissoryNote,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'عنوان المشروع',
      Component: ProjectAddressComponent,
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
      Component: ProjectExternalAddressComponent,
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
      Component: RequestAttachmentsComponent,
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
      Component: ProjectDeveloperComponent,
      disabled: false,
      id: 'ProjectDeveloperComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDeveloper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'البيانات الأساسية للمساهمه عقاريه',
      Component: MainContributionDataComponent,
      disabled: false,
      id: 'MainContributionDataComponent',
      errNum: 0,
      tabCode: TabCode.contributionData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أرض المشروع',
      Component: ProjectLandComponent,
      disabled: false,
      id: 'ProjectLandComponent',
      errNum: 0,
      tabCode: TabCode.projectLandData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'صكوك أرض المشروع',
      Component: ProjectLandTitleDeedsComponent,
      disabled: false,
      id: 'ProjectLandTitleDeedsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDeed,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'وحدات المشروع',
      Component: DetachedLicenseProjectUnitsComponent,
      disabled: false,
      id: 'DetachedLicenseProjectUnitsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectUnits,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الزون و بلوكات وعمائر المشروع',
      Component: BlocksAndbuildingsAndunitsComponent,
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
      Component: ProjectModuleModelsComponent,
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
      Component: ProjectUnitCodesComponent,
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
      Component: ArchitecturalDesignFilesComponent,
      disabled: false,
      id: 'ArchitecturalDesignFilesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDesign,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الرخص الإنشائية',
      Component: ConstructionLicensesComponent,
      disabled: false,
      id: 'ConstructionLicensesComponent',
      errNum: 0,
      tabCode: TabCode.constructionLicense,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الخدمات الإضافية',
      Component: AdditionalServicesComponent,
      disabled: false,
      id: 'AdditionalServicesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectServices,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'جدول كميات المشروع',
      Component: ProjectQuantitiesTableComponent,
      disabled: false,
      id: 'ProjectQuantitiesTableComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectQuantitiesTableFiles,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'وثائق الطلب',
      Component: ExternalProjectInformationComponent,
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
      Component: ProjectDocumentDataComponent,
      disabled: false,
      id: 'ProjectDocumentDataComponent',
      errNum: 0,
      tabCode: TabCode.projectDocumentData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الاستشاري الهندسي الزائر',
      Component: VisitorEngineeringConsultantComponent,
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
      Component: ExhibitionDataComponent,
      disabled: false,
      id: 'ExhibitionDataComponent',
      errNum: 0,
      tabCode: TabCode.exhibitionData,
      tabErrors: [],
      isVisible: true,
    },
  ];
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
