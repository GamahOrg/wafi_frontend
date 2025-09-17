import type { LicenseProjectTimeScheduleOwnerType } from "../enums/LicenseProjectTimeScheduleOwnerType.enum";

export interface CheckAddingReplingDto {
    id:string;
    ownerTypeId :LicenseProjectTimeScheduleOwnerType;
    isClosed :boolean;
}
