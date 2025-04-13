import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AccountKeeperDto } from '../../dataModels/account-keeper.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class AccountKeeperService {
    
    constructor(private _httpClient: HttpClient) { }

    GetAccountKeeperDetailsByLicenseProjectId(id: string) {
      return this._httpClient.get<CoreResponseDTO<AccountKeeperDto>>
        (`${Configuration.APIs.LicenseProject.GetAccountKeeperDetailsByLicenseProjectId}/${id}`)
    }

    SaveAccountKeeperDetails(obj: AccountKeeperDto): Observable<CoreResponseDTO<AccountKeeperDto>> {
      
      return this._httpClient.post<CoreResponseDTO<AccountKeeperDto>>
        (Configuration.APIs.LicenseProject.SaveAccountKeeperDetails,obj).pipe(
        map((res: CoreResponseDTO<AccountKeeperDto>) => {
          return res;
        })
      )
    }
    GetById(id: string) : Observable<AccountKeeperDto | undefined>{
      return this._httpClient.get<CoreResponseDTO<AccountKeeperDto>>
      (`${Configuration.APIs.LicenseProject.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<AccountKeeperDto>) => {
          return res.data ;
        })
      )
    }
  
}