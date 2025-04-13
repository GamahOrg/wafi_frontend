export interface LicenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateDto {
    id:string;
      licenseProjectId :string;
      monthDate :Date;
    //كادر الاستشاري الشهري حسب خطة التواجد (مهندسين) 
      monthlyConsultantEngineerStaffAccordingPlan :number;
    //كادر الاستشاري الشهري حسب خطة التواجد (مفتشين) 
    monthlyConsultantInspectorStaffAccordingPlan: number;
}
