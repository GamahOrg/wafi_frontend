import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { FileManagerBE } from '../../facilities/dataModels/financial-capability.model';
import { SysLicenseProjectEngineeringRequestStatusDto } from '../models/project-business-case-report-dto';
import { LicenseNatureTypeEnum } from "../enums/license-nature-type";

export class ProjectBasicDataDto {
  id: string = '';
  name: string = '';
  projectDescription: string = '';
  projectServices: string = '';
  typeId: number = -1;
  categoryId: string = '';
  subCategoryId: string = '';
  projectSize!: ProjectSizeEnum;
  licenseProjectScopeId: string = '';
  startOn: string = '';
  endOn: string = '';
  achievementRate!: number;
  landTotalSpace!: number;
  landValue!: number;
  //hasStarted!:boolean | null;
  isProjectStarted!: boolean | null;
  engineeringConsultantReportFileId!: string | null;
  engineeringConsultantReportFile: FileManagerBE | null = null;
  quantitiesTableFile: FileManagerBE | null = null;
  licenseProjectScope: SysLicenseProjectScopeDto | null = null;
  supervisionReportStatus!: SysLicenseProjectEngineeringRequestStatusDto;
  //licenseProjectQuantitiesTableFiles:LicenseProjectQuantitiesTableFileDto[] = []
}
export class ProjectBasicDataCreateUpdateDto {
  id: string = '';
  name: string = '';
  projectDescription: string = '';
  projectServices: string = '';
  typeId: number = -1;
  categoryId: string = '';
  subCategoryId: string = '';
  projectSize!: ProjectSizeEnum;
  licenseProjectScopeId: string = '';
  startOn: string = '';
  endOn: string = '';
  achievementRate!: number;
  landTotalSpace!: number;
  landValue!: number;
  engineeringConsultantReportFileId: string | null = '';
  licenseNatureType?: LicenseNatureTypeEnum|null = null

  //  licenseProjectQuantitiesTableFiles:LicenseProjectQuantitiesTableFileDto[] = []
}

export interface ProjectCategoryDto {
    id: string;
    categoryName?: string;
}
export interface SysLicenseProjectScopeDto {
  name: string;
  code: LicenseProjectScopeEnum;
}

export enum LicenseProjectScopeEnum {
  Superstructure = 1,
  Infrastructure = 2,
  ComprehensiveDevelopment = 3,
}
export class LicenseProjectQuantitiesTableFileDto {
  id: string = '';
  licenseProjectId: string = '';
  quantitiesTableFileId: string = '';
  quantitiesTableFile: SysFileManagerCreateUpdateDto | null = null;
}
export class LicenseProjectQuantitiesTableFileCreateUpdateDto {
  id: string = '';
  licenseProjectId: string = '';
  quantitiesTableFileId: string = '';
  fileType: string = '';
}

export enum ProjectSizeEnum {
  Small = 1,
  Medium = 2,
  Large = 3,
}

export interface SysLicenseRequestTypeDto {
  id: string;
  name: string;
  typeCode: string;
}
