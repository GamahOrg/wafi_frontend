import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ForgetPasswordService } from '../../services/forget-password/forget-password.service';
import { Subscription } from 'rxjs';
import { verificationUserName } from '../../models/forget-password.model';
import { UserType } from '../../models/login.model';


@Component({
  selector: 'app-verification-username',
  templateUrl: './verification-username.component.html',
  styleUrls: ['./verification-username.component.scss']
})
export class VerificationUsernameComponent implements OnInit, OnDestroy {
  generateOPT! : verificationUserName 
  subscriptions: Subscription[] = [];
  forgotPassForm = this._formBuilder.group({
    username: ['', [Validators.required]],
  });

  constructor(private _formBuilder: FormBuilder,
    private _forgetpasswordServices : ForgetPasswordService,
 
    ){

  }

  get usernameControl(): FormControl {
    return this.forgotPassForm.controls['username'] as FormControl;
  }

  ngOnInit(): void {
    
  }


  onSubmit() {
    this.generateOPT = {
      userName : this.forgotPassForm.value.username!,
      userType : UserType.client
    }

    this.subscriptions.push(
      this._forgetpasswordServices.forgetPasswordGeneratOTP(this.generateOPT).subscribe(res=>{
        if(res.isDone)
        this._forgetpasswordServices.userName$.next(this.generateOPT)
        this._forgetpasswordServices.nextClickedEventEmmitter.emit(0)
      })
    )
  }


 



 

ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
 
}
