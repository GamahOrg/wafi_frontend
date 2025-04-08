import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto, LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto } from '../models/lifting-the-mark-on-the-property-title-deed-dto';

@Injectable()
 export class LiftingTheMarkOnThePropertyTitleDeedRequestService {
 
 selectedRequest$: BehaviorSubject<LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto | null> = new BehaviorSubject<LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  
  constructor(private _httpClient: HttpClient) {}

  getDetails(
    id: string
  ): Observable<LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto>>(
        `${
          Configuration.APIs.LiftingTheMarkOnThePropertyTitleDeedRequest
            .GetDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto>) => {
          return res.data as LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto;
        })
      );
  }
  
  saveLiftingTheMarkOnThePropertyTitleDeedRequest(
    
    dto: CreateOrUpdateLiftingTheMarkOnThePropertyTitleDeedRequestDto
  ): Observable<any> {
    debugger
    return this._httpClient.post(
      `${Configuration.APIs.LiftingTheMarkOnThePropertyTitleDeedRequest.SaveLiftingTheMarkOnThePropertyTitleDeedRequest}`,
      dto
    );
  }
}
