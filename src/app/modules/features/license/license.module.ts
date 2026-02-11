import { ProjectAddressService } from './services/licenseProjects/project-address.service';
import { TechnicalCapabilitiesRequirementsService } from '../facilities/services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { ProjectBasicDataService } from './services/licenseProjects/project-basic-data.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LicenseRoutingModule } from './license-routing.module';
import { CreateLincenseComponent } from './pages/create-license/create-license.component';
import { LincenseSummaryComponent } from './pages/lincense-summary/lincense-summary.component';
import { LincenseTypesComponent } from './pages/lincense-types/lincense-types.component';
import { LincenseListComponent } from './pages/lincense-list/lincense-list.component';
import { LincenseDetailsComponent } from './pages/lincense-details/lincense-details.component';
import { FawriaLicenseDetailsComponent } from './pages/fawria-license-details/fawria-license-details.component';
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
import { FinalBeneficiaryContractComponent } from './components/final-beneficiary-contract/final-beneficiary-contract.component';
import { LicenseProjectExpectedIncomeFormComponentComponent } from './components/license-project-expected-income-form-component/license-project-expected-income-form-component.component';
import { NationalAddressService } from '../facilities/services/facilityProfile/national-address-service/national-address.service';
import { ProjectRealStateDeveloperService } from './services/licenseProjects/project-real-state-developer.service';
import { EngineeringConsultantAgreementComponent } from './components/engineering-consultant/engineering-consultant-agreement/engineering-consultant-agreement.component';
import { EngineeringConsultantAgreementStaffComponent } from './components/engineering-consultant/engineering-consultant-agreement-staff/engineering-consultant-agreement-staff.component';
import { EngineeringConsultantUploadComponent } from './components/engineering-consultant/engineering-consultant-upload/engineering-consultant-upload.component';
import { CreateUpdateSubDeveloperComponent } from './components/sub-developer/create-update-sub-developer/create-update-sub-developer.component';
import { SubDeveloperListComponent } from './components/sub-developer/sub-developer-list/sub-developer-list.component';
import { LicenseProjectCharteredAccountantService } from './services/license-project-chartered-accountant.service';
import { LicenseProjectSubDeveloperService } from './services/license-project-sub-developer.service';
import { LicenseProjectEngineeringConsultantService } from './services/license-project-engineering-consultant.service';
import { ExpectedAnnualBalanceSheetFormComponent } from './components/expected-annual-balance-sheet-form/expected-annual-balance-sheet-form.component';
import { StatementOfExpectedAnnualCashFlowsFormComponent } from './components/statement-of-expected-annual-cash-flows-form/statement-of-expected-annual-cash-flows-form.component';
import { LicenseProjectFinancialIndicatorComponent } from './components/license-project-financial-indicator/license-project-financial-indicator.component';
import { LicenseProjectFinancialIndicatorFormComponent } from './components/license-project-financial-indicator-form/license-project-financial-indicator-form.component';
import { LicenseProjectExpectedFundingSourceComponent } from './components/license-project-expected-funding-source/license-project-expected-funding-source.component';
import { LicenseProjectExpectedFundingSourceFormComponent } from './components/license-project-expected-funding-source-form/license-project-expected-funding-source-form.component';
import { ExpectedAnnualBalanceSheetService } from './services/feasibilityStudyServices/expected-annual-balance-sheet.service';
import { LicenseProjectAnnualCashFlowService } from './services/feasibilityStudyServices/license-project-annual-cash-flow.service';
import { LicenseProjectExpectedIncomeService } from './services/feasibilityStudyServices/license-project-expected-income.service';
import { LicenseProjectFeasibilityStudyService } from './services/feasibilityStudyServices/license-project-feasibility-study.service';
import { LicenseProjectFinancialIndicatorService } from './services/feasibilityStudyServices/license-project-financial-indicator.service';
import { ProjectLandComponent } from './components/project-land/project-land.component';
import { ProjectLandTitleDeedsComponent } from './components/project-land-title-deeds/project-land-title-deeds.component';
import { ProjectModuleModelsComponent } from './components/project-module-models/project-module-models.component';
import { ProjectUnitCodesComponent } from './components/project-unit-codes/project-unit-codes.component';
import { RealEstateMarketerListComponent } from './components/marketer/real-estate-marketer-list/real-estate-marketer-list.component';
import { CreateUpdateMarketerComponent } from './components/marketer/create-update-marketer/create-update-marketer.component';
import { LicenseProjectRealStateMarketerService } from './dataModels/license-project-real-state-marketer/license-project-real-state-marketer-service';
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
import { EngineeringConsultantCustomerInfoComponent } from './components/engineering-consultant/engineering-consultant-customer-info/engineering-consultant-customer-info.component';
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
import { CertificateComponent } from './components/certificate/certificate.component';
import { LicenseCertificateService } from './services/license-certificate.service';
import { LicenseRequestApprovalsComponent } from './pages/license-request-approvals/license-request-approvals.component';
import { ProjectApprovalsService } from './services/licenseProjects/project-approvals.service';
import { LicenseRequestApprovalsService } from './services/license-request-approvals/license-request-approvals.service';
import { LicenseRequestApprovalsDetailsComponent } from './pages/license-request-approvals-details/license-request-approvals-details.component';
import { LicenseProjectRealStateMarketerApprovalComponent } from './components/license-project-real-state-marketer-approval/license-project-real-state-marketer-approval.component';
import { LicenseProjectEngineeringConsultantApprovalComponent } from './components/license-project-engineering-consultant-approval/license-project-engineering-consultant-approval.component';
import { LicenseProjectCharteredAccountantApprovalComponent } from './components/license-project-chartered-accountant-approval/license-project-chartered-accountant-approval.component';
import { LicenseProjectSubDeveloperApprovalComponent } from './components/license-project-sub-developer-approval/license-project-sub-developer-approval.component';
import { LicenseProjectMainRealStateDeveloperApprovalComponent } from './components/license-project-main-real-state-developer-approval/license-project-main-real-state-developer-approval.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { InitialCertificateComponent } from './components/initial-certificate/initial-certificate.component';
import { ShowOwnerListComponent } from './components/show-owner-list/show-owner-list.component';
import { RealstatecontributecertificateComponent } from './components/real-state-contribution-certificate/realstatecontributecertificate/realstatecontributecertificate.component';
import { ProjectDeedsEditOwnersFormComponent } from './components/project-deeds-edit-owners-form.component/project-deeds-edit-owners-form.component';
import { EndOfContractualComponent } from './components/end-of-contractual/end-of-contractual.component';
import { InfraStructureComponent } from './components/infra-structure/infra-structure.component';
import { IrregularRequestsComponent } from './components/irregular-requests/irregular-requests.component';
import { NewQualityNoticesComponent } from './components/new-quality-notices/new-quality-notices.component';
import { PreviousQualityNoticesComponent } from './components/previous-quality-notices/previous-quality-notices.component';
import { ProjectBasicInformationComponent } from './components/project-basic-information/project-basic-information.component';
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { ProjectRequestsComponent } from './components/project-requests/project-requests.component';
import { QualityNoticesComponent } from './components/quality-notices/quality-notices.component';
import { RegularRequestsComponent } from './components/regular-requests/regular-requests.component';
import { TimeScheduleComponent } from './components/time-schedule/time-schedule.component';
import { TimelineProgramFilesComponent } from './components/timeline-program-files/timeline-program-files.component';
import { TimelineStatusSummaryComponent } from './components/timeline-status-summary/timeline-status-summary.component';
import { WorkStatusReportsComponent } from './components/work-status-reports/work-status-reports.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { AddTimelineFilesComponent } from './components/add-timeline-files/add-timeline-files.component';
import { TimelinefilesService } from './services/timeline-programFileServices/timelinefiles.service';
import { RequestMenuComponent } from './components/request-menu/request-menu.component';
import { NotesComponent } from './components/notes/notes.component';
import { ProjectListService } from './services/project-list.service';
import { ProjectListFormComponent } from './pages/project-list-form/project-list-form.component';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from './services/license-project-engineering-supervision-planned-report-detail.service';
import { MonthlyEngineeringSupervisionReportsComponent } from './components/monthly-engineering-supervision-reports/monthly-engineering-supervision-reports.component';
import { PlannedEngineeringSupervisionReportsComponent } from './components/planned-engineering-supervision-reports/planned-engineering-supervision-reports.component';
import { PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent } from './components/position-of-the-required-appropriations-from-the-authorities/position-of-the-required-appropriations-from-the-authorities.component';
import { MonthlyEngineeringSupervisionReportsInfraStructureComponent } from './components/monthly-engineering-supervision-reports-infra-structure/monthly-engineering-supervision-reports-infra-structure.component';
import { MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent } from './components/monthly-engineering-supervision-reports-risks-and-safety/monthly-engineering-supervision-reports-risks-and-safety.component';
import { MonthlyengineeringSupervisionReportsProjectDetailsComponent } from './components/monthlyengineering-supervision-reports-project-details/monthlyengineering-supervision-reports-project-details.component';
import { MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from './components/monthly-engineering-supervision-reports-quality-and-business-progress/monthly-engineering-supervision-reports-quality-and-business-progress.component';
import { MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent } from './components/monthly-engineering-supervision-reports-work-status-reports/monthly-engineering-supervision-reports-work-status-reports.component';
import { AddEditEngineeringSupervisionReportsProjectDetailsComponent } from './components/add-edit-engineering-supervision-reports-project-details/add-edit-engineering-supervision-reports-project-details.component';
import { TimeScheduleProgramComponent } from './components/time-schedule-program/time-schedule-program/time-schedule-program.component';
import { AddEditCompletionAndEmploymentRatesComponent } from './components/add-edit-completion-and-employment-rates/add-edit-completion-and-employment-rates.component';
import { PlannedEngineerProjectDetailsComponent } from './components/planned-engineer-project-details/planned-engineer-project-details/planned-engineer-project-details.component';
import { PlannedEngineerProjectDetailsService } from './services/planned-engineer-project-details/planned-engineer-project-details.service';
import { CompletionRatesComponent } from './components/completion-rates/completion-rates.component';
import { AddEditEngineeringInfrastructureRatesComponent } from './components/add-edit-engineering-infrastructure-rates/add-edit-engineering-infrastructure-rates.component';
import { LicenseProjectInfrastructureNetworksStatusService } from './services/license-project-infrastructure-networks-status.service';
import { AddEditItemsOnMonthComponent } from './components/add-edit-items-on-month/add-edit-items-on-month.component';
import { QualityAndBusinessProgressComponent } from './components/quality-and-business-progress/quality-and-business-progress.component';
import { AddEditEngineeringQualityAssuranceComponent } from './components/add-edit-engineering-quality-assurance/add-edit-engineering-quality-assurance.component';
import { AddEditConstructionWorkPositionComponent } from './components/add-edit-construction-work-position/add-edit-construction-work-position.component';
import { PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from './components/planned-engineering-supervision-reports-quality-and-business-progress/planned-engineering-supervision-reports-quality-and-business-progress.component';
import { RenewLicensesListComponent } from './pages/renew-licenses-list/renew-licenses-list.component';
import { RenewLicensesService } from './services/renew-licenses.service';
import { PlannedEngineeringSupervisionReportsRequestNotesComponent } from './components/planned-engineering-supervision-reports-request-notes/planned-engineering-supervision-reports-request-notes.component';
import { CodesFileComponent } from './components/codes-file/codes-file.component';
import { ShowLicenseProjectQualityNoticeDetalisComponent } from './components/show-license-project-quality-notice-detalis/show-license-project-quality-notice-detalis.component';
import { LicenseProjectQualityNoticeListComponent } from './components/license-project-quality-notice-list/license-project-quality-notice-list.component';
import { LicenseProjectQualityNoticeService } from './services/license-project-quality-notice.service';
import { LicenseProjectQualityNoticeReplyService } from './services/license-project-quality-notice-reply.service';
import { LicenseProjectQualityNoticeReplyListComponent } from './components/license-project-quality-notice-reply-list/license-project-quality-notice-reply-list.component';
import { AddReplayFromProjectMangerComponent } from './components/add-replay-from-project-manger/add-replay-from-project-manger.component';
import { ProblemLogComponent } from './components/problem-log/problem-log.component';
import { LicenseProjectProblemService } from './services/license-project-problem.service';
import { ShowProblemLogComponent } from './components/show-problem-log/show-problem-log.component';
import { AddEditProblemLogComponent } from './components/add-edit-problem-log/add-edit-problem-log.component';
import { LookupEngineeringManagementService } from './services/lookup-engineering-management.service';
import { LicenseProjectRiskService } from './services/license-project-risk.service';
import { DangerLogComponent } from './components/danger-log/danger-log.component';
import { ShowDangerLogComponent } from './components/show-danger-log/show-danger-log.component';
import { AddEditDangerLogComponent } from './components/add-edit-danger-log/add-edit-danger-log.component';
import { ProjectBusinessCaseReportService } from './services/project-business-case-report.service';
import { ProjectBusinessCaseReportListComponent } from './components/project-business-case-report-list/project-business-case-report-list.component';
import { AddEditProjectBusinessCaseComponent } from './components/add-edit-project-business-case/add-edit-project-business-case.component';
import { ShowProjectBusinessCaseComponent } from './components/show-project-business-case/show-project-business-case.component';
import { AddProjectBusinessCaseNotesComponent } from './components/add-project-business-case-notes/add-project-business-case-notes.component';
import { ProjectBusinessCaseReportNoteService } from './services/project-business-case-report-note.service';
import { ProjectBusinessCaseContainerComponent } from './components/project-business-case-container/project-business-case-container.component';
import { LicenseProjectQualityNoticeContainerComponent } from './components/license-project-quality-notice-container/license-project-quality-notice-container.component';
import { ActualValueReportService } from './services/actual-value-report.service';
import { ActualValueReportPagingListComponent } from './components/actual-value-report-paging-list/actual-value-report-paging-list.component';
import { UpdateMonthSubmittedComponent } from './components/update-month-submitted/update-month-submitted.component';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from './services/engineering-supervision-report-actual-project-status-summary.service';
import { ActualValueReportContainerComponent } from './components/actual-value-report-container/actual-value-report-container.component';
import { ShowActualValueWorkStatuesReportComponent } from './components/show-actual-value-work-statues-report/show-actual-value-work-statues-report.component';
import { AddEditActualValueWorkStatuesReportComponent } from './components/add-edit-actual-value-work-statues-report/add-edit-actual-value-work-statues-report.component';
import { EmployeeCreateLincenseComponent } from './pages/employee-create-lincense/employee-create-lincense.component';
import { EmployeeLicenseListComponent } from './pages/employee-license-list/employee-license-list.component';
import { EmployeeCreateLicenseService } from './services/employee-create-lincense.service';
import { SellingCertificateComponent } from './components/selling-certificate/selling-certificate.component';
import { EmployeeUnderStudingLicenseRequestsComponent } from './pages/employee-under-studing-license-requests/employee-under-studing-license-requests/employee-under-studing-license-requests.component';
import { LicenseRequestListService } from './services/license-request-list-service/license-request-list-service.service';
import { AddEditAccountantRequestComponent } from './components/add-edit-accountant-request/add-edit-accountant-request.component';
import { LicenseProjectBuyerService } from './services/license-project-buyer.service';
import { AddBuyerComponent } from './components/add-buyer/add-buyer.component';
import { ContractDocumentationListComponent } from './pages/contract-documentation-list/contract-documentation-list.component';
import { LicenseCertificateTemplateService } from './services/license-certificate-template.service';
import { LicenseCertificateTemplateDetailsComponent } from './pages/license-certificate-template-details/license-certificate-template-details.component';
import { LicenseCertificateTemplateListComponent } from './pages/license-certificate-template-list/license-certificate-template-list.component';
import { AddLicenseCertificateTemplateComponent } from './pages/add-license-certificate-template/add-license-certificate-template.component';
import { AddLicenseCertificateUnitComponent } from './components/add-license-certificate-unit/add-license-certificate-unit.component';
import { FinalTenantContractComponent } from './components/final-tenant-contract/final-tenant-contract.component';
import { LicenseRequestFinalTenantContractComponent } from './components/license-request-final-tenant-contract/license-request-final-tenant-contract.component';
import { LicenseProjectBuyerListComponent } from './components/license-project-buyer-list/license-project-buyer-list.component';
import { ShowDetailBuyerComponent } from './components/show-detail-buyer/show-detail-buyer.component';
import { CharteredAccountProjectListComponent } from './pages/chareted-account-project-list/chartered-account-project-list/chartered-account-project-list.component';
import { CharteredAccountProjectService } from './services/chareted-account-project-service';
import { LicenseProjectAccountantComponent } from './pages/License-project-accountant/License-project-accountant.component';
import { LicenseProjectAccountantLocalStorageService } from './services/license-project-accountant-local-storage.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LicenseProjectExchangeDocumentListComponent } from './components/license-project-exchange-document-list/license-project-exchange-document-list.component';
import { AddExchangeDocumentComponent } from './components/add-exchange-document/add-exchange-document.component';
import { ShowDetailExchangeDocumentComponent } from './components/show-detail-exchange-document/show-detail-exchange-document.component';
import { CertifiedLicenseDataComponent } from './components/certified-license-data/certified-license-data.component';
import { LicenseProjectExchangeDocumentService } from './services/license-project-exchange-document.service';
import { PeriodicCharteredAccountantReportService } from './services/periodic-chartered-accountant-report.service';
import { AddPeriodicCharteredAccountantReportComponent } from './components/add-periodic-chartered-accountant-report/add-periodic-chartered-accountant-report.component';
import { CertifiedLicenseDataFormComponent } from './components/certified-license-data-form/certified-license-data-form.component';
import { AddDepositDocumentComponent } from './components/add-deposit-document/add-deposit-document.component';
import { LicenseDepositDocumentComponent } from './components/license-deposit-document/license-deposit-document.component';
import { LicenseDepositDocumentService } from './services/license-deposit-document.service';
import { LicenseDepositDocumentDetailsComponent } from './components/license-deposit-document-details/license-deposit-document-details.component';
import { UpdateLicenseDepositDocumentComponent } from './components/update-license-deposit-document/update-license-deposit-document.component';
import { SupervisionFollowUpCostsRatioService } from './services/supervision-follow-up-costs-ratio.service';
import { PeriodicCharteredAccountantReportComponent } from './components/periodic-chartered-accountant-report/periodic-chartered-accountant-report.component';
import { PeriodicCharteredAccountantReportDetailsComponent } from './components/periodic-chartered-accountant-report-details/periodic-chartered-accountant-report-details.component';
import { PeriodicCharteredAccountantReportListComponent } from './components/periodic-chartered-accountant-report-list/periodic-chartered-accountant-report-list.component';
import { LincenseProjectZonesComponent } from './components/Zones/lincense-project-zones/lincense-project-zones.component';
import { LicenseProjectZoneUnitComponent } from './components/Zones/license-project-zone-unit/license-project-zone-unit.component';
import { LicenseProjectZoneUnitSubunitComponent } from './components/Zones/license-project-zone-unit-subunit/license-project-zone-unit-subunit.component';
import { LicenseProjectZoneSubunitModelComponent } from './components/Zones/license-project-zone-subunit-model/license-project-zone-subunit-model.component';
import { QualityAndBusinessProgressService } from './services/quality-and-business-progress.service';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from './services/engineering-supervision-report-actual-quality-and-business.service';
import { AddEditActualQualityAndBusinessComponent } from './components/add-edit-actual-quality-and-business/add-edit-actual-quality-and-business.component';
import { ProjectStatusUpdateComponent } from './pages/Project-status-update/project-status-update.component';
import { SysProjectStatusService } from 'src/app/shared/services/sysProjectStatus/sys-projectstatus.service';
import { AddEditActualQualityControlComponent } from './components/add-edit-actual-quality-control/add-edit-actual-quality-control.component';
import { ActualQualityControlDetailsComponent } from './components/actual-quality-control-details/actual-quality-control-details.component';
import { ShowActualQualityControlDetailsComponent } from './components/show-actual-quality-control-details/show-actual-quality-control-details.component';
import { AddEditNonConformityReportComponent } from './components/add-edit-non-conformity-report/add-edit-non-conformity-report.component';
import { AddEditMaterialExaminationComponent } from './components/add-edit-material-examination/add-edit-material-examination.component';
import { AddEditActualRelativeWeightComponent } from './components/add-edit-actual-relative-weight/add-edit-actual-relative-weight.component';
import { ShowActualRelativeWeightDetailsComponent } from './components/show-actual-relative-weight-details/show-actual-relative-weight-details.component';
import { EngineeringSupervisionReportActualProjectDeteilsService } from './services/engineering-supervision-report-actual-project-deteils.service';
import { AddEditActualProjectDetailsComponent } from './components/add-edit-actual-project-details/add-edit-actual-project-details.component';
import { ActualProjectDetailsComponent } from './components/actual-project-details/actual-project-details.component';
import { AddEditHealthAndSafetyMonitoringComponent } from './components/add-edit-health-and-safety-monitoring/add-edit-health-and-safety-monitoring.component';
import { LicenseProjectHealthAndSafetyMonitoringService } from './services/license-project-health-and-safety-monitoring.service';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from './services/engineering-supervision-planned-report-actual-infrastructure.service';
import { AddEditActualInfrastructurComponent } from './components/add-edit-actual-infrastructur/add-edit-actual-infrastructur.component';
import { AddEditConnectionWithServicesProviderComponent } from './components/add-edit-connection-with-services-provider/add-edit-connection-with-services-provider.component';
import { ShowActualInfrastructureNetworksStatusComponent } from './components/show-actual-infrastructure-networks-status/show-actual-infrastructure-networks-status.component';
import { AddEditActualInfrastructureNetworksStatusComponent } from './components/add-edit-actual-infrastructure-networks-status/add-edit-actual-infrastructure-networks-status.component';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService } from './services/license-project-engineering-status-of-funds-required-from-entities.service';
import { AddEditDesignPhaseCreditsComponent } from './components/add-edit-design-phase-credits/add-edit-design-phase-credits.component';
import { ShowDesignPhaseCreditsComponent } from './components/show-design-phase-credits/show-design-phase-credits.component';
import { AddEditProjectDeliveryPhaseApprovalsComponent } from './components/add-edit-project-delivery-phase-approvals/add-edit-project-delivery-phase-approvals.component';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService } from './services/license-project-engineering-supervision-planned-monthly-report-study-note.service';
import { ActualNotesComponent } from './components/actual-notes/actual-notes.component';
import { RecordAddEditDangerLogComponent } from './components/record-dangers/record-add-edit-danger-log/record-add-edit-danger-log.component';
import { RecordShowDangerLogComponent } from './components/record-dangers/record-show-danger-log/record-show-danger-log.component';
import { RecordDangerLogComponent } from './components/record-dangers/record-danger-log/record-danger-log.component';
import { AddEditMonthlyEngineeringReportExternalExpensesComponent } from './components/add-edit-monthly-engineering-report-external-expenses/add-edit-monthly-engineering-report-external-expenses.component';
import { MonthlyEngineeringReportExternalExpensesService } from './services/monthly-engineering-report-external-expenses.service';
import { AddEditConstructionWorkStatusComponent } from './components/add-edit-construction-work-status/add-edit-construction-work-status.component';
import { LicenseProjectRelativeWeightService } from './services/licenseProjects/license-project-relative-weight.service';
import { AccountantMonthlySupervisionReportsComponent } from './pages/accountant-monthly-supervision-reports/accountant-monthly-supervision-reports.component';
import { BusinessPaymentTemplatesComponent } from './pages/business-payment-templates/business-payment-templates.component';
import { BusinessPaymentTemplateFormComponent } from './components/business-payment-template-form/business-payment-template-form.component';
import { LicenseProjectBusinessPaymentService } from './services/business-payment.service';
import { EditBusinessPaymentTemplatesComponent } from './pages/edit-business-payment-templates/edit-business-payment-templates.component';
import { RealStateDeveloperService } from './services/real-state-developer.service';
import { RealStateDeveloperUnitsListComponent } from './pages/real-state-developer-units-list/real-state-developer-units-list.component';
import { UnitDetailsComponent } from './components/unit-details/unit-details.component';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { CreateContractPopupComponent } from './components/create-contract-popup/create-contract-popup.component';
import { ViewBusinessPaymentTemplatesComponent } from './components/view-business-payment-templates/view-business-payment-templates.component';
import { ContractDetailsComponent } from './pages/contract-details/contract-details.component';
import { SalesContractComponent } from './pages/contract-details/sales-contract/sales-contract.component';
import { OtpVerificationModalComponent } from './pages/contract-details/otp-verification-modal/otp-verification-modal.component';
import { RejectionReasonModalComponent } from './pages/contract-details/rejection-reason-modal/rejection-reason-modal.component';
import { ContractReadonlyViewComponent } from './pages/contract-readonly-view/contract-readonly-view.component';
import { ViewContractComponent } from './components/view-contract/view-contract.component';
import { CharteredAccountProjectTotalComponent } from './pages/chartered-account-project-total/chartered-account-project-total.component';
import { EditFarzNoteComponent } from './pages/edit-farz-note/edit-farz-note.component';
import { EditCorrectionFarzNoteComponent } from './pages/edit-correction-farz-note/edit-correction-farz-note.component';
import { ContractUnitDetailsComponent } from './pages/contracts/contract-unit-details/contract-unit-details.component';
import { AddContractPopupComponent } from './pages/contracts/add-contract-popup/add-contract-popup.component';
import { BuyerContractViewDetailsComponent } from './pages/contracts/buyer-contract-view-details/buyer-contract-view-details.component';
import { BuyerContractUpdateComponent } from './pages/contracts/buyer-contract-update/buyer-contract-update.component';
import { NationalityService } from '../../auth/services/nationality/nationality.service';
import { ContractRequestDetailsComponent } from './pages/contracts/contract-request-details/contract-request-details.component';
import { LicenseProjectBuyerCancellationRequestService } from './services/license-project-buyer-cancellation-request.service';
import { ContractRequestListComponent } from './pages/contracts/contract-request-list/contract-request-list.component';
import { ContractViewerComponent } from './components/contract-viewer/contract-viewer.component';
import { PaymentTermsTabsComponent } from './components/payment-terms-tabs/payment-terms-tabs.component';
import { BuyerTotalsListComponent } from './components/buyer-totals-list/buyer-totals-list.component';
import { BuyerListTabsComponent } from './components/buyer-list-tabs/buyer-list-tabs.component';
import { CancelledUnitsListComponent } from './components/cancelled-units-list/cancelled-units-list.component';
import { CancelledAndResoldUnitsListComponent } from './components/cancelled-and-resold-units-list/cancelled-and-resold-units-list.component';
import { CompletedUnitsListComponent } from './components/completed-units-list/completed-units-list.component';
import { ItemsLogComponent } from './pages/items-log/items-log.component';
import { PaymentVersionsHistoryComponent } from './components/payment-versions-history/payment-versions-history.component';
import { FawriaLicenseprojectMaindataContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-maindata-container/fawria-licenseproject-maindata-container.component';
import { FawriaLicenseprojectDeedsContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-deeds-container/fawria-licenseproject-deeds-container.component';
import { FawriaLicenseprojectEngineeringConsultantsContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-engineering-consultants-container/fawria-licenseproject-engineering-consultants-container.component';
import { FawriaLicenseprojectFeasibilityStudyContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-feasibility-study-container/fawria-licenseproject-feasibility-study-container.component';
import { FawriaLicenseprojectCharteredAccountantsContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-chartered-accountants-container/fawria-licenseproject-chartered-accountants-container.component';
import { FawriaLicenseprojectMaindataCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-maindata-create/fawria-licenseproject-maindata-create.component';
import { FawriaLicenseprojectDeedOwnersContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-deed-owners-container/fawria-licenseproject-deed-owners-container.component';
import { FawriaLicenseprojectDeedOwnersCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-deed-owners-create/fawria-licenseproject-deed-owners-create.component';
import { FawriaLicenseprojectDeedsCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-deeds-create/fawria-licenseproject-deeds-create.component';
import { FawriaLicenseprojectEngineeringConsultantsCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-engineering-consultants-create/fawria-licenseproject-engineering-consultants-create.component';
import { FawriaLicenseprojectCharteredAccountantsCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-chartered-accountants-create/fawria-licenseproject-chartered-accountants-create.component';
import { FawriaLicenseprojectEscrowAccountCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-escrow-account-create/fawria-licenseproject-escrow-account-create.component';
import { FawriaLicenseprojectContactInfoContainerComponent } from './components/FawriaLicenseProject/fawria-licenseproject-contact-info-container/fawria-licenseproject-contact-info-container.component';
import { FawriaLicenseprojectContactInfoCreateComponent } from './components/FawriaLicenseProject/fawria-licenseproject-contact-info-create/fawria-licenseproject-contact-info-create.component';
import { LicenseProjectPartiesAdditionalTermsComponent } from './components/license-project-parties-additional-terms/license-project-parties-additional-terms.component';
import { LicenseProjectPartiesAdditionalTermsFormComponent } from './components/license-project-parties-additional-terms-form/license-project-parties-additional-terms-form.component';
import { LicenseProjectPartiesAdditionalTermsService } from './services/LicenseProjectPartiesAdditionalTerms.service';
import { InstantLicenseDeedsComponent } from './components/instant-license-deeds/instant-license-deeds.component';
import { ProjectInstantLicenseDeedService } from '../real-estate-contributions-license/services/project-instant-license-deed.service';
import { FawriaLicenseProjectContactInfoService } from './services/licenseProjects/fawria-license-project-contact-info.service';
import { LicenseProjectFawriaDeveloperListComponent } from './pages/license-project-fawria-developer-list/license-project-fawria-developer-list.component';
import { LicenseProjectFawriaDeveloperService } from './services/license-project-fawria-developer.service';
import { FawriaLicenseProjectBankInfoService } from './services/licenseProjects/fawria-license-project-bank-info.service';
import { FawriaLicenseprojectDeedsDetailsComponent } from './components/FawriaLicenseProject/fawria-licenseproject-deeds-details/fawria-licenseproject-deeds-details.component';
import { FawriaLicenseprojectDeedsListComponent } from './components/FawriaLicenseProject/fawria-licenseproject-deeds-list/fawria-licenseproject-deeds-list.component';
import { DeleteDeedConfirmationDialogComponent } from './components/FawriaLicenseProject/delete-deed-confirmation-dialog/delete-deed-confirmation-dialog.component';
import { CustomTooltipComponent } from './components/FawriaLicenseProject/custom-tooltip/custom-tooltip.component';
import { LicenseProjectDeedOwnerApprovalComponent } from './components/license-project-deed-owner-approval/license-project-deed-owner-approval.component';
import { RejectionReasonDialogComponent } from './components/rejection-reason-dialog/rejection-reason-dialog.component';
import { FawriaProjectPartiesComponent } from './components/fawria-components/fawria-project-parties/fawria-project-parties.component';
import { FawriaLicenseprojectCharteredAccountantsContainerViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-chartered-accountants-container-view-only/fawria-licenseproject-chartered-accountants-container-view-only.component';
import { FawriaLicenseprojectCharteredAccountantsViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-chartered-accountants-view-only/fawria-licenseproject-chartered-accountants-view-only.component';
import { FawriaLicenseprojectEngineeringConsultantsViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-engineering-consultants-view-only/fawria-licenseproject-engineering-consultants-view-only.component';
import { FawriaLicenseprojectEngineeringConsultantsContainerViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-engineering-consultants-container-view-only/fawria-licenseproject-engineering-consultants-container-view-only.component';
import { FawriaLicenseprojectDeedOwnersContainerViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-deed-owners-container-view-only/fawria-licenseproject-deed-owners-container-view-only.component';
import { FawriaLicenseprojectEscrowAccountViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-escrow-account-create-view-only/fawria-licenseproject-escrow-account-create-view-only.component';
import { LicenseProjectPartiesAdditionalTermsViewOnlyComponent } from './components/fawria-components/license-project-parties-additional-terms-view-only/license-project-parties-additional-terms-view-only.component';
import { FawriaProjectDataComponent } from './components/fawria-components/fawria-project-data/fawria-project-data.component';
import { FawriaLicenseprojectMainDataViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-maindata-view-only/fawria-licenseproject-maindata-view-only.component';
import { FawriaLicenseprojectContactInfoViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-contact-info-view-only/fawria-licenseproject-contact-info-view-only.component';
import { FawriaLicenseprojectFeasibilityStudyViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-feasibility-study-view-only/fawria-licenseproject-feasibility-study-view-only.component';
import { FawriaLicenseprojectDeedsViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-deeds-view-only/fawria-licenseproject-deeds-view-only.component';
import { FawriaLicenseprojectDeedsListViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-deeds-list-view-only/fawria-licenseproject-deeds-list-view-only.component';
import { FawriaLicenseprojectDeedsDetailsViewOnlyComponent } from './components/fawria-components/fawria-licenseproject-deeds-details-view-only/fawria-licenseproject-deeds-details-view-only.component';
import { LicenseRequestHeaderProcessingStepService } from './services/license-request-header-processing-step.service';
import { FawriaProjectPartiesStatusComponent } from './components/fawria-components/fawria-project-parties-status/fawria-project-parties-status.component';
import { OffPlanSaleLicenseComponent } from './components/off-plan-sale-license/off-plan-sale-license.component';
import { FawriaUpdateBuildingFlatAreaComponent } from './components/FawriaLicenseProject/fawria-update-building-flat-area/fawria-update-building-flat-area.component';
import { DeveloperApprovalsListComponent } from './pages/developer-approvals-list/developer-approvals-list.component';
import { DeveloperApprovalDetailsComponent } from './pages/developer-approval-details/developer-approval-details.component';
import { FawriaLicenseComplateComponent } from './pages/fawria-license-complate/fawria-license-complate.component';
import { FawriaArchitecturalUnitsAndDesignsComponent } from './components/fawria-architectural-units-and-designs/fawria-architectural-units-and-designs.component';
import { FawriaEngineeringSupervisionStaffComponent } from './components/fawria-engineering-supervision-staff/fawria-engineering-supervision-staff.component';
import { FawriaUnifiedSalesModelComponent } from './components/fawria-unified-sales-model/fawria-unified-sales-model.component';
import { FawriaContactInfoEndBeneficiaryComponent } from './pages/fawria-contact-info-end-beneficiary/fawria-contact-info-end-beneficiary.component';
import { FawriaLicenseEndBeneficiaryContactsInfoService } from './services/licenseProjects/fawria-license-end-beneficiary-contacts-info.service';
import { FawriaEscrowAccountComponent } from './components/fawria-escrow-account/fawria-escrow-account.component';
import { LicenseProjectService } from '../license-project-requests/services/license-project.service';
import { FawriaFinalBeneficiaryAgreementComponent } from './pages/fawria-final-beneficiary-agreement/fawria-final-beneficiary-agreement.component';
import { BankTermsConditionsPopupComponent } from './components/FawriaLicenseProject/bank-terms-conditions-popup/bank-terms-conditions-popup.component';
import { FawriaLicenseCompleteInvoiceViewComponent } from './components/fawria-license-complete-invoice-view/fawria-license-complete-invoice-view.component';
import { FawriaLicenseBankAccountInfoComponent } from './components/fawria-license-bank-account-info/fawria-license-bank-account-info.component';
import { UnitsCorrectionsTabsComponent } from './components/units-correction/units-corrections-tabs/units-corrections-tabs.component';
import { DeedsAndBuildingPermitsTabComponent } from './components/units-correction/deeds-and-building-permits-tab/deeds-and-building-permits-tab.component';
import { UnitsAndArchitecturalDesignsTabComponent } from './components/units-correction/Units-and-architectural-designs-tab/Units-and-architectural-designs-tab.component';
import { CorrectionAddEditProjectBlockComponent as CorrectionAddEditProjectBlockComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-add-edit-project-block/correction-add-edit-project-block.component';
import { CorrectionLincenseProjectZonesComponent as CorrectionLincenseProjectZonesComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-lincense-project-zones/correction-lincense-project-zones.component';
import { CorrectionProjectUnitsComponent as CorrectionProjectUnitsComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-project-units/correction-project-units.component';
import { CorrectionProjectModuleModelsFormComponent as CorrectionProjectModuleModelsFormComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-project-module-models-form/correction-project-module-models-form.component';
import { CorrectionProjectModuleModelsComponent as CorrectionProjectModuleModelsComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-project-module-models/correction-project-module-models.component';
import { CorrectionUnitCodesFormComponent as CorrectionUnitCodesFormComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-unit-codes-form/correction-unit-codes-form.component';
import { CorrectionArchitecturalDesignFilesComponent as CorrectionArchitecturalDesignFilesComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-architectural-design-files/correction-architectural-design-files.component';
import { CorrectionUnitCodesComponent as CorrectionUnitCodesComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-unit-codes/correction-unit-codes.component';
import { CorrectionSubUnitModelsComponent as CorrectionSubUnitModelsComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-sub-unit-models/correction-sub-unit-models.component';
import { CorrectionProjectUnitCodesComponent as CorrectionProjectUnitCodesComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-project-unit-codes/correction-project-unit-codes.component';
import { CorrectionLicenseRequestValidationPopupComponent as CorrectionLicenseRequestValidationPopupComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/correction-license-request-validation-popup/correction-license-request-validation-popup.component';
import { CorrectionAddZoneComponent as CorrectionAddZoneComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-add-zone/correction-add-zone.component';
import { CorrectionLicenseProjectZoneUnitComponent as CorrectionLicenseProjectZoneUnitComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-license-project-zone-unit/correction-license-project-zone-unit.component';
import { CorrectionLicenseProjectZoneUnitSubunitComponent as CorrectionLicenseProjectZoneUnitSubunitComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-license-project-zone-unit-subunit/correction-license-project-zone-unit-subunit.component';
import { CorrectionLicenseProjectZoneSubunitModelComponent as CorrectionLicenseProjectZoneSubunitModelComponentFromUnits } from './components/units-correction/Units-and-architectural-designs-tab/Zones/correction-license-project-zone-subunit-model/correction-license-project-zone-subunit-model.component';
import { SharedLicenseProjectService } from './services/sharedLicenseProject/shared-license-project.service';
import { CorrectionLicenseProjectDeedsListComponent as CorrectionLicenseProjectDeedsListComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-license-project-deeds-list/correction-license-project-deeds-list.component';
import { CorrectionLicenseProjectDeedsCreateComponent as CorrectionLicenseProjectDeedsCreateComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-license-project-deeds-create/correction-license-project-deeds-create.component';
import { CorrectionLicenseProjectDeedsDetailsComponent as CorrectionLicenseProjectDeedsDetailsComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-license-project-deeds-details/correction-license-project-deeds-details.component';
import { CorrectionLicenseProjectDeedsContainerComponent as CorrectionLicenseProjectDeedsContainerComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-license-project-deeds-container/correction-license-project-deeds-container.component';
import { CorrectionUpdateBuildingFlatAreaComponent as CorrectionUpdateBuildingFlatAreaComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-update-building-flat-area/correction-update-building-flat-area.component';
import { CorrectionConstructionLicenseFormComponent as CorrectionConstructionLicenseFormComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-construction-license-form/correction-construction-license-form.component';
import { CorrectionConstructionLicensesComponent as CorrectionConstructionLicensesComponentFromUnits } from './components/units-correction/deeds-and-building-permits-tab/components/correction-construction-licenses/correction-construction-licenses.component';
import { CorrectingUnitsListComponent } from './pages/correcting-units-list/correcting-units-list.component';
import { CorrectingUnitsDetailsComponent } from './pages/correcting-units-details/correcting-units-details.component';
import { LicenseTabsComponent } from './pages/license-tabs/license-tabs.component';
import { CorrectingUnitsService } from './services/correct-units/correcting-units.service';
import { CorrectingProjectDataComponent } from './components/correcting-components/correcting-project-data/correcting-project-data.component';
import { CorrectingProjectPartiesComponent } from './components/correcting-components/correcting-project-parties/correcting-project-parties.component';
import { CorrectingLicenseprojectMainDataViewOnlyComponent } from './components/correcting-components/correcting-licenseproject-maindata-view-only/correcting-licenseproject-maindata-view-only.component';
import { CorrectingLicenseprojectContactInfoViewOnlyComponent } from './components/correcting-components/correcting-licenseproject-contact-info-view-only/correcting-licenseproject-contact-info-view-only.component';
import { CorrectingLicenseprojectDeedsViewOnlyComponent } from './components/correcting-components/correcting-licenseproject-deeds-view-only/correcting-licenseproject-deeds-view-only.component';
import { CorrectingLicenseprojectConstructionLicensesViewOnlyComponent } from './components/correcting-components/correcting-licenseproject-construction-licenses-view-only/correcting-licenseproject-construction-licenses-view-only.component';
import { CorrectingLicenseProjectZonesComponent } from './components/correcting-components/correcting-license-project-zones/correcting-license-project-zones.component';
import { CorrectingProjectModuleModelsComponent } from './components/correcting-components/correcting-project-module-models/correcting-project-module-models.component';
import { CorrectingProjectUnitCodesComponent } from './components/correcting-components/correcting-project-unit-codes/correcting-project-unit-codes.component';
import { CorrectingArchitecturalDesignFilesComponent } from './components/correcting-components/correcting-architectural-design-files/correcting-architectural-design-files.component';
import { CorrectingLicenseprojectMaindataComponent } from './components/correcting-components/correcting-licenseproject-maindata/correcting-licenseproject-maindata.component';
import { CorrectingLicenseprojectContactInfoComponent } from './components/correcting-components/correcting-licenseproject-contact-info/correcting-licenseproject-contact-info.component';
import { CorrectingLicenseprojectDeedsComponent } from './components/correcting-components/correcting-licenseproject-deeds/correcting-licenseproject-deeds.component';
import { CorrectingLicenseprojectDeedsListViewOnlyComponent } from './components/correcting-components/correcting-licenseproject-deeds-list-view-only/correcting-licenseproject-deeds-list-view-only.component';
import { CorrectingLicenseprojectDeedsListComponent } from './components/correcting-components/correcting-licenseproject-deeds-list/correcting-licenseproject-deeds-list.component';
import { CorrectingLicenseprojectDeedsCreateComponent } from './components/correcting-components/correcting-licenseproject-deeds-create/correcting-licenseproject-deeds-create.component';
import { CorrectingLicenseprojectDeedsDetailsComponent } from './components/correcting-components/correcting-licenseproject-deeds-details/correcting-licenseproject-deeds-details.component';
import { CorrectingLicenseprojectDeedsDetailsViewOnlyComponent } from './components/correcting-components/correcting-licenseproject-deeds-details-view-only/correcting-licenseproject-deeds-details-view-only.component';
import { CorrectingSubUnitModelsComponent } from './components/correcting-components/correcting-sub-unit-models/correcting-sub-unit-models.component';
import { CorrectingLicenseProjectZoneSubunitModelComponent } from './components/correcting-components/correcting-license-project-zone-subunit-model/correcting-license-project-zone-subunit-model.component';
import { CorrectingUnitCodesComponent } from './components/correcting-components/correcting-unit-codes/correcting-unit-codes.component';

// Correction Units Components
import { CorrectionLicenseSummaryComponent } from './pages/correction-license-summary/correction-license-summary.component';
import { CorrectionLicenseProjectDeedsContainerComponent } from './components/correction-units/correction-license-project-deeds-container/correction-license-project-deeds-container.component';
import { CorrectionLicenseProjectDeedsComponent } from './components/correction-units/correction-license-project-deeds/correction-license-project-deeds.component';
import { CorrectionConstructionLicensesComponent } from './components/correction-units/correction-construction-licenses/correction-construction-licenses.component';
import { CorrectionUnitsAndDesignsContainerComponent } from './components/correction-units/correction-units-and-designs-container/correction-units-and-designs-container.component';
import { CorrectionZonesBlocksBuildingsComponent } from './components/correction-units/correction-zones-blocks-buildings/correction-zones-blocks-buildings.component';
import { CorrectionUnitTypesComponent } from './components/correction-units/correction-unit-types/correction-unit-types.component';
import { CorrectionProjectUnitCodesComponent } from './components/correction-units/correction-project-unit-codes/correction-project-unit-codes.component';
import { CorrectionArchitecturalDesignsComponent } from './components/correction-units/correction-architectural-designs/correction-architectural-designs.component';
import { CorrectionUnitCodesComponent } from './components/correction-units/correction-unit-codes/correction-unit-codes.component';
import { CorrectionAddZoneComponent } from './components/correction-units/correction-add-zone/correction-add-zone.component';
import { CorrectionLicenseProjectZoneUnitComponent } from './components/correction-units/correction-license-project-zone-unit/correction-license-project-zone-unit.component';
import { CorrectionLicenseProjectZoneUnitSubunitComponent } from './components/correction-units/correction-license-project-zone-unit-subunit/correction-license-project-zone-unit-subunit.component';
import { CorrectionLicenseProjectZoneSubunitModelComponent } from './components/correction-units/correction-license-project-zone-subunit-model/correction-license-project-zone-subunit-model.component';
import { CorrectionSubUnitModelsComponent } from './components/correction-units/correction-sub-unit-models/correction-sub-unit-models.component';
import { CorrectionProjectModuleModelsFormComponent } from './components/correction-units/correction-project-module-models-form/correction-project-module-models-form.component';
import { CorrectionConstructionLicenseFormComponent } from './components/correction-units/correction-construction-license-form/correction-construction-license-form.component';
import { CorrectionUpdateBuildingFlatAreaComponent } from './components/correction-units/correction-update-building-flat-area/correction-update-building-flat-area.component';
import { CorrectionLicenseRequestValidationPopupComponent } from './components/correction-units/correction-license-request-validation-popup/correction-license-request-validation-popup.component';
import { CorrectionLicenseprojectDeedsListComponent } from './components/correction-units/correction-licenseproject-deeds-list/correction-licenseproject-deeds-list.component';
import { CorrectionLicenseprojectDeedsCreateComponent } from './components/correction-units/correction-licenseproject-deeds-create/correction-licenseproject-deeds-create.component';
import { CorrectionLicenseprojectDeedsUpdateComponent } from './components/correction-units/correction-licenseproject-deeds-update/correction-licenseproject-deeds-update.component';
import { CorrectionLicenseprojectDeedsDetailsComponent } from './components/correction-units/correction-licenseproject-deeds-details/correction-licenseproject-deeds-details.component';
import { CorrectionZonesBlocksBuildingAndUnitsService } from './services/correction-zones-blocks-building-and-units.service';
import { CorrectionProjectSubUnitService } from './services/correction-project-sub-unit.service';
import { CorrectionProjectInstantLicenseDeedService } from '../real-estate-contributions-license/services/correction-project-instant-license-deed.service';
import { CorrectionConstructionLicenseService } from './services/licenseProjects/correction-construction-license.service';
import { CorrectionLicenseProjectUnitService } from './services/correction-license-project-unit.service';
import { CorrectionArchitecturalDesignFilesService } from './services/licenseProjects/correction-architectural-design-files.service';
import { CorrectionProjectModelService } from './services/correct-units/correction-project-model-service.service';
import { CorrectionProjectUnitCodeService } from './services/correction-project-unit-code.service';
import { CorrectionUnitCodesFormComponent } from './components/correction-units/correction-unit-codes-form/correction-unit-codes-form.component';
import { CorrectionCodesFileComponent } from './components/correction-units/correction-codes-file/correction-codes-file.component';
import { CorrectionProjectLicenseRequestTimeLineComponent } from './components/correction-units/correction-project-license-request-time-line/correction-project-license-request-time-line.component';
import { CorrectionProjectLicenseRequestNotesComponent } from './components/correction-units/correction-project-license-request-notes/correction-project-license-request-notes.component';
import { CorrectionProjectLicenseRequestDataComponent } from './components/correction-units/correction-project-license-request-data/correction-project-license-request-data.component';
import { ProjectLicenseServiceDetailsService } from '../license-project-requests/services/project-license-service-details.service';
import { ProjectRequestLocalStorageService } from '../license-project-requests/services/project-request-local-storage.service';
import { LicenseProjectRequestProcessingLogService } from '../license-project-requests/services/license-project-request-processing-log.service';
import { LicenseProjectRequestLogService } from '../license-project-requests/services/license-project-request-log.service';
import { CorrectionProjectLicenseServiceDetailsService } from '../license-project-requests/services/correction-project-license-details.service';
import { CorrectionProjectLandDeedService } from './services/correction-project-land-deed.service';
import { CorrectionLicenseProjectRequestDetailsComponent } from './pages/correction-license-project-request-details/correction-license-project-request-details.component';
import { CorrectionLicenseProjectRequestProcessingLogService } from '../license-project-requests/services/Correction-license-project-request-processing-log.service';
import { CorrectionLicenseProjectRequestLogService } from '../license-project-requests/services/correction-license-project-request-log.service';
import { CorrectionLicenseProjectPlanAccordingApprovedStandardsFileService } from './services/licenseProjects/correction-license-project-plan-according-approved-standards-file.service';

@NgModule({
  declarations: [
    CreateLincenseComponent,
    LincenseSummaryComponent,
    LincenseTypesComponent,
    LincenseListComponent,
    LincenseDetailsComponent,
    FawriaLicenseDetailsComponent,
    CompletionRatesComponent,
    PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent,
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
    PlannedEngineerProjectDetailsComponent,
    ArchitecturalDesignFilesComponent,
    ConstructionLicensesComponent,
    AdditionalServicesComponent,
    PriceFinancialAnalysisComponent,
    ListOfProjectExpectedIncomeComponent,
    AddEditCompletionAndEmploymentRatesComponent,
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
    ProjectDeedsEditOwnersFormComponent,
    ProjectOwnersComponent,
    AddZoneComponent,
    ProjectUnitsComponent,
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
    ViewBusinessPaymentTemplatesComponent,
    ProjectDeveloperComponent,
    LicenseProjectDeveloperComponent,
    RequestAttachmentsComponent,
    LicenseProjectRequestAttachmentComponent,
    LicenseProjectDetachedtUnitsComponent,
    LicenseProjectPromissoryNoteComponent,
    PromissoryNoteComponent,
    LicenseCertificatesComponent,
    CertificateComponent,
    LicenseRequestApprovalsComponent,
    LicenseRequestApprovalsDetailsComponent,
    LicenseProjectRealStateMarketerApprovalComponent,
    LicenseProjectEngineeringConsultantApprovalComponent,
    LicenseProjectCharteredAccountantApprovalComponent,
    LicenseProjectSubDeveloperApprovalComponent,
    LicenseProjectMainRealStateDeveloperApprovalComponent,
    ApprovalComponent,
    InitialCertificateComponent,
    ShowOwnerListComponent,
    RealstatecontributecertificateComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectInformationComponent,
    TimeScheduleComponent,
    QualityNoticesComponent,
    ProjectRequestsComponent,
    ProjectBasicInformationComponent,
    TimelineStatusSummaryComponent,
    EndOfContractualComponent,
    TimelineProgramFilesComponent,
    WorkStatusReportsComponent,
    InfraStructureComponent,
    NewQualityNoticesComponent,
    PreviousQualityNoticesComponent,
    RegularRequestsComponent,
    IrregularRequestsComponent,
    ProjectListFormComponent,
    MonthlyEngineeringSupervisionReportsComponent,
    PlannedEngineeringSupervisionReportsComponent,
    PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent,
    MonthlyEngineeringSupervisionReportsInfraStructureComponent,
    MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent,
    MonthlyengineeringSupervisionReportsProjectDetailsComponent,
    MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent,
    MonthlyEngineeringSupervisionReportsWorkStatusReportsComponent,
    AddEditEngineeringSupervisionReportsProjectDetailsComponent,
    AddTimelineFilesComponent,
    RequestMenuComponent,
    NotesComponent,
    TimeScheduleProgramComponent,
    AddEditCompletionAndEmploymentRatesComponent,
    AddEditEngineeringInfrastructureRatesComponent,
    AddEditItemsOnMonthComponent,
    QualityAndBusinessProgressComponent,
    AddEditEngineeringQualityAssuranceComponent,
    AddEditConstructionWorkPositionComponent,
    PlannedEngineeringSupervisionReportsQualityAndBusinessProgressComponent,
    RenewLicensesListComponent,
    PlannedEngineeringSupervisionReportsRequestNotesComponent,
    CodesFileComponent,
    ShowLicenseProjectQualityNoticeDetalisComponent,
    LicenseProjectQualityNoticeListComponent,
    LicenseProjectQualityNoticeReplyListComponent,
    AddReplayFromProjectMangerComponent,
    ProblemLogComponent,
    ShowProblemLogComponent,
    AddEditProblemLogComponent,
    DangerLogComponent,
    ShowDangerLogComponent,
    AddEditDangerLogComponent,
    ProjectBusinessCaseReportListComponent,
    AddEditProjectBusinessCaseComponent,
    ShowProjectBusinessCaseComponent,
    AddProjectBusinessCaseNotesComponent,
    ProjectBusinessCaseContainerComponent,
    LicenseProjectQualityNoticeContainerComponent,
    ActualValueReportPagingListComponent,
    UpdateMonthSubmittedComponent,
    ActualValueReportContainerComponent,
    ShowActualValueWorkStatuesReportComponent,
    AddEditActualValueWorkStatuesReportComponent,
    EmployeeCreateLincenseComponent,
    EmployeeLicenseListComponent,
    SellingCertificateComponent,
    EmployeeUnderStudingLicenseRequestsComponent,
    AddEditAccountantRequestComponent,
    AddBuyerComponent,
    ContractDocumentationListComponent,
    CharteredAccountProjectListComponent,
    LicenseCertificateTemplateListComponent,
    LicenseCertificateTemplateDetailsComponent,
    AddLicenseCertificateTemplateComponent,
    AddLicenseCertificateUnitComponent,
    FinalTenantContractComponent,
    LicenseRequestFinalTenantContractComponent,
    LicenseProjectBuyerListComponent,
    ShowDetailBuyerComponent,
    LicenseProjectAccountantComponent,
    LicenseProjectExchangeDocumentListComponent,
    AddExchangeDocumentComponent,
    ShowDetailExchangeDocumentComponent,
    CertifiedLicenseDataComponent,
    AddPeriodicCharteredAccountantReportComponent,
    CertifiedLicenseDataFormComponent,
    AddDepositDocumentComponent,
    LicenseDepositDocumentComponent,
    CertifiedLicenseDataFormComponent,
    LicenseDepositDocumentDetailsComponent,
    UpdateLicenseDepositDocumentComponent,
    PeriodicCharteredAccountantReportComponent,
    PeriodicCharteredAccountantReportDetailsComponent,
    PeriodicCharteredAccountantReportListComponent,
    AddEditActualQualityAndBusinessComponent,
    ProjectStatusUpdateComponent,
    AddEditActualQualityControlComponent,
    ActualQualityControlDetailsComponent,
    ShowActualQualityControlDetailsComponent,
    AddEditNonConformityReportComponent,
    AddEditMaterialExaminationComponent,
    AddEditActualRelativeWeightComponent,
    ShowActualRelativeWeightDetailsComponent,
    AddEditActualProjectDetailsComponent,
    ActualProjectDetailsComponent,
    AddEditHealthAndSafetyMonitoringComponent,
    AddEditActualInfrastructurComponent,
    AddEditConnectionWithServicesProviderComponent,
    ShowActualInfrastructureNetworksStatusComponent,
    AddEditActualInfrastructureNetworksStatusComponent,
    AddEditDesignPhaseCreditsComponent,
    ShowDesignPhaseCreditsComponent,
    AddEditProjectDeliveryPhaseApprovalsComponent,
    ActualNotesComponent,
    ActualProjectDetailsComponent,
    PeriodicCharteredAccountantReportListComponent,
    LincenseProjectZonesComponent,
    LicenseProjectZoneUnitComponent,
    LicenseProjectZoneUnitSubunitComponent,
    LicenseProjectZoneSubunitModelComponent,
    RecordAddEditDangerLogComponent,
    RecordShowDangerLogComponent,
    RecordDangerLogComponent,
    AddEditMonthlyEngineeringReportExternalExpensesComponent,
    AddEditConstructionWorkStatusComponent,
    AccountantMonthlySupervisionReportsComponent,
    BusinessPaymentTemplatesComponent,
    EditBusinessPaymentTemplatesComponent,
    BusinessPaymentTemplateFormComponent,
    RealStateDeveloperUnitsListComponent,
    UnitDetailsComponent,
    AddContractComponent,
    CreateContractPopupComponent,
    ContractDetailsComponent,
    ViewContractComponent,
    SalesContractComponent,
    OtpVerificationModalComponent,
    RejectionReasonModalComponent,
    ContractReadonlyViewComponent,
    EditFarzNoteComponent,
    EditCorrectionFarzNoteComponent,
    CharteredAccountProjectTotalComponent,
    ContractUnitDetailsComponent,
    AddContractPopupComponent,
    BuyerContractViewDetailsComponent,
    BuyerContractUpdateComponent,
    ContractRequestDetailsComponent,
    ContractRequestListComponent,
    ItemsLogComponent,
    CancelledUnitsListComponent,
    ContractViewerComponent,
    PaymentTermsTabsComponent,
    BuyerTotalsListComponent,
    BuyerListTabsComponent,
    CancelledAndResoldUnitsListComponent,
    CompletedUnitsListComponent,
    PaymentVersionsHistoryComponent,
    FawriaLicenseprojectMaindataContainerComponent,
    FawriaLicenseprojectDeedsContainerComponent,
    FawriaLicenseprojectEngineeringConsultantsContainerComponent,
    FawriaLicenseprojectFeasibilityStudyContainerComponent,
    FawriaLicenseprojectCharteredAccountantsContainerComponent,
    FawriaLicenseprojectMaindataCreateComponent,
    FawriaLicenseprojectDeedOwnersContainerComponent,
    FawriaLicenseprojectDeedOwnersCreateComponent,
    FawriaLicenseprojectDeedsCreateComponent,
    FawriaLicenseprojectEngineeringConsultantsCreateComponent,
    FawriaLicenseprojectCharteredAccountantsCreateComponent,
    FawriaLicenseprojectEscrowAccountCreateComponent,
    FawriaLicenseprojectContactInfoContainerComponent,
    FawriaLicenseprojectContactInfoCreateComponent,
    LicenseProjectPartiesAdditionalTermsComponent,
    LicenseProjectPartiesAdditionalTermsFormComponent,
    InstantLicenseDeedsComponent,
    LicenseProjectFawriaDeveloperListComponent,
    FawriaLicenseprojectDeedsDetailsComponent,
    FawriaLicenseprojectDeedsListComponent,
    DeleteDeedConfirmationDialogComponent,
    CustomTooltipComponent,
    BankTermsConditionsPopupComponent,
    LicenseProjectDeedOwnerApprovalComponent,
    RejectionReasonDialogComponent,
    FawriaProjectPartiesComponent,
    FawriaLicenseprojectCharteredAccountantsContainerViewOnlyComponent,
    FawriaLicenseprojectCharteredAccountantsViewOnlyComponent,
    FawriaLicenseprojectEngineeringConsultantsViewOnlyComponent,
    FawriaLicenseprojectEngineeringConsultantsContainerViewOnlyComponent,
    FawriaLicenseprojectDeedOwnersContainerViewOnlyComponent,
    FawriaLicenseprojectEscrowAccountViewOnlyComponent,
    LicenseProjectPartiesAdditionalTermsViewOnlyComponent,
    FawriaProjectDataComponent,
    FawriaLicenseprojectMainDataViewOnlyComponent,
    FawriaLicenseprojectContactInfoViewOnlyComponent,
    FawriaLicenseprojectFeasibilityStudyViewOnlyComponent,
    FawriaLicenseprojectDeedsViewOnlyComponent,
    FawriaLicenseprojectDeedsListViewOnlyComponent,
    FawriaLicenseprojectDeedsDetailsViewOnlyComponent,
    // FawriaCertificateComponent,
    FawriaProjectPartiesStatusComponent,
    OffPlanSaleLicenseComponent,
    FawriaUpdateBuildingFlatAreaComponent,
    DeveloperApprovalsListComponent,
    DeveloperApprovalDetailsComponent,
    FawriaLicenseComplateComponent,
    FawriaArchitecturalUnitsAndDesignsComponent,
    FawriaEngineeringSupervisionStaffComponent,
    FawriaUnifiedSalesModelComponent,
    FawriaContactInfoEndBeneficiaryComponent,
    FawriaEscrowAccountComponent,
    FawriaFinalBeneficiaryAgreementComponent,
    FawriaLicenseCompleteInvoiceViewComponent,
    FawriaLicenseBankAccountInfoComponent,
    UnitsCorrectionsTabsComponent,
    DeedsAndBuildingPermitsTabComponent,
    UnitsAndArchitecturalDesignsTabComponent,
    CorrectionLincenseProjectZonesComponentFromUnits,
    CorrectionLicenseProjectZoneUnitComponentFromUnits,
    CorrectionLicenseProjectZoneSubunitModelComponentFromUnits,
    CorrectionLicenseProjectZoneUnitSubunitComponentFromUnits,
    CorrectionAddZoneComponentFromUnits,
    CorrectionAddEditProjectBlockComponentFromUnits,
    CorrectionProjectUnitsComponentFromUnits,
    CorrectionProjectModuleModelsComponentFromUnits,
    CorrectionSubUnitModelsComponentFromUnits,
    CorrectionProjectModuleModelsFormComponentFromUnits,
    CorrectionProjectUnitCodesComponentFromUnits,
    CorrectionUnitCodesComponentFromUnits,
    CorrectionUnitCodesFormComponentFromUnits,
    CorrectionLicenseRequestValidationPopupComponentFromUnits,
    CorrectionArchitecturalDesignFilesComponentFromUnits,
    CorrectionUpdateBuildingFlatAreaComponentFromUnits,
    CorrectionLicenseProjectDeedsListComponentFromUnits,
    CorrectionLicenseProjectDeedsContainerComponentFromUnits,
    CorrectionLicenseProjectDeedsCreateComponentFromUnits,
    CorrectionLicenseProjectDeedsDetailsComponentFromUnits,
    CorrectionConstructionLicenseFormComponentFromUnits,
    CorrectionConstructionLicensesComponentFromUnits,
    CorrectingUnitsListComponent,
    CorrectingUnitsDetailsComponent,
    LicenseTabsComponent,
    CorrectingProjectDataComponent,
    CorrectingProjectPartiesComponent,
    CorrectingLicenseprojectMainDataViewOnlyComponent,
    CorrectingLicenseprojectContactInfoViewOnlyComponent,
    CorrectingLicenseprojectDeedsViewOnlyComponent,
    CorrectingLicenseprojectConstructionLicensesViewOnlyComponent,
    CorrectingLicenseProjectZonesComponent,
    CorrectingProjectModuleModelsComponent,
    CorrectingProjectUnitCodesComponent,
    CorrectingArchitecturalDesignFilesComponent,
    CorrectingLicenseprojectMaindataComponent,
    CorrectingLicenseprojectContactInfoComponent,
    CorrectingLicenseprojectDeedsComponent,
    CorrectingLicenseprojectDeedsListViewOnlyComponent,
    CorrectingLicenseprojectDeedsListComponent,
    CorrectingLicenseprojectDeedsCreateComponent,
    CorrectingLicenseprojectDeedsDetailsComponent,
    CorrectingLicenseprojectDeedsDetailsViewOnlyComponent,
    CorrectingSubUnitModelsComponent,
    CorrectingLicenseProjectZoneSubunitModelComponent,
    CorrectingUnitCodesComponent,
    // Correction Units Components
    CorrectionLicenseSummaryComponent,
    CorrectionLicenseProjectDeedsContainerComponent,
    CorrectionLicenseProjectDeedsComponent,
    CorrectionConstructionLicensesComponent,
    CorrectionUnitsAndDesignsContainerComponent,
    CorrectionZonesBlocksBuildingsComponent,
    CorrectionUnitTypesComponent,
    CorrectionProjectUnitCodesComponent,
    CorrectionArchitecturalDesignsComponent,
    CorrectionUnitCodesComponent,
    CorrectionAddZoneComponent,
    CorrectionLicenseProjectZoneUnitComponent,
    CorrectionLicenseProjectZoneUnitSubunitComponent,
    CorrectionLicenseProjectZoneSubunitModelComponent,
    CorrectionSubUnitModelsComponent,
    CorrectionProjectModuleModelsFormComponent,
    CorrectionConstructionLicenseFormComponent,
    CorrectionUpdateBuildingFlatAreaComponent,
    CorrectionLicenseRequestValidationPopupComponent,
    CorrectionLicenseprojectDeedsListComponent,
    CorrectionLicenseprojectDeedsCreateComponent,
    CorrectionLicenseprojectDeedsUpdateComponent,
    CorrectionLicenseprojectDeedsDetailsComponent,
    CorrectionUnitCodesFormComponent,
    CorrectionCodesFileComponent,
    CorrectionProjectLicenseRequestTimeLineComponent,
    CorrectionProjectLicenseRequestNotesComponent,
    CorrectionProjectLicenseRequestDataComponent,
    CorrectionLicenseProjectRequestDetailsComponent,
  ],
  providers: [
    SharedLicenseProjectService,
    LicenseProjectService,
    LicenseRequestHeaderProcessingStepService,
    LicenseRequestHeaderProcessingStepService,
    LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService,
    LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService,
    EngineeringSupervisionPlannedReportActualInfrastructureService,
    LicenseProjectHealthAndSafetyMonitoringService,
    NationalityService,
    EngineeringSupervisionReportActualProjectDeteilsService,
    EngineeringSupervisionReportActualQualityAndBusinessService,
    PeriodicCharteredAccountantReportService,
    LicenseCertificateTemplateService,
    LicenseProjectBuyerService,
    PlannedEngineerProjectDetailsService,
    TimelinefilesService,
    PeriodicCharteredAccountantReportService,
    CharteredAccountProjectService,
    AccountKeeperService,
    SysBankService,
    NationalAddressService,
    RealStateDeveloperService,
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
    ProjectLandService,
    ProjectLandDeedService,
    ProjectLandOwnerService,
    ZonesBlocksBuildingAndUnitsService,
    SysLicenseBeneficiaryContractFormService,
    LicenseRequestService,
    LicenseRequestHeaderService,
    ProjectModelService,
    ProjectSubUnitService,
    LicenseProjectUnitService,
    ProjectUnitCodeService,
    LicenseRequestNotesService,
    LicenseDepositDocumentService,
    LicenseDetailsService,
    RequestTimeLineService,
    LicenseRequestListService,
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
    LicenseRequestApprovalsService,
    ProjectListService,
    LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    LicenseProjectInfrastructureNetworksStatusService,
    RenewLicensesService,
    LicenseProjectQualityNoticeService,
    LicenseProjectQualityNoticeReplyService,
    LicenseProjectProblemService,
    LookupEngineeringManagementService,
    LicenseProjectRiskService,
    ProjectBusinessCaseReportService,
    ProjectBusinessCaseReportNoteService,
    LicenseProjectRiskService,
    ActualValueReportService,
    EngineeringSupervisionReportActualProjectStatusSummaryService,
    EmployeeCreateLicenseService,
    DatePipe,
    LicenseProjectAccountantLocalStorageService,
    StorageService,
    LicenseProjectExchangeDocumentService,
    SupervisionFollowUpCostsRatioService,
    QualityAndBusinessProgressService,
    SysProjectStatusService,
    MonthlyEngineeringReportExternalExpensesService,
    LicenseProjectRelativeWeightService,
    LicenseProjectBusinessPaymentService,
    LicenseProjectBuyerCancellationRequestService,
    LicenseProjectPartiesAdditionalTermsService,
    ProjectInstantLicenseDeedService,
    FawriaLicenseProjectContactInfoService,
    LicenseProjectFawriaDeveloperService,
    FawriaLicenseProjectBankInfoService,
    LicenseRequestHeaderProcessingStepService,
    FawriaLicenseEndBeneficiaryContactsInfoService,
    CorrectingUnitsService,
    CorrectionZonesBlocksBuildingAndUnitsService,
    CorrectionProjectSubUnitService,
    CorrectionProjectInstantLicenseDeedService,
    CorrectionConstructionLicenseService,
    CorrectionLicenseProjectUnitService,
    CorrectionArchitecturalDesignFilesService,
    CorrectionProjectModelService,
    CorrectionProjectUnitCodeService,
    CorrectionProjectLandDeedService,
    ProjectLicenseServiceDetailsService,
    ProjectRequestLocalStorageService,
    LicenseProjectRequestProcessingLogService,
    LicenseProjectRequestLogService,
    CorrectionProjectLicenseServiceDetailsService,
    CorrectionLicenseProjectRequestProcessingLogService,
    CorrectionLicenseProjectRequestLogService,
    CorrectionLicenseProjectPlanAccordingApprovedStandardsFileService,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LicenseRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LicenseModule {}
