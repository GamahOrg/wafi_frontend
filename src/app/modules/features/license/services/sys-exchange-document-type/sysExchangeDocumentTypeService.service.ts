import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SysExchangeDocumentTypeCreateUpdateDto } from '../../models/sys-exchange-document-type.model';

@Injectable()
export class SysExchangeDocumentTypeService {
    
    constructor(private _httpClient: HttpClient) { }

    GetTypesDropDown() {
      debugger;
      const url = `${Configuration.APIs.SysExchangeDocumentType.getTypes}`;
      return this._httpClient.get<CoreResponseDTO<SysExchangeDocumentTypeCreateUpdateDto[]>>(url)
    }

   
}