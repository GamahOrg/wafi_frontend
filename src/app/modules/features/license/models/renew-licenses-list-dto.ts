import { LicenseProject} from "../dataModels/license-request-header-dto";
import { FacilityShortDto } from "./facility-short-dto";
import { SysLicenseRequestTypeCreateUpdateDto } from "./sys-license-request-type-create-update-dto";

export interface ExpiredLicenseProjectDto {
    id:string;
    facility:FacilityShortDto
      licenseRequestType :SysLicenseRequestTypeCreateUpdateDto;
      licenseRequestVersions :LicenseRequestVersionCreateUpdateDto[]
      licenseProject :LicenseProject
}
export interface LicenseRequestVersionCreateUpdateDto
{
      startOn :Date;
      endOn :Date;
      licenseRequestHeaderId: string
   
}
