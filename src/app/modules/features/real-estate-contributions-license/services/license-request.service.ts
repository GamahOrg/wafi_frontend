import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { RequestSuccessResponse, RequestValidation } from '../dataModels/request-validation.model';
import type { CreateLicenseRequestHeaderDto } from '../models/license-request-header.model';

@Injectable()
export class LicenseRequestService {
  Requestvalidation$: BehaviorSubject<RequestValidation | null> = new BehaviorSubject<RequestValidation | null>(null);
  constructor(private _httpClient: HttpClient) { }
  
  Create(facilityId:string, requestTypeCode: string,priod:number,periodTypeId : string): Observable<string|null> {
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestService.Create}/${facilityId}/${requestTypeCode}/${priod}/${periodTypeId}`).pipe(
      map((res) => {
        if(res.isDone && res.data){
          return res.data as string;
        }else{
          return null
        }
      })
    )
  }

  CreateLicense(facilityId: string, requestTypeCode: string, period: number, periodTypeId: string, startDate: Date): Observable<string | null> {
    let model = {
      facilityId: facilityId,
      period: period,
      requestTypeCode: requestTypeCode,
      periodTypeId: periodTypeId,
      startDate: startDate
    } as CreateLicenseRequestHeaderDto;

    return this._httpClient.post<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestService.Create}`, model).pipe(
      map((res) => {
        if (res.isDone && res.data) {
          return res.data as string;
        } else {
          return null
        }
      })
    )
  }

  
  renew(facilityId: string, requestTypeCode: string, priod: number, periodTypeId: string, licenseProjectId: string): Observable<RequestValidation | RequestSuccessResponse | null> {
    return this._httpClient.get<CoreResponseDTO<RequestValidation | RequestSuccessResponse>>(`${Configuration.APIs.LicenseRequestService.renew}/${facilityId}/${requestTypeCode}/${priod}/${periodTypeId}/${licenseProjectId}`).pipe(
      map((res) => {
        if (res.isDone && res.data) {
          return res.data as RequestValidation | RequestSuccessResponse;
        } else {
          return null
        }
      })
    )
  }
  Send(requestId:string) {
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestService.Send}/${requestId}`);
  }

  SendByProjectId(projectId:string): Observable<RequestValidation | RequestSuccessResponse | null> {
    return this._httpClient.get<CoreResponseDTO<RequestValidation|RequestSuccessResponse>>(`${Configuration.APIs.LicenseRequestService.SendByProjectId}/${projectId}`).pipe(
      map((res: CoreResponseDTO<RequestValidation|RequestSuccessResponse>) => {
        if (res) {
          return res.data as RequestValidation | RequestSuccessResponse;
        } else {
          return null;
        }
      })
    );
  }

  updateRequestValidation(data: RequestValidation | null): void {
    this.Requestvalidation$.next(data);
  }
  getRequestValidation(): Observable<RequestValidation | null> {
    return this.Requestvalidation$.asObservable();
  }
}
