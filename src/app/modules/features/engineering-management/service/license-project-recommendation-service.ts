import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DropDownRecommendationResponsiblePartyDto, LicenseProjectRecommendationCreateUpdateDto, LicenseProjectRecommendationDto, LicenseProjectRecommendationReplyDto, RecommendationNumberByStatus } from '../models/license-project-recommendations';

@Injectable({
  providedIn: 'root'
})
export class LicenseProjectRecommendationService {
  constructor(private _httpClient: HttpClient) { }

  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter();

  private licenseProjectRecommendations = new BehaviorSubject<LicenseProjectRecommendationDto>({} as LicenseProjectRecommendationDto);
  private licenseProjectRecommendations$ = this.licenseProjectRecommendations.asObservable();

  private viewRecommendation = new BehaviorSubject<LicenseProjectRecommendationDto>({} as LicenseProjectRecommendationDto);
  private viewRecommendation$ = this.viewRecommendation.asObservable();

  getLicenseProjectRecommendations(): Observable<LicenseProjectRecommendationDto> {
    return this.licenseProjectRecommendations$;
  }
  SetLicenseProjectRecommendations(LatestValue: LicenseProjectRecommendationDto) {
    return this.licenseProjectRecommendations.next(LatestValue);
  }

  getViewRecommendation(): Observable<LicenseProjectRecommendationDto> {
    return this.viewRecommendation$;
  }
  SetViewRecommendation(LatestValue: LicenseProjectRecommendationDto) {
    return this.viewRecommendation.next(LatestValue);
  }


  getLicenseProjectRecommendationsByLicenseProjectId(id: string | null, pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectRecommendationDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    if (id)
      queryParams = queryParams.append("licenseProjectId", id);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectRecommendationDto[]>>>(`${Configuration.APIs.LicenseProjectRecommendation.GetLicenseProjectRecommendationsByLicenseProjectId}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectRecommendationDto[]>>) => {
        if (res.isDone) {
          return res.data as Pagination<LicenseProjectRecommendationDto[]>;
        } else {
          return {} as Pagination<LicenseProjectRecommendationDto[]>
        }
      })
    );
  }

  getRecommendationNumberByStatus(id: string | null): Observable<RecommendationNumberByStatus> {
    let queryParams = new HttpParams();
    if (id)
      queryParams = queryParams.append("licenseProjectId", id);
    return this._httpClient.get<CoreResponseDTO<RecommendationNumberByStatus>>(`${Configuration.APIs.LicenseProjectRecommendation.GetRecommendationNumberByStatus}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<RecommendationNumberByStatus>) => {
        if (res.isDone) {
          return res.data as RecommendationNumberByStatus;
        } else {
          return {} as RecommendationNumberByStatus
        }
      })
    );
  }

  getSysLicenseProjectLandOwnerDeedTypeDropDown(): Observable<DropDownRecommendationResponsiblePartyDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownRecommendationResponsiblePartyDto[]>>(`${Configuration.APIs.LicenseProjectRecommendation.GetRecommendationResponsiblePartyDropDown}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownRecommendationResponsiblePartyDto[]>) => {
          return res.data as DropDownRecommendationResponsiblePartyDto[];
        })
      );
  }

  getLicenseProjectRecommendationsById(id: string | null): Observable<LicenseProjectRecommendationDto> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id as string);
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRecommendationDto>>(`${Configuration.APIs.LicenseProjectRecommendation.GetLicenseProjectRecommendationsById}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<LicenseProjectRecommendationDto>) => {
        if (res.isDone) {
          return res.data as LicenseProjectRecommendationDto;
        } else {
          return {} as LicenseProjectRecommendationDto
        }
      })
    );
  }

  saveLicenseProjectRecommendations(model: LicenseProjectRecommendationCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectRecommendationDto>> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRecommendationDto>>(`${Configuration.APIs.LicenseProjectRecommendation.SaveLicenseProjectRecommendations}`, model);

  }
  saveLicenseProjectRecommendationReply(model: LicenseProjectRecommendationReplyDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProjectRecommendation.SaveLicenseProjectRecommendationReply}`, model);
  }
}
