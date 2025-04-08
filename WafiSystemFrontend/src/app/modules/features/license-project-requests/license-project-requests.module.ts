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
import { ChangeLicenseProjectEngineeringRequestService } from './services/change-license-project-engineering-request.service';
import { CreateChangeEngineerComponent } from './pages/create-change-engineer/create-change-engineer.component';
import { ChangeEngineerLicenseRequestSummaryComponent } from './pages/change-engineer-license-request-summary/change-engineer-license-request-summary.component';
import { ChangeEngineerMainDataSummaryComponent } from './components/change-engineer-main-data-summary/change-engineer-main-data-summary.component';
import { AddEditChangeEngineerSummaryComponent } from './components/add-edit-change-engineer-summary/add-edit-change-engineer-summary.component';
import { ChangeLicenseProjectSpaceOrUnitsRequestService } from './services/change-license-project-space-or-units-request.service';
import { CreateChangeLicenseProjectSpaceOrUnitsRequestComponent } from './pages/create-change-license-project-space-or-units-request/create-change-license-project-space-or-units-request.component';
import { ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent } from './pages/change-license-project-space-or-units-request-summary/change-license-project-space-or-units-request-summary.component';
import { ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent } from './components/change-license-project-space-or-units-reques-main-data-summary/change-license-project-space-or-units-reques-main-data-summary.component';
import { AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent } from './components/add-edit-change-license-project-space-or-units-summary/add-edit-change-license-project-space-or-units-summary.component';
import { ChangeLicenseProjectBuyerOrTenantContractRequestService } from './services/change-license-project-buyer-or-tenant-contract-request.service';
import { ChangeLicenseProjectNameRequestService } from './services/change-license-project-name-request.service';
import { CreateChangeLicenseProjectNameRequestComponent } from './pages/create-change-license-project-name-request/create-change-license-project-name-request.component';
import { ChangeLicenseProjectNameRequestSummaryComponent } from './pages/change-license-project-name-request-summary/change-license-project-name-request-summary.component';
import { ChangeProjectNameMainDataSummaryComponent } from './components/change-project-name-main-data-summary/change-project-name-main-data-summary.component';
import { AddEditChangeProjectNameSummaryComponent } from './components/add-edit-change-project-name-summary/add-edit-change-project-name-summary.component';
import { ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent } from './pages/change-license-project-buyer-or-tenant-contract-request-summary/change-license-project-buyer-or-tenant-contract-request-summary.component';
import { CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent } from './pages/create-change-license-project-buyer-or-tenant-contract-request/create-change-license-project-buyer-or-tenant-contract-request.component';
import { ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent } from './components/change-license-project-buyer-or-tenant-contract-request-main-data-summary/change-license-project-buyer-or-tenant-contract-request-main-data-summary.component';
import { AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent } from './components/add-edit-change-license-project-buyer-or-tenant-contract-request/add-edit-change-license-project-buyer-or-tenant-contract-request.component';
import { ChangeLicenseProjectDelegatorRequestService } from './services/change-license-project-delegator-request.service';
import { CreateAddingDelegatorRequestComponent } from './pages/create-adding-delegator-request/create-adding-delegator-request.component';
import { AddingDelegatorSummaryComponent } from './pages/adding-delegator-summary/adding-delegator-summary.component';
import { AddingDelegatorMainDataSummaryComponent } from './components/adding-delegator-main-data-summary/adding-delegator-main-data-summary.component';
import { AddEditAddingDelegatorSummaryComponent } from './components/add-edit-adding-delegator-summary/add-edit-adding-delegator-summary.component';
import { CreateRemovingDelegatorRequestComponent } from './pages/create-removing-delegator-request/create-removing-delegator-request.component';
import { RemovingDelegatorSummaryComponent } from './pages/removing-delegator-summary/removing-delegator-summary.component';
import { RemovingDelegatorMainDataSummaryComponent } from './components/removing-delegator-main-data-summary/removing-delegator-main-data-summary.component';
import { AddEditRemovingDelegatorSummaryComponent } from './components/add-edit-removing-delegator-summary/add-edit-removing-delegator-summary.component';
import { ChangeOrAddLicenseProjectUnitModelRequestService } from './services/change-or-add-license-project-unit-model-request.service';
import { WithdrawSurplusBeforeProjectEndRequestService } from './services/withdraw-surplus-before-project-end-request.service';
import { CreateChangeOrAddLicenseProjectUnitModelRequestComponent } from './pages/create-change-or-add-license-project-unit-model-request/create-change-or-add-license-project-unit-model-request.component';
import { ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent } from './pages/change-or-add-license-project-unit-model-request-summary/change-or-add-license-project-unit-model-request-summary.component';
import { ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent } from './components/change-or-add-license-project-unit-model-request-main-data/change-or-add-license-project-unit-model-request-main-data.component';
import { AddEditChangeOrAddLicenseProjectUnitModelRequestComponent } from './components/add-edit-change-or-add-license-project-unit-model-request/add-edit-change-or-add-license-project-unit-model-request.component';
import { CreateWithdrawSurplusBeforeProjectEndRequestComponent } from './pages/create-withdraw-surplus-before-project-end-request/create-withdraw-surplus-before-project-end-request.component';
import { WithdrawSurplusBeforeProjectEndRequestSummaryComponent } from './pages/withdraw-surplus-before-project-end-request-summary/withdraw-surplus-before-project-end-request-summary.component';
import { WithdrawSurplusBeforeProjectEndRequestMainDataComponent } from './components/withdraw-surplus-before-project-end-request-main-data/withdraw-surplus-before-project-end-request-main-data.component';
import { AddEditWithdrawSurplusBeforeProjectEndRequestComponent } from './components/add-edit-withdraw-surplus-before-project-end-request/add-edit-withdraw-surplus-before-project-end-request.component';
import { ChangeEngineerMainDataDetailsComponent } from './components/change-engineer-main-data-details/change-engineer-main-data-details.component';
import { WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent } from './components/withdraw-surplus-before-project-end-request-main-data-details/withdraw-surplus-before-project-end-request-main-data-details.component';
import { ChangeProjectNameMainDataDetailsComponent } from './components/change-project-name-main-data-details/change-project-name-main-data-details.component';
import { ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent } from './components/change-license-project-space-or-units-reques-main-data-details/change-license-project-space-or-units-reques-main-data-details.component';
import { ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent } from './components/change-license-project-buyer-or-tenant-contract-request-main-data-details/change-license-project-buyer-or-tenant-contract-request-main-data-details.component';
import { AddingDelegatorMainDataDetailsComponent } from './components/adding-delegator-main-data-details/adding-delegator-main-data-details.component';
import { RemovingDelegatorMainDataDetailsComponent } from './components/removing-delegator-main-data-details/removing-delegator-main-data-details.component';
import { ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent } from './components/change-or-add-license-project-unit-model-request-main-data-details/change-or-add-license-project-unit-model-request-main-data-details.component';
import { AddChangeCharteredAccountantRequestComponent } from './pages/add-change-chartered-accountant-request/add-change-chartered-accountant-request.component';
import { ChangeCharteredAccountantRequestService } from './services/change-chartered-account-request';
import { ChangeCharteredAccountantRequestSummaryComponent } from './pages/change-chartered-accountant-request-summary/change-chartered-accountant-request-summary.component';
import { ChangeCharteredAccountantSummaryComponent } from './components/change-chartered-accountant-summary/change-chartered-accountant-summary.component';
import { EditChangeCharteredAccountantComponent } from './components/edit-change-chartered-accountant/edit-change-chartered-accountant.component';
import { ChangeCharteredAccountantDetailsComponent } from './components/change-chartered-accountant-details/change-chartered-accountant-details.component';
import { ChangeLicenseProjectAccountKeeperService } from './services/change-account-keeper-request.service';
import { CreateChangeAccountKeeperRequestComponent } from './pages/create-change-account-keeper-request/create-change-account-keeper-request.component';
import { ChangeAccountKeeperRequestSummaryComponent } from './pages/change-account-keeper-request-summary/change-account-keeper-request-summary.component';
import { AccountKeeperRequestSummaryComponent } from './components/account-keeper-request-summary/account-keeper-request-summary.component';
import { AccountKeeperRequestDetailsComponent } from './components/account-keeper-request-details/account-keeper-request-details.component';
import { UpdateAccountKeeperRequestComponent } from './components/update-account-keeper-request/update-account-keeper-request.component';
import { ChangeAccountKeeperRequestDetailsComponent } from './pages/change-account-keeper-request-details/change-account-keeper-request-details.component';
import { CreateChangePartiesAgreementRequestComponent } from './pages/create-change-parties-agreement-request/create-change-parties-agreement-request.component';
import { ChangePartiesAgreementRequestSummaryComponent } from './pages/change-parties-agreement-request-summary/change-parties-agreement-request-summary.component';
import { ChangePartiesAgreementRequestDetailsComponent } from './pages/change-parties-agreement-request-details/change-parties-agreement-request-details.component';
import { EditChangePartiesAgreementComponent } from './components/edit-change-parties-agreement/edit-change-parties-agreement.component';
import { ChangePartiesAgreementSummaryComponent } from './components/change-parties-agreement-summary/change-parties-agreement-summary.component';
import { ChangePartiesAgreementDetailsComponent } from './components/change-parties-agreement-details/change-parties-agreement-details.component';
import { ChangePartiesAgreementRequestService } from './services/change-parties-agreement-request.service';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from './services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent } from './pages/create-transfer-amounts-between-subaccounts-in-escrow-account/create-transfer-amounts-between-subaccounts-in-escrow-account.component';
import { TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent } from './pages/transfer-amounts-between-subaccounts-in-escrow-account-summary/transfer-amounts-between-subaccounts-in-escrow-account-summary.component';
import { TransferAmountSummaryComponent } from './components/transfer-amount-summary/transfer-amount-summary.component';
import { EditTransferAmountRequestComponent } from './components/edit-transfer-amount-request/edit-transfer-amount-request.component';
import { TransferAmountDetailsComponent } from './components/transfer-amount-details/transfer-amount-details.component';
import { TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent } from './pages/transfer-amounts-between-subaccounts-in-escrow-account-details/transfer-amounts-between-subaccounts-in-escrow-account-details.component';
import { CreateObjectionToSupervisionAndFollowupCostsRequestComponent } from './pages/create-objection-to-supervision-and-followup-costs-request/create-objection-to-supervision-and-followup-costs-request.component';
import { ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent } from './pages/objection-to-supervision-and-followup-costs-request-summary/objection-to-supervision-and-followup-costs-request-summary.component';
import { ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent } from './pages/objection-to-supervision-and-followup-costs-request-details/objection-to-supervision-and-followup-costs-request-details.component';
import { ObjectionToSupervisionAndFollowupCostsDetailsComponent } from './components/objection-to-supervision-and-followup-costs-details/objection-to-supervision-and-followup-costs-details.component';
import { ObjectionToSupervisionAndFollowupCostsSummaryComponent } from './components/objection-to-supervision-and-followup-costs-summary/objection-to-supervision-and-followup-costs-summary.component';
import { EditObjectionToSupervisionAndFollowupCostsComponent } from './components/edit-objection-to-supervision-and-followup-costs/edit-objection-to-supervision-and-followup-costs.component';
import { ObjectionToSupervisionAndFollowupCostsRequestService } from './services/objection-to-supervision-and-followup-costs-request.service';
import { LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent } from './pages/lifting-the-mark-on-the-property-title-deed-request-details/lifting-the-mark-on-the-property-title-deed-request-details.component';
import { LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent } from './pages/lifting-the-mark-on-the-property-title-deed-request-summary/lifting-the-mark-on-the-property-title-deed-request-summary.component';
import { LiftingTheMarkOnThePropertyTitleDeedDetailsComponent } from './components/lifting-the-mark-on-the-property-title-deed-details/lifting-the-mark-on-the-property-title-deed-details.component';
import { LiftingTheMarkOnThePropertyTitleDeedSummaryComponent } from './components/lifting-the-mark-on-the-property-title-deed-summary/lifting-the-mark-on-the-property-title-deed-summary.component';
import { EditLiftingTheMarkOnThePropertyTitleDeedComponent } from './components/edit-lifting-the-mark-on-the-property-title-deed/edit-lifting-the-mark-on-the-property-title-deed.component';
import { CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent } from './pages/create-lifting-the-mark-on-the-property-title-deed-request/create-lifting-the-mark-on-the-property-title-deed-request.component';
import { LiftingTheMarkOnThePropertyTitleDeedRequestService } from './services/lifting-the-mark-on-the-property-title-deed.service';
import { AddingDelegatorDetailsComponent } from './components/adding-delegator-details/adding-delegator-details.component';
import { ChangeEngineerDetailsComponent } from './components/change-engineer-details/change-engineer-details.component';
import { ChangeLicenseProjectBuyerOrTenantContractDetailsComponent } from './components/change-license-project-buyer-or-tenant-contract-details/change-license-project-buyer-or-tenant-contract-details.component';
import { ChangeLicenseProjectSpaceOrUnitsDetailsComponent } from './components/change-license-project-space-or-units-details/change-license-project-space-or-units-details.component';
import { ChangeOrAddLicenseProjectUnitModelDetailsComponent } from './components/change-or-add-license-project-unit-model-details/change-or-add-license-project-unit-model-details.component';
import { RemovingDelegatorDetailsComponent } from './components/removing-delegator-details/removing-delegator-details.component';
import { WithdrawSurplusBeforeProjectEndDetailsComponent } from './components/withdraw-surplus-before-project-end-details/withdraw-surplus-before-project-end-details.component';
import { ChangeProjectNameDetailsComponent } from './components/change-project-name-details/change-project-name-details.component';
import { CreateRequestTemplateComponent } from './pages/create-request-template/create-request-template/create-request-template.component';
import { RequestTemplateService } from './services/request-template.service';
import { RequestTemplateDetailsComponent } from './components/request-template-details/request-template-details.component';
import { RequestTemplateDetailComponent } from './components/request-template-detail/request-template-detail.component';
import { EditRequestTemplateComponent } from './components/edit-request-template/edit-request-template.component';
import { RequestTemplateMainSummaryComponent } from './pages/request-template-main-summary/request-template-main-summary.component';
import { RequestTemplateSummaryComponent } from './components/request-template-summary/request-template-summary.component';
import { LicenseProjectService } from './services/license-project.service';
import { ChangeCharteredAccountRequestDetailsComponent } from './pages/change-chartered-account-request-details/change-chartered-account-request-details.component';
import { SysBankService } from 'src/app/shared/services/sysBank/sys-bank.service';
import { LiftingDeedReasonService } from './services/LiftingDeedReason/lifting-Deed-Reason.service';
import { LicenseProjectDeedService, } from './services/LiftingDeeds/lifting-Deeds.service';

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
    ChangeCharteredAccountRequestDetailsComponent,
    CancelLicenseEngineeringSummaryComponent,
    CancelLicenseMainDataSummaryComponent,
    ReactivateLicenseRequestSummaryComponent,
    ChangeAccountKeeperRequestDetailsComponent,
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

    CreateCancelLicenseRequestComponent,
    CreateChangeEngineerComponent,
    ChangeEngineerLicenseRequestSummaryComponent,
    ChangeEngineerMainDataSummaryComponent,
    AddEditChangeEngineerSummaryComponent,
    CreateChangeLicenseProjectSpaceOrUnitsRequestComponent,
    ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent,
    ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent,
    AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent,
    CreateChangeLicenseProjectNameRequestComponent,
    ChangeLicenseProjectNameRequestSummaryComponent,
    ChangeProjectNameMainDataSummaryComponent,
    AddEditChangeProjectNameSummaryComponent,
    ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent,
    CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent,
    ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent,
    AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent,
    CreateAddingDelegatorRequestComponent,
    AddingDelegatorSummaryComponent,
    AddingDelegatorMainDataSummaryComponent,
    AddEditAddingDelegatorSummaryComponent,
    CreateRemovingDelegatorRequestComponent,
    RemovingDelegatorSummaryComponent,
    RemovingDelegatorMainDataSummaryComponent,
    AddEditRemovingDelegatorSummaryComponent,
    CreateChangeOrAddLicenseProjectUnitModelRequestComponent,
    ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent,
    ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent,
    AddEditChangeOrAddLicenseProjectUnitModelRequestComponent,
    CreateWithdrawSurplusBeforeProjectEndRequestComponent,
    WithdrawSurplusBeforeProjectEndRequestSummaryComponent,
    WithdrawSurplusBeforeProjectEndRequestMainDataComponent,
    AddEditWithdrawSurplusBeforeProjectEndRequestComponent,
    ChangeEngineerMainDataDetailsComponent,
    WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent,
    ChangeProjectNameMainDataDetailsComponent,
    ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent,
    ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent,
    AddingDelegatorMainDataDetailsComponent,
    RemovingDelegatorMainDataDetailsComponent,
    ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent,
    ChangeCharteredAccountantRequestSummaryComponent,
    CreateCancelLicenseRequestComponent,
    AddChangeCharteredAccountantRequestComponent,
    CreateChangeAccountKeeperRequestComponent,
    ChangeAccountKeeperRequestSummaryComponent,
    ChangeCharteredAccountantSummaryComponent,
    EditChangeCharteredAccountantComponent,
    ChangeCharteredAccountantDetailsComponent,
    AccountKeeperRequestSummaryComponent,
    AccountKeeperRequestDetailsComponent,
    UpdateAccountKeeperRequestComponent,
    CreateChangePartiesAgreementRequestComponent,
    ChangePartiesAgreementRequestSummaryComponent,
    ChangePartiesAgreementRequestDetailsComponent,
    EditChangePartiesAgreementComponent,
    ChangePartiesAgreementSummaryComponent,
    ChangePartiesAgreementDetailsComponent,
    CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent,
    TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent,
    TransferAmountSummaryComponent,
    EditTransferAmountRequestComponent,
    TransferAmountDetailsComponent,
    TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent,
    CreateObjectionToSupervisionAndFollowupCostsRequestComponent,
    ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent,
    ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent,
    ObjectionToSupervisionAndFollowupCostsDetailsComponent,
    ObjectionToSupervisionAndFollowupCostsSummaryComponent,
    EditObjectionToSupervisionAndFollowupCostsComponent,
    LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent,
    LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent,
    LiftingTheMarkOnThePropertyTitleDeedDetailsComponent,
    LiftingTheMarkOnThePropertyTitleDeedSummaryComponent,
    EditLiftingTheMarkOnThePropertyTitleDeedComponent,
    CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent,
    CreateRequestTemplateComponent,
    AddingDelegatorDetailsComponent,
    ChangeEngineerDetailsComponent,
    ChangeLicenseProjectBuyerOrTenantContractDetailsComponent,
    ChangeLicenseProjectSpaceOrUnitsDetailsComponent,
    ChangeOrAddLicenseProjectUnitModelDetailsComponent,
    RemovingDelegatorDetailsComponent,
    WithdrawSurplusBeforeProjectEndDetailsComponent,
    ChangeProjectNameDetailsComponent,
    RequestTemplateDetailsComponent,
    RequestTemplateDetailComponent,
    EditRequestTemplateComponent,
    RequestTemplateMainSummaryComponent,
    RequestTemplateSummaryComponent
  ],
  providers: [
    WithdrawSurplusBeforeProjectEndRequestService,
    ChangeOrAddLicenseProjectUnitModelRequestService,
    ChangeLicenseProjectDelegatorRequestService,
    DatePipe,
    LincenseRequestProjectService,
    DataVisibilityOfLicenseProjectService,
    RequestTemplateService,
    SharedLicenseProjectService,
    TransferAmountsBetweenSubaccountsInEscrowaccountRequestService,
    ProjectLicenseServiceDetailsService,
    CahngePlaneRequestDetailsService,
    CancelLicenseRequestService,
    LiftingTheMarkOnThePropertyTitleDeedRequestService,
    ProjectRequestLocalStorageService,
    ReactivateLicenseService,
    LicenseProjectRequestLogService,
    LicenseProjectRequestProcessingLogService,
    ChangeLicenseProjectEngineeringRequestService,
    ChangeLicenseProjectSpaceOrUnitsRequestService,
    ChangeLicenseProjectBuyerOrTenantContractRequestService,
    ChangeLicenseProjectNameRequestService,
    ChangeCharteredAccountantRequestService,
    ChangeLicenseProjectAccountKeeperService,
    ChangePartiesAgreementRequestService,
    ObjectionToSupervisionAndFollowupCostsRequestService,
    LicenseProjectService,
    SysBankService,
    LiftingDeedReasonService,
    LicenseProjectDeedService
  ]
})
export class LicenseProjectRequestsModule { }
