import { LicenseProjectExchangeDocumentsOnProjectPagingDto } from './../models/exchange-documents-list-response';
import { GetExchangeDocumentListFilterRequest } from './../models/exchange-documents-list-filter-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchExchangeDocumentListFilterDto } from '../models/search-exchange-document-list-filter-dto';
import { Observable, map } from 'rxjs';
import { SearchExchangeDocumentListResponseDto } from '../models/search-exchange-document-list-response-dto';
import { Pagination } from '../../../../shared/models/pagination.model';
import { CoreResponseDTO } from '../../../../core/models/core.model';
import { Configuration } from '../../../../core/configurations/shared.config';
import { ApproveRejectExchangeRequest, exchangeRequestDetails } from '../models/exchange-documents-details-response';
import { LiceneProjectExchangeDocumentStatusDto } from '../dataModels/license-project-exchange-document-paging-dto';
import {  DelegatorRequest } from '../dataModels/delegator.dto';

@Injectable()
export class ExchangeDocumentService {
  constructor(private _httpClient: HttpClient) {}

  SearchExchangeDocumentList(
    request: SearchExchangeDocumentListFilterDto,
  ): Observable<Pagination<SearchExchangeDocumentListResponseDto[]>> {
    return this._httpClient
      .post<
        CoreResponseDTO<Pagination<SearchExchangeDocumentListResponseDto[]>>
      >(`${Configuration.APIs.LicenseProjectExchangeDocument.SearchExchangeDocumentList}`, request)
      .pipe(
        map(
          (
            res: CoreResponseDTO<
              Pagination<SearchExchangeDocumentListResponseDto[]>
            >,
          ) => {
            return res.data as Pagination<
              SearchExchangeDocumentListResponseDto[]
            >;
          },
        ),
      );
  }

  ExchangeDocumentsListOnProject(
    request: GetExchangeDocumentListFilterRequest,
  ): Observable<
    Pagination<LicenseProjectExchangeDocumentsOnProjectPagingDto[]>
  > {
    return this._httpClient
      .post<
        CoreResponseDTO<
          Pagination<LicenseProjectExchangeDocumentsOnProjectPagingDto[]>
        >
      >(`${Configuration.APIs.LicenseProjectExchangeDocument.ExchangeDocumentList}`, request)
      .pipe(
        map(
          (
            res: CoreResponseDTO<
              Pagination<LicenseProjectExchangeDocumentsOnProjectPagingDto[]>
            >,
          ) => {
            return res.data as Pagination<
              LicenseProjectExchangeDocumentsOnProjectPagingDto[]
            >;
          },
        ),
      );
  }

  CheckDelegatorPermission(
    licenseProjectId: string,
  ): Observable<CoreResponseDTO<boolean>> {
    return this._httpClient.get<CoreResponseDTO<boolean>>(
      `${Configuration.APIs.LicenseProjectExchangeDocument.CheckDelegatorPermission}/${licenseProjectId}`,
    );
  }
  getExchangeDocumentDetailWithCustomerInfo(
    exchangeDocumentId: string,
  ): Observable<CoreResponseDTO<exchangeRequestDetails>> {
    return this._httpClient.get<CoreResponseDTO<exchangeRequestDetails>>(
      `${Configuration.APIs.LicenseProjectExchangeDocument.GetExchangeDocumentDetailWithCustomerInfo}/${exchangeDocumentId}`,
    );
  }
  ApproveRejectExchangeDocument(req:ApproveRejectExchangeRequest): Observable<CoreResponseDTO<exchangeRequestDetails>> {
    return this._httpClient.post<CoreResponseDTO<exchangeRequestDetails>>(
      `${Configuration.APIs.LicenseProjectExchangeDocument.ApproveRejectExchangeDocument}`,req
    );
  }
  getLiceneProjectExchangeDocumentStatusList(): Observable<LiceneProjectExchangeDocumentStatusDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LiceneProjectExchangeDocumentStatusDto[]>>(`${Configuration.APIs.LicenseProjectExchangeDocument.GetLiceneProjectExchangeDocumentStatusList}`).pipe(
      map((res: CoreResponseDTO<LiceneProjectExchangeDocumentStatusDto[]>) => {
        return res.data ? res.data as LiceneProjectExchangeDocumentStatusDto[] : null
      })
    )
  }
  GetExchangeDocumentDetail(exchangeDocumentId: string): Observable<CoreResponseDTO<exchangeRequestDetails>> {
    return this._httpClient.get<CoreResponseDTO<exchangeRequestDetails>>(
      `${Configuration.APIs.LicenseProjectExchangeDocument.GetExchangeDocumentDetail}/${exchangeDocumentId}`,
    );
  }
  SaveDelegators(request: DelegatorRequest): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProject.AddDelegator}`,
      request
    );
  }
}
