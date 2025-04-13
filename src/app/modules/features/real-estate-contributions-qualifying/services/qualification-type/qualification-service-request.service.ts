import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class QualificationServiceRequestService {
  // validationErrorMsg$: BehaviorSubject<any | null> = new BehaviorSubject<
  //   any | null
  // >(null);
  constructor(private _httpClient: HttpClient) {}
  Create(
    facilityId: string,
    requestTypeCode: string,
    period: number
  ): Observable<any | null> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(
        `${Configuration.APIs.QualificationServiceRequest.Create}/${facilityId}/${requestTypeCode}/${period}`
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
  Renew(
    facilityId: string,
    requestTypeCode: string,
    period: number
  ): Observable<any | null> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(
        `${Configuration.APIs.QualificationServiceRequest.Renew}/${facilityId}/${requestTypeCode}/${period}`
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
  // updateValidationErrorMsg(data: any): void {
  //   this.validationErrorMsg$.next(data);
  // }
  // getValidationErrorMsg(): Observable<any | null> {
  //   return this.validationErrorMsg$.asObservable();
  // }
}
