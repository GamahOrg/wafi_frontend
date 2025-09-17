import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CheckAddingReplingDto } from '../models/check-adding-repling-dto';
import { LicenseProjectQualityNoticeReplyDto } from '../models/license-project-quality-notice-reply-dto';
import { ReplayFromProjectMangerDto } from '../models/replay-from-project-manger-dto';

@Injectable()
export class LicenseProjectQualityNoticeReplyService {

  constructor(private _httpClient: HttpClient) { }

  checkAddingReplingByQualityNoticeId(licenseProjectQualityNoticeId: string): Observable<CheckAddingReplingDto | null> {
    return this._httpClient.get<CoreResponseDTO<CheckAddingReplingDto>>(`${Configuration.APIs.LicenseProjectQualityNotice.CheckAddingReplingByQualityNoticeId}/${licenseProjectQualityNoticeId}`).pipe(
      map((res: CoreResponseDTO<CheckAddingReplingDto>) => {
        return res.isDone ? res.data as CheckAddingReplingDto : null;

      })
    );
  }
  getRepliesByQualityNoticId(licenseProjectQualityNoticeId: string): Observable<LicenseProjectQualityNoticeReplyDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectQualityNoticeReplyDto[]>>(`${Configuration.APIs.LicenseProjectQualityNoticeReply.GetRepliesByQualityNoticId}/${licenseProjectQualityNoticeId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectQualityNoticeReplyDto[]>) => {
        return res.isDone ? res.data as LicenseProjectQualityNoticeReplyDto[] : null;

      })
    );
  }
  AddReplayFromProjectManger(replayFromProjectManger: ReplayFromProjectMangerDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectQualityNoticeReply.AddReplayFromProjectManger, replayFromProjectManger).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  }
}
