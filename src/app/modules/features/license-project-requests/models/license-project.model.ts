import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface LicenseProjectDetailsDto {
  id: string;
  name: string;
  facilityName: string;
  commercialRegisterNumber: string;
  developerCertifiedNumber: string;
  certifiedNumber: string;
  cityName: string;
  areaName: string;
  unitTypeName: string;
  charteredAccountantName: string | null;
  engineeringConsultantName: string | null;
  accountNumber: string | null;
  achievementRate: number | null;
  subUnitCount: number | null;
  unitsSellCount: number | null;
  bankName: string;
  endOn: string | null;
}

export interface EscrowAccountDto {
  licenseProjectId: string;
  //حالة حساب الضمان
  escrowAccountStatus?: string;
  //تاريخ انشاء حساب الضمان
  escrowCreationDate?: string;
  // حساب الضمان
  accountNumber?: string;
  // رقم الحساب البنكي
  bankName?: string;
  //حساب التكاليف الانشائية
  constructionCostsAccountNumber?: string;
  //حساب الادارى والتسويقى
  administrativeAndMarketingAccountNumber?: string;
  //حساب الحفظ
  custodyAccountNumber?: string;
  //حساب الحوافز
  incentivesSubIBAN?:string;
  //حساب التمويل
  financingSubIBAN?:string;
  //معرف ملف حساب الضمان
  bankDocumentToActivateEscrowAccountsFileId?: string;
  bankDocumentToActivateEscrowAccountsFile?: SysFileManagerCreateUpdateDto;
}
