import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.realEstateContributionUserManagement.userProfile,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.realEstateContributionUserManagement.userProfile,
    component: UserProfileComponent,
    data: {breadcrumb : 'إدارة المنشأة '},

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateContributionUserManagementRoutingModule { }
