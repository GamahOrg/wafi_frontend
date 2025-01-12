import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { RequestTimelineResponseDto } from '../../models/request-timeline.model';

@Injectable()
export class RequestTimelineService {
  private initialLicenseRequestHeaderTimeLine: RequestTimelineResponseDto = {
    isRequestSentToDevelopers: false,
    isRequestApprovedFromDevelopers: false,
    isRequestSent: false,
    isLicenseApproved: false,
  };
  private requestId: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(private _httpClient: HttpClient) {}
  getLicenseRequestHeaderTimeLine(
    requestId: string
  ): Observable<RequestTimelineResponseDto> {
    return this._httpClient
      .get<CoreResponseDTO<RequestTimelineResponseDto>>(
        `${Configuration.APIs.LicenseRequestHeader.GetLicenseRequestHeaderTimeLine}/${requestId}`
      )
      .pipe(
        map((res: CoreResponseDTO<RequestTimelineResponseDto>) => {
          return res.isDone && res.data
            ? (res.data as RequestTimelineResponseDto)
            : this.initialLicenseRequestHeaderTimeLine;
        })
      );
  }
  updateRequestId(requestId: string | null) {
    this.requestId.next(requestId);
  }
  getRequestId(): Observable<string | null> {
    return this.requestId.asObservable();
  }
}
