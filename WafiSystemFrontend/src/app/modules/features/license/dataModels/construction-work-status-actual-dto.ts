export interface ConstructionWorkStatusActualDto {
    id:string;
 licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
 licenseProjectRelativeWeightId:string;
 monthDate :Date;
  monthName :string;
 elementValue :number;
 elementName :string;
//تكلفه القسم لهذا الوزن
weightCost :number;
//نسبة الإنجاز المخطط الشهرية
 monthlyPlannedCompletionPercentage :number;
//نسبة الإنجاز الفعلى الشهرية
actualMonthlyPlannedCompletionPercentage :number;
//نسبة الإنجاز  التراكميه المخططه
 constructionWorkStatusCompletionRate :number;
//نسبة الإنجاز  التراكميه الفعليه
 actualConstructionWorkStatusCompletionRate :number;
//التباين الخاص بالتراكمي لهذا الوزن
 contrastCompletionRate:number;
//نسبة الإنجاز  التراكميه المخططه لكل الاوزان علي هذا الشهر
allConstructionWorkStatusCompletionRate :number;
//نسبة الإنجاز  التراكميه الفعليه لكل الاوزان علي هذا الشهر
 allActualConstructionWorkStatusCompletionRate :number;
//التباين الخاص بالتراكمي لجميع الاوزان
 allContrastCompletionRate :number;
//تكلفه القسم لجميع الاوزان
 allWeightCost :number;
// إجمالي نسبة الإنجاز  التراكميه المخططه 
totalConstructionWorkStatusCompletionRate :number;
//إجمالي نسبة الإنجاز  التراكميه الفعليه
 totalActualConstructionWorkStatusCompletionRate :number;
// إجمالي التباين 
 totalContrastCompletionRate :number;
 notes :string;
}
