import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SysLicenseRequestTypeDto } from '../models/sys-license-request-type-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysLicenseRequestTypeGroupingDto } from '../models/sys-license-request-type-grouping-dto';

@Injectable()
export class LicenseRequestTypeService {
    constructor(private _httpClient: HttpClient) { }
    GetByCode(requestTypeCode: string, renew:boolean): Observable<SysLicenseRequestTypeDto| null> {
      return this._httpClient.get<CoreResponseDTO<SysLicenseRequestTypeDto>>(`${Configuration.APIs.SysLicenseRequestType.GetShowForRealStateContributionByCode}/${requestTypeCode}/${renew}`).pipe(
        map((res) => {
          if(res.isDone && res.data){
            return res.data;
          }else{
            return null
          }
        })
      )
    }
    GetAllGroupingrealestatecontributionsLicense(): Observable<SysLicenseRequestTypeGroupingDto> {
      return this._httpClient.get(Configuration.APIs.realestatecontributionslicense.GetAllGroupingrealstateContributionLicense).pipe(
        map((res: any) => {
          return res.data as SysLicenseRequestTypeGroupingDto;
        })
      )
    }
    GetAll():Observable<any>{
      return this._httpClient.get(Configuration.APIs.SysLicenseRequestType.GetAllGroupingLicense).pipe(
        map((res: any) => {
          return res.data as SysLicenseRequestTypeGroupingDto;
        })
      )
    }
}
