import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectExchangeDocumentInsuranceCompanyEnum, LicenseProjectExchangeDocumentWithdrawalMethodEnum } from "./license-project-exchange-document-paging-dto";

export interface LicenseProjectExchangeDocumentCreateUpdateDto {
  id: string;
  licenseProjectId: string;
  //البند الرئيسى
  mainItemId: number;
  //البند الفراعى
  subItemId: number;
  //رقم الوثيقة
 // documnetNumber: string;
  //تاريخ الصرف
  exchangeDate: Date;
  //المبلغ
  amount: number;
  //تاريخ الاعتماد
  //approvalDate: Date;
  //البيان
  statment: string;
  //المستفيد
  liceneProjectBeneficiaryTypeId: number;
  //وصف المستفيد
  beneficiaryDescription: string;
  //سجل المشترين
  licenseProjectBuyerId: string;
  //رقم الدفعة
  batchNumber: string;
  sysLicenseRelativeWeightId: string;
  //المستندات الداعمة
  licenseProjectExchangeDocumentFiles: LicenseProjectExchangeDocumentFileDto[];
  //مرفقات التأمين
  licenseProjectExchangeInsuranceDocumentFiles: LicenseProjectExchangeInsuranceDocumentFileDto[];
  //مرفقات الضمان
  licenseProjectExchangeBankGuaranteeDocumentFiles: LicenseProjectExchangeBankGuaranteeDocumentFileDto[];


  exchangePurpose?: string;

  bankGuaranteeAttachmentId: string | null;
  withdrawalMethodId: number | null;
  insurancePolicyNumber: string | null;
  insuranceStartDate: string | null;
  insuranceEndDate: string | null;
  insuranceAttachmentId: string | null;
  insuranceCompanyId: number | null;

  ///التأمين -- اخري
  otherInsuranceCompanyName?: string;
  letterNumber?: string;
  letterDate?: string;
  projectProgressPercentage?: number;
}

export interface LicenseProjectExchangeDocumentFileDto {
  id: string;
  fileId: string;
  file?: SysFileManagerCreateUpdateDto
  licenseProjectExchangeDocumentId: string;
}
export interface LicenseProjectExchangeInsuranceDocumentFileDto {
  id: string;
  fileId: string;
  file?: SysFileManagerCreateUpdateDto
  licenseProjectExchangeDocumentId: string;
}
export interface LicenseProjectExchangeBankGuaranteeDocumentFileDto {
  id: string;
  fileId: string;
  file?: SysFileManagerCreateUpdateDto
  licenseProjectExchangeDocumentId: string;
}
