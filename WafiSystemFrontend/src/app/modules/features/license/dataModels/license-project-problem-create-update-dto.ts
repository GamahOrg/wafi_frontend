export interface LicenseProjectProblemCreateUpdateDto {
    id:string;
     licenseProjectId :string;
     licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //نوع المشكلة
    problemTypeId :number;
    //وصف المشكلة
    description :string;
    //تاريخ الحدوث
      issueDate :Date;
    //الشدة
      levelTypeId :number;
    //المالك
    riskOwnerId :number;
    //الحل المقترح
      recommendedAction :string;
    //تاريخ الاغلاق المقترح
     expectedClosureDate :Date;
    //الحالة
    statusId :number;
    //تاريخ الاغلاق الفعلى
    actualClosureDate :Date;
   licenseProjectProblemResponsiblePartyIds :number[];
}
