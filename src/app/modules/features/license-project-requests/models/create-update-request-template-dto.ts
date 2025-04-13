export interface CreateOrUpdateRequestTemplateDto {
    id?:string
    licenseProjectId:string
    facilityId:string
    createFileFormData:CreateFileFormDataDto[]
    licenseProjectRequestTypeEnum: number
    licenseProjectRequestId?:string
}
export interface CreateFileFormDataDto {
    licenseProjectRequestTemplateFileId:string
    fileId?:string
}