export interface LicenseProjectEngineeringNonConformityReportDto {
    id:string;
     licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //عدد تقارير عدم المطابقة المغلقة - منذ فترة التقرير
     noOfClosed :number;
    //عدد تقارير عدم المطابقة المفتوحة  
     noOfOpened :number;
    //عدد تقارير عدم المطابقة تحت المراجعة  
     noOfUnderReview :number;
    //عدد تقارير عدم المطابقة المغلقة – تراكمي منذ بدايه المشروع
     noOfClosedSinceStartProjecct :number;
    //عددتقارير عدم المطابقة المفتوحة – تراكمي منذ بدايه المشروع
     noOfOpenedSinceStartProjecct :number;
    //عدد تقارير عدم المطابقة  تحت المراجعة – تراكمي منذ بدايه المشروع
     noOfUnderReviewSinceStartProjecct :number;
    //الملاحظات
    notes :string;
}
