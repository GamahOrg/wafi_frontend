import { DropDownNameDto } from "./drop-down-name.dto";

export class AdditionalServicesDto {    
    id: string = "";
    licenseProjectsId : string = "";
    sysLicenseProjectServiceId : string = "";
    period : number|null = null;
    price : number|null = null;
    sysLicenseProjectService:DropDownNameDto = new DropDownNameDto();
}
export class AdditionalServicesCreateUpdateDto {    
    id: string = "";
    licenseProjectsId : string = "";
    sysLicenseProjectServiceId : string = "";
    period : number|null = null;
    price : number|null = null;
}
export class SysLicenseProjectServicePeriodCreateUpdateDto {    
    id: string = "";
    licenseProjectServiceId : string = "";
    period : number = 0;
    price : number = 0;
}