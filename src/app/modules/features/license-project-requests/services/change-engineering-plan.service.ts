import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApproveRequestPayload, ChangeEngineeringRequestFullDetailsDto, RejectRequestPayload } from '../models/change-engineering-request';
import { map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ChangeEngineeringPlanService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * 🔹 Get request details
   */
  getDetailsById(
    requestId: string,
  ): Observable<ChangeEngineeringRequestFullDetailsDto> {
    return this._httpClient
      .get<
        CoreResponseDTO<ChangeEngineeringRequestFullDetailsDto>
      >(`${Configuration.APIs.ChangeEngineerLicenseRequest.GetRequestDataPage}/${requestId}`)
      .pipe(
        map(
          (res: CoreResponseDTO<ChangeEngineeringRequestFullDetailsDto>) =>
            res.data as ChangeEngineeringRequestFullDetailsDto,
        ),
      );
  }

  /**
   * 🔹 Approve request
   */
  approve(payload: ApproveRequestPayload): Observable<any> {
    return this._httpClient.post<any>(`${Configuration.APIs.ChangeEngineerLicenseRequest.ApproveRequest}`, payload);
  }

  /**
   * 🔹 Reject request
   */
  reject(payload: RejectRequestPayload): Observable<any> {
    return this._httpClient.post<any>(`${Configuration.APIs.ChangeEngineerLicenseRequest.RejectRequest}`, payload);
  }
}
