import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApproveDeedOwnerDto, DeedOwnerData } from '../../models/approve-deed-owner';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectLandOwnerDto, LicenseProjectLandOwnerInfoDto } from '../../models/licenseProject-land-owner.model';

@Injectable()
export class LicenseProjectLandOwnerService {

  constructor(private _httpClient: HttpClient) { }

  approveOwner(model: ApproveDeedOwnerDto): Observable<CoreResponseDTO<DeedOwnerData>> {
    return this._httpClient.post<CoreResponseDTO<DeedOwnerData>>(`${Configuration.APIs.LicenseProjectLandOwner.ApproveOwnerAgreement}`, model).pipe(
      map((res: CoreResponseDTO<DeedOwnerData>) => {
        return res as CoreResponseDTO<DeedOwnerData>
      })
    )
  }


  getLicenseProjectLandOwnerInfo(id: string): Observable<LicenseProjectLandOwnerInfoDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectLandOwnerInfoDto>>
      (`${Configuration.APIs.LicenseProjectLandOwner.GetLicenseProjectLandOwnerInfo}?id=${id}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectLandOwnerInfoDto>) => {
          return res.data ?? null;
        })
      )
  }
}
