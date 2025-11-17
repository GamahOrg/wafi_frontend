import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { RecommendationsLogsResponseDto } from "../models/recommendations-logs-response-dto";
import { Pagination } from "../../../../shared/models/pagination.model";
import { BehaviorSubject, Observable, map } from "rxjs";
import { Configuration } from "../../../../core/configurations/shared.config";
import { CoreResponseDTO } from "../../../../core/models/core.model";
import { ProjectLicenseRequestsParams } from "../models/license-request-header-dto";

@Injectable()
export class RecommendationLogsListService {

  constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter()
  private project = new BehaviorSubject<RecommendationsLogsResponseDto | null>({} as RecommendationsLogsResponseDto | null);
  private project$ = this.project.asObservable();

  getRecommendationLogsList(params: ProjectLicenseRequestsParams): Observable<Pagination<RecommendationsLogsResponseDto[]> | null> {
    return this._httpClient.post<CoreResponseDTO<Pagination<RecommendationsLogsResponseDto[]>>>(`${Configuration.APIs.LicenseProject.GetRecommendationsLogsList}`, params).pipe(
      map((res: CoreResponseDTO<Pagination<RecommendationsLogsResponseDto[]>>) => {
        return res.isDone ? res.data as Pagination<RecommendationsLogsResponseDto[]> : null
      })
    );
  }





}
