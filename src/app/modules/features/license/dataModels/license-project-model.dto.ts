import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { ProjectSubUnitDto } from "./project-sub-unit.dto";

export class LicenseProjectModelDto {
  id: string = '';
  licenseProjectSubUnitId: string = '';
  name: string = '';
  space: number = 0;
  buildingFlatSpace: number = 0;
  properties: string = '';
  unitsCount: number = 0;
  subUnitTypeId: number = 0;
  licenseProjectSubUnit: ProjectSubUnitDto | null = null;
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];
}
export class LicenseProjectModelCreateUpdateDto {
  id: string = '';
  licenseProjectSubUnitId: string = '';
  name: string = '';
  space: number = 0;
  buildingFlatSpace: number = 0;
  properties: string = '';
  unitsCount: number = 0;
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];

}
export class LicenseProjectModelDesignFileDto {
  id: string = '';
  modelId: string = '';
  designFileId: string = '';
  designFile: SysFileManagerCreateUpdateDto | null = null;
}


export interface LicenseProjectCompletionData {
  isProfileCompleted: boolean;
  completedProfilePercentage: number;
  isProjectHasUnitForFarzIntegration: boolean;
}