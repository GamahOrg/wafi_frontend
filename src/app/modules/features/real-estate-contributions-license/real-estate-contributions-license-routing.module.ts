import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseTypesComponent } from './pages/lincense-types/lincense-types.component';
import { LincenseListComponent } from './pages/lincense-list/lincense-list.component';
import { CreateLincenseComponent } from './pages/create-lincense/create-lincense.component';
import { LincenseSummaryComponent } from './pages/lincense-summary/lincense-summary.component';
import { LincenseDetailsComponent } from './pages/lincense-details/lincense-details.component';
import { LicenseCertificatesComponent } from './pages/license-certificates/license-certificates.component';
import { LicenseRequestApprovalsComponent } from './pages/license-request-approvals/license-request-approvals.component';
import { LicenseRequestApprovalsDetailsComponent } from './pages/license-request-approvals-details/license-request-approvals-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { RenewLicensesListComponent } from './pages/renew-licenses-list/renew-licenses-list.component';
import { EmployeeLicenseListComponent } from './pages/employee-license-list/employee-license-list.component';
import { EmployeeCreateLincenseComponent } from './pages/employee-create-lincense/employee-create-lincense.component';
import { LicenseProjectBuyerListComponent } from './pages/license-project-buyer-list/license-project-buyer-list.component';
import { ContractDocumentationListComponent } from './pages/contract-documentation-list/contract-documentation-list.component';
import { CharteredAccountProjectListComponent } from './pages/chareted-account-project-list/chartered-account-project-list/chartered-account-project-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.realEstateContributionslicense.lincenseTypes,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseTypes,
    component: LincenseTypesComponent,
    data: { breadcrumb: 'التراخيص' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseList,
    component: LincenseListComponent,
    data: { breadcrumb: 'قائمة التراخيص' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.charteredaccount,
    component: CharteredAccountProjectListComponent,
    data: { breadcrumb: 'مشاريع المحاسب القانوني' },
  },
  {
    path: `${Configuration.pages.realEstateContributionslicense.createLincense}/:code`,
    component: CreateLincenseComponent,
    data: { breadcrumb: 'انشاء طلب ترخيص جديد' },
  },
  {
    path: `${Configuration.pages.realEstateContributionslicense.renewLincense}/:code`,
    component: CreateLincenseComponent,
    data: { breadcrumb: 'تجديد طلب ترخيص جديد' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseSummary,
    component: LincenseSummaryComponent,
    data: { breadcrumb: 'تأكيد بيانات الطلب' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseDetails,
    component: LincenseDetailsComponent,
    data: { breadcrumb: 'تفاصيل الطلب' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseCertificates,
    component: LicenseCertificatesComponent,
    data: { breadcrumb: 'شهادات الترخيص' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseRequestApprovals,
    component: LicenseRequestApprovalsComponent,
    data: { breadcrumb: 'الموافقات' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.projectList,
    component: ProjectListComponent,
    data: { breadcrumb: 'المشاريع' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.projectDetails,
    component: ProjectDetailsComponent,
    data: { breadcrumb: 'تفاصيل المشروع' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.lincenseRequestApprovalDetails,
    component: LicenseRequestApprovalsDetailsComponent,
    data: { breadcrumb: 'تفاصيل طلب الموقف' },
  },
  {
    path: Configuration.pages.license.RenewLicensesList,
    component: RenewLicensesListComponent,
    data: { breadcrumb: 'تجديد الرخص' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.employeeCreateLicense,
    component: EmployeeCreateLincenseComponent,
    data: { breadcrumb: 'انشاء طلب ترخيص جديد كموظف' },
  },
  {
    path: Configuration.pages.realEstateContributionslicense.employeeLicenseList,
    component: EmployeeLicenseListComponent,
    data: { breadcrumb: 'قائمة تراخيص الموظف' },
  },
  {
    path: Configuration.pages.license.buyerList,
    component: LicenseProjectBuyerListComponent,
    data: { breadcrumb: 'قائمة المشترين' },
  },
  {
    path: Configuration.pages.license.contractdocumentation,
    component: ContractDocumentationListComponent,
    data: { breadcrumb: 'عقود التوثيق' },
  }, 
];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateContributionsLicenseRoutingModule { }
