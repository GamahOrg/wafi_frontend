import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseRequestProcessingNotesDto } from '../models/license-details.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Observable } from 'rxjs/internal/Observable';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class LicenseRequestNotesService {

  constructor(private _httpClient: HttpClient) { }

  GetLicenseRequestProcessingNotesByRequestId(requestId: string): Observable<LicenseRequestProcessingNotesDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseRequestProcessingNotesDto[]>>(`${Configuration.APIs.LicenseRequestProcessingNotes.GetByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseRequestProcessingNotesDto[]>) => {
        if(res.data){
          return res.data as LicenseRequestProcessingNotesDto[];
        }else{
          return null
        }
      })
    );
  }
}
