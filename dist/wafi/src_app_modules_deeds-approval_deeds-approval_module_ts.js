"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_deeds-approval_deeds-approval_module_ts"],{

/***/ 79065:
/*!*************************************************************************!*\
  !*** ./src/app/modules/deeds-approval/deeds-approval-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeedsApprovalRoutingModule": () => (/* binding */ DeedsApprovalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _pages_deed_approval_deed_approval_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/deed-approval/deed-approval.component */ 16158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);




const routes = [
// {
//   path: '',
//   component: DeedApprovalComponent
// },
{
  path: 'agreement/:Id',
  component: _pages_deed_approval_deed_approval_component__WEBPACK_IMPORTED_MODULE_0__.DeedApprovalComponent
}];
class DeedsApprovalRoutingModule {}
DeedsApprovalRoutingModule.ɵfac = function DeedsApprovalRoutingModule_Factory(t) {
  return new (t || DeedsApprovalRoutingModule)();
};
DeedsApprovalRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DeedsApprovalRoutingModule
});
DeedsApprovalRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeedsApprovalRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 94801:
/*!*****************************************************************!*\
  !*** ./src/app/modules/deeds-approval/deeds-approval.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeedsApprovalModule": () => (/* binding */ DeedsApprovalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _deeds_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deeds-approval-routing.module */ 79065);
/* harmony import */ var _pages_deed_approval_deed_approval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/deed-approval/deed-approval.component */ 16158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var _services_Approve_Owner_licenseProject_land_owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/Approve-Owner/licenseProject-land-owner.service */ 96630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);









class DeedsApprovalModule {}
DeedsApprovalModule.ɵfac = function DeedsApprovalModule_Factory(t) {
  return new (t || DeedsApprovalModule)();
};
DeedsApprovalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: DeedsApprovalModule
});
DeedsApprovalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_services_Approve_Owner_licenseProject_land_owner_service__WEBPACK_IMPORTED_MODULE_3__.LicenseProjectLandOwnerService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _deeds_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeedsApprovalRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DeedsApprovalModule, {
    declarations: [_pages_deed_approval_deed_approval_component__WEBPACK_IMPORTED_MODULE_1__.DeedApprovalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _deeds_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeedsApprovalRoutingModule]
  });
})();

/***/ }),

/***/ 5830:
/*!*********************************************************************!*\
  !*** ./src/app/modules/deeds-approval/models/approve-deed-owner.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproveDeedOwnerDto": () => (/* binding */ ApproveDeedOwnerDto)
/* harmony export */ });
class ApproveDeedOwnerDto {
  constructor() {
    this.id = '';
    this.isApproved = false;
    this.agreementFileId = null;
  }
}

/***/ }),

/***/ 16158:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/deeds-approval/pages/deed-approval/deed-approval.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeedApprovalComponent": () => (/* binding */ DeedApprovalComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _models_approve_deed_owner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/approve-deed-owner */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _services_Approve_Owner_licenseProject_land_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Approve-Owner/licenseProject-land-owner.service */ 96630);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 78824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/file-uploader/file-uploader.component */ 37985);











function DeedApprovalComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.localization.requiredErrorMsg, " ");
  }
}
function DeedApprovalComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.localization.requiredErrorMsg, " ");
  }
}
function DeedApprovalComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeedApprovalComponent_div_55_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.localization.save, " ");
  }
}
class DeedApprovalComponent {
  get controls() {
    return this.projectLandOwnerForm.controls;
  }
  constructor(_router, _activeRoute, _licenseProjectLandOwnerService, _formBuilder, _toastrNotificationService, titleService) {
    this._router = _router;
    this._activeRoute = _activeRoute;
    this._licenseProjectLandOwnerService = _licenseProjectLandOwnerService;
    this._formBuilder = _formBuilder;
    this._toastrNotificationService = _toastrNotificationService;
    this.titleService = titleService;
    this.licenseProjectLandOwnerInfoDto = null;
    this.approveDeedOwnerDto = new _models_approve_deed_owner__WEBPACK_IMPORTED_MODULE_1__.ApproveDeedOwnerDto();
    this.showValidation = false;
    this.approve = false;
    this.localization = {
      facilityData: 'بيانات المطور عقاري',
      yes: "نعم",
      no: 'لا',
      title: 'الموافقة على الاتفاقية مع المطور عقاري',
      deedData: 'بيانات الصك',
      number: 'رقم الصك',
      issueOn: 'تاريخ الصك',
      typeId: 'نوع مالك الأرض',
      nationalId: 'رقم هوية مالك الصك / مالك منفعتها',
      CRA: 'رقم السجل التجاري',
      name: 'اسم مالك الصك /مالك منفعتها',
      mobileNumber: 'رقم جوال مالك الصك /مالك منفعتها',
      agreementFileId: 'ملف الاتفاقية بين المطور عقاري ومالك الأرض',
      PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
      numberPattern: 'من فضلك ادخل رقم صحيح',
      requiredErrorMsg: 'حقل مطلوب',
      save: 'حفظ البيانات',
      savedSuccessfully: 'تم الحفظ',
      dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
      or: "او",
      enter: "دخول",
      accept: 'موافق',
      realEstateContributions: "المساهمات عقارية",
      wafi: "الهيئة العامة للعقار",
      agreement: 'الموافقة على الاتفاقية',
      appTitle: "تهميش الصكوك"
    };
    this.singleFileUploaderData = {
      multiple: true
    };
    this.projectLandOwnerForm = this._formBuilder.group({
      id: ['00000000-0000-0000-0000-000000000000', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      agreementFileId: [],
      isApproved: [1]
    });
  }
  setAppTitle() {
    this.titleService.setTitle(this.localization.appTitle);
  }
  /**
   * navigateToWafiLogin
   */
  navigateToWafiLogin() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}`);
  }
  /**
   * navigateToRealEstateContributionsLogin
   */
  navigateToRealEstateContributionsLogin() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsAuth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsAuth.login}`);
  }
  ngOnInit() {
    this.setAppTitle();
    let id = this._activeRoute.snapshot.params['Id'];
    this.approveDeedOwnerDto.id = id;
    if (id) {
      this._licenseProjectLandOwnerService.getLicenseProjectLandOwnerInfo(id).subscribe(data => {
        this.licenseProjectLandOwnerInfoDto = data;
        console.log(data);
      });
    }
  }
  onFileUploaded(fileData) {
    this.approveDeedOwnerDto.agreementFileId = fileData.eventRes.data[0].id;
    this.controls.agreementFileId.setValue(fileData.eventRes.data[0].id);
  }
  save() {
    console.log('this.controls.isApproved.value');
    console.log(this.controls.isApproved.value);
    console.log(this.controls.agreementFileId.value);
    if (this.approveDeedOwnerDto.agreementFileId == null) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      return;
    }
    this.approveDeedOwnerDto.isApproved = this.controls.isApproved.value == 1;
    this._licenseProjectLandOwnerService.approveOwner(this.approveDeedOwnerDto).subscribe(data => {
      console.log(data);
      this.approve = true;
      this._toastrNotificationService.showSuccess(this.localization.savedSuccessfully);
    });
  }
}
DeedApprovalComponent.ɵfac = function DeedApprovalComponent_Factory(t) {
  return new (t || DeedApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_Approve_Owner_licenseProject_land_owner_service__WEBPACK_IMPORTED_MODULE_2__.LicenseProjectLandOwnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title));
};
DeedApprovalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DeedApprovalComponent,
  selectors: [["app-deed-approval"]],
  decls: 56,
  vars: 17,
  consts: [[1, "landing"], [1, "logo"], ["src", "/assets/images/real-estate-contributions/general/logo-rega-wide-white.svg", "alt", "", 1, "logo-img"], [1, "content"], [1, "title"], [1, "tab-data-section", "mt-5"], [1, "row", "row-gap-4"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value"], ["id", "form-projectLandOwnerForm", 1, "d-flex", "flex-column", "h-100", 3, "formGroup"], [1, "form-group", "mb-4"], [1, "form-label"], [1, "d-flex", "justify-content-between", "w-100"], [1, "form-check", "form-check-inline", "flex-nowrap"], ["id", "control-yes", "type", "radio", "formControlName", "isApproved", "name", "isApproved", 1, "form-check-input", 3, "value"], ["for", "control-yes", 1, "form-check-label"], ["id", "control-no", "type", "radio", "name", "isApproved", "formControlName", "isApproved", 1, "form-check-input", 3, "value"], ["for", "control-no", 1, "form-check-label"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-12", "col-lg-12", "mt-5"], [3, "data", "fileUploaded"], ["class", "actions", 4, "ngIf"], [1, "invalid-feedback", "d-block"], [1, "actions"], [1, "btn", "btn-primary", 3, "click"]],
  template: function DeedApprovalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u0631\u0642\u0645 \u0627\u0644\u0635\u0643");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0635\u0643");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 7)(24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u0645\u0627\u0644\u0643 \u0627\u0644\u0635\u0643");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 7)(29, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\u0631\u0642\u0645 \u0647\u0648\u064A\u0629 \u0645\u0627\u0644\u0643 \u0627\u0644\u0635\u0643");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "form", 10)(35, "div", 7)(36, "div", 11)(37, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 13)(40, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, DeedApprovalComponent_div_48_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 20)(50, "div", 11)(51, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "app-file-uploader", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fileUploaded", function DeedApprovalComponent_Template_app_file_uploader_fileUploaded_53_listener($event) {
        return ctx.onFileUploaded($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, DeedApprovalComponent_div_54_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, DeedApprovalComponent_div_55_Template, 3, 1, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.localization.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.facility == null ? null : ctx.licenseProjectLandOwnerInfoDto.facility.facilityName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner.licenseProjectOwnerDeeds[0].licenseProjectDeed.number, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner.licenseProjectOwnerDeeds[0].licenseProjectDeed.space, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner.nationalIdOrCRA, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.projectLandOwnerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.localization.agreement);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.localization.yes);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.localization.no);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.controls.isApproved.value == null && ctx.showValidation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.localization.agreementFileId);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.singleFileUploaderData);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.controls.agreementFileId.value == null && ctx.showValidation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.approve || (ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner.isApproved) != null && (ctx.licenseProjectLandOwnerInfoDto == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner == null ? null : ctx.licenseProjectLandOwnerInfoDto.licenseProjectLandOwner.isApproved) != true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__.FileUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.landing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 2rem;\n  min-height: 100%;\n  padding: 2rem;\n  background-image: url(\"/assets/images/content/landing/landing-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n    padding: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n@media (min-width: 992px) {\n  .landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n.landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 4.75rem;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 2.5rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 5rem;\n  background-color: white;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: normal;\n  color: #353B3B;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 4.75rem;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  --bs-card-spacer-x: 3rem;\n  --bs-card-spacer-y: 2rem;\n  width: 20rem;\n  min-height: 22.5rem;\n  margin-top: 2rem;\n  box-shadow: 0px 30px 45px 0px rgba(53, 59, 59, 0.1);\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #005257;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    --bs-card-spacer-x: 1rem;\n    --bs-card-spacer-y: 1rem;\n    width: 100%;\n    min-height: 14rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: auto;\n  color: #001F21;\n  font-size: 1.5rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-border-radius: 0.5rem;\n  margin-top: auto;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.wafi[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/content/landing/abstract-wafi.svg\");\n  background-repeat: no-repeat;\n  background-position: 150% center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.rega[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/content/landing/abstract-reca.svg\");\n  background-repeat: no-repeat;\n  background-position: 50% center;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 13rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZWVkcy1hcHByb3ZhbC9wYWdlcy9kZWVkLWFwcHJvdmFsL2RlZWQtYXBwcm92YWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzRUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUZGO0FBSUU7RUFaRjtJQWFJLGFBQUE7SUFDQSxhQUFBO0VBREY7QUFDRjtBQUdFOztFQUVFLG1CQUFBO0FBREo7QUFHSTtFQUpGOztJQUtJLFVBQUE7RUFDSjtBQUNGO0FBR0k7RUFDRSxtQkFBQTtBQUROO0FBR007RUFIRjtJQUlJLGtCQUFBO0VBQU47QUFDRjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkMzQ0k7QUR5Q1I7QUFJSTtFQUxGO0lBTUksV0FBQTtJQUNBLGFBQUE7RUFESjtBQUNGO0FBR0k7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNDdkRDO0FEc0RQO0FBSUk7RUFDRSxpQkFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSk47QUFNTTtFQU5GO0lBT0ksc0JBQUE7SUFDQSxhQUFBO0VBSE47QUFDRjtBQUtNO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbURBQUE7QUFMUjtBQU9RO0VBQ0UseUJBQUE7QUFMVjtBQVFRO0VBZEY7SUFlSSx3QkFBQTtJQUNBLHdCQUFBO0lBRUEsV0FBQTtJQUNBLGlCQUFBO0VBTlI7QUFDRjtBQVFRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5WO0FBUVU7RUFDRSxnQkFBQTtFQUNBLGNDNUdKO0VENkdJLGlCQUFBO0FBTlo7QUFTVTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVBaO0FBV1E7RUFDRSx5RUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUFUVjtBQVlRO0VBQ0UseUVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBVlY7O0FBZ0JBO0VBQ0UsWUFBQTtBQWJGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxhbmRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAycmVtO1xuXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvbGFuZGluZy9sYW5kaW5nLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIHJvdy1nYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5sb2dvLFxuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IDQuNzVyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBtYXgtaGVpZ2h0OiAyLjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLnRpdGxlLFxuICAgIC5vciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6ICRkYXJrO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG5cbiAgICAub3Ige1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuY2FyZHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbHVtbi1nYXA6IDQuNzVyZW07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICByb3ctZ2FwOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIC0tYnMtY2FyZC1zcGFjZXIteDogM3JlbTtcbiAgICAgICAgLS1icy1jYXJkLXNwYWNlci15OiAycmVtO1xuXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgbWluLWhlaWdodDogMjIuNXJlbTtcblxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMzBweCA0NXB4IDBweCByZ2JhKCRkYXJrLCAwLjEpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgLS1icy1jYXJkLXNwYWNlci14OiAxcmVtO1xuICAgICAgICAgIC0tYnMtY2FyZC1zcGFjZXIteTogMXJlbTtcblxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgLS1icy1idG4tcGFkZGluZy15OiAwLjVyZW07XG4gICAgICAgICAgICAtLWJzLWJ0bi1ib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYud2FmaSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9sYW5kaW5nL2Fic3RyYWN0LXdhZmkuc3ZnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUwJSBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJlZ2Ege1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvbGFuZGluZy9hYnN0cmFjdC1yZWNhLnN2Z1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiAxM3JlbTtcbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 96630:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/deeds-approval/services/Approve-Owner/licenseProject-land-owner.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseProjectLandOwnerService": () => (/* binding */ LicenseProjectLandOwnerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);




class LicenseProjectLandOwnerService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  approveOwner(model) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectLandOwner.ApproveOwnerAgreement}`, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLicenseProjectLandOwnerInfo(id) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectLandOwner.GetLicenseProjectLandOwnerInfo}?id=${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res.data ?? null;
    }));
  }
}
LicenseProjectLandOwnerService.ɵfac = function LicenseProjectLandOwnerService_Factory(t) {
  return new (t || LicenseProjectLandOwnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
LicenseProjectLandOwnerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LicenseProjectLandOwnerService,
  factory: LicenseProjectLandOwnerService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_deeds-approval_deeds-approval_module_ts.js.map