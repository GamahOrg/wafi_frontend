import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CustomerShortDto } from '../../real-estate-contributions-license/models/facility-short-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class UserManagementDelegatorsService {

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter()

  constructor(private _httpClient : HttpClient) {}

 getDelegators(pageIndex: number, pageSize: number): Observable<Pagination<CustomerShortDto[] > | null> {
   let queryParams = new HttpParams();
   queryParams = queryParams.append("pageIndex", pageIndex);
   queryParams = queryParams.append("pageSize", pageSize);
   return this._httpClient.get<CoreResponseDTO<Pagination<CustomerShortDto[]>>>(`${Configuration.APIs.Customer.GetSubCustomersList}`, { params: queryParams }).pipe(
     map((res: CoreResponseDTO<Pagination<CustomerShortDto[]>>) => {
      return res.isDone? res.data as Pagination<CustomerShortDto[]> : null;
     })
   );
 }
}
