import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { SysLicenseProjectLandOwnerTypeDto } from './project-land-owner.dto';
import { FileManagerBE } from '../../facilities/dataModels/financial-capability.model';
import { BankDto } from './bank.dto';

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
export interface ApprovalDeedConstructionDto {
  deedNumber: string;
  constructionNumber: string;
  constructionFile: SysFileManagerCreateUpdateDto;
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

export interface FawriaLicenseDeedAndConstructionLicenseDto {
  fawriaLicenseDeed: FawriaLicenseDeedDto;
  constructionLicenseNumber: string | null;
  constructionLicenseFileId: string | null;
  approvedPlansFileIds?: string[] | null;
  licenseProjectConstructionLicenseTypeId: number | null;
  isUnit: boolean;
}

export interface FawriaLicenseDeedDto {
  licenseProjectsId: string;
  number: string;
  date: string;
  deedIntegrationType: DeedIntegrationTypeEnum;
}

export interface FawriaLicenseDeedAndConstructionLicenseResponseDto {
  isRiyadCity: boolean;
  deedData: DeedData;
  licenseInfoList?: LicenseInfoList[];
  licenseProjectId: string | null;
  errorCodes: ErrorCodeModel[];
}

export enum DeedIntegrationTypeEnum {
  JusticeMinistry = 0,
  RER = 1,
}

export interface ErrorCodeModel{
  errorCode:string;
  message:string;
}

export class ConstructionLicenseIntegrationDto {
  landInfoList?: LicenseInfoList[] = [];
}

export interface LicenseInfoList {
  licenseProjectConstructionLicenseTypeId: ConstructionLicenseTypeEnum
  licenseFileId: string | null;
  landTotalSpace: number | null;
  amanahName: string;
  baladiyaName: string;
  districtName: string;
  licenseNumber: string;
  licenseIssueDate: string;
  licenseExpiryDate: string;
  requestNumber: string | null;
  requestDate: string | null;
  ownershipDocNumber: string;
  ownershipDocDate: string;
  buildingPercentage: string;
  floorsCountIncludingGround: number;
  wallPerimeter: number;
  numberOfUnits: number;
  officeName: string;
  licenseType: LicenseType;
  licenseStatus: LicenseStatus;
  ownershipDocType: OwnershipDocType;
  ownerInfoList: OwnerInfoList[];
  landInfoList: LandInfoList[];
  unitInfoList: UnitInfoList[] | null;
  boundaryDetails: BoundaryDetail[];
  buildingInfo: BuildingInfo | null;
  engineeringOfficeDetails: EngineeringOfficeDetails | null;
  thermalConductivityDetails: ThermalConductivityDetails | null;
}

export interface BoundaryDetail {
  side: Side;
  boundary: string;
  length: string;
  ertidad: string;
  outcropping: string;
  truncate: string;
}
export interface Side {
  code: string;
  description: string;
}

export interface ThermalConductivityDetails {
  wallsConductivity: string;
  ceilingsConductivity: string;
  windowsConductivity: string;
}


export interface BuildingInfo {
  buildingPercentage: string;
  krookiNumber: string;
  floorsCountIncludingGround: string;
  wallPerimeter: string;
  buildType: BuildType;
  numberOfUnits: string;
  componentList: ComponentList;
}

export interface BuildType {
  code: string;
  description: string;
}

export interface Component {
  componentName: ComponentName;
  componentUsage: ComponentUsage;
  numberOfUnits: string;
  componentArea: string;
}

export interface ComponentList {
  component: Component[];
}

export interface ComponentName {
  code: string;
  description: string;
}

export interface ComponentUsage {
  code: string;
  description: string;
}

export interface EngineeringOfficeDetails {
  officeName: string;
  officeLicenseNumber: string;
  email: string;
  telephoneNumber: string;
}

// export interface LicenseInfoList {
//   landTotalSpace: number;
//   amanahName: string;
//   baladiyaName: string;
//   districtName: string;
//   licenseNumber: string;
//   licenseIssueDate: string;
//   licenseExpiryDate: string;
//   ownershipDocNumber: string;
//   ownershipDocDate: string;
//   buildingPercentage: string;
//   floorsCountIncludingGround: number;
//   wallPerimeter: number;
//   numberOfUnits: number;
//   officeName: string;
//   licenseType: LicenseType;
//   licenseStatus: LicenseStatus;
//   ownershipDocType: OwnershipDocType;
//   ownerInfoList: OwnerInfoList[];
//   landInfoList: LandInfoList[];
//   unitInfoList?: UnitInfoList[];
// }

export interface UnitInfoList {
  unitType: string;
  unitNumber: number;
}

export interface LicenseType {
  code: string;
  description: string;
}

export interface LicenseStatus {
  code: string;
  description: string;
}

export interface OwnershipDocType {
  code: string;
  description: string;
}

export interface OwnerInfoList {
  ownerName: string;
  ownerType: OwnerType;
  ownerIdentifier?: OwnerIdentifier;
}

export interface OwnerType {
  code: string;
  description: string;
}

export interface OwnerIdentifier {
  item?: string;
  itemElementName?: string;
  nationalID?: string;
}

export interface LandInfoList {
  planNumber: string;
  planName: string;
  landNumber: string;
  landArea: number;
  landAreaSpecifiedndArea?: boolean;
}

export interface BaladyRequestDto {
  issueOn: Date;
  licenseNumber?: string;
}


export class DeedInfoByNumberDto {
  isSuccess: boolean | null = false;
  correlationId: string | null = '';
  httpCode: number | null = 0;
  errorList: string[] | null = [];
  errorDetails: DeedErrorDetailsDto[] | null = [];
  data: DeedData | null = new DeedData();

}

export class DeedData {
  integrationTypeId: number | null = null;
  certifiedPlansFilesIds: string[] | null = null;
  totalLandValue: number | null = 0;
  encryptedSerial: string = "";
  deedSerial: number | null = 0;
  deedNo: number | null = 0;
  ownerId: number | null = 0;
  ownerIdNumber: number | null = 0;
  ownerIdType: number | null = 0;
  mortgageeSerial: number | null = 0;
  mortgageeName: string | null = "";
  mortgageeId: string | null = "";
  mortgageAgreementId: string | null = "";
  mortgageAgreement: FileManagerBE | null = null;
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
  transactionTypeCode: string | null = '';
  transactionTypeName: string | null = '';
  transactionFormatCode: string | null = '';
  transactionFormatName: string | null = '';
  deedContainerStatus: string | null = '';
  isDeedObselete: boolean | null = false;
  isGiftConditioned: number | null = 0;
  giftConditionExpiryDate: string | null = '';
  parentDeedNo: string | null = '';
  parentDeedDate: string | null = '';
  isSensitiveData: boolean | null = false;
  ainiRegistrationFlag: boolean | null = false;
  isRealEstateRERConstrained: boolean | null = false;
  isRealEstateMortgaged: boolean | null = false;
  isRealEstateHalted: boolean | null = false;
  isRealEstateTestamented: boolean | null = false;
  isRealEstateConstrained: boolean | null = false;
  isDeedGifted: boolean | null = false;
  isApprovedForDevelopment: boolean | null = false;
  sremOrderStats: string | null = '';
  deedLimits: DeedLimitsDto | null = new DeedLimitsDto();
  deedLocation: string | null = '';
  deedOwners: DeedOwnersDto[] = [];
  deedRealState: DeedRealStateDto[] | null = [];
  deedMortgagee: string | null = '';
  deedRealestateAmount: number | null = 0;
  realEstatePrice: number | null = 0;
  deedRealestateArea: number | null = 0;
  realEstaePriceText: string | null = '';
  hasSharedRealStates: boolean = false;
  canMergeDeeds: boolean = false;
  deedUsedBy: string | null = '';
  deedDateGregorian: string | null = '';
}

export class DeedRealStateDto {
  serial: number | null = 0;
  regionCode: string | null = '';
  area: number | null = 0;
  areaText: string | null = '';
  locationDescription: string | null = '';
  landNumber: string | null = '';
  unitNumber: string | null = '';
  cONSTRAINED: number | null = 0;
  hALT: number | null = 0;
  pAWNED: number | null = 0;
  tESTAMENT: number | null = 0;
  northLimitCode: string | null = '';
  northLimitName: string | null = '';
  northLimitDescription: string | null = '';
  northLimitLength: number | null = 0;
  northLimitLengthChar: string | null = '';
  southLimitCode: string | null = '';
  southLimitName: string | null = '';
  southLimitDescription: string | null = '';
  southLimitLength: number | null = 0;
  southLimitLengthChar: string | null = '';
  eastLimitCode: string | null = '';
  eastLimitName: string | null = '';
  eastLimitDescription: string | null = '';
  eastLimitLength: number | null = 0;
  eastLimitLengthChar: string | null = '';
  westLimitCode: string | null = '';
  westLimitName: string | null = '';
  westLimitDescription: string | null = '';
  westLimitLength: number | null = 0;
  westLimitLengthChar: string | null = '';
  realEstateRemarks: string | null = '';
  cityName: string | null = '';
  cityCode: number | null = 0;
  districtName: string | null = '';
  districtCode: number | null = 0;
  blockNumber: string | null = '';
  planNumber: string | null = '';
  realestateIdentityNumber: string | null = '';
  isNorthRiyadhExceptioned: number | null = 0;
  realEstateTypeCode: number | null = 0;
  realEstateTypeName: string | null = '';
  landRatio: string | null = '';
  penfitRatio: string | null = '';
  usingType: string | null = '';
  isAgriculture: number | null = 0;
  landShare: number | null = 0;
  baseLandArea: number | null = 0;
  coordinates: CoordinatesDto[] | null = [];
}

export class CoordinatesDto {}

export class DeedOwnersDto {
  id: string = '';
  serial: number | null = 0;
  ownerName: string | null = '';
  idNumber: string | null = '';
  idType: string | null = '';
  sexType: string | null = '';
  birthDateYear: number | null = 0;
  birthDateMonth: number | null = 0;
  birthDateDay: number | null = 0;
  mobileNo: string | null = '';
  ownerType: string | null = '';
  nationality: string | null = '';
  owningAmount: number | null = 0;
  owningArea: number | null = 0;
  CONSTRAINED: number | null = 0;
  hALT: number | null = 0;
  pAWNED: number | null = 0;
  tESTAMENT: number | null = 0;
  isSensitiveData: boolean | null = false;
  agreementFileId: string = '';
  bankId: string | null = null;
  bank: BankDto | null = null;
  accountNumber: string | null = null;
  agreementFile: FileManagerBE | null = null;
  deedMarginalizationFileId: string = '';
  isCustomer: boolean | null = false;
  deedMarginalizationFile: FileManagerBE | null = null;
  identityTypeCode?:number;
  typeCode?:number;
}

export class OwnersDto {
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  ownersList: UpdateOwnersDto[] = [];
}
export class UpdateOwnersDto {
  id: string = '';
  mobileNo: string | null = '';
}

export class DeedLimitsDto {
  northLimitName: string | null = '';
  northLimitDescription: string | null = '';
  northLimitLength: string | null = '';
  northLimitLengthChar: string | null = '';
  southLimitName: string | null = '';
  southLimitDescription: string | null = '';
  southLimitLength: string | null = '';
  southLimitLengthChar: string | null = '';
  eastLimitName: string | null = '';
  eastLimitDescription: string | null = '';
  eastLimitLength: string | null = '';
  eastLimitLengthChar: string | null = '';
  westLimitName: string | null = '';
  westLimitDescription: string | null = '';
  westLimitLength: string | null = '';
  westLimitLengthChar: string | null = '';
}

export class DeedErrorDetailsDto {
  errorCode: string | null = '';
  errorDescription: string | null = '';
  exception: string | null = '';
  time: string | null = '';
}


export enum DeedIntegrationErrorCode {
  DeedNotValid = 'DeedNotValid',
  ConstructionLicenseNotValid = 'ConstructionLicenseNotValid',
  GeneralError = 'GeneralError',
  AiniDeed = 'AiniDeed',
}
export enum ConstructionLicenseTypeEnum {
  Balady = 1,
  RiyadhAmanah = 3,
  Itmam = 2,
}
