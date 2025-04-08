export interface LicenseProjectEngineeringWorksExaminationDetails {
    id:string;
     licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //الأعمال
     sysLicenseProjectEngineeringWorksId :string;
    //عدد طلبات فحص الأعمال المعتمد – عن فترة التقرير
     noOfApproved :number;
    //عدد طلبات فحص الأعمال غير المعتمد – عن فترة التقرير
     noOfRejected :number;
    //عدد طلبات فحص الأعمال تحت المراجعة – عن فترة التقرير
     noOfUnderReview :number;
    //الملاحظات
     notes :string;
   

    //عدد طلبات فحص الأعمال المعتمد – تراكمي منذ بدايه المشروع
     noOfApprovedSinceStartProjecct :number;
    //عدد  إجمالي طلبات فحص الأعمال المعتمد – عن فترة التقرير
     totalOfNoOfApproved :number;
   
    //عددإجمالي  طلبات فحص الأعمال المعتمد – تراكمي منذ بدايه المشروع
     totalNoOfApprovedSinceStartProjecct :number;
   
   
   
   
    //عدد طلبات فحص الأعمال غير المعتمد – تراكمي منذ بدايه المشروع
     noOfRejectedSinceStartProjecct :number;
    //عدد  إجمالي طلبات فحص الأعمال غير المعتمد – عن فترة التقرير
     totalOfNoOfRejected :number;
   
    //عددإجمالي  طلبات فحص الأعمال  غير المعتمد – تراكمي منذ بدايه المشروع
     totalNoOfRejectedSinceStartProjecct :number;
   
   
   
   
    //عدد طلبات فحص الأعمال  تحت المراجعة – تراكمي منذ بدايه المشروع
     noOfUnderReviewSinceStartProjecct :number;
    //عدد  إجمالي طلبات فحص الأعمال  تحت المراجعة – عن فترة التقرير
     totalOfNoOfUnderReview :number;
   
    //عددإجمالي  طلبات فحص الأعمال   تحت المراجعة – تراكمي منذ بدايه المشروع
     totalNoOfUnderReviewSinceStartProjecct :number;
   
   
   
   
    //عدد طلبات فحص الأعمال    – تراكمي منذ بدايه المشروع
     noOfWorksSinceStartProjecct :number;
    //عدد  إجمالي طلبات فحص الأعمال    – عن فترة التقرير
     totalOfNoOfWorks :number;
   
    //عددإجمالي  طلبات فحص الأعمال     – تراكمي منذ بدايه المشروع
     totalNoOfWorksSinceStartProjecct :number;
   
   
    //(هذا الشهر)  إجمالي   الأعمال    – عن فترة التقرير
     totalWorksOnThisMonth :number;
    
   
    sysLicenseProjectEngineeringWorks :SysLicenseProjectEngineeringWorksDto;
}

export interface SysLicenseProjectEngineeringWorksDto
{
    id:string;
    name:string;
}
