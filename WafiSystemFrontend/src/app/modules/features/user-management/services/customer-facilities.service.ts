import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CustomerShortDto, FacilityShortDto } from '../../license/models/facility-short-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { RelatedCustomerCreateUpdateDto } from '../dataModels/related-customer-create-update-dto';
import { facilityResponse } from 'src/app/shared/models/customer.model';
import { RelatedCustomerListDto } from '../dataModels/related-customer-list-dto';

@Injectable()
export class CustomerFacilitiesService {
  constructor(private _httpClient : HttpClient) {
  }
  private facilitySubject = new BehaviorSubject<FacilityShortDto|null>({} as FacilityShortDto);

  private facilitySubject$ = this.facilitySubject.asObservable();
  getFacilityObj(): Observable<FacilityShortDto|null> {
    return this.facilitySubject$;
  }
  setFacilityObj(LatestValue: FacilityShortDto|null) {
    return this.facilitySubject.next(LatestValue);
  }
 getFacilities(pageIndex: number, pageSize: number): Observable<Pagination<FacilityShortDto[] >> {
   let queryParams = new HttpParams();
   queryParams = queryParams.append("pageIndex", pageIndex);
   queryParams = queryParams.append("pageSize", pageSize);
   return this._httpClient.get<CoreResponseDTO<Pagination<FacilityShortDto[]>>>(`${Configuration.APIs.Customer.GetCustomerFacilities}`, { params: queryParams }).pipe(
     map((res: CoreResponseDTO<Pagination<FacilityShortDto[]>>) => {
      if(res.isDone){
        return res.data as Pagination<FacilityShortDto[]>;
      }
      else
      return {} as Pagination<FacilityShortDto[]>;
     })
   );
 }
 Save(list: RelatedCustomerCreateUpdateDto): Observable<RelatedCustomerCreateUpdateDto[] | null> {
  return this._httpClient.post<CoreResponseDTO<RelatedCustomerCreateUpdateDto[]>>
    (Configuration.APIs.RelatedCustomer.Save, list).pipe(
      map((res: CoreResponseDTO<RelatedCustomerCreateUpdateDto[]>) => {
        if (res.data) {
          return res.data
        } else {
          return null
        }
      })
    )
}

GetRelatedCustomerListByFacilityId(facilityId:string): Observable<RelatedCustomerCreateUpdateDto[] | null> {
  return this._httpClient.get<CoreResponseDTO<RelatedCustomerCreateUpdateDto[]>>(`${Configuration.APIs.RelatedCustomer.GetRelatedCustomerListByFacilityId}/${facilityId}`).pipe(
    map((res: CoreResponseDTO<RelatedCustomerCreateUpdateDto[]>) => {
      if (res.data && res.data.length>0) {
        return res.data
      } else {
        return null
      }
    })
  )
}
GetRelatedCustomerList(pageIndex: number, pageSize: number): Observable<Pagination<RelatedCustomerListDto[] > | null> {
  let queryParams = new HttpParams();
  queryParams = queryParams.append("pageIndex", pageIndex);
  queryParams = queryParams.append("pageSize", pageSize);
  return this._httpClient.get<CoreResponseDTO<Pagination<RelatedCustomerListDto[]>>>(`${Configuration.APIs.RelatedCustomer.GetRelatedCustomerList}`, { params: queryParams }).pipe(
    map((res: CoreResponseDTO<Pagination<RelatedCustomerListDto[]>>) => {
     return res.isDone? res.data as Pagination<RelatedCustomerListDto[]> : null;
    })
  );
}
 GetSubCustomers():Observable<CustomerShortDto[]> {
  return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
    (`${Configuration.APIs.Customer.GetSubCustomers}`).pipe(
      map((res: CoreResponseDTO<CustomerShortDto[]>) => {
        return  res?.data  as CustomerShortDto[];
      })
    )
}
FacilityRegister(CommercialRegisterNumber: string, customerId: string): Observable<facilityResponse | null> {
  return this._httpClient.get<CoreResponseDTO<facilityResponse>>(`${Configuration.APIs.facility.Register}/${CommercialRegisterNumber}/${customerId}`).pipe(
    map((res: CoreResponseDTO<facilityResponse>) => {
      return res.data ? res.data : null
    })
  )
}
Delete(id: string): Observable<any> {
  return this._httpClient.delete<any>
    (`${Configuration.APIs.RelatedCustomer.Delete}?id=${id}`).pipe(
      map((res: any) => {
        return res;
      })
    )
}
}
