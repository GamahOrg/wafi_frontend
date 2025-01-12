import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LincenseRequestListComponent } from './pages/lincense-project-request-list/lincense-request-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LicenseProjectRequestsRoutingModule } from './license-project-requests-routing.module';
import { AddProjectLicenseRequestComponentComponent } from './components/add-project-license-request-component/add-project-license-request-component.component';
import { LincenseRequestProjectService } from './services/lincense-request-project.service';
import { UpdateClearanceEngineeringComponent } from './components/update-clearance-engineering-consultant/update-clearance-engineering/update-clearance-engineering.component';
import { UpdateClearanceAccountComponent } from './components/update-clearance-account-component/update-clearance-account/update-clearance-account.component';
import { CahngePlaneRequestDetailsService } from './services/cahnge-plane-request-details.service';
import { UpdateActivateRequestComponent } from './components/update-activate-request-component/update-activate-request/update-activate-request.component';
import { UpdateRealEstateDeveloperComponent } from './components/update-real-estate-developer-component/update-real-estate-developer/update-real-estate-developer.component';
import { AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent } from './components/add-or-edite-real-estate-developer-cahnge-plane-request/add-or-edite-real-estate-developer-cahnge-plane-request.component';
import { CancelLicenseRequestSummaryComponent } from './pages/cancel-license-request-summary/cancel-license-request-summary.component';
import { CancelLicenseProjectSummaryComponent } from './components/cancel-license-project-summary/cancel-license-project-summary.component';
import { CancelLicenseDeveloperSummaryComponent } from './components/cancel-license-developer-summary/cancel-license-developer-summary.component';
import { CancelLicenseAccountantSummaryComponent } from './components/cancel-license-accountant-summary/cancel-license-accountant-summary.component';
import { CancelLicenseEngineeringSummaryComponent } from './components/cancel-license-engineering-summary/cancel-license-engineering-summary.component';
import { DataVisibilityOfLicenseProjectService } from '../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { SharedLicenseProjectService } from '../license/services/sharedLicenseProject/shared-license-project.service';
import { CancelLicenseMainDataSummaryComponent } from './components/cancel-license-main-data-summary/cancel-license-main-data-summary.component';
import { ChangeplanLicenseRequestSummaryComponent } from './pages/changeplan-license-request-summary/changeplan-license-request-summary.component';
import { ReactivateLicenseRequestSummaryComponent } from './pages/reactivate-license-request-summary/reactivate-license-request-summary.component';
import { ChangeplanLicenseRequestAccountantSummaryComponent } from './components/changeplan-license-request-accountant-summary/changeplan-license-request-accountant-summary.component';
import { ChangeplanLicenseRequestEngineeringSummaryComponent } from './components/changeplan-license-request-engineering-summary/changeplan-license-request-engineering-summary.component';
import { ChangeplanLicenseRequestMainDataSummaryComponent } from './components/changeplan-license-request-main-data-summary/changeplan-license-request-main-data-summary.component';
import { ChangeplanLicenseRequestProjectSummaryComponent } from './components/changeplan-license-request-project-summary/changeplan-license-request-project-summary.component';
import { ReactivaiteLicenseRequestMainDataSummaryComponent } from './components/reactivaite-license-request-main-data-summary/reactivaite-license-request-main-data-summary.component';
import { ReactivaiteLicenseRequestDeveloperSummaryComponent } from './components/reactivaite-license-request-developer-summary/reactivaite-license-request-developer-summary.component';
import { ReactivaiteLicenseRequestProjectSummaryComponent } from './components/reactivaite-license-request-project-summary/reactivaite-license-request-project-summary.component';
import { ChangeplanLicenseRequestDeveloperSummaryComponent } from './components/changeplan-license-request-developer-summary/changeplan-license-request-developer-summary.component';
import { LicenseProjectRequestDetailComponent } from './pages/license-project-request-detail/license-project-request-detail.component';
import { ProjectLicenseRequestTimeLineComponent } from './components/project-license-request-time-line/project-license-request-time-line.component';
import { ProjectLicenseRequestNotesComponent } from './components/project-license-request-notes/project-license-request-notes.component';
import { ProjectLicenseRequestDataComponent } from './components/project-license-request-data/project-license-request-data.component';
import { ProjectLicenseServiceDetailsService } from './services/project-license-service-details.service';
import { AddEditChangeplanLicenseRequestDeveloperSummaryComponent } from './components/add-edit-changeplan-license-request-developer-summary/add-edit-changeplan-license-request-developer-summary.component';
import { AddEditChangeplanLicenseRequestAccountantSummaryComponent } from './components/add-edit-changeplan-license-request-accountant-summary/add-edit-changeplan-license-request-accountant-summary.component';
import { AddEditChangeplanLicenseRequestEngineeringSummaryComponent } from './components/add-edit-changeplan-license-request-engineering-summary/add-edit-changeplan-license-request-engineering-summary.component';
import { CancelLicenseMainDataDetailsComponent } from './components/cancel-license-main-data-details/cancel-license-main-data-details.component';
import { ReactivaiteLicenseMainDataDetailsComponent } from './components/reactivaite-license-main-data-details/reactivaite-license-main-data-details.component';
import { CancelLicenseAccountantDetailsComponent } from './components/cancel-license-accountant-details/cancel-license-accountant-details.component';
import { CancelLicenseEngineeringDetailsComponent } from './components/cancel-license-engineering-details/cancel-license-engineering-details.component';
import { CancelLicenseDeveloperDetailsComponent } from './components/cancel-license-developer-details/cancel-license-developer-details.component';
import { CancelLicenseProjectDetailsComponent } from './components/cancel-license-project-details/cancel-license-project-details.component';
import { ReactivaiteLicenseRequestDeveloperDetailsComponent } from './components/reactivaite-license-request-developer-details/reactivaite-license-request-developer-details.component';
import { ReactivaiteLicenseRequestProjectDetailsComponent } from './components/reactivaite-license-request-project-details/reactivaite-license-request-project-details.component';
import { ChangeplanLicenseRequestProjectDetailsComponent } from './components/changeplan-license-request-project-details/changeplan-license-request-project-details.component';
import { ChangeplanLicenseRequestMainDataDetailsComponent } from './components/changeplan-license-request-main-data-details/changeplan-license-request-main-data-details.component';
import { ChangeplanLicenseRequestEngineeringDetailsComponent } from './components/changeplan-license-request-engineering-details/changeplan-license-request-engineering-details.component';
import { ChangeplanLicenseRequestDeveloperDetailsComponent } from './components/changeplan-license-request-developer-details/changeplan-license-request-developer-details.component';
import { ChangeplanLicenseRequestAccountantDetailsComponent } from './components/changeplan-license-request-accountant-details/changeplan-license-request-accountant-details.component';
import { CancelLicenseRequestService } from './services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from './services/project-request-local-storage.service';
import { ReactivateLicenseService } from './services/reactivate-license.service';
import { LicenseProjectRequestProcessingLogService } from './services/license-project-request-processing-log.service';
import { LicenseProjectRequestLogService } from './services/license-project-request-log.service';
import { CreateProjectLicenseRequestComponent } from './pages/create-project-license-request/create-project-license-request.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { CreateChangePlanRequestComponent } from './pages/create-change-plan-request/create-change-plan-request.component';
import { CreateCancelLicenseRequestComponent } from './pages/create-cancel-license-request/create-cancel-license-request.component';
import { CreateReactivateLicenseRequestComponent } from './pages/create-reactivate-license-request/create-reactivate-license-request.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    LicenseProjectRequestsRoutingModule
  ],
  declarations: [
    LincenseRequestListComponent,
    AddProjectLicenseRequestComponentComponent,
    UpdateClearanceEngineeringComponent,
    UpdateClearanceAccountComponent,
    UpdateActivateRequestComponent,
    UpdateRealEstateDeveloperComponent,
    CancelLicenseRequestSummaryComponent,
    CancelLicenseProjectSummaryComponent,
    CancelLicenseDeveloperSummaryComponent,
    CancelLicenseAccountantSummaryComponent,
    CancelLicenseEngineeringSummaryComponent,
    CancelLicenseMainDataSummaryComponent,
    ReactivateLicenseRequestSummaryComponent,
    ReactivaiteLicenseRequestMainDataSummaryComponent,
    ReactivaiteLicenseRequestDeveloperSummaryComponent,
    ReactivaiteLicenseRequestProjectSummaryComponent,
    ChangeplanLicenseRequestSummaryComponent,
    ChangeplanLicenseRequestAccountantSummaryComponent,
    ChangeplanLicenseRequestEngineeringSummaryComponent,
    ChangeplanLicenseRequestMainDataSummaryComponent,
    ChangeplanLicenseRequestProjectSummaryComponent,
    ChangeplanLicenseRequestDeveloperSummaryComponent,
    LicenseProjectRequestDetailComponent,
    ProjectLicenseRequestTimeLineComponent,
    ProjectLicenseRequestNotesComponent,
    ProjectLicenseRequestDataComponent,
    AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent,
    AddEditChangeplanLicenseRequestDeveloperSummaryComponent,
    AddEditChangeplanLicenseRequestAccountantSummaryComponent,
    AddEditChangeplanLicenseRequestEngineeringSummaryComponent,

    CancelLicenseMainDataDetailsComponent,
    CancelLicenseAccountantDetailsComponent,
    CancelLicenseEngineeringDetailsComponent,
    CancelLicenseDeveloperDetailsComponent,
    CancelLicenseProjectDetailsComponent,

    ReactivaiteLicenseMainDataDetailsComponent,
    ReactivaiteLicenseRequestDeveloperDetailsComponent,
    ReactivaiteLicenseRequestProjectDetailsComponent,

    ChangeplanLicenseRequestMainDataDetailsComponent,
    ChangeplanLicenseRequestProjectDetailsComponent,
    ChangeplanLicenseRequestEngineeringDetailsComponent,
    ChangeplanLicenseRequestDeveloperDetailsComponent,
    ChangeplanLicenseRequestAccountantDetailsComponent,
    CreateReactivateLicenseRequestComponent,
    CreateProjectLicenseRequestComponent,
    RequestsComponent,
    CreateChangePlanRequestComponent,

    CreateCancelLicenseRequestComponent
  ],
  providers: [
    DatePipe,
    LincenseRequestProjectService,
    DataVisibilityOfLicenseProjectService,
    SharedLicenseProjectService,
    ProjectLicenseServiceDetailsService,
    CahngePlaneRequestDetailsService,
    CancelLicenseRequestService,
    ProjectRequestLocalStorageService,
    ReactivateLicenseService,
    LicenseProjectRequestLogService,
    LicenseProjectRequestProcessingLogService,
  ]
})
export class LicenseProjectRequestsModule { }
