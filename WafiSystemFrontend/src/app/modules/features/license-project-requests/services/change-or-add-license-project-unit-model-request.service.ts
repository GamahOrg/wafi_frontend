import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ChangeOrAddLicenseProjectUnitModelRequestDto } from '../models/change-or-add-license-project-unit-model-request-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto } from '../models/change-or-add-license-project-unit-model-request-create-update-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ChangeOrAddLicenseProjectUnitModelRequestService {

  constructor(private _httpClient: HttpClient) { }
  private changeLicenseProjectNameRequest= new BehaviorSubject<ChangeOrAddLicenseProjectUnitModelRequestDto|null>({} as ChangeOrAddLicenseProjectUnitModelRequestDto|null);
  
   private changeLicenseProjectNameRequest$ = this.changeLicenseProjectNameRequest.asObservable();
   getChangeOrAddLicenseProjectUnitModelRequest(): Observable<ChangeOrAddLicenseProjectUnitModelRequestDto|null> {
    return this.changeLicenseProjectNameRequest$;
  }
  setChangeOrAddLicenseProjectUnitModelRequest(LatestValue:ChangeOrAddLicenseProjectUnitModelRequestDto) {
    return this.changeLicenseProjectNameRequest.next(LatestValue);
  }
  
   getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<ChangeOrAddLicenseProjectUnitModelRequestDto|null>{
     return this._httpClient.get<CoreResponseDTO<ChangeOrAddLicenseProjectUnitModelRequestDto>>(`${Configuration.APIs.ChangeOrAddLicenseProjectUnitModelRequest.GetChangeOrAddLicenseProjectUnitModelRequestDetail}/${licenseProjectRequestId}`).pipe(
       map((res: CoreResponseDTO<ChangeOrAddLicenseProjectUnitModelRequestDto>)=>{
         return res.isDone? res.data as ChangeOrAddLicenseProjectUnitModelRequestDto:null;
   
       })
     );
    }
    save(changeOrAddLicenseProjectUnitModelRequestCreateUpdate: ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto): Observable<ChangeOrAddLicenseProjectUnitModelRequestDto|null> {
       return this._httpClient.post<CoreResponseDTO<ChangeOrAddLicenseProjectUnitModelRequestDto>>
         (Configuration.APIs.ChangeOrAddLicenseProjectUnitModelRequest.Save, changeOrAddLicenseProjectUnitModelRequestCreateUpdate).pipe(
          map((res: CoreResponseDTO<ChangeOrAddLicenseProjectUnitModelRequestDto>)=>{
            return res.isDone? res.data as ChangeOrAddLicenseProjectUnitModelRequestDto:null;
      
          })
         )
     }
}
