export interface LicenseDepositDocumentDetailsDto {
  id: string;
  amount: number;
  referenceNumber: string;
  depositDate: Date;
  item: string;
  mianItemDescription: string;
  licenseProjectName: string;
  licenseProjectBuyerId: string | null;
  licenseProjectBuyerTypeId: number;
  buyerName: string;
  nidNumber: string;
  mainItem: string;
  unitCode: string;
  blockCode: string;
  contractNumber: string;
  batchNumber: string;
  statment: string;
  mainItemId: number;

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
  bankId:string;
  bankName:string;
}
