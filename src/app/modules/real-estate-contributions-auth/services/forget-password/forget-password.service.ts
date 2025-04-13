import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { verificationUserName , resetPass, verfificationOTP} from '../../models/forget-password.model';

@Injectable()
export class ForgetPasswordService {

  userName$ : BehaviorSubject<verificationUserName> = new BehaviorSubject<verificationUserName>({} as verificationUserName )
  token$ : BehaviorSubject<string> = new BehaviorSubject<string>("")
  nextClickedEventEmmitter: EventEmitter<number> = new EventEmitter();


  constructor(private _httpClient : HttpClient) { }


  forgetPasswordGeneratOTP(usernameobj : verificationUserName): Observable<CoreResponseDTO<verificationUserName>> {
    return this._httpClient.post<CoreResponseDTO<verificationUserName>>(`${Configuration.APIs.Account.ForgetPasswordGenerateOTP}`,  usernameobj)
  }



  ForgetPasswordConfirmOTP(OPTobj : verfificationOTP): Observable<CoreResponseDTO<string>>{
    return this._httpClient.post<CoreResponseDTO<string>>(`${Configuration.APIs.Account.ForgetPasswordConfirmOTP}`,  OPTobj)

  }


  ResetPassword(passobj : resetPass): Observable<CoreResponseDTO<resetPass>>{
    return this._httpClient.post<CoreResponseDTO<resetPass>>(`${Configuration.APIs.Account.ResetPassword}`,  passobj)

  }



}
