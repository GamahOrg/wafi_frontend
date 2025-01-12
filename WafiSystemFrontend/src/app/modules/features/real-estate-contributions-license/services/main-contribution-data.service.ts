import { Injectable } from '@angular/core';
import { MainContributionData, mainContributionDataCreateUpdate } from '../dataModels/main-contribution-data';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContributionTypeDto } from '../dataModels/drop-down-name.dto';

@Injectable()
export class MainContributionDataService {

  constructor(private _httpClient: HttpClient) { }

  SaveContributionData(model: mainContributionDataCreateUpdate): Observable<MainContributionData> {
    return this._httpClient.post<CoreResponseDTO<MainContributionData>>
      (Configuration.APIs.LicenseProject.SaveContributionData, model).pipe(
        map((res: any) => {
          return res.data as MainContributionData;
        })
      )
  }
  GetContributionDataByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<MainContributionData>>
      (`${Configuration.APIs.LicenseProject.GetContributionDataByLicenseProjectId}/${id}`)
  }
  GetSysContributionTypeDropDown(): Observable<ContributionTypeDto[]> {
    return this._httpClient
        .get<CoreResponseDTO<ContributionTypeDto[]>>(`${Configuration.APIs.SysContributionType.GetDropDown}`)
        .pipe(
            map((res: CoreResponseDTO<ContributionTypeDto[]>) => {
                return res.data as ContributionTypeDto[];
            })
        );
  }




}
