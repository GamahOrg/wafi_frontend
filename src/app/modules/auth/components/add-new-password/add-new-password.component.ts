import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ForgetPasswordService } from '../../services/forget-password/forget-password.service';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { resetPass, verificationUserName } from '../../models/forget-password.model';


@Component({
  selector: 'app-add-new-password',
  templateUrl: './add-new-password.component.html',
  styleUrls: ['./add-new-password.component.scss']
})
export class AddNewPasswordComponent implements OnDestroy {
  changePassword! : resetPass
  username! : verificationUserName
  token! : string
  subscriptions: Subscription[] = [];
  showPassword: boolean = false;
  forgotPassForm = this._formBuilder.group({
    password: ['', [Validators.required, Validators.pattern(Configuration.validators.noArabicLetters)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(Configuration.validators.noArabicLetters)]],
  },
  { validators: this.validateAreEqual('password', 'confirmPassword') });

  localization = {
    Password: 'كلمة المرور',
    ConfirmPassword: 'اعادة كلمة المرور',
    requiredErrorMsg: 'حقل مطلوب',
    noArabicLettersError: "كلمة السر يجب ألا تحتوي على حروف باللغة العربية",
    isMatchedError:"كلمة المرور غير متطابقة"
  };
  get controls() {
    return this.forgotPassForm.controls;
  }
constructor(private _formBuilder: FormBuilder,
  private _forgetpasswordServices : ForgetPasswordService,
  private _toastrService:ToastrNotificatioService,
  private router:Router
  ){

}


ngOnInit(): void {
  this.getUsername()
  this.getToken()
  this.forgotPassForm.valueChanges.subscribe(changes=>{
    console.log("forgotPassForm", this.forgotPassForm)
  })
}


get passwordControl(): FormControl {
  return this.forgotPassForm.controls['password'] as FormControl;
}



getUsername(){
  this.subscriptions.push(
    this._forgetpasswordServices.userName$.subscribe(res=>{
      this.username = res
      console.log(' name', res)
    })

  )
}


getToken(){
  this.subscriptions.push(
    this._forgetpasswordServices.token$.subscribe(res=>{
      this.token =res
    })

  )
}

onSubmit() {
  this.changePassword = {
    userName : this.username.userName,
    token : this.token,
    newPassword : this.forgotPassForm.value.password!
  }

  this.subscriptions.push(
    this._forgetpasswordServices.ResetPassword(this.changePassword).subscribe(res=>{

      if(res.isDone){
          this._toastrService.showSuccess(res.message);
          this.navigateToLogin()
       
      }
    })
  )
}
private validateAreEqual(password: string, confirmPassword: string) {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
    if (passwordControl.value !== confirmPasswordControl.value) {
      formGroup.setErrors({ isMatchedError: true });
      return { isMatchedError: true };
    } else {
      formGroup.setErrors(null);
      return null;
    }
  };
}
private navigateToLogin(){
  this.router.navigateByUrl(
    `${Configuration.modules.auth}/${Configuration.pages.auth.login}`
  )

}


ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
}

}
