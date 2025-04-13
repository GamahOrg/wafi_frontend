import { SysLicenseProjectQualityStatusDto } from "./sys-license-project-quality-status-dto";

export interface LicenseProjectEngineeringActualQualityPlanAndAssuranceDto {
     id:string;
        //موقف خطة ادارة الجودة 
        qualityManagementPlanStatusId:number;
         qualityManagementPlanStatus:SysLicenseProjectQualityStatusDto;
        //إجراءات ونماذج ادارة الجودة
        qualityManagementProceduresAndModelsId :number;
         qualityManagementProceduresAndModels: SysLicenseProjectQualityStatusDto;
        //خطة الفحص والاختبار
        examinationAndTestPlanId :number;
         examinationAndTestPlan:SysLicenseProjectQualityStatusDto;
     
        //كادر الاستشاري الشهري حسب خطة التواجد (مهندسين) 
         monthlyConsultantEngineerStaffAccordingPlan:number;
        //كادر الاستشاري الشهري حسب خطة التواجد (مفتشين) 
         monthlyConsultantInspectorStaffAccordingPlan:number
     
        //كادر الاستشاري الشهري حسب خطة التواجد (مهندسين) الفعلى
         actualMonthlyConsultantEngineerStaffAccordingPlan:number;
        //كادر الاستشاري الشهري حسب خطة التواجد (مفتشين) الفعلى
          actualMonthlyConsultantInspectorStaffAccordingPlan :number
     
        methodStatementsId:number;
       methodStatements :SysLicenseProjectQualityStatusDto;
}
export enum LicenseProjectQualityStatusEnum
{
    // غير موجودة
    NotExists = 1,
    //موجودة غير معتمدة
    ExistsUnsupported = 2,
    //موجودة معتمدة
    ExistsSupported = 3,

}