import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, every, iif, interval, map, mergeMap, tap } from 'rxjs';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RegistrationService } from '../../services/registration/registration.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-verification-otp-popup',
  templateUrl: './verification-otp-popup.component.html',
  styleUrls: ['./verification-otp-popup.component.scss']
})
export class VerificationOtpPopupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  customerMobile: string | null = null;
  OTPInputValue: string | null = null;
  localization = {
    sendNewOtp: "ارسال الكود مرة اخري",
    newOtpSentSuccessfully: " تم إرسال رمز تحقق جديد"
  };
  min = 60;
  intervalBySec$ = interval(1000);
  intervalBySecSubscription !: Subscription;
  sendNewOtpIsDisabled: boolean = true;
  constructor(
    private _registrationService: RegistrationService,
    private _OTPService: OTPService,
    private _popupService: PopupService,
    private _toastrNotificatioService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerMobile();
    this.observeOTPInputValue();
    this.createInteraval();
  }

  private obseveCustomerMobile(): void {
    this.subscriptions.push(
      this._registrationService.customerMobile.subscribe((res: string | null) => {
        this.customerMobile = res;
        console.log("this.customerMobile", this.customerMobile);
      })
    )
  }
  private observeOTPInputValue(): void {
    this.subscriptions.push(
      this._OTPService.getOTPInputValue().subscribe((res: string | null) => {
        this.OTPInputValue = res;
        console.log("this.OTPInputValue", this.OTPInputValue);
      })
    )
  }
  public sendNewOtp(): void {
    this.subscriptions.push(
      this._OTPService.GenerateOTP(this.customerMobile as string).subscribe((res: boolean) => {
        this.showSuccess(this.localization.newOtpSentSuccessfully);
        this.clearInterval();
        this.createInteraval();
      })
    )
  }
  private showSuccess(msg: string): void {
    this._toastrNotificatioService.showSuccess(msg);
  }
  private createInteraval(): void {
    this.intervalBySecSubscription = this.intervalBySec$.pipe(
      tap(() => { console.log("before ", this.min ? this.min : ""), console.log("button disabled") }),
      tap(() => this.sendNewOtpIsDisabled = true),
      map(() => this.min = this.min - 1),
      tap(() => console.log("after ", this.min ? this.min : "")),
      mergeMap((e) => iif(() => this.min === 0, "test", "test2")),
      every(e => this.min > 0),
      tap(() => console.log("button enabled")),
      tap(() => this.sendNewOtpIsDisabled = false),
    ).subscribe();
  }
  private clearInterval(): void {
    this.intervalBySecSubscription.unsubscribe()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
