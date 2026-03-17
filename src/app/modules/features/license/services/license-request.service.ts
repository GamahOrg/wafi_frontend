import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { FarzStatusWhenNaturalTypeUnitDto, RequestSuccessResponse, RequestValidation } from '../dataModels/request-validation.model';
import { CreateLicenseRequestHeaderDto } from '../models/license-request-header.model';
import { LicenseProjectCompletionData } from '../dataModels/license-project-model.dto';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ProjectAgreementSummaryDto } from '../dataModels/project-agreement-summary.dto';

@Injectable()
export class LicenseRequestService {
  updateCompletedTapCodesIsClicked : EventEmitter<null> = new EventEmitter()
  updatedCompletePercentage : EventEmitter<null> = new EventEmitter()
  
  Requestvalidation$: BehaviorSubject<RequestValidation | null> = new BehaviorSubject<RequestValidation | null>(null);
  constructor(private _httpClient: HttpClient) { }

  Create(facilityId: string, requestTypeCode: string, priod: number, periodTypeId: string): Observable<string | null> {
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestService.Create}/${facilityId}/${requestTypeCode}/${priod}/${periodTypeId}`).pipe(
      map((res) => {
        if (res.isDone && res.data) {
          return res.data as string;
        } else {
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
  
  GetFarzStatusWhenNaturalTypeUnit(licenseProjectId: string): Observable<FarzStatusWhenNaturalTypeUnitDto | null> {
    return this._httpClient.get<CoreResponseDTO<FarzStatusWhenNaturalTypeUnitDto>>(`${Configuration.APIs.LicenseRequestService.GetFarzStatusWhenNaturalTypeUnit}/${licenseProjectId}`).pipe(
      map((res) => {
        if (res.isDone && res.data) {
          return res.data as FarzStatusWhenNaturalTypeUnitDto;
        } else {
          return null
        }
      })
    )
  }

  GetLicenseProjectCompletionData(id: string): Observable<LicenseProjectCompletionData|null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectCompletionData>>(`${Configuration.APIs.LicenseProject.GetLicenseProjectCompletionData}/${id}`).pipe(
      map((res) => {
          return res.isDone?res.data as LicenseProjectCompletionData:null;
        })
    )
  }
  
  Send(requestId: string) {
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.LicenseRequestService.Send}/${requestId}`);
  }

  SendByProjectId(projectId: string): Observable<RequestValidation | RequestSuccessResponse | null> {
    return this._httpClient.get<CoreResponseDTO<RequestValidation | RequestSuccessResponse>>(`${Configuration.APIs.LicenseRequestService.SendByProjectId}/${projectId}`).pipe(
      map((res: CoreResponseDTO<RequestValidation | RequestSuccessResponse>) => {
        if (res) {
          return res.data as RequestValidation | RequestSuccessResponse;
        } else {
          return null;
        }
      })
    );
  }

  SendFawriaLicenseByProjectId(projectId: string, tabCodes: string[]): Observable<RequestValidation | RequestSuccessResponse | null> {
    const params = new HttpParams({
      fromObject: {
        typeCode: tabCodes
      }
    });

    return this._httpClient.get<CoreResponseDTO<RequestValidation | RequestSuccessResponse>>(
        `${Configuration.APIs.LicenseRequestService.SendFawriaLicenseByProjectId}/${projectId}`, { params } ).pipe(
          map((res: CoreResponseDTO<RequestValidation | RequestSuccessResponse>) => {
            if (!res || !res.data) {
              return null;
            }
            return res.data;
        })
    );
  }

  updateRequestValidation(data: RequestValidation | null): void {
    this.Requestvalidation$.next(data);
  }
  getRequestValidation(): Observable<RequestValidation | null> {
    return this.Requestvalidation$.asObservable();
  }

  GetProjectAgreementsSummary(facilityId: string, pageIndex: number = 1, pageSize: number = 10): Observable<Pagination<ProjectAgreementSummaryDto[]> | null> {
    const params = new HttpParams()
      .set('facilityId', facilityId)
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    return this._httpClient.get<CoreResponseDTO<Pagination<ProjectAgreementSummaryDto[]>>>(`${Configuration.APIs.LicenseRequestService.GetProjectAgreementsSummary}`, { params }).pipe(
      map((res) => {
        if (res.isDone && res.data) {
          return res.data;
        } else {
          return null;
        }
      })
    );
  }

  GenerateDraftAgreements(agreementsType: number, licenseProjectId: string): Observable<string | null> {
    const params = new HttpParams()
      .set('agreementsType', agreementsType.toString())
      .set('licenseProjectId', licenseProjectId);

    return this._httpClient.get<CoreResponseDTO<string>>(
      `${Configuration.APIs.LicenseRequestService.GenerateDraftAgreements}`,
      { params }
    ).pipe(
      map((res) => {
        if (res.isDone && res.data) {
          return res.data as string;
        } else {
          return null;
        }
      })
    );
  }
}
