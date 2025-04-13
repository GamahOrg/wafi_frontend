import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectCharteredAccountantCreateUpdateDto } from '../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-create-update-dto';
import { LicenseProjectCharteredAccountantDto } from '../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-dto';
@Injectable()
export class LicenseProjectCharteredAccountantService {
  baseUrl = Configuration.APIs.LicenseProjectCharteredAccountant.baseUrl;

  constructor(public httpClient: HttpClient) {
  }

  updateAsync(model: LicenseProjectCharteredAccountantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectCharteredAccountantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectCharteredAccountant.Update}`;
    return this.httpClient.put<CoreResponseDTO<LicenseProjectCharteredAccountantDto>>(url, model);
  }

  createAsync(model: LicenseProjectCharteredAccountantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectCharteredAccountantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectCharteredAccountant.Create}`;
    return this.httpClient.post<CoreResponseDTO<LicenseProjectCharteredAccountantDto>>(url, model);
  }

  getAsync(licenseProjectId: any): Observable<CoreResponseDTO<LicenseProjectCharteredAccountantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectCharteredAccountant.Get}`;
    return this.httpClient.get<CoreResponseDTO<LicenseProjectCharteredAccountantDto>>(`${url}`, {
      params: {id: licenseProjectId}
    });
  }
}
