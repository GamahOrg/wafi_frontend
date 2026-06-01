export interface ChangeEngineeringRequestDraftDto {
  // البيانات الأساسية للمشروع
  certificateNumber: string | null;
  projectName: string | null;
  cityName: string | null;
  endOn: string | null;
  achievementRate: number | null;
  licenseProjectType: string | null;

  units: ChangeEngineeringUnitDto[];
  soldUnitsCount:number;

  // Request info
  licenseProjectRequestId: string;
  licenseProjectId: string;

  // Previous consultant
  previousEngineeringFacilityId: string | null;
  previousEngineeringFacilityName: string | null;
  previousFacilityCommercialRegister: string | null;

  // Editable fields
  reasons: string | null;
  hasClearance: boolean | null;
  noClearanceReason: string | null;

  // New consultant
  engineeringFacilityId: string | null;
  engineeringFacilityName: string | null;
  engineeringFacilityCommercialRegister: string | null;

  // Files
  alternativeConsultingOfficeAgreementId: string | null;
  alternativeConsultingOfficeAgreement: any;
  clearanceEngineeringConsultantFileId: string | null;
  clearanceEngineeringConsultantFile: any;
  previousConsultingOfficeReportId: string | null;
  previousConsultingOfficeReport: any;
}

export interface ChangeEngineeringUnitDto {
  unitTypeName: string | null;
  subUnitCount: number;
}
