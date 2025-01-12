import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { securityAPI } from '../../interceptors/base-URL-handler/base-url-handler.interceptor';
import { Observable, map } from 'rxjs';
import { Configuration } from '../../configurations/shared.config';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { TokenResponse } from 'src/app/shared/models/token-response.model';

@Injectable()
export class RefreshTokenService {

  securityAPIContext: HttpContext = new HttpContext().set(securityAPI, true);
  constructor(private _httpClient: HttpClient) { }
  
  refreshToken(refreshToken: string): Observable<BaseResponse<TokenResponse | null>> {

    return this._httpClient.post<BaseResponse<TokenResponse| null>>(Configuration.APIs.Account.refreshToken,  {refreshToken}, { context: this.securityAPIContext }).pipe(
      map((res: BaseResponse<TokenResponse| null>) => {
          return res
      })
    )
  }

  
}
