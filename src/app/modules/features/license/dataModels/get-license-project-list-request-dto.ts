export interface GetLicenseProjectListRequestDto {
  pageIndex: number;
  pageSize: number;
  currentSelectedFacilityId: string;
  searchText?: string | null;
  natureTypeId?: string | null;
}
