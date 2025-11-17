import { Injectable } from '@angular/core';
import { LicenseProjectPartiesAdditionalTermsDto, TermsPartType } from '../models/license-project-parties-additional-terms-model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SysLicenseBeneficiaryContractFormDto } from '../dataModels/sys-license-beneficiary-contract-form-dto';

@Injectable()
export class LicenseProjectPartiesAdditionalTermsService {
  constructor(private _httpClient: HttpClient) { }
  
  private BeneficiarySubject = new BehaviorSubject<LicenseProjectPartiesAdditionalTermsDto|null>({} as LicenseProjectPartiesAdditionalTermsDto);
  private BeneficiarySubjectList = new BehaviorSubject<Array<LicenseProjectPartiesAdditionalTermsDto>>([]);

  GetAllAdditionalAsync(licenseProjectId:string, termsPartType:TermsPartType): Observable<CoreResponseDTO<LicenseProjectPartiesAdditionalTermsDto[]>> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectPartiesAdditionalTermsDto[]>>
      (`${Configuration.APIs.LicenseProjectPartiesAdditionalTerms.GetAllAdditionalAsync}/${licenseProjectId}/${termsPartType}`)
  }

  GetMaxItemNumberByLicenseProjectId(licenseProjectId:string, termsPartType:TermsPartType): Observable<CoreResponseDTO<number>> {
    return this._httpClient.get<CoreResponseDTO<number>>
      (`${Configuration.APIs.LicenseProjectPartiesAdditionalTerms.GetMaxItemNumberByLicenseProjectId}/${licenseProjectId}/${termsPartType}`)
  }

  SaveAsync(obj: LicenseProjectPartiesAdditionalTermsDto[]): Observable<CoreResponseDTO<LicenseProjectPartiesAdditionalTermsDto[]>> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectPartiesAdditionalTermsDto[]>>
      (Configuration.APIs.LicenseProjectPartiesAdditionalTerms.Save,obj).pipe(
      map((res: CoreResponseDTO<LicenseProjectPartiesAdditionalTermsDto[]>) => {
        return res;
      })
    )
  }
  
  GetList():  Observable<CoreResponseDTO<SysLicenseBeneficiaryContractFormDto[]>> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseBeneficiaryContractFormDto[]>>
    (`${Configuration.APIs.SysLicenseBeneficiaryContractForm.Get}`)
  }

  Delete(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>
      (`${Configuration.APIs.LicenseProjectPartiesAdditionalTerms.Delete}/${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }

}
