import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ChangeLicenseProjectEngineeringRequestDto } from '../models/change-license-project-engineering-request-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangeLicenseProjectEngineeringRequestCreateUpdateDto } from '../models/change-license-project-engineering-request-create-update-dto';
import { FacilityShortDto } from '../models/request-header-details';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Injectable()
export class ChangeLicenseProjectEngineeringRequestService {

 constructor(private _httpClient: HttpClient) { }
private licenseProjectRequestChangeEngineer = new BehaviorSubject<ChangeLicenseProjectEngineeringRequestDto|null>({} as ChangeLicenseProjectEngineeringRequestDto|null);

 private licenseProjectRequestChangeEngineer$ = this.licenseProjectRequestChangeEngineer.asObservable();
 getLicenseProjectRequestChangeEngineer(): Observable<ChangeLicenseProjectEngineeringRequestDto|null> {
  return this.licenseProjectRequestChangeEngineer$;
}
setLicenseProjectRequestChangeEngineer(LatestValue: ChangeLicenseProjectEngineeringRequestDto) {
  return this.licenseProjectRequestChangeEngineer.next(LatestValue);
}


 getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<ChangeLicenseProjectEngineeringRequestDto|null>{
   return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>>(`${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.GetChangeLicenseProjectEngineeringRequestDetail}/${licenseProjectRequestId}`).pipe(
     map((res: CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>)=>{
       return res.isDone? res.data as ChangeLicenseProjectEngineeringRequestDto:null;
 
     })
   );
  }
  save(changePlanForRealEstateDeveloper: ChangeLicenseProjectEngineeringRequestCreateUpdateDto): Observable<ChangeLicenseProjectEngineeringRequestDto|null> {
     return this._httpClient.post<CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>>
       (Configuration.APIs.ChangeLicenseProjectEngineeringRequest.Save, changePlanForRealEstateDeveloper).pipe(
        map((res: CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>)=>{
          return res.isDone? res.data as ChangeLicenseProjectEngineeringRequestDto:null;
    
        })
       )
   }
     validateCommercialRegister(commercialRegister: string, typeCode: string, licenseProjectId: string | null): Observable<any |null> {
       return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.facility.validateCommercialRegister}/${commercialRegister}/${typeCode}/${licenseProjectId}`).pipe(
        map((res: CoreResponseDTO<any>)=>{
          return res.isDone? res.data as any:null;
    
        }))
     }
    
}
