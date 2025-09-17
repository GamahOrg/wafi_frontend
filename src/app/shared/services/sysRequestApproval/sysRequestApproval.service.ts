import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import {
  RequestApproval,
  SysRequestApprovalDto,
} from '../../models/sys-request-approval.dto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SysRequestApprovalService {
  sysRequestApproval: BehaviorSubject<RequestApproval | null> = new BehaviorSubject<RequestApproval | null>(null);
  isApprovalRequired: EventEmitter<boolean> = new EventEmitter();

  constructor(private _httpClient: HttpClient) {}

  GetSysRequestApprovalList( requestTypeId: number, actionTypeId?: number | null) {
    const url =
      actionTypeId != null
        ? `${Configuration.APIs.SysRequestApproval.GetSysRequestApprovalList}/${requestTypeId}/${actionTypeId}`
        : `${Configuration.APIs.SysRequestApproval.GetSysRequestApprovalList}/${requestTypeId}`;

    return this._httpClient.get<CoreResponseDTO<SysRequestApprovalDto[]>>(url);
  }

  getRequestApproval(): Observable<RequestApproval | null> {
    return this.sysRequestApproval;
  }

  setRequestApproval(LatestValue: RequestApproval) {
    return this.sysRequestApproval.next(LatestValue);
  }

}
