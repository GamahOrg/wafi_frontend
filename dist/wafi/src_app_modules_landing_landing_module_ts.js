"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_landing_landing_module_ts"],{

/***/ 58870:
/*!***********************************************************!*\
  !*** ./src/app/modules/landing/landing-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingRoutingModule": () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/landing/landing.component */ 68184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);




const routes = [{
  path: '',
  component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
}];
class LandingRoutingModule {}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) {
  return new (t || LandingRoutingModule)();
};
LandingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LandingRoutingModule
});
LandingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 56395:
/*!***************************************************!*\
  !*** ./src/app/modules/landing/landing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 58870);
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing/landing.component */ 68184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);








class LandingModule {}
LandingModule.ɵfac = function LandingModule_Factory(t) {
  return new (t || LandingModule)();
};
LandingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LandingModule
});
LandingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule]
  });
})();

/***/ }),

/***/ 68184:
/*!********************************************************************!*\
  !*** ./src/app/modules/landing/pages/landing/landing.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 78824);
/* harmony import */ var _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/pilot-launch-hint/pilot-launch-hint.component */ 48088);





class LandingComponent {
  constructor(_router, titleService) {
    this._router = _router;
    this.titleService = titleService;
    this.localization = {
      // pleaseChoose: "نأمل اختيار وجهتك",
      pleaseChoose: "قم بالبدء بمشروعك عقاري",
      or: "او",
      enter: "دخول",
      realEstateContributions: "المساهمات عقارية",
      wafi: "البيع على الخارطة",
      appTitle: "الهيئة العامة للعقار",
      beta: "اطلاق تجريبي"
    };
  }
  ngOnInit() {
    this.setAppTitle();
  }
  setAppTitle() {
    this.titleService.setTitle(this.localization.appTitle);
  }
  /**
   * navigateToWafiLogin
   */
  navigateToWafiLogin() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.login}`);
  }
  /**
   * navigateToRealEstateContributionsLogin
   */
  navigateToRealEstateContributionsLogin() {
    this._router.navigateByUrl(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsAuth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsAuth.login}`);
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 25,
  vars: 6,
  consts: [[1, "rega"], [1, "landing"], [1, "logo"], ["src", "/assets/images/real-estate-contributions/general/logo-rega-wide-white.svg", "alt", "", 1, "logo-img"], [1, "content"], [1, "title"], [1, "or"], [1, "cards"], [1, "card"], [1, "card-body"], [1, "card-title"], ["src", "/assets/images/general/REGA_LOGO_Dark.svg", "alt", "", 1, "logo-img"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "card", "rega"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-pilot-launch-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_16_listener() {
        return ctx.navigateToWafiLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "div", 9)(20, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_23_listener() {
        return ctx.navigateToRealEstateContributionsLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.pleaseChoose);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.or);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.localization.wafi, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.enter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.localization.realEstateContributions, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.enter);
    }
  },
  dependencies: [_shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_1__.PilotLaunchHintComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.landing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 2rem;\n  min-height: 100%;\n  padding: 2rem;\n  background-image: url(\"/assets/images/content/landing/landing-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n    padding: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n@media (min-width: 992px) {\n  .landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n.landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 4.75rem;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 2.5rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 5rem;\n  background-color: white;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: normal;\n  color: #353B3B;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 4.75rem;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    row-gap: 1rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  --bs-card-spacer-x: 3rem;\n  --bs-card-spacer-y: 2rem;\n  width: 25rem;\n  min-height: 27rem;\n  margin-top: 2rem;\n  box-shadow: 0px 30px 45px 0px rgba(53, 59, 59, 0.1);\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #005257;\n}\n@media (max-width: 991px) {\n  .landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    --bs-card-spacer-x: 1rem;\n    --bs-card-spacer-y: 1rem;\n    width: 100%;\n    min-height: 14rem;\n  }\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: auto;\n  color: #001F21;\n  font-size: 1.25rem;\n  text-align: center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-border-radius: 0.5rem;\n  margin-top: auto;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.rega) {\n  background-image: url(\"/assets/images/content/landing/abstract-wafi.svg\");\n  background-repeat: no-repeat;\n  background-position: 150% center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.rega)   .card-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.rega[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/content/landing/abstract-reca.svg\");\n  background-repeat: no-repeat;\n  background-position: 50% center;\n}\n.landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card.rega[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 13rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNFQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBRkY7QUFJRTtFQVpGO0lBYUksYUFBQTtJQUNBLGFBQUE7RUFERjtBQUNGO0FBR0U7O0VBRUUsbUJBQUE7QUFESjtBQUdJO0VBSkY7O0lBS0ksVUFBQTtFQUNKO0FBQ0Y7QUFHSTtFQUNFLG1CQUFBO0FBRE47QUFHTTtFQUhGO0lBSUksa0JBQUE7RUFBTjtBQUNGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQzNDSTtBRHlDUjtBQUlJO0VBTEY7SUFNSSxXQUFBO0lBQ0EsYUFBQTtFQURKO0FBQ0Y7QUFHSTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0N2REM7QURzRFA7QUFJSTtFQUNFLGlCQUFBO0FBRk47QUFLSTtFQUNFLGdCQUFBO0FBSE47QUFNSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1NO0VBTkY7SUFPSSxzQkFBQTtJQUNBLGFBQUE7RUFITjtBQUNGO0FBS007RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtREFBQTtBQUxSO0FBT1E7RUFDRSx5QkFBQTtBQUxWO0FBUVE7RUFkRjtJQWVJLHdCQUFBO0lBQ0Esd0JBQUE7SUFFQSxXQUFBO0lBQ0EsaUJBQUE7RUFOUjtBQUNGO0FBUVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTlY7QUFRVTtFQUNFLGdCQUFBO0VBQ0EsY0M1R0o7RUQ2R0ksa0JBQUE7RUFDQSxrQkFBQTtBQU5aO0FBUVk7RUFDRSxjQUFBO0FBTmQ7QUFVVTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVJaO0FBWVE7RUFDRSx5RUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUFWVjtBQWFZO0VBQ0UsWUFBQTtBQVhkO0FBZ0JRO0VBQ0UseUVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBZFY7QUFpQlk7RUFDRSxZQUFBO0FBZmQ7O0FBdUJBO0VBQ0UsWUFBQTtBQXBCRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYW5kaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMnJlbTtcblxuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb250ZW50L2xhbmRpbmcvbGFuZGluZy1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICByb3ctZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAubG9nbyxcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiA0Ljc1cmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgbWF4LWhlaWdodDogMi41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwYWRkaW5nOiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cblxuICAgIC50aXRsZSxcbiAgICAub3Ige1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiAkZGFyaztcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgfVxuXG4gICAgLm9yIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmNhcmRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2x1bW4tZ2FwOiA0Ljc1cmVtO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcm93LWdhcDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQge1xuICAgICAgICAtLWJzLWNhcmQtc3BhY2VyLXg6IDNyZW07XG4gICAgICAgIC0tYnMtY2FyZC1zcGFjZXIteTogMnJlbTtcblxuICAgICAgICB3aWR0aDogMjVyZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3cmVtO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzMHB4IDQ1cHggMHB4IHJnYmEoJGRhcmssIDAuMSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAtLWJzLWNhcmQtc3BhY2VyLXg6IDFyZW07XG4gICAgICAgICAgLS1icy1jYXJkLXNwYWNlci15OiAxcmVtO1xuXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIC0tYnMtYnRuLXBhZGRpbmcteTogMC41cmVtO1xuICAgICAgICAgICAgLS1icy1idG4tYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCgucmVnYSkge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvbGFuZGluZy9hYnN0cmFjdC13YWZpLnN2Z1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1MCUgY2VudGVyO1xuXG4gICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYucmVnYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9sYW5kaW5nL2Fic3RyYWN0LXJlY2Euc3ZnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIGNlbnRlcjtcblxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiAxM3JlbTtcbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_landing_landing_module_ts.js.map