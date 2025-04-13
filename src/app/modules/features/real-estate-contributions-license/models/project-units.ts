import { SysLicenseProjectLandOwnerTypeDto } from "../dataModels/project-land-owner.dto";
import { ProjectSubUnitDto } from "../dataModels/project-sub-unit.dto";
import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface ProjectUnit {
  id: string;
  zoneId: string;
  unitTypeId: string;
  unitTypeName : string;
  code: string;
  stageNumberId: string;
  stageNumber: string;
  constructionStartOn: Date,
  constructionEndOn: Date,
  licenseProjectsId: string;
  licenseProjectSubUnits: ProjectSubUnitDto[]
}

export interface licenseProjectSubUnits {
  subUnitCount: number,
  licenseProjectModels: licenseProjectModels[],
}

export interface licenseProjectModels {
  name: string,
  space: string,
  buildingFlatSpace: string,
  properties: string,
  unitsCount: string,
  licenseProjectModelDesignFiles: licenseProjectModelDesignFiles[],
}

export interface licenseProjectModelDesignFiles {
  designFileId :string;
  designFile :SysFileManagerCreateUpdateDto;
}

export interface licenseProjectUnits {
  id: string,
  code: string,
  constructionStartOn: string,
  constructionEndOn: string,
  unitTypeName: string,
  licenseProjectSubUnits: licenseProjectSubUnits[]
  licenseProjectSubUnitsListCodes: licenseProjectSubUnitsListCodes[],
}

export interface licenseProjectSubUnitsListCodes {
  id:string;
  code: string,
  deliveryOn: string,
  price: string,
  unitId: string,
  floorNumber:number;
}

export interface licenseProjectZones {
  code: string,
  licenseProjectUnits: licenseProjectUnits[],
}

/* export interface licenseProjectDeeds {
  number: string,
  issueOn: string,
  space: string,
  type: ProjectDeedsTypeNameModel,
} */
// export class ProjectLandDeedDto {
//   id: string = "";
//   licenseProjectsId : string = "";
//   typeId : string = "";
//   typeName : string|undefined = "";
//   number:string  = '';
//   // imageFileId : string = "";
//   issueOn : string = "";
//   ownersCount : number = 0;
//   space : string = '';
//   isApproved : boolean = false;
//   approvedOn : string = "";
//   imageFile:SysFileManagerCreateUpdateDto|null = null;
//   licenseProjectOwnerDeeds : LicenseProjectOwnerDeedDto[]=[];
//   type:SysLicenseProjectLandOwnerDeedTypeDto=new SysLicenseProjectLandOwnerDeedTypeDto();
// }
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
  type: SysLicenseProjectLandOwnerTypeDto =new SysLicenseProjectLandOwnerTypeDto();
}

export interface ProjectDeedsTypeNameModel {
  name: string,
  space: string,
  buildingFlatSpace: string,
  unitsCount: string,
}

export interface areaModel {
  areaName: string,
}

export interface cityModel {
  cityName: string,
}

export interface licenseProjectAddresses {
  areas: areaModel,
  cities: cityModel,
  neighborhoodName: string,
  streetName: string,
  longitude: string,
  latitude: string,
}

export interface licenseProjectDesignFiles {
  designFile: SysFileManagerCreateUpdateDto[],
}

export interface licenseProjectPlanAccordingApprovedStandardsFiles{
  planFile: SysFileManagerCreateUpdateDto[],
}


export interface licenseProjectConstructionLicenses {
  issueOn: string,
  before7:boolean;
  licenseNumber: string,
  licenseFile: SysFileManagerCreateUpdateDto,
}


export interface licenseProjectServices {
  period: string,
  price: string,
  sysLicenseProjectService : sysLicenseProjectService
}

export interface sysLicenseProjectService{
  name: string,
}
