import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";

export interface MonthlyEngineeringReportExternalExpensesDto {
    id: string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId: string;
    expenseDate: string | Date | null;
    amount: number;
    description?: string;
    licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments: LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments[];
}

export interface LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments{
    id?: string;
    licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseId?: string;
    attachmentFileId: string;
    attachmentFile?: FileManagerBE;
}