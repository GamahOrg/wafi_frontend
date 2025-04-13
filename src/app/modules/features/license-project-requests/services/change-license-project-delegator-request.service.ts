import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangeLicenseProjectDelegatorRequestDto,ChangeLicenseProjectDelegatorRequestCreatUpdateDto } from '../models/change-license-project-delegator-request-dto';
import { HttpClient } from '@angular/common/http';
import { CustomerShortDto } from '../models/request-header-details';
import { LicenseProjectDelegatorsDto } from '../../license/dataModels/project-real-state-developer.dto';
@Injectable()
export class ChangeLicenseProjectDelegatorRequestService {

 constructor(private _httpClient: HttpClient) { }
 
 private licenseProjectRequestChangeDelegator = new BehaviorSubject<ChangeLicenseProjectDelegatorRequestDto|null>({} as ChangeLicenseProjectDelegatorRequestDto|null);
 
  private licenseProjectRequestChangeDelegator$ = this.licenseProjectRequestChangeDelegator.asObservable();
  getLicenseProjectRequestChangeDelegator(): Observable<ChangeLicenseProjectDelegatorRequestDto|null> {
   return this.licenseProjectRequestChangeDelegator$;
 }
 setLicenseProjectRequestChangeDelegator(LatestValue: ChangeLicenseProjectDelegatorRequestDto) {
   return this.licenseProjectRequestChangeDelegator.next(LatestValue);
 }
 
 
  getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<ChangeLicenseProjectDelegatorRequestDto|null>{
    return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectDelegatorRequestDto>>(`${Configuration.APIs.ChangeLicenseProjectDelegatorRequest.GetChangeLicenseProjectDelegatorRequestDetail}/${licenseProjectRequestId}`).pipe(
      map((res: CoreResponseDTO<ChangeLicenseProjectDelegatorRequestDto>)=>{
        return res.isDone? res.data as ChangeLicenseProjectDelegatorRequestDto:null;
  
      })
    );
   }
   save(changePlanForRealEstateDeveloper: ChangeLicenseProjectDelegatorRequestCreatUpdateDto): Observable<ChangeLicenseProjectDelegatorRequestDto|null> {
      return this._httpClient.post<CoreResponseDTO<ChangeLicenseProjectDelegatorRequestDto>>
        (Configuration.APIs.ChangeLicenseProjectDelegatorRequest.Save, changePlanForRealEstateDeveloper).pipe(
         map((res: CoreResponseDTO<ChangeLicenseProjectDelegatorRequestDto>)=>{
           return res.isDone? res.data as ChangeLicenseProjectDelegatorRequestDto:null;
     
         })
        )
    }
      GetFacilitySubCustomers(facilityId: string): Observable<CustomerShortDto[] |null> {
        return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
          (`${Configuration.APIs.Customer.GetFacilitySubCustomers}?facilityId=${facilityId}`).pipe(
            map((res: CoreResponseDTO<CustomerShortDto[]>) => {
              return res.isDone? res.data as CustomerShortDto[]:null;
            })
          )
      }
       GetProjectDelegatorByLicenseProjectId(id: string) : Observable<LicenseProjectDelegatorsDto[] |null>{
        return this._httpClient.get<CoreResponseDTO<LicenseProjectDelegatorsDto[]>>(`${Configuration.APIs.licenseProjectDelegator.GetByLicenseProjectId}/${id}`).pipe(
          map((res: CoreResponseDTO<LicenseProjectDelegatorsDto[]>)=>{
            return res.isDone? res.data as LicenseProjectDelegatorsDto[]:null;
      
          }))
        }
}
