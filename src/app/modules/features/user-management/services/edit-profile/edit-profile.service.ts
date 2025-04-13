import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { updateCustomerData } from '../../dataModels/updateCustomer-model';

@Injectable(
)
export class EditProfileService {

  constructor(private _httpClient : HttpClient) { }

  customerMobile:  BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  UpdateCustomer(data:updateCustomerData): Observable<BaseResponse<updateCustomerData>> {
    return this._httpClient.post<BaseResponse<updateCustomerData>>(`${Configuration.APIs.Customer.UpdateCustomer}`,data);
  }
}
