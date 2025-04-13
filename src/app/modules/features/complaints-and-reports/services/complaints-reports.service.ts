import { EventEmitter, Injectable } from '@angular/core';
import { ComplaintRequestStatusDto, ComplaintRequestTypeDto } from '../models/complaint-request-type-dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ComplaintRequestCreateUpdateDto } from '../models/complaint-request-create-update-dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ComplaintRequestCustomerPagingList } from '../models/complaint-request-customer-paging-list';
import { ComplaintRequestDto } from '../models/complaint-request-dto';

@Injectable()
export class ComplaintsReportsService {

  constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 


  private request = new BehaviorSubject<ComplaintRequestCustomerPagingList|null>({} as ComplaintRequestCustomerPagingList|null);
  private request$ = this.request.asObservable();

  getRequest(): Observable<ComplaintRequestCustomerPagingList|null> {
    return this.request$;
  }
  setRequest(LatestValue: ComplaintRequestCustomerPagingList) {
    return this.request.next(LatestValue);
  }
  GetByComplaintRequestId(id: string):Observable<ComplaintRequestDto> {
    return this._httpClient.get<CoreResponseDTO<ComplaintRequestDto>>
      (`${Configuration.APIs.ComplaintRequest.GetByComplaintRequestId}/${id}`).pipe(
        map((res: CoreResponseDTO<ComplaintRequestDto>) => {
          return  res?.data  as ComplaintRequestDto;
        })
      )
  }
  SaveComplaintRequest(complaintRequest: ComplaintRequestCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.ComplaintRequest.Create, complaintRequest).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res: null
        })
      )
  }
  GetComplaintRequestTypes(): Observable<ComplaintRequestTypeDto[]| null>{
    return this._httpClient.get<CoreResponseDTO<ComplaintRequestTypeDto[]>>(`${Configuration.APIs.ComplaintRequest.GetComplaintRequestTypeList}`).pipe(
      map((res: CoreResponseDTO<ComplaintRequestTypeDto[]>) => {
        return res.data ? res.data : null
      })
    )
  }
  getComplaintRequestCustomerPagingList( pageIndex: number, pageSize: number): Observable<Pagination<ComplaintRequestCustomerPagingList[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<ComplaintRequestCustomerPagingList[]>>>(`${Configuration.APIs.ComplaintRequest.GetCustomerComplaintRequestList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<ComplaintRequestCustomerPagingList[]>>) => {
       
        return res.isDone? res.data as Pagination<ComplaintRequestCustomerPagingList[]>: null
      })
    );
  }
  Delete(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>
      (`${Configuration.APIs.ComplaintRequest.Delete}?id=${id}`)
  }
}
