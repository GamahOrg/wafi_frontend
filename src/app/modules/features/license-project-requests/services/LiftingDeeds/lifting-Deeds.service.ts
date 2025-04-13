import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseDeedDropDownList, LiftingDeedListDto } from '../../../../../shared/models/LiftingDeedList.dto';
import { map, Observable } from 'rxjs';

@Injectable()
export class LicenseProjectDeedService {
    
    constructor(private _httpClient: HttpClient) { }

    getLicenseProjectDeeds(licenseProjectId: string):Observable<LicenseDeedDropDownList[] |null>{
      debugger
      return this._httpClient.get<CoreResponseDTO<LicenseDeedDropDownList[]>>(`${Configuration.APIs.LiftingDeeds.GetDropDown}/${licenseProjectId}`).pipe(
                map((res: CoreResponseDTO<LicenseDeedDropDownList[]>)=>{
                  return res.isDone? res.data as LicenseDeedDropDownList[]:null;
            
    }))
    }
}