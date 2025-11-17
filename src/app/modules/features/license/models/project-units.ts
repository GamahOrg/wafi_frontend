import { DeedData } from "../dataModels/project-land-deed.dto";
import { ProjectSubUnitDto } from "../dataModels/project-sub-unit.dto";
import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { ProjectUnitCodeDto } from "../dataModels/project-unit-code.dto";
import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";

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
  buildingBlockTypeId: number;
  licenseProjectSubUnits: ProjectSubUnitDto[];
  licenseProjectSubUnitsListCodes: ProjectUnitCodeDto[]
  designFileId: string;
  designFile: FileManagerBE;
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
  buildingBlockType: SysLicenseProjectBuildingBlockTypeDto,
  designFile: FileManagerBE;
}

export interface licenseProjectSubUnitsListCodes {
  id:string;
  code: string,
  deliveryOn: string,
  price: string,
  unitId: string,
  floorNumber:number;
  space:number;
}

export interface licenseProjectZones {
  code: string,
  licenseProjectUnits: licenseProjectUnits[],
}

export interface licenseProjectDeeds {
  number: string,
  issueOn: string,
  space: string,
  type: ProjectDeedsTypeNameModel,
  data: DeedData
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


export interface SysLicenseProjectBuildingBlockTypeDto {
  id: number;
  name: string;
  isBuilding: boolean;
  isBlock: boolean;
}