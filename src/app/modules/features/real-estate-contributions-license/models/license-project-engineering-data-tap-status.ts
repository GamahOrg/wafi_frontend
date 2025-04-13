export interface LicenseProjectEngineeringDataTapStatus {
    hasTimeSchedule : boolean;
    hasSupervisionPlannedReport : boolean;
    supervisionReportStatusId:number;
}
export enum LicenseProjectEngineeringRequestStatus
{
    Draf = 0,
    ///<summary>تحت الدراسة</summary>
    UnderStudy = 1,
    ///<summary>يوجد الملاحظات</summary>
    CustomerFeedback = 2,
    ///<summary> تم ارسال معالجة الملاحظات</summary>
    Compile = 3,
    ///<summary>تم الاعتماد</summary>
    Certified = 4,
}