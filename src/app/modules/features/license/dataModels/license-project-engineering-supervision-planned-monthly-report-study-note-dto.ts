import { LicenseProjectTimeScheduleOwnerType } from "./filesdata/filesdata.model";

export interface LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto {
     licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
    notes :string;
    createdOn :Date;
  ownerTypeId:LicenseProjectTimeScheduleOwnerType
}
