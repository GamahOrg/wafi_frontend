import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { QualificationCertificate } from '../../dataModels/qualification-certificate.model';

@Injectable()
export class QualificationCertificatesService {

  // getCertificatesByCustomerId= Configuration.APIs.SysTemplate.getCertificatesByCustomerId;
  // getCertificateByRequestId= Configuration.APIs.SysTemplate.getCertificateByRequestId;
  constructor(private _httpClient: HttpClient) { }

  getCertificatesByCustomerId(customerId: string): Observable<QualificationCertificate[] | null> {
    return this._httpClient.get<CoreResponseDTO<QualificationCertificate[]>>(`${Configuration.APIs.SysTemplate.getCertificatesByCustomerId}/${customerId}`).pipe(
      map((res: CoreResponseDTO<QualificationCertificate[]>) => {
        if (res.data) {
          return res.data as QualificationCertificate[]
        } else {
          return null
        }
      })
    )
  }

  getCertificateByRequestId(requestId: string): Observable<QualificationCertificate | null> {
    return this._httpClient.get<CoreResponseDTO<QualificationCertificate>>(`${Configuration.APIs.SysTemplate.getCertificatesByCustomerId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<QualificationCertificate>) => {
        if (res.data) {
          return res.data as QualificationCertificate
        } else {
          return null
        }
      })
    )
  }
}
