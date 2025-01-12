import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseCertificateDto } from '../models/license-certification.model';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Injectable } from '@angular/core';

@Injectable()
export class LicenseCertificateService {

  constructor(private _httpClient: HttpClient) { }
  
  GetLicenseCertificates(customerId: string): Observable<LicenseCertificateDto[]|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseCertificateDto[]>>(`${Configuration.APIs.LicenseProjectCertificate.GetCertificates}/${customerId}`).pipe(
      map((res: CoreResponseDTO<LicenseCertificateDto[]>) => {
        return res.data  ? res.data as LicenseCertificateDto[] : null
      })
    )
  }

}
