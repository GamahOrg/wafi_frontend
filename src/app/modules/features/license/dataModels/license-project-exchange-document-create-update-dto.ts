import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface LicenseProjectExchangeDocumentCreateUpdateDto {
  id: string;
  licenseProjectId: string;
  //البند الرئيسى
  mainItemId: number;
  //البند الفراعى
  subItemId: number;
  //رقم الوثيقة
  documnetNumber: string;
  //تاريخ الصرف
  exchangeDate: Date;
  //المبلغ
  amount: number;
  //تاريخ الاعتماد
  approvalDate: Date;
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
}

export interface LicenseProjectExchangeDocumentFileDto {
  id: string;
  fileId: string;
  file?: SysFileManagerCreateUpdateDto
  licenseProjectExchangeDocumentId: string;
}
