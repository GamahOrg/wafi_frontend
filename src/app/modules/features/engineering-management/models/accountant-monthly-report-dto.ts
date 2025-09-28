export interface LicenseProjectEngineeringReportDetailsCertifiedDto {
  id: string;
  licenseProjectId: string;
  monthDate: Date;
  licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenses: LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpensesDto[]
}
export interface LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpensesDto {
  expenseDate: Date;
  amount: number;
  description?: string;
}