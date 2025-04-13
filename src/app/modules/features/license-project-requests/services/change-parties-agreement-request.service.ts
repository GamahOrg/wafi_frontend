import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangePartiesAgreementDetialsDto, CreateOrUpdateChangePartiesAgreement } from '../models/change-parties-agreement-request-dto';

@Injectable()
export class ChangePartiesAgreementRequestService {
  selectedRequest$: BehaviorSubject<ChangePartiesAgreementDetialsDto | null> = new BehaviorSubject<ChangePartiesAgreementDetialsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  
  constructor(private _httpClient: HttpClient) {}

  getChangePartiesAgreementDetails(
    id: string
  ): Observable<ChangePartiesAgreementDetialsDto> {
    return this._httpClient
      .get<CoreResponseDTO<ChangePartiesAgreementDetialsDto>>(
        `${
          Configuration.APIs.PartiesAgreementRequest
            .GetChangePartiesAgreementDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<ChangePartiesAgreementDetialsDto>) => {
          return res.data as ChangePartiesAgreementDetialsDto;
        })
      );
  }
  saveChangePartiesAgreementRequest(
    dto: CreateOrUpdateChangePartiesAgreement
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.PartiesAgreementRequest.SaveChangePartiesAgreementRequest}`,
      dto
    );
  }
}
