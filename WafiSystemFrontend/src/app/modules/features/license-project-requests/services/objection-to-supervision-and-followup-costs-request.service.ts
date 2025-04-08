import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateOrUpdateObjectionToSupervisionAndFollowupCostsRequestDto, ObjectionToSupervisionAndFollowupCostsRequestDetailsDto } from '../models/objection-to-supervision-and-followup-costs-request-dto';

 @Injectable()
 export class ObjectionToSupervisionAndFollowupCostsRequestService {
 
 selectedRequest$: BehaviorSubject<ObjectionToSupervisionAndFollowupCostsRequestDetailsDto | null> = new BehaviorSubject<ObjectionToSupervisionAndFollowupCostsRequestDetailsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  
  constructor(private _httpClient: HttpClient) {}

  getDetails(
    id: string
  ): Observable<ObjectionToSupervisionAndFollowupCostsRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<ObjectionToSupervisionAndFollowupCostsRequestDetailsDto>>(
        `${
          Configuration.APIs.ObjectionToSupervisionAndFollowUpCoststRequest
            .GetDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<ObjectionToSupervisionAndFollowupCostsRequestDetailsDto>) => {
          return res.data as ObjectionToSupervisionAndFollowupCostsRequestDetailsDto;
        })
      );
  }
  saveObjectionToSupervisionAndFollowUpCostsRequest(
    dto: CreateOrUpdateObjectionToSupervisionAndFollowupCostsRequestDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.ObjectionToSupervisionAndFollowUpCoststRequest.SaveObjectionToSupervisionAndFollowUpCostsRequest}`,
      dto
    );
  }
}
