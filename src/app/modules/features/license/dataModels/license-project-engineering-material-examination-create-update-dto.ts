export interface LicenseProjectEngineeringMaterialExaminationCreateUpdateDto {
    id:string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //عدد طلبات فحص المواد المعتمد – عن فترة التقرير
    noOfApproved :number;
    //عدد طلبات فحص المواد غير المعتمد – عن فترة التقرير
    noOfRejected :number;
    //عدد طلبات فحص المواد تحت المراجعة – عن فترة التقرير
    noOfUnderReview:number;
    //الملاحظات
    notes :string;
}
