import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangeLicenseProjectSpaceOrUnitsRequestDto } from '../models/change-license-project-space-or-units-request-dto';
import { ChangeLicenseProjectSpaceOrUnitsRequestCreateUpdateDto } from '../models/change-license-project-space-or-units-request-create-update-dto';

@Injectable()
export class ChangeLicenseProjectSpaceOrUnitsRequestService {

 constructor(private _httpClient: HttpClient) { }
private licenseProjectRequestChangeUnitsOrSpaceProject = new BehaviorSubject<ChangeLicenseProjectSpaceOrUnitsRequestDto|null>({} as ChangeLicenseProjectSpaceOrUnitsRequestDto|null);

 private licenseProjectRequestChangeUnitsOrSpaceProject$ = this.licenseProjectRequestChangeUnitsOrSpaceProject.asObservable();
 getLicenseProjectRequestChangeUnitsOrSpaceProject(): Observable<ChangeLicenseProjectSpaceOrUnitsRequestDto|null> {
  return this.licenseProjectRequestChangeUnitsOrSpaceProject$;
}
setLicenseProjectRequestChangeUnitsOrSpaceProject(LatestValue: ChangeLicenseProjectSpaceOrUnitsRequestDto) {
  return this.licenseProjectRequestChangeUnitsOrSpaceProject.next(LatestValue);
}


 getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<ChangeLicenseProjectSpaceOrUnitsRequestDto|null>{
   return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectSpaceOrUnitsRequestDto>>(`${Configuration.APIs.ChangeLicenseProjectSpaceOrUnitsRequest.GetChangeLicenseProjectSpaceOrUnitsRequesDetail}/${licenseProjectRequestId}`).pipe(
     map((res: CoreResponseDTO<ChangeLicenseProjectSpaceOrUnitsRequestDto>)=>{
       return res.isDone? res.data as ChangeLicenseProjectSpaceOrUnitsRequestDto:null;
 
     })
   );
  }
  save(changeLicenseProjectSpaceOrUnitsRequestCreateUpdate: ChangeLicenseProjectSpaceOrUnitsRequestCreateUpdateDto): Observable<ChangeLicenseProjectSpaceOrUnitsRequestDto|null> {
     return this._httpClient.post<CoreResponseDTO<ChangeLicenseProjectSpaceOrUnitsRequestDto>>
       (Configuration.APIs.ChangeLicenseProjectSpaceOrUnitsRequest.Save, changeLicenseProjectSpaceOrUnitsRequestCreateUpdate).pipe(
        map((res: CoreResponseDTO<ChangeLicenseProjectSpaceOrUnitsRequestDto>)=>{
          return res.isDone? res.data as ChangeLicenseProjectSpaceOrUnitsRequestDto:null;
    
        })
       )
   }
}
