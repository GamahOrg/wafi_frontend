import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectDelegatorCreateUpdateDto, LicenseProjectDelegatorsDto } from '../dataModels/project-real-state-developer.dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AccountKeeperDto, LicenseProject } from '../models/license-project.model';
import { CustomerShortDto } from '../models/facility-short-dto';

@Injectable()
export class LicenseProjectDelegatorService {

  constructor(private _httpClient: HttpClient) { }
  
  private delegatorSubject = new BehaviorSubject<LicenseProjectDelegatorsDto|null>({} as LicenseProjectDelegatorsDto);

  private delegatorSubject$ = this.delegatorSubject.asObservable();

  private delegatorSubjectList = new BehaviorSubject<Array<LicenseProjectDelegatorsDto>>([]);
    
  private delegatorSubjectList$ = this.delegatorSubjectList.asObservable();
  getdelegatorObj(): Observable<LicenseProjectDelegatorsDto|null> {
   return this.delegatorSubject$;
 }
 setdelegatorObj(LatestValue: LicenseProjectDelegatorsDto|null) {
   return this.delegatorSubject.next(LatestValue);
 }

 getdelegatorlist(): Observable<Array<LicenseProjectDelegatorsDto>> {
  return this.delegatorSubjectList$;
}
setdelegatorList(list: Array<LicenseProjectDelegatorsDto>) {
  return this.delegatorSubjectList.next(list) ;
  }
  GetProjectDelegatorByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectDelegatorsDto[]>>
      (`${Configuration.APIs.licenseProjectDelegator.GetByLicenseProjectId}/${id}`)
  }
  GetLicenseProjectByIdAsync(id: string):Observable<AccountKeeperDto> {
    return this._httpClient.get<CoreResponseDTO<AccountKeeperDto>>
      (`${Configuration.APIs.licenseProjectDelegator.GetLicenseProjectByIdAsync}/${id}`).pipe(
        map((res: CoreResponseDTO<AccountKeeperDto>) => {
          return  res?.data  as AccountKeeperDto;
        })
      )
  }
  SaveProjectDelegator(obj: LicenseProjectDelegatorCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectDelegatorsDto[]>> {
    
    return this._httpClient.post<CoreResponseDTO<LicenseProjectDelegatorsDto[]>>
      (Configuration.APIs.licenseProjectDelegator.Save,obj).pipe(
      map((res: CoreResponseDTO<LicenseProjectDelegatorsDto[]>) => {
        return res;
      })
    )
  }
  deleteDelegator(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>
      (`${Configuration.APIs.licenseProjectDelegator.Delete}?id=${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }
  GetSubCustomers():Observable<CustomerShortDto[]> {
    return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
      (`${Configuration.APIs.Customer.GetSubCustomers}`).pipe(
        map((res: CoreResponseDTO<CustomerShortDto[]>) => {
          return  res?.data  as CustomerShortDto[];
        })
      )
  }

  GetFacilitySubCustomers(facilityId: string): Observable<CustomerShortDto[]> {
    return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
      (`${Configuration.APIs.Customer.GetFacilitySubCustomers}?facilityId=${facilityId}`).pipe(
        map((res: CoreResponseDTO<CustomerShortDto[]>) => {
          return res?.data as CustomerShortDto[];
        })
      )
  }
}
