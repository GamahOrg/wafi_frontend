import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import {
  GenerateOTPByUserNameRequestDto,
  ValidateOTPByUserNameRequestDto,
} from '../../models/otp.model';

@Injectable()
export class OTPService {
  OTPInputValue$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  constructor(private _httpClient: HttpClient) {}

  GenerateOTP(mobileNumber: number | string): Observable<boolean> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(
        `${Configuration.APIs.OTP.GenerateOTP}/${mobileNumber}`
      )
      .pipe(map((res: CoreResponseDTO<any>) => res.isDone));
  }

  ValidateOTP(mobileNumber: number | string, OTP: string): Observable<boolean> {
    return this._httpClient
      .get<CoreResponseDTO<any>>(
        `${Configuration.APIs.OTP.ValidateOTP}/${mobileNumber}/${OTP}`
      )
      .pipe(map((res: CoreResponseDTO<any>) => res.isDone));
  }
  GenerateOTPByUserName(
    request: GenerateOTPByUserNameRequestDto
  ): Observable<boolean> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        `${Configuration.APIs.OTP.SendLoginOTP}`,
        request
      )
      .pipe(map((res: CoreResponseDTO<any>) => res.isDone));
  }

  ValidateOTPByUserName(
    request: ValidateOTPByUserNameRequestDto
  ): Observable<boolean> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        `${Configuration.APIs.OTP.ValidateLoginOTP}`,
        request
      )
      .pipe(map((res: CoreResponseDTO<any>) => res.isDone));
  }
  updateOTPInputValue(value: string | null): void {
    this.OTPInputValue$.next(value);
  }
  getOTPInputValue(): Observable<string | null> {
    return this.OTPInputValue$.asObservable();
  }
}
