import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { RegistrationStatus, YaqeenCustomer, customerResponse, registration } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { contactFE } from '../../models/registration.model';
import { RegistrationService } from '../../services/registration/registration.service';
import { YaqeenService } from '../../services/yaqeen/yaqeen.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { VerificationOtpPopupComponent } from '../verification-otp-popup/verification-otp-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { NationalityService } from '../../services/nationality/nationality.service';
import { NationalityModel } from '../../models/nationality.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from '../../models/login.model';

@Component({
  selector: 'app-adding-contact-info',
  templateUrl: './adding-contact-info.component.html',
  styleUrls: ['./adding-contact-info.component.scss'],
})
export class AddingContactInfoComponent implements OnInit {
  userData: customerResponse | null = null;
  contactInfoValues: contactFE = new contactFE();
  subscriptions: Subscription[] = [];
  showPassword: boolean = false;
  showValidation: boolean = false;
  isDelegator: boolean = false;
  loginUserEnum: LoginUserTypeEnum | null = null;
  LoginUserTypeEnum = LoginUserTypeEnum;
  RegistrationStatusEnum = RegistrationStatus;
  yaqeenUserData: YaqeenCustomer | null = null;
  OTPInputValue: string | null = null;
  localization = {
    userName: 'اسم المستخدم',
    fullName: 'الاسم بالكامل',
    nationality: 'الجنسية',
    Password: 'كلمة المرور',
    ConfirmPassword: 'اعادة كلمة المرور',
    Mobile1: 'رقم الجوال',
    Mobile2: 'رقم الجوال 2 ( اختياري)',
    requiredErrorMsg: 'حقل مطلوب',
    Email: 'البريد الرلكتروني',
    Website: 'الموقع الإلكتروني للمنشأه ( اختياري)',
    JobTitle: 'الموسمى الوظيفى',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    next: 'التالي',
    previous: 'السابق',
    shortName: 'اللقب',
    pleaseVerifyYourMail: 'من فضلك قم بالتحقق من البريد الإلكتروني',
    pleaseVerifyYourMobile: 'من فضلك قم بالتحقق من OTP للرقم ',
    mobileNumberVerifiedSuccessfully: "تم التحقق بنجاح من رقم الجوال ",
    maxLengthErrorMsg: "طول الرقم يجب الا يزيد عن 10 ارقام",
    selectNationalErrorMsg: "اختار جنسية",
    noArabicLettersError: "كلمة السر يجب ألا تحتوي على حروف باللغة العربية",
    isMatchedError: "كلمة المرور غير متطابقة"
  };

  contactInfoForm = this._formBuilder.group(
    {
      userName: [{ value: '', disabled: true }, [Validators.required]],//readonly
      shortName: ['', Validators.required],//readonly
      password: ['123456'],//readonly
      // password: ['', [Validators.required, Validators.pattern(Configuration.validators.noArabicLetters)]],
      // confirmPassword: ['', [Validators.required, Validators.pattern(Configuration.validators.noArabicLetters)]],
      mobile1: ['', [Validators.required, Validators.pattern(Configuration.validators.PhoneNumber),
      Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Configuration.validators.numberOnly)]],
      mobile2: ['', [Validators.pattern(Configuration.validators.PhoneNumber),
      Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Configuration.validators.numberOnly)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: [''],
      nationality: [''],
      jobTitle: [''],
      isDelegator: [false]
    },
    { validators: this.validateAreEqual('password', 'confirmPassword') }
  );
  get controls() {
    return this.contactInfoForm.controls;
  }

  constructor(
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _yaqeenService: YaqeenService,
    private _popupService: PopupService,
    private _OTPService: OTPService,
    private _nationalityService: NationalityService,
  ) { }

  ngOnInit(): void {
    this.observeUserTypeStatus();
    this.obseveCustomerData();
    this.observeRegistrationObjBs();
    this.observeYaqeenCustomer();
    this.observeOTPInputValue();
    this.observePopupEvents();
    this.observeRegistrationStatus()
  }
  private observeOTPInputValue(): void {
    this.subscriptions.push(
      this._OTPService.getOTPInputValue().subscribe((res: string | null) => {
        this.OTPInputValue = res;
        console.log("this.OTPInputValue", this.OTPInputValue);
      })
    )
  }
  validateAreEqual(password: string, confirmPassword: string) {
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

  onClickOnNext(): void {
    this.contactInfoForm.markAllAsTouched();
    if (this.contactInfoForm.valid) {
      this.contactInfoValues = this.contactInfoForm.getRawValue() as unknown as contactFE;
      this.contactInfoValues.loginUserType = this.loginUserEnum;
      this.contactInfoValues.customerId = this.userData?.id ? this.userData.id : '00000000-0000-0000-0000-000000000000';
      this.contactInfoValues.facilityId = this.userData?.facilities && this.userData.facilities.length > 0 && this.userData.facilities[0].id ? this.userData.facilities[0].id : '';
      this.updateContactInfoDtoValues();
      this.openVerificationPopupForMobile1()
    } else {
      this.showValidation = true
    }
  }
  observeUserTypeStatus(): void {
    this._registrationService.registrationStatus.subscribe(
      (status: RegistrationStatus | null) => {
        debugger;
        if (status) {
          switch (status) {
            case this.RegistrationStatusEnum.finalBeneficiary:
              this.loginUserEnum = LoginUserTypeEnum.finalBeneficiary;
              break;
            case this.RegistrationStatusEnum.isDelegator:
              this.loginUserEnum = LoginUserTypeEnum.delegateWafiPartner;
              break;
          }
        }
      }
    );
  }
  private showNotificationForEmailVerification() {
    this._toastrNotificatioService.showInfo(this.localization.pleaseVerifyYourMail)
  }
  nationalities: NationalityModel[] = [];
  getNationalities() {
    this._nationalityService.getNationalities().subscribe(data => {
      if (data) {
        this.nationalities = data as NationalityModel[];
      }
    });
  }
  private openVerificationPopupForMobile1() {

    if (this.contactInfoForm.value.mobile1 && this.contactInfoForm.value.mobile1?.length > 0) {
      this.updateCustomerMobile(this.contactInfoForm.value.mobile1)
      this.subscriptions.push(
        this._OTPService.GenerateOTP(this.contactInfoForm.value.mobile1).subscribe((res: boolean) => {
          this.openOTPDialog(this.contactInfoForm.value.mobile1 as string, "mobile1")
        })
      )
    }
  }


  private openVerificationPopupForMobile2() {
    if (this.contactInfoForm.value.mobile2 && this.contactInfoForm.value.mobile2?.length > 0) {
      this.updateCustomerMobile(this.contactInfoForm.value.mobile2)
      this.subscriptions.push(
        this._OTPService.GenerateOTP(this.contactInfoForm.value.mobile2).subscribe((res: boolean) => {
          this.openOTPDialog(this.contactInfoForm.value.mobile2 as string, "mobile2")
        })
      )
    }
  }

  private updateCustomerMobile(mobile: string): void {

    this._registrationService.customerMobile.next(mobile)
  }

  private openOTPDialog(mobileNumber: number | string, id: string): void {
    let popupData = {
      id: id,
      title: `${this.localization.pleaseVerifyYourMobile} ${mobileNumber}`,
      component: VerificationOtpPopupComponent,
      buttons: [{
        icon: "",
        title: "إلغاء",
        actionType: ButtonType.cancel,
        isVisable: true,
        isDisables: false,
        // onclick: () => this.openNotesDialog()
      },
      {
        icon: "",
        title: "تحقق",
        actionType: ButtonType.confirm,
        isVisable: true,
        isDisables: false,
        // onclick: () => this.openAssignEmployeeDialog()
      }]
    };
    this._popupService.updatePopupData(popupData as PopupData);
  }


  private updateContact(): void {
    this.subscriptions.push(
      this._registrationService
        .updateContact(this.contactInfoValues)
        .subscribe((res: any) => {
          debugger
          if (res) {
            console.log('updateContact');
            console.log(res);
            if (res.isDone) {
              if (
                !this.userData ||
                this.userData.id == undefined ||
                this.userData.id == ''
              ) {
                this.userData = new customerResponse();
                this.userData.id = res?.data?.customerId as string;
                this.userData.fullName = this.contactInfoForm.value
                  .fullName as string;
                this.userData.nationality = this.contactInfoForm.value
                  .nationality as string;
                this._userDataService.updateCustomerData(this.userData);
              }
              // this.showNotificationForEmailVerification();
              debugger
              if (
                this.loginUserEnum == LoginUserTypeEnum.delegateWafiPartner
              ) {
                this.showSuccess(res.message);
                this.navigateToLogin();
              } else if
                (this.loginUserEnum == LoginUserTypeEnum.finalBeneficiary) {

                this.showSuccess('تم التسجيل بنجاح برجاء اعادة تسجيل الدخول للدخول للمنصة');
                this.navigateToLogin();

                // this.showSuccess('تم التسجيل بنجاح');
                // this._storageService.saveTokens(res.data.token);
                // this.navigateToContractdocumentation();
              }
              else {
                this._registrationService.nextClickedEventEmmitter.emit();
              }
            }
          }
        })
    );
  }
  private navigateToContractdocumentation(): void {
    this._router.navigate([`${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.contractdocumentation}`]);
  }

  private updateCustomerData(userData: customerResponse): void {
    this._userDataService.updateCustomerData(userData)
  }
  private navigateToDashboard(): void {
    this._router.navigate([
      `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityDashboard}`,
    ]);
  }

  // helper method
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
        })
    );
  }

  private navigateToLogin(): void {
    this._router.navigateByUrl(
      `${Configuration.modules.auth}/${Configuration.pages.auth.login}`
    );
  }

  private observeRegistrationObjBs(): void {
    this.subscriptions.push(
      this._registrationService.registrationObj.subscribe(
        (res: registration | null) => {
          if (res) this.updateUsername(res)
        }
      )
    )
  }

  private updateUsername(res: registration): void {
    this.controls.userName.setValue(res.nIdNumber)
  }
  isContactFormUpdated: boolean = false;
  private observeYaqeenCustomer(): void {
    this.subscriptions.push(
      this._yaqeenService.getYaqeenCustomer().subscribe((res: YaqeenCustomer | null) => {
        if (res) {


          this.yaqeenUserData = res;
          // this.updateContactInfoForm();
          if (this.isContactFormUpdated == false)
            this.validateData();
        }
      })
    )
  }
  updateContactInfoDtoValues(): void {
    this.contactInfoValues.nidnumber = this.yaqeenUserData?.nidnumber as string;
    this.contactInfoValues.shortName = this.contactInfoForm.controls.shortName.value!;
    this.contactInfoValues.fullName = this.contactInfoForm.controls.fullName.value!;
    this.contactInfoValues.nationality = this.contactInfoForm.controls.nationality.value!;
  }

  validateData() {
    this.isContactFormUpdated = true;
    if (this.yaqeenUserData?.fullName == null || this.yaqeenUserData?.fullName == '') {
      this.contactInfoForm.controls.shortName.enable();
      this.contactInfoForm.controls.shortName.setValidators(Validators.required);
      this.contactInfoForm.controls.fullName.setValidators(Validators.required);
      this.contactInfoForm.controls.nationality.setValidators(Validators.required);
      this.contactInfoForm.controls.shortName.updateValueAndValidity();
      this.contactInfoForm.controls.fullName.updateValueAndValidity();
      this.contactInfoForm.controls.nationality.updateValueAndValidity();
      this.getNationalities();
    } else {

      this.contactInfoForm.controls.userName.setValue(this.yaqeenUserData?.nidnumber as string);
      this.contactInfoForm.controls.shortName.setValue(this.yaqeenUserData?.shortName as string);
      this.contactInfoForm.controls.fullName.setValue(this.yaqeenUserData?.fullName as string);
      this.contactInfoForm.controls.nationality.setValue(this.yaqeenUserData?.nationality as string);
      this.contactInfoForm.controls.shortName.clearAsyncValidators();
      this.contactInfoForm.controls.fullName.clearAsyncValidators();
      this.contactInfoForm.controls.nationality.clearAsyncValidators();
      this.contactInfoForm.controls.shortName.disable();
      this.contactInfoForm.controls.fullName.disable();
      this.contactInfoForm.controls.nationality.disable();
      this.contactInfoForm.controls.shortName.updateValueAndValidity();
      this.contactInfoForm.controls.fullName.updateValueAndValidity();
      this.contactInfoForm.controls.nationality.updateValueAndValidity();
    }
  }

  private updateContactInfoForm(): void {
    this.contactInfoForm.patchValue(this.yaqeenUserData as YaqeenCustomer);
  }

  showSuccess(msg: string) {
    this._toastrNotificatioService.showSuccess(msg);
  }

  onClickOnPrevious(): void {
    this._registrationService.previousClickedEventEmmitter.emit();
  }

  observeRegistrationStatus(): void {
    this.subscriptions.push(
      this._registrationService.registrationStatus.subscribe((res: RegistrationStatus | null) => {
        this.isDelegator = res && res == RegistrationStatus.isDelegator ? true : false;
        this.controls.isDelegator.setValue(this.isDelegator ? true : false);
      }))
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        switch (res.id) {
          case "mobile1":
            this.ValidateOTP(this.contactInfoForm.value.mobile1 as string, this.OTPInputValue as string, "mobile1")
            break;
          case "mobile2":
            this.ValidateOTP(this.contactInfoForm.value.mobile2 as string, this.OTPInputValue as string, "mobile2")

            break;
        }
      })
    )
  }

  private ValidateOTP(mobileNumber: string | number, OTP: string, id: string): void {
    this.subscriptions.push(
      this._OTPService.ValidateOTP(mobileNumber, OTP).subscribe((res: boolean) => {
        if (res) {
          this.closeDialog();
          this._toastrNotificatioService.showSuccess(this.localization.mobileNumberVerifiedSuccessfully);
          if (id == "mobile1") {
            if (this.contactInfoForm.value.mobile2 && this.contactInfoForm.value.mobile2?.length > 0) {
              this.openVerificationPopupForMobile2();
            } else {
              this.updateContact()
            }
          } else if (id == "mobile2") {
            this.updateContact()
          }

        }
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
