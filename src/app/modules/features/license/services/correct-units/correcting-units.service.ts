import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CorrectingUnitsListDto } from '../../models/correcting-units-list-dto';

@Injectable()
export class CorrectingUnitsService {

  constructor(private _httpClient: HttpClient) { }

  getCorrectedUnitRequest(facilityId: string, pageIndex: number, pageSize: number): Observable<Pagination<CorrectingUnitsListDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);

    return this._httpClient.get<CoreResponseDTO<Pagination<CorrectingUnitsListDto[]>>>(
      `${Configuration.APIs.CorrectedUnitRequest.GetCorrectedUnitRequest}/${facilityId}`,
      { params: queryParams }
    ).pipe(
      map((res: CoreResponseDTO<Pagination<CorrectingUnitsListDto[]>>) => {
        return res.data as Pagination<CorrectingUnitsListDto[]>;
      })
    );
  }
}
