import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { areaResponseBE } from '../../../facilities/dataModels/area.model';
import { BankDto } from '../../dataModels/bank.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class SysBankService {
    
    constructor(private _httpClient: HttpClient) { }

    GetAreasDropDown() {
      return this._httpClient.get<CoreResponseDTO<BankDto[]>>(`${Configuration.APIs.Bank.GetDropDown}`)
    }
  
}