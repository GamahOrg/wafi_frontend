import { LicenseProjectTimeScheduleOwnerType } from "./filesdata/filesdata.model";

export interface CheckAddingReplingDto {
    id:string;
    ownerTypeId :LicenseProjectTimeScheduleOwnerType;
    isClosed :boolean;
}
