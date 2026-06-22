export interface SaveChangeEngineeringRequestDto {
  requestId: string;
  licenseProjectId: string;
  facilityId: string;
  reasons: string | null;
  hasClearance: boolean | null;
  noClearanceReason: string | null;
  alternativeConsultingOfficeAgreementId: string | null;
  clearanceEngineeringConsultantFileId: string | null;
  previousConsultingOfficeReportId: string | null;
  isDraft: boolean;
}
