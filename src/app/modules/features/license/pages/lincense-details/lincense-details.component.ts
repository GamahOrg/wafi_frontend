import { Component } from '@angular/core';
import { combineLatestWith, Subscription } from 'rxjs';
import { Button } from 'src/app/shared/models/button.model';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import {
  FarzRequestStatusEnum,
  LicenseDetails,
  LicenseRequestCustomerHeaderEventStatus,
} from '../../models/license-details.model';
import { LicenseRequestHeaderService } from '../../services/license-request-header.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { RequestDataComponent } from '../../components/request-data/request-data.component';
import { RequestNotesComponent } from '../../components/request-notes/request-notes.component';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { RequestTimeLineComponent } from '../../components/request-time-line/request-time-line.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { EditorRequestNotesComponent } from 'src/app/shared/components/editor-request-notes/editor-request-notes.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesData } from 'src/app/shared/models/request-notes-data.model';
import { ToastrService } from 'ngx-toastr';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { ExternalStatus } from '../../models/external-status.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { CompileWithLogFilesDto } from '../../dataModels/compile-with-log-files-dto';
import { ProjectQuantitiesTableComponent } from '../../components/project-quantities-table/project-quantities-table.component';
import { ButtonClassesType } from 'src/app/shared/models/enums/button-classes-type.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import {
  ExternalProjectDataDto,
  ProjectDocumentDataDto,
} from '../../models/external-project-data-dto';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';
import {
  AccountKeeperDto,
  LicenseProject,
  LicenseProjectLandDataDto,
  LicenseProjectMainDataDto,
  ProjectRealStateDeveloperDto,
} from '../../models/license-project.model';
import {
  licenseProjectAddresses,
  licenseProjectConstructionLicenses,
  licenseProjectDesignFiles,
  licenseProjectServices,
  licenseProjectZones,
  licenseProjectPlanAccordingApprovedStandardsFiles,
} from '../../models/project-units';
import { LicenseProjectCharteredAccountantFullDto } from '../../models/LicenseProjectCharteredAccountantFullDto';
import { LicenseProjectRealStateMarketerFullDto } from '../../models/LicenseProjectRealStateMarketerFullDto';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseProjectEngineeringConsultantFullDto } from '../../models/LicenseProjectEngineeringConsultantFullDto';
import { requestPhase } from '../../../qualifying/dataModels/request-details.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectRelativeWeightDto } from '../../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import {
  LicenseProjectDelegatorsDto,
  LicenseProjectMainRealStateDeveloperDto,
} from '../../dataModels/project-real-state-developer.dto';
import { licenseProjectZoneCaculations } from '../../models/license-project-zone-caculations';
import { LicenseProjectExternalAddressDto } from '../../dataModels/project-external-address.model';
import { BankingAccountDto } from '../../dataModels/banking-account-dto';
import { LicenseProjectExhibitionDto } from '../../dataModels/license-project-exhibition-dto';
import { VisitorEngineeringConsultantDto } from '../../dataModels/visitor-engineering-consultant-dto';

import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { LicenseProjectDeveloperDto } from '../../dataModels/license-project-developer-dto';
import { LicenseProjectRequestAttachmentDto } from '../../dataModels/license-project-request-attachment-dto';
import { LicenseProjectDetachedUnitRequestDetails } from '../../dataModels/license-project-detached-unit.model';
import { LicenseProjectFinancialStatementDto } from '../../models/LicenseProjectFinancialStatementDto';
import { LicenseProjectPromissoryNoteDto } from '../../dataModels/license-project-promissory-note.model';
import { LicenseProjectSubDeveloperDto } from '../../dataModels/license-project-sub-developer/license-project-sub-developer-dto';
import { CircularProgressSetting } from 'src/app/shared/models/circular-progress-setting.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { ProjectListService } from '../../services/project-list.service';
import { ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { CertifiedLicenseDataDto } from '../../models/certified-license-data-dto';
import { LicenseProjectBusinessPaymentModel } from '../../models/business-payment.model';

@Component({
  selector: 'app-lincense-details',
  templateUrl: './lincense-details.component.html',
  styleUrls: ['./lincense-details.component.scss'],
})
export class LincenseDetailsComponent {
  subscriptions: Subscription[] = [];
  selectedRequest: null | LicenseDetails = null;
  selectedRequestID: string | null = '';
  compileWithLogFilesDto: CompileWithLogFilesDto = new CompileWithLogFilesDto();
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseSummary}`;
  editFarzNoteRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.farzNote}`;


  get externalStatusId() {
    return ExternalStatus;
  }
  get ButtonType() {
    return ButtonType;
  }
  get farzRequestStatusEnum() {
    return FarzRequestStatusEnum;
  }
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: 'بيانات الطلب',
        Component: RequestDataComponent, //RequestDataComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: 'ملاحظات الطلب',
        Component: RequestNotesComponent, //RequestNotesComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: 'سجل أحداث الطلب',
        Component: RequestTimeLineComponent,
        disabled: false,
        isVisible: true,
      },
    ],
  };
  clientActionsButtons: Button[] = [
    {
      icon: '',
      title: 'إعادة إرسال الطلب',
      actionType: ButtonType.allowCompile,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompilNotesDialog(),
      classes: [ButtonClassesType.primary],
    },
    {
      icon: '',
      title: 'إعادة إرسال الطلب بعد الموافقة المشروطة',
      actionType: ButtonType.allowCompileConditionalApproval,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompileConditionalApprovalNotesDialog(),
      classes: [ButtonClassesType.primary],
    },
    {
      icon: '',
      title: 'معالجة ملاحظات تهميش الصكوك',
      actionType: ButtonType.allowCompileDeedMarginalization,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompileDeedMarginalizationNotesDialog(),
      classes: [ButtonClassesType.secondary],
    },
    {
      icon: '',
      title: 'معالجة ملاحظات تفعيل حساب الضمان',
      actionType: ButtonType.allowCompileGuaranteeLetterActivation,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompileGuaranteeLetterActivationNotesDialog(),
      classes: [ButtonClassesType.secondary],
    },
    {
      icon: '',
      title: 'معالجة ملاحظات جداول الكميات والأوزان النسبية',
      actionType: ButtonType.allowCompileQWTable,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompileQWTableNotesDialog(),
      classes: [ButtonClassesType.secondary],
    },
    {
      icon: '',
      title: 'معالجة ملاحظات فتح حساب بنكي',
      actionType: ButtonType.allowCompileOpenBankAccount,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompileOpenBankAccountDialog(),
      classes: [ButtonClassesType.secondary],
    },
  ];
  RequestNotes: RequestNotesData | null = null;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  // Ids: string[] = [];
  StudyDaysProgressSetting: CircularProgressSetting =
    new CircularProgressSetting();

  // compileProgressSetting: CircularProgressSetting = new CircularProgressSetting;
  // allowCompileConditionalApprovalProgressSetting: CircularProgressSetting = new CircularProgressSetting;
  allowCompileDeedMarginalizationProgressSetting: CircularProgressSetting =
    new CircularProgressSetting();
  allowCompileGuaranteeLetterActivationProgressSetting: CircularProgressSetting =
    new CircularProgressSetting();
  allowCompileQWTableProgressSetting: CircularProgressSetting =
    new CircularProgressSetting();
  allowCompileOpenBankAccountProgressSetting: CircularProgressSetting =
    new CircularProgressSetting();

  localization = {
    remainingDaysToStudy: 'الوقت المتبقي لدراسة الطلب',
    remainingDaysToCompile: 'الوقت المتبقي لفرصة معالجة الطلب',
    remainingDaysToCompileDeedMarginalizationPeriod:
      'الوقت المتبقي لمعالجة لتهميش الصكوك',
    remainingDaysToCompileGuaranteeLetterActivationPeriod:
      'الوقت المتبقي لمعالجة تفعيل خطاب الضمان',
    remainingDaysToCompileQWTablePeriod:
      'الوقت المتبقي لمعالجة جدول الكميات و الأوزان',
    remainingDaysToCompileOpenBankAccountPeriod:
      'الوقت المتبقي لمعالجة فتح حساب بنكي ',
    editButtonTitle: 'معالجة الملاحظات',
    farzStatus: 'معالجة ملاحظات فرز',
    editPaymentandAdditionalTermsTitle: 'تعديل الدفعات و البنود الإضافية',
    editButtonForRenewTitle: 'تعديل الطلب قبل التجديد',
    day: 'يوم',
  };
  constructor(
    private _requestService: LicenseRequestHeaderService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _tabsService: TabsService,
    private _licenseDetailsService: LicenseDetailsService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _requestNotesService: RequestNotesService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _router: Router,
    private _projectListService: ProjectListService
  ) { }

  ngOnInit(): void {
    this.updateTabContent();
    this.getSelectedRequestIdFromLocalStorage();
    this.observeSelectedRequest();
    this.observePopupEvents();
    this.observeRequestNotes();
    this.observeFilesIds();
    this.observeQWTableCompiledSuccessfullyEvent();
  }

  private GetLicenseRequestHeadersByLicenseProjectId() {
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService
        .GetLicenseRequestHeadersByLicenseProjectId(
          this.licenseProjectId as string
        )
        .subscribe((res: string[]) => {
          this.updateDataVisibilityOfLicenseProject(res);
        })
    );
  }
  private updateDataVisibilityOfLicenseProject(data: string[]) {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(
      data
    );
    // this.observeQWTableCompiledSuccessfullyEvent();
  }
  observeQWTableCompiledSuccessfullyEvent() {
    this.subscriptions.push(
      this._licenseDetailsService.QWTableCompiledSuccessfully.subscribe(
        (res) => {
          this.compileQWTable();
        }
      )
    );
  }
  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }
  private getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID =
      this._sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage();
    if (this.selectedRequestID) {
      this.getLicenseRequestHeaderByRequestId();
      this.compileWithLogFilesDto.requestId = this.selectedRequestID;
    }
  }
  private getLicenseRequestHeaderByRequestId() {
    // this.subscriptions.push(
    //   this._requestService
    //     .GetLicenseRequestHeaderByRequestId(this.selectedRequestID as string)
    //     .subscribe((res) => {
    //       this._licenseDetailsService.selectRequest$.next(res);
    //     })
    // );

    const licenseRequest$ = this._licenseDetailsService.GetLicenseRequestHeaderByRequestId(this.selectedRequestID as string);
    const licenseRequestProcessingData$ = this._licenseDetailsService.GetFacilityByProcessingRequestData(this.selectedRequestID as string);

    const subscriptions = licenseRequest$.pipe(
      combineLatestWith(licenseRequestProcessingData$)
    )
      .subscribe(([requestDetails, requestProcessing]) => {
        let requestData = requestDetails as LicenseDetails;
        if (requestData && requestProcessing) {
          requestData.workflowDetailRequestStatus = requestProcessing.workflowDetailRequestStatus;   
          requestData.licenseRequestCustomerHeaderEventStatus = requestProcessing.licenseRequestCustomerHeaderEventStatus;  
          this._licenseDetailsService.selectRequest$.next(requestData);
        }
      })

    this.subscriptions.push(subscriptions);

  }
  private observeSelectedRequest() {
    this.subscriptions.push(
      this._licenseDetailsService.selectRequest$.subscribe(
        (res: LicenseDetails | null) => {
          if (res && res.id) {
            this.selectedRequest = res;
            this.licenseProjectId = res.licenseProjectId;
            this.GetLicenseRequestHeadersByLicenseProjectId();
            this.updateClientActionsButtons();
            // this.updateStudyDaysProgressSetting();
            this.updateAllBehaviorSubject(res);
            this.updateDayProgressSettings();
          }
        }
      )
    );
  }
  private updateDayProgressSettings(): void {
    this.updateStudyDaysProgressSetting();
    // this.updateAllowCompileConditionalApprovalProgressSetting();
    this.updateAllowCompileDeedMarginalizationProgressSetting();
    this.updateAllowCompileGuaranteeLetterActivationProgressSetting();
    this.updateAllowCompileQWTableProgressSetting();
    this.updateAllowCompileOpenBankAccountProgressSetting();
  }

  private updateStudyDaysProgressSetting(): void {
    if (this.selectedRequest) {
      this.StudyDaysProgressSetting.percent =
        (this.selectedRequest.licenseRequestVersions[0].remainingStudyPeriod /
          this.selectedRequest.licenseRequestVersions[0].studyPeriod) *
        100;
      this.StudyDaysProgressSetting.title =
        this.selectedRequest.licenseRequestVersions[0].remainingStudyPeriod.toString();
    }
  }

  // private updateAllowCompileConditionalApprovalProgressSetting(): void {
  //   if (this.selectedRequest) {
  //     this.allowCompileConditionalApprovalProgressSetting.percent = this.selectedRequest.licenseRequestCustomerHeaderEventStatus.allowCompileConditionalApprovalRemainingPeriod / this.selectedRequest.licenseRequestCustomerHeaderEventStatus.allowCompileConditionalApprovalPeriod * 100;
  //     this.allowCompileConditionalApprovalProgressSetting.title = this.selectedRequest.licenseRequestCustomerHeaderEventStatus.allowCompileConditionalApprovalRemainingPeriod.toString()
  //   }
  // }

  private updateAllowCompileDeedMarginalizationProgressSetting(): void {
    if (this.selectedRequest) {
      this.allowCompileDeedMarginalizationProgressSetting.percent =
        (this.selectedRequest.licenseRequestCustomerHeaderEventStatus
          .allowCompileDeedMarginalizationRemainingPeriod /
          this.selectedRequest.licenseRequestCustomerHeaderEventStatus
            .allowCompileDeedMarginalizationPeriod) *
        100;
      this.allowCompileDeedMarginalizationProgressSetting.title =
        this.selectedRequest.licenseRequestCustomerHeaderEventStatus.allowCompileDeedMarginalizationRemainingPeriod.toString();
    }
  }
  private updateAllowCompileGuaranteeLetterActivationProgressSetting(): void {
    if (this.selectedRequest) {
      this.allowCompileGuaranteeLetterActivationProgressSetting.percent =
        (this.selectedRequest.licenseRequestCustomerHeaderEventStatus
          .allowCompileGuaranteeLetterActivationRemainingPeriod /
          this.selectedRequest.licenseRequestCustomerHeaderEventStatus
            .allowCompileGuaranteeLetterActivationPeriod) *
        100;
      this.allowCompileGuaranteeLetterActivationProgressSetting.title =
        this.selectedRequest.licenseRequestCustomerHeaderEventStatus.allowCompileGuaranteeLetterActivationRemainingPeriod.toString();
    }
  }
  private updateAllowCompileQWTableProgressSetting(): void {
    if (this.selectedRequest) {
      this.allowCompileQWTableProgressSetting.percent =
        (this.selectedRequest.licenseRequestCustomerHeaderEventStatus
          .allowCompileQWTableRemainingPeriod /
          this.selectedRequest.licenseRequestCustomerHeaderEventStatus
            .allowCompileQWTablePeriod) *
        100;
      this.allowCompileQWTableProgressSetting.title =
        this.selectedRequest.licenseRequestCustomerHeaderEventStatus.allowCompileQWTableRemainingPeriod.toString();
    }
  }

  private updateAllowCompileOpenBankAccountProgressSetting(): void {
    if (this.selectedRequest) {
      if (
        this.selectedRequest.licenseRequestCustomerHeaderEventStatus
          .AllowCompileOpenBankAccountRemainingPeriod
      ) {
        this.allowCompileOpenBankAccountProgressSetting.percent =
          (this.selectedRequest.licenseRequestCustomerHeaderEventStatus
            .AllowCompileOpenBankAccountRemainingPeriod /
            this.selectedRequest.licenseRequestCustomerHeaderEventStatus
              .AllowCompileOpenBankAccountPeriod) *
          100;
        this.allowCompileOpenBankAccountProgressSetting.title =
          this.selectedRequest.licenseRequestCustomerHeaderEventStatus.AllowCompileOpenBankAccountRemainingPeriod.toString();
      }
    }
  }

  private updateAllBehaviorSubject(requestDetails: LicenseDetails): void {
    

    this.updateLicenseCertificateData(requestDetails)

    if (requestDetails.licenseProject.licenseProjectExternalAddresses)
      this.updateLicenseProjectExternalAddresses(
        requestDetails.licenseProject.licenseProjectExternalAddresses
      );
    if (requestDetails.licenseProject.licenseProjectAddresses)
      this.updateLicenseProjectAddresses(
        requestDetails.licenseProject.licenseProjectAddresses
      );
    if (requestDetails.licenseProject.licenseProjectCharteredAccountants)
      this.updateLicenseProjectCharteredAccountants(
        requestDetails.licenseProject.licenseProjectCharteredAccountants
      );
    if (requestDetails.licenseProject.licenseProjectConstructionLicenses)
      this.updateLicenseProjectConstructionLicenses(
        requestDetails.licenseProject.licenseProjectConstructionLicenses
      );
    if (requestDetails.licenseProject.licenseProjectDeeds)
      this.updateLicenseProjectDeeds(
        requestDetails.licenseProject.licenseProjectDeeds
      );
    if (requestDetails.licenseProject.licenseProjectDesignFiles)
      this.updateLicenseProjectDesignFiles(
        requestDetails.licenseProject.licenseProjectDesignFiles
      );
    if (requestDetails.licenseProject.licenseProjectEngineeringConsultants)
      this.updateLicenseProjectEngineeringConsultants(
        requestDetails.licenseProject.licenseProjectEngineeringConsultants
      );
    if (requestDetails.licenseProject.licenseProjectFeasibilityStudies)
      this.updateLicenseProjectFeasibilityStudies(
        requestDetails.licenseProject.licenseProjectFeasibilityStudies
      );
    if (
      requestDetails.licenseProject
        .licenseProjectPlanAccordingApprovedStandardsFiles
    )
      this.updateLicenseProjectPlanAccordingApprovedStandardsFiles(
        requestDetails.licenseProject
          .licenseProjectPlanAccordingApprovedStandardsFiles
      );
    if (requestDetails.licenseProject.licenseProjectQuantitiesTableFiles)
      this.updateLicenseProjectQuantitiesTableFiles(
        requestDetails.licenseProject.licenseProjectQuantitiesTableFiles
      );
    if (requestDetails.licenseProject.licenseProjectRealStateMarketers)
      this.updateLicenseProjectRealStateMarketers(
        requestDetails.licenseProject.licenseProjectRealStateMarketers
      );
    if (requestDetails.licenseProject.licenseProjectServices)
      this.updateLicenseProjectServices(
        requestDetails.licenseProject.licenseProjectServices
      );
    if (requestDetails.licenseProject.licenseProjectSubDevelopers)
      this.updateLicenseProjectSubDevelopers(
        requestDetails.licenseProject.licenseProjectSubDevelopers
      );
    if (requestDetails.licenseProject.licenseProjectZones)
      this.updateLicenseProjectZones(
        requestDetails.licenseProject.licenseProjectZones
      );
    if (requestDetails.licenseProject.projectAccountKeeper)
      this.updateProjectAccountKeeper(
        requestDetails.licenseProject.projectAccountKeeper
      );
    if (requestDetails.licenseProject.projectRealStateDeveloper)
      this.updateProjectRealStateDeveloper(
        requestDetails.licenseProject.projectRealStateDeveloper
      );
    if (requestDetails.licenseProject.projectMainData)
      this.updateProjectMainData(requestDetails.licenseProject.projectMainData);
    if (requestDetails.licenseProject.projectLandData)
      this.updateProjectLandData(requestDetails.licenseProject.projectLandData);
    if (requestDetails.licenseProject.sysLicenseBeneficiary)
      this.updateSysLicenseBeneficiary(
        requestDetails.licenseProject.sysLicenseBeneficiary
      );
    if (requestDetails.licenseProject.externalProjectData)
      this.updateExternalProjectData(
        requestDetails.licenseProject.externalProjectData
      );
    if (requestDetails.licenseProject.quantitiesTableAcknowledgment)
      this.updateLicenseProjectData(requestDetails.licenseProject);
    if (
      requestDetails.workflowDetailRequestStatus &&
      requestDetails.workflowDetailRequestStatus.length > 0
    )
      this.updateRequestPhases(requestDetails.workflowDetailRequestStatus);
    if (requestDetails.licenseProject.licenseProjectDelegators)
      this.updateDelegatorData(
        requestDetails.licenseProject.licenseProjectDelegators
      );
    if (requestDetails.licenseProject.licenseProjectZoneCaculations)
      this.updateLicenseProjectZoneCaculationsDto(
        requestDetails.licenseProject.licenseProjectZoneCaculations
      );
    if (requestDetails.licenseProject.licenseProjectMainRealStateDevelopers)
      this.updatelicenseProjectMainRealStateDevelopers(
        requestDetails.licenseProject.licenseProjectMainRealStateDevelopers
      );
    if (requestDetails.licenseProject.licenseProjectRelativeWeights)
      this.updateLicenseProjectRelativeWeightData(
        requestDetails.licenseProject.licenseProjectRelativeWeights
      );
    if (requestDetails.licenseProject.financialGuaranteeOfProjectOwnershipFile)
      this.updateFinancialGuaranteeOfProjectOwnershipFile(
        requestDetails.licenseProject.financialGuaranteeOfProjectOwnershipFile
      );
    if (requestDetails.licenseProject.projectDocumentData)
      this.updateprojectDocumentDatae(
        requestDetails.licenseProject.projectDocumentData
      );
    if (requestDetails.licenseProject.bankingAccount)
      this.updateBankingAccount(requestDetails.licenseProject.bankingAccount);
    if (requestDetails.licenseProject.licenseProjectExhibitions)
      this.updatelicenseProjectExhibitions(
        requestDetails.licenseProject.licenseProjectExhibitions
      );
    if (
      requestDetails.licenseProject.licenseProjectVisitorEngineeringConsultants
    )
      this.updatelicenseProjectVisitorEngineeringConsultants(
        requestDetails.licenseProject
          .licenseProjectVisitorEngineeringConsultants
      );
    if (
      requestDetails.licenseProject
        .licenseProjectBeneficiaryContractFormAdditionalTerms
    )
      this.updateBeneficiaryContractFormAdditionalTermsList(
        requestDetails.licenseProject
          .licenseProjectBeneficiaryContractFormAdditionalTerms
      );
    if (requestDetails.licenseProject.licenseProjectBusinessPayments)
      this.updateLicenseProjectBusinessPaymentsList(
        requestDetails.licenseProject.licenseProjectBusinessPayments
      );
    if (requestDetails.licenseProject.LicenseProjectRequestAttachments)
      this.updateLicenseProjectRequestAttachments(
        requestDetails.licenseProject.LicenseProjectRequestAttachments
      );
    if (requestDetails.licenseProject.licenseProjectSubUnits)
      this.updateLicenseProjectDetachedUnit(
        requestDetails.licenseProject.licenseProjectSubUnits
      );
    if (requestDetails.licenseProject.licenseProjectFinancialStatements)
      this.updateLicenseProjectFinancialStatements(
        requestDetails.licenseProject.licenseProjectFinancialStatements
      );
    if (requestDetails.licenseProject.licenseProjectPromissoryNotes)
      this.updateLicenseProjectPromissoryNotes(
        requestDetails.licenseProject.licenseProjectPromissoryNotes
      );
  }
  updateLicenseProjectPromissoryNotes(
    licenseProjectPromissoryNotes: LicenseProjectPromissoryNoteDto[]
  ) {
    this._licenseDetailsService.licenseProjectPromissoryNotes$.next(
      licenseProjectPromissoryNotes
    );
  }
  updateLicenseProjectRequestAttachments(
    licenseProjectRequestAttachments: LicenseProjectRequestAttachmentDto[]
  ) {
    this._licenseDetailsService.licenseProjectRequestAttachment$.next(
      licenseProjectRequestAttachments
    );
  }

  updateLicenseProjectFinancialStatements(
    licenseProjectFinancialStatements: LicenseProjectFinancialStatementDto[]
  ) {
    this._licenseDetailsService.financialStatement$.next(
      licenseProjectFinancialStatements
    );
  }

  updatelicenseProjectSubDevelopers(
    licenseProjectDevelopers: LicenseProjectDeveloperDto[]
  ) {
    this._licenseDetailsService.licenseProjectDeveloper$.next(
      licenseProjectDevelopers
    );
  }
  updateBeneficiaryContractFormAdditionalTermsList(
    beneficiaryContractFormAdditionalTermsList: BeneficiaryContractFormAdditionalTermsDto[]
  ) {
    this._licenseDetailsService.beneficiaryContractFormAdditionalTerms$.next(
      beneficiaryContractFormAdditionalTermsList
    );
  }
  updateLicenseProjectBusinessPaymentsList(licenseProjectBusinessPayments: LicenseProjectBusinessPaymentModel[]) {
    this._licenseDetailsService.licenseProjectBusinessPaymentDto$.next(
      licenseProjectBusinessPayments
    );
  }

  updateLicenseProjectDetachedUnit(
    licenseProjectDetachedUnit: LicenseProjectDetachedUnitRequestDetails[]
  ) {
    this._licenseDetailsService.licenseProjectDetachedUnit$.next(
      licenseProjectDetachedUnit
    );
  }
  updatelicenseProjectVisitorEngineeringConsultants(
    licenseProjectVisitorEngineeringConsultants: VisitorEngineeringConsultantDto[]
  ) {
    this._licenseDetailsService.visitorEngineeringConsultant$.next(
      licenseProjectVisitorEngineeringConsultants
    );
  }
  updatelicenseProjectExhibitions(
    licenseProjectExhibitions: LicenseProjectExhibitionDto[]
  ) {
    this._licenseDetailsService.licenseProjectExhibitions$.next(
      licenseProjectExhibitions
    );
  }
  updateBankingAccount(bankingAccount: BankingAccountDto) {
    this._licenseDetailsService.bankingAccount$.next(bankingAccount);
  }
  updateprojectDocumentDatae(projectDocumentData: ProjectDocumentDataDto) {
    this._licenseDetailsService.projectDocumentData$.next(projectDocumentData);
  }
  updatelicenseProjectMainRealStateDevelopers(
    licenseProjectMainRealStateDeveloper: LicenseProjectMainRealStateDeveloperDto[]
  ) {
    this._licenseDetailsService.licenseProjectMainRealStateDeveloper$.next(
      licenseProjectMainRealStateDeveloper
    );
  }
  updateLicenseProjectZoneCaculationsDto(
    LicenseProjectZoneCaculations: licenseProjectZoneCaculations
  ) {
    this._licenseDetailsService.licenseProjectZoneCaculations$.next(
      LicenseProjectZoneCaculations
    );
  }
  updateFinancialGuaranteeOfProjectOwnershipFile(
    financialGuaranteeOfProjectOwnershipFile: SysFileManagerCreateUpdateDto
  ) {
    this._licenseDetailsService.financialGuaranteeOfProjectOwnershipFile$.next(
      financialGuaranteeOfProjectOwnershipFile
    );
  }
  updateLicenseProjectRelativeWeightData(
    licenseProjectRelativeWeights: LicenseProjectRelativeWeightDto[]
  ) {
    this._licenseDetailsService.licenseProjectRelativeWeights$.next(
      licenseProjectRelativeWeights
    );
  }
  private updateRequestPhases(requestPhases: requestPhase[]): void {
    this._licenseDetailsService.requestPhases$.next(requestPhases);
  }
  updateExternalProjectData(externalProjectData: ExternalProjectDataDto) {
    this._licenseDetailsService.externalProjectData$.next(externalProjectData);
  }

  updateDelegatorData(delegatorData: LicenseProjectDelegatorsDto[]) {
    this._licenseDetailsService.licenseProjectDelegator$.next(delegatorData);
  }

  updateLicenseProjectData(lincenseProjectData: LicenseProject) {
    this._licenseDetailsService.lincenseProjectData$.next(lincenseProjectData);
  }

  updateSysLicenseBeneficiary(
    sysLicenseBeneficiary: SysLicenseBeneficiaryContractFormListDto
  ) {
    this._licenseDetailsService.sysLicenseBeneficiary$.next(
      sysLicenseBeneficiary
    );
  }
  updateProjectLandData(projectLandData: LicenseProjectLandDataDto) {
    this._licenseDetailsService.projectLandData$.next(projectLandData);
  }
  updateProjectMainData(projectMainData: LicenseProjectMainDataDto) {
    this._licenseDetailsService.projectMainData$.next(projectMainData);
  }
  updateProjectRealStateDeveloper(
    projectRealStateDeveloper: ProjectRealStateDeveloperDto
  ) {
    this._licenseDetailsService.projectRealStateDeveloper$.next(
      projectRealStateDeveloper
    );
  }
  updateProjectAccountKeeper(projectAccountKeeper: AccountKeeperDto) {
    this._licenseDetailsService.projectAccountKeeper$.next(
      projectAccountKeeper
    );
  }
  updateLicenseProjectZones(licenseProjectZones: licenseProjectZones[]) {
    this._licenseDetailsService.licenseProjectZones$.next(licenseProjectZones);
  }
  updateLicenseProjectSubDevelopers(
    licenseProjectSubDevelopers: LicenseProjectSubDeveloperDto[]
  ) {
    this._licenseDetailsService.licenseProjectSubDevelopers$.next(
      licenseProjectSubDevelopers
    );
  }
  updateLicenseProjectServices(
    licenseProjectServices: licenseProjectServices[]
  ) {
    this._licenseDetailsService.licenseProjectServices$.next(
      licenseProjectServices
    );
  }
  updateLicenseProjectRealStateMarketers(
    licenseProjectRealStateMarketers: LicenseProjectRealStateMarketerFullDto[]
  ) {
    this._licenseDetailsService.licenseProjectRealStateMarketers$.next(
      licenseProjectRealStateMarketers
    );
  }
  updateLicenseProjectQuantitiesTableFiles(
    licenseProjectQuantitiesTableFiles: any
  ) {
    this._licenseDetailsService.licenseProjectQuantitiesTableFiles$.next(
      licenseProjectQuantitiesTableFiles
    );
  }
  updateLicenseProjectPlanAccordingApprovedStandardsFiles(
    licenseProjectPlanAccordingApprovedStandardsFiles: licenseProjectPlanAccordingApprovedStandardsFiles[]
  ) {
    this._licenseDetailsService.licenseProjectPlanAccordingApprovedStandardsFiles$.next(
      licenseProjectPlanAccordingApprovedStandardsFiles
    );
  }
  updateLicenseProjectFeasibilityStudies(
    licenseProjectFeasibilityStudies: LicenseProjectFeasibilityStudyFullDto[]
  ) {
    this._licenseDetailsService.licenseProjectFeasibilityStudies$.next(
      licenseProjectFeasibilityStudies
    );
  }
  updateLicenseProjectEngineeringConsultants(
    licenseProjectEngineeringConsultants: LicenseProjectEngineeringConsultantFullDto[]
  ) {
    this._licenseDetailsService.licenseProjectEngineeringConsultants$.next(
      licenseProjectEngineeringConsultants
    );
  }
  updateLicenseProjectDesignFiles(
    licenseProjectDesignFiles: licenseProjectDesignFiles[]
  ) {
    this._licenseDetailsService.licenseProjectDesignFiles$.next(
      licenseProjectDesignFiles
    );
  }
  updateLicenseProjectDeeds(licenseProjectDeeds: ProjectLandDeedDto[]) {
    this._licenseDetailsService.licenseProjectDeeds$.next(licenseProjectDeeds);
  }
  updateLicenseProjectConstructionLicenses(
    licenseProjectConstructionLicenses: licenseProjectConstructionLicenses[]
  ) {
    this._licenseDetailsService.licenseProjectConstructionLicenses$.next(
      licenseProjectConstructionLicenses
    );
  }
  updateLicenseProjectCharteredAccountants(
    licenseProjectCharteredAccountants: LicenseProjectCharteredAccountantFullDto[]
  ) {
    this._licenseDetailsService.licenseProjectCharteredAccountants$.next(
      licenseProjectCharteredAccountants
    );
  }
  updateLicenseProjectAddresses(
    licenseProjectAddresses: licenseProjectAddresses[]
  ) {
    this._licenseDetailsService.licenseProjectAddresses$.next(
      licenseProjectAddresses
    );
  }

  updateLicenseProjectExternalAddresses(
    licenseProjectExternalAddresses: LicenseProjectExternalAddressDto[]
  ) {
    this._licenseDetailsService.licenseProjectExternalAddresses$.next(
      licenseProjectExternalAddresses
    );
  }

  updateLicenseCertificateData(LicenseCerificate: LicenseDetails) {
    let linceseCertificateData = {
      certificateNumber: LicenseCerificate.certificateNumber,
      startOn: LicenseCerificate.startOn,
      endOn: LicenseCerificate.endOn,
    } as CertifiedLicenseDataDto

    this._licenseDetailsService.certifiedLicenseData$.next(
      linceseCertificateData
    );
  }

  updateClientActionsButtons() {
    if (this.selectedRequest) {
      this.clientActionsButtons.map((item: Button) => {
        item.isVisable = this.selectedRequest
          ?.licenseRequestCustomerHeaderEventStatus[
          item.actionType as keyof LicenseRequestCustomerHeaderEventStatus
        ] as boolean;
        item.isDisables = false;
      });
    }
  }

  private openCompilNotesDialog() {
    let Data = {
      id: ButtonType.allowCompile,
      title: 'تسجيل نتيجة دراسة الطلب',
      component: EditorRequestNotesOnlyComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }

  public openCompileConditionalApprovalNotesDialog() {
    let Data = {
      id: ButtonType.allowCompileConditionalApproval,
      title: 'تسجيل نتيجة دراسة الطلب',
      component: EditorRequestNotesComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }

  public openCompileDeedMarginalizationNotesDialog() {
    let Data = {
      id: ButtonType.allowCompileDeedMarginalization,
      title: 'تسجيل نتيجة ملاحظات تهميش الصكوك ',
      component: EditorRequestNotesComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }
  public openCompileOpenBankAccountDialog() {
    let Data = {
      id: ButtonType.allowCompileOpenBankAccount,
      title: 'معالجة ملاحظات فتح حساب بنكي',
      component: EditorRequestNotesComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }
  public openCompileGuaranteeLetterActivationNotesDialog() {
    let Data = {
      id: ButtonType.allowCompileGuaranteeLetterActivation,
      title: 'تسجيل نتيجة ملاحظات تٝعيل حساب الضمان',
      component: EditorRequestNotesComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }
  public openCompileQWTableNotesDialog() {
    this._licenseDetailsService.showTabsButton$.next(false);
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      this.selectedRequest?.licenseProjectId as string
    );
    let Data = {
      id: ButtonType.allowCompileQWTable,
      title: 'تسجيل نتيجة ملاحظات جداول الكميات والأوزان النسبية',
      component: ProjectQuantitiesTableComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }
  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  // popup
  private observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        switch (res.id) {
          case ButtonType.allowCompile:
            this.compile();
            break;
          case ButtonType.allowCompileConditionalApproval:
            this.compileConditionalApproval();
            break;
          case ButtonType.allowCompileDeedMarginalization:
            this.compileDeedMarginalization();
            break;
          case ButtonType.allowCompileOpenBankAccount:
            this.compileOpenBankAccount();
            break;
          case ButtonType.allowCompileGuaranteeLetterActivation:
            this.compileGuaranteeLetterActivation();
            break;
          case ButtonType.allowCompileQWTable:
            this.emitSaveQWTable();
            break;
        }
      })
    );
  }
  private compile() {
    this.subscriptions.push(
      this._licenseDetailsService
        .compile(
          this.selectedRequestID as string,
          this.RequestNotes?.notes as string,
          this.selectedRequest?.licenseRequestCustomerHeaderEventStatus
            .allowCompileId as number
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getLicenseRequestHeaderByRequestId();
            this.showNotificationOFsentNotes();
          }
        })
    );
  }
  private compileConditionalApproval() {
    this.subscriptions.push(
      this._licenseDetailsService
        .compileConditionalApproval(
          this.compileWithLogFilesDto,
          this.selectedRequest?.licenseRequestCustomerHeaderEventStatus
            .allowCompileConditionalApprovalId as number
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getLicenseRequestHeaderByRequestId();
            this.showNotificationOFsentNotes();
          }
        })
    );
  }

  private compileQWTable() {
    this.subscriptions.push(
      this._licenseDetailsService
        .compileQWTable(
          this.selectedRequestID as string,
          this.RequestNotes?.notes as string,
          this.selectedRequest?.licenseRequestCustomerHeaderEventStatus
            .allowCompileQWTableId as number
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getLicenseRequestHeaderByRequestId();
            this.showNotificationOFsentNotes();
          }
        })
    );
  }
  private compileGuaranteeLetterActivation() {
    this.subscriptions.push(
      this._licenseDetailsService
        .compileGuaranteeLetterActivation(
          this.compileWithLogFilesDto,
          this.selectedRequest?.licenseRequestCustomerHeaderEventStatus
            .allowCompileGuaranteeLetterActivationId as number
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getLicenseRequestHeaderByRequestId();
            this.showNotificationOFsentNotes();
          }
        })
    );
  }
  private compileDeedMarginalization() {
    this.subscriptions.push(
      this._licenseDetailsService
        .compileDeedMarginalization(
          this.compileWithLogFilesDto,
          this.selectedRequest?.licenseRequestCustomerHeaderEventStatus
            .allowCompileDeedMarginalizationId as number
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getLicenseRequestHeaderByRequestId();
            this.showNotificationOFsentNotes();
          }
        })
    );
  }
  private compileOpenBankAccount() {
    this.subscriptions.push(
      this._licenseDetailsService
        .compileOpenBankAccount(
          this.compileWithLogFilesDto,
          this.selectedRequest?.licenseRequestCustomerHeaderEventStatus
            .allowCompileDeedMarginalizationId as number
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getLicenseRequestHeaderByRequestId();
            this.showNotificationOFsentNotes();
          }
        })
    );
  }
  private emitDataIsUpdate() {
    this._licenseDetailsService.dataIsUpdate.emit();
  }
  private emitSaveQWTable() {
    this._licenseDetailsService.saveQWTable.emit();
  }
  private showNotificationOFsentNotes() {
    this._toastrService.success('تم إرسال الملاحظات بنجاح!');
  }

  private observeRequestNotes(): void {
    this.subscriptions.push(
      this._requestNotesService.RequestNotes$.subscribe(
        (res: RequestNotesData | null) => {
          if (res) this.RequestNotes = res;
          this.compileWithLogFilesDto.notes = this.RequestNotes
            ?.notes as string;
        }
      )
    );
  }
  private observeFilesIds(): void {
    this.subscriptions.push(
      this._requestNotesService.getFilesIds().subscribe((res: string[]) => {
        if (res.length > 0) {
          res.forEach((id: string) => {
            this.compileWithLogFilesDto.licenseProcessingLogFile.push({
              licenseProcessingLogFileId: id,
              id: '00000000-0000-0000-0000-000000000000',
              licenseRequestProcessingLogId: 0,
            });
          });
        }
      })
    );
  }
  resetDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.resetDataVisibilityOfLicenseProject();
  }
  resetSelectRequest() {
    this._licenseDetailsService.selectRequest$.next(null);
  }
  /**
   * editRequest
 :  */
  public editRequest(): void {
    if (this.selectedRequest) {
      this._sharedLicenseProjectService.setLicenseAvailabilityToUpdateInLocalStorage(
        this.selectedRequest.licenseProject.availabilityToUpdate
      );
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
        this.selectedRequest.licenseProjectId
      );
      this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
        this.selectedRequest.facilityId
      );
      
      this._router.navigate([this.requestDetailsRoute]);
    }
  }

  public editFarz() {
    if (this.selectedRequest) {
      this._sharedLicenseProjectService.setLicenseAvailabilityToUpdateInLocalStorage(
        this.selectedRequest.licenseProject.availabilityToUpdate
      );
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
        this.selectedRequest.licenseProjectId
      );
      this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
        this.selectedRequest.facilityId
      );

      this._router.navigate([this.editFarzNoteRoute]);
    }
  }

  /**
   * Navigate to payment terms and additional terms page
   * Generates draft version before navigation
   */
  public openPaymentTermsModal(): void {
    if (this.selectedRequest) {

        this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
              this.selectedRequest!.licenseProjectId
            );

            const navigationPath = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.paymentTermsTabs}`;
            this._router.navigate([navigationPath]);

      // // Call GenerateDraftVersionForProject API
      // this._projectListService.GenerateDraftVersionForProject(
      //   this.selectedRequest.licenseProjectId
      // ).subscribe({
      //   next: (response) => {
      //     if (response.isDone) {
      //       // Store license project ID and navigate on success
      //       this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      //         this.selectedRequest!.licenseProjectId
      //       );

      //       const navigationPath = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.paymentTermsTabs}`;
      //       this._router.navigate([navigationPath]);

      //       this._toastrService.success('تم إنشاء النسخة المسودة بنجاح');
      //     } else {
      //       // Show error message from API
      //       this._toastrService.error(response.message || 'فشل في إنشاء النسخة المسودة');
      //     }
      //   },
      //   error: (error) => {
      //     // Handle error
      //     console.error('Error generating draft version:', error);
      //     this._toastrService.error('حدث خطأ أثناء إنشاء النسخة المسودة');
      //   }
      // });
    }
  }

  ngOnDestroy(): void {
    this.resetSelectRequest();
    this.resetDataVisibilityOfLicenseProject();
    this._sharedLicenseProjectService.removeLicenseRequestfromLocalStorage();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
