export class ProjectSubUnitDto {
    id:string  = '';
    licenseProjectUnitId:string  = '';
    subUnitTypeId:number=0;
    typeName:string |undefined = '';
    subUnitCount:number  = 0;
    subUnitType?:SysLicenseProjectSubUnitTypeDto
}

export interface SysLicenseProjectSubUnitTypeDto  {
    id:number;
    unitTypeId: string;
    name: string;
}


export interface LicenseProjectSubUnitCreateUpdateDto {
    id:string;
    licenseProjectUnitId: string | null;
    subUnitTypeId: number;
    subUnitCount: number;
    licenseProjectsId: string | null;
}