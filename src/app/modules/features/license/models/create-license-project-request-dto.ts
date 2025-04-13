export interface CreateLicenseRequestProjectDto
{
 licenseProjectRequestTypeId:LicenseProjectRequestTypeEnum
 facilityId : string
 licenseProjectId : string
}

export enum LicenseProjectRequestTypeEnum
{
    CancelLicense,
    ReActivateLicese
}