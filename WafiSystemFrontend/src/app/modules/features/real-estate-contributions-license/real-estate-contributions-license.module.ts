import { ProjectAddressService } from './services/licenseProjects/project-address.service';
import { ProjectBasicDataService } from './services/licenseProjects/project-basic-data.service';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CreateLincenseComponent } from './pages/create-lincense/create-lincense.component';
import { LincenseSummaryComponent } from './pages/lincense-summary/lincense-summary.component';
import { LincenseTypesComponent } from './pages/lincense-types/lincense-types.component';
import { LincenseListComponent } from './pages/lincense-list/lincense-list.component';
import { LincenseDetailsComponent } from './pages/lincense-details/lincense-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainDataComponent } from './components/main-data/main-data.component';
import { ProjectDataComponent } from './components/project-data/project-data.component';
import { FeasibilityStudyComponent } from './components/feasibility-study/feasibility-study.component';
import { ProjectPartiesComponent } from './components/project-parties/project-parties.component';
import { RealEstateDeveloperDataComponent } from './components/real-estate-developer-data/real-estate-developer-data.component';
import { AccoutKeeperDataComponent } from './components/accout-keeper-data/accout-keeper-data.component';
import { ProjectBasicDataComponent } from './components/project-basic-data/project-basic-data.component';
import { ProjectAddressComponent } from './components/project-address/project-address.component';
import { BlocksAndbuildingsAndunitsComponent } from './components/blocks-andbuildings-andunits/blocks-andbuildings-andunits.component';
import { ArchitecturalDesignFilesComponent } from './components/architectural-design-files/architectural-design-files.component';
import { ConstructionLicensesComponent } from './components/construction-licenses/construction-licenses.component';
import { AdditionalServicesComponent } from './components/additional-services/additional-services.component';
import { PriceFinancialAnalysisComponent } from './components/price-financial-analysis/price-financial-analysis.component';
import { ListOfProjectExpectedIncomeComponent } from './components/list-of-project-expected-income/list-of-project-expected-income.component';
import { ExpectedAnnualBalanceSheetComponent } from './components/expected-annual-balance-sheet/expected-annual-balance-sheet.component';
import { StatementOfExpectedAnnualCashFlowsComponent } from './components/statement-of-expected-annual-cash-flows/statement-of-expected-annual-cash-flows.component';
import { AccountKeeperService } from './services/licenseProjects/account-keeper.service';
import { SysBankService } from './services/sysBank/sys-bank.service';
import { EngineeringConsultantComponent } from './components/engineering-consultant/engineering-consultant.component';
import { CharteredAccountantComponent } from './components/chartered-accountant/chartered-accountant.component';
import { SubDeveloperComponent } from './components/sub-developer/sub-developer.component';
import { MarketerComponent } from './components/marketer/marketer.component';
import {
  FinalBeneficiaryContractComponent
} from './components/final-beneficiary-contract/final-beneficiary-contract.component';
import {
  LicenseProjectExpectedIncomeFormComponentComponent
} from './components/license-project-expected-income-form-component/license-project-expected-income-form-component.component';
import {
  NationalAddressService
} from '../facilities/services/facilityProfile/national-address-service/national-address.service';
import { ProjectRealStateDeveloperService } from './services/licenseProjects/project-real-state-developer.service';
import {
  EngineeringConsultantAgreementComponent
} from './components/engineering-consultant/engineering-consultant-agreement/engineering-consultant-agreement.component';
import {
  EngineeringConsultantAgreementStaffComponent
} from './components/engineering-consultant/engineering-consultant-agreement-staff/engineering-consultant-agreement-staff.component';
import {
  EngineeringConsultantUploadComponent
} from './components/engineering-consultant/engineering-consultant-upload/engineering-consultant-upload.component';
import {
  CreateUpdateSubDeveloperComponent
} from './components/sub-developer/create-update-sub-developer/create-update-sub-developer.component';
import { SubDeveloperListComponent } from './components/sub-developer/sub-developer-list/sub-developer-list.component';
import { LicenseProjectCharteredAccountantService } from './services/license-project-chartered-accountant.service';
import { LicenseProjectSubDeveloperService } from './services/license-project-sub-developer.service';
import { LicenseProjectEngineeringConsultantService } from './services/license-project-engineering-consultant.service';
import {
  ExpectedAnnualBalanceSheetFormComponent
} from './components/expected-annual-balance-sheet-form/expected-annual-balance-sheet-form.component';
import {
  StatementOfExpectedAnnualCashFlowsFormComponent
} from './components/statement-of-expected-annual-cash-flows-form/statement-of-expected-annual-cash-flows-form.component';
import {
  LicenseProjectFinancialIndicatorComponent
} from './components/license-project-financial-indicator/license-project-financial-indicator.component';
import {
  LicenseProjectFinancialIndicatorFormComponent
} from './components/license-project-financial-indicator-form/license-project-financial-indicator-form.component';
import {
  LicenseProjectExpectedFundingSourceComponent
} from './components/license-project-expected-funding-source/license-project-expected-funding-source.component';
import {
  LicenseProjectExpectedFundingSourceFormComponent
} from './components/license-project-expected-funding-source-form/license-project-expected-funding-source-form.component';
import {
  ExpectedAnnualBalanceSheetService
} from './services/feasibilityStudyServices/expected-annual-balance-sheet.service';
import {
  LicenseProjectAnnualCashFlowService
} from './services/feasibilityStudyServices/license-project-annual-cash-flow.service';
import {
  LicenseProjectExpectedIncomeService
} from './services/feasibilityStudyServices/license-project-expected-income.service';
import {
  LicenseProjectFeasibilityStudyService
} from './services/feasibilityStudyServices/license-project-feasibility-study.service';
import {
  LicenseProjectFinancialIndicatorService
} from './services/feasibilityStudyServices/license-project-financial-indicator.service';
import { ProjectLandComponent } from './components/project-land/project-land.component';
import { ProjectLandTitleDeedsComponent } from './components/project-land-title-deeds/project-land-title-deeds.component';
import { ProjectModuleModelsComponent } from './components/project-module-models/project-module-models.component';
import { ProjectUnitCodesComponent } from './components/project-unit-codes/project-unit-codes.component';
import {
  RealEstateMarketerListComponent
} from "./components/marketer/real-estate-marketer-list/real-estate-marketer-list.component";
import {
  CreateUpdateMarketerComponent
} from "./components/marketer/create-update-marketer/create-update-marketer.component";
import {
  LicenseProjectRealStateMarketerService
} from "./dataModels/license-project-real-state-marketer/license-project-real-state-marketer-service";
import { LicenseProjectAdditionalServicesService } from './services/licenseProjects/license-project-additional-services.service';
import { AdditionalServiceFormComponent } from './components/additional-service-form/additional-service-form.component';
import { ConstructionLicenseService } from './services/licenseProjects/construction-license.service';
import { ConstructionLicenseFormComponent } from './components/construction-license-form/construction-license-form.component';
import { LicenseProjectExpectedFundingSourceService } from './services/feasibilityStudyServices/license-project-expected-funding-source.service';
import { ArchitecturalDesignFilesService } from './services/licenseProjects/architectural-design-files.service';
import { LicenseRequestTypeService } from './services/license-request-type.service';
import { ProjectLandService } from './services/licenseProjects/project-land.service';
import { ProjectLandDeedService } from './services/project-land-deed.service';
import { ProjectLandTitleDeedsFormComponent } from './components/project-land-title-deeds-form/project-land-title-deeds-form.component';
import { ProjectDeedsOwnerFormComponent } from './components/project-deeds-owner-form/project-deeds-owner-form.component';
import { ProjectLandOwnerService } from './services/project-land-owner.service';
import { ProjectOwnersComponent } from './components/project-owners/project-owners.component';
import { ZonesBlocksBuildingAndUnitsService } from './services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { AddZoneComponent } from './components/add-zone/add-zone.component';
import { SysLicenseBeneficiaryContractFormService } from './services/sys-license-beneficiary-contract-form.service';
import { ProjectUnitsComponent } from './components/project-units/project-units.component';
import { ProjectModelService } from './services/project-model.service';
import { ProjectSubUnitService } from './services/project-sub-unit.service';
import { ProjectModuleModelsFormComponent } from './components/project-module-models-form/project-module-models-form.component';
import { SysYearService } from './services/feasibilityStudyServices/sys-year.service';
import { SysFundingTypeService } from './services/feasibilityStudyServices/sys-funding-type.service';
import { LicenseRequestHeaderService } from './services/license-request-header.service';
import { SharedLicenseProjectService } from './services/sharedLicenseProject/shared-license-project.service';
import { EngineeringConsultantCustomerInfoComponent } from "./components/engineering-consultant/engineering-consultant-customer-info/engineering-consultant-customer-info.component";
import { LicenseRequestService } from './services/license-request.service';
import { LicenseProjectUnitService } from './services/license-project-unit/license-project-unit.service';
import { AddEditProjectBlockComponent } from './components/add-edit-project-block/add-edit-project-block.component';
import { UnitCodesComponent } from './components/unit-codes/unit-codes.component';
import { UnitCodesFormComponent } from './components/unit-codes-form/unit-codes-form.component';
import { ProjectUnitCodeService } from './services/project-unit-code.service';
import { SubUnitModelsComponent } from './components/sub-unit-models/sub-unit-models.component';
import { LicenseRequestValidationPopupComponent } from './components/license-request-validation-popup/license-request-validation-popup.component';
import { LicenseRequestNotesService } from './services/license-request-notes.service';
import { RequestDataComponent } from './components/request-data/request-data.component';
import { RequestNotesComponent } from './components/request-notes/request-notes.component';
import { RequestTimeLineComponent } from './components/request-time-line/request-time-line.component';
import { LicenseDetailsService } from './services/license-details/license-details.service';
import { LicenseRequestMainDataComponent } from './components/license-request-main-data/license-request-main-data.component';
import { LicenseRequestProjectDataComponent } from './components/license-request-project-data/license-request-project-data.component';
import { LicenseRequestFeasibilityStudyComponent } from './components/license-request-feasibility-study/license-request-feasibility-study.component';
import { LicenseRequestProjectPartiesComponent } from './components/license-request-project-parties/license-request-project-parties.component';
import { LicenseRequestLicenseProjectExpectedFundingSourceComponent } from './components/license-request-license-project-expected-funding-source/license-request-license-project-expected-funding-source.component';
import { LicenseRequestLicenseProjectFinancialIndicatorComponent } from './components/license-request-license-project-financial-indicator/license-request-license-project-financial-indicator.component';
import { LicenseRequestStatementOfExpectedAnnualCashFlowsComponent } from './components/license-request-statement-of-expected-annual-cash-flows/license-request-statement-of-expected-annual-cash-flows.component';
import { LicenseRequestExpectedAnnualBalanceSheetComponent } from './components/license-request-expected-annual-balance-sheet/license-request-expected-annual-balance-sheet.component';
import { LicenseRequestListOfProjectExpectedIncomeComponent } from './components/license-request-list-of-project-expected-income/license-request-list-of-project-expected-income.component';
import { LicenseRequestPriceFinancialAnalysisComponent } from './components/license-request-price-financial-analysis/license-request-price-financial-analysis.component';
import { LicenseProjectRealEstateDeveloperDataComponent } from './components/license-project-real-estate-developer-data-component/license-project-real-estate-developer-data-component';
import { LicenseProjectAccoutKeeperDataComponent } from './components/license-project-accout-keeper-data/license-project-accout-keeper-data.component';
import { LicenseProjectProjectBasicDataComponent } from './components/license-project-project-basic-data/license-project-project-basic-data.component';
import { LicenseProjectProjectAddressComponent } from './components/license-project-project-address/license-project-project-address.component';
import { LicenseProjectProjectLandComponent } from './components/license-project-project-land/license-project-project-land.component';
import { LicenseProjectProjectLandTitleDeedsComponent } from './components/license-project-project-land-title-deeds/license-project-project-land-title-deeds.component';
import { LicenseProjectBlocksAndbuildingsAndunitsComponent } from './components/license-project-blocks-andbuildings-andunits/license-project-blocks-andbuildings-andunits.component';
import { LicenseProjectProjectModuleModelsComponent } from './components/license-project-project-module-models/license-project-project-module-models.component';
import { LicenseProjectProjectUnitCodesComponent } from './components/license-project-project-unit-codes/license-project-project-unit-codes.component';
import { LicenseProjectArchitecturalDesignFilesComponent } from './components/license-project-architectural-design-files/license-project-architectural-design-files.component';
import { LicenseProjectConstructionLicensesComponent } from './components/license-project-construction-licenses/license-project-construction-licenses.component';
import { LicenseProjectAdditionalServicesComponent } from './components/license-project-additional-services/license-project-additional-services.component';
import { RequestTimeLineService } from './services/request-time-line.service';
import { LicenseRequestFinalBeneficiaryContractComponent } from './components/license-request-final-beneficiary-contract/license-request-final-beneficiary-contract.component';
import { LicenseRequestMarketerComponent } from './components/license-request-marketer/license-request-marketer.component';
import { LicenseRequestSubDeveloperComponent } from './components/license-request-sub-developer/license-request-sub-developer.component';
import { LicenseRequestCharteredAccountantComponent } from './components/license-request-chartered-accountant/license-request-chartered-accountant.component';
import { LicenseRequestEngineeringConsultantComponent } from './components/license-request-engineering-consultant/license-request-engineering-consultant.component';
import { ProjectQuantitiesTableComponent } from './components/project-quantities-table/project-quantities-table.component';
import { ExternalProjectInformationComponent } from './components/external-project-information/external-project-information.component';
import { QuantitiesTableFilesService } from './services/licenseProjects/quantities-table-files.service';
import { LicenseProjectQuantitiesTableFilesComponent } from './components/license-project-quantities-table-files/license-project-quantities-table-files.component';
import { LicenseProjectExternalProjectDataComponent } from './components/license-project-external-project-data/license-project-external-project-data.component';
import { DataVisibilityOfLicenseProjectService } from './services/data-visibility-of-license-project/data-visibility-of-license-project.service';

import { NextAndPreviusButtonsComponent } from './components/next-and-previus-buttons/next-and-previus-buttons.component';
import { NextAndPreviusButtonsService } from './services/next-and-previous-buttons/next-and-previus-buttons.service';

import { ProjectUnitsStatementComponent } from './components/project-units-statement/project-units-statement.component';
import { ProjectExternalAddressComponent } from './components/project-external-address/project-external-address.component';
import { LicenseProjectExternalAddressComponent } from './components/license-project-external-address/license-project-external-address.component';
import { LicenseProjectFinancialStatementComponent } from './components/license-project-financial-statement/license-project-financial-statement.component';
import { LicenseFinancialStatmenentService } from './services/licenseFinancialStatmenentService/LicenseFinancialStatmenent.service';
import { DelegatorListComponent } from './components/delegator-list/delegator-list.component';
import { DelegatorFormComponent } from './components/delegator-form/delegator-form.component';
import { LicenseProjectDelegatorListComponent } from './components/license-project-delegator-list/license-project-delegator-list.component';
import { MainRealStateDeveloperComponent } from './components/main-real-state-developer/main-real-state-developer.component';
import { LicenseProjectDelegatorService } from './services/license-project-delegator.service';
import { LicenseProjectMainRealStateDeveloperService } from './services/license-project-main-real-state-developer.service';
import { LicenseProjectMainRealStateDeveloperComponent } from './components/license-project-main-real-state-developer/license-project-main-real-state-developer.component';
import { ProjectDocumentDataComponent } from './components/project-document-data/project-document-data.component';
import { LicenseProjectDocumentDataComponent } from './components/license-project-document-data/license-project-document-data.component';
import { BankingAccountComponent } from './components/banking-account/banking-account.component';
import { LicenseProjectBankingAccountComponent } from './components/license-project-banking-account/license-project-banking-account.component';
import { ExhibitionDataComponent } from './components/exhibition-data/exhibition-data.component';
import { ExhibitionDataService } from './services/exhibition-data.service';
import { LicenseProjectExhibitionsComponent } from './components/license-project-exhibitions/license-project-exhibitions.component';
import { DetachedLicenseProjectUnitsComponent } from './components/detached-license-project-units/detached-license-project-units.component';
import { DetachedLicenseProjectUnitsService } from './services/detached-license-project-units/detached-license-project-units.service';
import { AddEditDetachedLicenseProjectUnitsComponent } from './components/add-edit-detached-license-project-units/add-edit-detached-license-project-units.component';
import { LicenseProjectVisitorEngineeringConsultantComponent } from './components/license-project-visitor-engineering-consultant/license-project-visitor-engineering-consultant.component';
import { VisitorEngineeringConsultantService } from './services/visitor-engineering-consultant.service';
import { VisitorEngineeringConsultantComponent } from './components/visitor-engineering-consultant/visitor-engineering-consultant.component';
import { BeneficiaryContractFormAdditionalTermsComponent } from './components/beneficiary-contract-form-additional-terms/beneficiary-contract-form-additional-terms.component';
import { BeneficiaryContractFormAdditionalTermsService } from './services/beneficiary-contract-form-additional-terms.service';
import { BeneficiaryContractFormAdditionalTermsFormComponent } from './components/beneficiary-contract-form-additional-terms-form/beneficiary-contract-form-additional-terms-form.component';
import { LicenseBeneficiaryContractFormAdditionalTermsComponent } from './components/license-beneficiary-contract-form-additional-terms/license-beneficiary-contract-form-additional-terms.component';
import { ProjectExternalAddressService } from './services/licenseProjects/project-external-address.service';
import { ProjectDeveloperComponent } from './components/project-developer/project-developer.component';
import { LicenseProjectDeveloperService } from './services/license-project-developer.service';
import { LicenseProjectDeveloperComponent } from './components/license-project-developer/license-project-developer.component';
import { RequestAttachmentsComponent } from './components/request-attachments/request-attachments.component';
import { LicenseProjectRequestAttachmentComponent } from './components/license-project-request-attachment/license-project-request-attachment.component';
import { LicenseProjectRequestAttachmentService } from './services/license-project-request-attachment.service';
import { LicenseProjectDetachedtUnitsComponent } from './components/license-project-detachedt-units/license-project-detachedt-units.component';
import { LicenseProjectFinancialStatementListComponent } from './components/LicenseProjectFinancialStatementList/LicenseProjectFinancialStatementList.component';
import { LicenseProjectPromissoryNoteComponent } from './components/license-project-promissory-note/license-project-promissory-note.component';
import { LicenseProjectPromissoryNoteService } from './services/license-project-promissory-note.service';
import { PromissoryNoteComponent } from './components/promissory-note/promissory-note.component';


import { LicenseCertificatesComponent } from './pages/license-certificates/license-certificates.component';
import { LicenseCertificateService } from './services/license-certificate.service';
import { RealEstateContributionsLicenseRoutingModule } from './real-estate-contributions-license-routing.module';
import { ProjectDeedsEditOwnersFormComponent } from './components/project-deeds-edit-owners-form-component/project-deeds-edit-owners-form.component';
import { LicenseRequestApprovalsComponent } from './pages/license-request-approvals/license-request-approvals.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { RealEstateContributionService } from './services/real-estate-contribution.service';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { LicenseRequestApprovalsService } from './services/license-request-approval/license-request-approvals.service';
import { MainContributionDataComponent } from './components/main-contribution-data/main-contribution-data.component';
import { MainContributionDataService } from './services/main-contribution-data.service';
import { TechnicalCapabilitiesRequirementsService } from '../real-estate-contributions-facilities/services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { LicenseRequestApprovalsDetailsComponent } from './pages/license-request-approvals-details/license-request-approvals-details.component';
import { LicenseProjectRealStateMarketerApprovalComponent } from './components/license-project-real-state-marketer-approval/license-project-real-state-marketer-approval.component';
import { LicenseProjectCharteredAccountantApprovalComponent } from './components/license-project-chartered-accountant-approval/license-project-chartered-accountant-approval.component';
import { LicenseProjectMainRealStateDeveloperApprovalComponent } from './components/license-project-main-real-state-developer-approval/license-project-main-real-state-developer-approval.component';
import { LicenseProjectSubDeveloperApprovalComponent } from './components/license-project-sub-developer-approval/license-project-sub-developer-approval.component';
import { LicenseProjectEngineeringConsultantApprovalComponent } from './components/license-project-engineering-consultant-approval/license-project-engineering-consultant-approval.component';
import { ShowOwnerListComponent } from './components/show-owner-list/show-owner-list.component';
import { LicenseProjectMainContributionDataComponent } from './components/license-project-main-contribution-data/license-project-main-contribution-data.component';
import { LicenseProjectAgreementsComponent } from './components/license-project-agreements/license-project-agreements.component';
import { RealStateCertificateComponent } from './components/certificate/certificate.component';

import { ProjectApprovalsService } from './services/licenseProjects/project-approvals.service';
import { InitialCertificateComponent } from './components/initial-certificate/initial-certificate.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectListService } from './services/project-list.service';
import { ProjectListFormComponent } from './pages/project-list-form/project-list-form.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { TimeScheduleComponent } from './components/time-schedule/time-schedule.component';
import { PlannedEngineeringSupervisionReportsComponent } from './components/planned-engineering-supervision-reports/planned-engineering-supervision-reports.component';
import { MonthlyEngineeringSupervisionReportsComponent } from './components/monthly-engineering-supervision-reports/monthly-engineering-supervision-reports.component';
import { QualityNoticesComponent } from './components/quality-notices/quality-notices.component';
import { ProjectRequestsComponent } from './components/project-requests/project-requests.component';
import { EndOfContractualComponent } from './components/end-of-contractual/end-of-contractual.component';
import { TimelineStatusSummaryComponent } from './components/timeline-status-summary/timeline-status-summary.component';
import { ProjectBasicInformationComponent } from './components/project-basic-information/project-basic-information.component';
import { NotesComponent } from './components/notes/notes.component';
import { RequestMenuComponent } from './components/request-menu/request-menu.component';
import { TimelineProgramFilesComponent } from './components/timeline-program-files/timeline-program-files.component';
import { TimelinefilesService } from './services/timelinefiles.service';
import { AddTimelineFilesComponent } from './components/add-timeline-files/add-timeline-files.component';
import { WorkStatusReportsComponent } from './components/work-status-reports/work-status-reports.component';
import { InfraStructureComponent } from './components/infra-structure/infra-structure.component';
import { PlannedEngineeringSupervisionReportsRequestNotesComponent } from './components/planned-engineering-supervision-reports-request-notes/planned-engineering-supervision-reports-request-notes.component';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from './services/license-project-engineering-supervision-planned-report-detail.service';
import { AddEditEngineeringSupervisionReportsProjectDetailsComponent } from './components/add-edit-engineering-supervision-reports-project-details/add-edit-engineering-supervision-reports-project-details.component';
import { AddEditCompletionAndEmploymentRatesComponent } from './components/add-edit-completion-and-employment-rates/add-edit-completion-and-employment-rates.component';
import { QualityAndBusinessProgressComponent } from './components/quality-and-business-progress/quality-and-business-progress.component';
import { PlannedEngineerProjectDetailsComponent } from './components/planned-engineer-project-details/planned-engineer-project-details.component';
import { QualityAndBusinessProgressService } from './services/quality-and-business-progress.service';
import { AddEditEngineeringQualityAssuranceComponent } from './components/add-edit-engineering-quality-assurance/add-edit-engineering-quality-assurance.component';
import { AddEditConstructionWorkPositionComponent } from './components/add-edit-construction-work-position/add-edit-construction-work-position.component';
import { PlannedEngineerProjectDetailsService } from './services/planned-engineer-project-details.service';
import { CompletionRatesComponent } from './components/completion-rates/completion-rates.component';
import { LicenseProjectInfrastructureNetworksStatusService } from './services/license-project-infrastructure-networks-status.service';
import { AddEditEngineeringInfrastructureRatesComponent } from './components/add-edit-engineering-infrastructure-rates/add-edit-engineering-infrastructure-rates.component';
import { AddEditItemsOnMonthComponent } from './components/add-edit-items-on-month/add-edit-items-on-month.component';
import { PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent } from './components/position-of-the-required-appropriations-from-the-authorities/position-of-the-required-appropriations-from-the-authorities.component';
import { MonthlyEngineeringSupervisionReportsInfraStructureComponent } from './components/monthly-engineering-supervision-reports-infra-structure/monthly-engineering-supervision-reports-infra-structure.component';
import { MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent } from './components/monthly-engineering-supervision-reports-risks-and-safety/monthly-engineering-supervision-reports-risks-and-safety.component';
import { MonthlyengineeringSupervisionReportsProjectDetailsComponent } from './components/monthlyengineering-supervision-reports-project-details/monthlyengineering-supervision-reports-project-details.component';
import { MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from './components/monthly-engineering-supervision-reports-quality-and-business-progress/monthly-engineering-supervision-reports-quality-and-business-progress.component';
import { MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent } from './components/monthly-engineering-supervision-reports-work-status-reports/monthly-engineering-supervision-reports-work-status-reports.component';
import { NewQualityNoticesComponent } from './components/new-quality-notices/new-quality-notices.component';
import { PreviousQualityNoticesComponent } from './components/previous-quality-notices/previous-quality-notices.component';
import { IrregularRequestsComponent } from './components/irregular-requests/irregular-requests.component';
import { RegularRequestsComponent } from './components/regular-requests/regular-requests.component';
import { TimeScheduleProgramComponent } from './components/time-schedule-program/time-schedule-program.component';
import { RenewLicensesService } from './services/renew-licenses/renew-licenses.service';
import { RenewLicensesListComponent } from './pages/renew-licenses-list/renew-licenses-list.component';
import { LicenseProjectQualityNoticeService } from './services/license-project-quality-notice.service';
import { LicenseProjectQualityNoticeReplyService } from './services/license-project-quality-notice-reply.service';
import { AddReplayFromProjectMangerComponent } from './components/add-replay-from-project-manger/add-replay-from-project-manger.component';
import { LicenseProjectQualityNoticeListComponent } from './components/license-project-quality-notice-list/license-project-quality-notice-list.component';
import { LicenseProjectQualityNoticeReplyListComponent } from './components/license-project-quality-notice-reply-list/license-project-quality-notice-reply-list.component';
import { ShowLicenseProjectQualityNoticeDetalisComponent } from './components/show-license-project-quality-notice-detalis/show-license-project-quality-notice-detalis.component';
import { LicenseProjectRiskService } from './services/license-project-risk.service';
import { LicenseProjectProblemService } from './services/license-project-problem.service';
import { LookupEngineeringManagementService } from './services/lookup-engineering-management.service';
import { AddEditDangerLogComponent } from './components/add-edit-danger-log/add-edit-danger-log.component';
import { AddEditProblemLogComponent } from './components/add-edit-problem-log/add-edit-problem-log.component';
import { DangerLogComponent } from './components/danger-log/danger-log.component';
import { ShowDangerLogComponent } from './components/show-danger-log/show-danger-log.component';
import { ProblemLogComponent } from './components/problem-log/problem-log.component';
import { ShowProblemLogComponent } from './components/show-problem-log/show-problem-log.component';
import { LicenseProjectQualityNoticeContainerComponent } from './components/license-project-quality-notice-container/license-project-quality-notice-container.component';
import { ProjectBusinessCaseReportNoteService } from './services/project-business-case-report-note.service';
import { ProjectBusinessCaseReportService } from './services/project-business-case-report.service';
import { AddEditProjectBusinessCaseComponent } from './components/add-edit-project-business-case/add-edit-project-business-case.component';
import { AddProjectBusinessCaseNotesComponent } from './components/add-project-business-case-notes/add-project-business-case-notes.component';
import { ProjectBusinessCaseContainerComponent } from './components/project-business-case-container/project-business-case-container.component';
import { ProjectBusinessCaseReportListComponent } from './components/project-business-case-report-list/project-business-case-report-list.component';
import { ShowProjectBusinessCaseComponent } from './components/show-project-business-case/show-project-business-case.component';
import { EmployeeLicenseListComponent } from './pages/employee-license-list/employee-license-list.component';
import { EmployeeCreateLincenseComponent } from './pages/employee-create-lincense/employee-create-lincense.component';
import { EmployeeCreateLicenseService } from './services/employee-create-lincense.service';
import { SellingCertificateComponent } from './components/selling-certificate/selling-certificate.component';
import { FinalTenantContractComponent } from './components/final-tenant-contract/final-tenant-contract.component';
import { LicenseRequestFinalTenantContractComponent } from './components/license-request-final-tenant-contract/license-request-final-tenant-contract.component';
import { LicenseProjectBuyerListComponent } from './pages/license-project-buyer-list/license-project-buyer-list.component';
import { AddBuyerComponent } from './components/add-buyer/add-buyer.component';
import { ContractDocumentationListComponent } from './pages/contract-documentation-list/contract-documentation-list.component';
import { LicenseProjectBuyerService } from './services/license-project-buyer.service';
import { CharteredAccountProjectListComponent } from './pages/chareted-account-project-list/chartered-account-project-list/chartered-account-project-list.component';
import { CertifiedLicenseDataComponent } from './components/certified-license-data/certified-license-data.component';
// import { LicenseRequestApprovalsDetailsComponent } from './pages/license-request-approvals-details/license-request-approvals-details.component';

@NgModule({
  declarations: [
    RealStateCertificateComponent,
    CreateLincenseComponent,
    LincenseSummaryComponent,
    LincenseTypesComponent,
    LincenseListComponent,
    LincenseDetailsComponent,
    MainDataComponent,
    ProjectDataComponent,
    FeasibilityStudyComponent,
    ProjectPartiesComponent,
    RealEstateDeveloperDataComponent,
    LicenseProjectFinancialStatementComponent,
    AccoutKeeperDataComponent,
    ProjectBasicDataComponent,
    ProjectAddressComponent,
    BlocksAndbuildingsAndunitsComponent,
    ArchitecturalDesignFilesComponent,
    ConstructionLicensesComponent,
    AdditionalServicesComponent,
    PriceFinancialAnalysisComponent,
    ListOfProjectExpectedIncomeComponent,
    ExpectedAnnualBalanceSheetComponent,
    StatementOfExpectedAnnualCashFlowsComponent,
    EngineeringConsultantComponent,
    CharteredAccountantComponent,
    SubDeveloperComponent,
    MarketerComponent,
    FinalBeneficiaryContractComponent,
    LicenseProjectExpectedIncomeFormComponentComponent,
    EngineeringConsultantAgreementComponent,
    EngineeringConsultantAgreementStaffComponent,
    EngineeringConsultantUploadComponent,
    SubDeveloperListComponent,
    CreateUpdateSubDeveloperComponent,
    ExpectedAnnualBalanceSheetFormComponent,
    StatementOfExpectedAnnualCashFlowsFormComponent,
    LicenseProjectFinancialIndicatorComponent,
    LicenseProjectFinancialIndicatorFormComponent,
    LicenseProjectExpectedFundingSourceComponent,
    LicenseProjectExpectedFundingSourceFormComponent,
    ProjectLandComponent,
    ProjectLandTitleDeedsComponent,
    ProjectModuleModelsComponent,
    ProjectUnitCodesComponent,
    EngineeringConsultantCustomerInfoComponent,
    // --- end of engineering consultant ---
    RealEstateMarketerListComponent,
    CreateUpdateMarketerComponent,
    AdditionalServiceFormComponent,
    ConstructionLicenseFormComponent,
    ProjectLandTitleDeedsFormComponent,
    ProjectDeedsOwnerFormComponent,
    ProjectOwnersComponent,
    AddZoneComponent,
    ProjectUnitsComponent,
    CharteredAccountProjectListComponent,
    ProjectModuleModelsFormComponent,
    AddEditProjectBlockComponent,
    UnitCodesComponent,
    UnitCodesFormComponent,
    SubUnitModelsComponent,
    LicenseRequestValidationPopupComponent,
    RequestDataComponent,
    RequestNotesComponent,
    RequestTimeLineComponent,
    LicenseRequestMainDataComponent,
    LicenseRequestProjectDataComponent,
    LicenseRequestFeasibilityStudyComponent,
    LicenseRequestProjectPartiesComponent,
    LicenseRequestLicenseProjectExpectedFundingSourceComponent,
    LicenseRequestLicenseProjectFinancialIndicatorComponent,
    LicenseRequestStatementOfExpectedAnnualCashFlowsComponent,
    LicenseRequestExpectedAnnualBalanceSheetComponent,
    LicenseRequestListOfProjectExpectedIncomeComponent,
    LicenseRequestPriceFinancialAnalysisComponent,
    LicenseRequestFinalBeneficiaryContractComponent,
    LicenseRequestMarketerComponent,
    LicenseRequestSubDeveloperComponent,
    LicenseRequestCharteredAccountantComponent,
    LicenseRequestEngineeringConsultantComponent,
    LicenseProjectRealEstateDeveloperDataComponent,
    LicenseProjectAccoutKeeperDataComponent,
    LicenseProjectProjectBasicDataComponent,
    LicenseProjectProjectAddressComponent,
    LicenseProjectProjectLandComponent,
    LicenseProjectProjectLandTitleDeedsComponent,
    LicenseProjectBlocksAndbuildingsAndunitsComponent,
    LicenseProjectProjectModuleModelsComponent,
    LicenseProjectProjectUnitCodesComponent,
    LicenseProjectArchitecturalDesignFilesComponent,
    LicenseProjectConstructionLicensesComponent,
    LicenseProjectAdditionalServicesComponent,
    ProjectQuantitiesTableComponent,
    ExternalProjectInformationComponent,
    LicenseProjectQuantitiesTableFilesComponent,
    LicenseProjectExternalProjectDataComponent,
    NextAndPreviusButtonsComponent,
    LicenseProjectExternalProjectDataComponent,
    ProjectUnitsStatementComponent,
    ProjectExternalAddressComponent,
    LicenseProjectExternalAddressComponent,
    LicenseProjectFinancialStatementComponent,
    DelegatorListComponent,
    DelegatorFormComponent,
    LicenseProjectDelegatorListComponent,
    LicenseProjectFinancialStatementListComponent,
    MainRealStateDeveloperComponent,
    LicenseProjectMainRealStateDeveloperComponent,
    ProjectDocumentDataComponent,
    LicenseProjectDocumentDataComponent,
    BankingAccountComponent,
    LicenseProjectBankingAccountComponent,
    ExhibitionDataComponent,
    LicenseProjectExhibitionsComponent,
    DetachedLicenseProjectUnitsComponent,
    AddEditDetachedLicenseProjectUnitsComponent,
    LicenseProjectExhibitionsComponent,
    LicenseProjectVisitorEngineeringConsultantComponent,
    VisitorEngineeringConsultantComponent,
    BeneficiaryContractFormAdditionalTermsComponent,
    BeneficiaryContractFormAdditionalTermsFormComponent,
    LicenseBeneficiaryContractFormAdditionalTermsComponent,
    ProjectDeveloperComponent,
    LicenseProjectDeveloperComponent,
    RequestAttachmentsComponent,
    LicenseProjectRequestAttachmentComponent,
    LicenseProjectDetachedtUnitsComponent,
    LicenseProjectPromissoryNoteComponent,
    PromissoryNoteComponent,
    LicenseCertificatesComponent,
    LicenseRequestApprovalsComponent,
    ProjectDeedsEditOwnersFormComponent,
    ApprovalComponent,
    AgreementsComponent,
    MainContributionDataComponent,
    LicenseRequestApprovalsDetailsComponent,
    LicenseProjectRealStateMarketerApprovalComponent,
    LicenseProjectCharteredAccountantApprovalComponent,
    LicenseProjectMainRealStateDeveloperApprovalComponent,
    LicenseProjectSubDeveloperApprovalComponent,
    LicenseProjectEngineeringConsultantApprovalComponent,
    ShowOwnerListComponent,
    LicenseProjectMainContributionDataComponent,
    LicenseProjectAgreementsComponent,
    InitialCertificateComponent,
    ProjectListComponent,
    ProjectListFormComponent,
    ProjectDetailsComponent,
    ProjectInformationComponent,
    TimeScheduleComponent,
    PlannedEngineeringSupervisionReportsComponent,
    MonthlyEngineeringSupervisionReportsComponent,
    QualityNoticesComponent,
    ProjectRequestsComponent,
    EndOfContractualComponent,
    TimelineStatusSummaryComponent,
    ProjectBasicInformationComponent,
    NotesComponent,
    RequestMenuComponent,
    TimelineProgramFilesComponent,
    AddTimelineFilesComponent,
    WorkStatusReportsComponent,
    InfraStructureComponent,
    PlannedEngineeringSupervisionReportsRequestNotesComponent,
    AddEditEngineeringSupervisionReportsProjectDetailsComponent,
    AddEditCompletionAndEmploymentRatesComponent,
    QualityAndBusinessProgressComponent,
    PlannedEngineerProjectDetailsComponent,
    AddEditEngineeringQualityAssuranceComponent,
    AddEditConstructionWorkPositionComponent,
    CompletionRatesComponent,
    AddEditEngineeringInfrastructureRatesComponent,
    AddEditItemsOnMonthComponent,
    PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent,
    MonthlyEngineeringSupervisionReportsInfraStructureComponent,
    MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent,
    MonthlyengineeringSupervisionReportsProjectDetailsComponent,
    MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent,
    MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent,
    NewQualityNoticesComponent,
    PreviousQualityNoticesComponent,
    IrregularRequestsComponent,
    RegularRequestsComponent,
    TimeScheduleProgramComponent,
    RenewLicensesListComponent,
    AddReplayFromProjectMangerComponent,
    LicenseProjectQualityNoticeListComponent,
    LicenseProjectQualityNoticeReplyListComponent,
    ShowLicenseProjectQualityNoticeDetalisComponent,
    AddEditDangerLogComponent,
    AddEditProblemLogComponent,
    DangerLogComponent,
    ShowDangerLogComponent,
    ProblemLogComponent,
    ShowProblemLogComponent,
    LicenseProjectQualityNoticeContainerComponent,
    AddEditProjectBusinessCaseComponent,
    AddProjectBusinessCaseNotesComponent,
    ProjectBusinessCaseContainerComponent,
    ProjectBusinessCaseReportListComponent,
    ShowProjectBusinessCaseComponent,
    EmployeeLicenseListComponent,
    EmployeeCreateLincenseComponent,
    SellingCertificateComponent,
    FinalTenantContractComponent,
    LicenseRequestFinalTenantContractComponent,
    CertifiedLicenseDataComponent,
    LicenseProjectBuyerListComponent,
    AddBuyerComponent,
    ContractDocumentationListComponent
  ],
  providers: [
    LicenseProjectBuyerService,
    MainContributionDataService,
    RealEstateContributionService,
    AccountKeeperService,
    SysBankService,
    NationalAddressService,
    ProjectRealStateDeveloperService,
    TechnicalCapabilitiesRequirementsService,
    ProjectBasicDataService,
    LicenseProjectEngineeringConsultantService,
    LicenseProjectCharteredAccountantService,
    LicenseProjectSubDeveloperService,
    ExpectedAnnualBalanceSheetService,
    LicenseProjectAnnualCashFlowService,
    LicenseProjectExpectedIncomeService,
    LicenseProjectFeasibilityStudyService,
    LicenseProjectFinancialIndicatorService,
    LicenseFinancialStatmenentService,
    DatePipe,
    LicenseProjectRealStateMarketerService,
    LicenseProjectAdditionalServicesService,
    ConstructionLicenseService,
    ProjectAddressService,
    SysYearService,
    SysFundingTypeService,
    LicenseProjectExpectedFundingSourceService,
    ArchitecturalDesignFilesService,
    LicenseRequestTypeService,
    LicenseRequestApprovalsService,
    ProjectLandService,
    ProjectLandDeedService,
    ProjectLandOwnerService,
    ZonesBlocksBuildingAndUnitsService,
    SysLicenseBeneficiaryContractFormService,
    LicenseRequestService,
    LicenseRequestHeaderService,
    SharedLicenseProjectService,
    ProjectModelService,
    ProjectSubUnitService,
    LicenseProjectUnitService,
    ProjectUnitCodeService,
    LicenseRequestNotesService,
    LicenseDetailsService,
    RequestTimeLineService,
    QuantitiesTableFilesService,
    DataVisibilityOfLicenseProjectService,
    NextAndPreviusButtonsService,
    LicenseProjectDelegatorService,
    LicenseProjectMainRealStateDeveloperService,
    ExhibitionDataService,
    VisitorEngineeringConsultantService,
    BeneficiaryContractFormAdditionalTermsService,
    DetachedLicenseProjectUnitsService,
    ExhibitionDataService,
    VisitorEngineeringConsultantService,
    ProjectExternalAddressService,
    LicenseProjectDeveloperService,
    LicenseProjectRequestAttachmentService,
    LicenseProjectPromissoryNoteService,
    LicenseCertificateService,
    ProjectApprovalsService,
    ProjectListService,
    TimelinefilesService,
    LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    QualityAndBusinessProgressService,
    PlannedEngineerProjectDetailsService,
    LicenseProjectInfrastructureNetworksStatusService,
    RenewLicensesService,
    LicenseProjectQualityNoticeService,
    LicenseProjectQualityNoticeReplyService,
    LicenseProjectRiskService,
    LicenseProjectProblemService,
    LookupEngineeringManagementService,
    ProjectBusinessCaseReportNoteService,
    ProjectBusinessCaseReportService,
    EmployeeCreateLicenseService,
    SharedLicenseProjectService 
  ],
  imports: [
    CommonModule,
    RouterModule,
    RealEstateContributionsLicenseRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // TranslateModule.forChild(),
    FormsModule
  ],

})
export class RealEstateContributionsLicenseModule {
}
