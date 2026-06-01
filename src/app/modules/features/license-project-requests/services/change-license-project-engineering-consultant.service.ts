import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ChangeLicenseProjectEngineeringConsultantCreateUpdateDto } from '../models/change-license-project-engineering-consultant-create-update-dto';
import { ChangeLicenseProjectEngineeringConsultantDto } from '../models/change-license-project-engineering-consultant-dto';
import { CustomerShortDto } from '../../license/models/facility-short-dto';

@Injectable()
export class ChangeLicenseProjectEngineeringConsultantService {
  constructor(private _httpClient: HttpClient) {}

  createAsync(
    model: ChangeLicenseProjectEngineeringConsultantCreateUpdateDto,
  ): Observable<CoreResponseDTO<ChangeLicenseProjectEngineeringConsultantDto>> {
    return this._httpClient.post<
      CoreResponseDTO<ChangeLicenseProjectEngineeringConsultantDto>
    >(
      Configuration.APIs.ChangeLicenseProjectEngineeringRequest.ConsultantCreate,
      model,
    );
  }

  updateAsync(
    model: ChangeLicenseProjectEngineeringConsultantCreateUpdateDto,
  ): Observable<CoreResponseDTO<ChangeLicenseProjectEngineeringConsultantDto>> {
    return this._httpClient.put<
      CoreResponseDTO<ChangeLicenseProjectEngineeringConsultantDto>
    >(
      Configuration.APIs.ChangeLicenseProjectEngineeringRequest.ConsultantUpdate,
      model,
    );
  }

  getByRequestIdAsync(
    changeLicenseProjectEngineeringRequestId: string,
  ): Observable<CoreResponseDTO<ChangeLicenseProjectEngineeringConsultantDto>> {
    return this._httpClient.get<
      CoreResponseDTO<ChangeLicenseProjectEngineeringConsultantDto>
    >(
      `${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.ConsultantGetByRequestId}/${changeLicenseProjectEngineeringRequestId}`,
    );
  }

  updateConsultantRequestStatus(
    changeLicenseProjectEngineeringRequestId: string,
  ): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.UpdateConsultantRequestStatus}/${changeLicenseProjectEngineeringRequestId}`,
    );
  }

  validateCommercialRegisterNumber(
    commercialRegister: string,
    typeCode: string,
    licenseProjectId: string | null,
    skipErrorToast: boolean = false,
  ): Observable<CoreResponseDTO<CustomerShortDto>> {
    let url = `${Configuration.APIs.facility.validateCommercialRegister}`;
    let headers = new HttpHeaders();
    if (skipErrorToast) {
      headers = headers.set('X-Skip-Error-Toast', 'true');
    }
    return this._httpClient
      .get(
        `${url}/${commercialRegister}/${typeCode}/${licenseProjectId}`,
        { headers },
      )
      .pipe(map((res: any) => res));
  }
}
