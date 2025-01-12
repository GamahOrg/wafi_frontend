export interface LicenseProjectEngineeringMonthlyConsultantStaffRatesDto {
    id:string;
    licenseProjectId :string;
     monthDate:Date;
     monthName :string;
    //كادر الاستشاري الشهري حسب خطة التواجد (مهندسين) 
    monthlyConsultantEngineerStaffAccordingPlan:number
    //كادر الاستشاري الشهري حسب خطة التواجد (مفتشين) 
    monthlyConsultantInspectorStaffAccordingPlan:number;
}
