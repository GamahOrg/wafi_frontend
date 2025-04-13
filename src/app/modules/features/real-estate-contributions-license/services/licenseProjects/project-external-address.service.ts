import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectExternalAddressCreateUpdateDto, LicenseProjectExternalAddressDto } from '../../dataModels/project-external-address.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class ProjectExternalAddressService {

  constructor(private _httpClient: HttpClient) { }

  GetProjectExternalAddressByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectExternalAddressDto|null>>
      (`${Configuration.APIs.LicenseProjectExternalAddress.GetLicenseProjectExternalAddressByLicenseProjectId}/${id}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectExternalAddressDto|null>) => {
          return res.data;
        })
      )
  }

  Save(obj: LicenseProjectExternalAddressCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectExternalAddressDto>> {
    
    return this._httpClient.post<CoreResponseDTO<LicenseProjectExternalAddressDto>>
      (Configuration.APIs.LicenseProjectExternalAddress.Save,obj).pipe(
      map((res: CoreResponseDTO<LicenseProjectExternalAddressDto>) => {
        return res;
      })
    )
  }

}
