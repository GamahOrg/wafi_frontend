export interface ActualLicenseProjectInfrastructureNetworksStatusDto {
    id:string;
    elementName :string;

    licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
    //تكلفة البند
     itemCost :number;
    //نسبة الإنجاز المخطط الشهرية
    monthlyPlannedCompletionPercentage :number;
    //نسبة الإنجاز الفعلى الشهرية
    actualMonthlyPlannedCompletionPercentage :number;
     notes :string;
   
     sysLicenseInfrastructureElementId :string;
   
     cumulativeActualcompletionpercentage :number;
   
     cumulativeplannedcompletionpercentage :number;
   
     contrast:number;
}
