import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto"
import { LicenseProjectRequestStatusEnum } from "../enums/license-project-request-status.enum"

export interface ChangePartiesAgreementDetialsDto {
    id: string
    licenseProjectId: string
    licenseProjectRequestId:string
    externalRequestStatusId:LicenseProjectRequestStatusEnum
    applicationFormFile:SysFileManagerCreateUpdateDto
    newAgreementCopy:SysFileManagerCreateUpdateDto
    projectName:string
}
export interface CreateOrUpdateChangePartiesAgreement {
    id?: string
    facilityId: string
    licenseProjectId: string
    applicationFormFileId:string
    newAgreementCopyId:string
    licenseProjectRequestId:string
}