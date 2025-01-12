import { HttpClient } from '@angular/common/http';
import { Injectable,  EventEmitter } from '@angular/core';
import { BehaviorSubject, map,  Observable } from 'rxjs';
import { LicenseProjectRequestDto } from '../models/request-header-details';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import type { LicenseRequestTypes } from '../../license/models/lincense-request-project-dto';
import type { UserRequestTypeEnum } from '../../license/enums/user-request-type';

@Injectable()
export class ProjectLicenseServiceDetailsService {

  constructor(private _httpClient: HttpClient) { }
  selectRequest$: BehaviorSubject<LicenseProjectRequestDto | null> = new BehaviorSubject<LicenseProjectRequestDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()

  requestUserType$: BehaviorSubject<UserRequestTypeEnum | null> = new BehaviorSubject<UserRequestTypeEnum | null>(null);

  getRequestHeaderDetails(requestId: string): Observable<LicenseProjectRequestDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestDto>>(`${Configuration.APIs.LincenseProjectRequest.GetRequestHeaderDetails}?licenseProjectRequestId=${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRequestDto>) => {
        if (res.data) {
          return res.data as LicenseProjectRequestDto;
        } else {
          return null
        }
      })
    );
  }

  getLicenseRequestTypes(): Observable<LicenseRequestTypes[]> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseRequestTypes[]>>(
        `${Configuration.APIs.LincenseProjectRequest.GetLicenseRequestType}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseRequestTypes[]>) => {
          return res.data as LicenseRequestTypes[];
        })
      );
  }


  getUserRequestType(
    licenseRequestId: string,
    facilityId: String
  ): Observable<UserRequestTypeEnum> {
    return this._httpClient
      .get<CoreResponseDTO<UserRequestTypeEnum>>(
        `${Configuration.APIs.LincenseProjectRequest.GetUserRequestType}?requestId=${licenseRequestId}&facilityId=${facilityId}`
      )
      .pipe(
        map((res: CoreResponseDTO<UserRequestTypeEnum>) => {
          return res.data as UserRequestTypeEnum;
        })
      );
  }

  Create(
    requestId: string
  ): Observable<any | null> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(
        `${Configuration.APIs.LicenseServiceRequest.Create}/${requestId}`
      )
      .pipe(
        map((res: any) => {
          if (res) {
            return res.data;
          } else {
            return null;
          }
        })
      );
  }

  sendRequestForParties(requestId: string): Observable<LicenseProjectRequestDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestDto>>( `${Configuration.APIs.LincenseProjectRequest.SendRequestForParties}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRequestDto>) => {
        if (res.data) {
          return res.data as LicenseProjectRequestDto;
        } else {
          return null
        }
      })
    );
  }
  
  compile(requestId: number, notes: string): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseServiceRequest.Compile}`, { requestId, notes }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
}
