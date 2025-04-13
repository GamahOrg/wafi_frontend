export interface Pagination<T> {
  results: T,
  currentPage: number,
  pageCount: number,
  pageSize: number,
  totalCount: number
}
export interface pagination {
  currentPage: number,
  pageCount: number,
  pageSize:number,
  totalCount: number,
}