import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Configuration} from 'src/app/core/configurations/shared.config';
import {CoreResponseDTO} from 'src/app/core/models/core.model';
import {LicenseProjectRealStateMarketerDto} from './license-project-real-state-marketer-dto';
import {LicenseProjectRealStateMarketerCreateUpdateDto} from "./license-project-real-state-marketer-create-update-dto";

@Injectable()
export class LicenseProjectRealStateMarketerService {
  baseUrl = Configuration.APIs.LicenseProjectRealStateMarketer.baseUrl;

  constructor(public httpClient: HttpClient) {
  }

  updateAsync(model: LicenseProjectRealStateMarketerCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectRealStateMarketerDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectRealStateMarketer.Update}`;
    return this.httpClient.put<CoreResponseDTO<LicenseProjectRealStateMarketerDto>>(url, model);
  }

  createAsync(model: LicenseProjectRealStateMarketerCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectRealStateMarketerDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectRealStateMarketer.Create}`;
    return this.httpClient.post<CoreResponseDTO<LicenseProjectRealStateMarketerDto>>(url, model);
  }

  deleteAsync(id: any): Observable<any> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectRealStateMarketer.Delete}`;
    return this.httpClient.delete(`${url}`, {params: {id}});
  }

  getAsync(licenseProjectId: any): Observable<CoreResponseDTO<LicenseProjectRealStateMarketerCreateUpdateDto[]>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectRealStateMarketer.Get}`;
    return this.httpClient.get<CoreResponseDTO<LicenseProjectRealStateMarketerDto[]>>(`${url}`, {
      params: {id: licenseProjectId}
    });
  }
}
