import { LicenseProjectCancellationRequestFileDto } from "./update-clearance-engineering-component-dto"

export interface UpdateClearanceAccountantComponentDto{
    escrowAccountBalance: number  
    lastFinancialReportId: string 
    licenseProjectSoldUnitAttachmentFiles?:  LicenseProjectCancellationRequestFileDto[]
}