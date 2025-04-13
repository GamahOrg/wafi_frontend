import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestStatusEnum } from "../enums/license-project-request-status.enum";
import { LiftingDeedListDto } from "src/app/shared/models/LiftingDeedList.dto";
import { LiftingDeedReasonDto } from "src/app/shared/models/LiftingDeedReason.dto";

export interface CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto {
    id?: string;
    licenseProjectId: string;
    facilityId: string;
    licenseProjectRequestId: string;
    applicationFormFileId?: string;
    liftingDeedReasonId:number;
    liftingDeedIds:any[];
    liftingDeeds: string[];

}
export interface LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto {
    id: string;
    licenseProjectId: string;
    licenseProjectRequestId: string;
    liftingDeedReasonId:number;
    liftingDeedReason:LiftingDeedReasonDto
    liftingDeeds: LiftingDeedListDto[];
    projectName?: string;
    externalRequestStatusId: LicenseProjectRequestStatusEnum;
    applicationFormFile?: SysFileManagerCreateUpdateDto;
}