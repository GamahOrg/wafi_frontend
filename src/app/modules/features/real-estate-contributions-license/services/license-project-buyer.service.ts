import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectBuyerListPagingDto, LicenseProjectBuyerStatusEnum } from '../models/license-project-buyer-list-paging-dto';
import { LicenseProjectBuyerCreateUpdateDto } from '../models/license-project-buyer-create-update-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectBuyerContractFilterDto, LicenseProjectBuyerContractListDto } from '../models/license-project-buyer-contracts-dto';

@Injectable()
export class LicenseProjectBuyerService {

  constructor(private _httpClient : HttpClient) {}

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 

  getFacilityBuyers ( facilityId:string,pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectBuyerListPagingDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("facilityId", facilityId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectBuyerListPagingDto[]>>>(`${Configuration.APIs.LicenseProjectBuyer.GetBuyersOnProject}`, { params: queryParams }).pipe(
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
  acceptOrRejectBuyerContract(licenseProjectBuyerId: string,licenseProjectBuyerStatus:LicenseProjectBuyerStatusEnum): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProjectBuyer.AcceptOrRejectOrRecoverBuyerContract}/${licenseProjectBuyerId}/${licenseProjectBuyerStatus}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;  
      })
    )
  }
}
