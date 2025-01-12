import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeedsApprovalRoutingModule } from './deeds-approval-routing.module';
import { DeedApprovalComponent } from './pages/deed-approval/deed-approval.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LicenseProjectLandOwnerService } from './services/Approve-Owner/licenseProject-land-owner.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DeedsApprovalRoutingModule
  ],
  declarations: [DeedApprovalComponent],
  providers: [LicenseProjectLandOwnerService]
})
export class DeedsApprovalModule { }
