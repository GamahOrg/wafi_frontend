import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { WithdrawSurplusBeforeProjectEndRequestDto } from '../models/withdraw-surplus-before-project-end-request-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto } from '../models/withdraw-surplus-before-project-end-request-create-update-dto';

@Injectable()
export class WithdrawSurplusBeforeProjectEndRequestService {

 constructor(private _httpClient: HttpClient) { }
  private withdrawSurplusBeforeProjectEndRequest= new BehaviorSubject<WithdrawSurplusBeforeProjectEndRequestDto|null>({} as WithdrawSurplusBeforeProjectEndRequestDto|null);
  
   private withdrawSurplusBeforeProjectEndRequest$ = this.withdrawSurplusBeforeProjectEndRequest.asObservable();
   getWithdrawSurplusBeforeProjectEndRequest(): Observable<WithdrawSurplusBeforeProjectEndRequestDto|null> {
    return this.withdrawSurplusBeforeProjectEndRequest$;
  }
  setWithdrawSurplusBeforeProjectEndRequest(LatestValue:WithdrawSurplusBeforeProjectEndRequestDto) {
    return this.withdrawSurplusBeforeProjectEndRequest.next(LatestValue);
  }
  
   getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<WithdrawSurplusBeforeProjectEndRequestDto|null>{
     return this._httpClient.get<CoreResponseDTO<WithdrawSurplusBeforeProjectEndRequestDto>>(`${Configuration.APIs.WithdrawSurplusBeforeProjectEndRequest.GetWithdrawSurplusBeforeProjectEndRequestDetail}/${licenseProjectRequestId}`).pipe(
       map((res: CoreResponseDTO<WithdrawSurplusBeforeProjectEndRequestDto>)=>{
         return res.isDone? res.data as WithdrawSurplusBeforeProjectEndRequestDto:null;
   
       })
     );
    }
    save(changeOrAddLicenseProjectUnitModelRequestCreateUpdate: WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto): Observable<WithdrawSurplusBeforeProjectEndRequestDto|null> {
       return this._httpClient.post<CoreResponseDTO<WithdrawSurplusBeforeProjectEndRequestDto>>
         (Configuration.APIs.WithdrawSurplusBeforeProjectEndRequest.Save, changeOrAddLicenseProjectUnitModelRequestCreateUpdate).pipe(
          map((res: CoreResponseDTO<WithdrawSurplusBeforeProjectEndRequestDto>)=>{
            return res.isDone? res.data as WithdrawSurplusBeforeProjectEndRequestDto:null;
      
          })
         )
     }
}
