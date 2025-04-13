import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectRequestAttachmentDto } from '../dataModels/license-project-request-attachment-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectRequestAttachmentService {

  constructor(private _httpClient: HttpClient) { }
  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectRequestAttachmentDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectRequestAttachment.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectRequestAttachmentDto;
      })
    )
  }

  Save(model: LicenseProjectRequestAttachmentDto): Observable<LicenseProjectRequestAttachmentDto> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRequestAttachmentDto>>
      (Configuration.APIs.LicenseProjectRequestAttachment.Save, model).pipe(
        map((res: any) => {
          return res.data as LicenseProjectRequestAttachmentDto;
        })
      )
  }
}
