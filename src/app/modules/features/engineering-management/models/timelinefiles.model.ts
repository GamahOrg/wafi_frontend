import type { LicenseProjectTimeScheduleOtherAttachment } from "./license-project-time-schedule-other-attachment";

 export interface timelinefilesModel {
    id: string;
    licenseProjectId: string;
    threeDReportFileId: string;
    monthDate : string | null
    generalSitePlanFileId: string;
    primaveraFileId: string;
    scheduleFileId: string;
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFileId: string;
    cashFlowCurveFileId: string;
    employmentCountCurveFileId: string;
    licenseProjectTimeScheduleOtherAttachments: LicenseProjectTimeScheduleOtherAttachment[];
    note?: string;
  }


 