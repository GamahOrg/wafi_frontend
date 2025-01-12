import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SocialInsuranceEmployeeLockUpList } from 'src/app/shared/models/social-insurance-employee-lock-up-list';

@Injectable({
  providedIn: 'root'
})
export class SocialInsuranceEmployeeListService {

  constructor(private _httpClient: HttpClient) { }


  getByFacilityId(facilityId: string) : Observable<SocialInsuranceEmployeeLockUpList[]>{
    console.log(facilityId)
    return this._httpClient.get<any>
    (`${Configuration.APIs.QualificationSocialInsuranceEmployeeList.getByFacilityId}/${facilityId}`).pipe(
      map((res: any) => {
        return res.data as SocialInsuranceEmployeeLockUpList[] ;
      })
    )
  }
}
