import { LicenseProjectBuyerTypeDto } from "./license-project-buyer-dto";

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
  unitCodeFullName: string;

  //رقم البلوك / العمارة
  blockId: string;
  blockCode: string;
  blockCodeFullName: string;
  //رقم العقد
  contractNumber: string;
  licenseProjectBuyerType: LicenseProjectBuyerTypeDto;
}
export interface LicenseProjectBuyerLookUpDto {
  id: string;
  name: string;
  nidNumber: string;
  units: BuyerUnitsDto[];
}

export interface BuyerUnitsDto {
  id: string;
  unitCode: string;
  blockCode: string;
  contractNumber: string;
  installments: BuyerInstallmentDto[];
}

export interface BuyerInstallmentDto {
  id: string;
  installmentNumber: number;
  rentPercentage: number;
  deductionPercentage: number;
  description: string;
  isPaid: boolean;
}
