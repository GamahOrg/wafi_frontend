export interface LicenseProjectEngineeringDataTapStatus {
    hasTimeSchedule : boolean;
    hasSupervisionPlannedReport : boolean;
    supervisionReportStatusId:number;
}
export enum LicenseProjectEngineeringRequestStatus
{
    Draft = 0,
    ///<summary>جديد</summary>
    New = 1,
    ///<summary>تحت الدراسة</summary>
    UnderStudy = 2,
    ///<summary>يوجد الملاحظات</summary>
    CustomerFeedback = 3,
    ///<summary> تم إرسال معالجة الملاحظات</summary>
    Compile = 4,
    ///<summary>تم الاعتماد</summary>
    Certified = 5,
}
