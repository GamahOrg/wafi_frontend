import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ActualValueReportPagingListDto } from '../models/actual-value-report-paging-list-dto';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable()
export class ActualValueReportService {
    constructor(private _httpClient: HttpClient) { }
    showActualValueReportDetails: EventEmitter<Date> = new EventEmitter();
    submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter();

    getActualLookUpValues(licenseProjectId: string): Observable<ActualValueReportPagingListDto[] | null> {
  
      return this._httpClient.get<CoreResponseDTO<ActualValueReportPagingListDto[]>>(`${Configuration.APIs.ActualValuesReport.GetActualValueReportLookUpList}/${licenseProjectId}`).pipe(
        map((res: CoreResponseDTO<ActualValueReportPagingListDto[]>) => {
         
          return res.isDone ? res.data as ActualValueReportPagingListDto[] : null
  
        })
      );
    }

    getRequiredSupervisionMonthsList(licenseProjectId: string, pageIndex: number, pageSize: number): Observable<Pagination<ActualValueReportPagingListDto[]>| null> {
      let queryParams = new HttpParams();
      queryParams = queryParams.append("licenseProjectId", licenseProjectId);
      queryParams = queryParams.append("pageIndex", pageIndex);
      queryParams = queryParams.append("pageSize", pageSize);
      return this._httpClient.get<CoreResponseDTO<Pagination<ActualValueReportPagingListDto[]>>>(`${Configuration.APIs.ActualValuesReport.GetRequiredSupervisionMonthsList}`, { params: queryParams }).pipe(
        map((res: CoreResponseDTO<Pagination<ActualValueReportPagingListDto[]>>) => {
         
          return res.isDone? res.data as Pagination<ActualValueReportPagingListDto[]>: null
        })
      );
    }  
        updateMonthSubmitted(licenseProjectEngineeringSupervisionId: string): Observable<CoreResponseDTO<any> | null> {
  
      return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.ActualValuesReport.UpdateMonthSubmitted}/${licenseProjectEngineeringSupervisionId}`).pipe(
        map((res: CoreResponseDTO<any>) => {
         
          return res.isDone ? res  : null
  
        })
      );
    }
}
