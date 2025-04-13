"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 25021:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 96877);
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/registration/registration.component */ 64665);
/* harmony import */ var _pages_wafi_service_wafi_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/wafi-service/wafi-service.component */ 91771);
/* harmony import */ var _pages_register_account_register_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register-account/register-account.component */ 2535);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 30214);
/* harmony import */ var _components_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/verification-code/verification-code.component */ 8715);
/* harmony import */ var _pages_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/create-new-password/create-new-password.component */ 63713);
/* harmony import */ var _pages_complaint_request_from_login_complaint_request_from_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/complaint-request-from-login/complaint-request-from-login.component */ 11319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86793);





// import { CreateAccountComponent } from './pages/create-account/create-account.component';







const routes = [{
  path: '',
  redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.wafiService,
  pathMatch: 'full'
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login,
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  canActivate: [
    // NavigationToLoginGuard
  ]
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.complaintRequest,
  component: _pages_complaint_request_from_login_complaint_request_from_login_component__WEBPACK_IMPORTED_MODULE_8__.ComplaintRequestFromLoginComponent
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.regAccount,
  component: _pages_register_account_register_account_component__WEBPACK_IMPORTED_MODULE_4__.RegisterAccountComponent
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.forgotPassword,
  component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent,
  canActivate: [
    // NavigationToLoginGuard
  ]
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.verificationCode,
  component: _components_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_6__.VerificationCodeComponent,
  canActivate: [
    // NavigationToLoginGuard
  ]
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.newPassword,
  component: _pages_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_7__.CreateNewPasswordComponent,
  canActivate: [
    // NavigationToLoginGuard
  ]
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.wafiService,
  component: _pages_wafi_service_wafi_service_component__WEBPACK_IMPORTED_MODULE_3__.WafiServiceComponent,
  canActivate: [
    // NavigationToLoginGuard
  ]
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.registration,
  component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent,
  canActivate: [
    // NavigationToLoginGuard
  ]
}
// {
//   path: `${Configuration.pages.auth.confirmMail}/:customerId`,
//   component: MailConfirmationComponent,
//   canActivate: [
//     // NavigationToLoginGuard
//   ],
// },
// {
//   path: Configuration.pages.auth.createAccount,
//   component: CreateAccountComponent,
//   canActivate: [
//     // NavigationToLoginGuard
//   ],
// },
];

class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 55697:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 25021);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 96877);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login/login.service */ 56368);
/* harmony import */ var _pages_wafi_service_wafi_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/wafi-service/wafi-service.component */ 91771);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/registration/registration.component */ 64665);
/* harmony import */ var _components_adding_contact_info_adding_contact_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/adding-contact-info/adding-contact-info.component */ 70974);
/* harmony import */ var _components_adding_commercial_register_number_adding_commercial_register_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/adding-commercial-register-number/adding-commercial-register-number.component */ 12331);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/registration/registration.service */ 66231);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var _services_create_account_create_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/create-account/create-account.service */ 71784);
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-layout/login-layout.component */ 32391);
/* harmony import */ var _pages_register_account_register_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register-account/register-account.component */ 2535);
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth-layout/auth-layout.component */ 75049);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 30214);
/* harmony import */ var _components_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/verification-code/verification-code.component */ 8715);
/* harmony import */ var _pages_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/create-new-password/create-new-password.component */ 63713);
/* harmony import */ var _components_auth_topbar_auth_topbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/auth-topbar/auth-topbar.component */ 50983);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/yaqeen/yaqeen.service */ 12793);
/* harmony import */ var _components_verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/verification-otp-popup/verification-otp-popup.component */ 65262);
/* harmony import */ var _services_nationality_nationality_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/nationality/nationality.service */ 45755);
/* harmony import */ var _components_verification_username_verification_username_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/verification-username/verification-username.component */ 24750);
/* harmony import */ var _components_add_new_password_add_new_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/add-new-password/add-new-password.component */ 87183);
/* harmony import */ var _services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/forget-password/forget-password.service */ 26667);
/* harmony import */ var _pages_complaint_request_from_login_complaint_request_from_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/complaint-request-from-login/complaint-request-from-login.component */ 11319);
/* harmony import */ var _components_verification_otp_popup_by_username_verification_otp_popup_by_username_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/verification-otp-popup-by-username/verification-otp-popup-by-username.component */ 55831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 86793);




// import { TranslateModule } from '@ngx-translate/core';








// import { CreateAccountComponent } from './pages/create-account/create-account.component';


















// import { MailConfirmationComponent } from './pages/mail-confirmation/mail-confirmation.component';
// import { MailConfirmationService } from './services/mail-confirmation/mail-confirmation.service';
class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
  providers: [_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService, src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_17__.StorageService, _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__.RegistrationService, _services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_23__.ForgetPasswordService, _services_create_account_create_account_service__WEBPACK_IMPORTED_MODULE_9__.CreateAccountService, _services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_18__.YaqeenService, _services_nationality_nationality_service__WEBPACK_IMPORTED_MODULE_20__.NationalityService
  // MailConfirmationService
  ],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
  // TranslateModule.forChild(),
  src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _pages_wafi_service_wafi_service_component__WEBPACK_IMPORTED_MODULE_3__.WafiServiceComponent, _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__.RegistrationComponent,
    // AddingNationalIDComponent,
    _components_adding_contact_info_adding_contact_info_component__WEBPACK_IMPORTED_MODULE_6__.AddingContactInfoComponent, _components_adding_commercial_register_number_adding_commercial_register_number_component__WEBPACK_IMPORTED_MODULE_7__.AddingCommercialRegisterNumberComponent,
    // CreateAccountComponent,
    _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_10__.LoginLayoutComponent, _pages_register_account_register_account_component__WEBPACK_IMPORTED_MODULE_11__.RegisterAccountComponent, _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__.AuthLayoutComponent, _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__.ForgotPasswordComponent, _components_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_14__.VerificationCodeComponent, _pages_create_new_password_create_new_password_component__WEBPACK_IMPORTED_MODULE_15__.CreateNewPasswordComponent, _components_auth_topbar_auth_topbar_component__WEBPACK_IMPORTED_MODULE_16__.AuthTopbarComponent, _components_verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_19__.VerificationOtpPopupComponent, _components_verification_username_verification_username_component__WEBPACK_IMPORTED_MODULE_21__.VerificationUsernameComponent, _components_add_new_password_add_new_password_component__WEBPACK_IMPORTED_MODULE_22__.AddNewPasswordComponent, _pages_complaint_request_from_login_complaint_request_from_login_component__WEBPACK_IMPORTED_MODULE_24__.ComplaintRequestFromLoginComponent, _components_verification_otp_popup_by_username_verification_otp_popup_by_username_component__WEBPACK_IMPORTED_MODULE_25__.VerificationOtpPopupByUsernameComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
    // TranslateModule.forChild(),
    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 87183:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/auth/components/add-new-password/add-new-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewPasswordComponent": () => (/* binding */ AddNewPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/forget-password/forget-password.service */ 26667);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 85959);








function AddNewPasswordComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.localization.requiredErrorMsg);
  }
}
function AddNewPasswordComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.localization.noArabicLettersError);
  }
}
function AddNewPasswordComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddNewPasswordComponent_div_12_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddNewPasswordComponent_div_12_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.controls.password.errors == null ? null : ctx_r0.controls.password.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.controls.password.errors == null ? null : ctx_r0.controls.password.errors["pattern"]);
  }
}
function AddNewPasswordComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.localization.requiredErrorMsg);
  }
}
function AddNewPasswordComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.localization.noArabicLettersError);
  }
}
function AddNewPasswordComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddNewPasswordComponent_div_21_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddNewPasswordComponent_div_21_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.controls.confirmPassword.errors == null ? null : ctx_r1.controls.confirmPassword.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.controls.confirmPassword.errors == null ? null : ctx_r1.controls.confirmPassword.errors["pattern"]);
  }
}
function AddNewPasswordComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.localization.isMatchedError, "");
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class AddNewPasswordComponent {
  get controls() {
    return this.forgotPassForm.controls;
  }
  constructor(_formBuilder, _forgetpasswordServices, _toastrService, router) {
    this._formBuilder = _formBuilder;
    this._forgetpasswordServices = _forgetpasswordServices;
    this._toastrService = _toastrService;
    this.router = router;
    this.subscriptions = [];
    this.showPassword = false;
    this.forgotPassForm = this._formBuilder.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.noArabicLetters)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.noArabicLetters)]]
    }, {
      validators: this.validateAreEqual('password', 'confirmPassword')
    });
    this.localization = {
      Password: 'كلمة المرور',
      ConfirmPassword: 'اعادة كلمة المرور',
      requiredErrorMsg: 'حقل مطلوب',
      noArabicLettersError: "كلمة السر يجب ألا تحتوي على حروف باللغة العربية",
      isMatchedError: "كلمة المرور غير متطابقة"
    };
  }
  ngOnInit() {
    this.getUsername();
    this.getToken();
    this.forgotPassForm.valueChanges.subscribe(changes => {
      console.log("forgotPassForm", this.forgotPassForm);
    });
  }
  get passwordControl() {
    return this.forgotPassForm.controls['password'];
  }
  getUsername() {
    this.subscriptions.push(this._forgetpasswordServices.userName$.subscribe(res => {
      this.username = res;
      console.log(' name', res);
    }));
  }
  getToken() {
    this.subscriptions.push(this._forgetpasswordServices.token$.subscribe(res => {
      this.token = res;
    }));
  }
  onSubmit() {
    this.changePassword = {
      userName: this.username.userName,
      token: this.token,
      newPassword: this.forgotPassForm.value.password
    };
    this.subscriptions.push(this._forgetpasswordServices.ResetPassword(this.changePassword).subscribe(res => {
      if (res.isDone) {
        this._toastrService.showSuccess(res.message);
        this.navigateToLogin();
      }
    }));
  }
  validateAreEqual(password, confirmPassword) {
    return formGroup => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        formGroup.setErrors({
          isMatchedError: true
        });
        return {
          isMatchedError: true
        };
      } else {
        formGroup.setErrors(null);
        return null;
      }
    };
  }
  navigateToLogin() {
    this.router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login}`);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
AddNewPasswordComponent.ɵfac = function AddNewPasswordComponent_Factory(t) {
  return new (t || AddNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_2__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
AddNewPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AddNewPasswordComponent,
  selectors: [["app-add-new-password"]],
  decls: 26,
  vars: 17,
  consts: [["id", "form-signin", 1, "form-signin"], [1, "text-center"], ["src", "assets/images/auth/ForgotPass.svg", "alt", "", "width", "337", "height", "365", 1, "mb-4"], ["id", "form-forgotPassForm", 3, "formGroup"], [1, "form-group", "mb-4"], ["for", "password", 1, "form-label"], [1, "input-group"], ["formControlName", "password", "id", "control-password", 1, "form-control", 3, "type", "ngClass"], [1, "input-group-text", 3, "click"], [1, "material-icons-outlined"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "confirmPassword", 1, "form-label"], ["formControlName", "confirmPassword", "id", "control-confirmPassword", 1, "form-control", 3, "type", "ngClass"], ["id", "btn-onSubmit", 1, "w-50", "btn", "btn-primary", 3, "disabled", "click"], [1, "invalid-feedback", "d-block"], [4, "ngIf"]],
  template: function AddNewPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3)(4, "div", 4)(5, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddNewPasswordComponent_Template_span_click_9_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddNewPasswordComponent_div_12_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddNewPasswordComponent_Template_span_click_18_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AddNewPasswordComponent_div_21_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AddNewPasswordComponent_div_22_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 1)(24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddNewPasswordComponent_Template_button_click_24_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \u0627\u0633\u062A\u0645\u0631\u0627\u0631 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.forgotPassForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.localization.Password);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", !ctx.showPassword ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx.controls.password.touched && ctx.controls.password.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx.showPassword ? "visibility" : "visibility_off");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.controls.password.touched && ctx.controls.password.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.localization.ConfirmPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", !ctx.showPassword ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx.controls.confirmPassword.touched && ctx.controls.confirmPassword.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx.showPassword ? "visibility" : "visibility_off");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.controls.confirmPassword.touched && ctx.controls.confirmPassword.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.controls.confirmPassword.touched && ctx.controls.confirmPassword.touched && (ctx.forgotPassForm.errors == null ? null : ctx.forgotPassForm.errors["isMatchedError"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.forgotPassForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 470px;\n  padding: 0px;\n  margin: auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvYWRkLW5ldy1wYXNzd29yZC9hZGQtbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHRTtFQUNFLFVBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NzBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1mbG9hdGluZzpmb2N1cy13aXRoaW4ge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 12331:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/auth/components/adding-commercial-register-number/adding-commercial-register-number.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddingCommercialRegisterNumberComponent": () => (/* binding */ AddingCommercialRegisterNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/registration/registration.service */ 66231);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9271);












function AddingCommercialRegisterNumberComponent_form_1_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.localization.requiredErrorMsg);
  }
}
function AddingCommercialRegisterNumberComponent_form_1_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.localization.pattern);
  }
}
function AddingCommercialRegisterNumberComponent_form_1_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.localization.maxLengthErrorMsg);
  }
}
function AddingCommercialRegisterNumberComponent_form_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddingCommercialRegisterNumberComponent_form_1_div_7_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddingCommercialRegisterNumberComponent_form_1_div_7_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddingCommercialRegisterNumberComponent_form_1_div_7_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.commercialRegistrationNo.errors == null ? null : ctx_r2.commercialRegistrationNo.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.commercialRegistrationNo.errors == null ? null : ctx_r2.commercialRegistrationNo.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.commercialRegistrationNo.errors == null ? null : ctx_r2.commercialRegistrationNo.errors["maxlength"]) || (ctx_r2.commercialRegistrationNo.errors == null ? null : ctx_r2.commercialRegistrationNo.errors["minlength"]));
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function AddingCommercialRegisterNumberComponent_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AddingCommercialRegisterNumberComponent_form_1_div_7_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddingCommercialRegisterNumberComponent_form_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.onClickOnVerification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.facilityForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.localization.commercialRegistrationNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx_r0.localization.commercialRegistrationNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx_r0.commercialRegistrationNo.touched && ctx_r0.commercialRegistrationNo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.commercialRegistrationNo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.facilityForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.localization.verification);
  }
}
function AddingCommercialRegisterNumberComponent_div_2_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", activity_r10.businessType, " ");
  }
}
function AddingCommercialRegisterNumberComponent_div_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddingCommercialRegisterNumberComponent_div_2_div_43_div_3_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.localization.facilityActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.facilityData.facilityBusinessTypes);
  }
}
function AddingCommercialRegisterNumberComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 16)(6, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18)(9, "div", 5)(10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 20)(13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 20)(21, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 22)(26, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 18)(29, "div", 5)(30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 20)(33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 5)(37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, AddingCommercialRegisterNumberComponent_div_2_div_43_Template, 4, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 10)(45, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddingCommercialRegisterNumberComponent_div_2_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.onClickOnPrevious());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddingCommercialRegisterNumberComponent_div_2_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.onClickOnNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.localization.alert, " ", ctx_r1.facilityData.commercialRegisterNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.startDateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 15, ctx_r1.facilityData.commercialRegisterStartDate, "MMM d, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.endDateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 18, ctx_r1.facilityData.commercialRegisterEndDate, "MMM d, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.facilityData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.facilityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.facilityData.facilityType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.facilityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.facilityData.facilityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.facilityData.facilityBusinessTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.next);
  }
}
class AddingCommercialRegisterNumberComponent {
  get commercialRegistrationNo() {
    return this.facilityForm.controls.commercialRegistrationNo;
  }
  constructor(_router, _toastrNotificatioService, _formBuilder, _registrationService, _userDataService, _storageService) {
    this._router = _router;
    this._toastrNotificatioService = _toastrNotificatioService;
    this._formBuilder = _formBuilder;
    this._registrationService = _registrationService;
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this.subscriptions = [];
    this.viewMode = false;
    this.facilityData = new src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.facilityResponse();
    this.userData = null;
    this.facilityForm = this._formBuilder.group({
      commercialRegistrationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]],
      socialNumber: []
    });
    this.localization = {
      commercialRegistrationNo: "رقم السجل التجاري",
      alert: "تم التحقق من رقم السجل التجاري   من قبل وزارة التجارة",
      title: "البيانات الخاصة بالسجل التجاري التي تم استرجاعها من قبل وزارة التجارة",
      startDateLabel: "تاريخ إصدار السجل التجاري",
      endDateLabel: "تاريخ إنتهاء السجل التجاري",
      facilityData: "بيانات المنشأة ",
      facilityType: "نوع المنشأة",
      facilityName: "اسم المنشأه",
      facilityActivities: "نشاط / انشطة المنشأه",
      requiredErrorMsg: 'حقل مطلوب',
      maxLengthErrorMsg: "طول الارقام يجب الا يزيد عن 20 رقم",
      verification: "تحقق",
      pattern: "accept no. only",
      next: "التالي",
      previous: "السابق"
    };
  }
  ngOnInit() {
    this.obseveCustomerData();
  }
  onClickOnVerification() {
    this.subscriptions.push(this._registrationService.FacilityRegister(this.commercialRegistrationNo.value, this.userData?.id).subscribe(facilityDataRes => {
      if (facilityDataRes) {
        this.viewMode = true;
        this.userData?.facilities && this.userData?.facilities.length > 0 ? this.userData.facilities[0] = facilityDataRes : {};
        this.facilityData = facilityDataRes;
        this._storageService.saveTokens(facilityDataRes.token);
        this.updateCustomerData(this.userData);
      }
    }));
  }
  // helper method
  updateCustomerData(userData) {
    this._userDataService.updateCustomerData(userData);
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
    }));
  }
  onClickOnNext() {
    // this._registrationService.nextClickedEventEmmitter.emit();
    this.showSuccess('تم التسجيل بنجاح');
    // this.navigateToDashboard();
    this.navigateToLogin();
  }
  navigateToDashboard() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}`]);
  }
  onClickOnPrevious() {
    this.viewMode = false;
  }
  navigateToLogin() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login}`);
  }
  showSuccess(msg) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
AddingCommercialRegisterNumberComponent.ɵfac = function AddingCommercialRegisterNumberComponent_Factory(t) {
  return new (t || AddingCommercialRegisterNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_2__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService));
};
AddingCommercialRegisterNumberComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddingCommercialRegisterNumberComponent,
  selectors: [["app-adding-commercial-register-number"]],
  decls: 3,
  vars: 2,
  consts: [["id", "form-commercialRegistrationComponent", 1, "commercialRegistrationComponent"], ["id", "form-facilityForm", 3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["id", "form-facilityForm", 3, "formGroup"], [1, "row", "row-gap-3"], [1, "col-12", "col-lg-6"], [1, "form-group"], ["for", "commercialRegistrationNo", 1, "form-label"], ["type", "text", "formControlName", "commercialRegistrationNo", "id", "control-commercialRegistrationNo", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "actions"], ["id", "btn-onClickOnVerification", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "invalid-feedback"], ["role", "alert", 1, "alert", "alert-success"], ["aria-hidden", "false", "aria-label", "Example check_circle icon", "fontIcon", "check_circle"], [1, "px-1"], [1, "tab-data-section", "mt-4"], [1, "title"], [1, "row", "row-gap-4"], [1, "key"], [1, "value"], [1, "icon", "material-icons"], [1, "tab-data-section"], [1, "title", "mb-2"], ["class", "col-12 col-lg-6", 4, "ngIf"], ["id", "btn-onClickOnPrevious", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "btn-onClickOnNext", "color", "primary", 1, "btn", "btn-primary", 3, "click"], ["class", "value", 4, "ngFor", "ngForOf"]],
  template: function AddingCommercialRegisterNumberComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddingCommercialRegisterNumberComponent_form_1_Template, 11, 9, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddingCommercialRegisterNumberComponent_div_2_Template, 49, 21, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.viewMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.viewMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  cursor: pointer;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-inline-end: none;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8rem;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.redir-link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.rega[_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #005257;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  column-gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #dae5e1;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: normal;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .form-title[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvYWRkaW5nLWNvbW1lcmNpYWwtcmVnaXN0ZXItbnVtYmVyL2FkZGluZy1jb21tZXJjaWFsLXJlZ2lzdGVyLW51bWJlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19zdGVwcGVyLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFFSSw2QkFBQTtBQ05KO0FEUUk7RUFDSSw2QkFBQTtBQ05SOztBRFVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDUEo7QURTSTtFQUNJLGVFcUNPO0VGbkNQLGNFS0c7QURiWDtBRFVRO0VBQ0ksY0VFRDtBRFZYOztBRGNJO0VBQ0ksdUJBQUE7QUNYUjs7QURlQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZUk7RUFDSSxVQUFBO0FDYlI7O0FEbUJJOztFQUNJLGVFTU87RUZMUCxjRXBDSTtBRHFCWjs7QURtQkE7RUFDSSxlQUFBO0FDaEJKO0FEa0JJO0VBRUkscUJBQUE7QUNqQlI7QURtQlE7RUFDSSwwQkFBQTtBQ2pCWjs7QURzQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEd0JRO0VBQ0ksY0U3REE7QUR1Q1o7O0FFdkRBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBRnlESjtBRXZESTtFQUNJLFVBQUE7QUZ5RFI7O0FFckRBO0VBQ0ksbUJBQUE7RUFDQSxlRHdDVztFQ3ZDWCxtQkFBQTtFQUVBLGNET087QURnRFg7QUVyREk7RUFDSSxjRElHO0FEbURYO0FFcERJO0VBQ0ksZ0JBQUE7QUZzRFI7O0FHakZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0FIbUZGO0FHakZFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCRk1RO0FEMkVaO0FHL0VJO0VBQ0UsY0ZNSztBRDJFWDtBRzdFRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBSCtFSjtBRzVFRTtFQUNFLGdCQUFBO0FIOEVKOztBR3pFRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUg0RUo7QUd6RUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBSDBFSjtBR3hFSTtFQUNFLGdCQUFBO0FIMEVOO0FHdEVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVGRFc7QUR3RWY7QUdwRUU7RUFDRSxlRkxXO0VFTVgsY0Z2RE87QUQ2SFg7QUduRUU7RUFDRSxlRlRXO0VFVVgsZ0JBQUE7RUFDQSxjRjlEUTtBRG1JWjtBR25FSTtFQUNFLGtCQUFBO0FIcUVOO0FHakVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVGeEJXO0VFeUJYLGdCQUFBO0VBQ0EsY0ZsRkk7QURvSlI7QUdoRUk7RUFDRSxrQkFBQTtBSGtFTjtBRy9ESTtFQUNFLGNGbkZNO0FEb0paO0FHOURJO0VBQ0UsZUFBQTtBSGdFTjtBRzlETTtFQUNFLGVGeENPO0FEd0dmIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZvcm0tZ3JvdXAge1xuLy8gICAgICYrLmZvcm0tZ3JvdXAge1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuLy8gICAgIH1cbi8vIH1cblxuLmZvcm0tbGFiZWwge1xuICAgIC8vIGNvbG9yOiByZ2JhKCRncmVlbmdyYXksIDAuNSk7XG4gICAgY29sb3I6IHJnYmEoJHRoZW1lLWRhcmssIDAuNzUpO1xuXG4gICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCR0aGVtZS1kYXJrLCAwLjc1KTtcbiAgICB9XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgLy8gY29sb3I6ICRncmVlbmdyYXk7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgICAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICA+LmZvcm0tY29udHJvbCB7XG4gICAgICAgIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xuICAgIH1cbn1cblxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xuXG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxufVxuXG4uZm9yZ290LXBhc3MtbGluayxcbi5yZWRpci1saW5rIHtcbiAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxufVxuXG4uZm9yZ290LXBhc3MtbGluayB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuXG4gICAgYSB7XG4gICAgICAgIC8vIGNvbG9yOiAjN2Q5YjhmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJlZGlyLWxpbmsge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYSB7XG4gICAgICAgIC8vIGNvbG9yOiAkZ3JlZW5ncmF5O1xuXG4gICAgICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoOSwgNTAsIDEwMiwgMC43NSk7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAuZm9ybS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDksIDUwLCAxMDIsIDAuNzUpO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnB1dC1ncm91cC10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIC5pbnB1dC1ncm91cC10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG5cbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItaW5saW5lLWVuZDogbm9uZTtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDhyZW07XG59XG4uYWN0aW9ucyAuYnRuIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmZvcmdvdC1wYXNzLWxpbmsgYSxcbi5yZWRpci1saW5rIGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuXG4uZm9yZ290LXBhc3MtbGluayB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5mb3Jnb3QtcGFzcy1saW5rIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9yZ290LXBhc3MtbGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5yZWRpci1saW5rIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLnJlZGlyLWxpbmsgYSB7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWU1ZTE7XG59XG4uYWN0aW9ucyAuYnRuIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLmZvcm0tdGl0bGUge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5mb3JtLXRpdGxlIH4gLmZvcm0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4udGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGFlNWUxO1xuXG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxufVxuXG4uZm9ybS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICBjb2xvcjogJHRoZW1lLWRhcms7XG5cbiAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cblxuICAgICZ+LmZvcm0tdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbn0iLCIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcblxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIC5lZGl0LWljb24ge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gIH1cblxuICAmfi50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG59XG5cbi50YWItZGF0YS1zZWN0aW9uIHtcbiAgJisudGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcbiAgfVxuXG4gIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBjb2xvcjogJGRhcmtncmF5O1xuICB9XG5cbiAgLmtleSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRsaWdodGdyYXk7XG5cbiAgICAmKy52YWx1ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAudmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC4yNXJlbTtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgICAmKy52YWx1ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAuZGVsZXRlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 70974:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/auth/components/adding-contact-info/adding-contact-info.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddingContactInfoComponent": () => (/* binding */ AddingContactInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var _models_registration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/registration.model */ 65091);
/* harmony import */ var _verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../verification-otp-popup/verification-otp-popup.component */ 65262);
/* harmony import */ var src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/enums/button-type.model */ 63650);
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/registration/registration.service */ 66231);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/yaqeen/yaqeen.service */ 12793);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var _services_nationality_nationality_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/nationality/nationality.service */ 45755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 85959);



















function AddingContactInfoComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r9.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_10_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.controls.userName.errors == null ? null : ctx_r0.controls.userName.errors["required"]);
  }
}
function AddingContactInfoComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r10.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_16_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.controls.shortName.errors == null ? null : ctx_r1.controls.shortName.errors["required"]);
  }
}
function AddingContactInfoComponent_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r12.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_17_div_5_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r11.controls.fullName.errors == null ? null : ctx_r11.controls.fullName.errors["required"]);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function AddingContactInfoComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddingContactInfoComponent_div_17_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.localization.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](3, _c0, ctx_r2.showValidation && ctx_r2.controls.fullName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.controls.fullName.errors);
  }
}
function AddingContactInfoComponent_div_18_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r14.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_18_div_5_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.controls.nationality.errors == null ? null : ctx_r13.controls.nationality.errors["required"]);
  }
}
function AddingContactInfoComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddingContactInfoComponent_div_18_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.localization.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](3, _c0, ctx_r3.showValidation && ctx_r3.controls.nationality.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.controls.nationality.errors);
  }
}
function AddingContactInfoComponent_div_19_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nationality_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", nationality_r17.nationalityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", nationality_r17.nationalityName, "");
  }
}
function AddingContactInfoComponent_div_19_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r18.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_19_div_7_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r16.controls.nationality.errors == null ? null : ctx_r16.controls.nationality.errors["required"]);
  }
}
function AddingContactInfoComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddingContactInfoComponent_div_19_option_6_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddingContactInfoComponent_div_19_div_7_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r4.localization.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](5, _c0, ctx_r4.showValidation && ctx_r4.controls.nationality.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", ctx_r4.localization.selectNationalErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r4.nationalities);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.controls.nationality.errors);
  }
}
function AddingContactInfoComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r19.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r20.localization.phoneNumberPattern);
  }
}
function AddingContactInfoComponent_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r21.localization.maxLengthErrorMsg, "");
  }
}
function AddingContactInfoComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_25_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddingContactInfoComponent_div_25_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AddingContactInfoComponent_div_25_div_3_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.controls.mobile1.errors == null ? null : ctx_r5.controls.mobile1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.controls.mobile1.errors == null ? null : ctx_r5.controls.mobile1.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r5.controls.mobile1.errors == null ? null : ctx_r5.controls.mobile1.errors["maxlength"]) || (ctx_r5.controls.mobile1.errors == null ? null : ctx_r5.controls.mobile1.errors["minlength"]));
  }
}
function AddingContactInfoComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r22.localization.phoneNumberPattern);
  }
}
function AddingContactInfoComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_31_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.controls.mobile2.errors == null ? null : ctx_r6.controls.mobile2.errors["pattern"]);
  }
}
function AddingContactInfoComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r23.localization.requiredErrorMsg);
  }
}
function AddingContactInfoComponent_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r24.localization.emailPattern);
  }
}
function AddingContactInfoComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddingContactInfoComponent_div_37_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddingContactInfoComponent_div_37_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.controls.email.errors == null ? null : ctx_r7.controls.email.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.controls.email.errors == null ? null : ctx_r7.controls.email.errors["pattern"]);
  }
}
function AddingContactInfoComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 5)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r8.localization.JobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx_r8.localization.JobTitle, "");
  }
}
class AddingContactInfoComponent {
  get controls() {
    return this.contactInfoForm.controls;
  }
  constructor(_router, _toastrNotificatioService, _formBuilder, _registrationService, _userDataService, _storageService, _yaqeenService, _popupService, _OTPService, _nationalityService) {
    this._router = _router;
    this._toastrNotificatioService = _toastrNotificatioService;
    this._formBuilder = _formBuilder;
    this._registrationService = _registrationService;
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this._yaqeenService = _yaqeenService;
    this._popupService = _popupService;
    this._OTPService = _OTPService;
    this._nationalityService = _nationalityService;
    this.userData = null;
    this.loginUserEnum = null;
    this.LoginUserTypeEnum = _models_login_model__WEBPACK_IMPORTED_MODULE_5__.LoginUserTypeEnum;
    this.RegistrationStatusEnum = src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus;
    this.contactInfoValues = new _models_registration_model__WEBPACK_IMPORTED_MODULE_2__.contactFE();
    this.subscriptions = [];
    this.showPassword = false;
    this.showValidation = false;
    this.isDelegator = false;
    this.yaqeenUserData = null;
    this.OTPInputValue = null;
    this.localization = {
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
      mobileNumberVerifiedSuccessfully: 'تم التحقق بنجاح من رقم الجوال ',
      maxLengthErrorMsg: 'طول الرقم يجب الا يزيد عن 10 ارقام',
      selectNationalErrorMsg: 'اختار جنسية',
      noArabicLettersError: 'كلمة السر يجب ألا تحتوي على حروف باللغة العربية',
      isMatchedError: 'كلمة المرور غير متطابقة'
    };
    this.contactInfoForm = this._formBuilder.group({
      userName: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      shortName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      password: ['123456'],
      // password: ['', [Validators.required, Validators.pattern(Configuration.validators.noArabicLetters)]],
      // confirmPassword: ['', [Validators.required, Validators.pattern(Configuration.validators.noArabicLetters)]],
      mobile1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.PhoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]],
      mobile2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.PhoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email]],
      fullName: [''],
      nationality: [''],
      jobTitle: [''],
      isDelegator: [false]
    }, {
      validators: this.validateAreEqual('password', 'confirmPassword')
    });
    this.nationalities = [];
    this.isContactFormUpdated = false;
  }
  ngOnInit() {
    this.observeUserTypeStatus();
    this.obseveCustomerData();
    this.observeRegistrationObjBs();
    this.observeYaqeenCustomer();
    this.observeOTPInputValue();
    this.observePopupEvents();
    this.observeRegistrationStatus();
  }
  observeOTPInputValue() {
    this.subscriptions.push(this._OTPService.getOTPInputValue().subscribe(res => {
      this.OTPInputValue = res;
      console.log('this.OTPInputValue', this.OTPInputValue);
    }));
  }
  validateAreEqual(password, confirmPassword) {
    return formGroup => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        formGroup.setErrors({
          isMatchedError: true
        });
        return {
          isMatchedError: true
        };
      } else {
        formGroup.setErrors(null);
        return null;
      }
    };
  }
  onClickOnNext() {
    this.contactInfoForm.markAllAsTouched();
    if (this.contactInfoForm.valid) {
      this.contactInfoValues = this.contactInfoForm.getRawValue();
      this.contactInfoValues.loginUserType = this.loginUserEnum;
      this.contactInfoValues.customerId = this.userData?.id ? this.userData.id : '00000000-0000-0000-0000-000000000000';
      this.contactInfoValues.facilityId = this.userData?.facilities && this.userData.facilities.length > 0 && this.userData.facilities[0].id ? this.userData.facilities[0].id : '';
      this.updateContactInfoDtoValues();
      this.openVerificationPopupForMobile1();
    } else {
      this.showValidation = true;
    }
  }
  showNotificationForEmailVerification() {
    this._toastrNotificatioService.showInfo(this.localization.pleaseVerifyYourMail);
  }
  getNationalities() {
    this._nationalityService.getNationalities().subscribe(data => {
      if (data) {
        this.nationalities = data;
      }
    });
  }
  openVerificationPopupForMobile1() {
    if (this.contactInfoForm.value.mobile1 && this.contactInfoForm.value.mobile1?.length > 0) {
      this.updateCustomerMobile(this.contactInfoForm.value.mobile1);
      this.subscriptions.push(this._OTPService.GenerateOTP(this.contactInfoForm.value.mobile1).subscribe(res => {
        this.openOTPDialog(this.contactInfoForm.value.mobile1, 'mobile1');
      }));
    }
  }
  openVerificationPopupForMobile2() {
    if (this.contactInfoForm.value.mobile2 && this.contactInfoForm.value.mobile2?.length > 0) {
      this.updateCustomerMobile(this.contactInfoForm.value.mobile2);
      this.subscriptions.push(this._OTPService.GenerateOTP(this.contactInfoForm.value.mobile2).subscribe(res => {
        this.openOTPDialog(this.contactInfoForm.value.mobile2, 'mobile2');
      }));
    }
  }
  updateCustomerMobile(mobile) {
    this._registrationService.customerMobile.next(mobile);
  }
  openOTPDialog(mobileNumber, id) {
    let popupData = {
      id: id,
      title: `${this.localization.pleaseVerifyYourMobile} ${mobileNumber}`,
      component: _verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_3__.VerificationOtpPopupComponent,
      buttons: [{
        icon: '',
        title: 'إلغاء',
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__.ButtonType.cancel,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openNotesDialog()
      }, {
        icon: '',
        title: 'تحقق',
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__.ButtonType.confirm,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openAssignEmployeeDialog()
      }]
    };

    this._popupService.updatePopupData(popupData);
  }
  observeUserTypeStatus() {
    this._registrationService.registrationStatus.subscribe(status => {
      if (status) {
        switch (status) {
          case this.RegistrationStatusEnum.finalBeneficiary:
            this.loginUserEnum = _models_login_model__WEBPACK_IMPORTED_MODULE_5__.LoginUserTypeEnum.finalBeneficiary;
            break;
          case this.RegistrationStatusEnum.isDelegator:
            this.loginUserEnum = _models_login_model__WEBPACK_IMPORTED_MODULE_5__.LoginUserTypeEnum.delegateWafiPartner;
            break;
        }
      }
    });
  }
  updateContact() {
    this.subscriptions.push(this._registrationService.updateContact(this.contactInfoValues).subscribe(res => {
      if (res) {
        console.log('updateContact');
        console.log(res);
        if (res.isDone) {
          if (!this.userData || this.userData.id == undefined || this.userData.id == '') {
            this.userData = new src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.customerResponse();
            this.userData.id = res?.data?.customerId;
            this.userData.fullName = this.contactInfoForm.value.fullName;
            this.userData.nationality = this.contactInfoForm.value.nationality;
            this._userDataService.updateCustomerData(this.userData);
          }
          //this.showNotificationForEmailVerification();
          if (this.loginUserEnum == _models_login_model__WEBPACK_IMPORTED_MODULE_5__.LoginUserTypeEnum.delegateWafiPartner) {
            this.showSuccess(res.message);
            this.navigateToLogin();
          } else if (this.loginUserEnum == _models_login_model__WEBPACK_IMPORTED_MODULE_5__.LoginUserTypeEnum.finalBeneficiary) {
            this.showSuccess('تم التسجيل بنجاح برجاء اعادة تسجيل الدخول للدخول للمنصة');
            this.navigateToLogin();
            // this.showSuccess('تم التسجيل بنجاح');
            // this._storageService.saveTokens(res.data.token);
            // this.navigateToContractdocumentation();
          } else {
            this._registrationService.nextClickedEventEmmitter.emit();
          }
        }
      }
    }));
  }
  updateCustomerData(userData) {
    this._userDataService.updateCustomerData(userData);
  }
  navigateToDashboard() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}`]);
  }
  navigateToContractdocumentation() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.contractdocumentation}`]);
  }
  // helper method
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
    }));
  }
  navigateToLogin() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login}`);
  }
  observeRegistrationObjBs() {
    this.subscriptions.push(this._registrationService.registrationObj.subscribe(res => {
      if (res) this.updateUsername(res);
    }));
  }
  updateUsername(res) {
    this.controls.userName.setValue(res.nIdNumber);
  }
  observeYaqeenCustomer() {
    this.subscriptions.push(this._yaqeenService.getYaqeenCustomer().subscribe(res => {
      if (res) {
        this.yaqeenUserData = res;
        // this.updateContactInfoForm();
        if (this.isContactFormUpdated == false) this.validateData();
      }
    }));
  }
  updateContactInfoDtoValues() {
    this.contactInfoValues.nidnumber = this.yaqeenUserData?.nidnumber;
    this.contactInfoValues.shortName = this.contactInfoForm.controls.shortName.value;
    this.contactInfoValues.fullName = this.contactInfoForm.controls.fullName.value;
    this.contactInfoValues.nationality = this.contactInfoForm.controls.nationality.value;
  }
  validateData() {
    this.isContactFormUpdated = true;
    if (this.yaqeenUserData?.fullName == null || this.yaqeenUserData?.fullName == '') {
      this.contactInfoForm.controls.shortName.enable();
      this.contactInfoForm.controls.shortName.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
      this.contactInfoForm.controls.fullName.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
      this.contactInfoForm.controls.nationality.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
      this.contactInfoForm.controls.shortName.updateValueAndValidity();
      this.contactInfoForm.controls.fullName.updateValueAndValidity();
      this.contactInfoForm.controls.nationality.updateValueAndValidity();
      this.getNationalities();
    } else {
      this.contactInfoForm.controls.userName.setValue(this.yaqeenUserData?.nidnumber);
      this.contactInfoForm.controls.shortName.setValue(this.yaqeenUserData?.shortName);
      this.contactInfoForm.controls.fullName.setValue(this.yaqeenUserData?.fullName);
      this.contactInfoForm.controls.nationality.setValue(this.yaqeenUserData?.nationality);
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
  updateContactInfoForm() {
    this.contactInfoForm.patchValue(this.yaqeenUserData);
  }
  showSuccess(msg) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  onClickOnPrevious() {
    this._registrationService.previousClickedEventEmmitter.emit();
  }
  observeRegistrationStatus() {
    this.subscriptions.push(this._registrationService.registrationStatus.subscribe(res => {
      this.isDelegator = res && res == src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus.isDelegator ? true : false;
      this.controls.isDelegator.setValue(this.isDelegator ? true : false);
    }));
  }
  // popup
  observePopupEvents() {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {
      console.log(res);
    }));
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      console.log(res);
      switch (res.id) {
        case 'mobile1':
          this.ValidateOTP(this.contactInfoForm.value.mobile1, this.OTPInputValue, 'mobile1');
          break;
        case 'mobile2':
          this.ValidateOTP(this.contactInfoForm.value.mobile2, this.OTPInputValue, 'mobile2');
          break;
      }
    }));
  }
  ValidateOTP(mobileNumber, OTP, id) {
    this.subscriptions.push(this._OTPService.ValidateOTP(mobileNumber, OTP).subscribe(res => {
      if (res) {
        this.closeDialog();
        this._toastrNotificatioService.showSuccess(this.localization.mobileNumberVerifiedSuccessfully);
        if (id == 'mobile1') {
          if (this.contactInfoForm.value.mobile2 && this.contactInfoForm.value.mobile2?.length > 0) {
            this.openVerificationPopupForMobile2();
          } else {
            this.updateContact();
          }
        } else if (id == 'mobile2') {
          this.updateContact();
        }
      }
    }));
  }
  closeDialog() {
    this._popupService.dismissDialog();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
AddingContactInfoComponent.ɵfac = function AddingContactInfoComponent_Factory(t) {
  return new (t || AddingContactInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_7__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_8__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_10__.YaqeenService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_11__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_12__.OTPService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_nationality_nationality_service__WEBPACK_IMPORTED_MODULE_13__.NationalityService));
};
AddingContactInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: AddingContactInfoComponent,
  selectors: [["app-adding-contact-info"]],
  decls: 43,
  vars: 35,
  consts: [["id", "form-contactInfoForm", 1, "contactInfoForm"], ["id", "form-contactInfoForm", 3, "formGroup"], [1, "form-title"], [1, "row", "row-gap-3"], [1, "col-12", "col-lg-6"], [1, "form-group"], ["for", "userName", 1, "form-label"], ["type", "text", "id", "control-userName", "formControlName", "userName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "firstName", 1, "form-label"], ["type", "text", "formControlName", "shortName", "id", "control-shortName", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "col-12 col-lg-6", 4, "ngIf"], ["for", "Mobile", 1, "form-label"], ["type", "text", "formControlName", "mobile1", "id", "control-mobile1", 1, "form-control", 3, "placeholder", "ngClass"], ["for", "Mobile2", 1, "form-label"], ["type", "text", "formControlName", "mobile2", "id", "control-mobile2", 1, "form-control", 3, "placeholder", "ngClass"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "control-email", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "form-group", 4, "ngIf"], [1, "actions"], ["id", "btn-onClickOnNext", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "fullName", 1, "form-label"], ["type", "text", "id", "control-fullName", "formControlName", "fullName", 1, "form-control", 3, "ngClass"], ["for", "nationality", 1, "form-label"], ["type", "text", "id", "control-nationality", "formControlName", "nationality", 1, "form-control", 3, "ngClass"], ["formControlName", "nationality", 1, "form-select", 3, "ngClass"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "jobTitle", 1, "form-label"], ["type", "text", "formControlName", "jobTitle", "id", "control-jobTitle", 1, "form-control", 3, "placeholder"]],
  template: function AddingContactInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, AddingContactInfoComponent_div_10_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 4)(12, "div", 5)(13, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, AddingContactInfoComponent_div_16_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, AddingContactInfoComponent_div_17_Template, 6, 5, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, AddingContactInfoComponent_div_18_Template, 6, 5, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, AddingContactInfoComponent_div_19_Template, 8, 7, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 4)(21, "div", 5)(22, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, AddingContactInfoComponent_div_25_Template, 4, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 4)(27, "div", 5)(28, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, AddingContactInfoComponent_div_31_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, AddingContactInfoComponent_div_37_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, AddingContactInfoComponent_div_39_Template, 4, 2, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 19)(41, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddingContactInfoComponent_Template_button_click_41_listener() {
        return ctx.onClickOnNext();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.contactInfoForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](25, _c0, ctx.showValidation && ctx.controls.userName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.userName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.shortName);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.shortName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](27, _c0, ctx.showValidation && ctx.controls.shortName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.shortName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.contactInfoValues.fullName == null || ctx.contactInfoValues.fullName == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.nationality.value != null && ctx.controls.nationality.value != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.nationality.value == null && ctx.controls.nationality.value == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.Mobile1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.Mobile1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](29, _c0, ctx.showValidation && ctx.controls.mobile1.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.mobile1.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.Mobile2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.Mobile2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](31, _c0, ctx.showValidation && ctx.controls.mobile2.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.mobile2.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.Email);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.Email, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](33, _c0, ctx.showValidation && ctx.controls.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.controls.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loginUserEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.next);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName],
  styles: [".form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  cursor: pointer;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-inline-end: none;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8rem;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.redir-link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.rega[_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #005257;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  column-gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #dae5e1;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: normal;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .form-title[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvYWRkaW5nLWNvbnRhY3QtaW5mby9hZGRpbmctY29udGFjdC1pbmZvLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3N0ZXBwZXItY29udGVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBRUksNkJBQUE7QUNOSjtBRFFJO0VBQ0ksNkJBQUE7QUNOUjs7QURVQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ1BKO0FEU0k7RUFDSSxlRXFDTztFRm5DUCxjRUtHO0FEYlg7QURVUTtFQUNJLGNFRUQ7QURWWDs7QURjSTtFQUNJLHVCQUFBO0FDWFI7O0FEZUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSjtBRGVJO0VBQ0ksVUFBQTtBQ2JSOztBRG1CSTs7RUFDSSxlRU1PO0VGTFAsY0VwQ0k7QURxQlo7O0FEbUJBO0VBQ0ksZUFBQTtBQ2hCSjtBRGtCSTtFQUVJLHFCQUFBO0FDakJSO0FEbUJRO0VBQ0ksMEJBQUE7QUNqQlo7O0FEc0JBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHdCUTtFQUNJLGNFN0RBO0FEdUNaOztBRXZEQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUZ5REo7QUV2REk7RUFDSSxVQUFBO0FGeURSOztBRXJEQTtFQUNJLG1CQUFBO0VBQ0EsZUR3Q1c7RUN2Q1gsbUJBQUE7RUFFQSxjRE9PO0FEZ0RYO0FFckRJO0VBQ0ksY0RJRztBRG1EWDtBRXBESTtFQUNJLGdCQUFBO0FGc0RSIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZvcm0tZ3JvdXAge1xuLy8gICAgICYrLmZvcm0tZ3JvdXAge1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuLy8gICAgIH1cbi8vIH1cblxuLmZvcm0tbGFiZWwge1xuICAgIC8vIGNvbG9yOiByZ2JhKCRncmVlbmdyYXksIDAuNSk7XG4gICAgY29sb3I6IHJnYmEoJHRoZW1lLWRhcmssIDAuNzUpO1xuXG4gICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCR0aGVtZS1kYXJrLCAwLjc1KTtcbiAgICB9XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgLy8gY29sb3I6ICRncmVlbmdyYXk7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgICAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICA+LmZvcm0tY29udHJvbCB7XG4gICAgICAgIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xuICAgIH1cbn1cblxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xuXG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxufVxuXG4uZm9yZ290LXBhc3MtbGluayxcbi5yZWRpci1saW5rIHtcbiAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxufVxuXG4uZm9yZ290LXBhc3MtbGluayB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuXG4gICAgYSB7XG4gICAgICAgIC8vIGNvbG9yOiAjN2Q5YjhmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJlZGlyLWxpbmsge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYSB7XG4gICAgICAgIC8vIGNvbG9yOiAkZ3JlZW5ncmF5O1xuXG4gICAgICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoOSwgNTAsIDEwMiwgMC43NSk7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAuZm9ybS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDksIDUwLCAxMDIsIDAuNzUpO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnB1dC1ncm91cC10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIC5pbnB1dC1ncm91cC10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG5cbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItaW5saW5lLWVuZDogbm9uZTtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDhyZW07XG59XG4uYWN0aW9ucyAuYnRuIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmZvcmdvdC1wYXNzLWxpbmsgYSxcbi5yZWRpci1saW5rIGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuXG4uZm9yZ290LXBhc3MtbGluayB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5mb3Jnb3QtcGFzcy1saW5rIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9yZ290LXBhc3MtbGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5yZWRpci1saW5rIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLnJlZGlyLWxpbmsgYSB7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWU1ZTE7XG59XG4uYWN0aW9ucyAuYnRuIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLmZvcm0tdGl0bGUge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5mb3JtLXRpdGxlIH4gLmZvcm0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhZTVlMTtcblxuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgIH1cbn1cblxuLmZvcm0tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG5cbiAgICAmfi5mb3JtLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 75049:
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/auth-layout/auth-layout.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 19228);
/* harmony import */ var _auth_topbar_auth_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-topbar/auth-topbar.component */ 50983);



const _c0 = ["*"];
class AuthLayoutComponent {
  constructor() {
    this.title = '';
    this.subtitle = '';
  }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
  return new (t || AuthLayoutComponent)();
};
AuthLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AuthLayoutComponent,
  selectors: [["app-auth-layout"]],
  inputs: {
    title: "title",
    subtitle: "subtitle"
  },
  ngContentSelectors: _c0,
  decls: 19,
  vars: 2,
  consts: [[1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "flex-fill"], [1, "page-header"], [1, "container"], [1, "page-header-content"], [1, "logo"], ["src", "assets/images/general/logo-rega-wide-white.svg", "alt", "", 1, "logo-img"], [1, "page-title"], [1, "title"], [1, "subtitle"], ["src", "assets/images/general/logo-2030.svg", "alt", ""], [1, "content"]],
  template: function AuthLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-auth-topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3)(16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.subtitle);
    }
  },
  dependencies: [_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _auth_topbar_auth_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AuthTopbarComponent],
  styles: [".page-header[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 6rem;\n  background-image: url(\"/assets/images/auth/auth-header-bg.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.page-header[_ngcontent-%COMP%]   .page-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 0.2rem;\n}\n.page-header[_ngcontent-%COMP%]   .page-header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .page-header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .page-header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .page-header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  font-size: 1.25rem;\n  font-weight: normal;\n  color: #f3f7f5;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: -3.5rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  background-color: white;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 13rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFFQSwrREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLTTs7RUFFRSxrQkFBQTtFQUNBLFlDakJBO0FEY1I7QUFNTTtFQUNFLGlCQ21ERTtBRHZEVjtBQU9NO0VBQ0UsbUJBQUE7RUFDQSxrQkM2Q0U7RUQ1Q0YsbUJBQUE7RUFDQSxjQUFBO0FBTFI7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQytCUTtFRDlCUix1QkN4Q007QUQrQlI7O0FBV0E7RUFDRSxZQUFBO0FBUkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZzogMi41cmVtIDAgNnJlbTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hdXRoL2F1dGgtaGVhZGVyLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblxuICAucGFnZS1oZWFkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAwLjJyZW07XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICAudGl0bGUsXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHNpemUteGw7XG4gICAgICB9XG5cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogJHNpemUtbGc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjZjNmN2Y1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC0zLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbn1cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiAxM3JlbTtcbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 50983:
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/auth-topbar/auth-topbar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthTopbarComponent": () => (/* binding */ AuthTopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86793);

class AuthTopbarComponent {
  constructor() {
    this.date = "";
    this.time = "";
    this.hijridate = "";
  }
  ngOnInit() {
    var value = new Date();
    this.date = new Intl.DateTimeFormat('AR-EG', {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric'
    }).format(value);
    let hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
      timeZone: 'UTC',
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric'
    }).format(value);
    this.hijridate = hijri.slice(8);
    this.time = value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds();
  }
}
AuthTopbarComponent.ɵfac = function AuthTopbarComponent_Factory(t) {
  return new (t || AuthTopbarComponent)();
};
AuthTopbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthTopbarComponent,
  selectors: [["app-auth-topbar"]],
  decls: 22,
  vars: 3,
  consts: [[1, "topbar"], [1, "container"], [1, "row"], [1, "col"], [1, "info"], [1, "date"], [1, "divider"], [1, "contact"], [1, "key"], [1, "material-icons", "fs-6"], [1, "value"], [1, "col-auto"], [1, "actions"]],
  template: function AuthTopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7)(14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0627\u0644\u0627\u062A\u0635\u0627\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "199011");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.date, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.hijridate, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.time, " \u00A0 \u0628\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u064A\u0627\u0636 ");
    }
  },
  styles: [".topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem;\n  font-size: 12px;\n  color: #093266;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 10px rgba(0, 31, 33, 0.03);\n}\n.rega[_nghost-%COMP%]   .topbar[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .topbar[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-inline-end: 2rem;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin-inline: 0.25rem;\n  font-size: 1.5rem;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]    + .contact[_ngcontent-%COMP%] {\n  padding-inline-start: 2rem;\n  border-inline-start: 2px solid #093266;\n}\n.rega[_nghost-%COMP%]   .topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]    + .contact[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]    + .contact[_ngcontent-%COMP%] {\n  border-color: #093266;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.topbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtdG9wYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL2F1dGgvY29tcG9uZW50cy9hdXRoLXRvcGJhci9hdXRoLXRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBRUEsZUNxRFc7RURuRFgsY0NvQk87RURsQlAsbUJBQUE7RUFDQSw4Q0FBQTtBRUZKO0FGSUk7RUFDSSxjQ2NHO0FDaEJYO0FGS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUVIUjtBRktRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUVIWjtBRktZO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBRUhoQjtBRk1ZO0VBQ0ksMEJBQUE7RUFFQSxzQ0FBQTtBRUxoQjtBRk9nQjtFQUNJLHFCQ1RUO0FDSVg7QUZVUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FFUlo7QUZZSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBRVZSIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogLjc1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoJGJsYWNrLCAuMDMpO1xuXG4gICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDJyZW07XG5cbiAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lOiAuMjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYrLmNvbnRhY3Qge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAycmVtO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1pbmxpbmUtc3RhcnQ6IDJweCBzb2xpZCAkZGFya2dyZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1pbmxpbmUtc3RhcnQ6IDJweCBzb2xpZCAkdGhlbWUtZGFyaztcblxuICAgICAgICAgICAgICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sdW1uLWdhcDogLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi50b3BiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwOTMyNjY7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDMxLCAzMywgMC4wMyk7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAudG9wYmFyIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4udG9wYmFyIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3BiYXIgLmluZm8gLmRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDJyZW07XG59XG4udG9wYmFyIC5pbmZvIC5kYXRlIC5kaXZpZGVyIHtcbiAgbWFyZ2luLWlubGluZTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4udG9wYmFyIC5pbmZvIC5kYXRlICsgLmNvbnRhY3Qge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMnJlbTtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogMnB4IHNvbGlkICMwOTMyNjY7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAudG9wYmFyIC5pbmZvIC5kYXRlICsgLmNvbnRhY3Qge1xuICBib3JkZXItY29sb3I6ICMwOTMyNjY7XG59XG4udG9wYmFyIC5pbmZvIC5jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xufVxuLnRvcGJhciAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 32391:
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/components/login-layout/login-layout.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginLayoutComponent": () => (/* binding */ LoginLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 19228);
/* harmony import */ var _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/pilot-launch-hint/pilot-launch-hint.component */ 48088);
/* harmony import */ var _auth_topbar_auth_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-topbar/auth-topbar.component */ 50983);




const _c0 = ["*"];
class LoginLayoutComponent {
  constructor() {
    this.baseURl = '../assets/images/';
    this.wafiLogo = 'layout/sidebar/logo-herizontal.png';
    this.title = 'منصة البيع على الخارطة';
    this.subtitle = 'يمكنك التسجيل في المنصة باستخدام النفاذ الوطني الموحد';
  }
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) {
  return new (t || LoginLayoutComponent)();
};
LoginLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginLayoutComponent,
  selectors: [["app-login-layout"]],
  ngContentSelectors: _c0,
  decls: 24,
  vars: 2,
  consts: [[1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "content", "flex-fill"], [1, "abstract", "top", "ar"], ["src", "assets/images/auth/abstract-ver.svg", "alt", ""], [1, "abstract", "bottom"], ["src", "assets/images/auth/abstract-hor.svg", "alt", ""], [1, "position-relative", "z-2", "h-100"], [1, "row", "g-0", "h-100"], [1, "col-12", "col-lg-6"], [1, "form-side"], [1, "logo"], [1, "bg-side"], [1, "titles"], [1, "title"], [1, "subtitle"], [1, "logos", "justify-content-end"], ["src", "assets/images/real-estate-contributions/general/logo-rega-wide-white.svg", "alt", "", 1, "logo-img"]],
  template: function LoginLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pilot-launch-hint")(2, "app-auth-topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8)(15, "div", 11)(16, "div", 12)(17, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.subtitle);
    }
  },
  dependencies: [_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_1__.PilotLaunchHintComponent, _auth_topbar_auth_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AuthTopbarComponent],
  styles: [".topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem;\n  font-size: 12px;\n  color: #093266;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 10px rgba(0, 31, 33, 0.03);\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-inline-end: 2rem;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin-inline: 0.25rem;\n  font-size: 1.5rem;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]    + .contact[_ngcontent-%COMP%] {\n  padding-inline-start: 2rem;\n  border-inline-start: 2px solid #093266;\n}\n.topbar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.topbar[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   .abstract[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n.content[_ngcontent-%COMP%]   .abstract.top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n.content[_ngcontent-%COMP%]   .abstract.top.ar[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.content[_ngcontent-%COMP%]   .abstract.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 50%;\n  transform: translateX(50%);\n}\n\n.form-side[_ngcontent-%COMP%], .bg-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.form-side[_ngcontent-%COMP%] {\n  padding: 6rem;\n}\n.form-side[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n  text-align: center;\n}\n.form-side[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 4rem;\n}\n\n.bg-side[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 2.25rem 1.75rem;\n  background-image: url(\"/assets/images/auth/auth-bg-rega.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n.bg-side[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.bg-side[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .bg-side[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.bg-side[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.bg-side[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.bg-side[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.bg-side[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 3rem;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 13rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2xvZ2luLWxheW91dC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4tbGF5b3V0L2xvZ2luLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBRUEsZUNxRFc7RURuRFgsY0NvQk87RURsQlAsbUJBQUE7RUFDQSw4Q0FBQTtBRUZKO0FGSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUVGUjtBRklRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUVGWjtBRklZO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBRUZoQjtBRktZO0VBQ0ksMEJBQUE7RUFFQSxzQ0FBQTtBRUpoQjtBRlFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUVOWjtBRlVJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FFUlI7O0FGWUE7RUFDSSxrQkFBQTtBRVRKO0FGV0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUVUUjtBRldRO0VBQ0ksTUFBQTtFQUNBLE9BQUE7QUVUWjtBRldZO0VBQ0ksVUFBQTtFQUNBLFFBQUE7QUVUaEI7QUZhUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUVYWjs7QUZnQkE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRWJKOztBRmdCQTtFQUNJLGFBQUE7QUViSjtBRmVJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBRWJSO0FGZVE7RUFDSSxnQkFBQTtBRWJaOztBRmtCQTtFQUNJLDhCQUFBO0VBQ0Esd0JBQUE7RUFFQSw2REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBRWhCSjtBRmtCSTtFQUNJLGdCQUFBO0FFaEJSO0FGa0JROztFQUVJLGtCQUFBO0FFaEJaO0FGbUJRO0VBQ0ksZUFBQTtFQUNBLFlDM0dKO0FDMEZSO0FGb0JRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FFbEJaO0FGc0JJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUVwQlI7QUZzQlE7RUFDSSxnQkFBQTtBRXBCWjs7QUF4R0E7RUFDRSxZQUFBO0FBMkdGIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogLjc1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoJGJsYWNrLCAuMDMpO1xuXG4gICAgLmluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAycmVtO1xuXG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZTogLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmKy5jb250YWN0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMnJlbTtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItaW5saW5lLXN0YXJ0OiAycHggc29saWQgJGRhcmtncmVlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiAycHggc29saWQgJHRoZW1lLWRhcms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYWJzdHJhY3Qge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgJi50b3Age1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgJi5hciB7XG4gICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYm90dG9tIHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0tc2lkZSxcbi5iZy1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybS1zaWRlIHtcbiAgICBwYWRkaW5nOiA2cmVtO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDRyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iZy1zaWRlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMi4yNXJlbSAxLjc1cmVtO1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hdXRoL2F1dGgtYmctcmVnYS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblxuICAgIC50aXRsZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIC41KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sb2dvcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogM3JlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L2xvZ2luLWxheW91dFwiO1xuLmxvZ28taW1nIHtcbiAgd2lkdGg6IDEzcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 55831:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/auth/components/verification-otp-popup-by-username/verification-otp-popup-by-username.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationOtpPopupByUsernameComponent": () => (/* binding */ VerificationOtpPopupByUsernameComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 45032);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33044);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76179);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 38810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 22510);
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login/login.service */ 56368);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/otp-input/otp-input.component */ 65298);








class VerificationOtpPopupByUsernameComponent {
  constructor(_loginService, _OTPService, _popupService, _toastrNotificatioService) {
    this._loginService = _loginService;
    this._OTPService = _OTPService;
    this._popupService = _popupService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.subscriptions = [];
    this.userName = null;
    this.localization = {
      sendNewOtp: 'ارسال الكود مرة اخري',
      newOtpSentSuccessfully: ' تم إرسال رمز تحقق جديد'
    };
    this.min = 60;
    this.intervalBySec$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(1000);
    this.sendNewOtpIsDisabled = true;
  }
  ngOnInit() {
    this.obseveCustomerMobile();
    this.createInteraval();
  }
  obseveCustomerMobile() {
    this.subscriptions.push(this._loginService.userName.subscribe(res => {
      this.userName = res;
      this.sendNewOtp();
    }));
  }
  sendNewOtp() {
    this.subscriptions.push(this._OTPService.GenerateOTPByUserName({
      userName: this.userName ?? '',
      userType: _models_login_model__WEBPACK_IMPORTED_MODULE_0__.UserType.client
    }).subscribe(res => {
      this.showSuccess(this.localization.newOtpSentSuccessfully);
      this.clearInterval();
      this.createInteraval();
    }));
  }
  showSuccess(msg) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  createInteraval() {
    this.intervalBySecSubscription = this.intervalBySec$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
      console.log('before ', this.min ? this.min : ''), console.log('button disabled');
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.sendNewOtpIsDisabled = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.min = this.min - 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => console.log('after ', this.min ? this.min : '')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.iif)(() => this.min === 0, 'test', 'test2')), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.every)(e => this.min > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => console.log('button enabled')), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.sendNewOtpIsDisabled = false)).subscribe();
  }
  clearInterval() {
    this.intervalBySecSubscription.unsubscribe();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
VerificationOtpPopupByUsernameComponent.ɵfac = function VerificationOtpPopupByUsernameComponent_Factory(t) {
  return new (t || VerificationOtpPopupByUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_2__.OTPService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__.ToastrNotificatioService));
};
VerificationOtpPopupByUsernameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: VerificationOtpPopupByUsernameComponent,
  selectors: [["app-verification-otp-popup-by-username"]],
  decls: 13,
  vars: 3,
  consts: [[1, "verification-otp"], [1, "image"], ["src", "/assets/images/auth/otp-icon.svg", "alt", ""], [1, "title"], [1, "text"], [1, "d-flex", "align-items-center", "column-gap-3"], ["id", "btn-sendNewOtp", 1, "btn", "btn-link", "text-dark", 3, "disabled", "click"], [1, "remaining"]],
  template: function VerificationOtpPopupByUsernameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\u0625\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " \u0645\u0646 \u0641\u0636\u0644\u0643 \u062A\u0641\u0642\u062F \u062C\u0648\u0627\u0644\u0643 ,\u0644\u0642\u062F \u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0639\u0644\u0649 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u0627\u0644\u0645\u0633\u062C\u0644 \u0644\u062F\u064A\u0646\u0627 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "app-otp-input");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerificationOtpPopupByUsernameComponent_Template_button_click_9_listener() {
        return ctx.sendNewOtp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.sendNewOtpIsDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.localization.sendNewOtp, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.min, " ");
    }
  },
  dependencies: [_shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_5__.OTPInputComponent],
  styles: [".verification-otp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvdmVyaWZpY2F0aW9uLW90cC1wb3B1cC1ieS11c2VybmFtZS92ZXJpZmljYXRpb24tb3RwLXBvcHVwLWJ5LXVzZXJuYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcmlmaWNhdGlvbi1vdHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 65262:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/auth/components/verification-otp-popup/verification-otp-popup.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationOtpPopupComponent": () => (/* binding */ VerificationOtpPopupComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45032);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33044);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76179);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 38810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 22510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/registration/registration.service */ 66231);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/otp-input/otp-input.component */ 65298);







class VerificationOtpPopupComponent {
  constructor(_registrationService, _OTPService, _popupService, _toastrNotificatioService) {
    this._registrationService = _registrationService;
    this._OTPService = _OTPService;
    this._popupService = _popupService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.subscriptions = [];
    this.customerMobile = null;
    this.OTPInputValue = null;
    this.localization = {
      sendNewOtp: "ارسال الكود مرة اخري",
      newOtpSentSuccessfully: " تم إرسال رمز تحقق جديد"
    };
    this.min = 60;
    this.intervalBySec$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(1000);
    this.sendNewOtpIsDisabled = true;
  }
  ngOnInit() {
    this.obseveCustomerMobile();
    this.observeOTPInputValue();
    this.createInteraval();
  }
  obseveCustomerMobile() {
    this.subscriptions.push(this._registrationService.customerMobile.subscribe(res => {
      this.customerMobile = res;
      console.log("this.customerMobile", this.customerMobile);
    }));
  }
  observeOTPInputValue() {
    this.subscriptions.push(this._OTPService.getOTPInputValue().subscribe(res => {
      this.OTPInputValue = res;
      console.log("this.OTPInputValue", this.OTPInputValue);
    }));
  }
  sendNewOtp() {
    this.subscriptions.push(this._OTPService.GenerateOTP(this.customerMobile).subscribe(res => {
      if (res) {
        this.showSuccess(this.localization.newOtpSentSuccessfully);
        this.clearInterval();
        this.createInteraval();
      } else {
        this._toastrNotificatioService.showError('حدث خطا اثناء ارسال كود التحقق برجاء المحاولة مرة أخرى');
      }
    }));
  }
  showSuccess(msg) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  createInteraval() {
    this.intervalBySecSubscription = this.intervalBySec$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
      console.log("before ", this.min ? this.min : ""), console.log("button disabled");
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.sendNewOtpIsDisabled = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => this.min = this.min - 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => console.log("after ", this.min ? this.min : "")), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.iif)(() => this.min === 0, "test", "test2")), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.every)(e => this.min > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => console.log("button enabled")), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.sendNewOtpIsDisabled = false)).subscribe();
  }
  clearInterval() {
    this.intervalBySecSubscription.unsubscribe();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
VerificationOtpPopupComponent.ɵfac = function VerificationOtpPopupComponent_Factory(t) {
  return new (t || VerificationOtpPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_0__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_1__.OTPService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__.ToastrNotificatioService));
};
VerificationOtpPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: VerificationOtpPopupComponent,
  selectors: [["app-verification-otp-popup"]],
  decls: 13,
  vars: 4,
  consts: [[1, "verification-otp"], [1, "image"], ["src", "/assets/images/auth/otp-icon.svg", "alt", ""], [1, "title"], [1, "text"], [1, "d-flex", "align-items-center", "column-gap-3"], ["id", "btn-sendNewOtp", 1, "btn", "btn-link", "text-dark", 3, "disabled", "click"], [1, "remaining"]],
  template: function VerificationOtpPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u0625\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-otp-input");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VerificationOtpPopupComponent_Template_button_click_9_listener() {
        return ctx.sendNewOtp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u0645\u0646 \u0641\u0636\u0644\u0643 \u062A\u0641\u0642\u062F \u062C\u0648\u0627\u0644\u0643 ,\u0644\u0642\u062F \u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0631\u0642\u0645 \u062C\u0648\u0627\u0644 - ", ctx.customerMobile, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.sendNewOtpIsDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.localization.sendNewOtp);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.min, " ");
    }
  },
  dependencies: [_shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_4__.OTPInputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.verification-otp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  row-gap: 1rem;\n}\n.verification-otp[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.verification-otp[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #667676;\n}\n.verification-otp[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #353B3B;\n  font-size: 1rem;\n}\n.verification-otp[_ngcontent-%COMP%]   .remaining[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvdmVyaWZpY2F0aW9uLW90cC1wb3B1cC92ZXJpZmljYXRpb24tb3RwLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFFSSxjQ1dHO0FEYlg7QUFLSTtFQUNJLGlCQUFBO0VBQ0EsY0NiRztBRFVYO0FBTUk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFKUjtBQU9JO0VBQ0ksY0M1QkQ7QUR1QlAiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnZlcmlmaWNhdGlvbi1vdHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICByb3ctZ2FwOiAxcmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAgIH1cblxuICAgIC5idG4tbGluayB7XG4gICAgICAgIC0tYnMtYnRuLWNvbG9yOiAjeyRkYXJrfTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5yZW1haW5pbmcge1xuICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 24750:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/auth/components/verification-username/verification-username.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationUsernameComponent": () => (/* binding */ VerificationUsernameComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/forget-password/forget-password.service */ 26667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);






function VerificationUsernameComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VerificationUsernameComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerificationUsernameComponent_div_12_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.usernameControl.touched && (ctx_r0.usernameControl.errors == null ? null : ctx_r0.usernameControl.errors["required"]));
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class VerificationUsernameComponent {
  constructor(_formBuilder, _forgetpasswordServices) {
    this._formBuilder = _formBuilder;
    this._forgetpasswordServices = _forgetpasswordServices;
    this.subscriptions = [];
    this.forgotPassForm = this._formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  get usernameControl() {
    return this.forgotPassForm.controls['username'];
  }
  ngOnInit() {}
  onSubmit() {
    this.generateOPT = {
      userName: this.forgotPassForm.value.username,
      userType: _models_login_model__WEBPACK_IMPORTED_MODULE_0__.UserType.client
    };
    this.subscriptions.push(this._forgetpasswordServices.forgetPasswordGeneratOTP(this.generateOPT).subscribe(res => {
      if (res.isDone) this._forgetpasswordServices.userName$.next(this.generateOPT);
      this._forgetpasswordServices.nextClickedEventEmmitter.emit(0);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
VerificationUsernameComponent.ɵfac = function VerificationUsernameComponent_Factory(t) {
  return new (t || VerificationUsernameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordService));
};
VerificationUsernameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: VerificationUsernameComponent,
  selectors: [["app-verification-username"]],
  decls: 16,
  vars: 6,
  consts: [["id", "form-signin", 1, "form-signin"], [1, "text-center"], ["src", "assets/images/auth/ForgotPass.svg", "alt", "", "width", "337", "height", "365", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal", 2, "color", "#076f42"], [1, "h5", "mb-3", "form-label"], ["id", "form-forgotPassForm", 3, "formGroup"], [1, "form-group", "mb-4"], ["for", "username"], ["id", "control-username", "formControlName", "username", "id", "username", "placeholder", " \u0623\u0643\u062A\u0628 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "btn-onSubmit", 1, "w-50", "btn", "btn-primary", 3, "disabled", "click"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function VerificationUsernameComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u061F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0646\u0623\u0645\u0644 \u0627\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0644\u0627\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5)(8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VerificationUsernameComponent_div_12_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1)(14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerificationUsernameComponent_Template_button_click_14_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u0627\u0633\u062A\u0645\u0631\u0627\u0631 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.forgotPassForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.usernameControl.touched && ctx.usernameControl.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.usernameControl.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.forgotPassForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 470px;\n  padding: 0px;\n  margin: auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvdmVyaWZpY2F0aW9uLXVzZXJuYW1lL3ZlcmlmaWNhdGlvbi11c2VybmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0U7RUFDRSxVQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDcwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIFxuICAuZm9ybS1zaWduaW4gLmZvcm0tZmxvYXRpbmc6Zm9jdXMtd2l0aGluIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 65091:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/models/registration.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactFE": () => (/* binding */ contactFE)
/* harmony export */ });
// Contact
class contactFE {
  constructor() {
    this.userName = '';
    this.shortName = '';
    this.password = '';
    this.customerId = '';
    this.loginUserType = null;
    this.facilityId = '';
    this.mobile1 = '';
    this.mobile2 = '';
    this.email = '';
    this.jobTitle = '';
    // Website?: string = '';
    this.nidnumber = "";
    this.fullName = "";
    this.nationality = "";
    this.isDelegator = false;
  }
}

/***/ }),

/***/ 11319:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/complaint-request-from-login/complaint-request-from-login.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintRequestFromLoginComponent": () => (/* binding */ ComplaintRequestFromLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login/login.service */ 56368);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/file-uploader/file-uploader.component */ 37985);









function ComplaintRequestFromLoginComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const complaintRequestType_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", complaintRequestType_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", complaintRequestType_r10.name, " ");
  }
}
function ComplaintRequestFromLoginComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_16_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.controls.complaintRequestTypeId.errors == null ? null : ctx_r1.controls.complaintRequestTypeId.errors["required"]);
  }
}
function ComplaintRequestFromLoginComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_22_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.controls.customerName.errors == null ? null : ctx_r2.controls.customerName.errors["required"]);
  }
}
function ComplaintRequestFromLoginComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_28_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.controls.nIDNumber.errors == null ? null : ctx_r3.controls.nIDNumber.errors["required"]);
  }
}
function ComplaintRequestFromLoginComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_34_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.controls.facilityName.errors == null ? null : ctx_r4.controls.facilityName.errors["required"]);
  }
}
function ComplaintRequestFromLoginComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_40_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.controls.commercialRegisterNumber.errors == null ? null : ctx_r5.controls.commercialRegisterNumber.errors["required"]);
  }
}
function ComplaintRequestFromLoginComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_46_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u062F\u062E\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_46_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ComplaintRequestFromLoginComponent_div_46_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.controls.email.errors == null ? null : ctx_r6.controls.email.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.controls.email.errors == null ? null : ctx_r6.controls.email.errors["pattern"]);
  }
}
function ComplaintRequestFromLoginComponent_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_52_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u062F\u062E\u0644 \u0631\u0642\u0645 \u062C\u0648\u0627\u0644 \u0635\u062D\u064A\u062D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_52_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0637\u0648\u0644 \u0627\u0644\u0631\u0642\u0645 \u064A\u062C\u0628 \u0627\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 10 \u0627\u0631\u0642\u0627\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_52_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ComplaintRequestFromLoginComponent_div_52_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ComplaintRequestFromLoginComponent_div_52_div_3_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["maxlength"]) || (ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["minlength"]));
  }
}
function ComplaintRequestFromLoginComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ComplaintRequestFromLoginComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComplaintRequestFromLoginComponent_div_58_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.controls.description.errors == null ? null : ctx_r8.controls.description.errors["required"]);
  }
}
function ComplaintRequestFromLoginComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
class ComplaintRequestFromLoginComponent {
  constructor(_loginService, _formBuilder, _router, _toastrNotificationService) {
    this._loginService = _loginService;
    this._formBuilder = _formBuilder;
    this._router = _router;
    this._toastrNotificationService = _toastrNotificationService;
    this.subscriptions = [];
    this.complaintRequestTypes = [];
    this.showValidation = false;
    this.complaintRequestFileList = [];
    this.multiFilesUploaderData = {
      multiple: true
    };
    this.loginLink = '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login;
    this.complaintRequestForm = this._formBuilder.group({
      customerName: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      nIDNumber: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      facilityName: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      commercialRegisterNumber: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      email: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      phone: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.PhoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]),
      description: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      complaintRequestTypeId: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
  }
  get controls() {
    return this.complaintRequestForm.controls;
  }
  ngOnInit() {
    this.getComplaintRequestTypes();
  }
  getComplaintRequestTypes() {
    this.subscriptions.push(this._loginService.GetComplaintRequestTypes().subscribe(res => {
      this.complaintRequestTypes = res;
    }));
  }
  save() {
    if (this.complaintRequestForm?.invalid) {
      this.showValidation = true;
      return;
    }
    this.complaintRequest = this.complaintRequestForm.value;
    this.complaintRequest.complaintRequestTypeId = Number(this.complaintRequest.complaintRequestTypeId);
    this.complaintRequest.ComplaintRequestFiles = this.complaintRequestFileList;
    if (!this.complaintRequest.ComplaintRequestFiles || this.complaintRequest.ComplaintRequestFiles.length == 0) {
      this._toastrNotificationService.showError("نأمل رفع ملفات الشكوى او البلاغ");
      return;
    }
    this.createComplaintRequest();
  }
  createComplaintRequest() {
    this.subscriptions.push(this._loginService.CreateComplaintRequest(this.complaintRequest).subscribe(res => {
      if (res && res.isDone) {
        this._toastrNotificationService.showSuccess("تم تقديم الشكوى او البلاغ");
        this.complaintRequestForm.reset();
        this.complaintRequestFileList = [];
        this.showValidation = false;
      } else {
        this._toastrNotificationService.showError("لم يتم تقديم الشكوى او البلاغ");
      }
    }));
  }
  onExistComplaintFilesUploaded(filesData) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.complaintRequestFileList) this.complaintRequestFileList = [];
    filesData.eventRes.data.forEach(data => {
      this.complaintRequestFileList.push({
        complaintFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        complaintRequestId: '00000000-0000-0000-0000-000000000000'
      });
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
ComplaintRequestFromLoginComponent.ɵfac = function ComplaintRequestFromLoginComponent_Factory(t) {
  return new (t || ComplaintRequestFromLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_2__.ToastrNotificatioService));
};
ComplaintRequestFromLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ComplaintRequestFromLoginComponent,
  selectors: [["app-complaint-request-from-login"]],
  decls: 71,
  vars: 39,
  consts: [[1, "landing"], [1, "logo"], ["src", "/assets/images/real-estate-contributions/general/logo-rega-wide-white.svg", "alt", "", 1, "logo-img"], [1, "content"], [1, "title", "mb-5"], ["id", "form-complaintRequestForm", 1, "complaintRequestForm"], ["id", "form-complaintRequestForm", 3, "formGroup"], [1, "row"], [1, "col-md-6", "col-lg-6"], [1, "form-group", "mb-4"], ["for", "complaintRequestTypeId", 1, "form-label"], ["formControlName", "complaintRequestTypeId", 1, "form-select", 3, "ngClass"], ["label", "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "customerName", 1, "form-label"], ["type", "text", "id", "control-customerName", "formControlName", "customerName", "placeholder", "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A", 1, "form-control", 3, "ngClass"], ["for", "firstName", 1, "form-label"], ["type", "text", "formControlName", "nIDNumber", "id", "control-nIDNumber", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629", 1, "form-control", 3, "ngClass"], ["for", "facilityName", 1, "form-label"], ["type", "text", "id", "control-facilityName", "formControlName", "facilityName", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629", 1, "form-control", 3, "ngClass"], ["for", "commercialRegisterNumber", 1, "form-label"], ["type", "text", "id", "control-commercialRegisterNumber", "formControlName", "commercialRegisterNumber", "placeholder", "\u0631\u0642\u0645 \u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A", 1, "form-control", 3, "ngClass"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "control-email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control", 3, "ngClass"], ["for", "Mobile", 1, "form-label"], ["type", "text", "formControlName", "phone", "id", "control-phone", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644", 1, "form-control", 3, "ngClass"], ["for", "description", 1, "form-label"], ["type", "text", "formControlName", "description", "id", "control-description", 1, "form-control", 3, "ngClass"], [1, "key"], [3, "data", "fileUploaded"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "form-group", "mt-5"], [1, "actions"], ["id", "btn-save", 1, "btn", "btn-primary", 3, "click"], ["id", "link-fogotPassword", 1, "mx-5", 3, "routerLink"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "d-block"]],
  template: function ComplaintRequestFromLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628 \u0634\u0643\u0648\u0649 \u0623\u0648 \u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "form", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ComplaintRequestFromLoginComponent_option_15_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ComplaintRequestFromLoginComponent_div_16_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ComplaintRequestFromLoginComponent_div_22_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8)(24, "div", 9)(25, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ComplaintRequestFromLoginComponent_div_28_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 8)(30, "div", 9)(31, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ComplaintRequestFromLoginComponent_div_34_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 8)(36, "div", 9)(37, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u0631\u0642\u0645 \u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ComplaintRequestFromLoginComponent_div_40_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 8)(42, "div", 9)(43, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ComplaintRequestFromLoginComponent_div_46_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 8)(48, "div", 9)(49, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ComplaintRequestFromLoginComponent_div_52_Template, 4, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 8)(54, "div", 9)(55, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\u0648\u0635\u0641 \u0627\u0644\u0628\u0644\u0627\u063A \u0627\u0648 \u0627\u0644\u0634\u0643\u0648\u0649");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "textarea", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, ComplaintRequestFromLoginComponent_div_58_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 8)(60, "div", 9)(61, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "app-file-uploader", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileUploaded", function ComplaintRequestFromLoginComponent_Template_app_file_uploader_fileUploaded_63_listener($event) {
        return ctx.onExistComplaintFilesUploaded($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, ComplaintRequestFromLoginComponent_div_64_Template, 2, 0, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 32)(66, "div", 33)(67, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComplaintRequestFromLoginComponent_Template_button_click_67_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " \u0627\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\u0627\u0644\u0631\u062C\u0648\u0639 \u0644\u062A\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.complaintRequestForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c0, ctx.showValidation && ctx.controls.complaintRequestTypeId.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.complaintRequestTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.complaintRequestTypeId.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c0, ctx.showValidation && ctx.controls.customerName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.customerName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, ctx.showValidation && ctx.controls.nIDNumber.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.nIDNumber.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c0, ctx.showValidation && ctx.controls.facilityName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.facilityName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c0, ctx.showValidation && ctx.controls.commercialRegisterNumber.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.commercialRegisterNumber.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](31, _c0, ctx.showValidation && ctx.controls.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](33, _c0, ctx.showValidation && ctx.controls.phone.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.phone.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](35, _c0, ctx.showValidation && ctx.controls.description.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.description.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.multiFilesUploaderData);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (!ctx.complaintRequestFileList || ctx.complaintRequestFileList.length == 0) && ctx.showValidation);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](37, _c1, ctx.loginLink));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__.FileUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.landing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 2rem;\n  min-height: 100%;\n  padding: 2rem;\n  background-image: url(\"/assets/images/content/landing/landing-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n    padding: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n@media (min-width: 992px) {\n  .landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n.landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 4.75rem;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 2.5rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 3rem;\n  background-color: white;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: normal;\n  color: #353B3B;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 4.75rem;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  --bs-card-spacer-x: 3rem;\n  --bs-card-spacer-y: 2rem;\n  width: 20rem;\n  min-height: 22.5rem;\n  margin-top: 2rem;\n  box-shadow: 0px 30px 45px 0px rgba(53, 59, 59, 0.1);\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #005257;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    --bs-card-spacer-x: 1rem;\n    --bs-card-spacer-y: 1rem;\n    width: 100%;\n    min-height: 14rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: auto;\n  color: #001F21;\n  font-size: 1.5rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-border-radius: 0.5rem;\n  margin-top: auto;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.wafi[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/content/landing/abstract-wafi.svg\");\n  background-repeat: no-repeat;\n  background-position: 150% center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.rega[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/content/landing/abstract-reca.svg\");\n  background-repeat: no-repeat;\n  background-position: 50% center;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 13rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2NvbXBsYWludC1yZXF1ZXN0LWZyb20tbG9naW4vY29tcGxhaW50LXJlcXVlc3QtZnJvbS1sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNFQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBWEY7QUFhRTtFQVpGO0lBYUksYUFBQTtJQUNBLGFBQUE7RUFWRjtBQUNGO0FBWUU7O0VBRUUsbUJBQUE7QUFWSjtBQVlJO0VBSkY7O0lBS0ksVUFBQTtFQVJKO0FBQ0Y7QUFZSTtFQUNFLG1CQUFBO0FBVk47QUFXTTtFQUZGO0lBR0ksa0JBQUE7RUFSTjtBQUNGO0FBWUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQ25ESTtBRHlDUjtBQVlJO0VBTEY7SUFNSSxXQUFBO0lBQ0EsYUFBQTtFQVRKO0FBQ0Y7QUFXSTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0MvREM7QURzRFA7QUFZSTtFQUNFLGlCQUFBO0FBVk47QUFhSTtFQUNFLGdCQUFBO0FBWE47QUFjSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWNNO0VBTkY7SUFPSSxzQkFBQTtJQUNBLGFBQUE7RUFYTjtBQUNGO0FBYU07RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxtREFBQTtBQWJSO0FBZVE7RUFDRSx5QkFBQTtBQWJWO0FBZ0JRO0VBZEY7SUFlSSx3QkFBQTtJQUNBLHdCQUFBO0lBRUEsV0FBQTtJQUNBLGlCQUFBO0VBZFI7QUFDRjtBQWdCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFkVjtBQWdCVTtFQUNFLGdCQUFBO0VBQ0EsY0NwSEo7RURxSEksaUJBQUE7QUFkWjtBQWlCVTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQWZaO0FBbUJRO0VBQ0UseUVBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FBakJWO0FBb0JRO0VBQ0UseUVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBbEJWOztBQXdCQTtFQUNFLFlBQUE7QUFyQkYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbi8vIEBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC90YWItY29udGVudFwiO1xuLy8gQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L2Zvcm0tY29uZW50XCI7XG5cbi8vIDpob3N0IHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG5cbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYW5kaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMnJlbTtcblxuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb250ZW50L2xhbmRpbmcvbGFuZGluZy1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICByb3ctZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAubG9nbyxcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiA0Ljc1cmVtO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAudGl0bGUsXG4gICAgLm9yIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cblxuICAgIC5vciB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuICAgIC5jYXJkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sdW1uLWdhcDogNC43NXJlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHJvdy1nYXA6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgLS1icy1jYXJkLXNwYWNlci14OiAzcmVtO1xuICAgICAgICAtLWJzLWNhcmQtc3BhY2VyLXk6IDJyZW07XG5cbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMi41cmVtO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzMHB4IDQ1cHggMHB4IHJnYmEoJGRhcmssIDAuMSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAtLWJzLWNhcmQtc3BhY2VyLXg6IDFyZW07XG4gICAgICAgICAgLS1icy1jYXJkLXNwYWNlci15OiAxcmVtO1xuXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAtLWJzLWJ0bi1wYWRkaW5nLXk6IDAuNXJlbTtcbiAgICAgICAgICAgIC0tYnMtYnRuLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi53YWZpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb250ZW50L2xhbmRpbmcvYWJzdHJhY3Qtd2FmaS5zdmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNTAlIGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYucmVnYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9sYW5kaW5nL2Fic3RyYWN0LXJlY2Euc3ZnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmxvZ28taW1nIHtcbiAgd2lkdGg6IDEzcmVtO1xufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 63713:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/create-new-password/create-new-password.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewPasswordComponent": () => (/* binding */ CreateNewPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/auth-layout/auth-layout.component */ 75049);







function CreateNewPasswordComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0645\u0637\u0644\u0648\u0628\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateNewPasswordComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateNewPasswordComponent_div_11_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.passwordControl.touched && (ctx_r0.passwordControl.errors == null ? null : ctx_r0.passwordControl.errors["required"]));
  }
}
function CreateNewPasswordComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0645\u0637\u0644\u0648\u0628\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateNewPasswordComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateNewPasswordComponent_div_16_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.confirmPasswordControl.errors == null ? null : ctx_r1.confirmPasswordControl.errors["required"]);
  }
}
function CreateNewPasswordComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0648\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u064A\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateNewPasswordComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateNewPasswordComponent_div_17_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.newPassForm.errors == null ? null : ctx_r2.newPassForm.errors["isMatchedError"]);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class CreateNewPasswordComponent {
  constructor(_formBuilder, _router) {
    this._formBuilder = _formBuilder;
    this._router = _router;
    this.title = 'انشاء كلمة مرور جديدة  ';
    this.newPassForm = this._formBuilder.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    }, {
      validators: this.validateAreEqual('password', 'confirmPassword')
    });
  }
  get passwordControl() {
    return this.newPassForm.controls['password'];
  }
  get confirmPasswordControl() {
    return this.newPassForm.controls['confirmPassword'];
  }
  validateAreEqual(password, confirmPassword) {
    return formGroup => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        formGroup.setErrors({
          isMatchedError: true
        });
        return {
          isMatchedError: true
        };
      } else {
        formGroup.setErrors(null);
        return null;
      }
    };
  }
  onSubmit() {
    // 1 -call service to change password
    console.log(this.newPassForm.value);
    // 2 -redirect to login page
    this.navigateToLogin();
  }
  navigateToLogin() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login}`]);
  }
}
CreateNewPasswordComponent.ɵfac = function CreateNewPasswordComponent_Factory(t) {
  return new (t || CreateNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
CreateNewPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CreateNewPasswordComponent,
  selectors: [["app-create-new-password"]],
  decls: 21,
  vars: 12,
  consts: [[3, "title"], ["id", "form-signin", 1, "form-signin"], [1, "text-center"], ["src", "assets/images/auth/Password.svg", "alt", "", "width", "337", "height", "365", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal", 2, "color", "#076f42"], ["id", "form-newPassForm", 3, "formGroup"], [1, "form-group", "mb-4"], ["for", "email"], ["type", "password", "id", "control-password", "formControlName", "password", "id", "password", "placeholder", " \u0623\u0643\u062A\u0628 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["for", "confirmPassword"], ["type", "confirmPassword", "formControlName", "confirmPassword", "id", "control-confirmPassword", "placeholder", " \u0623\u0643\u062A\u0628 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["id", "btn-onSubmit", 1, "w-50", "btn", "btn-primary", 3, "disabled", "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "d-block"]],
  template: function CreateNewPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-auth-layout", 0)(1, "main", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u0627\u0646\u0634\u0627\u0621 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5)(7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateNewPasswordComponent_div_11_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CreateNewPasswordComponent_div_16_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CreateNewPasswordComponent_div_17_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2)(19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateNewPasswordComponent_Template_button_click_19_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0627\u0633\u062A\u0645\u0631\u0627\u0631 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newPassForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.passwordControl.touched && ctx.passwordControl.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordControl.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.confirmPasswordControl.touched && ctx.confirmPasswordControl.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.confirmPasswordControl.touched && ctx.confirmPasswordControl.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordControl.touched && ctx.newPassForm.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.newPassForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 30214:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_enums_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/enums/stepper */ 9848);
/* harmony import */ var _components_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/verification-code/verification-code.component */ 8715);
/* harmony import */ var _components_verification_username_verification_username_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/verification-username/verification-username.component */ 24750);
/* harmony import */ var _components_add_new_password_add_new_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-new-password/add-new-password.component */ 87183);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/stepper/stepper.service */ 31893);
/* harmony import */ var _services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/forget-password/forget-password.service */ 26667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/stepper/stepper.component */ 70582);
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/auth-layout/auth-layout.component */ 75049);











class ForgotPasswordComponent {
  constructor(_stepperService, _forgetpasswordService, router) {
    this._stepperService = _stepperService;
    this._forgetpasswordService = _forgetpasswordService;
    this.router = router;
    this.title = 'هل نسيت كلمة المرور ؟';
    this.steps = [];
    this.subscriptions = [];
  }
  ngOnInit() {
    this.updateStepper();
    this.observeNextClickedEventEmmitter();
  }
  updateStepper() {
    this.steps.push({
      title: 'بيانات التواصل ',
      Component: _components_verification_username_verification_username_component__WEBPACK_IMPORTED_MODULE_2__.VerificationUsernameComponent,
      state: '',
      completed: false,
      isEditable: false,
      hasError: false
    }, {
      title: 'إدخال رمز التحقق    ',
      Component: _components_verification_code_verification_code_component__WEBPACK_IMPORTED_MODULE_1__.VerificationCodeComponent,
      state: '',
      completed: false,
      isEditable: false,
      hasError: false
    }, {
      title: 'إدخال الرقم السري الجديد    ',
      Component: _components_add_new_password_add_new_password_component__WEBPACK_IMPORTED_MODULE_3__.AddNewPasswordComponent,
      state: '',
      completed: false,
      isEditable: false,
      hasError: false
    });
    this._stepperService.updateSteps(this.steps);
    this._stepperService.updateOrientation(src_app_shared_models_enums_stepper__WEBPACK_IMPORTED_MODULE_0__.orientationStepper.horizontal);
  }
  observeNextClickedEventEmmitter() {
    this.subscriptions.push(this._forgetpasswordService.nextClickedEventEmmitter.subscribe(res => {
      this.steps[res].completed = true;
      this._stepperService.stepperCompleteCurrentStep.emit();
      this.moveToNextStep();
    }));
  }
  moveToNextStep() {
    this._stepperService.stepperNext.emit();
  }
  navigateToLogin() {
    this.router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_4__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_4__.Configuration.pages.auth.login}`);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_5__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_6__.ForgetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["app-forgot-password"]],
  decls: 5,
  vars: 1,
  consts: [[3, "title"], [1, "stepper"], [1, "forgot-pass-link", 3, "click"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-auth-layout", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_a_click_2_listener() {
        return ctx.navigateToLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-stepper");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.title);
    }
  },
  dependencies: [_shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__.StepperComponent, _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 96877:
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var _components_verification_otp_popup_by_username_verification_otp_popup_by_username_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/verification-otp-popup-by-username/verification-otp-popup-by-username.component */ 55831);
/* harmony import */ var src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/enums/button-type.model */ 63650);
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/identity-status.model */ 15249);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/registration/registration.service */ 66231);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 90902);
/* harmony import */ var _services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/yaqeen/yaqeen.service */ 12793);
/* harmony import */ var src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/signalR/signal-r.service */ 869);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/login/login.service */ 56368);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/login-layout/login-layout.component */ 32391);






















function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u064A\u062C\u0628 \u0627\u062E\u062A\u064A\u0627\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u0646\u0623\u0645\u0644 \u0627\u0643\u0645\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\u0646\u0623\u0645\u0644 \u0627\u0643\u0645\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, LoginComponent_div_23_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.usernameControl.touched && (ctx_r1.usernameControl.errors == null ? null : ctx_r1.usernameControl.errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.errorFeedback);
  }
}
function LoginComponent_div_24_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u0646\u0623\u0645\u0644 \u0627\u0643\u0645\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, LoginComponent_div_24_div_8_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.passwordControl.errors == null ? null : ctx_r6.passwordControl.errors["required"]);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function LoginComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 2)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r8.showPassword = !ctx_r8.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, LoginComponent_div_24_div_8_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("type", !ctx_r2.showPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c0, ctx_r2.passwordControl.touched && ctx_r2.passwordControl.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](!ctx_r2.showPassword ? "visibility" : "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.passwordControl.touched && ctx_r2.passwordControl.errors);
  }
}
const _c1 = function (a0) {
  return [a0];
};
function LoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u0627\u0630\u0627 \u0643\u0646\u062A \u0644\u0627 \u062A\u0645\u062A\u0644\u0643 \u062D\u0633\u0627\u0628\u0627\u060C \u0642\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u0628\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](1, _c1, ctx_r3.registration));
  }
}
class LoginComponent {
  get RegistrationStatus() {
    return src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_4__.RegistrationStatus;
  }
  get usernameControl() {
    return this.loginForm.controls['username'];
  }
  get passwordControl() {
    return this.loginForm.controls['password'];
  }
  constructor(_formBuilder, _router, _registrationService, _userDataService, _toastrService, _yaqeenService, _signalRService, loginService, _loginService, _storageService, _popupService, _OTPService) {
    this._formBuilder = _formBuilder;
    this._router = _router;
    this._registrationService = _registrationService;
    this._userDataService = _userDataService;
    this._toastrService = _toastrService;
    this._yaqeenService = _yaqeenService;
    this._signalRService = _signalRService;
    this.loginService = loginService;
    this._loginService = _loginService;
    this._storageService = _storageService;
    this._popupService = _popupService;
    this._OTPService = _OTPService;
    this.complaintRequest = '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.complaintRequest;
    this.registration = '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.regAccount;
    this.fogotPassword = '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.forgotPassword;
    this.errorFeedback = '';
    this.loginUserTypeEnum = _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum;
    this.showPassword = false;
    this.showToastr = false;
    this.transactionId = '';
    this.isProduction = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production;
    this.subscriptions = [];
    this.loginForm = this._formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      password: [''],
      loginUserType: [this.loginUserTypeEnum.wafiPartner, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]
      // password: ['', Validators.required],
    });

    this.OTPInputValue = null;
    this.tokenResponse = {
      accessToken: '',
      refreshToken: '',
      loginUserType: this.loginUserTypeEnum.wafiPartner
    };
  }
  ngOnInit() {
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
      userType: _models_login_model__WEBPACK_IMPORTED_MODULE_1__.UserType.client,
      loginUserType: +this.loginForm.value.loginUserType
    };
    if (this.isProduction) {
      this.loginService.LoginWithIAM(loginParams).subscribe(res => {
        if (res.data) {
          if (res.data.token) {
            this._storageService.saveTokens(res.data.token);
            switch (res.data.token.loginUserType) {
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.wafiPartner:
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.delegateWafiPartner:
                this.navigateToDashboard();
                break;
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.Employee:
                this.navigateToEmployeeRequest();
                break;
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.finalBeneficiary:
                this.navigateToContractdocumentation();
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
      this._loginService.login(loginParams).subscribe(res => {
        if (res) {
          if (res.data) {
            if (res.data) {
              this.tokenResponse = res.data;
              this._storageService.saveTokens(this.tokenResponse);
              switch (res.data.loginUserType) {
                case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.wafiPartner:
                case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.delegateWafiPartner:
                  this.navigateToDashboard();
                  break;
                case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.Employee:
                  this.navigateToEmployeeRequest();
                  break;
                case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.finalBeneficiary:
                  this.navigateToContractdocumentation();
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
  openPopupOfValidationNumber(nafathValidationNumber) {
    this.showToastr = true;
    let Data = {
      panelClass: ['validation-number'],
      id: 'NafathValidationNumberPopup',
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'نأمل فتح تطبيق نفاذ و تأكيد الطلب بأختيار الرقم ',
      staticMessage: '',
      dynamicMessage: nafathValidationNumber.toString()
    };
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

  setTimeOutToDismissDialog() {
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
  dismissDialog() {
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
  navigateToDashboard() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}`]);
  }
  navigateToEmployeeRequest() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.employeeLicenseList}`]);
  }
  // ngOnDestroy(): void {
  //   this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  // }
  observeOTPInputValue() {
    this.subscriptions.push(this._OTPService.getOTPInputValue().subscribe(res => {
      this.OTPInputValue = res;
    }));
  }
  openOTPDialog() {
    let popupData = {
      title: `من فضلك قم بالتحقق من OTP للرقم `,
      component: _components_verification_otp_popup_by_username_verification_otp_popup_by_username_component__WEBPACK_IMPORTED_MODULE_2__.VerificationOtpPopupByUsernameComponent,
      buttons: [{
        icon: '',
        title: 'إلغاء',
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_3__.ButtonType.cancel,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openNotesDialog()
      }, {
        icon: '',
        title: 'تحقق',
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_3__.ButtonType.confirm,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openAssignEmployeeDialog()
      }]
    };

    this._popupService.updatePopupData(popupData);
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {}));
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      this._OTPService.ValidateOTPByUserName({
        userName: this.loginForm.value.username,
        userType: _models_login_model__WEBPACK_IMPORTED_MODULE_1__.UserType.client,
        OTP: this.OTPInputValue ?? ''
      }).subscribe(data => {
        if (data) {
          this._storageService.saveTokens(this.tokenResponse);
          this._popupService.dismissDialog();
          this.navigateToDashboard();
        }
      });
    }));
  }
  observeRegisterBS() {
    this.registerSubscription = this._signalRService.register$.subscribe(res => {});
  }
  invokeTransactionIdToRegister() {
    this._signalRService.connectionIdentityHub.invoke('Register', this.transactionId).catch(error => {
      console.log(`identityHubUrl.Register() error: ${error}`);
    });
  }
  invokeTransactionIdToUnregister() {
    this._signalRService.connectionIdentityHub.invoke('UnRegister', this.transactionId).catch(error => {
      console.log(`identityHubUrl.UnRegister() error: ${error}`);
    });
  }
  navigateToContractdocumentation() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.contractdocumentation}`]);
  }
  observeReceivedIdentityStatusBS() {
    this.receivedIdentityStatusSubscription = this._signalRService.receivedIdentityStatus$.subscribe(res => {
      this.invokeTransactionIdToUnregister();
      this._popupService.dismissDialog();
      if (res) {
        if (res.isValid && res.transactionId == this.transactionId) {
          if (res.token != null) {
            this._storageService.saveTokens(res.token);
            switch (res.token.loginUserType) {
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.wafiPartner:
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.delegateWafiPartner:
                this.navigateToDashboard();
                break;
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.Employee:
                this.navigateToEmployeeRequest();
                break;
              case _models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum.finalBeneficiary:
                this.navigateToContractdocumentation();
                break;
            }
          }
          if (res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.FinalBeneficiary || res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.NewCustomer || res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.Delegator || res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.CustomerWithoutFacility) {
            switch (res.userTypeStatus) {
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.NewCustomer:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_4__.RegistrationStatus.rightId);
                break;
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.Delegator:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_4__.RegistrationStatus.isDelegator);
                break;
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.CustomerWithoutFacility:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_4__.RegistrationStatus.existIdWithoutFacility);
                break;
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.FinalBeneficiary:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_4__.RegistrationStatus.finalBeneficiary);
                break;
            }
            let yaqeenCustomer = {
              fullName: res.userInfoUpdated?.fullName,
              shortName: res.userInfoUpdated?.firstName,
              nidnumber: res.userInfoUpdated?.nationalId,
              nationality: res.userInfoUpdated?.nationality
            };
            this._yaqeenService.updateYaqeenCustomer(yaqeenCustomer);
            if (res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_5__.UserTypeStatus.CustomerWithoutFacility) {
              let userData = {
                id: res.userInfoUpdated?.id,
                fullName: res.userInfoUpdated?.fullName,
                nidnumber: res.userInfoUpdated?.nationalId,
                nationality: res.userInfoUpdated?.nationality,
                facilities: [{}]
              };
              this.updateCustomerData(userData);
              this.emitUserDataUpdatedEventEmitter(userData);
            } else {
              let userData = {};
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
  updateRegistrationStatus(status) {
    this._registrationService.registrationStatus.next(status);
  }
  navigateToRegister() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.registration}`);
  }
  updateCustomerData(userData) {
    this._userDataService.updateCustomerData(userData);
  }
  emitUserDataUpdatedEventEmitter(customer) {
    this._registrationService.userDataUpdatedEventEmitter.emit(customer);
  }
  unsubscribeReceivedIdentityStatusBS() {
    this.receivedIdentityStatusSubscription.unsubscribe();
  }
  unsubscribeRegisterBS() {
    this.registerSubscription.unsubscribe();
  }
  ngOnDestroy() {
    clearTimeout(this.setTimeout);
    this.unsubscribeReceivedIdentityStatusBS();
    this.unsubscribeRegisterBS();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_7__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_8__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_9__.YaqeenService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_10__.SignalRService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_11__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_11__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_12__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_13__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_14__.OTPService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 32,
  vars: 16,
  consts: [[1, "login"], ["id", "form-loginForm", 3, "formGroup"], [1, "form-group", "mb-4"], [1, "invalid-feedback"], ["for", "loginUserType"], ["id", "loginUserType", "formControlName", "loginUserType", 1, "form-control"], [3, "value"], [4, "ngIf"], ["for", "username", 1, "form-label"], ["type", "text", "formControlName", "username", "id", "control-username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group mb-4", 4, "ngIf"], [1, "forgot-pass-link"], ["id", "link-complaintRequest", 3, "routerLink"], [1, "actions", "mt-5"], ["id", "btn-onSubmit", 1, "btn", "btn-primary", 3, "click"], ["class", "redir-link", 4, "ngIf"], [1, "text-danger"], ["for", "password", 1, "form-label"], [1, "input-group"], ["formControlName", "password", "id", "control-password", 1, "form-control", 3, "type", "ngClass"], [1, "input-group-text", 3, "click"], [1, "material-icons-outlined"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "invalid-feedback", "d-block"], [1, "redir-link"], ["id", "link-registration", 3, "routerLink"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-login-layout")(1, "div", 0)(2, "form", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 2)(7, "div")(8, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645:");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "select", 5)(11, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0623\u062D\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621(\u0645\u0644\u0627\u0643 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A)");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0645\u0641\u0648\u0636 \u0644\u0623\u062D\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0623\u0641\u0631\u0627\u062F");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0643\u0623\u062D\u062F \u0645\u0648\u0638\u0641\u064A\u0646");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 9, 6, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 12)(26, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\u062A\u0642\u062F\u064A\u0645 \u0634\u0643\u0648\u0649 \u0627\u0648 \u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 14)(29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 4, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.errorFeedback);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.loginUserTypeEnum.wafiPartner);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.loginUserTypeEnum.delegateWafiPartner);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.loginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.loginUserTypeEnum.Employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.loginForm.get("loginUserType")) == null ? null : tmp_6_0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](12, _c0, ctx.usernameControl.touched && ctx.usernameControl.errors || ctx.errorFeedback));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.usernameControl.errors && !ctx.errorFeedback);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isProduction);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](14, _c1, ctx.complaintRequest));
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isProduction);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_15__.LoginLayoutComponent],
  styles: [".form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  cursor: pointer;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-inline-end: none;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8rem;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.redir-link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.rega[_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #005257;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUVJLDZCQUFBO0FDTko7QURRSTtFQUNJLDZCQUFBO0FDTlI7O0FEVUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNQSjtBRFNJO0VBQ0ksZUVxQ087RUZuQ1AsY0VLRztBRGJYO0FEVVE7RUFDSSxjRUVEO0FEVlg7O0FEY0k7RUFDSSx1QkFBQTtBQ1hSOztBRGVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FDYko7QURlSTtFQUNJLFVBQUE7QUNiUjs7QURtQkk7O0VBQ0ksZUVNTztFRkxQLGNFcENJO0FEcUJaOztBRG1CQTtFQUNJLGVBQUE7QUNoQko7QURrQkk7RUFFSSxxQkFBQTtBQ2pCUjtBRG1CUTtFQUNJLDBCQUFBO0FDakJaOztBRHNCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QUR3QlE7RUFDSSxjRTdEQTtBRHVDWjs7QUFsREE7RUFDUSx5QkFBQTtBQXFEUiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5mb3JtLWdyb3VwIHtcbi8vICAgICAmKy5mb3JtLWdyb3VwIHtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbi8vICAgICB9XG4vLyB9XG5cbi5mb3JtLWxhYmVsIHtcbiAgICAvLyBjb2xvcjogcmdiYSgkZ3JlZW5ncmF5LCAwLjUpO1xuICAgIGNvbG9yOiByZ2JhKCR0aGVtZS1kYXJrLCAwLjc1KTtcblxuICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICBjb2xvcjogcmdiYSgkdGhlbWUtZGFyaywgMC43NSk7XG4gICAgfVxufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgIC8vIGNvbG9yOiAkZ3JlZW5ncmF5O1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG5cbiAgICAgICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gICAgPi5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXItaW5saW5lLWVuZDogbm9uZTtcbiAgICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcblxuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgIH1cbn1cblxuLmZvcmdvdC1wYXNzLWxpbmssXG4ucmVkaXItbGluayB7XG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgIH1cbn1cblxuLmZvcmdvdC1wYXNzLWxpbmsge1xuICAgIHRleHQtYWxpZ246IGVuZDtcblxuICAgIGEge1xuICAgICAgICAvLyBjb2xvcjogIzdkOWI4ZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yZWRpci1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGEge1xuICAgICAgICAvLyBjb2xvcjogJGdyZWVuZ3JheTtcblxuICAgICAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAaW1wb3J0ICcvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlcyc7XG5AaW1wb3J0ICcvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9hdXRoLWZvcm1zJztcblxuXG5cbi5pbnZhbGlkLWZlZWRiYWNre1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIFxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2535:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/register-account/register-account.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAccountComponent": () => (/* binding */ RegisterAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/identity-status.model */ 15249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/registration/registration.service */ 66231);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 90902);
/* harmony import */ var _services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/yaqeen/yaqeen.service */ 12793);
/* harmony import */ var src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/signalR/signal-r.service */ 869);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/login/login.service */ 56368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/login-layout/login-layout.component */ 32391);


















function RegisterAccountComponent_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2.localization.requiredErrorMsg, " ");
  }
}
function RegisterAccountComponent_div_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.pattern, " ");
  }
}
function RegisterAccountComponent_div_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r4.localization.maxLengthErrorMsg, " ");
  }
}
function RegisterAccountComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, RegisterAccountComponent_div_9_ng_container_2_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, RegisterAccountComponent_div_9_ng_container_3_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, RegisterAccountComponent_div_9_ng_container_4_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.controls.nIdNumber.errors == null ? null : ctx_r0.controls.nIdNumber.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.controls.nIdNumber.errors == null ? null : ctx_r0.controls.nIdNumber.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r0.controls.nIdNumber.errors == null ? null : ctx_r0.controls.nIdNumber.errors["maxlength"]) || (ctx_r0.controls.nIdNumber.errors == null ? null : ctx_r0.controls.nIdNumber.errors["minlength"]));
  }
}
function RegisterAccountComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.errorFeedback);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
class RegisterAccountComponent {
  get controls() {
    return this.registrationForm.controls;
  }
  get nIdType() {
    return src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.nIdType;
  }
  get RegistrationStatus() {
    return src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus;
  }
  constructor(_router, _formBuilder, _registrationService, _userDataService, _popupService, _storageService, _toastrService, _yaqeenService, _signalRService, loginService) {
    this._router = _router;
    this._formBuilder = _formBuilder;
    this._registrationService = _registrationService;
    this._userDataService = _userDataService;
    this._popupService = _popupService;
    this._storageService = _storageService;
    this._toastrService = _toastrService;
    this._yaqeenService = _yaqeenService;
    this._signalRService = _signalRService;
    this.loginService = loginService;
    this.subscriptions = [];
    this.errorFeedback = '';
    this.showValidation = false;
    this.showToastr = false;
    this.loginLink = '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login;
    this.RegistrationResponse = {};
    this.registrationForm = this._formBuilder.group({
      nIdType: [0],
      nIdNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]]
      // month: [0, [Validators.required]],
      // year: this._formBuilder.control<number | null>(null, [
      //     Validators.required,
      //     Validators.maxLength(4),
      //     Validators.minLength(4),
      //     Validators.pattern(Configuration.validators.numberOnly)])
    });

    this.localization = {
      NIDType: "نوع الهوية",
      resident: "مقيم",
      citizen: "مواطن",
      NIDNumberDisplayName: 'رقم الهوية',
      dateHejrie: 'تاريخ الميلاد الهجري',
      date: 'تاريخ الميلاد الميلادي',
      requiredErrorMsg: 'هذا الحقل مطلوب',
      maxLengthErrorMsg: 'يجب ألا يقل طول الحقل عن 10 أرقام',
      minLength4ErrorMsg: 'يجب ألا يقل طول الحقل عن 4 أرقام',
      verification: 'تحقق',
      pattern: 'يجب ان تكون القيمة بالأرقام فقط',
      minErrorMsg: 'هذا الحقل مطلوب',
      month: "شهر",
      year: "سنه",
      verificationMsg: "نأمل فتح تطبيق نفاذ و تأكيد الطلب بأختيار الرقم ",
      notificationMsg: "لم يتم التأكيد"
    };
    this.transactionId = '';
  }
  ngOnInit() {
    // this.openPopupOfValidationNumber(76);
    // this.setTimeOutToDismissDialog();
    this.observeCancelAction();
    this.observeNIdNumber();
    this.observeRegisterBS();
    this.observeReceivedIdentityStatusBS();
  }
  observeNIdNumber() {
    this.subscriptions.push(this.controls.nIdNumber.valueChanges.subscribe(value => {
      if (value) {
        // console.log(value[0])
        if (value[0] == '1') {
          this.controls.nIdType.setValue(this.nIdType.citizen);
        }
        if (value[0] == '2') {
          this.controls.nIdType.setValue(this.nIdType.resident);
        }
      }
    }));
  }
  onClickOnVerification() {
    if (this.registrationForm.valid) {
      // add to behaviorSubject to call yaqeen
      this.updateRegistrationObjBs();
      let loginParams = {
        userName: this.registrationForm.value.nIdNumber,
        password: '',
        userType: _models_login_model__WEBPACK_IMPORTED_MODULE_2__.UserType.client
      };
      this.loginService.LoginWithIAM(loginParams).subscribe(res => {
        if (res.data) {
          this.openPopupOfValidationNumber(+res.data.nafathLoginData.random);
          this.transactionId = res.data.nafathLoginData.transId;
          this.invokeTransactionIdToRegister();
        } else {}
      });
    } else {
      this.showValidation = true;
    }
  }
  // public onClickOnVerification() {
  //     if (this.registrationForm.valid) {
  //         // add to behaviorSubject to call yaqeen
  //         this.updateRegistrationObjBs()
  //         this.subscriptions.push(
  //             this._registrationService
  //                 .CustomerRegister(this.registrationForm.value as registration)
  //                 .subscribe((res: CoreResponseDTO<RegistrationResponse>) => {
  //                     if (res.data) {
  //                         this.RegistrationResponse = res.data;
  //                         this.updateRegistrationStatus(res.data.status);
  //                         switch (this.RegistrationResponse.status) {
  //                             case this.RegistrationStatus.wrongId:
  //                                 this.errorFeedback = 'هذا الرقم غير صحيح نأمل أعادة إدخال رقم الهوية';
  //                                 break;
  //                             case this.RegistrationStatus.customerIsExist:
  //                                 this.openDialog();
  //                                 break;
  //                             case this.RegistrationStatus.rightId:
  //                             case this.RegistrationStatus.existIdWithoutFacility:
  //                             case this.RegistrationStatus.isDelegator:
  //                                 this.openPopupOfValidationNumber(this.RegistrationResponse.nafathValidationNumber);
  //                                 this.transactionId = this.RegistrationResponse.transactionId;
  //                                 this.invokeTransactionIdToRegister();
  //                                 break;
  //                         }
  //                     }
  //                 })
  //         );
  //     } else {
  //         this.showValidation = true
  //     }
  // }
  updateRegistrationObjBs() {
    this._registrationService.registrationObj.next(this.registrationForm.value);
  }
  updateRegistrationStatus(status) {
    this._registrationService.registrationStatus.next(status);
  }
  navigateToDashboard() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}`]);
  }
  navigateToRegister() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.registration}`);
  }
  updateCustomerData(userData) {
    this._userDataService.updateCustomerData(userData);
  }
  emitUserDataUpdatedEventEmitter(customer) {
    this._registrationService.userDataUpdatedEventEmitter.emit(customer);
  }
  openDialog() {
    let noteObject = {
      icon: '!',
      title: '',
      staticMessage: 'تم إنشاء حساب بأستخدام هذا الرقم ',
      dynamicMessage: this.controls.nIdNumber.value,
      secondeStaticMessage: 'من قبل',
      // dynamicMessage: this.controls.nIdNumber.value as string,
      // secondeStaticMessage: 'في  انشاء حساب من قبل نأمل تسجيل الدخول ',
      buttonText: 'تسجيل الدخول',
      buttonLink: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login}`
    };
    this._popupService.updateNotePopupData(noteObject);
  }
  openPopupOfValidationNumber(nafathValidationNumber) {
    this.showToastr = true;
    let Data = {
      panelClass: ['validation-number'],
      id: "NafathValidationNumberPopup",
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: this.localization.verificationMsg,
      staticMessage: "",
      dynamicMessage: nafathValidationNumber.toString()
    };
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

  setTimeOutToDismissDialog() {
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
    }, 120000);
  }
  dismissDialog() {
    // if(this._popupService.NotePopupData.value.id=="NafathValidationNumberPopup"){
    this._popupService.dismissDialog();
    if (this.showToastr) this._toastrService.error(this.localization.notificationMsg);
    // }
  }

  observeCancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {
      if (res.id = "NafathValidationNumberPopup") {
        this.showToastr = false;
        // console.log("cancelAction", res)
        // console.log("remove setInterval")
      }
    }));
  }

  observeRegisterBS() {
    this.registerSubscription = this._signalRService.register$.subscribe(res => {
      console.log("_signalRService.register$", res);
    });
  }
  invokeTransactionIdToRegister() {
    console.log("this.transactionId", this.transactionId);
    this._signalRService.connectionIdentityHub.invoke('Register', this.transactionId).catch(error => {
      console.log(`identityHubUrl.Register() error: ${error}`);
    });
  }
  invokeTransactionIdToUnregister() {
    this._signalRService.connectionIdentityHub.invoke('UnRegister', this.transactionId).catch(error => {
      console.log(`identityHubUrl.UnRegister() error: ${error}`);
    });
  }
  observeReceivedIdentityStatusBS() {
    this.receivedIdentityStatusSubscription = this._signalRService.receivedIdentityStatus$.subscribe(res => {
      console.log("_signalRService.receivedIdentityStatus$", res);
      this.invokeTransactionIdToUnregister();
      this._popupService.dismissDialog();
      if (res) {
        console.log(res);
        if (res.isValid && res.transactionId == this.transactionId) {
          if (res.token != null) {
            this._storageService.saveTokens(res.token);
            this.navigateToDashboard();
          }
          if (res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.NewCustomer || res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.Delegator || res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.CustomerWithoutFacility) {
            switch (res.userTypeStatus) {
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.NewCustomer:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus.rightId);
                break;
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.Delegator:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus.isDelegator);
                break;
              case _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.CustomerWithoutFacility:
                this.updateRegistrationStatus(src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus.existIdWithoutFacility);
                break;
            }
            let yaqeenCustomer = {
              fullName: res.userInfoUpdated?.fullName,
              shortName: res.userInfoUpdated?.firstName,
              nidnumber: res.userInfoUpdated?.nationalId,
              nationality: res.userInfoUpdated?.nationality
            };
            this._yaqeenService.updateYaqeenCustomer(yaqeenCustomer);
            if (res.userTypeStatus == src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_1__.RegistrationStatus.existIdWithoutFacility) {
              let userData = {
                id: res.id,
                fullName: res.userInfoUpdated?.fullName,
                nidnumber: res.userInfoUpdated?.nationalId,
                isDelegator: res.userTypeStatus == _models_identity_status_model__WEBPACK_IMPORTED_MODULE_3__.UserTypeStatus.Delegator,
                nationality: res.userInfoUpdated?.nationality
              };
              this.updateCustomerData(userData);
              this.emitUserDataUpdatedEventEmitter(userData);
            }
            this.navigateToRegister();
          }
        }
      }
    });
  }
  unsubscribeReceivedIdentityStatusBS() {
    this.receivedIdentityStatusSubscription.unsubscribe();
  }
  unsubscribeRegisterBS() {
    this.registerSubscription.unsubscribe();
  }
  ngOnDestroy() {
    clearTimeout(this.setTimeout);
    this.unsubscribeReceivedIdentityStatusBS();
    this.unsubscribeRegisterBS();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RegisterAccountComponent.ɵfac = function RegisterAccountComponent_Factory(t) {
  return new (t || RegisterAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_6__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_8__.YaqeenService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_9__.SignalRService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_10__.LoginService));
};
RegisterAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: RegisterAccountComponent,
  selectors: [["app-register-account"]],
  decls: 18,
  vars: 13,
  consts: [[1, "register"], [1, "form-title", "mb-4"], ["id", "form-registrationForm", 3, "formGroup"], [1, "form-group"], ["for", "nIdNumber", 1, "form-label"], ["type", "text", "id", "control-nIdNumber", "formControlName", "nIdNumber", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "actions", "mt-5"], [1, "btn", "btn-primary", 3, "click"], [1, "redir-link"], [3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function RegisterAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-login-layout")(1, "div", 0)(2, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "form", 2)(5, "div", 3)(6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, RegisterAccountComponent_div_9_Template, 5, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, RegisterAccountComponent_div_10_Template, 3, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RegisterAccountComponent_Template_button_click_12_listener() {
        return ctx.onClickOnVerification();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " \u0627\u0630\u0627 \u0643\u0646\u062A \u062A\u0645\u062A\u0644\u0643 \u062D\u0633\u0627\u0628\u0627\u060C \u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.registrationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.localization.NIDNumberDisplayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.NIDNumberDisplayName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](9, _c0, ctx.controls.nIdNumber.errors && ctx.showValidation));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.controls.nIdNumber.errors && ctx.showValidation);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.RegistrationResponse == null ? null : ctx.RegistrationResponse.status) == ctx.RegistrationStatus.wrongId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.localization.verification);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](11, _c1, ctx.loginLink));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_11__.LoginLayoutComponent],
  styles: [".form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  cursor: pointer;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-inline-end: none;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8rem;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.redir-link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.rega[_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #005257;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3JlZ2lzdGVyLWFjY291bnQvcmVnaXN0ZXItYWNjb3VudC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFFSSw2QkFBQTtBQ05KO0FEUUk7RUFDSSw2QkFBQTtBQ05SOztBRFVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDUEo7QURTSTtFQUNJLGVFcUNPO0VGbkNQLGNFS0c7QURiWDtBRFVRO0VBQ0ksY0VFRDtBRFZYOztBRGNJO0VBQ0ksdUJBQUE7QUNYUjs7QURlQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZUk7RUFDSSxVQUFBO0FDYlI7O0FEbUJJOztFQUNJLGVFTU87RUZMUCxjRXBDSTtBRHFCWjs7QURtQkE7RUFDSSxlQUFBO0FDaEJKO0FEa0JJO0VBRUkscUJBQUE7QUNqQlI7QURtQlE7RUFDSSwwQkFBQTtBQ2pCWjs7QURzQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEd0JRO0VBQ0ksY0U3REE7QUR1Q1oiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZm9ybS1ncm91cCB7XG4vLyAgICAgJisuZm9ybS1ncm91cCB7XG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4vLyAgICAgfVxuLy8gfVxuXG4uZm9ybS1sYWJlbCB7XG4gICAgLy8gY29sb3I6IHJnYmEoJGdyZWVuZ3JheSwgMC41KTtcbiAgICBjb2xvcjogcmdiYSgkdGhlbWUtZGFyaywgMC43NSk7XG5cbiAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJHRoZW1lLWRhcmssIDAuNzUpO1xuICAgIH1cbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQ6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAvLyBjb2xvcjogJGdyZWVuZ3JheTtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gICAgICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgID4uZm9ybS1jb250cm9sIHtcbiAgICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDhyZW07XG5cbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rLFxuLnJlZGlyLWxpbmsge1xuICAgIGEge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICB9XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgICBhIHtcbiAgICAgICAgLy8gY29sb3I6ICM3ZDliOGY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmVkaXItbGluayB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBhIHtcbiAgICAgICAgLy8gY29sb3I6ICRncmVlbmdyYXk7XG5cbiAgICAgICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmZvcm0tbGFiZWwge1xuICBjb2xvcjogcmdiYSg5LCA1MCwgMTAyLCAwLjc1KTtcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIC5mb3JtLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoOSwgNTAsIDEwMiwgMC43NSk7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlucHV0LWdyb3VwLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLmlucHV0LWdyb3VwLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cblxuLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cbi5hY3Rpb25zIC5idG4ge1xuICB3aWR0aDogMzAlO1xufVxuXG4uZm9yZ290LXBhc3MtbGluayBhLFxuLnJlZGlyLWxpbmsgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmZvcmdvdC1wYXNzLWxpbmsgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb3Jnb3QtcGFzcy1saW5rIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnJlZGlyLWxpbmsge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAucmVkaXItbGluayBhIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 64665:
/*!***************************************************************************!*\
  !*** ./src/app/modules/auth/pages/registration/registration.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var src_app_shared_models_enums_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/enums/stepper */ 9848);
/* harmony import */ var _components_adding_commercial_register_number_adding_commercial_register_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/adding-commercial-register-number/adding-commercial-register-number.component */ 12331);
/* harmony import */ var _components_adding_contact_info_adding_contact_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/adding-contact-info/adding-contact-info.component */ 70974);
/* harmony import */ var src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/enums/direction */ 76421);
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/stepper/stepper.service */ 31893);
/* harmony import */ var src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/language/language.service */ 75179);
/* harmony import */ var _services_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/registration/registration.service */ 66231);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/yaqeen/yaqeen.service */ 12793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/stepper/stepper.component */ 70582);
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/auth-layout/auth-layout.component */ 75049);

















function RegistrationComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r0.localization.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", (ctx_r0.yaqeenUserData == null ? null : ctx_r0.yaqeenUserData.fullName) ? ctx_r0.yaqeenUserData == null ? null : ctx_r0.yaqeenUserData.fullName : ctx_r0.userData == null ? null : ctx_r0.userData.fullName, " ");
  }
}
function RegistrationComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.localization.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]((ctx_r1.yaqeenUserData == null ? null : ctx_r1.yaqeenUserData.nationality) ? ctx_r1.yaqeenUserData == null ? null : ctx_r1.yaqeenUserData.nationality : ctx_r1.userData == null ? null : ctx_r1.userData.nationality);
  }
}
function RegistrationComponent_hr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 13);
  }
}
class RegistrationComponent {
  get RegistrationStatus() {
    return src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_0__.RegistrationStatus;
  }
  constructor(_stepperService, _languageService, _registrationService, _userDataService, _storageService, _yaqeenService) {
    this._stepperService = _stepperService;
    this._languageService = _languageService;
    this._registrationService = _registrationService;
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this._yaqeenService = _yaqeenService;
    this.subtitle = 'عليك استكمال بياناتك  لانشاء الحساب الشخصي';
    this.subscriptions = [];
    this.bodyDirection = src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_4__.Direction.rtl;
    this.baseURl = '../assets/images/';
    this.wafiLogo = 'layout/sidebar/logo-herizontal.png';
    this.steps = [];
    this.userData = null;
    this.yaqeenUserData = null;
    this.registrationObj = null;
    this.localization = {
      title: 'مرحبا بك في منصة البيع على الخارطة ',
      natinalIdData: 'بيانات الهوية الشخصية ',
      nationalID: 'رقم الهوية ',
      fullName: 'الاسم بالكامل',
      nationality: 'الجنسية'
    };
  }
  ngOnInit() {
    this.observeRegistrationStatus();
    this.observeDirectionChange();
    this.observeEventEmitters();
    this.obseveCustomerData();
    this.observeRegistrationObjBs();
    this.observeYaqeenCustomer();
  }
  observeRegistrationObjBs() {
    this.subscriptions.push(this._registrationService.registrationObj.subscribe(res => {
      this.registrationObj = res;
      if (this.registrationObj) this.GetYakeenDetails();
    }));
  }
  GetYakeenDetails() {
    this.subscriptions.push(this._yaqeenService.getYakeenDetails(this.registrationObj).subscribe(res => {
      if (res) this.updateYaqeenCustomer(res);
    }));
  }
  updateYaqeenCustomer(yaqeenCustomer) {
    this._yaqeenService.updateYaqeenCustomer(yaqeenCustomer);
  }
  observeYaqeenCustomer() {
    this.subscriptions.push(this._yaqeenService.getYaqeenCustomer().subscribe(res => {
      if (res) this.yaqeenUserData = res;
    }));
  }
  observeRegistrationStatus() {
    this.subscriptions.push(this._registrationService.registrationStatus.subscribe(status => {
      if (status) {
        switch (status) {
          case this.RegistrationStatus.existIdWithoutFacility:
            this.steps.push({
              title: 'إضافة رقم السجل التجاري ',
              Component: _components_adding_commercial_register_number_adding_commercial_register_number_component__WEBPACK_IMPORTED_MODULE_2__.AddingCommercialRegisterNumberComponent,
              state: '',
              completed: true,
              isEditable: true,
              hasError: false
            });
            break;
          case this.RegistrationStatus.isDelegator:
            this.steps.push({
              title: 'بيانات التواصل ',
              Component: _components_adding_contact_info_adding_contact_info_component__WEBPACK_IMPORTED_MODULE_3__.AddingContactInfoComponent,
              state: '',
              completed: true,
              isEditable: true,
              hasError: false
            });
            break;
          case this.RegistrationStatus.finalBeneficiary:
            this.steps.push({
              title: 'بيانات التواصل ',
              Component: _components_adding_contact_info_adding_contact_info_component__WEBPACK_IMPORTED_MODULE_3__.AddingContactInfoComponent,
              state: '',
              completed: true,
              isEditable: true,
              hasError: false
            });
            break;
          default:
            this.steps.push({
              title: 'بيانات التواصل ',
              Component: _components_adding_contact_info_adding_contact_info_component__WEBPACK_IMPORTED_MODULE_3__.AddingContactInfoComponent,
              state: '',
              completed: true,
              isEditable: true,
              hasError: false
            }, {
              title: 'إضافة رقم السجل التجاري ',
              Component: _components_adding_commercial_register_number_adding_commercial_register_number_component__WEBPACK_IMPORTED_MODULE_2__.AddingCommercialRegisterNumberComponent,
              state: '',
              completed: false,
              isEditable: false,
              hasError: false
            });
            break;
        }
      }
      this.updateStepper();
    }));
  }
  observeDirectionChange() {
    this.subscriptions.push(this._languageService.observeDirection().subscribe(direction => {
      this.bodyDirection = src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_4__.Direction[direction];
    }));
  }
  observeEventEmitters() {
    this.observeUserDataUpdatedEventEmitter();
    this.observeNextClickedEventEmmitter();
    this.observePreviousClickedEventEmmitter();
  }
  updateStepper() {
    this._stepperService.updateSteps(this.steps);
    this._stepperService.updateOrientation(src_app_shared_models_enums_stepper__WEBPACK_IMPORTED_MODULE_1__.orientationStepper.horizontal);
  }
  observeUserDataUpdatedEventEmitter() {
    this.subscriptions.push(this._registrationService.userDataUpdatedEventEmitter.subscribe(data => {
      this.moveToNextStep();
    }));
  }
  observeNextClickedEventEmmitter() {
    this.subscriptions.push(this._registrationService.nextClickedEventEmmitter.subscribe(res => {
      this._stepperService.updateSteps(this.steps);
      this.moveToNextStep();
    }));
  }
  observePreviousClickedEventEmmitter() {
    this.subscriptions.push(this._registrationService.previousClickedEventEmmitter.subscribe(res => {
      this.moveToPreviousStep();
    }));
  }
  // helper method
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      // console.log("res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus", res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus)
      // console.log("res ", res )
      // console.log("res && res.facilities.length == 0 ",res&& res.facilities.length == 0 )
      // console.log("res && res.facilities.length == 0 && !res.isDelegator ", res && res.facilities.length == 0 && !res.isDelegator )
      // console.log("res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus", res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus)
      // console.log("this.RegistrationStatus", this.RegistrationStatus)
      let loginUserType = this._storageService.getLoginUserType();
      let loginUserTypeEnum = Number(loginUserType);
      if (res && (res.facilities == undefined || res.facilities == null || res.facilities.length == 0) && loginUserTypeEnum == _models_login_model__WEBPACK_IMPORTED_MODULE_5__.LoginUserTypeEnum.wafiPartner) {
        this.steps.push({
          title: 'إضافة رقم السجل التجاري ',
          Component: _components_adding_commercial_register_number_adding_commercial_register_number_component__WEBPACK_IMPORTED_MODULE_2__.AddingCommercialRegisterNumberComponent,
          state: '',
          completed: true,
          isEditable: true,
          hasError: false
        });
      }
    }));
  }
  moveToNextStep() {
    this._stepperService.stepperNext.emit();
  }
  moveToPreviousStep() {
    this._stepperService.stepperPrevious.emit();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
  return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_6__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__.RegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_9__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_10__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_yaqeen_yaqeen_service__WEBPACK_IMPORTED_MODULE_11__.YaqeenService));
};
RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: RegistrationComponent,
  selectors: [["app-registration"]],
  decls: 18,
  vars: 9,
  consts: [[3, "title", "subtitle"], [1, "registration", 3, "dir"], [1, "row"], [1, "col-12", "col-lg-6"], [1, "user-data"], [1, "title"], [1, "col-12", "col-md-4"], [1, "key", "mb-2"], [1, "value", "fw-normal"], ["class", "col-12 col-md-4", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "stepper"], [1, "value"], [1, "mt-4"]],
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-auth-layout", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 2)(8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, RegistrationComponent_div_13_Template, 5, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RegistrationComponent_div_14_Template, 5, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RegistrationComponent_hr_15_Template, 1, 0, "hr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "app-stepper");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", ctx.localization.title)("subtitle", ctx.subtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx.bodyDirection);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.natinalIdData);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.localization.nationalID);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (ctx.yaqeenUserData == null ? null : ctx.yaqeenUserData.nidnumber) ? ctx.yaqeenUserData == null ? null : ctx.yaqeenUserData.nidnumber : ctx.userData == null ? null : ctx.userData.nidnumber, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.fullName) || (ctx.yaqeenUserData == null ? null : ctx.yaqeenUserData.fullName));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.nationality) || (ctx.yaqeenUserData == null ? null : ctx.yaqeenUserData.nationality));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.userData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Dir, _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__.StepperComponent, _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__.AuthLayoutComponent],
  styles: [".user-data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #4B5E56;\n}\n.user-data[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #61796F;\n  opacity: 0.5;\n}\n.user-data[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #4B5E56;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFLSTtFQUNJLGVDZ0RPO0VEL0NQLGNDREk7RURFSixZQUFBO0FBSFI7QUFNSTtFQUNJLGVDMENPO0VEekNQLGlCQUFBO0VBQ0EsY0FBQTtBQUpSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5cbi51c2VyLWRhdGEge1xuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgY29sb3I6ICM0QjVFNTY7XG4gICAgfVxuXG4gICAgLmtleSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgY29sb3I6ICRncmVlbmdyYXk7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNEI1RTU2O1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 91771:
/*!***************************************************************************!*\
  !*** ./src/app/modules/auth/pages/wafi-service/wafi-service.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WafiServiceComponent": () => (/* binding */ WafiServiceComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 78824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 26128);
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/login-layout/login-layout.component */ 32391);









function WafiServiceComponent_mat_radio_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-radio-button", 5)(1, "div", 6)(2, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", service_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](service_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](service_r1.titl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](service_r1.subtitle);
  }
}
class WafiServiceComponent {
  constructor(_router, titleService) {
    this._router = _router;
    this.titleService = titleService;
    this.radioButtonsHeader = 'يرجى تحديد نوع المستخدم';
    this.wafiServices = [{
      name: 'شريك ',
      value: 0,
      titl: 'مطور عقاري، محاسب قانوني، مسوق عقاري، استشاري هندسي',
      subtitle: 'للاستفادة من خدمات (التأهيل – الترخيص – وغيرها)'
    }, {
      name: 'مستفيد',
      value: 0,
      titl: 'مواطن، مقيم',
      subtitle: 'لاستعراض المشاريع والوحدات عقارية ومتابعة نسب التنفيذ وأقساط السداد للوحدات عقارية الخاصة بالمستفيد'
    }];
    this.selectedService = {};
    this.linkTitle = 'تسجيل الدخول';
    this.appTitle = "الهيئة العامة للعقار ";
  }
  ngOnInit() {
    this.setAppTitle();
  }
  setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }
  navigateToRegistration() {
    this._router.navigate([src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth, src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login]);
  }
}
WafiServiceComponent.ɵfac = function WafiServiceComponent_Factory(t) {
  return new (t || WafiServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
};
WafiServiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WafiServiceComponent,
  selectors: [["app-wafi-service"]],
  decls: 8,
  vars: 4,
  consts: [[1, "form-title"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["disableRipple", "true", "class", "d-block mb-5", "id", "btn-selectedService", 3, "value", 4, "ngFor", "ngForOf"], [1, "action"], ["id", "btn-navigateToRegistration", "type", "button", "mat-raised-button", "", "color", "primary", "id", "btn-navigateToRegistration", 1, "d-block", "mx-auto", 3, "click"], ["disableRipple", "true", "id", "btn-selectedService", 1, "d-block", "mb-5", 3, "value"], [1, "d-flex", "flex-column"], [1, "form-label"]],
  template: function WafiServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-login-layout")(1, "h6", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-radio-group", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WafiServiceComponent_Template_mat_radio_group_ngModelChange_3_listener($event) {
        return ctx.selectedService = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WafiServiceComponent_mat_radio_button_4_Template, 8, 4, "mat-radio-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WafiServiceComponent_Template_button_click_6_listener() {
        return ctx.navigateToRegistration();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.radioButtonsHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedService);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.wafiServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.linkTitle);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioButton, _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_1__.LoginLayoutComponent],
  styles: [".form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-weight: normal;\n  color: #093266;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: #093266;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n.rega[_nghost-%COMP%]   p[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #005257;\n}\n\n.action[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3dhZmktc2VydmljZS5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3dhZmktc2VydmljZS93YWZpLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUVBLG1CQUFBO0VBRUEsY0NzQk87QUN2Qlg7O0FGSUE7RUFFSSxjQ2lCTztBQ25CWDtBRklJO0VBQ0ksY0NjRztBQ2hCWDs7QUZNQTtFQUNJLGVDdUNXO0VEckNYLGNDSlE7QUNBWjtBRk1JO0VBQ0ksY0NQSTtBQ0daOztBRlFBO0VBQ0ksZ0JBQUE7QUVMSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8vIGNvbG9yOiAjNEI1RTU2O1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbn1cblxuLmZvcm0tbGFiZWwge1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxufVxuXG5wIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgLy8gY29sb3I6ICRncmVlbmdyYXk7XG4gICAgY29sb3I6ICR0aGVtZS1tYWluO1xuXG4gICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICB9XG59XG5cbi5hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIuZm9ybS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAuZm9ybS1sYWJlbCB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwNTI1Nztcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIHAge1xuICBjb2xvcjogIzAwNTI1Nztcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 71784:
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/services/create-account/create-account.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountService": () => (/* binding */ CreateAccountService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var src_app_core_interceptors_base_URL_handler_base_url_handler_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interceptors/base-URL-handler/base-url-handler.interceptor */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);






class CreateAccountService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.securityAPIContext = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpContext().set(src_app_core_interceptors_base_URL_handler_base_url_handler_interceptor__WEBPACK_IMPORTED_MODULE_0__.securityAPI, true);
  }
  createAccount(createAccObj) {
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.APIs.Account.create, createAccObj, {
      context: this.securityAPIContext
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.id) {
        return res.isDone;
      } else {
        return false;
      }
    }));
  }
}
CreateAccountService.ɵfac = function CreateAccountService_Factory(t) {
  return new (t || CreateAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CreateAccountService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CreateAccountService,
  factory: CreateAccountService.ɵfac
});

/***/ }),

/***/ 56368:
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/services/login/login.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_interceptors_base_URL_handler_base_url_handler_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/interceptors/base-URL-handler/base-url-handler.interceptor */ 7990);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);






class LoginService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.securityAPIContext = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpContext().set(src_app_core_interceptors_base_URL_handler_base_url_handler_interceptor__WEBPACK_IMPORTED_MODULE_0__.securityAPI, true);
    this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
  }
  LoginWithIAM(loginObj) {
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.APIs.Account.LoginWithIAM, loginObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      return res;
    }));
  }
  login(loginObj) {
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.APIs.Account.login, loginObj, {
      context: this.securityAPIContext
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      return res;
    }));
  }
  CreateComplaintRequest(complaintRequest) {
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.APIs.ComplaintRequest.Create, complaintRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      return res.isDone ? res : null;
    }));
  }
  GetComplaintRequestTypes() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.APIs.ComplaintRequest.GetComplaintRequestTypeList}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
      return res.data ? res.data : null;
    }));
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac
});

/***/ }),

/***/ 45755:
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/services/nationality/nationality.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NationalityService": () => (/* binding */ NationalityService)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);




class NationalityService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  getNationalities() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.nationality.GetDropDown}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res.data ? res.data : null;
    }));
  }
}
NationalityService.ɵfac = function NationalityService_Factory(t) {
  return new (t || NationalityService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
NationalityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NationalityService,
  factory: NationalityService.ɵfac
});

/***/ }),

/***/ 66231:
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/services/registration/registration.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationService": () => (/* binding */ RegistrationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);





class RegistrationService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.userDataUpdatedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nextClickedEventEmmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.previousClickedEventEmmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.registrationStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.registrationObj = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.customerMobile = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
  }
  // Customer 
  CustomerRegister(registrationObj) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Customer.Register}`, registrationObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res;
    }));
  }
  // Facility
  FacilityRegister(CommercialRegisterNumber, customerId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.facility.Register}/${CommercialRegisterNumber}/${customerId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data ? res.data : null;
    }));
  }
  // Contact
  updateContact(contactInfo) {
    return this._httpClient.put(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Contact.Update, contactInfo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res;
    }));
  }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) {
  return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
RegistrationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegistrationService,
  factory: RegistrationService.ɵfac
});

/***/ }),

/***/ 12793:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/services/yaqeen/yaqeen.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YaqeenService": () => (/* binding */ YaqeenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);




class YaqeenService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.yaqeenCustomer = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  getYakeenDetails(registrationObj) {
    console.log("registrationObj", registrationObj);
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Integration.GetYakeenDetails}`, registrationObj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.isDone ? res.data : null;
    }));
  }
  updateYaqeenCustomer(yaqeenCustomer) {
    this.yaqeenCustomer.next(yaqeenCustomer);
  }
  getYaqeenCustomer() {
    return this.yaqeenCustomer.asObservable();
  }
}
YaqeenService.ɵfac = function YaqeenService_Factory(t) {
  return new (t || YaqeenService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
YaqeenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: YaqeenService,
  factory: YaqeenService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map