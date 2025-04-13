import { LicenseProject } from "../../license/dataModels/license-request-header-dto";
import { FacilityShortDto } from "../models/facility-short-dto";
// import { LicenseProject } from "../models/license-project.model";
import { SysLicenseRequestTypeCreateUpdateDto } from "../models/sys-license-request-type-create-update-dto";

export interface ExpiredLicenseProjectDto {
  id: string;
  facility: FacilityShortDto
  licenseRequestType: SysLicenseRequestTypeCreateUpdateDto;
  licenseRequestVersions: LicenseRequestVersionCreateUpdateDto[]
  licenseProject: LicenseProject
}
export interface LicenseRequestVersionCreateUpdateDto {
  startOn: Date;
  endOn: Date;
  licenseRequestHeaderId: string
}
