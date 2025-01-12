import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import LayoutComponent from './components/layout/layout.component';
import { NotificationListComponent } from 'src/app/shared/pages/notification-list/notification-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { breadcrumb: 'الرئيسية' },
    children: [

      {
        path: Configuration.pages.notificationList,
        component:NotificationListComponent,
      },
      {
        path: Configuration.modules.qualifying,
        data: { breadcrumb: 'التأهيل' },
        loadChildren: () =>
          import('../features/qualifying/qualifying.module').then(
            (m) => m.QualifyingModule
          ),
      },
      {
        path: Configuration.modules.facilities,
        data: { breadcrumb: 'المنشأة' },
        loadChildren: () =>
          import('../features/facilities/facilities.module').then(
            (m) => m.FacilitiesModule
          ),
      },
      {
        path: Configuration.modules.license,
        data: { breadcrumb: 'الترخيص' },
        loadChildren: () =>
          import('../features/license/license.module').then(
            (m) => m.LicenseModule
          ),
      }, 
      {
        path: Configuration.modules.licenseProjectRequests,
        data: { breadcrumb: 'الطلبات الاعتيادية والغير اعتيادية' },
        loadChildren: () =>
          import('../features/license-project-requests/license-project-requests.module').then(
            (m) => m.LicenseProjectRequestsModule
          ),
      },
      {
        path: Configuration.modules.training,
        loadChildren: () =>
          import('../features/training/training.module').then((m) => m.TrainingModule),
      },
      {
        path: Configuration.modules.userManagement,
        data: {breadcrumb : 'إدارة المنشأة '},
        loadChildren: () =>
          import('../features/user-management/user-management.module').then((m) => m.UserManagementModule),
      },
      {
        path: Configuration.modules.complaintsAndReport,
        data: {breadcrumb : ' الشكاوي والبلاغات'},
        loadChildren: () =>
          import('../features/complaints-and-reports/complaints-and-reports.module').then((m) => m.ComplaintsAndReportsModule),
      },
      // {
      //   path: Configuration.modules.engineeringManagement,
      //   data: {breadcrumb : 'الإدارة الهندسية'},
      //   loadChildren: () =>
      //     import('../features/engineering-management/engineering-management.module').then((m) => m.EngineeringManagementModule),
      // },
      {
        path: '',
        redirectTo: Configuration.modules.facilities,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
