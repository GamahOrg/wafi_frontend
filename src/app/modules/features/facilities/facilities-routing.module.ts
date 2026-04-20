import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FacilityTypeCategoryGuard } from 'src/app/core/guards/facility-type-category-guard/facility-type-category.guard';
import { FacilityDashboardComponent } from './pages/facility-dashboard/facility-dashboard.component';
import { FacilityProfileComponent } from './pages/facility-profile/facility-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FacilityTypeSetupComponent } from './pages/facility-type-setup/facility-type-setup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.facilities.facilityDashboard,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.facilities.facilityTypeSetup,
    component: FacilityTypeSetupComponent,
    data: { breadcrumb: 'نوع المنشأة' },
  },
  {
    path: Configuration.pages.facilities.facilityDashboard,
    component: FacilityDashboardComponent,
    canActivate: [FacilityTypeCategoryGuard],
    data: { breadcrumb: 'لوحة التحكم', hideBreadcrumb: true },
  },
  {
    path: Configuration.pages.facilities.facilityProfile,
    component: FacilityProfileComponent,
    canActivate: [FacilityTypeCategoryGuard],
    data: { breadcrumb: 'الملف الشخصى' },
  },
  {
    path: Configuration.pages.facilities.facilityProfileWithRenewRequest,
    component: FacilityProfileComponent,
    canActivate: [FacilityTypeCategoryGuard],
    data: { breadcrumb: 'الملف الشخصى' },
  },
  {
    path: Configuration.pages.facilities.Dashboard,
    component: DashboardComponent,
    canActivate: [FacilityTypeCategoryGuard],
    data: { breadcrumb: 'Dashboard', hideBreadcrumb: true },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesRoutingModule {}
