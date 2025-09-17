import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable, map } from 'rxjs';
import { LicenseProjectEngineeringConstructionWorkStatusDto, LicenseProjectRelativeWeightCreateUpdateDto, LicenseProjectRelativeWeightDto, SysLicenseRelativeWeightDto } from '../../models/license-project-relative-weight-dto';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { SysLicenseInfrastructureElementDto } from '../../../engineering-management/models/sys-license-infrastructure-element-dto';

@Injectable()
export class LicenseProjectRelativeWeightService {

  constructor(private _httpClient: HttpClient) { }

  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectRelativeWeightDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRelativeWeightDto[]>>
    (`${Configuration.APIs.LicenseProjectRelativeWeight.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRelativeWeightDto[]>) => {
        return res.data as LicenseProjectRelativeWeightDto[];
      })
    )
  }

  Save(models: LicenseProjectRelativeWeightCreateUpdateDto[]): Observable<LicenseProjectRelativeWeightDto[]> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRelativeWeightDto[]>>
      (Configuration.APIs.LicenseProjectRelativeWeight.Save, models).pipe(
        map((res: CoreResponseDTO<LicenseProjectRelativeWeightDto[]>) => {
          return res.data as LicenseProjectRelativeWeightDto[];
        })
      );
  }

  GetSysLicenseRelativeWeightLookup(): Observable<SysLicenseRelativeWeightDto[]> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseRelativeWeightDto[]>>
    (`${Configuration.APIs.SysLicenseRelativeWeight.Get}`).pipe(
      map((res: CoreResponseDTO<SysLicenseRelativeWeightDto[]>) => {
        return res.data as SysLicenseRelativeWeightDto[];
      })
    )
  }

  GetSysLicenseRelativeWeightByLicenceProjectId(licenseProjectId: string): Observable<SysLicenseRelativeWeightDto[]> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseRelativeWeightDto[]>>
    (`${Configuration.APIs.SysLicenseRelativeWeight.GetSysLicenseRelativeWeightByLicenceProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<SysLicenseRelativeWeightDto[]>) => {
        return res.data as SysLicenseRelativeWeightDto[];
      })
    )
  }

  SaveLicenseProjectEngineeringConstructionWorkStatus(models: LicenseProjectEngineeringConstructionWorkStatusDto): Observable<BaseResponse<any>> {
    return this._httpClient.post<CoreResponseDTO<BaseResponse<any>>>
      (Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.SaveLicenseProjectEngineeringConstructionWorkStatus, models).pipe(
        map((res: CoreResponseDTO<BaseResponse<any>>) => {
          return res as BaseResponse<any>;
        })
      );
  }

  DeleteMonthlyEngineeringReportExternalExpenses(licenseProjectId: string, licenseProjectRelativeWeightId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>
    (`${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.DeleteLicenseProjectEngineeringConstructionWorkStatus}/${licenseProjectId}/${licenseProjectRelativeWeightId}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;
      })
    )
  }

  getSysLicenseInfrastructureElement(licenseProjectId: string): Observable<SysLicenseInfrastructureElementDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseInfrastructureElementDto[]>>(
        `${Configuration.APIs.SysLicenseRelativeWeight.GetScopeItemsByLicenseProjectAsync}/${licenseProjectId}`)
      .pipe( map((res: CoreResponseDTO<SysLicenseInfrastructureElementDto[]>) => {
          return res.isDone ? (res.data as SysLicenseInfrastructureElementDto[]) : null;
        })
      );
  }

}
