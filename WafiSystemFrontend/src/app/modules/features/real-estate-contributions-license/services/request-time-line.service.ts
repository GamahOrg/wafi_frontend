import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseRequestLogsDto } from '../models/license-details.model';

@Injectable()
export class RequestTimeLineService {

  constructor(private _httpClient: HttpClient) { }

  GetLicenseRequestLogsByRequestId(requestId: string): Observable<LicenseRequestLogsDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseRequestLogsDto[]>>(`${Configuration.APIs.LicenseRequestLogs.GetByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseRequestLogsDto[]>) => {
        if(res.data){
          return res.data as LicenseRequestLogsDto[];
        }else{
          return null
        }
      })
    );
  }
}
