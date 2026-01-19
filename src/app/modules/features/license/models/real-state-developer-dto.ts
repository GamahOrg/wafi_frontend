import { LicenseProjectBuyerStatusEnum } from "../dataModels/license-project-buyer-list-paging-dto";

export interface GetDeveloperProjectsResponseDto {
  licenseProjectId: string;
  projectName: string;
  licenseNumber: string;
  projectStartDate: string;
  projectEndDate: string;
}

export interface GetProjectDetailsResponseDto {
  licenseProjectId: string;
  projectName: string;
  licenseNumber: string;
  projectStartDate: string;
  projectEndDate: string;
  accountNumber: string;
  developerName: string;
  bankName: string;
  projectType: string;
}

export interface GetProjectUnitsListResponseDto {
  id: string;
  licenseProjectId: string;
  unitId: string;
  unitType: string;
  unitCode: string;
  unitSpace: number;
  unitModel: string;
  price: number;
  deliveryOn: Date;
  unitStatus: string;
  licenseProjectName: string;
  unitStatusId:LicenseProjectUnitCodeStatus
}

export interface LicenseProjectBuyerContractListDto {
  id: string;
  contractNumber: string;
  projectName: string;
  unitCode: string;
  unitType: string;
  price: number;
  contractStatus: string;
  contractSource: string;
  createdOn: Date;
}

export interface LicenseProjectBuyerUnitListFilterDto {
  searchText?: string;
  statusId?: LicenseProjectUnitCodeStatus;
  licenseProjectId: string;
  unitType?: LicenseProjectUnitType;
  pageNumber: number;
  pageSize: number;
}
export enum LicenseProjectUnitCodeStatus
{   All = 0 ,
    NotSold = 1,
  Sold = 2,
  PendingBuyerApproval = 3,
  SoldOutsidePlatform = 4
}
export enum LicenseProjectUnitType
{   All = 0,
    Building = 1,
    Block = 2
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

export interface GetBuyerContractResponseDto {
  contractId: string;
  projectName: string;
  unitCode: string;
  unitType: string;
  contactNumber: number;
  price: number;
  contractUrl: string;
  contractStatus: string;
}

export interface UpdateContractStatusRequestDto {
  contractId: string;
  status: LicenseProjectBuyerStatusEnum;
  rejectionReason?: string;
  otp?: string;
}
export enum BuyerTypeEnum
{
    //فرد
    Individual = 1,
    //منشأة
    Facility = 2
}
export interface SaveContractRequestDto {
  unitId: string;
  name: string;
  nidNumber: string;
  nationalNumber?: string;
  mobileNumber?: string;
  email?: string;
  buyerTypeId: number;
  birthDate?: string;
  isNew?: boolean;
  contractDate?: string;
  price?: number;
  delegatorFileId?: string;

  isOldContract?: boolean;
  contractFileId?: string;
  saleDate?: string;
}

export interface SaveContractResponseDto {
  contractId: string;
}

export interface LicenseBuyerRecordDto {
  contractId: string;
  buyerType :string;
  creationDate: Date;
  buyerName: string;
  contractType:string;
  buyerTypeId: number;
  mobile: string;
  contractNumber: string;
  contractStatus: string;
  contractStatusId: number;
  price:number;
  contractPath: string;
  nidNumber: string;
  nationalNumber: string;
  rejectionReason?: string;
  contractFileId?:string
  isOldContract:boolean
}

export interface GetProjectUnitDetailsResponseDto {
  unitId: string;
  projectName: string;
  licenseProjectId: string;
  city: string;
  unitType: string;
  unitCode: string;
  modelName:string;
  contarctNumber: string;
  floor: string;
  blockBuildCode: string;
  unitSpace: string;
  price: number;
  supportedPrice?: number;
  deliveryOn: Date;
  unitStatus: string;
  buyerName:string;
  unitStatusId?: LicenseProjectUnitCodeStatus;
  contracts: LicenseBuyerRecordDto[];
}

export interface GetUnitCodeTaxesFeesDto {
  realEstateTransactionTaxValue: number;
  priceAfterAddingRealEstateTransactionTax: number;
}

export interface SysBuyerTypeDto {
  id: number;
  name: string;
}

export interface LicenseProjectBuyerPaymentTypeDto {
  id: number;
  name: string;
}
export interface ContractStatusDto {
  id: number;
  name: string;
}
export interface GenerateContractRequestDto {
  contarctId: string;
  paymentTypeId: LicenseProjectBuyerPaymentTypeEnum;
  paymentPlanId?: string | null;
  address: string
}
export enum LicenseProjectBuyerPaymentTypeEnum {
     //نقدى
     Cash = 1,
     //تمويل
     Finance = 2
 }
export interface GenerateContractResponseDto {
  contractId:string
  contractUrl: string;
  contractFileId?:string;
}

export interface GetProjectUnitContractDetailsResponseDto {
  contractId: string;
  buyerId: string;
  unitId: string;
  licenseProjectId: string;
  projectName: string;
  buyerName?:string;
  city: string;
  unitCode: string;
  unitType: string;
  unitSpace: string | number;
  contarctNumber: string;
  floor: string;
  blockBuildCode: string;
  price: number;
  deliveryOn: Date;
  contractDate: Date;
  contractStatusId: number;
  contractStatus: string;
  paymentTypeId: number | null;
  paymentType: string;
  contractUrl: string;
  rejectionReason?: string;
  buyerTypeId: number;
  buyerType: string;
  facilityName?: string;
  facilityNationalNumber?: string;
  modelName?: string;
  address?: string;
  licenseProjectBuyerBusinessPaymentId?: string;
  licenseProjectBuyerBusinessPayment?: LicenseProjectBusinessPaymentResponseDto;
  contractFileId: string;
  contractSource:string;
  isOldContract:boolean;
  licenseProjectBuyerCancellationRequest:LicenseProjectBuyerCancellationRequestDto[]
}
export interface LicenseProjectBuyerCancellationRequestDto {
  id:number;
  requestCode: string;
  licenseProjectBuyerId: string;
  contarctNumber: string;
  name: string;
  cancelRequestStatusId: CancelRequestStatusEnum | null;
  cancelRequestStatusName: string;
  cancelRequestReason: string | null;
  cancelRequestDate: string | null;
  rejectCancelRequestReason: string | null;
}

export enum CancelRequestStatusEnum {
  None = 0,
  Pending = 1,
  Approved = 2,
  Rejected = 3
}
export interface SubUnitTypesDto {
  id: number;
  name: string;
}

export interface UnitCodeStatusDto {
  id: number;
  name: string;
}

// Cancellation Request DTOs
export interface CreateCancellationRequestDto {
  licenseProjectBuyerId: string;
  cancelRequestReason: string;
}
export interface CancelContractRequestDto {
  contractId: string;
  rejectionReason: string;
}
export interface ApproveCancellationRequestDto {
  cancellationRequestId: number;
}

export interface RejectCancellationRequestDto {
  cancellationRequestId: number;
  rejectReason: string;
}

export interface LicenseProjectBuyerCancellationRequestFilterDto {
  searchText?: string;
  statusId?: CancelRequestStatusEnum;
  pageNumber: number;
  pageSize: number;
}
