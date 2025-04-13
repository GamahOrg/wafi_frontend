"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_features_complaints-and-reports_complaints-and-reports_module_ts"],{

/***/ 71867:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/features/complaints-and-reports/complaints-and-reports-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsAndReportsRoutingModule": () => (/* binding */ ComplaintsAndReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _components_complaints_reports_complaints_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/complaints-reports/complaints-reports.component */ 94344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);





const routes = [{
  path: '',
  redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.complaintsAndReport.complaintsReports,
  pathMatch: 'full'
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.complaintsAndReport.complaintsReports,
  component: _components_complaints_reports_complaints_reports_component__WEBPACK_IMPORTED_MODULE_1__.ComplaintsReportsComponent,
  data: {
    breadcrumb: 'تقديم بلاغ او شكوى'
  }
}];
class ComplaintsAndReportsRoutingModule {}
ComplaintsAndReportsRoutingModule.ɵfac = function ComplaintsAndReportsRoutingModule_Factory(t) {
  return new (t || ComplaintsAndReportsRoutingModule)();
};
ComplaintsAndReportsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ComplaintsAndReportsRoutingModule
});
ComplaintsAndReportsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComplaintsAndReportsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 78660:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/features/complaints-and-reports/complaints-and-reports.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsAndReportsModule": () => (/* binding */ ComplaintsAndReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _complaints_and_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaints-and-reports-routing.module */ 71867);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _components_complaints_reports_complaints_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/complaints-reports/complaints-reports.component */ 94344);
/* harmony import */ var _services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/complaints-reports.service */ 86260);
/* harmony import */ var _components_add_complaints_reports_add_complaints_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-complaints-reports/add-complaints-reports.component */ 43490);
/* harmony import */ var _components_show_complaints_reports_show_complaints_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/show-complaints-reports/show-complaints-reports.component */ 46607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);









class ComplaintsAndReportsModule {}
ComplaintsAndReportsModule.ɵfac = function ComplaintsAndReportsModule_Factory(t) {
  return new (t || ComplaintsAndReportsModule)();
};
ComplaintsAndReportsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ComplaintsAndReportsModule
});
ComplaintsAndReportsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_3__.ComplaintsReportsService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _complaints_and_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComplaintsAndReportsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComplaintsAndReportsModule, {
    declarations: [_components_complaints_reports_complaints_reports_component__WEBPACK_IMPORTED_MODULE_2__.ComplaintsReportsComponent, _components_add_complaints_reports_add_complaints_reports_component__WEBPACK_IMPORTED_MODULE_4__.AddComplaintsReportsComponent, _components_show_complaints_reports_show_complaints_reports_component__WEBPACK_IMPORTED_MODULE_5__.ShowComplaintsReportsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _complaints_and_reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComplaintsAndReportsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 43490:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/features/complaints-and-reports/components/add-complaints-reports/add-complaints-reports.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComplaintsReportsComponent": () => (/* binding */ AddComplaintsReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/complaints-reports.service */ 86260);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/file-uploader/file-uploader.component */ 37985);










function AddComplaintsReportsComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const complaintRequestType_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", complaintRequestType_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](complaintRequestType_r10.name);
  }
}
function AddComplaintsReportsComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_10_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.controls.complaintRequestTypeId.errors == null ? null : ctx_r1.controls.complaintRequestTypeId.errors["required"]);
  }
}
function AddComplaintsReportsComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_16_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.controls.customerName.errors == null ? null : ctx_r2.controls.customerName.errors["required"]);
  }
}
function AddComplaintsReportsComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_22_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.controls.nidNumber.errors == null ? null : ctx_r3.controls.nidNumber.errors["required"]);
  }
}
function AddComplaintsReportsComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_28_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.controls.facilityName.errors == null ? null : ctx_r4.controls.facilityName.errors["required"]);
  }
}
function AddComplaintsReportsComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_34_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.controls.commercialRegisterNumber.errors == null ? null : ctx_r5.controls.commercialRegisterNumber.errors["required"]);
  }
}
function AddComplaintsReportsComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u062F\u062E\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_40_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddComplaintsReportsComponent_div_40_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.controls.email.errors == null ? null : ctx_r6.controls.email.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.controls.email.errors == null ? null : ctx_r6.controls.email.errors["pattern"]);
  }
}
function AddComplaintsReportsComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_46_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u062F\u062E\u0644 \u0631\u0642\u0645 \u062C\u0648\u0627\u0644 \u0635\u062D\u064A\u062D");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_46_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0637\u0648\u0644 \u0627\u0644\u0631\u0642\u0645 \u064A\u062C\u0628 \u0627\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 10 \u0627\u0631\u0642\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_46_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddComplaintsReportsComponent_div_46_div_2_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddComplaintsReportsComponent_div_46_div_3_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["maxlength"]) || (ctx_r7.controls.phone.errors == null ? null : ctx_r7.controls.phone.errors["minlength"]));
  }
}
function AddComplaintsReportsComponent_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddComplaintsReportsComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddComplaintsReportsComponent_div_52_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.controls.description.errors == null ? null : ctx_r8.controls.description.errors["required"]);
  }
}
function AddComplaintsReportsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class AddComplaintsReportsComponent {
  constructor(_complaintsReportsService, _formBuilder, _userDataService, _popupService, _toastrNotificationService) {
    this._complaintsReportsService = _complaintsReportsService;
    this._formBuilder = _formBuilder;
    this._userDataService = _userDataService;
    this._popupService = _popupService;
    this._toastrNotificationService = _toastrNotificationService;
    this.subscriptions = [];
    this.complaintRequestTypes = [];
    this.showValidation = false;
    this.complaintRequestFileList = [];
    this.userData = null;
    this.multiFilesUploaderData = {
      multiple: true
    };
    this.complaintRequestForm = this._formBuilder.group({
      customerId: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      customerName: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      nidNumber: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      facilityName: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      commercialRegisterNumber: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      email: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]),
      phone: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.PhoneNumber), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.validators.numberOnly)]),
      description: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      complaintRequestTypeId: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
    });
  }
  get controls() {
    return this.complaintRequestForm.controls;
  }
  ngOnInit() {
    this.obseveCustomerData();
    this.getComplaintRequestTypes();
    this.observePopupEvents();
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      if (this.userData) {
        this.complaintRequestForm.controls.customerId.setValue(this.userData.id);
        this.complaintRequestForm.controls.customerName.setValue(this.userData.fullName);
        this.complaintRequestForm.controls.nidNumber.setValue(this.userData.nidnumber);
        this.complaintRequestForm.controls.facilityName.setValue(this.userData.facilities[0].facilityName);
        this.complaintRequestForm.controls.commercialRegisterNumber.setValue(this.userData.facilities[0].commercialRegisterNumber);
        this.complaintRequestForm.controls.email.setValue(this.userData.email);
        this.complaintRequestForm.controls.phone.setValue(this.userData.mobile1);
      }
    }));
  }
  getComplaintRequestTypes() {
    this.subscriptions.push(this._complaintsReportsService.GetComplaintRequestTypes().subscribe(res => {
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
    this.SaveComplaintRequest();
  }
  SaveComplaintRequest() {
    this.subscriptions.push(this._complaintsReportsService.SaveComplaintRequest(this.complaintRequest).subscribe(res => {
      if (res && res.isDone) {
        this._toastrNotificationService.showSuccess("تم تقديم الشكوى او البلاغ");
        this._complaintsReportsService.submitSuccessfullyEventEmitter.emit();
        this.closeDialog();
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
  // popup
  observePopupEvents() {
    this.observeconfirmAction();
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      this.save();
    }));
  }
  closeDialog() {
    this._popupService.dismissDialog();
  }
}
AddComplaintsReportsComponent.ɵfac = function AddComplaintsReportsComponent_Factory(t) {
  return new (t || AddComplaintsReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_1__.ComplaintsReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_3__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_4__.ToastrNotificatioService));
};
AddComplaintsReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddComplaintsReportsComponent,
  selectors: [["app-add-complaints-reports"]],
  decls: 59,
  vars: 36,
  consts: [["id", "form-complaintRequestForm", 1, "complaintRequestForm"], ["id", "form-complaintRequestForm", 3, "formGroup"], [1, "row", "mb-3"], [1, "col-12", "col-lg-6"], [1, "form-group", "mb-4"], ["for", "complaintRequestTypeId", 1, "form-label"], ["formControlName", "complaintRequestTypeId", 1, "form-select", 3, "ngClass"], ["label", "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "customerName", 1, "form-label"], ["type", "text", "id", "control-customerName", "formControlName", "customerName", "readonly", "true", "placeholder", "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A", 1, "form-control", 3, "ngClass"], ["for", "firstName", 1, "form-label"], ["type", "text", "formControlName", "nidNumber", "id", "control-nidNumber", "readonly", "true", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629", 1, "form-control", 3, "ngClass"], ["for", "facilityName", 1, "form-label"], ["type", "text", "id", "control-facilityName", "formControlName", "facilityName", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629", "readonly", "true", 1, "form-control", 3, "ngClass"], ["for", "commercialRegisterNumber", 1, "form-label"], ["type", "text", "id", "control-commercialRegisterNumber", "formControlName", "commercialRegisterNumber", "placeholder", "\u0631\u0642\u0645 \u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A", "readonly", "true", 1, "form-control", 3, "ngClass"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "control-email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "readonly", "true", 1, "form-control", 3, "ngClass"], ["for", "Mobile", 1, "form-label"], ["type", "text", "formControlName", "phone", "id", "control-phone", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644", "readonly", "true", 1, "form-control", 3, "ngClass"], ["for", "description", 1, "form-label"], ["type", "text", "formControlName", "description", "id", "control-description", 1, "form-control", 3, "ngClass"], [1, "key"], [3, "data", "fileUploaded"], ["class", "invalid-feedback d-block", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "d-block"]],
  template: function AddComplaintsReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AddComplaintsReportsComponent_option_9_Template, 2, 2, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AddComplaintsReportsComponent_div_10_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AddComplaintsReportsComponent_div_16_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 3)(18, "div", 4)(19, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AddComplaintsReportsComponent_div_22_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 3)(24, "div", 4)(25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddComplaintsReportsComponent_div_28_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 3)(30, "div", 4)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\u0631\u0642\u0645 \u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AddComplaintsReportsComponent_div_34_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 3)(36, "div", 4)(37, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, AddComplaintsReportsComponent_div_40_Template, 3, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, AddComplaintsReportsComponent_div_46_Template, 4, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 3)(48, "div", 4)(49, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\u0648\u0635\u0641 \u0627\u0644\u0628\u0644\u0627\u063A \u0627\u0648 \u0627\u0644\u0634\u0643\u0648\u0649");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "textarea", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, AddComplaintsReportsComponent_div_52_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 3)(54, "div", 4)(55, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "app-file-uploader", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("fileUploaded", function AddComplaintsReportsComponent_Template_app_file_uploader_fileUploaded_57_listener($event) {
        return ctx.onExistComplaintFilesUploaded($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AddComplaintsReportsComponent_div_58_Template, 2, 0, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.complaintRequestForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c0, ctx.showValidation && ctx.controls.complaintRequestTypeId.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.complaintRequestTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.complaintRequestTypeId.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c0, ctx.showValidation && ctx.controls.customerName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.customerName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](24, _c0, ctx.showValidation && ctx.controls.nidNumber.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.nidNumber.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c0, ctx.showValidation && ctx.controls.facilityName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.facilityName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](28, _c0, ctx.showValidation && ctx.controls.commercialRegisterNumber.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.commercialRegisterNumber.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](30, _c0, ctx.showValidation && ctx.controls.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](32, _c0, ctx.showValidation && ctx.controls.phone.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.phone.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](34, _c0, ctx.showValidation && ctx.controls.description.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.controls.description.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.multiFilesUploaderData);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (!ctx.complaintRequestFileList || ctx.complaintRequestFileList.length == 0) && ctx.showValidation);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__.FileUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvY29tcGxhaW50cy1hbmQtcmVwb3J0cy9jb21wb25lbnRzL2FkZC1jb21wbGFpbnRzLXJlcG9ydHMvYWRkLWNvbXBsYWludHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19mb3JtLWNvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkVNUTtBRFJaO0FESUk7RUFDRSxjRU1LO0FEUlg7QURNRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0pKO0FET0U7RUFDRSxnQkFBQTtBQ0xKOztBRFVFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQ1BKO0FEVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBQ1RKO0FEV0k7RUFDRSxnQkFBQTtBQ1ROO0FEYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUVEVztBRFhmO0FEZUU7RUFDRSxlRUxXO0VGTVgsY0V2RE87QUQwQ1g7QURnQkU7RUFDRSxlRVRXO0VGVVgsZ0JBQUE7RUFDQSxjRTlEUTtBRGdEWjtBRGdCSTtFQUNFLGtCQUFBO0FDZE47QURrQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUV4Qlc7RUZ5QlgsZ0JBQUE7RUFDQSxjRWxGSTtBRGlFUjtBRG1CSTtFQUNFLGtCQUFBO0FDakJOO0FEb0JJO0VBQ0UsY0VuRk07QURpRVo7QURxQkk7RUFDRSxlQUFBO0FDbkJOO0FEcUJNO0VBQ0UsZUV4Q087QURxQmY7O0FFOUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLGNEb0JTO0FEMkRYO0FFN0VFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FGNkVKO0FFM0VJO0VBQ0UsZ0JBQUE7RUFFQSxjREdLO0FEeUVYO0FFeEVFO0VBQ0UsY0Q1Qkk7QURzR1I7QUV2RUU7RUFDRSxpQkFBQTtBRnlFSjs7QUVyRUE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0FGd0VGOztBRXJFQTtFQUNFLGFBQUE7RUFDQSxxQkQ0QlE7RUMzQlIsMENBQUE7QUZ3RUY7QUV0RUU7RUFMRjtJQU1JLGFBQUE7RUZ5RUY7QUFDRjtBRXZFRTtFQUNFLG1CQUFBO0VBQ0EsZURJVztFQ0hYLGlCQUFBO0FGeUVKOztBRXJFQTtFQUNFLGVERmE7RUNHYixpQkFBQTtFQUNBLGVBQUE7QUZ3RUY7O0FFckVBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGd0VGO0FFdEVFOzs7O0VBRUUsZURiWTtBRHVGaEI7QUV2RUU7O0VBRUUsY0RsRE87QUQySFg7O0FFcEVFO0VBRUUsY0R6RE87QUQrSFg7O0FFbEVBO0VBQ0UsZUQ5QmM7QURtR2hCO0FFbkVFO0VBQ0UsY0FBQTtBRnFFSjs7QUVqRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkRoQ1E7RUNpQ1IsMkNBQUE7QUZtRUY7QUVqRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUZtRUo7O0FFL0RBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFFQSw2QkFBQTtFQUNBLHVCRDVITTtBRDJMUjtBRTVESTtFQURGO0lBRUksVUFBQTtFRitESjtBQUNGOztBRTNEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUY4REY7O0FBck1BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUF3TUoiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcblxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIC5lZGl0LWljb24ge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gIH1cblxuICAmfi50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG59XG5cbi50YWItZGF0YS1zZWN0aW9uIHtcbiAgJisudGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcbiAgfVxuXG4gIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBjb2xvcjogJGRhcmtncmF5O1xuICB9XG5cbiAgLmtleSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRsaWdodGdyYXk7XG5cbiAgICAmKy52YWx1ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAudmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC4yNXJlbTtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgICAmKy52YWx1ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAuZGVsZXRlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L3RhYi1jb250ZW50XCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvZm9ybS1jb25lbnRcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi5mb3JtLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICBzbWFsbCB7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiAgfVxuXG4gICZ+LmZvcm0tc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICB9XG59XG5cbi5mb3JtLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHJnYmEoJGRhcmssIC41KTtcbn1cblxuLmZvcm0tYmxvY2sge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlZ3JheSwgLjIpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5hZGQtYXJyYXkge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW5vdGUsXG4uZm9ybS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLnRleHQsXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcbiAgfVxuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICB9XG59XG5cbi5mb3JtLXRleHQge1xuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgfVxufVxuXG4uZm9ybS1ub3RlIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi5mb3JtLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBib3JkZXI6IDEuMnB4IGRhc2hlZCAkZGFya2dyYXk7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlZ3JheSwgLjE5KTtcblxuICAudGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogLTFyZW07XG4gIHotaW5kZXg6IDE7XG5cbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREFFNUUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgLmJ0biB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXNlcGFyYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3RjU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 94344:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/features/complaints-and-reports/components/complaints-reports/complaints-reports.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsReportsComponent": () => (/* binding */ ComplaintsReportsComponent)
/* harmony export */ });
/* harmony import */ var _add_complaints_reports_add_complaints_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-complaints-reports/add-complaints-reports.component */ 43490);
/* harmony import */ var _show_complaints_reports_show_complaints_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-complaints-reports/show-complaints-reports.component */ 46607);
/* harmony import */ var src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/enums/button-type.model */ 63650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/complaints-reports.service */ 86260);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 96810);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);












function ComplaintsReportsComponent_tbody_23_tr_1_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", request_r2.complaintRequestType.name, " ");
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ComplaintsReportsComponent_tbody_23_tr_1_td_1_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.complaintRequestType.name);
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", request_r2.complaintRequestStatus.name, " ");
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ComplaintsReportsComponent_tbody_23_tr_1_td_2_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.complaintRequestStatus.name);
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td")(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", request_r2.customerName, " ");
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td")(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", request_r2.nidNumber, " ");
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td")(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", request_r2.facilityName, " ");
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td")(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", request_r2.commercialRegisterNumber, " ");
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ComplaintsReportsComponent_tbody_23_tr_1_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.delete(request_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u062D\u0630\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ComplaintsReportsComponent_tbody_23_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ComplaintsReportsComponent_tbody_23_tr_1_td_1_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ComplaintsReportsComponent_tbody_23_tr_1_td_2_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ComplaintsReportsComponent_tbody_23_tr_1_td_3_Template, 3, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ComplaintsReportsComponent_tbody_23_tr_1_td_4_Template, 3, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ComplaintsReportsComponent_tbody_23_tr_1_td_5_Template, 3, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ComplaintsReportsComponent_tbody_23_tr_1_td_6_Template, 3, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td")(8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ComplaintsReportsComponent_tbody_23_tr_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.openShowDialog(request_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " \u0639\u0631\u0636 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ComplaintsReportsComponent_tbody_23_tr_1_button_12_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.complaintRequestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.complaintRequestStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.nidNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.facilityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.commercialRegisterNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2.complaintRequestStatus.id === 1);
  }
}
function ComplaintsReportsComponent_tbody_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ComplaintsReportsComponent_tbody_23_tr_1_Template, 13, 7, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", request_r2);
  }
}
function ComplaintsReportsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-no-data", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showCompleteBtn", false);
  }
}
class ComplaintsReportsComponent {
  constructor(_complaintsReportsService, _paginationService, _popupService, _toastrNotificationService) {
    this._complaintsReportsService = _complaintsReportsService;
    this._paginationService = _paginationService;
    this._popupService = _popupService;
    this._toastrNotificationService = _toastrNotificationService;
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
    this.getComplaintRequestCustomerPagingList();
    this.watchPaginationActions();
    this.obseveSubmitSuccessfullyEventEmitter();
  }
  getComplaintRequestCustomerPagingList() {
    this.subscriptions.push(this._complaintsReportsService.getComplaintRequestCustomerPagingList(this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res => {
      if (res) this.updateRequestList(res);
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
    this.getComplaintRequestCustomerPagingList();
  }
  obseveSubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(this._complaintsReportsService.submitSuccessfullyEventEmitter.subscribe(() => {
      this.getComplaintRequestCustomerPagingList();
    }));
  }
  openDialog() {
    let Data = {
      id: "",
      title: "اضافة شكوى او بلاغ",
      component: _add_complaints_reports_add_complaints_reports_component__WEBPACK_IMPORTED_MODULE_0__.AddComplaintsReportsComponent
    };
    this.updateAndOpenData(Data);
  }
  openShowDialog(request) {
    this._complaintsReportsService.setRequest(request);
    let Data = {
      id: "",
      title: "عرض شكوى او بلاغ",
      component: _show_complaints_reports_show_complaints_reports_component__WEBPACK_IMPORTED_MODULE_1__.ShowComplaintsReportsComponent,
      buttons: [{
        icon: "",
        title: "إلغاء",
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_2__.ButtonType.cancel,
        isVisable: true,
        isDisables: false
      }]
    };
    this.updateAndOpenData(Data);
  }
  updateAndOpenData(data) {
    this._popupService.updatePopupData(data);
  }
  delete(id) {
    this.subscriptions.push(this._complaintsReportsService.Delete(id).subscribe(res => {
      if (res.isDone) {
        this._toastrNotificationService.showSuccess(" تم حذف الشكوى او البلاغ");
        this.getComplaintRequestCustomerPagingList();
      } else this._toastrNotificationService.showError(" لم يتم حذف الشكوى او البلاغ");
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
ComplaintsReportsComponent.ɵfac = function ComplaintsReportsComponent_Factory(t) {
  return new (t || ComplaintsReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_3__.ComplaintsReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_5__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__.ToastrNotificatioService));
};
ComplaintsReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ComplaintsReportsComponent,
  selectors: [["app-complaints-reports"]],
  decls: 27,
  vars: 2,
  consts: [[1, "row", "row-gap-4"], [1, "col-3"], [1, "col-6", "justify-content-end", "align-items-center"], ["type", "button", "color", "primary", "mat-flat-button", "", 1, "addbtn", "btn", "btn-primary", "d-flex", "align-items-center", "column-gap-1", "float-left", 2, "float", "left", 3, "click"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "text-dark", 4, "ngIf"], [1, "text-dark"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function ComplaintsReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ComplaintsReportsComponent_Template_button_click_3_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " \u0625\u0636\u0627\u0641\u0629 \u0634\u0643\u0648\u0649 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "table", 5)(7, "thead")(8, "tr")(9, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u0627\u0644\u0646\u0648\u0639");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u0627\u0644\u062D\u0627\u0644\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ComplaintsReportsComponent_tbody_23_Template, 2, 1, "tbody", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ComplaintsReportsComponent_ng_container_26_Template, 3, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.reqList == null ? null : ctx.reqList.results);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.reqList == null ? null : ctx.reqList.totalCount) === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_7__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent],
  styles: [".btn[_ngcontent-%COMP%] {\n  --bs-btn-font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 0.25rem;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-active-border-color: #005257;\n  --bs-btn-active-bg: #005257;\n  --bs-btn-bg: #E7F2ED;\n  --bs-btn-hover-bg: #005257;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  --bs-btn-color: #737373;\n  --bs-btn-hover-color: white;\n  --bs-btn-active-color: white;\n  --bs-btn-disabled-color: white;\n  --bs-btn-border-color: transparent;\n  --bs-btn-bg: #E7F2ED;\n}\n\n.btn-dark[_ngcontent-%COMP%] {\n  --bs-btn-bg: #0D121C;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  --bs-btn-color: #005257;\n  --bs-btn-hover-color: #353B3B;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.addbtn[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--bs-btn-hover-border-color);\n  align-items: end;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%] {\n  border-color: lightgrey;\n  background-color: white;\n}\n\nbutton.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n  background-color: white;\n}\n\n.deletbtn[_ngcontent-%COMP%] {\n  color: #FC1D00;\n  border-color: #FC1D00;\n  background-color: white;\n}\n\n.stopbtn[_ngcontent-%COMP%] {\n  color: red;\n  border-color: #FF7A69;\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  color: #076F42;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9jb21wbGFpbnRzLWFuZC1yZXBvcnRzL2NvbXBvbmVudHMvY29tcGxhaW50cy1yZXBvcnRzL2NvbXBsYWludHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7QUNBSjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTs7RUFFRSx1QkFBQTtFQUNBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBRUEsb0JBQUE7RUFDQSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQ0FBQTtFQUNBLG9CQUFBO0FDSkY7O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QUF4Q0E7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQTJDSjs7QUF0Q0E7RUFDSSwyQkFBQTtBQXlDSjs7QUFwQ0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBdUNKOztBQXBDQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQXVDSjs7QUFuQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQXNDSjs7QUFqQ0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQW9DSjs7QUFoQ0E7RUFDSSwyQkFBQTtBQW1DSjs7QUEvQkE7RUFDRSxjQUFBO0FBa0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIC0tYnMtYnRuLWZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiAjeyR3aGl0ZX07XG59XG5cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICAtLWJzLWJ0bi1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4taG92ZXItY29sb3I6ICN7JHdoaXRlfTtcblxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICN7JHdoaXRlfTtcbiAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogI3skZGFya2dyZWVufTtcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAjeyRkYXJrZ3JlZW59O1xuXG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xuICAtLWJzLWJ0bi1ob3Zlci1iZzogI3skZGFya2dyZWVufTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgLS1icy1idG4tY29sb3I6ICM3MzczNzM7XG4gIC0tYnMtYnRuLWhvdmVyLWNvbG9yOiAjeyR3aGl0ZX07XG4gIC0tYnMtYnRuLWFjdGl2ZS1jb2xvcjogI3skd2hpdGV9O1xuICAtLWJzLWJ0bi1kaXNhYmxlZC1jb2xvcjogI3skd2hpdGV9O1xuXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYnMtYnRuLWJnOiAjRTdGMkVEO1xufVxuXG4uYnRuLWRhcmsge1xuICAtLWJzLWJ0bi1iZzogIzBEMTIxQztcbn1cblxuLmJ0bi1saW5rIHtcbiAgLS1icy1idG4tY29sb3I6ICN7JHRoZW1lLW1haW59O1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI3skZGFya307XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9ib290c3RyYXAtY3VzdG9tL2J1dHRvbnNcIjtcblxuXG5cbi5hZGRidG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBcbn1cblxuXG50YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cblxuXG5idXR0b24uYnRuLXNlY29uZGFyeXtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uLmJ0bi1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgY29sb3I6IzA3NkY0MiA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuLmRlbGV0YnRue1xuICAgIGNvbG9yOiAjRkMxRDAwO1xuICAgIGJvcmRlci1jb2xvcjogI0ZDMUQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5zdG9wYnRue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkY3QTY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4gIFxudGFibGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5cbi5lZGl0OmhvdmVye1xuICBjb2xvcjogIzA3NkY0MjtcbiAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 46607:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/features/complaints-and-reports/components/show-complaints-reports/show-complaints-reports.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowComplaintsReportsComponent": () => (/* binding */ ShowComplaintsReportsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/complaints-reports.service */ 86260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function ShowComplaintsReportsComponent_div_0_div_51_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r3.baseUrl + file_r2.complaintFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", file_r2.complaintFile.fileDescription, "");
  }
}
function ShowComplaintsReportsComponent_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ShowComplaintsReportsComponent_div_0_div_51_a_3_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r2 && file_r2.complaintFile);
  }
}
function ShowComplaintsReportsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3)(18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3)(23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3)(28, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 3)(33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0648\u0635\u0641 \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3)(38, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 3)(43, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3)(48, "div", 5)(49, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0634\u0643\u0648\u0649 \u0627\u0648 \u0627\u0644\u0628\u0644\u0627\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ShowComplaintsReportsComponent_div_0_div_51_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.nidNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.facilityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.commercialRegisterNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.complaintRequestType.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.complaintRequest.complaintRequestStatus.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.complaintRequest.complaintRequestFiles);
  }
}
class ShowComplaintsReportsComponent {
  constructor(_complaintsReportsService) {
    this._complaintsReportsService = _complaintsReportsService;
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.subscriptions = [];
  }
  ngOnInit() {
    this.getComplaintRequestData();
  }
  getComplaintRequestData() {
    this.subscriptions.push(this._complaintsReportsService.getRequest().subscribe(res => {
      this.complaintRequestCustomer = res;
      if (this.complaintRequestCustomer) this.GetByComplaintRequestId();
    }));
  }
  GetByComplaintRequestId() {
    this.subscriptions.push(this._complaintsReportsService.GetByComplaintRequestId(this.complaintRequestCustomer?.id).subscribe(res => {
      if (res) {
        this.complaintRequest = res;
      }
    }));
  }
}
ShowComplaintsReportsComponent.ɵfac = function ShowComplaintsReportsComponent_Factory(t) {
  return new (t || ShowComplaintsReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_complaints_reports_service__WEBPACK_IMPORTED_MODULE_1__.ComplaintsReportsService));
};
ShowComplaintsReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ShowComplaintsReportsComponent,
  selectors: [["app-show-complaints-reports"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "form-group", "mb-4"], ["class", "value", 4, "ngFor", "ngForOf"], [1, "value"], [1, "icon", "material-icons-outlined"], ["id", "link-complaintFile", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "link-complaintFile", "target", "_blank", 3, "href"]],
  template: function ShowComplaintsReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ShowComplaintsReportsComponent_div_0_Template, 52, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.complaintRequest);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".table[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-block: 0.75rem 1rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #E7EAEA;\n}\n.table-light[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #001F21;\n  background-color: #F4F6F6;\n}\n.table-light[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n  background-color: white;\n}\n.table-light[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX3RhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9jb21wbGFpbnRzLWFuZC1yZXBvcnRzL2NvbXBvbmVudHMvc2hvdy1jb21wbGFpbnRzLXJlcG9ydHMvc2hvdy1jb21wbGFpbnRzLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L190YWItY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fZm9ybS1jb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVDd0RhO0VEdkRiLGdCQUFBO0FFQ0Y7QUZDRTs7RUFFRSxzQkFBQTtBRUNKO0FGR0k7RUFDRSwyQkFBQTtFQUNBLGVDNkNTO0VENUNULGdCQUFBO0FFRE47QUZHTTtFQUNFLGtDQ3VERTtFRHRERixnQ0NzREU7QUN2RFY7QUZJTTtFQUNFLGdDQ2tERTtFRGpERiw4QkNpREU7QUNuRFY7QUZLTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFSFI7QUZLUTtFQUNFLGVBQUE7QUVIVjs7QUZVQTtFQUNFLHFCQ2pDWTtBQzBCZDtBRlVJO0VBQ0UsY0MxQ0U7RUQyQ0YseUJBQUE7QUVSTjtBRmFJO0VBQ0UsY0MzQ007RUQ0Q04sdUJDaERFO0FDcUNSO0FGZUU7RUFDRSxjQ3RERztBQ3lDUDs7QUMzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUQ2Q0Y7QUMzQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJGTVE7QUNxQ1o7QUN6Q0k7RUFDRSxjRk1LO0FDcUNYO0FDdkNFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEeUNKO0FDdENFO0VBQ0UsZ0JBQUE7QUR3Q0o7O0FDbkNFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBRHNDSjtBQ25DRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FEb0NKO0FDbENJO0VBQ0UsZ0JBQUE7QURvQ047QUNoQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUZEVztBQ2tDZjtBQzlCRTtFQUNFLGVGTFc7RUVNWCxjRnZETztBQ3VGWDtBQzdCRTtFQUNFLGVGVFc7RUVVWCxnQkFBQTtFQUNBLGNGOURRO0FDNkZaO0FDN0JJO0VBQ0Usa0JBQUE7QUQrQk47QUMzQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUZ4Qlc7RUV5QlgsZ0JBQUE7RUFDQSxjRmxGSTtBQzhHUjtBQzFCSTtFQUNFLGtCQUFBO0FENEJOO0FDekJJO0VBQ0UsY0ZuRk07QUM4R1o7QUN4Qkk7RUFDRSxlQUFBO0FEMEJOO0FDeEJNO0VBQ0UsZUZ4Q087QUNrRWY7O0FFM0hBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLGNIb0JTO0FDd0dYO0FFMUhFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0FGMEhKO0FFeEhJO0VBQ0UsZ0JBQUE7RUFFQSxjSEdLO0FDc0hYO0FFckhFO0VBQ0UsY0g1Qkk7QUNtSlI7QUVwSEU7RUFDRSxpQkFBQTtBRnNISjs7QUVsSEE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0FGcUhGOztBRWxIQTtFQUNFLGFBQUE7RUFDQSxxQkg0QlE7RUczQlIsMENBQUE7QUZxSEY7QUVuSEU7RUFMRjtJQU1JLGFBQUE7RUZzSEY7QUFDRjtBRXBIRTtFQUNFLG1CQUFBO0VBQ0EsZUhJVztFR0hYLGlCQUFBO0FGc0hKOztBRWxIQTtFQUNFLGVIRmE7RUdHYixpQkFBQTtFQUNBLGVBQUE7QUZxSEY7O0FFbEhBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGcUhGO0FFbkhFOzs7O0VBRUUsZUhiWTtBQ29JaEI7QUVwSEU7O0VBRUUsY0hsRE87QUN3S1g7O0FFakhFO0VBRUUsY0h6RE87QUM0S1g7O0FFL0dBO0VBQ0UsZUg5QmM7QUNnSmhCO0FFaEhFO0VBQ0UsY0FBQTtBRmtISjs7QUU5R0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkhoQ1E7RUdpQ1IsMkNBQUE7QUZnSEY7QUU5R0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUZnSEo7O0FFNUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFFQSw2QkFBQTtFQUNBLHVCSDVITTtBQ3dPUjtBRXpHSTtFQURGO0lBRUksVUFBQTtFRjRHSjtBQUNGOztBRXhHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUYyR0Y7O0FBalBBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFvUEoiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgPnRoZWFkLFxuICA+dGJvZHkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICA+dGhlYWQge1xuICAgIHRoIHtcbiAgICAgIHBhZGRpbmctYmxvY2s6IC43NXJlbSAxcmVtO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgICAgICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgIH1cblxuICAgICAgLnNvcnRhYmxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG5cbiAgPnRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcbiAgICB9XG4gIH1cblxuICA+dGJvZHkge1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWRhcmsge1xuICAgIGNvbG9yOiAkZGFyaztcbiAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vdGFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvdGFiLWNvbnRlbnRcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9mb3JtLWNvbmVudFwiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLmZvcm0tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICB9XG5cbiAgJn4uZm9ybS1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW07XG4gIH1cbn1cblxuLmZvcm0tc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogcmdiYSgkZGFyaywgLjUpO1xufVxuXG4uZm9ybS1ibG9jayB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVncmF5LCAuMik7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLmFkZC1hcnJheSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tbm90ZSxcbi5mb3JtLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAudGV4dCxcbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuICB9XG5cbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gIH1cbn1cblxuLmZvcm0tdGV4dCB7XG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICB9XG59XG5cbi5mb3JtLW5vdGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmZvcm0taW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGJvcmRlcjogMS4ycHggZGFzaGVkICRkYXJrZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVncmF5LCAuMTkpO1xuXG4gIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAtMXJlbTtcbiAgei1pbmRleDogMTtcblxuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQUU1RTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAuYnRuIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjdGNTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 86260:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/features/complaints-and-reports/services/complaints-reports.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplaintsReportsService": () => (/* binding */ ComplaintsReportsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);






class ComplaintsReportsService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.submitSuccessfullyEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.request = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    this.request$ = this.request.asObservable();
  }
  getRequest() {
    return this.request$;
  }
  setRequest(LatestValue) {
    return this.request.next(LatestValue);
  }
  GetByComplaintRequestId(id) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ComplaintRequest.GetByComplaintRequestId}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res?.data;
    }));
  }
  SaveComplaintRequest(complaintRequest) {
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ComplaintRequest.Create, complaintRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone ? res : null;
    }));
  }
  GetComplaintRequestTypes() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ComplaintRequest.GetComplaintRequestTypeList}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data ? res.data : null;
    }));
  }
  getComplaintRequestCustomerPagingList(pageIndex, pageSize) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ComplaintRequest.GetCustomerComplaintRequestList}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone ? res.data : null;
    }));
  }
  Delete(id) {
    return this._httpClient.delete(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ComplaintRequest.Delete}?id=${id}`);
  }
}
ComplaintsReportsService.ɵfac = function ComplaintsReportsService_Factory(t) {
  return new (t || ComplaintsReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
ComplaintsReportsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ComplaintsReportsService,
  factory: ComplaintsReportsService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_features_complaints-and-reports_complaints-and-reports_module_ts.js.map