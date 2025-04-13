export interface ActualInfrastructureCreateUpdateDto {
    id:string;
     //التمديد المعتمد)يوم)
 approvedExtension :number;
 //تاريخ بداية الأعمال الفعلي 
  actualStartDate :Date
 //تاريخ النهاية المتوقع من تحديث البرنامج الزمني
  forecastCompletionDate: Date;
 //نسبة الإنجاز الفعلية الشهرية
 actualInfrastructureMonthlyPlannedCompletionRate :number
}
