import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectAdditionalTermsVersionDto } from '../models/license-project-additional-terms-version.model';

@Injectable()
export class ItemsLogService {

  constructor(private _httpClient: HttpClient) { }

  getAllVersions(licenseId:string): Observable<LicenseProjectAdditionalTermsVersionDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectAdditionalTermsVersionDto[]>>(
      Configuration.APIs.LicenseProjectAdditionalTermsVersion.GetAllVersion + '/' + licenseId
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectAdditionalTermsVersionDto[]>) => {
        return res.data ? res.data as LicenseProjectAdditionalTermsVersionDto[] : null;
      })
    );
  }
}
