import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysYearCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-year-create-update-dto';

@Injectable()
export class SysYearService {

  constructor(private _httpClient: HttpClient) { }
  GetAll(): Observable<SysYearCreateUpdateDto[]> {
    return this._httpClient.get(Configuration.APIs.SysYear.GetAll).pipe(
      map((res: any) => {
        return res.data as SysYearCreateUpdateDto[];
      })
    )
  }
}
