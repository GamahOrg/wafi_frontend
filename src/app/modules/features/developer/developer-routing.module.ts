import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Configuration } from "src/app/core/configurations/shared.config";
import { ProjectListComponent } from "./pages/project-list/project-list.component";

const routes: Routes = [
     {
        path: '',
        redirectTo: Configuration.pages.developer.developerProjectList,
        pathMatch: 'full',
      },
      {
        path: Configuration.pages.developer.developerProjectList,
        component: ProjectListComponent,
        data: { breadcrumb: 'قائمة التراخيص' },
      },
    ];
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
    export class DeveloperLicenseRoutingModule { }
    