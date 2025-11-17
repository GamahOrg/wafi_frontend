import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { DeveloperProjectListComponent } from './pages/developer-project-list/developer-project-list.component';
import { RecommendationsLogsListComponent } from './pages/recommendations-logs-list/recommendations-logs-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.pages.license.lincenseTypes,
    pathMatch: 'full',
  },
  {
    path: Configuration.pages.license.projectList,
    component: ProjectListComponent,
    data: { breadcrumb: 'المشاريع الاستشارى الهندسى' },
  },
  {
    path: Configuration.pages.license.projectDetails,
    component: ProjectDetailsComponent,
    data: { breadcrumb: 'تفاصيل المشروع' },
  },
  {
    path: Configuration.pages.license.developerProjectList,
    component: DeveloperProjectListComponent,
    data: { breadcrumb: 'المشاريع المطور' },
  },
  {
    path: Configuration.pages.license.recommendationLogsList,
    component: RecommendationsLogsListComponent,
    data: { breadcrumb: 'المشاريع المطور' },
  },

];
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringManagementRoutingModule { }
