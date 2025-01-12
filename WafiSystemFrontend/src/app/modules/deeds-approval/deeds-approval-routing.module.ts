import { RouterModule, Routes } from "@angular/router";
import { DeedApprovalComponent } from "./pages/deed-approval/deed-approval.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    // {
    //   path: '',
    //   component: DeedApprovalComponent
    // },
    {
      path: 'agreement/:Id',
      component: DeedApprovalComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DeedsApprovalRoutingModule { }