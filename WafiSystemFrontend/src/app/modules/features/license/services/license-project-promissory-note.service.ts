import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LicenseProjectPromissoryNoteCreateDto, LicenseProjectPromissoryNoteDto } from '../dataModels/license-project-promissory-note.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class LicenseProjectPromissoryNoteService {

  constructor(private _httpClient: HttpClient) { }
  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectPromissoryNoteDto|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectPromissoryNoteDto>>(`${Configuration.APIs.LicenseProjectPromissoryNote.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectPromissoryNoteDto>) => {
        return res.data  ? res.data as LicenseProjectPromissoryNoteDto : null
      })
    )
  }
  Save(model: LicenseProjectPromissoryNoteCreateDto): Observable<LicenseProjectPromissoryNoteDto> {
    
    return this._httpClient.post<CoreResponseDTO<LicenseProjectPromissoryNoteDto>>
      (Configuration.APIs.LicenseProjectPromissoryNote.Save,model).pipe(
      map((res: CoreResponseDTO<LicenseProjectPromissoryNoteDto>) => {
        return res.data as LicenseProjectPromissoryNoteDto;
      })
    )
  }
}
