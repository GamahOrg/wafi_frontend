import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';

import { Injectable } from '@angular/core';

@Injectable()
export class CorrectionLicenseProjectPlanAccordingApprovedStandardsFileService {
  constructor(private _httpClient: HttpClient) {}

  DeletePlanFile(fileId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.CorrectionLicenseProjectPlanAccordingApprovedStandardsFile.DeleteFile}/${fileId}`
    );
  }
}
