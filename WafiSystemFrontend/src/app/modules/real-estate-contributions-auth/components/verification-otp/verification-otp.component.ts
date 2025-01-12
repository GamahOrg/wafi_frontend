import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ForgetPasswordService } from '../../services/forget-password/forget-password.service';
import { UserType } from '../../models/login.model';
import { verfificationOTP, verificationUserName } from '../../models/forget-password.model';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-verification-otp',
  templateUrl: './verification-otp.component.html',
  styleUrls: ['./verification-otp.component.scss']
})
export class VerificationOtpComponent implements OnInit {
  confirmotp! : verfificationOTP
  username! : verificationUserName
  title: string = 'رمز التحقق';
  subscriptions: Subscription[] = [];
 

  otpConfig = Configuration.OTPInputConfigration
  otpValue: string ='';


  constructor(
    private _forgetpasswordServices : ForgetPasswordService,
    private _otpService:OTPService,
  
   ) {
    
   }


    ngOnInit(): void {
      this.getUsername()
      this.getOTPvalue()
    
    }


  

    getOTPvalue(){
      this.subscriptions.push(
        this._otpService.OTPInputValue$.subscribe(res=>this.otpValue = res!)
      )

    }


    getUsername(){
      this.subscriptions.push(
        this._forgetpasswordServices.userName$.subscribe(res=>{
          this.username = res
        })
      )
    }
 

  onSubmit() {    
    this.confirmotp = {
      userName : this.username.userName,
      userType : UserType.client,
      otp : this.otpValue
    }

    this.subscriptions.push(
      this._forgetpasswordServices.ForgetPasswordConfirmOTP(this.confirmotp).subscribe(res=>{
        if(res.isDone){
          this._forgetpasswordServices.token$.next(res.data??'')
          this._forgetpasswordServices.nextClickedEventEmmitter.emit(1)
        }
      })
    )
   
  
  
  }

  resendOTP(){
    this.subscriptions.push(
      this._forgetpasswordServices.forgetPasswordGeneratOTP(this.username).subscribe()
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }



}
