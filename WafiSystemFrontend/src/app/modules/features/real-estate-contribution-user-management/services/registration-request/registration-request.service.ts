import { Injectable , EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Delegatorstabledata } from '../../dataModels/delegators-model';
import { DialogDelegatorActionData } from '../../dataModels/Dialog-model';


@Injectable()
export class RegistrationRequestService {

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter()

  constructor(private _httpClient : HttpClient) {
    
    
  }


 getCommissioners(pageIndex: number, pageSize: number): Observable<Pagination<Delegatorstabledata[] >> {
   let queryParams = new HttpParams();
   queryParams = queryParams.append("pageIndex", pageIndex);
   queryParams = queryParams.append("pageSize", pageSize);
   return this._httpClient.get<CoreResponseDTO<Pagination<Delegatorstabledata[]>>>(`${Configuration.APIs.RegistrationRequest.GetRegisterationRequests}`, { params: queryParams }).pipe(
     map((res: CoreResponseDTO<Pagination<Delegatorstabledata[]>>) => {
      if(res.isDone){
        return res.data as Pagination<Delegatorstabledata[]>;
      }
      else
      return {} as Pagination<Delegatorstabledata[]>;
     })
   );
 }


 deletCommissioner(id : string): Observable<CoreResponseDTO<Delegatorstabledata>> {
   return this._httpClient.get<CoreResponseDTO<Delegatorstabledata>>
     (`${Configuration.APIs.RegistrationRequest.Delete}/${id}`).pipe(
       map((res: CoreResponseDTO<Delegatorstabledata>) => {
         return res;
       })
     )
 }

 

 updateCommissioner(model : DialogDelegatorActionData) : Observable<CoreResponseDTO<Delegatorstabledata>> {
  return this._httpClient.post<CoreResponseDTO<Delegatorstabledata>>(`${Configuration.APIs.RegistrationRequest.Update}`, model)
 }
 


 getCommissionerByID(id? : string) :Observable<DialogDelegatorActionData>{
  return this._httpClient.get<CoreResponseDTO<DialogDelegatorActionData>>(`${Configuration.APIs.RegistrationRequest.GetById}/${id}`).pipe(
    map((res: CoreResponseDTO<DialogDelegatorActionData>)=>{
      return res.data as DialogDelegatorActionData;

    })
  );
 }

  AddCommissioners(model : DialogDelegatorActionData):Observable<CoreResponseDTO<Delegatorstabledata>>{
    return this._httpClient.post<CoreResponseDTO<Delegatorstabledata>>(`${Configuration.APIs.RegistrationRequest.Add}`, model)
  }
}
