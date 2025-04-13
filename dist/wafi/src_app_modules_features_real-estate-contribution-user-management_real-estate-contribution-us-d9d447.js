"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_features_real-estate-contribution-user-management_real-estate-contribution-us-d9d447"],{

/***/ 35791:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/add-facility/add-facility.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFacilityComponent": () => (/* binding */ AddFacilityComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_shared_models_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/customer.model */ 47859);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 13604);
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
  styles: [".form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n.rega[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(9, 50, 102, 0.75);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  cursor: pointer;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  border-inline-end: none;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8rem;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #005257;\n}\n\n.forgot-pass-link[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.forgot-pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.redir-link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n.rega[_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .redir-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #005257;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  column-gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid #dae5e1;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: normal;\n  color: #093266;\n}\n.rega[_nghost-%COMP%]   .form-title[_ngcontent-%COMP%], .rega   [_nghost-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2F1dGgtZm9ybXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb24tdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC9hZGQtZmFjaWxpdHkvYWRkLWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3N0ZXBwZXItY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fdGFiLWNvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUVJLDZCQUFBO0FDTko7QURRSTtFQUNJLDZCQUFBO0FDTlI7O0FEVUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNQSjtBRFNJO0VBQ0ksZUVxQ087RUZuQ1AsY0VLRztBRGJYO0FEVVE7RUFDSSxjRUVEO0FEVlg7O0FEY0k7RUFDSSx1QkFBQTtBQ1hSOztBRGVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FDYko7QURlSTtFQUNJLFVBQUE7QUNiUjs7QURtQkk7O0VBQ0ksZUVNTztFRkxQLGNFcENJO0FEcUJaOztBRG1CQTtFQUNJLGVBQUE7QUNoQko7QURrQkk7RUFFSSxxQkFBQTtBQ2pCUjtBRG1CUTtFQUNJLDBCQUFBO0FDakJaOztBRHNCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QUR3QlE7RUFDSSxjRTdEQTtBRHVDWjs7QUV2REE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FGeURKO0FFdkRJO0VBQ0ksVUFBQTtBRnlEUjs7QUVyREE7RUFDSSxtQkFBQTtFQUNBLGVEd0NXO0VDdkNYLG1CQUFBO0VBRUEsY0RPTztBRGdEWDtBRXJESTtFQUNJLGNESUc7QURtRFg7QUVwREk7RUFDSSxnQkFBQTtBRnNEUjs7QUdqRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUhtRkY7QUdqRkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJGTVE7QUQyRVo7QUcvRUk7RUFDRSxjRk1LO0FEMkVYO0FHN0VFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FIK0VKO0FHNUVFO0VBQ0UsZ0JBQUE7QUg4RUo7O0FHekVFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBSDRFSjtBR3pFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FIMEVKO0FHeEVJO0VBQ0UsZ0JBQUE7QUgwRU47QUd0RUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUZEVztBRHdFZjtBR3BFRTtFQUNFLGVGTFc7RUVNWCxjRnZETztBRDZIWDtBR25FRTtFQUNFLGVGVFc7RUVVWCxnQkFBQTtFQUNBLGNGOURRO0FEbUlaO0FHbkVJO0VBQ0Usa0JBQUE7QUhxRU47QUdqRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUZ4Qlc7RUV5QlgsZ0JBQUE7RUFDQSxjRmxGSTtBRG9KUjtBR2hFSTtFQUNFLGtCQUFBO0FIa0VOO0FHL0RJO0VBQ0UsY0ZuRk07QURvSlo7QUc5REk7RUFDRSxlQUFBO0FIZ0VOO0FHOURNO0VBQ0UsZUZ4Q087QUR3R2YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZm9ybS1ncm91cCB7XG4vLyAgICAgJisuZm9ybS1ncm91cCB7XG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4vLyAgICAgfVxuLy8gfVxuXG4uZm9ybS1sYWJlbCB7XG4gICAgLy8gY29sb3I6IHJnYmEoJGdyZWVuZ3JheSwgMC41KTtcbiAgICBjb2xvcjogcmdiYSgkdGhlbWUtZGFyaywgMC43NSk7XG5cbiAgICA6aG9zdC1jb250ZXh0KC5yZWdhKSAmIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJHRoZW1lLWRhcmssIDAuNzUpO1xuICAgIH1cbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQ6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAvLyBjb2xvcjogJGdyZWVuZ3JheTtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gICAgICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgID4uZm9ybS1jb250cm9sIHtcbiAgICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDhyZW07XG5cbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rLFxuLnJlZGlyLWxpbmsge1xuICAgIGEge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICB9XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgICBhIHtcbiAgICAgICAgLy8gY29sb3I6ICM3ZDliOGY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmVkaXItbGluayB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBhIHtcbiAgICAgICAgLy8gY29sb3I6ICRncmVlbmdyYXk7XG5cbiAgICAgICAgOmhvc3QtY29udGV4dCgucmVnYSkgJiB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmZvcm0tbGFiZWwge1xuICBjb2xvcjogcmdiYSg5LCA1MCwgMTAyLCAwLjc1KTtcbn1cbjpob3N0LWNvbnRleHQoLnJlZ2EpIC5mb3JtLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoOSwgNTAsIDEwMiwgMC43NSk7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlucHV0LWdyb3VwLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuOmhvc3QtY29udGV4dCgucmVnYSkgLmlucHV0LWdyb3VwLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cblxuLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cbi5hY3Rpb25zIC5idG4ge1xuICB3aWR0aDogMzAlO1xufVxuXG4uZm9yZ290LXBhc3MtbGluayBhLFxuLnJlZGlyLWxpbmsgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG5cbi5mb3Jnb3QtcGFzcy1saW5rIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmZvcmdvdC1wYXNzLWxpbmsgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb3Jnb3QtcGFzcy1saW5rIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnJlZGlyLWxpbmsge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAucmVkaXItbGluayBhIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhZTVlMTtcbn1cbi5hY3Rpb25zIC5idG4ge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG46aG9zdC1jb250ZXh0KC5yZWdhKSAuZm9ybS10aXRsZSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLmZvcm0tdGl0bGUgfiAuZm9ybS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLnRhYi1kYXRhLWhlYWRlciAuZWRpdC1pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG59XG4udGFiLWRhdGEtaGVhZGVyIH4gLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4udGFiLWRhdGEtc2VjdGlvbiArIC50YWItZGF0YS1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NzY3Njtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQURBRkIyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSArIC52YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSArIC52YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuaWNvbiB7XG4gIGNvbG9yOiAjQURBRkIyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMXJlbTtcblxuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWU1ZTE7XG5cbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgIDpob3N0LWNvbnRleHQoLnJlZ2EpICYge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuXG4gICAgJn4uZm9ybS10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 40515:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/delegator-actions/delegator-actions.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delegatoractionsComponent": () => (/* binding */ delegatoractionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/registration-request/registration-request.service */ 8675);
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
  styles: [".mdc-dialog__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  color: #001F21;\n}\n.mdc-dialog__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n\n.mdc-dialog__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-height: none;\n  margin-inline: 1rem;\n  padding-inline: 1rem;\n  letter-spacing: normal;\n  overflow-x: hidden;\n}\n\n.mdc-dialog__actions[_ngcontent-%COMP%] {\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  border-top: 3px solid #E4E4E4;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-color: #ADAFB2;\n}\nhtml[_ngcontent-%COMP%]:lang(ar)   .input-group[_ngcontent-%COMP%]:not(.has-validation)    > [_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\nhtml[_ngcontent-%COMP%]:lang(ar)   .input-group[_ngcontent-%COMP%]:not(.has-validation)    > [_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\n  border-inline-width: 0;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\nhtml[_ngcontent-%COMP%]:lang(ar)   .input-group[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  border-inline-start: 0;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.rega[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-color: #ADAFB2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWN1c3RvbS9fZGlhbG9nLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9uLXVzZXItbWFuYWdlbWVudC9jb21wb25lbnQvZGVsZWdhdG9yLWFjdGlvbnMvZGVsZWdhdG9yLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19mb3JtLWNvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fdGFiLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2lucHV0LWdyb3VwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ0xNO0FDS1I7QUZFRTtFQUNFLHlCQUFBO0FFQUo7O0FGSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtBRUZGOztBRktBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUVGRjs7QUN4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsY0ZvQlM7QUNLWDtBQ3ZCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBRHVCSjtBQ3JCSTtFQUNFLGdCQUFBO0VBRUEsY0ZHSztBQ21CWDtBQ2xCRTtFQUNFLGNGNUJJO0FDZ0RSO0FDakJFO0VBQ0UsaUJBQUE7QURtQko7O0FDZkE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0FEa0JGOztBQ2ZBO0VBQ0UsYUFBQTtFQUNBLHFCRjRCUTtFRTNCUiwwQ0FBQTtBRGtCRjtBQ2hCRTtFQUxGO0lBTUksYUFBQTtFRG1CRjtBQUNGO0FDakJFO0VBQ0UsbUJBQUE7RUFDQSxlRklXO0VFSFgsaUJBQUE7QURtQko7O0FDZkE7RUFDRSxlRkZhO0VFR2IsaUJBQUE7RUFDQSxlQUFBO0FEa0JGOztBQ2ZBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEa0JGO0FDaEJFOzs7O0VBRUUsZUZiWTtBQ2lDaEI7QUNqQkU7O0VBRUUsY0ZsRE87QUNxRVg7O0FDZEU7RUFFRSxjRnpETztBQ3lFWDs7QUNaQTtFQUNFLGVGOUJjO0FDNkNoQjtBQ2JFO0VBQ0UsY0FBQTtBRGVKOztBQ1hBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JGaENRO0VFaUNSLDJDQUFBO0FEYUY7QUNYRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBRGFKOztBQ1RBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFFQSw2QkFBQTtFQUNBLHVCRjVITTtBQ3FJUjtBQ05JO0VBREY7SUFFSSxVQUFBO0VEU0o7QUFDRjs7QUNMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QURRRjs7QUVuSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUZxSkY7QUVuSkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJITVE7QUM2SVo7QUVqSkk7RUFDRSxjSE1LO0FDNklYO0FFL0lFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FGaUpKO0FFOUlFO0VBQ0UsZ0JBQUE7QUZnSko7O0FFM0lFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBRjhJSjtBRTNJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FGNElKO0FFMUlJO0VBQ0UsZ0JBQUE7QUY0SU47QUV4SUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUhEVztBQzBJZjtBRXRJRTtFQUNFLGVITFc7RUdNWCxjSHZETztBQytMWDtBRXJJRTtFQUNFLGVIVFc7RUdVWCxnQkFBQTtFQUNBLGNIOURRO0FDcU1aO0FFcklJO0VBQ0Usa0JBQUE7QUZ1SU47QUVuSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUh4Qlc7RUd5QlgsZ0JBQUE7RUFDQSxjSGxGSTtBQ3NOUjtBRWxJSTtFQUNFLGtCQUFBO0FGb0lOO0FFaklJO0VBQ0UsY0huRk07QUNzTlo7QUVoSUk7RUFDRSxlQUFBO0FGa0lOO0FFaElNO0VBQ0UsZUh4Q087QUMwS2Y7O0FHaE9JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJKQ0k7QUNrT1o7QUc5Tlk7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JKMEROO0VJekRNLGtDSnlETjtBQ3VLVjtBRzNOWTtFQUNJLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUg2TmhCO0FHdk5RO0VBQ0ksc0JBQUE7RUFDQSw4Qkp1Q0Y7RUl0Q0UsaUNKc0NGO0VJckNFLDBCQUFBO0VBQ0EsNkJBQUE7QUh5Tlo7O0FHcE5BO0VBQ0ksdUJKdkNJO0FDOFBSO0FHck5JO0VBRUksY0puQkc7QUN5T1g7QUdwTlE7RUFDSSxjSnRCRDtBQzRPWDs7QUEvUEE7RUFDSSxxQkRGUTtBQ29RWiIsInNvdXJjZXNDb250ZW50IjpbIi5tZGMtZGlhbG9nX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luLWlubGluZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxufVxuXG4ubWRjLWRpYWxvZ19fY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LWhlaWdodDogbm9uZTtcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG5cbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWRjLWRpYWxvZ19fYWN0aW9ucyB7XG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFNEU0RTQ7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtY3VzdG9tL2RpYWxvZy1jb250ZW50XCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvZm9ybS1jb25lbnRcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC90YWItY29udGVudFwiO1xuQGltcG9ydCAnL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vaW5wdXQtZ3JvdXAnO1xuXG5cblxuaW5wdXQge1xuICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbn0iLCIuZm9ybS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICBjb2xvcjogJHRoZW1lLWRhcms7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgc21hbGwge1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cblxuICAmfi5mb3JtLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgfVxufVxuXG4uZm9ybS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiByZ2JhKCRkYXJrLCAuNSk7XG59XG5cbi5mb3JtLWJsb2NrIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmx1ZWdyYXksIC4yKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uYWRkLWFycmF5IHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1ub3RlLFxuLmZvcm0tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC50ZXh0LFxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG4gIH1cblxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgfVxufVxuXG4uZm9ybS10ZXh0IHtcbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gIH1cbn1cblxuLmZvcm0tbm90ZSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4uZm9ybS1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtaW4taGVpZ2h0OiAxNXJlbTtcbiAgYm9yZGVyOiAxLjJweCBkYXNoZWQgJGRhcmtncmF5O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmx1ZWdyYXksIC4xOSk7XG5cbiAgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IC0xcmVtO1xuICB6LWluZGV4OiAxO1xuXG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcblxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RBRTVFMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXG4gIC5idG4ge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0Y1O1xufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4uaW5wdXQtZ3JvdXAge1xuICAgIC5idG4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItY29sb3I6ICRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLmhhcy12YWxpZGF0aW9uKSB7XG4gICAgICAgICY+IDpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKTpub3QoLmRyb3Bkb3duLW1lbnUpIHtcbiAgICAgICAgICAgIGh0bWw6bGFuZyhhcikgJiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmPiA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSk6bm90KC5kcm9wZG93bi1tZW51KSB7XG4gICAgICAgICAgICBodG1sOmxhbmcoYXIpICYge1xuICAgICAgICAgICAgICAgIGJvcmRlci1pbmxpbmUtd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICY+IDpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLW1lbnUpOm5vdCgudmFsaWQtdG9vbHRpcCk6bm90KC52YWxpZC1mZWVkYmFjayk6bm90KC5pbnZhbGlkLXRvb2x0aXApOm5vdCguaW52YWxpZC1mZWVkYmFjaykge1xuICAgICAgICBodG1sOmxhbmcoYXIpICYge1xuICAgICAgICAgICAgYm9yZGVyLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgICAgICAucmVnYSAmIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 20463:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/delegators/delegators.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delegatorsComponent": () => (/* binding */ delegatorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 96328);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 9271);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);









function delegatorsComponent_tbody_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td")(21, "div", 15)(22, "button", 16)(23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 19)(28, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function delegatorsComponent_tbody_27_Template_mat_icon_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const comdata_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.DeleteCommissioners(comdata_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const comdata_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", comdata_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", comdata_r1.identityNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comdata_r1.employeeTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comdata_r1.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", comdata_r1.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", comdata_r1.nationalityName, " ");
  }
}
class delegatorsComponent {
  constructor(dialog, _router, _paginationService) {
    this.dialog = dialog;
    this._router = _router;
    this._paginationService = _paginationService;
    this.subscriptions = [];
    this.newPageNo = 1;
    this.pagintationData = {
      currentPage: 1,
      pageCount: 0,
      pageSize: 2,
      totalCount: 0
    };
    this.commissionersdata = [{
      id: "1",
      identityNumber: "121524582",
      mobileNumber: "121524582",
      email: "121524582",
      name: "121524582",
      nationalityName: "سعودي",
      isProfileCreated: true,
      departmentId: "121524582",
      departmentName: "121524582",
      employeeTypeId: 121524582,
      employeeTypeName: "121524582"
    }, {
      id: "2",
      identityNumber: "121524582",
      mobileNumber: "121524582",
      email: "121524582",
      name: "121524582",
      nationalityName: "121524582",
      isProfileCreated: false,
      departmentId: "121524582",
      departmentName: "121524582",
      employeeTypeId: 121524582,
      employeeTypeName: "121524582"
    }, {
      id: "3",
      identityNumber: "121524582",
      mobileNumber: "121524582",
      email: "121524582",
      name: "121524582",
      nationalityName: "121524582",
      isProfileCreated: true,
      departmentId: "121524582",
      departmentName: "121524582",
      employeeTypeId: 121524582,
      employeeTypeName: "121524582"
    }];
    this.reqList = {};
  }
  ngOnInit() {
    // this.getCommissionersData()
  }
  // private updateRequestList(TypeListView: Pagination<Commissionerstabledata[]>): void {
  //   this.reqList = TypeListView;
  //   this.setPaginationData(
  //     this.reqList.pageSize,
  //     this.reqList.totalCount,
  //     this.reqList.pageCount
  //   );
  // }
  getCommissionersData() {
    // this.subscriptions.push(
    //   this._comservice.getCommissioners(this.pagintationData.currentPage, this.pagintationData.pageSize)
    //   .subscribe((res: Pagination<Commissionerstabledata[]>) => {
    //     this.updateRequestList(res as Pagination<Commissionerstabledata[]>)
    //     })
    // )
  }
  DeleteCommissioners(id) {
    //   console.log(id)
    //   this._comservice.deletCommissioner(id).subscribe(res=>{
    //     if(res.isDone){
    //       this.getCommissionersData
    //     }
    //   })
  }
}
delegatorsComponent.ɵfac = function delegatorsComponent_Factory(t) {
  return new (t || delegatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService));
};
delegatorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: delegatorsComponent,
  selectors: [["app-delegators"]],
  decls: 30,
  vars: 1,
  consts: [[1, "row", "row-gap-4"], [1, "col-12"], [1, "filter"], [1, "row"], [1, "col-6", "justify-content-end", "align-items-end"], ["type", "button", "color", "primary", "mat-flat-button", "", 1, "addbtn", "btn", "btn-outline-primary", "d-flex", "align-items-center", "column-gap-1", "float-left"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], [1, "underline", "fw-bold", "text-primary"], [1, "d-flex", "align-items-center", "column-gap-2"], ["dir", "ltr", 1, "text-dark"], [1, "text-dark"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-primary", 2, "background-color", "white"], [1, "material-icons"], [1, "btn", "deletbtn", "m-1"], [1, "btn", "stopbtn"], [1, "material-icons", 3, "click"]],
  template: function delegatorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0641\u0648\u0636 \u062C\u062F\u064A\u062F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "table", 7)(9, "thead")(10, "tr")(11, "th", 8)(12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \u0627\u0633\u0645 \u0627\u0644\u0645\u0641\u0648\u0636");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 8)(17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u0627\u0644\u062C\u0646\u0633\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, delegatorsComponent_tbody_27_Template, 30, 6, "tbody", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.commissionersdata);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb24tdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC9kZWxlZ2F0b3JzL2RlbGVnYXRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0FDQUo7O0FESUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FESUE7O0VBRUUsdUJBQUE7RUFDQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUVBLG9CQUFBO0VBQ0EsMEJBQUE7QUNIRjs7QURNQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBRUEsa0NBQUE7RUFDQSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0Usb0JBQUE7QUNKRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0FDTEY7O0FBeENBO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUEyQ0o7O0FBdENBO0VBQ0ksMkJBQUE7QUF5Q0o7O0FBcENBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtBQXVDSjs7QUFwQ0E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUF1Q0o7O0FBbkNBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFzQ0o7O0FBakNBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFvQ0o7O0FBaENBO0VBQ0ksMkJBQUE7QUFtQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgLS1icy1idG4tZm9udC13ZWlnaHQ6IDUwMDtcblxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC4yNXJlbTtcblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbn1cblxuLmJ0bi1zZWNvbmRhcnksXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIC0tYnMtYnRuLWNvbG9yOiAjeyRkYXJrZ3JlZW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjeyRkYXJrZ3JlZW59O1xuICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICN7JGRhcmtncmVlbn07XG5cbiAgLS1icy1idG4tYmc6ICNFN0YyRUQ7XG4gIC0tYnMtYnRuLWhvdmVyLWJnOiAjeyRkYXJrZ3JlZW59O1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogIzczNzM3MztcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAjeyR3aGl0ZX07XG5cbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1icy1idG4tYmc6ICNFN0YyRUQ7XG59XG5cbi5idG4tZGFyayB7XG4gIC0tYnMtYnRuLWJnOiAjMEQxMjFDO1xufVxuXG4uYnRuLWxpbmsge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skdGhlbWUtbWFpbn07XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyRkYXJrfTtcblxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vYnV0dG9uc1wiO1xuXG5cblxuLmFkZGJ0bntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIFxufVxuXG5cbnRhYmxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuXG5cbmJ1dHRvbi5idG4tc2Vjb25kYXJ5e1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24uYnRuLXNlY29uZGFyeTpob3ZlcntcbiAgICBjb2xvcjojMDc2RjQyIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG4uZGVsZXRidG57XG4gICAgY29sb3I6ICNGQzFEMDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkMxRDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLnN0b3BidG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6ICNGRjdBNjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiAgXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 29109:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/projects-manegers/projects-manegers.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsManegersComponent": () => (/* binding */ ProjectsManegersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86793);

class ProjectsManegersComponent {}
ProjectsManegersComponent.ɵfac = function ProjectsManegersComponent_Factory(t) {
  return new (t || ProjectsManegersComponent)();
};
ProjectsManegersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectsManegersComponent,
  selectors: [["app-projects-manegers"]],
  decls: 2,
  vars: 0,
  template: function ProjectsManegersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects-manegers works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 25469:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/registration-request/registration-request.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationRequestComponent": () => (/* binding */ RegistrationRequestComponent)
/* harmony export */ });
/* harmony import */ var _delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delegator-actions/delegator-actions.component */ 40515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/registration-request/registration-request.service */ 8675);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9271);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);











function RegistrationRequestComponent_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "div", 14)(13, "button", 15)(14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrationRequestComponent_tbody_19_Template_span_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const comdata_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.openDialog(comdata_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 17)(17, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrationRequestComponent_tbody_19_Template_mat_icon_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const comdata_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.DeleteCommissioners(comdata_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const comdata_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", comdata_r2.identityNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comdata_r2.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", comdata_r2.email, " ");
  }
}
function RegistrationRequestComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-no-data", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showCompleteBtn", false);
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
      this.updateRequestList(res);
      console.log("this.reqList", this.reqList);
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
  decls: 23,
  vars: 3,
  consts: [[1, "row", "row-gap-4"], [1, "col-12"], [1, "filter"], [1, "row"], [1, "col-6", "justify-content-end", "align-items-end"], ["type", "button", "color", "primary", "mat-flat-button", "", 1, "addbtn", "btn", "btn-outline-primary", "d-flex", "align-items-center", "column-gap-1", "float-left", 3, "click"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center", "column-gap-2"], [1, "text-dark"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-primary", "m-2", "edit", 2, "background-color", "white"], [1, "material-icons", 3, "click"], [1, "btn", "stopbtn"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function RegistrationRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrationRequestComponent_Template_button_click_5_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u0625\u0636\u0627\u0641\u0629 \u0645\u0641\u0648\u0636 \u062C\u062F\u064A\u062F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "table", 7)(9, "thead")(10, "tr")(11, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " \u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RegistrationRequestComponent_tbody_19_Template, 19, 3, "tbody", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RegistrationRequestComponent_ng_container_22_Template, 3, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqList.results)("ngForTrackBy", ctx.trackByFnMultipleFields);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb24tdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC9yZWdpc3RyYXRpb24tcmVxdWVzdC9yZWdpc3RyYXRpb24tcmVxdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7QUNBSjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTs7RUFFRSx1QkFBQTtFQUNBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBRUEsb0JBQUE7RUFDQSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQ0FBQTtFQUNBLG9CQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QUF4Q0E7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQTJDSjs7QUF0Q0E7RUFDSSwyQkFBQTtBQXlDSjs7QUFwQ0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBdUNKOztBQXBDQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQXVDSjs7QUFuQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQXNDSjs7QUFqQ0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQW9DSjs7QUFoQ0E7RUFDSSwyQkFBQTtBQW1DSjs7QUEvQkE7RUFDRSxjQUFBO0FBa0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIC0tYnMtYnRuLWZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG59XG5cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcblxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAjeyRkYXJrZ3JlZW59O1xuXG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xuICAtLWJzLWJ0bi1ob3Zlci1iZzogI3skZGFya2dyZWVufTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgLS1icy1idG4tY29sb3I6ICM3MzczNzM7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xufVxuXG4uYnRuLWRhcmsge1xuICAtLWJzLWJ0bi1iZzogIzBEMTIxQztcbn1cblxuLmJ0bi1saW5rIHtcbiAgLS1icy1idG4tY29sb3I6ICN7JHRoZW1lLW1haW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skZGFya307XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9ib290c3RyYXAtY3VzdG9tL2J1dHRvbnNcIjtcblxuXG5cbi5hZGRidG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBcbn1cblxuXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuXG5idXR0b24uYnRuLXNlY29uZGFyeXtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgY29sb3I6IzA3NkY0MiA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuLmRlbGV0YnRue1xuICAgIGNvbG9yOiAjRkMxRDAwO1xuICAgIGJvcmRlci1jb2xvcjogI0ZDMUQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5zdG9wYnRue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkY3QTY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4gIFxudGFibGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5cbi5lZGl0OmhvdmVye1xuICBjb2xvcjogIzA3NkY0MjtcbiAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 80688:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/related-customers/related-customers.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelatedCustomersComponent": () => (/* binding */ RelatedCustomersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 27382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 13604);
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
    this.relatedCustomerList = [];
    this.subscriptions = [];
    this.loginUserType = "";
    this.loginUserTypeEnum = null;
    this.showValidation = false;
    this.userData = null;
    this.assignedSubCustomerForm = this._formBuilder.group({
      subCustomerListIds: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
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
  getLoginUserType() {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType);
  }
  getFacilityObj() {
    this.subscriptions.push(this._customerFacilitiesService.getFacilityObj().subscribe(res => {
      if (res) {
        this.facility = res;
        if (this.facility && this.facility.id) this.loadComponentData();
      }
    }));
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
  styles: [".mdc-dialog__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  color: #001F21;\n}\n.mdc-dialog__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n}\n\n.mdc-dialog__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-height: none;\n  margin-inline: 1rem;\n  padding-inline: 1rem;\n  letter-spacing: normal;\n  overflow-x: hidden;\n}\n\n.mdc-dialog__actions[_ngcontent-%COMP%] {\n  margin-inline: 2rem;\n  padding: 1rem 0;\n  border-top: 3px solid #E4E4E4;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWN1c3RvbS9fZGlhbG9nLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9uLXVzZXItbWFuYWdlbWVudC9jb21wb25lbnQvcmVsYXRlZC1jdXN0b21lcnMvcmVsYXRlZC1jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19mb3JtLWNvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fdGFiLWNvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNDTE07QUNLUjtBRkVFO0VBQ0UseUJBQUE7QUVBSjs7QUZJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0FFRkY7O0FGS0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRUZGOztBQ3hCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFFQSxjRm9CUztBQ0tYO0FDdkJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FEdUJKO0FDckJJO0VBQ0UsZ0JBQUE7RUFFQSxjRkdLO0FDbUJYO0FDbEJFO0VBQ0UsY0Y1Qkk7QUNnRFI7QUNqQkU7RUFDRSxpQkFBQTtBRG1CSjs7QUNmQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QURrQkY7O0FDZkE7RUFDRSxhQUFBO0VBQ0EscUJGNEJRO0VFM0JSLDBDQUFBO0FEa0JGO0FDaEJFO0VBTEY7SUFNSSxhQUFBO0VEbUJGO0FBQ0Y7QUNqQkU7RUFDRSxtQkFBQTtFQUNBLGVGSVc7RUVIWCxpQkFBQTtBRG1CSjs7QUNmQTtFQUNFLGVGRmE7RUVHYixpQkFBQTtFQUNBLGVBQUE7QURrQkY7O0FDZkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURrQkY7QUNoQkU7Ozs7RUFFRSxlRmJZO0FDaUNoQjtBQ2pCRTs7RUFFRSxjRmxETztBQ3FFWDs7QUNkRTtFQUVFLGNGekRPO0FDeUVYOztBQ1pBO0VBQ0UsZUY5QmM7QUM2Q2hCO0FDYkU7RUFDRSxjQUFBO0FEZUo7O0FDWEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkZoQ1E7RUVpQ1IsMkNBQUE7QURhRjtBQ1hFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FEYUo7O0FDVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUVBLDZCQUFBO0VBQ0EsdUJGNUhNO0FDcUlSO0FDTkk7RUFERjtJQUVJLFVBQUE7RURTSjtBQUNGOztBQ0xBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRFFGOztBRW5KQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBRnFKRjtBRW5KRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkhNUTtBQzZJWjtBRWpKSTtFQUNFLGNITUs7QUM2SVg7QUUvSUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUZpSko7QUU5SUU7RUFDRSxnQkFBQTtBRmdKSjs7QUUzSUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FGOElKO0FFM0lFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUY0SUo7QUUxSUk7RUFDRSxnQkFBQTtBRjRJTjtBRXhJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxlSERXO0FDMElmO0FFdElFO0VBQ0UsZUhMVztFR01YLGNIdkRPO0FDK0xYO0FFcklFO0VBQ0UsZUhUVztFR1VYLGdCQUFBO0VBQ0EsY0g5RFE7QUNxTVo7QUVySUk7RUFDRSxrQkFBQTtBRnVJTjtBRW5JRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlSHhCVztFR3lCWCxnQkFBQTtFQUNBLGNIbEZJO0FDc05SO0FFbElJO0VBQ0Usa0JBQUE7QUZvSU47QUVqSUk7RUFDRSxjSG5GTTtBQ3NOWjtBRWhJSTtFQUNFLGVBQUE7QUZrSU47QUVoSU07RUFDRSxlSHhDTztBQzBLZiIsInNvdXJjZXNDb250ZW50IjpbIi5tZGMtZGlhbG9nX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luLWlubGluZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxufVxuXG4ubWRjLWRpYWxvZ19fY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LWhlaWdodDogbm9uZTtcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG5cbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWRjLWRpYWxvZ19fYWN0aW9ucyB7XG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFNEU0RTQ7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIubWRjLWRpYWxvZ19fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4taW5saW5lOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLm1kYy1kaWFsb2dfX3RpdGxlIGJ1dHRvbiB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG59XG5cbi5tZGMtZGlhbG9nX19jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICBtYXJnaW4taW5saW5lOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWRjLWRpYWxvZ19fYWN0aW9ucyB7XG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFNEU0RTQ7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5mb3JtLXRpdGxlIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDNjM1O1xufVxuLmZvcm0tdGl0bGUgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5mb3JtLXRpdGxlIHNtYWxsIHtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4uZm9ybS10aXRsZSB+IC5mb3JtLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG59XG5cbi5mb3JtLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHJnYmEoNTMsIDU5LCA1OSwgMC41KTtcbn1cblxuLmZvcm0tYmxvY2sge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE3LCAyMTcsIDIxNywgMC4yKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1ibG9jayB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuLmZvcm0tYmxvY2sgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZC1hcnJheSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tbm90ZSxcbi5mb3JtLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG4uZm9ybS1ub3RlIC50ZXh0LFxuLmZvcm0tbm90ZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSxcbi5mb3JtLXRleHQgLnRleHQsXG4uZm9ybS10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZvcm0tbm90ZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSxcbi5mb3JtLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cblxuLmZvcm0tdGV4dCBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuXG4uZm9ybS1ub3RlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZvcm0tbm90ZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybS1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGJvcmRlcjogMS4ycHggZGFzaGVkICM2Njc2NzY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE3LCAyMTcsIDIxNywgMC4xOSk7XG59XG4uZm9ybS1pbWFnZXMgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogLTFyZW07XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQUU1RTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0tYWN0aW9ucyAuYnRuIHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG59XG5cbi5mb3JtLXNlcGFyYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3RjU7XG59XG5cbi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLnRhYi1kYXRhLWhlYWRlciAuZWRpdC1pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG59XG4udGFiLWRhdGEtaGVhZGVyIH4gLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4udGFiLWRhdGEtc2VjdGlvbiArIC50YWItZGF0YS1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NzY3Njtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQURBRkIyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSArIC52YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSArIC52YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuaWNvbiB7XG4gIGNvbG9yOiAjQURBRkIyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIuZm9ybS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICBjb2xvcjogJHRoZW1lLWRhcms7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgc21hbGwge1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cblxuICAmfi5mb3JtLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgfVxufVxuXG4uZm9ybS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiByZ2JhKCRkYXJrLCAuNSk7XG59XG5cbi5mb3JtLWJsb2NrIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmx1ZWdyYXksIC4yKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uYWRkLWFycmF5IHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1ub3RlLFxuLmZvcm0tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC50ZXh0LFxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG4gIH1cblxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgfVxufVxuXG4uZm9ybS10ZXh0IHtcbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gIH1cbn1cblxuLmZvcm0tbm90ZSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4uZm9ybS1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtaW4taGVpZ2h0OiAxNXJlbTtcbiAgYm9yZGVyOiAxLjJweCBkYXNoZWQgJGRhcmtncmF5O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmx1ZWdyYXksIC4xOSk7XG5cbiAgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IC0xcmVtO1xuICB6LWluZGV4OiAxO1xuXG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcblxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RBRTVFMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXG4gIC5idG4ge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0Y1O1xufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88664:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/user-management-delegators/user-management-delegators.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDelegatorsComponent": () => (/* binding */ UserManagementDelegatorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user-management-delegators.service */ 25564);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 13604);
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
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb24tdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC91c2VyLW1hbmFnZW1lbnQtZGVsZWdhdG9ycy91c2VyLW1hbmFnZW1lbnQtZGVsZWdhdG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7QUNBSjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTs7RUFFRSx1QkFBQTtFQUNBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBRUEsb0JBQUE7RUFDQSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQ0FBQTtFQUNBLG9CQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QUF4Q0E7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQTJDSjs7QUF0Q0E7RUFDSSwyQkFBQTtBQXlDSjs7QUFwQ0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBdUNKOztBQXBDQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQXVDSjs7QUFuQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQXNDSjs7QUFqQ0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQW9DSjs7QUFoQ0E7RUFDSSwyQkFBQTtBQW1DSjs7QUEvQkE7RUFDRSxjQUFBO0FBa0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIC0tYnMtYnRuLWZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG59XG5cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcblxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAjeyRkYXJrZ3JlZW59O1xuXG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xuICAtLWJzLWJ0bi1ob3Zlci1iZzogI3skZGFya2dyZWVufTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgLS1icy1idG4tY29sb3I6ICM3MzczNzM7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xufVxuXG4uYnRuLWRhcmsge1xuICAtLWJzLWJ0bi1iZzogIzBEMTIxQztcbn1cblxuLmJ0bi1saW5rIHtcbiAgLS1icy1idG4tY29sb3I6ICN7JHRoZW1lLW1haW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skZGFya307XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9ib290c3RyYXAtY3VzdG9tL2J1dHRvbnNcIjtcblxuXG5cbi5hZGRidG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBcbn1cblxuXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuXG5idXR0b24uYnRuLXNlY29uZGFyeXtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgY29sb3I6IzA3NkY0MiA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuLmRlbGV0YnRue1xuICAgIGNvbG9yOiAjRkMxRDAwO1xuICAgIGJvcmRlci1jb2xvcjogI0ZDMUQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5zdG9wYnRue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkY3QTY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4gIFxudGFibGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5cbi5lZGl0OmhvdmVye1xuICBjb2xvcjogIzA3NkY0MjtcbiAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86445:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/component/usermanagment-facilities/usermanagment-facilities.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsermanagmentFacilitiesComponent": () => (/* binding */ UsermanagmentFacilitiesComponent)
/* harmony export */ });
/* harmony import */ var _related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../related-customers/related-customers.component */ 80688);
/* harmony import */ var _add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-facility/add-facility.component */ 35791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-facilities.service */ 13604);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);









function UsermanagmentFacilitiesComponent_tbody_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td")(16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td")(20, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsermanagmentFacilitiesComponent_tbody_21_Template_button_click_20_listener() {
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
function UsermanagmentFacilitiesComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-no-data", 13);
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
  decls: 25,
  vars: 2,
  consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row", "row-gap-4"], [1, "col-12"], [1, "filter"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center", "column-gap-2"], [1, "text-dark"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function UsermanagmentFacilitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsermanagmentFacilitiesComponent_Template_button_click_0_listener() {
        return ctx.addFacility();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0627\u0636\u0627\u0641\u0629 \u0645\u0646\u0634\u0623\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "table", 5)(7, "thead")(8, "tr")(9, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\u0643\u0648\u062F \u0627\u0644\u0634\u0631\u0643\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "\u062A\u0627\u0631\u064A\u062E \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u062A\u0627\u0631\u064A\u062E \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, UsermanagmentFacilitiesComponent_tbody_21_Template, 22, 11, "tbody", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, UsermanagmentFacilitiesComponent_ng_container_24_Template, 3, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqList.results);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb24tdXNlci1tYW5hZ2VtZW50L2NvbXBvbmVudC91c2VybWFuYWdtZW50LWZhY2lsaXRpZXMvdXNlcm1hbmFnbWVudC1mYWNpbGl0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBOztFQUVFLHVCQUFBO0VBQ0EsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFFQSxvQkFBQTtFQUNBLDBCQUFBO0FDSEY7O0FETUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUVBLGtDQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0FDSkY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtBQ0xGOztBQXhDQTtFQUNJLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBMkNKOztBQXRDQTtFQUNJLDJCQUFBO0FBeUNKOztBQXBDQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7QUF1Q0o7O0FBcENBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBdUNKOztBQW5DQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBc0NKOztBQWpDQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBb0NKOztBQTdCQTtFQUNJLDJCQUFBO0FBZ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIC0tYnMtYnRuLWZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG59XG5cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcblxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAjeyRkYXJrZ3JlZW59O1xuXG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xuICAtLWJzLWJ0bi1ob3Zlci1iZzogI3skZGFya2dyZWVufTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgLS1icy1idG4tY29sb3I6ICM3MzczNzM7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xufVxuXG4uYnRuLWRhcmsge1xuICAtLWJzLWJ0bi1iZzogIzBEMTIxQztcbn1cblxuLmJ0bi1saW5rIHtcbiAgLS1icy1idG4tY29sb3I6ICN7JHRoZW1lLW1haW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skZGFya307XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9ib290c3RyYXAtY3VzdG9tL2J1dHRvbnNcIjtcblxuXG5cbi5hZGRidG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBcbn1cblxuXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuXG5idXR0b24uYnRuLXNlY29uZGFyeXtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgY29sb3I6IzA3NkY0MiA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuLmRlbGV0YnRue1xuICAgIGNvbG9yOiAjRkMxRDAwO1xuICAgIGJvcmRlci1jb2xvcjogI0ZDMUQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5zdG9wYnRue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkY3QTY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cbiAgXG5cbiAgXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuXG5cbiAgXG5cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14822:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/pages/user-profile/user-profile.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/user-management-delegators/user-management-delegators.component */ 88664);
/* harmony import */ var _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/usermanagment-facilities/usermanagment-facilities.component */ 86445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/tabs/tabs.service */ 3408);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/tabs/tabs.component */ 73754);






class UserProfileComponent {
  constructor(_tabsService, _userDataService) {
    this._tabsService = _tabsService;
    this._userDataService = _userDataService;
    this.subscriptions = [];
    this.userData = null;
    this.tabContent = {
      verticalTabs: false,
      activeTabIndex: 0,
      tabsComponentList: [{
        icon: '',
        title: " المفوضون",
        Component: _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_0__.UserManagementDelegatorsComponent,
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
        Component: _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_1__.UsermanagmentFacilitiesComponent,
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
  return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_2__.TabsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService));
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["app-user-profile"]],
  decls: 44,
  vars: 6,
  consts: [[1, "card", "mb-5"], [1, "card-body"], [1, "row"], [1, "col-9"], [1, "col-3", "col-lg-auto"], [1, "image"], ["src", "../../../../../../assets/images/general/static-person.jpeg", "alt", "", 1, "d-block", "w-100"], [1, "col-6", "col-lg-auto"], [1, "row", "col-lg-auto", "py-2"], [1, "col-8", "col-lg-auto"], [1, "bold"], [1, "row", "col-lg-auto"], [1, "col-5"], [1, "col-7"], [1, "col-3", "d-flex", "justify-content-end", "align-items-start"], [1, "tab-wrapper", "flex-fill"], [3, "tabClassName"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " \u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 2)(28, "div", 12)(29, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " \u0627\u0644\u062C\u0646\u0633\u064A\u0629 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 13)(32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 11)(35, "div", 12)(36, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 13)(39, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "app-tabs", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.fullName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.nidnumber, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.mobile1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.nationality, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabClassName", "rounded-header");
    }
  },
  dependencies: [_shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__.TabsComponent],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.card[_ngcontent-%COMP%] {\n  --bs-card-title-spacer-y: 0;\n  --bs-card-cap-bg: $card-bg;\n  border: 1px solid #E7EAEA;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:not(.no-separetor)::after {\n  content: \"\";\n  position: absolute;\n  inset-inline: var(--bs-card-cap-padding-x);\n  bottom: 0;\n  height: 1px;\n  background-color: #E7EAEA;\n}\n.card.qualiication-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: background-image 0.15s;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding: 1.5rem 1rem 1rem;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-start-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n  background-color: rgba(0, 31, 33, 0.3);\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1rem 1rem 1.5rem;\n  border-bottom: 6px solid transparent;\n  border-end-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg-hover.png\");\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 1.25rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #E4ECEC;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  background-color: rgba(0, 31, 33, 0.08);\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n  color: #353B3B;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #00B2BD;\n  align-self: flex-end;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  background-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.brief-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border: 1px solid rgba(196, 196, 196, 0.2);\n  border-top: 0.5rem solid #005257;\n  border-radius: 0.5rem;\n  box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.26);\n}\n.card.brief-card[_ngcontent-%COMP%]    + .brief-card[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    + .item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-inline-end: 1rem;\n  background-color: #F5FCFC;\n  border-radius: 0.25rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #005257;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #001F21;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #A2B2B3;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 1.75rem;\n  --bs-btn-padding-y: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #005257;\n}\n.card.phases-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(0, 31, 33, 0.08);\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(217, 217, 217, 0.4);\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]    + .phase[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.done[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.current[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.next[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #E7EAEA;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-status[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.status-dot[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #F5FCFC;\n}\n.status-dot[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n}\n.status-dot.Draft[_ngcontent-%COMP%], .status-pill.Draft[_ngcontent-%COMP%] {\n  color: #8A9393;\n  background-color: #F8FAFA;\n}\n.status-dot.RequestAccepted[_ngcontent-%COMP%], .status-dot.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-dot.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-dot.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-dot.ReqIsBeingReviewed[_ngcontent-%COMP%], .status-pill.RequestAccepted[_ngcontent-%COMP%], .status-pill.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-pill.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-pill.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-pill.ReqIsBeingReviewed[_ngcontent-%COMP%] {\n  color: #59A8D4;\n  background-color: #F8FBFD;\n}\n.status-dot.None[_ngcontent-%COMP%], .status-dot.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%], .status-pill.None[_ngcontent-%COMP%], .status-pill.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%] {\n  color: #1EC39A;\n  background-color: #F4FAF9;\n}\n.status-dot.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-dot.ReqIsBeingStudied[_ngcontent-%COMP%], .status-pill.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-pill.ReqIsBeingStudied[_ngcontent-%COMP%] {\n  color: #F1BD56;\n  background-color: #FAF6ED;\n}\n.status-dot.RequestRejected[_ngcontent-%COMP%], .status-pill.RequestRejected[_ngcontent-%COMP%] {\n  color: #FF7A69;\n  background-color: #FCF6F5;\n}\n.status-dot.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-dot.QualificationCertificateIssued[_ngcontent-%COMP%], .status-pill.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-pill.QualificationCertificateIssued[_ngcontent-%COMP%] {\n  color: #84C03F;\n  background-color: #F4FAF9;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 6rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 6px solid green;\n  border-radius: 10%;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb24tdXNlci1tYW5hZ2VtZW50L3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fY2FyZHMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3N0YXR1cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUU7RUFDRSxvQkFBQTtFQUNBLG1CRTRETTtFRjFETix5QkFBQTtFQUNBLDRFQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDREo7QURJTTtFQUNFLFlFcEJBO0FEa0JSO0FEU0k7O0VBRUUscUJFdEJLO0FEZVg7QURVSTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUNSTjtBRFdJO0VBQ0UseUJBQUE7QUNUTjtBRFdNO0VBQ0UsNkJBQUE7QUNUUjtBRGFJO0VBQ0UscUJFdkNLO0VGd0NMLHFCRXNCSTtBRGpDVjtBRGFNO0VBQ0UsY0UxQkc7RUYyQkgsdUJFbkRBO0FEd0NSO0FEZUk7RUFDRSxrQkFBQTtBQ2JOO0FEZU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUVBLDBDQUFBO0VBQ0EsbUJFS0U7RUZKRix1QkVsRUE7RUZtRUEsK0NBQUE7QUNkUjtBRGdCUTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlRWxCSztFRm1CTCxjRTNFRjtBRDZEUjtBRGtCVTtFQUNFLGtCQUFBO0FDaEJaO0FEbUJVO0VBQ0UsY0FBQTtBQ2pCWjs7QUQyQkU7RUFHRSxnQkFBQTtBQzFCSjtBRDZCRTtFQUNFLGNFOUZPO0VGK0ZQLGtCQUFBO0FDM0JKO0FEOEJFO0VBQ0UsZUFBQTtBQzVCSjtBRCtCRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQzlCSjtBRGdDSTtFQUNFLGNFdkdNO0FEeUVaO0FEaUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0VBQ0EseUJFbkhLO0FEbUZYOztBRHFDQTtFQUNFLGtCQUFBO0FDbENGOztBRHVDSTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQ3BDTjtBRHNDTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNwQ1I7QUR5Q007RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FDdkNSO0FEeUNRO0VBQ0UsMEJBQUE7QUN2Q1Y7QUQ0Q0k7RUFDRSxjRWxLQztBRHdIUDs7QURnREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUM3Q0o7QUQrQ0k7RUFDRSxnQkFBQTtBQzdDTjtBRGlERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFFQSxlRW5JVztFRm9JWCxpQkFBQTtFQUNBLFlFNUxJO0VGNkxKLGtCQUFBO0VBQ0EseUJFakxRO0FEZ0laO0FEb0RFO0VBQ0UsZUU1SVc7RUY2SVgsZ0JBQUE7RUFDQSxjRXRNSTtBRG9KUjs7QUVySkE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBRUEseUJBQUE7QUZ1SkY7QUVySkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUZzSko7QUVwSkk7RUFDRSxlRDJDUztBRDJHZjtBRWxKTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSx5QkRuQk07QURzS2Q7QUU5SUU7RUFDRSxrQkFBQTtFQUNBLHFCRHdDTTtFQ3RDTixtR0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUVBLGtDQUFBO0FGOElKO0FFNUlJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUVBLGlDRGtCSTtFQ2pCSiw2QkRpQkk7RUNmSixzQ0FBQTtBRjBJTjtBRXhJTTtFQUNFLFlEekRBO0FEbU1SO0FFdElJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCREdJO0VDRkosNkJERUk7QURzSVY7QUV0SU07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlEekVBO0FEaU5SO0FFcElJO0VBQ0UseUdBQUE7QUZzSU47QUVwSU07RUFDRSxxQkRwRUk7QUQwTVo7QUVqSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUVBLHVCRDNGSTtFQzRGSixzQkR4Qk07RUN5Qk4sZUFBQTtBRmtJSjtBRWhJSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtBRmlJTjtBRS9ITTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEM0dHO0FEeU9YO0FFNUhRO0VBQ0UsV0FBQTtBRjhIVjtBRTNIUTtFQUNFLFlEN0hGO0FEMFBSO0FFekhNO0VBQ0UsYUFBQTtBRjJIUjtBRXpIUTtFQUNFLGNEeEhFO0FEbVBaO0FFdEhJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSx1Q0FBQTtBRnVITjtBRXJITTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRHJKRDtBRDRRUDtBRXBITTtFQUNFLGNEN0lHO0VDOElILG9CQUFBO0FGc0hSO0FFakhNO0VBQ0UseUJEbEpJO0FEcVFaO0FFakhRO0VBQ0UsWURsS0Y7QURxUlI7QUVoSFE7RUFDRSxZRHRLRjtBRHdSUjtBRTVHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0FGNkdKO0FFM0dJO0VBQ0UsZ0JBQUE7QUY2R047QUUxR0k7RUFDRSxhQUFBO0FGNEdOO0FFMUdNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FGNEdSO0FFMUdRO0VBQ0UsZ0JBQUE7QUY0R1Y7QUV6R1E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBRUEseUJEMUxFO0VDMkxGLHNCRDVJQTtBRHFQVjtBRXZHVTtFQUNFLGNEdE1BO0FEK1NaO0FFckdRO0VBQ0UsWUFBQTtFQUNBLGNEM05GO0FEa1VSO0FFcEdROzs7RUFHRSxlRHhLSztBRDhRZjtBRW5HUTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUZxR1Y7QUVsR1E7RUFDRSxjQUFBO0FGb0dWO0FFL0ZJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBRmdHTjtBRTlGTTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7QUZnR1I7QUU3Rk07RUFDRSxnQ0FBQTtBRitGUjtBRTFGRTtFQUNFLDhDQUFBO0FGNEZKO0FFMUZJO0VBQ0Usb0JBQUE7QUY0Rk47QUUxRk07RUFDRSxxQkFBQTtBRjRGUjtBRXhGSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUYwRk47QUV4Rk07RUFDRSx1QkFBQTtFQUNBLGlEQUFBO0FGMEZSO0FFdkZNO0VBQ0Usa0JBQUE7QUZ5RlI7QUV0Rk07O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUZ3RlI7QUV0RlE7O0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FGeUZWO0FFdkZVOztFQUNFLGVEeFBLO0FEa1ZqQjtBRXBGUTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUZzRlY7QUVwRlU7RUFDRSxjRDlSRDtBRG9YWDtBRWxGUTtFQUNFLGNEblNDO0FEdVhYO0FFOUVVO0VBQ0UseUJEN1NBO0FENlhaO0FFekVVO0VBQ0UseUJEclRBO0FEZ1laO0FFcEVVO0VBQ0UseUJEL1VFO0FEcVpkO0FFakVNOztFQUVFLHlCQUFBO0FGbUVSO0FFaEVNOztFQUVFLGVEeFNPO0FEMFdmO0FFL0RNO0VBQ0UsZUQzU087QUQ0V2Y7O0FHdGFBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxzQkZpRVE7RUVoRVIsZUZrRGE7RUVqRGIsZ0JBQUE7RUFDQSx5QkZlVTtBRHlaWjtBR3RhRTs7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlRjRDVztBRDZYZjtBR3RhRTs7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUh5YUo7QUd0YUU7Ozs7OztFQUtFLGNGSkc7RUVLSCx5QkFBQTtBSHlhSjtBR3RhRTs7O0VBRUUsY0FBQTtFQUNBLHlCQUFBO0FIeWFKO0FHdGFFOzs7RUFFRSxjQUFBO0VBQ0EseUJBQUE7QUh5YUo7QUd0YUU7O0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FIeWFKO0FHdGFFOzs7RUFFRSxjRnJDUTtFRXNDUix5QkFBQTtBSHlhSjs7QUF0ZEE7RUFDSSxlQUFBO0FBeWRKOztBQXJkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBd2RKOztBQXJkQTtFQUVJLHVCQUFBO0VBQ0Esa0JBQUE7QUF1ZEo7O0FBcGRBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBdWRKIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgJi53aXRoLWFic3RyYWN0IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC9wYWdlLWhlYWRlci10b3AtYWJzdHJhY3Quc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlciB7XG5cbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCxcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJsdWVncmF5O1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAgIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuICAgICAgJjpub3QoOmhvdmVyKSB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jcml0ZXJpYS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmNyaXRlcmlhIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNXJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIC41cmVtKTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkYmx1ZWdyYXksIC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMTZweCByZ2JhKCRibGFjaywgLjA1KTtcblxuICAgICAgICA+LnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tY2hlY2sge1xuICAgICAgICAgICYrLmZvcm0tY2hlY2sge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM5MzkzOTM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYWdlLXRpdGxlIHtcblxuICAmKy50ZXh0LFxuICAmKy5vcmRlci1saXN0LFxuICAmKy5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cblxuICAmKy50ZXh0IHtcbiAgICBjb2xvcjogJGRhcmtncmF5O1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAudGl0bGUtYm90dG9tLWxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0wLjVyZW07XG4gICAgICBpbnNldC1pbmxpbmU6IDA7XG5cbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1pZDtcbiAgICB9XG4gIH1cbn1cblxuLnBhZ2Utc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmJyZWFkY3J1bWIge1xuICAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgICAmKy5icmVhZGNydW1iLWl0ZW0ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IC41cmVtO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogLjVyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKCRibGFjaywgLjQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5hY3RpdmUpIHtcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRibGFjaywgLjQpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICRkYXJrO1xuICAgIH1cbiAgfVxufVxuXG51bC5vcmRlci1saXN0IHtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICYrbGkge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gIH1cblxuICAub3JkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNXJlbTtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICB9XG59IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvcGFnZVwiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L2NhcmRzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvc3RhdHVzXCI7XG5cblxubGFiZWx7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbi5pbWFnZSB7XG4gICAgd2lkdGggOiA4cmVtIDtcbiAgICBoZWlnaHQgOiA2cmVtIDtcbiAgIFxufVxuaW1ne1xuXG4gICAgYm9yZGVyOiA2cHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4uYm9sZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi5jYXJkIHtcbiAgLS1icy1jYXJkLXRpdGxlLXNwYWNlci15OiAwO1xuICAtLWJzLWNhcmQtY2FwLWJnOiAkY2FyZC1iZztcblxuICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IC41cmVtO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmljb24ge1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIH1cblxuICAgICY6bm90KC5uby1zZXBhcmV0b3IpIHtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQtaW5saW5lOiB2YXIoLS1icy1jYXJkLWNhcC1wYWRkaW5nLXgpO1xuICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGVyZ3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnF1YWxpaWNhdGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9ucy9jb250ZW50L3F1YWxpZmljYXRpb24vY2FyZC1iZy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgLjE1cztcblxuICAgIC5pY29uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW07XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcblxuICAgICAgYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIC4zKTtcblxuICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMS41cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gICAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmctaG92ZXIucG5nJyk7XG5cbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1tYWluO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYubGljZW5zZS1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNEVDRUM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1pZDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgICA+KjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibGFjaywgLjA4KTtcblxuICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLmFycm93IHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1taWQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuXG4gICAgICAgIC5jYXJkLXRleHQge1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXJyb3cge1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJyaWVmLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMik7XG4gICAgYm9yZGVyLXRvcDogMC41cmVtIHNvbGlkICR0aGVtZS1tYWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDE4MSwgMTgzLCAxODUsIDAuMjYpO1xuXG4gICAgJisuYnJpZWYtY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmKy5pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG5cbiAgICAgICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRhIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWxhYmVsLFxuICAgICAgICAua2V5LFxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5rZXkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICBjb2xvcjogI0EyQjJCMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IC41cmVtO1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxcmVtO1xuICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIC0tYnMtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcbiAgICAgICAgLS1icy1idG4tcGFkZGluZy15OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAucC1idXR0b24ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHRoZW1lLW1haW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5waGFzZXMtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoJGJsYWNrLCAwLjA4KTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG5cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5waGFzZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHJvdy1nYXA6IC41cmVtO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkYmx1ZWdyYXksIC40KTtcbiAgICAgIH1cblxuICAgICAgJisucGhhc2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5waGFzZS1oZWFkZXIsXG4gICAgICAucGhhc2UtZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkYm9keS1mb250LXNpemU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZG9uZSB7XG4gICAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5jdXJyZW50IHtcbiAgICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLm5leHQge1xuICAgICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5waGFzZS1zdGF0dXMsXG4gICAgICAucGhhc2UtZGF0ZSB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgfVxuXG4gICAgICAudmFsdWUge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gJi5xdWFsaWljYXRpb24tcmVxZXN0LWNhcmQge1xuICAvLyAgIC5jYXJkLXRpdGxlIHtcblxuICAvLyAgICAgLnRpdGxlLFxuICAvLyAgICAgLmRhdGUsXG4gIC8vICAgICAuYWN0aW9ucyB7XG4gIC8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC50aXRsZSB7XG4gIC8vICAgICAgIGNvbG9yOiAkZGFyaztcbiAgLy8gICAgIH1cblxuICAvLyAgICAgLmRhdGUge1xuICAvLyAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAvLyAgICAgICAua2V5IHtcbiAgLy8gICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC52YWx1ZSB7XG4gIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICAgIGNvbHVtbi1nYXA6IC4yNXJlbTtcblxuICAvLyAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgLy8gICAgICAgICBjb2xvcjogJGRhcms7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cblxuICAvLyAgICAgLmFjdGlvbnMge1xuICAvLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgLy8gICAgICAgY29sdW1uLWdhcDogLjVyZW07XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgLmFwcGxpY2FudCB7XG4gIC8vICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAvLyAgICAgLmtleSB7XG4gIC8vICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgLy8gICAgICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgLnZhbHVlIHtcbiAgLy8gICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgICAgLmltYWdlIHtcbiAgLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLy8gICAgICAgICB3aWR0aDogMnJlbTtcbiAgLy8gICAgICAgICBoZWlnaHQ6IDJyZW07XG5cbiAgLy8gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFya2dyZWVuO1xuICAvLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLy8gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoJGJsYWNrLCAwLjEpO1xuXG4gIC8vICAgICAgICAgLmF2YXRhciB7XG4gIC8vICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLm5hbWUge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgLy8gICAgICAgICBjb2xvcjogJGRhcms7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cblxuICAvLyAgICAgLmRldGFpbHMge1xuICAvLyAgICAgICBsYWJlbCB7XG4gIC8vICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAvLyAgICAgICAgIGNvbG9yOiByZ2JhKCRkYXJrZ3JheSwgLjUpO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgc3BhbiB7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxufSIsIi5zdGF0dXMtZG90LFxuLnN0YXR1cy1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmc7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgfVxuXG4gICYuRHJhZnQge1xuICAgIGNvbG9yOiAjOEE5MzkzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkE7XG4gIH1cblxuICAmLlJlcXVlc3RBY2NlcHRlZCxcbiAgJi5SZXF1ZXN0VmVyaWZpZWRBc3NpZ25lZFRvQWRtaW4sXG4gICYuUmVxdWVzdElzQmVpbmdQcm9jZXNzZWQsXG4gICYuUmVxdWVzdEhhc0JlZW5TZW50Rm9yUmV2aWV3LFxuICAmLlJlcUlzQmVpbmdSZXZpZXdlZCB7XG4gICAgY29sb3I6ICRpbmZvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZCRkQ7XG4gIH1cblxuICAmLk5vbmUsXG4gICYuUmVxdWVzdFByb2Nlc3NlZEFuZEZlZWRiYWNrU2VudCB7XG4gICAgY29sb3I6ICMxRUMzOUE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkFGOTtcbiAgfVxuXG4gICYuRmVlZGJhY2tQcm9jZXNzZWRBbmRSZXF1ZXN0U2VudCxcbiAgJi5SZXFJc0JlaW5nU3R1ZGllZCB7XG4gICAgY29sb3I6ICNGMUJENTY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjZFRDtcbiAgfVxuXG4gICYuUmVxdWVzdFJlamVjdGVkIHtcbiAgICBjb2xvcjogI0ZGN0E2OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkY1O1xuICB9XG5cbiAgJi5SZXF1VGhlUmVxdWVzdEhhc0JlZW5BcHByb3ZlZCxcbiAgJi5RdWFsaWZpY2F0aW9uQ2VydGlmaWNhdGVJc3N1ZWQge1xuICAgIGNvbG9yOiAkbWludGdyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZBRjk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 13530:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/real-estate-contribution-user-management-routing.module.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateContributionUserManagementRoutingModule": () => (/* binding */ RealEstateContributionUserManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ 14822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);





const routes = [{
  path: '',
  redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionUserManagement.userProfile,
  pathMatch: 'full'
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionUserManagement.userProfile,
  component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent,
  data: {
    breadcrumb: 'إدارة المنشأة '
  }
}];
class RealEstateContributionUserManagementRoutingModule {}
RealEstateContributionUserManagementRoutingModule.ɵfac = function RealEstateContributionUserManagementRoutingModule_Factory(t) {
  return new (t || RealEstateContributionUserManagementRoutingModule)();
};
RealEstateContributionUserManagementRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RealEstateContributionUserManagementRoutingModule
});
RealEstateContributionUserManagementRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RealEstateContributionUserManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 39529:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/real-estate-contribution-user-management.module.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateContributionUserManagementModule": () => (/* binding */ RealEstateContributionUserManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _real_estate_contribution_user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./real-estate-contribution-user-management-routing.module */ 13530);
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ 14822);
/* harmony import */ var _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/usermanagment-facilities/usermanagment-facilities.component */ 86445);
/* harmony import */ var _component_projects_manegers_projects_manegers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/projects-manegers/projects-manegers.component */ 29109);
/* harmony import */ var _component_delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/delegator-actions/delegator-actions.component */ 40515);
/* harmony import */ var _component_delegators_delegators_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/delegators/delegators.component */ 20463);
/* harmony import */ var _component_registration_request_registration_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/registration-request/registration-request.component */ 25469);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/registration-request/registration-request.service */ 8675);
/* harmony import */ var _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/user-management-delegators/user-management-delegators.component */ 88664);
/* harmony import */ var _services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user-management-delegators.service */ 25564);
/* harmony import */ var _component_related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/related-customers/related-customers.component */ 80688);
/* harmony import */ var _component_add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/add-facility/add-facility.component */ 35791);
/* harmony import */ var _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/customer-facilities.service */ 13604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86793);

















class RealEstateContributionUserManagementModule {}
RealEstateContributionUserManagementModule.ɵfac = function RealEstateContributionUserManagementModule_Factory(t) {
  return new (t || RealEstateContributionUserManagementModule)();
};
RealEstateContributionUserManagementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: RealEstateContributionUserManagementModule
});
RealEstateContributionUserManagementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  providers: [_services_registration_request_registration_request_service__WEBPACK_IMPORTED_MODULE_8__.RegistrationRequestService, _services_user_management_delegators_service__WEBPACK_IMPORTED_MODULE_10__.UserManagementDelegatorsService, _services_customer_facilities_service__WEBPACK_IMPORTED_MODULE_13__.CustomerFacilitiesService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _real_estate_contribution_user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealEstateContributionUserManagementRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](RealEstateContributionUserManagementModule, {
    declarations: [_pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent, _component_usermanagment_facilities_usermanagment_facilities_component__WEBPACK_IMPORTED_MODULE_2__.UsermanagmentFacilitiesComponent, _component_projects_manegers_projects_manegers_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsManegersComponent, _component_delegator_actions_delegator_actions_component__WEBPACK_IMPORTED_MODULE_4__.delegatoractionsComponent, _component_delegators_delegators_component__WEBPACK_IMPORTED_MODULE_5__.delegatorsComponent, _component_registration_request_registration_request_component__WEBPACK_IMPORTED_MODULE_6__.RegistrationRequestComponent, _component_user_management_delegators_user_management_delegators_component__WEBPACK_IMPORTED_MODULE_9__.UserManagementDelegatorsComponent, _component_related_customers_related_customers_component__WEBPACK_IMPORTED_MODULE_11__.RelatedCustomersComponent, _component_add_facility_add_facility_component__WEBPACK_IMPORTED_MODULE_12__.AddFacilityComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _real_estate_contribution_user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealEstateContributionUserManagementRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 13604:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/services/customer-facilities.service.ts ***!
  \*******************************************************************************************************************/
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
  GetRelatedCustomerListByFacilityId(facilityId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.RelatedCustomer.GetRelatedCustomerListByFacilityId}/${facilityId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res.data && res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
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

/***/ 8675:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/services/registration-request/registration-request.service.ts ***!
  \*****************************************************************************************************************************************/
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

/***/ 25564:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/features/real-estate-contribution-user-management/services/user-management-delegators.service.ts ***!
  \**************************************************************************************************************************/
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_features_real-estate-contribution-user-management_real-estate-contribution-us-d9d447.js.map