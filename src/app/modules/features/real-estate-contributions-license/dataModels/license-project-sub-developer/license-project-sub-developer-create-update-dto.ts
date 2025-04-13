import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProject } from "../../models/license-project.model";

export interface LicenseProjectSubDeveloperCreateUpdateDto {
  id: any;
  licenseProjectId: string;
  subDeveloperLicenseProjectId: string;
  subDeveloperId: string;
  licenseNumber : string;
  delegatorName: string;
  // delegatorEmail: string;
  delegatorMobile: string;
  delegatorIdentityNumber : string;
  projectName: string;
  subDeveloperAgreementFileId: string;
  subDeveloperAgreementFile: SysFileManagerCreateUpdateDto
   //FacilityShortDto? SubDeveloper { get; set; }
   subDeveloperLicenseProject: LicenseProject
}
