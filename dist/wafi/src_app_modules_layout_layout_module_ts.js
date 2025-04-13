"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_layout_layout_module_ts"],{

/***/ 88229:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/features/license-project-requests/services/lincense-request-project.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LincenseRequestProjectService": () => (/* binding */ LincenseRequestProjectService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);





class LincenseRequestProjectService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.projectDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.projectActiveRequestDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  getLicensesProjectRequestList(pageIndex, pageSize, facilityId) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    queryParams = queryParams.append('facilityId', facilityId);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LincenseProjectRequest.GetLincenseRequestProject}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  getLicenseProjectRequestPrice(licenseProjectId, licenseProjectType) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    if (licenseProjectId) {
      params = params.set('licenseProjectId', licenseProjectId);
    }
    params = params.set('licenseProjectType', licenseProjectType);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LincenseProjectRequest.GetLicenseProjectRequestPrice}`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  getLicenseRequestTypes() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LincenseProjectRequest.GetLicenseRequestType}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  getLicenseProjectByFacilityId(facilityId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProject.GetLicenseProjectByFacilityId + facilityId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  getLicenseProjectByType(facilityId, licenseProjectRequestTypeEnum) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProject.GetLicenseProjectByType + '/' + facilityId}?licenseProjectRequestTypeEnum=${licenseProjectRequestTypeEnum}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  getRequestType(licenseRequestId, facilityId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LincenseProjectRequest.GetUserRequestType}?requestId=${licenseRequestId}&facilityId=${facilityId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  getLicenseProjectDetailsById(licenseProjectId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectCancellationRequest.GetLicenseProjectDetails + licenseProjectId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.data;
    }));
  }
  createLicenseRequest(payload) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LincenseProjectRequest.AddLicenseProjectRequest}`, payload);
  }
  updateClearanceEngineeringConsultant(payload, id) {
    return this._httpClient.put(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectCancellationRequest.EditClearanceEngineering + id}`, payload);
  }
  updateClearanceAccountant(payload, id) {
    return this._httpClient.put(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectCancellationRequest.EditClearanceAccount + id}`, payload);
  }
  updateRealestateDeveloper(payload, id) {
    return this._httpClient.put(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseProjectCancellationRequest.EditeRealStateDeveloper + id}`, payload);
  }
  getSelectedActiveProjectRequestIdFromLocalStorage() {
    let projectDetails = localStorage.getItem('licenseProjectRequestId');
    return projectDetails;
  }
  clearActiveProjectRequestFromLocalStorage() {
    localStorage.removeItem('licenseProjectRequestId');
  }
  setSelectedActiveProjectRequestIdInLocalStorage(id) {
    localStorage.setItem('licenseProjectRequestId', id);
  }
  getSelectedRequestIdFromLocalStorage() {
    let projectDetails = localStorage.getItem('projectDetails');
    return projectDetails;
  }
  clearRequestFromLocalStorage() {
    localStorage.removeItem('projectDetails');
  }
  setSelectedRequestIdInLocalStorage(id) {
    localStorage.setItem('projectDetails', id);
  }
}
LincenseRequestProjectService.ɵfac = function LincenseRequestProjectService_Factory(t) {
  return new (t || LincenseRequestProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LincenseRequestProjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: LincenseRequestProjectService,
  factory: LincenseRequestProjectService.ɵfac
});

/***/ }),

/***/ 50211:
/*!**********************************************************************!*\
  !*** ./src/app/modules/layout/components/header/header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notifications/notifications.component */ 17121);








function HeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.baseUrl + (ctx_r0.userData == null ? null : ctx_r0.userData.profileImageFile == null ? null : ctx_r0.userData.profileImageFile.filePath), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
class HeaderComponent {
  constructor(_userDataService, _storageService, _router) {
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this._router = _router;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseURL}/`;
    this.baseImagePath = "./assets/images/layout/header/";
    this.userData = null;
    this.loginUserType = '';
    this.loginUserTypeEnum = null;
    this.localization = {
      beta: "اطلاق تجريبي"
    };
    this.links = src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration;
  }
  ngOnInit() {
    this.getLoginUserType();
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
  getLoginUserType() {
    this.loginUserType = this._storageService.getLoginUserType();
    this.loginUserTypeEnum = Number(this.loginUserType);
  }
  navigateToLogin() {
    // this._router.navigate([`${Configuration.modules.auth}/${Configuration.pages.auth.wafiService}`])
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
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 16,
  vars: 4,
  consts: [[1, "d-flex", "justify-content-end", "align-items-center", "gap-3"], [1, "notifications", "dropdown"], [1, "user", "dropdown"], ["class", "image", 4, "ngIf"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "icon", "material-icons"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "click"], [1, "image"], ["width", "200", "height", "200", 1, "d-block", "w-100", "h-100", 3, "src"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "expand_more");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ul", 6)(10, "li")(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userData == null ? null : ctx.userData.profileImageFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("routerLink", "", ctx.links.modules.userManagement, "/", ctx.links.pages.userManagement.editProfile, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__.NotificationsComponent],
  styles: ["header[_ngcontent-%COMP%] {\n  height: 4.5rem;\n  padding-inline: 1.5rem;\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 31, 33, 0.1);\n}\n\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding-inline-start: 1rem;\n  border-inline-start: 1px solid #667676;\n}\n.user[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid #667676;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 4px 8px rgba(0, 31, 33, 0.1);\n}\n.user[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.user[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #667676;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDeUVZO0VEeEVaLHNCQUFBO0VBRUEsdUJDSEk7RURJSiw2Q0FBQTtBQUZKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLHNDQUFBO0FBUko7QUFVSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBQVZSO0FBWVE7RUFDSSxpQkFBQTtBQVZaO0FBY0k7RUFDSSxxQkFBQTtFQUNBLGNDbkNHO0FEdUJYIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5cbmhlYWRlciB7XG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICBwYWRkaW5nLWlubGluZTogMS41cmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRibGFjaywgMC4xKTtcbn1cblxuLy8gbmF2IHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAvLyBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNnB4O1xuLy8gfVxuXG4udXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFyZW07XG4gICAgYm9yZGVyLWlubGluZS1zdGFydDogMXB4IHNvbGlkICRkYXJrZ3JheTtcblxuICAgIC5pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoJGJsYWNrLCAwLjEpO1xuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 13308:
/*!**********************************************************************!*\
  !*** ./src/app/modules/layout/components/layout/layout.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/enums/direction */ 76421);
/* harmony import */ var src_app_modules_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/models/login.model */ 81691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/language/language.service */ 75179);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/storage/storage.service */ 51077);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 78824);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 19228);
/* harmony import */ var _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/pilot-launch-hint/pilot-launch-hint.component */ 48088);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.component */ 50211);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 8311);















class LayoutComponent {
  constructor(_languageService, _userDataService, _storageService, _router, _toastrNotificatioService, titleService) {
    this._languageService = _languageService;
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this._router = _router;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.titleService = titleService;
    this.bodyDirection = src_app_core_models_enums_direction__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl;
    this.subscriptions = [];
    this.userData = null;
    this.appTitle = "الهيئة العامة للعقار ";
    this.loginUserType = "";
    this.loginUserTypeEnum = null;
  }
  setAppTitle() {
    this.titleService.setTitle(this.appTitle);
  }
  ngOnInit() {
    this.getLoginUserType();
    this.setAppTitle();
    this.observeDirectionChange();
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
          if (this.loginUserTypeEnum === src_app_modules_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__.LoginUserTypeEnum.delegateWafiPartner && res.facilities.length === 0) {
            this._toastrNotificatioService.showInfo("مفوض لا يوجد لديه منشأة !");
            this.logout();
          } else if (res.facilities && res.facilities.length === 0 && this.loginUserTypeEnum === src_app_modules_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__.LoginUserTypeEnum.wafiPartner) {
            this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.auth}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.auth.registration}`]);
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
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_6__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title));
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
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.bodyDirection);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Dir, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _shared_components_pilot_launch_hint_pilot_launch_hint_component__WEBPACK_IMPORTED_MODULE_8__.PilotLaunchHintComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.SidebarComponent],
  styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  background: #F7F8F8;\n}\n.layout[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2xheW91dC1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkNETTtBQ0FSO0FGSUk7RUFDRSxZQUFBO0VBQ0EsdUJDUEU7QUNLUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY3VzdG9tLXZhcmlhYmxlc1wiO1xuXG4ubGF5b3V0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG5cbiAgbWFpbiB7XG4gICAgZm9vdGVyIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi5sYXlvdXQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGN0Y4Rjg7XG59XG4ubGF5b3V0IG1haW4gZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 17121:
/*!************************************************************************************!*\
  !*** ./src/app/modules/layout/components/notifications/notifications.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/enums/request-type */ 38385);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/notifications/notifications.service */ 15954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/signalR/signal-r.service */ 869);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var src_app_modules_features_license_project_requests_services_lincense_request_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/features/license-project-requests/services/lincense-request-project.service */ 88229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);










function NotificationsComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.notViewedCount);
  }
}
function NotificationsComponent_ng_container_16_div_2_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r4.message.split("\u060C", 2)[1], " ");
  }
}
const _c0 = function (a0) {
  return {
    "new": a0
  };
};
function NotificationsComponent_ng_container_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "span", 5)(3, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0625\u0636\u0627\u0641\u0629 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 20)(8, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "calendar_month");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 23)(14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsComponent_ng_container_16_div_2_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const notification_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.onNotificationClicked(notification_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NotificationsComponent_ng_container_16_div_2_p_16_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, !notification_r4.isViewed));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 4, notification_r4.createdOn, "d/M/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r4.message.split("\u060C", 2)[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r4.message.split("\u060C", 2)[1]);
  }
}
function NotificationsComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NotificationsComponent_ng_container_16_div_2_Template, 17, 9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.notificationList);
  }
}
function NotificationsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u0644\u0627 \u064A\u0648\u062C\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
class NotificationsComponent {
  constructor(_notificationsService, _router, _signalRService, _userDataService, _toastrNotificatioService, licenseProjectService) {
    this._notificationsService = _notificationsService;
    this._router = _router;
    this._signalRService = _signalRService;
    this._userDataService = _userDataService;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.licenseProjectService = licenseProjectService;
    this.subscriptions = [];
    this.baseImagePath = "./assets/images/layout/header/";
    this.notificationList = null;
    this.qualifyingRequestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.requestDetails}`;
    this.licenseRequestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.license.lincenseDetails}`;
    this.licenseRequestTypeDeatilsRoute = `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.licenseProjectRequests}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
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
          case this.RequestType.LicenseProjectRequest:
            this.navigateToLicenseRequestTypeDetails(notification);
            break;
        }
      }
    }));
  }
  navigateToLicenseRequestTypeDetails(notification) {
    this.licenseProjectService.setSelectedActiveProjectRequestIdInLocalStorage(notification.requestId);
    if (this._router.url == this.licenseRequestTypeDeatilsRoute) {
      location.reload();
    } else {
      this._router.navigate([this.licenseRequestTypeDeatilsRoute]);
    }
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
  return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_signalR_signal_r_service__WEBPACK_IMPORTED_MODULE_3__.SignalRService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_5__.ToastrNotificatioService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_features_license_project_requests_services_lincense_request_project_service__WEBPACK_IMPORTED_MODULE_6__.LincenseRequestProjectService));
};
NotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: NotificationsComponent,
  selectors: [["app-notifications"]],
  decls: 23,
  vars: 6,
  consts: [["data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], ["class", "notice", 4, "ngIf"], [1, "material-icons-outlined"], ["role", "menu", 1, "notification-menu", "dropdown-menu", 3, "click"], [1, "notification-header"], [1, "icon"], [1, "title"], [1, "count"], [1, "mx-1"], [1, "notification-body"], [4, "ngIf"], [1, "notification-footer"], [1, "notification-item"], [1, "notification-link", 3, "routerLink"], [1, "backdrop"], [1, "notice"], [1, "notifications-list"], ["class", "notification-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "notification-item", 3, "ngClass"], [1, "item-header"], [1, "timing"], [1, "material-icons-outlined", "icon"], [1, "time"], [1, "item-body"], [1, "notification-link", 3, "click"], ["class", "note", 4, "ngIf"], [1, "note"], [1, "notification-item", "text-center"]],
  template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NotificationsComponent_span_1_Template, 3, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsComponent_Template_div_click_4_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, NotificationsComponent_ng_container_16_Template, 3, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, NotificationsComponent_ng_container_17_Template, 3, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "div", 14);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notViewedCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.notViewedCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notificationList && ctx.notificationList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notificationList && ctx.notificationList.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.Configuration.pages.notificationList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.localization.seeAll);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1024;\n  inset-block: 0;\n  inset-inline: 0;\n  background-color: rgba(0, 31, 33, 0.7);\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-toggle.show[_ngcontent-%COMP%]    ~ .backdrop[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: -0.25rem;\n  right: 0;\n  width: 1rem;\n  height: 1rem;\n  font-size: 10px;\n  color: white;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.notification-menu[_ngcontent-%COMP%] {\n  --bs-dropdown-padding-y: 0;\n  --bs-dropdown-zindex: 1025;\n  --bs-dropdown-border-radius: 0;\n  position: fixed !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  inset-inline-end: 0 !important;\n  transform: none !important;\n  width: 25rem;\n}\n@media (max-width: 767px) {\n  .notification-menu[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.notification-menu.show[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-inline-end: 1rem;\n  color: white;\n  background-color: #067647;\n  background-color: #005257;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-inline: 1rem;\n  color: white;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  font-size: 12px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-filter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-filter[_ngcontent-%COMP%]   .filter-by[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: #353B3B;\n  transition: all ease-in-out 0.15s;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-filter[_ngcontent-%COMP%]   .filter-by.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 0.75rem;\n  background-color: rgba(9, 50, 102, 0.1);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  border: 1px solid #BAE9EB;\n  border-radius: 0.5rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]    + .notification-item[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item.new[_ngcontent-%COMP%] {\n  border-inline-start-width: 4px;\n  border-inline-start-color: #093266;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.5rem;\n  background: #F7F8F8;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  background-color: #F5FCFC;\n  border-radius: 50%;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #093266;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%] {\n  display: flex;\n  margin-inline-start: auto;\n  font-size: 12px;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-inline-end: 0.25rem;\n  font-size: 1rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .notification-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  color: #353B3B;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-body[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 12px;\n  color: rgba(0, 31, 33, 0.5);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 31, 33, 0.05);\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.notification-menu[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: bold;\n  color: #093266;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX25vdGlmaWNhdGlvbnMtY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLHNDQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUk7RUFDRSxjQUFBO0FDRk47QURNRTtFQUNFLGlCQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVFc0JjO0VGckJkLFlFbkNNO0VGb0NOLGtCQUFBO0VBQ0EseUJFMUJTO0FEa0JYOztBRFdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEV0E7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFFQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBRUEsWUFBQTtBQ1ZGO0FEWUU7RUFiRjtJQWNJLFVBQUE7RUNURjtBQUNGO0FEV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNUSjtBRFlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsd0JBQUE7RUFDQSxZRXhFSTtFRnlFSix5QkU3REk7RUY4REoseUJFN0RRO0FEa0RaO0FEYUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUNaTjtBRGNNO0VBQ0UsZUFBQTtBQ1pSO0FEZ0JJO0VBQ0UsbUJBQUE7RUFDQSxZRTVGRTtBRDhFUjtBRGlCSTtFQUNFLHlCQUFBO0VBQ0EsZUUxQ1M7QUQyQmY7QURtQkU7RUFDRSxhQUFBO0FDakJKO0FEbUJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDakJOO0FEbUJNO0VBQ0UsYUFBQTtFQUNBLGNFL0dEO0VGZ0hDLGlDQUFBO0FDakJSO0FEbUJRO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLHVDQUFBO0FDbEJWO0FEdUJJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ3JCTjtBRHdCSTtFQUVFLHlCQUFBO0VBQ0EscUJFN0RJO0FEc0NWO0FEeUJNO0VBQ0UsbUJBQUE7QUN2QlI7QUQwQk07RUFDRSw4QkFBQTtFQUVBLGtDRW5IRztBRDBGWDtBRDRCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLG1CRW5KQTtBRHdIUjtBRDZCUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBR0EseUJFM0lFO0VGNElGLGtCQUFBO0FDOUJWO0FEZ0NVO0VBQ0UsZUU5RkY7RUZnR0UsY0U5SUQ7QUQrR1g7QURtQ1E7RUFDRSxlRXJISztBRG9GZjtBRG9DUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVFMUhLO0FEd0ZmO0FEb0NVO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDbENaO0FEdUNNO0VBQ0UsYUFBQTtBQ3JDUjtBRHVDUTtFQUNFLHFCQUFBO0VBQ0EsZUV6SUs7RUYwSUwsY0VqTUg7QUQ0SlA7QUR3Q1E7RUFDRSxrQkFBQTtFQUNBLGVFOUlLO0VGK0lMLDJCQUFBO0FDdENWO0FENENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUMxQ0o7QUQ0Q0k7RUFDRSxrQkFBQTtBQzFDTjtBRDRDTTtFQUNFLHFCQUFBO0VBQ0EsZUVoS087RUZpS1AsaUJBQUE7RUFFQSxjRWpNRztBRHNKWCIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDI0O1xuICBpbnNldC1ibG9jazogMDtcbiAgaW5zZXQtaW5saW5lOiAwO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAuNyk7XG59XG5cbi5kcm9wZG93bi10b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5zaG93IHtcbiAgICAmfi5iYWNrZHJvcCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5ub3RpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLS4yNXJlbTtcbiAgcmlnaHQ6IDA7XG5cbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcblxuICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuICBjb2xvcjogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1taWQ7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm5vdGlmaWNhdGlvbi1tZW51IHtcbiAgLS1icy1kcm9wZG93bi1wYWRkaW5nLXk6IDA7XG4gIC0tYnMtZHJvcGRvd24temluZGV4OiAxMDI1O1xuICAtLWJzLWRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDA7XG5cbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaW5zZXQtaW5saW5lLWVuZDogMCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcblxuICB3aWR0aDogMjVyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gICYuc2hvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMXJlbTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuXG4gICAgLmljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgd2lkdGg6IDQuNXJlbTtcbiAgICAgIGhlaWdodDogNC41cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIC4xKTtcblxuICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4taW5saW5lOiAxcmVtO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAuY291bnQge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICB9XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWJvZHkge1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAubm90aWZpY2F0aW9uLWZpbHRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5maWx0ZXItYnkge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMTVzO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyouNzU7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFya2dyZWVuLCAuMSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtZGFyaywgLjEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuICAgICAgJisubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAuNzVyZW07XG4gICAgICB9XG5cbiAgICAgICYubmV3IHtcbiAgICAgICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogNHB4O1xuICAgICAgICAvLyBib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgICBib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgIH1cblxuICAgICAgLml0ZW0taGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDtcblxuICAgICAgICA+Lmljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIGhlaWdodDogMnJlbTtcblxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGdyZWVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkc2l6ZS1tZDtcbiAgICAgICAgICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcblxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAgIC5ub3RpZmljYXRpb24tbGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgICBjb2xvcjogJGRhcms7XG4gICAgICAgIH1cblxuICAgICAgICAubm90ZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKCRoZWFkaW5ncy1jb2xvciwgLjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgkYmxhY2ssIC4wNSk7XG5cbiAgICAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAubm90aWZpY2F0aW9uLWxpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDI0O1xuICBpbnNldC1ibG9jazogMDtcbiAgaW5zZXQtaW5saW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC43KTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcm9wZG93bi10b2dnbGUuc2hvdyB+IC5iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRyb3Bkb3duLXRvZ2dsZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubm90aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4yNXJlbTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEIyQkQ7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm5vdGlmaWNhdGlvbi1tZW51IHtcbiAgLS1icy1kcm9wZG93bi1wYWRkaW5nLXk6IDA7XG4gIC0tYnMtZHJvcGRvd24temluZGV4OiAxMDI1O1xuICAtLWJzLWRyb3Bkb3duLWJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGluc2V0LWlubGluZS1lbmQ6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubm90aWZpY2F0aW9uLW1lbnUge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbi5ub3RpZmljYXRpb24tbWVudS5zaG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3NjQ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjU3O1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24taGVhZGVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDJyZW07XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1oZWFkZXIgLnRpdGxlIHtcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24taGVhZGVyIC5jb3VudCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWZpbHRlciAuZmlsdGVyLWJ5IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICMzNTNCM0I7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjE1cztcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkgLm5vdGlmaWNhdGlvbi1maWx0ZXIgLmZpbHRlci1ieS5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCA1MCwgMTAyLCAwLjEpO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9ucy1saXN0IHtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JBRTlFQjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gKyAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0ubmV3IHtcbiAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogNHB4O1xuICBib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yOiAjMDkzMjY2O1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNGN0Y4Rjg7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1oZWFkZXIgPiAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0taGVhZGVyID4gLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0taGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkgLm5vdGlmaWNhdGlvbi1pdGVtIC5pdGVtLWhlYWRlciAudGltaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0taGVhZGVyIC50aW1pbmcgLmljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tYm9keSAubm90aWZpY2F0aW9uLWl0ZW0gLml0ZW0tYm9keSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1ib2R5IC5ub3RpZmljYXRpb24taXRlbSAuaXRlbS1ib2R5IC5ub3RpZmljYXRpb24tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzM1M0IzQjtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWJvZHkgLm5vdGlmaWNhdGlvbi1pdGVtIC5pdGVtLWJvZHkgLm5vdGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjUpO1xufVxuLm5vdGlmaWNhdGlvbi1tZW51IC5ub3RpZmljYXRpb24tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMzEsIDMzLCAwLjA1KTtcbn1cbi5ub3RpZmljYXRpb24tbWVudSAubm90aWZpY2F0aW9uLWZvb3RlciAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLW1lbnUgLm5vdGlmaWNhdGlvbi1mb290ZXIgLm5vdGlmaWNhdGlvbi1pdGVtIC5ub3RpZmljYXRpb24tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwOTMyNjY7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 65489:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/layout/components/request-details-redirection/request-details-redirection.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestDetailsRedirectionComponent": () => (/* binding */ RequestDetailsRedirectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_modules_features_license_project_requests_services_lincense_request_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/features/license-project-requests/services/lincense-request-project.service */ 88229);
/* harmony import */ var src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/enums/request-type */ 38385);






class RequestDetailsRedirectionComponent {
  constructor() {
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this._router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.licenseProjectService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_modules_features_license_project_requests_services_lincense_request_project_service__WEBPACK_IMPORTED_MODULE_1__.LincenseRequestProjectService);
    this.qualifyingRequestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestDetails}`;
    this.licenseRequestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.lincenseDetails}`;
    this.licenseRequestTypeDeatilsRoute = `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.licenseProjectRequests}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
  }
  ngOnInit() {
    const requestType = this.activatedRoute.snapshot.params['requestType'];
    const requestId = this.activatedRoute.snapshot.params['requestId'];
    this.NavigateRequestDetails(requestType, requestId);
  }
  NavigateRequestDetails(requestTypeId, requestId) {
    debugger;
    switch (+requestTypeId) {
      case src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_2__.RequestType.license:
        this.navigateToLicenseDetails(requestId);
        break;
      case src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_2__.RequestType.qualification:
        this.navigateToQualificationDetails(requestId);
        break;
      case src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_2__.RequestType.services:
        this.navigateToServicesDetails(requestId);
        break;
      case src_app_shared_models_enums_request_type__WEBPACK_IMPORTED_MODULE_2__.RequestType.LicenseProjectRequest:
        this.navigateToLicenseRequestTypeDetails(requestId);
        break;
    }
  }
  navigateToServicesDetails(requestId) {
    // set request id in local storage 
    // navigate to services page enshallah :D 
    console.log("navigateToServicesDetails");
  }
  navigateToQualificationDetails(requestId) {
    // set request id in local storage 
    // navigate to qualification details page
    console.log("navigateToQualificationDetails");
    this.setSelectedRequestIdInLocalStorage(requestId);
    this.routeToQualifyingRequestDetails();
  }
  navigateToLicenseDetails(requestId) {
    // set request id in local storage 
    // navigate to license details page 
    console.log("navigateToLicenseDetails");
    this.setLicenseRequestIdInLocalStorage(requestId);
    this.routeTolicenseRequestDetailsRoute();
  }
  setLicenseRequestIdInLocalStorage(licenseRequestId) {
    localStorage.setItem('licenseRequestId', licenseRequestId);
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
  navigateToLicenseRequestTypeDetails(requestId) {
    this.licenseProjectService.setSelectedActiveProjectRequestIdInLocalStorage(requestId);
    if (this._router.url == this.licenseRequestTypeDeatilsRoute) {
      location.reload();
    } else {
      this._router.navigate([this.licenseRequestTypeDeatilsRoute]);
    }
  }
  ngOnDestroy() {}
}
RequestDetailsRedirectionComponent.ɵfac = function RequestDetailsRedirectionComponent_Factory(t) {
  return new (t || RequestDetailsRedirectionComponent)();
};
RequestDetailsRedirectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RequestDetailsRedirectionComponent,
  selectors: [["app-request-details-redirection"]],
  decls: 2,
  vars: 0,
  template: function RequestDetailsRedirectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "request-details-redirection works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8311:
/*!************************************************************************!*\
  !*** ./src/app/modules/layout/components/sidebar/sidebar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var src_app_modules_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/models/login.model */ 81691);
/* harmony import */ var src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/features/qualifying/dataModels/enum/qualification-request-type */ 81984);
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
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SidebarComponent_div_14_ul_5_li_1_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const facility_r15 = restoredCtx.$implicit;
      const i_r17 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.updateDefaultFacility(facility_r15, i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facility_r15 = ctx.$implicit;
    const first_r16 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, first_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", facility_r15.commercialRegisterNumber, " ");
  }
}
function SidebarComponent_div_14_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SidebarComponent_div_14_ul_5_li_1_Template, 3, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r13.userData.facilities);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "business");
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
function SidebarComponent_div_19_a_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 38)(1, "span", 26)(2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u062D\u0627\u0633\u0628 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r20.links.charteredaccountprojectlist)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c2));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "a", 36)(35, "span", 26)(36, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "new_releases");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u062E\u0635");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "a", 36)(41, "span", 26)(42, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, SidebarComponent_div_19_a_46_Template, 6, 3, "a", 37);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c1, ctx_r6.hideSideBar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.licenseTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.lincenseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.lincenseCertificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.renewLicensesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r6.links.license + "/" + ctx_r6.links.lincenseRequestApprovals);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isAccountant);
  }
}
function SidebarComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "accordion", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "accordion-group", 30)(4, "div", 31)(5, "h6", 32)(6, "span", 26)(7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "card_membership");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0623\u0639\u062A\u064A\u0627\u062F\u064A\u0629 \u0648\u0627\u0644\u063A\u064A\u0631 \u0627\u0639\u062A\u064A\u0627\u062F\u064A\u0629");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r7.currentUrl.includes("/" + ctx_r7.links.lincenceProjectRequest))("isOpen", !ctx_r7.hideSideBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r7.hideSideBar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r7.links.lincenceProjectRequest + "/" + ctx_r7.links.createLincenceProjectRequestList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r7.links.lincenceProjectRequest + "/" + ctx_r7.links.lincenceProjectRequestList);
  }
}
function SidebarComponent_div_21_Template(rf, ctx) {
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
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r8.currentUrl.includes("/" + ctx_r8.links.license))("isOpen", !ctx_r8.hideSideBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c1, ctx_r8.hideSideBar));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r8.links.license + "/" + ctx_r8.links.employeeCreateLicense);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r8.links.license + "/" + ctx_r8.links.employeeLicenseList);
  }
}
function SidebarComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "accordion", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "accordion-group", 30)(4, "div", 39)(5, "h6", 32)(6, "span", 26)(7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "local_police");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0647\u0646\u062F\u0633\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 26)(11, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 36)(16, "span", 26)(17, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r9.currentUrl.includes("/" + ctx_r9.links.engineeringManagement))("isOpen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r9.links.license + "/" + ctx_r9.links.projectList);
  }
}
function SidebarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 36)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0639\u0642\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r10.links.license + "/" + ctx_r10.links.contractdocumentation);
  }
}
function SidebarComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 40)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r11.hideSideBar))("routerLink", "/" + ctx_r11.links.userManagement + "/" + ctx_r11.links.userProfile);
  }
}
function SidebarComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 40)(2, "span", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0648\u0627\u0644\u0628\u0644\u0627\u063A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r12.hideSideBar))("routerLink", "/" + ctx_r12.links.complaintsAndReport + "/" + ctx_r12.links.complaintsReports);
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
  constructor(_languageService, _userDataService, _storageService, router) {
    this._languageService = _languageService;
    this._userDataService = _userDataService;
    this._storageService = _storageService;
    this.router = router;
    this.hideSideBar = true;
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseURL}/`;
    this.loginUserType = '';
    this.loginUserTypeEnum = null;
    this.LoginUserTypeEnum = src_app_modules_auth_models_login_model__WEBPACK_IMPORTED_MODULE_2__.LoginUserTypeEnum;
    this.isAccountant = false;
    this.isEngineer = false;
    this.isDeveloper = false;
    this.currentUrl = '';
    this.subscriptions = [];
    this.panelOpenState = false;
    this.baseImagePath = './assets/images/layout/sidebar/';
    this.userData = null;
    this.links = {
      complaintsAndReport: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.complaintsAndReport}`,
      complaintsReports: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.complaintsAndReport.complaintsReports}`,
      charteredaccountprojectlist: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.charteredaccount}`,
      qualifying: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying}`,
      qualifyingReqs: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requests}`,
      qualifyingReqList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestList}`,
      qualifyingCertificates: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.qualifyingCertificates}`,
      facilities: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityDashboard}`,
      facilityProfile: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityProfile}`,
      dashboard: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.Dashboard}`,
      userManagement: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.userManagement}`,
      userProfile: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.userManagement.userProfile}`,
      licenseUnderStudy: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.licenseUnderStudy}`,
      license: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license}`,
      licenseTypes: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.lincenseTypes}`,
      lincenseList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.lincenseList}`,
      lincenseCertificates: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.lincenseCertificates}`,
      lincenseRequestApprovals: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.lincenseRequestApprovals}`,
      projectList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.projectList}`,
      renewLicensesList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.RenewLicensesList}`,
      renewQualifyingList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewQualifyingList}`,
      training: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.training}`,
      trainingTypes: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.training.trainingTypes}`,
      trainingList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.training.trainingList}`,
      trainingCertificates: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.training.trainingCertificates}`,
      buyerList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.buyerList}`,
      contractdocumentation: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.contractdocumentation}`,
      licensecertificatetemplate: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.licensecertificatetemplate}`,
      zones: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.zones}`,
      engineeringManagement: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.engineeringManagement}`,
      employeeCreateLicense: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.employeeCreateLicense}`,
      employeeLicenseList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.license.employeeLicenseList}`,
      lincenceProjectRequest: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.licenseProjectRequests}`,
      lincenceProjectRequestList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
      createLincenceProjectRequestList: `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.licenseProjectRequests.licenseProjectRequests}`
    };
  }
  ngOnInit() {
    this.getLoginUserType();
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
      this.isAccountant = res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__.QualificationType.accountantQualificationRequest;
      this.isEngineer = res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__.QualificationType.engineeringConsultantQualificationRequest;
      this.isDeveloper = res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__.QualificationType.realStateDeveloperQualificationRequest || res == src_app_modules_features_qualifying_dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__.QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
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
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 26,
  vars: 32,
  consts: [[1, "sidebar", "h-100", 3, "ngClass"], [1, "logo", "d-flex", "flex-column", "justify-content-between", "align-items-center", "py-4", 3, "ngClass"], [1, "sidebar-toggle", 3, "click"], [1, "material-icons"], [1, "flex-grow-1", "text-center", 3, "routerLink"], ["alt", "", 1, "img-fluid", "logo-img", 3, "src"], [1, "profile", "d-flex", "align-items-center", "gap-2", 3, "ngClass"], [1, "image", "d-flex", "justify-content-center", "align-items-center", "flex-shrink-0", "rounded-1", "overflow-hidden"], ["class", "icon material-icons", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], [1, "data"], [1, "name", "fw-semibold"], ["class", "reg-record mt-1", 4, "ngIf"], [1, "nav", "flex-column", "flex-nowrap", "gap-3", "mt-4", 3, "ngClass"], ["class", "link-group", 4, "ngIf"], [1, "icon", "material-icons"], ["alt", "", 3, "src"], [1, "reg-record", "mt-1"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "icon", "material-icons-outlined"], ["class", "dropdown-menu", 4, "ngIf"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "ngClass", "click"], [1, "link-group"], ["routerLinkActive", "active", 1, "nav-link", 3, "ngClass", "routerLink", "routerLinkActiveOptions"], [1, "icon"], [1, "material-icons-outlined"], [1, "nav-link-text"], [1, "simple", "menu-accordion", 3, "closeOthers", "isAnimated"], [3, "isOpen"], ["accordion-heading", "", 1, "accordion-heading", 3, "ngClass"], [1, "title"], [1, "title-text"], [1, "open", "material-icons-outlined"], [1, "close", "material-icons-outlined"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["accordion-heading", "", 1, "accordion-heading"], ["routerLinkActive", "active", 1, "nav-link", 3, "ngClass", "routerLink"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10)(12, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SidebarComponent_div_14_Template, 6, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "nav", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SidebarComponent_div_16_Template, 7, 6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SidebarComponent_div_17_Template, 7, 6, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SidebarComponent_div_18_Template, 40, 11, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, SidebarComponent_div_19_Template, 47, 13, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, SidebarComponent_div_20_Template, 28, 9, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SidebarComponent_div_21_Template, 28, 9, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, SidebarComponent_div_22_Template, 21, 5, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, SidebarComponent_div_23_Template, 7, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, SidebarComponent_div_24_Template, 7, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, SidebarComponent_div_25_Template, 7, 4, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c3, ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](23, _c4, ctx.hideSideBar, !ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hideSideBar ? "menu" : "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](26, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.baseImagePath + "REGA_LOGO_2.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](27, _c6, ctx.hideSideBar, !ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.profileImageFile) == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.profileImageFile) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](30, _c7, !ctx.hideSideBar));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.isDeveloper && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum == ctx.LoginUserTypeEnum.Employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEngineer);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginUserTypeEnum == ctx.LoginUserTypeEnum.finalBeneficiary);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum == ctx.LoginUserTypeEnum.wafiPartner);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.userData == null ? null : ctx.userData.isEmployee) && ctx.loginUserTypeEnum != ctx.LoginUserTypeEnum.finalBeneficiary);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__.AccordionPanelComponent],
  styles: [".sidebar[_ngcontent-%COMP%] {\n  border-inline-end: 1px solid rgba(0, 31, 33, 0.1);\n  background-color: white;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  line-height: 1;\n  cursor: pointer;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-inline: 1.25rem;\n  background-color: white;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 7rem;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  padding-block: 1rem;\n  padding-inline: 0.5rem;\n  background-color: #F5FCFC;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .reg-record[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration: none;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .reg-record[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration: none;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]    > .link-group-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 1rem;\n  font-size: 14px;\n  font-weight: normal;\n  color: rgba(0, 31, 33, 0.4);\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  color: #667676;\n  transition: color 0.15s, font-weight 0.15s;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #093266;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #001F21;\n  font-weight: bold;\n}\n.sidebar[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #093266;\n  background-color: #F5FCFC;\n}\n.sidebar[_ngcontent-%COMP%]:not(.closed) {\n  min-width: 20rem;\n}\n@media screen and (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%]:not(.closed) {\n    position: fixed;\n    z-index: 1000;\n    inset-block: 0;\n  }\n}\n.sidebar.closed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-inline: 1rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  padding-block: 0.75rem;\n  padding-inline: 1.25rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.sidebar.closed[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.closed[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-link-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.closed[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .accordion-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.closed[_ngcontent-%COMP%]   nav.nav[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   .accordion-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    ~ .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3NpZGViYXItY29udGVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBQTtFQUNBLHVCQ0NNO0FDQVI7QUZDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FFQ0o7QUZDSTtFQUNFLGlCQUFBO0VBQ0EsY0NpQks7QUNoQlg7QUZHRTtFQUNFLHVCQUFBO0VBQ0EsdUJDYkk7QUNZUjtBRkdJO0VBQ0UsV0FBQTtBRUROO0FGS0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEseUJDSFE7QUNEWjtBRk1JO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUVKTjtBRk1NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFSlI7QUZPTTtFQUNFLGlCQUFBO0FFTFI7QUZTSTtFQUNFLGVDY1M7RURiVCxxQkFBQTtFQUNBLGNDbkJLO0FDWVg7QUZTTTtFQUNFLGVDU087RURSUCxxQkFBQTtFQUNBLGNDeEJHO0FDaUJYO0FGWUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FFVko7QUZhTTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFFQSxlQ1JPO0VEU1AsbUJBQUE7RUFDQSwyQkFBQTtBRVpSO0FGZU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0EsY0NwRUc7RURxRUgsMENBQUE7QUVkUjtBRmdCUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRWRWO0FGaUJRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FFZlY7QUZpQlU7RUFDRSxpQkFBQTtFQUNBLGNDakVEO0FDa0RYO0FGbUJRO0VBQ0UsY0NoR0Y7RURpR0UsaUJBQUE7QUVqQlY7QUZvQlE7RUFDRSxpQkFBQTtFQUNBLGNDNUVDO0VENkVELHlCQ2hGRTtBQzhEWjtBRndCRTtFQUNFLGdCQUFBO0FFdEJKO0FGd0JJO0VBSEY7SUFJSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUVyQko7QUFDRjtBRnlCSTtFQUNFLG9CQUFBO0FFdkJOO0FGeUJNO0VBQ0UsYUFBQTtBRXZCUjtBRjJCSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUV6Qk47QUYyQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRXpCUjtBRjRCTTtFQUNFLGFBQUE7QUUxQlI7QUZpQ1U7RUFDRSxhQUFBO0FFL0JaO0FGcUNZO0VBQ0UsYUFBQTtBRW5DZDtBRnNDWTtFQUNFLGFBQUE7QUVwQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIGJvcmRlci1pbmxpbmUtZW5kOiAxcHggc29saWQgcmdiYSgkYmxhY2ssIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAuc2lkZWJhci10b2dnbGUge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXG4gICAgLmxvZ28taW1nIHtcbiAgICAgIHdpZHRoOiA3cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9maWxlIHtcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICAgIHBhZGRpbmctaW5saW5lOiAuNXJlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIC5pbWFnZSB7XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVnLXJlY29yZCB7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5hdi5uYXYge1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5saW5rLWdyb3VwIHtcbiAgICAgID4ubGluay1ncm91cC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAwLjQpO1xuICAgICAgfVxuXG4gICAgICAubmF2LWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzLCBmb250LXdlaWdodCAuMTVzO1xuXG4gICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm5vdCguY2xvc2VkKSB7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgaW5zZXQtYmxvY2s6IDA7XG4gICAgfVxuICB9XG5cbiAgJi5jbG9zZWQge1xuICAgIC5sb2dvIHtcbiAgICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuXG4gICAgICAubG9nby1pbWcge1xuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9maWxlIHtcbiAgICAgIHBhZGRpbmctYmxvY2s6IC43NXJlbTtcbiAgICAgIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuZGF0YSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmF2Lm5hdiB7XG4gICAgICAubGluay1ncm91cCB7XG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgLm5hdi1saW5rLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb3JkaW9uLWhlYWRpbmcge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZ+Lmljb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLnNpZGViYXIge1xuICBib3JkZXItaW5saW5lLWVuZDogMXB4IHNvbGlkIHJnYmEoMCwgMzEsIDMzLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXRvZ2dsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZWJhciAuc2lkZWJhci10b2dnbGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uc2lkZWJhciAubG9nbyB7XG4gIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlYmFyIC5sb2dvIC5sb2dvLWltZyB7XG4gIHdpZHRoOiA3cmVtO1xufVxuLnNpZGViYXIgLnByb2ZpbGUge1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xufVxuLnNpZGViYXIgLnByb2ZpbGUgLmltYWdlIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4uc2lkZWJhciAucHJvZmlsZSAuaW1hZ2UgaW1nIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLnNpZGViYXIgLnByb2ZpbGUgLmltYWdlIC5pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uc2lkZWJhciAucHJvZmlsZSAucmVnLXJlY29yZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5zaWRlYmFyIC5wcm9maWxlIC5yZWctcmVjb3JkIC5kcm9wZG93bi10b2dnbGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uc2lkZWJhciBuYXYubmF2IHtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5zaWRlYmFyIG5hdi5uYXYgLmxpbmstZ3JvdXAgPiAubGluay1ncm91cC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjQpO1xufVxuLnNpZGViYXIgbmF2Lm5hdiAubGluay1ncm91cCAubmF2LWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogIzY2NzY3NjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMsIGZvbnQtd2VpZ2h0IDAuMTVzO1xufVxuLnNpZGViYXIgbmF2Lm5hdiAubGluay1ncm91cCAubmF2LWxpbmsuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uc2lkZWJhciBuYXYubmF2IC5saW5rLWdyb3VwIC5uYXYtbGluayAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zaWRlYmFyIG5hdi5uYXYgLmxpbmstZ3JvdXAgLm5hdi1saW5rIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLnNpZGViYXIgbmF2Lm5hdiAubGluay1ncm91cCAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMUYyMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2lkZWJhciBuYXYubmF2IC5saW5rLWdyb3VwIC5uYXYtbGluay5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwOTMyNjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4uc2lkZWJhcjpub3QoLmNsb3NlZCkge1xuICBtaW4td2lkdGg6IDIwcmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXI6bm90KC5jbG9zZWQpIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBpbnNldC1ibG9jazogMDtcbiAgfVxufVxuLnNpZGViYXIuY2xvc2VkIC5sb2dvIHtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG59XG4uc2lkZWJhci5jbG9zZWQgLmxvZ28gLmxvZ28taW1nIHtcbiAgd2lkdGg6IDIuNXJlbTtcbn1cbi5zaWRlYmFyLmNsb3NlZCAucHJvZmlsZSB7XG4gIHBhZGRpbmctYmxvY2s6IDAuNzVyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxLjI1cmVtO1xufVxuLnNpZGViYXIuY2xvc2VkIC5wcm9maWxlIC5pbWFnZSB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uc2lkZWJhci5jbG9zZWQgLnByb2ZpbGUgLmRhdGEge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZGViYXIuY2xvc2VkIG5hdi5uYXYgLmxpbmstZ3JvdXAgLm5hdi1saW5rIC5uYXYtbGluay10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaWRlYmFyLmNsb3NlZCBuYXYubmF2IC5saW5rLWdyb3VwIC5hY2NvcmRpb24taGVhZGluZyAudGl0bGUgLnRpdGxlLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZGViYXIuY2xvc2VkIG5hdi5uYXYgLmxpbmstZ3JvdXAgLmFjY29yZGlvbi1oZWFkaW5nIC50aXRsZSB+IC5pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 50450:
/*!*********************************************************!*\
  !*** ./src/app/modules/layout/layout-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ 13308);
/* harmony import */ var src_app_shared_pages_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pages/notification-list/notification-list.component */ 63668);
/* harmony import */ var _components_request_details_redirection_request_details_redirection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request-details-redirection/request-details-redirection.component */ 65489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);







const routes = [{
  path: '',
  component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: {
    breadcrumb: 'الرئيسية'
  },
  children: [{
    path: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.viewRequestDeatils}/:requestType/:requestId`,
    component: _components_request_details_redirection_request_details_redirection_component__WEBPACK_IMPORTED_MODULE_3__.RequestDetailsRedirectionComponent
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.notificationList,
    component: src_app_shared_pages_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_2__.NotificationListComponent
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying,
    data: {
      breadcrumb: 'التأهيل'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_features_qualifying_components_request-validation-popup_request-valid-6339e0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_qualifying_qualifying_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/qualifying/qualifying.module */ 79554)).then(m => m.QualifyingModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities,
    data: {
      breadcrumb: 'المنشأة'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_features_facilities_services_facilityProfile_national-address-service-236471"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_facilities_facilities_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/facilities/facilities.module */ 29841)).then(m => m.FacilitiesModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.license,
    data: {
      breadcrumb: 'الترخيص'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_features_facilities_services_facilityProfile_national-address-service-236471"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_license_license_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/license/license.module */ 90757)).then(m => m.LicenseModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.licenseProjectRequests,
    data: {
      breadcrumb: 'الطلبات الاعتيادية والغير اعتيادية'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_features_qualifying_components_request-validation-popup_request-valid-6339e0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_license-project-requests_license-project-requests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/license-project-requests/license-project-requests.module */ 79240)).then(m => m.LicenseProjectRequestsModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.training,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_features_training_training_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../features/training/training.module */ 16608)).then(m => m.TrainingModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.userManagement,
    data: {
      breadcrumb: 'إدارة المنشأة '
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_features_user-management_user-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/user-management/user-management.module */ 61647)).then(m => m.UserManagementModule)
  }, {
    path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.complaintsAndReport,
    data: {
      breadcrumb: ' الشكاوى والبلاغات'
    },
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_features_complaints-and-reports_complaints-and-reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../features/complaints-and-reports/complaints-and-reports.module */ 78660)).then(m => m.ComplaintsAndReportsModule)
  },
  // {
  //   path: Configuration.modules.engineeringManagement,
  //   data: {breadcrumb : 'الإدارة الهندسية'},
  //   loadChildren: () =>
  //     import('../features/engineering-management/engineering-management.module').then((m) => m.EngineeringManagementModule),
  // },
  {
    path: '',
    redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities,
    pathMatch: 'full'
  }]
}];
class LayoutRoutingModule {}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) {
  return new (t || LayoutRoutingModule)();
};
LayoutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: LayoutRoutingModule
});
LayoutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 91855:
/*!*************************************************!*\
  !*** ./src/app/modules/layout/layout.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-routing.module */ 50450);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ 13308);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 50211);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 8311);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 17121);
/* harmony import */ var _features_license_project_requests_services_lincense_request_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/license-project-requests/services/lincense-request-project.service */ 88229);
/* harmony import */ var _components_request_details_redirection_request_details_redirection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/request-details-redirection/request-details-redirection.component */ 65489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86793);





// import { TranslateModule } from '@ngx-translate/core';

// import { LanguageComponent } from './components/header/language/language.component';




class LayoutModule {}
LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};
LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_features_license_project_requests_services_lincense_request_project_service__WEBPACK_IMPORTED_MODULE_6__.LincenseRequestProjectService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule,
  // TranslateModule.forChild(),
  src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["default"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
    // LanguageComponent,
    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__.NotificationsComponent, _components_request_details_redirection_request_details_redirection_component__WEBPACK_IMPORTED_MODULE_7__.RequestDetailsRedirectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule,
    // TranslateModule.forChild(),
    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_layout_layout_module_ts.js.map