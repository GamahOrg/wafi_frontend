import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class ArchitecturalDesignFilesDto {
    id: string = "";
    licenseProjectId : string = "";
    licenseProjectPlanAccordingApprovedStandardsFiles : LicenseProjectPlanAccordingApprovedStandardsFileCreateUpdateDto[] =[];
    licenseProjectDesignFiles : LicenseProjectDesignFileCreateUpdateDto[]=[]; 
}
export class LicenseProjectPlanAccordingApprovedStandardsFileCreateUpdateDto {
    id: string = "";
    licenseProjectsId: string = "";
    planFileId: string = "";
    planFile: SysFileManagerCreateUpdateDto|null = null;
}
export class LicenseProjectDesignFileCreateUpdateDto {
    id: string = "";
    licenseProjectId : string = "";
    designFileId : string = "";
    designFile: SysFileManagerCreateUpdateDto|null = null;
}