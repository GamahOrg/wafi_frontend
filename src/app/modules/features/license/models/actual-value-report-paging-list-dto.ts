export interface ActualValueReportPagingListDto {
    id:string;
    monthDate :Date;
    monthName:string;
      //حالة التقرير الشهرى
   supervisionPlannedReportStatusId :number;
   supervisionPlannedReportStatus :SysLicenseProjectEngineeringRequestStatusDto;
}
export interface SysLicenseProjectEngineeringRequestStatusDto
{
id:number;
name:string;
}

export enum LicenseProjectEngineeringRequestStatusEnum
{
    Draf = 0,
    ///<summary>جديد</summary>
    New = 1,
    ///<summary>تحت الدراسة</summary>
    UnderStudy = 2,
    ///<summary>يوجد الملاحظات</summary>
    CustomerFeedback = 3,
    ///<summary> تم ارسال معالجة الملاحظات</summary>
    Compile = 4,
    ///<summary>تم الاعتماد</summary>
    Certified = 5,
}