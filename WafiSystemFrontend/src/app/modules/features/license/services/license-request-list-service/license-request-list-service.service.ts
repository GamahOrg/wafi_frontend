import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseRequest } from '../../models/license-request-dto';

@Injectable()
export class LicenseRequestListService {
  constructor(private _httpClient: HttpClient) {}

  getEmployeeUnderStudingLicenseRequests(
    pageIndex: number,
    pageSize: number,
    searchText: string = ''
  ): Observable<Pagination<LicenseRequest[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    queryParams = queryParams.append('searchText', searchText);

    return this._httpClient
      .get<CoreResponseDTO<Pagination<LicenseRequest[]>>>(
        `${Configuration.APIs.LicenseRequestHeader.GetEmployeeUnderStudingLicenseRequests}`,
        { params: queryParams }
      )
      .pipe(
        map((res: CoreResponseDTO<Pagination<LicenseRequest[]>>) => {
          return res.data as Pagination<LicenseRequest[]>;
        })
      );
  }

  setSelectedRequestIdInLocalStorage(id: string): void {
    localStorage.setItem('seclectLicenseRequest', id);
  }
  setLicenseProjectIdInLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('licenseProjectId', licenseProjectId);
  }
  getSelectedRequestIdFromLocalStorage(): string | null {
    let seclectRequest = localStorage.getItem('seclectLicenseRequest');
    return seclectRequest;
  }
  clearRequestFromLocalStorage(): void {
    localStorage.removeItem('seclectLicenseRequest');
  }

  getLicenseProjectIdStorage(): string | null {
    return localStorage.getItem('licenseProjectId');
  }
  removeLicenseProjectIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectId');
  }
}
