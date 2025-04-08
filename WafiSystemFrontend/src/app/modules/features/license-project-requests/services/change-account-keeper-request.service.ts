import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  ChangeAccountKeeperRequestDetailsDto,
  CreateOrUpdateChangeAccountKeeperRequestDto,
} from '../models/change-account-keeper-request-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ChangeLicenseProjectAccountKeeperService {
  selectedRequest$: BehaviorSubject<ChangeAccountKeeperRequestDetailsDto | null> = new BehaviorSubject<ChangeAccountKeeperRequestDetailsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  
  constructor(private _httpClient: HttpClient) {}

  getChangeAccountKeeperDetails(
    id: string
  ): Observable<ChangeAccountKeeperRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<ChangeAccountKeeperRequestDetailsDto>>(
        `${
          Configuration.APIs.AccountkeeperRequest
            .GetChangeAccountKeeperDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<ChangeAccountKeeperRequestDetailsDto>) => {
          return res.data as ChangeAccountKeeperRequestDetailsDto;
        })
      );
  }
  saveChangeLicenseProjectAccountKeeperRequest(
    dto: CreateOrUpdateChangeAccountKeeperRequestDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.AccountkeeperRequest.SaveChangeLicenseProjectAccountKeeperRequest}`,
      dto
    );
  }
}
