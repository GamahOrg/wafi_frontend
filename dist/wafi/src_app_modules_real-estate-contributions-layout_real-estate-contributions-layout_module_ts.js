"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_real-estate-contributions-layout_real-estate-contributions-layout_module_ts"],{

/***/ 17102:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-layout/components/header/header.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65132);




class HeaderComponent {
  constructor(_userDataService, _router) {
    this._userDataService = _userDataService;
    this._router = _router;
    this.subscriptions = [];
    this.baseImagePath = "./assets/images/layout/header/";
    this.userData = null;
  }
  ngOnInit() {
    this.obseveCustomerData();
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
    }));
  }
  logout() {
    this.clearLocalStorage();
    this.navigateToLogin();
  }
  navigateToLogin() {
    // this._router.navigate([''])
    // this._router.navigate([`${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`])
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.landing}`]);
  }
  clearLocalStorage() {
    localStorage.clear();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_1__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 12,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-end", "align-items-center", "gap-3"], [1, "user", "dropdown"], [1, "image"], ["src", "assets/images/general/static-person.jpeg", "alt", "", 1, "d-block", "w-100"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "icon", "material-icons"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "expand_more");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 6)(9, "li")(10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.fullName);
    }
  },
  styles: ["header[_ngcontent-%COMP%] {\n  height: 4.5rem;\n  padding-inline: 1.5rem;\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 31, 33, 0.1);\n}\n\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding-inline-start: 1rem;\n  border-inline-start: 1px solid #667676;\n}\n.user[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid #667676;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 4px 8px rgba(0, 31, 33, 0.1);\n}\n.user[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.user[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #667676;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zLWxheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0N5RVk7RUR4RVosc0JBQUE7RUFFQSx1QkNISTtFRElKLDZDQUFBO0FBRko7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLDBCQUFBO0VBQ0Esc0NBQUE7QUFSSjtBQVVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBVlI7QUFZUTtFQUNJLGlCQUFBO0FBVlo7QUFjSTtFQUNJLHFCQUFBO0VBQ0EsY0NuQ0c7QUR1QlgiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICAgIHBhZGRpbmctaW5saW5lOiAxLjVyZW07XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGJsYWNrLCAwLjEpO1xufVxuXG4vLyBuYXYge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIC8vIHBhZGRpbmctYmxvY2stc3RhcnQ6IDE2cHg7XG4vLyB9XG5cbi51c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMXJlbTtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0OiAxcHggc29saWQgJGRhcmtncmF5O1xuXG4gICAgLmltYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFya2dyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgkYmxhY2ssIDAuMSk7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5214:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-layout/components/layout/layout.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/enums/direction */ 76421);
/* harmony import */ var src_app_modules_real_estate_contributions_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/real-estate-contributions-auth/models/login.model */ 60657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/language/language.service */ 75179);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 78824);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _shared_components_real_estate_contribution_footer_real_estate_contribution_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/real-estate-contribution-footer/real-estate-contribution-footer.component */ 70786);
/* harmony import */ var _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/pilot-launch-hint/pilot-launch-hint.component */ 48088);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.component */ 17102);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 31832);















class LayoutComponent {
  constructor(_languageService, _userDataService, _storageService, _router, titleService, _toastrNotificatioService) {
    this._languageService = _languageService;
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this._router = _router;
    this.titleService = titleService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.currentLang = '';
    this.bodyDirection = src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl;
    this.subscriptions = [];
    this.showSideBar = false;
    this.userData = null;
    this.appTitle = "المساهمات عقارية";
    this.loginUserType = "";
    this.loginUserTypeEnum = null;
    _languageService.currentLang.subscribe(lang => this.currentLang = lang);
  }
  setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }
  ngOnInit() {
    this.getLoginUserType();
    this.setAppTitle();
    this.observeDirectionChange();
    this.getCustomer();
  }
  getLoginUserType() {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType);
    this.getCustomer();
  }
  getCustomer() {
    this.subscriptions.push(this._userDataService.GetCustomer(this.loginUserTypeEnum).subscribe(res => {
      if (res) {
        this.userData = res;
        this.updateCustomerData(res);
        if (!this.userData.isEmployee) {
          if (this.loginUserTypeEnum === src_app_modules_real_estate_contributions_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__.LoginUserTypeEnum.delegateWafiPartner && res.facilities.length === 0) {
            this._toastrNotificatioService.showInfo("مفوض لا يوجد لديه منشأة !");
            this.logout();
          } else if (res.facilities && res.facilities.length === 0 && this.loginUserTypeEnum === src_app_modules_real_estate_contributions_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__.LoginUserTypeEnum.wafiPartner) {
            this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsAuth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsAuth.registration}`]);
          }
        }
      }
    }));
  }
  logout() {
    this.clearLocalStorage();
    this.navigateToLogin();
  }
  navigateToLogin() {
    // this._router.navigate([`${Configuration.modules.auth}/${Configuration.pages.auth.wafiService}`])
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.landing}`]);
  }
  clearLocalStorage() {
    localStorage.clear();
  }
  updateCustomerData(customerData) {
    this._userDataService.updateCustomerData(customerData);
  }
  observeDirectionChange() {
    this.subscriptions.push(this._languageService.observeDirection().subscribe(direction => {
      this.bodyDirection = src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_1__.Direction[direction];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__.ToastrNotificatioService));
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  decls: 8,
  vars: 1,
  consts: [[1, "layout", "d-flex", 3, "dir"], [1, "d-flex", "flex-column", "justify-content-between", "flex-grow-1"], [1, "content-area", "h-100", "p-4"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-pilot-launch-hint")(2, "app-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "main", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "section", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-real-estate-contribution-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.bodyDirection);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Dir, _shared_components_real_estate_contribution_footer_real_estate_contribution_footer_component__WEBPACK_IMPORTED_MODULE_7__.RealEstateContributionFooterComponent, _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_8__.PilotLaunchHintComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.SidebarComponent],
  styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  background: #F7F8F8;\n}\n.layout[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2xheW91dC1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMtbGF5b3V0L2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQ0RNO0FDQVI7QUZJSTtFQUNFLFlBQUE7RUFDQSx1QkNQRTtBQ0tSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5cbi5sYXlvdXQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICRsaWdodDtcblxuICBtYWluIHtcbiAgICBmb290ZXIge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLmxheW91dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0Y3RjhGODtcbn1cbi5sYXlvdXQgbWFpbiBmb290ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 78571:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-layout/components/notifications/notifications.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/enums/request-type */ 38385);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ 15954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/signalR/signal-r.service */ 869);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 85959);









function NotificationsComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 5)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.notViewedCount);
  }
}
const _c0 = function (a0) {
  return {
    "newNotification": a0
  };
};
function NotificationsComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationsComponent_ul_5_li_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const notification_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.onNotificationClicked(notification_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, !notification_r5.isViewed));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notification_r5.message);
  }
}
function NotificationsComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NotificationsComponent_ul_5_li_1_Template, 3, 4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "li")(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.notificationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r1.Configuration.pages.notificationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.localization.seeAll);
  }
}
function NotificationsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 6)(1, "li")(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
class NotificationsComponent {
  constructor(_notificationsService, _router, _signalRService, _userDataService, _toastrNotificatioService) {
    this._notificationsService = _notificationsService;
    this._router = _router;
    this._signalRService = _signalRService;
    this._userDataService = _userDataService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.subscriptions = [];
    this.baseImagePath = "./assets/images/layout/header/";
    this.notificationList = null;
    this.qualifyingRequestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.requestDetails}`;
    this.licenseRequestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.license.lincenseDetails}`;
    this.notViewedCount = 0;
    this.Configuration = src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration;
    this.userData = null;
    this.localization = {
      seeAll: "عرض الكل"
    };
  }
  get RequestType() {
    return src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_0__.RequestType;
  }
  ngOnInit() {
    this.GetNotificationList();
    this.observeNotifyCustomer();
    this.getCustomerData();
  }
  GetNotificationList() {
    this.subscriptions.push(this._notificationsService.getNotifications().subscribe(res => {
      if (res) {
        this.notificationList = res.notificationList;
        this.notViewedCount = res.notViewedCount;
      }
    }));
  }
  onNotificationClicked(notification) {
    console.log("notification", notification);
    this.subscriptions.push(this._notificationsService.markNotificationViewed(notification.id).subscribe(res => {
      if (res) {
        this.GetNotificationList();
        switch (notification.requestTypeId) {
          case this.RequestType.license:
            this.navigateToLicenseDetails(notification);
            break;
          case this.RequestType.qualification:
            this.navigateToQualificationDetails(notification);
            break;
          case this.RequestType.services:
            this.navigateToServicesDetails(notification);
            break;
        }
      }
    }));
  }
  navigateToServicesDetails(notification) {
    // set request id in local storage 
    // navigate to services page enshallah :D 
    console.log("navigateToServicesDetails");
  }
  navigateToQualificationDetails(notification) {
    // set request id in local storage 
    // navigate to qualification details page
    console.log("navigateToQualificationDetails");
    this.setSelectedRequestIdInLocalStorage(notification.requestId);
    this.routeToQualifyingRequestDetails();
  }
  navigateToLicenseDetails(notification) {
    // set request id in local storage 
    // navigate to license details page 
    console.log("navigateToLicenseDetails");
    this.setLicenseRequestIdInLocalStorage(notification.requestId);
    this.routeTolicenseRequestDetailsRoute();
  }
  setSelectedRequestIdInLocalStorage(id) {
    localStorage.setItem("seclectRequest", id);
  }
  routeToQualifyingRequestDetails() {
    this._router.navigate([this.qualifyingRequestDetailsRoute]);
  }
  routeTolicenseRequestDetailsRoute() {
    this._router.navigate([this.licenseRequestDetailsRoute]);
  }
  setLicenseRequestIdInLocalStorage(licenseRequestId) {
    localStorage.setItem('licenseRequestId', licenseRequestId);
  }
  observeNotifyCustomer() {
    this.subscriptions.push(this._signalRService.NotifyCustomer$.subscribe(res => {
      if (this.userData && res.actorId == this.userData.id) {
        this.GetNotificationList();
        this._toastrNotificatioService.showInfo(res.message);
      }
    }));
  }
  getCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      if (res) {
        this.userData = res;
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
  return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_3__.SignalRService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_5__.ToastrNotificatioService));
};
NotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NotificationsComponent,
  selectors: [["app-notifications"]],
  decls: 8,
  vars: 3,
  consts: [["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["class", "notice", 4, "ngIf"], [1, "material-icons-outlined"], ["class", "dropdown-menu", 4, "ngIf", "ngIfElse"], ["noNotification", ""], [1, "notice"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", "px-2", "text-center", 3, "routerLink"], [1, "dropdown-item", "px-2", 3, "ngClass", "click"], [1, "dropdown-item", "px-2", "text-center"]],
  template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NotificationsComponent_span_2_Template, 3, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NotificationsComponent_ul_5_Template, 5, 3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NotificationsComponent_ng_template_6_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.notViewedCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.notificationList && ctx.notificationList.length > 0)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: [".backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1024;\n  inset-block: 0;\n  inset-inline: 0;\n  background-color: rgba(0, 31, 33, 0.7);\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-toggle.show[_ngcontent-%COMP%]    ~ .backdrop[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: -0.25rem;\n  right: 0;\n  width: 1rem;\n  height: 1rem;\n  font-size: 10px;\n  color: white;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.notification-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-padding-y: 0;\n  --bs-dropdown-zindex: 1025;\n  --bs-dropdown-border-radius: 0;\n  position: fixed !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  inset-inline-end: 0 !important;\n  transform: none !important;\n  width: 25rem;\n}\n@media (max-width: 767px) {\n  .notification-menu[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.notification-menu.show[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-inline-end: 1rem;\n  color: white;\n  background-color: #067647;\n  background-color: #005257;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-inline: 1rem;\n  color: white;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  font-size: 12px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-filter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-filter[_ngcontent-%COMP%]   .filter-by[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: #353B3B;\n  transition: all ease-in-out 0.15s;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-filter[_ngcontent-%COMP%]   .filter-by.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 0.75rem;\n  background-color: rgba(9, 50, 102, 0.1);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  border: 1px solid #BAE9EB;\n  border-radius: 0.5rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]    + .notification-item[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item.new[_ngcontent-%COMP%] {\n  border-inline-start-width: 4px;\n  border-inline-start-color: #093266;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.5rem;\n  background: #F7F8F8;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  background-color: #F5FCFC;\n  border-radius: 50%;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #093266;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%] {\n  display: flex;\n  margin-inline-start: auto;\n  font-size: 12px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-inline-end: 0.25rem;\n  font-size: 1rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .notification-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  color: #353B3B;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 12px;\n  color: rgba(0, 31, 33, 0.5);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 31, 33, 0.05);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: bold;\n  color: #093266;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX25vdGlmaWNhdGlvbnMtY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMtbGF5b3V0L2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsc0NBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJSTtFQUNFLGNBQUE7QUNGTjtBRE1FO0VBQ0UsaUJBQUE7QUNKSjs7QURRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUVzQmM7RUZyQmQsWUVuQ007RUZvQ04sa0JBQUE7RUFDQSx5QkUxQlM7QURrQlg7O0FEV0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFFQSxZQUFBO0FDVkY7QURZRTtFQWJGO0lBY0ksVUFBQTtFQ1RGO0FBQ0Y7QURXRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1RKO0FEWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx3QkFBQTtFQUNBLFlFeEVJO0VGeUVKLHlCRTdESTtFRjhESix5QkU3RFE7QURrRFo7QURhSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ1pOO0FEY007RUFDRSxlQUFBO0FDWlI7QURnQkk7RUFDRSxtQkFBQTtFQUNBLFlFNUZFO0FEOEVSO0FEaUJJO0VBQ0UseUJBQUE7RUFDQSxlRTFDUztBRDJCZjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURtQkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNqQk47QURtQk07RUFDRSxhQUFBO0VBQ0EsY0UvR0Q7RUZnSEMsaUNBQUE7QUNqQlI7QURtQlE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsdUNBQUE7QUNsQlY7QUR1Qkk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDckJOO0FEd0JJO0VBRUUseUJBQUE7RUFDQSxxQkU3REk7QURzQ1Y7QUR5Qk07RUFDRSxtQkFBQTtBQ3ZCUjtBRDBCTTtFQUNFLDhCQUFBO0VBRUEsa0NFbkhHO0FEMEZYO0FENEJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsbUJFbkpBO0FEd0hSO0FENkJRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFHQSx5QkUzSUU7RUY0SUYsa0JBQUE7QUM5QlY7QURnQ1U7RUFDRSxlRTlGRjtFRmdHRSxjRTlJRDtBRCtHWDtBRG1DUTtFQUNFLGVFckhLO0FEb0ZmO0FEb0NRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUUxSEs7QUR3RmY7QURvQ1U7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNsQ1o7QUR1Q007RUFDRSxhQUFBO0FDckNSO0FEdUNRO0VBQ0UscUJBQUE7RUFDQSxlRXpJSztFRjBJTCxjRWpNSDtBRDRKUDtBRHdDUTtFQUNFLGtCQUFBO0VBQ0EsZUU5SUs7RUYrSUwsMkJBQUE7QUN0Q1Y7QUQ0Q0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQzFDSjtBRDRDSTtFQUNFLGtCQUFBO0FDMUNOO0FENENNO0VBQ0UscUJBQUE7RUFDQSxlRWhLTztFRmlLUCxpQkFBQTtFQUVBLGNFak1HO0FEc0pYIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMjQ7XG4gIGluc2V0LWJsb2NrOiAwO1xuICBpbnNldC1pbmxpbmU6IDA7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIC43KTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLnNob3cge1xuICAgICZ+LmJhY2tkcm9wIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuLm5vdGljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtLjI1cmVtO1xuICByaWdodDogMDtcblxuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1pZDtcbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ubm90aWZpY2F0aW9uLW1lbnUge1xuICAtLWJzLWRyb3Bkb3duLXBhZGRpbmcteTogMDtcbiAgLS1icy1kcm9wZG93bi16aW5kZXg6IDEwMjU7XG4gIC0tYnMtZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMDtcblxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBpbnNldC1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXG4gIHdpZHRoOiAyNXJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgJi5zaG93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxcmVtO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1haW47XG5cbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICB3aWR0aDogNC41cmVtO1xuICAgICAgaGVpZ2h0OiA0LjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgLjEpO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi1pbmxpbmU6IDFyZW07XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cblxuICAgIC5jb3VudCB7XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIH1cbiAgfVxuXG4gIC5ub3RpZmljYXRpb24tYm9keSB7XG4gICAgcGFkZGluZzogMXJlbTtcblxuICAgIC5ub3RpZmljYXRpb24tZmlsdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLmZpbHRlci1ieSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4xNXM7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzKi43NTtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrZ3JlZW4sIC4xKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0aGVtZS1kYXJrLCAuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9ucy1saXN0IHtcbiAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4gICAgICAmKy5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC43NXJlbTtcbiAgICAgIH1cblxuICAgICAgJi5uZXcge1xuICAgICAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiA0cHg7XG4gICAgICAgIC8vIGJvcmRlci1pbmxpbmUtc3RhcnQtY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0O1xuXG4gICAgICAgID4uaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Z3JlZW47XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRzaXplLW1kO1xuICAgICAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgIH1cblxuICAgICAgICAudGltaW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuXG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IC4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0tYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgLm5vdGlmaWNhdGlvbi1saW5rIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3RlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgICAgY29sb3I6IHJnYmEoJGhlYWRpbmdzLWNvbG9yLCAuNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKCRibGFjaywgLjA1KTtcblxuICAgIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5ub3RpZmljYXRpb24tbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIuYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMjQ7XG4gIGluc2V0LWJsb2NrOiAwO1xuICBpbnNldC1pbmxpbmU6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjcpO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyb3Bkb3duLXRvZ2dsZS5zaG93IH4gLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHJvcGRvd24tdG9nZ2xlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5ub3RpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjI1cmVtO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjJCRDtcbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ubm90aWZpY2F0aW9uLW1lbnUge1xuICAtLWJzLWRyb3Bkb3duLXBhZGRpbmcteTogMDtcbiAgLS1icy1kcm9wZG93bi16aW5kZXg6IDEwMjU7XG4gIC0tYnMtZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaW5zZXQtaW5saW5lLWVuZDogMCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ub3RpZmljYXRpb24tbWVudSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLm5vdGlmaWNhdGlvbi1tZW51LnNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjc2NDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTc7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1oZWFkZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQuNXJlbTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWhlYWRlciAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWhlYWRlciAudGl0bGUge1xuICBtYXJnaW4taW5saW5lOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1oZWFkZXIgLmNvdW50IHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24tZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24tZmlsdGVyIC5maWx0ZXItYnkge1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogIzM1M0IzQjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMTVzO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWZpbHRlciAuZmlsdGVyLWJ5LmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDksIDUwLCAxMDIsIDAuMSk7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb25zLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkFFOUVCO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSArIC5ub3RpZmljYXRpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbS5uZXcge1xuICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiA0cHg7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQtY29sb3I6ICMwOTMyNjY7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogI0Y3RjhGODtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkgLm5vdGlmaWNhdGlvbi1pdGVtIC5pdGVtLWhlYWRlciA+IC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1oZWFkZXIgPiAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0taGVhZGVyIC50aW1pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1oZWFkZXIgLnRpbWluZyAuaWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1ib2R5IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkgLm5vdGlmaWNhdGlvbi1pdGVtIC5pdGVtLWJvZHkgLm5vdGlmaWNhdGlvbi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzUzQjNCO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0tYm9keSAubm90ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAzMSwgMzMsIDAuNSk7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAzMSwgMzMsIDAuMDUpO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tZm9vdGVyIC5ub3RpZmljYXRpb24taXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWZvb3RlciAubm90aWZpY2F0aW9uLWl0ZW0gLm5vdGlmaWNhdGlvbi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzA5MzI2Njtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 31832:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-layout/components/sidebar/sidebar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_modules_real_estate_contributions_auth_models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/real-estate-contributions-auth/models/login.model */ 60657);
/* harmony import */ var src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/features/qualifying/dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/language/language.service */ 75179);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 97558);












function SidebarComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.baseUrl + (ctx_r1.userData == null ? null : ctx_r1.userData.profileImageFile == null ? null : ctx_r1.userData.profileImageFile.filePath), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    "disabled active": a0
  };
};
function SidebarComponent_div_14_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SidebarComponent_div_14_ul_5_li_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const facility_r13 = restoredCtx.$implicit;
      const i_r15 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.updateDefaultFacility(facility_r13, i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facility_r13 = ctx.$implicit;
    const first_r14 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, first_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", facility_r13.commercialRegisterNumber, " ");
  }
}
function SidebarComponent_div_14_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SidebarComponent_div_14_ul_5_li_1_Template, 3, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r11.userData.facilities);
  }
}
function SidebarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SidebarComponent_div_14_ul_5_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A ", ctx_r2.userData && ctx_r2.userData.facilities.length > 0 ? ctx_r2.userData.facilities[0].commercialRegisterNumber : "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.userData && ctx_r2.userData.facilities.length > 0);
  }
}
const _c1 = function (a0) {
  return {
    "justify-content-center": a0
  };
};
const _c2 = function () {
  return {
    exact: true
  };
};
function SidebarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c1, ctx_r3.hideSideBar))("routerLink", "/" + ctx_r3.links.facilities)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c2));
  }
}
function SidebarComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0645\u0644\u0641 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c1, ctx_r4.hideSideBar))("routerLink", "/" + ctx_r4.links.facilityProfile)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c2));
  }
}
function SidebarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "accordion", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "accordion-group", 30)(4, "div", 31)(5, "h6", 32)(6, "span", 26)(7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "card_membership");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0627\u0644\u062A\u0623\u0647\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 26)(12, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 36)(17, "span", 26)(18, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 36)(23, "span", 26)(24, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "a", 36)(29, "span", 26)(30, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u0634\u0647\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "a", 36)(35, "span", 26)(36, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "new_releases");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\u062A\u062C\u062F\u064A\u062F \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r5.currentUrl.includes("/" + ctx_r5.links.qualifying))("isOpen", !ctx_r5.hideSideBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c1, ctx_r5.hideSideBar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r5.links.qualifying + "/" + ctx_r5.links.qualifyingReqs);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r5.links.qualifying + "/" + ctx_r5.links.qualifyingReqList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r5.links.qualifying + "/" + ctx_r5.links.qualifyingCertificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r5.links.qualifying + "/" + ctx_r5.links.renewQualifyingList);
  }
}
function SidebarComponent_div_19_a_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r18.links.license + "/" + ctx_r18.links.projectList);
  }
}
function SidebarComponent_div_19_a_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 39)(1, "span", 26)(2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u062D\u0627\u0633\u0628 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r19.links.charteredaccountprojectlist)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c2));
  }
}
function SidebarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "accordion", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "accordion-group", 30)(4, "div", 31)(5, "h6", 32)(6, "span", 26)(7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0627\u0644\u062A\u0631\u062E\u064A\u0635");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 26)(12, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 36)(17, "span", 26)(18, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 36)(23, "span", 26)(24, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "a", 36)(29, "span", 26)(30, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\u0634\u0647\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0631\u062E\u064A\u0635");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, SidebarComponent_div_19_a_34_Template, 2, 1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "a", 36)(36, "span", 26)(37, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "a", 36)(42, "span", 26)(43, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "new_releases");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u062E\u0635");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SidebarComponent_div_19_a_47_Template, 6, 3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r6.currentUrl.includes("/" + ctx_r6.links.license))("isOpen", !ctx_r6.hideSideBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c1, ctx_r6.hideSideBar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.licenseTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.lincenseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.lincenseCertificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isEngineer);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.lincenseRequestApprovals);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.renewLicensesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isAccountant);
  }
}
function SidebarComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "accordion", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "accordion-group", 30)(4, "div", 31)(5, "h6", 32)(6, "span", 26)(7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u062A\u0631\u0627\u062E\u064A\u0635 \u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 26)(12, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 36)(17, "span", 26)(18, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 36)(23, "span", 26)(24, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r7.currentUrl.includes("/" + ctx_r7.links.license))("isOpen", !ctx_r7.hideSideBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r7.hideSideBar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r7.links.license + "/" + ctx_r7.links.employeeCreateLicense);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r7.links.license + "/" + ctx_r7.links.employeeLicenseList);
  }
}
function SidebarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 40)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0639\u0642\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r8.hideSideBar))("routerLink", "/" + ctx_r8.links.license + "/" + ctx_r8.links.contractdocumentation);
  }
}
function SidebarComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 40)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0633\u062C\u0644 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r9.hideSideBar))("routerLink", "/" + ctx_r9.links.license + "/" + ctx_r9.links.buyerList);
  }
}
function SidebarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "div", 24)(2, "a", 40)(3, "span", 26)(4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r10.hideSideBar))("routerLink", "/" + ctx_r10.links.userManagement + "/" + ctx_r10.links.userProfile);
  }
}
const _c3 = function (a0) {
  return {
    "closed": a0
  };
};
const _c4 = function (a0, a1) {
  return {
    "gap-md-1": a0,
    "flex-md-row": a1
  };
};
const _c5 = function () {
  return ["/"];
};
const _c6 = function (a0, a1) {
  return {
    "justify-content-center mx-0": a0,
    "mx-4 rounded-1": a1
  };
};
const _c7 = function (a0) {
  return {
    "px-3": a0
  };
};
class SidebarComponent {
  constructor(_languageService, _userDataService, router, _storageService) {
    this._languageService = _languageService;
    this._userDataService = _userDataService;
    this.router = router;
    this._storageService = _storageService;
    this.hideSideBar = true;
    this.currentLang = '';
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseURL}/`;
    this.currentUrl = '';
    this.isAccountant = false;
    this.isEngineer = false;
    this.isDeveloper = false;
    this.loginUserType = '';
    this.loginUserTypeEnum = null;
    this.LoginUserTypeEnum = src_app_modules_real_estate_contributions_auth_models_login_model__WEBPACK_IMPORTED_MODULE_1__.LoginUserTypeEnum;
    this.subscriptions = [];
    this.panelOpenState = false;
    this.baseImagePath = './assets/images/layout/sidebar/';
    this.userData = null;
    this.links = {
      charteredaccountprojectlist: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributions}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsLicense}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.charteredaccount}`,
      qualifying: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributions}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsQualifying}`,
      qualifyingReqs: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsQualifying.requests}`,
      qualifyingReqList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsQualifying.requestList}`,
      qualifyingCertificates: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsQualifying.qualifyingCertificates}`,
      license: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributions}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsLicense}`,
      licenseTypes: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.lincenseTypes}`,
      lincenseList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.lincenseList}`,
      lincenseRequestApprovals: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.lincenseRequestApprovals}`,
      lincenseCertificates: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.lincenseCertificates}`,
      facilityProfile: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributions}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsFacilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsFacilities.facilityProfile}`,
      facilities: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributions}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionsFacilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsFacilities.facilityDashboard}`,
      userManagement: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributions}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.realEstateContributionUserManagement}`,
      userProfile: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionUserManagement.userProfile}`,
      projectList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.projectList}`,
      renewLicensesList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.RenewLicensesList}`,
      renewQualifyingList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionsQualifying.renewQualifyingList}`,
      employeeCreateLicense: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.employeeCreateLicense}`,
      employeeLicenseList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.realEstateContributionslicense.employeeLicenseList}`,
      buyerList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.buyerList}`,
      contractdocumentation: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.contractdocumentation}`
    };
    _languageService.currentLang.subscribe(lang => this.currentLang = lang);
  }
  ngOnInit() {
    this.getLoginUserType();
    this.obseveCustomerData();
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
  getLoginUserType() {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType);
    this.obseveCustomerData();
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      if (this.userData && this.userData.facilities && this.userData.facilities.length > 0) this.checkIfAccountantFacility(this.userData.facilities[0].id);
    }));
  }
  checkIfAccountantFacility(facilityId) {
    this.subscriptions.push(this._userDataService.getFacilityQualificationTypeCode(facilityId).subscribe(res => {
      this.isAccountant = res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_2__.QualificationType.accountantQualificationRequest;
      this.isEngineer = res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_2__.QualificationType.engineeringConsultantQualificationRequest;
      this.isDeveloper = res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_2__.QualificationType.realStateDeveloperQualificationRequest || res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_2__.QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
    }));
  }
  updateDefaultFacility(facility, index) {
    this.userData?.facilities.splice(index, 1);
    this.userData?.facilities.unshift(facility);
    this._userDataService.updateCustomerData(this.userData);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 24,
  vars: 30,
  consts: [[1, "sidebar", "h-100", 3, "ngClass"], [1, "logo", "d-flex", "flex-column", "justify-content-between", "align-items-center", "py-4", 3, "ngClass"], [1, "sidebar-toggle", 3, "click"], [1, "material-icons"], [1, "flex-grow-1", "text-center", 3, "routerLink"], ["alt", "", 1, "img-fluid", "logo-img", 3, "src"], [1, "profile", "d-flex", "align-items-center", "gap-2", 3, "ngClass"], [1, "image", "d-flex", "justify-content-center", "align-items-center", "flex-shrink-0", "rounded-1", "overflow-hidden"], ["class", "icon material-icons", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], [1, "data"], [1, "name", "fw-semibold"], ["class", "reg-record mt-1", 4, "ngIf"], [1, "nav", "flex-column", "flex-nowrap", "gap-3", "mt-4", 3, "ngClass"], ["class", "link-group", 4, "ngIf"], [1, "icon", "material-icons"], ["alt", "", 3, "src"], [1, "reg-record", "mt-1"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "icon", "material-icons-outlined"], ["class", "dropdown-menu", 4, "ngIf"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "ngClass", "click"], [1, "link-group"], ["routerLinkActive", "active", 1, "nav-link", 3, "ngClass", "routerLink", "routerLinkActiveOptions"], [1, "icon"], [1, "material-icons-outlined"], [1, "nav-link-text"], [1, "simple", "menu-accordion", 3, "closeOthers", "isAnimated"], [3, "isOpen"], ["accordion-heading", "", 1, "accordion-heading", 3, "ngClass"], [1, "title"], [1, "title-text"], [1, "open", "material-icons-outlined"], [1, "close", "material-icons-outlined"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "ngClass", "routerLink"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SidebarComponent_Template_span_click_2_listener() {
        return ctx.hideSideBar = !ctx.hideSideBar;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SidebarComponent_i_9_Template, 2, 0, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SidebarComponent_img_10_Template, 1, 1, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10)(12, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SidebarComponent_div_14_Template, 6, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "nav", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SidebarComponent_div_16_Template, 7, 6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SidebarComponent_div_17_Template, 7, 6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SidebarComponent_div_18_Template, 40, 11, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, SidebarComponent_div_19_Template, 48, 14, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, SidebarComponent_div_20_Template, 28, 9, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SidebarComponent_div_21_Template, 7, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, SidebarComponent_div_22_Template, 7, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, SidebarComponent_div_23_Template, 8, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](19, _c3, ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](21, _c4, ctx.hideSideBar, !ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hideSideBar ? "menu" : "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](24, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.baseImagePath + "REGA_LOGO_2.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](25, _c6, ctx.hideSideBar, !ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.profileImageFile) == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.profileImageFile) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](28, _c7, !ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum == ctx.LoginUserTypeEnum.Employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginUserTypeEnum == ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isAccountant);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum == ctx.LoginUserTypeEnum.wafiPartner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__.AccordionPanelComponent],
  styles: [".sidebar[_ngcontent-%COMP%] {\n  border-inline-end: 1px solid rgba(0, 31, 33, 0.1);\n  background-color: white;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  line-height: 1;\n  cursor: pointer;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-inline: 1.25rem;\n  background-color: white;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 7rem;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  padding-block: 1rem;\n  padding-inline: 0.5rem;\n  background-color: #F5FCFC;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .reg-record[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration: none;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .reg-record[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration: none;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]    > .link-group-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 14px;\n  font-weight: normal;\n  color: rgba(0, 31, 33, 0.4);\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  color: #667676;\n  transition: color 0.15s, font-weight 0.15s;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #001F21;\n  font-weight: bold;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #093266;\n  background-color: #F5FCFC;\n}\n.sidebar[_ngcontent-%COMP%]:not(.closed) {\n  min-width: 20rem;\n}\n@media screen and (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%]:not(.closed) {\n    position: fixed;\n    z-index: 1000;\n    inset-block: 0;\n  }\n}\n.sidebar.closed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-inline: 1rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  padding-block: 0.75rem;\n  padding-inline: 1.25rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.closed[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-link-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.closed[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .accordion-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.closed[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .accordion-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    ~ .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3NpZGViYXItY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zLWxheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0VBQ0EsdUJDQ007QUNBUjtBRkNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUVDSjtBRkNJO0VBQ0UsaUJBQUE7RUFDQSxjQ2lCSztBQ2hCWDtBRkdFO0VBQ0UsdUJBQUE7RUFDQSx1QkNiSTtBQ1lSO0FGR0k7RUFDRSxXQUFBO0FFRE47QUZLRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSx5QkNIUTtBQ0RaO0FGTUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBRUpOO0FGTU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUVKUjtBRk9NO0VBQ0UsaUJBQUE7QUVMUjtBRlNJO0VBQ0UsZUNjUztFRGJULHFCQUFBO0VBQ0EsY0NuQks7QUNZWDtBRlNNO0VBQ0UsZUNTTztFRFJQLHFCQUFBO0VBQ0EsY0N4Qkc7QUNpQlg7QUZZRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUVWSjtBRmFNO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUVBLGVDUk87RURTUCxtQkFBQTtFQUNBLDJCQUFBO0FFWlI7QUZlTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFDQSxjQ3BFRztFRHFFSCwwQ0FBQTtBRWRSO0FGZ0JRO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FFZFY7QUZpQlE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUVmVjtBRmlCVTtFQUNFLGlCQUFBO0VBQ0EsY0NqRUQ7QUNrRFg7QUZtQlE7RUFDRSxjQ2hHRjtFRGlHRSxpQkFBQTtBRWpCVjtBRm9CUTtFQUNFLGlCQUFBO0VBQ0EsY0M1RUM7RUQ2RUQseUJDaEZFO0FDOERaO0FGd0JFO0VBQ0UsZ0JBQUE7QUV0Qko7QUZ3Qkk7RUFIRjtJQUlJLGVBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFRXJCSjtBQUNGO0FGeUJJO0VBQ0Usb0JBQUE7QUV2Qk47QUZ5Qk07RUFDRSxhQUFBO0FFdkJSO0FGMkJJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBRXpCTjtBRjJCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FFekJSO0FGNEJNO0VBQ0UsYUFBQTtBRTFCUjtBRmlDVTtFQUNFLGFBQUE7QUUvQlo7QUZxQ1k7RUFDRSxhQUFBO0FFbkNkO0FGc0NZO0VBQ0UsYUFBQTtBRXBDZCIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgYm9yZGVyLWlubGluZS1lbmQ6IDFweCBzb2xpZCByZ2JhKCRibGFjaywgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXG4gIC5zaWRlYmFyLXRvZ2dsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBwYWRkaW5nLWlubGluZTogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgICAubG9nby1pbWcge1xuICAgICAgd2lkdGg6IDdyZW07XG4gICAgfVxuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gICAgcGFkZGluZy1pbmxpbmU6IC41cmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgLmltYWdlIHtcbiAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWctcmVjb3JkIHtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmF2Lm5hdiB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLmxpbmstZ3JvdXAge1xuICAgICAgPi5saW5rLWdyb3VwLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG5cbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBjb2xvcjogcmdiYSgkYmxhY2ssIDAuNCk7XG4gICAgICB9XG5cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMsIGZvbnQtd2VpZ2h0IC4xNXM7XG5cbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bm90KC5jbG9zZWQpIHtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICBpbnNldC1ibG9jazogMDtcbiAgICB9XG4gIH1cblxuICAmLmNsb3NlZCB7XG4gICAgLmxvZ28ge1xuICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG5cbiAgICAgIC5sb2dvLWltZyB7XG4gICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2ZpbGUge1xuICAgICAgcGFkZGluZy1ibG9jazogLjc1cmVtO1xuICAgICAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIC5kYXRhIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuYXYubmF2IHtcbiAgICAgIC5saW5rLWdyb3VwIHtcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAubmF2LWxpbmstdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvcmRpb24taGVhZGluZyB7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJn4uaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIuc2lkZWJhciB7XG4gIGJvcmRlci1pbmxpbmUtZW5kOiAxcHggc29saWQgcmdiYSgwLCAzMSwgMzMsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNpZGViYXIgLnNpZGViYXItdG9nZ2xlIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXRvZ2dsZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5zaWRlYmFyIC5sb2dvIHtcbiAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNpZGViYXIgLmxvZ28gLmxvZ28taW1nIHtcbiAgd2lkdGg6IDdyZW07XG59XG4uc2lkZWJhciAucHJvZmlsZSB7XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4uc2lkZWJhciAucHJvZmlsZSAuaW1hZ2Uge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5zaWRlYmFyIC5wcm9maWxlIC5pbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uc2lkZWJhciAucHJvZmlsZSAuaW1hZ2UgLmljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zaWRlYmFyIC5wcm9maWxlIC5yZWctcmVjb3JkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLnNpZGViYXIgLnByb2ZpbGUgLnJlZy1yZWNvcmQgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5zaWRlYmFyIG5hdi5uYXYge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNpZGViYXIgbmF2Lm5hdiAubGluay1ncm91cCA+IC5saW5rLWdyb3VwLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogcmdiYSgwLCAzMSwgMzMsIDAuNCk7XG59XG4uc2lkZWJhciBuYXYubmF2IC5saW5rLWdyb3VwIC5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGNvbG9yOiAjNjY3Njc2O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cywgZm9udC13ZWlnaHQgMC4xNXM7XG59XG4uc2lkZWJhciBuYXYubmF2IC5saW5rLWdyb3VwIC5uYXYtbGluay5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5zaWRlYmFyIG5hdi5uYXYgLmxpbmstZ3JvdXAgLm5hdi1saW5rIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNpZGViYXIgbmF2Lm5hdiAubGluay1ncm91cCAubmF2LWxpbmsgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uc2lkZWJhciBuYXYubmF2IC5saW5rLWdyb3VwIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAxRjIxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zaWRlYmFyIG5hdi5uYXYgLmxpbmstZ3JvdXAgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzA5MzI2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi5zaWRlYmFyOm5vdCguY2xvc2VkKSB7XG4gIG1pbi13aWR0aDogMjByZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lkZWJhcjpub3QoLmNsb3NlZCkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGluc2V0LWJsb2NrOiAwO1xuICB9XG59XG4uc2lkZWJhci5jbG9zZWQgLmxvZ28ge1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbn1cbi5zaWRlYmFyLmNsb3NlZCAubG9nbyAubG9nby1pbWcge1xuICB3aWR0aDogMi41cmVtO1xufVxuLnNpZGViYXIuY2xvc2VkIC5wcm9maWxlIHtcbiAgcGFkZGluZy1ibG9jazogMC43NXJlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG59XG4uc2lkZWJhci5jbG9zZWQgLnByb2ZpbGUgLmltYWdlIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn1cbi5zaWRlYmFyLmNsb3NlZCAucHJvZmlsZSAuZGF0YSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZWJhci5jbG9zZWQgbmF2Lm5hdiAubGluay1ncm91cCAubmF2LWxpbmsgLm5hdi1saW5rLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZGViYXIuY2xvc2VkIG5hdi5uYXYgLmxpbmstZ3JvdXAgLmFjY29yZGlvbi1oZWFkaW5nIC50aXRsZSAudGl0bGUtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZWJhci5jbG9zZWQgbmF2Lm5hdiAubGluay1ncm91cCAuYWNjb3JkaW9uLWhlYWRpbmcgLnRpdGxlIH4gLmljb24ge1xuICBkaXNwbGF5OiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 69159:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-layout/real-estate-contributions-layout-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateContributionsLayoutRoutingModule": () => (/* binding */ RealEstateContributionsLayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 5214);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);





const routes = [{
  path: '',
  component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: {
    breadcrumb: 'الرئيسية'
  },
  children: [{
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.realEstateContributionsFacilities,
    data: {
      breadcrumb: 'المنشأة'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_features_facilities_dataModels_national-address_model_ts-src_app_modu-8ff1cd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_real-estate-contributions-facilities_real-estate-contributions-facil-0ad5c6")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/real-estate-contributions-facilities/real-estate-contributions-facilities.module */ 57283)).then(m => m.RealEstateContributionsFacilitiesModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.realEstateContributionsQualifying,
    data: {
      breadcrumb: 'التأهيل'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_real-estate-contributions-qualifying_real-estate-contributions-quali-bb748a")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/real-estate-contributions-qualifying/real-estate-contributions-qualifying.module */ 20901)).then(m => m.RealEstateContributionsQualifyingModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.realEstateContributionsLicense,
    data: {
      breadcrumb: 'الترخيص'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_features_facilities_dataModels_national-address_model_ts-src_app_modu-8ff1cd"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_real-estate-contributions-license_real-estate-contributions-license_-577571")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/real-estate-contributions-license/real-estate-contributions-license.module */ 53644)).then(m => m.RealEstateContributionsLicenseModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.realEstateContributionUserManagement,
    data: {
      breadcrumb: 'إدارة المنشأة'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_real-estate-contribution-user-management_real-estate-contribution-us-d9d447")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/real-estate-contribution-user-management/real-estate-contribution-user-management.module */ 39529)).then(m => m.RealEstateContributionUserManagementModule)
  }, {
    path: '',
    redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.realEstateContributionsQualifying,
    pathMatch: 'full'
  }]
}];
class RealEstateContributionsLayoutRoutingModule {}
RealEstateContributionsLayoutRoutingModule.ɵfac = function RealEstateContributionsLayoutRoutingModule_Factory(t) {
  return new (t || RealEstateContributionsLayoutRoutingModule)();
};
RealEstateContributionsLayoutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RealEstateContributionsLayoutRoutingModule
});
RealEstateContributionsLayoutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RealEstateContributionsLayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 29365:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/real-estate-contributions-layout/real-estate-contributions-layout.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateContributionsLayoutModule": () => (/* binding */ RealEstateContributionsLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _real_estate_contributions_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./real-estate-contributions-layout-routing.module */ 69159);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ 5214);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 17102);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 78571);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 31832);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86793);








class RealEstateContributionsLayoutModule {}
RealEstateContributionsLayoutModule.ɵfac = function RealEstateContributionsLayoutModule_Factory(t) {
  return new (t || RealEstateContributionsLayoutModule)();
};
RealEstateContributionsLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: RealEstateContributionsLayoutModule
});
RealEstateContributionsLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _real_estate_contributions_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealEstateContributionsLayoutRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RealEstateContributionsLayoutModule, {
    declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["default"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
    // LanguageComponent,
    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__.NotificationsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _real_estate_contributions_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealEstateContributionsLayoutRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_real-estate-contributions-layout_real-estate-contributions-layout_module_ts.js.map