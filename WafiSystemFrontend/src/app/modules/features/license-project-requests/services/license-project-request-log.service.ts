import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectRequestLogDto } from '../models/license-project-request-log-dto';

@Injectable()
export class LicenseProjectRequestLogService {

  constructor(private _httpClient: HttpClient) { }

  getLicenseProjectRequestLogs(requestId: string): Observable<LicenseProjectRequestLogDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestLogDto[]>>(`${Configuration.APIs.LicenseProjectRequestLog.GetLicenseProjectRequestLogs}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRequestLogDto[]>) => {
        if (res.data && res.data.length > 0) {
          return res.data
        } else {
          return null
        }
      })
    )
  }
}
