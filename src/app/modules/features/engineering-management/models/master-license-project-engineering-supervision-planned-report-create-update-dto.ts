export class MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto {
  id?: string;
  //التكلفة الانشائية المتوقعة (ريال سعودي)
  expectedConstructionCost?: number;
  //المقاول
  contractor?: string;
  //مقاول البنية التحتية
  infrastructureContractor?: string;
  //استشاري أعمال البنية التحتية
  infrastructureConsultant?: string;
  //تكلفة أعمال البنية التحتية (ر.س.)
  infrastructureCost?: number;
  //تاريخ بداية الأعمال التعاقدي
  contractualStartDate?: Date;
  //تاريخ نهاية الأعمال التعاقدي
  contractualFinishDate?: Date;

  licenseProjectEngineeringSupervisionPlannedReportAttachments?: LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto[];
}

export interface LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto {
  id: string;
  licenseProjectId: String;
  monthDate: Date;
  //نسب الإنجاز المخططة الشهرية للمشروع
  projectMonthlyPlannedCompletionRate: number;

  //إجمالي عدد العمالة المخطط للشهر
  monthlyTotalPlannedEmployees: number;

  //نسبة الإنجاز المخططة الشهريةالخاصة بالبنيه التحتيه
  infrastructureMonthlyPlannedCompletionRate: number;
  //التكلفة الانشائية المتوقعة خلال الشهر
  projectMonthlyPlannedMonthCost: number;
}
export interface LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto {
  id: string;
  licenseProjectId: String;
  generalSiteMapFileId: String;
}
