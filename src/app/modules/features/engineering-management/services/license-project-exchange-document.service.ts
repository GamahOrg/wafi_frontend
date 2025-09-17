import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectExchangeDocumentPagingDto, LiceneProjectBeneficiaryTypeDto, LicenseProjectExchangeDocumentMainItemDto, LicenseProjectExchangeDocumentMainItemEnum, LicenseProjectExchangeDocumentSubItemDto } from '../models/license-project-exchange-document-paging-dto';
import { LicenseProjectExchangeDocumentDto } from '../../license/dataModels/license-project-exchange-document-dto';
import { LicenseProjectExchangeDocumentCreateUpdateDto } from '../../license/dataModels/license-project-exchange-document-create-update-dto';
import { LicenseProjectDto } from '../models/license-project-engineering-actual-report-details-dto';


@Injectable()
export class LicenseProjectExchangeDocumentService {

  
  constructor(private _httpClient : HttpClient) {}

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 

  setLicenseProjectExchangeDocumentIdInLocalStorage(licenseProjectExchangeDocumentId: string): void {
    localStorage.setItem('licenseProjectExchangeDocumentId', licenseProjectExchangeDocumentId)
  }

  getLicenseProjectExchangeDocumentIdStorage(): string | null {
    return localStorage.getItem('licenseProjectExchangeDocumentId')
  }

  removeLicenseProjectExchangeDocumentIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectExchangeDocumentId')
  }

  getExchangeDocumentOnProject(licenseProjectId: string, pageIndex: number, pageSize: number, monthDate?: Date): Observable<Pagination<LicenseProjectExchangeDocumentPagingDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    
    if (monthDate) {
        // Ensure monthDate is a Date object
        const dateObj = new Date(monthDate);
        queryParams = queryParams.append("monthDate", dateObj.toISOString());
    }

    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectExchangeDocumentPagingDto[]>>>(`${Configuration.APIs.LicenseProjectExchangeDocument.GetExchangeDocumentOnProject}`, { params: queryParams }).pipe(
        map((res: CoreResponseDTO<Pagination<LicenseProjectExchangeDocumentPagingDto[]>>) => {
            return res.isDone ? res.data as Pagination<LicenseProjectExchangeDocumentPagingDto[]> : null
        })
    );
  }
  
  getLicenseProjectExchangeDocumentDetail(licenseProjectExchangeDocumentId: string): Observable<LicenseProjectExchangeDocumentDto |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectExchangeDocumentDto>>(`${Configuration.APIs.LicenseProjectExchangeDocument.GetLicenseProjectExchangeDocumentDetail}/${licenseProjectExchangeDocumentId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectExchangeDocumentDto>) => {
        return res.data  ? res.data as LicenseProjectExchangeDocumentDto : null
      })
    )
  }

  saveBuyer(obj: LicenseProjectExchangeDocumentCreateUpdateDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectExchangeDocument.Save, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }
  
  getLiceneProjectBeneficiaryTypeList(): Observable<LiceneProjectBeneficiaryTypeDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<LiceneProjectBeneficiaryTypeDto[]>>(`${Configuration.APIs.LicenseProjectExchangeDocument.GetLiceneProjectBeneficiaryTypeList}`).pipe(
      map((res: CoreResponseDTO<LiceneProjectBeneficiaryTypeDto[]>) => {
        return res.data  ? res.data as LiceneProjectBeneficiaryTypeDto[] : null
      })
    )
  }
  getExchangeDocumentMainItemList(): Observable<LicenseProjectExchangeDocumentMainItemDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectExchangeDocumentMainItemDto[]>>(`${Configuration.APIs.LicenseProjectExchangeDocument.GetExchangeDocumentMainItemList}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectExchangeDocumentMainItemDto[]>) => {
        return res.data  ? res.data as LicenseProjectExchangeDocumentMainItemDto[] : null
      })
    )
  }
  getExchangeDocumentSubItemList(mainItemId:LicenseProjectExchangeDocumentMainItemEnum): Observable<LicenseProjectExchangeDocumentSubItemDto[] |null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectExchangeDocumentSubItemDto[]>>(`${Configuration.APIs.LicenseProjectExchangeDocument.GetExchangeDocumentSubItemList}/${mainItemId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectExchangeDocumentSubItemDto[]>) => {
        return res.data  ? res.data as LicenseProjectExchangeDocumentSubItemDto[] : null
      })
    )
  }
  getLicenseProjectData(licenseProjectId: string): Observable<LicenseProjectDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectDto>>
      (`${Configuration.APIs.LicenseProjectExchangeDocument.GetLicenseProjectData}/${licenseProjectId}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectDto>) => {
          return res.isDone ? res.data as LicenseProjectDto : null
        })
      )
  }
}
