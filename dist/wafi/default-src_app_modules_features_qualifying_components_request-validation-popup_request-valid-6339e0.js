"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["default-src_app_modules_features_qualifying_components_request-validation-popup_request-valid-6339e0"],{

/***/ 45005:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-validation-popup/request-validation-popup.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestValidationPopupComponent": () => (/* binding */ RequestValidationPopupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_request_validation_request_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/request-validation/request-validation.service */ 2320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);






function RequestValidationPopupComponent_ng_container_0_div_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const err_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", err_r4.errorMessage, " ");
  }
}
function RequestValidationPopupComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestValidationPopupComponent_ng_container_0_div_1_p_1_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.generalErrorTab == null ? null : ctx_r1.generalErrorTab.tabErrors);
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_div_3_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0643\u062A\u0645\u0644\u0629");
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_9_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const errMsg_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", errMsg_r13.errorMessage, " ");
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_9_p_1_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", tab_r6.tabErrors);
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tab_r6.errNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644");
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 21)(2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("\u0645\u0643\u062A\u0645\u0644");
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 13)(6, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RequestValidationPopupComponent_ng_container_0_div_2_div_3_p_8_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_9_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_11_Template, 5, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RequestValidationPopupComponent_ng_container_0_div_2_div_3_ng_container_12_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tab_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r6.errNum === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r6.errNum !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r6.errNum !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tab_r6.errNum === 0);
  }
}
function RequestValidationPopupComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RequestValidationPopupComponent_ng_container_0_div_2_div_3_Template, 13, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "\u0646\u0623\u0645\u0644 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0642\u0628\u0644 \u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.tabsComponentList);
  }
}
function RequestValidationPopupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestValidationPopupComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RequestValidationPopupComponent_ng_container_0_div_2_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.getGeneralErrorTab());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.checkNotGeneralErrorTabsExist());
  }
}
class RequestValidationPopupComponent {
  constructor(_popupService, _router, _requestValidationService, _activatedRoute) {
    this._popupService = _popupService;
    this._router = _router;
    this._requestValidationService = _requestValidationService;
    this._activatedRoute = _activatedRoute;
    this.validationError = null;
    this.tabsComponentList = [{
      icon: '',
      title: 'البيانات الأساسية',
      disabled: false,
      id: 'FacilityBasicInfoComponent',
      errNum: 0,
      tabCode: 'FacilityInfo',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'تدريب الهيئة العامة للعقار للبيع على الخارطة',
      disabled: false,
      id: 'WafiTrainingComponent',
      errNum: 0,
      tabCode: 'WafiTraining',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'متطلبات القدرات المالية',
      id: 'FinancialCapabilitiesRequirementsComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'FinancialCapabilitiesRequirements',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: ' متطلبات القدرات المؤسسية و الموارد البشرية',
      id: 'JobRequirementsAndHumanResourcesComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'JobRequirementsAndHumanResources',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'متطلبات القدرات الفنية',
      id: 'TechnicalCapabilitiesRequirementsComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'TechnicalCapabilitiesRequirements',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'موظفين الشركة المعتمدين',
      id: 'CertifiedFacilityEngineersComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'CertifiedFacilityEngineers',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'القدرات المؤسسية والموارد الإضافية',
      id: 'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'القدارت الفنية الإضافية',
      id: 'DistinctiveAdditionalTechnicalCapabilitiesComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'DistinctiveAdditionalTechnicalCapabilities',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
      id: 'EngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'EngineersWithSufficientTrainingForTheEngineeringConsultant',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
      id: 'AccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
      disabled: false,
      errNum: 0,
      tabCode: 'AccountantsCompletedWafiTrainingProgramForAccountingSupervision',
      tabErrors: [],
      isVisible: false
    }, {
      icon: '',
      title: 'عنوان المنشأة',
      disabled: false,
      id: 'NationalAddressesComponent',
      errNum: 0,
      tabCode: 'NationalAddresses',
      tabErrors: [],
      isVisible: false
    }];
    this.subscriptions = [];
    this.renewRequest = false;
  }
  ngOnInit() {
    this.observeValidationError();
    this.observePopupEvents();
  }
  observeRouter() {
    this.subscriptions.push(this._activatedRoute.params.subscribe(params => {
      this.renewRequest = this._activatedRoute.snapshot.url[0].path == src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewRequestSummary;
      console.log('this._activatedRoute.snapshot.url[0].path', this._activatedRoute.snapshot.url[0].path);
      console.log('Configuration.pages.qualifying.renewRequest', src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewRequestSummary);
      console.log('this.renewRequest', this.renewRequest);
    }));
  }
  // popup
  observePopupEvents() {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {
      // console.log(res);
    }));
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      // console.log(res);
      // this.navigateToFacilityProfile();
      this.closeDialog();
    }));
  }
  closeDialog() {
    this._popupService.dismissDialog();
  }
  // private navigateToFacilityProfile(): void {
  //   this._router.navigate([
  //     `${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.facilityProfile}`,
  //   ]);
  // }
  navigateToFacilityProfile() {
    if (this.renewRequest) {
      this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityProfileWithRenewRequest}`]);
    } else {
      this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityProfile}`]);
    }
  }
  observeValidationError() {
    this.subscriptions.push(this._requestValidationService.getRequestValidation().subscribe(res => {
      //
      console.log('observeValidationError');
      console.log(res);
      this.validationError = res;
      console.log(res);
      this.validateTabs();
      this.setTabErrorMsgArr();
    }));
  }
  validateTabs() {
    this.tabsComponentList.map(t => {
      return t.errNum = this.getTabErrors(t.tabCode);
    });
    console.log(this.tabsComponentList);
  }
  getTabErrors(tabCode) {
    let errsNum = 0;
    if (this.validationError) {
      errsNum = this.validationError.tabs.find(tab => tab.tabCode === tabCode)?.tabErrors.length ?? 0;
    }
    return errsNum;
  }
  setTabErrorMsgArr() {
    // this.validationError
    this.tabsComponentList.map(tab => {
      // find tab by tab code
      // console.log("tab.tabErrors", tab, tab.tabErrors)
      tab.tabErrors = this.getTabByTabCode(tab.tabCode);
    });
    console.log('this.tabContent.tabsComponentList', this.tabsComponentList);
  }
  getTabByTabCode(TabCode) {
    let tabErrorsMsg = [];
    if (this.validationError) {
      this.validationError.tabs.map(tab => {
        if (tab.tabCode === TabCode) {
          // console.log("tab", tab)
          tabErrorsMsg = tab.tabErrors;
        }
      });
    }
    return tabErrorsMsg;
  }
  getGeneralErrorTab() {
    if (this.validationError && this.validationError.tabs && this.validationError.tabs.length) this.generalErrorTab = this.validationError.tabs.find(x => x.tabCode == 'General');
    return this.generalErrorTab;
  }
  checkNotGeneralErrorTabsExist() {
    if (this.validationError && this.validationError.tabs && this.validationError.tabs.length) {
      let notGeneralError = this.validationError.tabs.find(x => x.tabCode != 'General');
      return notGeneralError ? true : false;
    }
    return false;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RequestValidationPopupComponent.ɵfac = function RequestValidationPopupComponent_Factory(t) {
  return new (t || RequestValidationPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_1__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_request_validation_request_validation_service__WEBPACK_IMPORTED_MODULE_2__.RequestValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
RequestValidationPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RequestValidationPopupComponent,
  selectors: [["app-request-validation-popup"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "my-auto", 4, "ngIf"], ["class", "d-flex flex-column gap-2 py-3", 4, "ngIf"], [1, "my-auto"], ["class", "fs-5 text-danger text-center", 4, "ngFor", "ngForOf"], [1, "fs-5", "text-danger", "text-center"], [1, "d-flex", "flex-column", "gap-2", "py-3"], [1, "error-title", "text-danger"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "icon"], [1, "material-icons"], [1, "info"], [1, "title"], ["class", "mt-2 opacity-50 status-text", 4, "ngIf"], [1, "symbol"], [1, "mt-2", "opacity-50", "status-text"], ["class", "mt-2 opacity-50 status-text", 4, "ngFor", "ngForOf"], [1, "count"], [1, "status-text", "text-danger"], [1, "checked"], [1, "status-text", "text-success"]],
  template: function RequestValidationPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RequestValidationPopupComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.validationError == null ? null : ctx.validationError.tabs) && (ctx.validationError == null ? null : ctx.validationError.tabs == null ? null : ctx.validationError.tabs.length));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".card[_ngcontent-%COMP%] {\n  --bs-card-title-spacer-y: 0;\n  --bs-card-cap-bg: $card-bg;\n  border: 1px solid #E7EAEA;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:not(.no-separetor)::after {\n  content: \"\";\n  position: absolute;\n  inset-inline: var(--bs-card-cap-padding-x);\n  bottom: 0;\n  height: 1px;\n  background-color: #E7EAEA;\n}\n.card.qualiication-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: background-image 0.15s;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding: 1.5rem 1rem 1rem;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-start-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n  background-color: rgba(0, 31, 33, 0.3);\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1rem 1rem 1.5rem;\n  border-bottom: 6px solid transparent;\n  border-end-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg-hover.png\");\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 1.25rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #E4ECEC;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  background-color: rgba(0, 31, 33, 0.08);\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n  color: #353B3B;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #00B2BD;\n  align-self: flex-end;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  background-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.brief-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border: 1px solid rgba(196, 196, 196, 0.2);\n  border-top: 0.5rem solid #005257;\n  border-radius: 0.5rem;\n  box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.26);\n}\n.card.brief-card[_ngcontent-%COMP%]    + .brief-card[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    + .item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-inline-end: 1rem;\n  background-color: #F5FCFC;\n  border-radius: 0.25rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #005257;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #001F21;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #A2B2B3;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 1.75rem;\n  --bs-btn-padding-y: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #005257;\n}\n.card.phases-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(0, 31, 33, 0.08);\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(217, 217, 217, 0.4);\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]    + .phase[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.done[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.current[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.next[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #E7EAEA;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-status[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  font-size: 14px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 14px rgba(0, 31, 33, 0.08);\n  border-radius: 0.75rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  column-gap: 0.5rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 15%;\n  margin-inline-start: auto;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%] {\n  background-color: #00B2BD;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #FF7A69;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  margin-inline-start: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2NhcmRzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3QtdmFsaWRhdGlvbi1wb3B1cC9yZXF1ZXN0LXZhbGlkYXRpb24tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUVBLHlCQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ0RKO0FER0k7RUFDRSxlRTJDUztBRDVDZjtBREtNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLHlCRW5CTTtBRGVkO0FEU0U7RUFDRSxrQkFBQTtFQUNBLHFCRXdDTTtFRnRDTixtR0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUVBLGtDQUFBO0FDVEo7QURXSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFFQSxpQ0VrQkk7RUZqQkosNkJFaUJJO0VGZkosc0NBQUE7QUNiTjtBRGVNO0VBQ0UsWUV6REE7QUQ0Q1I7QURpQkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JFR0k7RUZGSiw2QkVFSTtBRGpCVjtBRGlCTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUV6RUE7QUQwRFI7QURtQkk7RUFDRSx5R0FBQTtBQ2pCTjtBRG1CTTtFQUNFLHFCRXBFSTtBRG1EWjtBRHNCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJFM0ZJO0VGNEZKLHNCRXhCTTtFRnlCTixlQUFBO0FDckJKO0FEdUJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FDdEJOO0FEd0JNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkUzR0c7QURrRlg7QUQyQlE7RUFDRSxXQUFBO0FDekJWO0FENEJRO0VBQ0UsWUU3SEY7QURtR1I7QUQ4Qk07RUFDRSxhQUFBO0FDNUJSO0FEOEJRO0VBQ0UsY0V4SEU7QUQ0Rlo7QURpQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLHVDQUFBO0FDaENOO0FEa0NNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNFckpEO0FEcUhQO0FEbUNNO0VBQ0UsY0U3SUc7RUY4SUgsb0JBQUE7QUNqQ1I7QURzQ007RUFDRSx5QkVsSkk7QUQ4R1o7QURzQ1E7RUFDRSxZRWxLRjtBRDhIUjtBRHVDUTtFQUNFLFlFdEtGO0FEaUlSO0FEMkNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7QUMxQ0o7QUQ0Q0k7RUFDRSxnQkFBQTtBQzFDTjtBRDZDSTtFQUNFLGFBQUE7QUMzQ047QUQ2Q007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUMzQ1I7QUQ2Q1E7RUFDRSxnQkFBQTtBQzNDVjtBRDhDUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkUxTEU7RUYyTEYsc0JFNUlBO0FEOEZWO0FEZ0RVO0VBQ0UsY0V0TUE7QUR3Slo7QURrRFE7RUFDRSxZQUFBO0VBQ0EsY0UzTkY7QUQyS1I7QURtRFE7OztFQUdFLGVFeEtLO0FEdUhmO0FEb0RRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ2xEVjtBRHFEUTtFQUNFLGNBQUE7QUNuRFY7QUR3REk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FDdkROO0FEeURNO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBQ3ZEUjtBRDBETTtFQUNFLGdDQUFBO0FDeERSO0FENkRFO0VBQ0UsOENBQUE7QUMzREo7QUQ2REk7RUFDRSxvQkFBQTtBQzNETjtBRDZETTtFQUNFLHFCQUFBO0FDM0RSO0FEK0RJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQzdETjtBRCtETTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUM3RFI7QURnRU07RUFDRSxrQkFBQTtBQzlEUjtBRGlFTTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQy9EUjtBRGlFUTs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUM5RFY7QURnRVU7O0VBQ0UsZUV4UEs7QUQyTGpCO0FEbUVRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2pFVjtBRG1FVTtFQUNFLGNFOVJEO0FENk5YO0FEcUVRO0VBQ0UsY0VuU0M7QURnT1g7QUR5RVU7RUFDRSx5QkU3U0E7QURzT1o7QUQ4RVU7RUFDRSx5QkVyVEE7QUR5T1o7QURtRlU7RUFDRSx5QkUvVUU7QUQ4UGQ7QURzRk07O0VBRUUseUJBQUE7QUNwRlI7QUR1Rk07O0VBRUUsZUV4U087QURtTmY7QUR3Rk07RUFDRSxlRTNTTztBRHFOZjs7QUE1UUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBK1FKOztBQTVRQTtFQUNJLG1CQUFBO0VBQ0EsZUM4Q1c7QURpT2Y7O0FBNVFBO0VBQ0ksOENBQUE7RUFDQSxzQkFBQTtBQStRSjtBQTdRSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQStRUjtBQTdRUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNYSDtBRDBSVDtBQTdRWTtFQUNJLGdCQUFBO0VBRUEsY0NSTDtBRHNSWDtBQTFRUTs7RUFFSSxlQ2dCRztBRDRQZjtBQXpRUTtFQUVJLGNDbkJEO0FENlJYO0FBdlFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBeVFaO0FBdlFZOztFQUVJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FBdVFoQjtBQW5RWTtFQUVJLHlCQ3pETDtBRDZUWDtBQWxRZ0I7RUFDSSxlQUFBO0VBQ0EsWUN4RVo7QUQ0VVI7QUFoUVk7RUFDSSxZQzdFUjtFRDhFUSx5QkNwRFA7QURzVFQ7QUEvUFk7RUFDSSx5QkFBQTtBQWlRaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIC0tYnMtY2FyZC10aXRsZS1zcGFjZXIteTogMDtcbiAgLS1icy1jYXJkLWNhcC1iZzogJGNhcmQtYmc7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICB9XG5cbiAgICAmOm5vdCgubm8tc2VwYXJldG9yKSB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0LWlubGluZTogdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5xdWFsaWljYXRpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4xNXM7XG5cbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG5cbiAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gICAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAuMyk7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDEuNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zL2NvbnRlbnQvcXVhbGlmaWNhdGlvbi9jYXJkLWJnLWhvdmVyLnBuZycpO1xuXG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmxpY2Vuc2UtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcblxuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTRFQ0VDO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1taWQ7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgPio6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIC4wOCk7XG5cbiAgICAgIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5hcnJvdyB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtbWlkO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWFpbjtcblxuICAgICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5icmllZi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjIpO1xuICAgIGJvcmRlci10b3A6IDAuNXJlbSBzb2xpZCAkdGhlbWUtbWFpbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgxODEsIDE4MywgMTg1LCAwLjI2KTtcblxuICAgICYrLmJyaWVmLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICB9XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJisuaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1sYWJlbCxcbiAgICAgICAgLmtleSxcbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgIH1cblxuICAgICAgICAua2V5IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgY29sb3I6ICNBMkIyQjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAuNXJlbTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMXJlbTtcbiAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICAtLWJzLWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XG4gICAgICAgIC0tYnMtYnRuLXBhZGRpbmcteTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLnAtYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR0aGVtZS1tYWluO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYucGhhc2VzLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKCRibGFjaywgMC4wOCk7XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGhhc2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICByb3ctZ2FwOiAuNXJlbTtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGJsdWVncmF5LCAuNCk7XG4gICAgICB9XG5cbiAgICAgICYrLnBoYXNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAucGhhc2UtaGVhZGVyLFxuICAgICAgLnBoYXNlLWRhdGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmRvbmUge1xuICAgICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY3VycmVudCB7XG4gICAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5uZXh0IHtcbiAgICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGhhc2Utc3RhdHVzLFxuICAgICAgLnBoYXNlLWRhdGUge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAycmVtO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICYucXVhbGlpY2F0aW9uLXJlcWVzdC1jYXJkIHtcbiAgLy8gICAuY2FyZC10aXRsZSB7XG5cbiAgLy8gICAgIC50aXRsZSxcbiAgLy8gICAgIC5kYXRlLFxuICAvLyAgICAgLmFjdGlvbnMge1xuICAvLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAudGl0bGUge1xuICAvLyAgICAgICBjb2xvcjogJGRhcms7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5kYXRlIHtcbiAgLy8gICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgICAgLmtleSB7XG4gIC8vICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAudmFsdWUge1xuICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgICAgICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5hY3Rpb25zIHtcbiAgLy8gICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIC5hcHBsaWNhbnQge1xuICAvLyAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgIC5rZXkge1xuICAvLyAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gIC8vICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC52YWx1ZSB7XG4gIC8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAgIC5pbWFnZSB7XG4gIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC8vICAgICAgICAgd2lkdGg6IDJyZW07XG4gIC8vICAgICAgICAgaGVpZ2h0OiAycmVtO1xuXG4gIC8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtncmVlbjtcbiAgLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKCRibGFjaywgMC4xKTtcblxuICAvLyAgICAgICAgIC5hdmF0YXIge1xuICAvLyAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC5uYW1lIHtcbiAgLy8gICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5kZXRhaWxzIHtcbiAgLy8gICAgICAgbGFiZWwge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgLy8gICAgICAgICBjb2xvcjogcmdiYSgkZGFya2dyYXksIC41KTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNwYW4ge1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9jYXJkc1wiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmVycm9yLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbn1cblxuLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKCRibGFjaywgLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiAuNzVyZW07XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcblxuICAgICAgICAgICAgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuc3RhdHVzLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN5bWJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuXG4gICAgICAgICAgICAuY291bnQsXG4gICAgICAgICAgICAuY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLmNoZWNrZWQge1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRtaWRncmVlbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuXG4gICAgICAgICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtaWRyZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdGF0dXMtdGV4dCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_features_qualifying_components_request-validation-popup_request-valid-6339e0.js.map