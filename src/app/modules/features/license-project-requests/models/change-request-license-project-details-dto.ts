import { LicenseProjectDeedsOwnersDto } from "./license-project-deeds-owners-dto";
import { LicenseProjectSoldUnitsDto } from "./license-project-sold-units-dto";

export interface ChangeRequestLicenseProjectDetailsDto {
  id: string;
  projectName: string | null;
  certificateNumber: string | null;
  typeCode: string | null;
  projectEndOnDate: string | null;
  projectStartOnDate: string | null;
  previousChangeRequestCount: number | null;
  totalCumulativePreviousExtensionDuration: string | null;
  totalCumulativePreviousExtensionMonths: number;
  totalCumulativePreviousExtensionRemainingDays: number;
  licenseProjectRequestId: string;
  newProjectEndDate: string | null;
  justificationsAndReasons: string | null;
  hasForceMajeure: boolean;
  forceMajeureDocumentFileId: string | null;
  forceMajeureDocumentFile: any | null;
  changePlanSoldUnits: LicenseProjectSoldUnitsDto[];
  changePlanDeedOwners: LicenseProjectDeedsOwnersDto[];
}
