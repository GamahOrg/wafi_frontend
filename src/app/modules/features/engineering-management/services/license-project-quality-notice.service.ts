import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectQualityNoticeDto, LicenseProjectQualityNoticePagingDto } from '../models/license-project-quality-notice-dto';

@Injectable()
export class LicenseProjectQualityNoticeService {

  constructor(private _httpClient: HttpClient) { }
  showLicenseProjectQualityNoticeDetails = new EventEmitter<string>();
  private licenseProjectQualityNoticeId = new BehaviorSubject<string | null>(null);

  private licenseProjectQualityNoticeId$ = this.licenseProjectQualityNoticeId.asObservable();
  getLicenseProjectQualityNoticeId(): Observable<string | null> {
    return this.licenseProjectQualityNoticeId$;
  }
  setLicenseProjectQualityNoticeId(LatestValue: string) {
    return this.licenseProjectQualityNoticeId.next(LatestValue);
  }
  GetLicenseProjectQualityNotices(licenseProjectId: string, pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectQualityNoticePagingDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectQualityNoticePagingDto[]>>>(`${Configuration.APIs.LicenseProjectQualityNotice.GetLicenseProjectQualityNotices}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectQualityNoticePagingDto[]>>) => {

        return res.isDone ? res.data as Pagination<LicenseProjectQualityNoticePagingDto[]> : null

      })
    );
  }

  GetLicenseProjectQualityNoticeById(licenseProjectQualityNoticeId: string): Observable<LicenseProjectQualityNoticeDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectQualityNoticeDto>>(`${Configuration.APIs.LicenseProjectQualityNotice.GetLicenseProjectQualityNoticeById}/${licenseProjectQualityNoticeId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectQualityNoticeDto>) => {
        return res.isDone ? res.data as LicenseProjectQualityNoticeDto : null;

      })
    );
  }
}
