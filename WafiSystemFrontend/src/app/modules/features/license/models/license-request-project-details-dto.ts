export interface LicenseProjectRequestDetailsDto
{
  licenseProjectId: string;
  facilityId: string;
  facilityName: string;
  licenseProjectName: string;
  charteredAccountantName: string;
  engineeringConsultantName: string;
  licenseProjectRequestId: string;
  licenseProjectRequestCancellationId: string;
  areaName?: string;
  cityName?: string;
  licenseProjectSubUnitType?: string[];
  landTotalSpace?: number;
  subUnitCount: number;
  licenseStartDate?: Date;
  licenseEndDate?: Date;
  projectStartDate: Date;
  projectEndDate: Date;
  accountNumber?: string;
  certificateNumber?: string;
  commercialRegisterNumber: string;
  // المطور العقارى
  justificationsAndReasons?: string;
  acceptDeclarationOfCommitment: boolean;
  documentSupportingJustificationFiles: SysFileManagerCreateUpdateDto[];

  // المخالصة مع الاستشارى
  isClearanceEngineeringConsultantDone: boolean;
  clearanceEngineeringConsultantFileId?: string;
  clearanceEngineeringConsultantFile?: SysFileManagerCreateUpdateDto;
  reasonsForNotFinalizingEngineeringConsultantClearance?: string;
  nonClearanceDocumentEngineeringConsultantFiles: SysFileManagerCreateUpdateDto[];

  // المخالصة مع المحاسب القانوني
  isClearanceAccountantDone: boolean;
  clearanceAccountantFileId?: string;
  clearanceAccountantFile?: SysFileManagerCreateUpdateDto;
  reasonsForNotFinalizingAccountantClearance?: string;
  nonClearanceDocumentAccountantFiles: SysFileManagerCreateUpdateDto[];

  // المطور الرئيسى
  mainDeveloperApproved: boolean;

  // الاستشارى الهندسى
  achievementRate?: number;
  lastEngineeringReportId?: string;
  lastEngineeringReport?: SysFileManagerCreateUpdateDto;

  // المحاسب القانونى
  escrowAccountBalance?: number;
  lastFinancialReportId?: string;
  lastFinancialReport?: SysFileManagerCreateUpdateDto;
  acknowledgment: boolean;
  licenseProjectSoldUnitAttachmentFiles: SysFileManagerCreateUpdateDto[];
}

export interface DocumentSupportingJustificationFile {
    licenseProjectCancellationRequestId: string;
    documentId: string | null;
  }
  
  export interface SysFileManagerCreateUpdateDto {
    fileDescription: string;
    filePath: string;
    fileType: string;
    id: string;
  }
  
  export interface NonClearanceDocumentFile {
    licenseProjectCancellationRequestId: string;
    documentId: string;
  }