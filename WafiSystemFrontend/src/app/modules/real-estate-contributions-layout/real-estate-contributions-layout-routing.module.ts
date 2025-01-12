import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LayoutComponent from './components/layout/layout.component';
import { Configuration } from 'src/app/core/configurations/shared.config';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'الرئيسية' },
    children: [
      {
        path: Configuration.modules.realEstateContributionsFacilities,
        data: { breadcrumb: 'المنشأة' },
        loadChildren: () =>
          import('../features/real-estate-contributions-facilities/real-estate-contributions-facilities.module').then(
            (m) => m.RealEstateContributionsFacilitiesModule
          ),
      },
      {
        path: Configuration.modules.realEstateContributionsQualifying,
        data: { breadcrumb: 'التأهيل' },
        loadChildren: () =>
          import('../features/real-estate-contributions-qualifying/real-estate-contributions-qualifying.module').then(
            (m) => m.RealEstateContributionsQualifyingModule
          ),
      },
      {
        path: Configuration.modules.realEstateContributionsLicense,
        data: { breadcrumb: 'الترخيص' },
        loadChildren: () =>
          import('../features/real-estate-contributions-license/real-estate-contributions-license.module').then(
            (m) => m.RealEstateContributionsLicenseModule
          ),
      },
      {
        path: Configuration.modules.realEstateContributionUserManagement,
        data: { breadcrumb: 'إدارة المنشأة' },
        loadChildren: () =>
          import('../features/real-estate-contribution-user-management/real-estate-contribution-user-management.module').then(
            (m) => m.RealEstateContributionUserManagementModule
          ),
      },
      {
        path: '',
        redirectTo: Configuration.modules.realEstateContributionsQualifying,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateContributionsLayoutRoutingModule { }
