import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto, ChangeLicenseProjectBuyerOrTenantContractRequestDto } from '../models/change-license-project-buyer-or-tenant-contract-request-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ChangeLicenseProjectBuyerOrTenantContractRequestService {
constructor(private _httpClient: HttpClient) { }
private changeLicenseProjectBuyerOrTenantContractRequest= new BehaviorSubject<ChangeLicenseProjectBuyerOrTenantContractRequestDto|null>({} as ChangeLicenseProjectBuyerOrTenantContractRequestDto|null);

 private changeLicenseProjectBuyerOrTenantContractRequest$ = this.changeLicenseProjectBuyerOrTenantContractRequest.asObservable();
 getChangeLicenseProjectBuyerOrTenantContractRequest(): Observable<ChangeLicenseProjectBuyerOrTenantContractRequestDto|null> {
  return this.changeLicenseProjectBuyerOrTenantContractRequest$;
}
setChangeLicenseProjectBuyerOrTenantContractRequest(LatestValue:ChangeLicenseProjectBuyerOrTenantContractRequestDto) {
  return this.changeLicenseProjectBuyerOrTenantContractRequest.next(LatestValue);
}

 getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<ChangeLicenseProjectBuyerOrTenantContractRequestDto|null>{
   return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectBuyerOrTenantContractRequestDto>>(`${Configuration.APIs.ChangeLicenseProjectBuyerOrTenantContractRequest.GetChangeLicenseProjectBuyerOrTenantContractRequestDetail}/${licenseProjectRequestId}`).pipe(
     map((res: CoreResponseDTO<ChangeLicenseProjectBuyerOrTenantContractRequestDto>)=>{
       return res.isDone? res.data as ChangeLicenseProjectBuyerOrTenantContractRequestDto:null;
 
     })
   );
  }
  save(changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate: ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto): Observable<ChangeLicenseProjectBuyerOrTenantContractRequestDto|null> {
     return this._httpClient.post<CoreResponseDTO<ChangeLicenseProjectBuyerOrTenantContractRequestDto>>
       (Configuration.APIs.ChangeLicenseProjectBuyerOrTenantContractRequest.Save, changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate).pipe(
        map((res: CoreResponseDTO<ChangeLicenseProjectBuyerOrTenantContractRequestDto>)=>{
          return res.isDone? res.data as ChangeLicenseProjectBuyerOrTenantContractRequestDto:null;
    
        })
       )
   }
 
}
