import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { FacilityShortDto } from "../../license/models/facility-short-dto";
import { LicenseProjectRequestStatusEnum } from "../enums/license-project-request-status.enum";

export interface ChangeCharteredAccountantRequestDetailsDto {
    id: string,
    licenseProjectRequestId: string,
    licenseProjectId: string,
    externalRequestStatusId: LicenseProjectRequestStatusEnum,
    charteredAccountantFacility: FacilityShortDto,
    previousCharteredAccountantFacility: FacilityShortDto,
    applicationFormFile : SysFileManagerCreateUpdateDto,
    alternativeCharteredAccountantAgreement : SysFileManagerCreateUpdateDto,
    previousCharteredAccountantReport : SysFileManagerCreateUpdateDto,
    projectName:string,
    clearanceCharteredAccountantFile : SysFileManagerCreateUpdateDto,
    reasons:string
}