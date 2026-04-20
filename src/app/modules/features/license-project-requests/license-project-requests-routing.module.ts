import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseRequestListComponent } from './pages/lincense-project-request-list/lincense-request-list.component';
import { CancelLicenseRequestSummaryComponent } from './pages/cancel-license-request-summary/cancel-license-request-summary.component';
import { ChangeplanLicenseRequestSummaryComponent } from './pages/changeplan-license-request-summary/changeplan-license-request-summary.component';
import { ReactivateLicenseRequestSummaryComponent } from './pages/reactivate-license-request-summary/reactivate-license-request-summary.component';
import { LicenseProjectRequestDetailComponent } from './pages/license-project-request-detail/license-project-request-detail.component';
import { CreateProjectLicenseRequestComponent } from './pages/create-project-license-request/create-project-license-request.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { CreateChangePlanRequestComponent } from './pages/create-change-plan-request/create-change-plan-request.component';
import { CreateReactivateLicenseRequestComponent } from './pages/create-reactivate-license-request/create-reactivate-license-request.component';
import { CreateCancelLicenseRequestComponent } from './pages/create-cancel-license-request/create-cancel-license-request.component';
import {CreateChangeEngineerComponent} from './pages/create-change-engineer/create-change-engineer.component'
import { ChangeEngineerLicenseRequestSummaryComponent } from './pages/change-engineer-license-request-summary/change-engineer-license-request-summary.component';
import { ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent } from './pages/change-license-project-space-or-units-request-summary/change-license-project-space-or-units-request-summary.component';
import { CreateChangeLicenseProjectSpaceOrUnitsRequestComponent } from './pages/create-change-license-project-space-or-units-request/create-change-license-project-space-or-units-request.component';
import { CreateChangeLicenseProjectNameRequestComponent } from './pages/create-change-license-project-name-request/create-change-license-project-name-request.component';
import { ChangeLicenseProjectNameRequestSummaryComponent } from './pages/change-license-project-name-request-summary/change-license-project-name-request-summary.component';
import { CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent } from './pages/create-change-license-project-buyer-or-tenant-contract-request/create-change-license-project-buyer-or-tenant-contract-request.component';
import { ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent } from './pages/change-license-project-buyer-or-tenant-contract-request-summary/change-license-project-buyer-or-tenant-contract-request-summary.component';
import { CreateAddingDelegatorRequestComponent } from './pages/create-adding-delegator-request/create-adding-delegator-request.component';
import { AddingDelegatorSummaryComponent } from './pages/adding-delegator-summary/adding-delegator-summary.component';
import { CreateRemovingDelegatorRequestComponent } from './pages/create-removing-delegator-request/create-removing-delegator-request.component';
import { RemovingDelegatorSummaryComponent } from './pages/removing-delegator-summary/removing-delegator-summary.component';
import { CreateChangeOrAddLicenseProjectUnitModelRequestComponent } from './pages/create-change-or-add-license-project-unit-model-request/create-change-or-add-license-project-unit-model-request.component';
import { ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent } from './pages/change-or-add-license-project-unit-model-request-summary/change-or-add-license-project-unit-model-request-summary.component';
import { WithdrawSurplusBeforeProjectEndRequestSummaryComponent } from './pages/withdraw-surplus-before-project-end-request-summary/withdraw-surplus-before-project-end-request-summary.component';
import { CreateWithdrawSurplusBeforeProjectEndRequestComponent } from './pages/create-withdraw-surplus-before-project-end-request/create-withdraw-surplus-before-project-end-request.component';
import { AddChangeCharteredAccountantRequestComponent } from './pages/add-change-chartered-accountant-request/add-change-chartered-accountant-request.component';
import { ChangeCharteredAccountantRequestSummaryComponent } from './pages/change-chartered-accountant-request-summary/change-chartered-accountant-request-summary.component';
import { CreateChangeAccountKeeperRequestComponent } from './pages/create-change-account-keeper-request/create-change-account-keeper-request.component';
import { ChangeAccountKeeperRequestSummaryComponent } from './pages/change-account-keeper-request-summary/change-account-keeper-request-summary.component';
import { CreateChangePartiesAgreementRequestComponent } from './pages/create-change-parties-agreement-request/create-change-parties-agreement-request.component';
import { ChangePartiesAgreementRequestSummaryComponent } from './pages/change-parties-agreement-request-summary/change-parties-agreement-request-summary.component';
import { TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent } from './pages/transfer-amounts-between-subaccounts-in-escrow-account-summary/transfer-amounts-between-subaccounts-in-escrow-account-summary.component';
import { CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent } from './pages/create-transfer-amounts-between-subaccounts-in-escrow-account/create-transfer-amounts-between-subaccounts-in-escrow-account.component';
import { CreateObjectionToSupervisionAndFollowupCostsRequestComponent } from './pages/create-objection-to-supervision-and-followup-costs-request/create-objection-to-supervision-and-followup-costs-request.component';
import {ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent} from './pages/objection-to-supervision-and-followup-costs-request-summary/objection-to-supervision-and-followup-costs-request-summary.component';
import { LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent } from './pages/lifting-the-mark-on-the-property-title-deed-request-summary/lifting-the-mark-on-the-property-title-deed-request-summary.component';
import { CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent } from './pages/create-lifting-the-mark-on-the-property-title-deed-request/create-lifting-the-mark-on-the-property-title-deed-request.component';
import { CreateRequestTemplateComponent } from './pages/create-request-template/create-request-template/create-request-template.component';
import { RequestTemplateMainSummaryComponent } from './pages/request-template-main-summary/request-template-main-summary.component';
import { CreateComponent } from '../qualifying/pages/create/create.component';
const routes: Routes = [ 
  {
    path: Configuration.pages.licenseProjectRequests.licenseProjectRequests,
    component: RequestsComponent,
    // data: { breadcrumb: 'الطلبات الاعتيادية والغير اعتيادية'},
  }, 
  {
    path: Configuration.pages.licenseProjectRequests.licenseProjectRequestList,
    component: LincenseRequestListComponent,
    data: { breadcrumb: 'قائمة الطلبات' },
  }, 
  {
    path: Configuration.pages.licenseProjectRequests.createLicenseProjectRequestList,
    component: CreateProjectLicenseRequestComponent,
    data: { breadcrumb: 'انشاء طلب جديد'},
  }, 
  {
     path: Configuration.pages.licenseProjectRequests.cancelLicenseSummary,
     component: CancelLicenseRequestSummaryComponent,
     data: { breadcrumb: 'الغاء طلب الترخيص' },
  },
  {
    path: Configuration.pages.licenseProjectRequests.createCharteredAccountantRequest,
    component: AddChangeCharteredAccountantRequestComponent,
    data: { breadcrumb: 'طلب تغير المحاسب القانوني' },
 },
 {
  path: Configuration.pages.licenseProjectRequests.charteredAccountantRequestSummary,
  component:  ChangeCharteredAccountantRequestSummaryComponent,
  data: { breadcrumb: 'تفصيل تغير المحاسب القانوني' },
},
{
  path: Configuration.pages.licenseProjectRequests.accountKeeperRequestSummary,
  component:  ChangeAccountKeeperRequestSummaryComponent,
  data: { breadcrumb: 'تفصيل تغير أمين الحساب' },
},
  {
    path: Configuration.pages.licenseProjectRequests.createcancelLicense,
    component: CreateCancelLicenseRequestComponent,
    data: { breadcrumb: 'الغاء طلب الترخيص' },
 },
 {
  path: Configuration.pages.licenseProjectRequests.createChangePartiesAgreementRequest,
  component: CreateChangePartiesAgreementRequestComponent,
  data: { breadcrumb: 'طلب تغيير في الاتفاقيات المعتمدة لأحد أطراف المشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.changePartiesAgreementRequestSummary,
  component: ChangePartiesAgreementRequestSummaryComponent,
  data: { breadcrumb: 'تفصيل تغيير في الاتفاقيات المعتمدة لأحد أطراف المشروع' },
},
 {
  path: Configuration.pages.licenseProjectRequests.createAccountKeeperRequest,
  component: CreateChangeAccountKeeperRequestComponent,
  data: { breadcrumb: 'طلب تغير أمين الحساب' },
},
{
  path: Configuration.pages.licenseProjectRequests.transferAmountsBetweenSubaccountsInEscrowAccountSummary,
  component: TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent,
  data: { breadcrumb: 'تفصيل المطور مناقلة المبالغ بين الحسابات الفرعية في حساب الضمان' },
},
{
  path: Configuration.pages.licenseProjectRequests.createTransferAmountsBetweenSubaccountsInEscrowAccount,
  component: CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent,
  data: { breadcrumb: 'طلب المطور مناقلة المبالغ بين الحسابات الفرعية في حساب الضمان' },
},
{
  path: Configuration.pages.licenseProjectRequests.createobjectionToSupervisionAndFollowupCosts,
  component: CreateObjectionToSupervisionAndFollowupCostsRequestComponent,
  data: { breadcrumb: 'الإعتراض على تكاليف الإشراف والمتابعة' },
},
{
  path: Configuration.pages.licenseProjectRequests.objectionToSupervisionAndFollowupCostsSummary,
  component: ObjectionToSupervisionAndFollowupCostsRequestSummaryComponent,
  data: { breadcrumb: 'تفصيل الإعتراض على تكاليف الإشراف والمتابعة' },
},
{
  path: Configuration.pages.licenseProjectRequests.createLiftingTheMarkOnThePropertyTitleDeedRequest,
  component: CreateLiftingTheMarkOnThePropertyTitleDeedRequestComponent,
  data: { breadcrumb: 'طلب رفع التأشير عن صك ملكية العقار للحالات المحددة في المادة (18) من اللائحة' },
},
{
  path: Configuration.pages.licenseProjectRequests.liftingTheMarkOnThePropertyTitleDeedRequestSummary,
  component: LiftingTheMarkOnThePropertyTitleDeedRequestSummaryComponent,
  data: { breadcrumb: 'تفصيل طلب رفع التأشير عن صك ملكية العقار للحالات المحددة في المادة (18) من اللائحة' },
},
{
  path: Configuration.pages.licenseProjectRequests.createRequestTemplate,
  component: CreateRequestTemplateComponent,
  data: { breadcrumb: 'انشاء الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.requestTemplateSummary,
  component: RequestTemplateMainSummaryComponent,
  data: { breadcrumb: 'انشاء الطلب' },
},
 /*  {
    path: Configuration.pages.licenseProjectRequests.ProjectLicenseActiveRequestDetails,
    component: LicenseActiveRequestDetailsComponent,
    data: { breadcrumb: 'تفاصيل اعادة تشغيل الطلب' },
  }, */
  {
    path: Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary,
    component: ReactivateLicenseRequestSummaryComponent,
    data: { breadcrumb: 'اعادة تفعيل الرخصة' },
 },
 {
  path: Configuration.pages.licenseProjectRequests.createreactivaiteLicense,
  component: CreateReactivateLicenseRequestComponent,
  data: { breadcrumb: 'اعادة تفعيل الرخصة' },
},
 {
  path: Configuration.pages.licenseProjectRequests.changePlanSummary,
  component: ChangeplanLicenseRequestSummaryComponent,
  data: { breadcrumb: 'تغيير خطة المشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangePlanRequest,
  component: CreateChangePlanRequestComponent,
  data: { breadcrumb: 'تغيير خطة المشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails,
  component: LicenseProjectRequestDetailComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangeengineer,
  component: CreateChangeEngineerComponent,
  data: { breadcrumb: 'إنشاء طلب تغير مهندس' },
},
{
  path: Configuration.pages.licenseProjectRequests.changeEngineerSummary,
  component: ChangeEngineerLicenseRequestSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangespaceorunits,
  component: CreateChangeLicenseProjectSpaceOrUnitsRequestComponent,
  data: { breadcrumb: 'إنشاء طلب زيادة أو تقليص عدد وحدات أو مساحة المشروع المرخص' },
},
{
  path: Configuration.pages.licenseProjectRequests.changespaceorunitssummary,
  component: ChangeLicenseProjectSpaceOrUnitsRequestSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangeprojectname,
  component: CreateChangeLicenseProjectNameRequestComponent,
  data: { breadcrumb: 'إنشاء طلب تغيير اسم المشروع أو الشركة المرخص' },
},
{
  path: Configuration.pages.licenseProjectRequests.changeprojectnamesummary,
  component: ChangeLicenseProjectNameRequestSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangebuyerortenantcontract,
  component: CreateChangeLicenseProjectBuyerOrTenantContractRequestComponent,
  data: { breadcrumb: 'إنشاء طلب تغيير في عقود المشترين أو المستأجرين المعتمدة للمشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.changebuyerortenantcontractsummary,
  component: ChangeLicenseProjectBuyerOrTenantContractRequestSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createaddingdelegator,
  component: CreateAddingDelegatorRequestComponent,
  data: { breadcrumb: 'إنشاء طلب إضافة مفوض بالتوقيع على وثيقة الصرف من حساب الضمان' },
},
{
  path: Configuration.pages.licenseProjectRequests.addingdelegatorsummary,
  component: AddingDelegatorSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createremovingdelegator,
  component: CreateRemovingDelegatorRequestComponent,
  data: { breadcrumb: 'إنشاء طلب إزالة المفوض المعتمد بالتوقيع على وثيقة الصرف من حساب الضمان' },
},
  // {
  //   path: `${Configuration.pages.qualifying.createRequest}/:code/${Configuration.pages.qualifying.upgradeDegree}`,
  //   component: CreateComponent,
  //   data: { breadcrumb: 'تغيير درجة التأهيل' },
  // },
{
  path: Configuration.pages.licenseProjectRequests.removingdelegatorsummary,
  component: RemovingDelegatorSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createchangeoraddunitmodel,
  component: CreateChangeOrAddLicenseProjectUnitModelRequestComponent,
  data: { breadcrumb: 'إنشاء طلب تغيير أو إضافة نماذج وحدات بالمشروع عقاري ' },
},
{
  path: Configuration.pages.licenseProjectRequests.changeoraddunitmodelsummary,
  component: ChangeOrAddLicenseProjectUnitModelRequestSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
{
  path: Configuration.pages.licenseProjectRequests.createwithdrawsurplusbeforeprojectend,
  component: CreateWithdrawSurplusBeforeProjectEndRequestComponent,
  data: { breadcrumb: 'إنشاء طلب المطور سحب الفائض من حساب الضمان قبل انتهاء المشروع' },
},
{
  path: Configuration.pages.licenseProjectRequests.withdrawsurplusbeforeprojectendsummary,
  component: WithdrawSurplusBeforeProjectEndRequestSummaryComponent,
  data: { breadcrumb: 'تفاصيل الطلب' },
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseProjectRequestsRoutingModule { }
