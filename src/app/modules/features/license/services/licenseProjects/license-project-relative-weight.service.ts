import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable, map } from 'rxjs';
import { LicenseProjectRelativeWeightCreateUpdateDto, LicenseProjectRelativeWeightDto, SysLicenseRelativeWeightDto } from '../../models/license-project-relative-weight-dto';

@Injectable()
export class LicenseProjectRelativeWeightService {

  constructor(private _httpClient: HttpClient) { }

  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectRelativeWeightDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRelativeWeightDto[]>>
    (`${Configuration.APIs.LicenseProjectRelativeWeight.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRelativeWeightDto[]>) => {
        return res.data as LicenseProjectRelativeWeightDto[];
      })
    )
  }

  Save(models: LicenseProjectRelativeWeightCreateUpdateDto[]): Observable<LicenseProjectRelativeWeightDto[]> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRelativeWeightCreateUpdateDto[]>>
      (Configuration.APIs.LicenseProjectRelativeWeight.Save, models).pipe(
        map((res: CoreResponseDTO<LicenseProjectRelativeWeightDto[]>) => {
          return res.data as LicenseProjectRelativeWeightDto[];
        })
      )
  }

  GetSysLicenseRelativeWeightLookup(): Observable<SysLicenseRelativeWeightDto[]> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseRelativeWeightDto[]>>
    (`${Configuration.APIs.SysLicenseRelativeWeight.Get}`).pipe(
      map((res: CoreResponseDTO<SysLicenseRelativeWeightDto[]>) => {
        return res.data as SysLicenseRelativeWeightDto[];
      })
    )
  }

}
