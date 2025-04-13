"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["common"],{

/***/ 12992:
/*!*********************************************!*\
  !*** ./src/app/core/configurations/guid.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
class Guid {
  static newGuid() {
    return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    }));
  }
  static get empty() {
    return '00000000-0000-0000-0000-000000000000';
  }
  get empty() {
    return Guid.empty;
  }
  static isValid(str) {
    const validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return validRegex.test(str);
  }
  constructor(value) {
    this.value = this.empty;
    if (value) {
      if (Guid.isValid(value)) {
        this.value = value;
      }
    }
  }
  toString() {
    return this.value;
  }
  toJSON() {
    return this.value;
  }
}
var e = new Guid();
e; // Guid { value: '00000000-0000-0000-0000-000000000000' }​​​​​
e.toString(); // 00000000-0000-0000-0000-000000000000​​​​​
JSON.stringify(e); // ​​​​​"00000000-0000-0000-0000-000000000000"​​​​​
e = Guid.newGuid(); // ​​​​​Guid { value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }​​​​​
JSON.stringify(e); // ​​​​​"bb90ef83-1a7e-42b1-90ba-39cdebb6366c"​​​​​
Guid.isValid(e.toString()); // true
Guid.empty; // ​​​​​00000000-0000-0000-0000-000000000000​​​​​
Guid.isValid(Guid.empty); // false

/***/ }),

/***/ 83305:
/*!****************************************************!*\
  !*** ./src/app/core/enums/land-owner-type.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandOwnerType": () => (/* binding */ LandOwnerType)
/* harmony export */ });
var LandOwnerType;
(function (LandOwnerType) {
  LandOwnerType[LandOwnerType["Company"] = 0] = "Company";
  LandOwnerType[LandOwnerType["Ministry"] = 1] = "Ministry";
  LandOwnerType[LandOwnerType["RealEstateDeveloper"] = 2] = "RealEstateDeveloper";
  LandOwnerType[LandOwnerType["Individual"] = 3] = "Individual";
  LandOwnerType[LandOwnerType["Association"] = 4] = "Association";
  LandOwnerType[LandOwnerType["RealEstateFund"] = 5] = "RealEstateFund";
})(LandOwnerType || (LandOwnerType = {}));

/***/ }),

/***/ 99076:
/*!*******************************************************!*\
  !*** ./src/app/core/enums/qualification-type-code.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypeCode": () => (/* binding */ QualificationTypeCode)
/* harmony export */ });
var QualificationTypeCode;
(function (QualificationTypeCode) {
  QualificationTypeCode["EngineeringConsultant"] = "EC";
  QualificationTypeCode["ContributionEngineeringConsultant"] = "EC-REEM";
  QualificationTypeCode["ContributionCharteredAccountant"] = "Acc-REEM";
  QualificationTypeCode["CharteredAccountant"] = "Acc";
  QualificationTypeCode["Marketer"] = "REM";
  QualificationTypeCode["DependantRealEstate"] = "RED01";
})(QualificationTypeCode || (QualificationTypeCode = {}));

/***/ }),

/***/ 77431:
/*!**********************************************!*\
  !*** ./src/app/core/models/enums/statues.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statues": () => (/* binding */ statues)
/* harmony export */ });
var statues;
(function (statues) {
  statues[statues["New"] = 0] = "New";
  statues[statues["UnderStudy"] = 1] = "UnderStudy";
  statues[statues["CustomerFeedback"] = 3] = "CustomerFeedback";
  statues[statues["Compile"] = 4] = "Compile";
  statues[statues["Certified"] = 5] = "Certified";
})(statues || (statues = {}));

/***/ }),

/***/ 8715:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/auth/components/verification-code/verification-code.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationCodeComponent": () => (/* binding */ VerificationCodeComponent)
/* harmony export */ });
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login.model */ 81691);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forget-password/forget-password.service */ 26667);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/otp-input/otp-input.component */ 65298);







class VerificationCodeComponent {
  constructor(_forgetpasswordServices, _otpService) {
    this._forgetpasswordServices = _forgetpasswordServices;
    this._otpService = _otpService;
    this.title = 'رمز التحقق';
    this.subscriptions = [];
    this.otpConfig = src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.OTPInputConfigration;
    this.otpValue = '';
  }
  ngOnInit() {
    this.getUsername();
    this.getOTPvalue();
  }
  getOTPvalue() {
    this.subscriptions.push(this._otpService.OTPInputValue$.subscribe(res => this.otpValue = res));
  }
  getUsername() {
    this.subscriptions.push(this._forgetpasswordServices.userName$.subscribe(res => {
      this.username = res;
    }));
  }
  onSubmit() {
    this.confirmotp = {
      userName: this.username.userName,
      userType: _models_login_model__WEBPACK_IMPORTED_MODULE_0__.UserType.client,
      otp: this.otpValue
    };
    this.subscriptions.push(this._forgetpasswordServices.ForgetPasswordConfirmOTP(this.confirmotp).subscribe(res => {
      if (res.isDone) {
        this._forgetpasswordServices.token$.next(res.data ?? '');
        this._forgetpasswordServices.nextClickedEventEmmitter.emit(1);
      }
    }));
  }
  resendOTP() {
    this.subscriptions.push(this._forgetpasswordServices.forgetPasswordGeneratOTP(this.username).subscribe());
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
VerificationCodeComponent.ɵfac = function VerificationCodeComponent_Factory(t) {
  return new (t || VerificationCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_forget_password_forget_password_service__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_3__.OTPService));
};
VerificationCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: VerificationCodeComponent,
  selectors: [["app-verification-code"]],
  decls: 16,
  vars: 1,
  consts: [["id", "form-signin", 1, "form-signin"], [1, "text-center"], ["src", "assets/images/auth/verificationCode.svg", "alt", "", "width", "337", "height", "365", 1, "mb-4"], [1, "h3", "mb-3", "fw-normal", 2, "color", "#076f42"], [1, "h5", "mb-3", "form-label"], ["id", "form-verificationCodeForm"], [1, "form-group", "mb-4", "text-center"], ["id", "btn-onSubmit", 1, "w-50", "btn", "btn-primary", 3, "disabled", "click"], [1, "text-center", "mt-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
  template: function VerificationCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u0625\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " \u0645\u0646 \u0641\u0636\u0644\u0643 \u062A\u0641\u0642\u062F \u0627\u0644\u0647\u0627\u062A\u0641 ,\u0644\u0642\u062F \u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-otp-input");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 1)(11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationCodeComponent_Template_button_click_11_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " \u0627\u0633\u062A\u0645\u0631\u0627\u0631 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8)(14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationCodeComponent_Template_button_click_14_listener() {
        return ctx.resendOTP();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx.otpValue == null ? null : ctx.otpValue.length) != ctx.otpConfig.length);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_4__.OTPInputComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 15249:
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/models/identity-status.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderEnum": () => (/* binding */ GenderEnum),
/* harmony export */   "UserTypeStatus": () => (/* binding */ UserTypeStatus)
/* harmony export */ });
var GenderEnum;
(function (GenderEnum) {
  GenderEnum[GenderEnum["Male"] = 1] = "Male";
  GenderEnum[GenderEnum["Female"] = 2] = "Female";
})(GenderEnum || (GenderEnum = {}));
var UserTypeStatus;
(function (UserTypeStatus) {
  UserTypeStatus[UserTypeStatus["Employee"] = 1] = "Employee";
  UserTypeStatus[UserTypeStatus["NewEmployee"] = 2] = "NewEmployee";
  UserTypeStatus[UserTypeStatus["Customer"] = 3] = "Customer";
  UserTypeStatus[UserTypeStatus["CustomerWithoutFacility"] = 4] = "CustomerWithoutFacility";
  UserTypeStatus[UserTypeStatus["NewCustomer"] = 5] = "NewCustomer";
  UserTypeStatus[UserTypeStatus["Delegator"] = 6] = "Delegator";
  UserTypeStatus[UserTypeStatus["FinalBeneficiary"] = 7] = "FinalBeneficiary";
  UserTypeStatus[UserTypeStatus["NotExist"] = 8] = "NotExist";
})(UserTypeStatus || (UserTypeStatus = {}));

/***/ }),

/***/ 81691:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/models/login.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUserTypeEnum": () => (/* binding */ LoginUserTypeEnum),
/* harmony export */   "UserType": () => (/* binding */ UserType)
/* harmony export */ });
var UserType;
(function (UserType) {
  UserType[UserType["employee"] = 0] = "employee";
  UserType[UserType["client"] = 1] = "client";
})(UserType || (UserType = {}));
var LoginUserTypeEnum;
(function (LoginUserTypeEnum) {
  LoginUserTypeEnum[LoginUserTypeEnum["finalBeneficiary"] = 0] = "finalBeneficiary";
  LoginUserTypeEnum[LoginUserTypeEnum["delegateWafiPartner"] = 1] = "delegateWafiPartner";
  LoginUserTypeEnum[LoginUserTypeEnum["wafiPartner"] = 2] = "wafiPartner";
  LoginUserTypeEnum[LoginUserTypeEnum["Employee"] = 3] = "Employee";
})(LoginUserTypeEnum || (LoginUserTypeEnum = {}));

/***/ }),

/***/ 26667:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/auth/services/forget-password/forget-password.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordService": () => (/* binding */ ForgetPasswordService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);





class ForgetPasswordService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.userName$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
    this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
    this.nextClickedEventEmmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  forgetPasswordGeneratOTP(usernameobj) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Account.ForgetPasswordGenerateOTP}`, usernameobj);
  }
  ForgetPasswordConfirmOTP(OPTobj) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Account.ForgetPasswordConfirmOTP}`, OPTobj);
  }
  ResetPassword(passobj) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Account.ResetPassword}`, passobj);
  }
}
ForgetPasswordService.ɵfac = function ForgetPasswordService_Factory(t) {
  return new (t || ForgetPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ForgetPasswordService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ForgetPasswordService,
  factory: ForgetPasswordService.ɵfac
});

/***/ }),

/***/ 8519:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/features/facilities/dataModels/financial-capability.model.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileManagerBE": () => (/* binding */ FileManagerBE),
/* harmony export */   "FileManagerFE": () => (/* binding */ FileManagerFE),
/* harmony export */   "QualificationFinancialStatementBE": () => (/* binding */ QualificationFinancialStatementBE),
/* harmony export */   "QualificationFinancialStatementFE": () => (/* binding */ QualificationFinancialStatementFE),
/* harmony export */   "financialCapabilityDto": () => (/* binding */ financialCapabilityDto),
/* harmony export */   "financialCapabilityResponseBE": () => (/* binding */ financialCapabilityResponseBE),
/* harmony export */   "financialCapabilityResponseFE": () => (/* binding */ financialCapabilityResponseFE)
/* harmony export */ });
//financial capability
class financialCapabilityResponseBE {
  constructor() {
    this.id = "";
    this.cpalicenseNumber = "";
    this.cpaIdentityNumber = "";
    this.creditRecordIntegrityCertificateDate = new Date();
    this.financialStatementDescription = "";
    this.certificateOfZakatIncome = "";
    this.facilityId = "";
    this.qualificationFinancialStatements = [];
    this.creditRecordIntegrityCertificateFile = new FileManagerBE();
  }
}
class financialCapabilityResponseFE {
  constructor(_financialCapabilityResponseBE) {
    this.Id = "";
    this.CpalicenseNumber = "";
    this.CpaIdentityNumber = "";
    this.CreditRecordIntegrityCertificateDate = new Date();
    this.FinancialStatementDescription = "";
    this.CertificateOfZakatIncome = "";
    this.FacilityId = "";
    this.QualificationFinancialStatements = [];
    this.CreditRecordIntegrityCertificateFile = new FileManagerFE(new FileManagerBE());
    if (_financialCapabilityResponseBE) {
      this.Id = _financialCapabilityResponseBE.id;
      this.CpalicenseNumber = _financialCapabilityResponseBE.cpalicenseNumber;
      this.CpaIdentityNumber = _financialCapabilityResponseBE.cpaIdentityNumber;
      this.CreditRecordIntegrityCertificateDate = _financialCapabilityResponseBE.creditRecordIntegrityCertificateDate;
      this.FinancialStatementDescription = _financialCapabilityResponseBE.financialStatementDescription;
      this.CertificateOfZakatIncome = _financialCapabilityResponseBE.certificateOfZakatIncome;
      this.FacilityId = _financialCapabilityResponseBE.facilityId;
      _financialCapabilityResponseBE.qualificationFinancialStatements.forEach(x => {
        this.QualificationFinancialStatements.push(new QualificationFinancialStatementFE(x));
      });
      this.CreditRecordIntegrityCertificateFile = new FileManagerFE(_financialCapabilityResponseBE.creditRecordIntegrityCertificateFile);
    }
  }
}
class financialCapabilityDto {
  constructor() {
    this.id = "";
    this.cpalicenseNumber = "";
    this.cpaIdentityNumber = "";
    this.creditRecordIntegrityCertificateDate = new Date();
    this.creditRecordIntegrityCertificateFileId = null;
    this.financialStatementDescription = "";
    this.certificateOfZakatIncome = "";
    this.facilityId = "";
    this.addedQualificationFinancialStatements = [];
  }
}
// financial statement
class QualificationFinancialStatementBE {
  constructor() {
    this.id = "00000000-0000-0000-0000-000000000000";
    this.description = "";
    this.financialStatementFile = new FileManagerBE();
  }
}
class QualificationFinancialStatementFE {
  constructor(qualificationFinancialStatementBE) {
    this.qualificationFinancialStatementBE = qualificationFinancialStatementBE;
    this.Id = "00000000-0000-0000-0000-000000000000";
    this.Description = "";
    this.FinancialStatementFile = null;
    if (qualificationFinancialStatementBE) {
      this.Id = qualificationFinancialStatementBE.id;
      this.Description = qualificationFinancialStatementBE.description;
      this.FinancialStatementFile = new FileManagerFE(qualificationFinancialStatementBE.financialStatementFile);
    }
  }
}
//file manager
class FileManagerBE {
  constructor() {
    this.id = "00000000-0000-0000-0000-000000000000";
    this.fileDescription = "";
    this.filePath = "";
    this.fileType = "";
  }
}
class FileManagerFE {
  constructor(fileManagerBE) {
    this.fileManagerBE = fileManagerBE;
    this.Id = "00000000-0000-0000-0000-000000000000";
    this.FileDescription = "";
    this.FilePath = "";
    this.FileType = "";
    if (fileManagerBE) {
      this.Id = fileManagerBE.id;
      this.FileDescription = fileManagerBE.fileDescription;
      this.FilePath = fileManagerBE.filePath;
      this.FileType = fileManagerBE.fileType;
    }
  }
}

/***/ }),

/***/ 11280:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/features/facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationAdditionInstitutionalCapacityAndHrRequirementDto": () => (/* binding */ QualificationAdditionInstitutionalCapacityAndHrRequirementDto),
/* harmony export */   "QualificationExistSystemsApprovalCertificationDto": () => (/* binding */ QualificationExistSystemsApprovalCertificationDto),
/* harmony export */   "QualificationLocalAndInternationalIssuedCertificationDto": () => (/* binding */ QualificationLocalAndInternationalIssuedCertificationDto)
/* harmony export */ });
/* harmony import */ var _shared_models_sys_file_manager_create_update_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/models/sys-file-manager-create-update-dto */ 37086);
/* harmony import */ var _financial_capability_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./financial-capability.model */ 8519);


class QualificationAdditionInstitutionalCapacityAndHrRequirementDto {
  constructor() {
    this.id = "";
    this.accountingSupervisionForWafiSalesProjectsFile = new _shared_models_sys_file_manager_create_update_dto__WEBPACK_IMPORTED_MODULE_0__.SysFileManagerCreateUpdateDto();
    this.engineeringSupervisionForWafiSalesProjectsFile = new _shared_models_sys_file_manager_create_update_dto__WEBPACK_IMPORTED_MODULE_0__.SysFileManagerCreateUpdateDto();
    this.existSystemsApprovalCertifications = [];
    this.localAndInternationalIssuedCertifications = [];
  }
}
class QualificationExistSystemsApprovalCertificationDto {
  constructor() {
    this.id = "00000000-0000-0000-0000-000000000000";
    this.existSystemsApprovalCertificationFile = new _financial_capability_model__WEBPACK_IMPORTED_MODULE_1__.FileManagerBE();
  }
}
class QualificationLocalAndInternationalIssuedCertificationDto {
  constructor() {
    this.id = "00000000-0000-0000-0000-000000000000";
    this.localAndInternationalIssuedCertificationFile = new _financial_capability_model__WEBPACK_IMPORTED_MODULE_1__.FileManagerBE();
  }
}

/***/ }),

/***/ 13583:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/features/facilities/services/facilityProfile/facility-profile.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacilityProfileService": () => (/* binding */ FacilityProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);




class FacilityProfileService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.facilityBasicDataBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  }
  GetFacilityById(GetById) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.facility.GetById}/${GetById}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  // update api
  // updatFacility(data : FacilityBasicUpdateInfo): Observable<FacilityBasicInfo>{
  //   return this._httpClient.put<CoreResponseDTO<FacilityBasicInfo>>(Configuration.APIs.facility.updat, data ).pipe(
  //     map((res: CoreResponseDTO<FacilityBasicInfo>) => {
  //       return res.data as FacilityBasicInfo
  //     })
  //   )
  // }
  updatFacility(obj) {
    return this._httpClient.put(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.facility.update, obj).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
  // update
  updateFacilityBasicDataBS(data) {
    this.facilityBasicDataBS.next(data);
  }
  getFacilityBasicDataBS() {
    return this.facilityBasicDataBS.asObservable();
  }
}
FacilityProfileService.ɵfac = function FacilityProfileService_Factory(t) {
  return new (t || FacilityProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
FacilityProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FacilityProfileService,
  factory: FacilityProfileService.ɵfac
});

/***/ }),

/***/ 99056:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/features/license/models/certified-license-data-dto.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCertifiedLicenseDataDto": () => (/* binding */ UpdateCertifiedLicenseDataDto)
/* harmony export */ });
class UpdateCertifiedLicenseDataDto {
  constructor() {
    this.certifiedNumber = "";
    this.startOn = "";
    this.endOn = "";
  }
}

/***/ }),

/***/ 95223:
/*!*******************************************************************!*\
  !*** ./src/app/modules/features/license/models/tab-code.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseRequestTabCode": () => (/* binding */ LicenseRequestTabCode),
/* harmony export */   "TabCode": () => (/* binding */ TabCode)
/* harmony export */ });
var TabCode;
(function (TabCode) {
  TabCode["mainData"] = "MainData";
  TabCode["projectData"] = "ProjectData";
  TabCode["feasibilityStudy"] = "FeasibilityStudy";
  TabCode["projectParties"] = "ProjectParties";
  TabCode["certifiedLicenseData"] = "CertifiedLicenseData";
  TabCode["priceFinancialAnalysis"] = "PriceFinancialAnalysis";
  TabCode["listOfProjectExpectedIncome"] = "ListOfProjectExpectedIncome";
  TabCode["expectedAnnualBalanceSheet"] = "ExpectedAnnualBalanceSheet";
  TabCode["statementOfExpectedAnnualCashFlows"] = "StatementOfExpectedAnnualCashFlows";
  TabCode["licenseProjectFinancialIndicator"] = "LicenseProjectFinancialIndicator";
  TabCode["licenseProjectExpectedFundingSource"] = "LicenseProjectExpectedFundingSource";
  TabCode["realEStateDeveloper"] = "RealEStateDeveloper";
  TabCode["licenseProjectFinancialStatement"] = "LicenseProjectFinancialStatement";
  TabCode["accountKeeper"] = "AccountKeeper";
  TabCode["licenseProjectBackAccount"] = "LicenseProjectBackAccount";
  TabCode["licenseProjectMainData"] = "LicenseProjectMainData";
  TabCode["licenseProjectAddress"] = "LicenseProjectAddress";
  TabCode["licenseProjectExternalAddress"] = "LicenseProjectExternalAddress";
  TabCode["projectLandData"] = "ProjectLandData";
  TabCode["licenseProjectDeed"] = "LicenseProjectDeed";
  TabCode["licenseProjectZone"] = "LicenseProjectZone";
  TabCode["licenseProjectModel"] = "LicenseProjectModel";
  TabCode["licenseProjectCodes"] = "LicenseProjectCodes";
  TabCode["licenseProjectDesign"] = "LicenseProjectDesign";
  TabCode["constructionLicense"] = "ConstructionLicense";
  TabCode["externalProjectInformation"] = "ExternalProjectInformation";
  TabCode["licenseProjectQuantitiesTableFiles"] = "LicenseProjectQuantitiesTableFiles";
  TabCode["licenseProjectServices"] = "LicenseProjectServices";
  TabCode["projectUnitsStatement"] = "ProjectUnitsStatement";
  TabCode["licenseProjectEngineeringConsultants"] = "LicenseProjectEngineeringConsultants";
  TabCode["licenseProjectCharteredAccountants"] = "LicenseProjectCharteredAccountants";
  TabCode["licenseProjectSubDevelopers"] = "LicenseProjectSubDevelopers";
  TabCode["licenseProjectRealStateMarketers"] = "LicenseProjectRealStateMarketers";
  TabCode["sysLicenseBeneficiaryContractForms"] = "SysLicenseBeneficiaryContractForms";
  TabCode["FinalTenantContract"] = "FinalTenantContract";
  TabCode["licenseProjectDelegator"] = "LicenseProjectDelegator";
  TabCode["licenseProjectMainRealStateDeveloper"] = "LicenseProjectMainRealStateDeveloper";
  TabCode["projectDocumentData"] = "ProjectDocumentData";
  TabCode["exhibitionData"] = "LicenseProjectExhibition";
  TabCode["licenseProjectUnits"] = "LicenseProjectUnits";
  TabCode["licenseProjectDeveloper"] = "LicenseProjectDeveloper";
  TabCode["requestAttachments"] = "RequestAttachments";
  TabCode["visitorEngineeringConsultant"] = "VisitorEngineeringConsultant";
  TabCode["beneficiaryContractFormAdditionalTerms"] = "BeneficiaryContractFormAdditionalTerms";
  TabCode["licenseProjectPromissoryNote"] = "LicenseProjectPromissoryNote";
  // Data Section
  TabCode["facilityInfo"] = "FacilityInfo";
  TabCode["licenseProjectFacilityAddress"] = "LicenseProjectFacilityAddress";
  TabCode["customerInfo"] = "CustomerInfo";
  TabCode["licenseProjectExecutiveDirector"] = "LicenseProjectExecutiveDirector";
  TabCode["licenseProjectContactOfficer"] = "LicenseProjectContactOfficer";
  TabCode["licenseProjecFinalBeneficiaryContactInformation"] = "LicenseProjecFinalBeneficiaryContactInformation";
})(TabCode || (TabCode = {}));
var LicenseRequestTabCode;
(function (LicenseRequestTabCode) {
  LicenseRequestTabCode["MainRequest"] = "MainRequest";
  LicenseRequestTabCode["ProjectData"] = "ProjectData";
  LicenseRequestTabCode["DeveloperData"] = "DeveloperData";
  LicenseRequestTabCode["EngineeringConsultantData"] = "EngineeringConsultantData";
  LicenseRequestTabCode["AccountantData"] = "AccountantData";
})(LicenseRequestTabCode || (LicenseRequestTabCode = {}));

/***/ }),

/***/ 68478:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/features/license/services/chareted-account-project-service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharteredAccountProjectService": () => (/* binding */ CharteredAccountProjectService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);





class CharteredAccountProjectService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  GetLicenseProjectList(pageNumber, pageSize, facilityId) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    queryParams = queryParams.append('pageNumber', pageNumber);
    queryParams = queryParams.append('pageSize', pageSize);
    queryParams = queryParams.append('facilityId', facilityId);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectCharteredAccountant.baseUrl}${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectCharteredAccountant.GetLicenseProjectList}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
}
CharteredAccountProjectService.ɵfac = function CharteredAccountProjectService_Factory(t) {
  return new (t || CharteredAccountProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
CharteredAccountProjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CharteredAccountProjectService,
  factory: CharteredAccountProjectService.ɵfac
});

/***/ }),

/***/ 90787:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/license/services/data-visibility-of-license-project/data-visibility-of-license-project.service.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataVisibilityOfLicenseProjectService": () => (/* binding */ DataVisibilityOfLicenseProjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_shared_models_tabs_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/tabs.model */ 69248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/tabs/tabs.service */ 3408);
/* harmony import */ var src_app_shared_services_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/accordion/accordion.service */ 45426);







class DataVisibilityOfLicenseProjectService {
  constructor(_httpClient, _tabsService, _accordionService) {
    this._httpClient = _httpClient;
    this._tabsService = _tabsService;
    this._accordionService = _accordionService;
    this.DataVisibilityOfLicenseProject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
  }
  GetLicenseRequestHeadersByLicenseProjectId(projectId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.GetLicenseRequestHeadersByLicenseProjectId}/${projectId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
      return res.data;
    }));
  }
  getDataVisibilityOfLicenseProject() {
    return this.DataVisibilityOfLicenseProject.asObservable();
  }
  updateDataVisibilityOfLicenseProject(data) {
    this.DataVisibilityOfLicenseProject.next(data);
  }
  resetDataVisibilityOfLicenseProject() {
    this.DataVisibilityOfLicenseProject.next([]);
  }
  getDataVisibilityOfLicenseProjectForCertainTab(subscriptions, mainTabsComponentList, resetIndex, updateVirticalTab, service = null, secondTap = false) {
    var tabContent = new src_app_shared_models_tabs_model__WEBPACK_IMPORTED_MODULE_1__.Tabs();
    tabContent.tabsComponentList = [];
    subscriptions.push(this.getDataVisibilityOfLicenseProject().subscribe(res => {
      var tabContent = new src_app_shared_models_tabs_model__WEBPACK_IMPORTED_MODULE_1__.Tabs();
      tabContent.tabsComponentList = [];
      mainTabsComponentList.forEach(tab => {
        if (res.includes(tab.tabCode)) {
          tabContent.tabsComponentList.push(tab);
        }
      });
      this.updateTabContent(tabContent, updateVirticalTab, service);
      if (resetIndex) {
        this.resetTabsIndex(service, secondTap);
      }
    }));
  }
  getDataVisibilityOfLicenseProjectForCertainAccordion(subscriptions, mainAccordionComponentList, accordionContent) {
    subscriptions.push(this.getDataVisibilityOfLicenseProject().subscribe(res => {
      mainAccordionComponentList.forEach(accordion => {
        if (res.includes(accordion.accordionCode)) {
          accordionContent.accordionComponentList.push(accordion);
        }
      });
      this._accordionService.updateAccordionContent(accordionContent);
    }));
  }
  updateTabContent(tabContent, updateVirticalTab, service, secondTap = false) {
    if (service) {
      if (updateVirticalTab) {
        service.updateVerticalTabContent(tabContent);
      } else {
        if (secondTap) {
          service.updateSecondTabContent(tabContent);
        } else {
          service.updateTabContent(tabContent);
        }
      }
    } else {
      if (updateVirticalTab) {
        if (secondTap) {
          this._tabsService.updateSecondTabContent(tabContent);
        } else {
          this._tabsService.updateVerticalTabContent(tabContent);
        }
      } else {
        if (secondTap) {
          this._tabsService.updateSecondTabContent(tabContent);
        } else {
          this._tabsService.updateTabContent(tabContent);
        }
      }
    }
  }
  resetTabsIndex(service, secondTap = false) {
    if (service) {
      if (secondTap) {
        service.updateActiveSecondTabIndex(0);
        service.updateActiveVerticalTabIndex(0);
      } else {
        service.updateActiveTabIndex(0);
        service.updateActiveVerticalTabIndex(0);
      }
    } else {
      if (secondTap) {
        this._tabsService.updateActiveSecondTabIndex(0);
        this._tabsService.updateActiveVerticalTabIndex(0);
      } else {
        this._tabsService.updateActiveTabIndex(0);
        this._tabsService.updateActiveVerticalTabIndex(0);
      }
    }
  }
}
DataVisibilityOfLicenseProjectService.ɵfac = function DataVisibilityOfLicenseProjectService_Factory(t) {
  return new (t || DataVisibilityOfLicenseProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_2__.TabsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_shared_services_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_3__.AccordionService));
};
DataVisibilityOfLicenseProjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: DataVisibilityOfLicenseProjectService,
  factory: DataVisibilityOfLicenseProjectService.ɵfac
});

/***/ }),

/***/ 81984:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/enum/qualification-request-type.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationRequestTypeCode": () => (/* binding */ QualificationRequestTypeCode),
/* harmony export */   "QualificationType": () => (/* binding */ QualificationType)
/* harmony export */ });
var QualificationRequestTypeCode;
(function (QualificationRequestTypeCode) {
  QualificationRequestTypeCode["RealStateDeveloper"] = "RED01";
  QualificationRequestTypeCode["RealStateDeveloperMoneyMarketListed"] = "RED02";
  QualificationRequestTypeCode["RealStateDeveloperQualifiedCompanyAlliance"] = "RED03";
  QualificationRequestTypeCode["RealStateMarketer"] = "REM";
  QualificationRequestTypeCode["RealStateBroker"] = "REB";
  QualificationRequestTypeCode["Accountant"] = "Acc";
  QualificationRequestTypeCode["EngineeringConsultant"] = "EC";
  QualificationRequestTypeCode["ContributionAccountant"] = "Acc-REEM";
  QualificationRequestTypeCode["ContributionEngineeringConsultant"] = "EC-REEM";
})(QualificationRequestTypeCode || (QualificationRequestTypeCode = {}));
var QualificationType;
(function (QualificationType) {
  QualificationType["realStateDeveloperQualificationRequest"] = "RED01";
  QualificationType["realStateDeveloperMoneyMarketListedQualificationRequest"] = "RED02";
  QualificationType["realStateDeveloperQualifiedCompanyAllianceQualificationRequest"] = "RED03";
  QualificationType["realStateMarketerQualificationRequest"] = "REM";
  QualificationType["realStateBrokerQualificationRequest"] = "REB";
  QualificationType["accountantQualificationRequest"] = "Acc";
  QualificationType["engineeringConsultantQualificationRequest"] = "EC";
  QualificationType["contributionAccountantQualificationRequest"] = "Acc-REEM";
  QualificationType["contributionEngineeringConsultantQualificationRequest"] = "EC-REEM";
  QualificationType["realEstateDeveloperSpecializingInRealEstateParticipation"] = "REEM";
})(QualificationType || (QualificationType = {}));

/***/ }),

/***/ 48276:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/request-details.model.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestPhaseTypes": () => (/* binding */ RequestPhaseTypes)
/* harmony export */ });
var RequestPhaseTypes;
(function (RequestPhaseTypes) {
  RequestPhaseTypes[RequestPhaseTypes["done"] = 1] = "done";
  RequestPhaseTypes[RequestPhaseTypes["current"] = 2] = "current";
  RequestPhaseTypes[RequestPhaseTypes["next"] = 3] = "next";
})(RequestPhaseTypes || (RequestPhaseTypes = {}));

/***/ }),

/***/ 17170:
/*!******************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/request-list.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internalStatusId": () => (/* binding */ internalStatusId)
/* harmony export */ });
var internalStatusId;
(function (internalStatusId) {
  internalStatusId[internalStatusId["None"] = 0] = "None";
  ///<summary>تم إضافة الطلب</summary>
  internalStatusId[internalStatusId["RequestAccepted"] = 1] = "RequestAccepted";
  ///<summary>تم إرسال الطلب للمدير ولم يتم التوزيع</summary>
  internalStatusId[internalStatusId["RequestVerifiedAssignedToAdmin"] = 2] = "RequestVerifiedAssignedToAdmin";
  ///<summary>تم إرسال الطلب للدراسة</summary>
  internalStatusId[internalStatusId["RequestIsBeingProcessed"] = 3] = "RequestIsBeingProcessed";
  ///<summary>جارى دراسة الطلب</summary>
  internalStatusId[internalStatusId["RequestHasBeenSentForReview"] = 4] = "RequestHasBeenSentForReview";
  ///<summary>تم دراسة الطلب وإرسال الملاحظات</summary>
  internalStatusId[internalStatusId["RequestProcessedAndFeedbackSent"] = 5] = "RequestProcessedAndFeedbackSent";
  ///<summary>تم معالجة الملاحظات وإرسال الطلب</summary>
  internalStatusId[internalStatusId["FeedbackProcessedAndRequestSent"] = 6] = "FeedbackProcessedAndRequestSent";
  ///<summary>تم رفض الطلب</summary>
  internalStatusId[internalStatusId["RequestRejected"] = 7] = "RequestRejected";
  ///<summary>تم الموافقة على الطلب</summary>
  internalStatusId[internalStatusId["RequTheRequestHasBeenApproved"] = 8] = "RequTheRequestHasBeenApproved";
  ///<summary>تم إصدار شهادة التأهيل</summary>
  internalStatusId[internalStatusId["QualificationCertificateIssued"] = 9] = "QualificationCertificateIssued";
})(internalStatusId || (internalStatusId = {}));

/***/ }),

/***/ 69946:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/services/requests/request-service.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);






class RequestService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.requestSummary$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.facility$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.CertifiedFacilityEngineers$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.DistinctiveAdditionalTechnicalCapabilities$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.EngineersWithSufficientTrainingForTheEngineeringConsultan$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.FacilityBasicInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.FinancialCapabilitiesRequirements$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.JobRequirementsAndHumanResources$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.NationalAddresses$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.TechnicalCapabilitiesRequirements$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.WafiTraining$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.seclectRequest$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.AssignedEmpolyee$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    // RequestNotes$: BehaviorSubject<RequestNotesData | null> = new BehaviorSubject<RequestNotesData | null>(null)
    this.dataIsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  CreateRequestSummary(request) {
    this.requestSummary$.next(request);
    console.log(this.requestSummary$.asObservable());
  }
  // get
  getRequestSummary() {
    return this.requestSummary$.asObservable();
  }
  CreateFacility(facility) {
    this.facility$.next(facility);
  }
  // get
  getFacility() {
    return this.facility$.asObservable();
  }
  GetDraftRequestByFacilityId(facilityId, requestTypeCode) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.facility.getDraftRequestByFacilityId}/${facilityId}/${requestTypeCode}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  // GetRequestByCode(requestCode: string): Observable<RequestDetails> {
  //   return this._httpClient
  //     .get<CoreResponseDTO<RequestDetails>>(
  //       `${Configuration.APIs.QualificationRequestHeader.getRequestByCode}/${requestCode}`
  //     )
  //     .pipe(
  //       map((res: CoreResponseDTO<RequestDetails>) => {
  //         return res.data as RequestDetails;
  //       })
  //     );
  // }
  GetQualificationRequestHeaderByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestHeader.GetFacilityByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  getQualificationRequests(pageIndex, pageSize, searchText, currentSortColumn, currentSortOrder) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchText", searchText);
    if (currentSortOrder) {
      queryParams = queryParams.set("sortType", currentSortOrder);
    }
    if (currentSortColumn) {
      queryParams = queryParams.append("columnName", currentSortColumn);
    }
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestHeader.GetQualificationRequests}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  setSelectedRequestIdInLocalStorage(id) {
    localStorage.setItem("seclectRequest", id);
  }
  getSelectedRequestIdFromLocalStorage() {
    let seclectRequest = localStorage.getItem("seclectRequest");
    return seclectRequest;
  }
  clearRequestFromLocalStorage() {
    localStorage.removeItem("seclectRequest");
  }
  setRequestCodeInLocalStorage(code) {
    localStorage.setItem('requestCode', code);
  }
  getRequestCodeFromLocalStorage() {
    let code = localStorage.getItem('requestCode');
    return code;
  }
  clearRequestCodeFromLocalStorage() {
    localStorage.removeItem('requestCode');
  }
  setFacilityIdInLocalStorage(id) {
    localStorage.setItem('facilityId', id);
  }
  getFacilityIdFromLocalStorage() {
    let code = localStorage.getItem('facilityId');
    return code;
  }
  clearFacilityIdFromLocalStorage() {
    localStorage.removeItem('facilityId');
  }
  GetRequestNotesByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestProcessingLog.GetByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  GetRequestLogByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestLog.GetByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res;
    }));
  }
  compile(requestId, notes) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationServiceRequest.Compile}`, {
      requestId,
      notes
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone;
    }));
  }
  GetSysqualificationType() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.SysQualificationTypeInfo.GetForWafi}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.isDone) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
}
RequestService.ɵfac = function RequestService_Factory(t) {
  return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
RequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: RequestService,
  factory: RequestService.ɵfac
});

/***/ }),

/***/ 79020:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contributions-qualifying/dataModels/request-list.model.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internalStatusId": () => (/* binding */ internalStatusId)
/* harmony export */ });
var internalStatusId;
(function (internalStatusId) {
  internalStatusId[internalStatusId["None"] = 0] = "None";
  ///<summary>تم إضافة الطلب</summary>
  internalStatusId[internalStatusId["RequestAccepted"] = 1] = "RequestAccepted";
  ///<summary>تم إرسال الطلب للمدير ولم يتم التوزيع</summary>
  internalStatusId[internalStatusId["RequestVerifiedAssignedToAdmin"] = 2] = "RequestVerifiedAssignedToAdmin";
  ///<summary>تم إرسال الطلب للدراسة</summary>
  internalStatusId[internalStatusId["RequestIsBeingProcessed"] = 3] = "RequestIsBeingProcessed";
  ///<summary>جارى دراسة الطلب</summary>
  internalStatusId[internalStatusId["RequestHasBeenSentForReview"] = 4] = "RequestHasBeenSentForReview";
  ///<summary>تم دراسة الطلب وإرسال الملاحظات</summary>
  internalStatusId[internalStatusId["RequestProcessedAndFeedbackSent"] = 5] = "RequestProcessedAndFeedbackSent";
  ///<summary>تم معالجة الملاحظات وإرسال الطلب</summary>
  internalStatusId[internalStatusId["FeedbackProcessedAndRequestSent"] = 6] = "FeedbackProcessedAndRequestSent";
  ///<summary>تم رفض الطلب</summary>
  internalStatusId[internalStatusId["RequestRejected"] = 7] = "RequestRejected";
  ///<summary>تم الموافقة على الطلب</summary>
  internalStatusId[internalStatusId["RequTheRequestHasBeenApproved"] = 8] = "RequTheRequestHasBeenApproved";
  ///<summary>تم إصدار شهادة التأهيل</summary>
  internalStatusId[internalStatusId["QualificationCertificateIssued"] = 9] = "QualificationCertificateIssued";
})(internalStatusId || (internalStatusId = {}));

/***/ }),

/***/ 57717:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contributions-qualifying/services/requests/request-service.service.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);






class RequestService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.requestSummary$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.facility$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.CertifiedFacilityEngineers$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.DistinctiveAdditionalTechnicalCapabilities$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.EngineersWithSufficientTrainingForTheEngineeringConsultan$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.FacilityBasicInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.FinancialCapabilitiesRequirements$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.JobRequirementsAndHumanResources$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.NationalAddresses$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.TechnicalCapabilitiesRequirements$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.WafiTraining$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.seclectRequest$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.AssignedEmpolyee$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    // RequestNotes$: BehaviorSubject<RequestNotesData | null> = new BehaviorSubject<RequestNotesData | null>(null)
    this.dataIsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  CreateRequestSummary(request) {
    this.requestSummary$.next(request);
    console.log(this.requestSummary$.asObservable());
  }
  // get
  getRequestSummary() {
    return this.requestSummary$.asObservable();
  }
  CreateFacility(facility) {
    this.facility$.next(facility);
  }
  // get
  getFacility() {
    return this.facility$.asObservable();
  }
  GetDraftRequestByFacilityId(facilityId, requestTypeCode) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.facility.getDraftRequestByFacilityId}/${facilityId}/${requestTypeCode}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  // GetRequestByCode(requestCode: string): Observable<RequestDetails> {
  //   return this._httpClient
  //     .get<CoreResponseDTO<RequestDetails>>(
  //       `${Configuration.APIs.QualificationRequestHeader.getRequestByCode}/${requestCode}`
  //     )
  //     .pipe(
  //       map((res: CoreResponseDTO<RequestDetails>) => {
  //         return res.data as RequestDetails;
  //       })
  //     );
  // }
  GetQualificationRequestHeaderByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestHeader.GetFacilityByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  getQualificationRequests(pageIndex, pageSize, searchtext, currentSortColumn, currentSortOrder) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchtext", searchtext);
    if (currentSortOrder) {
      queryParams = queryParams.set("sortType", currentSortOrder);
    }
    if (currentSortColumn) {
      queryParams = queryParams.append("columnName", currentSortColumn);
    }
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestHeader.GetQualificationRequests}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  setSelectedRequestIdInLocalStorage(id) {
    localStorage.setItem("seclectRequest", id);
  }
  getSelectedRequestIdFromLocalStorage() {
    let seclectRequest = localStorage.getItem("seclectRequest");
    return seclectRequest;
  }
  clearRequestFromLocalStorage() {
    localStorage.removeItem("seclectRequest");
  }
  setRequestCodeInLocalStorage(code) {
    localStorage.setItem('requestCode', code);
  }
  getRequestCodeFromLocalStorage() {
    let code = localStorage.getItem('requestCode');
    return code;
  }
  clearRequestCodeFromLocalStorage() {
    localStorage.removeItem('requestCode');
  }
  setFacilityIdInLocalStorage(id) {
    localStorage.setItem('facilityId', id);
  }
  getFacilityIdFromLocalStorage() {
    let code = localStorage.getItem('facilityId');
    return code;
  }
  clearFacilityIdFromLocalStorage() {
    localStorage.removeItem('facilityId');
  }
  GetRequestNotesByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestProcessingLog.GetByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  GetRequestLogByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestLog.GetByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res;
    }));
  }
  compile(requestId, notes) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationServiceRequest.Compile}`, {
      requestId,
      notes
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone;
    }));
  }
  GetSysqualificationType() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.SysQualificationTypeInfo.GetAllRealStateContribution}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.isDone) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
}
RequestService.ɵfac = function RequestService_Factory(t) {
  return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
RequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: RequestService,
  factory: RequestService.ɵfac
});

/***/ }),

/***/ 60657:
/*!******************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-auth/models/login.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUserTypeEnum": () => (/* binding */ LoginUserTypeEnum),
/* harmony export */   "UserType": () => (/* binding */ UserType)
/* harmony export */ });
var UserType;
(function (UserType) {
  UserType[UserType["employee"] = 0] = "employee";
  UserType[UserType["client"] = 1] = "client";
})(UserType || (UserType = {}));
var LoginUserTypeEnum;
(function (LoginUserTypeEnum) {
  LoginUserTypeEnum[LoginUserTypeEnum["finalBeneficiary"] = 0] = "finalBeneficiary";
  LoginUserTypeEnum[LoginUserTypeEnum["delegateWafiPartner"] = 1] = "delegateWafiPartner";
  LoginUserTypeEnum[LoginUserTypeEnum["wafiPartner"] = 2] = "wafiPartner";
  LoginUserTypeEnum[LoginUserTypeEnum["Employee"] = 3] = "Employee";
})(LoginUserTypeEnum || (LoginUserTypeEnum = {}));

/***/ }),

/***/ 47859:
/*!*************************************************!*\
  !*** ./src/app/shared/models/customer.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeFacilityRegistrationDto": () => (/* binding */ EmployeeFacilityRegistrationDto),
/* harmony export */   "RegistrationStatus": () => (/* binding */ RegistrationStatus),
/* harmony export */   "customerResponse": () => (/* binding */ customerResponse),
/* harmony export */   "facilityBusinessType": () => (/* binding */ facilityBusinessType),
/* harmony export */   "facilityResponse": () => (/* binding */ facilityResponse),
/* harmony export */   "nIdType": () => (/* binding */ nIdType)
/* harmony export */ });
class customerResponse {
  constructor() {
    this.id = '';
    this.nidnumber = '';
    this.fullName = '';
    this.nationality = '';
    this.mobile1 = '';
    this.mobile2 = '';
    this.email = '';
    this.loginUserType = null;
    this.facilities = [];
    this.isDelegator = false;
    this.isEmployee = false;
    this.isProjectManager = false;
    this.profileImageFile = null;
    this.profileImageFileId = '';
  }
}
var nIdType;
(function (nIdType) {
  nIdType[nIdType["citizen"] = 0] = "citizen";
  nIdType[nIdType["resident"] = 1] = "resident";
})(nIdType || (nIdType = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
  RegistrationStatus[RegistrationStatus["wrongId"] = 0] = "wrongId";
  RegistrationStatus[RegistrationStatus["rightId"] = 1] = "rightId";
  RegistrationStatus[RegistrationStatus["existIdWithoutFacility"] = 2] = "existIdWithoutFacility";
  RegistrationStatus[RegistrationStatus["customerIsExist"] = 3] = "customerIsExist";
  RegistrationStatus[RegistrationStatus["isDelegator"] = 4] = "isDelegator";
  RegistrationStatus[RegistrationStatus["finalBeneficiary"] = 5] = "finalBeneficiary";
})(RegistrationStatus || (RegistrationStatus = {}));
class EmployeeFacilityRegistrationDto {
  constructor() {
    this.isNewFacility = false;
    this.facilityRegistration = new facilityResponse();
  }
}
// Facility
class facilityResponse {
  constructor() {
    this.id = '';
    this.facilityCode = '';
    this.commercialRegisterNumber = '';
    this.facilityName = '';
    this.commercialRegisterStartDate = new Date();
    this.commercialRegisterEndDate = new Date();
    this.facilityType = '';
    this.facilityBusinessTypes = [];
  }
}
class facilityBusinessType {
  constructor() {
    this.id = '';
    this.businessType = '';
  }
}

/***/ }),

/***/ 25433:
/*!******************************************************************!*\
  !*** ./src/app/shared/models/enums/button-classes-type.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonClassesType": () => (/* binding */ ButtonClassesType)
/* harmony export */ });
var ButtonClassesType;
(function (ButtonClassesType) {
  ButtonClassesType["secondary"] = "btn-secondary";
  ButtonClassesType["primary"] = "btn-primary";
  ButtonClassesType["success"] = "btn-success ";
  ButtonClassesType["outlineSuccess"] = "btn-outline-success";
})(ButtonClassesType || (ButtonClassesType = {}));

/***/ }),

/***/ 38810:
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/rxjs@7.8.0/node_modules/rxjs/dist/esm/internal/observable/iif.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iif": () => (/* binding */ iif)
/* harmony export */ });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ 13650);

function iif(condition, trueResult, falseResult) {
  return (0,_defer__WEBPACK_IMPORTED_MODULE_0__.defer)(() => condition() ? trueResult : falseResult);
}

/***/ }),

/***/ 81681:
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/rxjs@7.8.0/node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 90064);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 51234);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 60433);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 53546);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 56155);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 7233);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 23284:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/rxjs@7.8.0/node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatestWith": () => (/* binding */ combineLatestWith)
/* harmony export */ });
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineLatest */ 81681);

function combineLatestWith(...otherSources) {
  return (0,_combineLatest__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(...otherSources);
}

/***/ }),

/***/ 22510:
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/rxjs@7.8.0/node_modules/rxjs/dist/esm/internal/operators/every.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "every": () => (/* binding */ every)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 51234);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 33051);


function every(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      if (!predicate.call(thisArg, value, index++, source)) {
        subscriber.next(false);
        subscriber.complete();
      }
    }, () => {
      subscriber.next(true);
      subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 60433:
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/rxjs@7.8.0/node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsOrArgArray": () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const {
  isArray
} = Array;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

/***/ })

}]);
//# sourceMappingURL=common.js.map