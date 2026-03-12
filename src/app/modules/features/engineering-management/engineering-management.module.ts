import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringManagementRoutingModule } from './engineering-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { UpdateProjectManagerComponent } from './pages/project-list/update-project-manager/update-project-manager.component';
import { RouterModule } from '@angular/router';

import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { EngineerProblemLogComponent } from './pages/problem-log/problem-log.component';
import { EngineeringManagementLicenseProjectProblemService } from './service/license-project-problem.service';
import { LicenseProjectRecommendationService } from './service/license-project-recommendation-service';
import { ShowProblemLogComponent } from './pages/problem-log/show-problem-log/show-problem-log.component';
import { RecommendationViewComponent } from './pages/recommendations/recommendation-view/recommendation-view.component';
import { DangersRecordsComponent } from './pages/dangers-records/dangers-records.component';
import { RecordShowDangerLogComponent } from './pages/dangers-records/record-show-danger-log/record-show-danger-log.component';
import { RecordAddEditDangerLogComponent } from './pages/dangers-records/record-add-edit-danger-log/record-add-edit-danger-log.component';
import { LicenseProjectRiskService } from './services/license-project-risk.service';
import { LookupEngineeringManagementService } from './services/lookup-engineering-management.service';
import { LicenseRequestListService } from './services/license-request-list-service.service';
import { LicenseProjectQualityNoticeService } from './services/license-project-quality-notice.service';
import { LicenseProjectQualityNoticeReplyService } from './services/license-project-quality-notice-reply.service';
import { LicenseProjectQualityNoticeContainerComponent } from './pages/license-project-quality-notice-container/license-project-quality-notice-container.component';
import { LicenseProjectQualityNoticeReplyListComponent } from './pages/license-project-quality-notice-container/license-project-quality-notice-reply-list/license-project-quality-notice-reply-list.component';
import { AddReplayFromProjectMangerComponent } from './pages/license-project-quality-notice-container/add-replay-from-project-manger/add-replay-from-project-manger.component';
import { ShowLicenseProjectQualityNoticeDetalisComponent } from './pages/license-project-quality-notice-container/show-license-project-quality-notice-detalis/show-license-project-quality-notice-detalis.component';
import { SharedLicenseProjectService } from './services/shared-license-project.service';
import { SysProjectStatusService } from './services/sys-projectstatus.service';
import { LicenseProjectQualityNoticeListComponent } from './pages/license-project-quality-notice-container/license-project-quality-notice-list/license-project-quality-notice-list.component';
import { RecommendationReplyComponent } from './pages/recommendations/recommendation-reply/recommendation-reply.component';
import { ProblemReplyComponent } from './pages/problem-log/problem-reply/problem-reply.component';
import { TimeScheduleComponent } from './pages/time-schedule/time-schedule.component';
import { RequestMenuComponent } from './pages/time-schedule/request-menu/request-menu.component';
import { NotesComponent } from './pages/time-schedule/notes/notes.component';
import { AddTimelineFilesComponent } from './pages/time-schedule/add-timeline-files/add-timeline-files.component';
import { TimelineProgramFilesComponent } from './pages/time-schedule/timeline-program-files/timeline-program-files.component';
import { TimeScheduleProgramComponent } from './pages/time-schedule/time-schedule-program/time-schedule-program.component';
import { TimelinefilesService } from './services/timelinefiles.service';
import { DangerReplyComponent } from './pages/dangers-records/danger-reply/danger-reply.component';
import { PlannedEngineeringSupervisionReportsComponent } from './pages/PlannedReport/planned-engineering-supervision-reports/planned-engineering-supervision-reports.component';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from './services/license-project-engineering-supervision-planned-report-detail.service';
import { ProjectBasicDataService } from './services/project-basic-data.service';
import { QualityAndBusinessProgressService } from './services/quality-and-business-progress.service';
import { LicenseProjectRelativeWeightService } from './services/license-project-relative-weight.service';
import { QualityAndBusinessProgressComponent } from './pages/PlannedReport/quality-and-business-progress/quality-and-business-progress.component';
import { PlannedEngineeringSupervisionReportsRequestNotesComponent } from './pages/PlannedReport/planned-engineering-supervision-reports-request-notes/planned-engineering-supervision-reports-request-notes.component';
import { PlannedEngineerProjectDetailsService } from './services/planned-engineer-project-details.service';
import { PlannedEngineerProjectDetailsComponent } from './pages/PlannedReport/planned-engineer-project-details/planned-engineer-project-details.component';
import { LicenseProjectInfrastructureNetworksStatusService } from './services/license-project-infrastructure-networks-status.service';
import { InfraStructureComponent } from './pages/PlannedReport/infra-structure/infra-structure.component';
import { CompletionRatesComponent } from './pages/PlannedReport/completion-rates/completion-rates.component';
import { AddInfrastructureRatesComponent } from './pages/PlannedReport/add-infrastructure-rates/add-infrastructure-rates.component';
import { AddEditItemsOnMonthComponent } from './pages/PlannedReport/add-edit-items-on-month/add-edit-items-on-month.component';
import { AddEditEngineeringSupervisionReportsProjectDetailsComponent } from './pages/PlannedReport/add-edit-engineering-supervision-reports-project-details/add-edit-engineering-supervision-reports-project-details.component';
import { AddEditEngineeringQualityAssuranceComponent } from './pages/PlannedReport/add-edit-engineering-quality-assurance/add-edit-engineering-quality-assurance.component';
import { AddEditEngineeringInfrastructureRatesComponent } from './pages/PlannedReport/add-edit-engineering-infrastructure-rates/add-edit-engineering-infrastructure-rates.component';
import { AddEditConstructionWorkStatusComponent } from './pages/PlannedReport/add-edit-construction-work-status/add-edit-construction-work-status.component';
import { AddEditConstructionWorkPositionComponent } from './pages/PlannedReport/add-edit-construction-work-position/add-edit-construction-work-position.component';
import { AddEditCompletionAndEmploymentRatesComponent } from './pages/PlannedReport/add-edit-completion-and-employment-rates/add-edit-completion-and-employment-rates.component';
import { WorkStatusReportsComponent } from './pages/PlannedReport/work-status-reports/work-status-reports.component';
import { ActualValueReportService } from './services/actual-value-report.service';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from './services/engineering-supervision-planned-report-actual-infrastructure.service';
import { EngineeringSupervisionReportActualProjectDeteilsService } from './services/engineering-supervision-report-actual-project-deteils.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from './services/engineering-supervision-report-actual-project-status-summary.service';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from './services/engineering-supervision-report-actual-quality-and-business.service';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService } from './services/license-project-engineering-supervision-planned-monthly-report-study-note.service';
import { ActualValueReportContainerComponent } from './pages/ActualPlannedReport/actual-value-report-container/actual-value-report-container.component';
import { MonthlyEngineeringSupervisionReportsComponent } from './pages/ActualPlannedReport/monthly-engineering-supervision-reports/monthly-engineering-supervision-reports.component';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService } from './services/license-project-engineering-status-of-funds-required-from-entities.service';
import { PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent } from './pages/ActualPlannedReport/position-of-the-required-appropriations-from-the-authorities/position-of-the-required-appropriations-from-the-authorities.component';
import { ActualNotesComponent } from './pages/ActualPlannedReport/actual-notes/actual-notes.component';
import { AddEditDesignPhaseCreditsComponent } from './pages/ActualPlannedReport/add-edit-design-phase-credits/add-edit-design-phase-credits.component';
import { AddEditProjectDeliveryPhaseApprovalsComponent } from './pages/ActualPlannedReport/add-edit-project-delivery-phase-approvals/add-edit-project-delivery-phase-approvals.component';
import { ShowActualValueWorkStatuesReportComponent } from './pages/ActualPlannedReport/show-actual-value-work-statues-report/show-actual-value-work-statues-report.component';
import { AddEditActualValueWorkStatuesReportComponent } from './pages/ActualPlannedReport/add-edit-actual-value-work-statues-report/add-edit-actual-value-work-statues-report.component';
import { DangerLogComponent } from './pages/ActualPlannedReport/danger-log/danger-log.component';
import { LicenseProjectProblemService } from './services/license-project-problem.service';
import { ProblemLogComponent } from './pages/ActualPlannedReport/problem-log/problem-log.component';
import { ActualProjectDetailsComponent } from './pages/ActualPlannedReport/actual-project-details/actual-project-details.component';
import { ActualValueReportPagingListComponent } from './pages/ActualPlannedReport/actual-value-report-paging-list/actual-value-report-paging-list.component';
import { AddEditActualInfrastructurComponent } from './pages/ActualPlannedReport/add-edit-actual-infrastructur/add-edit-actual-infrastructur.component';
import { AddEditActualInfrastructureNetworksStatusComponent } from './pages/ActualPlannedReport/add-edit-actual-infrastructure-networks-status/add-edit-actual-infrastructure-networks-status.component';
import { AddEditActualProjectDetailsComponent } from './pages/ActualPlannedReport/add-edit-actual-project-details/add-edit-actual-project-details.component';
import { AddEditActualQualityAndBusinessComponent } from './pages/ActualPlannedReport/add-edit-actual-quality-and-business/add-edit-actual-quality-and-business.component';
import { AddEditActualQualityControlComponent } from './pages/ActualPlannedReport/add-edit-actual-quality-control/add-edit-actual-quality-control.component';
import { AddEditActualRelativeWeightComponent } from './pages/ActualPlannedReport/add-edit-actual-relative-weight/add-edit-actual-relative-weight.component';
import { AddEditDangerLogComponent } from './pages/ActualPlannedReport/add-edit-danger-log/add-edit-danger-log.component';
import { AddEditProblemLogComponent } from './pages/ActualPlannedReport/add-edit-problem-log/add-edit-problem-log.component';
import { MonthlyEngineeringSupervisionReportsInfraStructureComponent } from './pages/ActualPlannedReport/monthly-engineering-supervision-reports-infra-structure/monthly-engineering-supervision-reports-infra-structure.component';
import { AddEditConnectionWithServicesProviderComponent } from './pages/ActualPlannedReport/add-edit-connection-with-services-provider/add-edit-connection-with-services-provider.component';
import { LicenseProjectHealthAndSafetyMonitoringService } from './services/license-project-health-and-safety-monitoring.service';
import { AddEditHealthAndSafetyMonitoringComponent } from './pages/ActualPlannedReport/add-edit-health-and-safety-monitoring/add-edit-health-and-safety-monitoring.component';
import { MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent } from './pages/ActualPlannedReport/monthly-engineering-supervision-reports-risks-and-safety/monthly-engineering-supervision-reports-risks-and-safety.component';
import { MonthlyEngineeringReportExternalExpensesService } from './services/monthly-engineering-report-external-expenses.service';
import { LicenseProjectExchangeDocumentService } from './services/license-project-exchange-document.service';
import { AddEditMonthlyEngineeringReportExternalExpensesComponent } from './pages/ActualPlannedReport/add-edit-monthly-engineering-report-external-expenses/add-edit-monthly-engineering-report-external-expenses.component';
import { AddEditNonConformityReportComponent } from './pages/ActualPlannedReport/add-edit-non-conformity-report/add-edit-non-conformity-report.component';
import { AddEditMaterialExaminationComponent } from './pages/ActualPlannedReport/add-edit-material-examination/add-edit-material-examination.component';
import { MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent } from './pages/ActualPlannedReport/monthly-engineering-supervision-reports-quality-and-business-progress/monthly-engineering-supervision-reports-quality-and-business-progress.component';
import { MonthlyengineeringSupervisionReportsProjectDetailsComponent } from './pages/ActualPlannedReport/monthlyengineering-supervision-reports-project-details/monthlyengineering-supervision-reports-project-details.component';
import { ShowActualInfrastructureNetworksStatusComponent } from './pages/ActualPlannedReport/show-actual-infrastructure-networks-status/show-actual-infrastructure-networks-status.component';
import { ShowActualQualityControlDetailsComponent } from './pages/ActualPlannedReport/show-actual-quality-control-details/show-actual-quality-control-details.component';
import { ShowActualRelativeWeightDetailsComponent } from './pages/ActualPlannedReport/show-actual-relative-weight-details/show-actual-relative-weight-details.component';
import { ShowDangerLogComponent } from './pages/ActualPlannedReport/show-danger-log/show-danger-log.component';
import { ShowDesignPhaseCreditsComponent } from './pages/ActualPlannedReport/show-design-phase-credits/show-design-phase-credits.component';
import { UpdateMonthSubmittedComponent } from './pages/ActualPlannedReport/update-month-submitted/update-month-submitted.component';
import { DeveloperProjectListComponent } from './pages/developer-project-list/developer-project-list.component';
import { ProjectListService } from './services/project-list.service';
import { ProjectStatusUpdateComponent } from './pages/project-list/Project-status-update/project-status-update.component';
import { ExportEngineeringReportComponent } from './pages/ActualPlannedReport/export-engineering-report/export-engineering-report.component';
import { RecommendationsLogsListComponent } from './pages/recommendations-logs-list/recommendations-logs-list.component';
import { RecommendationLogsListService } from './services/recommendation-logs-list.service';
import { LicenseProjectEngineeringConsultantService } from '../license/services/license-project-engineering-consultant.service';
import { LicenseProjectDelegatorService } from '../license/services/license-project-delegator.service';
import { LicenseProjectCharteredAccountantService } from '../license/services/license-project-chartered-accountant.service';
import { ProjectRealStateDeveloperService } from '../license/services/licenseProjects/project-real-state-developer.service';
import { ExchangeDocumentService } from '../license/services/exchange-document.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    EngineeringManagementRoutingModule,
  ],
  declarations: [
    ProjectListComponent,
    UpdateProjectManagerComponent,    
    ProjectDetailsComponent,
    RecommendationsComponent,
    DangersRecordsComponent,
    RecordShowDangerLogComponent,
    RecommendationViewComponent,
    EngineerProblemLogComponent,
    RecommendationReplyComponent,
    ShowProblemLogComponent,
    RecordAddEditDangerLogComponent,
    ShowLicenseProjectQualityNoticeDetalisComponent,
    LicenseProjectQualityNoticeContainerComponent,
    LicenseProjectQualityNoticeReplyListComponent,
    AddReplayFromProjectMangerComponent,
    ProblemReplyComponent,
    LicenseProjectQualityNoticeListComponent,
    DangerReplyComponent,
    TimeScheduleComponent,
    RequestMenuComponent,
    NotesComponent,
    AddTimelineFilesComponent,
    TimelineProgramFilesComponent,
    TimeScheduleProgramComponent,
    PlannedEngineeringSupervisionReportsComponent,
    WorkStatusReportsComponent,
    QualityAndBusinessProgressComponent,
    PlannedEngineeringSupervisionReportsRequestNotesComponent,
    PlannedEngineerProjectDetailsComponent,
    InfraStructureComponent,
    CompletionRatesComponent,
    AddInfrastructureRatesComponent,
    AddEditItemsOnMonthComponent,
    AddEditEngineeringSupervisionReportsProjectDetailsComponent,
    AddEditEngineeringQualityAssuranceComponent,
    AddEditEngineeringInfrastructureRatesComponent,
    AddEditConstructionWorkStatusComponent,
    AddEditConstructionWorkPositionComponent,
    AddEditCompletionAndEmploymentRatesComponent,
    ActualValueReportContainerComponent,
    MonthlyEngineeringSupervisionReportsComponent,
    PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent,
    ActualNotesComponent,
    AddEditDesignPhaseCreditsComponent,
    AddEditProjectDeliveryPhaseApprovalsComponent,
    ShowActualValueWorkStatuesReportComponent,
    AddEditActualValueWorkStatuesReportComponent,
    DangerLogComponent,
    ProblemLogComponent,
    ActualProjectDetailsComponent,
    ActualValueReportPagingListComponent,
    AddEditActualInfrastructurComponent,
    AddEditActualInfrastructureNetworksStatusComponent,
    AddEditActualProjectDetailsComponent,
    AddEditActualQualityAndBusinessComponent,
    AddEditActualQualityControlComponent,
    AddEditActualRelativeWeightComponent,
    AddEditDangerLogComponent,
    AddEditProblemLogComponent,
    MonthlyEngineeringSupervisionReportsInfraStructureComponent,
    AddEditConnectionWithServicesProviderComponent,
    AddEditHealthAndSafetyMonitoringComponent,
    MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent,
    AddEditMonthlyEngineeringReportExternalExpensesComponent,
    AddEditNonConformityReportComponent,
    AddEditMaterialExaminationComponent,
    MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent,
    MonthlyengineeringSupervisionReportsProjectDetailsComponent,
    ShowActualInfrastructureNetworksStatusComponent,
    ShowActualQualityControlDetailsComponent,
    ShowActualRelativeWeightDetailsComponent,
    ShowDangerLogComponent,
    ShowDesignPhaseCreditsComponent,
    UpdateMonthSubmittedComponent,
    DeveloperProjectListComponent,
    ProjectStatusUpdateComponent,
    ExportEngineeringReportComponent,
    RecommendationsLogsListComponent
  ],
  providers: [
    ProjectListService,
    LicenseProjectEngineeringConsultantService,
    LicenseProjectDelegatorService,
    LicenseProjectCharteredAccountantService,
    ProjectRealStateDeveloperService,
    ExchangeDocumentService,
    SharedLicenseProjectService,
    SysProjectStatusService,
    EngineeringManagementLicenseProjectProblemService,
    LicenseProjectRecommendationService,
    LicenseRequestListService,
    CommonModule,
    EngineeringManagementRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    AccordionModule,
    FormsModule,
    LicenseProjectRiskService,
    LookupEngineeringManagementService,
    LicenseProjectQualityNoticeService,
    LicenseProjectQualityNoticeReplyService,
    TimelinefilesService,
    LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    ProjectBasicDataService,
    QualityAndBusinessProgressService,
    LicenseProjectRelativeWeightService,
    PlannedEngineerProjectDetailsService,
    LicenseProjectInfrastructureNetworksStatusService,
    ActualValueReportService,
    EngineeringSupervisionPlannedReportActualInfrastructureService,
    EngineeringSupervisionReportActualProjectDeteilsService,
    EngineeringSupervisionReportActualProjectStatusSummaryService,
    EngineeringSupervisionReportActualQualityAndBusinessService,
    LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService,
    LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService,
    LicenseProjectProblemService,
    LicenseProjectHealthAndSafetyMonitoringService,
    MonthlyEngineeringReportExternalExpensesService,
    LicenseProjectExchangeDocumentService,
    RecommendationLogsListService
      

  ]
})
export class EngineeringManagementModule { }
