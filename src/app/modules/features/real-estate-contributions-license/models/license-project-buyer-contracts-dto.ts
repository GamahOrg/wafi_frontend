export interface LicenseProjectBuyerContractListDto {
  id: string;
  contractNumber: string;
  contractSourceName: string | null;
  unitCodeNumber: string | null;
  blockNumber: string;
  unitTypeName: string | null;
  price: number;
  statusName: string;
  statusId: number;
  isCancelled: boolean;
  licenseProjectName?: string;
  unitCodeId: string;
  licenseProjectId: string;
  buyerTypeName: string
}

export interface LicenseProjectBuyerContractFilterDto {
  licenseProjectId?: string;
  contractNumber?: string;
  statusId?: number;
  contractSourceId?: number;
  blockId?: string;
  unitCodeId?: string;
  isCancelled?: boolean;
  searchText?: string;
  pageNumber: number;
  pageSize: number;
  sortBy?: string;
  isDescending: boolean;
}

export interface GetProjectDetailsResponseDto {
  licenseProjectId: string;
  projectName: string;
  licenseNumber: string;
  projectStartDate: string;
  projectEndDate: string;
  projectType: string;
  accountNumber: string;
  bankName: string;
  developerName: string;
}

export enum LicenseProjectBuyerStatusEnum {
  New = 1,
  Cerified = 2,
  Refused = 3,
  Cancelled = 4
}

export interface LicenseProjectBusinessPaymentInstallmentResponseDto {
  id: string;
  installmentNumber: number;
  rentPercentage: number;
  deductionPercentage: number;
  description: string;
  isPaid: boolean | null;
}

export interface LicenseProjectBusinessPaymentResponseDto {
  paymentPlanId: string;
  modelTitle: string;
  licenseProjectBuyerPaymentTypeId: number;
  paymentInstallments: LicenseProjectBusinessPaymentInstallmentResponseDto[];
}
