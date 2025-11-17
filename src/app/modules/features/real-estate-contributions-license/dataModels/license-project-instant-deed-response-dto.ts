export interface LicenseProjectInstantDeedResponseDto {
  deedNumber: string;
  id: string;
  deedDate: string;
  ownersCount: number | null;
  constructionLicenseNumber: string | null;
  integrationTypeId: number;
  licenseProjectConstructionLicenseType: string | null;
  licenseProjectConstructionLicenseTypeId: number;
  licenseProjectNatureTypeId: number | null
}

export interface DeedHeaderProjectDataDto {
  id: string;
  cityName: string;
  neighborhoodName: string;
  projectAreaDeedAmount: number;
  constructionAreaAmount: number;
  qualificationDegree: number | null;
  requiredQualificationDegree: number;
  totalUnit: number;
  isQualifaictionDegreeValid: boolean;
}

export interface UpdateTotalAreaForProjectDto {
  licenseProjectId: string;
  buildingFlatArea: number;
  totalUnits: number;
  isUnitData: boolean;
}
