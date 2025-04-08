import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeLicenseProjectNameRequestDto,ChangeLicenseProjectNameRequestCreateUpdateDto } from '../models/change-license-project-name-request-dto';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ChangeLicenseProjectNameRequestService {

 constructor(private _httpClient: HttpClient) { }
 private changeLicenseProjectNameRequest= new BehaviorSubject<ChangeLicenseProjectNameRequestDto|null>({} as ChangeLicenseProjectNameRequestDto|null);
 
  private changeLicenseProjectNameRequest$ = this.changeLicenseProjectNameRequest.asObservable();
  getChangeLicenseProjectNameRequest(): Observable<ChangeLicenseProjectNameRequestDto|null> {
   return this.changeLicenseProjectNameRequest$;
 }
 setChangeLicenseProjectNameRequest(LatestValue:ChangeLicenseProjectNameRequestDto) {
   return this.changeLicenseProjectNameRequest.next(LatestValue);
 }
 
  getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<ChangeLicenseProjectNameRequestDto|null>{
    return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectNameRequestDto>>(`${Configuration.APIs.ChangeLicenseProjectNameRequest.GetChangeLicenseProjectNameRequestDetail}/${licenseProjectRequestId}`).pipe(
      map((res: CoreResponseDTO<ChangeLicenseProjectNameRequestDto>)=>{
        return res.isDone? res.data as ChangeLicenseProjectNameRequestDto:null;
  
      })
    );
   }
   save(changeLicenseProjectNameRequestCreateUpdate: ChangeLicenseProjectNameRequestCreateUpdateDto): Observable<ChangeLicenseProjectNameRequestDto|null> {
      return this._httpClient.post<CoreResponseDTO<ChangeLicenseProjectNameRequestDto>>
        (Configuration.APIs.ChangeLicenseProjectNameRequest.Save, changeLicenseProjectNameRequestCreateUpdate).pipe(
         map((res: CoreResponseDTO<ChangeLicenseProjectNameRequestDto>)=>{
           return res.isDone? res.data as ChangeLicenseProjectNameRequestDto:null;
     
         })
        )
    }
}
