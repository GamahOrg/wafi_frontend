import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';

export class ArchitecturalDesignFilesDto {
  id: string = '';
  licenseProjectId: string = '';
  requestId?: string | null = null;
  licenseProjectPlanAccordingApprovedStandardsFiles: LicenseProjectPlanAccordingApprovedStandardsFileCreateUpdateDto[] =
    [];
  licenseProjectDesignFiles: LicenseProjectDesignFileCreateUpdateDto[] = [];
}
export class LicenseProjectPlanAccordingApprovedStandardsFileCreateUpdateDto {
  id: string = '';
  licenseProjectsId: string = '';
  requestId?: string | null = null;
  planFileId: string = '';
  isPrevious: boolean = false;
  planFile: SysFileManagerCreateUpdateDto | null = null;
}
export class LicenseProjectDesignFileCreateUpdateDto {
  id: string = '';
  licenseProjectId: string = '';
  requestId?: string | null = null;
  designFileId: string = '';
  isPrevious: boolean = false;
  designFile: SysFileManagerCreateUpdateDto | null = null;
}
