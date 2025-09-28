import { SysLicenseRelativeWeightDto } from '../models/license-project-relative-weight-dto';
import { LicenseProjectBuyerDto } from './license-project-buyer-dto';
import { LicenseProjectExchangeDocumentFileDto } from './license-project-exchange-document-create-update-dto';
import {
  LiceneProjectBeneficiaryTypeDto,
  LicenseProjectExchangeDocumentMainItemDto,
  LicenseProjectExchangeDocumentSubItemDto,
} from './license-project-exchange-document-paging-dto';
import { LicenseProjectDto } from './license-project-risk-dto';

export interface LicenseProjectExchangeDocumentDto {
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
  sysLicenseRelativeWeight: SysLicenseRelativeWeightDto
    //المستندات الداعمة
  licenseProjectExchangeDocumentFiles: LicenseProjectExchangeDocumentFileDto[];
  liceneProjectBeneficiaryType: LiceneProjectBeneficiaryTypeDto;
  mainItem: LicenseProjectExchangeDocumentMainItemDto;
  subItem: LicenseProjectExchangeDocumentSubItemDto;
  licenseProjectBuyer: LicenseProjectBuyerDto;
  licenseProject: LicenseProjectDto;
}
