export interface ConstructionWorkStatusCreateUpdateDto {
      id:string;
     //نسبة الإنجاز المخطط الشهرية
       monthlyPlannedCompletionPercentage :number;
       //نسبة الإنجاز الفعلى الشهرية
        actualMonthlyPlannedCompletionPercentage:number;
       licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
       licenseProjectRelativeWeightId :string;
       notes:string;
}
