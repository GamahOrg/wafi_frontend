import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {LicenseCertificateTemplatePagingDto} from 'src/app/modules/features/license/models/license-certificate-template-paging-dto';
import { LicenseCertificateUnitDto } from '../models/license-certificate-unit-dto';
import { LicenseCertificateTemplateDto } from '../models/license-certificate-template-dto';
import { SysLicenseRelativeWeightDto } from '../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import { DropDownSubUnitTypeDto } from '../dataModels/drop-down-name.dto';
@Injectable()
export class LicenseCertificateTemplateService {

  constructor(private _httpClient : HttpClient) {}
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 
  getLicenseCertificateTemplateIdFromLocalStorage(): string | null {
    let licenseCertificateTemplateId = localStorage.getItem('licenseCertificateTemplateId');
    return licenseCertificateTemplateId;
  }
  clearLicenseCertificateTemplateIdFromLocalStorage(): void {
    localStorage.removeItem('licenseCertificateTemplateId');
  }
  setLicenseCertificateTemplateIdInLocalStorage(id: string): void {
    localStorage.setItem('licenseCertificateTemplateId', id);
  }
  getLicenseCertificateTemplateList (pageIndex: number, pageSize: number): Observable<Pagination<LicenseCertificateTemplatePagingDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseCertificateTemplatePagingDto[]>>>(`${Configuration.APIs.LicenseCertificateTemplate.GetLicenseCertificateTemplateList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseCertificateTemplatePagingDto[]>>) => {
       
        return res.isDone? res.data as Pagination<LicenseCertificateTemplatePagingDto[]>: null
      })
    );
  }
  getByLicenseCertificateTemplateId(licenseCertificateTemplateId: number): Observable<LicenseCertificateTemplateDto|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseCertificateTemplateDto>>(`${Configuration.APIs.LicenseCertificateTemplate.GetByLicenseCertificateTemplateId}/${licenseCertificateTemplateId}`).pipe(
      map((res: CoreResponseDTO<LicenseCertificateTemplateDto>) => {
        return res.data  ? res.data as LicenseCertificateTemplateDto : null
      })
    )
  }
  getlicenseCertificateUnitList (licenseCertificateTemplateId:number,pageIndex: number, pageSize: number): Observable<Pagination<LicenseCertificateUnitDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseCertificateTemplateId", licenseCertificateTemplateId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseCertificateUnitDto[]>>>(`${Configuration.APIs.LicenseCertificateTemplate.GetlicenseCertificateUnitList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseCertificateUnitDto[]>>) => {
       
        return res.isDone? res.data as Pagination<LicenseCertificateUnitDto[]>: null
      })
    );
  }
  Save(licenseCertificateTemplate: LicenseCertificateTemplateDto): Observable<any | null> {
    return this._httpClient.post<CoreResponseDTO<any>>(Configuration.APIs.LicenseCertificateTemplate.Save, licenseCertificateTemplate).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone? res as any : null
      })
    )
  }
  AddLicenseCertificateUnit(licenseCertificateUnit: LicenseCertificateUnitDto): Observable<any | null> {
    return this._httpClient.post<CoreResponseDTO<any>>(Configuration.APIs.LicenseCertificateTemplate.AddLicenseCertificateUnit, licenseCertificateUnit).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone? res as any : null
      })
    )
  }
  RemoveLicenseCertificateUnitAsync(licenseCertificateUnitId: number): Observable<any|null> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseCertificateTemplate.RemoveLicenseCertificateUnitAsync}/${licenseCertificateUnitId}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone  ? res as any : null
      })
    )
  }

  licenseRelativeWeights(): Observable<SysLicenseRelativeWeightDto[]|null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseRelativeWeightDto[]>>(`${Configuration.APIs.SysLicenseRelativeWeight.Get}`).pipe(
      map((res: CoreResponseDTO<SysLicenseRelativeWeightDto[]>) => {
        return res.data  ? res.data as SysLicenseRelativeWeightDto[] : null
      })
    )
  }
  GetSysLicenseProjectLandOwnerDeedTypeDropDown(): Observable<DropDownSubUnitTypeDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownSubUnitTypeDto[]>>(`${Configuration.APIs.SysLicenseProjectLandOwnerDeedType.GetDropDown}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownSubUnitTypeDto[]>) => {
          return res.data as DropDownSubUnitTypeDto[];
        })
      );
  }
}
