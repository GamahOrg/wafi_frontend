import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ProjectListDto } from '../models/project-list';
import { LicenseProjectBuyerTotalDto } from '../models/chartered-account-project-statistics.model';
import { CharteredAccountProjectStatistics } from '../models/chartered-account-project-statistics.model';
import { GetLicenseProjectListRequestDto } from '../dataModels/get-license-project-list-request-dto';

@Injectable()
export class CharteredAccountProjectService {
  constructor(private _httpClient: HttpClient) {}

  GetLicenseProjectList(
    request: GetLicenseProjectListRequestDto
  ): Observable<Pagination<ProjectListDto[]>> {
    return this._httpClient
      .post<CoreResponseDTO<Pagination<ProjectListDto[]>>>(
        `${Configuration.APIs.LicenseProjectCharteredAccountant.baseUrl}${Configuration.APIs.LicenseProjectCharteredAccountant.GetLicenseProjectList}`,
        request
      )
      .pipe(
        map((res: CoreResponseDTO<Pagination<ProjectListDto[]>>) => {
          return res.data as Pagination<ProjectListDto[]>;
        })
      );
  }

  GetProjectStatistics(licenseProjectId: string): Observable<LicenseProjectBuyerTotalDto> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectBuyerTotalDto>>(
        `${Configuration.APIs.LicenseProjectBuyer.GetLicenseProjectBuyerTotal}/${licenseProjectId}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectBuyerTotalDto>) => {
          return res.data as LicenseProjectBuyerTotalDto;
        })
      );
  }
}
