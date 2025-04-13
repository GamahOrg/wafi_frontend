export interface LicenseProjectInfrastructureNetworksStatusDto {
      id:string;
      licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //تكلفة البند
      itemCost :number;
      //اسم البند
      itemName:string;
    //نسبة الإنجاز المخطط الشهرية
      monthlyPlannedCompletionPercentage :number;
  
      sysLicenseInfrastructureElementId :string;
    //نسبه الانجاز المخطط التراكمي 
      cumulativeplannedcompletionpercentage :number;
      monthName:string;
      relativeWeight:number;
}
