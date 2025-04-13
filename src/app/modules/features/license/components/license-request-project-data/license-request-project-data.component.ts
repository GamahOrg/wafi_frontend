import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionComponent, accordionContent } from 'src/app/shared/models/accordion.model';
import { LicenseProjectAdditionalServicesComponent } from '../license-project-additional-services/license-project-additional-services.component';
import { LicenseProjectArchitecturalDesignFilesComponent } from '../license-project-architectural-design-files/license-project-architectural-design-files.component';
import { LicenseProjectBlocksAndbuildingsAndunitsComponent } from '../license-project-blocks-andbuildings-andunits/license-project-blocks-andbuildings-andunits.component';
import { LicenseProjectConstructionLicensesComponent } from '../license-project-construction-licenses/license-project-construction-licenses.component';
import { LicenseProjectProjectAddressComponent } from '../license-project-project-address/license-project-project-address.component';
import { LicenseProjectProjectBasicDataComponent } from '../license-project-project-basic-data/license-project-project-basic-data.component';
import { LicenseProjectProjectLandTitleDeedsComponent } from '../license-project-project-land-title-deeds/license-project-project-land-title-deeds.component';
import { LicenseProjectProjectLandComponent } from '../license-project-project-land/license-project-project-land.component';
import { LicenseProjectProjectModuleModelsComponent } from '../license-project-project-module-models/license-project-project-module-models.component';
import { LicenseProjectProjectUnitCodesComponent } from '../license-project-project-unit-codes/license-project-project-unit-codes.component';
import { LicenseProjectQuantitiesTableFilesComponent } from '../license-project-quantities-table-files/license-project-quantities-table-files.component';
import { LicenseProjectExternalProjectDataComponent } from '../license-project-external-project-data/license-project-external-project-data.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ProjectUnitsStatementComponent } from '../project-units-statement/project-units-statement.component';
import { TabCode } from '../../models/tab-code.model';
import { LicenseProjectExternalAddressComponent } from '../license-project-external-address/license-project-external-address.component';
import { LicenseProjectDocumentDataComponent } from '../license-project-document-data/license-project-document-data.component';
import { LicenseProjectExhibitionsComponent } from '../license-project-exhibitions/license-project-exhibitions.component';
import { LicenseProjectVisitorEngineeringConsultantComponent } from '../license-project-visitor-engineering-consultant/license-project-visitor-engineering-consultant.component';
import { DetachedLicenseProjectUnitsComponent } from '../detached-license-project-units/detached-license-project-units.component';
import { LicenseProjectRequestAttachmentComponent } from '../license-project-request-attachment/license-project-request-attachment.component';
import { LicenseProjectDeveloperComponent } from '../license-project-developer/license-project-developer.component';
import { LicenseProjectPromissoryNoteComponent } from '../license-project-promissory-note/license-project-promissory-note.component';
import { CertifiedLicenseDataComponent } from '../certified-license-data/certified-license-data.component';

@Component({
  selector: 'app-license-request-project-data',
  templateUrl: './license-request-project-data.component.html',
  styleUrls: ['./license-request-project-data.component.scss']
})
export class LicenseRequestProjectDataComponent {
  subscriptions: Subscription[] = [];
  mainAccordionComponentList = [    
    {
      icon: "",
      title: 'بيانات رخصة المشروع',
      component: CertifiedLicenseDataComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.certifiedLicenseData,
    } as accordionComponent,
    {
      icon: "",
      title: ' بيانات الأساسية للمشروع',
      component: LicenseProjectProjectBasicDataComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectMainData,
    } as accordionComponent,
    {
      icon: "",
      title: 'عنوان المشروع',
      component: LicenseProjectProjectAddressComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectAddress,
    } as accordionComponent,
    {
      icon: '',
      title: 'عنوان المشروع',
      component: LicenseProjectExternalAddressComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectExternalAddress,
    } as accordionComponent,
    {
      icon: "",
      title: 'مرفقات الطلب',
      component: LicenseProjectRequestAttachmentComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.requestAttachments,
    } as accordionComponent,
    {
      icon: "",
      title: 'سند لأمر',
      component: LicenseProjectPromissoryNoteComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectPromissoryNote,
    } as accordionComponent,
    {
      icon: '',
      title: 'المطور عقاري',
      component: LicenseProjectDeveloperComponent, // need to be add
      disabled: false,
      isVisible: true,
      id: 'ProjectDeveloperComponent',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectDeveloper,
    } as accordionComponent,

    {
      icon: "",
      title: 'أرض المشروع',
      component: LicenseProjectProjectLandComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.projectLandData
    } as accordionComponent,
    {
      icon: "",
      title: 'صكوك أرض المشروع',
      component: LicenseProjectProjectLandTitleDeedsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectDeed
    } as accordionComponent,
    {
      icon: "",
      title: 'وحدات المشروع',
      component: DetachedLicenseProjectUnitsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectUnits,
    } as accordionComponent,
    {
      icon: "",
      title: 'الزون و بلوكات وعمائر المشروع',
      component: LicenseProjectBlocksAndbuildingsAndunitsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectZone,
    } as accordionComponent,
    {
      icon: "",
      title: 'أنواع الوحدات بالبلوك / العمارة',
      component: LicenseProjectProjectModuleModelsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectModel,
    } as accordionComponent,
    {
      icon: "",
      title: 'أكواد وحدات المشروع',
      component: LicenseProjectProjectUnitCodesComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectCodes,
    } as accordionComponent,
    {
      icon: "",
      title: 'ملفات التصاميم المعمارية للمشروع',
      component: LicenseProjectArchitecturalDesignFilesComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectDesign,
    } as accordionComponent,
    {
      icon: "",
      title: 'الرخص الإنشائية',
      component: LicenseProjectConstructionLicensesComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.constructionLicense
    } as accordionComponent,
    {
      icon: "",
      title: 'الخدمات الإضافية',
      component: LicenseProjectAdditionalServicesComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectServices
    } as accordionComponent,
    {
      icon: "",
      title: 'جدول كميات المشروع',
      component: LicenseProjectQuantitiesTableFilesComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.licenseProjectQuantitiesTableFiles
    } as accordionComponent,
    {
      icon: "",
      title: 'وثائق الطلب',
      component: LicenseProjectExternalProjectDataComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.externalProjectInformation
    } as accordionComponent,
    {
      icon: "",
      title: 'وثائق المشروع',
      component: LicenseProjectDocumentDataComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.projectDocumentData
    } as accordionComponent,
    {
      icon: "",
      title: 'بيان وحدات المشروع',
      component: ProjectUnitsStatementComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.projectUnitsStatement
    } as accordionComponent,

    {
      icon: "",
      title: 'الاستشاري الهندسي الزائر ',
      component: LicenseProjectVisitorEngineeringConsultantComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.visitorEngineeringConsultant
    } as accordionComponent,
    {
      icon: "",
      title: 'بيانات المعرض',
      component: LicenseProjectExhibitionsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      accordionCode: TabCode.exhibitionData,
    } as accordionComponent,
  ] as accordionComponent[];

  accordionContent: accordionContent =
    {
      oneAtATime: true,
      isAnimated: true,
      accordionComponentList: [],
    }
  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }
  ngOnInit(): void {
    this.observeDataVisibilityOfLicenseProject();
  }
  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainAccordion(this.subscriptions, this.mainAccordionComponentList, this.accordionContent)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
