import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, type Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import type { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class SupervisionFollowUpCostsRatioService {

  constructor(private _httpClient: HttpClient) { }

  getSupervisionFollowupCostsRatio(price: number): Observable<number> {
    return this._httpClient.get<CoreResponseDTO<number>>(`${Configuration.APIs.SupervisionFollowupCostsRatio.getSupervisionFollowupCostsRatio}?price=${price}`).pipe(
      map((res: CoreResponseDTO<number>) => {
        return res.data as number
      })
    )
  }

}
