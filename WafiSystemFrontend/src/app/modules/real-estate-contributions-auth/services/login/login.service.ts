import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { securityAPI } from 'src/app/core/interceptors/base-URL-handler/base-url-handler.interceptor';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { LoginParams } from '../../models/login.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { TokenResponse } from 'src/app/shared/models/token-response.model';
import { FullNafathLoginResponseDto } from 'src/app/shared/models/nafath-response.model';

@Injectable()
export class LoginService {
  userName: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );

  securityAPIContext: HttpContext = new HttpContext().set(securityAPI, true);
  constructor(private _httpClient: HttpClient) {}

  LoginWithIAM(loginObj: LoginParams){
    return this._httpClient
    .post<BaseResponse<FullNafathLoginResponseDto | null>>(
      Configuration.APIs.Account.LoginWithIAM,
      loginObj,
    )
    .pipe(
      map((res: BaseResponse<FullNafathLoginResponseDto | null>) => {
        return res;
      })
    );
  }
  
  login(loginObj: LoginParams): Observable<BaseResponse<TokenResponse | null>> {
    return this._httpClient
      .post<BaseResponse<TokenResponse | null>>(
        Configuration.APIs.Account.login,
        loginObj,
        { context: this.securityAPIContext }
      )
      .pipe(
        map((res: BaseResponse<TokenResponse | null>) => {
          return res;
        })
      );
  }
}
