import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectMainRealStateDeveloperCreateUpdateDto, LicenseProjectMainRealStateDeveloperDto } from '../dataModels/project-real-state-developer.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectMainRealStateDeveloperService {

  constructor(private _httpClient: HttpClient) { }
  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectMainRealStateDeveloperDto[]> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectMainRealStateDevelopers.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectMainRealStateDeveloperDto[];
      })
    )
  }

  Save(model: LicenseProjectMainRealStateDeveloperCreateUpdateDto): Observable<LicenseProjectMainRealStateDeveloperDto[]> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectMainRealStateDeveloperCreateUpdateDto>>
      (Configuration.APIs.LicenseProjectMainRealStateDevelopers.Save, model).pipe(
        map((res: any) => {
          return res.data as LicenseProjectMainRealStateDeveloperDto[];
        })
      )
  }
}
