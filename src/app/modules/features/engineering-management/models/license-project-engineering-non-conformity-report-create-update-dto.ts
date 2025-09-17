export interface LicenseProjectEngineeringNonConformityReportCreateUpdateDto {
    id:string;
   licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //عدد تقارير عدم المطابقة المغلقة - منذ فترة التقرير
     noOfClosed :number;
    //عدد تقارير عدم المطابقة المفتوحة  
     noOfOpened :number;
    //عدد تقارير عدم المطابقة تحت المراجعة  
     noOfUnderReview :number;
    //ملاحظات
     notes :string;
}
