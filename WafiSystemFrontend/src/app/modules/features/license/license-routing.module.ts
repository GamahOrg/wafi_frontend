import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseTypesComponent } from './pages/lincense-types/lincense-types.component';
import { LincenseListComponent } from './pages/lincense-list/lincense-list.component';
import { CreateLincenseComponent } from './pages/create-license/create-license.component';
import { LincenseSummaryComponent } from './pages/lincense-summary/lincense-summary.component';
import { LincenseDetailsComponent } from './pages/lincense-details/lincense-details.component';
import { LicenseCertificatesComponent } from './pages/license-certificates/license-certificates.component';
import { LicenseRequestApprovalsComponent } from './pages/license-request-approvals/license-request-approvals.component';
import { LicenseRequestApprovalsDetailsComponent } from './pages/license-request-approvals-details/license-request-approvals-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { RenewLicensesListComponent } from './pages/renew-licenses-list/renew-licenses-list.component';
import { EmployeeCreateLincenseComponent } from './pages/employee-create-lincense/employee-create-lincense.component';
import { EmployeeLicenseListComponent } from './pages/employee-license-list/employee-license-list.component';
import { LincenseRequestListComponent } from '../license-project-requests/pages/lincense-project-request-list/lincense-request-list.component';
import { EmployeeUnderStudingLicenseRequestsComponent } from './pages/employee-under-studing-license-requests/employee-under-studing-license-requests/employee-under-studing-license-requests.component';
import { ContractDocumentationListComponent } from './pages/contract-documentation-list/contract-documentation-list.component';
import { LicenseCertificateTemplateListComponent } from './pages/license-certificate-template-list/license-certificate-template-list.component';
import { LicenseCertificateTemplateDetailsComponent } from './pages/license-certificate-template-details/license-certificate-template-details.component';
import { AddLicenseCertificateTemplateComponent } from './pages/add-license-certificate-template/add-license-certificate-template.component';
import { CharteredAccountProjectListComponent } from './pages/chareted-account-project-list/chartered-account-project-list/chartered-account-project-list.component';
import { LicenseProjectAccountantComponent } from './pages/License-project-accountant/License-project-accountant.component';
import { AddPeriodicCharteredAccountantReportComponent } from './components/add-periodic-chartered-accountant-report/add-periodic-chartered-accountant-report.component';
import { PeriodicCharteredAccountantReportComponent } from './components/periodic-chartered-accountant-report/periodic-chartered-accountant-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.license.lincenseTypes,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.license.lincenseTypes,
    component: LincenseTypesComponent,
    data: { breadcrumb: 'التراخيص' },
  },
  {
    path: Configuration.pages.license.lincenseList,
    component: LincenseListComponent,
    data: { breadcrumb: 'قائمة التراخيص' },
  }, 
  {
    path: Configuration.pages.license.licenseUnderStudy,
    component: EmployeeUnderStudingLicenseRequestsComponent,
    data: { breadcrumb: 'تحديث طلب الترخيص'},
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
    path: Configuration.pages.license.lincenseSummary,
    component: LincenseSummaryComponent,
    data: { breadcrumb: 'تأكيد بيانات الطلب' },
  },
  {
    path: Configuration.pages.license.lincenseDetails,
    component: LincenseDetailsComponent,
    data: { breadcrumb: 'تفاصيل الطلب' },
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
    data: { breadcrumb: 'مشاريع المحاسب القانوني' },
  },
  {
    path: Configuration.pages.license.licenseProjectsAccountantDetails,
    component: LicenseProjectAccountantComponent,
    data: { breadcrumb: 'مشاريع المحاسب القانوني' },
  },
];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseRoutingModule { }
