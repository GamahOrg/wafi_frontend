import { FacilityTypeCategory } from 'src/app/shared/models/customer.model';

export interface FacilityBusinessTypeDto {
  id: string;
  businessType: string;
  code: string | null;
}

export interface FacilityTypeCategoryDto {
  enumValue: FacilityTypeCategory;
  isCompatible: boolean;
  nameAr: string;
}

export interface FacilityBusinessesAndCategoryTypesDto {
  facilityBusinessTypes: FacilityBusinessTypeDto[];
  facilityTypeCategories: FacilityTypeCategoryDto[];
}

export interface UpdateFacilityTypeCategoryDto {
  facilityId: string;
  facilityTypeCategory: FacilityTypeCategory;
}
