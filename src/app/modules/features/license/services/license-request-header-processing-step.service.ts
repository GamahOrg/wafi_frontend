import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseRequestHeaderProcessingStepDto } from '../models/license-request-header-processing-step-model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseRequestHeaderProcessingStepService {
  constructor(private _httpClient: HttpClient) {}



  GetLicenseRequestHeaderProcessingStep(licenseRequestHeaderId: string): Observable<LicenseRequestHeaderProcessingStepDto[] | null> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseRequestHeaderProcessingStepDto[]>>(`${Configuration.APIs.LicenseRequestHeaderProcessingStep.GetLicenseRequestHeaderProcessingStep}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          if (res.isDone && res.data) {
            return res.data;
          } else {
            return null;
          }
        })
      );
  }

  
  GenerateBankAccount(licenseRequestHeaderId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(`${Configuration.APIs.BankAccount.GenerateBankAccount}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          return res;
          // if (res.isDone && res.data) {
          //   return res.;
          // } else {
          //   return null;
          // }

        })
      );
  }

  InitiateInvoice(licenseRequestHeaderId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(`${Configuration.APIs.Fawtarah.InitiateInvoice}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          return res;
          // if (res.isDone && res.data) {
          //   return res.;
          // } else {
          //   return null;
          // }

        })
      );
  }

  GetInvoice(licenseRequestHeaderId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(`${Configuration.APIs.Fawtarah.GetInvoice}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          return res;
          // if (res.isDone && res.data) {
          //   return res.;
          // } else {
          //   return null;
          // }

        })
      );
  }

}
