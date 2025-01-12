import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LicenseProjectDeveloperCreateUpdateDto, LicenseProjectDeveloperDto } from '../dataModels/license-project-developer-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectDeveloperService {

  constructor(private _httpClient: HttpClient) { }
  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectDeveloperDto|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectDeveloperDto>>(`${Configuration.APIs.LicenseProjectDeveloper.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectDeveloperDto>) => {
        return res.data  ? res.data as LicenseProjectDeveloperDto : null
      })
    )
  }
  Save(model: LicenseProjectDeveloperCreateUpdateDto): Observable<LicenseProjectDeveloperDto> {
    
    return this._httpClient.post<CoreResponseDTO<LicenseProjectDeveloperDto>>
      (Configuration.APIs.LicenseProjectDeveloper.Save,model).pipe(
      map((res: CoreResponseDTO<LicenseProjectDeveloperDto>) => {
        return res.data as LicenseProjectDeveloperDto;
      })
    )
  }
}
