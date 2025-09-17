import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { DeveloperLicenseRoutingModule } from "./developer-routing.module";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectListService } from "../license/services/project-list.service";
import { PaginationService } from "src/app/shared/services/pagination/pagination.service";
import { PopupService } from "src/app/shared/services/popup/popup.service";
import { UserDataService } from "src/app/core/services/user-data/user-data.service";
import { SharedLicenseProjectService } from "../license/services/sharedLicenseProject/shared-license-project.service";
import { ProjectListComponent } from "./pages/project-list/project-list.component";

@NgModule({
    declarations:[
        ProjectListComponent
    ],
    providers: [
        ProjectListService,
        PaginationService,
        PopupService,
        UserDataService,
        SharedLicenseProjectService,
        Router
    ],
    imports: [
      CommonModule,
      RouterModule,
      DeveloperLicenseRoutingModule,
      SharedModule,
      ReactiveFormsModule,
      FormsModule
    ]
  })
  export class DeveloperModule {
  }
  