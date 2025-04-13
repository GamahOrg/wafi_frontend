import { SysFileManagerCreateUpdateDto } from "../license-request-project-details-dto"

export interface LicenseAccountantDetailsDto
{
    facilityName: string
    licenseProjectName: string
    justificationsAndReasons: string
    isClearanceAccountantDone: boolean
    clearanceAccountantFile: SysFileManagerCreateUpdateDto
    reasonsForNotFinalizingAccountantClearance:string
    nonClearanceDocumentAccountantFiles: SysFileManagerCreateUpdateDto[]
    agreementDocumentFile: SysFileManagerCreateUpdateDto
    workingDays: number
    optionalTerms: string
}