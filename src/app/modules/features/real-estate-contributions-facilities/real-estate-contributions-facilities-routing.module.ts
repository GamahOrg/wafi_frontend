import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FacilityDashboardComponent } from './pages/facility-dashboard/facility-dashboard.component';
import { FacilityProfileComponent } from './pages/facility-profile/facility-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.realEstateContributionsFacilities.facilityDashboard,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.realEstateContributionsFacilities.facilityDashboard,
    component: FacilityDashboardComponent,
    data: { breadcrumb: 'لوحة التحكم', hideBreadcrumb: true },
  },
  {
    path: Configuration.pages.realEstateContributionsFacilities.facilityProfile,
    component: FacilityProfileComponent,
    data: { breadcrumb: 'الملف الشخصى' },
  },
  {
    path: Configuration.pages.realEstateContributionsFacilities.facilityProfileWithRenewRequest,
    component: FacilityProfileComponent,
    data: { breadcrumb: 'الملف الشخصى' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateContributionsFacilitiesRoutingModule { }
