import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { licenseRequest } from '../models/license-requests';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetRequestHeaderByIdDto, LicenseDetails } from '../models/license-details.model';
import { UpdateCertifiedLicenseDataDto } from '../models/certified-license-data-dto';

@Injectable()
export class LicenseRequestHeaderService {

  constructor(private _httpClient: HttpClient) { }

  getLicensesRequests(pageIndex: number, pageSize: number, searchText: string,currentSortColumn: string | null,currentSortOrder: 'asc' | 'desc' | null): Observable<Pagination<licenseRequest[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchText", searchText);
    if (currentSortOrder) {
      queryParams = queryParams.set("sortType", currentSortOrder);
    }
    if (currentSortColumn) {
      queryParams = queryParams.append("columnName", currentSortColumn);
    }
    return this._httpClient.get<CoreResponseDTO<Pagination<licenseRequest[]>>>(`${Configuration.APIs.LicenseRequestHeader.GetLicenseRequests}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<licenseRequest[]>>) => {
        return res.data as Pagination<licenseRequest[]>;
      })
    );
  }


  getLicenseRequestsByEmployeeId(pageIndex: number, pageSize: number, searchText: string): Observable<Pagination<licenseRequest[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchText", searchText);
    return this._httpClient.get<CoreResponseDTO<Pagination<licenseRequest[]>>>(`${Configuration.APIs.LicenseRequestHeader.GetLicenseRequestsByEmployeeId}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<licenseRequest[]>>) => {
        return res.data as Pagination<licenseRequest[]>;
      })
    );
  }


  GetLicenseRequestHeaderByRequestId(requestId: string): Observable<LicenseDetails | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseDetails>>(`${Configuration.APIs.LicenseRequestHeader.GetFacilityByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseDetails>) => {
        if (res.data) {
          return res.data as LicenseDetails;
        } else {
          return null
        }
      })
    );
  }
  
   GetLicenseRequestHeaderById(requestId: string): Observable<GetRequestHeaderByIdDto | null> {
    return this._httpClient.get<CoreResponseDTO<GetRequestHeaderByIdDto>>(`${Configuration.APIs.LicenseRequestHeader.GetLicenseRequestHeaderById}/${requestId}`).pipe(
      map((res: CoreResponseDTO<GetRequestHeaderByIdDto>) => {
        if (res.data) {
          return res.data as GetRequestHeaderByIdDto;
        } else {
          return null
        }
      })
    );
  }

  GetCertifiedLicenseData(id: string): Observable<UpdateCertifiedLicenseDataDto | null> {
    return this._httpClient.get<CoreResponseDTO<UpdateCertifiedLicenseDataDto>>(`${Configuration.APIs.LicenseRequestHeader.GetCertifiedLicenseData}/${id}`).pipe(
      map((res: CoreResponseDTO<UpdateCertifiedLicenseDataDto>) => {
        if (res.data) {
          return res.data as UpdateCertifiedLicenseDataDto;
        } else {
          return null
        }
      })
    );
  }

  UpdateCertifiedLicenseData(updateCertifiedLicenseDataDto: UpdateCertifiedLicenseDataDto,id: string): Observable<any | null> {
    return this._httpClient.put<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseRequestHeader.UpdateCertifiedLicenseData + '/'+ id, updateCertifiedLicenseDataDto).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  }

  GetFarzRejectionReason(licenseProjectId: string): Observable<string | null> {
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestHeader.GetFarzRejectionReason}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<string>) => {
        if (res.data) {
          return res.data as string;
        } else {
          return null
        }
      })
    );
  }
  
  UpdateFarzStatus(licenseProjectId: string): Observable<any | null> {
    return this._httpClient.put<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseRequestHeader.UpdateFarzStatus + '/'+ licenseProjectId,{}).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  }



  Delete(id: string): Observable<any> {
    return this._httpClient.delete<any>
      (`${Configuration.APIs.LicenseRequestHeader.Delete}?id=${id}`).pipe(
        map((res: any) => {
          
          return res;
        })
      )
  }
}
