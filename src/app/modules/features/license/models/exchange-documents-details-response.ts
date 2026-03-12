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
  documentNumber: string;
  availableAmountAfterExchange: null;
  licenseProjectBuyerId: string;
  batchNumber: string;
  buyerName: string;
  buyerNIDNumber: string;
  blockCode: string;
  unitCode: string;
  contractNumber: string;
  subAccountNumber: null;
  mainAccountNumber: string;
  availableAmountBeforeExchange: null;
  remainingAmountAfterExchange: null;
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
  withdrawalMethodId: null;
  withdrawalMethod: null;
  insurancePolicyNumber: null;
  insuranceStartDate: null;
  insuranceEndDate: null;
  insuranceAttachmentId: null;
  insuranceAttachment: null;
  insuranceCompanyId: null;
  insuranceCompany: null;
  customerType: number | null;
  canTakeAction: boolean;
  id: string;
  elementName: string | null;
  statement: string | null;
  licenseProjectExchangeDocumentRejectionBy?: LicenseProjectExchangeDocumentRejectionBy;
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

interface File {
  fileDescription: string;
  filePath: string;
  fileType: string;
  id: string;
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
