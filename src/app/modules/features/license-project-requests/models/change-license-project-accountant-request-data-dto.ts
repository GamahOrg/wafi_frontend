import { CustomerShortDto } from "../../license/models/facility-short-dto";

export interface LicenseProjectSubUnitDto {
  id: string;
  subUnitTypeId: number;
  subUnitCount: number;
}

export interface SysFileDto {
  id: string;
  fileDescription: string;
  filePath: string;
  fileType: string;
}

export interface ChangeLicenseAccountantRequestDataDto {
  licenseProjectNumber: string;
  licenseProjectName: string;
  licenseProjectCity: string;
  licenseProjectType: string;
  currentAccountantName: string;
  currentAccountantNumber: string;
  licenseProjectEndDate: string;
  licenseProjectSubUnits: Map<string,number>;
  totalSoldUnits: number;
  workDonePercentage: number;
  justificationsAndReasons: string;
  reasonsForNotFinalizingAccountantClearance: string;
  isClearanceAccountantDone: boolean;
  clearanceAccountantFile: SysFileDto | null;
  workDeliveryReportFile: SysFileDto | null;
}

export interface UpdateRequestDataPageDto {
  justificationsAndReasons: string | null;
  reasonsForNotFinalizingAccountantClearance: string | null;
  isClearanceAccountantDone: boolean;
  clearanceAccountantFileId: string | null;
  workDeliveryReportFileId: string | null;
}

export interface ChangeLicenseProjectAdditionalTermDto {
  id: string;
  licenseProjectRequestId: string;
  termsPartType: number;
  itemNumber: number;
  itemTitle?: string | null;
  itemText: string;
  isMainTerm: boolean;
  additionalTermsAcknowledgment: boolean;
  parentId?: string | null;
}

export interface AgreementPaymentItemDto {
  item: string;
  quantity: number;
  unitPrice: number;
  description: string;
}

export interface GetCharteredAccountantPaymentItemDto {
  item: string;
  quantity: number;
  unitPrice: number;
  description: string;
}

export interface GetAgreementDataPageResponseDto {
  facilityName: string | null;
  commercialRegisterationNumber: string | null;
  financialReportApprovalPeriodInDays: number | null;
  contractValue: number | null;
  paymentDeadline: number | null;
  changeLicenseProjectCharteredAccountantAuthorizedToSignDelegatorIds: string[];
  changeLicenseProjectCharteredAccountantAuthorizedToSignDelegators: CustomerShortDto[];
  changeLicenseProjectCharteredAccountantPayments: GetCharteredAccountantPaymentItemDto[];
}

export interface SaveAgreementDataPageDto {
  licenseProjectRequestId: string;
  commercialRegisterationNumber: string;
  financialReportApprovalPeriodInDays: number;
  contractValue: number;
  paymentDeadline: number;
  changeLicenseProjectCharteredAccountantAuthorizedToSignDelegators: string[];
  changeLicenseProjectCharteredAccountantPayments: AgreementPaymentItemDto[];
  saveAsDraft: boolean;
  handleNotes: boolean;
}
