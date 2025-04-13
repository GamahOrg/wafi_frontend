import { Component, OnInit } from '@angular/core';
import { Subscription, every, iif, interval, map, mergeMap, tap } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LoginService } from '../../services/login/login.service';
import { UserType } from '../../models/login.model';

@Component({
  selector: 'app-verification-otp-popup-by-username',
  templateUrl: './verification-otp-popup-by-username.component.html',
  styleUrls: ['./verification-otp-popup-by-username.component.scss'],
})
export class VerificationOtpPopupByUsernameComponent implements OnInit {
  subscriptions: Subscription[] = [];
  userName: string | null = null;
  localization = {
    sendNewOtp: 'ارسال الكود مرة اخري',
    newOtpSentSuccessfully: ' تم إرسال رمز تحقق جديد',
  };
  min = 60;
  intervalBySec$ = interval(1000);
  intervalBySecSubscription!: Subscription;
  sendNewOtpIsDisabled: boolean = true;
  constructor(
    private _loginService: LoginService,
    private _OTPService: OTPService,
    private _popupService: PopupService,
    private _toastrNotificatioService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.obseveCustomerMobile();
    this.createInteraval();
  }

  private obseveCustomerMobile(): void {
    this.subscriptions.push(
      this._loginService.userName.subscribe((res: string | null) => {
        this.userName = res;
        this.sendNewOtp();
      })
    );
  }

  sendNewOtp(): void {
    this.subscriptions.push(
      this._OTPService
        .GenerateOTPByUserName({
          userName: this.userName ?? '',
          userType: UserType.client,
        })
        .subscribe((res: boolean) => {
          this.showSuccess(this.localization.newOtpSentSuccessfully);
          this.clearInterval();
          this.createInteraval();
        })
    );
  }
  private showSuccess(msg: string): void {
    this._toastrNotificatioService.showSuccess(msg);
  }
  private createInteraval(): void {
    this.intervalBySecSubscription = this.intervalBySec$
      .pipe(
        tap(() => {
          console.log('before ', this.min ? this.min : ''),
            console.log('button disabled');
        }),
        tap(() => (this.sendNewOtpIsDisabled = true)),
        map(() => (this.min = this.min - 1)),
        tap(() => console.log('after ', this.min ? this.min : '')),
        mergeMap((e) => iif(() => this.min === 0, 'test', 'test2')),
        every((e) => this.min > 0),
        tap(() => console.log('button enabled')),
        tap(() => (this.sendNewOtpIsDisabled = false))
      )
      .subscribe();
  }
  private clearInterval(): void {
    this.intervalBySecSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
