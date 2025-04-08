import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectRequestStatusEnum } from '../enums/license-project-request-status.enum';

export interface RequestTemplateDetailsDto {  
    header: RequestTemplateHeaderDto;
    file: SysFileManagerCreateUpdateDto;
    licenseProjectRequestTemplateFile:LicenseProjectRequestTemplateFileDto;
}
export interface LicenseProjectRequestTemplateFileDto{
    id:string;
    displayName:string;
    isRequired:boolean;
}
export interface RequestTemplateHeaderDto {
    id:string;
    name:string;
    licenseProjectRequestId: string;
    licenseProjectId: string;
    projectName: string;
    externalRequestStatusId: LicenseProjectRequestStatusEnum;
}