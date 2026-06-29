export interface MasterConstructionWorkStatusDto {
    id:string;
    //نسبة الإنجاز  التراكميه
    constructionWorkStatusCompletionRate:number;
     constructionWorkStatusList:ConstructionWorkStatusDto[];
}
export interface ConstructionWorkStatusDto
{
   id:string;
     licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
     licenseProjectRelativeWeightId :string;
     monthDate :Date;
         monthName: string;
         elementValue :number;
         elementName :string; 
       //نسبة الإنجاز المخطط الشهرية
        monthlyPlannedCompletionPercentage:number;
            //نسبه الانجاز المخططه التراكميه
   cumulativeplannedcompletionpercentage:number;

}
