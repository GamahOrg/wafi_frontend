export interface LicenseProjectEngineeringRelativeWeightDto {
    id:string;
     elementName :string;
     elementValue :number;
    //تكلفه القسم
    weightCost :number;
    //التكلفة الانشائية المتوقعة (ريال سعودي)
    expectedConstructionCost :number;
    //تكلفة أعمال البنية التحتية (ر.س.) 
     infrastructureCost :number;
     isComprehensiveDevelopment :boolean;
}
