export interface CreateRealEstateDeveloperRequestDto
{
isClearanceEngineeringConsultantDone: boolean  
clearanceEngineeringConsultantFileId: string 
facilityId: string 
licenseProjectId: string 
reasonsForNotFinalizingEngineeringConsultantClearance: string
isClearanceAccountantDone: boolean  
clearanceAccountantFileId: string 
reasonsForNotFinalizingAccountantClearance: string
nonClearanceDocumentEngineeringConsultantFiles?:  LicenseProjectCancellationRequestFileDto[]
nonClearanceDocumentAccountantFiles?:  LicenseProjectCancellationRequestFileDto[]
documentSupportingJustificationFiles:  LicenseProjectCancellationRequestFileDto[]
justificationsAndReasons: string
}
export interface LicenseProjectCancellationRequestFileDto{
    licenseProjectCancellationRequestId? : string
    documentId: string
}