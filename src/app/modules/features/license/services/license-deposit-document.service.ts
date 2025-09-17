import { HttpClient, HttpParams } from '@angular/common/http';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { EventEmitter, Injectable } from '@angular/core';
import { LicenseDepositDocumentListDto } from '../models/license-deposit-document-model/deposit-document-list-dto';
import { LicenseDepositDocumentDetailsDto } from '../models/license-deposit-document-model/deposit-document-details-dto';
import { AddUpdateLicenseProjectDepositDto, MainItemsDto, SysSettingsDto } from '../models/license-deposit-document-model/add-update-deposit-document-dto';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectAccountsDto } from '../dataModels/license-project-buyer-dto';

@Injectable()
export class LicenseDepositDocumentService {

  constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 

  setLicenseProjectDepositDocumentIdInLocalStorage(id: string): void {
    localStorage.setItem('licenseProjectDepositDocumentId', id)
  }
  getLicenseProjectDepositDocumentIdStorage(): string | null {
    return localStorage.getItem('licenseProjectDepositDocumentId')
  }
  removeLicenseProjectDepositDocumentIdStorage(): void {
    localStorage.removeItem('licenseProjectDepositDocumentId')
  }
  GetDepositDocumentList(licenseProjectId: string,pageIndex: number, pageSize: number):  Observable<Pagination<LicenseDepositDocumentListDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseDepositDocumentListDto[]>>>(`${Configuration.APIs.LicenseProjectDeposits.GetLicenseProjectDeposits}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseDepositDocumentListDto[]>>) => {
        return res.data as Pagination<LicenseDepositDocumentListDto[]>
      })
    )
  }

  GetDepositDocumentDetails(id: string): Observable<LicenseDepositDocumentDetailsDto|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseDepositDocumentDetailsDto>>(`${Configuration.APIs.LicenseProjectDeposits.GetById}/${id}`).pipe(
      map((res: CoreResponseDTO<LicenseDepositDocumentDetailsDto>) => {
        return res.data  ? res.data as LicenseDepositDocumentDetailsDto : null
      })
    )
  }

  GetAccountNumber(id: string): Observable<LicenseProjectAccountsDto|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectAccountsDto>>(`${Configuration.APIs.LicenseProjectDeposits.GetAccountNumber}/${id}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectAccountsDto>) => {
        return res.data  ? res.data as LicenseProjectAccountsDto : null
      })
    )
  }

  SaveLicenseDepositDocument(obj: AddUpdateLicenseProjectDepositDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectDeposits.SaveLicenseProjectDeposits, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }

  UpdateLicenseDepositDocument(obj: AddUpdateLicenseProjectDepositDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectDeposits.Update, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }

  GetMainItems(): Observable<CoreResponseDTO<MainItemsDto[]|null>> {
    return this._httpClient.get<CoreResponseDTO<MainItemsDto[]>>
      (Configuration.APIs.LicenseProjectDeposits.GetMainItems).pipe(
        map((res: CoreResponseDTO<MainItemsDto[]>) => {
          return res;
        })
      )
  }

  GetCalcRatioSettingForAccounts(): Observable<CoreResponseDTO<SysSettingsDto[]|null>> {
    return this._httpClient.get<CoreResponseDTO<SysSettingsDto[]>>
      (Configuration.APIs.LicenseProjectDeposits.GetCalcRatioSettingForAccounts).pipe(
        map((res: CoreResponseDTO<SysSettingsDto[]>) => {
          return res;
        })
      )
  }
}
