import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { SysLicenseProjectLandOwnerTypeDto } from "./project-land-owner.dto";
import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";

export interface SaveLicenseProjectDeed {
  id: string ;
  licenseProjectsId: string;
  typeId: number | null;
  integrationType: number;
  number: string|null;
  deedDate: string | null;
  issueOn: string;
  deedOwners: DeedOwnersDto[] | null;
}

export class ProjectLandDeedDto {
  id: string = "";
  licenseProjectsId: string = "";
  typeId: number|null = null;
  typeName: string | undefined = "";
  // number: string = '';
  //imageFileId : string = "";
  issueOn: string = "";
  integrationType: number = 0;
  // year: string = "";
  // month: string = "";
  // day: string = "";
  // ownersCount: number = 0;
  // space: string = '';
  isApproved: boolean = false;
  approvedOn: string | null = "";
  // imageFile: SysFileManagerCreateUpdateDto | null = null;
  data: DeedData = new DeedData();
  licenseProjectOwnerDeeds : LicenseProjectOwnerDeedDto[]=[];
  type:SysLicenseProjectLandOwnerDeedTypeDto=new SysLicenseProjectLandOwnerDeedTypeDto();
}
export class SysLicenseProjectLandOwnerDeedTypeDto
{
  name:string="";
}
export class LicenseProjectOwnerDeedDto
{
  id:string="";
  licenseProjectLandOwnerId :string="";
  licenseProjectDeedId :string="";
  licenseProjectLandOwner: licenseProjectLandOwnerDto=new licenseProjectLandOwnerDto();
}
export class licenseProjectLandOwnerDto
{
   typeId  :string="";
   licenseProjectsId  :string="";
   nationalIdOrCRA  :string="";
   name  :string="";
   mobileNumber  :string="";
  agreementFileId  :string="";
  agreementFile :SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
  deedMarginalizationFileIdId  :string="";
  deedMarginalizationFileId :SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
  type: SysLicenseProjectLandOwnerTypeDto =new SysLicenseProjectLandOwnerTypeDto();
}
export interface ProjectLandDeedCreateUpdateDto {
  id: string;
  licenseProjectsId: string;
  integrationType: number;
  typeId: number;
  number: string;
  // imageFileId : string = "";
  // issueOn : string = "";
  year: string;
  month: number;
  day: number;
  isApproved: boolean;
  approvedOn: string | null;
}



export class DeedInfoByNumberDto {
  isSuccess: boolean | null = false;
  correlationId: string | null = "";
  httpCode: number | null = 0;
  errorList: string[] | null = [];
  errorDetails: DeedErrorDetailsDto[] | null = [];
  data: DeedData | null = new DeedData();

}

export class DeedData {
  encryptedSerial: string = "";
  deedSerial: number | null = 0;
  deedNo: number | null = 0;
  ownerId: number | null = 0;
  ownerIdNumber: number | null = 0;
  ownerIdType: number | null = 0;
  mortgageeSerial: number | null = 0;
  mortgageeName: string | null = "";
  mortgageeId: string | null = "";
  deedDateYear: number | null = 0;
  deedDateMonth: number | null = 0;
  deedDateDay: number | null = 0;
  deedDate: string | null = null;
  deedDateNum: number | null = 0;
  deedCity: string | null = "";
  deedArea: number | null = 0;
  deedAreaText: string | null = null;
  deedStatus: string | null = "";
  deedText: string | null = "";
  deedSource: string | null = "";
  productionTransactionSerial: number | null = 0;
  transactionTypeCode: string | null = "";
  transactionTypeName: string | null = "";
  transactionFormatCode: string | null = "";
  transactionFormatName: string | null = "";
  deedContainerStatus: string | null = "";
  isDeedObselete: boolean | null = false;
  isGiftConditioned: number | null = 0;
  giftConditionExpiryDate: string | null = "";
  parentDeedNo: string | null = "";
  parentDeedDate: string | null = "";
  isSensitiveData: boolean | null = false;
  ainiRegistrationFlag: boolean | null = false;
  isRealEstateRERConstrained: boolean | null = false;
  isRealEstateMortgaged: boolean | null = false;
  isRealEstateHalted: boolean | null = false;
  isRealEstateTestamented: boolean | null = false;
  isRealEstateConstrained: boolean | null = false;
  isDeedGifted: boolean | null = false;
  isApprovedForDevelopment: boolean | null = false;
  sremOrderStats: string | null = "";
  deedLimits: DeedLimitsDto | null = new DeedLimitsDto();
  deedLocation: string | null = "";
  deedOwners: DeedOwnersDto[] = [];
  deedRealState: DeedRealStateDto[] | null = [];
  deedMortgagee: string | null = "";
  deedRealestateAmount: number | null = 0;
  realEstatePrice: number | null = 0;
  deedRealestateArea: number | null = 0;
  realEstaePriceText: string | null = "";
  hasSharedRealStates: boolean = false;
  canMergeDeeds: boolean = false;
  deedUsedBy: string | null = "";
  deedDateGregorian: string | null = ""
}

export class DeedRealStateDto {
  serial: number | null = 0;
  regionCode: string | null = "";
  area: number | null = 0;
  areaText: string | null = "";
  locationDescription: string | null = "";
  landNumber: string | null = "";
  unitNumber: string | null = "";
  cONSTRAINED: number | null = 0;
  hALT: number | null = 0;
  pAWNED: number | null = 0;
  tESTAMENT: number | null = 0;
  northLimitCode: string | null = "";
  northLimitName: string | null = "";
  northLimitDescription: string | null = "";
  northLimitLength: number | null = 0;
  northLimitLengthChar: string | null = "";
  southLimitCode: string | null = "";
  southLimitName: string | null = "";
  southLimitDescription: string | null = "";
  southLimitLength: number | null = 0;
  southLimitLengthChar: string | null = "";
  eastLimitCode: string | null = "";
  eastLimitName: string | null = "";
  eastLimitDescription: string | null = "";
  eastLimitLength: number | null = 0;
  eastLimitLengthChar: string | null = "";
  westLimitCode: string | null = "";
  westLimitName: string | null = "";
  westLimitDescription: string | null = "";
  westLimitLength: number | null = 0;
  westLimitLengthChar: string | null = "";
  realEstateRemarks: string | null = "";
  cityName: string | null = "";
  cityCode: number | null = 0;
  districtName: string | null = "";
  districtCode: number | null = 0;
  blockNumber: string | null = "";
  planNumber: string | null = "";
  realestateIdentityNumber: string | null = "";
  isNorthRiyadhExceptioned: number | null = 0;
  realEstateTypeCode: number | null = 0;
  realEstateTypeName: string | null = "";
  landRatio: string | null = "";
  penfitRatio: string | null = "";
  usingType: string | null = "";
  isAgriculture: number | null = 0;
  landShare: number | null = 0;
  baseLandArea: number | null = 0;
  coordinates: CoordinatesDto[] | null = [];
}

export class CoordinatesDto {

}

export class DeedOwnersDto {
  id: string = "";
  serial: number | null = 0;
  ownerName: string | null = "";
  idNumber: string | null = "";
  idType: string | null = "";
  sexType: string | null = "";
  birthDateYear: number | null = 0;
  birthDateMonth: number | null = 0;
  birthDateDay: number | null = 0;
  mobileNo: string | null = "";
  ownerType: string | null = "";
  nationality: string | null = "";
  owningAmount: number | null = 0;
  owningArea: number | null = 0;
  CONSTRAINED: number | null = 0;
  hALT: number | null = 0;
  pAWNED: number | null = 0;
  tESTAMENT: number | null = 0;
  isSensitiveData: boolean | null = false;
  agreementFileId : string = "";
  agreementFile: FileManagerBE | null = null;
  deedMarginalizationFileId : string = "";
  deedMarginalizationFile: FileManagerBE | null = null;
}

export class OwnersDto {
  licenseProjectId: string = "00000000-0000-0000-0000-000000000000";
  ownersList: UpdateOwnersDto[] = [];
}
export class UpdateOwnersDto {
  id: string = "";
  mobileNo: string | null = "";
}

export class DeedLimitsDto {
  northLimitName: string | null = "";
  northLimitDescription: string | null = "";
  northLimitLength: string | null = "";
  northLimitLengthChar: string | null = "";
  southLimitName: string | null = "";
  southLimitDescription: string | null = "";
  southLimitLength: string | null = "";
  southLimitLengthChar: string | null = "";
  eastLimitName: string | null = "";
  eastLimitDescription: string | null = "";
  eastLimitLength: string | null = "";
  eastLimitLengthChar: string | null = "";
  westLimitName: string | null = "";
  westLimitDescription: string | null = "";
  westLimitLength: string | null = "";
  westLimitLengthChar: string | null = "";
}

export class DeedErrorDetailsDto {
  errorCode: string | null = "";
  errorDescription: string | null = "";
  exception: string | null = "";
  time: string | null = "";
}
