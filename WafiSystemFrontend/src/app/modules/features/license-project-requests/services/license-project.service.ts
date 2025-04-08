import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectDetailsDto } from '../models/license-project.model';

@Injectable()
export class LicenseProjectService {

  constructor(private _httpClient: HttpClient) { }

  getLicenseProjectDetails(licenseProjectId: string | null): Observable<any> {

    return this._httpClient.get<CoreResponseDTO<LicenseProjectDetailsDto>>(`${Configuration.APIs.LicenseProject.GetLicenseProjectDetails}/${licenseProjectId}`,)
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectDetailsDto>) => {
          return res.data as any;
        })
      );
  }

}
