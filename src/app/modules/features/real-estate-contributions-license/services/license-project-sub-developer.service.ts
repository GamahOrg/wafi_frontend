import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Configuration} from 'src/app/core/configurations/shared.config';
import {CoreResponseDTO} from 'src/app/core/models/core.model';
import {
  LicenseProjectSubDeveloperCreateUpdateDto
} from '../dataModels/license-project-sub-developer/license-project-sub-developer-create-update-dto';
import {
  LicenseProjectSubDeveloperDto
} from '../dataModels/license-project-sub-developer/license-project-sub-developer-dto';

@Injectable()
export class LicenseProjectSubDeveloperService {
  baseUrl = Configuration.APIs.LicenseProjectSubDeveloper.baseUrl;

  constructor(public httpClient: HttpClient) {
  }

  updateAsync(model: LicenseProjectSubDeveloperCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectSubDeveloperDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectSubDeveloper.Update}`;
    return this.httpClient.put<CoreResponseDTO<LicenseProjectSubDeveloperDto>>(url, model);
  }

  createAsync(model: LicenseProjectSubDeveloperCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectSubDeveloperDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectSubDeveloper.Create}`;
    return this.httpClient.post<CoreResponseDTO<LicenseProjectSubDeveloperDto>>(url, model);
  }

  deleteAsync(id: any): Observable<any> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectSubDeveloper.Delete}`;
    return this.httpClient.delete(`${url}`, {params: {id}});
  }

  getAsync(licenseProjectId: any): Observable<CoreResponseDTO<LicenseProjectSubDeveloperCreateUpdateDto[]>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectSubDeveloper.Get}`;
    return this.httpClient.get<CoreResponseDTO<LicenseProjectSubDeveloperDto[]>>(`${url}`, {
      params: {id: licenseProjectId}
    });
  }
}
