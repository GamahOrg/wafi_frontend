import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { LicenseRequestCharteredAccountantComponent } from '../license-request-chartered-accountant/license-request-chartered-accountant.component';
import { LicenseRequestEngineeringConsultantComponent } from '../license-request-engineering-consultant/license-request-engineering-consultant.component';
import { LicenseRequestFinalBeneficiaryContractComponent } from '../license-request-final-beneficiary-contract/license-request-final-beneficiary-contract.component';
import { LicenseRequestMarketerComponent } from '../license-request-marketer/license-request-marketer.component';
import { LicenseRequestSubDeveloperComponent } from '../license-request-sub-developer/license-request-sub-developer.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';
import { LicenseProjectMainRealStateDeveloperComponent } from '../license-project-main-real-state-developer/license-project-main-real-state-developer.component';
import { LicenseBeneficiaryContractFormAdditionalTermsComponent } from '../license-beneficiary-contract-form-additional-terms/license-beneficiary-contract-form-additional-terms.component';
import { LicenseRequestFinalTenantContractComponent } from '../license-request-final-tenant-contract/license-request-final-tenant-contract.component';
import { ViewBusinessPaymentTemplatesComponent } from '../view-business-payment-templates/view-business-payment-templates.component';
@Component({
  selector: 'app-license-request-project-parties',
  templateUrl: './license-request-project-parties.component.html',
  styleUrls: ['./license-request-project-parties.component.scss'],
})
export class LicenseRequestProjectPartiesComponent {
  subscriptions: Subscription[] = [];
  mainAccordionComponentList = [
    {
      icon: '',
      title: 'الاستشاري الهندسي',
      component: LicenseRequestEngineeringConsultantComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectEngineeringConsultants,
    },
    {
      icon: '',
      title: 'المحاسب القانوني',
      component: LicenseRequestCharteredAccountantComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectCharteredAccountants,
    },
    {
      icon: '',
      title: 'المطور الفرعى',
      component: LicenseRequestSubDeveloperComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectSubDevelopers,
    },
    {
      icon: '',
      title: 'المسوق',
      component: LicenseRequestMarketerComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectRealStateMarketers,
    },
    {
      icon: '',
      title: 'المطور الرئيسي',
      component: LicenseProjectMainRealStateDeveloperComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectMainRealStateDeveloper,
    },
    {
      icon: '',
      title: 'عقد المستفيد النهائي',
      component: LicenseRequestFinalBeneficiaryContractComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.sysLicenseBeneficiaryContractForms,
    },
    {
      icon: '',
      title: 'عقد المستأجر',
      component: LicenseRequestFinalTenantContractComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.FinalTenantContract,
    },
    {
      icon: "",
      title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
      component: LicenseBeneficiaryContractFormAdditionalTermsComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.beneficiaryContractFormAdditionalTerms,
    },
    {
      icon: "",
      title: 'خطة الدفعات المالية',
      component: ViewBusinessPaymentTemplatesComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.LicenseProjectBusinessPayment,
    },
  ];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) {}
  ngOnInit(): void {
    this.observeDataVisibilityOfLicenseProject();
  }
  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainAccordion(
      this.subscriptions,
      this.mainAccordionComponentList,
      this.accordionContent
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
