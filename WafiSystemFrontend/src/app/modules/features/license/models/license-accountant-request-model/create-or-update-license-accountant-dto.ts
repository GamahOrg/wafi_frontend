export interface CreateOrUpdateAccountantRequestDto
{
    justificationsAndReasons:string
    isClearanceAccountantDone:boolean
    clearanceAccountantFileId:string
    reasonsForNotFinalizingAccountantClearance:string
    nonClearanceDocumentAccountantFiles:AccountantFilesCreateOrUpdateDto[]
    agreementDocumentFileId:string
    workingDays:number
    optionalTerms:string
}
export interface AccountantFilesCreateOrUpdateDto{
    changeLicenseProjectAccountantRequestId?:string | null
    documentId:string
}