import { LicenseProjectEngineeringSupervisionPlannedReportDetailDto } from './master-license-project-engineering-supervision-planned-report-dto';

export interface MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto {
  id: string;
  cumulativeAmountPriorToThatYear: number;
  constructionCostBeforeThisYear: number;
  engineerinSupervisionPlannedReportAllowToEdit: boolean;
  licenseProjectEngineeringSupervisionPlannedReportDetails: LicenseProjectEngineeringSupervisionPlannedReportDetailDto[];
}
