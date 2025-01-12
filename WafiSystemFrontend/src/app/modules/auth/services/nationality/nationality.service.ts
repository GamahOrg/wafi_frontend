import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { NationalityModel } from '../../models/nationality.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { map } from 'rxjs';

@Injectable()
export class NationalityService {

  constructor(private _httpClient: HttpClient) { }


  getNationalities(){
    return this._httpClient.get<CoreResponseDTO<NationalityModel[]>>(`${Configuration.APIs.nationality.GetDropDown}`).pipe(
      map((res: CoreResponseDTO<NationalityModel[]>) => {
        return res.data ? res.data : null
      })
    )
  }

}
