export interface SearchExchangeDocumentListFilterDto {
  pageSize: number;
  pageIndex: number;
  searchFilter?: string | null;
  currentSelectedFacilityId: string;
  searchStatusId?: number;
}
