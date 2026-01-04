import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseRequestHeaderProcessingStepDto, InvoiceData, LicenseProjectBankAccountInformationDto } from '../models/license-request-header-processing-step-model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseRequestHeaderProcessingStepService {
  constructor(private _httpClient: HttpClient) {}

    GetLicenseRequestHeaderCode(licenseRequestHeaderId: string): Observable<string | null> {
    return this._httpClient
      .get<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestHeader.GetLicenseRequestHeaderCode}/${licenseRequestHeaderId}`)
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
        })
      );
  }

  GetBankAccountInformation(licenseRequestHeaderId: string): Observable<CoreResponseDTO<LicenseProjectBankAccountInformationDto>> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectBankAccountInformationDto>>(`${Configuration.APIs.BankAccount.GetBankAccountInformation}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  InitiateInvoice(licenseRequestHeaderId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(`${Configuration.APIs.Fawtarah.InitiateInvoice}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          return res;

        })
      );
  }

  GetInvoice(licenseRequestHeaderId: string): Observable<CoreResponseDTO<InvoiceData>> {
    return this._httpClient
      .get<CoreResponseDTO<InvoiceData>>(`${Configuration.APIs.Fawtarah.GetInvoice}/${licenseRequestHeaderId}`)
      .pipe(
        map((res) => {
          return res;

        })
      );
  }

}
