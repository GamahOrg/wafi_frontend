import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectBuyerListPagingDto, LicenseProjectBuyerStatusEnum } from '../dataModels/license-project-buyer-list-paging-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectBuyerCreateUpdateDto } from '../dataModels/license-project-buyer-create-update-dto';
import { ProjectUnit } from '../models/project-units';
import { ProjectUnitCodeDto } from '../dataModels/project-unit-code.dto';
import { LicenseProjectBuyerDetailsDto, LicenseProjectBuyerDto, LicenseProjectBuyerLookUpDto, type LicenseProjectBuyerPaymentTypeDto, type LicenseProjectBuyerSettingDto } from '../dataModels/license-project-buyer-dto';

@Injectable()
export class LicenseProjectBuyerService {

  constructor(private _httpClient : HttpClient) {}

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 

  setLicenseProjectBuyerIdInLocalStorage(licenseProjectBuyerId: string): void {
    localStorage.setItem('licenseProjectBuyerId', licenseProjectBuyerId)
  }
  getLicenseProjectBuyerIdStorage(): string | null {
    return localStorage.getItem('licenseProjectBuyerId')
  }
  removeLicenseProjectBuyerIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectBuyerId')
  }
  getBuyersOnProject ( licenseProjectId:string,pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectBuyerListPagingDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectBuyerListPagingDto[]>>>(`${Configuration.APIs.LicenseProjectBuyer.GetBuyersOnProject}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectBuyerListPagingDto[]>>) => {
       
        return res.isDone? res.data as Pagination<LicenseProjectBuyerListPagingDto[]>: null
      })
    );
  }
  getContracts (pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectBuyerListPagingDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectBuyerListPagingDto[]>>>(`${Configuration.APIs.LicenseProjectBuyer.GetContracts}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectBuyerListPagingDto[]>>) => {
       
        return res.isDone? res.data as Pagination<LicenseProjectBuyerListPagingDto[]>: null
      })
    );
  }
  
  
  saveBuyer(obj: LicenseProjectBuyerCreateUpdateDto): Observable<CoreResponseDTO<any>> {

    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectBuyer.Save, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }
  cancelLicenseProjectBuyer(licenseProjectBuyerId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProjectBuyer.CancelLicenseProjectBuyer}/${licenseProjectBuyerId}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;  
      })
    )
  }

  deleteBuyer(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>
      (`${Configuration.APIs.LicenseProjectBuyer.Delete}?id=${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }

  acceptOrRejectOrRecoverBuyerContract(licenseProjectBuyerId: string,licenseProjectBuyerStatus:LicenseProjectBuyerStatusEnum): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProjectBuyer.AcceptOrRejectOrRecoverBuyerContract}/${licenseProjectBuyerId}/${licenseProjectBuyerStatus}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;  
      })
    )
  }

  getProjectBlockAndBuildingList(licenseProjectId: string): Observable<ProjectUnit[] |null> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnit[]>>(`${Configuration.APIs.LicenseProjectBuyer.GetProjectBlockAndBuildingList}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<ProjectUnit[]>) => {
        return res.data  ? res.data as ProjectUnit[] : null
      })
    )
  }
  getProjectUnitesList(licenseProjectId: string): Observable<ProjectUnitCodeDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnitCodeDto[]>>(`${Configuration.APIs.LicenseProjectBuyer.GetProjectUnitesList}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<ProjectUnitCodeDto[]>) => {
        return res.data  ? res.data as ProjectUnitCodeDto[] : null
      })
    )
  }
  getLicenseProjectBuyerDetail(licenseProjectBuyerId: string): Observable<LicenseProjectBuyerDto |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBuyerDto>>(`${Configuration.APIs.LicenseProjectBuyer.GetLicenseProjectBuyerDetail}/${licenseProjectBuyerId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectBuyerDto>) => {
        return res.data  ? res.data as LicenseProjectBuyerDto : null
      })
    )
  }

  GetBuyerSettings(licenseProjectId: string): Observable<LicenseProjectBuyerSettingDto |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBuyerSettingDto>>(`${Configuration.APIs.LicenseProjectBuyer.GetBuyerSettings}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectBuyerSettingDto>) => {
        return res.data  ? res.data as LicenseProjectBuyerSettingDto : null
      })
    )
  }
  GetBuyersBylicenseProjectId(licenseProjectId: string): Observable<LicenseProjectBuyerLookUpDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBuyerLookUpDto[]>>(`${Configuration.APIs.LicenseProjectBuyer.GetBuyersBylicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectBuyerLookUpDto[]>) => {
        return res.data  ? res.data as LicenseProjectBuyerLookUpDto[] : []
      })
    )
  }
  GetBuyersDetailByNIDNumber(nidNumber: string,licenseProjectId: string): Observable<LicenseProjectBuyerDetailsDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBuyerDetailsDto[]>>(`${Configuration.APIs.LicenseProjectBuyer.GetBuyersDetailByNIDNumber}/${nidNumber}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectBuyerDetailsDto[]>) => {
        return res.data  ? res.data as LicenseProjectBuyerDetailsDto[] : []
      })
    )
  }

  getLicenseProjectBuyerPaymentTypes(): Observable<LicenseProjectBuyerPaymentTypeDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBuyerPaymentTypeDto[]>>(`${Configuration.APIs.LicenseProjectBuyerPaymentType.Get}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectBuyerPaymentTypeDto[]>) => {
        return res.data  ? res.data as LicenseProjectBuyerPaymentTypeDto[] : []
      })
    )
  }

  
}
