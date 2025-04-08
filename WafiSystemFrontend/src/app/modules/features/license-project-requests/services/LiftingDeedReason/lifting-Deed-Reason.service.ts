import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';

import { CoreResponseDTO } from 'src/app/core/models/core.model';

import { LiftingDeedReasonDto } from '../../../../../shared/models/LiftingDeedReason.dto';

@Injectable()
export class LiftingDeedReasonService {
    
    constructor(private _httpClient: HttpClient) { }

    GetLiftingDeedReasonListDropDown() {
      return this._httpClient.get<CoreResponseDTO<LiftingDeedReasonDto[]>>(`${Configuration.APIs.LiftingDeedReason.GetDropDown}`)
    }
  
}