import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { securityAPI } from 'src/app/core/interceptors/base-URL-handler/base-url-handler.interceptor';
import { createAccount, createAccountResponse } from '../../models/create-account.model';
import { Observable, map } from 'rxjs';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class CreateAccountService {
  securityAPIContext: HttpContext = new HttpContext().set(securityAPI, true);
  constructor(private _httpClient: HttpClient) { }
  createAccount(createAccObj: createAccount): Observable<boolean> {
    return this._httpClient.post<BaseResponse<createAccountResponse>>(Configuration.APIs.Account.create, createAccObj, { context: this.securityAPIContext }).pipe(
      map((res: BaseResponse<createAccountResponse>) => {
        if (res.data && res.data.id) {
          return res.isDone
        } else {
          return false
        }
      })
    )

  }

}
