import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RealEstateContributionsFacilitiesRoutingModule } from './real-estate-contributions-facilities-routing.module';
import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent } from './components/institutional-capabilities-and-additional-discriminatory-human-resources-form/institutional-capabilities-and-additional-discriminatory-human-resources-form.component';
import { AccountantsCompletedWafiTrainingFormComponent } from './components/accountants-completed-wafi-training-form/accountants-completed-wafi-training-form.component';
import { AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from './components/accountants-completed-wafi-training-program-for-accounting-supervision/accountants-completed-wafi-training-program-for-accounting-supervision.component';
import { CertifiedFacilityEngineersFormComponent } from './components/certified-facility-engineers-form/certified-facility-engineers-form.component';
import { CertifiedFacilityEngineersComponent } from './components/certified-facility-engineers/certified-facility-engineers.component';
import { DistinctiveAdditionalTechnicalCapabilitiesFormComponent } from './components/distinctive-additional-technical-capabilities-form/distinctive-additional-technical-capabilities-form.component';
import { DistinctiveAdditionalTechnicalCapabilitiesComponent } from './components/distinctive-additional-technical-capabilities/distinctive-additional-technical-capabilities.component';
import { EditFacilityBasicInfoComponent } from './components/edit-facility-basic-info/edit-facility-basic-info.component';
import { EditQualificationProjectComponent } from './components/edit-qualification-project/edit-qualification-project.component';
import { EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent } from './components/engineers-with-sufficient-training-for-the-engineering-consultant-form/engineers-with-sufficient-training-for-the-engineering-consultant-form.component';
import { EngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from './components/engineers-with-sufficient-training-for-the-engineering-consultant/engineers-with-sufficient-training-for-the-engineering-consultant.component';
import { FacilityBasicInfoComponent } from './components/facility-basic-info/facility-basic-info.component';
import { FacilityDataComponent } from './components/facility-data/facility-data.component';
import { FinancialCapabilitiesRequirementsFormComponent } from './components/financial-capabilities-requirements-form/financial-capabilities-requirements-form.component';
import { FinancialCapabilitiesRequirementsComponent } from './components/financial-capabilities-requirements/financial-capabilities-requirements.component';
import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from './components/institutional-capabilities-and-additional-discriminatory-human-resources/institutional-capabilities-and-additional-discriminatory-human-resources.component';
import { JobRequirementsAndHumanResourcesFormComponent } from './components/job-requirements-and-human-resources-form/job-requirements-and-human-resources-form.component';
import { JobRequirementsAndHumanResourcesComponent } from './components/job-requirements-and-human-resources/job-requirements-and-human-resources.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { NationalAddressesFormComponent } from './components/national-addresses-form/national-addresses-form.component';
import { NationalAddressesComponent } from './components/national-addresses/national-addresses.component';
import { QualificationCertificatesComponent } from './components/qualification-certificates/qualification-certificates.component';
import { QualificationFacilityCertificationFormComponent } from './components/qualification-facility-certification-form/qualification-facility-certification-form.component';
import { QualificationFacilityCertificationComponent } from './components/qualification-facility-certification/qualification-facility-certification.component';
import { SaveTechnicalCapabilitiesRequirementsComponent } from './components/save-technical-capabilities-requirements/save-technical-capabilities-requirements.component';
import { TechnicalCapabilitiesRequirementsComponent } from './components/technical-capabilities-requirements/technical-capabilities-requirements.component';
import { WafiTrainingFormComponent } from './components/wafi-training-form/wafi-training-form.component';
import { WafiTrainingComponent } from './components/wafi-training/wafi-training.component';
import { FacilityDashboardComponent } from './pages/facility-dashboard/facility-dashboard.component';
import { FacilityProfileComponent } from './pages/facility-profile/facility-profile.component';
import { FacilityProfileService } from './services/facilityProfile/facility-profile.service';
import { AdditionInstitutionalCapacityAndHrService } from './services/AdditionInstitutionalCapacityAndHr/addition-institutional-capacity-and-hr.service';
import { CertifiedEngineerService } from './services/QualificationCertifiedEngineer/certified-engineer.service';
import { QualificatedAccountantService } from './services/QualificationQualificatedAccountant/qualificated-accountant.service';
import { QualificatedEngineerService } from './services/QualificationQualificatedEngineer/qualificated-engineer.service';
import { AdditionTechnicalCapabilitiesRequirementsService } from './services/additionTechnicalCapabilitiesRequirements/addition-technical-capabilities-requirements.service';
import { NationalAddressService } from './services/facilityProfile/national-address-service/national-address.service';
import { FinancialCapabilitiesService } from './services/financialCapabilities/financial-capabilities.service';
import { QualificationFacilityCertificationService } from './services/qualificationFacilityCertification/qualification-facility-certification.service';
import { QualificationInstitutionalCapacityAndHrRequirementsService } from './services/qualificationInstitutionalCapacityAndHrRequirements/qualification-institutional-capacity_Hr-requirements.service';
import { TechnicalCapabilitiesRequirementsService } from './services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { WafiTrainingService } from './services/wafiTraining/wafi-training.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LicenseListComponent } from './components/license-list/license-list.component';
import { LicenseRequestHeaderService } from '../real-estate-contributions-license/services/license-request-header.service';
import { SharedLicenseProjectService } from '../real-estate-contributions-license/services/sharedLicenseProject/shared-license-project.service';
import { QualificationRequestListComponent } from './components/qualification-request-list/qualification-request-list.component';
import { RequestService } from '../real-estate-contributions-qualifying/services/requests/request-service.service';


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
    LicenseListComponent,
    QualificationRequestListComponent,
  ],
  providers:[
    RequestService,
    SharedLicenseProjectService,
    LicenseRequestHeaderService,
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
  ],
  imports: [
    CommonModule,
    RealEstateContributionsFacilitiesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // TranslateModule.forChild(),
    RouterModule,
  ]
})
export class RealEstateContributionsFacilitiesModule { }
