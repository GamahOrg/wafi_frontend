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
import {
  LoginParams,
  LoginUserTypeEnum,
  UserType,
} from '../../models/login.model';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { LoginService } from '../../services/login/login.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { TokenResponse } from 'src/app/shared/models/token-response.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { VerificationOtpPopupByUsernameComponent } from '../../components/verification-otp-popup-by-username/verification-otp-popup-by-username.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { notePopupData, PopupData } from 'src/app/shared/models/popup.model';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { SignalRService } from 'src/app/core/services/signalR/signal-r.service';
import { YaqeenService } from '../../services/yaqeen/yaqeen.service';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { RegistrationService } from '../../services/registration/registration.service';
import {
  customerResponse,
  RegistrationStatus,
  YaqeenCustomer,
} from 'src/app/shared/models/customer.model';
import { UserTypeStatus } from '../../models/identity-status.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  registration: string =
    '/' +
    Configuration.modules.auth +
    '/' +
    Configuration.pages.auth.regAccount;
  fogotPassword: string =
    '/' +
    Configuration.modules.auth +
    '/' +
    Configuration.pages.auth.forgotPassword;
  errorFeedback: string = '';
  loginUserTypeEnum = LoginUserTypeEnum;
  showPassword: boolean = false;
  setTimeout: any;
  showToastr: boolean = false;
  receivedIdentityStatusSubscription!: Subscription;
  registerSubscription!: Subscription;
  transactionId: string = '';
  isProduction: boolean = environment.production;
  get RegistrationStatus(): typeof RegistrationStatus {
    return RegistrationStatus;
  }
  subscriptions: Subscription[] = [];
  loginForm: FormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: [''],
    loginUserType: [this.loginUserTypeEnum.wafiPartner, Validators.required],
    // password: ['', Validators.required],
  });
  get usernameControl(): FormControl {
    return this.loginForm.controls['username'] as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.controls['password'] as FormControl;
  }
  OTPInputValue: string | null = null;
  tokenResponse: TokenResponse = {
    accessToken: '',
    refreshToken: '',
    loginUserType: this.loginUserTypeEnum.wafiPartner,
  };
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _registrationService: RegistrationService,
    private _userDataService: UserDataService,
    private _toastrService: ToastrService,
    private _yaqeenService: YaqeenService,
    private _signalRService: SignalRService,
    private loginService: LoginService,
    private _loginService: LoginService,
    private _storageService: StorageService,
    private _popupService: PopupService,
    private _OTPService: OTPService
  ) { }
  ngOnInit(): void {
    this.observecancelAction();
    this.observeconfirmAction();
    this.observeOTPInputValue();

    this.observeRegisterBS();
    this.observeReceivedIdentityStatusBS();
  }

  onSubmit() {
    let loginParams = {
      userName: this.loginForm.value.username,
      password: this.loginForm.value.password,
      userType: UserType.client,
      loginUserType: +this.loginForm.value.loginUserType,
    };

    if (this.isProduction) {
      this.loginService.LoginWithIAM(loginParams).subscribe((res) => {
        if (res.data) {
          
          if (res.data.token) {
            this._storageService.saveTokens(res.data.token);

            switch (res.data.token.loginUserType) {
              case LoginUserTypeEnum.wafiPartner:
              case LoginUserTypeEnum.delegateWafiPartner:
                this.navigateToDashboard();
                break;

              case LoginUserTypeEnum.Employee:
                this.navigateToEmployeeRequest();
                break;

              case LoginUserTypeEnum.finalBeneficiary:
                this.navigateToContractdocumentation()
                break;

            }
          } else {
            this.openPopupOfValidationNumber(+res.data.nafathLoginData.random);
            this.transactionId = res.data.nafathLoginData.transId;
            this.invokeTransactionIdToRegister();
          }
        } else {
          this._toastrService.error(res.message);
        }
      });
    } else {
      this._loginService
        .login(loginParams as LoginParams)
        .subscribe((res: BaseResponse<TokenResponse | null>) => {
          if (res) {
            if (res.data) {
              if (res.data) {

                this.tokenResponse = res.data;
                this._storageService.saveTokens(this.tokenResponse);

                switch (res.data.loginUserType) {
                  case LoginUserTypeEnum.wafiPartner:
                  case LoginUserTypeEnum.delegateWafiPartner:
                    this.navigateToDashboard();
                    break;

                  case LoginUserTypeEnum.Employee:
                    this.navigateToEmployeeRequest();
                    break;

                  case LoginUserTypeEnum.finalBeneficiary:
                    this.navigateToContractdocumentation()
                    break;

                }
              }

              // this._loginService.userName.next(this.loginForm.value.username);
              // this.openOTPDialog();
            } else {
              this.errorFeedback = res.message;
            }
          }
        });
    }
  }
  //   private updateRegistrationObjBs() {
  //     this._registrationService.registrationObj.next(this.registrationForm.value as registration)
  // }
  private openPopupOfValidationNumber(nafathValidationNumber: number) {
    this.showToastr = true;
    let Data = {
      panelClass: ['validation-number'],
      id: 'NafathValidationNumberPopup',
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'نأمل فتح تطبيق نفاذ و تأكيد الطلب بأختيار الرقم ',
      staticMessage: '',
      dynamicMessage: nafathValidationNumber.toString(),
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
    this.setTimeOutToDismissDialog();
    // let Data = {
    //   title: "تحقق من نفاذ",
    //   id: "NafathValidationNumberPopup",
    //   component: NafathValidationNumberPopupComponent,
    //   buttons: [
    //   //   {
    //   //   icon: "",
    //   //   title: "إلغاء",
    //   //   actionType: ButtonType.cancel,
    //   //   isVisable: true,
    //   //   isDisables: false,
    //   // }
    // ]
    // } as PopupData;

    // this._popupService.updatePopupData(Data);
  }

  private setTimeOutToDismissDialog(): void {
    // for test
    // setTimeout(() => {
    //   this.dismissDialog();
    //   this.navigateToRegister()
    // }, 5000);
    // 120000 = 2min.
    this.setTimeout = setTimeout(() => {
      this.dismissDialog();
      this.unsubscribeReceivedIdentityStatusBS();
      this.unsubscribeRegisterBS();
    }, 180000);
  }

  private dismissDialog(): void {
    // if(this._popupService.NotePopupData.value.id=="NafathValidationNumberPopup"){
    this._popupService.dismissDialog();
    if (this.showToastr) this._toastrService.error('لم يتم التأكيد');
    // }
  }
  // onSubmit() {
  //   let loginParams = {
  //     userName: this.loginForm.value.username,
  //     password: this.loginForm.value.password,
  //     userType: UserType.client,
  //   };

  //   this._loginService
  //     .login(loginParams as LoginParams)
  //     .subscribe((res: BaseResponse<TokenResponse | null>) => {
  //       if (res) {
  //         if (res.data) {
  //           this.tokenResponse = res.data;
  //           this._loginService.userName.next(this.loginForm.value.username);
  //           this.openOTPDialog();
  //         } else {
  //           this.errorFeedback = res.message;
  //         }
  //       }
  //     });
  // }

  private navigateToDashboard(): void {
    this._router.navigate([`${Configuration.modules.wafi}`]);
  }

  private navigateToEmployeeRequest(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.employeeLicenseList}`,
    ]);
  }
  // ngOnDestroy(): void {
  //   this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  // }
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
      this._popupService.cancelAction.subscribe((res: PopupData) => { })
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

  private observeRegisterBS() {
    this.registerSubscription = this._signalRService.register$.subscribe(
      (res: string) => { }
    );
  }
  private invokeTransactionIdToRegister() {
    this._signalRService.connectionIdentityHub
      .invoke('Register', this.transactionId)
      .catch((error: any) => {
        console.log(`identityHubUrl.Register() error: ${error}`);
      });
  }
  private invokeTransactionIdToUnregister() {
    this._signalRService.connectionIdentityHub
      .invoke('UnRegister', this.transactionId)
      .catch((error: any) => {
        console.log(`identityHubUrl.UnRegister() error: ${error}`);
      });
  }
  private navigateToContractdocumentation(): void {
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.contractdocumentation}`]);
  }
  private observeReceivedIdentityStatusBS() {
    this.receivedIdentityStatusSubscription =
      this._signalRService.receivedIdentityStatus$.subscribe((res: any) => {
        this.invokeTransactionIdToUnregister();
        this._popupService.dismissDialog();

        if (res) {
          if (res.isValid && res.transactionId == this.transactionId) {
            
            if (res.token != null) {
              this._storageService.saveTokens(res.token);

              switch (res.token.loginUserType) {
                case LoginUserTypeEnum.wafiPartner:
                case LoginUserTypeEnum.delegateWafiPartner:
                  this.navigateToDashboard();
                  break;

                case LoginUserTypeEnum.Employee:
                  this.navigateToEmployeeRequest();
                  break;

                case LoginUserTypeEnum.finalBeneficiary:
                  this.navigateToContractdocumentation()
                  break;

              }
            }

            if (
              res.userTypeStatus == UserTypeStatus.FinalBeneficiary ||
              res.userTypeStatus == UserTypeStatus.NewCustomer ||
              res.userTypeStatus == UserTypeStatus.Delegator ||
              res.userTypeStatus == UserTypeStatus.CustomerWithoutFacility
            ) {
              switch (res.userTypeStatus) {
                case UserTypeStatus.NewCustomer:
                  this.updateRegistrationStatus(RegistrationStatus.rightId);
                  break;
                case UserTypeStatus.Delegator:
                  this.updateRegistrationStatus(RegistrationStatus.isDelegator);
                  break;
                case UserTypeStatus.CustomerWithoutFacility:
                  this.updateRegistrationStatus(
                    RegistrationStatus.existIdWithoutFacility
                  );
                  break;
                case UserTypeStatus.FinalBeneficiary:
                  this.updateRegistrationStatus(RegistrationStatus.finalBeneficiary);
                  break;
              }

              let yaqeenCustomer = {
                fullName: res.userInfoUpdated?.fullName,
                shortName: res.userInfoUpdated?.firstName,
                nidnumber: res.userInfoUpdated?.nationalId,
                nationality: res.userInfoUpdated?.nationality,
              } as YaqeenCustomer;

              this._yaqeenService.updateYaqeenCustomer(yaqeenCustomer);
              if (
                res.userTypeStatus == UserTypeStatus.CustomerWithoutFacility
              ) {
                let userData = {
                  id: res.userInfoUpdated?.id,
                  fullName: res.userInfoUpdated?.fullName,
                  nidnumber: res.userInfoUpdated?.nationalId,
                  nationality: res.userInfoUpdated?.nationality,
                  facilities: [{}],
                } as customerResponse;
                this.updateCustomerData(userData);
                this.emitUserDataUpdatedEventEmitter(userData);
              } else {
                let userData = {} as customerResponse;
                this.updateCustomerData(userData);
                this.emitUserDataUpdatedEventEmitter(userData);
              }
              this.navigateToRegister();
            }
          }
        }
      });
  }

  //   private updateRegistrationObjBs() {
  //     this._registrationService.registrationObj.next(this.registrationForm.value as registration)
  // }
  private updateRegistrationStatus(status: number) {
    this._registrationService.registrationStatus.next(status);
  }

  private navigateToRegister(): void {
    this._router.navigateByUrl(
      `${Configuration.modules.auth}/${Configuration.pages.auth.registration}`
    );
  }
  private updateCustomerData(userData: customerResponse): void {
    this._userDataService.updateCustomerData(userData);
  }
  private emitUserDataUpdatedEventEmitter(customer: customerResponse): void {
    this._registrationService.userDataUpdatedEventEmitter.emit(customer);
  }

  private unsubscribeReceivedIdentityStatusBS() {
    this.receivedIdentityStatusSubscription.unsubscribe();
  }
  private unsubscribeRegisterBS() {
    this.registerSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeout);
    this.unsubscribeReceivedIdentityStatusBS();
    this.unsubscribeRegisterBS();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
