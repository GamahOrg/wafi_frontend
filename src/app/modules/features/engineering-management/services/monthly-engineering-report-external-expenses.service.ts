import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { MonthlyEngineeringReportExternalExpensesDto } from '../models/monthly-engineering-report-external-expenses-model';

@Injectable({
  providedIn: 'root'
})
export class MonthlyEngineeringReportExternalExpensesService {

  private licenseProjectEngineeringSupervisionPlannedReportDetailId = new BehaviorSubject<string|null>(null);
  private licenseProjectEngineeringSupervisionPlannedReportDetailId$ = this.licenseProjectEngineeringSupervisionPlannedReportDetailId.asObservable();
  private monthlyEngineeringReportExternalExpensesId = new BehaviorSubject<string|null>(null);
  private monthlyEngineeringReportExternalExpensesId$ = this.monthlyEngineeringReportExternalExpensesId.asObservable();
  
  constructor(private _httpClient: HttpClient) { }

  GetAllMonthlyEngineeringReportExternalExpenses(licenseProjectEngineeringSupervisionPlannedReportDetailId: string, pageIndex: number, pageSize: number) : Observable<Pagination<MonthlyEngineeringReportExternalExpensesDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectEngineeringSupervisionPlannedReportDetailId", licenseProjectEngineeringSupervisionPlannedReportDetailId);
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<MonthlyEngineeringReportExternalExpensesDto[]>>>(`${Configuration.APIs.MonthlyEngineeringReportExternalExpenses.GetAllMonthlyEngineeringReportExternalExpenses}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<MonthlyEngineeringReportExternalExpensesDto[]>>) => {
        return res.data as Pagination<MonthlyEngineeringReportExternalExpensesDto[]>
      })
    )
  }

  GetAllMonthlyEngineeringReportExternalExpensesByMonth(licenseProjectId: string, month:any, pageIndex: number, pageSize: number) : Observable<Pagination<MonthlyEngineeringReportExternalExpensesDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("month", month);
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<MonthlyEngineeringReportExternalExpensesDto[]>>>(`${Configuration.APIs.MonthlyEngineeringReportExternalExpenses.GetAllMonthlyEngineeringReportExternalExpensesByMonth}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<MonthlyEngineeringReportExternalExpensesDto[]>>) => {
        return res.data as Pagination<MonthlyEngineeringReportExternalExpensesDto[]>
      })
    )
  }

  GetMonthlyEngineeringReportExternalExpensesById(id: string):  Observable<MonthlyEngineeringReportExternalExpensesDto> {
    return this._httpClient.get<CoreResponseDTO<MonthlyEngineeringReportExternalExpensesDto>>(`${Configuration.APIs.MonthlyEngineeringReportExternalExpenses.GetMonthlyEngineeringReportExternalExpensesById}/${id}`).pipe(
        map((res: CoreResponseDTO<MonthlyEngineeringReportExternalExpensesDto>) => {
          return res.data as MonthlyEngineeringReportExternalExpensesDto
        })
      )
  }
  
  DeleteMonthlyEngineeringReportExternalExpenses(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>(`${Configuration.APIs.MonthlyEngineeringReportExternalExpenses.DeleteMonthlyEngineeringReportExternalExpenses}/${id}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;
      })
    )
  }

  SaveOrUpdateMonthlyEngineeringReportExternalExpenses(obj: MonthlyEngineeringReportExternalExpensesDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.MonthlyEngineeringReportExternalExpenses.SaveOrUpdateMonthlyEngineeringReportExternalExpenses, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }
  
  getLicenseProjectEngineeringSupervisionPlannedReportDetailId(): Observable<string|null> {
   return this.licenseProjectEngineeringSupervisionPlannedReportDetailId$;
  }

  setLicenseProjectEngineeringSupervisionPlannedReportDetailId(licenseProjectEngineeringSupervisionPlannedReportDetailId: string|null) {
   return this.licenseProjectEngineeringSupervisionPlannedReportDetailId.next(licenseProjectEngineeringSupervisionPlannedReportDetailId);
  }

  getMonthlyEngineeringReportExternalExpensesId(): Observable<string|null> {
   return this.monthlyEngineeringReportExternalExpensesId$;
  }

  setMonthlyEngineeringReportExternalExpensesId(monthlyEngineeringReportExternalExpensesId: string|null) {
   return this.monthlyEngineeringReportExternalExpensesId.next(monthlyEngineeringReportExternalExpensesId);
  }
  
}
