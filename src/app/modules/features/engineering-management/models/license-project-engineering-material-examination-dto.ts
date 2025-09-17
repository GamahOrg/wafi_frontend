export interface LicenseProjectEngineeringMaterialExaminationDto {
    id:string;
    
    licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
    //عدد طلبات فحص المواد المعتمد – عن فترة التقرير
     noOfApproved :number;
    //عدد طلبات فحص المواد المعتمد – تراكمي منذ بدايه المشروع
     noOfApprovedSinceStartProjecct :number;
    //عدد طلبات فحص المواد غير المعتمد – عن فترة التقرير
     noOfRejected :number;

    //عدد طلبات فحص المواد غير المعتمد – تراكمي منذ بدايه المشروع
    noOfRejectedSinceStartProjecct:number;
    //عدد طلبات فحص المواد تحت المراجعة – عن فترة التقرير
     noOfUnderReview :number;
    //عدد طلبات فحص المواد  تحت المراجعة – تراكمي منذ بدايه المشروع
     noOfUnderReviewSinceStartProjecct :number;
    //الملاحظات
     notes :string;
}
