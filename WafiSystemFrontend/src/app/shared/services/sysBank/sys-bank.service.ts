import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';

import { CoreResponseDTO } from 'src/app/core/models/core.model';
import type { BankDto } from '../../models/bank.dto';

@Injectable()
export class SysBankService {
    
    constructor(private _httpClient: HttpClient) { }

    GetBankListDropDown() {
      return this._httpClient.get<CoreResponseDTO<BankDto[]>>(`${Configuration.APIs.Bank.GetDropDown}`)
    }
  
}