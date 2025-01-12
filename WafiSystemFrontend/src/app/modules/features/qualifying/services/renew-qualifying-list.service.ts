import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ExpiredQualifyingDto } from '../dataModels/expired-qualifying-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class RenewQualifyingListService {

  constructor(private _httpClient : HttpClient) {}

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 

  getExpiredQualificationPagingList(facilityId:string, pageIndex: number, pageSize: number): Observable<Pagination<ExpiredQualifyingDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("facilityId", facilityId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<ExpiredQualifyingDto[]>>>(`${Configuration.APIs.QualificationRequestHeader.GetExpiredQualificationPagingList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<ExpiredQualifyingDto[]>>) => {
       
        return res.isDone? res.data as Pagination<ExpiredQualifyingDto[]>: null
      })
    );
  }
 
}
