import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateComponent } from './pages/create/create.component';
import { QualifyingCertificatesComponent } from './pages/qualifying-certificates/qualifying-certificates.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { RequestListComponent } from './pages/request-list/request-list.component';
import { RequestSummaryComponent } from './pages/request-summary/request-summary.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RenewQualifyingListComponent } from './pages/renew-qualifying-list/renew-qualifying-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.realEstateContributionsQualifying.requests,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.realEstateContributionsQualifying.requests,
    component: RequestsComponent,
    data: { breadcrumb: 'الطلبات' },
  },
  {
    path: Configuration.pages.realEstateContributionsQualifying.requestList,
    component: RequestListComponent,
    data: { breadcrumb: 'قائمة الطلبات' },
  },
  {
    path: `${Configuration.pages.realEstateContributionsQualifying.createRequest}/:code`,
    component: CreateComponent,
    data: { breadcrumb: 'انشاء طلب جديد' },
  },
  {
    path: `${Configuration.pages.qualifying.renewRequest}/:code`,
    component: CreateComponent,
    data: { breadcrumb: 'تجديد طلب جديد' },
  },
  {
    path: `${Configuration.pages.realEstateContributionsQualifying.requestSummary}/:code/:period`,
    component: RequestSummaryComponent,
    data: { breadcrumb: 'تأكيد بيانات الطلب' },
    // data: {
    //   breadcrumb: (data: any) => {
    //     console.log('data', data);
    //     return `${data.user.name}`;
    //   },
    // },
  },
  {
    path: `${Configuration.pages.realEstateContributionsQualifying.renewRequestSummary}/:code/:period`,
    component: RequestSummaryComponent,
    data: { breadcrumb: 'تأكيد بيانات الطلب' },
  },
  {
    path: Configuration.pages.realEstateContributionsQualifying.requestDetails,
    component: RequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل الطلب' },
  },
  {
    path: Configuration.pages.realEstateContributionsQualifying.qualifyingCertificates,
    component: QualifyingCertificatesComponent,
    data: { breadcrumb: 'شهادات طلب التأهيل' },
  },
  {
    path: Configuration.pages.qualifying.renewQualifyingList,
    component: RenewQualifyingListComponent,
    data: { breadcrumb: 'تجديد طلبات التأهيل' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateContributionsQualifyingRoutingModule { }
