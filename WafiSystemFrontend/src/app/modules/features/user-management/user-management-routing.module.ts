import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.userManagement.userProfile,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.userManagement.userProfile,
    component: UserProfileComponent,
    data: {breadcrumb : 'إدارة المنشأة '},

  },
  {
    path: Configuration.pages.userManagement.editProfile,
    component: EditProfileComponent,
    

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
