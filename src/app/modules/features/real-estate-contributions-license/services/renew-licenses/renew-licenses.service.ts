import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';
// import { ExpiredLicenseProjectDto } from '../models/renew-licenses-list-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ExpiredLicenseProjectDto } from '../../dataModels/renew-licenses-list-dto';
import { RenewDto } from '../../models/renew-dto.model';
// import { SysLicenseRequestTypeDto } from '../models/sys-license-request-type-dto';
// import { RenewDto } from '../models/renew-dto.model';

@Injectable()
export class RenewLicensesService {
  constructor(private _httpClient : HttpClient) {}


  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 

  getExpiredProjectLicensesPagingList(facilityId:string, pageIndex: number, pageSize: number): Observable<Pagination<ExpiredLicenseProjectDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("facilityId", facilityId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<ExpiredLicenseProjectDto[]>>>(`${Configuration.APIs.LicenseRequestHeader.GetExpiredProjectLicensesPagingList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<ExpiredLicenseProjectDto[]>>) => {
       
        return res.isDone? res.data as Pagination<ExpiredLicenseProjectDto[]>: null
      })
    );
  }

  Renew(data :RenewDto): Observable<CoreResponseDTO<any>>{
    return this._httpClient.post<CoreResponseDTO<any>>(Configuration.APIs.LicenseRequestService.Renew, data)
  }
}
