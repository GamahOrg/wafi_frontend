import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LicenseProjectExhibitionDto } from '../dataModels/license-project-exhibition-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class ExhibitionDataService {

  constructor(private _httpClient: HttpClient) { }
  GetProjectExhibitionByLicenseProjectId(id: string): Observable<CoreResponseDTO<LicenseProjectExhibitionDto>> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectExhibitionDto>>
      (`${Configuration.APIs.LicenseProjectExhibition.GetByLicenseProjectId}/${id}`)
  }
  SaveProjectExhibition(obj: LicenseProjectExhibitionDto): Observable<CoreResponseDTO<LicenseProjectExhibitionDto>> {
    
    return this._httpClient.post<CoreResponseDTO<LicenseProjectExhibitionDto>>
      (Configuration.APIs.LicenseProjectExhibition.Save,obj).pipe(
      map((res: CoreResponseDTO<LicenseProjectExhibitionDto>) => {
        return res;
      })
    )
  }
}
