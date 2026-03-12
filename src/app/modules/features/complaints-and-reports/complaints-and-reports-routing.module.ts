import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ComplaintsReportsComponent } from './components/complaints-reports/complaints-reports.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.complaintsAndReport.complaintsReports,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.complaintsAndReport.complaintsReports,
    component:ComplaintsReportsComponent ,
    data: {breadcrumb :  'تقديم بلاغ أو شكوى'},

  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsAndReportsRoutingModule { }
