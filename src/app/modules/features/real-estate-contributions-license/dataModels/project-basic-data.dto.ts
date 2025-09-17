import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { FileManagerBE } from '../../facilities/dataModels/financial-capability.model';

export class ProjectBasicDataDto {
  id: string = '';
  name: string = '';
  projectDescription: string = '';
  projectServices: string = '';
  typeId: string = '';
  categoryId: string = '';
  subCategoryId: string = '';
  projectSize!: ProjectSizeEnum;
  licenseProjectScopeId: string = '';
  startOn: string = '';
  endOn: string = '';
  achievementRate!: number;
  landTotalSpace!: number;
  landValue!: number;
  hasStarted!: boolean | null;
  engineeringConsultantReportFileId!: string | null;
  engineeringConsultantReportFile: FileManagerBE | null = null;
  quantitiesTableFile: FileManagerBE | null = null;
  //licenseProjectQuantitiesTableFiles:LicenseProjectQuantitiesTableFileDto[] = []
}
export class ProjectBasicDataCreateUpdateDto {
  id: string = '';
  name: string = '';
  projectDescription: string = '';
  projectServices: string = '';
  typeId: string = '';
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
  //  licenseProjectQuantitiesTableFiles:LicenseProjectQuantitiesTableFileDto[] = []
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

export enum LicenseProjectScopeEnum {
  Superstructure = 1,
  Infrastructure = 2,
  ComprehensiveDevelopment = 3,
}

export interface SysLicenseRequestTypeDto {
  id: string;
  name: string;
  typeCode: string;
}
