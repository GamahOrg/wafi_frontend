import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseProjectRequestProcessingLogNotes } from '../models/license-project-request-processing-log-notes';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class LicenseProjectRequestProcessingLogService {

  constructor(private _httpClient: HttpClient) { }

  GetRequestNotesByRequestId(requestId: string): Observable<LicenseProjectRequestProcessingLogNotes[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestProcessingLogNotes[]>>(`${Configuration.APIs.LicenseProjectRequestProcessingLog.GetByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRequestProcessingLogNotes[]>) => {
        if (res.data && res.data.length > 0) {
          return res.data
        } else {
          return null
        }
      })
    )
  }
}
