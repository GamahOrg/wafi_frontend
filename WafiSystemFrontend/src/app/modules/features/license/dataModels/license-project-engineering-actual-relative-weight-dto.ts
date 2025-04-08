export interface LicenseProjectEngineeringActualRelativeWeightDto {
    id:string;
    licenseRelativeWeightId:string;
    elementName :string;
     elementValue :number;
    //تكلفه القسم
     weightCost :number;
    //التكلفة الانشائية المتوقعة (ريال سعودي)
     expectedConstructionCost :number;
    //تكلفة أعمال البنية التحتية (ر.س.) 
     infrastructureCost :number;
    isComprehensiveDevelopment :number;
    //نسبة الإنجاز المخطط الشهرية
     monthlyPlannedCompletionPercentage :number;
    //نسبة الإنجاز الفعلى الشهرية
     actualMonthlyPlannedCompletionPercentage:number;
}
