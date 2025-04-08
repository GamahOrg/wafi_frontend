import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LoginParams, UserType } from '../../models/login.model';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { LoginService } from '../../services/login/login.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { TokenResponse } from 'src/app/shared/models/token-response.model';
import { Title } from '@angular/platform-browser';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { VerificationOtpPopupByUsernameComponent } from '../../components/verification-otp-popup-by-username/verification-otp-popup-by-username.component';

@Component({
  selector: 'app-login-old',
  templateUrl: './login-old.component.html',
  styleUrls: ['./login-old.component.scss']
})
export class LoginOldComponent  {
  errorFeedback: string = '';
  showPassword: boolean = false;
  subscriptions: Subscription[] = [];
  loginForm: FormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  get usernameControl(): FormControl {
    return this.loginForm.controls['username'] as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.controls['password'] as FormControl;
  }
  registration: string =
    '/' +
    Configuration.modules.realEstateContributionsAuth +
    '/' +
    Configuration.pages.realEstateContributionsAuth.regAccount;
  fogotPassword: string =
    '/' +
    Configuration.modules.realEstateContributionsAuth +
    '/' +
    Configuration.pages.realEstateContributionsAuth.forgotPassword;
  appTitle: string = 'المساهمات عقارية';
  OTPInputValue: string | null = null;
  tokenResponse: TokenResponse = {
    accessToken: '',
    refreshToken: '',
  };
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
    private _storageService: StorageService,
    private titleService: Title,
    private _popupService: PopupService,
    private _OTPService: OTPService
  ) {}
  ngOnInit(): void {
    this.setAppTitle();
    this.observecancelAction();
    this.observeconfirmAction();
    this.observeOTPInputValue();
  }
  private setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }

  onSubmit() {
    let loginParams = {
      userName: this.loginForm.value.username,
      password: this.loginForm.value.password,
      userType: UserType.client,
    };

    this._loginService
      .login(loginParams as LoginParams)
      .subscribe((res: BaseResponse<TokenResponse | null>) => {
        if (res) {
          if (res.data) {
            this.tokenResponse = res.data;
            this._loginService.userName.next(this.loginForm.value.username);
            this.openOTPDialog();
          } else {
            this.errorFeedback = res.message;
          }
        }
      });
  }
  private navigateToDashboard(): void {
    this._router.navigate([
      `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityDashboard}`,
    ]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  private observeOTPInputValue(): void {
    this.subscriptions.push(
      this._OTPService.getOTPInputValue().subscribe((res: string | null) => {
        this.OTPInputValue = res;
      })
    );
  }
  private openOTPDialog(): void {
    let popupData = {
      title: `من فضلك قم بالتحقق من OTP للرقم `,
      component: VerificationOtpPopupByUsernameComponent,
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: '',
          title: 'تحقق',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ],
    };
    this._popupService.updatePopupData(popupData as PopupData);
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {})
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this._OTPService
          .ValidateOTPByUserName({
            userName: this.loginForm.value.username,
            userType: UserType.client,
            OTP: this.OTPInputValue ?? '',
          })
          .subscribe((data) => {
            if (data) {
              this._storageService.saveTokens(this.tokenResponse);
              this._popupService.dismissDialog();

              this.navigateToDashboard();
            }
          });
      })
    );
  }
}
