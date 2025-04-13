import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateContributionUserManagementRoutingModule } from './real-estate-contribution-user-management-routing.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UsermanagmentFacilitiesComponent } from './component/usermanagment-facilities/usermanagment-facilities.component';
import { ProjectsManegersComponent } from './component/projects-manegers/projects-manegers.component';
import { delegatoractionsComponent } from './component/delegator-actions/delegator-actions.component';
import { delegatorsComponent } from './component/delegators/delegators.component';
import { RegistrationRequestComponent } from './component/registration-request/registration-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationRequestService } from './services/registration-request/registration-request.service';
import { UserManagementDelegatorsComponent } from './component/user-management-delegators/user-management-delegators.component';
import { UserManagementDelegatorsService } from './services/user-management-delegators.service';
import { RelatedCustomersComponent } from './component/related-customers/related-customers.component';
import { AddFacilityComponent } from './component/add-facility/add-facility.component';
import { CustomerFacilitiesService } from './services/customer-facilities.service';


@NgModule({
  declarations: [
    UserProfileComponent,
    UsermanagmentFacilitiesComponent,
    ProjectsManegersComponent,
    delegatoractionsComponent,
    delegatorsComponent,
    RegistrationRequestComponent,
    UserManagementDelegatorsComponent,
    RelatedCustomersComponent,
    AddFacilityComponent,
  ],
  imports: [
    CommonModule,
    RealEstateContributionUserManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
    RegistrationRequestService,
    UserManagementDelegatorsService,
    CustomerFacilitiesService
  ]
})
export class RealEstateContributionUserManagementModule { }
