import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { ProjectSubUnitDto } from "./project-sub-unit.dto";

export class LicenseProjectModelDto {
  id: string = '';
  licenseProjectSubUnitId: string = '';
  name: string = '';
  space: number|null = null;
  buildingFlatSpace: number|null = null;
  properties: string = '';
  unitsCount: number|null = null;
  subUnitTypeId: number =0
  licenseProjectSubUnit: ProjectSubUnitDto | null = null;
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];
}
export class LicenseProjectModelCreateUpdateDto {
  id: string = '';
  licenseProjectSubUnitId: string = '';
  name: string = '';
  space:number|null = null;
  buildingFlatSpace: number|null = null;
  properties: string = '';
  unitsCount:number|null = null;
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];

}
export class LicenseProjectModelDesignFileDto {
  id: string = '';
  modelId: string = '';
  designFileId: string = '';
  designFile: SysFileManagerCreateUpdateDto | null = null;
}
