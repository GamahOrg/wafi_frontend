import { LicenseProjectTimeScheduleOwnerType } from "../models/files-data";

export interface CheckAddingReplingDto {
    id:string;
    ownerTypeId :LicenseProjectTimeScheduleOwnerType;
    isClosed :boolean;
}
