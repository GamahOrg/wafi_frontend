export const Configuration = {
  languages: ['ar', 'en'],
  defaultLang: 'ar',
  APIs: {
    LicenseProjectRequestLog: {
      GetLicenseProjectRequestLogs:
        '/api/LicenseProjectRequestLog/GetLicenseProjectRequestLogs',
    },
    LicenseProjectRecommendation: {
      GetLicenseProjectRecommendationsByLicenseProjectId:
        '/api/LicenseProjectRecommendation/GetLicenseProjectRecommendationsByLicenseProjectId',
      GetRecommendationNumberByStatus:
        '/api/LicenseProjectRecommendation/GetRecommendationNumberByStatus',
      GetRecommendationResponsiblePartyDropDown:
        '/api/SysResponsibleParty/GetList',
      GetLicenseProjectRecommendationsById:
        '/api/LicenseProjectRecommendation/GetLicenseProjectRecommendationsById',
      SaveLicenseProjectRecommendations:
        '/api/LicenseProjectRecommendation/SaveLicenseProjectRecommendations',
      SaveLicenseProjectRecommendationReply:
        '/api/LicenseProjectRecommendation/SaveLicenseProjectRecommendationReply',
    },
    RealStateDeveloper: {
      GetDeveloperProjects: '/api/RealStateDeveloper/GetDeveloperProjects',
      GetDeveloperProjectDetails:
        '/api/RealStateDeveloper/GetDeveloperProjectDetails',
      GetProjectUnitsList: '/api/RealStateDeveloper/GetProjectUnits',
      GetProjectPaymentPlans: '/api/RealStateDeveloper/GetProjectPaymentPlans',
      GetUnitDetails: '/api/RealStateDeveloper/GetUnitDetails',
      CalculateUnitCodeTaxes: '/api/RealStateDeveloper/CalculateUnitCodeTaxes',
      GetBuyerTypes: '/api/RealStateDeveloper/GetBuyerTypes',
      SaveContract: '/api/RealStateDeveloper/SaveContract',
      GetContracts: '/api/RealStateDeveloper/getContracts',
      GetBuyerContractsList: '/api/RealStateDeveloper/getBuyerContractsList',
      UpdateContractStatus: '/api/RealStateDeveloper/updateContractStatus',
      GetPaymentTypes: '/api/RealStateDeveloper/getPaymentTypes',
      GetContractStatus: '/api/RealStateDeveloper/GetContractStatus',
      GenerateContract: '/api/RealStateDeveloper/generateContract',
      GetContractDetails: '/api/RealStateDeveloper/GetContractDetails',
      GetSubUnitTypes: '/api/RealStateDeveloper/GetSubUnitTypes',
      GetUnitCodeStatus: '/api/RealStateDeveloper/GetUnitCodeStatus',
      CheckFacility: '/api/RealStateDeveloper/CheckFacilityNationalNumber',
      SendOtp: '/api/RealStateDeveloper/SendOTP',
      CancelContract: '/api/RealStateDeveloper/CancelContract',
    },
    LicenseProjectBuyerCancellationRequest: {
      Create: '/api/LicenseProjectBuyerCancellationRequest/Create',
      Approve: '/api/LicenseProjectBuyerCancellationRequest/Approve',
      Reject: '/api/LicenseProjectBuyerCancellationRequest/Reject',
      GetPagedList: '/api/LicenseProjectBuyerCancellationRequest/GetPagedList',
    },
    CorrectedUnitRequest: {
      GetCorrectedUnitRequest: '/api/CorrectedUnitRequestHeader/GetCorrectedUnitRequest',
    },
    LicenseProjectFawria: {
      GetAll: '/api/LicenseProjectFawria/GetAll',
      CheckCommercialRegisterNumber:
        '/api/LicenseProjectFawria/CheckCommercialRegisterNumber',
      AddLicenseProjectFawria:
        '/api/LicenseProjectFawria/AddLicenseProjectFawria',
      IsFawriaLicenseAllow: '/api/LicenseProjectFawria/IsFawriaLicenseAllow',
      DeleteLicenseProjectFawriaDeveloper: '/api/LicenseProjectFawria/DeleteLicenseProjectFawriaDeveloper',
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
      GetIntegrationBanks: '/api/SysBank/GetIntegrationBanks',
      GetSysBankTermsCondition: '/api/SysBank/GetSysBankTermsCondition',
    },
    SysRequestApproval: {
      GetSysRequestApprovalList:
        '/api/SysRequestApproval/GetSysRequestApprovalList',
    },
    ProjectStatus: {
      GetDropDown: '/api/SysLicenseProjectStatus/Get',
    },
    LiftingDeedReason: {
      GetDropDown: '/api/LiftingDeedReason/Get',
    },
    LiftingDeeds: {
      GetDropDown: '/api/LicenseProjectDeed/GetLicenseProjectDeedsAsync',
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
    customerDashBoard: {
      GetCustomerDashboardData: '/api/DashBoard/GetCustomerDashboardData',
    },
    facility: {
      validate: '/api/Facility/Validate',
      validateCommercialRegister: '/api/Facility/ValidateCommercialRegister',
      Register: '/api/Facility/RegisterAsync',
      GetById: '/api/Facility/GetById',
      update: '/api/Facility/UpdateAsync',
      getDraftRequestByFacilityId: '/api/Facility/GetDraftRequestByFacilityId',
      checkFacilityDataByCRNumber:
        '/api/Facility/CheckFacilityDataByEmployeeByCRNumber',
      createFacility: '/api/Facility/CreateFacilityByEmployee',
      GetFacilityName: '/api/Facility/GetFacilityName',
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
      GetUserType: '/api/Customer/GetUserType',
      VerifyCustomer: '/api/Customer/VerifyCustomer',
      GetCustomerAddress: '/api/Customer/GetCustomerAddress',
      GetCommercialAddress: '/api/Customer/GetCommercialAddress/',
    },
    RelatedCustomer: {
      Save: '/api/RelatedCustomer/Save',
      GetRelatedCustomerListByFacilityId:
        '/api/RelatedCustomer/GetRelatedCustomerListByFacilityId',
      GetRelatedCustomerList: '/api/RelatedCustomer/GetRelatedCustomerList',
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
      GetAllFacilityById:
        '/api/QualificationCertifiedEngineer/GetAllFacilityById',
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
      SaveFawriaFeasibilityStudy:
        '/api/LicenseProjectFeasibilityStudy/SaveFawriaFeasibilityStudy',
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
    EngineeringSupervisionReportActualProjectDetails: {
      GetLicenseProjectEngineeringProjectZonesBlocksDetailActual:
        '/api/EngineeringSupervisionReportActualProjectDetails/GetLicenseProjectEngineeringProjectZonesBlocksDetailActual',
      SaveLicenseProjectEngineeringProjectZonesBlocksDetail:
        '/api/EngineeringSupervisionReportActualProjectDetails/SaveLicenseProjectEngineeringProjectZonesBlocksDetail',
      GetLicenseProjectReadyForHandoverUnit:
        '/api/EngineeringSupervisionReportActualProjectDetails/GetLicenseProjectReadyForHandoverUnit',
    },
    MonthlyEngineeringReportExternalExpenses: {
      SaveOrUpdateMonthlyEngineeringReportExternalExpenses:
        '/api/MonthlyEngineeringReportExternalExpenses/SaveOrUpdateMonthlyEngineeringReportExternalExpenses',
      GetAllMonthlyEngineeringReportExternalExpenses:
        '/api/MonthlyEngineeringReportExternalExpenses/GetAllMonthlyEngineeringReportExternalExpenses',
      GetAllMonthlyEngineeringReportExternalExpensesByMonth:
        '/api/MonthlyEngineeringReportExternalExpenses/GetAllMonthlyEngineeringReportExternalExpensesByMonth',
      GetMonthlyEngineeringReportExternalExpensesById:
        '/api/MonthlyEngineeringReportExternalExpenses/GetMonthlyEngineeringReportExternalExpensesById',
      DeleteMonthlyEngineeringReportExternalExpenses:
        '/api/MonthlyEngineeringReportExternalExpenses/DeleteMonthlyEngineeringReportExternalExpenses',
    },
    EngineeringSupervisionReportActualQualitySummary: {
      GetLicenseProjectEngineeringActualQualityPlanAndAssurance:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectEngineeringActualQualityPlanAndAssurance',
      GetLicenseProjectQualityStatusList:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectQualityStatusList',
      SaveLicenseProjectEngineeringActualQualityPlanAndAssurance:
        '/api/EngineeringSupervisionReportActualQualitySummary/SaveLicenseProjectEngineeringActualQualityPlanAndAssurance',
      GetLicenseProjectEngineeringWorksExaminationList:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectEngineeringWorksExaminationList',
      SaveLicenseProjectEngineeringWorksExamination:
        '/api/EngineeringSupervisionReportActualQualitySummary/SaveLicenseProjectEngineeringWorksExamination',
      GetLicenseProjectEngineeringWorksExaminationDetails:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectEngineeringWorksExaminationDetails',
      GetSysLicenseProjectEngineeringWorkList:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetSysLicenseProjectEngineeringWorkList',
      DeleteLicenseProjectEngineeringWorksExamination:
        '/api/EngineeringSupervisionReportActualQualitySummary/DeleteLicenseProjectEngineeringWorksExamination',
      SaveLicenseProjectEngineeringNonConformityReport:
        '/api/EngineeringSupervisionReportActualQualitySummary/SaveLicenseProjectEngineeringNonConformityReport',
      SaveLicenseProjectEngineeringMaterialExamination:
        '/api/EngineeringSupervisionReportActualQualitySummary/SaveLicenseProjectEngineeringMaterialExamination',
      GetLicenseProjectEngineeringMaterialExamination:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectEngineeringMaterialExamination',
      GetLicenseProjectEngineeringNonConformityReport:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectEngineeringNonConformityReport',
      GetLicenseProjectEngineeringActualRelativeWeight:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetLicenseProjectEngineeringActualRelativeWeight',
      GetlicenseProjectActualRelativeWeightDetails:
        '/api/EngineeringSupervisionReportActualQualitySummary/GetlicenseProjectActualRelativeWeightDetails',
      SavelicenseProjectAcualRelativeWeightRates:
        '/api/EngineeringSupervisionReportActualQualitySummary/SavelicenseProjectAcualRelativeWeightRates',
      SaveLicenseProjectEngineeringConstructionWorkStatus:
        '/api/EngineeringSupervisionReportActualQualitySummary/SaveLicenseProjectEngineeringConstructionWorkStatus',
      DeleteLicenseProjectEngineeringConstructionWorkStatus:
        '/api/EngineeringSupervisionReportActualQualitySummary/DeleteLicenseProjectEngineeringConstructionWorkStatus',
    },
    LicenseProjectEngineeringStatusOfFundsRequiredFromEntities: {
      GetLicenseProjectEngineeringServiceTypeProjectDeliveryPhaseList:
        '/api/LicenseProjectEngineeringStatusOfFundsRequiredFromEntities/GetLicenseProjectEngineeringServiceTypeProjectDeliveryPhaseList',
      GetLicenseProjectEngineeringServiceTypeDesignStageList:
        '/api/LicenseProjectEngineeringStatusOfFundsRequiredFromEntities/GetLicenseProjectEngineeringServiceTypeDesignStageList',
      GetLicenseProjectEngineeringAccreditationStatusList:
        '/api/LicenseProjectEngineeringStatusOfFundsRequiredFromEntities/GetLicenseProjectEngineeringAccreditationStatusList',
      GetLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList:
        '/api/LicenseProjectEngineeringStatusOfFundsRequiredFromEntities/GetLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList',
      Save: '/api/LicenseProjectEngineeringStatusOfFundsRequiredFromEntities/Save',
    },
    LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNote: {
      GetLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList:
        '/api/LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNote/GetLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList',
      SaveNoteFromCustomer:
        '/api/LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNote/SaveNoteFromCustomer',
    },
    EngineeringSupervisionReportProjectStatusSummary: {
      GetLicenseProjectEngineeringSupervisionPlannedDetailsByLicenseProjectId:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringSupervisionPlannedDetailsByLicenseProjectId',
      GetLicenseProjectEngineeringCompletionAndEmploymentRates:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringCompletionAndEmploymentRates',
      GetCertifiedLicenseProjectEngineeringSupervisionPlannedReport:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetCertifiedLicenseProjectEngineeringSupervisionPlannedReport',
      GetCertifiedLicenseProjectEngineeringSupervisionPlannedReportWithExternalExpenses:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetCertifiedLicenseProjectEngineeringSupervisionPlannedReportWithExternalExpenses',
      SaveLicenseProjectEngineeringCompletionAndEmploymentRates:
        '/api/EngineeringSupervisionReportProjectStatusSummary/SaveLicenseProjectEngineeringCompletionAndEmploymentRates',
      GetLicenseProjectEngineeringDataTapStatus:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringDataTapStatus',
      GetLicenseProjectEngineeringDetails:
        '/api/EngineeringSupervisionReportProjectStatusSummary/GetLicenseProjectEngineeringDetails',
      SaveLicenseProjectEngineeringDetails:
        '/api/EngineeringSupervisionReportProjectStatusSummary/SaveLicenseProjectEngineeringDetails',
      UpdateLicenseProjectEngineeringInfrastructure:
        '/api/EngineeringSupervisionReportProjectStatusSummary/UpdateLicenseProjectEngineeringInfrastructure',
    },

    EngineeringSupervisionReportActualInfrastructure: {
      GetLicenseProjectEngineeringActualInfrastructureRates:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetLicenseProjectEngineeringActualInfrastructureRates',
      SaveLicenseProjectEngineeringActualInfrastructureRates:
        '/api/EngineeringSupervisionReportActualInfrastructure/SaveLicenseProjectEngineeringActualInfrastructureRates',

      GetLicenseProjectConnectionWithServicesProvider:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetLicenseProjectConnectionWithServicesProvider',
      SaveLicenseProjectConnectionWithServicesProvider:
        '/api/EngineeringSupervisionReportActualInfrastructure/SaveLicenseProjectConnectionWithServicesProvider',

      GetSysLicenseProjectActivationStatusoList:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetSysLicenseProjectActivationStatusoList',
      GetSysLicenseProjectServiceTypeStatusList:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetSysLicenseProjectServiceTypeStatusList',
      GetSysLicenseProjectTieConnectionStatusList:
        '/api/EngineeringSupervisionReportActualInfrastructure/GetSysLicenseProjectTieConnectionStatusList',

      GetActualLicenseInfrastructureElement:
        '/api/LicenseProjectInfrastructureNetworksStatus/GetActualLicenseInfrastructureElement',
      SaveActual:
        '/api/LicenseProjectInfrastructureNetworksStatus/SaveActualAsync',
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
      GetProjectBusinessCaseReportById:
        '/api/ProjectBusinessCaseReport/GetProjectBusinessCaseReportById',
      GetProjectBusinessCaseReportList:
        '/api/ProjectBusinessCaseReport/GetProjectBusinessCaseReportList',
      Save: '/api/ProjectBusinessCaseReport/Save',
    },
    ProjectBusinessCaseReportNote: {
      AddNotesFromProjectManger:
        '/api/ProjectBusinessCaseReportNote/AddNotesFromProjectManger',
    },

    LicenseProjectHealthAndSafetyMonitoring: {
      Save: '/api/LicenseProjectHealthAndSafetyMonitoring/SaveLicenseProjectHealthAndSafetyMonitoring',
      GetLicenseProjectHealthAndSafetyMonitoringDetails:
        '/api/LicenseProjectHealthAndSafetyMonitoring/GetLicenseProjectHealthAndSafetyMonitoringDetails',
      GetLicenseProjectQualityStatusList:
        '/api/LicenseProjectHealthAndSafetyMonitoring/GetLicenseProjectQualityStatusList',
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
      GetCertifiedValueReportLookUpList:
        '/api/ActualValuesReport/GetCertifiedValueReportLookUpList',
      GetRequiredSupervisionMonthsList:
        '/api/ActualValuesReport/GetRequiredSupervisionMonthsList',
      UpdateMonthSubmitted: '/api/ActualValuesReport/UpdateMonthSubmitted',
      SendMonthToStudy: '/api/ActualValuesReport/SendMonthToStudy',
      GenerateReport: '/api/ExportEngineeringReport/GenerateReport',
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
      GetMaxItemNumberByLicenseProjectId:
        '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/GetMaxItemNumberByLicenseProjectId',
      Save: '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/Save',
      Delete:
        '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/DeleteAsync',
      deActivate:
        '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/DeActivateAsync',
      activate:
        '/api/LicenseProjectBeneficiaryContractFormAdditionalTerms/ActivateAsync',
    },
    LicenseProjectPartiesAdditionalTerms: {
      GetAllAdditionalAsync:
        '/api/LicenseProjectPartiesAdditionalTerms/GetAllAdditionalAsync',      
      GetMaxItemNumberByLicenseProjectId:
        '/api/LicenseProjectPartiesAdditionalTerms/GetMaxItemNumberByLicenseProjectId',
      Save: '/api/LicenseProjectPartiesAdditionalTerms/Save',
      Delete: '/api/LicenseProjectPartiesAdditionalTerms/DeleteAsync',
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
      GetLicenseProjectCompletionData: '/api/LicenseProject/GetLicenseProjectCompletionData',
      GetLicenseProjectById: '/api/LicenseProject/GetLicenseProjectById',
      GetLicenseProjectByFacilityId:
        '/api/LicenseProjectService/GetLicenseProjectByFacilityId/',
      GetLicenseProjectByType:
        '/api/LicenseProjectRequest/GetLicenseProjectsByType',
      UpdateProjectManagerOnProject:
        '/api/LicenseProject/UpdateProjectManagerOnProject',
      UpdateLicenseProjectStatus:
        '/api/LicenseProject/UpdateLicenseProjectStatus',
      GetEngineeringConsultantProjectsList:
        '/api/LicenseProject/GetEngineeringConsultantProjectsList',
      GetDeveloperProjectsList: '/api/LicenseProject/GetDeveloperProjectsList',
      GetProjectPartiesStatus: '/api/LicenseProject/GetProjectPartiesStatus',

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
      GetLicenseProjectDetails: '/api/LicenseProject/GetLicenseProjectDetails',
      GetEscrowAccount: '/api/LicenseProject/GetEscrowAccount',
      GetSupervisionReportStatusByLicenseProjectId:
        '/api/LicenseProject/GetSupervisionReportStatusByLicenseProjectId',
      GetRecommendationsLogsList:
        '/api/LicenseProject/GetRecommendationsLogsList',
      SaveFawriaLicenseprojectContactInfo:
        '/api/LicenseProject/SaveFawriaLicenseprojectContactInfo',
      GetFawriaContactsInfoById:
        '/api/LicenseProject/GetFawriaContactsInfoById',
      SaveFawriaLicenseprojectBankInfoAsync:
        '/api/LicenseProject/SaveFawriaLicenseprojectBankInfoAsync',
      GetFawriaLicenseprojectBankInfoById:
        '/api/LicenseProject/GetFawriaLicenseprojectBankInfoById',
      GetDeedHeaderProjectData: '/api/LicenseProject/GetDeedHeaderProjectData',
      GetFawriaEndBeneficiaryContactsInfoById: '/api/LicenseProject/GetFawriaEndBeneficiaryContactsInfoById',
      SaveFawriaEndBeneficiaryContactsInfoAsync: '/api/LicenseProject/SaveFawriaEndBeneficiaryContactsInfoAsync',
    },
    LicenseProjectExchangeDocument: {
      GetExchangeDocumentOnProject:
        '/api/LicenseProjectExchangeDocument/GetExchangeDocumentOnProject',
      Save: '/api/LicenseProjectExchangeDocument/Save',
      GetLicenseProjectExchangeDocumentDetail:
        '/api/LicenseProjectExchangeDocument/GetLicenseProjectExchangeDocumentDetail',
      GetExchangeDocumentMainItemList:
        '/api/LicenseProjectExchangeDocument/GetExchangeDocumentMainItemList',
      GetExchangeDocumentSubItemList:
        '/api/LicenseProjectExchangeDocument/GetExchangeDocumentSubItemList',
      GetLiceneProjectBeneficiaryTypeList:
        '/api/LicenseProjectExchangeDocument/GetLiceneProjectBeneficiaryTypeList',
      GetLicenseProjectData:
        '/api/LicenseProjectExchangeDocument/GetLicenseProjectData',
    },
    PeriodicCharteredAccountantReport: {
      Save: '/api/PeriodCharteredAccountantReport/Save',
      CreatePeriodicCharteredAccountantReport:
        '/api/PeriodCharteredAccountantReport/CreatePeriodicCharteredAccountantReport',
      GetPeriodicCharteredAccountantReportQuarterTypes:
        '/api/PeriodCharteredAccountantReport/GetPeriodicCharteredAccountantReportQuarterTypes',
      GetPeriodicCharteredAccountantReportTypes:
        '/api/PeriodCharteredAccountantReport/GetPeriodicCharteredAccountantReportTypes',
    },
    LicenseProjectBuyer: {
      GetLicenseProjectBuyerTotal:
        '/api/LicenseProjectBuyer/GetLicenseProjectBuyerTotal',
      GetBuyersOnProject: '/api/LicenseProjectBuyer/GetBuyersOnProject',
      GetBuyerTotalsList: '/api/LicenseProjectBuyer/GetBuyerTotalsList',
      GetCancelledAndResoldUnitsList:
        '/api/LicenseProjectBuyer/GetCancelledAndResoldUnitsList',
      GetCancelledUnitsList: '/api/LicenseProjectBuyer/GetCancelledUnitsList',
      GetCompletedUnitsList: '/api/LicenseProjectBuyer/GetCompletedUnitsList',
      Save: '/api/LicenseProjectBuyer/Save',
      CancelLicenseProjectBuyer:
        '/api/LicenseProjectBuyer/CancelLicenseProjectBuyer',
      Delete: '/api/LicenseProjectBuyer/Remove',
      GetFacilityQualificationTypeCode:
        '/api/LicenseProjectBuyer/GetFacilityQualificationTypeCode',
      GetContracts: '/api/LicenseProjectBuyer/GetContracts',
      AcceptOrRejectOrRecoverBuyerContract:
        '/api/LicenseProjectBuyer/AcceptOrRejectOrRecoverBuyerContract',
      GetProjectBlockAndBuildingList:
        '/api/LicenseProjectBuyer/GetProjectBlockAndBuildingList',
      GetProjectUnitesList: '/api/LicenseProjectBuyer/GetProjectUnitesList',
      GetLicenseProjectBuyerDetail:
        '/api/LicenseProjectBuyer/GetLicenseProjectBuyerDetail',
      GetBuyerSettings: '/api/LicenseProjectBuyer/GetBuyerSettings',
      GetBuyersBylicenseProjectId:
        '/api/LicenseProjectBuyer/GetBuyersBylicenseProjectId',
      GetBuyersDetailByNIDNumber:
        '/api/LicenseProjectBuyer/GetBuyersDetailByNIDNumber',
      GetFilterContracts: '/api/RealStateDeveloper/GetContracts',
      CheckPaymentsVersion: '/api/LicenseProjectBuyer/CheckPaymentsVersion',
      GetBuyersBusinessPaymentInstallements:
        '/api/LicenseProjectBuyer/GetBuyersBusinessPaymentInstallements',
    },
    SupervisionFollowupCostsRatio: {
      getSupervisionFollowupCostsRatio:
        '/api/SupervisionFollowupCostsRatio/getSupervisionFollowupCostsRatio',
    },
    LicenseProjectBuyerPaymentType: {
      Get: '/api/LicenseProjectBuyerPaymentType/Get',
    },
    LicenseProjectDeposits: {
      GetLicenseProjectDeposits:
        '/api/LicenseProjectDeposits/GetLicenseProjectDeposits',
      GetById: '/api/LicenseProjectDeposits/GetById',
      GetAccountNumber: '/api/LicenseProjectDeposits/GetAccountNumber',
      Save: '/api/LicenseProjectDeposits/SaveLicenseDepositDocument',
      SaveLicenseProjectDeposits:
        '/api/LicenseProjectDeposits/SaveLicenseProjectDeposits',
      Update: '/api/LicenseProjectDeposits/UpdateLicenseDepositDocument',
      GetMainItems: '/api/SysLicenseProjectDepositMainItems/GetMainItems',
      GetCalcRatioSettingForAccounts:
        '/api/LicenseProjectDeposits/GetCalcRatioSettingForAccounts',
    },
    LicenseCertificateTemplate: {
      GetLicenseCertificateTemplateList:
        '/api/LicenseCertificateTemplate/GetLicenseCertificateTemplateList',
      GetlicenseCertificateUnitList:
        '/api/LicenseCertificateTemplate/GetlicenseCertificateUnitList',
      GetByLicenseCertificateTemplateId:
        '/api/LicenseCertificateTemplate/GetByLicenseCertificateTemplateId',
      Save: '/api/LicenseCertificateTemplate/Save',
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
      DleteFile: '/api/LicenseProjectDesignFile/DleteFile',
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
    SysLicenseNatureType: {
      GetAll: '/api/SysLicenseNatureType/Get',
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
    PeriodCharteredAccountantReport: {
      GetExchangeDocumentOnProject:
        '/api/PeriodCharteredAccountantReport/GetExchangeDocumentOnProject',
      GetPeriodicCharteredAccountantReportDetail:
        '/api/PeriodCharteredAccountantReport/GetPeriodicCharteredAccountantReportDetail',
      CreateExcel: '/api/PeriodCharteredAccountantReport/CreateExcel',
      GetSysDepositType:
        '/api/PeriodCharteredAccountantReport/GetSysDepositType',
    },
    LicenseProjectDeed: {
      GetByLicenseProjectId: '/api/LicenseProjectDeed/GetByLicenseProjectId',
      GetDeedConstructionApprovalList: '/api/LicenseProjectDeed/GetDeedConstructionApprovalList',
      Save: '/api/LicenseProjectDeed/SaveData',
      UpdateTotalAreaForProject:
        '/api/LicenseProjectDeed/UpdateTotalAreaForProject',
      SaveDeedData: '/api/LicenseProjectDeed/SaveDeedData',
      UpdateDeedOwners: '/api/LicenseProjectDeed/UpdateDeedOwners',
      ValidateDeedInfoByNumber:
        '/api/LicenseProjectDeed/ValidateDeedInfoByNumber',
      Delete: '/api/LicenseProjectDeed/Remove',
      GetInstantDeedsByLicenseProjectId:
        '/api/LicenseProjectDeed/GetInstantDeedsByLicenseProjectId',
      GetNatureTypeIdByLicenseProjectId:
        '/api/LicenseProjectDeed/GetNatureTypeIdByLicenseProjectId',
      DeleteInstantDeeds: '/api/LicenseProjectDeed/DeleteInstantDeedsAsync',
      DeleteDeepLandOwner:'/api/LicenseProjectDeed/DeleteDeepLandOwner',
      FawriaLicenseDeedAndConstructionLicense:
        '/api/LicenseProjectDeed/FawriaLicenseDeedAndConstructionLicense',
      SaveFawriaLicenseDeedAndConstructionLicense:
        '/api/LicenseProjectDeed/SaveFawriaLicenseDeedAndConstructionLicense',
      GetFawriaLicenseDeedAndConstructionLicenseByLicenseProjectId:
        '/api/LicenseProjectDeed/GetFawriaLicenseDeedAndConstructionLicenseByLicenseProjectId',
        GetDeedOwnersListAsync:'/api/LicenseProjectDeed/GetDeedOwnersListAsync',
    },
    LicenseProjectQuantitiesTableFiles: {
      GetByLicenseProjectId:
        '/api/LicenseProjectQuantitiesTableFiles/GetByLicenseProjectId',
      Save: '/api/LicenseProjectQuantitiesTableFiles/Save',
      DeleteFile: '/api/LicenseProjectQuantitiesTableFiles/DeleteFile',
    },
    LicenseProjectRelativeWeight: {
      GetByLicenseProjectId:
        '/api/LicenseProjectRelativeWeight/GetByLicenseProjectId',
      Save: '/api/LicenseProjectRelativeWeight/Save',
    },
    SysLicenseRelativeWeight: {
      Get: '/api/SysLicenseRelativeWeight/Get',
      GetSysLicenseRelativeWeightByLicenceProjectId:
        '/api/SysLicenseRelativeWeight/GetSysLicenseRelativeWeightByLicenceProjectId',
      GetScopeItemsByLicenseProjectAsync:
        '/api/SysLicenseRelativeWeight/GetScopeItemsByLicenseProjectAsync',
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
      GetLicenseRequestUnitFacilitiesList: '/api/LicenseProjectModel/GetLicenseRequestUnitFacilitiesList',
    },
    LicenseProjectSubUnit: {
      GetByLicenseProjectId: '/api/LicenseProjectSubUnit/GetByLicenseProjectId',
      SaveLicenseProjectSubUnitsAsync:
        '/api/LicenseProjectSubUnit/SaveLicenseProjectSubUnitsAsync',
      DeleteLicenseProjectSubUnitsAsync:
        '/api/LicenseProjectSubUnit/DeleteLicenseProjectSubUnitsAsync',
      GetLicenseProjectSubUnitsByLicenseProjectId:
        '/api/LicenseProjectSubUnit/GetLicenseProjectSubUnitsByLicenseProjectId',
      Create: '/api/LicenseProjectSubUnit/Create',
      Update: '/api/LicenseProjectSubUnit/Update',
      Remove: '/api/LicenseProjectSubUnit/Remove',
    },
    LicenseProjectService: {
      GenerateDraftVersionForProject:
        '/api/LicenseProjectService/GenerateDraftVerionForProject',
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
      FawryLicenseCreate: 'FawryLicenseCreate',
      FawryLicenseGet: 'FawryLicenseGetByIdAsync',
      FawryLicenseUpdate: 'FawryLicenseUpdate',
      FawryLicenseUpdateComplatedInfo: 'FawryLicenseUpdateComplatedInfo',
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
      GetLicenseProjectList: 'GetLicenseProjectList',
      FawryLicenseCreate: 'FawryLicenseCreate',
      FawryLicenseUpdate: 'FawryLicenseUpdateData',
      FawryLicenseGet: 'FawryLicenseGetByLicenseProjectId',
    },
    SysLicenseRequestType: {
      GetShowForWafiByCode: '/api/SysLicenseRequestType/GetShowForWafiByCode',
      GetShowForRealStateContributionByCode:
        '/api/SysLicenseRequestType/GetShowForRealStateContributionByCode',
      GetAllGroupingLicense: '/api/SysLicenseRequestType/GetAllGroupingLicense',
      Get: '/api/SysLicenseBeneficiaryContractForm/Get',
      GetAllLicenseTypes: '/api/SysLicenseRequestType/Get',
      GetLicenseRequestTypes:
        '/api/SysLicenseRequestType/GetLicenseRequestTypes',
      // GetRenewalLicenseRequestType: "/api/SysLicenseRequestType/GetRenewalLicenseRequestType"
    },
    LicenseRequestHeaderProcessingStep: {
      GetLicenseRequestHeaderProcessingStep:
        '/api/LicenseRequestHeaderProcessingStep/GetLicenseRequestHeaderProcessingStep',
    },
    BankAccount: {
      GenerateBankAccount: '/api/BankAccount/GenerateBankAccount',
      GetBankAccountInformation: '/api/BankAccount/GetBankAccountInformation',
    },
    Fawtarah: {
      InitiateInvoice: '/api/Fawtarah/InitiateInvoice',
      GetInvoice: '/api/Fawtarah/GetInvoice',
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
      GenerateContractWithLogo:
        '/api/SysLicenseBeneficiaryContractForm/GenerateContractWithLogo',
    },
    licenseProjectZone: {
      Save: '/api/LicenseProjectZone/Save',
      GetByLicenseProjectId: '/api/LicenseProjectZone/GetByLicenseProjectId',
      Delete: '/api/LicenseProjectZone/Remove',
    },
    LicenseRequestService: {
      Create: '/api/LicenseRequestService/Create',
      renew: '/api/LicenseRequestService/Renew',
      GetFarzStatusWhenNaturalTypeUnit: '/api/LicenseRequestHeader/GetFarzStatusWhenNaturalTypeUnit',
      Send: '/api/LicenseRequestService/Send',
      SendByProjectId: '/api/LicenseRequestService/SendByProjectId',
      SendFawriaLicenseByProjectId: '/api/LicenseRequestService/SendFawriaLicenseByProjectId',
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
      GetRequestTypeById: '/api/LicenseRequestHeader/GetRequestTypeById',
      GetFacilityByProcessingRequestData:
        '/api/LicenseRequestHeader/GetFacilityByProcessingRequestData',
      GetLicenseRequestsByCustomerId:
        '/api/LicenseRequestHeader/GetLicenseRequestsByCustomerId',
      GetLicenseRequests: '/api/LicenseRequestHeader/GetLicenseRequests',
      GetCertifiedLicenseData:
        '/api/LicenseRequestHeader/GetCertifiedLicenseData',
      GetFarzRejectionReason:
        '/api/LicenseRequestHeader/GetFarzRejectionReason',
      UpdateFarzStatus: '/api/LicenseRequestHeader/UpdateFarzStatus',
      UpdateCertifiedLicenseData:
        '/api/LicenseRequestHeader/UpdateCertifiedLicenseData',
      GetLicenseRequestsByEmployeeId:
        '/api/LicenseRequestHeader/GetLicenseRequestsByEmployeeId',
      GetLicenseRequestHeadersByLicenseProjectId:
        '/api/LicenseRequestHeader/GetLicenseRequestHeadersByLicenseProjectId',
        GetLicenseProjectProfileCompleteTap:
        '/api/LicenseRequestHeader/GetLicenseProjectProfileCompleteTap',
        GetCompletedLicenseProjectProfileTaps:
        '/api/LicenseRequestHeader/GetCompletedLicenseProjectProfileTaps',
      GetLicenseRequestHeaderTimeLine:
        '/api/LicenseRequestHeader/GetLicenseRequestHeaderTimeLine',
      Delete: '/api/LicenseRequestHeader/Remove',
      GetLicenseRequestHeaderCode: '/api/LicenseRequestHeader/GetLicenseRequestHeaderCode',
      GetLicenseRequestHeaderById: '/api/LicenseRequestHeader/GetLicenseRequestHeaderById',
    },
    LicenseProjectUnit: {
      Save: '/api/LicenseProjectUnit/Save',
      GetLicenseProjectNatureType: '/api/LicenseProjectUnit/GetLicenseProjectNatureType',
      GetByLicenseProjectId: '/api/LicenseProjectUnit/GetByLicenseProjectId',
      GetByZoneId: '/api/LicenseProjectUnit/GetByZoneId',
      Delete: '/api/LicenseProjectUnit/Remove',
      GetLicenseProjectBuildingBlockType:
        '/api/LicenseProjectUnit/GetLicenseProjectBuildingBlockType',
      GetDeedsDDLByLicenseProjectId:
        '/api/LicenseProjectUnit/GetDeedsDDLByLicenseProjectId',
    },
    LincenseProjectRequest: {
      GetLincenseRequestProject:
        '/api/LicenseProjectRequest/GetLicenseProjectsRequestService',
      GetLicenseRequestType: '/api/LicenseProjectRequestType/GetList',
      GetUserRequestType: '/api/LicenseProjectRequest/GetUserRequestType',
      AddLicenseProjectRequest:
        '/api/LicenseProjectRequest/CreateLicenseProjectsRequest',
      GetRequestHeaderDetails:
        '/api/LicenseProjectRequest/GetRequestHeaderDetails',
      SendRequestForParties: '/api/LicenseProjectRequest/SendRequestForParties',
      GetLicenseProjectRequestPrice:
        '/api/LicenseProjectRequest/GetLicenseProjectRequestPrice',
    },
    LicenseActivateRequest: {
      GetLicenseActivationRequestDetails:
        '/api/LicenseProjectActivationRequest/GetLicenseActivationRequestDetails/',
      CreateLicenseProjectActivationRequest:
        '/api/LicenseProjectActivationRequest/CreateAcitaveLicenseProjectRequest',
      CreateOrUpdateLicenseProjectActivationRequest:
        '/api/LicenseProjectActivationRequest/UpdateLicenseProjectActivationRequest',
    },
    LicenseServiceRequest: {
      Compile: '/api/LicenseServiceRequest/Compile',
      Create: '/api/LicenseServiceRequest/Create',
    },
    LicenseProjectCancellationRequest: {
      GetLicenseProjectDetails:
        '/api/LicenseProjectCancellationRequest/GetLicenseProjectCancellationRequestDetails/',
      AddRealEstateDeveloper:
        '/api/LicenseProjectCancellationRequest/CreateRealEstateDeveloper',
      EditClearanceEngineering:
        '/api/LicenseProjectCancellationRequest/UpdateClearanceEngineeringConsultant/',
      EditClearanceAccount:
        '/api/LicenseProjectCancellationRequest/UpdateClearanceAccountant/',
      EditeRealStateDeveloper:
        '/api/LicenseProjectCancellationRequest/UpdateRealStateDeveloper/',
    },
    AccountkeeperRequest: {
      GetChangeAccountKeeperDetails:
        '/api/ChangeAccountKeeperRequest/GetChangeAccountKeeperDetails/',
      SaveChangeLicenseProjectAccountKeeperRequest:
        '/api/ChangeAccountKeeperRequest/SaveChangeLicenseProjectAccountKeeperRequest',
    },
    TransferAmountsBetweenSubAccountsInEscrowAccountRequest: {
      GetDetails:
        '/api/TransferAmountsBetweenSubAccountsInEscrowAccountRequest/GetDetails/',
      SaveTransferAmountsBetweenSubAccountsInEscrowAccount:
        '/api/TransferAmountsBetweenSubAccountsInEscrowAccountRequest/SaveTransferAmountsBetweenSubAccountsInEscrowAccount',
    },
    RequestTemplate: {
      GetDetails: '/api/RequestTemplate/GetDetails/',
      SaveRequestTemplate: '/api/RequestTemplate/SaveRequestTemplate',
    },
    LicenseProjectRequestTemplateFile: {
      GetLicenseProjectRequestTemplateFile:
        '/api/LicenseProjectRequestTemplateFile/GetLicenseProjectRequestTemplateFile/',
    },
    ObjectionToSupervisionAndFollowUpCoststRequest: {
      GetDetails:
        '/api/ObjectionToSupervisionAndFollowUpCostsRequest/GetDetails/',
      SaveObjectionToSupervisionAndFollowUpCostsRequest:
        '/api/ObjectionToSupervisionAndFollowUpCostsRequest/SaveObjectionToSupervisionAndFollowUpCostsRequest',
    },
    LiftingTheMarkOnThePropertyTitleDeedRequest: {
      GetDetails:
        '/api/LiftingTheMarkOnThePropertyTitleDeedRequest/GetDetails/',
      SaveLiftingTheMarkOnThePropertyTitleDeedRequest:
        '/api/LiftingTheMarkOnThePropertyTitleDeedRequest/SaveLiftingTheMarkOnThePropertyTitleDeedRequest',
    },
    PartiesAgreementRequest: {
      GetChangePartiesAgreementDetails:
        '/api/ChangePartiesAgreementRequest/GetChangePartiesAgreementDetails/',
      SaveChangePartiesAgreementRequest:
        '/api/ChangePartiesAgreementRequest/SaveChangePartiesAgreementRequest',
    },
    CharteredAccountantRequest: {
      GetChareteredAccountantRequestList:
        '/api/ChangeCharteredAccounatantRequest/GetChareteredAccountantRequestList',
      GetChareteredAccountantRequestDetails:
        '/api/ChangeCharteredAccounatantRequest/GetChareteredAccountantRequestDetails',
      SaveChangeCharteredAccountantRequest:
        '/api/ChangeCharteredAccounatantRequest/SaveChangeCharteredAccountantRequest',
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
      GetUnitsCodesListByProjectUnitId:
        '/api/LicenseProjectSubUnitsListCode/GetUnitsCodesListByProjectUnitId',
      GetUnitsCodesListByProjectUnitIdPaginated:
        '/api/LicenseProjectSubUnitsListCode/GetUnitsCodesListByProjectUnitIdPaginated',
    },
    ChangeLicenseProjectDelegatorRequest: {
      GetChangeLicenseProjectDelegatorRequestDetail:
        '/api/ChangeLicenseProjectDelegatorRequest/GetChangeLicenseProjectDelegatorRequestDetail',
      Save: '/api/ChangeLicenseProjectDelegatorRequest/Save',
    },
    ChangeLicenseProjectEngineeringRequest: {
      GetChangeLicenseProjectEngineeringRequestDetail:
        '/api/ChangeLicenseProjectEngineeringRequest/GetChangeLicenseProjectEngineeringRequestDetail',
      Save: '/api/ChangeLicenseProjectEngineeringRequest/Save',
    },
    ChangeLicenseProjectBuyerOrTenantContractRequest: {
      GetChangeLicenseProjectBuyerOrTenantContractRequestDetail:
        '/api/ChangeLicenseProjectBuyerOrTenantContractRequest/GetChangeLicenseProjectBuyerOrTenantContractRequestDetail',
      Save: '/api/ChangeLicenseProjectBuyerOrTenantContractRequest/Save',
    },
    WithdrawSurplusBeforeProjectEndRequest: {
      GetWithdrawSurplusBeforeProjectEndRequestDetail:
        '/api/WithdrawSurplusBeforeProjectEndRequest/GetWithdrawSurplusBeforeProjectEndRequestDetail',
      Save: '/api/WithdrawSurplusBeforeProjectEndRequest/Save',
    },
    ChangeOrAddLicenseProjectUnitModelRequest: {
      GetChangeOrAddLicenseProjectUnitModelRequestDetail:
        '/api/ChangeOrAddLicenseProjectUnitModelRequest/GetChangeOrAddLicenseProjectUnitModelRequestDetail',
      Save: '/api/ChangeOrAddLicenseProjectUnitModelRequest/Save',
    },
    ChangeLicenseProjectNameRequest: {
      GetChangeLicenseProjectNameRequestDetail:
        '/api/ChangeLicenseProjectNameRequest/GetChangeLicenseProjectNameRequestDetail',
      Save: '/api/ChangeLicenseProjectNameRequest/Save',
    },
    ChangeLicenseProjectSpaceOrUnitsRequest: {
      GetChangeLicenseProjectSpaceOrUnitsRequesDetail:
        '/api/ChangeLicenseProjectSpaceOrUnitsRequest/GetChangeLicenseProjectSpaceOrUnitsRequesDetail',
      Save: '/api/ChangeLicenseProjectSpaceOrUnitsRequest/Save',
    },
    LicenseProjectRequestChangePlan: {
      GetLicenseProjectRequestChangePlanDetails:
        '/api/LicenseProjectRequestChangePlan/GetLicenseProjectRequestChangePlanDetails',
      CreateOrUpdateChangePlanForRealEstateDeveloper:
        '/api/LicenseProjectRequestChangePlan/CreateOrUpdateChangePlanForRealEstateDeveloper',
      CreateChangePlanForRealEstateDeveloper:
        '/api/LicenseProjectRequestChangePlan/CreateChangePlanForRealEstateDeveloper',
      UpdateChangePlanForEngineeringConsultant:
        '/api/LicenseProjectRequestChangePlan/UpdateChangePlanForEngineeringConsultant',
      UpdateChangePlanForCharteredAccountant:
        '/api/LicenseProjectRequestChangePlan/UpdateChangePlanForCharteredAccountant',
    },
    LicenseAccountantRequest: {
      GetLicenseAccountDetails:
        '/api/ChangeAccountantLicenseRequest/GetAccountantDetails',
      GetLicenseAccountantName:
        '/api/ChangeAccountantLicenseRequest/GetAccountantName',
      CreateLicenseAccountant:
        '/api/ChangeAccountantLicenseRequest/CreateAccountantRequest',
      UpdateLicenseAccountant:
        '/api/ChangeAccountantLicenseRequest/UpdateAccountantRequest',
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
      SaveLicenseRiskReply: '/api/LicenseProjectRisk/SaveLicenseRiskReply',
    },
    LicenseProjectProblem: {
      GetLicenseProjectProblemCounts:
        '/api/LicenseProjectProblem/GetLicenseProjectProblemCounts',
      GetLicenseProjectProblemById:
        '/api/LicenseProjectProblem/GetLicenseProjectProblemById',
      GetLicenseProjectProblems:
        '/api/LicenseProjectProblem/GetLicenseProjectProblems',
      Save: '/api/LicenseProjectProblem/Save',
      SaveLicenseProjectProblemReply:
        '/api/LicenseProjectProblem/SaveLicenseProjectProblemReply',
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
      GetCertificatesByHeaderId: '/api/LicenseProjectCertificate/GetCertificatesByHeaderId',
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
    LicenseProjectBusinessPayment: {
      CreateLicenseProjectBusinessPayment:
        '/api/LicenseProjectBusinessPayment/CreateLicenseProjectBusinessPayment',
      UpdateLicenseProjectBusinessPayment:
        '/api/LicenseProjectBusinessPayment/UpdateLicenseProjectBusinessPayment',
      GetLicenseProjectBusinessPaymentById:
        '/api/LicenseProjectBusinessPayment/GetLicenseProjectBusinessPaymentById',
      GetLicenseProjectBusinessPaymentVersions:
        '/api/LicenseProjectBusinessPayment/GetLicenseProjectBusinessPaymentVersions',
      GetLicenseProjectBusinessPaymentsByProjectId:
        '/api/LicenseProjectBusinessPayment/GetLicenseProjectBusinessPaymentsByProjectId',
      GetLicenseProjectBusinessPaymentTemplates:
        '/api/LicenseProjectBusinessPayment/GetLicenseProjectBusinessPaymentTemplates',
      SaveLicenseProjectBusinessPaymentAsTemplate:
        '/api/LicenseProjectBusinessPayment/SaveLicenseProjectBusinessPaymentAsTemplate',
      ApplyLicenseProjectBusinessPaymentTemplate:
        '/api/LicenseProjectBusinessPayment/ApplyLicenseProjectBusinessPaymentTemplate',
      DeleteLicenseProjectBusinessPayment:
        '/api/LicenseProjectBusinessPayment/DeleteLicenseProjectBusinessPayment',
      ActivateLicenseProjectBusinessPayment:
        '/api/LicenseProjectBusinessPayment/ActivateLicenseProjectBusinessPayment',
      DeactivateLicenseProjectBusinessPayment:
        '/api/LicenseProjectBusinessPayment/DeactivateLicenseProjectBusinessPayment',
      GetAllLicenseProjectBusinessPayments:
        '/api/LicenseProjectBusinessPayment/GetAllLicenseProjectBusinessPayments',
      GetAllConfigration:
        '/api/LicenseProjectBusinessPayment/GetAllConfigration',
    },
    LicenseProjectAdditionalTermsVersion: {
      GetAllVersion: '/api/LicenseProjectAdditionalTermsVersion/GetAllVersion',
    },
  },

  modules: {
    auth: 'auth',
    qualifying: 'qualifying',
    developer: 'developer',
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
    engineeringManagement: 'engineering-management',
  },
  pages: {
    confirmMail: 'confirm-mail',
    notificationList: 'notification-list',
    viewRequestDeatils: 'view-request-deatils',
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
    developer: {
      developerProjectList: 'developer-project-list',
    },
    license: {
      lincenseTypes: 'lincense-types',
      createLincense: 'create-lincense',
      renewLincense: 'renew-lincense',
      lincenseSummary: 'lincense-summary',
      farzNote: 'farz-note',
      licenseUnderStudy: 'license-under-study',
      lincenseList: 'lincense-list',
      lincenseDetails: 'lincense-details',
      fawriaLicenseDetails: 'fawria-license-details',
      charteredaccount: 'chartered-account-projects',
      charteredAccountProjectTotal: 'chartered-account-project-total',
      realStateDeveloperUnitsListComponent: 'real-state-developer-units-list',
      unitDetails: 'unit-details',
      unitDetailsWithParam: 'unit-details/:unitCode',
      contractRequestList: 'contract-request-list',
      contractRequestDetails: 'contract-request-details/:id',
      addContract: 'add-contract/',
      addContractWithParam: 'add-contract/:unitId',
      contractDetails: 'contract-details',
      viewContract: 'view-contract',
      licenseProjectsAccountantDetails: 'license-projects-accounatant-details',
      lincenseCertificates: 'lincense-certificates',
      lincenseRequestApprovals: 'lincense-request-approvals',
      lincenseRequestApprovalDetails: 'lincense-request-approval-details',
      lincenseProjects: 'lincense-projects',
      projectList: 'project-list',
      developerProjectList: 'developer-project-list',
      recommendationLogsList: 'recommendations-logs-list',
      projectDetails: 'project-details',
      RenewLicensesList: 'renew-licenses-list',
      employeeCreateLicense: 'employee-create-license',
      employeeLicenseList: 'employee-license-list',
      buyerList: 'buyer-list',
      buyerListTabs: 'buyer-list-tabs',
      buyerDetails: 'buyer-details',
      contractdocumentation: 'contract-documentation',
      licensecertificatetemplate: 'license-certificate-template',
      licensecertificatetemplatedetails: 'license-certificate-template-details',
      addlicensecertificatetemplate: 'add-license-certificate-template',
      addPeriodiccharteredaccountantreport:
        'add-Periodic-chartered-accountant-report',
      periodiccharteredaccountantreportlist:
        'add-Periodic-chartered-accountant-report-list',
      zones: 'zones',
      businessPaymentTemplates: 'business-payment-templates',
      itemsLog: 'items-log',
      paymentTermsTabs: 'payment-terms-tabs',
      licenseProjectFawriaDeveloperList:
        'license-project-fawria-developer-list',
      projectPartiesStatus: 'fawria-project-parties-status',
    },
    licenseProjectRequests: {
      createLicenseProjectRequestList: 'create-license-project-request',
      licenseProjectRequestList: 'license-project-request-list',
      licenseProjectRequests: 'requests',
      ProjectLicenseRequestDetails: 'Project-License-Request-Details',
      ProjectLicenseActiveRequestDetails:
        'Project-License-Active-Request-Details',
      licenseProjectRequestDetails: 'license-project-request-details',
      cancelLicenseSummary: 'project-license-cancel-license-request-summary',
      createcancelLicense: 'create-cancel-license-request',
      reactivaiteLicenseSummary:
        'project-license-reactivateActive-request-summary',
      createreactivaiteLicense: 'create-reactivate-license-request',
      changePlanSummary: 'project-license-change-plan-request-summary',
      createchangePlanRequest: 'create-change-plan-request',
      createchangeengineer: 'create-change-engineer',
      changeEngineerSummary: 'project-license-change-engineer-request-summary',
      changespaceorunitssummary: 'change-space-or-units-summary',
      createchangespaceorunits: 'create-change-space-or-units',
      createchangeprojectname: 'create-change-project-name',
      changeprojectnamesummary: 'change-project-name-summary',
      createchangebuyerortenantcontract:
        'create-change-buyer-or-tenant-contract',
      changebuyerortenantcontractsummary:
        'change-buyer-or-tenant-contract-summary',
      createaddingdelegator: 'create-adding-delegator',
      addingdelegatorsummary: 'adding-delegator-summary',
      createremovingdelegator: 'create-removing-delegator',
      removingdelegatorsummary: 'removing-delegator-summary',
      createchangeoraddunitmodel: 'create-change-or-add-unit-model',
      changeoraddunitmodelsummary: 'change-or-add-unit-model-summary',
      createwithdrawsurplusbeforeprojectend:
        'create-withdraw-surplus-before-project-end',
      withdrawsurplusbeforeprojectendsummary:
        'withdraw-surplus-before-project-end-summary',
      createCharteredAccountantRequest: 'create-chartered-accountant-request',
      charteredAccountantRequestSummary:
        'create-chartered-accountant-request-summary',
      accountKeeperRequestSummary: 'account-keeper-request-summary',
      createAccountKeeperRequest: 'create-account-keeper-request',
      createChangePartiesAgreementRequest: 'create-parties-agreement-request',
      changePartiesAgreementRequestSummary: 'parties-agreement-request-summary',
      transferAmountsBetweenSubaccountsInEscrowAccountSummary:
        'transfer-amount-summary',
      createTransferAmountsBetweenSubaccountsInEscrowAccount:
        'create-transfer-amount',
      createobjectionToSupervisionAndFollowupCosts:
        'create-objection-to-supervision-and-followup-costs',
      objectionToSupervisionAndFollowupCostsSummary:
        'objection-to-supervision-and-followup-costs-summary',
      createLiftingTheMarkOnThePropertyTitleDeedRequest:
        'create-lifting-the-mark-on-the-property-title-deed',
      liftingTheMarkOnThePropertyTitleDeedRequestSummary:
        'lifting-the-mark-on-the-property-title-deed-summary',
      createRequestTemplate: 'create-request-template',
      requestTemplateSummary: 'request-template-summary',
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
      charteredaccount: 'chartered-account-projects',
      renewLincense: 'renew-lincense',
      lincenseSummary: 'lincense-summary',
      lincenseList: 'lincense-list',
      lincenseDetails: 'lincense-details',
      lincenseCertificates: 'lincense-certificates',
      lincenseRequestApprovals: 'lincense-request-approvals',
      lincenseRequestApprovalDetails: 'lincense-request-approval-details',
      projectList: 'project-list',
      contractdocumentation: 'contract-documentation',
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
