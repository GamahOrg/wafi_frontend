import { Injectable } from '@angular/core';
import { LicenseBeneficiaryContractNewItemsListDto, SysLicenseBeneficiaryContractFormListDto } from '../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class SysLicenseBeneficiaryContractFormService {
  ContractForm$: BehaviorSubject<LicenseBeneficiaryContractNewItemsListDto[] | null> = new BehaviorSubject<LicenseBeneficiaryContractNewItemsListDto[] | null>(null);
  constructor(private _httpClient: HttpClient) { }

  GetLicenseBeneficiaryContractForm(licenseProjectId: string): Observable<SysLicenseBeneficiaryContractFormListDto> {
    return this._httpClient.get(`${Configuration.APIs.SysLicenseBeneficiaryContractForm.GetLicenseBeneficiaryContractForm}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as SysLicenseBeneficiaryContractFormListDto;
      })
    )
  }
  UpdateLicenseBeneficiaryContractForm(model: SysLicenseBeneficiaryContractFormListDto): Observable<SysLicenseBeneficiaryContractFormListDto> {

    return this._httpClient.post<CoreResponseDTO<SysLicenseBeneficiaryContractFormListDto>>
      (Configuration.APIs.SysLicenseBeneficiaryContractForm.UpdateLicenseBeneficiaryContractForm, model).pipe(
        map((res: any) => {
          return res.data as SysLicenseBeneficiaryContractFormListDto;
        })
      )
  }

  updateContractForm(data: LicenseBeneficiaryContractNewItemsListDto[] | null): void {
    this.ContractForm$.next(data);
  }
  getContractForm(): Observable<LicenseBeneficiaryContractNewItemsListDto[] | null> {
    return this.ContractForm$.asObservable();
  }
}
