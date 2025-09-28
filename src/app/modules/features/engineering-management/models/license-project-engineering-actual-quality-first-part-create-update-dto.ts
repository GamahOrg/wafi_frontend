export interface LicenseProjectEngineeringActualQualityFirstPartCreateUpdateDto {
         id:string;
        //موقف خطة ادارة الجودة 
        qualityManagementPlanStatusId:number;
        //إجراءات ونماذج ادارة الجودة
        qualityManagementProceduresAndModelsId :number;
        //خطة الفحص والاختبار
        examinationAndTestPlanId :number;
        //كادر الاستشاري الشهري حسب خطة التواجد (مهندسين) الفعلى
         actualMonthlyConsultantEngineerStaffAccordingPlan:number;
        //كادر الاستشاري الشهري حسب خطة التواجد (مفتشين) الفعلى
          actualMonthlyConsultantInspectorStaffAccordingPlan :number
        methodStatementsId:number;
}
