import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateContributionsQualifyingRoutingModule } from './real-estate-contributions-qualifying-routing.module';
import { RequestsComponent } from './pages/requests/requests.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CommercialRegistryComponent } from './components/commercial-registry/commercial-registry.component';
import { RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from './components/request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component';
import { RequestCertifiedFacilityEngineersComponent } from './components/request-certified-facility-engineers/request-certified-facility-engineers.component';
import { RequestDataComponent } from './components/request-data/request-data.component';
import { RequestDistinctiveAdditionalTechnicalCapabilitiesComponent } from './components/request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component';
import { RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from './components/request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component';
import { RequestEventsLogComponent } from './components/request-events-log/request-events-log.component';
import { RequestFinancialCapabilitiesRequirementsComponent } from './components/request-financial-capabilities-requirements/request-financial-capabilities-requirements.component';
import { RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from './components/request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component';
import { RequestJobRequirementsAndHumanResourcesComponent } from './components/request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component';
import { RequestNationalAddressesComponent } from './components/request-national-addresses/request-national-addresses.component';
import { RequestTechnicalCapabilitiesRequirementsComponent } from './components/request-technical-capabilities-requirements/request-technical-capabilities-requirements.component';
import { RequestValidationPopupComponent } from './components/request-validation-popup/request-validation-popup.component';
import { RequestWafiTrainingComponent } from './components/request-wafi-training/request-wafi-training.component';
import { ResultOfRequestStudyComponent } from './components/result-of-request-study/result-of-request-study.component';
import { CreateComponent } from './pages/create/create.component';
import { QualifyingCertificatesComponent } from './pages/qualifying-certificates/qualifying-certificates.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { RequestListComponent } from './pages/request-list/request-list.component';
import { RequestSummaryComponent } from './pages/request-summary/request-summary.component';
import { QualificationTypeService } from './services/qualification-type/qualification-type.service';
import { FacilityProfileService } from '../facilities/services/facilityProfile/facility-profile.service';
import { QualificationCertificatesService } from './services/qualification-certificates/qualification-certificates.service';
import { QualificationServiceRequestService } from './services/qualification-type/qualification-service-request.service';
import { RequestService } from './services/requests/request-service.service';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RenewQualifyingListComponent } from './pages/renew-qualifying-list/renew-qualifying-list.component';
import { RenewQualifyingListService } from './services/renew-qualifying-list/renew-qualifying-list.service';
import { ContributionDeveloperCertificateComponent } from './components/contribution-developer-certificate/contribution-developer-certificate.component';
import { DeveloperCertificateComponent } from './components/developer-certificate/developer-certificate.component';
import { AccountantCertificateComponent } from './components/accountant-certificate/accountant-certificate.component';
import { EngineeringCertificateComponent } from './components/engineering-certificate/engineering-certificate.component';


@NgModule({
  declarations: [
    RequestsComponent,
    CreateComponent,
    RequestListComponent,
    RequestValidationPopupComponent,
    RequestSummaryComponent,
    CommercialRegistryComponent,
    RequestWafiTrainingComponent,
    RequestFinancialCapabilitiesRequirementsComponent,
    RequestJobRequirementsAndHumanResourcesComponent,
    RequestTechnicalCapabilitiesRequirementsComponent,
    RequestCertifiedFacilityEngineersComponent,
    RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
    RequestDistinctiveAdditionalTechnicalCapabilitiesComponent,
    RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
    RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
    RequestNationalAddressesComponent,
    RequestDetailsComponent,
    RequestDataComponent,
    ResultOfRequestStudyComponent,
    RequestEventsLogComponent,
    CertificateComponent,
    QualifyingCertificatesComponent,
    RenewQualifyingListComponent,
    EngineeringCertificateComponent,
    AccountantCertificateComponent,
    DeveloperCertificateComponent,
    ContributionDeveloperCertificateComponent
  ],
  imports: [
    CommonModule,
    RealEstateContributionsQualifyingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule,
  ],
    providers: [
    QualificationTypeService,
    RequestService,
    // RequestValidationService,
    FacilityProfileService,
    QualificationServiceRequestService,
    QualificationCertificatesService,
    RenewQualifyingListService
  ],
})
export class RealEstateContributionsQualifyingModule { }
