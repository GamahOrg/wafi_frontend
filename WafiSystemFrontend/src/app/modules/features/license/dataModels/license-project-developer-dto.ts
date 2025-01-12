import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { FacilityShortDto } from "../models/facility-short-dto";

export class LicenseProjectDeveloperDto {
  id: string = "";
  licenseProjectId: string = "";
  developerLicenseProjectId: string = "";
  licenseNumber: string = "";
  // delegatorName: string = "";
  // delegatorIdentityNumber: string = "";
  // delegatorEmail: string = "";
  // delegatorMobile: string = "";
  isApproved: boolean = false;
  approvedOn: Date = new Date();
  developerAgreementFileId: string = "";
  developerAgreementFile: SysFileManagerCreateUpdateDto = new SysFileManagerCreateUpdateDto();
  developerLicenseProject: FacilityShortDto = new FacilityShortDto();
}
export class LicenseProjectDeveloperCreateUpdateDto {
  id: string = "";
  licenseProjectId: string = "";
  developerLicenseProjectId: string = "";
  licenseNumber: string = "";
  // delegatorName: string = "";
  // delegatorIdentityNumber: string = "";
  // delegatorEmail: string = "";
  // delegatorMobile: string = "";
  isApproved: boolean = false;
  approvedOn: Date = new Date();
  developerAgreementFileId: string = "";
}
