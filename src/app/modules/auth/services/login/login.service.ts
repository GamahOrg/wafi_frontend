import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { securityAPI } from 'src/app/core/interceptors/base-URL-handler/base-url-handler.interceptor';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { LoginParams } from '../../models/login.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { TokenResponse } from 'src/app/shared/models/token-response.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import {
  ComplaintRequest,
  ComplaintRequestTypeDto,
} from '../../models/complaint-request';
import { FullNafathLoginResponseDto } from 'src/app/shared/models/nafath-response.model';

@Injectable()
export class LoginService {
  securityAPIContext: HttpContext = new HttpContext().set(securityAPI, true);
  userName: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );

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
  CreateComplaintRequest(
    complaintRequest: ComplaintRequest
  ): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        Configuration.APIs.ComplaintRequest.Create,
        complaintRequest
      )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        })
      );
  }
  GetComplaintRequestTypes(): Observable<ComplaintRequestTypeDto[] | null> {
    return this._httpClient
      .get<CoreResponseDTO<ComplaintRequestTypeDto[]>>(
        `${Configuration.APIs.ComplaintRequest.GetComplaintRequestTypeList}`
      )
      .pipe(
        map((res: CoreResponseDTO<ComplaintRequestTypeDto[]>) => {
          return res.data ? res.data : null;
        })
      );
  }
}
