import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BeneficiaryContractFormAdditionalTermsDto } from '../models/beneficiary-contract-form-additional-terms-dto';
import { HttpClient } from '@angular/common/http';
import { SysLicenseBeneficiaryContractFormDto } from '../dataModels/sys-license-beneficiary-contract-form-dto';

@Injectable()
export class BeneficiaryContractFormAdditionalTermsService {

  constructor(private _httpClient: HttpClient) { }
  
  private BeneficiarySubject = new BehaviorSubject<BeneficiaryContractFormAdditionalTermsDto|null>({} as BeneficiaryContractFormAdditionalTermsDto);

  private BeneficiarySubject$ = this.BeneficiarySubject.asObservable();

  private BeneficiarySubjectList = new BehaviorSubject<Array<BeneficiaryContractFormAdditionalTermsDto>>([]);
    
  private BeneficiarySubjectList$ = this.BeneficiarySubjectList.asObservable();

  getBeneficiarylist(): Observable<Array<BeneficiaryContractFormAdditionalTermsDto>> {
    return this.BeneficiarySubjectList$;
  }

  setBeneficiaryList(list: Array<BeneficiaryContractFormAdditionalTermsDto>) {
    return this.BeneficiarySubjectList.next(list) ;
  }

  GetAllAdditionalAsync(licenseProjectId:string,isActive:boolean=false): Observable<CoreResponseDTO<BeneficiaryContractFormAdditionalTermsDto[]>> {
    return this._httpClient.get<CoreResponseDTO<BeneficiaryContractFormAdditionalTermsDto[]>>
      (`${Configuration.APIs.LicenseProjectBeneficiaryContractFormAdditionalTerms.GetAllAdditionalAsync}/${licenseProjectId}?isActive=${isActive}`)
  }

  GetMaxItemNumberByLicenseProjectId(licenseProjectId:string): Observable<CoreResponseDTO<number>> {
    return this._httpClient.get<CoreResponseDTO<number>>
      (`${Configuration.APIs.LicenseProjectBeneficiaryContractFormAdditionalTerms.GetMaxItemNumberByLicenseProjectId}/${licenseProjectId}`)
  }

  SaveAsync(obj: BeneficiaryContractFormAdditionalTermsDto[]): Observable<CoreResponseDTO<BeneficiaryContractFormAdditionalTermsDto[]>> {
    return this._httpClient.post<CoreResponseDTO<BeneficiaryContractFormAdditionalTermsDto[]>>
      (Configuration.APIs.LicenseProjectBeneficiaryContractFormAdditionalTerms.Save,obj).pipe(
      map((res: CoreResponseDTO<BeneficiaryContractFormAdditionalTermsDto[]>) => {
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
      (`${Configuration.APIs.LicenseProjectBeneficiaryContractFormAdditionalTerms.Delete}/${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }

   activate(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>
      (`${Configuration.APIs.LicenseProjectBeneficiaryContractFormAdditionalTerms.activate}/${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }

  deActivate(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>
      (`${Configuration.APIs.LicenseProjectBeneficiaryContractFormAdditionalTerms.deActivate}/${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }

}
