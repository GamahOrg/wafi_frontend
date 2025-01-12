import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsermanagmentFacilitiesComponent } from './component/usermanagment-facilities/usermanagment-facilities.component';
import { delegatoractionsComponent } from './component/delegator-actions/delegator-actions.component';
import { RegistrationRequestComponent } from './component/registration-request/registration-request.component';
import { RegistrationRequestService } from './services/registration-request/registration-request.service';
import { UserManagementDelegatorsComponent } from './component/user-management-delegators/user-management-delegators.component';
import { UserManagementDelegatorsService } from './services/user-management-delegators.service';
import { VerificationOtpPopupComponent } from './component/verification-otp-popup/verification-otp-popup/verification-otp-popup.component';
import { EditProfileService } from './services/edit-profile/edit-profile.service';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { CustomerFacilitiesService } from './services/customer-facilities.service';
import { RelatedCustomersComponent } from './component/related-customers/related-customers.component';
import { AddFacilityComponent } from './component/add-facility/add-facility.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UsermanagmentFacilitiesComponent,
    delegatoractionsComponent,
    RegistrationRequestComponent,
    UserManagementDelegatorsComponent,
    EditProfileComponent,
    VerificationOtpPopupComponent,
    RelatedCustomersComponent,
    AddFacilityComponent,
    
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
    RegistrationRequestService,
    UserManagementDelegatorsService,
    EditProfileService,
    CustomerFacilitiesService
  ]
 

})
export class UserManagementModule { }
