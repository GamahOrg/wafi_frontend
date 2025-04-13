import { LicenseProjectRequestTypeEnum } from "../enums/license-project-request-type.enum";

export interface CreateOrUpdateChangeCharteredAccountantRequestDto {
    licenseProjectId: string,
    facilityId:string,
    licenseProjectRequestTypeId: LicenseProjectRequestTypeEnum,
    licenseProjectRequestId : string,
    charteredAccountantFacilityId? : string,
    previousCharteredAccountantFacilityId? : string,
    reasons : string,
    alternativeCharteredAccountantAgreementId? : string,
    previousCharteredAccountantReportId? : string,
    clearanceCharteredAccountantFileId? : string,
    id? : string,
}