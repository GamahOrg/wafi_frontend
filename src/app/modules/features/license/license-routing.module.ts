import { NgModule } from '@angular/core';
import { RouterModule, Routes, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseTypesComponent } from './pages/lincense-types/lincense-types.component';
import { LincenseListComponent } from './pages/lincense-list/lincense-list.component';
import { CreateLincenseComponent } from './pages/create-license/create-license.component';
import { LincenseSummaryComponent } from './pages/lincense-summary/lincense-summary.component';
import { LincenseDetailsComponent } from './pages/lincense-details/lincense-details.component';
import { FawriaLicenseDetailsComponent } from './pages/fawria-license-details/fawria-license-details.component';
import { FawriaLicenseComplateComponent } from './pages/fawria-license-complate/fawria-license-complate.component';
import { LicenseCertificatesComponent } from './pages/license-certificates/license-certificates.component';
import { LicenseRequestApprovalsComponent } from './pages/license-request-approvals/license-request-approvals.component';
import { LicenseRequestApprovalsDetailsComponent } from './pages/license-request-approvals-details/license-request-approvals-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { RenewLicensesListComponent } from './pages/renew-licenses-list/renew-licenses-list.component';
import { EmployeeCreateLincenseComponent } from './pages/employee-create-lincense/employee-create-lincense.component';
import { EmployeeLicenseListComponent } from './pages/employee-license-list/employee-license-list.component';
import { EmployeeUnderStudingLicenseRequestsComponent } from './pages/employee-under-studing-license-requests/employee-under-studing-license-requests/employee-under-studing-license-requests.component';
import { ContractDocumentationListComponent } from './pages/contract-documentation-list/contract-documentation-list.component';
import { LicenseCertificateTemplateListComponent } from './pages/license-certificate-template-list/license-certificate-template-list.component';
import { LicenseCertificateTemplateDetailsComponent } from './pages/license-certificate-template-details/license-certificate-template-details.component';
import { AddLicenseCertificateTemplateComponent } from './pages/add-license-certificate-template/add-license-certificate-template.component';
import { CharteredAccountProjectListComponent } from './pages/chareted-account-project-list/chartered-account-project-list/chartered-account-project-list.component';
import { CharteredAccountProjectTotalComponent } from './pages/chartered-account-project-total/chartered-account-project-total.component';
import { LicenseProjectAccountantComponent } from './pages/License-project-accountant/License-project-accountant.component';
import { LicenseProjectBuyerListComponent } from './components/license-project-buyer-list/license-project-buyer-list.component';
import { ShowDetailBuyerComponent } from './components/show-detail-buyer/show-detail-buyer.component';
import { AddPeriodicCharteredAccountantReportComponent } from './components/add-periodic-chartered-accountant-report/add-periodic-chartered-accountant-report.component';
import { PeriodicCharteredAccountantReportComponent } from './components/periodic-chartered-accountant-report/periodic-chartered-accountant-report.component';
import { LincenseProjectZonesComponent } from './components/Zones/lincense-project-zones/lincense-project-zones.component';
import { BusinessPaymentTemplatesComponent } from './pages/business-payment-templates/business-payment-templates.component';
import { RealStateDeveloperUnitsListComponent } from './pages/real-state-developer-units-list/real-state-developer-units-list.component';
import { ViewContractComponent } from './components/view-contract/view-contract.component';
import { EditFarzNoteComponent } from './pages/edit-farz-note/edit-farz-note.component';
import { BuyerContractUpdateComponent } from './pages/contracts/buyer-contract-update/buyer-contract-update.component';
import { AddContractPopupComponent } from './pages/contracts/add-contract-popup/add-contract-popup.component';
import { ContractUnitDetailsComponent } from './pages/contracts/contract-unit-details/contract-unit-details.component';
import { BuyerContractViewDetailsComponent } from './pages/contracts/buyer-contract-view-details/buyer-contract-view-details.component';
import { ContractRequestDetailsComponent } from './pages/contracts/contract-request-details/contract-request-details.component';
import { ContractRequestListComponent } from './pages/contracts/contract-request-list/contract-request-list.component';
import { ContractViewerComponent } from './components/contract-viewer/contract-viewer.component';
import { PaymentTermsTabsComponent } from './components/payment-terms-tabs/payment-terms-tabs.component';
import { BuyerListTabsComponent } from './components/buyer-list-tabs/buyer-list-tabs.component';
import { ItemsLogComponent } from './pages/items-log/items-log.component';
import { LicenseProjectFawriaDeveloperListComponent } from './pages/license-project-fawria-developer-list/license-project-fawria-developer-list.component';
import { FawriaProjectPartiesStatusComponent } from './components/fawria-components/fawria-project-parties-status/fawria-project-parties-status.component';
import { FawriaAgreementFileComponent } from './components/fawria-components/fawria-agreement-file/fawria-agreement-file.component';
import { DeveloperApprovalsListComponent } from './pages/developer-approvals-list/developer-approvals-list.component';
import { AgreementsApprovalListComponent } from './pages/agreements-approval-list/agreements-approval-list.component';
import { DeveloperApprovalDetailsComponent } from './pages/developer-approval-details/developer-approval-details.component';
import { LicenseTabsComponent } from './pages/license-tabs/license-tabs.component';
import { CorrectingUnitsDetailsComponent } from './pages/correcting-units-details/correcting-units-details.component';
import { CorrectionLicenseSummaryComponent } from './pages/correction-license-summary/correction-license-summary.component';
import { CorrectionLicenseProjectRequestDetailsComponent } from './pages/correction-license-project-request-details/correction-license-project-request-details.component';
import { EditCorrectionFarzNoteComponent } from './pages/edit-correction-farz-note/edit-correction-farz-note.component';
import { EngineerApprovalDetailsComponent } from './pages/engineer-approval-details/engineer-approval-details.component';
import { CharteredAccountApprovalDetailsComponent } from './pages/chartered-account-approval-details/chartered-account-approval-details.component';
import { DeedOwnersListComponent } from './pages/deed-owners-list/deed-owners-list.component';
import { OwnerApprovalDetailsComponent } from './pages/owner-approval-details/owner-approval-details.component';
import { SearchExchangeDocumentsListComponent } from './pages/search-exchange-documents-list/search-exchange-documents-list.component';
import { ExchangeDocumentsListComponent } from './pages/exchange-documents-list/exchange-documents-list.component';
import { AddExchangeDocumentComponent } from './components/add-exchange-document/add-exchange-document.component';
import { ViewExchangeRequestDetailsComponent } from './pages/view-exchange-request-details/view-exchange-request-details.component';
import { SharedLicenseProjectService } from './services/sharedLicenseProject/shared-license-project.service';
import { CustomerTypeEnum } from './models/search-exchange-document-list-response-dto';
import { RealStateCharteredAccountantUnitsListComponent } from './pages/real-state-chartered-accountant-units-list/real-state-chartered-accountant-units-list.component';
import { ContractAccountantUnitDetailsComponent } from './pages/contracts/contract-accountant-unit-details/contract-accountant-unit-details.component';
import { SupervisionFeesComponent } from './pages/supervision-fees/supervision-fees.component';
import { SupervisionFeeInvoicesComponent } from './pages/supervision-fee-invoices/supervision-fee-invoices.component';
import { SupervisionFeeInvoiceDetailsComponent } from './pages/supervision-fee-invoice-details/supervision-fee-invoice-details.component';

const licenseTypeBreadcrumbResolver: ResolveFn<string> = () => {
  const sharedLicenseProjectService = inject(SharedLicenseProjectService);
  return sharedLicenseProjectService.getLicenseTypeNameStorage() || 'تأكيد بيانات الطلب';
};

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.license.lincenseList,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.license.lincenseTypes,
    data: { breadcrumb: 'انشاء طلب جديد' },
    children: [
      {
        path: '',
        component: LincenseTypesComponent,
        data: { breadcrumb: '' },
      },
      {
        path: Configuration.pages.license.lincenseSummary,
        component: LincenseSummaryComponent,
        resolve: { licenseTypeName: licenseTypeBreadcrumbResolver },
        data: { breadcrumb: (data: any) => data['licenseTypeName'] || 'تأكيد بيانات الطلب' },
      },
    ],
  },
  {
    path: Configuration.pages.license.lincenseList,
    component: LicenseTabsComponent,
    data: { breadcrumb: 'قائمة التراخيص' },
  },
  {
    path: Configuration.pages.license.licenseUnderStudy,
    component: EmployeeUnderStudingLicenseRequestsComponent,
    data: { breadcrumb: 'تحديث طلب الترخيص' },
  },
  {
    path: `${Configuration.pages.license.createLincense}/:code`,
    component: CreateLincenseComponent,
    data: { breadcrumb: 'انشاء طلب ترخيص جديد' },
  },
  {
    path: `${Configuration.pages.license.renewLincense}/:code`,
    component: CreateLincenseComponent,
    data: { breadcrumb: 'تجديد طلب ترخيص جديد' },
  },
  {
    path: Configuration.pages.license.lincenseDetails,
    component: LincenseDetailsComponent,
    data: { breadcrumb: 'تفاصيل الطلب' },
  },
  {
    path: Configuration.pages.license.fawriaLicenseDetails,
    component: FawriaLicenseDetailsComponent,
    data: { breadcrumb: 'تفاصيل طلب الرخصة الفورية' },
  },
  {
    path: Configuration.pages.license.fawriaLicenseComplate,
    component: FawriaLicenseComplateComponent,
    data: { breadcrumb: 'ملف المشروع' },
  },
  {
    path: Configuration.pages.license.farzNote,
    component: EditFarzNoteComponent,
    data: { breadcrumb: 'معالجة ملاحظات فرز' },
  },
  {
    path: Configuration.pages.license.correctionFarzNote,
    component: EditCorrectionFarzNoteComponent,
    data: { breadcrumb: 'معالجة ملاحظات فرز' },
  },
  {
    path: Configuration.pages.license.lincenseCertificates,
    component: LicenseCertificatesComponent,
    data: { breadcrumb: 'شهادات الترخيص' },
  },
  {
    path: Configuration.pages.license.lincenseRequestApprovals,
    component: LicenseRequestApprovalsComponent,
    data: { breadcrumb: 'الموافقات' },
  },
  {
    path: Configuration.pages.license.lincenseRequestApprovalDetails,
    component: LicenseRequestApprovalsDetailsComponent,
    data: { breadcrumb: 'تفاصيل طلب الموقف' },
  },
  {
    path: Configuration.pages.license.projectList,
    component: ProjectListComponent,
    data: { breadcrumb: 'المشاريع' },
  },
  {
    path: Configuration.pages.license.projectDetails,
    component: ProjectDetailsComponent,
    data: { breadcrumb: 'تفاصيل المشروع' },
  },
  {
    path: Configuration.pages.license.RenewLicensesList,
    component: RenewLicensesListComponent,
    data: { breadcrumb: 'تجديد الرخص' },
  },
  {
    path: Configuration.pages.license.employeeCreateLicense,
    component: EmployeeCreateLincenseComponent,
    data: { breadcrumb: 'انشاء طلب ترخيص جديد كموظف' },
  },
  {
    path: Configuration.pages.license.employeeLicenseList,
    component: EmployeeLicenseListComponent,
    data: { breadcrumb: 'قائمة تراخيص الموظف' },
  },
  {
    path: Configuration.pages.license.addPeriodiccharteredaccountantreport,
    component: AddPeriodicCharteredAccountantReportComponent,
    data: { breadcrumb: 'أضافة تقرير محاسب قانوني عن فترة' },
  },
  {
    path: Configuration.pages.license.periodiccharteredaccountantreportlist,
    component: PeriodicCharteredAccountantReportComponent,
    data: { breadcrumb: 'قائمة تقرير محاسب قانوني عن فترة' },
  },
  {
    path: Configuration.pages.license.contractdocumentation,
    component: ContractDocumentationListComponent,
    data: { breadcrumb: 'عقود التوثيق' },
  },
  {
    path: Configuration.pages.license.contractDetailsWithParam,
    component: BuyerContractUpdateComponent,
    data: { breadcrumb: 'تفاصيل العقد' },
  },
  {
    path: Configuration.pages.license.contractReadonlyWithParam,
    component: BuyerContractViewDetailsComponent,
    // component: ContractReadonlyViewComponent,
    data: { breadcrumb: 'تفاصيل العقد' },
  },

  {
    path: Configuration.pages.license.licensecertificatetemplate,
    component: LicenseCertificateTemplateListComponent,
    data: { breadcrumb: 'قائمة المشاريع الجديدة' },
  },
  {
    path: Configuration.pages.license.licensecertificatetemplatedetails,
    component: LicenseCertificateTemplateDetailsComponent,
    data: { breadcrumb: 'عرض التفاصيل' },
  },
  {
    path: Configuration.pages.license.addlicensecertificatetemplate,
    component: AddLicenseCertificateTemplateComponent,
    data: { breadcrumb: 'إضافة مشروع جديد' },
  },
  {
    path: Configuration.pages.license.charteredaccount,
    component: CharteredAccountProjectListComponent,
    data: { breadcrumb: 'قائمة مشاريع المحاسب القانوني' },
  },
  {
    path: Configuration.pages.license.charteredAccountProjectTotal,
    component: CharteredAccountProjectTotalComponent,
    data: { breadcrumb: 'الاجماليات' },
  },
  {
    path: Configuration.pages.license.buyerList,
    component: LicenseProjectBuyerListComponent,
    data: { breadcrumb: 'سجل المشتريين' },
  },
  {
    path: Configuration.pages.license.buyerListTabs,
    component: BuyerListTabsComponent,
    data: { breadcrumb: 'سجل المشتريين' },
  },
  {
    path: Configuration.pages.license.buyerDetails,
    component: ShowDetailBuyerComponent,
    data: { breadcrumb: 'تفاصيل المشتري' },
  },
  {
    path: Configuration.pages.license.realStateDeveloperUnitsListComponent,
    component: RealStateDeveloperUnitsListComponent,
    data: { breadcrumb: 'قائمة وحدات المشروع' },
  },
  {
    path: Configuration.pages.license.realStateCharteredAccountantUnitsListComponent,
    component: RealStateCharteredAccountantUnitsListComponent,
    data: { breadcrumb: 'قائمة وحدات المشروع' },
  },
  {
    path: Configuration.pages.license.unitDetailsWithParam,
    component: ContractUnitDetailsComponent,
    data: { breadcrumb: 'تفاصيل الوحدة' },
  },
  {
    path: Configuration.pages.license.accountantUnitDetailsWithParam,
    component: ContractAccountantUnitDetailsComponent,
    data: { breadcrumb: 'تفاصيل الوحدة' },
  },
  {
    path: Configuration.pages.license.contractRequestList,
    component: ContractRequestListComponent,
    data: { breadcrumb: 'طلبات ألغاء العقود' },
  },
  {
    path: Configuration.pages.license.contractRequestDetails,
    component: ContractRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل طلب الغاء العقد' },
  },
  {
    path: Configuration.pages.license.addContractWithParam,
    component: AddContractPopupComponent,
    data: { breadcrumb: 'إضافة عقد جديد' },
  },
  {
    path: `${Configuration.pages.license.viewContract}/:contractId`,
    component: ViewContractComponent,
    data: { breadcrumb: 'عرض العقد' },
  },
  {
    path: Configuration.pages.license.licenseProjectsAccountantDetails,
    component: LicenseProjectAccountantComponent,
    data: {
      breadcrumb: 'تفاصيل مشاريع المحاسب القانوني',
      replaceParentBreadcrumb: {
        label: 'قائمة مشاريع المحاسب القانوني',
        url: `/${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.charteredaccount}`,
      },
    },
  },
  {
    path: Configuration.pages.license.zones,
    component: LincenseProjectZonesComponent,
    data: { breadcrumb: 'النطاقات' },
  },
  {
    path: Configuration.pages.license.businessPaymentTemplates,
    component: BusinessPaymentTemplatesComponent,
    data: { breadcrumb: 'نماذج الدفعات المالية' },
  },
  {
    path: Configuration.pages.license.contractViewer,
    component: ContractViewerComponent,
    data: { breadcrumb: 'عقد البيع' },
  },
  {
    path: Configuration.pages.license.paymentTermsTabs,
    component: PaymentTermsTabsComponent,
    data: { breadcrumb: 'الدفعات والشروط الإضافية' },
  },

  {
    path: Configuration.pages.license.correctionLicenseSummary,
    component: CorrectionLicenseSummaryComponent,
    data: { breadcrumb: 'ملخص تصحيح الرخصة' },
  },
  {
    path: Configuration.pages.license.itemsLog,
    component: ItemsLogComponent,
    data: { breadcrumb: 'سجل بنود' },
  },
  {
    path: Configuration.pages.license.licenseProjectFawriaDeveloperList,
    component: LicenseProjectFawriaDeveloperListComponent,
    data: { breadcrumb: 'الرخص الفورية' },
  },
  {
    path: Configuration.pages.license.projectPartiesStatus,
    component: FawriaProjectPartiesStatusComponent,
    data: { breadcrumb: 'تفقد حالة المحاسب والإستشاري' },
  },
  {
    path: Configuration.pages.license.fawriaAgreementFileWithParam,
    component: FawriaAgreementFileComponent,
    data: { breadcrumb: 'ملف الاتفاقية' },
  },
  {
    path: Configuration.pages.license.developerApprovalsList,
    component: AgreementsApprovalListComponent,
    data: { breadcrumb: 'اتفاقيات التطوير العقارى' },
  },
  {
    path: Configuration.pages.license.developerApprovalDetailsWithParam,
    component: DeveloperApprovalDetailsComponent,
    data: { breadcrumb: 'تفاصيل اتفاقية التطوير العقارى' },
  },
  {
    path: Configuration.pages.license.enginnerApprovalDetailsWithParam,
    component: EngineerApprovalDetailsComponent,
    data: { breadcrumb: 'تفاصيل اتفاقية الإستشاري  ' },
  },
  {
    path: Configuration.pages.license.charteredAccountApprovalDetailsWithParam,
    component: CharteredAccountApprovalDetailsComponent,
    data: { breadcrumb: 'تفاصيل اتفاقية المحاسب القانوني' },
  },
  {
    path: Configuration.pages.license.deedOwnerList,
    component: DeedOwnersListComponent,
    data: { breadcrumb: 'اتفاقيات المشروع' },
  },
  {
    path: Configuration.pages.license.ownerApprovalDetailsWithParam,
    component: OwnerApprovalDetailsComponent,
    data: { breadcrumb: 'تفاصيل اتفاقية التطوير العقارى' },
  },
  {
    path: Configuration.pages.license.correctingUnitsDetailsWithParam,
    component: CorrectingUnitsDetailsComponent,
    data: { breadcrumb: 'تفاصيل طلب تصحيح الوحدات' },
  },
  {
    path: Configuration.pages.license.correctionLicenseProjectRequestDetails,
    component: CorrectionLicenseProjectRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل طلب تصحيح الوحدات' },
  },
  {
    path: Configuration.pages.license.searchExchangeDocumentsList,
    component: SearchExchangeDocumentsListComponent,
    data: { breadcrumb: 'قائمة وثائق الصرف' },
  },
  {
    path: Configuration.pages.license.exchangeDocumentsListOnProject,
    component: ExchangeDocumentsListComponent,
    data: { breadcrumb: 'قائمة وثائق الصرف' },
  },
  {
    path: Configuration.pages.license.addExchangeDocuments,
    component: AddExchangeDocumentComponent,
    data: { breadcrumb: 'انشاء وثائق الصرف' },
  },
   {
    path: Configuration.pages.license.exchangeDocumentsDetails+'/:customerType/:id',
    component: ViewExchangeRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل وثائق الصرف' },
  },
  {
    path: Configuration.pages.license.developerExchangeDocumentsDetails+'/:id',
    component: ViewExchangeRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل وثائق الصرف', customerType: CustomerTypeEnum.DeveloperDelegator },
  },
  {
    path: Configuration.pages.license.accountantExchangeDocumentsDetails+'/:id',
    component: ViewExchangeRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل وثائق الصرف', customerType: CustomerTypeEnum.AccountantDelegator },
  },
  {
    path: Configuration.pages.license.engineeringExchangeDocumentsDetails+'/:id',
    component: ViewExchangeRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل وثائق الصرف', customerType: CustomerTypeEnum.ConsultantDelegator },
  },
  {
    path: Configuration.pages.license.supervisionFees,
    component: SupervisionFeesComponent,
    data: { breadcrumb: 'رسوم الاشراف والمتابعة' },
  },
  {
    path: Configuration.pages.license.supervisionFeeInvoices,
    component: SupervisionFeeInvoicesComponent,
    data: { breadcrumb: 'الفواتير' },
  },
  {
    path: Configuration.pages.license.supervisionFeeInvoiceDetails,
    component: SupervisionFeeInvoiceDetailsComponent,
    data: { breadcrumb: 'تفاصيل الفاتورة' },
  },
];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenseRoutingModule {}
