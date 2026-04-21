import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class SupervisionFeesService {

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
}
