import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FacilityDashboardComponent } from './pages/facility-dashboard/facility-dashboard.component';
import { FacilityProfileComponent } from './pages/facility-profile/facility-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.facilities.facilityDashboard,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.facilities.facilityDashboard,
    component: FacilityDashboardComponent,
    data: { breadcrumb: 'لوحة التحكم' },
  },
  {
    path: Configuration.pages.facilities.facilityProfile,
    component: FacilityProfileComponent,
    data: { breadcrumb: 'الملف الشخصى' },
  },
  {
    path: Configuration.pages.facilities.facilityProfileWithRenewRequest,
    component: FacilityProfileComponent,
    data: { breadcrumb: 'الملف الشخصى' },
  },
  {
    path: Configuration.pages.facilities.Dashboard,
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesRoutingModule {}
