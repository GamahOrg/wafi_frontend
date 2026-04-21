import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CorrectingUnitsListDto } from '../../models/correcting-units-list-dto';
import {
  RequestSuccessResponse,
  RequestValidation,
} from '../../dataModels/request-validation.model';

@Injectable()
export class CorrectingUnitsService {
  Requestvalidation$: BehaviorSubject<RequestValidation | null> =
    new BehaviorSubject<RequestValidation | null>(null);

  constructor(private _httpClient: HttpClient) {}

  getCorrectedUnitRequest(
    facilityId: string,
    pageIndex: number,
    pageSize: number,
  ): Observable<Pagination<CorrectingUnitsListDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);

    return this._httpClient
      .get<
        CoreResponseDTO<Pagination<CorrectingUnitsListDto[]>>
      >(`${Configuration.APIs.CorrectedUnitRequest.GetCorrectedUnitRequest}/${facilityId}`, { params: queryParams })
      .pipe(
        map((res: CoreResponseDTO<Pagination<CorrectingUnitsListDto[]>>) => {
          return res.data as Pagination<CorrectingUnitsListDto[]>;
        }),
      );
  }
  UpdateFarzStatus(correctionUnitRequestId: string): Observable<any | null> {
    return this._httpClient
      .put<
        CoreResponseDTO<any>
      >(Configuration.APIs.CorrectedUnitRequest.UpdateFarzStatus + '/' + correctionUnitRequestId, {})
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        }),
      );
  }
  GetFarzRejectionReason(
    correctionUnitRequestId: string,
  ): Observable<string | null> {
    return this._httpClient
      .get<
        CoreResponseDTO<string>
      >(`${Configuration.APIs.CorrectedUnitRequest.GetFarzRejectionReason}/${correctionUnitRequestId}`)
      .pipe(
        map((res: CoreResponseDTO<string>) => {
          if (res.data) {
            return res.data as string;
          } else {
            return null;
          }
        }),
      );
  }
  correctionSendAsync(
    requestId: string,
    typeCode: string[],
  ): Observable<RequestValidation | RequestSuccessResponse | null> {
    const params = new HttpParams({
      fromObject: {
        typeCode: typeCode,
      },
    });
    return this._httpClient
      .get<
        CoreResponseDTO<RequestValidation | RequestSuccessResponse>
      >(`${Configuration.APIs.CorrectedUnitRequest.CorrectionSendAsync}/${requestId}`, { params })
      .pipe(
        map(
          (
            res: CoreResponseDTO<RequestValidation | RequestSuccessResponse>,
          ) => {
            if (!res || !res.data) {
              return null;
            }
            return res.data;
          },
        ),
      );
  }

  create(
    correctionUnitRequestHeaderId: string,
    typeCodes: string[],
  ): Observable<
    CoreResponseDTO<RequestValidation | RequestSuccessResponse | null>
  > {
    console.log(typeCodes);
    let params = new HttpParams();
    typeCodes.forEach((code) => {
      params = params.append('typeCodes', code);
    });

    return this._httpClient
      .get<
        CoreResponseDTO<RequestValidation | RequestSuccessResponse>
      >(`${Configuration.APIs.CorrectedUnitRequest.Create}/${correctionUnitRequestHeaderId}`, { params })
      .pipe(
        map(
          (
            res: CoreResponseDTO<RequestValidation | RequestSuccessResponse>,
          ) => {
            // if (!res || !res.data) {
            //   return null;
            // }
            // return res.data;

            return res;
          },
        ),
      );
  }
  updateRequestValidation(data: RequestValidation | null): void {
    this.Requestvalidation$.next(data);
  }
  getRequestValidation(): Observable<RequestValidation | null> {
    return this.Requestvalidation$.asObservable();
  }
}
