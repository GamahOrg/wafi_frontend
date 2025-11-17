export interface GetLicenseProjectListRequestDto {
  pageNumber: number;
  pageSize: number;
  currentSelectedFacilityId: string;
  searchText?: string | null;
  natureTypeId?: string | null;
}
