"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_features_user-management_user-management_module_ts"],{

/***/ 76331:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/add-facility/add-facility.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFacilityComponent": () => (/* binding */ AddFacilityComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 47720);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 9271);











function AddFacilityComponent_form_1_div_7_div_1_Template(rf, ctx) {
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
function AddFacilityComponent_form_1_div_7_div_2_Template(rf, ctx) {
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
function AddFacilityComponent_form_1_div_7_div_3_Template(rf, ctx) {
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
function AddFacilityComponent_form_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddFacilityComponent_form_1_div_7_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddFacilityComponent_form_1_div_7_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddFacilityComponent_form_1_div_7_div_3_Template, 2, 1, "div", 2);
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
function AddFacilityComponent_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AddFacilityComponent_form_1_div_7_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.addFacilityForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.localization.commercialRegistrationNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx_r0.localization.commercialRegistrationNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, ctx_r0.commercialRegistrationNo.touched && ctx_r0.commercialRegistrationNo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.commercialRegistrationNo.errors);
  }
}
function AddFacilityComponent_div_2_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", activity_r8.businessType, " ");
  }
}
function AddFacilityComponent_div_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddFacilityComponent_div_2_div_43_div_3_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.localization.facilityActivities);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.facilityData.facilityBusinessTypes);
  }
}
function AddFacilityComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14)(6, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 16)(9, "div", 5)(10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 18)(13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 5)(18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 18)(21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 20)(26, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 16)(29, "div", 5)(30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 18)(33, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 5)(37, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 18)(40, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, AddFacilityComponent_div_2_div_43_Template, 4, 2, "div", 22);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 13, ctx_r1.facilityData.commercialRegisterStartDate, "MMM d, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.endDateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 16, ctx_r1.facilityData.commercialRegisterEndDate, "MMM d, y"), " ");
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
  }
}
class AddFacilityComponent {
  constructor(_formBuilder, _customerFacilitiesService, _popupService, _toastrNotificationService, _userDataService) {
    this._formBuilder = _formBuilder;
    this._customerFacilitiesService = _customerFacilitiesService;
    this._popupService = _popupService;
    this._toastrNotificationService = _toastrNotificationService;
    this._userDataService = _userDataService;
    this.subscriptions = [];
    this.showValidation = false;
    this.userData = null;
    this.facilityData = new src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_0__.facilityResponse();
    this.addFacilityForm = this._formBuilder.group({
      commercialRegistrationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.validators.numberOnly)]]
    });
    this.viewMode = false;
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
    this.observePopupEvents();
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
    }));
  }
  get commercialRegistrationNo() {
    return this.addFacilityForm.controls.commercialRegistrationNo;
  }
  save() {
    this.subscriptions.push(this._customerFacilitiesService.FacilityRegister(this.addFacilityForm.controls.commercialRegistrationNo.value, this.userData?.id).subscribe(facilityDataRes => {
      if (facilityDataRes) {
        this.viewMode = true;
        this.userData ? this.userData.facilities[0] = facilityDataRes : {};
        this.facilityData = facilityDataRes;
        this._toastrNotificationService.showSuccess("تم اضافة المنشأة");
        this.closeDialog();
      } else this._toastrNotificationService.showError("لم يتم اضافة  تلك المنشأه  ");
    }));
  }
  observePopupEvents() {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {
      this._popupService.dismissDialog();
    }));
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      this.save();
    }));
  }
  closeDialog() {
    this._popupService.dismissDialog();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
AddFacilityComponent.ɵfac = function AddFacilityComponent_Factory(t) {
  return new (t || AddFacilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__.CustomerFacilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService));
};
AddFacilityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddFacilityComponent,
  selectors: [["app-add-facility"]],
  decls: 3,
  vars: 2,
  consts: [["id", "form-addFacilityComponent", 1, "addFacilityComponent"], ["id", "form-addFacilityForm", 3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["id", "form-addFacilityForm", 3, "formGroup"], [1, "row", "row-gap-3"], [1, "col-12", "col-lg-6"], [1, "form-group"], ["for", "commercialRegistrationNo", 1, "form-label"], ["type", "text", "formControlName", "commercialRegistrationNo", "id", "control-commercialRegistrationNo", 1, "form-control", 3, "placeholder", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], ["role", "alert", 1, "alert", "alert-success"], ["aria-hidden", "false", "aria-label", "Example check_circle icon", "fontIcon", "check_circle"], [1, "px-1"], [1, "tab-data-section", "mt-4"], [1, "title"], [1, "row", "row-gap-4"], [1, "key"], [1, "value"], [1, "icon", "material-icons"], [1, "tab-data-section"], [1, "title", "mb-2"], ["class", "col-12 col-lg-6", 4, "ngIf"], ["class", "value", 4, "ngFor", "ngForOf"]],
  template: function AddFacilityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddFacilityComponent_form_1_Template, 8, 7, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddFacilityComponent_div_2_Template, 44, 19, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.viewMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.viewMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  cursor: pointer;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-inline-end: none;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8rem;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.redir-link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.rega[_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #005257;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  column-gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #dae5e1;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: normal;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .form-title[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy91c2VyLW1hbmFnZW1lbnQvY29tcG9uZW50L2FkZC1mYWNpbGl0eS9hZGQtZmFjaWxpdHkuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fc3RlcHBlci1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L190YWItY29udGVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBRUksNkJBQUE7QUNOSjtBRFFJO0VBQ0ksNkJBQUE7QUNOUjs7QURVQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ1BKO0FEU0k7RUFDSSxlRXFDTztFRm5DUCxjRUtHO0FEYlg7QURVUTtFQUNJLGNFRUQ7QURWWDs7QURjSTtFQUNJLHVCQUFBO0FDWFI7O0FEZUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSjtBRGVJO0VBQ0ksVUFBQTtBQ2JSOztBRG1CSTs7RUFDSSxlRU1PO0VGTFAsY0VwQ0k7QURxQlo7O0FEbUJBO0VBQ0ksZUFBQTtBQ2hCSjtBRGtCSTtFQUVJLHFCQUFBO0FDakJSO0FEbUJRO0VBQ0ksMEJBQUE7QUNqQlo7O0FEc0JBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHdCUTtFQUNJLGNFN0RBO0FEdUNaOztBRXZEQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUZ5REo7QUV2REk7RUFDSSxVQUFBO0FGeURSOztBRXJEQTtFQUNJLG1CQUFBO0VBQ0EsZUR3Q1c7RUN2Q1gsbUJBQUE7RUFFQSxjRE9PO0FEZ0RYO0FFckRJO0VBQ0ksY0RJRztBRG1EWDtBRXBESTtFQUNJLGdCQUFBO0FGc0RSOztBR2pGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBSG1GRjtBR2pGRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkZNUTtBRDJFWjtBRy9FSTtFQUNFLGNGTUs7QUQyRVg7QUc3RUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUgrRUo7QUc1RUU7RUFDRSxnQkFBQTtBSDhFSjs7QUd6RUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FINEVKO0FHekVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUgwRUo7QUd4RUk7RUFDRSxnQkFBQTtBSDBFTjtBR3RFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxlRkRXO0FEd0VmO0FHcEVFO0VBQ0UsZUZMVztFRU1YLGNGdkRPO0FENkhYO0FHbkVFO0VBQ0UsZUZUVztFRVVYLGdCQUFBO0VBQ0EsY0Y5RFE7QURtSVo7QUduRUk7RUFDRSxrQkFBQTtBSHFFTjtBR2pFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlRnhCVztFRXlCWCxnQkFBQTtFQUNBLGNGbEZJO0FEb0pSO0FHaEVJO0VBQ0Usa0JBQUE7QUhrRU47QUcvREk7RUFDRSxjRm5GTTtBRG9KWjtBRzlESTtFQUNFLGVBQUE7QUhnRU47QUc5RE07RUFDRSxlRnhDTztBRHdHZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5mb3JtLWdyb3VwIHtcbi8vICAgICAmKy5mb3JtLWdyb3VwIHtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbi8vICAgICB9XG4vLyB9XG5cbi5mb3JtLWxhYmVsIHtcbiAgICAvLyBjb2xvcjogcmdiYSgkZ3JlZW5ncmF5LCAwLjUpO1xuICAgIGNvbG9yOiByZ2JhKCR0aGVtZS1kYXJrLCAwLjc1KTtcblxuICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICBjb2xvcjogcmdiYSgkdGhlbWUtZGFyaywgMC43NSk7XG4gICAgfVxufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgIC8vIGNvbG9yOiAkZ3JlZW5ncmF5O1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG5cbiAgICAgICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gICAgPi5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXItaW5saW5lLWVuZDogbm9uZTtcbiAgICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcblxuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgIH1cbn1cblxuLmZvcmdvdC1wYXNzLWxpbmssXG4ucmVkaXItbGluayB7XG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgIH1cbn1cblxuLmZvcmdvdC1wYXNzLWxpbmsge1xuICAgIHRleHQtYWxpZ246IGVuZDtcblxuICAgIGEge1xuICAgICAgICAvLyBjb2xvcjogIzdkOWI4ZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yZWRpci1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGEge1xuICAgICAgICAvLyBjb2xvcjogJGdyZWVuZ3JheTtcblxuICAgICAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZm9ybS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDksIDUwLCAxMDIsIDAuNzUpO1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLmZvcm0tbGFiZWwge1xuICBjb2xvcjogcmdiYSg5LCA1MCwgMTAyLCAwLjc1KTtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5wdXQtZ3JvdXAtdGV4dCBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAuaW5wdXQtZ3JvdXAtdGV4dCBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4cmVtO1xufVxuLmFjdGlvbnMgLmJ0biB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rIGEsXG4ucmVkaXItbGluayBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwNTI1Nztcbn1cblxuLmZvcmdvdC1wYXNzLWxpbmsge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4uZm9yZ290LXBhc3MtbGluayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvcmdvdC1wYXNzLWxpbmsgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucmVkaXItbGluayB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIC5yZWRpci1saW5rIGEge1xuICBjb2xvcjogIzAwNTI1Nztcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGFlNWUxO1xufVxuLmFjdGlvbnMgLmJ0biB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIC5mb3JtLXRpdGxlIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uZm9ybS10aXRsZSB+IC5mb3JtLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5lZGl0LWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbn1cbi50YWItZGF0YS1oZWFkZXIgfiAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YWItZGF0YS1zZWN0aW9uICsgLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY3Njc2O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5ICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5pY29uIHtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhZTVlMTtcblxuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgIH1cbn1cblxuLmZvcm0tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG5cbiAgICAmfi5mb3JtLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG59IiwiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6370:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/delegator-actions/delegator-actions.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delegatoractionsComponent": () => (/* binding */ delegatoractionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/registration-request/registration-request.service */ 59396);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 96328);









function delegatoractionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.localization.requiredErrorMsg);
  }
}
function delegatoractionsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.localization.maxLengthErrorMsg);
  }
}
function delegatoractionsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.localization.requiredErrorMsg);
  }
}
function delegatoractionsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.localization.phoneNumberPattern);
  }
}
function delegatoractionsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.localization.maxLengthPhoneErrorMsg);
  }
}
function delegatoractionsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.localization.requiredErrorMsg);
  }
}
function delegatoractionsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.localization.emailPattern);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class delegatoractionsComponent {
  constructor(_services, _popupService, _toastrNotificatioService) {
    this._services = _services;
    this._popupService = _popupService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.subscriptions = [];
    this.showValidation = false;
    this.localization = {
      addConfirmedSuccessfully: "تم الإضافة بنجاح",
      EditConfimedSuccessfully: "تم التعديل بنجاح",
      Email: 'البريد الرلكتروني',
      phoneNumber: 'رقم الجوال',
      phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
      emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
      requiredErrorMsg: 'required',
      maxLengthErrorMsg: 'يجب ألا يقل طول الحقل عن 20 أرقام',
      identityNumber: 'رقم الهوية',
      maxLengthPhoneErrorMsg: "length must not be more than 10"
    };
    this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('00000000-0000-0000-0000-000000000000'),
      identityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)]),
      mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.phonePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])
    });
  }
  ngOnInit() {
    this.commissionerID = this._popupService.popupData.value.id;
    if (this.commissionerID) {
      this.getDialogData();
    }
    this.observePopupEvents();
  }
  get controls() {
    return this.addForm.controls;
  }
  getDialogData() {
    this.subscriptions.push(this._services.getCommissionerByID(this.commissionerID).subscribe(res => {
      this.dialogData = res;
      this.addForm.patchValue(this.dialogData);
    }));
  }
  // popup
  observePopupEvents() {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe());
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      if (!this.addForm.valid) {
        this.showValidation = true;
      } else {
        this.submit();
      }
    }));
  }
  submit() {
    if (this.commissionerID) {
      this.subscriptions.push(this._services.updateCommissioner(this.addForm.value).subscribe(res => {
        if (res.isDone) {
          this._services.submitSuccessfullyEventEmitter.emit();
          this._popupService.dismissDialog();
          this.showNotificationForSucessAdd();
        }
      }));
    } else {
      this.subscriptions.push(this._services.AddCommissioners(this.addForm.value).subscribe(res => {
        if (res.isDone) {
          this._services.submitSuccessfullyEventEmitter.emit();
          this._popupService.dismissDialog();
          this.showNotificationForSucessAdd();
        }
      }));
    }
  }
  showNotificationForSucessAdd() {
    this._toastrNotificatioService.showSuccess(this.commissionerID ? this.localization.EditConfimedSuccessfully : this.localization.addConfirmedSuccessfully);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
delegatoractionsComponent.ɵfac = function delegatoractionsComponent_Factory(t) {
  return new (t || delegatoractionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_1__.RegistrationRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_2__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__.ToastrNotificatioService));
};
delegatoractionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: delegatoractionsComponent,
  selectors: [["app-delegator-actions"]],
  decls: 26,
  vars: 20,
  consts: [[1, "d-flex", "flex-column", "h-100", 3, "formGroup"], ["mat-dialog-content", ""], [1, "row", "mb-3"], [1, "col-6"], ["for", "identityNumber", 1, "form-label"], ["type", "text", "formControlName", "identityNumber", "name", "identityNumber", 1, "form-control", 3, "placeholder", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "mane", 1, "form-label"], ["type", "text form-control", "formControlName", "mobileNumber", "name", "mane", 1, "form-control", 3, "placeholder", "ngClass"], ["for", "email", 1, "form-label"], ["type", "text", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder", "ngClass"]],
  template: function delegatoractionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, delegatoractionsComponent_div_8_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, delegatoractionsComponent_div_9_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3)(11, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, delegatoractionsComponent_div_15_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, delegatoractionsComponent_div_16_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, delegatoractionsComponent_div_17_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, delegatoractionsComponent_div_24_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, delegatoractionsComponent_div_25_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.addForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.identityNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, ctx.showValidation && ctx.controls.identityNumber.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.identityNumber.errors == null ? null : ctx.controls.identityNumber.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.identityNumber.errors == null ? null : ctx.controls.identityNumber.errors["maxLength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.phoneNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c0, ctx.showValidation && ctx.controls.mobileNumber.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.mobileNumber.errors == null ? null : ctx.controls.mobileNumber.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.mobileNumber.errors == null ? null : ctx.controls.mobileNumber.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.controls.mobileNumber.errors == null ? null : ctx.controls.mobileNumber.errors["maxlength"]) || (ctx.controls.mobileNumber.errors == null ? null : ctx.controls.mobileNumber.errors["minlength"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "\u0627\u0643\u062A\u0628 ", ctx.localization.Email, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c0, ctx.showValidation && ctx.controls.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.email.errors == null ? null : ctx.controls.email.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.controls.email.errors == null ? null : ctx.controls.email.errors["pattern"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: [".mdc-dialog__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  color: #001F21;\n}\n.mdc-dialog__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n\n.mdc-dialog__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-height: none;\n  margin-inline: 1rem;\n  padding-inline: 1rem;\n  letter-spacing: normal;\n  overflow-x: hidden;\n}\n\n.mdc-dialog__actions[_ngcontent-%COMP%] {\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  border-top: 3px solid #E4E4E4;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-color: #ADAFB2;\n}\nhtml[_ngcontent-%COMP%]:lang(ar)   .input-group[_ngcontent-%COMP%]:not(.has-validation)    > [_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\nhtml[_ngcontent-%COMP%]:lang(ar)   .input-group[_ngcontent-%COMP%]:not(.has-validation)    > [_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\n  border-inline-width: 0;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\nhtml[_ngcontent-%COMP%]:lang(ar)   .input-group[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  border-inline-start: 0;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.rega[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-color: #ADAFB2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWN1c3RvbS9fZGlhbG9nLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC9kZWxlZ2F0b3ItYWN0aW9ucy9kZWxlZ2F0b3ItYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2Zvcm0tY29uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L190YWItY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvYm9vdHN0cmFwLWN1c3RvbS9faW5wdXQtZ3JvdXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNDTE07QUNLUjtBRkVFO0VBQ0UseUJBQUE7QUVBSjs7QUZJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFRkY7O0FGS0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRUZGOztBQ3hCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFFQSxjRm9CUztBQ0tYO0FDdkJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FEdUJKO0FDckJJO0VBQ0UsZ0JBQUE7RUFFQSxjRkdLO0FDbUJYO0FDbEJFO0VBQ0UsY0Y1Qkk7QUNnRFI7QUNqQkU7RUFDRSxpQkFBQTtBRG1CSjs7QUNmQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QURrQkY7O0FDZkE7RUFDRSxhQUFBO0VBQ0EscUJGNEJRO0VFM0JSLDBDQUFBO0FEa0JGO0FDaEJFO0VBTEY7SUFNSSxhQUFBO0VEbUJGO0FBQ0Y7QUNqQkU7RUFDRSxtQkFBQTtFQUNBLGVGSVc7RUVIWCxpQkFBQTtBRG1CSjs7QUNmQTtFQUNFLGVGRmE7RUVHYixpQkFBQTtFQUNBLGVBQUE7QURrQkY7O0FDZkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURrQkY7QUNoQkU7Ozs7RUFFRSxlRmJZO0FDaUNoQjtBQ2pCRTs7RUFFRSxjRmxETztBQ3FFWDs7QUNkRTtFQUVFLGNGekRPO0FDeUVYOztBQ1pBO0VBQ0UsZUY5QmM7QUM2Q2hCO0FDYkU7RUFDRSxjQUFBO0FEZUo7O0FDWEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkZoQ1E7RUVpQ1IsMkNBQUE7QURhRjtBQ1hFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FEYUo7O0FDVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUVBLDZCQUFBO0VBQ0EsdUJGNUhNO0FDcUlSO0FDTkk7RUFERjtJQUVJLFVBQUE7RURTSjtBQUNGOztBQ0xBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRFFGOztBRW5KQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBRnFKRjtBRW5KRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkhNUTtBQzZJWjtBRWpKSTtFQUNFLGNITUs7QUM2SVg7QUUvSUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUZpSko7QUU5SUU7RUFDRSxnQkFBQTtBRmdKSjs7QUUzSUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FGOElKO0FFM0lFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUY0SUo7QUUxSUk7RUFDRSxnQkFBQTtBRjRJTjtBRXhJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxlSERXO0FDMElmO0FFdElFO0VBQ0UsZUhMVztFR01YLGNIdkRPO0FDK0xYO0FFcklFO0VBQ0UsZUhUVztFR1VYLGdCQUFBO0VBQ0EsY0g5RFE7QUNxTVo7QUVySUk7RUFDRSxrQkFBQTtBRnVJTjtBRW5JRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlSHhCVztFR3lCWCxnQkFBQTtFQUNBLGNIbEZJO0FDc05SO0FFbElJO0VBQ0Usa0JBQUE7QUZvSU47QUVqSUk7RUFDRSxjSG5GTTtBQ3NOWjtBRWhJSTtFQUNFLGVBQUE7QUZrSU47QUVoSU07RUFDRSxlSHhDTztBQzBLZjs7QUdoT0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkpDSTtBQ2tPWjtBRzlOWTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkowRE47RUl6RE0sa0NKeUROO0FDdUtWO0FHM05ZO0VBQ0ksc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBSDZOaEI7QUd2TlE7RUFDSSxzQkFBQTtFQUNBLDhCSnVDRjtFSXRDRSxpQ0pzQ0Y7RUlyQ0UsMEJBQUE7RUFDQSw2QkFBQTtBSHlOWjs7QUdwTkE7RUFDSSx1Qkp2Q0k7QUM4UFI7QUdyTkk7RUFFSSxjSm5CRztBQ3lPWDtBR3BOUTtFQUNJLGNKdEJEO0FDNE9YOztBQS9QQTtFQUNJLHFCREZRO0FDb1FaIiwic291cmNlc0NvbnRlbnQiOlsiLm1kYy1kaWFsb2dfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW4taW5saW5lOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG59XG5cbi5tZGMtZGlhbG9nX19jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBtYXJnaW4taW5saW5lOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcblxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tZGMtZGlhbG9nX19hY3Rpb25zIHtcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U0RTRFNDtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1jdXN0b20vZGlhbG9nLWNvbnRlbnRcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9mb3JtLWNvbmVudFwiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L3RhYi1jb250ZW50XCI7XG5AaW1wb3J0ICcvc3JjL2Fzc2V0cy9zdHlsZXMvYm9vdHN0cmFwLWN1c3RvbS9pbnB1dC1ncm91cCc7XG5cblxuXG5pbnB1dCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xufSIsIi5mb3JtLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICBzbWFsbCB7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiAgfVxuXG4gICZ+LmZvcm0tc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICB9XG59XG5cbi5mb3JtLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHJnYmEoJGRhcmssIC41KTtcbn1cblxuLmZvcm0tYmxvY2sge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlZ3JheSwgLjIpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5hZGQtYXJyYXkge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW5vdGUsXG4uZm9ybS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLnRleHQsXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcbiAgfVxuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICB9XG59XG5cbi5mb3JtLXRleHQge1xuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgfVxufVxuXG4uZm9ybS1ub3RlIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi5mb3JtLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBib3JkZXI6IDEuMnB4IGRhc2hlZCAkZGFya2dyYXk7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlZ3JheSwgLjE5KTtcblxuICAudGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogLTFyZW07XG4gIHotaW5kZXg6IDE7XG5cbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREFFNUUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgLmJ0biB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXNlcGFyYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3RjU7XG59IiwiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIkaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi5pbnB1dC1ncm91cCB7XG4gICAgLmJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCguaGFzLXZhbGlkYXRpb24pIHtcbiAgICAgICAgJj4gOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSkge1xuICAgICAgICAgICAgaHRtbDpsYW5nKGFyKSAmIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY+IDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKTpub3QoLmRyb3Bkb3duLW1lbnUpIHtcbiAgICAgICAgICAgIGh0bWw6bGFuZyhhcikgJiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWlubGluZS13aWR0aDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJj4gOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tbWVudSk6bm90KC52YWxpZC10b29sdGlwKTpub3QoLnZhbGlkLWZlZWRiYWNrKTpub3QoLmludmFsaWQtdG9vbHRpcCk6bm90KC5pbnZhbGlkLWZlZWRiYWNrKSB7XG4gICAgICAgIGh0bWw6bGFuZyhhcikgJiB7XG4gICAgICAgICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gICAgICAgIC5yZWdhICYge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5031:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/registration-request/registration-request.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationRequestComponent": () => (/* binding */ RegistrationRequestComponent)
/* harmony export */ });
/* harmony import */ var _delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegator-actions/delegator-actions.component */ 6370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/registration-request/registration-request.service */ 59396);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9271);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);











function RegistrationRequestComponent_div_0_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "div", 15)(13, "button", 16)(14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrationRequestComponent_div_0_tbody_19_Template_span_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const comdata_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.openDialog(comdata_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 18)(17, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrationRequestComponent_div_0_tbody_19_Template_mat_icon_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const comdata_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.DeleteCommissioners(comdata_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const comdata_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", comdata_r3.identityNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comdata_r3.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", comdata_r3.email, " ");
  }
}
function RegistrationRequestComponent_div_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-no-data", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showCompleteBtn", false);
  }
}
function RegistrationRequestComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrationRequestComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0641\u0648\u0636 \u062C\u062F\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7)(8, "table", 8)(9, "thead")(10, "tr")(11, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " \u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RegistrationRequestComponent_div_0_tbody_19_Template, 19, 3, "tbody", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "app-pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RegistrationRequestComponent_div_0_ng_container_22_Template, 3, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.reqList.results)("ngForTrackBy", ctx_r0.trackByFnMultipleFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.reqList.totalCount === 0);
  }
}
class RegistrationRequestComponent {
  constructor(_registrationrequestservice, _paginationService, _pupupService, _toastrNotificatioService) {
    this._registrationrequestservice = _registrationrequestservice;
    this._paginationService = _paginationService;
    this._pupupService = _pupupService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.subscriptions = [];
    this.newPageNo = 1;
    this.pagintationData = {
      currentPage: 1,
      pageCount: 0,
      pageSize: 10,
      totalCount: 0
    };
    this.localization = {
      deletConfirmedSuccessfully: "تم المسح بنجاح"
    };
    this.reqList = {};
  }
  ngOnInit() {
    this.getCommissionersData();
    this.watchPaginationActions();
  }
  updateAndOpenData(data) {
    var popRef = this._pupupService.updatePopupData(data);
  }
  openDialog(id) {
    this._registrationrequestservice.submitSuccessfullyEventEmitter.subscribe(() => {
      this.pagintationData = {
        currentPage: 1,
        pageCount: 0,
        pageSize: 10,
        totalCount: 0
      };
      this.getCommissionersData();
    });
    let Data = {
      id: id,
      title: id ? " تعديل المفوض" : "إضافة مفوض جديد",
      component: _delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_0__.delegatoractionsComponent
    };
    this.updateAndOpenData(Data);
  }
  updateRequestList(TypeListView) {
    this.reqList = TypeListView;
    this.setPaginationData(this.reqList.pageSize, this.reqList.totalCount, this.reqList.pageCount);
  }
  setPaginationData(pageSize, total, pageCount) {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  watchPaginationActions() {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  watchPagechanged() {
    this.subscriptions.push(this._paginationService.getPageChanged().subscribe(pageNo => {
      this.newPageNo = pageNo;
    }));
  }
  watchPaginationClicked() {
    this.subscriptions.push(this._paginationService.getPageClicked().subscribe(nextPage => {
      if (this.pagintationData.currentPage != nextPage) {
        this.loadNextPage(nextPage);
        this.pagintationData.currentPage = this.newPageNo;
      }
    }));
  }
  loadNextPage(nextPage) {
    this.pagintationData.currentPage = nextPage;
    this.getCommissionersData();
  }
  getCommissionersData() {
    this.subscriptions.push(this._registrationrequestservice.getCommissioners(this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res => {
      console.log("this.reqList", res);
      this.updateRequestList(res);
    }));
  }
  showNotificationForٍSucssedDeleted() {
    this._toastrNotificatioService.showSuccess(this.localization.deletConfirmedSuccessfully);
  }
  trackByFnMultipleFields(index, item) {
    return item.identityNumber + item.mobileNumber + item.email;
  }
  DeleteCommissioners(id) {
    this.subscriptions.push(this._registrationrequestservice.deletCommissioner(id).subscribe(res => {
      if (res.isDone) {
        this.showNotificationForٍSucssedDeleted();
        this.getCommissionersData();
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RegistrationRequestComponent.ɵfac = function RegistrationRequestComponent_Factory(t) {
  return new (t || RegistrationRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_1__.RegistrationRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__.ToastrNotificatioService));
};
RegistrationRequestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RegistrationRequestComponent,
  selectors: [["app-registration-request"]],
  decls: 1,
  vars: 1,
  consts: [["class", "row row-gap-4", 4, "ngIf"], [1, "row", "row-gap-4"], [1, "col-12"], [1, "filter"], [1, "row"], [1, "col-6", "justify-content-end", "align-items-end"], ["type", "button", "color", "primary", "mat-flat-button", "", 1, "addbtn", "btn", "btn-outline-primary", "d-flex", "align-items-center", "column-gap-1", "float-left", 3, "click"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center", "column-gap-2"], [1, "text-dark"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-primary", "m-2", "edit", 2, "background-color", "white"], [1, "material-icons", 3, "click"], [1, "btn", "stopbtn"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function RegistrationRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, RegistrationRequestComponent_div_0_Template, 23, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy91c2VyLW1hbmFnZW1lbnQvY29tcG9uZW50L3JlZ2lzdHJhdGlvbi1yZXF1ZXN0L3JlZ2lzdHJhdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBOztFQUVFLHVCQUFBO0VBQ0EsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFFQSxvQkFBQTtFQUNBLDBCQUFBO0FDSEY7O0FETUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUVBLGtDQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0FDSkY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtBQ0xGOztBQXhDQTtFQUNJLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBMkNKOztBQXRDQTtFQUNJLDJCQUFBO0FBeUNKOztBQXBDQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7QUF1Q0o7O0FBcENBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBdUNKOztBQW5DQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBc0NKOztBQWpDQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBb0NKOztBQWhDQTtFQUNJLDJCQUFBO0FBbUNKOztBQS9CQTtFQUNFLGNBQUE7QUFrQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgLS1icy1idG4tZm9udC13ZWlnaHQ6IDUwMDtcblxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC4yNXJlbTtcblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbn1cblxuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIC0tYnMtYnRuLWNvbG9yOiAjeyRkYXJrZ3JlZW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjeyRkYXJrZ3JlZW59O1xuICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICN7JGRhcmtncmVlbn07XG5cbiAgLS1icy1idG4tYmc6ICNFN0YyRUQ7XG4gIC0tYnMtYnRuLWhvdmVyLWJnOiAjeyRkYXJrZ3JlZW59O1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogIzczNzM3MztcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAjeyR3aGl0ZX07XG5cbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1icy1idG4tYmc6ICNFN0YyRUQ7XG59XG5cbi5idG4tZGFyayB7XG4gIC0tYnMtYnRuLWJnOiAjMEQxMjFDO1xufVxuXG4uYnRuLWxpbmsge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skdGhlbWUtbWFpbn07XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyRkYXJrfTtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vYnV0dG9uc1wiO1xuXG5cblxuLmFkZGJ0bntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIFxufVxuXG5cbnRhYmxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuXG5cbmJ1dHRvbi5idG4tc2Vjb25kYXJ5e1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24uYnRuLXNlY29uZGFyeTpob3ZlcntcbiAgICBjb2xvcjojMDc2RjQyIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG4uZGVsZXRidG57XG4gICAgY29sb3I6ICNGQzFEMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkMxRDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLnN0b3BidG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6ICNGRjdBNjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiAgXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuLmVkaXQ6aG92ZXJ7XG4gIGNvbG9yOiAjMDc2RjQyO1xuICBcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 27814:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/related-customers/related-customers.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatedCustomersComponent": () => (/* binding */ RelatedCustomersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 27382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 47720);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9271);












function RelatedCustomersComponent_div_8_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "div", 12)(5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RelatedCustomersComponent_div_8_tr_11_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const customer_r2 = restoredCtx.$implicit;
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.delete(customer_r2.id, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", customer_r2.subCustomerName, " ");
  }
}
function RelatedCustomersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table", 9)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0641\u0648\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RelatedCustomersComponent_div_8_tr_11_Template, 8, 1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.relatedCustomerCreateUpdateDtos);
  }
}
class RelatedCustomersComponent {
  constructor(_formBuilder, _customerFacilitiesService, _popupService, _storageService, _toastrNotificationService, _userDataService) {
    this._formBuilder = _formBuilder;
    this._customerFacilitiesService = _customerFacilitiesService;
    this._popupService = _popupService;
    this._storageService = _storageService;
    this._toastrNotificationService = _toastrNotificationService;
    this._userDataService = _userDataService;
    this.subCustomers = null;
    this.relatedCustomerCreateUpdateDtos = [];
    this.relatedCustomerList = null;
    this.subscriptions = [];
    this.loginUserType = "";
    this.loginUserTypeEnum = null;
    this.showValidation = false;
    this.userData = null;
    this.assignedSubCustomerForm = this._formBuilder.group({
      nidNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.getLoginUserType();
    this.getFacilityObj();
    this.observePopupEvents();
  }
  get controls() {
    return this.assignedSubCustomerForm.controls;
  }
  getFacilityObj() {
    this.subscriptions.push(this._customerFacilitiesService.getFacilityObj().subscribe(res => {
      if (res) {
        this.facility = res;
        if (this.facility && this.facility.id) this.loadComponentData();
      }
    }));
  }
  getLoginUserType() {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType);
  }
  loadComponentData() {
    const requests = [this._customerFacilitiesService.GetRelatedCustomerListByFacilityId(this.facility?.id), this._customerFacilitiesService.GetSubCustomers()];
    const subscriptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(requests).subscribe(results => {
      if (results) {
        this.relatedCustomerCreateUpdateDtos = results[0];
        this.subCustomers = results[1];
      }
    });
    this.subscriptions.push(subscriptions);
  }
  addRow() {
    let relatedCustomer = {};
    relatedCustomer.facilitiesId = this.facility?.id;
    relatedCustomer.nidNumber = this.assignedSubCustomerForm.controls.nidNumber.value;
    this.subscriptions.push(this._customerFacilitiesService.Save(relatedCustomer).subscribe(res => {
      if (res) {
        this._toastrNotificationService.showSuccess('تم الحفظ');
        this.relatedCustomerCreateUpdateDtos = [];
        res.forEach(delegate => {
          let relatedCustomerDto = {};
          relatedCustomerDto.id = delegate?.id;
          relatedCustomerDto.subCustomerId = delegate?.subCustomerId;
          relatedCustomerDto.subCustomerName = delegate?.subCustomerName;
          this.relatedCustomerCreateUpdateDtos.push(relatedCustomerDto);
        });
      } else {
        // this._toastrNotificationService.showError('حدث خطأ لم يتم الحفظ');
      }
    }));
  }
  getUserData() {
    this.subscriptions.push(this._userDataService.GetCustomer(this.loginUserTypeEnum).subscribe(res => {
      this.userData = res;
      this._userDataService.updateCustomerData(res);
    }));
  }
  save() {
    this._toastrNotificationService.showSuccess('تم الحفظ');
    this.getUserData();
    this.closeDialog();
  }
  delete(id, index) {
    if (id) {
      this.subscriptions.push(this._customerFacilitiesService.Delete(id).subscribe(res => {
        if (res.isDone) this.showSuccess('تم حذف المفوض من على المنشأة');
        this.relatedCustomerCreateUpdateDtos.splice(index, 1);
      }));
    } else this.relatedCustomerCreateUpdateDtos.splice(index, 1);
  }
  showSuccess(message) {
    this._toastrNotificationService.showSuccess(message);
  }
  showError(message) {
    this._toastrNotificationService.showError(message);
  }
  observePopupEvents() {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {
      this._popupService.dismissDialog();
    }));
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      this.save();
    }));
  }
  closeDialog() {
    this._popupService.dismissDialog();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RelatedCustomersComponent.ɵfac = function RelatedCustomersComponent_Factory(t) {
  return new (t || RelatedCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_0__.CustomerFacilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_3__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService));
};
RelatedCustomersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RelatedCustomersComponent,
  selectors: [["app-related-customers"]],
  decls: 9,
  vars: 2,
  consts: [[1, "form-block", "mb-3", 3, "formGroup"], [1, "row", "row-gap-3", "mb-3"], [1, "col-12", "col-lg-6"], [1, "form-label"], ["type", "text", "formControlName", "nidNumber", "id", "control-nidNumber", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "table-responsive"], [1, "table", "table-light", "mb-3"], [1, "w-25"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-end", "column-gap-2"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
  template: function RelatedCustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u0631\u0642\u0645 \u0647\u0648\u064A\u0629 \u0627\u0644\u0645\u0641\u0648\u0636");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RelatedCustomersComponent_Template_button_click_6_listener() {
        return ctx.addRow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u0627\u0636\u0627\u0641\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RelatedCustomersComponent_div_8_Template, 12, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.assignedSubCustomerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.relatedCustomerCreateUpdateDtos && ctx.relatedCustomerCreateUpdateDtos.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: [".mdc-dialog__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  color: #001F21;\n}\n.mdc-dialog__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n\n.mdc-dialog__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-height: none;\n  margin-inline: 1rem;\n  padding-inline: 1rem;\n  letter-spacing: normal;\n  overflow-x: hidden;\n}\n\n.mdc-dialog__actions[_ngcontent-%COMP%] {\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  border-top: 3px solid #E4E4E4;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWN1c3RvbS9fZGlhbG9nLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC9yZWxhdGVkLWN1c3RvbWVycy9yZWxhdGVkLWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2Zvcm0tY29uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L190YWItY29udGVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0NMTTtBQ0tSO0FGRUU7RUFDRSx5QkFBQTtBRUFKOztBRklBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7QUVGRjs7QUZLQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FFRkY7O0FDeEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLGNGb0JTO0FDS1g7QUN2QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUR1Qko7QUNyQkk7RUFDRSxnQkFBQTtFQUVBLGNGR0s7QUNtQlg7QUNsQkU7RUFDRSxjRjVCSTtBQ2dEUjtBQ2pCRTtFQUNFLGlCQUFBO0FEbUJKOztBQ2ZBO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtBRGtCRjs7QUNmQTtFQUNFLGFBQUE7RUFDQSxxQkY0QlE7RUUzQlIsMENBQUE7QURrQkY7QUNoQkU7RUFMRjtJQU1JLGFBQUE7RURtQkY7QUFDRjtBQ2pCRTtFQUNFLG1CQUFBO0VBQ0EsZUZJVztFRUhYLGlCQUFBO0FEbUJKOztBQ2ZBO0VBQ0UsZUZGYTtFRUdiLGlCQUFBO0VBQ0EsZUFBQTtBRGtCRjs7QUNmQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGtCRjtBQ2hCRTs7OztFQUVFLGVGYlk7QUNpQ2hCO0FDakJFOztFQUVFLGNGbERPO0FDcUVYOztBQ2RFO0VBRUUsY0Z6RE87QUN5RVg7O0FDWkE7RUFDRSxlRjlCYztBQzZDaEI7QUNiRTtFQUNFLGNBQUE7QURlSjs7QUNYQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCRmhDUTtFRWlDUiwyQ0FBQTtBRGFGO0FDWEU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QURhSjs7QUNUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkJBQUE7RUFDQSx1QkY1SE07QUNxSVI7QUNOSTtFQURGO0lBRUksVUFBQTtFRFNKO0FBQ0Y7O0FDTEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FEUUY7O0FFbkpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0FGcUpGO0FFbkpFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCSE1RO0FDNklaO0FFakpJO0VBQ0UsY0hNSztBQzZJWDtBRS9JRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRmlKSjtBRTlJRTtFQUNFLGdCQUFBO0FGZ0pKOztBRTNJRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUY4SUo7QUUzSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBRjRJSjtBRTFJSTtFQUNFLGdCQUFBO0FGNElOO0FFeElFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVIRFc7QUMwSWY7QUV0SUU7RUFDRSxlSExXO0VHTVgsY0h2RE87QUMrTFg7QUVySUU7RUFDRSxlSFRXO0VHVVgsZ0JBQUE7RUFDQSxjSDlEUTtBQ3FNWjtBRXJJSTtFQUNFLGtCQUFBO0FGdUlOO0FFbklFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVIeEJXO0VHeUJYLGdCQUFBO0VBQ0EsY0hsRkk7QUNzTlI7QUVsSUk7RUFDRSxrQkFBQTtBRm9JTjtBRWpJSTtFQUNFLGNIbkZNO0FDc05aO0FFaElJO0VBQ0UsZUFBQTtBRmtJTjtBRWhJTTtFQUNFLGVIeENPO0FDMEtmIiwic291cmNlc0NvbnRlbnQiOlsiLm1kYy1kaWFsb2dfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW4taW5saW5lOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG59XG5cbi5tZGMtZGlhbG9nX19jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBtYXJnaW4taW5saW5lOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcblxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tZGMtZGlhbG9nX19hY3Rpb25zIHtcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U0RTRFNDtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi5tZGMtZGlhbG9nX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4ubWRjLWRpYWxvZ19fdGl0bGUgYnV0dG9uIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbn1cblxuLm1kYy1kaWFsb2dfX2NvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIG1hcmdpbi1pbmxpbmU6IDFyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tZGMtZGlhbG9nX19hY3Rpb25zIHtcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U0RTRFNDtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLmZvcm0tdGl0bGUgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM2MzU7XG59XG4uZm9ybS10aXRsZSAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLmZvcm0tdGl0bGUgc21hbGwge1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi5mb3JtLXRpdGxlIH4gLmZvcm0tc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn1cblxuLmZvcm0tc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogcmdiYSg1MywgNTksIDU5LCAwLjUpO1xufVxuXG4uZm9ybS1ibG9jayB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAwLjIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG4uZm9ybS1ibG9jayAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWRkLWFycmF5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1ub3RlLFxuLmZvcm0tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbn1cbi5mb3JtLW5vdGUgLnRleHQsXG4uZm9ybS1ub3RlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdLFxuLmZvcm0tdGV4dCAudGV4dCxcbi5mb3JtLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZm9ybS1ub3RlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdLFxuLmZvcm0tdGV4dCBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuXG4uZm9ybS10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG5cbi5mb3JtLW5vdGUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZm9ybS1ub3RlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mb3JtLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxNXJlbTtcbiAgYm9yZGVyOiAxLjJweCBkYXNoZWQgIzY2NzY3NjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAwLjE5KTtcbn1cbi5mb3JtLWltYWdlcyAudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAtMXJlbTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RBRTVFMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS1hY3Rpb25zIC5idG4ge1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbn1cblxuLmZvcm0tc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjdGNTtcbn1cblxuLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5lZGl0LWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbn1cbi50YWItZGF0YS1oZWFkZXIgfiAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YWItZGF0YS1zZWN0aW9uICsgLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY3Njc2O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5ICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5pY29uIHtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi5mb3JtLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICBzbWFsbCB7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiAgfVxuXG4gICZ+LmZvcm0tc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICB9XG59XG5cbi5mb3JtLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHJnYmEoJGRhcmssIC41KTtcbn1cblxuLmZvcm0tYmxvY2sge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlZ3JheSwgLjIpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5hZGQtYXJyYXkge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW5vdGUsXG4uZm9ybS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLnRleHQsXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcbiAgfVxuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICB9XG59XG5cbi5mb3JtLXRleHQge1xuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgfVxufVxuXG4uZm9ybS1ub3RlIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi5mb3JtLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBib3JkZXI6IDEuMnB4IGRhc2hlZCAkZGFya2dyYXk7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlZ3JheSwgLjE5KTtcblxuICAudGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogLTFyZW07XG4gIHotaW5kZXg6IDE7XG5cbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREFFNUUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgLmJ0biB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXNlcGFyYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3RjU7XG59IiwiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 97021:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/user-management-delegators/user-management-delegators.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDelegatorsComponent": () => (/* binding */ UserManagementDelegatorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user-management-delegators.service */ 33066);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 47720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);







function UserManagementDelegatorsComponent_tbody_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td")(9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td")(15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td")(18, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const delegator_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", delegator_r2.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](delegator_r2.nidnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](delegator_r2.nationality == null ? null : delegator_r2.nationality.nationalityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", delegator_r2.mobile1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", delegator_r2.mobile2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", delegator_r2.email, " ");
  }
}
function UserManagementDelegatorsComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-no-data", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showCompleteBtn", false);
  }
}
class UserManagementDelegatorsComponent {
  constructor(_userManagementDelegatorsService, _paginationService, _customerFacilitiesService) {
    this._userManagementDelegatorsService = _userManagementDelegatorsService;
    this._paginationService = _paginationService;
    this._customerFacilitiesService = _customerFacilitiesService;
    this.reqList = {};
    this.subscriptions = [];
    this.newPageNo = 1;
    this.pagintationData = {
      currentPage: 1,
      pageCount: 0,
      pageSize: 10,
      totalCount: 0
    };
  }
  ngOnInit() {
    this.getDelegators();
    this.watchPaginationActions();
  }
  getDelegators() {
    this.subscriptions.push(this._customerFacilitiesService.GetRelatedCustomerList(this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res => {
      if (res && res.results.length > 0) this.updateRequestList(res);
    }));
  }
  updateRequestList(TypeListView) {
    this.reqList = TypeListView;
    this.setPaginationData(this.reqList.pageSize, this.reqList.totalCount, this.reqList.pageCount);
  }
  setPaginationData(pageSize, total, pageCount) {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  watchPaginationActions() {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  watchPagechanged() {
    this.subscriptions.push(this._paginationService.getPageChanged().subscribe(pageNo => {
      this.newPageNo = pageNo;
    }));
  }
  watchPaginationClicked() {
    this.subscriptions.push(this._paginationService.getPageClicked().subscribe(nextPage => {
      if (this.pagintationData.currentPage != nextPage) {
        this.loadNextPage(nextPage);
        this.pagintationData.currentPage = this.newPageNo;
      }
    }));
  }
  loadNextPage(nextPage) {
    this.pagintationData.currentPage = nextPage;
    this.getDelegators();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
UserManagementDelegatorsComponent.ɵfac = function UserManagementDelegatorsComponent_Factory(t) {
  return new (t || UserManagementDelegatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_0__.UserManagementDelegatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__.CustomerFacilitiesService));
};
UserManagementDelegatorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserManagementDelegatorsComponent,
  selectors: [["app-user-management-delegators"]],
  decls: 21,
  vars: 2,
  consts: [[1, "row", "row-gap-4"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center", "column-gap-2"], [1, "text-dark"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function UserManagementDelegatorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0641\u0648\u0636");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0623\u0648\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062B\u0627\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, UserManagementDelegatorsComponent_tbody_17_Template, 21, 6, "tbody", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, UserManagementDelegatorsComponent_ng_container_20_Template, 3, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.reqList.results);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_3__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy91c2VyLW1hbmFnZW1lbnQvY29tcG9uZW50L3VzZXItbWFuYWdlbWVudC1kZWxlZ2F0b3JzL3VzZXItbWFuYWdlbWVudC1kZWxlZ2F0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBOztFQUVFLHVCQUFBO0VBQ0EsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFFQSxvQkFBQTtFQUNBLDBCQUFBO0FDSEY7O0FETUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUVBLGtDQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0FDSkY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtBQ0xGOztBQXhDQTtFQUNJLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBMkNKOztBQXRDQTtFQUNJLDJCQUFBO0FBeUNKOztBQXBDQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7QUF1Q0o7O0FBcENBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBdUNKOztBQW5DQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBc0NKOztBQWpDQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBb0NKOztBQWhDQTtFQUNJLDJCQUFBO0FBbUNKOztBQS9CQTtFQUNFLGNBQUE7QUFrQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgLS1icy1idG4tZm9udC13ZWlnaHQ6IDUwMDtcblxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC4yNXJlbTtcblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbn1cblxuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIC0tYnMtYnRuLWNvbG9yOiAjeyRkYXJrZ3JlZW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjeyRkYXJrZ3JlZW59O1xuICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICN7JGRhcmtncmVlbn07XG5cbiAgLS1icy1idG4tYmc6ICNFN0YyRUQ7XG4gIC0tYnMtYnRuLWhvdmVyLWJnOiAjeyRkYXJrZ3JlZW59O1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogIzczNzM3MztcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAjeyR3aGl0ZX07XG5cbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1icy1idG4tYmc6ICNFN0YyRUQ7XG59XG5cbi5idG4tZGFyayB7XG4gIC0tYnMtYnRuLWJnOiAjMEQxMjFDO1xufVxuXG4uYnRuLWxpbmsge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skdGhlbWUtbWFpbn07XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyRkYXJrfTtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vYnV0dG9uc1wiO1xuXG5cblxuLmFkZGJ0bntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIFxufVxuXG5cbnRhYmxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuXG5cbmJ1dHRvbi5idG4tc2Vjb25kYXJ5e1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24uYnRuLXNlY29uZGFyeTpob3ZlcntcbiAgICBjb2xvcjojMDc2RjQyIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG4uZGVsZXRidG57XG4gICAgY29sb3I6ICNGQzFEMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkMxRDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLnN0b3BidG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6ICNGRjdBNjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiAgXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuLmVkaXQ6aG92ZXJ7XG4gIGNvbG9yOiAjMDc2RjQyO1xuICBcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 57226:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/usermanagment-facilities/usermanagment-facilities.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsermanagmentFacilitiesComponent": () => (/* binding */ UsermanagmentFacilitiesComponent)
/* harmony export */ });
/* harmony import */ var _related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../related-customers/related-customers.component */ 27814);
/* harmony import */ var _add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-facility/add-facility.component */ 76331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 47720);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);









function UsermanagmentFacilitiesComponent_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td")(16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td")(20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsermanagmentFacilitiesComponent_tbody_19_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const facility_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.assignSubCustomerOnFacility(facility_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u062A\u0639\u064A\u0646 \u0645\u0641\u0648\u0636\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0634\u0623\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const facility_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", facility_r2.facilityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", facility_r2.facilityCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](facility_r2.commercialRegisterNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 5, facility_r2.commercialRegisterStartDate, "MMM d, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 8, facility_r2.commercialRegisterEndDate, "MMM d, y"), " ");
  }
}
function UsermanagmentFacilitiesComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-no-data", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showCompleteBtn", false);
  }
}
class UsermanagmentFacilitiesComponent {
  constructor(_customerFacilitiesService, _paginationService, _pupupService) {
    this._customerFacilitiesService = _customerFacilitiesService;
    this._paginationService = _paginationService;
    this._pupupService = _pupupService;
    this.reqList = {};
    this.subscriptions = [];
    this.newPageNo = 1;
    this.pagintationData = {
      currentPage: 1,
      pageCount: 0,
      pageSize: 10,
      totalCount: 0
    };
  }
  ngOnInit() {
    this.getFacilities();
    this.watchPaginationActions();
  }
  getFacilities() {
    this.subscriptions.push(this._customerFacilitiesService.getFacilities(this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res => {
      if (res && res.results.length > 0) this.updateRequestList(res);
    }));
  }
  updateRequestList(TypeListView) {
    this.reqList = TypeListView;
    this.setPaginationData(this.reqList.pageSize, this.reqList.totalCount, this.reqList.pageCount);
  }
  setPaginationData(pageSize, total, pageCount) {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  watchPaginationActions() {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  watchPagechanged() {
    this.subscriptions.push(this._paginationService.getPageChanged().subscribe(pageNo => {
      this.newPageNo = pageNo;
    }));
  }
  watchPaginationClicked() {
    this.subscriptions.push(this._paginationService.getPageClicked().subscribe(nextPage => {
      if (this.pagintationData.currentPage != nextPage) {
        this.loadNextPage(nextPage);
        this.pagintationData.currentPage = this.newPageNo;
      }
    }));
  }
  loadNextPage(nextPage) {
    this.pagintationData.currentPage = nextPage;
    this.getFacilities();
  }
  assignSubCustomerOnFacility(facility) {
    this._customerFacilitiesService.setFacilityObj(facility);
    let Data = {
      title: "تعين مفوضين على المنشأه",
      component: _related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_0__.RelatedCustomersComponent,
      id: "RelatedCustomersComponent"
    };
    this._pupupService.updatePopupData(Data);
  }
  addFacility() {
    let Data = {
      title: "اضافة منشأة",
      component: _add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_1__.AddFacilityComponent,
      id: "AddFacilityComponent"
    };
    let dialogRef = this._pupupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_ => this.getFacilities());
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
UsermanagmentFacilitiesComponent.ɵfac = function UsermanagmentFacilitiesComponent_Factory(t) {
  return new (t || UsermanagmentFacilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__.CustomerFacilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__.PopupService));
};
UsermanagmentFacilitiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: UsermanagmentFacilitiesComponent,
  selectors: [["app-usermanagment-facilities"]],
  decls: 23,
  vars: 2,
  consts: [["type", "button", 1, "btn", "btn-primary", "mb-2", 3, "click"], [1, "row", "row-gap-4"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center", "column-gap-2"], [1, "text-dark"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function UsermanagmentFacilitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsermanagmentFacilitiesComponent_Template_button_click_0_listener() {
        return ctx.addFacility();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u0634\u0623\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0643\u0648\u062F \u0627\u0644\u0634\u0631\u0643\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u062A\u0627\u0631\u064A\u062E \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\u062A\u0627\u0631\u064A\u062E \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, UsermanagmentFacilitiesComponent_tbody_19_Template, 22, 11, "tbody", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, UsermanagmentFacilitiesComponent_ng_container_22_Template, 3, 1, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqList.results);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy91c2VyLW1hbmFnZW1lbnQvY29tcG9uZW50L3VzZXJtYW5hZ21lbnQtZmFjaWxpdGllcy91c2VybWFuYWdtZW50LWZhY2lsaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0FDQUo7O0FESUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FESUE7O0VBRUUsdUJBQUE7RUFDQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUVBLG9CQUFBO0VBQ0EsMEJBQUE7QUNIRjs7QURNQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBRUEsa0NBQUE7RUFDQSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0Usb0JBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0FDTEY7O0FBeENBO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUEyQ0o7O0FBdENBO0VBQ0ksMkJBQUE7QUF5Q0o7O0FBcENBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtBQXVDSjs7QUFwQ0E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUF1Q0o7O0FBbkNBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFzQ0o7O0FBakNBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFvQ0o7O0FBaENBO0VBQ0ksMkJBQUE7QUFtQ0o7O0FBL0JBO0VBQ0UsY0FBQTtBQWtDRiIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAtLWJzLWJ0bi1mb250LXdlaWdodDogNTAwO1xuXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjI1cmVtO1xuXG4gIC5pY29uIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xufVxuXG4uYnRuLXNlY29uZGFyeSxcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgLS1icy1idG4tY29sb3I6ICN7JGRhcmtncmVlbn07XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyR3aGl0ZX07XG5cbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICN7JGRhcmtncmVlbn07XG4gIC0tYnMtYnRuLWFjdGl2ZS1iZzogI3skZGFya2dyZWVufTtcblxuICAtLWJzLWJ0bi1iZzogI0U3RjJFRDtcbiAgLS1icy1idG4taG92ZXItYmc6ICN7JGRhcmtncmVlbn07XG59XG5cbi5idG4tc3VjY2VzcyB7XG4gIC0tYnMtYnRuLWNvbG9yOiAjNzM3MzczO1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tZGlzYWJsZWQtY29sb3I6ICN7JHdoaXRlfTtcblxuICAtLWJzLWJ0bi1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJzLWJ0bi1iZzogI0U3RjJFRDtcbn1cblxuLmJ0bi1kYXJrIHtcbiAgLS1icy1idG4tYmc6ICMwRDEyMUM7XG59XG5cbi5idG4tbGluayB7XG4gIC0tYnMtYnRuLWNvbG9yOiAjeyR0aGVtZS1tYWlufTtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JGRhcmt9O1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvYm9vdHN0cmFwLWN1c3RvbS9idXR0b25zXCI7XG5cblxuXG4uYWRkYnRue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgXG59XG5cblxudGFibGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5cblxuYnV0dG9uLmJ0bi1zZWNvbmRhcnl7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbi5idG4tc2Vjb25kYXJ5OmhvdmVye1xuICAgIGNvbG9yOiMwNzZGNDIgO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cbi5kZWxldGJ0bntcbiAgICBjb2xvcjogI0ZDMUQwMDtcbiAgICBib3JkZXItY29sb3I6ICNGQzFEMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuXG4uc3RvcGJ0bntcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGN0E2OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuICBcbnRhYmxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuXG4uZWRpdDpob3ZlcntcbiAgY29sb3I6ICMwNzZGNDI7XG4gIFxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3532:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/component/verification-otp-popup/verification-otp-popup/verification-otp-popup.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationOtpPopupComponent": () => (/* binding */ VerificationOtpPopupComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 45032);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33044);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 76179);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 38810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 22510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _services_edit_profile_edit_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/edit-profile/edit-profile.service */ 18732);
/* harmony import */ var _shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/otp-input/otp-input.component */ 65298);






class VerificationOtpPopupComponent {
  constructor(_OTPService, _toastrNotificatioService, _editProfileService) {
    this._OTPService = _OTPService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this._editProfileService = _editProfileService;
    this.subscriptions = [];
    this.customerMobile = null;
    this.OTPInputValue = null;
    this.localization = {
      sendNewOtp: "ارسال الكود مرة اخري",
      newOtpSentSuccessfully: " تم إرسال رمز تحقق جديد"
    };
    this.min = 60;
    this.intervalBySec$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000);
    this.sendNewOtpIsDisabled = true;
  }
  ngOnInit() {
    this.observeOTPInputValue();
    this.createInteraval();
    this.obseveCustomerMobile();
  }
  observeOTPInputValue() {
    this._OTPService.getOTPInputValue().subscribe(res => {
      this.OTPInputValue = res;
      console.log("this.OTPInputValue", this.OTPInputValue);
    });
  }
  sendNewOtp() {
    this.subscriptions.push(this._OTPService.GenerateOTP(this.customerMobile).subscribe(res => {
      this.showSuccess(this.localization.newOtpSentSuccessfully);
      this.clearInterval();
      this.createInteraval();
    }));
  }
  showSuccess(msg) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  createInteraval() {
    this.intervalBySecSubscription = this.intervalBySec$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      console.log("before ", this.min ? this.min : ""), console.log("button disabled");
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.sendNewOtpIsDisabled = true), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.min = this.min - 1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => console.log("after ", this.min ? this.min : "")), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.iif)(() => this.min === 0, "test", "test2")), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.every)(e => this.min > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => console.log("button enabled")), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.sendNewOtpIsDisabled = false)).subscribe();
  }
  clearInterval() {
    this.intervalBySecSubscription.unsubscribe();
  }
  obseveCustomerMobile() {
    this.subscriptions.push(this._editProfileService.customerMobile.subscribe(res => {
      this.customerMobile = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
VerificationOtpPopupComponent.ɵfac = function VerificationOtpPopupComponent_Factory(t) {
  return new (t || VerificationOtpPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_0__.OTPService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_1__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_edit_profile_edit_profile_service__WEBPACK_IMPORTED_MODULE_2__.EditProfileService));
};
VerificationOtpPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: VerificationOtpPopupComponent,
  selectors: [["app-verification-otp-popup"]],
  decls: 13,
  vars: 3,
  consts: [[1, "verification-otp"], [1, "image"], ["src", "/assets/images/auth/otp-icon.svg", "alt", ""], [1, "title"], [1, "text"], [1, "d-flex", "align-items-center", "column-gap-3"], ["id", "btn-sendNewOtp", 1, "btn", "btn-link", "text-dark", 3, "click"], [1, "remaining"]],
  template: function VerificationOtpPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\u0625\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-otp-input");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function VerificationOtpPopupComponent_Template_button_click_9_listener() {
        return ctx.sendNewOtp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u0645\u0646 \u0641\u0636\u0644\u0643 \u062A\u0641\u0642\u062F \u062C\u0648\u0627\u0644\u0643 ,\u0644\u0642\u062F \u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0631\u0642\u0645 \u062C\u0648\u0627\u0644 - ", ctx.customerMobile, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.localization.sendNewOtp, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.min, " ");
    }
  },
  dependencies: [_shared_components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_3__.OTPInputComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.verification-otp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  row-gap: 1rem;\n}\n.verification-otp[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.verification-otp[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #667676;\n}\n.verification-otp[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #353B3B;\n  font-size: 1rem;\n}\n.verification-otp[_ngcontent-%COMP%]   .remaining[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy91c2VyLW1hbmFnZW1lbnQvY29tcG9uZW50L3ZlcmlmaWNhdGlvbi1vdHAtcG9wdXAvdmVyaWZpY2F0aW9uLW90cC1wb3B1cC92ZXJpZmljYXRpb24tb3RwLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFFSSxjQ1dHO0FEYlg7QUFLSTtFQUNJLGlCQUFBO0VBQ0EsY0NiRztBRFVYO0FBTUk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFKUjtBQU9JO0VBQ0ksY0M1QkQ7QUR1QlAiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnZlcmlmaWNhdGlvbi1vdHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICByb3ctZ2FwOiAxcmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAgIH1cblxuICAgIC5idG4tbGluayB7XG4gICAgICAgIC0tYnMtYnRuLWNvbG9yOiAjeyRkYXJrfTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5yZW1haW5pbmcge1xuICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 84204:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/pages/edit-profile/edit-profile.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/enums/button-type.model */ 63650);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _component_verification_otp_popup_verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/verification-otp-popup/verification-otp-popup/verification-otp-popup.component */ 3532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_edit_profile_edit_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/edit-profile/edit-profile.service */ 18732);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/otp/otp.service */ 49939);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 96328);
/* harmony import */ var _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/file-uploader/file-uploader.component */ 37985);

















function EditProfileComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r3.localization.requiredErrorMsg);
  }
}
function EditProfileComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r4.localization.phoneNumberPattern);
  }
}
function EditProfileComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EditProfileComponent_div_20_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, EditProfileComponent_div_20_div_2_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.controls["mobile1"].errors == null ? null : ctx_r0.controls["mobile1"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.controls["mobile1"].errors == null ? null : ctx_r0.controls["mobile1"].errors["pattern"]);
  }
}
function EditProfileComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r5.localization.phoneNumberPattern);
  }
}
function EditProfileComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, EditProfileComponent_div_25_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.controls["mobile2"].errors == null ? null : ctx_r1.controls["mobile2"].errors["pattern"]);
  }
}
function EditProfileComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.localization.requiredErrorMsg);
  }
}
function EditProfileComponent_div_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.localization.emailPattern);
  }
}
function EditProfileComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, EditProfileComponent_div_30_div_2_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, EditProfileComponent_div_30_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.controls["email"].errors == null ? null : ctx_r2.controls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.controls["email"].errors == null ? null : ctx_r2.controls["email"].errors["pattern"]);
  }
}
class EditProfileComponent {
  constructor(fb, _editProfileService, _userDataService, _toastrNotificatioService, _popupService, _OTPService, _storageService) {
    this.fb = fb;
    this._editProfileService = _editProfileService;
    this._userDataService = _userDataService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this._popupService = _popupService;
    this._OTPService = _OTPService;
    this._storageService = _storageService;
    this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({});
    this.subscriptions = [];
    this.userData = null;
    this.OTPInputValue = null;
    this.isMobile1Valid = false;
    this.isMobile2Valid = false;
    this.loginUserType = "";
    this.loginUserTypeEnum = null;
    this.localization = {
      save: 'حفظ البيانات',
      Mobile1: 'رقم الجوال',
      Mobile2: 'رقم الجوال 2 ( اختياري)',
      requiredErrorMsg: ' هذا حقل مطلوب ',
      phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
      nationality: 'الجنسية',
      nidnumber: 'رقم الهوية',
      emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
      email: 'البريد الإلكتروني',
      fullName: 'الاسم بالكامل',
      profilePic: 'صورة الملف الشخصي',
      pleaseVerifyYourMobile: 'من فضلك قم بالتحقق من OTP للرقم ',
      mobileNumberVerifiedSuccessfully: "تم التحقق بنجاح  "
    };
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.singleFileUploaderData = {
      multiple: false
    };
    this.createEditForm();
  }
  ngOnInit() {
    this.getLoginUserType();
    this.getUserData();
    this.observecancelAction();
    this.observeconfirmAction();
    this.observeOTPInputValue();
  }
  getLoginUserType() {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType);
    this.editForm.value.loginUserType = this.loginUserTypeEnum;
  }
  showSuccess(msg) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  getUserData() {
    this.subscriptions.push(this._userDataService.GetCustomer(this.loginUserTypeEnum).subscribe(res => {
      this.userData = res;
      this.editForm.patchValue(this.userData);
      this._userDataService.updateCustomerData(res);
    }));
  }
  get controls() {
    return this.editForm.controls;
  }
  createEditForm() {
    this.editForm = this.fb.group({
      nidnumber: [{
        value: '',
        disabled: true
      }],
      fullName: [{
        value: '',
        disabled: true
      }],
      nationality: [{
        value: '',
        disabled: true
      }],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email]],
      mobile1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_2__.Configuration.validators.PhoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_2__.Configuration.validators.numberOnly)]],
      mobile2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_2__.Configuration.validators.PhoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_2__.Configuration.validators.numberOnly)]],
      profileImageFileId: [''],
      id: [''],
      loginUserType: [0]
    });
  }
  onFileUpload(fileData) {
    this.editForm.patchValue({
      profileImageFileId: fileData.eventRes.data[0].id
    });
  }
  submit() {
    if (!this.editForm.valid) return;
    if (this.editForm.value.mobile1 != this.userData?.mobile1 && !this.isMobile1Valid) {
      this._OTPService.GenerateOTP(this.editForm.value.mobile1).subscribe(res => {
        this._editProfileService.customerMobile.next(this.editForm.value.mobile1);
        this.mobileValidating = 'mobile1';
        this.openOTPDialog(this.editForm.value.mobile1);
      });
      return;
    }
    if (this.editForm.value.mobile2 != this.userData?.mobile2 && this.editForm.value.mobile2.length > 0 && !this.isMobile2Valid) {
      this._OTPService.GenerateOTP(this.editForm.value.mobile2).subscribe(res => {
        this._editProfileService.customerMobile.next(this.editForm.value.mobile2);
        this.mobileValidating = 'mobile2';
        this.openOTPDialog(this.editForm.value.mobile2);
      });
      return;
    }
    this.subscriptions.push(this._editProfileService.UpdateCustomer(this.editForm.value).subscribe(res => {
      if (res.isDone) {
        this.getUserData();
        this.isMobile1Valid = false;
        this.isMobile2Valid = false;
        this.showSuccess('تم التعديل بنجاح');
      }
    }));
  }
  observeOTPInputValue() {
    this.subscriptions.push(this._OTPService.getOTPInputValue().subscribe(res => {
      this.OTPInputValue = res;
    }));
  }
  openOTPDialog(mobileNumber) {
    let popupData = {
      data: mobileNumber,
      title: `${this.localization.pleaseVerifyYourMobile} ${mobileNumber}`,
      component: _component_verification_otp_popup_verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_3__.VerificationOtpPopupComponent,
      buttons: [{
        icon: "",
        title: "إلغاء",
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_1__.ButtonType.cancel,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openNotesDialog()
      }, {
        icon: "",
        title: "تحقق",
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_1__.ButtonType.confirm,
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
      this.ValidateOTP(this._editProfileService.customerMobile.value, this.OTPInputValue);
    }));
  }
  ValidateOTP(mobileNumber, OTP) {
    this.subscriptions.push(this._OTPService.ValidateOTP(mobileNumber, OTP).subscribe(res => {
      if (res) {
        this.closeDialog();
        this._toastrNotificatioService.showSuccess(this.localization.mobileNumberVerifiedSuccessfully);
        if (this.mobileValidating == 'mobile1') this.isMobile1Valid = true;else if (this.mobileValidating == 'mobile2') this.isMobile2Valid = true;
        this.submit();
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
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
  return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_edit_profile_edit_profile_service__WEBPACK_IMPORTED_MODULE_4__.EditProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_8__.OTPService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService));
};
EditProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: EditProfileComponent,
  selectors: [["app-edit-profile"]],
  decls: 41,
  vars: 13,
  consts: [["id", "form-editForm", 3, "formGroup"], [1, "row", "row-gap-3", "mb-3"], [1, "col-12", "col-lg-6"], ["for", "licNum", 1, "form-label"], ["type", "text", "id", "control-projectName", "formControlName", "nidnumber", "placeholder", "\u0631\u0642\u0645  \u0627\u0644\u0647\u0648\u064A\u0629", 1, "form-control"], ["type", "text", "id", "control-projectOwner", "formControlName", "fullName", "placeholder", " \u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644", 1, "form-control"], ["type", "text", "id", "control-executingContractor", "formControlName", "nationality", "placeholder", "\u0627\u0644\u062C\u0646\u0633\u064A\u0629", 1, "form-control"], ["type", "text", "id", "control-contractorClassification", "formControlName", "mobile1", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "mobile2", 1, "form-label"], ["type", "text", "formControlName", "mobile2", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ", 1, "form-control"], ["type", "text", "id", "control-projectLocation", "formControlName", "email", "placeholder", " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control"], [1, "col-6", "col-lg-6"], [3, "data", "fileUploaded"], ["mat-dialog-actions", "", "align", "end"], ["mat-flat-button", "", 1, "primary"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "invalid-feedback", "d-block"], [4, "ngIf"]],
  template: function EditProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 2)(7, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 1)(11, "div", 2)(12, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, EditProfileComponent_div_20_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 2)(22, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, EditProfileComponent_div_25_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 2)(27, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, EditProfileComponent_div_30_Template, 4, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 1)(32, "div", 12)(33, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "app-file-uploader", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("fileUploaded", function EditProfileComponent_Template_app_file_uploader_fileUploaded_35_listener($event) {
        return ctx.onFileUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 14)(37, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "\u0625\u0644\u063A\u0627\u0621");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_39_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.nidnumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.fullName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.nationality, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.Mobile1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.controls["mobile1"].errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.Mobile2, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.controls["mobile2"].errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.email, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.controls["email"].errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.localization.profilePic, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data", ctx.singleFileUploaderData);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.localization.save);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_10__.FileUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 25636:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/pages/user-profile/user-profile.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/usermanagment-facilities/usermanagment-facilities.component */ 57226);
/* harmony import */ var _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/user-management-delegators/user-management-delegators.component */ 97021);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/tabs/tabs.service */ 3408);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/tabs/tabs.component */ 73754);








function UserProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.baseUrl + (ctx_r0.userData == null ? null : ctx_r0.userData.profileImageFile == null ? null : ctx_r0.userData.profileImageFile.filePath), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
class UserProfileComponent {
  constructor(_tabsService, _userDataService) {
    this._tabsService = _tabsService;
    this._userDataService = _userDataService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseURL}/`;
    this.userData = null;
    this.tabContent = {
      verticalTabs: false,
      activeTabIndex: 0,
      tabsComponentList: [{
        icon: '',
        title: " المفوضون",
        Component: _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_1__.UserManagementDelegatorsComponent,
        disabled: false,
        isVisible: true,
        id: "UserManagementDelegatorsComponent"
      },
      // {
      //   icon: '',
      //   title: "طلبات التسجيل",
      //   Component: RegistrationRequestComponent,
      //   disabled: false,
      //   isVisible: true,
      //   id: "RegistrationRequestComponent"
      // },
      {
        icon: '',
        title: " المنشآت",
        Component: _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_0__.UsermanagmentFacilitiesComponent,
        disabled: false,
        isVisible: true,
        id: "UsermanagmentFacilitiesComponent"
      }]
    };
  }
  ngOnInit() {
    this.updateTabContent();
    this.obseveCustomerData();
  }
  updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_3__.TabsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService));
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["app-user-profile"]],
  decls: 43,
  vars: 7,
  consts: [[1, "card", "mb-5"], [1, "card-body"], [1, "row"], [1, "col-9"], [1, "col-3", "col-lg-auto"], ["class", "image", 4, "ngIf"], [1, "col-6", "col-lg-auto"], [1, "row", "col-lg-auto", "py-2"], [1, "col-8", "col-lg-auto"], [1, "bold"], [1, "row", "col-lg-auto"], [1, "col-5"], [1, "col-7"], [1, "col-3", "d-flex", "justify-content-end", "align-items-start"], [1, "tab-wrapper", "flex-fill"], [3, "tabClassName"], [1, "image"], ["width", "200", "height", "200", 1, "d-block", "w-85", 3, "src"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UserProfileComponent_div_6_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " \u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12)(24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 2)(27, "div", 11)(28, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " \u0627\u0644\u062C\u0646\u0633\u064A\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 12)(31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 10)(34, "div", 11)(35, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 12)(38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "app-tabs", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userData == null ? null : ctx.userData.profileImageFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.fullName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.nidnumber, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.mobile1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.nationality, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tabClassName", "rounded-header");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.TabsComponent],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.card[_ngcontent-%COMP%] {\n  --bs-card-title-spacer-y: 0;\n  --bs-card-cap-bg: $card-bg;\n  border: 1px solid #E7EAEA;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:not(.no-separetor)::after {\n  content: \"\";\n  position: absolute;\n  inset-inline: var(--bs-card-cap-padding-x);\n  bottom: 0;\n  height: 1px;\n  background-color: #E7EAEA;\n}\n.card.qualiication-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: background-image 0.15s;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding: 1.5rem 1rem 1rem;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-start-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n  background-color: rgba(0, 31, 33, 0.3);\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1rem 1rem 1.5rem;\n  border-bottom: 6px solid transparent;\n  border-end-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg-hover.png\");\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 1.25rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #E4ECEC;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  background-color: rgba(0, 31, 33, 0.08);\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n  color: #353B3B;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #00B2BD;\n  align-self: flex-end;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  background-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.brief-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border: 1px solid rgba(196, 196, 196, 0.2);\n  border-top: 0.5rem solid #005257;\n  border-radius: 0.5rem;\n  box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.26);\n}\n.card.brief-card[_ngcontent-%COMP%]    + .brief-card[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    + .item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-inline-end: 1rem;\n  background-color: #F5FCFC;\n  border-radius: 0.25rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #005257;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #001F21;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #A2B2B3;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 1.75rem;\n  --bs-btn-padding-y: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #005257;\n}\n.card.phases-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(0, 31, 33, 0.08);\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(217, 217, 217, 0.4);\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]    + .phase[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.done[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.current[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.next[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #E7EAEA;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-status[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.status-dot[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #F5FCFC;\n}\n.status-dot[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n}\n.status-dot.Draft[_ngcontent-%COMP%], .status-pill.Draft[_ngcontent-%COMP%] {\n  color: #8A9393;\n  background-color: #F8FAFA;\n}\n.status-dot.RequestAccepted[_ngcontent-%COMP%], .status-dot.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-dot.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-dot.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-dot.ReqIsBeingReviewed[_ngcontent-%COMP%], .status-pill.RequestAccepted[_ngcontent-%COMP%], .status-pill.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-pill.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-pill.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-pill.ReqIsBeingReviewed[_ngcontent-%COMP%] {\n  color: #59A8D4;\n  background-color: #F8FBFD;\n}\n.status-dot.None[_ngcontent-%COMP%], .status-dot.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%], .status-pill.None[_ngcontent-%COMP%], .status-pill.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%] {\n  color: #1EC39A;\n  background-color: #F4FAF9;\n}\n.status-dot.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-dot.ReqIsBeingStudied[_ngcontent-%COMP%], .status-pill.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-pill.ReqIsBeingStudied[_ngcontent-%COMP%] {\n  color: #F1BD56;\n  background-color: #FAF6ED;\n}\n.status-dot.RequestRejected[_ngcontent-%COMP%], .status-pill.RequestRejected[_ngcontent-%COMP%] {\n  color: #FF7A69;\n  background-color: #FCF6F5;\n}\n.status-dot.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-dot.QualificationCertificateIssued[_ngcontent-%COMP%], .status-pill.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-pill.QualificationCertificateIssued[_ngcontent-%COMP%] {\n  color: #84C03F;\n  background-color: #F4FAF9;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 6rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 6px solid #093266;\n  border-radius: 10%;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy91c2VyLW1hbmFnZW1lbnQvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19jYXJkcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fc3RhdHVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQ0EsbUJFNERNO0VGMUROLHlCQUFBO0VBQ0EsNEVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElNO0VBQ0UsWUVwQkE7QURrQlI7QURTSTs7RUFFRSxxQkV0Qks7QURlWDtBRFVJO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEV0k7RUFDRSx5QkFBQTtBQ1ROO0FEV007RUFDRSw2QkFBQTtBQ1RSO0FEYUk7RUFDRSxxQkV2Q0s7RUZ3Q0wscUJFc0JJO0FEakNWO0FEYU07RUFDRSxjRTFCRztFRjJCSCx1QkVuREE7QUR3Q1I7QURlSTtFQUNFLGtCQUFBO0FDYk47QURlTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxtQkVLRTtFRkpGLHVCRWxFQTtFRm1FQSwrQ0FBQTtBQ2RSO0FEZ0JRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVFbEJLO0VGbUJMLGNFM0VGO0FENkRSO0FEa0JVO0VBQ0Usa0JBQUE7QUNoQlo7QURtQlU7RUFDRSxjQUFBO0FDakJaOztBRDJCRTtFQUdFLGdCQUFBO0FDMUJKO0FENkJFO0VBQ0UsY0U5Rk87RUYrRlAsa0JBQUE7QUMzQko7QUQ4QkU7RUFDRSxlQUFBO0FDNUJKO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDOUJKO0FEZ0NJO0VBQ0UsY0V2R007QUR5RVo7QURpQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSx5QkVuSEs7QURtRlg7O0FEcUNBO0VBQ0Usa0JBQUE7QUNsQ0Y7O0FEdUNJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDcENOO0FEc0NNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ3BDUjtBRHlDTTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUN2Q1I7QUR5Q1E7RUFDRSwwQkFBQTtBQ3ZDVjtBRDRDSTtFQUNFLGNFbEtDO0FEd0hQOztBRGdERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzdDSjtBRCtDSTtFQUNFLGdCQUFBO0FDN0NOO0FEaURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLGVFbklXO0VGb0lYLGlCQUFBO0VBQ0EsWUU1TEk7RUY2TEosa0JBQUE7RUFDQSx5QkVqTFE7QURnSVo7QURvREU7RUFDRSxlRTVJVztFRjZJWCxnQkFBQTtFQUNBLGNFdE1JO0FEb0pSOztBRXJKQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFFQSx5QkFBQTtBRnVKRjtBRXJKRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBRnNKSjtBRXBKSTtFQUNFLGVEMkNTO0FEMkdmO0FFbEpNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLHlCRG5CTTtBRHNLZDtBRTlJRTtFQUNFLGtCQUFBO0VBQ0EscUJEd0NNO0VDdENOLG1HQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBRUEsa0NBQUE7QUY4SUo7QUU1SUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBRUEsaUNEa0JJO0VDakJKLDZCRGlCSTtFQ2ZKLHNDQUFBO0FGMElOO0FFeElNO0VBQ0UsWUR6REE7QURtTVI7QUV0SUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JER0k7RUNGSiw2QkRFSTtBRHNJVjtBRXRJTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUR6RUE7QURpTlI7QUVwSUk7RUFDRSx5R0FBQTtBRnNJTjtBRXBJTTtFQUNFLHFCRHBFSTtBRDBNWjtBRWpJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJEM0ZJO0VDNEZKLHNCRHhCTTtFQ3lCTixlQUFBO0FGa0lKO0FFaElJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FGaUlOO0FFL0hNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkQzR0c7QUR5T1g7QUU1SFE7RUFDRSxXQUFBO0FGOEhWO0FFM0hRO0VBQ0UsWUQ3SEY7QUQwUFI7QUV6SE07RUFDRSxhQUFBO0FGMkhSO0FFekhRO0VBQ0UsY0R4SEU7QURtUFo7QUV0SEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLHVDQUFBO0FGdUhOO0FFckhNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNEckpEO0FENFFQO0FFcEhNO0VBQ0UsY0Q3SUc7RUM4SUgsb0JBQUE7QUZzSFI7QUVqSE07RUFDRSx5QkRsSkk7QURxUVo7QUVqSFE7RUFDRSxZRGxLRjtBRHFSUjtBRWhIUTtFQUNFLFlEdEtGO0FEd1JSO0FFNUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7QUY2R0o7QUUzR0k7RUFDRSxnQkFBQTtBRjZHTjtBRTFHSTtFQUNFLGFBQUE7QUY0R047QUUxR007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUY0R1I7QUUxR1E7RUFDRSxnQkFBQTtBRjRHVjtBRXpHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkQxTEU7RUMyTEYsc0JENUlBO0FEcVBWO0FFdkdVO0VBQ0UsY0R0TUE7QUQrU1o7QUVyR1E7RUFDRSxZQUFBO0VBQ0EsY0QzTkY7QURrVVI7QUVwR1E7OztFQUdFLGVEeEtLO0FEOFFmO0FFbkdRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBRnFHVjtBRWxHUTtFQUNFLGNBQUE7QUZvR1Y7QUUvRkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FGZ0dOO0FFOUZNO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBRmdHUjtBRTdGTTtFQUNFLGdDQUFBO0FGK0ZSO0FFMUZFO0VBQ0UsOENBQUE7QUY0Rko7QUUxRkk7RUFDRSxvQkFBQTtBRjRGTjtBRTFGTTtFQUNFLHFCQUFBO0FGNEZSO0FFeEZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRjBGTjtBRXhGTTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUYwRlI7QUV2Rk07RUFDRSxrQkFBQTtBRnlGUjtBRXRGTTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRndGUjtBRXRGUTs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ5RlY7QUV2RlU7O0VBQ0UsZUR4UEs7QURrVmpCO0FFcEZRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRnNGVjtBRXBGVTtFQUNFLGNEOVJEO0FEb1hYO0FFbEZRO0VBQ0UsY0RuU0M7QUR1WFg7QUU5RVU7RUFDRSx5QkQ3U0E7QUQ2WFo7QUV6RVU7RUFDRSx5QkRyVEE7QURnWVo7QUVwRVU7RUFDRSx5QkQvVUU7QURxWmQ7QUVqRU07O0VBRUUseUJBQUE7QUZtRVI7QUVoRU07O0VBRUUsZUR4U087QUQwV2Y7QUUvRE07RUFDRSxlRDNTTztBRDRXZjs7QUd0YUE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLHNCRmlFUTtFRWhFUixlRmtEYTtFRWpEYixnQkFBQTtFQUNBLHlCRmVVO0FEeVpaO0FHdGFFOztFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVGNENXO0FENlhmO0FHdGFFOztFQUNFLGNBQUE7RUFDQSx5QkFBQTtBSHlhSjtBR3RhRTs7Ozs7O0VBS0UsY0ZKRztFRUtILHlCQUFBO0FIeWFKO0FHdGFFOzs7RUFFRSxjQUFBO0VBQ0EseUJBQUE7QUh5YUo7QUd0YUU7OztFQUVFLGNBQUE7RUFDQSx5QkFBQTtBSHlhSjtBR3RhRTs7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUh5YUo7QUd0YUU7OztFQUVFLGNGckNRO0VFc0NSLHlCQUFBO0FIeWFKOztBQXRkQTtFQUNJLGVBQUE7QUF5ZEo7O0FBdGRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF5ZEo7O0FBdGRBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQXlkSjs7QUF0ZEE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUF5ZEoiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAmLndpdGgtYWJzdHJhY3Qge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9nZW5lcmFsL3BhZ2UtaGVhZGVyLXRvcC1hYnN0cmFjdC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVyIHtcblxuICAgIC5pbnB1dC1ncm91cC10ZXh0LFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4gICAgICAmOm5vdCg6aG92ZXIpIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNyaXRlcmlhLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuY3JpdGVyaWEge1xuICAgICAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgLjVyZW0pO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAxNnB4IHJnYmEoJGJsYWNrLCAuMDUpO1xuXG4gICAgICAgID4udGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jaGVjayB7XG4gICAgICAgICAgJisuZm9ybS1jaGVjayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzkzOTM5MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhZ2UtdGl0bGUge1xuXG4gICYrLnRleHQsXG4gICYrLm9yZGVyLWxpc3QsXG4gICYrLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gICYrLnRleHQge1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50aXRsZS1ib3R0b20tbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgIGluc2V0LWlubGluZTogMDtcblxuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgICYrLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogLjVyZW07XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAuNXJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSkge1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxuICB9XG59XG5cbnVsLm9yZGVyLWxpc3Qge1xuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgJitsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5vcmRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9wYWdlXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2FyZHNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9zdGF0dXNcIjtcblxuXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbn1cblxuaW1nIHtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAkdGhlbWUtZGFyaztcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIuY2FyZCB7XG4gIC0tYnMtY2FyZC10aXRsZS1zcGFjZXIteTogMDtcbiAgLS1icy1jYXJkLWNhcC1iZzogJGNhcmQtYmc7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICB9XG5cbiAgICAmOm5vdCgubm8tc2VwYXJldG9yKSB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0LWlubGluZTogdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5xdWFsaWljYXRpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4xNXM7XG5cbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG5cbiAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gICAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAuMyk7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDEuNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zL2NvbnRlbnQvcXVhbGlmaWNhdGlvbi9jYXJkLWJnLWhvdmVyLnBuZycpO1xuXG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmxpY2Vuc2UtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcblxuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTRFQ0VDO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1taWQ7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgPio6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIC4wOCk7XG5cbiAgICAgIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5hcnJvdyB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtbWlkO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWFpbjtcblxuICAgICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5icmllZi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjIpO1xuICAgIGJvcmRlci10b3A6IDAuNXJlbSBzb2xpZCAkdGhlbWUtbWFpbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgxODEsIDE4MywgMTg1LCAwLjI2KTtcblxuICAgICYrLmJyaWVmLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICB9XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJisuaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1sYWJlbCxcbiAgICAgICAgLmtleSxcbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgIH1cblxuICAgICAgICAua2V5IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgY29sb3I6ICNBMkIyQjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAuNXJlbTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMXJlbTtcbiAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICAtLWJzLWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XG4gICAgICAgIC0tYnMtYnRuLXBhZGRpbmcteTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLnAtYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR0aGVtZS1tYWluO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYucGhhc2VzLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKCRibGFjaywgMC4wOCk7XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGhhc2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICByb3ctZ2FwOiAuNXJlbTtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGJsdWVncmF5LCAuNCk7XG4gICAgICB9XG5cbiAgICAgICYrLnBoYXNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAucGhhc2UtaGVhZGVyLFxuICAgICAgLnBoYXNlLWRhdGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmRvbmUge1xuICAgICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY3VycmVudCB7XG4gICAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5uZXh0IHtcbiAgICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGhhc2Utc3RhdHVzLFxuICAgICAgLnBoYXNlLWRhdGUge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAycmVtO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICYucXVhbGlpY2F0aW9uLXJlcWVzdC1jYXJkIHtcbiAgLy8gICAuY2FyZC10aXRsZSB7XG5cbiAgLy8gICAgIC50aXRsZSxcbiAgLy8gICAgIC5kYXRlLFxuICAvLyAgICAgLmFjdGlvbnMge1xuICAvLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAudGl0bGUge1xuICAvLyAgICAgICBjb2xvcjogJGRhcms7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5kYXRlIHtcbiAgLy8gICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgICAgLmtleSB7XG4gIC8vICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAudmFsdWUge1xuICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgICAgICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5hY3Rpb25zIHtcbiAgLy8gICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIC5hcHBsaWNhbnQge1xuICAvLyAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgIC5rZXkge1xuICAvLyAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gIC8vICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC52YWx1ZSB7XG4gIC8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAgIC5pbWFnZSB7XG4gIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC8vICAgICAgICAgd2lkdGg6IDJyZW07XG4gIC8vICAgICAgICAgaGVpZ2h0OiAycmVtO1xuXG4gIC8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtncmVlbjtcbiAgLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKCRibGFjaywgMC4xKTtcblxuICAvLyAgICAgICAgIC5hdmF0YXIge1xuICAvLyAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC5uYW1lIHtcbiAgLy8gICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5kZXRhaWxzIHtcbiAgLy8gICAgICAgbGFiZWwge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgLy8gICAgICAgICBjb2xvcjogcmdiYSgkZGFya2dyYXksIC41KTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNwYW4ge1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbn0iLCIuc3RhdHVzLWRvdCxcbi5zdGF0dXMtcGlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcGFkZGluZzogLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJnO1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAuNXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gIH1cblxuICAmLkRyYWZ0IHtcbiAgICBjb2xvcjogIzhBOTM5MztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQUZBO1xuICB9XG5cbiAgJi5SZXF1ZXN0QWNjZXB0ZWQsXG4gICYuUmVxdWVzdFZlcmlmaWVkQXNzaWduZWRUb0FkbWluLFxuICAmLlJlcXVlc3RJc0JlaW5nUHJvY2Vzc2VkLFxuICAmLlJlcXVlc3RIYXNCZWVuU2VudEZvclJldmlldyxcbiAgJi5SZXFJc0JlaW5nUmV2aWV3ZWQge1xuICAgIGNvbG9yOiAkaW5mbztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQkZEO1xuICB9XG5cbiAgJi5Ob25lLFxuICAmLlJlcXVlc3RQcm9jZXNzZWRBbmRGZWVkYmFja1NlbnQge1xuICAgIGNvbG9yOiAjMUVDMzlBO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZBRjk7XG4gIH1cblxuICAmLkZlZWRiYWNrUHJvY2Vzc2VkQW5kUmVxdWVzdFNlbnQsXG4gICYuUmVxSXNCZWluZ1N0dWRpZWQge1xuICAgIGNvbG9yOiAjRjFCRDU2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUY2RUQ7XG4gIH1cblxuICAmLlJlcXVlc3RSZWplY3RlZCB7XG4gICAgY29sb3I6ICNGRjdBNjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGNTtcbiAgfVxuXG4gICYuUmVxdVRoZVJlcXVlc3RIYXNCZWVuQXBwcm92ZWQsXG4gICYuUXVhbGlmaWNhdGlvbkNlcnRpZmljYXRlSXNzdWVkIHtcbiAgICBjb2xvcjogJG1pbnRncmVlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGQUY5O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 47720:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/services/customer-facilities.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFacilitiesService": () => (/* binding */ CustomerFacilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);





class CustomerFacilitiesService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.facilitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
    this.facilitySubject$ = this.facilitySubject.asObservable();
  }
  getFacilityObj() {
    return this.facilitySubject$;
  }
  setFacilityObj(LatestValue) {
    return this.facilitySubject.next(LatestValue);
  }
  getFacilities(pageIndex, pageSize) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Customer.GetCustomerFacilities}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.isDone) {
        return res.data;
      } else return {};
    }));
  }
  Save(list) {
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RelatedCustomer.Save, list).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  GetRelatedCustomerListByFacilityId(facilityId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RelatedCustomer.GetRelatedCustomerListByFacilityId}/${facilityId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  GetRelatedCustomerList(pageIndex, pageSize) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RelatedCustomer.GetRelatedCustomerList}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone ? res.data : null;
    }));
  }
  GetSubCustomers() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Customer.GetSubCustomers}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res?.data;
    }));
  }
  FacilityRegister(CommercialRegisterNumber, customerId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.facility.Register}/${CommercialRegisterNumber}/${customerId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data ? res.data : null;
    }));
  }
  Delete(id) {
    return this._httpClient.delete(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RelatedCustomer.Delete}?id=${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res;
    }));
  }
}
CustomerFacilitiesService.ɵfac = function CustomerFacilitiesService_Factory(t) {
  return new (t || CustomerFacilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CustomerFacilitiesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CustomerFacilitiesService,
  factory: CustomerFacilitiesService.ɵfac
});

/***/ }),

/***/ 18732:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/services/edit-profile/edit-profile.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileService": () => (/* binding */ EditProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);




class EditProfileService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.customerMobile = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  UpdateCustomer(data) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Customer.UpdateCustomer}`, data);
  }
}
EditProfileService.ɵfac = function EditProfileService_Factory(t) {
  return new (t || EditProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
EditProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: EditProfileService,
  factory: EditProfileService.ɵfac
});

/***/ }),

/***/ 59396:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/services/registration-request/registration-request.service.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationRequestService": () => (/* binding */ RegistrationRequestService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);






class RegistrationRequestService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.submitSuccessfullyEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  getCommissioners(pageIndex, pageSize) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RegistrationRequest.GetRegisterationRequests}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.isDone) {
        return res.data;
      } else return {};
    }));
  }
  deletCommissioner(id) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RegistrationRequest.Delete}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res;
    }));
  }
  updateCommissioner(model) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RegistrationRequest.Update}`, model);
  }
  getCommissionerByID(id) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RegistrationRequest.GetById}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  AddCommissioners(model) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RegistrationRequest.Add}`, model);
  }
}
RegistrationRequestService.ɵfac = function RegistrationRequestService_Factory(t) {
  return new (t || RegistrationRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RegistrationRequestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegistrationRequestService,
  factory: RegistrationRequestService.ɵfac
});

/***/ }),

/***/ 33066:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/services/user-management-delegators.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDelegatorsService": () => (/* binding */ UserManagementDelegatorsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);






class UserManagementDelegatorsService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.submitSuccessfullyEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  getDelegators(pageIndex, pageSize) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Customer.GetSubCustomersList}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone ? res.data : null;
    }));
  }
}
UserManagementDelegatorsService.ɵfac = function UserManagementDelegatorsService_Factory(t) {
  return new (t || UserManagementDelegatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
UserManagementDelegatorsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserManagementDelegatorsService,
  factory: UserManagementDelegatorsService.ɵfac
});

/***/ }),

/***/ 73006:
/*!************************************************************************************!*\
  !*** ./src/app/modules/features/user-management/user-management-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementRoutingModule": () => (/* binding */ UserManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ 25636);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ 84204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);






const routes = [{
  path: '',
  redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.userManagement.userProfile,
  pathMatch: 'full'
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.userManagement.userProfile,
  component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent,
  data: {
    breadcrumb: 'إدارة المنشأة '
  }
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.userManagement.editProfile,
  component: _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__.EditProfileComponent
}];
class UserManagementRoutingModule {}
UserManagementRoutingModule.ɵfac = function UserManagementRoutingModule_Factory(t) {
  return new (t || UserManagementRoutingModule)();
};
UserManagementRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: UserManagementRoutingModule
});
UserManagementRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 61647:
/*!****************************************************************************!*\
  !*** ./src/app/modules/features/user-management/user-management.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementModule": () => (/* binding */ UserManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management-routing.module */ 73006);
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ 25636);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/usermanagment-facilities/usermanagment-facilities.component */ 57226);
/* harmony import */ var _component_delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/delegator-actions/delegator-actions.component */ 6370);
/* harmony import */ var _component_registration_request_registration_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/registration-request/registration-request.component */ 5031);
/* harmony import */ var _services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/registration-request/registration-request.service */ 59396);
/* harmony import */ var _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/user-management-delegators/user-management-delegators.component */ 97021);
/* harmony import */ var _services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user-management-delegators.service */ 33066);
/* harmony import */ var _component_verification_otp_popup_verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/verification-otp-popup/verification-otp-popup/verification-otp-popup.component */ 3532);
/* harmony import */ var _services_edit_profile_edit_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/edit-profile/edit-profile.service */ 18732);
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ 84204);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/customer-facilities.service */ 47720);
/* harmony import */ var _component_related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/related-customers/related-customers.component */ 27814);
/* harmony import */ var _component_add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/add-facility/add-facility.component */ 76331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 86793);


















class UserManagementModule {}
UserManagementModule.ɵfac = function UserManagementModule_Factory(t) {
  return new (t || UserManagementModule)();
};
UserManagementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: UserManagementModule
});
UserManagementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_6__.RegistrationRequestService, _services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_8__.UserManagementDelegatorsService, _services_edit_profile_edit_profile_service__WEBPACK_IMPORTED_MODULE_10__.EditProfileService, _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_12__.CustomerFacilitiesService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserManagementRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](UserManagementModule, {
    declarations: [_pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent, _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_3__.UsermanagmentFacilitiesComponent, _component_delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_4__.delegatoractionsComponent, _component_registration_request_registration_request_component__WEBPACK_IMPORTED_MODULE_5__.RegistrationRequestComponent, _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_7__.UserManagementDelegatorsComponent, _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_11__.EditProfileComponent, _component_verification_otp_popup_verification_otp_popup_verification_otp_popup_component__WEBPACK_IMPORTED_MODULE_9__.VerificationOtpPopupComponent, _component_related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_13__.RelatedCustomersComponent, _component_add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_14__.AddFacilityComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserManagementRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_features_user-management_user-management_module_ts.js.map