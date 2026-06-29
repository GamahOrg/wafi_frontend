export interface exchangeRequestDetails {
  licenseProjectId: string;
  licenseProjectName: string;
  mainItemId: number;
  mainItem: MainItem;
  subItemId: number;
  subItem: MainItem;
  sysLicenseRelativeWeightId: null;
  sysLicenseRelativeWeight: any | null;
  documnetNumber: string;
  exchangeDate: string;
  currentAvailableAmount: null;
  amount: number;
  approvalDate: Date;
  licenseProjectExchangeDocumentFiles: LicenseProjectExchangeDocumentFile[];
  statment: string;
  liceneProjectBeneficiaryTypeId: number;
  liceneProjectBeneficiaryType: MainItem;
  beneficiaryDescription: null;
  beneficiaryName: null;
  bankName: string;
  ibanNumber: string;
  documentNumber: string;
  availableAmountAfterExchange: number | null;
  licenseProjectBuyerId: string;
  batchNumber: string;
  buyerName: string;
  buyerNIDNumber: string;
  blockCode: string;
  unitCode: string;
  contractNumber: string;
  subAccountNumber: null;
  mainAccountNumber: string;
  availableAmountBeforeExchange: number | null;
  remainingAmountAfterExchange: number | null;
  statusId: number;
  status: MainItem;
  developerCustomerId: null;
  escrowAccountEmployeeId: null;
  escrowAccountEmployeeStatusId: number;
  accountantStatusId: number;
  accountantStatus: MainItem;
  accountantRejectionReason: null;
  consultantStatusId: number;
  consultantStatus: MainItem;
  consultantRejectionReason: null;
  rejectionReason: string;
  exchangePurpose: null;
  documentFileId: string | null;
  documentFile: null;
  bankGuaranteeAttachmentId: null;
  bankGuaranteeAttachment: null;
  withdrawalMethodId: number | null;
  withdrawalMethod: MainItem | null;
  insurancePolicyNumber: string | null;
  insuranceStartDate: string | null;
  insuranceEndDate: string | null;
  insuranceAttachmentId: string | null;
  insuranceAttachment: ExchangeDocumentFileDto | null;
  licenseProjectExchangeInsuranceDocumentFiles: LicenseProjectExchangeInsuranceDocumentFile[];
  licenseProjectExchangeBankGuaranteeDocumentFiles: LicenseProjectExchangeBankGuaranteeDocumentFile[];
  insuranceCompanyId: number | null;
  insuranceCompany: MainItem | null;
  releaseLetterId: string | null;
  releaseLetter: ExchangeDocumentFileDto | null;
  customerType: number | null;
  canTakeAction: boolean;
  id: string;
  elementName: string | null;
  statement: string | null;
  licenseProjectExchangeDocumentRejectionBy?: LicenseProjectExchangeDocumentRejectionBy;
  letterNumber: string | null;
  letterDate: string | null;
  projectProgressPercentage: number | null;
  workDonePercentage: number | null;
}
export enum LicenseProjectExchangeDocumentRejectionBy {
  //حسابات الضمان
  Employee = 1, //مفوض المحاسب
  Accountant = 2, //مفوض الاستشارى
  Consultant = 3,
}
interface LicenseProjectExchangeDocumentFile {
  fileId: string;
  file: File;
  licenseProjectExchangeDocumentId: string;
  id: string;
}

export interface LicenseProjectExchangeInsuranceDocumentFile {
  fileId: string;
  file: File;
  licenseProjectExchangeDocumentId: string;
  id: string;
}
export interface LicenseProjectExchangeBankGuaranteeDocumentFile {
  fileId: string;
  file: File;
  licenseProjectExchangeDocumentId: string;
  id: string;
}

interface File {
  fileDescription: string;
  filePath: string;
  fileType: string;
  id: string;
}

export interface ExchangeDocumentFileDto {
  id: string;
  filePath: string;
  fileDescription: string;
  fileType?: string;
}

interface MainItem {
  name: string;
  id: number;
}

export interface ApproveRejectExchangeRequest {
  exchangeDocumentId: string;
  isApproved: Boolean;
  rejectionReason?: string;
}
