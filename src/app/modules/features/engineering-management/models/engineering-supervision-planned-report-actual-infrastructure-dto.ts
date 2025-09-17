export interface EngineeringSupervisionPlannedReportActualInfrastructureDto {
    id:string;
 monthName :string;
//مقاول البنية التحتية
 infrastructureContractor :string;
//استشاري أعمال البنية التحتية
 infrastructureConsultant:string;
//تكلفة أعمال البنية التحتية (ر.س.) 
 infrastructureCost :number
//تاريخ بداية الأعمال التعاقدي 
 contractualStartDate :Date
//تاريخ نهاية الأعمال التعاقدي 
 contractualFinishDate :Date
//مدة اعمال البنية التحتيه
 contractualInfrastructureWorksDuration :number
//التمديد المعتمد)يوم)
 approvedExtension :number
//التاريخ النهائي التعاقدي المعدل بناء علي التمديد المعتمد
 contractualEndDateAdjustedBasedOnApprovedExtension :Date
//تاريخ بداية الأعمال الفعلي 
 actualStartDate :Date
//تاريخ النهاية المتوقع من تحديث البرنامج الزمني
 forecastCompletionDate :Date
//المدة المنقضية من المشروع 
 projectDuration :number
// نسبةالمدة المنقضية من المشروع 
 projectDurationPercentage :number

//المدة المتبقية من المشروع 
 projectRemaining :number
// نسبةالمدة المتبقية من المشروع 
 projectRemainingPercentage :number
// التأخير
 delay:number
//نسبة الإنجاز المخططة الشهرية
 infrastructureMonthlyPlannedCompletionRate :number
//نسبة الإنجاز الفعلية الشهرية
 actualInfrastructureMonthlyPlannedCompletionRate :number
//التباين
 contrast :number
//نسبة الإنجاز المخططة الشهريةالتراكمي
 totalInfrastructureMonthlyPlannedCompletionRate:number
//نسبة الإنجاز الفعلية الشهريةالتراكمي
 totalActualInfrastructureMonthlyPlannedCompletionRate :number
//التباين التراكمي
 totalContrast :number
//معدل الاداء الزمني
 timePerformanceRate :number
}
