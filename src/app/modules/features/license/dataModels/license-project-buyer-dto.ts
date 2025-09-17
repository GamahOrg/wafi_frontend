import { SysFileManagerCreateUpdateDto } from '../models/license-request-project-details-dto';

export interface LicenseProjectBuyerDto {
  id: string;
  licenseProjectId: string;
  licenseProjectBuyerTypeId: number;
  name: string;
  nidNumber: string;
  mobile: string;
  contractFileId: string;
  //عدد الأراضي
  landNumbers: number;
  //رقم الوحدة
  unitCodeId: string;
  unitCode: string;
  averagePricePerMeter: number;
  //رقم البلوك / العمارة
  blockId: string;
  blockCode: string;
  //رقم العقد
  contractNumber: string;
  //تاريخ بيع
  saleDate: Date;
  //تاريخ تسليم
  deliveryDate: Date;
  //سعر  قبل الضريبة المضافة
  price: number;
  //نسبة الضريبة الحالية
  currentTax: number;
  //نسبة الضريبة الحالية للأرض
  currentTaxForLand: number;
  //نسبة الضريبة الحالية للوحدة
  currentTaxForUnit: number;
  //سعر  بعد الضريبة المضافة
  priceAfterTax: number;
  //السعر الشامل
  totalPrice: number;
  //تكاليف رسوم الاراضي
  landFeeCosts: number;
  //نسبة الإشراف او نسبة الرسوم
  percentageSupervisionOrFees: number;
  //نسبة الإشراف او نسبة الرسوم للأرض
  percentageSupervisionOrFeesForLand: number;
  //نسبة الإشراف او نسبة الرسوم للوحدة
  percentageSupervisionOrFeesForUnit: number;
  supervisionFromProjectBeginning: number;
  projectDayCounts: number;
  //الوحدات الملغاة
  isCancelled: boolean;

  // الإشراف والمتابعة من تاريخ البيع
  supervisionFollowupFromDateOfSale: number;
  // نسبة انجاز الوحدة
  unitCompletionRate: number;
  //المبالغ المحصلة
  amountsCollected: number;
  //نسبة المبالغ المحصلة
  percentageOfAmountsCollected: number;
  //المبالغ المتبقية
  remainingAmounts: number;

  licenseProjectBuyerType: LicenseProjectBuyerTypeDto;
  statusId: number;
  status: LicenseProjectBuyerStatusDto;
  space: number;
  contractFile: SysFileManagerCreateUpdateDto;
  paymentType: LicenseProjectBuyerPaymentTypeDto;
}
export interface LicenseProjectBuyerTypeDto {
  id: number;
  name: string;
}
export interface LicenseProjectBuyerStatusDto {
  id: number;
  name: string;
}
export enum LicenseProjectBuyerTypeEnum {
  Lands = 1,
  Units = 2,
}

export class LicenseProjectBuyerSettingDto {
  //نسبة الضريبة المضافة للارض
  currentTaxForLand: number = 0;
  //نسبة الضريبة المضافة للوحدة
  currentTaxForUnit: number = 0;
  // نسبة الرسوم للأرض
  percentageSupervisionOrFeesForLand: number = 0;

  //نسبة الإشراف او نسبة الرسوم للوحدة
  percentageSupervisionOrFeesForUnit: number = 0;
  supervisionFromProjectBeginning: number = 0;
  projectDayCounts: number = 0;

  percentageSupervisionOrFees: number = 0;
  startProjectDate: Date = new Date();
}
export interface LicenseProjectBuyerLookUpDto {
  id: string;
  name: string;
  nidNumber: string;
}
export interface LicenseProjectBuyerDetailsDto {
  id: string;
  licenseProjectId: string;
  licenseProjectBuyerTypeId: number;
  name: string;
  nidNumber: string;
  mobile: string;
  //عدد الأراضي
  landNumbers: number;
  //رقم الوحدة
  unitCodeId: string;
  unitCode: string;
  //رقم البلوك / العمارة
  blockId: string;
  blockCode: string;
  contractNumber: string;
  //نسبة الضريبة الحالية للوحدة
  licenseProjectBuyerType: LicenseProjectBuyerTypeDto;
}

export interface LicenseProjectBuyerPaymentTypeDto {
  id: number;
  name: string;
}


export interface LicenseProjectAccountsDto {
    // حساب الضمان
    accountNumber: string
    
    //حساب التكاليف الانشائية
    constructionCostsAccountNumber: string
    //المبلغ المتوفر بحساب التكاليف الانشائية
    constructionCostsAvailableAmount: number
    //حساب الادارى والتسويقى
    administrativeAndMarketingAccountNumber: string
    //المبلغ المتوفر بحساب الادارى والتسويقى
    administrativeAndMarketingAvailableAmount: number
    //حساب الحفظ
    custodyAccountNumber: string
    //المبلغ المتوفر بحساب الحفظ
    custodyAvailableAmount: number
}