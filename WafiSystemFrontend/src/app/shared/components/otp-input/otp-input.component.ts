import { Component, OnDestroy, OnInit } from '@angular/core';
import { OtpConfig } from '../../models/otp.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OTPService } from '../../services/otp/otp.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Direction } from '@angular/cdk/bidi';
@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
})
export class OTPInputComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  OtpFormControl: FormControl = this._fb.control([],[Validators.required, Validators.minLength(6)]);
  configuration:OtpConfig= {...Configuration.OTPInputConfigration,direction:Configuration.OTPInputConfigration.direction as Direction}
  constructor(private _fb: FormBuilder, private _OTPService: OTPService){}
  ngOnInit(): void {
   this.observeOtpFormControl();
  }

 
  observeOtpFormControl():void{
    this.subscriptions.push(
      this.OtpFormControl.valueChanges.subscribe(changes=>{
        console.log("this.OtpFormControl", this.OtpFormControl)
        // this._OTPService.updateOTPInputValue(changes.split("").reverse().join(""));
        this._OTPService.updateOTPInputValue(changes);
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
