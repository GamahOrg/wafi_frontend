import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class SupervisionFeesService {
  private _selectedInvoiceId = new BehaviorSubject<string | null>(null);
  selectedInvoiceId$ = this._selectedInvoiceId.asObservable();

  setSelectedInvoiceId(id: string): void {
    this._selectedInvoiceId.next(id);
  }

  constructor(private _httpClient: HttpClient) {}

  getSupervisionFees(
    pageIndex: number,
    pageSize: number
  ): Observable<Pagination<any[]> | null> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    return this._httpClient
      .get<any>(`${Configuration.APIs.SupervisionFees.GetSupervisionFees}`, { params })
      .pipe(map((res) => res?.result || null));
  }

  getInvoices(
    pageIndex: number,
    pageSize: number,
    searchText?: string
  ): Observable<Pagination<any[]> | null> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    if (searchText) {
      params = params.set('searchText', searchText);
    }

    return this._httpClient
      .get<any>(`${Configuration.APIs.SupervisionFeeSettings.GetInvoices}`, { params })
      .pipe(map((res) => res?.data || null));
  }

  getInvoiceDetails(calcId: string): Observable<any | null> {
    const params = new HttpParams().set('calcId', calcId);
    return this._httpClient
      .get<any>(`${Configuration.APIs.SupervisionFeeSettings.GetInvoiceDetails}`, { params })
      .pipe(map((res) => res?.data || null));
  }

  retryInvoice(calcId: string): Observable<any> {
    const params = new HttpParams().set('calcId', calcId);
    return this._httpClient
      .post<any>(`${Configuration.APIs.SupervisionFeeSettings.RetryInvoice}`, null, { params });
  }
}
