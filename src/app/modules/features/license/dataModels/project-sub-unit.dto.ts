import { LicenseProjectModelDto } from './license-project-model.dto';
import { ProjectUnitCodeDto } from './project-unit-code.dto';

export class ProjectSubUnitDto {
  id: string = '';
  licenseProjectUnitId: string = '';
  subUnitTypeId: number = 0;
  typeName?: string | undefined = '';
  subUnitCount: number = 0;
  subUnitType?: SysLicenseProjectSubUnitTypeDto | null;
  licenseProjectsId?: string | null = null;
  licenseProjectModels?: LicenseProjectModelDto[] = [];
  codeList?: ProjectUnitCodeDto[] | any[] = [];
  isPrevious: boolean = false;
  canDelete?: boolean;
  subUnitTypeName?: string;

}

export interface SysLicenseProjectSubUnitTypeDto {
  id: number;
  unitTypeId: string;
  name: string;
}

export interface LicenseProjectSubUnitCreateUpdateDto {
  id: string;
  licenseProjectUnitId: string | null;
  subUnitTypeId: number;
  subUnitCount: number;
  licenseProjectsId: string | null;
}
