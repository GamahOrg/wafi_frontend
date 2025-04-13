import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysFundingTypeCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-funding-type-create-update-dto';

@Injectable()
export class SysFundingTypeService {

  constructor(private _httpClient: HttpClient) { }
  GetAll(): Observable<SysFundingTypeCreateUpdateDto[]> {
    return this._httpClient.get(Configuration.APIs.SysFundingType.GetAll).pipe(
      map((res: any) => {
        return res.data as SysFundingTypeCreateUpdateDto[];
      })
    )
  }
}
