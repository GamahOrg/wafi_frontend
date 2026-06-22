import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacilitiesRoutingModule } from './facilities-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacilityProfileService } from './services/facilityProfile/facility-profile.service';
import { FacilityBasicInfoComponent } from './components/facility-basic-info/facility-basic-info.component';
import { FacilityProfileComponent } from './pages/facility-profile/facility-profile.component';
// import { TranslateModule } from '@ngx-translate/core';
import { FinancialCapabilitiesRequirementsFormComponent } from './components/financial-capabilities-requirements-form/financial-capabilities-requirements-form.component';
import { FacilityDashboardComponent } from './pages/facility-dashboard/facility-dashboard.component';
import { RouterModule } from '@angular/router';
import { QualificationCertificatesComponent } from './components/qualification-certificates/qualification-certificates.component';
import { FacilityDataComponent } from './components/facility-data/facility-data.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { FinancialCapabilitiesRequirementsComponent } from './components/financial-capabilities-requirements/financial-capabilities-requirements.component';
import { JobRequirementsAndHumanResourcesComponent } from './components/job-requirements-and-human-resources/job-requirements-and-human-resources.component';
import { TechnicalCapabilitiesRequirementsComponent } from './components/technical-capabilities-requirements/technical-capabilities-requirements.component';
import { CertifiedFacilityEngineersComponent } from './components/certified-facility-engineers/certified-facility-engineers.component';
import { WafiTrainingEngineersComponent } from './components/wafi-training-engineers/wafi-training-engineers.component';
import { WafiTrainingEngineersFormComponent } from './components/wafi-training-engineers-form/wafi-training-engineers-form.component';
import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from './components/institutional-capabilities-and-additional-discriminatory-human-resources/institutional-capabilities-and-additional-discriminatory-human-resources.component';
import { DistinctiveAdditionalTechnicalCapabilitiesComponent } from './components/distinctive-additional-technical-capabilities/distinctive-additional-technical-capabilities.component';
import { EngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from './components/engineers-with-sufficient-training-for-the-engineering-consultant/engineers-with-sufficient-training-for-the-engineering-consultant.component';
import { AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from './components/accountants-completed-wafi-training-program-for-accounting-supervision/accountants-completed-wafi-training-program-for-accounting-supervision.component';
import { AdditionInstitutionalCapacityAndHrService } from './services/AdditionInstitutionalCapacityAndHr/addition-institutional-capacity-and-hr.service';
import { CertifiedEngineerService } from './services/QualificationCertifiedEngineer/certified-engineer.service';
import { QualificatedAccountantService } from './services/QualificationQualificatedAccountant/qualificated-accountant.service';
import { QualificatedEngineerService } from './services/QualificationQualificatedEngineer/qualificated-engineer.service';
import { FinancialCapabilitiesService } from './services/financialCapabilities/financial-capabilities.service';
import { TechnicalCapabilitiesRequirementsService } from './services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { EditQualificationProjectComponent } from './components/edit-qualification-project/edit-qualification-project.component';

import { NationalAddressesComponent } from './components/national-addresses/national-addresses.component';
import { AdditionTechnicalCapabilitiesRequirementsService } from './services/additionTechnicalCapabilitiesRequirements/addition-technical-capabilities-requirements.service';
import { DistinctiveAdditionalTechnicalCapabilitiesFormComponent } from './components/distinctive-additional-technical-capabilities-form/distinctive-additional-technical-capabilities-form.component';
import { NationalAddressesFormComponent } from './components/national-addresses-form/national-addresses-form.component';
import { NationalAddressService } from './services/facilityProfile/national-address-service/national-address.service';
import { CertifiedFacilityEngineersFormComponent } from './components/certified-facility-engineers-form/certified-facility-engineers-form.component';
import { AccountantsCompletedWafiTrainingFormComponent } from './components/accountants-completed-wafi-training-form/accountants-completed-wafi-training-form.component';
import { EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent } from './components/engineers-with-sufficient-training-for-the-engineering-consultant-form/engineers-with-sufficient-training-for-the-engineering-consultant-form.component';
import { QualificationInstitutionalCapacityAndHrRequirementsService } from './services/qualificationInstitutionalCapacityAndHrRequirements/qualification-institutional-capacity_Hr-requirements.service';
import { JobRequirementsAndHumanResourcesFormComponent } from './components/job-requirements-and-human-resources-form/job-requirements-and-human-resources-form.component';
import { EditFacilityBasicInfoComponent } from './components/edit-facility-basic-info/edit-facility-basic-info.component';
import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent } from './components/institutional-capabilities-and-additional-discriminatory-human-resources-form/institutional-capabilities-and-additional-discriminatory-human-resources-form.component';
import { SaveTechnicalCapabilitiesRequirementsComponent } from './components/save-technical-capabilities-requirements/save-technical-capabilities-requirements.component';
import { QualificationFacilityCertificationComponent } from './components/qualification-facility-certification/qualification-facility-certification.component';
import { QualificationFacilityCertificationService } from './services/qualificationFacilityCertification/qualification-facility-certification.service';
import { QualificationFacilityCertificationFormComponent } from './components/qualification-facility-certification-form/qualification-facility-certification-form.component';
import { WafiTrainingService } from './services/wafiTraining/wafi-training.service';
import { WafiTrainingComponent } from './components/wafi-training/wafi-training.component';
import { WafiTrainingFormComponent } from './components/wafi-training-form/wafi-training-form.component';
import { QualificationServiceRequestService } from '../qualifying/services/qualification-type/qualification-service-request.service';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { RequestService } from '../qualifying/services/requests/request-service.service';
import { LicenseRequestHeaderService } from '../license/services/license-request-header.service';
import { SharedLicenseProjectService } from '../license/services/sharedLicenseProject/shared-license-project.service';
import { QualificationRequestListComponent } from './components/qualification-request-list/qualification-request-list.component';
import { LicenseListComponent } from './components/license-list/license-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { CertifiedEngineerCoursesPreviewComponent } from './components/certified-engineer-courses-preview/certified-engineer-courses-preview.component';
import { FacilityTypeSetupComponent } from './pages/facility-type-setup/facility-type-setup.component';
import { FacilityTypeSetupService } from './services/facilityTypeSetup/facility-type-setup.service';
import { RealEstateDeveloperDataComponent } from './components/real-estate-developer-data/real-estate-developer-data.component';
import { LegalAccountantDataComponent } from './components/legal-accountant-data/legal-accountant-data.component';
import { EngineeringConsultantDataComponent } from './components/engineering-consultant-data/engineering-consultant-data.component';
import { FacilityBasicDataInfoAllTypesComponent } from './components/facility-basic-data-info-all-types/facility-basic-data-info-all-types.component';
import { EditFacilityBasicDataInfoAllTypesComponent } from './components/edit-facility-basic-data-info-all-types/edit-facility-basic-data-info-all-types.component';
import { DeclarationPopupComponent } from './components/declaration-popup/declaration-popup.component';

@NgModule({
  declarations: [
    CertifiedFacilityEngineersFormComponent,
    FinancialCapabilitiesRequirementsFormComponent,
    FacilityBasicInfoComponent,
    FacilityProfileComponent,
    FacilityDashboardComponent,
    QualificationCertificatesComponent,
    FacilityDataComponent,
    LicensesComponent,
    FinancialCapabilitiesRequirementsComponent,
    JobRequirementsAndHumanResourcesComponent,
    TechnicalCapabilitiesRequirementsComponent,
    CertifiedFacilityEngineersComponent,
    WafiTrainingEngineersComponent,
    WafiTrainingEngineersFormComponent,
    InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
    DistinctiveAdditionalTechnicalCapabilitiesComponent,
    EngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
    AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
    EditQualificationProjectComponent,
    DistinctiveAdditionalTechnicalCapabilitiesFormComponent,
    NationalAddressesComponent,
    NationalAddressesFormComponent,
    AccountantsCompletedWafiTrainingFormComponent,
    EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent,
    JobRequirementsAndHumanResourcesFormComponent,
    EditFacilityBasicInfoComponent,
    InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent,
    SaveTechnicalCapabilitiesRequirementsComponent,
    QualificationFacilityCertificationComponent,
    QualificationFacilityCertificationFormComponent,
    WafiTrainingComponent,
    WafiTrainingFormComponent,
    RoadmapComponent,
    QualificationRequestListComponent,
    LicenseListComponent,
    DashboardComponent,
    CertifiedEngineerCoursesPreviewComponent,
    FacilityTypeSetupComponent,
    RealEstateDeveloperDataComponent,
    LegalAccountantDataComponent,
    EngineeringConsultantDataComponent,
    FacilityBasicDataInfoAllTypesComponent,
    EditFacilityBasicDataInfoAllTypesComponent,
    DeclarationPopupComponent,
  ],
  providers: [
    SharedLicenseProjectService,
    LicenseRequestHeaderService,
    RequestService,
    FacilityProfileService,
    AdditionInstitutionalCapacityAndHrService,
    CertifiedEngineerService,
    QualificatedAccountantService,
    QualificatedEngineerService,
    FacilityProfileService,
    TechnicalCapabilitiesRequirementsService,
    FinancialCapabilitiesService,
    AdditionTechnicalCapabilitiesRequirementsService,
    NationalAddressService,
    QualificationInstitutionalCapacityAndHrRequirementsService,
    QualificationFacilityCertificationService,
    WafiTrainingService,
    DatePipe,
    DashboardService,
    FacilityTypeSetupService
  ],
  imports: [
    CommonModule,
    SharedModule,
    FacilitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule.forChild(),
    RouterModule,
  ],
})
export class FacilitiesModule { }
