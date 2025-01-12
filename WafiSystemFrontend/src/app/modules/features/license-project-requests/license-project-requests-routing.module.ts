import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseRequestListComponent } from './pages/lincense-project-request-list/lincense-request-list.component';
import { CancelLicenseRequestSummaryComponent } from './pages/cancel-license-request-summary/cancel-license-request-summary.component';
import { ChangeplanLicenseRequestSummaryComponent } from './pages/changeplan-license-request-summary/changeplan-license-request-summary.component';
import { ReactivateLicenseRequestSummaryComponent } from './pages/reactivate-license-request-summary/reactivate-license-request-summary.component';
import { LicenseProjectRequestDetailComponent } from './pages/license-project-request-detail/license-project-request-detail.component';
import { CreateProjectLicenseRequestComponent } from './pages/create-project-license-request/create-project-license-request.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { CreateChangePlanRequestComponent } from './pages/create-change-plan-request/create-change-plan-request.component';
import { CreateReactivateLicenseRequestComponent } from './pages/create-reactivate-license-request/create-reactivate-license-request.component';
import { CreateCancelLicenseRequestComponent } from './pages/create-cancel-license-request/create-cancel-license-request.component';

const routes: Routes = [ 
  {
    path: Configuration.pages.licenseProjectRequests.licenseProjectRequests,
    component: RequestsComponent,
    data: { breadcrumb: 'الطلبات الاعتيادية والغير اعتيادية'},
  }, 
  {
    path: Configuration.pages.licenseProjectRequests.licenseProjectRequestList,
    component: LincenseRequestListComponent,
    data: { breadcrumb: 'الطلبات الاعتيادية والغير اعتيادية'},
  }, 
  {
    path: Configuration.pages.licenseProjectRequests.createLicenseProjectRequestList,
    component: CreateProjectLicenseRequestComponent,
    data: { breadcrumb: 'انشاء طلب جديد'},
  }, 
  {
     path: Configuration.pages.licenseProjectRequests.cancelLicenseSummary,
     component: CancelLicenseRequestSummaryComponent,
     data: { breadcrumb: 'الغاء طلب الترخيص' },
  },
  {
    path: Configuration.pages.licenseProjectRequests.createcancelLicense,
    component: CreateCancelLicenseRequestComponent,
    data: { breadcrumb: 'الغاء طلب الترخيص' },
 },
 /*  {
    path: Configuration.pages.licenseProjectRequests.ProjectLicenseActiveRequestDetails,
    component: LicenseActiveRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل اعادة تشغيل الطلب' },
  }, */
  {
    path: Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary,
    component: ReactivateLicenseRequestSummaryComponent,
    data: { breadcrumb: 'اعادة تفعيل الرخصة' },
 },
 {
  path: Configuration.pages.licenseProjectRequests.createreactivaiteLicense,
  component: CreateReactivateLicenseRequestComponent,
  data: { breadcrumb: 'اعادة تفعيل الرخصة' },
},
 {
  path: Configuration.pages.licenseProjectRequests.changePlanSummary,
  component: ChangeplanLicenseRequestSummaryComponent,
  data: { breadcrumb: 'تغيير خطة المشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangePlanRequest,
  component: CreateChangePlanRequestComponent,
  data: { breadcrumb: 'تغيير خطة المشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails,
  component: LicenseProjectRequestDetailComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseProjectRequestsRoutingModule { }
