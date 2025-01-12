export const Configuration = {
  languages: ['ar', 'en'],
  defaultLang: 'ar',
  APIs: {
    LicenseProjectRequestLog: {
      GetLicenseProjectRequestLogs: '/api/LicenseProjectRequestLog/GetLicenseProjectRequestLogs',
    },
    LicenseProjectRequestProcessingLog: {
      GetByRequestId: '/api/LicenseProjectRequestProcessingLog/GetByRequestId',
    },
    ComplaintRequest: {
      Create: '/api/ComplaintRequest/CreateAsync',
      GetComplaintRequestTypeList:
        '/api/ComplaintRequest/GetComplaintRequestTypeList',
      GetCustomerComplaintRequestList:
        '/api/ComplaintRequest/GetCustomerComplaintRequestList',
      GetByComplaintRequestId: '/api/ComplaintRequest/GetByComplaintRequestId',
      Delete: '/api/ComplaintRequest/Remove',
    },
    Account: {
      login: '/api/Account/Login',
      LoginWithIAM: '/api/Integration/LoginWithIAM',
      refreshToken: '/api/Account/RefreshToken',
      validateActiveToken: '/api/Account/ValidateActiveToken',
      create: '/api/User/Create',
      ForgetPasswordGenerateOTP: '/api/Account/ForgetPasswordGenerateOTP',
      ForgetPasswordConfirmOTP: '/api/Account/ForgetPasswordConfirmOTP',
      ResetPassword: '/api/Account/ResetPassword',
    },
    Area: {
      GetDropDown: '/api/SysArea/Get',
    },
    Bank: {
      GetDropDown: '/api/SysBank/Get',
    },
    City: {
      GetDropDown: '/api/SysCity/Get',
      GetListWithChambersOfCommerceCityCodeAsync:
        '/api/SysCity/GetListWithChambersOfCommerceCityCodeAsync',
    },
    nationality: {
      GetDropDown: '/api/SysNationality/GetDropDownList',
    },
    LicenseProjectScope: {
      GetDropDown: '/api/SysLicenseProjectScope/Get',
    },
    TimeLineProgramFiles: {
      getById: '/api/LicenseProjectTimeSchedule/GetById',
      GetMainLicenseProjectTimeSchedule:
        '/api/LicenseProjectTimeSchedule/GetMainLicenseProjectTimeSchedule',
      GetLicenseProjectTimeSchedules:
        '/api/LicenseProjectTimeSchedule/GetLicenseProjectTimeSchedules',
      CreateAsync: '/api/LicenseProjectTimeSchedule/CreateAsync',
      CompileAsync: '/api/LicenseProjectTimeSchedule/CompileAsync',
      // addProjectManagerNote : '/api/LicenseProjectTimeSchedule/CompileAsync',
      GetResponsibleEngineerList:
        '/api/LicenseProjectResponsibleEngineer/GetResponsibleEngineerList',
      GetTimeScheduleMonthList:
        '/api/LicenseProjectTimeSchedule/GetTimeScheduleMonthList',
    },

    PlannedEngineerProjectDetails: {
      GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote:
        '/api/EngineeringSupervisionReportProjectDetails/GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote',
      CompilePlannedReport:
        '/api/EngineeringSupervisionReportProjectDetails/CompilePlannedReport',
      SendPlannedReport:
        '/api/EngineeringSupervisionReportProjectDetails/SendPlannedReport',
      GetByLicenseProjectId: '/api/LicenseProjectZone/GetByLicenseProjectId',
      GetLicenseProjectBuildingBlocks:
        '/api/EngineeringSupervisionReportProjectDetails/GetLicenseProjectBuildingBlocks',
      GetLicenseProjectEngineeringProjectZonesBlockesDetailsByYear:
        '/api/EngineeringSupervisionReportProjectDetails/GetLicenseProjectEngineeringProjectZonesBlocksDetailsByYear',
      UpdateLicenseProjectEngineeringProjectZonesBlocksDetailYearly:
        '/api/EngineeringSupervisionReportProjectDetails/UpdateLicenseProjectEngineeringProjectZonesBlocksDetailYearly',
    },
    SysLicenseProjectService: {
      GetDropDown: '/api/SysLicenseProjectService/Get',
    },
    SysLicenseProjectType: {
      GetDropDown: '/api/SysLicenseProjectType/Get',
    },
    SysContributionType: {
      GetDropDown: '/api/SysContributionType/Get',
    },
    SysLicenseProjectServicePeriod: {
      GetDropDown: '/api/SysLicenseProjectServicePeriod/Get',
    },
    SysLicenseProjectLandOwnerDeedType: {
      GetDropDown: '/api/SysLicenseProjectLandOwnerDeedType/Get',
    },
    SysLicenseProjectLandOwnerType: {
      GetDropDown: '/api/SysLicenseProjectLandOwnerType/Get',
    },
    SysLicenseProjectSubUnitType: {
      GetDropDown: '/api/SysLicenseProjectSubUnitType/Get',
    },
    customerDashBoard:
    {
      GetCustomerDashboardData: '/api/DashBoard/GetCustomerDashboardData',
    },
    facility: {
      validate: '/api/Facility/Validate',
      validateCommercialRegister: '/api/Facility/ValidateCommercialRegister',
      Register: '/api/Facility/RegisterAsync',
      GetById: '/api/Facility/GetById',
      update: '/api/Facility/UpdateAsync',
      getDraftRequestByFacilityId: '/api/Facility/GetDraftRequestByFacilityId',
      checkFacilityDataByCRNumber: '/api/Facility/CheckFacilityDataByEmployeeByCRNumber',
      createFacility: '/api/Facility/CreateFacilityByEmployee',
    },
    Customer: {
      Register: '/api/Customer/Register',
      GetById: '/api/Customer/GetById',
      ConfirmEmail: '/api/Customer/ConfirmEmail',
      GetSubCustomers: '/api/Customer/GetSubCustomers',
      GetSubCustomersList: '/api/Customer/GetSubCustomersList',
      UpdateCustomer: '/api/Customer/UpdateCustomer',
      GetCustomerFacilities: '/api/Customer/GetCustomerFacilities',
      GetFacilitySubCustomers: '/api/Customer/GetFacilitySubCustomers',
    },
    RelatedCustomer: {
      Save: '/api/RelatedCustomer/Save',
      GetRelatedCustomerListByFacilityId:
        '/api/RelatedCustomer/GetRelatedCustomerListByFacilityId',
        GetRelatedCustomerList:
        '/api/RelatedCustomer/GetRelatedCustomerList',
      Delete: '/api/RelatedCustomer/Remove',
    },
    Contact: {
      Update: '/api/Contact/Update',
    },
    QualificationFacilityServiceProvidersCertificateNumber: {
      GetFacilityById:
        '/api/QualificationFacilityServiceProvidersCertificateNumber/GetFacilityById',
    },
    Commissioners: {
      //  GetAllCommissioners : 'api/SysRegistrationRequest/GetRegisterationRequests',
      //  Delete : 'api/SysRegistrationRequest/Delete',
      //  Update : 'api/SysRegistrationRequest/Update',
      //  Add: 'api/SysRegistrationRequest/Add',
      //  GetById : 'api/SysRegistrationRequest/GetById',
    },

    RegistrationRequest: {
      GetRegisterationRequests:
        '/api/SysRegistrationRequest/GetRegisterationRequests',
      Delete: '/api/SysRegistrationRequest/Delete',
      Update: '/api/SysRegistrationRequest/Update',
      Add: '/api/SysRegistrationRequest/Add',
      GetById: '/api/SysRegistrationRequest/GetById',
    },
    QualificationQualifiedEngineer: {
      GetFacilityById: '/api/QualificationQualifiedEngineer/GetFacilityById',
      Create: '/api/QualificationQualifiedEngineer/Create',
      Update: '/api/QualificationQualifiedEngineer/Update',
      GetById: '/api/QualificationQualifiedEngineer/GetById',
      Save: '/api/QualificationQualifiedEngineer/Save',
      Delete: '/api/QualificationQualifiedEngineer/Remove',
    },
    QualificationCertifiedEngineer: {
      GetFacilityById: '/api/QualificationCertifiedEngineer/GetFacilityById',
      Create: '/api/QualificationCertifiedEngineer/Create',
      Update: '/api/QualificationCertifiedEngineer/Update',
      GetById: '/api/QualificationCertifiedEngineer/GetById',
      Save: '/api/QualificationCertifiedEngineer/Save',
      Delete: '/api/QualificationCertifiedEngineer/Remove',
    },
    QualificationFacilityCertification: {
      GetByFacilityId:
        '/api/QualificationFacilityCertification/GetByFacilityId',
      Create: '/api/QualificationFacilityCertification/Create',
      Update: '/api/QualificationFacilityCertification/Update',
      GetById: '/api/QualificationFacilityCertification/GetById',
      Save: '/api/QualificationFacilityCertification/Save',
      Delete: '/api/QualificationFacilityCertification/Remove',
    },
    QualificationFinancialCapabilityRequirement: {
      GetByFacilityId:
        '/api/QualificationFinancialCapabilityRequirement/GetByFacilityId',
      Create: '/api/QualificationFinancialCapabilityRequirement/Create',
      Update: '/api/QualificationFinancialCapabilityRequirement/Update',
      GetById: '/api/QualificationFinancialCapabilityRequirement/GetById',
      Save: '/api/QualificationFinancialCapabilityRequirement/Save',
    },
    QualificationIssuesDocument: {
      GetByFacilityId: '/api/QualificationIssuesDocument/GetByFacilityId',
    },
    InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources: {
      GetByFacilityId:
        '/api/QualificationAdditionInstitutionalCapacityAndHrRequirement/GetByFacilityId',
      Create:
        '/api/QualificationAdditionInstitutionalCapacityAndHrRequirement/Create',
      Update:
        '/api/QualificationAdditionInstitutionalCapacityAndHrRequirement/Update',
      GetById:
        '/api/QualificationAdditionInstitutionalCapacityAndHrRequirement/GetById',
      Save: '/api/QualificationAdditionInstitutionalCapacityAndHrRequirement/Save',
    },
    QualificationQualifiedAccountant: {
      GetFacilityById: '/api/QualificationQualifiedAccountant/GetByFacilityId',
      Create: '/api/QualificationQualifiedAccountant/Create',
      Update: '/api/QualificationQualifiedAccountant/Update',
      GetById: '/api/QualificationQualifiedAccountant/GetById',
      Save: '/api/QualificationQualifiedAccountant/Save',
      Delete: '/api/QualificationQualifiedAccountant/Remove',
    },
    QualificationRealEstateMarketerRequirement: {
      GetByFacilityId:
        '/api/QualificationRealEstateMarketerRequirement/GetByFacilityId',
    },
    QualificationAdditionTechnicalCapabilitiesRequirement: {
      GetByFacilityId:
        '/api/QualificationAdditionTechnicalCapabilitiesRequirement/GetByFacilityId',
      Create:
        '/api/QualificationAdditionTechnicalCapabilitiesRequirement/Create',
      Update:
        '/api/QualificationAdditionTechnicalCapabilitiesRequirement/Update',
      GetById:
        '/api/QualificationAdditionTechnicalCapabilitiesRequirement/GetById',
      Save: '/api/QualificationAdditionTechnicalCapabilitiesRequirement/Save',
    },
    QualificationInstitutionalCapacityAndHrRequirement: {
      GetByFacilityId:
        '/api/QualificationInstitutionalCapacityAndHrRequirement/GetByFacilityId',
      GetById:
        '/api/QualificationInstitutionalCapacityAndHrRequirement/GetById',
      Save: '/api/QualificationInstitutionalCapacityAndHrRequirement/Save',
    },
    QualificationWafiTraining: {
      GetByFacilityId: '/api/QualificationWafiTraining/GetByFacilityId',
      GetById: '/api/QualificationWafiTraining/GetById',
      Save: '/api/QualificationWafiTraining/Save',
    },
    QualificationNationalAddressDetail: {
      GetByFacilityId:
        '/api/QualificationNationalAddressDetail/GetByFacilityId',
      Save: '/api/QualificationNationalAddressDetail/Save',
      GetById: '/api/QualificationNationalAddressDetail/GetById',
    },
    FileManagment: {
      UploadMultiple: '/api/FileManagment/UploadMultiple',
      DeletFile: '/api/FileManagment/RemoveFile',
      RemoveRange: '/api/FileManagment/RemoveRange',
    },
    QualificationTechnicalCapabilitiesRequirement: {
      GetByFacilityId:
        '/api/QualificationTechnicalCapabilitiesRequirement/GetByFacilityId',
      Save: '/api/QualificationTechnicalCapabilitiesRequirement/Save',
    },
    QualificationProject: {
      Save: '/api/QualificationProject/Save',
      Delete: '/api/QualificationProject/Delete',
    },
    ProjectCategory: {
      GetAllSysProjectCategoryAsync:
        '/api/SysProjectCategory/GetAllSysProjectCategoryAsync',
      Get: '/api/SysProjectCategory/Get',
    },
    ProjectSubCategory: {
      Get: '/api/SysProjectSubCategory/Get',
    },
    ProjectType: {
      Get: '/api/ProjectType/Get',
    },
    QualificationSocialInsuranceEmployeeList: {
      GetLockupList:
        '/api/QualificationSocialInsuranceEmployeeList/GetLockupList',
      getByFacilityId:
        '/api/QualificationSocialInsuranceEmployeeList/GetByFacilityId',
    },
    QualificationServiceRequest: {
      Create: '/api/QualificationServiceRequest/Create',
      Renew: '/api/QualificationServiceRequest/Renew',
      Compile: '/api/QualificationServiceRequest/Compile',
    },

    SysQualificationType: {
      GetShowForWafiByCode: '/api/SysQualificationType/GetShowForWafiByCode',
      GetShowForRealStateContributionByCode:
        '/api/SysQualificationType/GetShowForRealStateContributionByCode',
    },
    QualificationRequestLog: {
      GetByRequestId: '/api/QualificationRequestLog/GetByRequestId',
    },
    QualificationRequestHeader: {
      GetExpiredQualificationPagingList:
        '/api/QualificationRequestHeader/GetExpiredQualificationPagingList',
      GetQualificationRequestsByCustomerId:
        '/api/QualificationRequestHeader/GetQualificationRequestsByCustomerId',
      GetQualificationRequests:
        '/api/QualificationRequestHeader/GetQualificationRequests',
      GetFacilityByRequestId:
        '/api/QualificationRequestHeader/GetFacilityByRequestId',
      getRequestByCode:
        '/api/QualificationRequestHeader/GetQualificationRequestByRequestCode',
      GetQualificationDegree:
      '/api/QualificationRequestHeader/GetQualificationDegree',

    },
    QualificationRequestProcessingLog: {
      GetByRequestId: '/api/QualificationRequestProcessingLog/GetByRequestId',
    },
    SysTemplate: {
      getCertificatesByCustomerId:
        '/api/SysTemplate/GetCertificatesByCustomerId',
      getCertificateByRequestId: '/api/SysTemplate/GetCertificateByRequestId',
    },
    LicenseProjectFeasibilityStudy: {
      GetByLicenseProjectId:
        '/api/LicenseProjectFeasibilityStudy/GetByLicenseProjectId',
      Save: '/api/LicenseProjectFeasibilityStudy/Save',
    },
    LicenseProjectRequestAttachment: {
      GetByLicenseProjectId:
        '/api/LicenseProjectRequestAttachment/GetByLicenseProjectId',
      Save: '/api/LicenseProjectRequestAttachment/Save',
    },
    LicenseProjectDeveloper: {
      GetByLicenseProjectId:
        '/api/LicenseProjectDeveloper/GetByLicenseProjectId',
      Save: '/api/LicenseProjectDeveloper/Save',
    },
    LicenseProjectPromissoryNote: {
      GetByLicenseProjectId:
        '/api/LicenseProjectPromissoryNote/GetByLicenseProjectId',
      Save: '/api/LicenseProjectPromissoryNote/Save',
    },
    LicenseProjectMainRealStateDevelopers: {
      GetByLicenseProjectId:
        '/api/LicenseProjectMainRealStateDevelopers/GetByLicenseProjectId',
      Save: '/api/LicenseProjectMainRealStateDevelopers/Save',
    },
    EngineeringSupervisionReportInfrastructure: {
      GetLicenseProjectEngineeringInfrastructureRates:
        '/api/EngineeringSupervisionReportInfrastructure/GetLicenseProjectEngineeringInfrastructureRates',
      SaveLicenseProjectEngineeringInfrastructureRates:
        '/api/EngineeringSupervisionReportInfrastructure/SaveLicenseProjectEngineeringInfrastructureRates',
      GetEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly:
        '/api/EngineeringSupervisionReportInfrastructure/GetEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly',
    },
    EngineeringSupervisionReportActualProjectStatusSummary: {
      GetActualProjectStatusDetails:
        '/api/EngineeringSupervisionReportActualProjectStatusSummary/GetActualProjectStatusDetails',
      GetActualProjectStatusMonthDetails:
        '/api/EngineeringSupervisionReportActualProjectStatusSummary/GetActualProjectStatusMonthDetails',
      SaveLicenseProjectEngineeringActualReportMonthDetails:
        '/api/EngineeringSupervisionReportActualProjectStatusSummary/SaveLicenseProjectEngineeringActualReportMonthDetails',
    },
    EngineeringSupervisionReportProjectStatusSummary: {
      GetLicenseProjectEngineeringSupervisionPlannedDetailsByLicenseProjectId:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringSupervisionPlannedDetailsByLicenseProjectId',
      GetLicenseProjectEngineeringCompletionAndEmploymentRates:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringCompletionAndEmploymentRates',
      SaveLicenseProjectEngineeringCompletionAndEmploymentRates:
        '/api/EngineeringSupervisionReportProjectStatusSummary/SaveLicenseProjectEngineeringCompletionAndEmploymentRates',
      GetLicenseProjectEngineeringDataTapStatus:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringDataTapStatus',
      GetLicenseProjectEngineeringDetails:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringDetails',
      SaveLicenseProjectEngineeringDetails:
        '/api/EngineeringSupervisionReportProjectStatusSummary/SaveLicenseProjectEngineeringDetails',
    },
    LicenseProjectQualityNoticeReply: {
      GetRepliesByQualityNoticId:
        '/api/LicenseProjectQualityNoticeReply/GetRepliesByQualityNoticId',
      AddReplayFromProjectManger:
        '/api/LicenseProjectQualityNoticeReply/AddReplayFromProjectManger',
    },
    LicenseProjectQualityNotice: {
      CheckAddingReplingByQualityNoticeId:
        '/api/LicenseProjectQualityNotice/CheckAddingReplingByQualityNoticeId',
      GetLicenseProjectQualityNotices:
        '/api/LicenseProjectQualityNotice/GetLicenseProjectQualityNotices',
      GetLicenseProjectQualityNoticeById:
        '/api/LicenseProjectQualityNotice/GetLicenseProjectQualityNoticeById',
    },
    ProjectBusinessCaseReport: {
      GetProjectBusinessCaseReportById: '/api/ProjectBusinessCaseReport/GetProjectBusinessCaseReportById',
      GetProjectBusinessCaseReportList:
        '/api/ProjectBusinessCaseReport/GetProjectBusinessCaseReportList',
      Save:
        '/api/ProjectBusinessCaseReport/Save',
    },
    ProjectBusinessCaseReportNote: {

      AddNotesFromProjectManger: '/api/ProjectBusinessCaseReportNote/AddNotesFromProjectManger'
    },
    LicenseProjectInfrastructureNetworksStatus: {
      Save: '/api/LicenseProjectInfrastructureNetworksStatus/Save',
      GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId:
        '/api/LicenseProjectInfrastructureNetworksStatus/GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId',
      GetLicenseInfrastructureElement:
        '/api/LicenseProjectInfrastructureNetworksStatus/GetLicenseInfrastructureElement',
      Delete: '/api/LicenseProjectInfrastructureNetworksStatus/Remove',
    },
    ActualValuesReport: {
      GetActualValueReportLookUpList:
        '/api/ActualValuesReport/GetActualValueReportLookUpList',
      GetRequiredSupervisionMonthsList:
        '/api/ActualValuesReport/GetRequiredSupervisionMonthsList',
      UpdateMonthSubmitted:
        '/api/ActualValuesReport/UpdateMonthSubmitted',
    },
    QualityAndBusinessProgress: {
      GetLicenseProjectEngineeringMonthlyConsultantStaffRates:
        '/api/EngineeringSupervisionReportQualityandBusinessProgress/GetLicenseProjectEngineeringMonthlyConsultantStaffRates',
      GetlicenseProjectRelativeWeightList:
        '/api/EngineeringSupervisionReportQualityandBusinessProgress/GetlicenseProjectRelativeWeightList',
      GetLicenseProjectEngineeringRelativeWeight:
        '/api/EngineeringSupervisionReportQualityandBusinessProgress/GetLicenseProjectEngineeringRelativeWeight',
      SavelicenseProjectRelativeWeightRates:
        '/api/EngineeringSupervisionReportQualityandBusinessProgress/SavelicenseProjectRelativeWeightRates',
      SaveLicenseProjectEngineeringMonthlyConsultantStaffRates:
        '/api/EngineeringSupervisionReportQualityandBusinessProgress/SaveLicenseProjectEngineeringMonthlyConsultantStaffRates',
    },
    // ------ Begin of License Endpoints ------
    LicenseProjectBeneficiaryContractFormAdditionalTerms: {
      GetAllAdditionalAsync:
        '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/GetAllAdditionalAsync',
      Save: '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/Save',
      Delete:
        '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/Remove',
    },
    licenseProjectDelegator: {
      GetLicenseProjectByIdAsync:
        '/api/LicenseProjectDelegator/GetLicenseProjectByIdAsync',
      GetByLicenseProjectId:
        '/api/LicenseProjectDelegator/GetByLicenseProjectId',
      Save: '/api/LicenseProjectDelegator/Save',
      Delete: '/api/LicenseProjectDelegator/Remove',
    },
    VisitorEngineeringConsultant: {
      GetByLicenseProjectId:
        '/api/LicenseProjectVisitorEngineeringConsultant/GetByLicenseProjectId',
      Save: '/api/LicenseProjectVisitorEngineeringConsultant/Save',
    },
    LicenseProjectExhibition: {
      GetByLicenseProjectId:
        '/api/LicenseProjectExhibition/GetByLicenseProjectId',
      Save: '/api/LicenseProjectExhibition/Save',
    },
    LicenseProject: {
      GetLicenseProjectById: '/api/LicenseProject/GetLicenseProjectById',
      GetLicenseProjectByFacilityId: '/api/LicenseProjectService/GetLicenseProjectByFacilityId/',
      GetLicenseProjectByType: '/api/LicenseProjectRequest/GetLicenseProjectsByType',
      UpdateProjectManagerOnProject:
        '/api/LicenseProject/UpdateProjectManagerOnProject',
      GetEngineeringConsultantProjectsList:
        '/api/LicenseProject/GetEngineeringConsultantProjectsList',
      GetAccountKeeperDetailsByLicenseProjectId:
        '/api/LicenseProject/GetAccountKeeperDetailsByLicenseProjectId',
      GetProjectRealStateDeveloperByLicenseProjectId:
        '/api/LicenseProject/GetProjectRealStateDeveloperByLicenseProjectId',
      GetById: '/api/LicenseProject/GetById',
      SaveAccountKeeperDetails: '/api/LicenseProject/SaveAccountKeeperDetails',
      SaveProjectRealStateDeveloper:
        '/api/LicenseProject/SaveProjectRealStateDeveloper',
      SaveMainData: '/api/LicenseProject/SaveMainData',
      SaveLandData: '/api/LicenseProject/SaveLandData',
      SaveProjectDocumentData:
        '/api/LicenseProject/SaveProjectDocumentDataAsync',
      GetProjectDocumentDataByLicenseProjectId:
        '/api/LicenseProject/GetProjectDocumentDataByLicenseProjectId',
      SaveExternalProjectData:
        '/api/LicenseProject/SaveExternalProjectDataAsync',
      GetExternalProjectDataByLicenseProjectId:
        '/api/LicenseProject/GetExternalProjectDataByLicenseProjectId',
      GetMainDataByLicenseProjectId:
        '/api/LicenseProject/GetMainDataByLicenseProjectId',
      GetLandDataByLicenseProjectId:
        '/api/LicenseProject/GetLandDataByLicenseProjectId',
      GetProjectApprovalsByProjectId:
        '/api/LicenseProject/GetProjectApprovalsByProjectId',
      GetBankingAccountByLicenseProjectId:
        '/api/LicenseProject/GetBankingAccountByLicenseProjectId',
      SaveBankingAccounAsync: '/api/LicenseProject/SaveBankingAccounAsync',
      GetRealEstateContributionFilesByLicenseProjectId:
        '/api/LicenseProject/GetRealEstateContributionFilesByLicenseProjectId',
      SaveRealEstateContributionFiles:
        '/api/LicenseProject/SaveRealEstateContributionFiles',
      GetContributionDataByLicenseProjectId:
        '/api/LicenseProject/GetContributionDataByLicenseProjectId',
      SaveContributionData: '/api/LicenseProject/SaveContributionData',
      GetRequetType: '/api/LicenseProject/GetRequetType',
    },
    LicenseProjectExchangeDocument:{
      GetExchangeDocumentOnProject:
        '/api/LicenseProjectExchangeDocument/GetExchangeDocumentOnProject',
        Save:
        '/api/LicenseProjectExchangeDocument/Save',
        GetLicenseProjectExchangeDocumentDetail:
        '/api/LicenseProjectExchangeDocument/GetLicenseProjectExchangeDocumentDetail',
        GetExchangeDocumentMainItemList:
        '/api/LicenseProjectExchangeDocument/GetExchangeDocumentMainItemList',
        GetExchangeDocumentSubItemList:
        '/api/LicenseProjectExchangeDocument/GetExchangeDocumentSubItemList',
        GetLiceneProjectBeneficiaryTypeList:
        '/api/LicenseProjectExchangeDocument/GetLiceneProjectBeneficiaryTypeList',
        GetLicenseProjectData:'/api/LicenseProjectExchangeDocument/GetLicenseProjectData',
    },
    PeriodicCharteredAccountantReport:{
      Save:
      '/api/PeriodCharteredAccountantReport/Save',
      CreatePeriodicCharteredAccountantReport:
      '/api/PeriodCharteredAccountantReport/CreatePeriodicCharteredAccountantReport',
      GetPeriodicCharteredAccountantReportQuarterTypes:
      '/api/PeriodCharteredAccountantReport/GetPeriodicCharteredAccountantReportQuarterTypes',
      GetPeriodicCharteredAccountantReportTypes:
      '/api/PeriodCharteredAccountantReport/GetPeriodicCharteredAccountantReportTypes',
    },
    LicenseProjectBuyer:{
      GetBuyersOnProject:
        '/api/LicenseProjectBuyer/GetBuyersOnProject',
        Save:
        '/api/LicenseProjectBuyer/Save',
        CancelLicenseProjectBuyer:
        '/api/LicenseProjectBuyer/CancelLicenseProjectBuyer',
        Delete: '/api/LicenseProjectBuyer/Remove',
        GetFacilityQualificationTypeCode:
        '/api/LicenseProjectBuyer/GetFacilityQualificationTypeCode',
        GetContracts:
        '/api/LicenseProjectBuyer/GetContracts',
        AcceptOrRejectOrRecoverBuyerContract:
        '/api/LicenseProjectBuyer/AcceptOrRejectOrRecoverBuyerContract',
        GetProjectBlockAndBuildingList:
        '/api/LicenseProjectBuyer/GetProjectBlockAndBuildingList',
        GetProjectUnitesList:
        '/api/LicenseProjectBuyer/GetProjectUnitesList',
        GetLicenseProjectBuyerDetail:'/api/LicenseProjectBuyer/GetLicenseProjectBuyerDetail',
        GetBuyerSettings:
        '/api/LicenseProjectBuyer/GetBuyerSettings',
        GetBuyersBylicenseProjectId: 
        '/api/LicenseProjectBuyer/GetBuyersBylicenseProjectId',
        GetBuyersDetailByNIDNumber: 
        '/api/LicenseProjectBuyer/GetBuyersDetailByNIDNumber',

    },
    SupervisionFollowupCostsRatio:{
      getSupervisionFollowupCostsRatio:"/api/SupervisionFollowupCostsRatio/getSupervisionFollowupCostsRatio"
    },
    LicenseProjectBuyerPaymentType:{
      Get:"/api/LicenseProjectBuyerPaymentType/Get"
    },
    LicenseProjectDeposits:{
      GetLicenseProjectDeposits: '/api/LicenseProjectDeposits/GetLicenseProjectDeposits',
      GetById: '/api/LicenseProjectDeposits/GetById',
      GetAccountNumber: '/api/LicenseProjectDeposits/GetAccountNumber',
      Save: '/api/LicenseProjectDeposits/SaveLicenseDepositDocument',
      Update: '/api/LicenseProjectDeposits/UpdateLicenseDepositDocument',
      GetMainItems: '/api/SysLicenseProjectDepositMainItems/GetMainItems',
    },
    LicenseCertificateTemplate:{
      GetLicenseCertificateTemplateList:
        '/api/LicenseCertificateTemplate/GetLicenseCertificateTemplateList',
        GetlicenseCertificateUnitList:
        '/api/LicenseCertificateTemplate/GetlicenseCertificateUnitList',
        GetByLicenseCertificateTemplateId:
        '/api/LicenseCertificateTemplate/GetByLicenseCertificateTemplateId',
        Save:
        '/api/LicenseCertificateTemplate/Save',
        AddLicenseCertificateUnit:
        '/api/LicenseCertificateTemplate/AddLicenseCertificateUnit',
        RemoveLicenseCertificateUnitAsync:
        '/api/LicenseCertificateTemplate/RemoveLicenseCertificateUnitAsync',
    },
    LicenseProjectDesignFile: {
      GetDesignFilesByLicenseProjectId:
        '/api/LicenseProjectDesignFile/GetDesignFilesByLicenseProjectId',
      SaveDesignFilesForProjectLicenseAsync:
        '/api/LicenseProjectDesignFile/SaveDesignFilesForProjectLicenseAsync',
    },
    LicenseProjectAnnualBalanceSheet: {
      Save: '/api/LicenseProjectAnnualBalanceSheet/Save',
      GetByFeasibilityStudyId:
        '/api/LicenseProjectAnnualBalanceSheet/GetByFeasibilityStudyId',
      Delete: '/api/LicenseProjectAnnualBalanceSheet/Remove',
    },
    LicenseProjectAnnualCashFlow: {
      Save: '/api/LicenseProjectAnnualCashFlow/Save',
      GetByFeasibilityStudyId:
        '/api/LicenseProjectAnnualCashFlow/GetByFeasibilityStudyId',
      Delete: '/api/LicenseProjectAnnualCashFlow/Remove',
    },
    LicenseProjectExpectedFundingSource: {
      Save: '/api/LicenseProjectExpectedFundingSource/Save',
      GetByFeasibilityStudyId:
        '/api/LicenseProjectExpectedFundingSource/GetByFeasibilityStudyId',
      Delete: '/api/LicenseProjectExpectedFundingSource/Remove',
    },
    LicenseProjectExpectedIncome: {
      Save: '/api/LicenseProjectExpectedIncome/Save',
      GetByFeasibilityStudyId:
        '/api/LicenseProjectExpectedIncome/GetByFeasibilityStudyId',
      Delete: '/api/LicenseProjectExpectedIncome/Remove',
    },
    LicenseProjectFinancialIndicator: {
      Save: '/api/LicenseProjectFinancialIndicator/Save',
      GetByFeasibilityStudyId:
        '/api/LicenseProjectFinancialIndicator/GetByFeasibilityStudyId',
      Delete: '/api/LicenseProjectFinancialIndicator/Remove',
    },
    LicenseProjectFinancialStatement: {
      Save: '/api/LicenseProjectFinancialStatement/SaveFinancialStatement',
      GetByLicenseProjectId:
        '/api/LicenseProjectFinancialStatement/GetByLicenseProjectId',
    },
    
    SysYear: {
      GetAll: '/api/SysYear/Get',
    },
    SysFundingType: {
      GetAll: '/api/SysFundingType/Get',
    },
    LicenseProjectAddress: {
      GetByLicenseProjectId: '/api/LicenseProjectAddress/GetByLicenseProjectId',
      GetById: '/api/LicenseProjectAddress/GetById',
      Save: '/api/LicenseProjectAddress/Save',
    },
    LicenseProjectExternalAddress: {
      GetLicenseProjectExternalAddressByLicenseProjectId:
        '/api/LicenseProjectExternalAddress/GetLicenseProjectExternalAddressByLicenseProjectId',
      Save: '/api/LicenseProjectExternalAddress/Save',
    },
    LicenseProjectConstructionLicense: {
      GetByLicenseProjectId:
        '/api/LicenseProjectConstructionLicense/GetByLicenseProjectId',
      Save: '/api/LicenseProjectConstructionLicense/Save',
      ValidateLicenseNumberFromBaladyIntegration:
        '/api/LicenseProjectConstructionLicense/ValidateLicenseNumberFromBaladyIntegration',
      Delete: '/api/LicenseProjectConstructionLicense/Remove',
    },
    PeriodCharteredAccountantReport:{
      GetExchangeDocumentOnProject:'/api/PeriodCharteredAccountantReport/GetExchangeDocumentOnProject',
      GetPeriodicCharteredAccountantReportDetail:'/api/PeriodCharteredAccountantReport/GetPeriodicCharteredAccountantReportDetail',
      CreateExcel:'/api/PeriodCharteredAccountantReport/CreateExcel',
    },
    LicenseProjectDeed: {
      GetByLicenseProjectId: '/api/LicenseProjectDeed/GetByLicenseProjectId',
      Save: '/api/LicenseProjectDeed/SaveData',
      SaveDeedData: '/api/LicenseProjectDeed/SaveDeedData',
      UpdateDeedOwners: '/api/LicenseProjectDeed/UpdateDeedOwners',
      ValidateDeedInfoByNumber:
        '/api/LicenseProjectDeed/ValidateDeedInfoByNumber',
      Delete: '/api/LicenseProjectDeed/Remove',
    },
    LicenseProjectQuantitiesTableFiles: {
      GetByLicenseProjectId:
        '/api/LicenseProjectQuantitiesTableFiles/GetByLicenseProjectId',
      Save: '/api/LicenseProjectQuantitiesTableFiles/Save',
    },
    LicenseProjectRelativeWeight: {
      GetByLicenseProjectId:
        '/api/LicenseProjectRelativeWeight/GetByLicenseProjectId',
      Save: '/api/LicenseProjectRelativeWeight/Save',
    },
     SysLicenseRelativeWeight: {
      Get: '/api/SysLicenseRelativeWeight/Get',
    }, 
    LicenseProjectLandOwner: {
      GetByDeedId: '/api/LicenseProjectLandOwner/GetByDeedId',
      GetByLicenseProjectId:
        '/api/LicenseProjectLandOwner/GetByLicenseProjectId',
      SaveListOfDeedOwners: '/api/LicenseProjectLandOwner/SaveListOfDeedOwners',
      Save: '/api/LicenseProjectLandOwner/Save',
      Delete: '/api/LicenseProjectLandOwner/Remove',
      ApproveOwnerAgreement:
        '/api/LicenseProjectLandOwner/ApproveOwnerAgreement',
      GetLicenseProjectLandOwnerInfo:
        '/api/LicenseProjectLandOwner/GetLicenseProjectLandOwnerInfo',
    },
    LicenseProjectModel: {
      GetByProjectUnitId: '/api/LicenseProjectModel/GetByProjectUnitId',
      GetByLicenseProjectId: '/api/LicenseProjectModel/GetByLicenseProjectId',
      GetByProjectSubUnitId: '/api/LicenseProjectModel/GetByProjectSubUnitId',
      GetDropDown: '/api/LicenseProjectModel/Get',
      Save: '/api/LicenseProjectModel/Save',
      Delete: '/api/LicenseProjectModel/Remove',
    },
    LicenseProjectSubUnit: {
      GetByLicenseProjectId: '/api/LicenseProjectSubUnit/GetByLicenseProjectId',
      SaveLicenseProjectSubUnitsAsync:
        '/api/LicenseProjectSubUnit/SaveLicenseProjectSubUnitsAsync',
      DeleteLicenseProjectSubUnitsAsync:
        '/api/LicenseProjectSubUnit/DeleteLicenseProjectSubUnitsAsync',
      GetLicenseProjectSubUnitsByLicenseProjectId:
        '/api/LicenseProjectSubUnit/GetLicenseProjectSubUnitsByLicenseProjectId',
    },
    LicenseProjectService: {
      GetByLicenseProjectId: '/api/LicenseProjectService/GetByLicenseProjectId',
      Save: '/api/LicenseProjectService/Save',
      Delete: '/api/LicenseProjectService/Remove',
    },
    LicenseProjectEngineeringConsultant: {
      baseUrl: '/api/LicenseProjectEngineeringConsultant/',
      Create: 'Create',
      //ValidateCommercialRegister: 'ValidateCommercialRegister',
      Get: 'GetById',
      Update: 'Update',
      Delete: 'Remove',
      TakeAction: 'TakeAction',
      GetnumberOfMonths:
        '/api/LicenseProjectEngineeringConsultant/GetnumberOfMonthsAsync',
    },
    LicenseProjectRealStateMarketer: {
      baseUrl: '/api/LicenseProjectRealStateMarketer/',
      Create: 'CreateAsync',
      Get: 'GetById',
      Update: 'UpdateAsync',
      Delete: 'DeleteAsync',
      TakeAction: 'TakeAction',
    },
    LicenseProjectSubDeveloper: {
      baseUrl: '/api/LicenseProjectSubDeveloper/',
      Create: 'Create',
      Get: 'GetById',
      Update: 'Update',
      Delete: 'Remove',
      TakeAction: 'TakeAction',
    },
    LicenseProjectCharteredAccountant: {
      baseUrl: '/api/LicenseProjectCharteredAccountant/',
      Create: 'Create',
      Update: 'UpdateData',
      Delete: 'Remove',
      Get: 'GetByLicenseProjectId',
      TakeAction: 'TakeAction',
      GetLicenseProjectList: 'GetLicenseProjectList'
    },
    SysLicenseRequestType: {
      GetShowForWafiByCode: '/api/SysLicenseRequestType/GetShowForWafiByCode',
      GetShowForRealStateContributionByCode:
        '/api/SysLicenseRequestType/GetShowForRealStateContributionByCode',
      GetAllGroupingLicense: '/api/SysLicenseRequestType/GetAllGroupingLicense',
      Get: '/api/SysLicenseBeneficiaryContractForm/Get',
      GetAllLicenseTypes: '/api/SysLicenseRequestType/Get',
      GetLicenseRequestTypes: '/api/SysLicenseRequestType/GetLicenseRequestTypes',
      // GetRenewalLicenseRequestType: "/api/SysLicenseRequestType/GetRenewalLicenseRequestType"
    },

    realestatecontributionslicense: {
      GetAllGroupingrealstateContributionLicense:
        '/api/SysLicenseRequestType/GetAllGroupingRealStateContributionLicense',
    },

    SysLicenseBeneficiaryContractForm: {
      GetLicenseBeneficiaryContractForm:
        '/api/SysLicenseBeneficiaryContractForm/GetLicenseBeneficiaryContractForm',
      UpdateLicenseBeneficiaryContractForm:
        '/api/SysLicenseBeneficiaryContractForm/UpdateLicenseBeneficiaryContractForm',
      Get: '/api/SysLicenseBeneficiaryContractForm/Get',
    },
    licenseProjectZone: {
      Save: '/api/LicenseProjectZone/Save',
      GetByLicenseProjectId: '/api/LicenseProjectZone/GetByLicenseProjectId',
      Delete: '/api/LicenseProjectZone/Remove',
    },
    LicenseRequestService: {
      Create: '/api/LicenseRequestService/Create',
      renew: '/api/LicenseRequestService/Renew',
      Send: '/api/LicenseRequestService/Send',
      SendByProjectId: '/api/LicenseRequestService/SendByProjectId',
      Compile: '/api/LicenseRequestService/Compile',
      CompileConditionalApproval:
        '/api/LicenseRequestService/CompileConditionalApproval',
      CompileQWTable: '/api/LicenseRequestService/CompileQWTable',
      CompileGuaranteeLetterActivation:
        '/api/LicenseRequestService/CompileGuaranteeLetterActivation',
      CompileDeedMarginalization:
        '/api/LicenseRequestService/CompileDeedMarginalization',
      CompileOpenBankAccount:
        '/api/LicenseRequestService/CompileOpenBankAccount',

      GetApprovals: '/api/LicenseRequestService/GetApprovals',
      GetApproval: '/api/LicenseRequestService/GetApproval',
      SaveApproval: '/api/LicenseRequestService/SaveApproval',
      UpdateApproval: '/api/LicenseRequestService/UpdateApproval',
      Renew: '/api/LicenseRequestService/Renew',
    },
    LicenseRequestHeader: {
      GetEmployeeUnderStudingLicenseRequests:
      '/api/LicenseRequestHeader/GetEmployeeUnderStudingLicenseRequests',
      GetExpiredProjectLicensesPagingList:
        '/api/LicenseRequestHeader/GetExpiredProjectLicensesPagingList',
      GetFacilityByRequestId:
        '/api/LicenseRequestHeader/GetFacilityByRequestId',
        GetFacilityByProcessingRequestData:
        '/api/LicenseRequestHeader/GetFacilityByProcessingRequestData',
      GetLicenseRequestsByCustomerId:
        '/api/LicenseRequestHeader/GetLicenseRequestsByCustomerId',
      GetLicenseRequests: '/api/LicenseRequestHeader/GetLicenseRequests',
      GetCertifiedLicenseData: '/api/LicenseRequestHeader/GetCertifiedLicenseData',
      UpdateCertifiedLicenseData: '/api/LicenseRequestHeader/UpdateCertifiedLicenseData',
      GetLicenseRequestsByEmployeeId: '/api/LicenseRequestHeader/GetLicenseRequestsByEmployeeId',
      GetLicenseRequestHeadersByLicenseProjectId:
        '/api/LicenseRequestHeader/GetLicenseRequestHeadersByLicenseProjectId',
      GetLicenseRequestHeaderTimeLine:
        '/api/LicenseRequestHeader/GetLicenseRequestHeaderTimeLine',
      Delete: '/api/LicenseRequestHeader/Remove',
    },
    LicenseProjectUnit: {
      Save: '/api/LicenseProjectUnit/Save',
      GetByLicenseProjectId: '/api/LicenseProjectUnit/GetByLicenseProjectId',
      GetByZoneId: '/api/LicenseProjectUnit/GetByZoneId',
      Delete: '/api/LicenseProjectUnit/Remove',
    },
    LincenseProjectRequest: {
      GetLincenseRequestProject: '/api/LicenseProjectRequest/GetLicenseProjectsRequestService',
      GetLicenseRequestType: '/api/LicenseProjectRequestType/GetList',
      GetUserRequestType: '/api/LicenseProjectRequest/GetUserRequestType',
      AddLicenseProjectRequest: '/api/LicenseProjectRequest/CreateLicenseProjectsRequest',
      GetRequestHeaderDetails: '/api/LicenseProjectRequest/GetRequestHeaderDetails',
      SendRequestForParties: '/api/LicenseProjectRequest/SendRequestForParties',      
    },
    LicenseActivateRequest:{
      GetLicenseActivationRequestDetails: '/api/LicenseProjectActivationRequest/GetLicenseActivationRequestDetails/',
      CreateLicenseProjectActivationRequest: '/api/LicenseProjectActivationRequest/CreateAcitaveLicenseProjectRequest',
      CreateOrUpdateLicenseProjectActivationRequest: '/api/LicenseProjectActivationRequest/UpdateLicenseProjectActivationRequest',
    },
    LicenseServiceRequest:{
      Compile: '/api/LicenseServiceRequest/Compile',
      Create: '/api/LicenseServiceRequest/Create',
      
    },
    LicenseProjectCancellationRequest: {
      GetLicenseProjectDetails: '/api/LicenseProjectCancellationRequest/GetLicenseProjectCancellationRequestDetails/',
      AddRealEstateDeveloper: '/api/LicenseProjectCancellationRequest/CreateRealEstateDeveloper',
      EditClearanceEngineering: '/api/LicenseProjectCancellationRequest/UpdateClearanceEngineeringConsultant/',
      EditClearanceAccount: '/api/LicenseProjectCancellationRequest/UpdateClearanceAccountant/',
      EditeRealStateDeveloper: '/api/LicenseProjectCancellationRequest/UpdateRealStateDeveloper/'
    },
    LicenseProjectSubUnitsListCode: {
      createExcel: '/api/LicenseProjectSubUnitsListCode/CreateExcel',
      SaveFileData: '/api/LicenseProjectSubUnitsListCode/saveFileData',
      Save: '/api/LicenseProjectSubUnitsListCode/Save',
      GetByProjectSubUnitId:
        '/api/LicenseProjectSubUnitsListCode/GetByProjectSubUnitId',
      GetByProjectUnitId:
        '/api/LicenseProjectSubUnitsListCode/GetByProjectUnitId',
      Delete: '/api/LicenseProjectSubUnitsListCode/Remove',
    },
    LicenseProjectRequestChangePlan:{
      GetLicenseProjectRequestChangePlanDetails: '/api/LicenseProjectRequestChangePlan/GetLicenseProjectRequestChangePlanDetails',
      CreateOrUpdateChangePlanForRealEstateDeveloper: '/api/LicenseProjectRequestChangePlan/CreateOrUpdateChangePlanForRealEstateDeveloper',
      CreateChangePlanForRealEstateDeveloper: '/api/LicenseProjectRequestChangePlan/CreateChangePlanForRealEstateDeveloper',
      UpdateChangePlanForEngineeringConsultant: '/api/LicenseProjectRequestChangePlan/UpdateChangePlanForEngineeringConsultant',
      UpdateChangePlanForCharteredAccountant: '/api/LicenseProjectRequestChangePlan/UpdateChangePlanForCharteredAccountant',
    },
    LicenseAccountantRequest:{
      GetLicenseAccountDetails:'/api/ChangeAccountantLicenseRequest/GetAccountantDetails',
      GetLicenseAccountantName:'/api/ChangeAccountantLicenseRequest/GetAccountantName',
      CreateLicenseAccountant:'/api/ChangeAccountantLicenseRequest/CreateAccountantRequest',
      UpdateLicenseAccountant:'/api/ChangeAccountantLicenseRequest/UpdateAccountantRequest'
    },
    SysLicenseProjectUnitType: {
      Get: '/api/SysLicenseProjectUnitType/Get',
    },
    SysLicenseProjectStageNumber: {
      Get: '/api/SysLicenseProjectStageNumber/Get',
    },
    SysContinuities: {
      GetSysContinuities: '/api/SysContinuity/Get',
    },
    SysLicenseProjectRiskType: {
      GetSysLicenseProjectRiskTypes: '/api/SysLicenseProjectRiskType/Get',
    },
    SysOwnerType: {
      GetSysOwnerTypes: '/api/SysOwnerType/Get',
    },
    SysRiskStatus: {
      GetSysRiskStatus: '/api/SysRiskStatus/Get',
    },
    SysResponsibleParty: {
      GetSysResponsibleParties: '/api/SysResponsibleParty/Get',
    },
    SysLevelType: {
      Get: '/api/SysLevelType/Get',
    },
    SysStatusIssueType: {
      Get: '/api/SysStatusIssueType/Get',
    },
    LicenseProjectRisk: {
      GetLicenseProjectRiskCounts:
        '/api/LicenseProjectRisk/GetLicenseProjectRiskCounts',
      GetLicenseProjectRiskById:
        '/api/LicenseProjectRisk/GetLicenseProjectRiskById',
      GetLicenseProjectRisks: '/api/LicenseProjectRisk/GetLicenseProjectRisks',
      Save: '/api/LicenseProjectRisk/Save',
    },
    LicenseProjectProblem: {
      GetLicenseProjectProblemCounts:
        '/api/LicenseProjectProblem/GetLicenseProjectProblemCounts',
      GetLicenseProjectProblemById:
        '/api/LicenseProjectProblem/GetLicenseProjectProblemById',
      GetLicenseProjectProblems:
        '/api/LicenseProjectProblem/GetLicenseProjectProblems',
      Save: '/api/LicenseProjectProblem/Save',
    },
    //الملاحظات
    LicenseRequestProcessingNotes: {
      GetByRequestId: '/api/LicenseRequestProcessingLog/GetByRequestId',
    },
    //السجلات
    LicenseRequestLogs: {
      GetByRequestId: '/api/LicenseRequestLog/GetByRequestId',
    },
    LicenseProjectCertificate: {
      GetCertificates: '/api/LicenseProjectCertificate/GetCertificates',
    },
    // ------ End of License Endpoints  ------
    Integration: {
      GetYakeenDetails: '/api/Integration/GetYakeenDetails',
    },
    OTP: {
      GenerateOTP: '/api/OTP/GenerateOTP',
      ValidateOTP: '/api/OTP/ValidateOTP',
      SendLoginOTP: '/api/OTP/SendLoginOTP',
      ValidateLoginOTP: '/api/OTP/ValidateLoginOTP',
    },
    SignalrHubs: {
      identityHub: 'identity-hub',
      notificationHub: 'notification-hub',
    },
    Notification: {
      GetNotificationList: '/api/Notification/GetNotificationList',
      MarkNotificationViewed: '/api/Notification/MarkNotificationViewed',
      GetNotifications: '/api/Notification/GetNotifications',
    },
    SysQualificationTypeInfo: {
      GetAllRealStateContribution:
        '/api/SysQualificationType/GetAllRealStateContribution',
      GetForWafi: '/api/SysQualificationType/GetForWafi',
    },
  },

  modules: {
    auth: 'auth',
    qualifying: 'qualifying',
    // customers: 'customers',
    facilities: 'facilities',
    // employees: 'employees',
    license: 'license',
    training: 'training',
    userManagement: 'user-management',
    landing: 'landing',
    realEstateContributionsAuth: 'real-estate-contributions-auth',
    wafi: 'wafi',
    realEstateContributions: 'real-estate-contributions',
    realEstateContributionsQualifying: 'real-estate-contributions-qualifying',
    realEstateContributionsLicense: 'real-estate-contributions-license',
    realEstateContributionsFacilities: 'real-estate-contributions-facilities',
    realEstateContributionUserManagement:
      'real-estate-contributions-user-management',
    deedsApproval: 'deedsApproval',
    complaintsAndReport: 'complaints-and-reports',
    licenseProjectRequests: 'license-project-requests',
  //  engineeringManagement: "engineering-management"
  },
  pages: {
    confirmMail: 'confirm-mail',
    notificationList: 'notification-list',
    // auth
    auth: {
      login: 'login',
      regAccount: 'reg-account',
      wafiService: 'wafi-services',
      registration: 'registration',
      createAccount: 'create-account',
      forgotPassword: 'forgot-password',
      verificationCode: 'verification-code',
      newPassword: 'new-password',
      complaintRequest: 'complaintRequest',
    },
    // Facilities
    facilities: {
      validateFacility: 'validate-facility',
      facilityProfile: 'facility-profile',
      facilityProfileWithRenewRequest: 'facility-profile-with-renew-request',
      facilityDashboard: 'dashboard',
      Dashboard: 'Dashboard',
    },
    //Qualifying
    qualifying: {
      requests: 'requests',
      requestList: 'request-list',
      createRequest: 'create',
      renewRequest: 'renew',
      requestSummary: 'request-summary',
      renewRequestSummary: 'renew-request-summary',
      requestDetails: 'request-details',
      qualifyingCertificates: 'qualifying-certificates',
      renewQualifyingList: 'renew-qualifying-list',
    },
    license: {
      lincenseTypes: 'lincense-types',
      createLincense: 'create-lincense',
      renewLincense: 'renew-lincense',
      lincenseSummary: 'lincense-summary',
      licenseUnderStudy: 'license-under-study',
      lincenseList: 'lincense-list',
      lincenseDetails: 'lincense-details',
      charteredaccount:'chartered-account-projects',
      licenseProjectsAccountantDetails:'license-projects-accounatant-details',
      lincenseCertificates: 'lincense-certificates',
      lincenseRequestApprovals: 'lincense-request-approvals',
      lincenseRequestApprovalDetails: 'lincense-request-approval-details',
      lincenseProjects: 'lincense-projects',
      projectList: 'project-list',
      projectDetails: 'project-details',
      RenewLicensesList: 'renew-licenses-list',
      employeeCreateLicense: 'employee-create-license',
      employeeLicenseList: 'employee-license-list',
      buyerList:"buyer-list",
      contractdocumentation:"contract-documentation",
      licensecertificatetemplate:"license-certificate-template",
      licensecertificatetemplatedetails: 'license-certificate-template-details',
      addlicensecertificatetemplate: 'add-license-certificate-template',
      addPeriodiccharteredaccountantreport:'add-Periodic-chartered-accountant-report',
      periodiccharteredaccountantreportlist:'add-Periodic-chartered-accountant-report-list',

    },
    licenseProjectRequests: {
      createLicenseProjectRequestList: 'create-license-project-request',
      licenseProjectRequestList: 'license-project-request-list',
      licenseProjectRequests: 'requests',
      ProjectLicenseRequestDetails: 'Project-License-Request-Details',
      ProjectLicenseActiveRequestDetails: 'Project-License-Active-Request-Details',
      licenseProjectRequestDetails: 'license-project-request-details',
      cancelLicenseSummary: 'project-license-cancel-license-request-summary',
      createcancelLicense: 'create-cancel-license-request',
      reactivaiteLicenseSummary: 'project-license-reactivateActive-request-summary',
      createreactivaiteLicense: 'create-reactivate-license-request',
      changePlanSummary: 'project-license-change-plan-request-summary',
      createchangePlanRequest: 'create-change-plan-request',
    },
  
    training: {
      trainingTypes: 'training-types',
      trainingList: 'training-list',
      createTraining: 'create',
      trainingCertificates: 'training-certificates',
    },
    userManagement: {
      userProfile: 'user-profile',
      editProfile: 'edit-profile',
    },
    complaintsAndReport: {
      complaintsReports: 'complaints-reports',
    },
    // engineeringManagement:{
    //   projectList: "project-list",
    //   projectDetails: "project-details"
    // },
    realEstateContributionsAuth: {
      login: 'login',
      regAccount: 'reg-account',
      wafiService: 'wafi-services',
      registration: 'registration',
      createAccount: 'create-account',
      forgotPassword: 'forgot-password',
      verificationCode: 'verification-code',
      newPassword: 'new-password',
    },
    realEstateContributionsQualifying: {
      requests: 'requests',
      requestList: 'request-list',
      createRequest: 'create',
      requestSummary: 'request-summary',
      renewRequestSummary: 'renew-request-summary',
      requestDetails: 'request-details',
      qualifyingCertificates: 'qualifying-certificates',
      renewQualifyingList: 'renew-qualifying-list',
      renewRequest: 'renew',
    },
    realEstateContributionsFacilities: {
      validateFacility: 'validate-facility',
      facilityProfile: 'facility-profile',
      facilityProfileWithRenewRequest: 'facility-profile-with-renew-request',
      facilityDashboard: 'dashboard',
    },
    realEstateContributionslicense: {
      lincenseTypes: 'lincense-types',
      createLincense: 'create-lincense',
      charteredaccount:'chartered-account-projects',
      renewLincense: 'renew-lincense',
      lincenseSummary: 'lincense-summary',
      lincenseList: 'lincense-list',
      lincenseDetails: 'lincense-details',
      lincenseCertificates: 'lincense-certificates',
      lincenseRequestApprovals: 'lincense-request-approvals',
      lincenseRequestApprovalDetails: 'lincense-request-approval-details',
      projectList: 'project-list',
      contractdocumentation:"contract-documentation",
      projectDetails: 'project-details',
      RenewLicensesList: 'renew-licenses-list',
      employeeCreateLicense: 'employee-create-license',
      employeeLicenseList: 'employee-license-list',
    },
    realEstateContributionUserManagement: {
      userProfile: 'user-profile',
    },
  },
  validators: {
    regexLat:
      '^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,20})?))$',
    regexLng:
      '^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,20})?))$',
    phonePattern: '^([^A-Za-z])+$',
    emailPattern: '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}',
    // SA Phone
    PhoneNumber: '^(05)([0-9]{8})$',
    numberOnly: '^[0-9]+$',
    decimal: '^[0-9][0-9]*[.]?[0-9]{0,2}$',
    noArabicLetters: '^[a-zA-Z0-9$@$!%*?&#^-_. +]+$',
  },
  httpResponseStatusCode: {
    unknownError: 0,
    // Client error responses
    badRequest: 400,
    unauthorized: 401,
    paymentRequiredExperimental: 402,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    proxyAuthenticationRequired: 407,
    requestTimeout: 408,
    conflict: 409,
    gone: 410,
    lengthRequired: 411,

    // Server error responses
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    hTTPVersionNotSupported: 505,
    variantAlsoNegotiates: 506,
    insufficientStorage: 507,
    loopDetected: 508,
    notExtended: 510,
    networkAuthenticationRequired: 511,
  },
  OTPInputConfigration: {
    length: 6,
    direction: 'ltr',
  },
};
