import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, type Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { licenseActivationRequestDetailsDto } from '../../license/models/license-activation-request-details-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class ReactivateLicenseService {

  selectedRequest$: BehaviorSubject<licenseActivationRequestDetailsDto | null> = new BehaviorSubject<licenseActivationRequestDetailsDto | null>(null);
  constructor(private _httpClient: HttpClient) { }


  getRequestDetails(
    id: String
  ): Observable<licenseActivationRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<licenseActivationRequestDetailsDto>>(
        `${
          Configuration.APIs.LicenseActivateRequest
            .GetLicenseActivationRequestDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<licenseActivationRequestDetailsDto>) => {
          return res.data as licenseActivationRequestDetailsDto;
        })
      );
  }
  createReactivateRquest(model: any) {
    return this._httpClient.post(
      `${Configuration.APIs.LicenseActivateRequest
        .CreateLicenseProjectActivationRequest
      }`,
      model
    );
  }
  
  SaveReactivateLicenseREquest(model: any) {
    return this._httpClient.put(
      `${Configuration.APIs.LicenseActivateRequest
        .CreateOrUpdateLicenseProjectActivationRequest
      }`,
      model
    );
  }


}
