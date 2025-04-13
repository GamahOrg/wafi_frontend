import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ProjectListDto } from '../models/project-list';

@Injectable()
export class CharteredAccountProjectService {
  constructor(private _httpClient: HttpClient) {}

  GetLicenseProjectList(
    pageNumber: number,
    pageSize: number,
    facilityId: string
  ): Observable<Pagination<ProjectListDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageNumber', pageNumber);
    queryParams = queryParams.append('pageSize', pageSize);
    queryParams = queryParams.append('facilityId', facilityId);
    return this._httpClient
      .get<CoreResponseDTO<Pagination<ProjectListDto[]>>>(
        `${Configuration.APIs.LicenseProjectCharteredAccountant.baseUrl}${Configuration.APIs.LicenseProjectCharteredAccountant.GetLicenseProjectList}`,
        { params: queryParams }
      )
      .pipe(
        map((res: CoreResponseDTO<Pagination<ProjectListDto[]>>) => {
          return res.data as Pagination<ProjectListDto[]>;
        })
      );
  }
}
