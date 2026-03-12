import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SysLicenseRequestTypeDto } from '../models/sys-license-request-type-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysLicenseRequestTypeGroupingDto } from '../models/sys-license-request-type-grouping-dto';
import { SysLicenseGroupingDto } from '../models/sys-license-grouping-dto';
import { FacilityStatus } from '../enums/facility-status.enum';

@Injectable()
export class LicenseRequestTypeService {
  constructor(private _httpClient: HttpClient) {}
  GetByCode(
    requestTypeCode: string,
    renew: boolean,
  ): Observable<SysLicenseRequestTypeDto | null> {
    return this._httpClient
      .get<
        CoreResponseDTO<SysLicenseRequestTypeDto>
      >(`${Configuration.APIs.SysLicenseRequestType.GetShowForWafiByCode}/${requestTypeCode}/${renew}`)
      .pipe(
        map((res) => {
          if (res.isDone && res.data) {
            return res.data;
          } else {
            return null;
          }
        }),
      );
  }
  GetAllGroupingLicense(): Observable<SysLicenseRequestTypeGroupingDto> {
    return this._httpClient
      .get(Configuration.APIs.SysLicenseRequestType.GetAllGroupingLicense)
      .pipe(
        map((res: any) => {
          return res.data as SysLicenseRequestTypeGroupingDto;
        }),
      );
  }
  GetAll(): Observable<any> {
    return this._httpClient
      .get(Configuration.APIs.SysLicenseRequestType.GetAllGroupingLicense)
      .pipe(
        map((res: any) => {
          return res.data as SysLicenseRequestTypeGroupingDto;
        }),
      );
  }
  getAllLicenseRequestTypes(): Observable<SysLicenseGroupingDto[]> {
    return this._httpClient
      .get(Configuration.APIs.SysLicenseRequestType.GetAllLicenseTypes)
      .pipe(
        map((res: any) => {
          return res.data as SysLicenseGroupingDto[];
        }),
      );
  }

  GetLicenseRequestTypes(): Observable<SysLicenseGroupingDto[]> {
    return this._httpClient
      .get<
        CoreResponseDTO<SysLicenseGroupingDto[]>
      >(`${Configuration.APIs.SysLicenseRequestType.GetLicenseRequestTypes}`)
      .pipe(
        map((res: CoreResponseDTO<SysLicenseGroupingDto[]>) => {
          return res.data as SysLicenseGroupingDto[];
        }),
      );
  }
  CheckFacilityStatus(requestId: string): Observable<FacilityStatus> {
    return this._httpClient.get<CoreResponseDTO<FacilityStatus>>(
      `${Configuration.APIs.SysLicenseRequestType.CheckFacilityStatus}/${requestId}`,
    ).pipe(
      map((res: CoreResponseDTO<FacilityStatus>) => {
        return res.data as FacilityStatus;
      }),
    );
  }
}
