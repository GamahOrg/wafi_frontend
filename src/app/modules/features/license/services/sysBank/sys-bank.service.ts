import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { BankDto } from '../../dataModels/bank.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class SysBankService {
    
    constructor(private _httpClient: HttpClient) { }

    GetBankDropDown() {
      return this._httpClient.get<CoreResponseDTO<BankDto[]>>(`${Configuration.APIs.Bank.GetDropDown}`)
    }

    GetIntegrationBanks() {
      return this._httpClient.get<CoreResponseDTO<BankDto[]>>(`${Configuration.APIs.Bank.GetIntegrationBanks}`)
    }
  
}