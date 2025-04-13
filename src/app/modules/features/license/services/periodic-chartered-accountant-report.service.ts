import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { PeriodicCharteredAccountantReportPagingListDto, PeriodicCharteredAccountantReportQuarterTypeDto, PeriodicCharteredAccountantReportTypeDto } from '../models/periodic-chartered-accountant-report-paging-list-dto';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { PeriodicCharteredAccountantReportDetailsDto } from '../models/periodic-chartered-accountant-report-details-dto';
import { FilterDto, PeriodicCharteredAccountantReportCreateUpdateDto, PeriodicCharteredAccountantReportDto } from '../dataModels/periodic-chartered-accountant-report-dto';

@Injectable()
export class PeriodicCharteredAccountantReportService {
  setLicenseProjectAccountReportIdInLocalStorage(id: string): void {
    localStorage.setItem('licenseProjectAccountReportId', id)
  }
  getLicenseProjectAccountReportIdStorage(): string | null {
    return localStorage.getItem('licenseProjectAccountReportId')
  }
  removeLicenseProjectAccountReportIdStorage(): void {
    localStorage.removeItem('licenseProjectAccountReportId')
  }
  
  constructor(private _httpClient: HttpClient) {}

  GetExchangeDocumentOnProject(
    licenseProjectId: string,
    pageIndex: number,
    pageSize: number
  ):  Observable<Pagination<PeriodicCharteredAccountantReportPagingListDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<PeriodicCharteredAccountantReportPagingListDto[]>>>(`${Configuration.APIs.PeriodCharteredAccountantReport.GetExchangeDocumentOnProject}`, { params: queryParams }).pipe(
        map((res: CoreResponseDTO<Pagination<PeriodicCharteredAccountantReportPagingListDto[]>>) => {
          return res.data as Pagination<PeriodicCharteredAccountantReportPagingListDto[]>
        })
      )
  }

  GetPeriodicCharteredAccountantReportDetail(
    id: string,
  ):  Observable<PeriodicCharteredAccountantReportDetailsDto> {
    return this._httpClient.get<CoreResponseDTO<PeriodicCharteredAccountantReportDetailsDto>>(`${Configuration.APIs.PeriodCharteredAccountantReport.GetPeriodicCharteredAccountantReportDetail}/${id}`).pipe(
        map((res: CoreResponseDTO<PeriodicCharteredAccountantReportDetailsDto>) => {
          return res.data as PeriodicCharteredAccountantReportDetailsDto
        })
      )
  }
  CreateExcel(id: string): Observable<any | null> {
    return this._httpClient.get(`${Configuration.APIs.PeriodCharteredAccountantReport.CreateExcel}/${id}`,
      {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob'
      }).pipe(
        map((res: any) => {
          if (res) {
            return res;
          } else {
            return null
          }
        })
      )
  }

  save(obj: PeriodicCharteredAccountantReportCreateUpdateDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.PeriodicCharteredAccountantReport.Save, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }
  createPeriodicCharteredAccountantReport(filtter: FilterDto): Observable<PeriodicCharteredAccountantReportDto | null> {
    return this._httpClient.post<CoreResponseDTO<PeriodicCharteredAccountantReportDto>>
      (Configuration.APIs.PeriodicCharteredAccountantReport.CreatePeriodicCharteredAccountantReport, filtter).pipe(
        map((res: CoreResponseDTO<PeriodicCharteredAccountantReportDto>) => {
          return  res.isDone? res.data as PeriodicCharteredAccountantReportDto: null        })
      )
  }

  getPeriodicCharteredAccountantReportTypes(): Observable<PeriodicCharteredAccountantReportTypeDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<PeriodicCharteredAccountantReportTypeDto[]>>(`${Configuration.APIs.PeriodicCharteredAccountantReport.GetPeriodicCharteredAccountantReportTypes}`).pipe(
      map((res: CoreResponseDTO<PeriodicCharteredAccountantReportTypeDto[]>) => {
        return res.isDone  ? res.data as PeriodicCharteredAccountantReportTypeDto[] : null
      })
    )
  }

  getPeriodicCharteredAccountantReportQuarterTypes(): Observable<PeriodicCharteredAccountantReportQuarterTypeDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<PeriodicCharteredAccountantReportQuarterTypeDto[]>>(`${Configuration.APIs.PeriodicCharteredAccountantReport.GetPeriodicCharteredAccountantReportQuarterTypes}`).pipe(
      map((res: CoreResponseDTO<PeriodicCharteredAccountantReportQuarterTypeDto[]>) => {
        return res.isDone  ? res.data as PeriodicCharteredAccountantReportQuarterTypeDto[] : null
      })
    )
}
}
