import  { LicenseProjectTimeScheduleOwnerType } from "../enums/LicenseProjectTimeScheduleOwnerType.enum";

export interface LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto {
  licenseProjectEngineeringSupervisionPlannedReportDetailId: string;
  notes: string;
  createdOn: Date;
  ownerTypeId: LicenseProjectTimeScheduleOwnerType
}
