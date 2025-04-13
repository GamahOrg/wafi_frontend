import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface LicenseProjectFeasibilityStudyFileCreateUpdateDto {
    id:string;
    feasibilityStudyFileId :string;
    licenseProjectFeasibilityStudyId :string;
}
export interface LicenseProjectFeasibilityStudyFileDto
{
    id:string;
    feasibilityStudyFileId :string;
      feasibilityStudyFile:SysFileManagerCreateUpdateDto;
    licenseProjectFeasibilityStudyId :string;
}
