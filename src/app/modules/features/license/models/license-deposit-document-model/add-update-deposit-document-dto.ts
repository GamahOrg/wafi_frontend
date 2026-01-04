export interface AddUpdateLicenseProjectDepositDto {
  id: string | null;
  licenseProjectId: string;
  LicenseProjectBuyerId: string | null;
  amount: number;
  referenceNumber: string;
  depositDate: Date;
  item: string;
  mianItemDescription: string;
  batchNumber: string;
  statment: string;
  mainItemId: LicenseProjectDepositDocumentMainItemEnum;

  //رقم الشيك -الحوالة
  checkNumber: string;
  //نوع الإيداع
  sysDepositTypeId: number;
  // حساب الضمان
  accountNumber: string;
  //حساب التكاليف الانشائية
  constructionCostsAccountNumber: string;
  //المبلغ المتوفر بحساب التكاليف الانشائية
  constructionCostsAvailableAmount: number;
  //حساب الادارى والتسويقى
  administrativeAndMarketingAccountNumber: string;
  //المبلغ المتوفر بحساب الادارى والتسويقى
  administrativeAndMarketingAvailableAmount: number;
  //حساب الحفظ
  custodyAccountNumber: string;
  //المبلغ المتوفر بحساب الحفظ
  custodyAvailableAmount: number;

  //المبلغ المضاف لحساب التكاليف الانشائية
  constructionCostsAmount: number;
  //المبلغ المضاف للحساب الادارى والتسويقى
  administrativeAndMarketingAmount: number;
  //المبلغ المضاف لحساب الحفظ
  escrowAccountAmount: number;
  bankId:string ;
  paymentTypeId: number;
  installmentId: string | null;

}

export enum LicenseProjectDepositDocumentMainItemEnum {
  collectionFromClients = 1,
  //تمويل بنكى
  bankFinancing = 2,
  //تمويل ذاتى
  selfFinancing = 3,
  //تمويل وزارى
  ministerialFinancing = 4,
  //أخرى
  others = 5,
}
export class MainItemsDto {
  id: string = '';
  name: string = '';
}

export interface SysSettingsDto{
  id: string;
  settingValue: string;
  settingKey: string;
}
