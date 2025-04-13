"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["src_app_modules_features_qualifying_qualifying_module_ts"],{

/***/ 65187:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/accountant-certificate/accountant-certificate.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountantCertificateComponent": () => (/* binding */ AccountantCertificateComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);





class AccountantCertificateComponent {
  get QualificationRequestTypeCodeEnum() {
    return _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__.QualificationRequestTypeCode;
  }
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum;
  }
  ngOnInit() {
    this.qualificationRequestType = _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum[this.certificateData.qualificationRequestType];
    this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType;
  }
  getCertificatePeriod(period) {
    switch (period) {
      case 1:
        return "عام";
      case 2:
        return "عامين";
      case 3:
        return "ثلاثة أعوام";
    }
    return "عام";
  }
  constructor() {
    this.qualificationRequestType = '';
  }
}
AccountantCertificateComponent.ɵfac = function AccountantCertificateComponent_Factory(t) {
  return new (t || AccountantCertificateComponent)();
};
AccountantCertificateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccountantCertificateComponent,
  selectors: [["app-accountant-certificate"]],
  inputs: {
    className: "className",
    certificateData: "certificateData"
  },
  decls: 37,
  vars: 11,
  consts: [["dir", "rtl", 1, "cetificate"], [1, "cetificate-layout"], [1, "cert-header"], [1, "logo"], ["src", "/assets/images/qualifying/certs/logo.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/top-pattern.svg", "alt", "", 1, "top-pattern"], [1, "data", "text-center"], [1, "title", "text-darkteal"], [1, "text", "text-gray"], [1, "text", "text-teal"], [1, "date", "text-darkteal"], [1, "expiration", "text-center"], ["src", "/assets/images/qualifying/certs/stamp-pattern.png", "alt", "", 1, "stamp-pattern", "img-fluid"], [1, "info"], [1, "title", "text-teal"], [1, "text"], [1, "text-darkblue"], [1, "count"], [1, "cert-footer"], ["src", "/assets/images/qualifying/certs/footer.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/engineering-certificate/center-pattern.svg", "alt", "", 1, "center-pattern"]],
  template: function AccountantCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0634\u0647\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 \u0645\u062D\u0627\u0633\u0628 \u0642\u0627\u0646\u0648\u0646\u0649 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u064A\u0633\u0631 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0623\u0646 \u062A\u0645\u0646\u062D \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0644\u062A\u0623\u0647\u064A\u0644\u0647 \u0644\u0644\u0625\u0634\u0631\u0627\u0641 \u0639\u0644\u0649 \u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "h5", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0634\u0647\u0627\u062F\u0629 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u0625\u0635\u062F\u0627\u0631 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0644 ", ctx.certificateData.facilityName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0648\u0630\u0644\u0643 \u0628\u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 5, ctx.certificateData.committeeDecisionDate, "yyyy/MM/dd"), " \u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0645\u0624\u0647\u0644 \u0644\u0645\u062F\u0629 ", ctx.getCertificatePeriod(ctx.certificateData.certificatePeriod), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.certificateData.certificateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0633\u0627\u0631\u064A\u0629 \u062D\u062A\u0649 \u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 8, ctx.certificateData.certificateExpirationDate, "yyyy/MM/dd"), " \u0645");
    }
  },
  dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".text-teal[_ngcontent-%COMP%] {\n  color: #29848a;\n}\n\n.text-darkteal[_ngcontent-%COMP%] {\n  color: #005357;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n}\n\n.text-darkblue[_ngcontent-%COMP%] {\n  color: #001f5f;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #00a787;\n}\n\n.cetificate[_ngcontent-%COMP%] {\n  padding: 2.5%;\n  font-family: \"REGA\", sans-serif;\n  color: #000;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .top-pattern[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .center-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n}\n\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  row-gap: 1rem;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    row-gap: 3.8rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  position: relative;\n  z-index: 2;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.8vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 3vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.6vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 2.25vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.5vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%] {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-inline: 3%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .stamp-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  width: 75%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  position: relative;\n  z-index: 2;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.25vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 1.25vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\n  margin-inline-start: 0.25rem;\n  padding: 0.25rem;\n  color: #fff;\n  border-radius: 3px;\n  background-color: #001f5f;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvX3F1YWxpZnlpbmctY2VydGlmaWNhdGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL2FjY291bnRhbnQtY2VydGlmaWNhdGUvYWNjb3VudGFudC1jZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBTEY7SUFNSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFQRjtJQVFJLGlCQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDRU47QURBTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDRVI7QURDTTtFQUNFLGNBQUE7QUNDUjtBREdJO0VBQ0UsYUFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDRk47O0FBM0RFO0VBQ0UsYUFBQTtBQThESjtBQTVESTtFQUhGO0lBSUksZUFBQTtFQStESjtBQUNGO0FBN0RJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQThETjtBQTVETTtFQVJGO0lBU0ksYUFBQTtFQStETjtBQUNGO0FBN0RNO0VBQ0UsZ0JBQUE7QUErRFI7QUE3RFE7RUFIRjtJQUlJLGNBQUE7RUFnRVI7QUFDRjtBQTdETTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUErRFI7QUE3RFE7RUFKRjtJQUtJLGlCQUFBO0VBZ0VSO0FBQ0Y7QUE3RE07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBK0RSO0FBN0RRO0VBSkY7SUFLSSxnQkFBQTtFQWdFUjtBQUNGO0FBNURJO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7QUE4RE47QUE1RE07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQThEUjtBQTNETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUE0RFI7QUExRFE7O0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtBQTREVjtBQTFEVTtFQUxGOztJQU1JLGlCQUFBO0VBOERWO0FBQ0Y7QUF6RFk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUEyRGQ7QUFwREk7RUFDRSxvQkFBQTtBQXNETjtBQXBETTtFQUNFLFVBQUE7QUFzRFIiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10ZWFsIHtcbiAgY29sb3I6ICMyOTg0OGE7XG59XG5cbi50ZXh0LWRhcmt0ZWFsIHtcbiAgY29sb3I6ICMwMDUzNTc7XG59XG5cbi50ZXh0LWdyYXkge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLnRleHQtZGFya2JsdWUge1xuICBjb2xvcjogIzAwMWY1Zjtcbn1cblxuLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzAwYTc4Nztcbn1cblxuLmNldGlmaWNhdGUge1xuICBwYWRkaW5nOiAyLjUlO1xuICBmb250LWZhbWlseTogXCJSRUdBXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgfVxuXG4gIC5jZXRpZmljYXRlLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLmNlcnQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxcmVtO1xuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLnRvcC1wYXR0ZXJuIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNlcnQtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmNlbnRlci1wYXR0ZXJuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICByaWdodDogNTAlO1xuICAgICAgYm90dG9tOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvcXVhbGlmeWluZy1jZXJ0aWZpY2F0ZXNcIjtcblxuLmNldGlmaWNhdGUge1xuICAuY2V0aWZpY2F0ZS1sYXlvdXQge1xuICAgIHJvdy1nYXA6IDFyZW07XG5cbiAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgcm93LWdhcDogMy44cmVtO1xuICAgIH1cblxuICAgIC5kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcm93LWdhcDogLjVyZW07XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIHJvdy1nYXA6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjh2dztcblxuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAuNnZ3O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4yNXZ3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAuNXZ3O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhwaXJhdGlvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBwYWRkaW5nLWlubGluZTogMyU7XG5cbiAgICAgIC5zdGFtcC1wYXR0ZXJuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogLjI1cmVtO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IC4yNXZ3O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICYuY291bnQge1xuICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAuMjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWY1ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VydC1mb290ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 24779:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/certificate/certificate.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateComponent": () => (/* binding */ CertificateComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);





class CertificateComponent {
  constructor() {
    this.qualificationRequestType = '';
  }
  get QualificationRequestTypeCodeEnum() {
    return _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__.QualificationRequestTypeCode;
  }
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum;
  }
  ngOnInit() {
    this.qualificationRequestType = _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum[this.certificateData.qualificationRequestType];
    this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType;
  }
  ngAfterViewInit() {}
}
CertificateComponent.ɵfac = function CertificateComponent_Factory(t) {
  return new (t || CertificateComponent)();
};
CertificateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CertificateComponent,
  selectors: [["app-certificate"]],
  inputs: {
    className: "className",
    certificateData: "certificateData"
  },
  decls: 32,
  vars: 11,
  consts: [["dir", "rtl", 1, "cetificate"], ["src", "assets/images/real-estate-contributions/content/license/cert-bg.svg", "alt", "", 1, "w-100"], [1, "cetificate-layout"], [1, "license-logo"], ["src", "assets/images/real-estate-contributions/content/license/cert-rega-logo.svg", "alt", ""], [1, "data"], [1, "intro"], [1, "info"], [1, "row", "g-1"], [1, "col-4"], [1, "box", "label"], [1, "box", "justify-content-center"], [1, "col-2"], [1, "box"], [1, "outro"], [1, "rega-logo"]],
  template: function CertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0648\u0630\u0644\u0643 \u062D\u0633\u0628 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u062F\u0646\u0627\u0647 : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0634\u0647\u0627\u062F\u0629 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12)(19, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0628\u062A\u0627\u0631\u064A\u062E");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u0647\u0630\u0647 \u0627\u0644\u0648\u062B\u064A\u0642\u0629 \u0635\u0627\u062F\u0631\u0629 \u0645\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0644\u0627 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062A\u0648\u0642\u064A\u0639 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u062A\u0645\u0646\u062D \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0634\u0647\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 ", ctx.certificateData.qualificationRequestTypeName, " \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0644\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629 \u0644\u0640 ", ctx.certificateData.facilityName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.certificateData.certificateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 5, ctx.certificateData.committeeDecisionDate, "dd/MM/yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u0648\u062A\u0639\u062A\u0628\u0631 \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0633\u0627\u0631\u064A\u0629 \u062D\u062A\u0649 \u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 8, ctx.certificateData.certificateExpirationDate, "dd/MM/yyyy"), " ");
    }
  },
  dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".cetificate[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Bukra\", sans-serif;\n  font-size: 0.5vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 7.5%;\n  position: absolute;\n  inset: 0;\n  padding: 10% 10%;\n  overflow: hidden;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .license-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 47%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .outro[_ngcontent-%COMP%] {\n  font-size: 0.5vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .outro[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]    + .info[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 0.35vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]    + .box[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 1.25rem;\n  padding: 4% 8%;\n  border: 1px solid rgba(0, 120, 188, 0.5);\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    padding: 1mm 2mm;\n  }\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    height: 12.5mm;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .box.label[_ngcontent-%COMP%] {\n  justify-content: center;\n  color: white;\n  background-color: #0078bc;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .box.square[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .box.square[_ngcontent-%COMP%] {\n    width: 22.5mm;\n    height: 22.5mm;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .outro[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  text-align: center;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .rega-logo[_ngcontent-%COMP%] {\n  margin-top: auto;\n  text-align: end;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .rega-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 47%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvX2xpY2Vuc2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL2NlcnRpZmljYXRlL2NlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFMSjtJQU1RLGNBQUE7RUNFTjtBQUNGO0FEQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERVE7RUFYSjtJQVlRLGlCQUFBO0VDQ1Y7QUFDRjtBREVZO0VBQ0ksVUFBQTtBQ0FoQjtBRE1ZOztFQUVJLGdCQUFBO0FDSmhCO0FETWdCO0VBSko7O0lBS1EsY0FBQTtFQ0ZsQjtBQUNGO0FETWdCO0VBQ0ksY0FBQTtBQ0pwQjtBRFFZO0VBQ0ksaUJBQUE7QUNOaEI7QURRZ0I7RUFISjtJQUlRLGdCQUFBO0VDTGxCO0FBQ0Y7QURPZ0I7RUFDSSxjQUFBO0FDTHBCO0FEU1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQU1BLHdDQUFBO0FDYmhCO0FEU2dCO0VBUEo7SUFRUSxnQkFBQTtFQ05sQjtBQUNGO0FEVWdCO0VBYko7SUFjUSxjQUFBO0VDUGxCO0FBQ0Y7QURTZ0I7RUFDSSx1QkFBQTtFQUNBLFlFM0VaO0VGNEVZLHlCQUFBO0FDUHBCO0FEVWdCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNScEI7QURVb0I7RUFKSjtJQUtRLGFBQUE7SUFDQSxjQUFBO0VDUHRCO0FBQ0Y7QURhWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ1hoQjtBRGVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDYlo7QURlWTtFQUNJLFVBQUE7QUNiaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2V0aWZpY2F0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAnQnVrcmEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjV2dztcblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIH1cblxuICAgIC5jZXRpZmljYXRlLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHJvdy1nYXA6IDcuNSU7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcblxuICAgICAgICBwYWRkaW5nOiAxMCUgMTAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWNlbnNlLWxvZ28ge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDclO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGEge1xuXG4gICAgICAgICAgICAuaW50cm8sXG4gICAgICAgICAgICAub3V0cm8ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjV2dztcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmludHJvIHtcbiAgICAgICAgICAgICAgICAmKy5pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMzV2dztcblxuICAgICAgICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJisuYm94IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNCUgOCU7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxbW0gMm1tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIzAwNzhiYywgLjUpO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMi41bW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OGJjO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuc3F1YXJlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMi41bW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyLjVtbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vdXRybyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlZ2EtbG9nbyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNldGlmaWNhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkJ1a3JhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC41dnc7XG59XG5AbWVkaWEgcHJpbnQge1xuICAuY2V0aWZpY2F0ZSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDcuNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHBhZGRpbmc6IDEwJSAxMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgcHJpbnQge1xuICAuY2V0aWZpY2F0ZSAuY2V0aWZpY2F0ZS1sYXlvdXQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG59XG4uY2V0aWZpY2F0ZSAuY2V0aWZpY2F0ZS1sYXlvdXQgLmxpY2Vuc2UtbG9nbyBpbWcge1xuICB3aWR0aDogNDclO1xufVxuLmNldGlmaWNhdGUgLmNldGlmaWNhdGUtbGF5b3V0IC5kYXRhIC5pbnRybyxcbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAub3V0cm8ge1xuICBmb250LXNpemU6IDAuNXZ3O1xufVxuQG1lZGlhIHByaW50IHtcbiAgLmNldGlmaWNhdGUgLmNldGlmaWNhdGUtbGF5b3V0IC5kYXRhIC5pbnRybyxcbiAgLmNldGlmaWNhdGUgLmNldGlmaWNhdGUtbGF5b3V0IC5kYXRhIC5vdXRybyB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAuaW50cm8gKyAuaW5mbyB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLmNldGlmaWNhdGUgLmNldGlmaWNhdGUtbGF5b3V0IC5kYXRhIC5pbmZvIHtcbiAgZm9udC1zaXplOiAwLjM1dnc7XG59XG5AbWVkaWEgcHJpbnQge1xuICAuY2V0aWZpY2F0ZSAuY2V0aWZpY2F0ZS1sYXlvdXQgLmRhdGEgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gIH1cbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAuaW5mbyArIC5ib3gge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBwYWRkaW5nOiA0JSA4JTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxMjAsIDE4OCwgMC41KTtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAuYm94IHtcbiAgICBwYWRkaW5nOiAxbW0gMm1tO1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuY2V0aWZpY2F0ZSAuY2V0aWZpY2F0ZS1sYXlvdXQgLmRhdGEgLmJveCB7XG4gICAgaGVpZ2h0OiAxMi41bW07XG4gIH1cbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAuYm94LmxhYmVsIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhiYztcbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAuZGF0YSAuYm94LnNxdWFyZSB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuQG1lZGlhIHByaW50IHtcbiAgLmNldGlmaWNhdGUgLmNldGlmaWNhdGUtbGF5b3V0IC5kYXRhIC5ib3guc3F1YXJlIHtcbiAgICB3aWR0aDogMjIuNW1tO1xuICAgIGhlaWdodDogMjIuNW1tO1xuICB9XG59XG4uY2V0aWZpY2F0ZSAuY2V0aWZpY2F0ZS1sYXlvdXQgLmRhdGEgLm91dHJvIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZXRpZmljYXRlIC5jZXRpZmljYXRlLWxheW91dCAucmVnYS1sb2dvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmNldGlmaWNhdGUgLmNldGlmaWNhdGUtbGF5b3V0IC5yZWdhLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDQ3JTtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 57970:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/commercial-registry/commercial-registry.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommercialRegistryComponent": () => (/* binding */ CommercialRegistryComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function CommercialRegistryComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.facility.commercialRegisterNumber);
  }
}
function CommercialRegistryComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 1, ctx_r2.facility.commercialRegisterStartDate, "MM/dd/yyyy"), " ");
  }
}
function CommercialRegistryComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u062A\u0627\u0631\u064A\u062E \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 1, ctx_r3.facility.commercialRegisterEndDate, "MM/dd/yyyy"), " ");
  }
}
function CommercialRegistryComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.facility.facilityName, " ");
  }
}
function CommercialRegistryComponent_div_0_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facilityBusinessType_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", facilityBusinessType_r26.businessType, " ");
  }
}
function CommercialRegistryComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0646\u0634\u0627\u0637/\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_9_div_3_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.facility.facilityBusinessTypes);
  }
}
function CommercialRegistryComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r6.baseUrl + ctx_r6.facility.qualificationValFileManager.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.facility.qualificationValFileManager.fileDescription, " ");
  }
}
function CommercialRegistryComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0631\u0642\u0645 \u0627\u0634\u062A\u0631\u0627\u0643 \u0627\u0644\u062A\u0623\u0645\u064A\u0646\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0644\u0644\u0645\u0646\u0634\u0623\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.facility.socialInsuranceCertificateNumber, " ");
  }
}
function CommercialRegistryComponent_div_0_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r8.baseUrl + ctx_r8.facility.socialInsuranceEmployeesListFileManager.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.facility.socialInsuranceEmployeesListFileManager.fileDescription, " ");
  }
}
function CommercialRegistryComponent_div_0_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r27.facility.website, " ");
  }
}
function CommercialRegistryComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_19_div_3_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.facility.website);
  }
}
function CommercialRegistryComponent_div_0_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r28.facility.telephone, " ");
  }
}
function CommercialRegistryComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_25_div_3_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.facility.telephone);
  }
}
function CommercialRegistryComponent_div_0_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r29.facility.fax, " ");
  }
}
function CommercialRegistryComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0641\u0627\u0643\u0633");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_26_div_3_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.facility.fax);
  }
}
function CommercialRegistryComponent_div_0_div_27_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r30.facility.email, " ");
  }
}
function CommercialRegistryComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_27_div_3_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.facility.email);
  }
}
function CommercialRegistryComponent_div_0_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r31.facility.postalCode, " ");
  }
}
function CommercialRegistryComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_28_div_3_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.facility.postalCode);
  }
}
function CommercialRegistryComponent_div_0_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r32.facility.poBox, " ");
  }
}
function CommercialRegistryComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u0628\u0631\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_29_div_3_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.facility.poBox);
  }
}
function CommercialRegistryComponent_div_0_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const owner_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.nidnumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.relationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.ownerNationalityAR);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.email);
  }
}
function CommercialRegistryComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0646\u0648\u0639 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.facility.facilityType, " ");
  }
}
function CommercialRegistryComponent_div_0_div_58_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "a", 15)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r35.baseUrl + ctx_r35.facility.cooperativeSocietyLicensingFileManager.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r35.facility.cooperativeSocietyLicensingFileManager.fileDescription, " ");
  }
}
function CommercialRegistryComponent_div_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u062A\u0631\u062E\u064A\u0635 \u0644\u0644\u062C\u0645\u0639\u064A\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_58_div_3_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.facility.cooperativeSocietyLicensingFileManager);
  }
}
function CommercialRegistryComponent_div_0_div_66_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const qualificationIssuesDocument_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r37.baseUrl + (qualificationIssuesDocument_r38.fileManager == null ? null : qualificationIssuesDocument_r38.fileManager.filePath), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", qualificationIssuesDocument_r38.fileManager == null ? null : qualificationIssuesDocument_r38.fileManager.fileDescription, " ");
  }
}
function CommercialRegistryComponent_div_0_div_66_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CommercialRegistryComponent_div_0_div_66_div_3_ng_container_1_Template, 5, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r36.facility.qualificationIssuesDocuments);
  }
}
function CommercialRegistryComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0645\u0631\u0641\u0642\u0627\u062A \u0627\u0644\u0642\u0636\u0627\u064A\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_66_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.facility.qualificationIssuesDocuments && ctx_r18.facility.qualificationIssuesDocuments.length > 0);
  }
}
function CommercialRegistryComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0639\u0636\u0648\u064A\u0629 \u0627\u0644\u063A\u0631\u0641\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.facility.chamberOfCommerceMembershipNumber, " ");
  }
}
function CommercialRegistryComponent_div_0_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0624\u0647\u0644\u0629 \u0633\u0627\u0628\u0642\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.facility.previouslyQualifiedFacilityCommercialRegistrationNumber, " ");
  }
}
function CommercialRegistryComponent_div_0_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0645\u0632 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r21.facility.companyCodeInFinancialMarket, " ");
  }
}
function CommercialRegistryComponent_div_0_div_78_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "a", 15)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r39.baseUrl + ctx_r39.facility.companyEstablishingContractFileManager.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r39.facility.companyEstablishingContractFileManager.fileDescription, " ");
  }
}
function CommercialRegistryComponent_div_0_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0639\u0642\u062F \u062A\u0623\u0633\u064A\u0633 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CommercialRegistryComponent_div_0_div_78_div_3_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.facility.companyEstablishingContractFileManager);
  }
}
function CommercialRegistryComponent_div_0_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u062A\u0631\u062E\u064A\u0635 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0644\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r23.facility.saudiAuthorityOfEngineersLicenseNumber, " ");
  }
}
function CommercialRegistryComponent_div_0_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u062A\u0631\u062E\u064A\u0635 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u064A\u0646 \u0648\u0627\u0644\u0645\u062D\u0627\u0633\u0628\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r24.facility.saudiAuthorityForAuditorsAndAccountants, " ");
  }
}
function CommercialRegistryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CommercialRegistryComponent_div_0_div_5_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CommercialRegistryComponent_div_0_div_6_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CommercialRegistryComponent_div_0_div_7_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CommercialRegistryComponent_div_0_div_8_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CommercialRegistryComponent_div_0_div_9_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0645\u0644\u0641 \u0631\u062E\u0635\u0629 \u0641\u0627\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CommercialRegistryComponent_div_0_div_13_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CommercialRegistryComponent_div_0_div_14_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646 \u0639\u0644\u0649 \u0631\u0623\u0633 \u0627\u0644\u0639\u0645\u0644 \u0635\u0627\u062F\u0631\u0629 \u0645\u0646 \u0627\u0644\u062A\u0623\u0645\u064A\u0646\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CommercialRegistryComponent_div_0_a_18_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CommercialRegistryComponent_div_0_div_19_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0631\u0623\u0633 \u0645\u0627\u0644 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CommercialRegistryComponent_div_0_div_25_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CommercialRegistryComponent_div_0_div_26_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CommercialRegistryComponent_div_0_div_27_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CommercialRegistryComponent_div_0_div_28_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CommercialRegistryComponent_div_0_div_29_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 1)(31, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u0627\u0644\u0645\u0644\u0627\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 3)(34, "div", 5)(35, "div", 10)(36, "table", 11)(37, "thead")(38, "tr")(39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u0627\u0633\u0645 \u0645\u0627\u0644\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u0646\u0648\u0639 \u0627\u0644\u0639\u0644\u0627\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u0627\u0644\u0627\u064A\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, CommercialRegistryComponent_div_0_tr_52_Template, 13, 6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 1)(54, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0633\u0627\u0633\u064A\u0629 (\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A \u0645\u0633\u062A\u0642\u0644)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, CommercialRegistryComponent_div_0_div_57_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, CommercialRegistryComponent_div_0_div_58_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 5)(60, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u0647\u0644 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646 \u0628\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0623\u0645 \u0644\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 9)(63, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, CommercialRegistryComponent_div_0_div_66_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, CommercialRegistryComponent_div_0_div_67_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 1)(69, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0633\u0627\u0633\u064A\u0629 (\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A \u0645\u062A\u062D\u0627\u0644\u0641 \u0645\u0639 \u0634\u0631\u0643\u0629 \u0645\u0624\u0647\u0644\u0629)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, CommercialRegistryComponent_div_0_div_72_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 1)(74, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0633\u0627\u0633\u064A\u0629 (\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A \u0645\u062F\u0631\u062C \u0641\u064A \u0633\u0648\u0642 \u0627\u0644\u0645\u0627\u0644)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, CommercialRegistryComponent_div_0_div_77_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, CommercialRegistryComponent_div_0_div_78_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 1)(80, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0633\u0627\u0633\u064A\u0629 (\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u064A \u0627\u0644\u0647\u0646\u062F\u0633\u064A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, CommercialRegistryComponent_div_0_div_83_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 1)(85, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0633\u0627\u0633\u064A\u0629 (\u0627\u0644\u0645\u062D\u0627\u0633\u0628 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, CommercialRegistryComponent_div_0_div_88_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.commercialRegisterNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.commercialRegisterStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.commercialRegisterEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.facilityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.facilityBusinessTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.qualificationValFileManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.socialInsuranceCertificateNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.socialInsuranceEmployeesListFileManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.facility.capitalNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.fax);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.postalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.poBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.facility.facilityOwners);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.facilityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.facilityType == "\u062C\u0645\u0639\u064A\u0629" && ctx_r0.facility.cooperativeSocietyLicensingFileManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.facility.isIssuesExist ? "\u0646\u0639\u0645" : "\u0644\u0627", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.isIssuesExist && ctx_r0.facility.qualificationIssuesDocuments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.chamberOfCommerceMembershipNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.previouslyQualifiedFacilityCommercialRegistrationNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.companyCodeInFinancialMarket);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.companyEstablishingContractFileManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.saudiAuthorityOfEngineersLicenseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.facility.saudiAuthorityForAuditorsAndAccountants);
  }
}
class CommercialRegistryComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.facility = null;
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    // facilityData: facilityDTO | null = null;
    this.selectedRequest = null;
  }
  ngOnInit() {
    // this.getSeclectRequest();
    this.getSeclectRequest();
    this.updateFacilityData();
  }
  // getSeclectRequest() {
  //   this.subscriptions.push(
  //     this._requestService
  //       .getFacility()
  //       .subscribe((res: facilityDTO[] | null) => {
  //         if (res) {
  //           this.facility = res[0];
  //         }
  //       })
  //   );
  // }
  getSeclectRequest() {
    this.subscriptions.push(this._requestService.seclectRequest$.subscribe(res => {
      if (res && res.length > 0) {
        this.selectedRequest = res[0];
      }
    }));
  }
  updateFacilityData() {
    this.subscriptions.push(this._requestService.FacilityBasicInfo$.subscribe(res => {
      this.facility = res;
      console.log("this.facility", res);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
CommercialRegistryComponent.ɵfac = function CommercialRegistryComponent_Factory(t) {
  return new (t || CommercialRegistryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
CommercialRegistryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CommercialRegistryComponent,
  selectors: [["app-commercial-registry"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "tab-data-section"], [1, "title"], [1, "row", "row-gap-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "key"], ["class", "value", 4, "ngIf"], ["download", "", 3, "href", 4, "ngIf"], [1, "value"], [1, "table-responsive"], [1, "table", "table-light"], [4, "ngFor", "ngForOf"], [1, "icon", "material-icons"], ["class", "value", 4, "ngFor", "ngForOf"], ["download", "", "target", "_blank", 3, "href"], ["download", "", 3, "href"], [1, "facility-owner-body"]],
  template: function CommercialRegistryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CommercialRegistryComponent_div_0_Template, 89, 26, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.facility);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.facility-owner-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n.facility-owner-body[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n.facility-owner-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.facility-owner-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .facility-owner-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL2NvbW1lcmNpYWwtcmVnaXN0cnkvY29tbWVyY2lhbC1yZWdpc3RyeS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNBRjtBREVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCRU1RO0FEUlo7QURJSTtFQUNFLGNFTUs7QURSWDtBRE1FO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDSko7QURPRTtFQUNFLGdCQUFBO0FDTEo7O0FEVUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FDUEo7QURVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FDVEo7QURXSTtFQUNFLGdCQUFBO0FDVE47QURhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxlRURXO0FEWGY7QURlRTtFQUNFLGVFTFc7RUZNWCxjRXZETztBRDBDWDtBRGdCRTtFQUNFLGVFVFc7RUZVWCxnQkFBQTtFQUNBLGNFOURRO0FEZ0RaO0FEZ0JJO0VBQ0Usa0JBQUE7QUNkTjtBRGtCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlRXhCVztFRnlCWCxnQkFBQTtFQUNBLGNFbEZJO0FEaUVSO0FEbUJJO0VBQ0Usa0JBQUE7QUNqQk47QURvQkk7RUFDRSxjRW5GTTtBRGlFWjtBRHFCSTtFQUNFLGVBQUE7QUNuQk47QURxQk07RUFDRSxlRXhDTztBRHFCZjs7QUE1RUE7RUFDSSxrQkFBQTtBQStFSjs7QUE1RUE7RUFDSSxrQkFBQTtBQStFSjs7QUE3RUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFnRko7O0FBN0VFOztFQUVFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZ0ZKIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC90YWItY29udGVudFwiO1xuLmZhY2lsaXR5LW93bmVyLXRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5mYWNpbGl0eS1vd25lci1ib2R5e1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgXG59XG4uZmFjaWxpdHktb3duZXItdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZmFjaWxpdHktb3duZXItdGFibGUgdGgsXG4gIC5mYWNpbGl0eS1vd25lci10YWJsZSB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDsgXG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 43615:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/contribution-developer-certificate/contribution-developer-certificate.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContributionDeveloperCertificateComponent": () => (/* binding */ ContributionDeveloperCertificateComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);





class ContributionDeveloperCertificateComponent {
  get QualificationRequestTypeCodeEnum() {
    return _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__.QualificationRequestTypeCode;
  }
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum;
  }
  ngOnInit() {
    this.qualificationRequestType = _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum[this.certificateData.qualificationRequestType];
    this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType;
  }
  getCertificatePeriod(period) {
    switch (period) {
      case 1:
        return "عام";
      case 2:
        return "عامين";
      case 3:
        return "ثلاثة أعوام";
    }
    return "عام";
  }
  constructor() {
    this.qualificationRequestType = '';
  }
}
ContributionDeveloperCertificateComponent.ɵfac = function ContributionDeveloperCertificateComponent_Factory(t) {
  return new (t || ContributionDeveloperCertificateComponent)();
};
ContributionDeveloperCertificateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContributionDeveloperCertificateComponent,
  selectors: [["app-contribution-developer-certificate"]],
  inputs: {
    className: "className",
    certificateData: "certificateData"
  },
  decls: 24,
  vars: 6,
  consts: [["dir", "rtl", 1, "cetificate"], [1, "cetificate-layout"], [1, "cert-header"], [1, "logo"], ["src", "assets/images/qualifying/certs/contribution-developer-certificate/contribution-logo.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/contribution-developer-certificate/top-pattern.svg", "alt", "", 1, "top-pattern"], [1, "data", "text-center"], [1, "title", "text-darkblue"], [1, "text", "fw-bold", "text-teal"], [1, "text", "text-gray", "mt-4"], [1, "text", "fw-bold", "text-green"], [1, "date", "text-teal"], [1, "cert-number"], [1, "text", "text-center"], [1, "cert-footer"], ["src", "/assets/images/qualifying/certs/footer.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/accountant-certificate/center-pattern.png", "alt", "", 1, "center-pattern"]],
  template: function ContributionDeveloperCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0634\u0647\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 \u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0644\u0645\u0645\u0627\u0631\u0633\u0629 \u0646\u0634\u0627\u0637 \u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u064A\u0633\u0631 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0623\u0646 \u062A\u0645\u0646\u062D \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12)(19, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0644 ", ctx.certificateData.facilityName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0648\u0630\u0644\u0643 \u0628\u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 3, ctx.certificateData.committeeDecisionDate, "yyyy/MM/dd"), " \u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0634\u0647\u0627\u062F\u0629 \u0631\u0642\u0645 ", ctx.certificateData.certificateNumber, "");
    }
  },
  dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".text-teal[_ngcontent-%COMP%] {\n  color: #29848a;\n}\n\n.text-darkteal[_ngcontent-%COMP%] {\n  color: #005357;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n}\n\n.text-darkblue[_ngcontent-%COMP%] {\n  color: #001f5f;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #00a787;\n}\n\n.cetificate[_ngcontent-%COMP%] {\n  padding: 2.5%;\n  font-family: \"REGA\", sans-serif;\n  color: #000;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .top-pattern[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .center-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n}\n\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  row-gap: 1rem;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    row-gap: 4.25rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  position: relative;\n  z-index: 2;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n    padding-block: 30%;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.8vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.6vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 3vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.5vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    font-size: 2vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-number[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.25vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-number[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvX3F1YWxpZnlpbmctY2VydGlmaWNhdGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL2NvbnRyaWJ1dGlvbi1kZXZlbG9wZXItY2VydGlmaWNhdGUvY29udHJpYnV0aW9uLWRldmVsb3Blci1jZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBTEY7SUFNSSxpQ0FBQTtZQUFBLHlCQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFQRjtJQVFJLGlCQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDRU47QURBTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDRVI7QURDTTtFQUNFLGNBQUE7QUNDUjtBREdJO0VBQ0UsYUFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDRk47O0FBM0RFO0VBQ0UsYUFBQTtBQThESjtBQTVESTtFQUhGO0lBSUksZ0JBQUE7RUErREo7QUFDRjtBQTdESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUE4RE47QUE1RE07RUFSRjtJQVNJLGFBQUE7SUFDQSxrQkFBQTtFQStETjtBQUNGO0FBN0RNO0VBQ0UsZ0JBQUE7QUErRFI7QUE3RFE7RUFIRjtJQUlJLGNBQUE7RUFnRVI7QUFDRjtBQTdETTtFQUNFLGdCQUFBO0FBK0RSO0FBN0RRO0VBSEY7SUFJSSxjQUFBO0VBZ0VSO0FBQ0Y7QUE3RE07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBK0RSO0FBN0RRO0VBSkY7SUFLSSxjQUFBO0lBQ0EsY0FBQTtFQWdFUjtBQUNGO0FBM0RNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQTZEUjtBQTNEUTtFQUpGO0lBS0ksZ0JBQUE7RUE4RFI7QUFDRjtBQTFESTtFQUNFLHVCQUFBO0FBNEROO0FBMURNO0VBQ0UsVUFBQTtBQTREUiIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXRlYWwge1xuICBjb2xvcjogIzI5ODQ4YTtcbn1cblxuLnRleHQtZGFya3RlYWwge1xuICBjb2xvcjogIzAwNTM1Nztcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4udGV4dC1kYXJrYmx1ZSB7XG4gIGNvbG9yOiAjMDAxZjVmO1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMDBhNzg3O1xufVxuXG4uY2V0aWZpY2F0ZSB7XG4gIHBhZGRpbmc6IDIuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIlJFR0FcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG5cbiAgLmNldGlmaWNhdGUtbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAuY2VydC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDFyZW07XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAudG9wLXBhdHRlcm4ge1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VydC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuY2VudGVyLXBhdHRlcm4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICBib3R0b206IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICB9XG4gIH1cbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9jZXJ0cy9xdWFsaWZ5aW5nLWNlcnRpZmljYXRlc1wiO1xuXG4uY2V0aWZpY2F0ZSB7XG4gIC5jZXRpZmljYXRlLWxheW91dCB7XG4gICAgcm93LWdhcDogMXJlbTtcblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICByb3ctZ2FwOiA0LjI1cmVtO1xuICAgIH1cblxuICAgIC5kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcm93LWdhcDogLjVyZW07XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIHJvdy1nYXA6IDFyZW07XG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDMwJTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAuOHZ3O1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBmb250LXNpemU6IC42dnc7XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjV2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jZXJ0LW51bWJlciB7XG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjI1dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jZXJ0LWZvb3RlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 93304:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/developer-certificate/developer-certificate.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeveloperCertificateComponent": () => (/* binding */ DeveloperCertificateComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);





class DeveloperCertificateComponent {
  get QualificationRequestTypeCodeEnum() {
    return _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_1__.QualificationRequestTypeCode;
  }
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum;
  }
  ngOnInit() {
    this.qualificationRequestType = _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum[this.certificateData.qualificationRequestType];
    this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType;
  }
  getCertificatePeriod(period) {
    switch (period) {
      case 1:
        return "عام";
      case 2:
        return "عامين";
      case 3:
        return "ثلاثة أعوام";
    }
    return "عام";
  }
  constructor() {
    this.qualificationRequestType = '';
  }
}
DeveloperCertificateComponent.ɵfac = function DeveloperCertificateComponent_Factory(t) {
  return new (t || DeveloperCertificateComponent)();
};
DeveloperCertificateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DeveloperCertificateComponent,
  selectors: [["app-developer-certificate"]],
  inputs: {
    className: "className",
    certificateData: "certificateData"
  },
  decls: 42,
  vars: 11,
  consts: [["dir", "rtl", 1, "cetificate"], [1, "cetificate-layout"], [1, "cert-header"], [1, "logo"], ["src", "/assets/images/qualifying/certs/logo.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/top-pattern-mini.svg", "alt", "", 1, "top-pattern"], [1, "data-wrapper"], [1, "data", "text-center"], [1, "title", "text-darkteal"], ["src", "/assets/images/qualifying/certs/developer-certificate/divider.svg", "alt", "", 1, "divider"], [1, "text", "text-gray"], [1, "text", "fw-bold", "text-teal"], [1, "text", "fw-bold", "text-teal", "mt-4"], [1, "text", "text-teal"], [1, "text", "text-teal", "mt-4"], [1, "expiration", "text-center"], ["src", "/assets/images/qualifying/certs/stamp-pattern.png", "alt", "", 1, "stamp-pattern", "img-fluid"], [1, "info"], [1, "title", "text-teal"], [1, "text"], [1, "text-darkblue"], [1, "count"], [1, "cert-footer"], ["src", "/assets/images/qualifying/certs/footer.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/developer-certificate/center-pattern.png", "alt", "", 1, "center-pattern"]],
  template: function DeveloperCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0634\u0647\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 \u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u064A\u0633\u0631 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0623\u0646 \u062A\u0645\u0646\u062D \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0644\u0627\u062C\u062A\u064A\u0627\u0632\u0647\u0627 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0644\u0645\u0645\u0627\u0631\u0633\u0629 \u0646\u0634\u0627\u0637 \u0628\u064A\u0639 \u0648\u062A\u0623\u062C\u064A\u0631 \u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17)(26, "h5", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0634\u0647\u0627\u062F\u0629 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u0625\u0635\u062F\u0627\u0631 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0644 ", ctx.certificateData.facilityName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0648\u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627 \u0628\u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 5, ctx.certificateData.committeeDecisionDate, "yyyy/MM/dd"), " \u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0645\u0624\u0647\u0644 \u0644\u0645\u062F\u0629 ", ctx.getCertificatePeriod(ctx.certificateData.certificatePeriod), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.certificateData.certificateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0633\u0627\u0631\u064A\u0629 \u062D\u062A\u0649 \u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](34, 8, ctx.certificateData.certificateExpirationDate, "yyyy/MM/dd"), " \u0645");
    }
  },
  dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".text-teal[_ngcontent-%COMP%] {\n  color: #29848a;\n}\n\n.text-darkteal[_ngcontent-%COMP%] {\n  color: #005357;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n}\n\n.text-darkblue[_ngcontent-%COMP%] {\n  color: #001f5f;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #00a787;\n}\n\n.cetificate[_ngcontent-%COMP%] {\n  padding: 2.5%;\n  font-family: \"REGA\", sans-serif;\n  color: #000;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .top-pattern[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .center-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n}\n\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  row-gap: 1rem;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    row-gap: 5.5rem;\n  }\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .top-pattern[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data-wrapper[_ngcontent-%COMP%] {\n    gap: 6rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  position: relative;\n  z-index: 2;\n  background-color: #f1f4fc;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n    padding: 1.5rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.25vw;\n  font-weight: 900;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.7vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 3.25vw;\n  }\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    margin-block: 0.75rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%] {\n  position: relative;\n  padding-inline: 7%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .stamp-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  width: 75%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  position: relative;\n  z-index: 2;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.5vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\n  margin-inline-start: 0.25rem;\n  padding: 0.25rem;\n  color: #fff;\n  border-radius: 3px;\n  background-color: #001f5f;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvX3F1YWxpZnlpbmctY2VydGlmaWNhdGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL2RldmVsb3Blci1jZXJ0aWZpY2F0ZS9kZXZlbG9wZXItY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUxGO0lBTUksaUNBQUE7WUFBQSx5QkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBUEY7SUFRSSxpQkFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0VOO0FEQU07RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQ007RUFDRSxjQUFBO0FDQ1I7QURHSTtFQUNFLGFBQUE7QUNETjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ0ZOOztBQTNERTtFQUNFLGFBQUE7QUE4REo7QUE1REk7RUFIRjtJQUlJLGVBQUE7RUErREo7QUFDRjtBQTNEUTtFQURGO0lBRUksVUFBQTtFQThEUjtBQUNGO0FBMURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBNEROO0FBMURNO0VBTkY7SUFPSSxTQUFBO0VBNkROO0FBQ0Y7QUExREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBRUEseUJBQUE7QUEwRE47QUF4RE07RUFWRjtJQVdJLGFBQUE7SUFDQSxlQUFBO0VBMkROO0FBQ0Y7QUF6RE07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBMkRSO0FBekRRO0VBSkY7SUFLSSxjQUFBO0VBNERSO0FBQ0Y7QUF6RE07RUFDRSxnQkFBQTtBQTJEUjtBQXpEUTtFQUhGO0lBSUksaUJBQUE7RUE0RFI7QUFDRjtBQXhEUTtFQURGO0lBRUkscUJBQUE7RUEyRFI7QUFDRjtBQXZESTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUF5RE47QUF2RE07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQXlEUjtBQXRETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUF1RFI7QUFyRFE7O0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQXVEVjtBQXJEVTtFQUxGOztJQU1JLGdCQUFBO0VBeURWO0FBQ0Y7QUFwRFk7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFzRGQ7QUEvQ0k7RUFDRSx1QkFBQTtBQWlETjtBQS9DTTtFQUNFLFVBQUE7QUFpRFIiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10ZWFsIHtcbiAgY29sb3I6ICMyOTg0OGE7XG59XG5cbi50ZXh0LWRhcmt0ZWFsIHtcbiAgY29sb3I6ICMwMDUzNTc7XG59XG5cbi50ZXh0LWdyYXkge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLnRleHQtZGFya2JsdWUge1xuICBjb2xvcjogIzAwMWY1Zjtcbn1cblxuLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzAwYTc4Nztcbn1cblxuLmNldGlmaWNhdGUge1xuICBwYWRkaW5nOiAyLjUlO1xuICBmb250LWZhbWlseTogXCJSRUdBXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgfVxuXG4gIC5jZXRpZmljYXRlLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLmNlcnQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxcmVtO1xuXG4gICAgICAubG9nbyB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLnRvcC1wYXR0ZXJuIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNlcnQtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmNlbnRlci1wYXR0ZXJuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICByaWdodDogNTAlO1xuICAgICAgYm90dG9tOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvcXVhbGlmeWluZy1jZXJ0aWZpY2F0ZXNcIjtcblxuLmNldGlmaWNhdGUge1xuICAuY2V0aWZpY2F0ZS1sYXlvdXQge1xuICAgIHJvdy1nYXA6IDFyZW07XG5cbiAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgcm93LWdhcDogNS41cmVtO1xuICAgIH1cblxuICAgIC5jZXJ0LWhlYWRlciB7XG4gICAgICAudG9wLXBhdHRlcm4ge1xuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0YS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMnJlbTtcblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgZ2FwOiA2cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcm93LWdhcDogLjVyZW07XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZmM7XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIHJvdy1nYXA6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDZ2dztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjd2dztcblxuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy4yNXZ3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICBtYXJnaW4tYmxvY2s6IC43NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5leHBpcmF0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctaW5saW5lOiA3JTtcblxuICAgICAgLnN0YW1wLXBhdHRlcm4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAuMjVyZW07XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjV2dztcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICYuY291bnQge1xuICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAuMjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWY1ZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VydC1mb290ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 32357:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/engineering-certificate/engineering-certificate.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineeringCertificateComponent": () => (/* binding */ EngineeringCertificateComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 85959);





class EngineeringCertificateComponent {
  get QualificationRequestTypeCodeEnum() {
    return _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_0__.QualificationRequestTypeCode;
  }
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_1__.RequestCodeEnum;
  }
  ngOnInit() {
    this.qualificationRequestType = _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_1__.RequestCodeEnum[this.certificateData.qualificationRequestType];
    this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType;
  }
  getCertificatePeriod(period) {
    switch (period) {
      case 1:
        return "عام";
      case 2:
        return "عامين";
      case 3:
        return "ثلاثة أعوام";
    }
    return "عام";
  }
  constructor() {
    this.qualificationRequestType = '';
  }
}
EngineeringCertificateComponent.ɵfac = function EngineeringCertificateComponent_Factory(t) {
  return new (t || EngineeringCertificateComponent)();
};
EngineeringCertificateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EngineeringCertificateComponent,
  selectors: [["app-engineering-certificate"]],
  inputs: {
    className: "className",
    certificateData: "certificateData"
  },
  decls: 37,
  vars: 11,
  consts: [["dir", "rtl", 1, "cetificate"], [1, "cetificate-layout"], [1, "cert-header"], [1, "logo"], ["src", "/assets/images/qualifying/certs/logo.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/top-pattern.svg", "alt", "", 1, "top-pattern"], [1, "data", "text-center"], [1, "title", "text-darkteal"], [1, "text", "text-gray"], [1, "text", "text-teal"], [1, "date", "text-darkteal"], [1, "expiration", "text-center"], ["src", "/assets/images/qualifying/certs/stamp-pattern.png", "alt", "", 1, "stamp-pattern", "img-fluid"], [1, "info"], [1, "title", "text-teal"], [1, "text"], [1, "text-darkblue"], [1, "count"], [1, "cert-footer"], ["src", "/assets/images/qualifying/certs/footer.svg", "alt", "", 1, "img-fluid"], ["src", "/assets/images/qualifying/certs/engineering-certificate/center-pattern.svg", "alt", "", 1, "center-pattern"]],
  template: function EngineeringCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0634\u0647\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 \u0627\u0633\u062A\u0634\u0627\u0631\u064A \u0647\u0646\u062F\u0633\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u064A\u0633\u0631 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0623\u0646 \u062A\u0645\u0646\u062D \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0644\u062A\u0623\u0647\u064A\u0644\u0647 \u0644\u0644\u0625\u0634\u0631\u0627\u0641 \u0639\u0644\u0649 \u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "h5", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0634\u0647\u0627\u062F\u0629 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u0625\u0635\u062F\u0627\u0631 \u0631\u0642\u0645 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0644 ", ctx.certificateData.facilityName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0648\u0630\u0644\u0643 \u0628\u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 5, ctx.certificateData.committeeDecisionDate, "yyyy/MM/dd"), " \u0645");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0645\u0624\u0647\u0644 \u0644\u0645\u062F\u0629 ", ctx.getCertificatePeriod(ctx.certificateData.certificatePeriod), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.certificateData.certificateNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0633\u0627\u0631\u064A\u0629 \u062D\u062A\u0649 \u062A\u0627\u0631\u064A\u062E ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 8, ctx.certificateData.certificateExpirationDate, "yyyy/MM/dd"), " \u0645");
    }
  },
  dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".text-teal[_ngcontent-%COMP%] {\n  color: #29848a;\n}\n\n.text-darkteal[_ngcontent-%COMP%] {\n  color: #005357;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n}\n\n.text-darkblue[_ngcontent-%COMP%] {\n  color: #001f5f;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #00a787;\n}\n\n.cetificate[_ngcontent-%COMP%] {\n  padding: 2.5%;\n  font-family: \"REGA\", sans-serif;\n  color: #000;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n            print-color-adjust: exact;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .top-pattern[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .center-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n}\n\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n  row-gap: 1rem;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%] {\n    row-gap: 3.8rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  position: relative;\n  z-index: 2;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    row-gap: 1rem;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.8vw;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 3vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.6vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 2.25vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.5vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%] {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-inline: 3%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .stamp-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  width: 75%;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  position: relative;\n  z-index: 2;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.25vw;\n  font-weight: bold;\n}\n@media print {\n  .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 1.25vw;\n  }\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .expiration[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\n  margin-inline-start: 0.25rem;\n  padding: 0.25rem;\n  color: #fff;\n  border-radius: 3px;\n  background-color: #001f5f;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.cetificate[_ngcontent-%COMP%]   .cetificate-layout[_ngcontent-%COMP%]   .cert-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvY2VydHMvX3F1YWxpZnlpbmctY2VydGlmaWNhdGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL2VuZ2luZWVyaW5nLWNlcnRpZmljYXRlL2VuZ2luZWVyaW5nLWNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFMRjtJQU1JLGlDQUFBO1lBQUEseUJBQUE7RUNFRjtBQUNGO0FEQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQVBGO0lBUUksaUJBQUE7RUNFSjtBQUNGO0FEQUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNFTjtBREFNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNFUjtBRENNO0VBQ0UsY0FBQTtBQ0NSO0FER0k7RUFDRSxhQUFBO0FDRE47QURJSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNGTjs7QUEzREU7RUFDRSxhQUFBO0FBOERKO0FBNURJO0VBSEY7SUFJSSxlQUFBO0VBK0RKO0FBQ0Y7QUE3REk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FBOEROO0FBNURNO0VBUkY7SUFTSSxhQUFBO0VBK0ROO0FBQ0Y7QUE3RE07RUFDRSxnQkFBQTtBQStEUjtBQTdEUTtFQUhGO0lBSUksY0FBQTtFQWdFUjtBQUNGO0FBN0RNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQStEUjtBQTdEUTtFQUpGO0lBS0ksaUJBQUE7RUFnRVI7QUFDRjtBQTdETTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUErRFI7QUE3RFE7RUFKRjtJQUtJLGdCQUFBO0VBZ0VSO0FBQ0Y7QUE1REk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQThETjtBQTVETTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBOERSO0FBM0RNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQTREUjtBQTFEUTs7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FBNERWO0FBMURVO0VBTEY7O0lBTUksaUJBQUE7RUE4RFY7QUFDRjtBQXpEWTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTJEZDtBQXBESTtFQUNFLG9CQUFBO0FBc0ROO0FBcERNO0VBQ0UsVUFBQTtBQXNEUiIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXRlYWwge1xuICBjb2xvcjogIzI5ODQ4YTtcbn1cblxuLnRleHQtZGFya3RlYWwge1xuICBjb2xvcjogIzAwNTM1Nztcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4udGV4dC1kYXJrYmx1ZSB7XG4gIGNvbG9yOiAjMDAxZjVmO1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMDBhNzg3O1xufVxuXG4uY2V0aWZpY2F0ZSB7XG4gIHBhZGRpbmc6IDIuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIlJFR0FcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG5cbiAgLmNldGlmaWNhdGUtbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAuY2VydC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDFyZW07XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAudG9wLXBhdHRlcm4ge1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VydC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuY2VudGVyLXBhdHRlcm4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICBib3R0b206IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICB9XG4gIH1cbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9jZXJ0cy9xdWFsaWZ5aW5nLWNlcnRpZmljYXRlc1wiO1xuXG4uY2V0aWZpY2F0ZSB7XG4gIC5jZXRpZmljYXRlLWxheW91dCB7XG4gICAgcm93LWdhcDogMXJlbTtcblxuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICByb3ctZ2FwOiAzLjhyZW07XG4gICAgfVxuXG4gICAgLmRhdGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICByb3ctZ2FwOiAuNXJlbTtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgcm93LWdhcDogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAuOHZ3O1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBmb250LXNpemU6IC42dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjI1dnc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGUge1xuICAgICAgICBmb250LXNpemU6IC41dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5leHBpcmF0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIHBhZGRpbmctaW5saW5lOiAzJTtcblxuICAgICAgLnN0YW1wLXBhdHRlcm4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAuMjVyZW07XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjI1dnc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1dnc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgJi5jb3VudCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IC4yNXJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogLjI1cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jZXJ0LWZvb3RlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 13118:
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent": () => (/* binding */ RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 85959);



function RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent_table_2_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "div", 6)(5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const acc_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](acc_r2 == null ? null : acc_r2.qualificationCertifiedEngineer == null ? null : acc_r2.qualificationCertifiedEngineer.engineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", acc_r2 == null ? null : acc_r2.trainingCertificateFile == null ? null : acc_r2.trainingCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", acc_r2 == null ? null : acc_r2.trainingCertificateFile == null ? null : acc_r2.trainingCertificateFile.fileDescription, "");
  }
}
function RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 3)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0627\u0633\u0645 \u0627\u0644\u0645\u062D\u0627\u0633\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent_table_2_tr_9_Template, 11, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.QualificationQualificatedAccountants);
  }
}
class RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.QualificationQualificatedAccountants = null;
  }
  ngOnInit() {
    this.updateQualificationQualificatedAccountants();
  }
  updateQualificationQualificatedAccountants() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationQualificatedAccountants) {
    //         this.QualificationQualificatedAccountants =
    //           res[0].qualificationQualificatedAccountants;
    //       }
    //     })
    // );
    this.subscriptions.push(this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.subscribe(res => {
      this.QualificationQualificatedAccountants = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent.ɵfac = function RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent_Factory(t) {
  return new (t || RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_0__.RequestService));
};
RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
  selectors: [["app-request-accountants-completed-wafi-training-program-for-accounting-supervision"]],
  decls: 3,
  vars: 1,
  consts: [[1, "tab-data-section"], [1, "table-responsive"], ["class", "table table-light mb-3", 4, "ngIf"], [1, "table", "table-light", "mb-3"], [1, "w-25"], [4, "ngFor", "ngForOf"], [1, "value"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href"], [1, "d-flex", "align-items-center", "justify-content-end", "column-gap-2"]],
  template: function RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent_table_2_Template, 10, 1, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.QualificationQualificatedAccountants && ctx.QualificationQualificatedAccountants.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".table[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-block: 0.75rem 1rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #E7EAEA;\n}\n.table-light[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #001F21;\n  background-color: #F4F6F6;\n}\n.table-light[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n  background-color: white;\n}\n.table-light[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX3RhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL2NvbXBvbmVudHMvcmVxdWVzdC1hY2NvdW50YW50cy1jb21wbGV0ZWQtd2FmaS10cmFpbmluZy1wcm9ncmFtLWZvci1hY2NvdW50aW5nLXN1cGVydmlzaW9uL3JlcXVlc3QtYWNjb3VudGFudHMtY29tcGxldGVkLXdhZmktdHJhaW5pbmctcHJvZ3JhbS1mb3ItYWNjb3VudGluZy1zdXBlcnZpc2lvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQ3dEYTtFRHZEYixnQkFBQTtBRUNGO0FGQ0U7O0VBRUUsc0JBQUE7QUVDSjtBRkdJO0VBQ0UsMkJBQUE7RUFDQSxlQzZDUztFRDVDVCxnQkFBQTtBRUROO0FGR007RUFDRSxrQ0N1REU7RUR0REYsZ0NDc0RFO0FDdkRWO0FGSU07RUFDRSxnQ0NrREU7RURqREYsOEJDaURFO0FDbkRWO0FGS007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRUhSO0FGS1E7RUFDRSxlQUFBO0FFSFY7O0FGVUE7RUFDRSxxQkNqQ1k7QUMwQmQ7QUZVSTtFQUNFLGNDMUNFO0VEMkNGLHlCQUFBO0FFUk47QUZhSTtFQUNFLGNDM0NNO0VENENOLHVCQ2hERTtBQ3FDUjtBRmVFO0VBQ0UsY0N0REc7QUN5Q1A7O0FDM0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0FENkNGO0FDM0NFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCRk1RO0FDcUNaO0FDekNJO0VBQ0UsY0ZNSztBQ3FDWDtBQ3ZDRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHlDSjtBQ3RDRTtFQUNFLGdCQUFBO0FEd0NKOztBQ25DRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QURzQ0o7QUNuQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBRG9DSjtBQ2xDSTtFQUNFLGdCQUFBO0FEb0NOO0FDaENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVGRFc7QUNrQ2Y7QUM5QkU7RUFDRSxlRkxXO0VFTVgsY0Z2RE87QUN1Rlg7QUM3QkU7RUFDRSxlRlRXO0VFVVgsZ0JBQUE7RUFDQSxjRjlEUTtBQzZGWjtBQzdCSTtFQUNFLGtCQUFBO0FEK0JOO0FDM0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVGeEJXO0VFeUJYLGdCQUFBO0VBQ0EsY0ZsRkk7QUM4R1I7QUMxQkk7RUFDRSxrQkFBQTtBRDRCTjtBQ3pCSTtFQUNFLGNGbkZNO0FDOEdaO0FDeEJJO0VBQ0UsZUFBQTtBRDBCTjtBQ3hCTTtFQUNFLGVGeENPO0FDa0VmIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gID50aGVhZCxcbiAgPnRib2R5IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgPnRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nLWJsb2NrOiAuNzVyZW0gMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgICAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItc3RhcnQtZW5kLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICB9XG5cbiAgICAgIC5zb3J0YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50YWJsZS1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuXG4gID50aGVhZCB7XG4gICAgdGgge1xuICAgICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RjY7XG4gICAgfVxuICB9XG5cbiAgPnRib2R5IHtcbiAgICB0ZCB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAudGV4dC1kYXJrIHtcbiAgICBjb2xvcjogJGRhcms7XG4gIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50YWJsZSA+IHRoZWFkLFxuLnRhYmxlID4gdGJvZHkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRhYmxlID4gdGhlYWQgdGgge1xuICBwYWRkaW5nLWJsb2NrOiAwLjc1cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50YWJsZSA+IHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6IDAuMjVyZW07XG59XG4udGFibGUgPiB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC4yNXJlbTtcbn1cbi50YWJsZSA+IHRoZWFkIHRoIC5zb3J0YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YWJsZSA+IHRoZWFkIHRoIC5zb3J0YWJsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhYmxlLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjRTdFQUVBO1xufVxuLnRhYmxlLWxpZ2h0ID4gdGhlYWQgdGgge1xuICBjb2xvcjogIzAwMUYyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcbn1cbi50YWJsZS1saWdodCA+IHRib2R5IHRkIHtcbiAgY29sb3I6ICNBREFGQjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRhYmxlLWxpZ2h0IC50ZXh0LWRhcmsge1xuICBjb2xvcjogIzM1M0IzQjtcbn1cblxuLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5lZGl0LWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbn1cbi50YWItZGF0YS1oZWFkZXIgfiAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YWItZGF0YS1zZWN0aW9uICsgLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY3Njc2O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5ICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5pY29uIHtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 12099:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-certified-facility-engineers/request-certified-facility-engineers.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestCertifiedFacilityEngineersComponent": () => (/* binding */ RequestCertifiedFacilityEngineersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 85959);



function RequestCertifiedFacilityEngineersComponent_ng_container_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eng_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eng_r3 == null ? null : eng_r3.engineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eng_r3 == null ? null : eng_r3.identityNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](eng_r3 == null ? null : eng_r3.professionalLicenseNumber);
  }
}
function RequestCertifiedFacilityEngineersComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestCertifiedFacilityEngineersComponent_ng_container_13_tr_1_Template, 9, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.certifiedEngineers);
  }
}
function RequestCertifiedFacilityEngineersComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
class RequestCertifiedFacilityEngineersComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.certifiedEngineers = null;
  }
  ngOnInit() {
    this.updateCertifiedFacilityEngineers();
  }
  updateCertifiedFacilityEngineers() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationCertifiedEngineers) {
    //         this.certifiedEngineers = res[0].qualificationCertifiedEngineers;
    //       }
    //     })
    // );
    this.subscriptions.push(this._requestService.CertifiedFacilityEngineers$.subscribe(res => {
      this.certifiedEngineers = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestCertifiedFacilityEngineersComponent.ɵfac = function RequestCertifiedFacilityEngineersComponent_Factory(t) {
  return new (t || RequestCertifiedFacilityEngineersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_0__.RequestService));
};
RequestCertifiedFacilityEngineersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RequestCertifiedFacilityEngineersComponent,
  selectors: [["app-request-certified-facility-engineers"]],
  decls: 15,
  vars: 2,
  consts: [[1, "tab-data-section"], [1, "table-responsive"], [1, "table", "table-light"], [1, "w-25"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-end", "column-gap-2"], [1, "text-danger", "text-center", "p-3"]],
  template: function RequestCertifiedFacilityEngineersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0647\u0646\u062F\u0633");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0631\u0642\u0645 \u0627\u0644\u0631\u062E\u0635\u0629 \u0627\u0644\u0645\u0647\u0646\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RequestCertifiedFacilityEngineersComponent_ng_container_13_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RequestCertifiedFacilityEngineersComponent_ng_container_14_Template, 3, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.certifiedEngineers && ctx.certifiedEngineers.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.certifiedEngineers);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".table[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-block: 0.75rem 1rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #E7EAEA;\n}\n.table-light[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #001F21;\n  background-color: #F4F6F6;\n}\n.table-light[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n  background-color: white;\n}\n.table-light[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX3RhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL2NvbXBvbmVudHMvcmVxdWVzdC1jZXJ0aWZpZWQtZmFjaWxpdHktZW5naW5lZXJzL3JlcXVlc3QtY2VydGlmaWVkLWZhY2lsaXR5LWVuZ2luZWVycy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQ3dEYTtFRHZEYixnQkFBQTtBRUNGO0FGQ0U7O0VBRUUsc0JBQUE7QUVDSjtBRkdJO0VBQ0UsMkJBQUE7RUFDQSxlQzZDUztFRDVDVCxnQkFBQTtBRUROO0FGR007RUFDRSxrQ0N1REU7RUR0REYsZ0NDc0RFO0FDdkRWO0FGSU07RUFDRSxnQ0NrREU7RURqREYsOEJDaURFO0FDbkRWO0FGS007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRUhSO0FGS1E7RUFDRSxlQUFBO0FFSFY7O0FGVUE7RUFDRSxxQkNqQ1k7QUMwQmQ7QUZVSTtFQUNFLGNDMUNFO0VEMkNGLHlCQUFBO0FFUk47QUZhSTtFQUNFLGNDM0NNO0VENENOLHVCQ2hERTtBQ3FDUjtBRmVFO0VBQ0UsY0N0REc7QUN5Q1A7O0FDM0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0FENkNGO0FDM0NFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCRk1RO0FDcUNaO0FDekNJO0VBQ0UsY0ZNSztBQ3FDWDtBQ3ZDRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRHlDSjtBQ3RDRTtFQUNFLGdCQUFBO0FEd0NKOztBQ25DRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QURzQ0o7QUNuQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBRG9DSjtBQ2xDSTtFQUNFLGdCQUFBO0FEb0NOO0FDaENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVGRFc7QUNrQ2Y7QUM5QkU7RUFDRSxlRkxXO0VFTVgsY0Z2RE87QUN1Rlg7QUM3QkU7RUFDRSxlRlRXO0VFVVgsZ0JBQUE7RUFDQSxjRjlEUTtBQzZGWjtBQzdCSTtFQUNFLGtCQUFBO0FEK0JOO0FDM0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVGeEJXO0VFeUJYLGdCQUFBO0VBQ0EsY0ZsRkk7QUM4R1I7QUMxQkk7RUFDRSxrQkFBQTtBRDRCTjtBQ3pCSTtFQUNFLGNGbkZNO0FDOEdaO0FDeEJJO0VBQ0UsZUFBQTtBRDBCTjtBQ3hCTTtFQUNFLGVGeENPO0FDa0VmIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gID50aGVhZCxcbiAgPnRib2R5IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgPnRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nLWJsb2NrOiAuNzVyZW0gMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgICAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItc3RhcnQtZW5kLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICB9XG5cbiAgICAgIC5zb3J0YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50YWJsZS1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuXG4gID50aGVhZCB7XG4gICAgdGgge1xuICAgICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RjY7XG4gICAgfVxuICB9XG5cbiAgPnRib2R5IHtcbiAgICB0ZCB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAudGV4dC1kYXJrIHtcbiAgICBjb2xvcjogJGRhcms7XG4gIH1cbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50YWJsZSA+IHRoZWFkLFxuLnRhYmxlID4gdGJvZHkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRhYmxlID4gdGhlYWQgdGgge1xuICBwYWRkaW5nLWJsb2NrOiAwLjc1cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50YWJsZSA+IHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6IDAuMjVyZW07XG59XG4udGFibGUgPiB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC4yNXJlbTtcbn1cbi50YWJsZSA+IHRoZWFkIHRoIC5zb3J0YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YWJsZSA+IHRoZWFkIHRoIC5zb3J0YWJsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhYmxlLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjRTdFQUVBO1xufVxuLnRhYmxlLWxpZ2h0ID4gdGhlYWQgdGgge1xuICBjb2xvcjogIzAwMUYyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcbn1cbi50YWJsZS1saWdodCA+IHRib2R5IHRkIHtcbiAgY29sb3I6ICNBREFGQjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRhYmxlLWxpZ2h0IC50ZXh0LWRhcmsge1xuICBjb2xvcjogIzM1M0IzQjtcbn1cblxuLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5lZGl0LWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbn1cbi50YWItZGF0YS1oZWFkZXIgfiAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YWItZGF0YS1zZWN0aW9uICsgLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY3Njc2O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5ICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5pY29uIHtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 54309:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-data/request-data.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestDataComponent": () => (/* binding */ RequestDataComponent)
/* harmony export */ });
/* harmony import */ var _commercial_registry_commercial_registry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commercial-registry/commercial-registry.component */ 57970);
/* harmony import */ var _request_wafi_training_request_wafi_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-wafi-training/request-wafi-training.component */ 19017);
/* harmony import */ var _request_financial_capabilities_requirements_request_financial_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-financial-capabilities-requirements/request-financial-capabilities-requirements.component */ 38005);
/* harmony import */ var _request_job_requirements_and_human_resources_request_job_requirements_and_human_resources_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component */ 43723);
/* harmony import */ var _request_technical_capabilities_requirements_request_technical_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request-technical-capabilities-requirements/request-technical-capabilities-requirements.component */ 58525);
/* harmony import */ var _request_certified_facility_engineers_request_certified_facility_engineers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../request-certified-facility-engineers/request-certified-facility-engineers.component */ 12099);
/* harmony import */ var _request_institutional_capabilities_and_additional_discriminatory_human_resources_request_institutional_capabilities_and_additional_discriminatory_human_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component */ 12162);
/* harmony import */ var _request_distinctive_additional_technical_capabilities_request_distinctive_additional_technical_capabilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component */ 74966);
/* harmony import */ var _request_engineers_with_sufficient_training_for_the_engineering_consultant_request_engineers_with_sufficient_training_for_the_engineering_consultant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component */ 20508);
/* harmony import */ var _request_accountants_completed_wafi_training_program_for_accounting_supervision_request_accountants_completed_wafi_training_program_for_accounting_supervision_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component */ 13118);
/* harmony import */ var _request_national_addresses_request_national_addresses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../request-national-addresses/request-national-addresses.component */ 35607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_shared_services_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/accordion/accordion.service */ 45426);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _shared_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/accordion/accordion.component */ 610);















class RequestDataComponent {
  constructor(_accordionService, _requestService) {
    this._accordionService = _accordionService;
    this._requestService = _requestService;
    this.subscriptions = [];
    this.accordionContent = {
      oneAtATime: true,
      isAnimated: true,
      accordionComponentList: [{
        icon: '',
        title: 'بيانات السجل التجاري',
        component: _commercial_registry_commercial_registry_component__WEBPACK_IMPORTED_MODULE_0__.CommercialRegistryComponent,
        disabled: false,
        isVisible: false,
        id: 'CommercialRegistryComponent',
        isViewed: false
      }, {
        icon: '',
        title: 'دريب الهيئة العامة للعقار للبيع على الخارطة',
        component: _request_wafi_training_request_wafi_training_component__WEBPACK_IMPORTED_MODULE_1__.RequestWafiTrainingComponent,
        id: 'RequestWafiTrainingComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'متطلبات القدرات المالية',
        component: _request_financial_capabilities_requirements_request_financial_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_2__.RequestFinancialCapabilitiesRequirementsComponent,
        id: 'RequestFinancialCapabilitiesRequirementsComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: ' متطلبات القدرات المؤسسية و الموارد البشرية',
        component: _request_job_requirements_and_human_resources_request_job_requirements_and_human_resources_component__WEBPACK_IMPORTED_MODULE_3__.RequestJobRequirementsAndHumanResourcesComponent,
        id: 'RequestJobRequirementsAndHumanResourcesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'متطلبات القدرات الفنية',
        component: _request_technical_capabilities_requirements_request_technical_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_4__.RequestTechnicalCapabilitiesRequirementsComponent,
        id: 'RequestTechnicalCapabilitiesRequirementsComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'موظفين الشركة المعتمدين',
        component: _request_certified_facility_engineers_request_certified_facility_engineers_component__WEBPACK_IMPORTED_MODULE_5__.RequestCertifiedFacilityEngineersComponent,
        id: 'RequestCertifiedFacilityEngineersComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'القدرات المؤسسية والموارد الإضافية',
        component: _request_institutional_capabilities_and_additional_discriminatory_human_resources_request_institutional_capabilities_and_additional_discriminatory_human_resources_component__WEBPACK_IMPORTED_MODULE_6__.RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
        id: 'RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'القدارت الفنية الإضافية',
        component: _request_distinctive_additional_technical_capabilities_request_distinctive_additional_technical_capabilities_component__WEBPACK_IMPORTED_MODULE_7__.RequestDistinctiveAdditionalTechnicalCapabilitiesComponent,
        id: 'RequestDistinctiveAdditionalTechnicalCapabilitiesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
        component: _request_engineers_with_sufficient_training_for_the_engineering_consultant_request_engineers_with_sufficient_training_for_the_engineering_consultant_component__WEBPACK_IMPORTED_MODULE_8__.RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
        id: 'RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
        component: _request_accountants_completed_wafi_training_program_for_accounting_supervision_request_accountants_completed_wafi_training_program_for_accounting_supervision_component__WEBPACK_IMPORTED_MODULE_9__.RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
        id: 'RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'عنوان المنشأة',
        component: _request_national_addresses_request_national_addresses_component__WEBPACK_IMPORTED_MODULE_10__.RequestNationalAddressesComponent,
        id: 'RequestNationalAddressesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }]
    };
  }
  ngOnInit() {
    this.getSeclectRequest();
    this.observeDataIsUpdated();
    this.updateAccordionContent();
  }
  updateAccordionContent() {
    this._accordionService.updateAccordionContent(this.accordionContent);
  }
  observeDataIsUpdated() {
    this.subscriptions.push(this._requestService.dataIsUpdate.subscribe(res => {
      this.getSeclectRequest();
    }));
  }
  getSeclectRequest() {
    this.subscriptions.push(this._requestService.seclectRequest$.subscribe(res => {
      if (res && res.length > 0) {
        this.updateAllBehaviorSubject(res[0]);
      }
    }));
  }
  updateAllBehaviorSubject(requestDetails) {
    console.log("requestDetails", requestDetails);
    if (requestDetails.facilities) this.updateEmployeeFacilityBasicInfoComponent(requestDetails.facilities);
    if (requestDetails.facilities.qualificationQualificatedAccountants) this.updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(requestDetails.facilities.qualificationQualificatedAccountants);
    if (requestDetails.facilities.qualificationQualificatedEngineers) this.updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(requestDetails.facilities.qualificationQualificatedEngineers);
    if (requestDetails.facilities.qualificationNationalAddressDetailDto && requestDetails.facilities.qualificationNationalAddressDetailDto.length > 0) this.updateEmployeeNationalAddressesComponent(requestDetails.facilities.qualificationNationalAddressDetailDto);
    if (requestDetails.facilities.qualificationAdditionInstitutionalCapacityAndHrRequirements && requestDetails.facilities.qualificationAdditionInstitutionalCapacityAndHrRequirements.length > 0) this.updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(requestDetails.facilities.qualificationAdditionInstitutionalCapacityAndHrRequirements);
    if (requestDetails.facilities.additionTechnicalCapabilitiesRequirements && requestDetails.facilities.additionTechnicalCapabilitiesRequirements.length > 0) this.updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(requestDetails.facilities.additionTechnicalCapabilitiesRequirements);
    if (requestDetails.facilities.qualificationCertifiedEngineers && requestDetails.facilities.qualificationCertifiedEngineers.length > 0) this.updateEmployeeCertifiedFacilityEngineersComponent(requestDetails.facilities.qualificationCertifiedEngineers);
    if (requestDetails.facilities.technicalCapabilitiesRequirements && requestDetails.facilities.technicalCapabilitiesRequirements.length > 0) this.updateEmployeeTechnicalCapabilitiesRequirementsComponent(requestDetails.facilities.technicalCapabilitiesRequirements);
    if (requestDetails.facilities.qualificationWafiTrainings && requestDetails.facilities.qualificationWafiTrainings.length > 0) this.updateEmployeeWafiTrainingComponent(requestDetails.facilities.qualificationWafiTrainings);
    if (requestDetails.facilities.qualificationFinancialCapabilityRequirements && requestDetails.facilities.qualificationFinancialCapabilityRequirements.length > 0) this.updateEmployeeFinancialCapabilitiesRequirementsComponent(requestDetails.facilities.qualificationFinancialCapabilityRequirements);
    if (requestDetails.facilities.qualificationInstitutionalCapacityAndHrRequirements && requestDetails.facilities.qualificationInstitutionalCapacityAndHrRequirements.length > 0) this.updateEmployeeJobRequirementsAndHumanResourcesComponent(requestDetails.facilities.qualificationInstitutionalCapacityAndHrRequirements);
  }
  updateEmployeeFacilityBasicInfoComponent(facilities) {
    console.log("updateEmployeeFacilityBasicInfoComponent", facilities);
    this._requestService.FacilityBasicInfo$.next(facilities);
    this.accordionContent.accordionComponentList[0].isVisible = true;
  }
  updateEmployeeWafiTrainingComponent(WafiTraining) {
    this._requestService.WafiTraining$.next(WafiTraining);
    this.accordionContent.accordionComponentList[1].isVisible = true;
  }
  updateEmployeeFinancialCapabilitiesRequirementsComponent(qualificationFinancialCapabilityRequirements) {
    this._requestService.FinancialCapabilitiesRequirements$.next(qualificationFinancialCapabilityRequirements);
    this.accordionContent.accordionComponentList[2].isVisible = true;
  }
  updateEmployeeJobRequirementsAndHumanResourcesComponent(qualificationInstitutionalCapacityAndHrRequirements) {
    this._requestService.JobRequirementsAndHumanResources$.next(qualificationInstitutionalCapacityAndHrRequirements);
    this.accordionContent.accordionComponentList[3].isVisible = true;
  }
  updateEmployeeTechnicalCapabilitiesRequirementsComponent(technicalCapabilitiesRequirements) {
    this._requestService.TechnicalCapabilitiesRequirements$.next(technicalCapabilitiesRequirements);
    this.accordionContent.accordionComponentList[4].isVisible = true;
  }
  updateEmployeeCertifiedFacilityEngineersComponent(qualificationCertifiedEngineers) {
    this._requestService.CertifiedFacilityEngineers$.next(qualificationCertifiedEngineers);
    this.accordionContent.accordionComponentList[5].isVisible = true;
  }
  updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(qualificationAdditionInstitutionalCapacityAndHrRequirements) {
    this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.next(qualificationAdditionInstitutionalCapacityAndHrRequirements);
    this.accordionContent.accordionComponentList[6].isVisible = true;
  }
  updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(additionTechnicalCapabilitiesRequirements) {
    this._requestService.DistinctiveAdditionalTechnicalCapabilities$.next(additionTechnicalCapabilitiesRequirements);
    this.accordionContent.accordionComponentList[7].isVisible = true;
  }
  updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(qualificationQualificatedEngineers) {
    this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.next(qualificationQualificatedEngineers);
    this.accordionContent.accordionComponentList[8].isVisible = true;
  }
  updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(qualificationQualificatedAccountants) {
    this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.next(qualificationQualificatedAccountants);
    this.accordionContent.accordionComponentList[9].isVisible = true;
  }
  updateEmployeeNationalAddressesComponent(qualificationNationalAddressDetailDto) {
    this._requestService.NationalAddresses$.next(qualificationNationalAddressDetailDto);
    this.accordionContent.accordionComponentList[10].isVisible = true;
  }
  ngOnDestroy() {
    this._requestService.seclectRequest$.next(null);
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RequestDataComponent.ɵfac = function RequestDataComponent_Factory(t) {
  return new (t || RequestDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_11__.AccordionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_12__.RequestService));
};
RequestDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: RequestDataComponent,
  selectors: [["app-request-data"]],
  decls: 1,
  vars: 0,
  template: function RequestDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-accordion");
    }
  },
  dependencies: [_shared_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_13__.AccordionComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 74966:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component.ts ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestDistinctiveAdditionalTechnicalCapabilitiesComponent": () => (/* binding */ RequestDistinctiveAdditionalTechnicalCapabilitiesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0645\u0644\u0641 \u0631\u062E\u0635\u0629 \u0644\u0627\u062D\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.baseUrl + ctx_r1.additionTechnicalCapability.wafiProjectLicenseFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.additionTechnicalCapability.wafiProjectLicenseFile.fileDescription, "");
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_3_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contsAndDevsServiceProviders_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", contsAndDevsServiceProviders_r6.description, ") ");
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_3_div_3_span_4_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contsAndDevsServiceProviders_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", contsAndDevsServiceProviders_r6.certificateNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", contsAndDevsServiceProviders_r6.description);
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0623\u0631\u0642\u0627\u0645 \u0634\u0647\u0627\u062F\u0627\u062A \u0645\u0632\u0648\u062F\u064A \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0624\u0647\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_3_div_3_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.additionTechnicalCapability.qualificationContsAndDevsServiceProvidersCertificateNumbers);
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_4_div_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r11.baseUrl + licenses_r10.sysFileManager.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", licenses_r10.sysFileManager.fileDescription, "");
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_4_div_3_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", licenses_r10 && licenses_r10.sysFileManager);
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0631\u062E\u0635 \u0645\u0634\u0627\u0631\u064A\u0639 \u0635\u063A\u064A\u0631\u0629 \u0623\u0648 \u0645\u062A\u0648\u0633\u0637\u0629 \u0645\u0646\u062C\u0632\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_4_div_3_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.additionTechnicalCapability.qualificationCompletedSmallOrMediumProjectsLicenses);
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0631\u062E\u0635 \u062A\u0633\u0648\u064A\u0642 - \u0628\u064A\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r4.baseUrl + ctx_r4.additionTechnicalCapability.marketingSellingLicenseFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.additionTechnicalCapability.marketingSellingLicenseFile.fileDescription, "");
  }
}
function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_2_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_3_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_4_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_div_5_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.additionTechnicalCapability && ctx_r0.additionTechnicalCapability.wafiProjectLicenseFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.additionTechnicalCapability.qualificationContsAndDevsServiceProvidersCertificateNumbers && ctx_r0.additionTechnicalCapability.qualificationContsAndDevsServiceProvidersCertificateNumbers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.additionTechnicalCapability.qualificationCompletedSmallOrMediumProjectsLicenses && ctx_r0.additionTechnicalCapability.qualificationCompletedSmallOrMediumProjectsLicenses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.additionTechnicalCapability && ctx_r0.additionTechnicalCapability.marketingSellingLicenseFile);
  }
}
class RequestDistinctiveAdditionalTechnicalCapabilitiesComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.additionTechnicalCapability = null;
  }
  ngOnInit() {
    this.updateadditionTechnicalCapability();
  }
  updateadditionTechnicalCapability() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].additionTechnicalCapabilitiesRequirements)
    //         this.additionTechnicalCapability =
    //           res[0].additionTechnicalCapabilitiesRequirements[0];
    //     })
    // );
    this.subscriptions.push(this._requestService.DistinctiveAdditionalTechnicalCapabilities$.subscribe(res => {
      if (res) this.additionTechnicalCapability = res[0];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestDistinctiveAdditionalTechnicalCapabilitiesComponent.ɵfac = function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_Factory(t) {
  return new (t || RequestDistinctiveAdditionalTechnicalCapabilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestDistinctiveAdditionalTechnicalCapabilitiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestDistinctiveAdditionalTechnicalCapabilitiesComponent,
  selectors: [["app-request-distinctive-additional-technical-capabilities"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href"], ["class", "value", 4, "ngFor", "ngForOf"], [1, "icon", "material-icons"], [4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"]],
  template: function RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestDistinctiveAdditionalTechnicalCapabilitiesComponent_div_0_Template, 6, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.additionTechnicalCapability);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3QtZGlzdGluY3RpdmUtYWRkaXRpb25hbC10ZWNobmljYWwtY2FwYWJpbGl0aWVzL3JlcXVlc3QtZGlzdGluY3RpdmUtYWRkaXRpb25hbC10ZWNobmljYWwtY2FwYWJpbGl0aWVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJFTVE7QURSWjtBRElJO0VBQ0UsY0VNSztBRFJYO0FETUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjs7QURVRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUNQSjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUNUSjtBRFdJO0VBQ0UsZ0JBQUE7QUNUTjtBRGFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVFRFc7QURYZjtBRGVFO0VBQ0UsZUVMVztFRk1YLGNFdkRPO0FEMENYO0FEZ0JFO0VBQ0UsZUVUVztFRlVYLGdCQUFBO0VBQ0EsY0U5RFE7QURnRFo7QURnQkk7RUFDRSxrQkFBQTtBQ2ROO0FEa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVFeEJXO0VGeUJYLGdCQUFBO0VBQ0EsY0VsRkk7QURpRVI7QURtQkk7RUFDRSxrQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLGNFbkZNO0FEaUVaO0FEcUJJO0VBQ0UsZUFBQTtBQ25CTjtBRHFCTTtFQUNFLGVFeENPO0FEcUJmIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 20508:
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component.ts ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent": () => (/* binding */ RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent_div_1_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "div", 6)(5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eng_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](eng_r2 == null ? null : eng_r2.engineerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", eng_r2 == null ? null : eng_r2.trainingCertificateFile == null ? null : eng_r2.trainingCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", eng_r2 == null ? null : eng_r2.trainingCertificateFile == null ? null : eng_r2.trainingCertificateFile.fileDescription, "");
  }
}
function RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "table", 3)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0647\u0646\u062F\u0633");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent_div_1_tr_10_Template, 11, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.QualifiedEngineers);
  }
}
class RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.QualifiedEngineers = null;
  }
  ngOnInit() {
    this.updateQualifiedEngineers();
  }
  updateQualifiedEngineers() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationQualificatedEngineers) {
    //         this.QualifiedEngineers = res[0].qualificationQualificatedEngineers;
    //       }
    //     })
    // );
    this.subscriptions.push(this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.subscribe(res => {
      this.QualifiedEngineers = res;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent.ɵfac = function RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent_Factory(t) {
  return new (t || RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
  selectors: [["app-request-engineers-with-sufficient-training-for-the-engineering-consultant"]],
  decls: 2,
  vars: 1,
  consts: [[1, "tab-data-section"], ["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-light"], [1, "w-25"], [4, "ngFor", "ngForOf"], [1, "value"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href"], [1, "d-flex", "align-items-center", "justify-content-end", "column-gap-2"]],
  template: function RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent_div_1_Template, 11, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.QualifiedEngineers && ctx.QualifiedEngineers.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".table[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-block: 0.75rem 1rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #E7EAEA;\n}\n.table-light[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #001F21;\n  background-color: #F4F6F6;\n}\n.table-light[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n  background-color: white;\n}\n.table-light[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX3RhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL2NvbXBvbmVudHMvcmVxdWVzdC1lbmdpbmVlcnMtd2l0aC1zdWZmaWNpZW50LXRyYWluaW5nLWZvci10aGUtZW5naW5lZXJpbmctY29uc3VsdGFudC9yZXF1ZXN0LWVuZ2luZWVycy13aXRoLXN1ZmZpY2llbnQtdHJhaW5pbmctZm9yLXRoZS1lbmdpbmVlcmluZy1jb25zdWx0YW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fdGFiLWNvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVDd0RhO0VEdkRiLGdCQUFBO0FFQ0Y7QUZDRTs7RUFFRSxzQkFBQTtBRUNKO0FGR0k7RUFDRSwyQkFBQTtFQUNBLGVDNkNTO0VENUNULGdCQUFBO0FFRE47QUZHTTtFQUNFLGtDQ3VERTtFRHRERixnQ0NzREU7QUN2RFY7QUZJTTtFQUNFLGdDQ2tERTtFRGpERiw4QkNpREU7QUNuRFY7QUZLTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFSFI7QUZLUTtFQUNFLGVBQUE7QUVIVjs7QUZVQTtFQUNFLHFCQ2pDWTtBQzBCZDtBRlVJO0VBQ0UsY0MxQ0U7RUQyQ0YseUJBQUE7QUVSTjtBRmFJO0VBQ0UsY0MzQ007RUQ0Q04sdUJDaERFO0FDcUNSO0FGZUU7RUFDRSxjQ3RERztBQ3lDUDs7QUMzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUQ2Q0Y7QUMzQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJGTVE7QUNxQ1o7QUN6Q0k7RUFDRSxjRk1LO0FDcUNYO0FDdkNFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEeUNKO0FDdENFO0VBQ0UsZ0JBQUE7QUR3Q0o7O0FDbkNFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBRHNDSjtBQ25DRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FEb0NKO0FDbENJO0VBQ0UsZ0JBQUE7QURvQ047QUNoQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUZEVztBQ2tDZjtBQzlCRTtFQUNFLGVGTFc7RUVNWCxjRnZETztBQ3VGWDtBQzdCRTtFQUNFLGVGVFc7RUVVWCxnQkFBQTtFQUNBLGNGOURRO0FDNkZaO0FDN0JJO0VBQ0Usa0JBQUE7QUQrQk47QUMzQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUZ4Qlc7RUV5QlgsZ0JBQUE7RUFDQSxjRmxGSTtBQzhHUjtBQzFCSTtFQUNFLGtCQUFBO0FENEJOO0FDekJJO0VBQ0UsY0ZuRk07QUM4R1o7QUN4Qkk7RUFDRSxlQUFBO0FEMEJOO0FDeEJNO0VBQ0UsZUZ4Q087QUNrRWYiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgPnRoZWFkLFxuICA+dGJvZHkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICA+dGhlYWQge1xuICAgIHRoIHtcbiAgICAgIHBhZGRpbmctYmxvY2s6IC43NXJlbSAxcmVtO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgICAgICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgIH1cblxuICAgICAgLnNvcnRhYmxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG5cbiAgPnRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcbiAgICB9XG4gIH1cblxuICA+dGJvZHkge1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWRhcmsge1xuICAgIGNvbG9yOiAkZGFyaztcbiAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYmxlID4gdGhlYWQsXG4udGFibGUgPiB0Ym9keSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udGFibGUgPiB0aGVhZCB0aCB7XG4gIHBhZGRpbmctYmxvY2s6IDAuNzVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnRhYmxlID4gdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogMC4yNXJlbTtcbn1cbi50YWJsZSA+IHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItc3RhcnQtZW5kLXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjI1cmVtO1xufVxuLnRhYmxlID4gdGhlYWQgdGggLnNvcnRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhYmxlID4gdGhlYWQgdGggLnNvcnRhYmxlIC5pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFibGUtbGlnaHQge1xuICBib3JkZXItY29sb3I6ICNFN0VBRUE7XG59XG4udGFibGUtbGlnaHQgPiB0aGVhZCB0aCB7XG4gIGNvbG9yOiAjMDAxRjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xufVxuLnRhYmxlLWxpZ2h0ID4gdGJvZHkgdGQge1xuICBjb2xvcjogI0FEQUZCMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGFibGUtbGlnaHQgLnRleHQtZGFyayB7XG4gIGNvbG9yOiAjMzUzQjNCO1xufVxuXG4udGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 67280:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-events-log/request-events-log.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestEventsLogComponent": () => (/* binding */ RequestEventsLogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 85959);



function RequestEventsLogComponent_div_2_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 5)(2, "div", 6)(3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0627\u0644\u062D\u062F\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0648\u0642\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 3, log_r2.createdOn, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 6, log_r2.createdOn, "shortTime"));
  }
}
function RequestEventsLogComponent_div_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestEventsLogComponent_div_2_ng_container_12_div_1_Template, 19, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !log_r2.hiddenForCustomer);
  }
}
function RequestEventsLogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u062D\u062F\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0644\u0648\u0642\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RequestEventsLogComponent_div_2_ng_container_12_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.requestLogs);
  }
}
class RequestEventsLogComponent {
  constructor(
  // private _service: RequestLogService,
  // private _requestListService: RequestListService,
  // private _requestDetailsService: RequestDetailsService,
  _requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.requestLogs = [];
    this.selectedRequest = null;
    this.selectedRequestID = '';
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  ngOnInit() {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated();
  }
  observeDataIsUpdated() {
    this.subscriptions.push(this._requestService.dataIsUpdate.subscribe(res => {
      this.GetByRequestId();
    }));
  }
  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage();
    if (this.selectedRequestID) this.GetByRequestId();
  }
  GetByRequestId() {
    this.subscriptions.push(this._requestService.GetRequestLogByRequestId(this.selectedRequestID).subscribe(res => {
      if (res.data) this.requestLogs = res.data;
    }));
  }
}
RequestEventsLogComponent.ɵfac = function RequestEventsLogComponent_Factory(t) {
  return new (t || RequestEventsLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_0__.RequestService));
};
RequestEventsLogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RequestEventsLogComponent,
  selectors: [["app-request-events-log"]],
  decls: 3,
  vars: 1,
  consts: [[1, "card", "h-100"], [1, "card-body"], ["class", "timeline", 4, "ngIf"], [1, "timeline"], [1, "timeline-header"], [1, "row", "row-gap-2"], [1, "col-12", "col-md-4", "col-xl"], [1, "title"], [4, "ngFor", "ngForOf"], ["class", "timeline-item", 4, "ngIf"], [1, "timeline-item"], [1, "label"], [1, "status"], [1, "date"], [1, "time"]],
  template: function RequestEventsLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RequestEventsLogComponent_div_2_Template, 13, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestLogs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: [".timeline[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 2rem;\n  border-radius: 0.25rem;\n  background: linear-gradient(0deg, rgba(242, 242, 242, 0.3), rgba(242, 242, 242, 0.3)), #F1F5F7;\n}\n@media screen and (max-width: 1199px) {\n  .timeline[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.timeline[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #969799;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  color: #353B3B;\n  border-radius: 0.25rem;\n  background-color: white;\n  box-shadow: 0px 4px 8px rgba(0, 31, 33, 0.1);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]    + .timeline-item[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-inline-end: 0.5rem;\n  font-weight: bold;\n}\n@media screen and (min-width: 1200px) {\n  .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid #667676;\n  border-radius: 50%;\n  box-shadow: 0px 4px 8px rgba(0, 31, 33, 0.1);\n  overflow: hidden;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #959FA8;\n}\n\n.timeline-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.timeline-horizontal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  color: #353B3B;\n}\n.timeline-horizontal[_ngcontent-%COMP%]   .timeline-item.completed[_ngcontent-%COMP%] {\n  color: #59A8D4;\n}\n.timeline-horizontal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-inline-end: 0.5rem;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RpbWVsaW5lLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL2ZlYXR1cmVzL3F1YWxpZnlpbmcvY29tcG9uZW50cy9yZXF1ZXN0LWV2ZW50cy1sb2cvcmVxdWVzdC1ldmVudHMtbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQ21FTTtFRGxFTiw4RkFBQTtBRUFKO0FGRUk7RUFORjtJQU9JLGFBQUE7RUVDSjtBQUNGO0FGRUU7RUFDRSxlQzRDVztFRDNDWCxjQUFBO0FFQUo7QUZHRTtFQUNFLG9CQUFBO0VBRUEsY0NsQkc7RURvQkgsc0JDaURNO0VEaEROLHVCQ3BCSTtFRHFCSiw0Q0FBQTtBRUhKO0FGS0k7RUFDRSxrQkFBQTtBRUhOO0FGTUk7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FFSk47QUZNTTtFQUpGO0lBS0ksYUFBQTtFRUhOO0FBQ0Y7QUZNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FFSk47QUZNTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsNENBQUE7RUFDQSxnQkFBQTtBRVBSO0FGVU07RUFDRSxjQ3RCSTtBQ2NaOztBRmNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FFWEY7QUZhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtFQUNBLGNDNUVHO0FDZ0VQO0FGY0k7RUFDRSxjQzFEQztBQzhDUDtBRmVJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBRWJOOztBQXRFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBeUVKIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lIHtcbiAgLnRpbWVsaW5lLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjMpLCByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuMykpLCAjRjFGNUY3O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAjOTY5Nzk5O1xuICB9XG5cbiAgLnRpbWVsaW5lLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuXG4gICAgY29sb3I6ICRkYXJrO1xuXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoJGJsYWNrLCAwLjEpO1xuXG4gICAgJisudGltZWxpbmUtaXRlbSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IC41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgkYmxhY2ssIDAuMSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRpbWVsaW5lLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuXG4gIC50aW1lbGluZS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNXJlbTtcblxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGNvbG9yOiAkZGFyaztcblxuICAgICYuY29tcGxldGVkIHtcbiAgICAgIGNvbG9yOiAkaW5mbztcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IC41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC90aW1lbGluZVwiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 38005:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-financial-capabilities-requirements/request-financial-capabilities-requirements.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestFinancialCapabilitiesRequirementsComponent": () => (/* binding */ RequestFinancialCapabilitiesRequirementsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0631\u062E\u0635\u0629 \u0627\u0644\u0645\u062D\u0627\u0633\u0628 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0627\u0644\u0645\u0639\u062A\u0645\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.financialCapability.cpalicenseNumber, " ");
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631 \u0634\u0647\u0627\u062F\u0629 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 1, ctx_r2.financialCapability.creditRecordIntegrityCertificateDate, "dd/MM/yyyy"), " ");
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r3.baseUrl + ctx_r3.financialCapability.creditRecordIntegrityCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.financialCapability.creditRecordIntegrityCertificateFile.fileDescription, "");
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0631\u0642\u0645 \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0632\u0643\u0627\u0629 \u0648\u0627\u0644\u062F\u062E\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "blinds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.financialCapability.certificateOfZakatIncome, " ");
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_6_div_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const financialStatment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r8.baseUrl + financialStatment_r7.financialStatementFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", financialStatment_r7.financialStatementFile.fileDescription, "");
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_6_div_3_a_3_Template, 2, 2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const financialStatment_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", financialStatment_r7 && financialStatment_r7.financialStatementFile);
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0633\u0646\u0647 \u0627\u0644\u0645\u064A\u0644\u0627\u062F\u064A\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_6_div_3_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.financialCapability.qualificationFinancialStatements);
  }
}
function RequestFinancialCapabilitiesRequirementsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_2_Template, 7, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_3_Template, 8, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_4_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_5_Template, 7, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RequestFinancialCapabilitiesRequirementsComponent_div_0_div_6_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.financialCapability.cpalicenseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.financialCapability.creditRecordIntegrityCertificateDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.financialCapability && ctx_r0.financialCapability.creditRecordIntegrityCertificateFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.financialCapability.certificateOfZakatIncome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.financialCapability.qualificationFinancialStatements && ctx_r0.financialCapability.qualificationFinancialStatements.length > 0);
  }
}
class RequestFinancialCapabilitiesRequirementsComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.financialCapability = null;
  }
  ngOnInit() {
    this.updateFinancialCapability();
  }
  // updateFinancialCapability() {
  //   this.subscriptions.push(
  //     this._requestService
  //       .getFacility()
  //       .subscribe((res: facilityDTO[] | null) => {
  //         if (res && res[0].qualificationFinancialCapabilityRequirements)
  //           this.financialCapability =
  //             res[0].qualificationFinancialCapabilityRequirements[0];
  //       })
  //   );
  // }
  updateFinancialCapability() {
    this.subscriptions.push(this._requestService.FinancialCapabilitiesRequirements$.subscribe(res => {
      if (res) this.financialCapability = res[0];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestFinancialCapabilitiesRequirementsComponent.ɵfac = function RequestFinancialCapabilitiesRequirementsComponent_Factory(t) {
  return new (t || RequestFinancialCapabilitiesRequirementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestFinancialCapabilitiesRequirementsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestFinancialCapabilitiesRequirementsComponent,
  selectors: [["app-request-financial-capabilities-requirements"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value", "fw-bold"], [1, "icon", "material-icons"], [1, "value", "col-12", "col-md-6", "col-xl-8"], [1, "icon", "material-icons-outlined"], [1, "value"], ["target", "_blank", 3, "href"], ["class", "value", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href", 4, "ngIf"]],
  template: function RequestFinancialCapabilitiesRequirementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestFinancialCapabilitiesRequirementsComponent_div_0_Template, 7, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.financialCapability);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3QtZmluYW5jaWFsLWNhcGFiaWxpdGllcy1yZXF1aXJlbWVudHMvcmVxdWVzdC1maW5hbmNpYWwtY2FwYWJpbGl0aWVzLXJlcXVpcmVtZW50cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL19jdXN0b20tdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNBRjtBREVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLHlCRU1RO0FEUlo7QURJSTtFQUNFLGNFTUs7QURSWDtBRE1FO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDSko7QURPRTtFQUNFLGdCQUFBO0FDTEo7O0FEVUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FDUEo7QURVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FDVEo7QURXSTtFQUNFLGdCQUFBO0FDVE47QURhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxlRURXO0FEWGY7QURlRTtFQUNFLGVFTFc7RUZNWCxjRXZETztBRDBDWDtBRGdCRTtFQUNFLGVFVFc7RUZVWCxnQkFBQTtFQUNBLGNFOURRO0FEZ0RaO0FEZ0JJO0VBQ0Usa0JBQUE7QUNkTjtBRGtCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlRXhCVztFRnlCWCxnQkFBQTtFQUNBLGNFbEZJO0FEaUVSO0FEbUJJO0VBQ0Usa0JBQUE7QUNqQk47QURvQkk7RUFDRSxjRW5GTTtBRGlFWjtBRHFCSTtFQUNFLGVBQUE7QUNuQk47QURxQk07RUFDRSxlRXhDTztBRHFCZiIsInNvdXJjZXNDb250ZW50IjpbIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcblxuICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgfVxuICB9XG5cbiAgLmVkaXQtaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgfVxuXG4gICZ+LnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAmKy50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuICB9XG5cbiAgLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIH1cblxuICAua2V5IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGxpZ2h0Z3JheTtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICAgICYrLnZhbHVlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5lZGl0LWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbn1cbi50YWItZGF0YS1oZWFkZXIgfiAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi50YWItZGF0YS1zZWN0aW9uICsgLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY3Njc2O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5ICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlICsgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5pY29uIHtcbiAgY29sb3I6ICNBREFGQjI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 12162:
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent": () => (/* binding */ RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0645\u0644\u0641 \u0627\u0644\u0625\u0634\u0631\u0627\u0641 \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u064A \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.baseUrl + ctx_r1.QualificationAdditionInstitutionalCapacityAndHrRequirement.accountingSupervisionForWafiSalesProjectsFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.QualificationAdditionInstitutionalCapacityAndHrRequirement.accountingSupervisionForWafiSalesProjectsFile.fileDescription, "");
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0645\u0644\u0641 \u0627\u0644\u0625\u0634\u0631\u0627\u0641 \u0627\u0644\u0647\u0646\u062F\u0633\u064A \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r2.baseUrl + ctx_r2.QualificationAdditionInstitutionalCapacityAndHrRequirement.engineeringSupervisionForWafiSalesProjectsFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.QualificationAdditionInstitutionalCapacityAndHrRequirement.engineeringSupervisionForWafiSalesProjectsFile.fileDescription, "");
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_4_div_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r7.baseUrl + files_r6.existSystemsApprovalCertificationFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", files_r6.existSystemsApprovalCertificationFile.fileDescription, "");
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_4_div_3_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", files_r6 && files_r6.existSystemsApprovalCertificationFile);
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0634\u0647\u0627\u062F\u0627\u062A \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_4_div_3_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.QualificationAdditionInstitutionalCapacityAndHrRequirement.existSystemsApprovalCertifications);
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_5_div_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r11.baseUrl + files_r10.localAndInternationalIssuedCertificationFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", files_r10.localAndInternationalIssuedCertificationFile.fileDescription, "");
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_5_div_3_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", files_r10 && files_r10.localAndInternationalIssuedCertificationFile);
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0634\u0647\u0627\u062F\u0627\u062A \u0645\u0647\u0646\u064A\u0629 \u0635\u0627\u062F\u0631\u0629 \u0645\u0646 \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0645\u062D\u0644\u064A\u0629 \u0648\u0639\u0627\u0644\u0645\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_5_div_3_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.QualificationAdditionInstitutionalCapacityAndHrRequirement.localAndInternationalIssuedCertifications);
  }
}
function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_2_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_3_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_4_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_div_5_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement && ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement.accountingSupervisionForWafiSalesProjectsFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement && ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement.engineeringSupervisionForWafiSalesProjectsFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement.existSystemsApprovalCertifications && ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement.existSystemsApprovalCertifications.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement.localAndInternationalIssuedCertifications && ctx_r0.QualificationAdditionInstitutionalCapacityAndHrRequirement.localAndInternationalIssuedCertifications.length > 0);
  }
}
class RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.QualificationAdditionInstitutionalCapacityAndHrRequirement = null;
  }
  ngOnInit() {
    this.updateQualificationAdditionInstitutionalCapacityAndHrRequirement();
  }
  updateQualificationAdditionInstitutionalCapacityAndHrRequirement() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (
    //         res &&
    //         res[0].qualificationAdditionInstitutionalCapacityAndHrRequirements
    //       )
    //         this.QualificationAdditionInstitutionalCapacityAndHrRequirement =
    //           res[0].qualificationAdditionInstitutionalCapacityAndHrRequirements[0];
    //     })
    // );
    this.subscriptions.push(this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.subscribe(res => {
      if (res) this.QualificationAdditionInstitutionalCapacityAndHrRequirement = res[0];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent.ɵfac = function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_Factory(t) {
  return new (t || RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
  selectors: [["app-request-institutional-capabilities-and-additional-discriminatory-human-resources"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href"], ["class", "value", 4, "ngFor", "ngForOf"], [3, "href", 4, "ngIf"], [3, "href"]],
  template: function RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent_div_0_Template, 6, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.QualificationAdditionInstitutionalCapacityAndHrRequirement);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3QtaW5zdGl0dXRpb25hbC1jYXBhYmlsaXRpZXMtYW5kLWFkZGl0aW9uYWwtZGlzY3JpbWluYXRvcnktaHVtYW4tcmVzb3VyY2VzL3JlcXVlc3QtaW5zdGl0dXRpb25hbC1jYXBhYmlsaXRpZXMtYW5kLWFkZGl0aW9uYWwtZGlzY3JpbWluYXRvcnktaHVtYW4tcmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJFTVE7QURSWjtBRElJO0VBQ0UsY0VNSztBRFJYO0FETUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjs7QURVRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUNQSjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUNUSjtBRFdJO0VBQ0UsZ0JBQUE7QUNUTjtBRGFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVFRFc7QURYZjtBRGVFO0VBQ0UsZUVMVztFRk1YLGNFdkRPO0FEMENYO0FEZ0JFO0VBQ0UsZUVUVztFRlVYLGdCQUFBO0VBQ0EsY0U5RFE7QURnRFo7QURnQkk7RUFDRSxrQkFBQTtBQ2ROO0FEa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVFeEJXO0VGeUJYLGdCQUFBO0VBQ0EsY0VsRkk7QURpRVI7QURtQkk7RUFDRSxrQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLGNFbkZNO0FEaUVaO0FEcUJJO0VBQ0UsZUFBQTtBQ25CTjtBRHFCTTtFQUNFLGVFeENPO0FEcUJmIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 43723:
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestJobRequirementsAndHumanResourcesComponent": () => (/* binding */ RequestJobRequirementsAndHumanResourcesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0645\u0644\u0641 \u0627\u0644\u0647\u064A\u0643\u0644 \u0627\u0644\u062A\u0646\u0638\u064A\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.baseUrl + ctx_r1.qualificationInstitutionalCapacityAndHrRequirement.organizationalStructureFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.qualificationInstitutionalCapacityAndHrRequirement.organizationalStructureFile.fileDescription, "");
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0634\u0647\u0627\u062F\u0629 \u0644\u0627\u0626\u062D\u0629 \u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0639\u0645\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r2.baseUrl + ctx_r2.qualificationInstitutionalCapacityAndHrRequirement.laborRegulationCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.qualificationInstitutionalCapacityAndHrRequirement.laborRegulationCertificateFile.fileDescription, "");
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0644\u0627\u0626\u062D\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0635\u062D\u0629 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r3.baseUrl + ctx_r3.qualificationInstitutionalCapacityAndHrRequirement.occupationalSafetyAndHealthFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.qualificationInstitutionalCapacityAndHrRequirement.occupationalSafetyAndHealthFile.fileDescription, "");
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0634\u0647\u0627\u062F\u0629 \u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0639\u0648\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r4.baseUrl + ctx_r4.qualificationInstitutionalCapacityAndHrRequirement.saudizationCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.qualificationInstitutionalCapacityAndHrRequirement.saudizationCertificateFile.fileDescription, "");
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_6_div_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r8.baseUrl + files_r7.socialResponsibilityProgramFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", files_r7.socialResponsibilityProgramFile.fileDescription, "");
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_6_div_3_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", files_r7 && files_r7.socialResponsibilityProgramFile);
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0645\u0644\u0641\u0627\u062A \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_6_div_3_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.qualificationInstitutionalCapacityAndHrRequirement.socialResponsibilityProgramsFiles);
  }
}
function RequestJobRequirementsAndHumanResourcesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_2_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_3_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_4_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_5_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RequestJobRequirementsAndHumanResourcesComponent_div_0_div_6_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.qualificationInstitutionalCapacityAndHrRequirement && ctx_r0.qualificationInstitutionalCapacityAndHrRequirement.organizationalStructureFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.qualificationInstitutionalCapacityAndHrRequirement && ctx_r0.qualificationInstitutionalCapacityAndHrRequirement.laborRegulationCertificateFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.qualificationInstitutionalCapacityAndHrRequirement && ctx_r0.qualificationInstitutionalCapacityAndHrRequirement.occupationalSafetyAndHealthFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.qualificationInstitutionalCapacityAndHrRequirement && ctx_r0.qualificationInstitutionalCapacityAndHrRequirement.saudizationCertificateFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.qualificationInstitutionalCapacityAndHrRequirement.socialResponsibilityProgramsFiles && ctx_r0.qualificationInstitutionalCapacityAndHrRequirement.socialResponsibilityProgramsFiles.length > 0);
  }
}
class RequestJobRequirementsAndHumanResourcesComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.qualificationInstitutionalCapacityAndHrRequirement = null;
  }
  ngOnInit() {
    this.updateQualificationAdditionInstitutionalCapacityAndHrRequirement();
  }
  updateQualificationAdditionInstitutionalCapacityAndHrRequirement() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationInstitutionalCapacityAndHrRequirements)
    //         this.qualificationInstitutionalCapacityAndHrRequirement =
    //           res[0].qualificationInstitutionalCapacityAndHrRequirements[0];
    //     })
    // );
    this.subscriptions.push(this._requestService.JobRequirementsAndHumanResources$.subscribe(res => {
      if (res) this.qualificationInstitutionalCapacityAndHrRequirement = res[0];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestJobRequirementsAndHumanResourcesComponent.ɵfac = function RequestJobRequirementsAndHumanResourcesComponent_Factory(t) {
  return new (t || RequestJobRequirementsAndHumanResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestJobRequirementsAndHumanResourcesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestJobRequirementsAndHumanResourcesComponent,
  selectors: [["app-request-job-requirements-and-human-resources"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href"], ["class", "value", 4, "ngFor", "ngForOf"], [3, "href", 4, "ngIf"], [3, "href"]],
  template: function RequestJobRequirementsAndHumanResourcesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestJobRequirementsAndHumanResourcesComponent_div_0_Template, 7, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.qualificationInstitutionalCapacityAndHrRequirement);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3Qtam9iLXJlcXVpcmVtZW50cy1hbmQtaHVtYW4tcmVzb3VyY2VzL3JlcXVlc3Qtam9iLXJlcXVpcmVtZW50cy1hbmQtaHVtYW4tcmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJFTVE7QURSWjtBRElJO0VBQ0UsY0VNSztBRFJYO0FETUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjs7QURVRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUNQSjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUNUSjtBRFdJO0VBQ0UsZ0JBQUE7QUNUTjtBRGFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVFRFc7QURYZjtBRGVFO0VBQ0UsZUVMVztFRk1YLGNFdkRPO0FEMENYO0FEZ0JFO0VBQ0UsZUVUVztFRlVYLGdCQUFBO0VBQ0EsY0U5RFE7QURnRFo7QURnQkk7RUFDRSxrQkFBQTtBQ2ROO0FEa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVFeEJXO0VGeUJYLGdCQUFBO0VBQ0EsY0VsRkk7QURpRVI7QURtQkk7RUFDRSxrQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLGNFbkZNO0FEaUVaO0FEcUJJO0VBQ0UsZUFBQTtBQ25CTjtBRHFCTTtFQUNFLGVFeENPO0FEcUJmIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 35607:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-national-addresses/request-national-addresses.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestNationalAddressesComponent": () => (/* binding */ RequestNationalAddressesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestNationalAddressesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0646\u0648\u0639 \u0645\u062D\u0644 \u0627\u0644\u0648\u0633\u0627\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0631\u0642\u0645 \u0635\u0643 \u0645\u0644\u0643\u064A\u0629 \u0645\u062D\u0644 \u0627\u0644\u0648\u0633\u0627\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "div", 3)(16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0628\u0646\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3)(21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0627\u0631\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 3)(26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0627\u0633\u0645 \u0627\u0644\u062D\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 3)(31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 3)(36, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u0631\u0642\u0645 \u0627\u0644\u0648\u062D\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 3)(41, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0625\u0636\u0627\u0641\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3)(46, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 3)(51, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.nationalAddress.brokerDocumentType.brokerDocumentTypeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.nationalAddress.documentNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nationalAddress.buildingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.nationalAddress.streetName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.nationalAddress.neighborhoodName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nationalAddress.postalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nationalAddress.unitNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nationalAddress.additionalNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nationalAddress.areas.areaName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nationalAddress.sysCity.cityName);
  }
}
class RequestNationalAddressesComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.nationalAddress = null;
  }
  ngOnInit() {
    this.updateNationalAddress();
  }
  updateNationalAddress() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationNationalAddressDetailDto)
    //         this.nationalAddress =
    //           res[0].qualificationNationalAddressDetailDto[0];
    //     })
    // );
    this.subscriptions.push(this._requestService.NationalAddresses$.subscribe(res => {
      if (res && res?.length > 0) this.nationalAddress = res[0];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestNationalAddressesComponent.ɵfac = function RequestNationalAddressesComponent_Factory(t) {
  return new (t || RequestNationalAddressesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestNationalAddressesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestNationalAddressesComponent,
  selectors: [["app-request-national-addresses"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value"], [1, "value", "fw-bold"]],
  template: function RequestNationalAddressesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestNationalAddressesComponent_div_0_Template, 55, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nationalAddress);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3QtbmF0aW9uYWwtYWRkcmVzc2VzL3JlcXVlc3QtbmF0aW9uYWwtYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJFTVE7QURSWjtBRElJO0VBQ0UsY0VNSztBRFJYO0FETUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjs7QURVRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUNQSjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUNUSjtBRFdJO0VBQ0UsZ0JBQUE7QUNUTjtBRGFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGVFRFc7QURYZjtBRGVFO0VBQ0UsZUVMVztFRk1YLGNFdkRPO0FEMENYO0FEZ0JFO0VBQ0UsZUVUVztFRlVYLGdCQUFBO0VBQ0EsY0U5RFE7QURnRFo7QURnQkk7RUFDRSxrQkFBQTtBQ2ROO0FEa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGVFeEJXO0VGeUJYLGdCQUFBO0VBQ0EsY0VsRkk7QURpRVI7QURtQkk7RUFDRSxrQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLGNFbkZNO0FEaUVaO0FEcUJJO0VBQ0UsZUFBQTtBQ25CTjtBRHFCTTtFQUNFLGVFeENPO0FEcUJmIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 58525:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-technical-capabilities-requirements/request-technical-capabilities-requirements.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestTechnicalCapabilitiesRequirementsComponent": () => (/* binding */ RequestTechnicalCapabilitiesRequirementsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const certification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r5.baseUrl + certification_r4.certificationFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", certification_r4.certificationFile.fileDescription, "");
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_5_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const certification_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", certification_r4 && certification_r4.certificationFile);
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceProviders_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", serviceProviders_r7.description, ") ");
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_9_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceProviders_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", serviceProviders_r7.certificationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", serviceProviders_r7.description);
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_16_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r12.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r12.projectOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r12.executingContractor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r12.contractorClassification);
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_16_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "table", 15)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0627\u0644\u0645\u0627\u0644\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u0644\u0645\u0642\u0627\u0648\u0644 \u0627\u0644\u0645\u0646\u0641\u0630");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0642\u0627\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_16_tr_14_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_16_tr_15_Template, 3, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.technicalCapabilities.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.technicalCapabilities.projects && ctx_r3.technicalCapabilities.projects.length === 0);
  }
}
function RequestTechnicalCapabilitiesRequirementsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0634\u0647\u0627\u062F\u0627\u062A \u062A\u0623\u0647\u064A\u0644 \u0623\u0648 \u062A\u0635\u0646\u064A\u0641 \u062D\u0635\u0644\u062A \u0639\u0644\u0649\u0647\u0627 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_5_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u0623\u0631\u0642\u0627\u0645 \u0634\u0647\u0627\u062F\u0627\u062A \u062A\u0635\u0646\u064A\u0641 \u0645\u0642\u062F\u0645\u064A \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u062F\u0646 \u0627\u0644\u0645\u0646\u0641\u0630\u064A\u0646 \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_9_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0647\u0644 \u0644\u062F\u064A\u0629 \u062E\u0628\u0631\u0627\u062A \u0633\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RequestTechnicalCapabilitiesRequirementsComponent_div_0_div_16_Template, 16, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.technicalCapabilities.qualificationFacilityCertifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.technicalCapabilities.qualificationFacilityServiceProvidersCertificateNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.technicalCapabilities.isPreviousExperienceExist ? "\u0646\u0639\u0645" : "\u0644\u0627", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.technicalCapabilities.isPreviousExperienceExist);
  }
}
class RequestTechnicalCapabilitiesRequirementsComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    this.technicalCapabilities = null;
  }
  ngOnInit() {
    this.updateTechnicalCapabilities();
  }
  updateTechnicalCapabilities() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].technicalCapabilitiesRequirements)
    //         this.technicalCapabilities =
    //           res[0].technicalCapabilitiesRequirements[0];
    //     })
    // );
    this.subscriptions.push(this._requestService.TechnicalCapabilitiesRequirements$.subscribe(res => {
      if (res) this.technicalCapabilities = res[0];
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestTechnicalCapabilitiesRequirementsComponent.ɵfac = function RequestTechnicalCapabilitiesRequirementsComponent_Factory(t) {
  return new (t || RequestTechnicalCapabilitiesRequirementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestTechnicalCapabilitiesRequirementsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestTechnicalCapabilitiesRequirementsComponent,
  selectors: [["app-request-technical-capabilities-requirements"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], [1, "col-12", "col-lg-6"], [1, "key"], ["class", "value", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-12"], [1, "value"], ["class", "col-12 col-md-12 col-lg-12", 4, "ngIf"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], [4, "ngIf"], [1, "col-12", "col-md-12", "col-lg-12"], [1, "table-responsive"], [1, "table", "table-light"], [4, "ngFor", "ngForOf"], ["colspan", "5"]],
  template: function RequestTechnicalCapabilitiesRequirementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestTechnicalCapabilitiesRequirementsComponent_div_0_Template, 17, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.technicalCapabilities);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".table[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-block: 0.75rem 1rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #E7EAEA;\n}\n.table-light[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #001F21;\n  background-color: #F4F6F6;\n}\n.table-light[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n  background-color: white;\n}\n.table-light[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\n.tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX3RhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL2NvbXBvbmVudHMvcmVxdWVzdC10ZWNobmljYWwtY2FwYWJpbGl0aWVzLXJlcXVpcmVtZW50cy9yZXF1ZXN0LXRlY2huaWNhbC1jYXBhYmlsaXRpZXMtcmVxdWlyZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fdGFiLWNvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVDd0RhO0VEdkRiLGdCQUFBO0FFQ0Y7QUZDRTs7RUFFRSxzQkFBQTtBRUNKO0FGR0k7RUFDRSwyQkFBQTtFQUNBLGVDNkNTO0VENUNULGdCQUFBO0FFRE47QUZHTTtFQUNFLGtDQ3VERTtFRHRERixnQ0NzREU7QUN2RFY7QUZJTTtFQUNFLGdDQ2tERTtFRGpERiw4QkNpREU7QUNuRFY7QUZLTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFSFI7QUZLUTtFQUNFLGVBQUE7QUVIVjs7QUZVQTtFQUNFLHFCQ2pDWTtBQzBCZDtBRlVJO0VBQ0UsY0MxQ0U7RUQyQ0YseUJBQUE7QUVSTjtBRmFJO0VBQ0UsY0MzQ007RUQ0Q04sdUJDaERFO0FDcUNSO0FGZUU7RUFDRSxjQ3RERztBQ3lDUDs7QUMzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7QUQ2Q0Y7QUMzQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJGTVE7QUNxQ1o7QUN6Q0k7RUFDRSxjRk1LO0FDcUNYO0FDdkNFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEeUNKO0FDdENFO0VBQ0UsZ0JBQUE7QUR3Q0o7O0FDbkNFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBRHNDSjtBQ25DRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FEb0NKO0FDbENJO0VBQ0UsZ0JBQUE7QURvQ047QUNoQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUZEVztBQ2tDZjtBQzlCRTtFQUNFLGVGTFc7RUVNWCxjRnZETztBQ3VGWDtBQzdCRTtFQUNFLGVGVFc7RUVVWCxnQkFBQTtFQUNBLGNGOURRO0FDNkZaO0FDN0JJO0VBQ0Usa0JBQUE7QUQrQk47QUMzQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUZ4Qlc7RUV5QlgsZ0JBQUE7RUFDQSxjRmxGSTtBQzhHUjtBQzFCSTtFQUNFLGtCQUFBO0FENEJOO0FDekJJO0VBQ0UsY0ZuRk07QUM4R1o7QUN4Qkk7RUFDRSxlQUFBO0FEMEJOO0FDeEJNO0VBQ0UsZUZ4Q087QUNrRWYiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgPnRoZWFkLFxuICA+dGJvZHkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICA+dGhlYWQge1xuICAgIHRoIHtcbiAgICAgIHBhZGRpbmctYmxvY2s6IC43NXJlbSAxcmVtO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgICAgICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgIH1cblxuICAgICAgLnNvcnRhYmxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG5cbiAgPnRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcbiAgICB9XG4gIH1cblxuICA+dGJvZHkge1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWRhcmsge1xuICAgIGNvbG9yOiAkZGFyaztcbiAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYmxlID4gdGhlYWQsXG4udGFibGUgPiB0Ym9keSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udGFibGUgPiB0aGVhZCB0aCB7XG4gIHBhZGRpbmctYmxvY2s6IDAuNzVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnRhYmxlID4gdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogMC4yNXJlbTtcbn1cbi50YWJsZSA+IHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItc3RhcnQtZW5kLXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjI1cmVtO1xufVxuLnRhYmxlID4gdGhlYWQgdGggLnNvcnRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhYmxlID4gdGhlYWQgdGggLnNvcnRhYmxlIC5pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFibGUtbGlnaHQge1xuICBib3JkZXItY29sb3I6ICNFN0VBRUE7XG59XG4udGFibGUtbGlnaHQgPiB0aGVhZCB0aCB7XG4gIGNvbG9yOiAjMDAxRjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY2O1xufVxuLnRhYmxlLWxpZ2h0ID4gdGJvZHkgdGQge1xuICBjb2xvcjogI0FEQUZCMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGFibGUtbGlnaHQgLnRleHQtZGFyayB7XG4gIGNvbG9yOiAjMzUzQjNCO1xufVxuXG4udGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi50YWItZGF0YS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi50YWItZGF0YS1oZWFkZXIgLmVkaXQtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xufVxuLnRhYi1kYXRhLWhlYWRlciB+IC50YWItZGF0YS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRhYi1kYXRhLXNlY3Rpb24gKyAudGFiLWRhdGEtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Njc2NzY7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgKyAudmFsdWUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmljb24ge1xuICBjb2xvcjogI0FEQUZCMjtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLnRhYi1kYXRhLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDFyZW07XG5cbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuXG4gICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICB9XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG5cbiAgJn4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4udGFiLWRhdGEtc2VjdGlvbiB7XG4gICYrLnRhYi1kYXRhLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG4gIH1cblxuICAudGFiLWRhdGEtc2VjdGlvbi10aXRsZS1zdWJ0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgfVxuXG4gIC5rZXkge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuMjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gICAgJisudmFsdWUge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRlbGV0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 19017:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/request-wafi-training/request-wafi-training.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestWafiTrainingComponent": () => (/* binding */ RequestWafiTrainingComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 85959);




function RequestWafiTrainingComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0634\u0647\u0627\u062F\u0629 \u0627\u062C\u062A\u064A\u0627\u0632 \u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0644\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629 \u0645\u0646 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.baseUrl + ctx_r1.wafiTraining.marketerTrainingCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.wafiTraining.marketerTrainingCertificateFile.fileDescription, "");
  }
}
function RequestWafiTrainingComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0634\u0647\u0627\u062F\u0629 \u0627\u062C\u062A\u064A\u0627\u0632 \u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0639\u0642\u0627\u0631\u064A \u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r2.baseUrl + ctx_r2.wafiTraining.realEstateDevelopmentTrainingCertificateFile.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.wafiTraining.realEstateDevelopmentTrainingCertificateFile.fileDescription, "");
  }
}
function RequestWafiTrainingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestWafiTrainingComponent_div_0_div_2_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestWafiTrainingComponent_div_0_div_3_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.wafiTraining && ctx_r0.wafiTraining.marketerTrainingCertificateFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.wafiTraining && ctx_r0.wafiTraining.realEstateDevelopmentTrainingCertificateFile);
  }
}
class RequestWafiTrainingComponent {
  constructor(_requestService) {
    this._requestService = _requestService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
    // wafiTraining: WafiTrainingDto[] = [];
    this.wafiTraining = null;
  }
  ngOnInit() {
    // this.updateWafiTraining();
    this.updateWafiTraining();
  }
  updateWafiTraining() {
    this.subscriptions.push(this._requestService.WafiTraining$.subscribe(res => {
      if (res) this.wafiTraining = res[0];
    }));
  }
  // updateWafiTraining() {
  //   this.subscriptions.push(
  //     this._requestService
  //       .getFacility()
  //       .subscribe((res: facilityDTO[] | null) => {
  //         if (res) this.wafiTraining = res[0].qualificationWafiTrainings!;
  //       })
  //   );
  // }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestWafiTrainingComponent.ɵfac = function RequestWafiTrainingComponent_Factory(t) {
  return new (t || RequestWafiTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_1__.RequestService));
};
RequestWafiTrainingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RequestWafiTrainingComponent,
  selectors: [["app-request-wafi-training"]],
  decls: 1,
  vars: 1,
  consts: [["class", "tab-data-section", 4, "ngIf"], [1, "tab-data-section"], [1, "row", "row-gap-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "key"], [1, "value"], [1, "icon", "material-icons-outlined"], ["target", "_blank", 3, "href"]],
  template: function RequestWafiTrainingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RequestWafiTrainingComponent_div_0_Template, 4, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.wafiTraining);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".tab-data-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #F5FCFC;\n}\n.tab-data-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.tab-data-header[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.tab-data-header[_ngcontent-%COMP%]    ~ .tab-data-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tab-data-section[_ngcontent-%COMP%]    + .tab-data-section[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #E7EAEA;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .tab-data-section-title-subtitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tab-data-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 14px;\n}\n.tab-data-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667676;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]    + .value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tab-data-section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3RhYi1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZXMvcXVhbGlmeWluZy9jb21wb25lbnRzL3JlcXVlc3Qtd2FmaS10cmFpbmluZy9yZXF1ZXN0LXdhZmktdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkVNUTtBRFJaO0FESUk7RUFDRSxjRU1LO0FEUlg7QURNRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0pKO0FET0U7RUFDRSxnQkFBQTtBQ0xKOztBRFVFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQ1BKO0FEVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBQ1RKO0FEV0k7RUFDRSxnQkFBQTtBQ1ROO0FEYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUVEVztBRFhmO0FEZUU7RUFDRSxlRUxXO0VGTVgsY0V2RE87QUQwQ1g7QURnQkU7RUFDRSxlRVRXO0VGVVgsZ0JBQUE7RUFDQSxjRTlEUTtBRGdEWjtBRGdCSTtFQUNFLGtCQUFBO0FDZE47QURrQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsZUV4Qlc7RUZ5QlgsZ0JBQUE7RUFDQSxjRWxGSTtBRGlFUjtBRG1CSTtFQUNFLGtCQUFBO0FDakJOO0FEb0JJO0VBQ0UsY0VuRk07QURpRVo7QURxQkk7RUFDRSxlQUFBO0FDbkJOO0FEcUJNO0VBQ0UsZUV4Q087QURxQmYiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWRhdGEtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcblxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIC5lZGl0LWljb24ge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gIH1cblxuICAmfi50YWItZGF0YS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG59XG5cbi50YWItZGF0YS1zZWN0aW9uIHtcbiAgJisudGFiLWRhdGEtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcbiAgfVxuXG4gIC50YWItZGF0YS1zZWN0aW9uLXRpdGxlLXN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBjb2xvcjogJGRhcmtncmF5O1xuICB9XG5cbiAgLmtleSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRsaWdodGdyYXk7XG5cbiAgICAmKy52YWx1ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAudmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC4yNXJlbTtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG5cbiAgICAmKy52YWx1ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAuZGVsZXRlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi50YWItZGF0YS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4udGFiLWRhdGEtaGVhZGVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xufVxuLnRhYi1kYXRhLWhlYWRlciAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLnRhYi1kYXRhLWhlYWRlciAuZWRpdC1pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG59XG4udGFiLWRhdGEtaGVhZGVyIH4gLnRhYi1kYXRhLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4udGFiLWRhdGEtc2VjdGlvbiArIC50YWItZGF0YS1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnRhYi1kYXRhLXNlY3Rpb24tdGl0bGUtc3VidGl0bGUgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NzY3Njtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC5rZXkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQURBRkIyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLmtleSArIC52YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSArIC52YWx1ZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi50YWItZGF0YS1zZWN0aW9uIC52YWx1ZSAuaWNvbiB7XG4gIGNvbG9yOiAjQURBRkIyO1xufVxuLnRhYi1kYXRhLXNlY3Rpb24gLnZhbHVlIC5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFiLWRhdGEtc2VjdGlvbiAudmFsdWUgLmRlbGV0ZSBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 57096:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/components/result-of-request-study/result-of-request-study.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultOfRequestStudyComponent": () => (/* binding */ ResultOfRequestStudyComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _services_qualification_certificates_qualification_certificates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/qualification-certificates/qualification-certificates.service */ 54363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);






function ResultOfRequestStudyComponent_ng_container_5_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const note_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", note_r4.notes, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function ResultOfRequestStudyComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 13)(9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "calendar_month");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ResultOfRequestStudyComponent_ng_container_5_div_1_div_13_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const note_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 2, note_r4.createdOn, "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", note_r4.isWithNotes);
  }
}
function ResultOfRequestStudyComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResultOfRequestStudyComponent_ng_container_5_div_1_Template, 14, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.requestNotes);
  }
}
function ResultOfRequestStudyComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "h6", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0627\u0644\u0634\u0647\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 18)(8, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "calendar_month");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 19)(13, "div", 20)(14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 5, "12/12/2022", "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.baseUrl + ctx_r1.qualificationRequestCertificate.certificateFile, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("download", ctx_r1.qualificationRequestCertificate.certificateFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0644", ctx_r1.qualificationRequestCertificate && ctx_r1.qualificationRequestCertificate.qualificationRequestType ? ctx_r1.qualificationRequestType(ctx_r1.qualificationRequestCertificate.qualificationRequestType) : "", "- ", ctx_r1.qualificationRequestCertificate.certificateNumber, " ");
  }
}
function ResultOfRequestStudyComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class ResultOfRequestStudyComponent {
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_1__.RequestCodeEnum;
  }
  constructor(_requestService,
  // private _requestDetailsService: RequestDetailsService
  _qualificationCertificatesService) {
    this._requestService = _requestService;
    this._qualificationCertificatesService = _qualificationCertificatesService;
    this.subscriptions = [];
    this.selectedRequestID = "";
    this.requestNotes = null;
    this.qualificationRequestCertificate = null;
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL}/`;
  }
  ngOnInit() {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated();
  }
  observeDataIsUpdated() {
    this.subscriptions.push(this._requestService.dataIsUpdate.subscribe(res => {
      this.GetRequestNotesByRequestId();
    }));
  }
  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage();
    if (this.selectedRequestID) {
      this.GetRequestNotesByRequestId();
      this.GetCertificatesByRequestId();
    }
  }
  GetRequestNotesByRequestId() {
    this.subscriptions.push(this._requestService.GetRequestNotesByRequestId(this.selectedRequestID).subscribe(res => {
      this.requestNotes = res;
    }));
    // this.requestNotes=[{
    //   createdOn: new Date(),
    //   employeeName: "test",
    //   departmentName: "test",
    //   notes: "test",
    //   isFinished: true,
    //   finishedOn: new Date(),
    //   isWithNotes: true,
    //   id: "test"
    // }]
  }

  GetCertificatesByRequestId() {
    this.subscriptions.push(this._qualificationCertificatesService.getCertificateByRequestId(this.selectedRequestID).subscribe(res => {
      console.log("getCertificateByRequestId", res);
      if (res) {
        this.qualificationRequestCertificate = res;
      }
    }));
    // this.qualificationRequestCertificate = {
    //   facilityName: "test1",
    //   qualificationRequestId: "test1",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test1",
    //   qualificationRequestType: "RED01",
    //   certificateHTMLFile: "test1",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test1",
    //   certificateNumber: "test1",
    //   certificateFile: "test1",
    // }
  }

  qualificationRequestType(qualificationRequestType) {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_1__.RequestCodeEnum[qualificationRequestType];
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
ResultOfRequestStudyComponent.ɵfac = function ResultOfRequestStudyComponent_Factory(t) {
  return new (t || ResultOfRequestStudyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_qualification_certificates_qualification_certificates_service__WEBPACK_IMPORTED_MODULE_3__.QualificationCertificatesService));
};
ResultOfRequestStudyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ResultOfRequestStudyComponent,
  selectors: [["app-result-of-request-study"]],
  decls: 8,
  vars: 4,
  consts: [[1, "page"], [1, "page-title"], [1, "title"], [1, "page-content"], [4, "ngIf"], ["class", "text-success mt-3", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "results-wrapper"], [1, "results-info"], [1, "image"], ["src", "assets/images/general/static-person.jpeg", "alt", "", 1, "d-block", "w-100"], [1, "date"], [1, "material-icons"], ["class", "notes", 4, "ngIf"], [1, "notes"], [1, "note", 3, "innerHTML"], [1, "value"], [1, "certificates"], [1, "file"], ["target", "_blank", 1, "link", 3, "href", "download"], [1, "text-success", "mt-3"]],
  template: function ResultOfRequestStudyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ResultOfRequestStudyComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ResultOfRequestStudyComponent_ng_container_6_Template, 18, 8, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ResultOfRequestStudyComponent_p_7_Template, 2, 0, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 ", ctx.requestNotes && "(" + ctx.requestNotes.length + ")", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.requestNotes && ctx.requestNotes.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.qualificationRequestCertificate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.requestNotes && !ctx.qualificationRequestCertificate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n\n.results-wrapper[_ngcontent-%COMP%]    + .results-wrapper[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.results-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.results-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.results-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.results-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.results-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.results-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .dept[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n}\n.results-info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  font-size: 12px;\n  color: #667676;\n}\n.results-info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.notes[_ngcontent-%COMP%], .certificates[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.notes[_ngcontent-%COMP%] {\n  color: #667676;\n}\n.notes[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]    + .note[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.certificates[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 1.25rem;\n  border-radius: 1rem;\n  background-color: #F7F8F8;\n}\n.certificates[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]    + .file[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.certificates[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.certificates[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL2NvbXBvbmVudHMvcmVzdWx0LW9mLXJlcXVlc3Qtc3R1ZHkvcmVzdWx0LW9mLXJlcXVlc3Qtc3R1ZHkuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fcmVxdS1yZXN1bHRzLW5vdGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQ0EsbUJFNERNO0VGMUROLHlCQUFBO0VBQ0EsNEVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElNO0VBQ0UsWUVwQkE7QURrQlI7QURTSTs7RUFFRSxxQkV0Qks7QURlWDtBRFVJO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEV0k7RUFDRSx5QkFBQTtBQ1ROO0FEV007RUFDRSw2QkFBQTtBQ1RSO0FEYUk7RUFDRSxxQkV2Q0s7RUZ3Q0wscUJFc0JJO0FEakNWO0FEYU07RUFDRSxjRTFCRztFRjJCSCx1QkVuREE7QUR3Q1I7QURlSTtFQUNFLGtCQUFBO0FDYk47QURlTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxtQkVLRTtFRkpGLHVCRWxFQTtFRm1FQSwrQ0FBQTtBQ2RSO0FEZ0JRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVFbEJLO0VGbUJMLGNFM0VGO0FENkRSO0FEa0JVO0VBQ0Usa0JBQUE7QUNoQlo7QURtQlU7RUFDRSxjQUFBO0FDakJaOztBRDJCRTtFQUdFLGdCQUFBO0FDMUJKO0FENkJFO0VBQ0UsY0U5Rk87RUYrRlAsa0JBQUE7QUMzQko7QUQ4QkU7RUFDRSxlQUFBO0FDNUJKO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDOUJKO0FEZ0NJO0VBQ0UsY0V2R007QUR5RVo7QURpQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSx5QkVuSEs7QURtRlg7O0FEcUNBO0VBQ0Usa0JBQUE7QUNsQ0Y7O0FEdUNJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDcENOO0FEc0NNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ3BDUjtBRHlDTTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUN2Q1I7QUR5Q1E7RUFDRSwwQkFBQTtBQ3ZDVjtBRDRDSTtFQUNFLGNFbEtDO0FEd0hQOztBRGdERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzdDSjtBRCtDSTtFQUNFLGdCQUFBO0FDN0NOO0FEaURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLGVFbklXO0VGb0lYLGlCQUFBO0VBQ0EsWUU1TEk7RUY2TEosa0JBQUE7RUFDQSx5QkVqTFE7QURnSVo7QURvREU7RUFDRSxlRTVJVztFRjZJWCxnQkFBQTtFQUNBLGNFdE1JO0FEb0pSOztBRXBKSTtFQUNJLGtCQUFBO0FGdUpSOztBRW5KQTtFQUNJLGNETkk7QUQ0SlI7O0FFbEpJO0VBQ0ksZ0JBQUE7QUZxSlI7O0FFakpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUZvSko7QUVsSkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBRmtKUjtBRWhKUTtFQUNJLGlCQUFBO0FGa0paO0FFOUlJO0VBQ0ksY0RyQ0E7QURxTFI7QUU5SVE7RUFDSSxlRGdCRztBRGdJZjtBRTdJUTtFQUNJLGVEYUc7RUNaSCxtQkFBQTtBRitJWjtBRTNJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZURHTztFQ0ZQLGNEaERHO0FENExYO0FFMUlRO0VBQ0ksZURERztBRDZJZjs7QUV2SUE7O0VBRUksZ0JBQUE7QUYwSUo7O0FFdklBO0VBQ0ksY0Q5RE87QUR3TVg7QUV2SVE7RUFDSSxnQkFBQTtBRnlJWjs7QUVuSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkRuRkE7QUR3TlI7QUVuSVE7RUFDSSxnQkFBQTtBRnFJWjtBRWxJUTtFQUVJLGNEcEVEO0FEdU1YO0FFaElRO0VBQ0ksY0RsR0o7QURvT1I7O0FBak9BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFvT0oiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAmLndpdGgtYWJzdHJhY3Qge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9nZW5lcmFsL3BhZ2UtaGVhZGVyLXRvcC1hYnN0cmFjdC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVyIHtcblxuICAgIC5pbnB1dC1ncm91cC10ZXh0LFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4gICAgICAmOm5vdCg6aG92ZXIpIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNyaXRlcmlhLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuY3JpdGVyaWEge1xuICAgICAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgLjVyZW0pO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAxNnB4IHJnYmEoJGJsYWNrLCAuMDUpO1xuXG4gICAgICAgID4udGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jaGVjayB7XG4gICAgICAgICAgJisuZm9ybS1jaGVjayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzkzOTM5MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhZ2UtdGl0bGUge1xuXG4gICYrLnRleHQsXG4gICYrLm9yZGVyLWxpc3QsXG4gICYrLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gICYrLnRleHQge1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50aXRsZS1ib3R0b20tbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgIGluc2V0LWlubGluZTogMDtcblxuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgICYrLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogLjVyZW07XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAuNXJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSkge1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxuICB9XG59XG5cbnVsLm9yZGVyLWxpc3Qge1xuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgJitsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5vcmRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cbn0iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9wYWdlXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvcmVxdS1yZXN1bHRzLW5vdGVzXCI7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIuY2FyZCB7XG4gICAgJisuY2FyZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG59XG5cbi5yZXN1bHRzLXdyYXBwZXIge1xuICAgICYrLnJlc3VsdHMtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxufVxuXG4ucmVzdWx0cy1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICRibGFjaztcblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgIH1cblxuICAgICAgICAuZGVwdCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG5cbiAgICAgICAgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm90ZXMsXG4uY2VydGlmaWNhdGVzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubm90ZXMge1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG5cbiAgICAubm90ZSB7XG4gICAgICAgICYrLm5vdGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNlcnRpZmljYXRlcyB7XG4gICAgLmZpbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG5cbiAgICAgICAgJisuZmlsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICAgICAgICAgICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgIH1cblxuICAgICAgICAubGluayB7XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 36783:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/enum/qualificationcode-type.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qualificationCode": () => (/* binding */ qualificationCode)
/* harmony export */ });
var qualificationCode;
(function (qualificationCode) {
  qualificationCode["RED01"] = "add_business";
  qualificationCode["RED02"] = "local_convenience_store";
  qualificationCode["RED03"] = "how_to_reg";
  qualificationCode["REM"] = "local_convenience_store";
  qualificationCode["REB"] = "how_to_reg";
  qualificationCode["EC"] = "store";
  qualificationCode["Acc"] = "credit_score";
})(qualificationCode || (qualificationCode = {}));

/***/ }),

/***/ 97481:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/enum/request-code.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestCodeEnum": () => (/* binding */ RequestCodeEnum)
/* harmony export */ });
var RequestCodeEnum;
(function (RequestCodeEnum) {
  RequestCodeEnum["RED01"] = "\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A \u0645\u0633\u062A\u0642\u0644";
  RequestCodeEnum["RED02"] = "\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A \u0645\u062F\u0631\u062C \u0641\u0649 \u0633\u0648\u0642 \u0627\u0644\u0645\u0627\u0644";
  RequestCodeEnum["RED03"] = "\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A  \u0645\u062A\u062D\u0627\u0644\u0641 \u0645\u0639 \u0634\u0631\u0643\u0647";
  RequestCodeEnum["REM"] = "\u0645\u0633\u0648\u0642 \u0639\u0642\u0627\u0631\u064A";
  RequestCodeEnum["REB"] = "\u0648\u0633\u064A\u0637 \u0639\u0642\u0627\u0631\u064A";
  RequestCodeEnum["EC"] = "\u0627\u0633\u062A\u0634\u0627\u0631\u064A \u0647\u0646\u062F\u0633\u064A \u0645\u0624\u0647\u0644";
  RequestCodeEnum["Acc"] = "\u0645\u062D\u0627\u0633\u0628 \u0645\u0624\u0647\u0644";
})(RequestCodeEnum || (RequestCodeEnum = {}));

/***/ }),

/***/ 46247:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/enum/request-period.model.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestPeriod": () => (/* binding */ RequestPeriod)
/* harmony export */ });
var RequestPeriod;
(function (RequestPeriod) {
  RequestPeriod[RequestPeriod["\u0633\u0646\u0647"] = 1] = "\u0633\u0646\u0647";
  RequestPeriod[RequestPeriod["\u0633\u0646\u062A\u064A\u0646"] = 2] = "\u0633\u0646\u062A\u064A\u0646";
  RequestPeriod[RequestPeriod["\u062B\u0644\u0627\u062A \u0633\u0646\u0648\u0627\u062A"] = 3] = "\u062B\u0644\u0627\u062A \u0633\u0646\u0648\u0627\u062A";
})(RequestPeriod || (RequestPeriod = {}));

/***/ }),

/***/ 76873:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/enum/request-status.ts ***!
  \*******************************************************************************/
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

/***/ 25567:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/dataModels/qualification-type-dto.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypeDto": () => (/* binding */ QualificationTypeDto),
/* harmony export */   "SysQualificationPeriodCreateUpdateDto": () => (/* binding */ SysQualificationPeriodCreateUpdateDto),
/* harmony export */   "SysQualificationStepCreateUpdateDto": () => (/* binding */ SysQualificationStepCreateUpdateDto)
/* harmony export */ });
class QualificationTypeDto {
  constructor() {
    this.id = '';
    this.typeName = '';
    this.typeCode = '';
    this.discerption = '';
    this.showForWafi = false;
    this.showForRealStateContribution = false;
    this.requestStudyingDuration = 0;
    this.qualificationPeriods = [];
    this.qualificationSteps = [];
  }
}
class SysQualificationStepCreateUpdateDto {
  constructor() {
    this.id = '';
    this.qualificationTypeId = '';
    this.discerption = '';
    this.order = 0;
  }
}
class SysQualificationPeriodCreateUpdateDto {
  constructor() {
    this.id = '';
    this.qualificationTypeId = '';
    this.period = 0;
    this.price = 0;
  }
}

/***/ }),

/***/ 46320:
/*!******************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/create/create.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _dataModels_qualification_type_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/qualification-type-dto */ 25567);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_qualification_type_qualification_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/qualification-type/qualification-type.service */ 49699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 76375);









function CreateComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r2.discerption);
  }
}
function CreateComponent_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class CreateComponent {
  get controls() {
    return this.createRequstForm.controls;
  }
  constructor(_formBuilder, _qualificationTypeService, _router, _activatedRoute) {
    this._formBuilder = _formBuilder;
    this._qualificationTypeService = _qualificationTypeService;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    //#region Declartions
    this.requestSummeryLink = `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.requestSummary}`;
    this.renewRequestSummaryLink = `/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.renewRequestSummary}`;
    this.requestTypeCode = '';
    this.userData = null;
    this.subscriptions = [];
    this.createRequstForm = this._formBuilder.group({
      priod: this._formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
    this.showValidation = false;
    this.model = new _dataModels_qualification_type_dto__WEBPACK_IMPORTED_MODULE_0__.QualificationTypeDto();
    this.price = 0;
    this.renewRequest = false;
  }
  ngOnInit() {
    this.observeRouterParams();
    this.getRequestTypeCode();
  }
  observeRouterParams() {
    this.subscriptions.push(this._activatedRoute.params.subscribe(params => {
      this.requestTypeCode = params['code'];
      this.renewRequest = this._activatedRoute.snapshot.url[0].path == src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.renewRequest;
    }));
  }
  getRequestTypeCode() {
    if (this.requestTypeCode) {
      this.GetByCode();
    }
  }
  navigate() {
    if (this.controls.priod.value) {
      if (this.renewRequest) {
        this._router.navigate([this.renewRequestSummaryLink, this.requestTypeCode, this.controls.priod.value]);
      } else {
        this._router.navigate([this.requestSummeryLink, this.requestTypeCode, this.controls.priod.value]);
      }
    } else {
      this.showValidation = true;
    }
  }
  GetByCode() {
    this.subscriptions.push(this._qualificationTypeService.GetByCode(this.requestTypeCode, this.renewRequest).subscribe(res => {
      if (res) this.model = res;
      if (this.requestTypeCode == 'EC' || this.requestTypeCode == 'Acc') {
        this.setPeriodOfRequestTobeOneYear();
        this.setPeriodDisable();
      }
    }));
  }
  setPeriodDisable() {
    this.createRequstForm.controls['priod'].disable();
  }
  setPeriodOfRequestTobeOneYear() {
    this.createRequstForm.setValue({
      priod: 1
    });
    this.model.qualificationPeriods.map(qualificationPeriods => {
      this.price = qualificationPeriods.price;
    });
  }
  changePriod(data) {
    if (data.target.value === '') {
      this.price = 0;
    } else {
      let priod = this.createRequstForm.value.priod;
      this.price = this.model.qualificationPeriods.filter(x => x.period == priod)[0].price;
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) {
  return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_qualification_type_qualification_type_service__WEBPACK_IMPORTED_MODULE_2__.QualificationTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};
CreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateComponent,
  selectors: [["app-create"]],
  decls: 82,
  vars: 9,
  consts: [[1, "page"], [1, "page-title"], [1, "title"], [1, "page-content", "p-3", "rounded-2", "bg-white"], [1, "row", "row-gap-5"], [1, "col-12", "col-md-9"], [1, "page-header", "mb-4"], [1, "text"], [1, "page-section"], [1, "title-bottom-line"], [1, "order-list"], [4, "ngFor", "ngForOf"], [1, "col-12", "col-md-3"], ["id", "form-createRequstForm", 1, "card", "brief-card", 3, "formGroup"], [1, "details"], [1, "item"], [1, "icon"], [1, "material-icons-outlined"], [1, "data"], [1, "key"], [1, "value"], [1, "inline-block", "mr-2"], [1, "form-group"], [1, "form-label"], ["id", "control-priod", "formControlName", "priod", 1, "form-select", "form-select-sm", 3, "change"], ["value", "null", "selected", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "3"], [4, "ngIf"], [1, "actions"], ["type", "button", "id", "btn-navigate", 1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "order"]],
  template: function CreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062A\u0623\u0647\u064A\u0644 \u062C\u062F\u064A\u062F");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 1)(9, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "div", 1)(15, "h2", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CreateComponent_li_18_Template, 5, 2, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18)(27, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15)(32, "div", 16)(33, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "timer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18)(36, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\u0648\u0642\u062A \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0627\u0644\u0637\u0644\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15)(41, "div", 16)(42, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "money");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 18)(45, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u0631\u0633\u0648\u0645 \u0627\u0644\u062E\u062F\u0645\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 15)(50, "div", 16)(51, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "credit_card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 18)(54, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 20)(57, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 15)(60, "div", 16)(61, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "calendar_month");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 18)(64, "div", 22)(65, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateComponent_Template_select_change_67_listener($event) {
        return ctx.changePriod($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\u0633\u0646\u0647 \u0648\u0627\u062D\u062F\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\u0633\u0646\u062A\u064A\u0646");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "\u062B\u0644\u0627\u062B \u0633\u0646\u0648\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, CreateComponent_mat_error_76_Template, 2, 0, "mat-error", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 30)(78, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_78_listener() {
        return ctx.navigate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " \u0627\u0644\u062A\u0642\u062F\u064A\u0645 \u0639\u0644\u0649 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "west");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.renewRequest ? "\u062A\u062C\u062F\u064A\u062F" : "", " ", ctx.model.typeName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.model.discerption);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.model.qualificationSteps);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.createRequstForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.model.typeName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.model.requestStudyingDuration);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.price);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.controls.priod == null ? null : ctx.controls.priod.hasError("required")) && ctx.showValidation);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.card[_ngcontent-%COMP%] {\n  --bs-card-title-spacer-y: 0;\n  --bs-card-cap-bg: $card-bg;\n  border: 1px solid #E7EAEA;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:not(.no-separetor)::after {\n  content: \"\";\n  position: absolute;\n  inset-inline: var(--bs-card-cap-padding-x);\n  bottom: 0;\n  height: 1px;\n  background-color: #E7EAEA;\n}\n.card.qualiication-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: background-image 0.15s;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding: 1.5rem 1rem 1rem;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-start-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n  background-color: rgba(0, 31, 33, 0.3);\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1rem 1rem 1.5rem;\n  border-bottom: 6px solid transparent;\n  border-end-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg-hover.png\");\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 1.25rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #E4ECEC;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  background-color: rgba(0, 31, 33, 0.08);\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n  color: #353B3B;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #00B2BD;\n  align-self: flex-end;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  background-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.brief-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border: 1px solid rgba(196, 196, 196, 0.2);\n  border-top: 0.5rem solid #005257;\n  border-radius: 0.5rem;\n  box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.26);\n}\n.card.brief-card[_ngcontent-%COMP%]    + .brief-card[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    + .item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-inline-end: 1rem;\n  background-color: #F5FCFC;\n  border-radius: 0.25rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #005257;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #001F21;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #A2B2B3;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 1.75rem;\n  --bs-btn-padding-y: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #005257;\n}\n.card.phases-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(0, 31, 33, 0.08);\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(217, 217, 217, 0.4);\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]    + .phase[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.done[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.current[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.next[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #E7EAEA;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-status[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL3BhZ2VzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fY2FyZHMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2Zvcm0tY29uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQ0EsbUJFNERNO0VGMUROLHlCQUFBO0VBQ0EsNEVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElNO0VBQ0UsWUVwQkE7QURrQlI7QURTSTs7RUFFRSxxQkV0Qks7QURlWDtBRFVJO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEV0k7RUFDRSx5QkFBQTtBQ1ROO0FEV007RUFDRSw2QkFBQTtBQ1RSO0FEYUk7RUFDRSxxQkV2Q0s7RUZ3Q0wscUJFc0JJO0FEakNWO0FEYU07RUFDRSxjRTFCRztFRjJCSCx1QkVuREE7QUR3Q1I7QURlSTtFQUNFLGtCQUFBO0FDYk47QURlTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxtQkVLRTtFRkpGLHVCRWxFQTtFRm1FQSwrQ0FBQTtBQ2RSO0FEZ0JRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVFbEJLO0VGbUJMLGNFM0VGO0FENkRSO0FEa0JVO0VBQ0Usa0JBQUE7QUNoQlo7QURtQlU7RUFDRSxjQUFBO0FDakJaOztBRDJCRTtFQUdFLGdCQUFBO0FDMUJKO0FENkJFO0VBQ0UsY0U5Rk87RUYrRlAsa0JBQUE7QUMzQko7QUQ4QkU7RUFDRSxlQUFBO0FDNUJKO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDOUJKO0FEZ0NJO0VBQ0UsY0V2R007QUR5RVo7QURpQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSx5QkVuSEs7QURtRlg7O0FEcUNBO0VBQ0Usa0JBQUE7QUNsQ0Y7O0FEdUNJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDcENOO0FEc0NNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ3BDUjtBRHlDTTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUN2Q1I7QUR5Q1E7RUFDRSwwQkFBQTtBQ3ZDVjtBRDRDSTtFQUNFLGNFbEtDO0FEd0hQOztBRGdERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzdDSjtBRCtDSTtFQUNFLGdCQUFBO0FDN0NOO0FEaURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLGVFbklXO0VGb0lYLGlCQUFBO0VBQ0EsWUU1TEk7RUY2TEosa0JBQUE7RUFDQSx5QkVqTFE7QURnSVo7QURvREU7RUFDRSxlRTVJVztFRjZJWCxnQkFBQTtFQUNBLGNFdE1JO0FEb0pSOztBRXJKQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFFQSx5QkFBQTtBRnVKRjtBRXJKRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBRnNKSjtBRXBKSTtFQUNFLGVEMkNTO0FEMkdmO0FFbEpNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLHlCRG5CTTtBRHNLZDtBRTlJRTtFQUNFLGtCQUFBO0VBQ0EscUJEd0NNO0VDdENOLG1HQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBRUEsa0NBQUE7QUY4SUo7QUU1SUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBRUEsaUNEa0JJO0VDakJKLDZCRGlCSTtFQ2ZKLHNDQUFBO0FGMElOO0FFeElNO0VBQ0UsWUR6REE7QURtTVI7QUV0SUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JER0k7RUNGSiw2QkRFSTtBRHNJVjtBRXRJTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUR6RUE7QURpTlI7QUVwSUk7RUFDRSx5R0FBQTtBRnNJTjtBRXBJTTtFQUNFLHFCRHBFSTtBRDBNWjtBRWpJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJEM0ZJO0VDNEZKLHNCRHhCTTtFQ3lCTixlQUFBO0FGa0lKO0FFaElJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FGaUlOO0FFL0hNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkQzR0c7QUR5T1g7QUU1SFE7RUFDRSxXQUFBO0FGOEhWO0FFM0hRO0VBQ0UsWUQ3SEY7QUQwUFI7QUV6SE07RUFDRSxhQUFBO0FGMkhSO0FFekhRO0VBQ0UsY0R4SEU7QURtUFo7QUV0SEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLHVDQUFBO0FGdUhOO0FFckhNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNEckpEO0FENFFQO0FFcEhNO0VBQ0UsY0Q3SUc7RUM4SUgsb0JBQUE7QUZzSFI7QUVqSE07RUFDRSx5QkRsSkk7QURxUVo7QUVqSFE7RUFDRSxZRGxLRjtBRHFSUjtBRWhIUTtFQUNFLFlEdEtGO0FEd1JSO0FFNUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7QUY2R0o7QUUzR0k7RUFDRSxnQkFBQTtBRjZHTjtBRTFHSTtFQUNFLGFBQUE7QUY0R047QUUxR007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUY0R1I7QUUxR1E7RUFDRSxnQkFBQTtBRjRHVjtBRXpHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkQxTEU7RUMyTEYsc0JENUlBO0FEcVBWO0FFdkdVO0VBQ0UsY0R0TUE7QUQrU1o7QUVyR1E7RUFDRSxZQUFBO0VBQ0EsY0QzTkY7QURrVVI7QUVwR1E7OztFQUdFLGVEeEtLO0FEOFFmO0FFbkdRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBRnFHVjtBRWxHUTtFQUNFLGNBQUE7QUZvR1Y7QUUvRkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FGZ0dOO0FFOUZNO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBRmdHUjtBRTdGTTtFQUNFLGdDQUFBO0FGK0ZSO0FFMUZFO0VBQ0UsOENBQUE7QUY0Rko7QUUxRkk7RUFDRSxvQkFBQTtBRjRGTjtBRTFGTTtFQUNFLHFCQUFBO0FGNEZSO0FFeEZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRjBGTjtBRXhGTTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUYwRlI7QUV2Rk07RUFDRSxrQkFBQTtBRnlGUjtBRXRGTTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRndGUjtBRXRGUTs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ5RlY7QUV2RlU7O0VBQ0UsZUR4UEs7QURrVmpCO0FFcEZRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRnNGVjtBRXBGVTtFQUNFLGNEOVJEO0FEb1hYO0FFbEZRO0VBQ0UsY0RuU0M7QUR1WFg7QUU5RVU7RUFDRSx5QkQ3U0E7QUQ2WFo7QUV6RVU7RUFDRSx5QkRyVEE7QURnWVo7QUVwRVU7RUFDRSx5QkQvVUU7QURxWmQ7QUVqRU07O0VBRUUseUJBQUE7QUZtRVI7QUVoRU07O0VBRUUsZUR4U087QUQwV2Y7QUUvRE07RUFDRSxlRDNTTztBRDRXZjs7QUd0YUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsY0ZvQlM7QURtWlg7QUdyYUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUhxYUo7QUduYUk7RUFDRSxnQkFBQTtFQUVBLGNGR0s7QURpYVg7QUdoYUU7RUFDRSxjRjVCSTtBRDhiUjtBRy9aRTtFQUNFLGlCQUFBO0FIaWFKOztBRzdaQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUhnYUY7O0FHN1pBO0VBQ0UsYUFBQTtFQUNBLHFCRjRCUTtFRTNCUiwwQ0FBQTtBSGdhRjtBRzlaRTtFQUxGO0lBTUksYUFBQTtFSGlhRjtBQUNGO0FHL1pFO0VBQ0UsbUJBQUE7RUFDQSxlRklXO0VFSFgsaUJBQUE7QUhpYUo7O0FHN1pBO0VBQ0UsZUZGYTtFRUdiLGlCQUFBO0VBQ0EsZUFBQTtBSGdhRjs7QUc3WkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUhnYUY7QUc5WkU7Ozs7RUFFRSxlRmJZO0FEK2FoQjtBRy9aRTs7RUFFRSxjRmxETztBRG1kWDs7QUc1WkU7RUFFRSxjRnpETztBRHVkWDs7QUcxWkE7RUFDRSxlRjlCYztBRDJiaEI7QUczWkU7RUFDRSxjQUFBO0FINlpKOztBR3paQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCRmhDUTtFRWlDUiwyQ0FBQTtBSDJaRjtBR3paRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBSDJaSjs7QUd2WkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUVBLDZCQUFBO0VBQ0EsdUJGNUhNO0FEbWhCUjtBR3BaSTtFQURGO0lBRUksVUFBQTtFSHVaSjtBQUNGOztBR25aQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUhzWkYiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAmLndpdGgtYWJzdHJhY3Qge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9nZW5lcmFsL3BhZ2UtaGVhZGVyLXRvcC1hYnN0cmFjdC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVyIHtcblxuICAgIC5pbnB1dC1ncm91cC10ZXh0LFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4gICAgICAmOm5vdCg6aG92ZXIpIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNyaXRlcmlhLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuY3JpdGVyaWEge1xuICAgICAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgLjVyZW0pO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAxNnB4IHJnYmEoJGJsYWNrLCAuMDUpO1xuXG4gICAgICAgID4udGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jaGVjayB7XG4gICAgICAgICAgJisuZm9ybS1jaGVjayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzkzOTM5MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhZ2UtdGl0bGUge1xuXG4gICYrLnRleHQsXG4gICYrLm9yZGVyLWxpc3QsXG4gICYrLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gICYrLnRleHQge1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50aXRsZS1ib3R0b20tbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgIGluc2V0LWlubGluZTogMDtcblxuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgICYrLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogLjVyZW07XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAuNXJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSkge1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxuICB9XG59XG5cbnVsLm9yZGVyLWxpc3Qge1xuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgJitsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5vcmRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cbn0iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnBhZ2UtaGVhZGVyLndpdGgtYWJzdHJhY3Qge1xuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzY0NztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC9wYWdlLWhlYWRlci10b3AtYWJzdHJhY3Quc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucGFnZS1oZWFkZXIud2l0aC1hYnN0cmFjdCAucGFnZS10aXRsZSAudGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICNEOUQ5RDk7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5idG4ge1xuICBib3JkZXItY29sb3I6ICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5idG46bm90KDpob3Zlcikge1xuICBjb2xvcjogIzA5MzI2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIC5jcml0ZXJpYSB7XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjVyZW0pO1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTcsIDIxNywgMjE3LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMTZweCByZ2JhKDAsIDMxLCAzMywgMC4wNSk7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciAuY3JpdGVyaWEgPiAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIC5jcml0ZXJpYSAuZm9ybS1jaGVjayArIC5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmNyaXRlcmlhLXdyYXBwZXIgLmNyaXRlcmlhIC5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICM5MzkzOTM7XG59XG5cbi5wYWdlLXRpdGxlICsgLnRleHQsIC5wYWdlLXRpdGxlICsgLm9yZGVyLWxpc3QsIC5wYWdlLXRpdGxlICsgLnBhZ2UtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ucGFnZS10aXRsZSArIC50ZXh0IHtcbiAgY29sb3I6ICM2Njc2NzY7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZS1ib3R0b20tbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnBhZ2UtdGl0bGUgLnRpdGxlLWJvdHRvbS1saW5lIC5pY29uIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG4ucGFnZS10aXRsZSAudGl0bGUtYm90dG9tLWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjVyZW07XG4gIGluc2V0LWlubGluZTogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEIyQkQ7XG59XG5cbi5wYWdlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMC41cmVtO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC40KTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW06bm90KC5hY3RpdmUpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC40KTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW06bm90KC5hY3RpdmUpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICMzNTNCM0I7XG59XG5cbnVsLm9yZGVyLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxudWwub3JkZXItbGlzdCBsaSArIGxpIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbnVsLm9yZGVyLWxpc3QgLm9yZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTc7XG59XG51bC5vcmRlci1saXN0IC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMUYyMTtcbn1cblxuLmNhcmQge1xuICAtLWJzLWNhcmQtdGl0bGUtc3BhY2VyLXk6IDA7XG4gIC0tYnMtY2FyZC1jYXAtYmc6ICRjYXJkLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIC5pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyOm5vdCgubm8tc2VwYXJldG9yKTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0LWlubGluZTogdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RUFFQTtcbn1cbi5jYXJkLnF1YWxpaWNhdGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuMTVzO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjMpO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZCAuY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMS41cmVtO1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC41cmVtO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQgLmNhcmQtYm9keSAuY2FyZC10aXRsZSB7XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmctaG92ZXIucG5nXCIpO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSB7XG4gIGJvcmRlci1jb2xvcjogIzAwNTI1Nztcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNEVDRUM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjJCRDtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1oZWFkZXIgLmljb24gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAudGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAudGl0bGUgPiAqOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC4wOCk7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtYm9keSAuY2FyZC10ZXh0IHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNTNCM0I7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtYm9keSAuYXJyb3cge1xuICBjb2xvcjogIzAwQjJCRDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTc7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSAuY2FyZC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQubGljZW5zZS1jYXJkOmhvdmVyIC5jYXJkLWJvZHkgLmFycm93IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQuYnJpZWYtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjIpO1xuICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgIzAwNTI1NztcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDE4MSwgMTgzLCAxODUsIDAuMjYpO1xufVxuLmNhcmQuYnJpZWYtY2FyZCArIC5icmllZi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmRldGFpbHMge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtICsgLml0ZW0ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAuZGF0YSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5mb3JtLWxhYmVsLFxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAua2V5LFxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAudmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5rZXkge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAudmFsdWUge1xuICBjb2xvcjogI0EyQjJCMztcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG4uY2FyZC5icmllZi1jYXJkIC5hY3Rpb25zIC5idG4ge1xuICAtLWJzLWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XG4gIC0tYnMtYnRuLXBhZGRpbmcteTogMXJlbTtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmFjdGlvbnMgLnAtYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDUyNTc7XG59XG4uY2FyZC5waGFzZXMtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDMxLCAzMywgMC4wOCk7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG59XG4uY2FyZC5waGFzZXMtY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMC41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE3LCAyMTcsIDIxNywgMC40KTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSArIC5waGFzZSB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyLFxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1oZWFkZXIgLmljb24sXG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWRhdGUgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWhlYWRlciAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSxcbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtZGF0ZSAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyIC5pY29uIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWhlYWRlciAudGl0bGUge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZS5kb25lIC5waGFzZS1oZWFkZXIgLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlLmN1cnJlbnQgLnBoYXNlLWhlYWRlciAuaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UubmV4dCAucGhhc2UtaGVhZGVyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RUFFQTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2Utc3RhdHVzLFxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1kYXRlIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMnJlbTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAudGl0bGUsXG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uZm9ybS10aXRsZSAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzYzNTtcbn1cbi5mb3JtLXRpdGxlIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uZm9ybS10aXRsZSBzbWFsbCB7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLmZvcm0tdGl0bGUgfiAuZm9ybS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xufVxuXG4uZm9ybS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiByZ2JhKDUzLCA1OSwgNTksIDAuNSk7XG59XG5cbi5mb3JtLWJsb2NrIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuMik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tYmxvY2sge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbi5mb3JtLWJsb2NrIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGQtYXJyYXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW5vdGUsXG4uZm9ybS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xufVxuLmZvcm0tbm90ZSAudGV4dCxcbi5mb3JtLW5vdGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10sXG4uZm9ybS10ZXh0IC50ZXh0LFxuLmZvcm0tdGV4dCBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mb3JtLW5vdGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10sXG4uZm9ybS10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG5cbi5mb3JtLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cblxuLmZvcm0tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mb3JtLW5vdGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmZvcm0taW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBib3JkZXI6IDEuMnB4IGRhc2hlZCAjNjY3Njc2O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuMTkpO1xufVxuLmZvcm0taW1hZ2VzIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IC0xcmVtO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREFFNUUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWFjdGlvbnMgLmJ0biB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxufVxuXG4uZm9ybS1zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0Y1O1xufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLmNhcmQge1xuICAtLWJzLWNhcmQtdGl0bGUtc3BhY2VyLXk6IDA7XG4gIC0tYnMtY2FyZC1jYXAtYmc6ICRjYXJkLWJnO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogLjVyZW07XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgfVxuXG4gICAgJjpub3QoLm5vLXNlcGFyZXRvcikge1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldC1pbmxpbmU6IHZhcigtLWJzLWNhcmQtY2FwLXBhZGRpbmcteCk7XG4gICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYucXVhbGlpY2F0aW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zL2NvbnRlbnQvcXVhbGlmaWNhdGlvbi9jYXJkLWJnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAuMTVzO1xuXG4gICAgLmljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuXG4gICAgICBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibGFjaywgLjMpO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxLjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcblxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9ucy9jb250ZW50L3F1YWxpZmljYXRpb24vY2FyZC1iZy1ob3Zlci5wbmcnKTtcblxuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW1haW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5saWNlbnNlLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG5cbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0U0RUNFQztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAgID4qOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAuMDgpO1xuXG4gICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAuYXJyb3cge1xuICAgICAgICBjb2xvcjogJHRoZW1lLW1pZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1haW47XG5cbiAgICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYnJpZWYtY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4yKTtcbiAgICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgJHRoZW1lLW1haW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMTgxLCAxODMsIDE4NSwgMC4yNik7XG5cbiAgICAmKy5icmllZi1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgfVxuXG4gICAgLmRldGFpbHMge1xuICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYrLml0ZW0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGEge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tbGFiZWwsXG4gICAgICAgIC5rZXksXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmtleSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgIGNvbG9yOiAjQTJCMkIzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogLjVyZW07XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDFyZW07XG4gICAgICByaWdodDogMXJlbTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgLS1icy1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xuICAgICAgICAtLWJzLWJ0bi1wYWRkaW5nLXk6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkdGhlbWUtbWFpbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnBoYXNlcy1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgkYmxhY2ssIDAuMDgpO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcblxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBoYXNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcm93LWdhcDogLjVyZW07XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjQpO1xuICAgICAgfVxuXG4gICAgICAmKy5waGFzZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnBoYXNlLWhlYWRlcixcbiAgICAgIC5waGFzZS1kYXRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5kb25lIHtcbiAgICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmN1cnJlbnQge1xuICAgICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubmV4dCB7XG4gICAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGVyZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBoYXNlLXN0YXR1cyxcbiAgICAgIC5waGFzZS1kYXRlIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMnJlbTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlLFxuICAgICAgLnRleHQge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG5cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAmLnF1YWxpaWNhdGlvbi1yZXFlc3QtY2FyZCB7XG4gIC8vICAgLmNhcmQtdGl0bGUge1xuXG4gIC8vICAgICAudGl0bGUsXG4gIC8vICAgICAuZGF0ZSxcbiAgLy8gICAgIC5hY3Rpb25zIHtcbiAgLy8gICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgLnRpdGxlIHtcbiAgLy8gICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAuZGF0ZSB7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAgIC5rZXkge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgLy8gICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLnZhbHVlIHtcbiAgLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgICAgY29sdW1uLWdhcDogLjI1cmVtO1xuXG4gIC8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuXG4gIC8vICAgICAuYWN0aW9ucyB7XG4gIC8vICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAvLyAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICAuYXBwbGljYW50IHtcbiAgLy8gICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAua2V5IHtcbiAgLy8gICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAvLyAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAudmFsdWUge1xuICAvLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAvLyAgICAgICAuaW1hZ2Uge1xuICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAvLyAgICAgICAgIHdpZHRoOiAycmVtO1xuICAvLyAgICAgICAgIGhlaWdodDogMnJlbTtcblxuICAvLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrZ3JlZW47XG4gIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgkYmxhY2ssIDAuMSk7XG5cbiAgLy8gICAgICAgICAuYXZhdGFyIHtcbiAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAubmFtZSB7XG4gIC8vICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuXG4gIC8vICAgICAuZGV0YWlscyB7XG4gIC8vICAgICAgIGxhYmVsIHtcbiAgLy8gICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIC8vICAgICAgICAgY29sb3I6IHJnYmEoJGRhcmtncmF5LCAuNSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzcGFuIHtcbiAgLy8gICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG59IiwiLmZvcm0tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICB9XG5cbiAgJn4uZm9ybS1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW07XG4gIH1cbn1cblxuLmZvcm0tc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogcmdiYSgkZGFyaywgLjUpO1xufVxuXG4uZm9ybS1ibG9jayB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVncmF5LCAuMik7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLmFkZC1hcnJheSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tbm90ZSxcbi5mb3JtLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAudGV4dCxcbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuICB9XG5cbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gIH1cbn1cblxuLmZvcm0tdGV4dCB7XG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICB9XG59XG5cbi5mb3JtLW5vdGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmZvcm0taW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGJvcmRlcjogMS4ycHggZGFzaGVkICRkYXJrZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVncmF5LCAuMTkpO1xuXG4gIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAtMXJlbTtcbiAgei1pbmRleDogMTtcblxuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQUU1RTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAuYnRuIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjdGNTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 43377:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/qualifying-certificates/qualifying-certificates.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualifyingCertificatesComponent": () => (/* binding */ QualifyingCertificatesComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataModels/enum/qualification-request-type */ 81984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _services_qualification_certificates_qualification_certificates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/qualification-certificates/qualification-certificates.service */ 54363);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-print */ 98820);
/* harmony import */ var _components_engineering_certificate_engineering_certificate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/engineering-certificate/engineering-certificate.component */ 32357);
/* harmony import */ var _components_accountant_certificate_accountant_certificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/accountant-certificate/accountant-certificate.component */ 65187);
/* harmony import */ var _components_developer_certificate_developer_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/developer-certificate/developer-certificate.component */ 93304);
/* harmony import */ var _components_contribution_developer_certificate_contribution_developer_certificate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/contribution-developer-certificate/contribution-developer-certificate.component */ 43615);
















function QualifyingCertificatesComponent_div_0_div_1_app_engineering_certificate_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-engineering-certificate", 17);
  }
  if (rf & 2) {
    const certificate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("certificateData", certificate_r4)("id", "print-section" + certificate_r4.requestCode);
  }
}
function QualifyingCertificatesComponent_div_0_div_1_app_engineering_certificate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-engineering-certificate", 17);
  }
  if (rf & 2) {
    const certificate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("certificateData", certificate_r4)("id", "print-section" + certificate_r4.requestCode);
  }
}
function QualifyingCertificatesComponent_div_0_div_1_app_accountant_certificate_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-accountant-certificate", 17);
  }
  if (rf & 2) {
    const certificate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("certificateData", certificate_r4)("id", "print-section" + certificate_r4.requestCode);
  }
}
function QualifyingCertificatesComponent_div_0_div_1_app_accountant_certificate_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-accountant-certificate", 17);
  }
  if (rf & 2) {
    const certificate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("certificateData", certificate_r4)("id", "print-section" + certificate_r4.requestCode);
  }
}
function QualifyingCertificatesComponent_div_0_div_1_app_developer_certificate_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-developer-certificate", 17);
  }
  if (rf & 2) {
    const certificate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("certificateData", certificate_r4)("id", "print-section" + certificate_r4.requestCode);
  }
}
function QualifyingCertificatesComponent_div_0_div_1_app_contribution_developer_certificate_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-contribution-developer-certificate", 17);
  }
  if (rf & 2) {
    const certificate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("certificateData", certificate_r4)("id", "print-section" + certificate_r4.requestCode);
  }
}
function QualifyingCertificatesComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function QualifyingCertificatesComponent_div_0_div_1_Template_h6_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const certificate_r4 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.navigateToRequestDetails(certificate_r4.qualificationRequestId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, QualifyingCertificatesComponent_div_0_div_1_app_engineering_certificate_5_Template, 1, 2, "app-engineering-certificate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, QualifyingCertificatesComponent_div_0_div_1_app_engineering_certificate_6_Template, 1, 2, "app-engineering-certificate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, QualifyingCertificatesComponent_div_0_div_1_app_accountant_certificate_7_Template, 1, 2, "app-accountant-certificate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, QualifyingCertificatesComponent_div_0_div_1_app_accountant_certificate_8_Template, 1, 2, "app-accountant-certificate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, QualifyingCertificatesComponent_div_0_div_1_app_developer_certificate_9_Template, 1, 2, "app-developer-certificate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, QualifyingCertificatesComponent_div_0_div_1_app_contribution_developer_certificate_10_Template, 1, 2, "app-contribution-developer-certificate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 9)(12, "h5", 10)(13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "button", 12)(16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 14)(19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0634\u0647\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "calendar_month");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const certificate_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" #", certificate_r4.requestCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", certificate_r4.qualificationRequestType == ctx_r3.QualificationType.engineeringConsultantQualificationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", certificate_r4.qualificationRequestType == ctx_r3.QualificationType.contributionAccountantQualificationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", certificate_r4.qualificationRequestType == ctx_r3.QualificationType.accountantQualificationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", certificate_r4.qualificationRequestType == ctx_r3.QualificationType.contributionAccountantQualificationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", certificate_r4.qualificationRequestType == ctx_r3.QualificationType.realStateDeveloperQualificationRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", certificate_r4.qualificationRequestType == ctx_r3.QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" \u0634\u0647\u0627\u062F\u0629 ", certificate_r4.qualificationRequestTypeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("previewOnly", false)("useExistingCss", true)("printSectionId", "print-section" + certificate_r4.requestCode)("printTitle", certificate_r4.qualificationRequestTypeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](23, 13, certificate_r4.committeeDecisionDate, "dd MMMM yyyy"), " ");
  }
}
function QualifyingCertificatesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, QualifyingCertificatesComponent_div_0_div_1_Template, 26, 16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.qualificationCertificates);
  }
}
function QualifyingCertificatesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 18)(2, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0634\u0647\u0627\u062F\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
class QualifyingCertificatesComponent {
  get RequestCodeEnum() {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum;
  }
  constructor(_userDataService, _qualificationCertificatesService, _requestService, _router) {
    this._userDataService = _userDataService;
    this._qualificationCertificatesService = _qualificationCertificatesService;
    this._requestService = _requestService;
    this._router = _router;
    this.subscriptions = [];
    this.qualificationCertificates = [];
    this.userData = null;
    this.requestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.requestDetails}`;
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseURL}/`;
    this.cssStyle = '../../components/certificate/certificate.component.scss';
    this.QualificationType = _dataModels_enum_qualification_request_type__WEBPACK_IMPORTED_MODULE_3__.QualificationType;
  }
  ngOnInit() {
    this.obseveCustomerData();
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      if (this.userData) {
        console.log("this.userData", this.userData);
        this.GetCertificatesByCustomerId();
      }
    }));
  }
  GetCertificatesByCustomerId() {
    // this.qualificationCertificates = [{
    //   facilityName: "test1",
    //   qualificationRequestId: "test1",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test1",
    //   qualificationRequestType: "RED01",
    //   certificateHTMLFile: "test1",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test1",
    //   certificateNumber: "test1",
    //   certificateFile: "test1",
    // },
    // {
    //   facilityName: "test2",
    //   qualificationRequestId: "test2",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test2",
    //   qualificationRequestType: "REM",
    //   certificateHTMLFile: "test2",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test2",
    //   certificateNumber: "test2",
    //   certificateFile: "test2",
    // }, {
    //   facilityName: "test3",
    //   qualificationRequestId: "test3",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test3",
    //   qualificationRequestType: "REB",
    //   certificateHTMLFile: "test3",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test3",
    //   certificateNumber: "test3",
    //   certificateFile: "test3",
    // }]
    this.subscriptions.push(this._qualificationCertificatesService.getCertificatesByCustomerId(this.userData?.id).subscribe(res => {
      console.log("getCertificatesByCustomerId", res);
      if (res && res.length > 0) {
        this.qualificationCertificates = res;
      }
    }));
  }
  qualificationRequestType(qualificationRequestType) {
    return _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_0__.RequestCodeEnum[qualificationRequestType];
  }
  navigateToRequestDetails(qualificationRequestId) {
    this.setSelectedRequestIdInLocalStorage(qualificationRequestId);
    this.routeToRequestDetails();
  }
  routeToRequestDetails() {
    this._router.navigate([this.requestDetailsRoute]);
  }
  setSelectedRequestIdInLocalStorage(qualificationRequestId) {
    this._requestService.setSelectedRequestIdInLocalStorage(qualificationRequestId);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
QualifyingCertificatesComponent.ɵfac = function QualifyingCertificatesComponent_Factory(t) {
  return new (t || QualifyingCertificatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_qualification_certificates_qualification_certificates_service__WEBPACK_IMPORTED_MODULE_5__.QualificationCertificatesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
};
QualifyingCertificatesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: QualifyingCertificatesComponent,
  selectors: [["app-qualifying-certificates"]],
  decls: 3,
  vars: 2,
  consts: [["class", "row", 4, "ngIf", "ngIfElse"], ["NoCertificate", ""], [1, "row"], ["class", "col-12 col-md-6 col-lg-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "mb-2"], [1, "card"], [1, "card-body"], [1, "cert-number", "mb-2", 3, "click"], [3, "certificateData", "id", 4, "ngIf"], [1, "d-flex", "flex-column", "justify-content-between", "my-3"], [1, "card-title", "mb-0"], [1, "cert-name"], ["ngxPrint", "", 1, "p-0", "border-0", "bg-transparent", 3, "previewOnly", "useExistingCss", "printSectionId", "printTitle"], [1, "icon", "material-icons"], [1, "card-text"], [1, "key"], ["dir", "ltr", 1, "value"], [3, "certificateData", "id"], [1, "col-12"], [1, "text-center"]],
  template: function QualifyingCertificatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, QualifyingCertificatesComponent_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, QualifyingCertificatesComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.qualificationCertificates.length > 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Dir, ngx_print__WEBPACK_IMPORTED_MODULE_15__.NgxPrintDirective, _components_engineering_certificate_engineering_certificate_component__WEBPACK_IMPORTED_MODULE_7__.EngineeringCertificateComponent, _components_accountant_certificate_accountant_certificate_component__WEBPACK_IMPORTED_MODULE_8__.AccountantCertificateComponent, _components_developer_certificate_developer_certificate_component__WEBPACK_IMPORTED_MODULE_9__.DeveloperCertificateComponent, _components_contribution_developer_certificate_contribution_developer_certificate_component__WEBPACK_IMPORTED_MODULE_10__.ContributionDeveloperCertificateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".card-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 0.5rem;\n  font-size: 1rem;\n  color: #353B3B;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n\n.cert-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.cert-number[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #353B3B;\n}\n\n.value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  color: #353B3B;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL3BhZ2VzL3F1YWxpZnlpbmctY2VydGlmaWNhdGVzL3F1YWxpZnlpbmctY2VydGlmaWNhdGVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsY0NQRztBREtQOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQzFCRztBRHdCUDs7QUFLQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NsQ0c7QUQrQlAiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2N1c3RvbS12YXJpYWJsZXNcIjtcblxuLmNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMC41cmVtO1xuXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAkZGFyaztcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG5cbi5jZXJ0LW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2VydC1udW1iZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogJGRhcms7XG59XG5cbi52YWx1ZSB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogLjVyZW07XG4gICAgY29sb3I6ICRkYXJrO1xuICAgIFxufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 45202:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/renew-qualifying-list/renew-qualifying-list.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewQualifyingListComponent": () => (/* binding */ RenewQualifyingListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_renew_qualifying_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/renew-qualifying-list.service */ 39669);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);











function RenewQualifyingListComponent_tbody_15_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qualifying_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", qualifying_r2.facilities.facilityName, " ");
  }
}
function RenewQualifyingListComponent_tbody_15_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qualifying_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, qualifying_r2.qualificationRequestVersions[0].requestFrom, "dd MMMM yyyy"));
  }
}
function RenewQualifyingListComponent_tbody_15_tr_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qualifying_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, qualifying_r2.qualificationRequestVersions[0].requestTo, "dd MMMM yyyy"), " ");
  }
}
function RenewQualifyingListComponent_tbody_15_tr_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qualifying_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", qualifying_r2.qualificationRequestType.typeName, " - ", qualifying_r2.qualificationRequestType.showForWafi ? "\u0644\u062C\u0646\u0629 \u0627\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629" : "\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629", " ");
  }
}
function RenewQualifyingListComponent_tbody_15_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RenewQualifyingListComponent_tbody_15_tr_1_td_1_Template, 3, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RenewQualifyingListComponent_tbody_15_tr_1_td_2_Template, 4, 4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RenewQualifyingListComponent_tbody_15_tr_1_td_3_Template, 4, 4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RenewQualifyingListComponent_tbody_15_tr_1_td_4_Template, 3, 2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "div", 7)(7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RenewQualifyingListComponent_tbody_15_tr_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const qualifying_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.onClickOnRenewLicense(qualifying_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u062A\u062C\u062F\u064A\u062F \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const qualifying_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", qualifying_r2.facilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", qualifying_r2.qualificationRequestVersions && qualifying_r2.qualificationRequestVersions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", qualifying_r2.qualificationRequestVersions && qualifying_r2.qualificationRequestVersions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", qualifying_r2.qualificationRequestType);
  }
}
function RenewQualifyingListComponent_tbody_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RenewQualifyingListComponent_tbody_15_tr_1_Template, 9, 4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qualifying_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", qualifying_r2);
  }
}
function RenewQualifyingListComponent_ng_container_18_Template(rf, ctx) {
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
class RenewQualifyingListComponent {
  constructor(_renewQualifyingListService, _paginationService, _router, _requestService, _userDataService) {
    this._renewQualifyingListService = _renewQualifyingListService;
    this._paginationService = _paginationService;
    this._router = _router;
    this._requestService = _requestService;
    this._userDataService = _userDataService;
    this.reqList = {};
    this.subscriptions = [];
    this.newPageNo = 1;
    this.pagintationData = {
      currentPage: 1,
      pageCount: 0,
      pageSize: 10,
      totalCount: 0
    };
    this.userData = null;
  }
  ngOnInit() {
    this.obseveCustomerData();
    this.watchPaginationActions();
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      this.getExpiredProjectLicensesPagingList();
    }));
  }
  getExpiredProjectLicensesPagingList() {
    this.subscriptions.push(this._renewQualifyingListService.getExpiredQualificationPagingList(this.userData?.facilities[0].id, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res => {
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
    this.getExpiredProjectLicensesPagingList();
  }
  /**
  * onClickOnRenewLicense
  */
  onClickOnRenewLicense(qualifying) {
    console.log("qualifying", qualifying);
    // set Facility Id In Local Storage
    this._requestService.setFacilityIdInLocalStorage(qualifying.facilities.id);
    // navigate to renew page 
    this.navigateToRenew(qualifying.qualificationRequestType.typeCode);
  }
  navigateToRenew(typeCode) {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewRequest}`, typeCode]);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RenewQualifyingListComponent.ɵfac = function RenewQualifyingListComponent_Factory(t) {
  return new (t || RenewQualifyingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_renew_qualifying_list_service__WEBPACK_IMPORTED_MODULE_1__.RenewQualifyingListService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService));
};
RenewQualifyingListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RenewQualifyingListComponent,
  selectors: [["app-renew-qualifying-list"]],
  decls: 19,
  vars: 2,
  consts: [[1, "row", "row-gap-4"], [1, "table-responsive", "mb-3"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], [4, "ngIf"], [1, "d-flex", "align-items-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-dark"], ["dir", "ltr", 1, "text-dark"], [1, "text-daark"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function RenewQualifyingListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u062A\u0627\u0631\u064A\u062E \u0628\u062F\u0623 \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u062A\u0627\u0631\u064A\u062E \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\u0646\u0648\u0639 \u0627\u0644\u062A\u0623\u0647\u064A\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, RenewQualifyingListComponent_tbody_15_Template, 2, 1, "tbody", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RenewQualifyingListComponent_ng_container_18_Template, 3, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.reqList == null ? null : ctx.reqList.results);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.reqList == null ? null : ctx.reqList.totalCount) === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Dir, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 32569:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/request-details/request-details.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestDetailsComponent": () => (/* binding */ RequestDetailsComponent)
/* harmony export */ });
/* harmony import */ var _components_request_data_request_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/request-data/request-data.component */ 54309);
/* harmony import */ var _components_result_of_request_study_result_of_request_study_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/result-of-request-study/result-of-request-study.component */ 57096);
/* harmony import */ var _components_request_events_log_request_events_log_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/request-events-log/request-events-log.component */ 67280);
/* harmony import */ var _dataModels_enum_request_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataModels/enum/request-status */ 76873);
/* harmony import */ var src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/enums/button-type.model */ 63650);
/* harmony import */ var src_app_shared_models_circular_progress_setting_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/circular-progress-setting.model */ 82987);
/* harmony import */ var src_app_shared_components_editor_request_notes_only_editor_request_notes_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component */ 13296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/tabs/tabs.service */ 3408);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 90902);
/* harmony import */ var src_app_shared_services_requestNotes_request_notes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requestNotes/request-notes.service */ 83453);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/tabs/tabs.component */ 73754);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 58915);
/* harmony import */ var _shared_components_circular_progress_circular_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/circular-progress/circular-progress.component */ 48542);

















function RequestDetailsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "app-circular-progress", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r0.localization.remainingDaysToStudy);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("circularProgressSetting", ctx_r0.StudyDaysProgressSetting);
  }
}
function RequestDetailsComponent_ng_container_61_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestDetailsComponent_ng_container_61_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const button_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](button_r2.onclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const button_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", button_r2.isDisables);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", button_r2.title, " ");
  }
}
function RequestDetailsComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RequestDetailsComponent_ng_container_61_button_1_Template, 2, 2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", button_r2.isVisable && (ctx_r1.selectedRequest == null ? null : ctx_r1.selectedRequest.facilities == null ? null : ctx_r1.selectedRequest.facilities.availabilityToUpdate));
  }
}
class RequestDetailsComponent {
  get internalStatusId() {
    return _dataModels_enum_request_status__WEBPACK_IMPORTED_MODULE_3__.internalStatusId;
  }
  constructor(_requestService, _tabsService, _popupService, _toastrService, _requestNotesService) {
    this._requestService = _requestService;
    this._tabsService = _tabsService;
    this._popupService = _popupService;
    this._toastrService = _toastrService;
    this._requestNotesService = _requestNotesService;
    this.subscriptions = [];
    this.selectedRequest = null;
    this.selectedRequestID = "";
    this.tabContent = {
      verticalTabs: false,
      activeTabIndex: 0,
      tabsComponentList: [{
        icon: '',
        title: 'بيانات الطلب',
        Component: _components_request_data_request_data_component__WEBPACK_IMPORTED_MODULE_0__.RequestDataComponent,
        disabled: false,
        isVisible: true,
        id: 'RequestDataComponent'
      }, {
        icon: '',
        title: 'نتيجة دراسة الطلب ',
        Component: _components_result_of_request_study_result_of_request_study_component__WEBPACK_IMPORTED_MODULE_1__.ResultOfRequestStudyComponent,
        disabled: false,
        isVisible: true,
        id: 'ResultOfRequestStudyComponent'
      }, {
        icon: '',
        title: 'سجل  أحداث الطلب',
        Component: _components_request_events_log_request_events_log_component__WEBPACK_IMPORTED_MODULE_2__.RequestEventsLogComponent,
        disabled: false,
        isVisible: true,
        id: 'RequestEventsLogComponent'
      }]
    };
    this.RequestNotes = null;
    this.clientActionsButtons = [{
      icon: "",
      title: "إعادة إرسال الطلب",
      actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__.ButtonType.allowCompile,
      isVisable: true,
      isDisables: false,
      onclick: () => this.openNotesDialog()
    }];
    this.localization = {
      remainingDaysToStudy: "الوقت المتبقي لدراسة الطلب",
      remainingDaysToTakeAnAction: "الوقت المتبقي لأخذ قرار"
    };
    this.StudyDaysProgressSetting = new src_app_shared_models_circular_progress_setting_model__WEBPACK_IMPORTED_MODULE_5__.CircularProgressSetting();
  }
  ngOnInit() {
    this.updateTabContent();
    this.getSelectedRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
    this.observePopupEvents();
    this.observeRequestNotes();
  }
  observeRequestNotes() {
    this.subscriptions.push(this._requestNotesService.RequestNotes$.subscribe(res => {
      if (res) this.RequestNotes = res;
    }));
  }
  updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
  }
  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage();
    console.log("this.selectedRequestID", this.selectedRequestID);
    if (this.selectedRequestID) this.getSelectedRequest();
  }
  getSelectedRequest() {
    this.subscriptions.push(this._requestService.GetQualificationRequestHeaderByRequestId(this.selectedRequestID).subscribe(res => {
      this._requestService.seclectRequest$.next(res);
    }));
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(this._requestService.seclectRequest$.subscribe(res => {
      if (res && res.length > 0) {
        this.selectedRequest = res[0];
        this.updateDayProgressSettings();
      }
    }));
  }
  updateDayProgressSettings() {
    this.updateStudyDaysProgressSetting();
  }
  updateStudyDaysProgressSetting() {
    if (this.selectedRequest) {
      this.StudyDaysProgressSetting.percent = this.selectedRequest.remainingStudyPeriod / this.selectedRequest.studyPeriod * 100;
      this.StudyDaysProgressSetting.title = this.selectedRequest.remainingStudyPeriod.toString();
    }
  }
  // hekper methods 
  openNotesDialog() {
    let Data = {
      id: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__.ButtonType.allowCompile,
      title: " نتيجة معالجة الطلب",
      component: src_app_shared_components_editor_request_notes_only_editor_request_notes_only_component__WEBPACK_IMPORTED_MODULE_6__.EditorRequestNotesOnlyComponent
    };
    this.updateAndOpenData(Data);
  }
  updateAndOpenData(data) {
    this._popupService.updatePopupData(data);
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
        case src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_4__.ButtonType.allowCompile:
          // console.log("allowFeedBack", this.RequestNotes);
          this.compile();
          break;
      }
    }));
  }
  compile() {
    this.subscriptions.push(this._requestService.compile(this.selectedRequestID, this.RequestNotes?.notes).subscribe(res => {
      if (res) {
        this.closeDialog();
        this.emitDataIsUpdate();
        this.getSelectedRequest();
        // this.showNotificationOFsentNotes();
      }
    }));
  }

  closeDialog() {
    this._popupService.dismissDialog();
  }
  emitDataIsUpdate() {
    this._requestService.dataIsUpdate.emit();
  }
  showNotificationOFsentNotes() {
    this._toastrService.success("تم إرسال الملاحظات بنجاح!");
  }
  ngOnDestroy() {
    this._requestService.clearRequestFromLocalStorage();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RequestDetailsComponent.ɵfac = function RequestDetailsComponent_Factory(t) {
  return new (t || RequestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_8__.TabsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_9__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_requestNotes_request_notes_service__WEBPACK_IMPORTED_MODULE_10__.RequestNotesService));
};
RequestDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: RequestDetailsComponent,
  selectors: [["app-request-details"]],
  decls: 64,
  vars: 26,
  consts: [[1, "d-flex", "flex-column", "gap-3", "h-100"], [1, "card", "profile-card"], [1, "card-body"], [1, "row", "row-gap-3"], [1, "col-12", "col-lg"], [1, "d-flex", "align-items-center", "gap-2"], [1, "image", "d-flex", "justify-content-center", "align-items-center", "flex-shrink-0", "rounded-circle", "overflow-hidden"], [1, "icon", "material-icons"], [1, "d-flex", "flex-column", "gap-3"], [1, "small"], [1, "job"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "gap-xl-5"], [1, "key-value"], [1, "key"], [1, "value"], [1, "col-12", "col-lg-auto"], [1, "d-flex", "flex-column", "justify-content-between", "align-items-lg-end", "gap-3"], ["class", "circularProgress", 4, "ngIf"], [1, "status-pill"], [4, "ngFor", "ngForOf"], [1, "tab-wrapper", "flex-fill"], [1, "circularProgress"], [3, "circularProgressSetting"], ["class", "btn btn-primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]],
  template: function RequestDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-breadcrumb");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 8)(11, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "h4", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 12)(24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 12)(29, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 12)(34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 12)(39, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 12)(44, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 12)(49, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 14)(52, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "calendar_month");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](55, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 15)(57, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, RequestDetailsComponent_div_58_Template, 4, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, RequestDetailsComponent_ng_container_61_Template, 2, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](63, "app-tabs");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.selectedRequest == null ? null : ctx.selectedRequest.customers == null ? null : ctx.selectedRequest.customers.fullName, " - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.qualificationRequestType == null ? null : ctx.selectedRequest.qualificationRequestType.typeName);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", (ctx.selectedRequest == null ? null : ctx.selectedRequest.isRenewal) ? "\u062A\u062C\u062F\u064A\u062F" : "", " ", ctx.selectedRequest == null ? null : ctx.selectedRequest.requestCode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.customers == null ? null : ctx.selectedRequest.customers.nidnumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.customers == null ? null : ctx.selectedRequest.customers.nationality == null ? null : ctx.selectedRequest.customers.nationality.nationalityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u0631\u0633\u0648\u0645 \u0627\u0644\u062E\u062F\u0645\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.price);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u0645\u062F\u0629 \u0627\u0644\u0637\u0644\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]((ctx.selectedRequest == null ? null : ctx.selectedRequest.period) == "1" ? "\u0633\u0646\u0629" : (ctx.selectedRequest == null ? null : ctx.selectedRequest.period) == "2" ? "\u0633\u0646\u062A\u064A\u0646" : (ctx.selectedRequest == null ? null : ctx.selectedRequest.period) == "3" ? "\u062B\u0644\u0627\u062B \u0633\u0646\u0648\u0627\u062A" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.customers == null ? null : ctx.selectedRequest.customers.mobile1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.customers == null ? null : ctx.selectedRequest.customers.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("\u062A\u0627\u0631\u064A\u062E \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0637\u0644\u0628");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](55, 23, ctx.selectedRequest == null ? null : ctx.selectedRequest.requestFrom, "dd MMMM yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selectedRequest && !ctx.selectedRequest.isFinished);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx.selectedRequest && ctx.selectedRequest.externalStatusId ? ctx.internalStatusId[ctx.selectedRequest.externalStatusId] : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.selectedRequest == null ? null : ctx.selectedRequest.externalStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.clientActionsButtons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_11__.TabsComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__.BreadcrumbComponent, _shared_components_circular_progress_circular_progress_component__WEBPACK_IMPORTED_MODULE_13__.CircularProgressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.status-dot[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #F5FCFC;\n}\n.status-dot[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n}\n.status-dot.Draft[_ngcontent-%COMP%], .status-pill.Draft[_ngcontent-%COMP%] {\n  color: #8A9393;\n  background-color: #F8FAFA;\n}\n.status-dot.RequestAccepted[_ngcontent-%COMP%], .status-dot.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-dot.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-dot.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-dot.ReqIsBeingReviewed[_ngcontent-%COMP%], .status-pill.RequestAccepted[_ngcontent-%COMP%], .status-pill.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-pill.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-pill.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-pill.ReqIsBeingReviewed[_ngcontent-%COMP%] {\n  color: #59A8D4;\n  background-color: #F8FBFD;\n}\n.status-dot.None[_ngcontent-%COMP%], .status-dot.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%], .status-pill.None[_ngcontent-%COMP%], .status-pill.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%] {\n  color: #1EC39A;\n  background-color: #F4FAF9;\n}\n.status-dot.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-dot.ReqIsBeingStudied[_ngcontent-%COMP%], .status-pill.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-pill.ReqIsBeingStudied[_ngcontent-%COMP%] {\n  color: #F1BD56;\n  background-color: #FAF6ED;\n}\n.status-dot.RequestRejected[_ngcontent-%COMP%], .status-pill.RequestRejected[_ngcontent-%COMP%] {\n  color: #FF7A69;\n  background-color: #FCF6F5;\n}\n.status-dot.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-dot.QualificationCertificateIssued[_ngcontent-%COMP%], .status-pill.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-pill.QualificationCertificateIssued[_ngcontent-%COMP%] {\n  color: #84C03F;\n  background-color: #F4FAF9;\n}\n\n.circularProgress[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 1rem;\n  margin-inline-end: 0.25rem;\n  padding: 0.3rem 1rem;\n  font-size: 12px;\n  color: #E4AB17;\n  border-radius: 0.5rem;\n  background-color: #FEF7EE;\n}\n@media (min-width: 1400px) {\n  .circularProgress[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  --bs-card-border-width: 1px;\n  --bs-card-border-color: #E7EAEA;\n}\n.profile-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  background-color: white;\n}\n.profile-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  color: #BAE9EB;\n}\n.profile-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n  object-fit: cover;\n}\n.profile-card[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  color: #005257;\n  border-radius: 0.25rem;\n  background-color: #F5FCFC;\n}\n.profile-card[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.com-reg-card[_ngcontent-%COMP%] {\n  --bs-card-border-width: 1px;\n  --bs-card-border-color: #E7EAEA;\n}\n.com-reg-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  background-color: #005257;\n}\n.com-reg-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL3BhZ2VzL3JlcXVlc3QtZGV0YWlscy9yZXF1ZXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fc3RhdHVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19jaXJjdWxhci1wcm9ncmVzc3Muc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2ZhY2lsaXR5LXByb2ZpbGUtY29udGVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUU7RUFDRSxvQkFBQTtFQUNBLG1CRTRETTtFRjFETix5QkFBQTtFQUNBLDRFQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDREo7QURJTTtFQUNFLFlFcEJBO0FEa0JSO0FEU0k7O0VBRUUscUJFdEJLO0FEZVg7QURVSTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUNSTjtBRFdJO0VBQ0UseUJBQUE7QUNUTjtBRFdNO0VBQ0UsNkJBQUE7QUNUUjtBRGFJO0VBQ0UscUJFdkNLO0VGd0NMLHFCRXNCSTtBRGpDVjtBRGFNO0VBQ0UsY0UxQkc7RUYyQkgsdUJFbkRBO0FEd0NSO0FEZUk7RUFDRSxrQkFBQTtBQ2JOO0FEZU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUVBLDBDQUFBO0VBQ0EsbUJFS0U7RUZKRix1QkVsRUE7RUZtRUEsK0NBQUE7QUNkUjtBRGdCUTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlRWxCSztFRm1CTCxjRTNFRjtBRDZEUjtBRGtCVTtFQUNFLGtCQUFBO0FDaEJaO0FEbUJVO0VBQ0UsY0FBQTtBQ2pCWjs7QUQyQkU7RUFHRSxnQkFBQTtBQzFCSjtBRDZCRTtFQUNFLGNFOUZPO0VGK0ZQLGtCQUFBO0FDM0JKO0FEOEJFO0VBQ0UsZUFBQTtBQzVCSjtBRCtCRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBQzlCSjtBRGdDSTtFQUNFLGNFdkdNO0FEeUVaO0FEaUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0VBQ0EseUJFbkhLO0FEbUZYOztBRHFDQTtFQUNFLGtCQUFBO0FDbENGOztBRHVDSTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQ3BDTjtBRHNDTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNwQ1I7QUR5Q007RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FDdkNSO0FEeUNRO0VBQ0UsMEJBQUE7QUN2Q1Y7QUQ0Q0k7RUFDRSxjRWxLQztBRHdIUDs7QURnREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUM3Q0o7QUQrQ0k7RUFDRSxnQkFBQTtBQzdDTjtBRGlERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFFQSxlRW5JVztFRm9JWCxpQkFBQTtFQUNBLFlFNUxJO0VGNkxKLGtCQUFBO0VBQ0EseUJFakxRO0FEZ0laO0FEb0RFO0VBQ0UsZUU1SVc7RUY2SVgsZ0JBQUE7RUFDQSxjRXRNSTtBRG9KUjs7QUVySkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLHNCRGlFUTtFQ2hFUixlRGtEYTtFQ2pEYixnQkFBQTtFQUNBLHlCRGVVO0FEd0laO0FFckpFOztFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVENENXO0FENEdmO0FFckpFOztFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRndKSjtBRXJKRTs7Ozs7O0VBS0UsY0RKRztFQ0tILHlCQUFBO0FGd0pKO0FFckpFOzs7RUFFRSxjQUFBO0VBQ0EseUJBQUE7QUZ3Sko7QUVySkU7OztFQUVFLGNBQUE7RUFDQSx5QkFBQTtBRndKSjtBRXJKRTs7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUZ3Sko7QUVySkU7OztFQUVFLGNEckNRO0VDc0NSLHlCQUFBO0FGd0pKOztBRzNNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUZrRFc7RUVqRFgsY0ZZUztFRVZULHFCRjZETTtFRTVETix5QkZNVTtBRHNNZDtBRzFNSTtFQWRKO0lBZVEsZUYwQ087RURtS2I7QUFDRjs7QUk3TkE7RUFDRSwyQkFBQTtFQUNBLCtCQUFBO0FKZ09GO0FJOU5FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkhKSTtBRG9PUjtBSTlOSTtFQUNFLGVBQUE7RUFDQSxjSGNLO0FEa05YO0FJN05JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUorTk47QUkzTkU7RUFDRSxvQkFBQTtFQUNBLGNIUFE7RUdRUixzQkgrQ007RUc5Q04seUJIRFE7QUQ4Tlo7QUkxTkU7RUFDRSxlQUFBO0FKNE5KOztBSXhOQTtFQUNFLDJCQUFBO0VBQ0EsK0JBQUE7QUoyTkY7QUl6TkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCSHhCUTtBRG1QWjtBSXpOSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FKMk5OIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlcmdyYXk7XG5cbiAgJi53aXRoLWFic3RyYWN0IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC9wYWdlLWhlYWRlci10b3AtYWJzdHJhY3Quc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlciB7XG5cbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCxcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJsdWVncmF5O1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAgIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuICAgICAgJjpub3QoOmhvdmVyKSB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jcml0ZXJpYS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmNyaXRlcmlhIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNXJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIC41cmVtKTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkYmx1ZWdyYXksIC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEycHggMTZweCByZ2JhKCRibGFjaywgLjA1KTtcblxuICAgICAgICA+LnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tY2hlY2sge1xuICAgICAgICAgICYrLmZvcm0tY2hlY2sge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM5MzkzOTM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYWdlLXRpdGxlIHtcblxuICAmKy50ZXh0LFxuICAmKy5vcmRlci1saXN0LFxuICAmKy5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cblxuICAmKy50ZXh0IHtcbiAgICBjb2xvcjogJGRhcmtncmF5O1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAudGl0bGUtYm90dG9tLWxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgLmljb24ge1xuICAgICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0wLjVyZW07XG4gICAgICBpbnNldC1pbmxpbmU6IDA7XG5cbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1pZDtcbiAgICB9XG4gIH1cbn1cblxuLnBhZ2Utc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmJyZWFkY3J1bWIge1xuICAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgICAmKy5icmVhZGNydW1iLWl0ZW0ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IC41cmVtO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogLjVyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKCRibGFjaywgLjQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5hY3RpdmUpIHtcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRibGFjaywgLjQpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICRkYXJrO1xuICAgIH1cbiAgfVxufVxuXG51bC5vcmRlci1saXN0IHtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICYrbGkge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gIH1cblxuICAub3JkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNXJlbTtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICB9XG59IiwiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U3RUFFQTtcbn1cbi5wYWdlLWhlYWRlci53aXRoLWFic3RyYWN0IHtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjc2NDc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2dlbmVyYWwvcGFnZS1oZWFkZXItdG9wLWFic3RyYWN0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnBhZ2UtaGVhZGVyLndpdGgtYWJzdHJhY3QgLnBhZ2UtdGl0bGUgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmlucHV0LWdyb3VwLXRleHQsXG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjRDlEOUQ5O1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmlucHV0LWdyb3VwLXRleHQge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIGJvcmRlci1pbmxpbmUtZW5kOiBub25lO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IG5vbmU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuYnRuIHtcbiAgYm9yZGVyLWNvbG9yOiAjRDlEOUQ5O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuYnRuOm5vdCg6aG92ZXIpIHtcbiAgY29sb3I6ICMwOTMyNjY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmNyaXRlcmlhLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciAuY3JpdGVyaWEge1xuICBtaW4td2lkdGg6IDE1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMC41cmVtKTtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjE3LCAyMTcsIDIxNywgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDE2cHggcmdiYSgwLCAzMSwgMzMsIDAuMDUpO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmNyaXRlcmlhLXdyYXBwZXIgLmNyaXRlcmlhID4gLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciAuY3JpdGVyaWEgLmZvcm0tY2hlY2sgKyAuZm9ybS1jaGVjayB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIC5jcml0ZXJpYSAuZm9ybS1jaGVjayAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGNvbG9yOiAjOTM5MzkzO1xufVxuXG4ucGFnZS10aXRsZSArIC50ZXh0LCAucGFnZS10aXRsZSArIC5vcmRlci1saXN0LCAucGFnZS10aXRsZSArIC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLnBhZ2UtdGl0bGUgKyAudGV4dCB7XG4gIGNvbG9yOiAjNjY3Njc2O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4ucGFnZS10aXRsZSAudGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG4ucGFnZS10aXRsZSAudGl0bGUtYm90dG9tLWxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZS1ib3R0b20tbGluZSAuaWNvbiB7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuLnBhZ2UtdGl0bGUgLnRpdGxlLWJvdHRvbS1saW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMC41cmVtO1xuICBpbnNldC1pbmxpbmU6IDA7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCMkJEO1xufVxuXG4ucGFnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMC41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAzMSwgMzMsIDAuNCk7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtOm5vdCguYWN0aXZlKSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAzMSwgMzMsIDAuNCk7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtOm5vdCguYWN0aXZlKSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzUzQjNCO1xufVxuXG51bC5vcmRlci1saXN0IGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbnVsLm9yZGVyLWxpc3QgbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG51bC5vcmRlci1saXN0IC5vcmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjU3O1xufVxudWwub3JkZXItbGlzdCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG5cbi5zdGF0dXMtZG90LFxuLnN0YXR1cy1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4uc3RhdHVzLWRvdCAuaWNvbixcbi5zdGF0dXMtcGlsbCAuaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zdGF0dXMtZG90LkRyYWZ0LFxuLnN0YXR1cy1waWxsLkRyYWZ0IHtcbiAgY29sb3I6ICM4QTkzOTM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkE7XG59XG4uc3RhdHVzLWRvdC5SZXF1ZXN0QWNjZXB0ZWQsIC5zdGF0dXMtZG90LlJlcXVlc3RWZXJpZmllZEFzc2lnbmVkVG9BZG1pbiwgLnN0YXR1cy1kb3QuUmVxdWVzdElzQmVpbmdQcm9jZXNzZWQsIC5zdGF0dXMtZG90LlJlcXVlc3RIYXNCZWVuU2VudEZvclJldmlldywgLnN0YXR1cy1kb3QuUmVxSXNCZWluZ1Jldmlld2VkLFxuLnN0YXR1cy1waWxsLlJlcXVlc3RBY2NlcHRlZCxcbi5zdGF0dXMtcGlsbC5SZXF1ZXN0VmVyaWZpZWRBc3NpZ25lZFRvQWRtaW4sXG4uc3RhdHVzLXBpbGwuUmVxdWVzdElzQmVpbmdQcm9jZXNzZWQsXG4uc3RhdHVzLXBpbGwuUmVxdWVzdEhhc0JlZW5TZW50Rm9yUmV2aWV3LFxuLnN0YXR1cy1waWxsLlJlcUlzQmVpbmdSZXZpZXdlZCB7XG4gIGNvbG9yOiAjNTlBOEQ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQkZEO1xufVxuLnN0YXR1cy1kb3QuTm9uZSwgLnN0YXR1cy1kb3QuUmVxdWVzdFByb2Nlc3NlZEFuZEZlZWRiYWNrU2VudCxcbi5zdGF0dXMtcGlsbC5Ob25lLFxuLnN0YXR1cy1waWxsLlJlcXVlc3RQcm9jZXNzZWRBbmRGZWVkYmFja1NlbnQge1xuICBjb2xvcjogIzFFQzM5QTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkFGOTtcbn1cbi5zdGF0dXMtZG90LkZlZWRiYWNrUHJvY2Vzc2VkQW5kUmVxdWVzdFNlbnQsIC5zdGF0dXMtZG90LlJlcUlzQmVpbmdTdHVkaWVkLFxuLnN0YXR1cy1waWxsLkZlZWRiYWNrUHJvY2Vzc2VkQW5kUmVxdWVzdFNlbnQsXG4uc3RhdHVzLXBpbGwuUmVxSXNCZWluZ1N0dWRpZWQge1xuICBjb2xvcjogI0YxQkQ1NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjZFRDtcbn1cbi5zdGF0dXMtZG90LlJlcXVlc3RSZWplY3RlZCxcbi5zdGF0dXMtcGlsbC5SZXF1ZXN0UmVqZWN0ZWQge1xuICBjb2xvcjogI0ZGN0E2OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjZGNTtcbn1cbi5zdGF0dXMtZG90LlJlcXVUaGVSZXF1ZXN0SGFzQmVlbkFwcHJvdmVkLCAuc3RhdHVzLWRvdC5RdWFsaWZpY2F0aW9uQ2VydGlmaWNhdGVJc3N1ZWQsXG4uc3RhdHVzLXBpbGwuUmVxdVRoZVJlcXVlc3RIYXNCZWVuQXBwcm92ZWQsXG4uc3RhdHVzLXBpbGwuUXVhbGlmaWNhdGlvbkNlcnRpZmljYXRlSXNzdWVkIHtcbiAgY29sb3I6ICM4NEMwM0Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEZBRjk7XG59XG5cbi5jaXJjdWxhclByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xuICBtYXJnaW4taW5saW5lLWVuZDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNFNEFCMTc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjdFRTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNpcmN1bGFyUHJvZ3Jlc3Mge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgLS1icy1jYXJkLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJzLWNhcmQtYm9yZGVyLWNvbG9yOiAjRTdFQUVBO1xufVxuLnByb2ZpbGUtY2FyZCAuaW1hZ2Uge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9maWxlLWNhcmQgLmltYWdlIC5pY29uIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBjb2xvcjogI0JBRTlFQjtcbn1cbi5wcm9maWxlLWNhcmQgLmltYWdlIGltZyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucHJvZmlsZS1jYXJkIC5qb2Ige1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgY29sb3I6ICMwMDUyNTc7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4ucHJvZmlsZS1jYXJkIC5hbGVydCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbS1yZWctY2FyZCB7XG4gIC0tYnMtY2FyZC1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1icy1jYXJkLWJvcmRlci1jb2xvcjogI0U3RUFFQTtcbn1cbi5jb20tcmVnLWNhcmQgLmltYWdlIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI1Nztcbn1cbi5jb20tcmVnLWNhcmQgLmltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iLCIvLyBDb2xvcnNcbiRibGFjazogIzAwMUYyMTtcbiRkYXJrOiAjMzUzQjNCO1xuJHdoaXRlOiB3aGl0ZTtcbiRsaWdodDogI0Y3RjhGODtcblxuJGxpZ2h0ZXJncmF5OiAjRTdFQUVBO1xuJGxpZ2h0Z3JheTogI0FEQUZCMjtcbiRkYXJrZ3JheTogIzY2NzY3NjtcbiRncmVlbmdyYXk6ICM2MTc5NkY7XG4kYmx1ZWdyYXk6ICNEOUQ5RDk7XG5cbiRsaWdodGdyZWVuOiByZ2JhKCMwMDZGNDMsIC4wOCk7XG4kbWludGdyZWVuOiAjODRDMDNGO1xuJG1pZGdyZWVuOiAjMDBCMkJEO1xuJGdyZWVuOiAjMDY3NjQ3O1xuJGRhcmtncmVlbjogIzAwNTI1NztcblxuJGxpZ2h0T3JhbmdlOiAjRkVGN0VFO1xuJG9yYW5nZTogI0ZGQzYzNTtcbiRvcmFuZ2VncmF5OiAjRjJFREUxO1xuJGRhcmtvcmFuZ2U6ICNFNEFCMTc7XG5cbiRibHVlOiAjNTlBOEQ0O1xuJGxpZ2h0Ymx1ZTogI0Y1RkNGQztcbiRncmF5Ymx1ZTogI0JBRTlFQjtcbiRtaWRibHVlOiAjODBDRUM4O1xuJGRhcmtibHVlOiAjMDkzMjY2O1xuXG4kbWlkcmVkOiAjRkY3QTY5O1xuJGRhcmtyZWQ6ICNENjRBMzg7XG5cbiRwcmltYXJ5OiAkZGFya2dyZWVuO1xuJHByaW1hcnktYmc6ICRsaWdodGJsdWU7XG4kaW5mbzogJGJsdWU7XG4kc3VjY2VzczogJGdyZWVuO1xuJHdhcm5pbmc6ICNFQjlCMjI7XG4kZGFuZ2VyOiAkZGFya3JlZDtcbiRzZWNvbmRhcnk6ICM5NTlGQTg7XG5cbi8vIFRoZW1lXG4kdGhlbWUtbWFpbjogJGRhcmtncmVlbjtcbiR0aGVtZS1saWdodDogJGxpZ2h0Ymx1ZTtcbiR0aGVtZS1ncmF5OiAkZ3JheWJsdWU7XG4kdGhlbWUtbWlkOiAkbWlkZ3JlZW47XG4kdGhlbWUtZGFyazogJGRhcmtibHVlO1xuXG4vLyAtIEJhY2tncm91bmRzXG4kYm9keS1iZzogJGxpZ2h0O1xuJHN1Y2Nlc3MtYmctc3VidGxlOiAkbGlnaHRncmVlbjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLSBCb2R5XG4kYm9keS1mb250LXNpemU6IDE2cHg7XG4kYm9keS1jb2xvcjogJGRhcms7XG5cbi8vIC0gQ3VzdG9tIEZvbnQgU2l6ZXNcbiRmb250LXNpemUtc206ICRib2R5LWZvbnQtc2l6ZSAqIC44NzU7XG4kZm9udC1zaXplLXhzOiAkYm9keS1mb250LXNpemUgKiAuNzU7XG4kZm9udC1zaXplLXh4czogJGJvZHktZm9udC1zaXplICogLjYyNTtcbi8vIC0gSGVhZGluZ1xuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IDA7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IGJvbGQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkaW5ncy1jb2xvcjogJGJsYWNrO1xuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAwO1xuLy8gLSBPdGhlcnNcbiRzdWNjZXNzLXRleHQ6ICRkYXJrZ3JlZW47XG4kbmF2LWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuXG4vLyBTaXplc1xuJHNpemUteHM6IC4yNXJlbTsgLy8gNHB4XG4kc2l6ZS1zbTogLjVyZW07IC8vIDhweFxuJHNpemUtbWQ6IDFyZW07IC8vIDE2cHhcbiRzaXplLWxnOiAxLjI1cmVtOyAvLyAyMHB4XG4kc2l6ZS14bDogMS41cmVtOyAvLyAyNHB4XG4kaGVhZGVyLWhlaWdodDogNC41cmVtO1xuXG4vLyBCb3JkZXJcbiRib3JkZXItY29sb3I6ICRsaWdodGdyYXk7XG4vLyAtIEJvcmRlciBSYWRpdXNcbiRib3JkZXItcmFkaXVzLXhzOiAkc2l6ZS14cztcbiRib3JkZXItcmFkaXVzLXNtOiAkc2l6ZS1zbTtcbiRib3JkZXItcmFkaXVzOiAkc2l6ZS1tZDtcbiRib3JkZXItcmFkaXVzLWxnOiAkc2l6ZS1sZztcbiRib3JkZXItcmFkaXVzLXhsOiAkc2l6ZS14bDtcbiRib3JkZXItcmFkaXVzLXBpbGw6IDI1cmVtO1xuXG4vLyBDYXJkc1xuJGNhcmQtYmc6ICR3aGl0ZTtcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBBbGVydHNcbiRhbGVydC1wYWRkaW5nLXk6IC43NXJlbTtcbiRhbGVydC1wYWRkaW5nLXg6IC43NXJlbTtcbiRhbGVydC1ib3JkZXI6ICRkYXJrZ3JlZW47XG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEZvcm1zXG4kaW5wdXQtYmc6ICR3aGl0ZTtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiRpbnB1dC1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTogMDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3I6ICR3aGl0ZTtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbi8vICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6IC4yNXJlbTtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHM7XG5cbi8vIEJ1dHRvbnNcbiRidG4tcGFkZGluZy15LWxnOiBjYWxjKCRzaXplLWxnIC0gLjVyZW0gLSAxcHgpO1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICRzaXplLWxnO1xuJGJ0bi1mb250LXNpemUtbGc6ICRzaXplLW1kO1xuJGJ0bi1mb250LXNpemU6ICRmb250LXNpemUtc207XG4kYnRuLWZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS14cztcblxuLy8gVGFibGVzXG4vLyAkdGFibGUtY2VsbC1wYWRkaW5nLXk6IC41cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy15OiAxLjI1cmVtO1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAxcmVtO1xuJHRhYmxlLWJnOiAkd2hpdGU7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5OyIsIi5zdGF0dXMtZG90LFxuLnN0YXR1cy1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmc7XG5cbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgfVxuXG4gICYuRHJhZnQge1xuICAgIGNvbG9yOiAjOEE5MzkzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkE7XG4gIH1cblxuICAmLlJlcXVlc3RBY2NlcHRlZCxcbiAgJi5SZXF1ZXN0VmVyaWZpZWRBc3NpZ25lZFRvQWRtaW4sXG4gICYuUmVxdWVzdElzQmVpbmdQcm9jZXNzZWQsXG4gICYuUmVxdWVzdEhhc0JlZW5TZW50Rm9yUmV2aWV3LFxuICAmLlJlcUlzQmVpbmdSZXZpZXdlZCB7XG4gICAgY29sb3I6ICRpbmZvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZCRkQ7XG4gIH1cblxuICAmLk5vbmUsXG4gICYuUmVxdWVzdFByb2Nlc3NlZEFuZEZlZWRiYWNrU2VudCB7XG4gICAgY29sb3I6ICMxRUMzOUE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkFGOTtcbiAgfVxuXG4gICYuRmVlZGJhY2tQcm9jZXNzZWRBbmRSZXF1ZXN0U2VudCxcbiAgJi5SZXFJc0JlaW5nU3R1ZGllZCB7XG4gICAgY29sb3I6ICNGMUJENTY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjZFRDtcbiAgfVxuXG4gICYuUmVxdWVzdFJlamVjdGVkIHtcbiAgICBjb2xvcjogI0ZGN0E2OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNkY1O1xuICB9XG5cbiAgJi5SZXF1VGhlUmVxdWVzdEhhc0JlZW5BcHByb3ZlZCxcbiAgJi5RdWFsaWZpY2F0aW9uQ2VydGlmaWNhdGVJc3N1ZWQge1xuICAgIGNvbG9yOiAkbWludGdyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZBRjk7XG4gIH1cbn0iLCIuY2lyY3VsYXJQcm9ncmVzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC4yNXJlbTtcbiAgICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICBjb2xvcjogJGRhcmtvcmFuZ2U7XG5cbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRPcmFuZ2U7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICB9XG59IiwiLnByb2ZpbGUtY2FyZCB7XG4gIC0tYnMtY2FyZC1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1icy1jYXJkLWJvcmRlci1jb2xvcjogI3skbGlnaHRlcmdyYXl9O1xuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZ3JheTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5qb2Ige1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgY29sb3I6ICR0aGVtZS1tYWluO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgfVxuXG4gIC5hbGVydCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi5jb20tcmVnLWNhcmQge1xuICAtLWJzLWNhcmQtYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYnMtY2FyZC1ib3JkZXItY29sb3I6ICN7JGxpZ2h0ZXJncmF5fTtcblxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWFpbjtcblxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 17617:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/request-list/request-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestListComponent": () => (/* binding */ RequestListComponent)
/* harmony export */ });
/* harmony import */ var _dataModels_request_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dataModels/request-list.model */ 17170);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 97304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pagination/pagination.service */ 62375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 30139);
/* harmony import */ var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/no-data/no-data.component */ 63095);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/pagination/pagination.component */ 44362);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 97558);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28089);













function RequestListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "div", 11)(7, "div", 12)(8, "span", 13)(9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RequestListComponent_ng_container_7_Template_input_input_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.getSearchText($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 16)(13, "div", 17)(14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_ng_container_7_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 19)(16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u0628\u062D\u062B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function RequestListComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "div", 11)(7, "div", 12)(8, "span", 13)(9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 16)(13, "div", 17)(14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_ng_container_8_Template_button_click_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.showFilter = !ctx_r7.showFilter);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 19)(16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u0628\u062D\u062B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_ng_container_8_Template_div_click_19_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "accordion", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "accordion-group", 23)(25, "div", 24)(26, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 25)(29, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " \u062A\u062D\u062A \u0627\u0644\u062F\u0631\u0627\u0633\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 33)(42, "span", 25)(43, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\u0645\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](48, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "\u0625\u0644\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "bs-daterangepicker-inline", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "accordion-group")(55, "div", 24)(56, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 25)(59, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, " \u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0637\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, " \u062A\u0645 \u0627\u0644\u0642\u0628\u0648\u0644 \u0648\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r1.showFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](48, 8, ctx_r1.bsInlineRangeValue[0], "dd MMMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](52, 11, ctx_r1.bsInlineRangeValue[1], "dd MMMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsValue", ctx_r1.bsInlineRangeValue)("bsConfig", ctx_r1.bsConfig);
  }
}
function RequestListComponent_ng_container_9_tr_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r12.baseUrl + (request_r11.customers.profileImageFile == null ? null : request_r11.customers.profileImageFile.filePath), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function RequestListComponent_ng_container_9_tr_26_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 56)(1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "fiber_manual_record");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r13.externalStatusId[request_r11.externalStatusId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r11.externalStatus, " ");
  }
}
function RequestListComponent_ng_container_9_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_ng_container_9_tr_26_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const request_r11 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.navigateToDetails(request_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td")(5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RequestListComponent_ng_container_9_tr_26_div_6_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td")(16, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td")(21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RequestListComponent_ng_container_9_tr_26_span_22_Template, 4, 2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const request_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r11.requestCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r11.customers == null ? null : request_r11.customers.profileImageFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](request_r11.customers.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", request_r11.facilities.facilityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 10, request_r11.requestOn, "dd MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](request_r11.facilities.commercialRegisterNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", request_r11.isRenewal ? "\u062A\u062C\u062F\u064A\u062F" : "", " ", request_r11.qualificationRequestType.typeName, " - ", request_r11.qualificationRequestType.showForWafi ? "\u0644\u062C\u0646\u0629 \u0627\u0644\u0628\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629" : "\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", request_r11.externalStatus);
  }
}
function RequestListComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39)(2, "table", 40)(3, "thead")(4, "tr")(5, "th", 41)(6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_ng_container_9_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.sortData("RequestCode"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "unfold_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\u0623\u0633\u0645 \u0627\u0644\u0645\u0646\u0634\u0623\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 41)(15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_ng_container_9_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.sortData("CreatedOn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0642\u062F\u064A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "unfold_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RequestListComponent_ng_container_9_tr_26_Template, 23, 13, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "app-pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.reqList.results);
  }
}
function RequestListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-no-data", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showCompleteBtn", false);
  }
}
class RequestListComponent {
  onDocumentClick() {
    this.showFilter = false;
  }
  get externalStatusId() {
    return _dataModels_request_list_model__WEBPACK_IMPORTED_MODULE_0__.internalStatusId;
  }
  constructor(_requestService, _router, _paginationService) {
    this._requestService = _requestService;
    this._router = _router;
    this._paginationService = _paginationService;
    this.subscriptions = [];
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseURL}/`;
    this.searchText = '';
    this.showFilter = false;
    this.currentSortOrder = null;
    this.currentSortColumn = '';
    this.requestDetailsRoute = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_1__.Configuration.pages.qualifying.requestDetails}`;
    this.bsConfig = {
      containerClass: 'theme-default',
      isAnimated: true,
      showWeekNumbers: false,
      displayOneMonthRange: true,
      showPreviousMonth: false,
      customTodayClass: 'today'
    };
    this.bsInlineValue = new Date();
    this.maxDate = new Date();
    // Pagination
    this.newPageNo = 1;
    this.pagintationData = {
      currentPage: 1,
      pageCount: 0,
      pageSize: 10,
      totalCount: 0
    };
    this.reqList = {};
    this.selectedRequest = {};
    this.maxDate.setDate(this.maxDate.getDate() + 5);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  ngOnInit() {
    this.getQualificationRequests();
    this.watchPaginationActions();
  }
  getSearchText(event) {
    this.searchText = event.target.value;
  }
  sortData(column) {
    if (this.currentSortColumn === column) {
      this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortColumn = column;
      this.currentSortOrder = 'asc';
    }
    this.getQualificationRequests();
  }
  search() {
    this.getQualificationRequests();
  }
  getQualificationRequests() {
    this.subscriptions.push(this._requestService.getQualificationRequests(this.pagintationData.currentPage, this.pagintationData.pageSize, this.searchText, this.currentSortColumn, this.currentSortOrder).subscribe(res => {
      this.updateRequestList(res);
    }));
  }
  //private methods
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
  navigateToDetails(request) {
    this.selectedRequest = request;
    this.setSelectedRequestIdInLocalStorage();
    this.routeToRequestDetails();
  }
  routeToRequestDetails() {
    this._router.navigate([this.requestDetailsRoute]);
  }
  setSelectedRequestIdInLocalStorage() {
    this._requestService.setSelectedRequestIdInLocalStorage(this.selectedRequest.id);
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
    this.getQualificationRequests();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
RequestListComponent.ɵfac = function RequestListComponent_Factory(t) {
  return new (t || RequestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__.PaginationService));
};
RequestListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RequestListComponent,
  selectors: [["app-request-list"]],
  hostBindings: function RequestListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RequestListComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    }
  },
  decls: 11,
  vars: 4,
  consts: [[1, "page"], [1, "page-header", "mb-3"], [1, "row", "row-gap-3"], [1, "col-12", "col-lg-6"], [1, "page-title", "mb-0"], [1, "title"], [4, "ngIf"], [1, "date-range"], [1, "col-12"], [1, "filter"], [1, "row"], [1, "col-4"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], [1, "material-icons-outlined"], ["type", "text", "id", "control-search", "placeholder", "\u0628\u062D\u062B", 1, "form-control", 3, "input"], [1, "col-2"], [1, "criteria-wrapper"], ["type", "button", "id", "btn-stopPropagation", 1, "toggle", "btn", "btn-outline-primary", 3, "click"], [1, "d-flex", "align-items-center", "column-gap-1"], ["type", "text", "id", "control-search", "placeholder", "search", "aria-label", "search", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "control-stopPropagation", 1, "criteria", 3, "hidden", "click"], [1, "simple", 3, "closeOthers", "isAnimated"], [3, "isOpen"], ["accordion-heading", "", 1, "accordion-heading"], [1, "icon"], [1, "open", "material-icons"], [1, "close", "material-icons"], [1, "form-check"], ["type", "checkbox", "id", "control-chk1", "value", "", 1, "form-check-input"], ["for", "chk1", 1, "form-check-label"], ["type", "checkbox", "id", "control-chk2", "value", "", 1, "form-check-input"], ["for", "chk2", 1, "form-check-label"], [1, "date-range-result", "my-3"], [3, "bsValue", "bsConfig"], ["type", "checkbox", "id", "control-chk3", "value", "", 1, "form-check-input"], ["for", "chk3", 1, "form-check-label"], ["type", "checkbox", "id", "control-chk4", "value", "", 1, "form-check-input"], ["for", "chk4", 1, "form-check-label"], [1, "table-responsive", "mb-3"], [1, "table", "table-light"], ["scope", "col"], [1, "sortable", 3, "click"], [1, "icon", "material-icons"], [4, "ngFor", "ngForOf"], [1, "mt-auto"], ["id", "link-navigateToDetails", 1, "underline", "fw-bold", "text-primary", 3, "click"], [1, "d-flex", "align-items-center", "column-gap-2"], ["class", "image", 4, "ngIf"], [1, "username"], [1, "text-dark"], ["dir", "ltr", 1, "text-dark"], [1, "d-flex", "align-items-center"], ["class", "status-dot", 3, "ngClass", 4, "ngIf"], [1, "image"], ["width", "200", "height", "200", 1, "d-block", "w-100", "h-100", 3, "src"], [1, "status-dot", 3, "ngClass"], [1, "mt-4"], [3, "showCompleteBtn"]],
  template: function RequestListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062C\u0627\u0631\u064A \u062F\u0631\u0627\u0633\u062A\u0647\u0627");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, RequestListComponent_ng_container_7_Template, 19, 0, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, RequestListComponent_ng_container_8_Template, 71, 14, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RequestListComponent_ng_container_9_Template, 29, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RequestListComponent_ng_container_10_Template, 3, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount > 0 && false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reqList.totalCount === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Dir, _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_5__.NoDataComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionPanelComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDaterangepickerInlineDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".table[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-block: 0.75rem 1rem;\n  font-size: 14px;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sortable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #E7EAEA;\n}\n.table-light[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #001F21;\n  background-color: #F4F6F6;\n}\n.table-light[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ADAFB2;\n  background-color: white;\n}\n.table-light[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\ntd[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid #667676;\n  border-radius: 50%;\n  overflow: hidden;\n}\ntd[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\ntd[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  color: #959FA8;\n}\ntd[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\ntd[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]   .mat-mdc-mini-fab[_ngcontent-%COMP%] {\n  width: 2rem !important;\n  height: 2rem !important;\n  color: #093266 !important;\n  border: 1px solid #093266;\n  background-color: white !important;\n  box-shadow: 0px 2px 10px 0px rgba(141, 141, 141, 0.13) !important;\n}\ntd[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]   .mat-mdc-mini-fab[_ngcontent-%COMP%]:not(.mdc-fab--extended) {\n  border-radius: 0.25rem !important;\n}\n\n.status-dot[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #F5FCFC;\n}\n.status-dot[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .status-pill[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n}\n.status-dot.Draft[_ngcontent-%COMP%], .status-pill.Draft[_ngcontent-%COMP%] {\n  color: #8A9393;\n  background-color: #F8FAFA;\n}\n.status-dot.RequestAccepted[_ngcontent-%COMP%], .status-dot.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-dot.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-dot.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-dot.ReqIsBeingReviewed[_ngcontent-%COMP%], .status-pill.RequestAccepted[_ngcontent-%COMP%], .status-pill.RequestVerifiedAssignedToAdmin[_ngcontent-%COMP%], .status-pill.RequestIsBeingProcessed[_ngcontent-%COMP%], .status-pill.RequestHasBeenSentForReview[_ngcontent-%COMP%], .status-pill.ReqIsBeingReviewed[_ngcontent-%COMP%] {\n  color: #59A8D4;\n  background-color: #F8FBFD;\n}\n.status-dot.None[_ngcontent-%COMP%], .status-dot.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%], .status-pill.None[_ngcontent-%COMP%], .status-pill.RequestProcessedAndFeedbackSent[_ngcontent-%COMP%] {\n  color: #1EC39A;\n  background-color: #F4FAF9;\n}\n.status-dot.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-dot.ReqIsBeingStudied[_ngcontent-%COMP%], .status-pill.FeedbackProcessedAndRequestSent[_ngcontent-%COMP%], .status-pill.ReqIsBeingStudied[_ngcontent-%COMP%] {\n  color: #F1BD56;\n  background-color: #FAF6ED;\n}\n.status-dot.RequestRejected[_ngcontent-%COMP%], .status-pill.RequestRejected[_ngcontent-%COMP%] {\n  color: #FF7A69;\n  background-color: #FCF6F5;\n}\n.status-dot.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-dot.QualificationCertificateIssued[_ngcontent-%COMP%], .status-pill.RequTheRequestHasBeenApproved[_ngcontent-%COMP%], .status-pill.QualificationCertificateIssued[_ngcontent-%COMP%] {\n  color: #84C03F;\n  background-color: #F4FAF9;\n}\n\n.date-range-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  color: #093266;\n  border: 1px solid #093266;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 0px 4px rgba(0, 111, 67, 0.1);\n}\n.date-range-result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .date-range-result[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B4B4B4;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vX3RhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL3BhZ2VzL3JlcXVlc3QtbGlzdC9yZXF1ZXN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L190YWJsZS1jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L19zdGF0dXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVDd0RhO0VEdkRiLGdCQUFBO0FFQ0Y7QUZDRTs7RUFFRSxzQkFBQTtBRUNKO0FGR0k7RUFDRSwyQkFBQTtFQUNBLGVDNkNTO0VENUNULGdCQUFBO0FFRE47QUZHTTtFQUNFLGtDQ3VERTtFRHRERixnQ0NzREU7QUN2RFY7QUZJTTtFQUNFLGdDQ2tERTtFRGpERiw4QkNpREU7QUNuRFY7QUZLTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFSFI7QUZLUTtFQUNFLGVBQUE7QUVIVjs7QUZVQTtFQUNFLHFCQ2pDWTtBQzBCZDtBRlVJO0VBQ0UsY0MxQ0U7RUQyQ0YseUJBQUE7QUVSTjtBRmFJO0VBQ0UsY0MzQ007RUQ0Q04sdUJDaERFO0FDcUNSO0FGZUU7RUFDRSxjQ3RERztBQ3lDUDs7QUMzQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FENkNGOztBQzFDQTtFQUNFLG9CQUFBO0VBQ0EsZ0NBQUE7QUQ2Q0Y7QUMzQ0U7RUFDRSxvQkFBQTtFQUNBLG1CRjRETTtFRTFETix5QkFBQTtFQUNBLDRFQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FENENKO0FDekNNO0VBQ0UsWUZwQkE7QUMrRFI7QUNwQ0k7O0VBRUUscUJGdEJLO0FDNERYO0FDbkNJO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBRHFDTjtBQ2xDSTtFQUNFLHlCQUFBO0FEb0NOO0FDbENNO0VBQ0UsNkJBQUE7QURvQ1I7QUNoQ0k7RUFDRSxxQkZ2Q0s7RUV3Q0wscUJGc0JJO0FDWVY7QUNoQ007RUFDRSxjRjFCRztFRTJCSCx1QkZuREE7QUNxRlI7QUM5Qkk7RUFDRSxrQkFBQTtBRGdDTjtBQzlCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxtQkZLRTtFRUpGLHVCRmxFQTtFRW1FQSwrQ0FBQTtBRCtCUjtBQzdCUTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlRmxCSztFRW1CTCxjRjNFRjtBQzBHUjtBQzNCVTtFQUNFLGtCQUFBO0FENkJaO0FDMUJVO0VBQ0UsY0FBQTtBRDRCWjs7QUNsQkU7RUFHRSxnQkFBQTtBRG1CSjtBQ2hCRTtFQUNFLGNGOUZPO0VFK0ZQLGtCQUFBO0FEa0JKO0FDZkU7RUFDRSxlQUFBO0FEaUJKO0FDZEU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7QURlSjtBQ2JJO0VBQ0UsY0Z2R007QUNzSFo7QUNaSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtFQUNBLHlCRm5ISztBQ2dJWDs7QUNSQTtFQUNFLGtCQUFBO0FEV0Y7O0FDTkk7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QURTTjtBQ1BNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRFNSO0FDSk07RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FETVI7QUNKUTtFQUNFLDBCQUFBO0FETVY7QUNESTtFQUNFLGNGbEtDO0FDcUtQOztBQ0dFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FEQUo7QUNFSTtFQUNFLGdCQUFBO0FEQU47QUNJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFFQSxlRm5JVztFRW9JWCxpQkFBQTtFQUNBLFlGNUxJO0VFNkxKLGtCQUFBO0VBQ0EseUJGakxRO0FDNktaO0FDT0U7RUFDRSxlRjVJVztFRTZJWCxnQkFBQTtFQUNBLGNGdE1JO0FDaU1SOztBRWpNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUZrTVI7QUVoTVE7RUFDSSxpQkFBQTtBRmtNWjtBRTlMSTtFQUNJLGNIbUJJO0FDNktaO0FFN0xJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FGK0xSO0FFNUxZO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUdBLHlCQUFBO0VBRUEseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlFQUFBO0FGMkxoQjtBRXpMZ0I7RUFDSSxpQ0FBQTtBRjJMcEI7O0FHbE9BOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxzQkppRVE7RUloRVIsZUprRGE7RUlqRGIsZ0JBQUE7RUFDQSx5QkplVTtBQ3FOWjtBR2xPRTs7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlSjRDVztBQ3lMZjtBR2xPRTs7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUhxT0o7QUdsT0U7Ozs7OztFQUtFLGNKSkc7RUlLSCx5QkFBQTtBSHFPSjtBR2xPRTs7O0VBRUUsY0FBQTtFQUNBLHlCQUFBO0FIcU9KO0FHbE9FOzs7RUFFRSxjQUFBO0VBQ0EseUJBQUE7QUhxT0o7QUdsT0U7O0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FIcU9KO0FHbE9FOzs7RUFFRSxjSnJDUTtFSXNDUix5QkFBQTtBSHFPSjs7QUFsUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBRUEsY0RjTztFQ1hQLHlCQUFBO0VBQ0EscUJEdURNO0VDdEROLGlEQUFBO0FBaVJKO0FBL1FJOztFQUVJLGNBQUE7QUFpUlIiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgPnRoZWFkLFxuICA+dGJvZHkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICA+dGhlYWQge1xuICAgIHRoIHtcbiAgICAgIHBhZGRpbmctYmxvY2s6IC43NXJlbSAxcmVtO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuICAgICAgICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICAgIH1cblxuICAgICAgLnNvcnRhYmxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG5cbiAgPnRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGNjtcbiAgICB9XG4gIH1cblxuICA+dGJvZHkge1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWRhcmsge1xuICAgIGNvbG9yOiAkZGFyaztcbiAgfVxufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jdXN0b20tdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC1jdXN0b20vdGFibGVzXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvcGFnZVwiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb250ZW50L3RhYmxlLWNvbnRlbnRcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9zdGF0dXNcIjtcblxuLmRhdGUtcmFuZ2UtcmVzdWx0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcblxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrZ3JlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWRhcms7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4IHJnYmEoMCwgMTExLCA2NywgMC4xKTtcblxuICAgIHNwYW4sXG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjQjRCNEI0O1xuICAgIH1cbn0iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAmLndpdGgtYWJzdHJhY3Qge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9nZW5lcmFsL3BhZ2UtaGVhZGVyLXRvcC1hYnN0cmFjdC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVyIHtcblxuICAgIC5pbnB1dC1ncm91cC10ZXh0LFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4gICAgICAmOm5vdCg6aG92ZXIpIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNyaXRlcmlhLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuY3JpdGVyaWEge1xuICAgICAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgLjVyZW0pO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAxNnB4IHJnYmEoJGJsYWNrLCAuMDUpO1xuXG4gICAgICAgID4udGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jaGVjayB7XG4gICAgICAgICAgJisuZm9ybS1jaGVjayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzkzOTM5MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhZ2UtdGl0bGUge1xuXG4gICYrLnRleHQsXG4gICYrLm9yZGVyLWxpc3QsXG4gICYrLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gICYrLnRleHQge1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50aXRsZS1ib3R0b20tbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgIGluc2V0LWlubGluZTogMDtcblxuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgICYrLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogLjVyZW07XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAuNXJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSkge1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxuICB9XG59XG5cbnVsLm9yZGVyLWxpc3Qge1xuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgJitsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5vcmRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cbn0iLCJ0ZCB7XG4gICAgLmltYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFya2dyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXJuYW1lIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlcbiAgICB9XG5cbiAgICAudGFibGUtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuXG4gICAgICAgIC5tZW51LXRyaWdnZXIge1xuICAgICAgICAgICAgLm1hdC1tZGMtbWluaS1mYWIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogJGRhcmtncmVlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrZ3JlZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWRhcms7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDE0MSwgMTQxLCAxNDEsIDAuMTMpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAmOm5vdCgubWRjLWZhYi0tZXh0ZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnN0YXR1cy1kb3QsXG4uc3RhdHVzLXBpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iZztcblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogLjVyZW07XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICB9XG5cbiAgJi5EcmFmdCB7XG4gICAgY29sb3I6ICM4QTkzOTM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGQTtcbiAgfVxuXG4gICYuUmVxdWVzdEFjY2VwdGVkLFxuICAmLlJlcXVlc3RWZXJpZmllZEFzc2lnbmVkVG9BZG1pbixcbiAgJi5SZXF1ZXN0SXNCZWluZ1Byb2Nlc3NlZCxcbiAgJi5SZXF1ZXN0SGFzQmVlblNlbnRGb3JSZXZpZXcsXG4gICYuUmVxSXNCZWluZ1Jldmlld2VkIHtcbiAgICBjb2xvcjogJGluZm87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkJGRDtcbiAgfVxuXG4gICYuTm9uZSxcbiAgJi5SZXF1ZXN0UHJvY2Vzc2VkQW5kRmVlZGJhY2tTZW50IHtcbiAgICBjb2xvcjogIzFFQzM5QTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGQUY5O1xuICB9XG5cbiAgJi5GZWVkYmFja1Byb2Nlc3NlZEFuZFJlcXVlc3RTZW50LFxuICAmLlJlcUlzQmVpbmdTdHVkaWVkIHtcbiAgICBjb2xvcjogI0YxQkQ1NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGNkVEO1xuICB9XG5cbiAgJi5SZXF1ZXN0UmVqZWN0ZWQge1xuICAgIGNvbG9yOiAjRkY3QTY5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y2RjU7XG4gIH1cblxuICAmLlJlcXVUaGVSZXF1ZXN0SGFzQmVlbkFwcHJvdmVkLFxuICAmLlF1YWxpZmljYXRpb25DZXJ0aWZpY2F0ZUlzc3VlZCB7XG4gICAgY29sb3I6ICRtaW50Z3JlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RkFGOTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 94351:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/request-summary/request-summary.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestSummaryComponent": () => (/* binding */ RequestSummaryComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var _components_commercial_registry_commercial_registry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/commercial-registry/commercial-registry.component */ 57970);
/* harmony import */ var _components_request_validation_popup_request_validation_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/request-validation-popup/request-validation-popup.component */ 45005);
/* harmony import */ var _components_request_wafi_training_request_wafi_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/request-wafi-training/request-wafi-training.component */ 19017);
/* harmony import */ var _components_request_national_addresses_request_national_addresses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/request-national-addresses/request-national-addresses.component */ 35607);
/* harmony import */ var _components_request_accountants_completed_wafi_training_program_for_accounting_supervision_request_accountants_completed_wafi_training_program_for_accounting_supervision_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component */ 13118);
/* harmony import */ var _components_request_engineers_with_sufficient_training_for_the_engineering_consultant_request_engineers_with_sufficient_training_for_the_engineering_consultant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component */ 20508);
/* harmony import */ var _components_request_distinctive_additional_technical_capabilities_request_distinctive_additional_technical_capabilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component */ 74966);
/* harmony import */ var _components_request_institutional_capabilities_and_additional_discriminatory_human_resources_request_institutional_capabilities_and_additional_discriminatory_human_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component */ 12162);
/* harmony import */ var _components_request_certified_facility_engineers_request_certified_facility_engineers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/request-certified-facility-engineers/request-certified-facility-engineers.component */ 12099);
/* harmony import */ var _components_request_technical_capabilities_requirements_request_technical_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/request-technical-capabilities-requirements/request-technical-capabilities-requirements.component */ 58525);
/* harmony import */ var _components_request_job_requirements_and_human_resources_request_job_requirements_and_human_resources_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component */ 43723);
/* harmony import */ var _components_request_financial_capabilities_requirements_request_financial_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/request-financial-capabilities-requirements/request-financial-capabilities-requirements.component */ 38005);
/* harmony import */ var _dataModels_enum_request_period_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dataModels/enum/request-period.model */ 46247);
/* harmony import */ var _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dataModels/enum/request-code.model */ 97481);
/* harmony import */ var src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/models/enums/button-type.model */ 63650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var src_app_core_services_request_validation_request_validation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/request-validation/request-validation.service */ 2320);
/* harmony import */ var src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/user-data/user-data.service */ 42852);
/* harmony import */ var src_app_shared_services_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services/accordion/accordion.service */ 45426);
/* harmony import */ var src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/services/popup/popup.service */ 71635);
/* harmony import */ var _services_qualification_type_qualification_service_request_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/qualification-type/qualification-service-request.service */ 72710);
/* harmony import */ var src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/services/toastr-notification/toastr-notificatio.service */ 74085);
/* harmony import */ var _shared_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../shared/components/accordion/accordion.component */ 610);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 58915);





























class RequestSummaryComponent {
  constructor(_router, _requestService, _requestValidationService, _userDataService, _FB, _acoordionService, _popupService, _qualificationServiceRequestService, _activatedRoute, _toastrNotificatioService) {
    this._router = _router;
    this._requestService = _requestService;
    this._requestValidationService = _requestValidationService;
    this._userDataService = _userDataService;
    this._FB = _FB;
    this._acoordionService = _acoordionService;
    this._popupService = _popupService;
    this._qualificationServiceRequestService = _qualificationServiceRequestService;
    this._activatedRoute = _activatedRoute;
    this._toastrNotificatioService = _toastrNotificatioService;
    this.home = `../${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityDashboard}`;
    this.requests = `../${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requests}`;
    this.createRequest = `../${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.createRequest}/RED01`;
    this.confirmationicon = `../${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.createRequest}/RED01`;
    this.subscriptions = [];
    this.selectedRequest = null;
    this.accordionContent = {
      oneAtATime: true,
      isAnimated: true,
      accordionComponentList: [{
        icon: '',
        title: 'بيانات السجل التجاري',
        component: _components_commercial_registry_commercial_registry_component__WEBPACK_IMPORTED_MODULE_1__.CommercialRegistryComponent,
        disabled: false,
        isVisible: false,
        id: 'CommercialRegistryComponent',
        isViewed: false
      }, {
        icon: '',
        title: 'دريب الهيئة العامة للعقار للبيع على الخارطة',
        component: _components_request_wafi_training_request_wafi_training_component__WEBPACK_IMPORTED_MODULE_3__.RequestWafiTrainingComponent,
        id: 'RequestWafiTrainingComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'متطلبات القدرات المالية',
        component: _components_request_financial_capabilities_requirements_request_financial_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_12__.RequestFinancialCapabilitiesRequirementsComponent,
        id: 'RequestFinancialCapabilitiesRequirementsComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: ' متطلبات القدرات المؤسسية و الموارد البشرية',
        component: _components_request_job_requirements_and_human_resources_request_job_requirements_and_human_resources_component__WEBPACK_IMPORTED_MODULE_11__.RequestJobRequirementsAndHumanResourcesComponent,
        id: 'RequestJobRequirementsAndHumanResourcesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'متطلبات القدرات الفنية',
        component: _components_request_technical_capabilities_requirements_request_technical_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_10__.RequestTechnicalCapabilitiesRequirementsComponent,
        id: 'RequestTechnicalCapabilitiesRequirementsComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'موظفين الشركة المعتمدين',
        component: _components_request_certified_facility_engineers_request_certified_facility_engineers_component__WEBPACK_IMPORTED_MODULE_9__.RequestCertifiedFacilityEngineersComponent,
        id: 'RequestCertifiedFacilityEngineersComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'القدرات المؤسسية والموارد الإضافية',
        component: _components_request_institutional_capabilities_and_additional_discriminatory_human_resources_request_institutional_capabilities_and_additional_discriminatory_human_resources_component__WEBPACK_IMPORTED_MODULE_8__.RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
        id: 'RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'القدارت الفنية الإضافية',
        component: _components_request_distinctive_additional_technical_capabilities_request_distinctive_additional_technical_capabilities_component__WEBPACK_IMPORTED_MODULE_7__.RequestDistinctiveAdditionalTechnicalCapabilitiesComponent,
        id: 'RequestDistinctiveAdditionalTechnicalCapabilitiesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
        component: _components_request_engineers_with_sufficient_training_for_the_engineering_consultant_request_engineers_with_sufficient_training_for_the_engineering_consultant_component__WEBPACK_IMPORTED_MODULE_6__.RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
        id: 'RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
        component: _components_request_accountants_completed_wafi_training_program_for_accounting_supervision_request_accountants_completed_wafi_training_program_for_accounting_supervision_component__WEBPACK_IMPORTED_MODULE_5__.RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
        id: 'RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }, {
        icon: '',
        title: 'عنوان المنشأة',
        component: _components_request_national_addresses_request_national_addresses_component__WEBPACK_IMPORTED_MODULE_4__.RequestNationalAddressesComponent,
        id: 'RequestNationalAddressesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false
      }]
    };
    this.requestValidationData = null;
    this.userData = null;
    this.period = 0;
    this.periodString = '';
    this.code = '';
    this.RequestCode = '';
    this.renewRequest = false;
    this.facilityId = '';
    this.declarationForm = this._FB.group({
      data: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required],
      resposability: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.requiredTrue],
      promise: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.requiredTrue]
    });
  }
  ngOnInit() {
    this.observeRouterParams();
    this.updateAccordionContent();
    this.obseveCustomerData();
    this.observePopupEvents();
    this.getFacilityId();
  }
  getFacilityId() {
    this.facilityId = this._requestService.getFacilityIdFromLocalStorage();
  }
  // popup
  observePopupEvents() {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  observecancelAction() {
    this.subscriptions.push(this._popupService.cancelAction.subscribe(res => {}));
  }
  observeconfirmAction() {
    this.subscriptions.push(this._popupService.confirmAction.subscribe(res => {
      this.navigateToFacilityProfile();
    }));
  }
  navigateToFacilityProfile() {
    if (this.renewRequest) {
      this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityProfileWithRenewRequest}`]);
    } else {
      this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.facilities}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.facilities.facilityProfile}`]);
    }
  }
  observeRouterParams() {
    this.subscriptions.push(this._activatedRoute.params.subscribe(params => {
      this.period = params['period'];
      this.code = params['code'];
      this.periodString = _dataModels_enum_request_period_model__WEBPACK_IMPORTED_MODULE_13__.RequestPeriod[this.period];
      this.RequestCode = _dataModels_enum_request_code_model__WEBPACK_IMPORTED_MODULE_14__.RequestCodeEnum[this.code];
      this.renewRequest = this._activatedRoute.snapshot.url[0].path == src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewRequestSummary;
      // console.log("this._activatedRoute.snapshot.url[0].path", this._activatedRoute.snapshot.url[0].path);
      // console.log("Configuration.pages.qualifying.renewRequest", Configuration.pages.qualifying.renewRequestSummary);
      // console.log("this.renewRequest", this.renewRequest);
    }));
  }

  updateAccordionContent() {
    this._acoordionService.updateAccordionContent(this.accordionContent);
  }
  obseveCustomerData() {
    this.subscriptions.push(this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      if (this.userData && this.code) {
        this.getDraftRequest();
      }
    }));
  }
  getDraftRequest() {
    this.subscriptions.push(this._requestService.GetDraftRequestByFacilityId(this.userData?.facilities[0].id, this.code).subscribe(facilities => {
      this.updateAllBehaviorSubject(facilities);
    }));
  }
  updateAllBehaviorSubject(facilities) {
    if (facilities[0]) this.updateEmployeeFacilityBasicInfoComponent(facilities[0]);
    if (facilities[0].qualificationQualificatedAccountants) this.updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(facilities[0].qualificationQualificatedAccountants);
    if (facilities[0].qualificationQualificatedEngineers) this.updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(facilities[0].qualificationQualificatedEngineers);
    if (facilities[0].qualificationNationalAddressDetailDto && facilities[0].qualificationNationalAddressDetailDto.length > 0) this.updateEmployeeNationalAddressesComponent(facilities[0].qualificationNationalAddressDetailDto);
    if (facilities[0].qualificationAdditionInstitutionalCapacityAndHrRequirements && facilities[0].qualificationAdditionInstitutionalCapacityAndHrRequirements.length > 0) this.updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(facilities[0].qualificationAdditionInstitutionalCapacityAndHrRequirements);
    if (facilities[0].additionTechnicalCapabilitiesRequirements && facilities[0].additionTechnicalCapabilitiesRequirements.length > 0) this.updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(facilities[0].additionTechnicalCapabilitiesRequirements);
    if (facilities[0].qualificationCertifiedEngineers && facilities[0].qualificationCertifiedEngineers.length > 0) this.updateEmployeeCertifiedFacilityEngineersComponent(facilities[0].qualificationCertifiedEngineers);
    if (facilities[0].technicalCapabilitiesRequirements && facilities[0].technicalCapabilitiesRequirements.length > 0) this.updateEmployeeTechnicalCapabilitiesRequirementsComponent(facilities[0].technicalCapabilitiesRequirements);
    if (facilities[0].qualificationWafiTrainings && facilities[0].qualificationWafiTrainings.length > 0) this.updateEmployeeWafiTrainingComponent(facilities[0].qualificationWafiTrainings);
    if (facilities[0].qualificationFinancialCapabilityRequirements && facilities[0].qualificationFinancialCapabilityRequirements.length > 0) this.updateEmployeeFinancialCapabilitiesRequirementsComponent(facilities[0].qualificationFinancialCapabilityRequirements);
    if (facilities[0].qualificationInstitutionalCapacityAndHrRequirements && facilities[0].qualificationInstitutionalCapacityAndHrRequirements.length > 0) this.updateEmployeeJobRequirementsAndHumanResourcesComponent(facilities[0].qualificationInstitutionalCapacityAndHrRequirements);
  }
  updateEmployeeFacilityBasicInfoComponent(facilities) {
    this._requestService.FacilityBasicInfo$.next(facilities);
    this.accordionContent.accordionComponentList[0].isVisible = true;
  }
  updateEmployeeWafiTrainingComponent(WafiTraining) {
    this._requestService.WafiTraining$.next(WafiTraining);
    this.accordionContent.accordionComponentList[1].isVisible = true;
  }
  updateEmployeeFinancialCapabilitiesRequirementsComponent(qualificationFinancialCapabilityRequirements) {
    this._requestService.FinancialCapabilitiesRequirements$.next(qualificationFinancialCapabilityRequirements);
    this.accordionContent.accordionComponentList[2].isVisible = true;
  }
  updateEmployeeJobRequirementsAndHumanResourcesComponent(qualificationInstitutionalCapacityAndHrRequirements) {
    this._requestService.JobRequirementsAndHumanResources$.next(qualificationInstitutionalCapacityAndHrRequirements);
    this.accordionContent.accordionComponentList[3].isVisible = true;
  }
  updateEmployeeTechnicalCapabilitiesRequirementsComponent(technicalCapabilitiesRequirements) {
    this._requestService.TechnicalCapabilitiesRequirements$.next(technicalCapabilitiesRequirements);
    this.accordionContent.accordionComponentList[4].isVisible = true;
  }
  updateEmployeeCertifiedFacilityEngineersComponent(qualificationCertifiedEngineers) {
    this._requestService.CertifiedFacilityEngineers$.next(qualificationCertifiedEngineers);
    this.accordionContent.accordionComponentList[5].isVisible = true;
  }
  updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(qualificationAdditionInstitutionalCapacityAndHrRequirements) {
    this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.next(qualificationAdditionInstitutionalCapacityAndHrRequirements);
    this.accordionContent.accordionComponentList[6].isVisible = true;
  }
  updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(additionTechnicalCapabilitiesRequirements) {
    this._requestService.DistinctiveAdditionalTechnicalCapabilities$.next(additionTechnicalCapabilitiesRequirements);
    this.accordionContent.accordionComponentList[7].isVisible = true;
  }
  updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(qualificationQualificatedEngineers) {
    this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.next(qualificationQualificatedEngineers);
    this.accordionContent.accordionComponentList[8].isVisible = true;
  }
  updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(qualificationQualificatedAccountants) {
    this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.next(qualificationQualificatedAccountants);
    this.accordionContent.accordionComponentList[9].isVisible = true;
  }
  updateEmployeeNationalAddressesComponent(qualificationNationalAddressDetailDto) {
    this._requestService.NationalAddresses$.next(qualificationNationalAddressDetailDto);
    this.accordionContent.accordionComponentList[10].isVisible = true;
  }
  createOrRenewRequest() {
    if (this.renewRequest) {
      this.Renew();
    } else {
      this.creatRequest();
    }
  }
  creatRequest() {
    this.requestValidationData = null;
    this.subscriptions.push(this._qualificationServiceRequestService.Create(this.userData?.facilities[0].id, this.code, this.period).subscribe(res => {
      if (res.requestCode && res.id) {
        this.setRequestIdInLocalStorage(res.id);
        this.openConfirmaDialog(res.requestCode);
        this._requestService.clearFacilityIdFromLocalStorage();
      } else {
        this.requestValidationData = res;
        this.checkGeneralErrorTabsIsExist();
      }
    }));
  }
  Renew() {
    this.requestValidationData = null;
    this.subscriptions.push(this._qualificationServiceRequestService.Renew(this.facilityId, this.code, this.period).subscribe(res => {
      if (res.requestCode && res.id) {
        this.setRequestIdInLocalStorage(res.id);
        this.openRenewConfirmaDialog(res.requestCode);
      } else {
        this.requestValidationData = res;
        this.checkGeneralErrorTabsIsExist();
      }
    }));
  }
  checkGeneralErrorTabsIsExist() {
    if (this.requestValidationData && this.requestValidationData.tabs && this.requestValidationData.tabs.length) {
      if (this.requestValidationData.tabs.find(x => x.tabCode == 'General')) {
        this._toastrNotificatioService.showError(this.requestValidationData.tabs[0].tabErrors[0].errorMessage);
      } else {
        this.updateRequestValidation(this.requestValidationData);
        this.openValidationDialog();
        this.updateQualificationRequestData();
      }
    }
  }
  updateQualificationRequestData() {
    this._requestValidationService.updateQualificationRequestData({
      period: this.period,
      type: this.code
    });
  }
  updateRequestValidation(data) {
    this._requestValidationService.updateRequestValidation(data);
  }
  openValidationDialog() {
    let Data = {
      title: `التحقق من بيانات طلب
          ${this.RequestCode} `,
      component: _components_request_validation_popup_request_validation_popup_component__WEBPACK_IMPORTED_MODULE_2__.RequestValidationPopupComponent,
      buttons: [{
        icon: '',
        title: 'إلغاء',
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_15__.ButtonType.cancel,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openNotesDialog()
      }, {
        icon: '',
        title: 'إستكمال البيانات',
        actionType: src_app_shared_models_enums_button_type_model__WEBPACK_IMPORTED_MODULE_15__.ButtonType.confirm,
        isVisable: true,
        isDisables: false
        // onclick: () => this.openAssignEmployeeDialog()
      }]
    };

    this._popupService.updatePopupData(Data);
  }
  setRequestIdInLocalStorage(id) {
    this._requestService.setSelectedRequestIdInLocalStorage(id);
  }
  openRenewConfirmaDialog(res) {
    let Data = {
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'تم إنشاء طلب التجديد بنجاح',
      staticMessage: 'تم إرسال طلب التجديد بنجاح ويمكنك عرض الطلب',
      dynamicMessage: res,
      buttonText: 'عرض الطلب',
      buttonLink: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestDetails
    };
    this._popupService.updateNotePopupData(Data);
  }
  openConfirmaDialog(res) {
    let Data = {
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'تم انشاء الطلب بنجاح',
      staticMessage: 'تم انشاء طلبك بنجاح ويمكنك عرض الطلب',
      dynamicMessage: res,
      buttonText: 'عرض الطلب',
      buttonLink: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying + '/' + src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestDetails
    };
    this._popupService.updateNotePopupData(Data);
  }
  cancelRequest() {
    this._router.navigate([`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requests}`]);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RequestSummaryComponent.ɵfac = function RequestSummaryComponent_Factory(t) {
  return new (t || RequestSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_16__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_core_services_request_validation_request_validation_service__WEBPACK_IMPORTED_MODULE_17__.RequestValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_core_services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_18__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_shared_services_accordion_accordion_service__WEBPACK_IMPORTED_MODULE_19__.AccordionService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_shared_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_20__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_qualification_type_qualification_service_request_service__WEBPACK_IMPORTED_MODULE_21__.QualificationServiceRequestService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](src_app_core_services_toastr_notification_toastr_notificatio_service__WEBPACK_IMPORTED_MODULE_22__.ToastrNotificatioService));
};
RequestSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
  type: RequestSummaryComponent,
  selectors: [["app-request-summary"]],
  decls: 37,
  vars: 5,
  consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "title"], [1, "text"], [1, "page-section"], [1, "page-content", "mb-5"], [1, "page-section", "mt-auto"], [1, "page-content"], ["id", "form-declarationForm", 3, "formGroup"], [1, "form-check"], ["id", "control-data", "type", "checkbox", "formControlName", "data", 1, "form-check-input"], ["for", "data", 1, "form-check-label"], ["id", "control-resposability", "type", "checkbox", "formControlName", "resposability", 1, "form-check-input"], ["for", "resposability", 1, "form-check-label"], ["id", "control-promise", "type", "checkbox", "formControlName", "promise", 1, "form-check-input"], ["for", "promise", 1, "form-check-label"], [1, "form-actions", "position-static", "p-0", "bg-transparent", "border-top-0"], ["id", "btn-cancelRequest", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "btn-creatRequest", 1, "btn", "btn-primary", 3, "disabled", "click"]],
  template: function RequestSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "app-breadcrumb");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 5)(9, "div", 2)(10, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](11, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0634\u062E\u0635\u0649");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](13, "app-accordion");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](14, "div", 7)(15, "div", 2)(16, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](17, "\u0627\u0642\u0631\u0627\u0631 \u0628\u0635\u062D\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u062A\u062D\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](18, "div", 8)(19, "form", 9)(20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](22, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](23, " \u0623\u0642\u0631 \u0628\u0635\u062D\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0642\u062F\u0645\u0629 \u0645\u0646\u0651\u0627 \u0644\u0637\u0644\u0628 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0648\u0645\u0637\u0627\u0628\u0642\u062A\u0647\u0627 \u0644\u0644\u0648\u0627\u0642\u0639 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](24, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](25, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](26, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](27, " \u0646\u062A\u062D\u0645\u0644 \u0643\u0627\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0641\u064A \u062D\u0627\u0644 \u0639\u062F\u0645 \u0635\u062D\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0648\u0645\u0637\u0627\u0628\u0642\u062A\u0647\u0627 \u0645\u0639\u0627\u064A\u064A\u0631 \u0648\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](28, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](29, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](30, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](31, " \u0646\u062A\u0639\u0647\u062F \u0628\u0625\u062E\u0637\u0627\u0631 \u0627\u0644\u0647\u064A\u0626\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0639\u0642\u0627\u0631 \u0639\u0646 \u0623\u064A \u062A\u063A\u064A\u064A\u0631 \u064A\u0637\u0631\u0623 \u0628\u0639\u062F \u0630\u0644\u0643 \u0641\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u062A\u0623\u0647\u064A\u0644\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](32, "div", 17)(33, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function RequestSummaryComponent_Template_button_click_33_listener() {
        return ctx.cancelRequest();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](34, "\u0625\u0644\u063A\u0627\u0621");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](35, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function RequestSummaryComponent_Template_button_click_35_listener() {
        return ctx.createOrRenewRequest();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](36, " \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate2"]("\u062A\u0623\u0643\u064A\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0637\u0644\u0628 ", ctx.renewRequest ? "\u062A\u062C\u062F\u064A\u062F" : "", " ", ctx.RequestCode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"]("\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u064A\u0647\u0627 - ", ctx.periodString, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx.declarationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("disabled", !ctx.declarationForm.valid);
    }
  },
  dependencies: [_shared_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_23__.AccordionComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlName],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.card[_ngcontent-%COMP%] {\n  --bs-card-title-spacer-y: 0;\n  --bs-card-cap-bg: $card-bg;\n  border: 1px solid #E7EAEA;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:not(.no-separetor)::after {\n  content: \"\";\n  position: absolute;\n  inset-inline: var(--bs-card-cap-padding-x);\n  bottom: 0;\n  height: 1px;\n  background-color: #E7EAEA;\n}\n.card.qualiication-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: background-image 0.15s;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding: 1.5rem 1rem 1rem;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-start-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n  background-color: rgba(0, 31, 33, 0.3);\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1rem 1rem 1.5rem;\n  border-bottom: 6px solid transparent;\n  border-end-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg-hover.png\");\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 1.25rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #E4ECEC;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  background-color: rgba(0, 31, 33, 0.08);\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n  color: #353B3B;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #00B2BD;\n  align-self: flex-end;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  background-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.brief-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border: 1px solid rgba(196, 196, 196, 0.2);\n  border-top: 0.5rem solid #005257;\n  border-radius: 0.5rem;\n  box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.26);\n}\n.card.brief-card[_ngcontent-%COMP%]    + .brief-card[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    + .item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-inline-end: 1rem;\n  background-color: #F5FCFC;\n  border-radius: 0.25rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #005257;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #001F21;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #A2B2B3;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 1.75rem;\n  --bs-btn-padding-y: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #005257;\n}\n.card.phases-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(0, 31, 33, 0.08);\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(217, 217, 217, 0.4);\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]    + .phase[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.done[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.current[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.next[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #E7EAEA;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-status[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  margin-bottom: 1rem;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background-color: #FFC635;\n}\n.form-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: small;\n  color: #093266;\n}\n.form-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #001F21;\n}\n.form-title[_ngcontent-%COMP%]    ~ .form-subtitle[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: rgba(53, 59, 59, 0.5);\n}\n\n.form-block[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: rgba(217, 217, 217, 0.2);\n}\n@media (max-width: 767px) {\n  .form-block[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.form-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.add-array[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.form-note[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.form-note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-text[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n\n.form-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.form-note[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.form-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 15rem;\n  border: 1.2px dashed #667676;\n  border-radius: 0.25rem;\n  background-color: rgba(217, 217, 217, 0.19);\n}\n.form-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  column-gap: 0.5rem;\n  position: sticky;\n  bottom: -1rem;\n  z-index: 1;\n  margin-top: 2rem;\n  padding-top: 1.25rem;\n  padding-bottom: 1rem;\n  border-top: 1px solid #DAE5E1;\n  background-color: white;\n}\n@media screen and (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n.form-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #F3F7F5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL3BhZ2VzL3JlcXVlc3Qtc3VtbWFyeS9yZXF1ZXN0LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9fY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29udGVudC9fY2FyZHMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2Zvcm0tY29uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQ0EsbUJFNERNO0VGMUROLHlCQUFBO0VBQ0EsNEVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElNO0VBQ0UsWUVwQkE7QURrQlI7QURTSTs7RUFFRSxxQkV0Qks7QURlWDtBRFVJO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEV0k7RUFDRSx5QkFBQTtBQ1ROO0FEV007RUFDRSw2QkFBQTtBQ1RSO0FEYUk7RUFDRSxxQkV2Q0s7RUZ3Q0wscUJFc0JJO0FEakNWO0FEYU07RUFDRSxjRTFCRztFRjJCSCx1QkVuREE7QUR3Q1I7QURlSTtFQUNFLGtCQUFBO0FDYk47QURlTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxtQkVLRTtFRkpGLHVCRWxFQTtFRm1FQSwrQ0FBQTtBQ2RSO0FEZ0JRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVFbEJLO0VGbUJMLGNFM0VGO0FENkRSO0FEa0JVO0VBQ0Usa0JBQUE7QUNoQlo7QURtQlU7RUFDRSxjQUFBO0FDakJaOztBRDJCRTtFQUdFLGdCQUFBO0FDMUJKO0FENkJFO0VBQ0UsY0U5Rk87RUYrRlAsa0JBQUE7QUMzQko7QUQ4QkU7RUFDRSxlQUFBO0FDNUJKO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDOUJKO0FEZ0NJO0VBQ0UsY0V2R007QUR5RVo7QURpQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSx5QkVuSEs7QURtRlg7O0FEcUNBO0VBQ0Usa0JBQUE7QUNsQ0Y7O0FEdUNJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDcENOO0FEc0NNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ3BDUjtBRHlDTTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUN2Q1I7QUR5Q1E7RUFDRSwwQkFBQTtBQ3ZDVjtBRDRDSTtFQUNFLGNFbEtDO0FEd0hQOztBRGdERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzdDSjtBRCtDSTtFQUNFLGdCQUFBO0FDN0NOO0FEaURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLGVFbklXO0VGb0lYLGlCQUFBO0VBQ0EsWUU1TEk7RUY2TEosa0JBQUE7RUFDQSx5QkVqTFE7QURnSVo7QURvREU7RUFDRSxlRTVJVztFRjZJWCxnQkFBQTtFQUNBLGNFdE1JO0FEb0pSOztBRXJKQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFFQSx5QkFBQTtBRnVKRjtBRXJKRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBRnNKSjtBRXBKSTtFQUNFLGVEMkNTO0FEMkdmO0FFbEpNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLHlCRG5CTTtBRHNLZDtBRTlJRTtFQUNFLGtCQUFBO0VBQ0EscUJEd0NNO0VDdENOLG1HQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBRUEsa0NBQUE7QUY4SUo7QUU1SUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBRUEsaUNEa0JJO0VDakJKLDZCRGlCSTtFQ2ZKLHNDQUFBO0FGMElOO0FFeElNO0VBQ0UsWUR6REE7QURtTVI7QUV0SUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JER0k7RUNGSiw2QkRFSTtBRHNJVjtBRXRJTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUR6RUE7QURpTlI7QUVwSUk7RUFDRSx5R0FBQTtBRnNJTjtBRXBJTTtFQUNFLHFCRHBFSTtBRDBNWjtBRWpJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJEM0ZJO0VDNEZKLHNCRHhCTTtFQ3lCTixlQUFBO0FGa0lKO0FFaElJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FGaUlOO0FFL0hNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkQzR0c7QUR5T1g7QUU1SFE7RUFDRSxXQUFBO0FGOEhWO0FFM0hRO0VBQ0UsWUQ3SEY7QUQwUFI7QUV6SE07RUFDRSxhQUFBO0FGMkhSO0FFekhRO0VBQ0UsY0R4SEU7QURtUFo7QUV0SEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLHVDQUFBO0FGdUhOO0FFckhNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNEckpEO0FENFFQO0FFcEhNO0VBQ0UsY0Q3SUc7RUM4SUgsb0JBQUE7QUZzSFI7QUVqSE07RUFDRSx5QkRsSkk7QURxUVo7QUVqSFE7RUFDRSxZRGxLRjtBRHFSUjtBRWhIUTtFQUNFLFlEdEtGO0FEd1JSO0FFNUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7QUY2R0o7QUUzR0k7RUFDRSxnQkFBQTtBRjZHTjtBRTFHSTtFQUNFLGFBQUE7QUY0R047QUUxR007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUY0R1I7QUUxR1E7RUFDRSxnQkFBQTtBRjRHVjtBRXpHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkQxTEU7RUMyTEYsc0JENUlBO0FEcVBWO0FFdkdVO0VBQ0UsY0R0TUE7QUQrU1o7QUVyR1E7RUFDRSxZQUFBO0VBQ0EsY0QzTkY7QURrVVI7QUVwR1E7OztFQUdFLGVEeEtLO0FEOFFmO0FFbkdRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBRnFHVjtBRWxHUTtFQUNFLGNBQUE7QUZvR1Y7QUUvRkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FGZ0dOO0FFOUZNO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBRmdHUjtBRTdGTTtFQUNFLGdDQUFBO0FGK0ZSO0FFMUZFO0VBQ0UsOENBQUE7QUY0Rko7QUUxRkk7RUFDRSxvQkFBQTtBRjRGTjtBRTFGTTtFQUNFLHFCQUFBO0FGNEZSO0FFeEZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRjBGTjtBRXhGTTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUYwRlI7QUV2Rk07RUFDRSxrQkFBQTtBRnlGUjtBRXRGTTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRndGUjtBRXRGUTs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ5RlY7QUV2RlU7O0VBQ0UsZUR4UEs7QURrVmpCO0FFcEZRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRnNGVjtBRXBGVTtFQUNFLGNEOVJEO0FEb1hYO0FFbEZRO0VBQ0UsY0RuU0M7QUR1WFg7QUU5RVU7RUFDRSx5QkQ3U0E7QUQ2WFo7QUV6RVU7RUFDRSx5QkRyVEE7QURnWVo7QUVwRVU7RUFDRSx5QkQvVUU7QURxWmQ7QUVqRU07O0VBRUUseUJBQUE7QUZtRVI7QUVoRU07O0VBRUUsZUR4U087QUQwV2Y7QUUvRE07RUFDRSxlRDNTTztBRDRXZjs7QUd0YUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsY0ZvQlM7QURtWlg7QUdyYUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUhxYUo7QUduYUk7RUFDRSxnQkFBQTtFQUVBLGNGR0s7QURpYVg7QUdoYUU7RUFDRSxjRjVCSTtBRDhiUjtBRy9aRTtFQUNFLGlCQUFBO0FIaWFKOztBRzdaQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUhnYUY7O0FHN1pBO0VBQ0UsYUFBQTtFQUNBLHFCRjRCUTtFRTNCUiwwQ0FBQTtBSGdhRjtBRzlaRTtFQUxGO0lBTUksYUFBQTtFSGlhRjtBQUNGO0FHL1pFO0VBQ0UsbUJBQUE7RUFDQSxlRklXO0VFSFgsaUJBQUE7QUhpYUo7O0FHN1pBO0VBQ0UsZUZGYTtFRUdiLGlCQUFBO0VBQ0EsZUFBQTtBSGdhRjs7QUc3WkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUhnYUY7QUc5WkU7Ozs7RUFFRSxlRmJZO0FEK2FoQjtBRy9aRTs7RUFFRSxjRmxETztBRG1kWDs7QUc1WkU7RUFFRSxjRnpETztBRHVkWDs7QUcxWkE7RUFDRSxlRjlCYztBRDJiaEI7QUczWkU7RUFDRSxjQUFBO0FINlpKOztBR3paQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCRmhDUTtFRWlDUiwyQ0FBQTtBSDJaRjtBR3paRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBSDJaSjs7QUd2WkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUVBLDZCQUFBO0VBQ0EsdUJGNUhNO0FEbWhCUjtBR3BaSTtFQURGO0lBRUksVUFBQTtFSHVaSjtBQUNGOztBR25aQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUhzWkYiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAmLndpdGgtYWJzdHJhY3Qge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9nZW5lcmFsL3BhZ2UtaGVhZGVyLXRvcC1hYnN0cmFjdC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVyIHtcblxuICAgIC5pbnB1dC1ncm91cC10ZXh0LFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZWdyYXk7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlZ3JheTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4gICAgICAmOm5vdCg6aG92ZXIpIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNyaXRlcmlhLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuY3JpdGVyaWEge1xuICAgICAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgLjVyZW0pO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTJweCAxNnB4IHJnYmEoJGJsYWNrLCAuMDUpO1xuXG4gICAgICAgID4udGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jaGVjayB7XG4gICAgICAgICAgJisuZm9ybS1jaGVjayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzkzOTM5MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhZ2UtdGl0bGUge1xuXG4gICYrLnRleHQsXG4gICYrLm9yZGVyLWxpc3QsXG4gICYrLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gICYrLnRleHQge1xuICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50aXRsZS1ib3R0b20tbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTAuNXJlbTtcbiAgICAgIGluc2V0LWlubGluZTogMDtcblxuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgICYrLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogLjVyZW07XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAuNXJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSkge1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoJGJsYWNrLCAuNCk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGRhcms7XG4gICAgfVxuICB9XG59XG5cbnVsLm9yZGVyLWxpc3Qge1xuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgJitsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5vcmRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1tYWluO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4gIH1cbn0iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLnBhZ2UtaGVhZGVyLndpdGgtYWJzdHJhY3Qge1xuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzY0NztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZ2VuZXJhbC9wYWdlLWhlYWRlci10b3AtYWJzdHJhY3Quc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucGFnZS1oZWFkZXIud2l0aC1hYnN0cmFjdCAucGFnZS10aXRsZSAudGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICNEOUQ5RDk7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgYm9yZGVyLWlubGluZS1lbmQ6IG5vbmU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWlubGluZS1zdGFydDogbm9uZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5idG4ge1xuICBib3JkZXItY29sb3I6ICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5idG46bm90KDpob3Zlcikge1xuICBjb2xvcjogIzA5MzI2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIC5jcml0ZXJpYSB7XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjVyZW0pO1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTcsIDIxNywgMjE3LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMTZweCByZ2JhKDAsIDMxLCAzMywgMC4wNSk7XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciAuY3JpdGVyaWEgPiAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIC5jcml0ZXJpYSAuZm9ybS1jaGVjayArIC5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmNyaXRlcmlhLXdyYXBwZXIgLmNyaXRlcmlhIC5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICM5MzkzOTM7XG59XG5cbi5wYWdlLXRpdGxlICsgLnRleHQsIC5wYWdlLXRpdGxlICsgLm9yZGVyLWxpc3QsIC5wYWdlLXRpdGxlICsgLnBhZ2UtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ucGFnZS10aXRsZSArIC50ZXh0IHtcbiAgY29sb3I6ICM2Njc2NzY7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZS1ib3R0b20tbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnBhZ2UtdGl0bGUgLnRpdGxlLWJvdHRvbS1saW5lIC5pY29uIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG4ucGFnZS10aXRsZSAudGl0bGUtYm90dG9tLWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjVyZW07XG4gIGluc2V0LWlubGluZTogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEIyQkQ7XG59XG5cbi5wYWdlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMC41cmVtO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC40KTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW06bm90KC5hY3RpdmUpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC40KTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW06bm90KC5hY3RpdmUpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICMzNTNCM0I7XG59XG5cbnVsLm9yZGVyLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxudWwub3JkZXItbGlzdCBsaSArIGxpIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbnVsLm9yZGVyLWxpc3QgLm9yZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTc7XG59XG51bC5vcmRlci1saXN0IC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMUYyMTtcbn1cblxuLmNhcmQge1xuICAtLWJzLWNhcmQtdGl0bGUtc3BhY2VyLXk6IDA7XG4gIC0tYnMtY2FyZC1jYXAtYmc6ICRjYXJkLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFQUVBO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIC5pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyOm5vdCgubm8tc2VwYXJldG9yKTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0LWlubGluZTogdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RUFFQTtcbn1cbi5jYXJkLnF1YWxpaWNhdGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuMTVzO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjMpO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZCAuY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMS41cmVtO1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC41cmVtO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQgLmNhcmQtYm9keSAuY2FyZC10aXRsZSB7XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmctaG92ZXIucG5nXCIpO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSB7XG4gIGJvcmRlci1jb2xvcjogIzAwNTI1Nztcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNEVDRUM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjJCRDtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1oZWFkZXIgLmljb24gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAudGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAudGl0bGUgPiAqOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDMxLCAzMywgMC4wOCk7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtYm9keSAuY2FyZC10ZXh0IHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNTNCM0I7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtYm9keSAuYXJyb3cge1xuICBjb2xvcjogIzAwQjJCRDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTc7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSAuY2FyZC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQubGljZW5zZS1jYXJkOmhvdmVyIC5jYXJkLWJvZHkgLmFycm93IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQuYnJpZWYtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjIpO1xuICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgIzAwNTI1NztcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDE4MSwgMTgzLCAxODUsIDAuMjYpO1xufVxuLmNhcmQuYnJpZWYtY2FyZCArIC5icmllZi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmRldGFpbHMge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtICsgLml0ZW0ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiAjMDA1MjU3O1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAuZGF0YSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY29sb3I6ICMwMDFGMjE7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5mb3JtLWxhYmVsLFxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAua2V5LFxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAudmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5rZXkge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyAuaXRlbSAudmFsdWUge1xuICBjb2xvcjogI0EyQjJCMztcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG4uY2FyZC5icmllZi1jYXJkIC5hY3Rpb25zIC5idG4ge1xuICAtLWJzLWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XG4gIC0tYnMtYnRuLXBhZGRpbmcteTogMXJlbTtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmFjdGlvbnMgLnAtYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDUyNTc7XG59XG4uY2FyZC5waGFzZXMtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDMxLCAzMywgMC4wOCk7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG59XG4uY2FyZC5waGFzZXMtY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMC41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE3LCAyMTcsIDIxNywgMC40KTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSArIC5waGFzZSB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyLFxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1oZWFkZXIgLmljb24sXG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWRhdGUgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWhlYWRlciAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSxcbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtZGF0ZSAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyIC5pY29uIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWhlYWRlciAudGl0bGUge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZS5kb25lIC5waGFzZS1oZWFkZXIgLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGQ0ZDO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlLmN1cnJlbnQgLnBoYXNlLWhlYWRlciAuaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UubmV4dCAucGhhc2UtaGVhZGVyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RUFFQTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2Utc3RhdHVzLFxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1kYXRlIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMnJlbTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAudGl0bGUsXG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uZm9ybS10aXRsZSAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzYzNTtcbn1cbi5mb3JtLXRpdGxlIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG4uZm9ybS10aXRsZSBzbWFsbCB7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLmZvcm0tdGl0bGUgfiAuZm9ybS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xufVxuXG4uZm9ybS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiByZ2JhKDUzLCA1OSwgNTksIDAuNSk7XG59XG5cbi5mb3JtLWJsb2NrIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuMik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0tYmxvY2sge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbi5mb3JtLWJsb2NrIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGQtYXJyYXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW5vdGUsXG4uZm9ybS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xufVxuLmZvcm0tbm90ZSAudGV4dCxcbi5mb3JtLW5vdGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10sXG4uZm9ybS10ZXh0IC50ZXh0LFxuLmZvcm0tdGV4dCBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mb3JtLW5vdGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10sXG4uZm9ybS10ZXh0IFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwOTMyNjY7XG59XG5cbi5mb3JtLXRleHQgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cblxuLmZvcm0tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mb3JtLW5vdGUgW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmZvcm0taW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBib3JkZXI6IDEuMnB4IGRhc2hlZCAjNjY3Njc2O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuMTkpO1xufVxuLmZvcm0taW1hZ2VzIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IC0xcmVtO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREFFNUUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWFjdGlvbnMgLmJ0biB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxufVxuXG4uZm9ybS1zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0Y1O1xufSIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMDAxRjIxO1xuJGRhcms6ICMzNTNCM0I7XG4kd2hpdGU6IHdoaXRlO1xuJGxpZ2h0OiAjRjdGOEY4O1xuXG4kbGlnaHRlcmdyYXk6ICNFN0VBRUE7XG4kbGlnaHRncmF5OiAjQURBRkIyO1xuJGRhcmtncmF5OiAjNjY3Njc2O1xuJGdyZWVuZ3JheTogIzYxNzk2RjtcbiRibHVlZ3JheTogI0Q5RDlEOTtcblxuJGxpZ2h0Z3JlZW46IHJnYmEoIzAwNkY0MywgLjA4KTtcbiRtaW50Z3JlZW46ICM4NEMwM0Y7XG4kbWlkZ3JlZW46ICMwMEIyQkQ7XG4kZ3JlZW46ICMwNjc2NDc7XG4kZGFya2dyZWVuOiAjMDA1MjU3O1xuXG4kbGlnaHRPcmFuZ2U6ICNGRUY3RUU7XG4kb3JhbmdlOiAjRkZDNjM1O1xuJG9yYW5nZWdyYXk6ICNGMkVERTE7XG4kZGFya29yYW5nZTogI0U0QUIxNztcblxuJGJsdWU6ICM1OUE4RDQ7XG4kbGlnaHRibHVlOiAjRjVGQ0ZDO1xuJGdyYXlibHVlOiAjQkFFOUVCO1xuJG1pZGJsdWU6ICM4MENFQzg7XG4kZGFya2JsdWU6ICMwOTMyNjY7XG5cbiRtaWRyZWQ6ICNGRjdBNjk7XG4kZGFya3JlZDogI0Q2NEEzODtcblxuJHByaW1hcnk6ICRkYXJrZ3JlZW47XG4kcHJpbWFyeS1iZzogJGxpZ2h0Ymx1ZTtcbiRpbmZvOiAkYmx1ZTtcbiRzdWNjZXNzOiAkZ3JlZW47XG4kd2FybmluZzogI0VCOUIyMjtcbiRkYW5nZXI6ICRkYXJrcmVkO1xuJHNlY29uZGFyeTogIzk1OUZBODtcblxuLy8gVGhlbWVcbiR0aGVtZS1tYWluOiAkZGFya2dyZWVuO1xuJHRoZW1lLWxpZ2h0OiAkbGlnaHRibHVlO1xuJHRoZW1lLWdyYXk6ICRncmF5Ymx1ZTtcbiR0aGVtZS1taWQ6ICRtaWRncmVlbjtcbiR0aGVtZS1kYXJrOiAkZGFya2JsdWU7XG5cbi8vIC0gQmFja2dyb3VuZHNcbiRib2R5LWJnOiAkbGlnaHQ7XG4kc3VjY2Vzcy1iZy1zdWJ0bGU6ICRsaWdodGdyZWVuO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtIEJvZHlcbiRib2R5LWZvbnQtc2l6ZTogMTZweDtcbiRib2R5LWNvbG9yOiAkZGFyaztcblxuLy8gLSBDdXN0b20gRm9udCBTaXplc1xuJGZvbnQtc2l6ZS1zbTogJGJvZHktZm9udC1zaXplICogLjg3NTtcbiRmb250LXNpemUteHM6ICRib2R5LWZvbnQtc2l6ZSAqIC43NTtcbiRmb250LXNpemUteHhzOiAkYm9keS1mb250LXNpemUgKiAuNjI1O1xuLy8gLSBIZWFkaW5nXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogMDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS41O1xuJGhlYWRpbmdzLWNvbG9yOiAkYmxhY2s7XG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206IDA7XG4vLyAtIE90aGVyc1xuJHN1Y2Nlc3MtdGV4dDogJGRhcmtncmVlbjtcbiRuYXYtbGluay1mb250LXNpemU6ICRmb250LXNpemUtc207XG5cbi8vIFNpemVzXG4kc2l6ZS14czogLjI1cmVtOyAvLyA0cHhcbiRzaXplLXNtOiAuNXJlbTsgLy8gOHB4XG4kc2l6ZS1tZDogMXJlbTsgLy8gMTZweFxuJHNpemUtbGc6IDEuMjVyZW07IC8vIDIwcHhcbiRzaXplLXhsOiAxLjVyZW07IC8vIDI0cHhcbiRoZWFkZXItaGVpZ2h0OiA0LjVyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTtcbi8vIC0gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXMteHM6ICRzaXplLXhzO1xuJGJvcmRlci1yYWRpdXMtc206ICRzaXplLXNtO1xuJGJvcmRlci1yYWRpdXM6ICRzaXplLW1kO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRzaXplLWxnO1xuJGJvcmRlci1yYWRpdXMteGw6ICRzaXplLXhsO1xuJGJvcmRlci1yYWRpdXMtcGlsbDogMjVyZW07XG5cbi8vIENhcmRzXG4kY2FyZC1iZzogJHdoaXRlO1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAwO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbi8vIEFsZXJ0c1xuJGFsZXJ0LXBhZGRpbmcteTogLjc1cmVtO1xuJGFsZXJ0LXBhZGRpbmcteDogLjc1cmVtO1xuJGFsZXJ0LWJvcmRlcjogJGRhcmtncmVlbjtcblxuLy8gRHJvcGRvd25cbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gRm9ybXNcbiRpbnB1dC1iZzogJHdoaXRlO1xuJGlucHV0LWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuJGlucHV0LWNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAwO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjogJHdoaXRlO1xuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1ib3JkZXItY29sb3I6ICRkYXJrO1xuLy8gJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogLjI1cmVtO1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkZm9udC1zaXplLXh4cztcblxuLy8gQnV0dG9uc1xuJGJ0bi1wYWRkaW5nLXktbGc6IGNhbGMoJHNpemUtbGcgLSAuNXJlbSAtIDFweCk7XG4kYnRuLXBhZGRpbmcteC1sZzogJHNpemUtbGc7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJHNpemUtbWQ7XG4kYnRuLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiRidG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXhzO1xuXG4vLyBUYWJsZXNcbi8vICR0YWJsZS1jZWxsLXBhZGRpbmcteTogLjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXk6IDEuMjVyZW07XG4kdGFibGUtY2VsbC1wYWRkaW5nLXg6IDFyZW07XG4kdGFibGUtYmc6ICR3aGl0ZTtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaWdodGdyYXk7IiwiLmNhcmQge1xuICAtLWJzLWNhcmQtdGl0bGUtc3BhY2VyLXk6IDA7XG4gIC0tYnMtY2FyZC1jYXAtYmc6ICRjYXJkLWJnO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodGVyZ3JheTtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogLjVyZW07XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgfVxuXG4gICAgJjpub3QoLm5vLXNlcGFyZXRvcikge1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldC1pbmxpbmU6IHZhcigtLWJzLWNhcmQtY2FwLXBhZGRpbmcteCk7XG4gICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYucXVhbGlpY2F0aW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zL2NvbnRlbnQvcXVhbGlmaWNhdGlvbi9jYXJkLWJnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAuMTVzO1xuXG4gICAgLmljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuXG4gICAgICBib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibGFjaywgLjMpO1xuXG4gICAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxLjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItZW5kLXN0YXJ0LXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgICAgIGJvcmRlci1lbmQtZW5kLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cztcblxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9ucy9jb250ZW50L3F1YWxpZmljYXRpb24vY2FyZC1iZy1ob3Zlci5wbmcnKTtcblxuICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW1haW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5saWNlbnNlLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG5cbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0U0RUNFQztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWlkO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAgID4qOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAuMDgpO1xuXG4gICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAuYXJyb3cge1xuICAgICAgICBjb2xvcjogJHRoZW1lLW1pZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1haW47XG5cbiAgICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYnJpZWYtY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4yKTtcbiAgICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgJHRoZW1lLW1haW47XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMTgxLCAxODMsIDE4NSwgMC4yNik7XG5cbiAgICAmKy5icmllZi1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgfVxuXG4gICAgLmRldGFpbHMge1xuICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYrLml0ZW0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLW1haW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGEge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tbGFiZWwsXG4gICAgICAgIC5rZXksXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmtleSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgIGNvbG9yOiAjQTJCMkIzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogLjVyZW07XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDFyZW07XG4gICAgICByaWdodDogMXJlbTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgLS1icy1idG4tcGFkZGluZy14OiAxLjc1cmVtO1xuICAgICAgICAtLWJzLWJ0bi1wYWRkaW5nLXk6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5wLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkdGhlbWUtbWFpbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnBoYXNlcy1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgkYmxhY2ssIDAuMDgpO1xuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcblxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBoYXNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcm93LWdhcDogLjVyZW07XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRibHVlZ3JheSwgLjQpO1xuICAgICAgfVxuXG4gICAgICAmKy5waGFzZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnBoYXNlLWhlYWRlcixcbiAgICAgIC5waGFzZS1kYXRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5kb25lIHtcbiAgICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmN1cnJlbnQge1xuICAgICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubmV4dCB7XG4gICAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGVyZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBoYXNlLXN0YXR1cyxcbiAgICAgIC5waGFzZS1kYXRlIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMnJlbTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlLFxuICAgICAgLnRleHQge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICB9XG5cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAmLnF1YWxpaWNhdGlvbi1yZXFlc3QtY2FyZCB7XG4gIC8vICAgLmNhcmQtdGl0bGUge1xuXG4gIC8vICAgICAudGl0bGUsXG4gIC8vICAgICAuZGF0ZSxcbiAgLy8gICAgIC5hY3Rpb25zIHtcbiAgLy8gICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgLnRpdGxlIHtcbiAgLy8gICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAuZGF0ZSB7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAgIC5rZXkge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgLy8gICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLnZhbHVlIHtcbiAgLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgICAgY29sdW1uLWdhcDogLjI1cmVtO1xuXG4gIC8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuXG4gIC8vICAgICAuYWN0aW9ucyB7XG4gIC8vICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAvLyAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gICAuYXBwbGljYW50IHtcbiAgLy8gICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAua2V5IHtcbiAgLy8gICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAvLyAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAudmFsdWUge1xuICAvLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAvLyAgICAgICAuaW1hZ2Uge1xuICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAvLyAgICAgICAgIHdpZHRoOiAycmVtO1xuICAvLyAgICAgICAgIGhlaWdodDogMnJlbTtcblxuICAvLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrZ3JlZW47XG4gIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgkYmxhY2ssIDAuMSk7XG5cbiAgLy8gICAgICAgICAuYXZhdGFyIHtcbiAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAubmFtZSB7XG4gIC8vICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuXG4gIC8vICAgICAuZGV0YWlscyB7XG4gIC8vICAgICAgIGxhYmVsIHtcbiAgLy8gICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIC8vICAgICAgICAgY29sb3I6IHJnYmEoJGRhcmtncmF5LCAuNSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzcGFuIHtcbiAgLy8gICAgICAgICBjb2xvcjogJGRhcmtncmF5O1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG59IiwiLmZvcm0tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgY29sb3I6ICR0aGVtZS1kYXJrO1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG5cbiAgICBbY2xhc3NePVwibWF0ZXJpYWwtaWNvbnNcIl0ge1xuICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgIC8vIGNvbG9yOiAkZGFya2dyZWVuO1xuICAgICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICAgIH1cbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuICB9XG5cbiAgJn4uZm9ybS1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW07XG4gIH1cbn1cblxuLmZvcm0tc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogcmdiYSgkZGFyaywgLjUpO1xufVxuXG4uZm9ybS1ibG9jayB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVncmF5LCAuMik7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLmFkZC1hcnJheSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tbm90ZSxcbi5mb3JtLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAudGV4dCxcbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuICB9XG5cbiAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAvLyBjb2xvcjogJGRhcmtncmVlbjtcbiAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gIH1cbn1cblxuLmZvcm0tdGV4dCB7XG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgLy8gY29sb3I6ICRkYXJrZ3JlZW47XG4gICAgY29sb3I6ICR0aGVtZS1kYXJrO1xuICB9XG59XG5cbi5mb3JtLW5vdGUge1xuICBmb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4gIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmZvcm0taW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWluLWhlaWdodDogMTVyZW07XG4gIGJvcmRlcjogMS4ycHggZGFzaGVkICRkYXJrZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVncmF5LCAuMTkpO1xuXG4gIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAtMXJlbTtcbiAgei1pbmRleDogMTtcblxuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQUU1RTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcblxuICAuYnRuIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjdGNTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 67921:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/pages/requests/requests.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsComponent": () => (/* binding */ RequestsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _dataModels_enum_qualificationcode_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataModels/enum/qualificationcode-type */ 36783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/requests/request-service.service */ 69946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 85959);






function RequestsComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestsComponent_div_5_div_1_Template_div_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const qualificationRequestType_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.navogateToCreateRequest(qualificationRequestType_r2.typeCode));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const qualificationRequestType_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getIconeName(qualificationRequestType_r2.typeCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](qualificationRequestType_r2.typeName);
  }
}
function RequestsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestsComponent_div_5_div_1_Template, 8, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.qualificationRequestTypes);
  }
}
class RequestsComponent {
  constructor(router, _requestService) {
    this.router = router;
    this._requestService = _requestService;
    this.requestSummeryLink = `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.wafi}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.modules.qualifying}/${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.createRequest}`;
    this.qualificationRequestTypes = null;
    this.subscriptions = [];
    this.qualificationNameCode = _dataModels_enum_qualificationcode_type__WEBPACK_IMPORTED_MODULE_1__.qualificationCode;
  }
  ngOnInit() {
    this.GetSysQualificationData();
  }
  getIconeName(code) {
    switch (code) {
      case 'RED01':
        return this.qualificationNameCode.RED01;
        break;
      case 'RED02':
        return this.qualificationNameCode.RED02;
        break;
      case 'RED03':
        return this.qualificationNameCode.RED03;
        break;
      case 'Acc':
        return this.qualificationNameCode.Acc;
        break;
      case 'EC':
        return this.qualificationNameCode.EC;
        break;
      case 'REB':
        return this.qualificationNameCode.REB;
        break;
      case 'REM':
        return this.qualificationNameCode.REM;
        break;
    }
    return '';
  }
  GetSysQualificationData() {
    this.subscriptions.push(this._requestService.GetSysqualificationType().subscribe(res => {
      if (res) {
        this.qualificationRequestTypes = res;
      }
    }));
  }
  navogateToCreateRequest(Code) {
    this.router.navigate([this.requestSummeryLink, Code]);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) {
  return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_2__.RequestService));
};
RequestsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RequestsComponent,
  selectors: [["app-requests"]],
  decls: 6,
  vars: 1,
  consts: [[1, "page"], [1, "page-title"], [1, "title"], [1, "page-content", "p-3", "rounded-2", "bg-white"], ["class", "row g-4 row-cols-lg-5", 4, "ngIf"], [1, "row", "g-4", "row-cols-lg-5"], ["class", "col-12 col-md-6 col-lg", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg"], [1, "card", "qualiication-card", "cursor-pointer"], [1, "icon"], [1, "material-icons-outlined"], [1, "card-body", 3, "click"], [1, "card-title"]],
  template: function RequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062A\u0623\u0647\u064A\u0644 \u062C\u062F\u064A\u062F");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RequestsComponent_div_5_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.qualificationRequestTypes && ctx.qualificationRequestTypes.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #E7EAEA;\n}\n.page-header.with-abstract[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-radius: 1rem;\n  background-color: #067647;\n  background-image: url(\"/assets/images/general/page-header-top-abstract.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.page-header.with-abstract[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-inline-end: 0;\n  border-inline-end: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-inline-start: none;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-color: #D9D9D9;\n  border-radius: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:hover) {\n  color: #093266;\n  background-color: white;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%] {\n  min-width: 15rem;\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  padding: 1.5rem 0;\n  border: 1px solid rgba(217, 217, 217, 0.5);\n  border-radius: 1rem;\n  background-color: white;\n  box-shadow: 0px 12px 16px rgba(0, 31, 33, 0.05);\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-inline: 1rem;\n  font-size: 14px;\n  color: #001F21;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]    + .form-check[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .criteria-wrapper[_ngcontent-%COMP%]   .criteria[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .order-list[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    + .page-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.page-title[_ngcontent-%COMP%]    + .text[_ngcontent-%COMP%] {\n  color: #667676;\n  font-size: 0.75rem;\n}\n.page-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  position: relative;\n  font-size: 1rem;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #005257;\n}\n.page-title[_ngcontent-%COMP%]   .title-bottom-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  inset-inline: 0;\n  height: 3px;\n  background-color: #00B2BD;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-inline-start: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  float: right;\n  padding-right: 0;\n  padding-inline-end: 0.5rem;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 31, 33, 0.4);\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:not(.active)   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #353B3B;\n}\n\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: normal;\n}\nul.order-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\nul.order-list[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-end: 0.5rem;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n  border-radius: 50%;\n  background-color: #005257;\n}\nul.order-list[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #001F21;\n}\n\n.card[_ngcontent-%COMP%] {\n  --bs-card-title-spacer-y: 0;\n  --bs-card-cap-bg: $card-bg;\n  border: 1px solid #E7EAEA;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:not(.no-separetor)::after {\n  content: \"\";\n  position: absolute;\n  inset-inline: var(--bs-card-cap-padding-x);\n  bottom: 0;\n  height: 1px;\n  background-color: #E7EAEA;\n}\n.card.qualiication-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.5rem;\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg.png\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  transition: background-image 0.15s;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding: 1.5rem 1rem 1rem;\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-start-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n  background-color: rgba(0, 31, 33, 0.3);\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1rem 1rem 1.5rem;\n  border-bottom: 6px solid transparent;\n  border-end-start-radius: 0.5rem;\n  border-end-end-radius: 0.5rem;\n}\n.card.qualiication-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: white;\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/images/real-estate-contributions/content/qualification/card-bg-hover.png\");\n}\n.card.qualiication-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 1.25rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 2px solid #E4ECEC;\n  border-radius: 50%;\n  background-color: #00B2BD;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n  background-color: rgba(0, 31, 33, 0.08);\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n  color: #353B3B;\n}\n.card.license-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #00B2BD;\n  align-self: flex-end;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  background-color: #005257;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.license-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n}\n.card.brief-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border: 1px solid rgba(196, 196, 196, 0.2);\n  border-top: 0.5rem solid #005257;\n  border-radius: 0.5rem;\n  box-shadow: 0px 4px 4px rgba(181, 183, 185, 0.26);\n}\n.card.brief-card[_ngcontent-%COMP%]    + .brief-card[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]    + .item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-inline-end: 1rem;\n  background-color: #F5FCFC;\n  border-radius: 0.25rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #005257;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #001F21;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n}\n.card.brief-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #A2B2B3;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  --bs-btn-padding-x: 1.75rem;\n  --bs-btn-padding-y: 1rem;\n}\n.card.brief-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #005257;\n}\n.card.phases-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 20px rgba(0, 31, 33, 0.08);\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(217, 217, 217, 0.4);\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]    + .phase[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   [class^=material-icons][_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #093266;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.done[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.current[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #F5FCFC;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase.next[_ngcontent-%COMP%]   .phase-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #E7EAEA;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-status[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .phase-date[_ngcontent-%COMP%] {\n  margin-inline-start: 2rem;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card.phases-card[_ngcontent-%COMP%]   .phase[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlcy9xdWFsaWZ5aW5nL3BhZ2VzL3JlcXVlc3RzL3JlcXVlc3RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvX2N1c3RvbS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnRlbnQvX2NhcmRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLG9CQUFBO0VBQ0EsbUJFNERNO0VGMUROLHlCQUFBO0VBQ0EsNEVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElNO0VBQ0UsWUVwQkE7QURrQlI7QURTSTs7RUFFRSxxQkV0Qks7QURlWDtBRFVJO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEV0k7RUFDRSx5QkFBQTtBQ1ROO0FEV007RUFDRSw2QkFBQTtBQ1RSO0FEYUk7RUFDRSxxQkV2Q0s7RUZ3Q0wscUJFc0JJO0FEakNWO0FEYU07RUFDRSxjRTFCRztFRjJCSCx1QkVuREE7QUR3Q1I7QURlSTtFQUNFLGtCQUFBO0FDYk47QURlTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxtQkVLRTtFRkpGLHVCRWxFQTtFRm1FQSwrQ0FBQTtBQ2RSO0FEZ0JRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVFbEJLO0VGbUJMLGNFM0VGO0FENkRSO0FEa0JVO0VBQ0Usa0JBQUE7QUNoQlo7QURtQlU7RUFDRSxjQUFBO0FDakJaOztBRDJCRTtFQUdFLGdCQUFBO0FDMUJKO0FENkJFO0VBQ0UsY0U5Rk87RUYrRlAsa0JBQUE7QUMzQko7QUQ4QkU7RUFDRSxlQUFBO0FDNUJKO0FEK0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FDOUJKO0FEZ0NJO0VBQ0UsY0V2R007QUR5RVo7QURpQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSx5QkVuSEs7QURtRlg7O0FEcUNBO0VBQ0Usa0JBQUE7QUNsQ0Y7O0FEdUNJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDcENOO0FEc0NNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ3BDUjtBRHlDTTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUN2Q1I7QUR5Q1E7RUFDRSwwQkFBQTtBQ3ZDVjtBRDRDSTtFQUNFLGNFbEtDO0FEd0hQOztBRGdERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzdDSjtBRCtDSTtFQUNFLGdCQUFBO0FDN0NOO0FEaURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUVBLGVFbklXO0VGb0lYLGlCQUFBO0VBQ0EsWUU1TEk7RUY2TEosa0JBQUE7RUFDQSx5QkVqTFE7QURnSVo7QURvREU7RUFDRSxlRTVJVztFRjZJWCxnQkFBQTtFQUNBLGNFdE1JO0FEb0pSOztBRXJKQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFFQSx5QkFBQTtBRnVKRjtBRXJKRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBRnNKSjtBRXBKSTtFQUNFLGVEMkNTO0FEMkdmO0FFbEpNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLHlCRG5CTTtBRHNLZDtBRTlJRTtFQUNFLGtCQUFBO0VBQ0EscUJEd0NNO0VDdENOLG1HQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBRUEsa0NBQUE7QUY4SUo7QUU1SUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBRUEsaUNEa0JJO0VDakJKLDZCRGlCSTtFQ2ZKLHNDQUFBO0FGMElOO0FFeElNO0VBQ0UsWUR6REE7QURtTVI7QUV0SUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JER0k7RUNGSiw2QkRFSTtBRHNJVjtBRXRJTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUR6RUE7QURpTlI7QUVwSUk7RUFDRSx5R0FBQTtBRnNJTjtBRXBJTTtFQUNFLHFCRHBFSTtBRDBNWjtBRWpJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJEM0ZJO0VDNEZKLHNCRHhCTTtFQ3lCTixlQUFBO0FGa0lKO0FFaElJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FGaUlOO0FFL0hNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkQzR0c7QUR5T1g7QUU1SFE7RUFDRSxXQUFBO0FGOEhWO0FFM0hRO0VBQ0UsWUQ3SEY7QUQwUFI7QUV6SE07RUFDRSxhQUFBO0FGMkhSO0FFekhRO0VBQ0UsY0R4SEU7QURtUFo7QUV0SEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLHVDQUFBO0FGdUhOO0FFckhNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNEckpEO0FENFFQO0FFcEhNO0VBQ0UsY0Q3SUc7RUM4SUgsb0JBQUE7QUZzSFI7QUVqSE07RUFDRSx5QkRsSkk7QURxUVo7QUVqSFE7RUFDRSxZRGxLRjtBRHFSUjtBRWhIUTtFQUNFLFlEdEtGO0FEd1JSO0FFNUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7QUY2R0o7QUUzR0k7RUFDRSxnQkFBQTtBRjZHTjtBRTFHSTtFQUNFLGFBQUE7QUY0R047QUUxR007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUY0R1I7QUUxR1E7RUFDRSxnQkFBQTtBRjRHVjtBRXpHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkQxTEU7RUMyTEYsc0JENUlBO0FEcVBWO0FFdkdVO0VBQ0UsY0R0TUE7QUQrU1o7QUVyR1E7RUFDRSxZQUFBO0VBQ0EsY0QzTkY7QURrVVI7QUVwR1E7OztFQUdFLGVEeEtLO0FEOFFmO0FFbkdRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBRnFHVjtBRWxHUTtFQUNFLGNBQUE7QUZvR1Y7QUUvRkk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FGZ0dOO0FFOUZNO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBRmdHUjtBRTdGTTtFQUNFLGdDQUFBO0FGK0ZSO0FFMUZFO0VBQ0UsOENBQUE7QUY0Rko7QUUxRkk7RUFDRSxvQkFBQTtBRjRGTjtBRTFGTTtFQUNFLHFCQUFBO0FGNEZSO0FFeEZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRjBGTjtBRXhGTTtFQUNFLHVCQUFBO0VBQ0EsaURBQUE7QUYwRlI7QUV2Rk07RUFDRSxrQkFBQTtBRnlGUjtBRXRGTTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRndGUjtBRXRGUTs7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ5RlY7QUV2RlU7O0VBQ0UsZUR4UEs7QURrVmpCO0FFcEZRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRnNGVjtBRXBGVTtFQUNFLGNEOVJEO0FEb1hYO0FFbEZRO0VBQ0UsY0RuU0M7QUR1WFg7QUU5RVU7RUFDRSx5QkQ3U0E7QUQ2WFo7QUV6RVU7RUFDRSx5QkRyVEE7QURnWVo7QUVwRVU7RUFDRSx5QkQvVUU7QURxWmQ7QUVqRU07O0VBRUUseUJBQUE7QUZtRVI7QUVoRU07O0VBRUUsZUR4U087QUQwV2Y7QUUvRE07RUFDRSxlRDNTTztBRDRXZiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gICYud2l0aC1hYnN0cmFjdCB7XG4gICAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2dlbmVyYWwvcGFnZS1oZWFkZXItdG9wLWFic3RyYWN0LnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0ZXIge1xuXG4gICAgLmlucHV0LWdyb3VwLXRleHQsXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItY29sb3I6ICRibHVlZ3JheTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gICAgICBib3JkZXItaW5saW5lLWVuZDogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlci1pbmxpbmUtc3RhcnQ6IG5vbmU7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJsdWVncmF5O1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc207XG5cbiAgICAgICY6bm90KDpob3Zlcikge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3JpdGVyaWEtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5jcml0ZXJpYSB7XG4gICAgICAgIG1pbi13aWR0aDogMTVyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAuNXJlbSk7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xuXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGJsdWVncmF5LCAuNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDE2cHggcmdiYSgkYmxhY2ssIC4wNSk7XG5cbiAgICAgICAgPi50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNoZWNrIHtcbiAgICAgICAgICAmKy5mb3JtLWNoZWNrIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTM5MzkzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucGFnZS10aXRsZSB7XG5cbiAgJisudGV4dCxcbiAgJisub3JkZXItbGlzdCxcbiAgJisucGFnZS1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgJisudGV4dCB7XG4gICAgY29sb3I6ICRkYXJrZ3JheTtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLnRpdGxlLWJvdHRvbS1saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcblxuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMC41cmVtO1xuICAgICAgaW5zZXQtaW5saW5lOiAwO1xuXG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1taWQ7XG4gICAgfVxuICB9XG59XG5cbi5wYWdlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iIHtcbiAgLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgJisuYnJlYWRjcnVtYi1pdGVtIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAuNXJlbTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IC41cmVtO1xuICAgICAgICBjb2xvcjogcmdiYSgkYmxhY2ssIC40KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCguYWN0aXZlKSB7XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSgkYmxhY2ssIC40KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkZGFyaztcbiAgICB9XG4gIH1cbn1cblxudWwub3JkZXItbGlzdCB7XG4gIGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAmK2xpIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgLm9yZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwLjVyZW07XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLW1haW47XG4gIH1cblxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiAgfVxufSIsIi5wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4ucGFnZS1oZWFkZXIud2l0aC1hYnN0cmFjdCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3NjQ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9nZW5lcmFsL3BhZ2UtaGVhZGVyLXRvcC1hYnN0cmFjdC5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wYWdlLWhlYWRlci53aXRoLWFic3RyYWN0IC5wYWdlLXRpdGxlIC50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5pbnB1dC1ncm91cC10ZXh0LFxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogI0Q5RDlEOTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBib3JkZXItaW5saW5lLWVuZDogbm9uZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItaW5saW5lLXN0YXJ0OiBub25lO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmJ0biB7XG4gIGJvcmRlci1jb2xvcjogI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmJ0bjpub3QoOmhvdmVyKSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmNyaXRlcmlhLXdyYXBwZXIgLmNyaXRlcmlhIHtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuNXJlbSk7XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNywgMjE3LCAyMTcsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAxNnB4IHJnYmEoMCwgMzEsIDMzLCAwLjA1KTtcbn1cbi5wYWdlLWhlYWRlciAuZmlsdGVyIC5jcml0ZXJpYS13cmFwcGVyIC5jcml0ZXJpYSA+IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuLnBhZ2UtaGVhZGVyIC5maWx0ZXIgLmNyaXRlcmlhLXdyYXBwZXIgLmNyaXRlcmlhIC5mb3JtLWNoZWNrICsgLmZvcm0tY2hlY2sge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ucGFnZS1oZWFkZXIgLmZpbHRlciAuY3JpdGVyaWEtd3JhcHBlciAuY3JpdGVyaWEgLmZvcm0tY2hlY2sgLmZvcm0tY2hlY2stbGFiZWwge1xuICBjb2xvcjogIzkzOTM5Mztcbn1cblxuLnBhZ2UtdGl0bGUgKyAudGV4dCwgLnBhZ2UtdGl0bGUgKyAub3JkZXItbGlzdCwgLnBhZ2UtdGl0bGUgKyAucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5wYWdlLXRpdGxlICsgLnRleHQge1xuICBjb2xvcjogIzY2NzY3NjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnBhZ2UtdGl0bGUgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnBhZ2UtdGl0bGUgLnRpdGxlLWJvdHRvbS1saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDFyZW07XG59XG4ucGFnZS10aXRsZSAudGl0bGUtYm90dG9tLWxpbmUgLmljb24ge1xuICBjb2xvcjogIzAwNTI1Nztcbn1cbi5wYWdlLXRpdGxlIC50aXRsZS1ib3R0b20tbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTAuNXJlbTtcbiAgaW5zZXQtaW5saW5lOiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjJCRDtcbn1cblxuLnBhZ2Utc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDAuNXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjQpO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbTpub3QoLmFjdGl2ZSkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjQpO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbTpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzM1M0IzQjtcbn1cblxudWwub3JkZXItbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG51bC5vcmRlci1saXN0IGxpICsgbGkge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxudWwub3JkZXItbGlzdCAub3JkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBtYXJnaW4taW5saW5lLWVuZDogMC41cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI1Nztcbn1cbnVsLm9yZGVyLWxpc3QgLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAxRjIxO1xufVxuXG4uY2FyZCB7XG4gIC0tYnMtY2FyZC10aXRsZS1zcGFjZXIteTogMDtcbiAgLS1icy1jYXJkLWNhcC1iZzogJGNhcmQtYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0VBRUE7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXI6bm90KC5uby1zZXBhcmV0b3IpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQtaW5saW5lOiB2YXIoLS1icy1jYXJkLWNhcC1wYWRkaW5nLXgpO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFQUVBO1xufVxuLmNhcmQucXVhbGlpY2F0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9ucy9jb250ZW50L3F1YWxpZmljYXRpb24vY2FyZC1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4xNXM7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZCAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItZW5kLWVuZC1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMSwgMzMsIDAuMyk7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZCAuaWNvbiBbY2xhc3NePW1hdGVyaWFsLWljb25zXSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkLnF1YWxpaWNhdGlvbi1jYXJkIC5jYXJkLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAxLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjVyZW07XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXRpdGxlIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkLnF1YWxpaWNhdGlvbi1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcmVhbC1lc3RhdGUtY29udHJpYnV0aW9ucy9jb250ZW50L3F1YWxpZmljYXRpb24vY2FyZC1iZy1ob3Zlci5wbmdcIik7XG59XG4uY2FyZC5xdWFsaWljYXRpb24tY2FyZDpob3ZlciAuY2FyZC1ib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA1MjU3O1xufVxuLmNhcmQubGljZW5zZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtaGVhZGVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI0U0RUNFQztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCMkJEO1xufVxuLmNhcmQubGljZW5zZS1jYXJkIC5jYXJkLWhlYWRlciAuaWNvbiBpbWcge1xuICB3aWR0aDogMnJlbTtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtaGVhZGVyIC50aXRsZSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2FyZC5saWNlbnNlLWNhcmQgLmNhcmQtaGVhZGVyIC50aXRsZSA+ICo6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzAwNTI1Nztcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzEsIDMzLCAwLjA4KTtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXRleHQge1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM1M0IzQjtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZCAuY2FyZC1ib2R5IC5hcnJvdyB7XG4gIGNvbG9yOiAjMDBCMkJEO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZDpob3ZlciAuY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI1Nztcbn1cbi5jYXJkLmxpY2Vuc2UtY2FyZDpob3ZlciAuY2FyZC1ib2R5IC5jYXJkLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5saWNlbnNlLWNhcmQ6aG92ZXIgLmNhcmQtYm9keSAuYXJyb3cge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZC5icmllZi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMik7XG4gIGJvcmRlci10b3A6IDAuNXJlbSBzb2xpZCAjMDA1MjU3O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMTgxLCAxODMsIDE4NSwgMC4yNik7XG59XG4uY2FyZC5icmllZi1jYXJkICsgLmJyaWVmLWNhcmQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmRldGFpbHMgLml0ZW0gKyAuaXRlbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgY29sb3I6ICMwMDUyNTc7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5kYXRhIHtcbiAgZmxleC1ncm93OiAxO1xuICBjb2xvcjogIzAwMUYyMTtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmRldGFpbHMgLml0ZW0gLmZvcm0tbGFiZWwsXG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC5rZXksXG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmRldGFpbHMgLml0ZW0gLmtleSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZC5icmllZi1jYXJkIC5kZXRhaWxzIC5pdGVtIC52YWx1ZSB7XG4gIGNvbG9yOiAjQTJCMkIzO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbn1cbi5jYXJkLmJyaWVmLWNhcmQgLmFjdGlvbnMgLmJ0biB7XG4gIC0tYnMtYnRuLXBhZGRpbmcteDogMS43NXJlbTtcbiAgLS1icy1idG4tcGFkZGluZy15OiAxcmVtO1xufVxuLmNhcmQuYnJpZWYtY2FyZCAuYWN0aW9ucyAucC1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNTI1Nztcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMzEsIDMzLCAwLjA4KTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5jYXJkLWJvZHkgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAwLjVyZW07XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2U6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTcsIDIxNywgMjE3LCAwLjQpO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlICsgLnBoYXNlIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1oZWFkZXIsXG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWhlYWRlciAuaWNvbixcbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtZGF0ZSAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdLFxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1kYXRlIC5pY29uIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1oZWFkZXIgLmljb24ge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1oZWFkZXIgLmljb24gW2NsYXNzXj1tYXRlcmlhbC1pY29uc10ge1xuICBjb2xvcjogIzA5MzI2Njtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAucGhhc2UtaGVhZGVyIC50aXRsZSB7XG4gIGNvbG9yOiAjMDkzMjY2O1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlLmRvbmUgLnBoYXNlLWhlYWRlciAuaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUZDRkM7XG59XG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UuY3VycmVudCAucGhhc2UtaGVhZGVyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkNGQztcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZS5uZXh0IC5waGFzZS1oZWFkZXIgLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFQUVBO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC5waGFzZS1zdGF0dXMsXG4uY2FyZC5waGFzZXMtY2FyZCAucGhhc2UgLnBoYXNlLWRhdGUge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAycmVtO1xufVxuLmNhcmQucGhhc2VzLWNhcmQgLnBoYXNlIC50aXRsZSxcbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJkLnBoYXNlcy1jYXJkIC5waGFzZSAudmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG59IiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMwMDFGMjE7XG4kZGFyazogIzM1M0IzQjtcbiR3aGl0ZTogd2hpdGU7XG4kbGlnaHQ6ICNGN0Y4Rjg7XG5cbiRsaWdodGVyZ3JheTogI0U3RUFFQTtcbiRsaWdodGdyYXk6ICNBREFGQjI7XG4kZGFya2dyYXk6ICM2Njc2NzY7XG4kZ3JlZW5ncmF5OiAjNjE3OTZGO1xuJGJsdWVncmF5OiAjRDlEOUQ5O1xuXG4kbGlnaHRncmVlbjogcmdiYSgjMDA2RjQzLCAuMDgpO1xuJG1pbnRncmVlbjogIzg0QzAzRjtcbiRtaWRncmVlbjogIzAwQjJCRDtcbiRncmVlbjogIzA2NzY0NztcbiRkYXJrZ3JlZW46ICMwMDUyNTc7XG5cbiRsaWdodE9yYW5nZTogI0ZFRjdFRTtcbiRvcmFuZ2U6ICNGRkM2MzU7XG4kb3JhbmdlZ3JheTogI0YyRURFMTtcbiRkYXJrb3JhbmdlOiAjRTRBQjE3O1xuXG4kYmx1ZTogIzU5QThENDtcbiRsaWdodGJsdWU6ICNGNUZDRkM7XG4kZ3JheWJsdWU6ICNCQUU5RUI7XG4kbWlkYmx1ZTogIzgwQ0VDODtcbiRkYXJrYmx1ZTogIzA5MzI2NjtcblxuJG1pZHJlZDogI0ZGN0E2OTtcbiRkYXJrcmVkOiAjRDY0QTM4O1xuXG4kcHJpbWFyeTogJGRhcmtncmVlbjtcbiRwcmltYXJ5LWJnOiAkbGlnaHRibHVlO1xuJGluZm86ICRibHVlO1xuJHN1Y2Nlc3M6ICRncmVlbjtcbiR3YXJuaW5nOiAjRUI5QjIyO1xuJGRhbmdlcjogJGRhcmtyZWQ7XG4kc2Vjb25kYXJ5OiAjOTU5RkE4O1xuXG4vLyBUaGVtZVxuJHRoZW1lLW1haW46ICRkYXJrZ3JlZW47XG4kdGhlbWUtbGlnaHQ6ICRsaWdodGJsdWU7XG4kdGhlbWUtZ3JheTogJGdyYXlibHVlO1xuJHRoZW1lLW1pZDogJG1pZGdyZWVuO1xuJHRoZW1lLWRhcms6ICRkYXJrYmx1ZTtcblxuLy8gLSBCYWNrZ3JvdW5kc1xuJGJvZHktYmc6ICRsaWdodDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogJGxpZ2h0Z3JlZW47XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0gQm9keVxuJGJvZHktZm9udC1zaXplOiAxNnB4O1xuJGJvZHktY29sb3I6ICRkYXJrO1xuXG4vLyAtIEN1c3RvbSBGb250IFNpemVzXG4kZm9udC1zaXplLXNtOiAkYm9keS1mb250LXNpemUgKiAuODc1O1xuJGZvbnQtc2l6ZS14czogJGJvZHktZm9udC1zaXplICogLjc1O1xuJGZvbnQtc2l6ZS14eHM6ICRib2R5LWZvbnQtc2l6ZSAqIC42MjU7XG4vLyAtIEhlYWRpbmdcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAwO1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiBib2xkO1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGluZ3MtY29sb3I6ICRibGFjaztcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMDtcbi8vIC0gT3RoZXJzXG4kc3VjY2Vzcy10ZXh0OiAkZGFya2dyZWVuO1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcblxuLy8gU2l6ZXNcbiRzaXplLXhzOiAuMjVyZW07IC8vIDRweFxuJHNpemUtc206IC41cmVtOyAvLyA4cHhcbiRzaXplLW1kOiAxcmVtOyAvLyAxNnB4XG4kc2l6ZS1sZzogMS4yNXJlbTsgLy8gMjBweFxuJHNpemUteGw6IDEuNXJlbTsgLy8gMjRweFxuJGhlYWRlci1oZWlnaHQ6IDQuNXJlbTtcblxuLy8gQm9yZGVyXG4kYm9yZGVyLWNvbG9yOiAkbGlnaHRncmF5O1xuLy8gLSBCb3JkZXIgUmFkaXVzXG4kYm9yZGVyLXJhZGl1cy14czogJHNpemUteHM7XG4kYm9yZGVyLXJhZGl1cy1zbTogJHNpemUtc207XG4kYm9yZGVyLXJhZGl1czogJHNpemUtbWQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogJHNpemUtbGc7XG4kYm9yZGVyLXJhZGl1cy14bDogJHNpemUteGw7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAyNXJlbTtcblxuLy8gQ2FyZHNcbiRjYXJkLWJnOiAkd2hpdGU7XG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuLy8gQWxlcnRzXG4kYWxlcnQtcGFkZGluZy15OiAuNzVyZW07XG4kYWxlcnQtcGFkZGluZy14OiAuNzVyZW07XG4kYWxlcnQtYm9yZGVyOiAkZGFya2dyZWVuO1xuXG4vLyBEcm9wZG93blxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNtO1xuXG4vLyBGb3Jtc1xuJGlucHV0LWJnOiAkd2hpdGU7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbTtcbiRidG4tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMteHM7XG4kaW5wdXQtY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcbiRmb3JtLWNoZWNrLW1hcmdpbi1ib3R0b206IDA7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAkd2hpdGU7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4vLyAkZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAuMjVyZW07XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRmb250LXNpemUteHhzO1xuXG4vLyBCdXR0b25zXG4kYnRuLXBhZGRpbmcteS1sZzogY2FsYygkc2l6ZS1sZyAtIC41cmVtIC0gMXB4KTtcbiRidG4tcGFkZGluZy14LWxnOiAkc2l6ZS1sZztcbiRidG4tZm9udC1zaXplLWxnOiAkc2l6ZS1tZDtcbiRidG4tZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuJGJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUteHM7XG5cbi8vIFRhYmxlc1xuLy8gJHRhYmxlLWNlbGwtcGFkZGluZy15OiAuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogMS4yNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmcteDogMXJlbTtcbiR0YWJsZS1iZzogJHdoaXRlO1xuJHRhYmxlLWJvcmRlci1jb2xvcjogJGxpZ2h0Z3JheTsiLCIuY2FyZCB7XG4gIC0tYnMtY2FyZC10aXRsZS1zcGFjZXIteTogMDtcbiAgLS1icy1jYXJkLWNhcC1iZzogJGNhcmQtYmc7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0ZXJncmF5O1xuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICB9XG5cbiAgICAmOm5vdCgubm8tc2VwYXJldG9yKSB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0LWlubGluZTogdmFyKC0tYnMtY2FyZC1jYXAtcGFkZGluZy14KTtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRlcmdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5xdWFsaWljYXRpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3JlYWwtZXN0YXRlLWNvbnRyaWJ1dGlvbnMvY29udGVudC9xdWFsaWZpY2F0aW9uL2NhcmQtYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4xNXM7XG5cbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG5cbiAgICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG4gICAgICBib3JkZXItZW5kLWVuZC1yYWRpdXM6ICRjYXJkLWJvcmRlci1yYWRpdXM7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsYWNrLCAuMyk7XG5cbiAgICAgIFtjbGFzc149XCJtYXRlcmlhbC1pY29uc1wiXSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDEuNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICAgICAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9yZWFsLWVzdGF0ZS1jb250cmlidXRpb25zL2NvbnRlbnQvcXVhbGlmaWNhdGlvbi9jYXJkLWJnLWhvdmVyLnBuZycpO1xuXG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmxpY2Vuc2UtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy14cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcblxuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTRFQ0VDO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1taWQ7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtjbGFzc149bWF0ZXJpYWwtaWNvbnNdIHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICAgICAgPio6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmxhY2ssIC4wOCk7XG5cbiAgICAgIC5jYXJkLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJGJvZHktY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5hcnJvdyB7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtbWlkO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbWFpbjtcblxuICAgICAgICAuY2FyZC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5icmllZi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjIpO1xuICAgIGJvcmRlci10b3A6IDAuNXJlbSBzb2xpZCAkdGhlbWUtbWFpbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgxODEsIDE4MywgMTg1LCAwLjI2KTtcblxuICAgICYrLmJyaWVmLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICB9XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJisuaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxcmVtO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWxpZ2h0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXhzO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtbWFpbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1sYWJlbCxcbiAgICAgICAgLmtleSxcbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgIH1cblxuICAgICAgICAua2V5IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgY29sb3I6ICNBMkIyQjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAuNXJlbTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMXJlbTtcbiAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICAtLWJzLWJ0bi1wYWRkaW5nLXg6IDEuNzVyZW07XG4gICAgICAgIC0tYnMtYnRuLXBhZGRpbmcteTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLnAtYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR0aGVtZS1tYWluO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYucGhhc2VzLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKCRibGFjaywgMC4wOCk7XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGhhc2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICByb3ctZ2FwOiAuNXJlbTtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGJsdWVncmF5LCAuNCk7XG4gICAgICB9XG5cbiAgICAgICYrLnBoYXNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAucGhhc2UtaGVhZGVyLFxuICAgICAgLnBoYXNlLWRhdGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgW2NsYXNzXj1cIm1hdGVyaWFsLWljb25zXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmRvbmUge1xuICAgICAgICAucGhhc2UtaGVhZGVyIHtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtbGlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY3VycmVudCB7XG4gICAgICAgIC5waGFzZS1oZWFkZXIge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1saWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5uZXh0IHtcbiAgICAgICAgLnBoYXNlLWhlYWRlciB7XG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGhhc2Utc3RhdHVzLFxuICAgICAgLnBoYXNlLWRhdGUge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAycmVtO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUsXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgICAgIH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICYucXVhbGlpY2F0aW9uLXJlcWVzdC1jYXJkIHtcbiAgLy8gICAuY2FyZC10aXRsZSB7XG5cbiAgLy8gICAgIC50aXRsZSxcbiAgLy8gICAgIC5kYXRlLFxuICAvLyAgICAgLmFjdGlvbnMge1xuICAvLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICAudGl0bGUge1xuICAvLyAgICAgICBjb2xvcjogJGRhcms7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5kYXRlIHtcbiAgLy8gICAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgICAgLmtleSB7XG4gIC8vICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAudmFsdWUge1xuICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICAgICAgICBjb2x1bW4tZ2FwOiAuMjVyZW07XG5cbiAgLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5hY3Rpb25zIHtcbiAgLy8gICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIC5hcHBsaWNhbnQge1xuICAvLyAgICAgY29sdW1uLWdhcDogLjVyZW07XG5cbiAgLy8gICAgIC5rZXkge1xuICAvLyAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gIC8vICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC52YWx1ZSB7XG4gIC8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgICAgIGNvbHVtbi1nYXA6IC41cmVtO1xuXG4gIC8vICAgICAgIC5pbWFnZSB7XG4gIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC8vICAgICAgICAgd2lkdGg6IDJyZW07XG4gIC8vICAgICAgICAgaGVpZ2h0OiAycmVtO1xuXG4gIC8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtncmVlbjtcbiAgLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKCRibGFjaywgMC4xKTtcblxuICAvLyAgICAgICAgIC5hdmF0YXIge1xuICAvLyAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC5uYW1lIHtcbiAgLy8gICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vICAgICAgICAgY29sb3I6ICRkYXJrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIC5kZXRhaWxzIHtcbiAgLy8gICAgICAgbGFiZWwge1xuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgLy8gICAgICAgICBjb2xvcjogcmdiYSgkZGFya2dyYXksIC41KTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNwYW4ge1xuICAvLyAgICAgICAgIGNvbG9yOiAkZGFya2dyYXk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 38279:
/*!**************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/qualifying-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualifyingRoutingModule": () => (/* binding */ QualifyingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/create/create.component */ 46320);
/* harmony import */ var _pages_requests_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/requests/requests.component */ 67921);
/* harmony import */ var _pages_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/request-list/request-list.component */ 17617);
/* harmony import */ var _pages_request_summary_request_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/request-summary/request-summary.component */ 94351);
/* harmony import */ var _pages_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/request-details/request-details.component */ 32569);
/* harmony import */ var _pages_qualifying_certificates_qualifying_certificates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/qualifying-certificates/qualifying-certificates.component */ 43377);
/* harmony import */ var _pages_renew_qualifying_list_renew_qualifying_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/renew-qualifying-list/renew-qualifying-list.component */ 45202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86793);











const routes = [{
  path: '',
  redirectTo: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requests,
  pathMatch: 'full'
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requests,
  component: _pages_requests_requests_component__WEBPACK_IMPORTED_MODULE_2__.RequestsComponent,
  data: {
    breadcrumb: 'الطلبات'
  }
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestList,
  component: _pages_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_3__.RequestListComponent,
  data: {
    breadcrumb: 'قائمة الطلبات'
  }
}, {
  path: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.createRequest}/:code`,
  component: _pages_create_create_component__WEBPACK_IMPORTED_MODULE_1__.CreateComponent,
  data: {
    breadcrumb: 'انشاء طلب جديد'
  }
}, {
  path: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewRequest}/:code`,
  component: _pages_create_create_component__WEBPACK_IMPORTED_MODULE_1__.CreateComponent,
  data: {
    breadcrumb: 'تجديد طلب جديد'
  }
}, {
  path: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestSummary}/:code/:period`,
  component: _pages_request_summary_request_summary_component__WEBPACK_IMPORTED_MODULE_4__.RequestSummaryComponent,
  data: {
    breadcrumb: 'تأكيد بيانات الطلب'
  }
}, {
  path: `${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewRequestSummary}/:code/:period`,
  component: _pages_request_summary_request_summary_component__WEBPACK_IMPORTED_MODULE_4__.RequestSummaryComponent,
  data: {
    breadcrumb: 'تأكيد بيانات الطلب'
  }
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.requestDetails,
  component: _pages_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_5__.RequestDetailsComponent,
  data: {
    breadcrumb: 'تفاصيل الطلب'
  }
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.qualifyingCertificates,
  component: _pages_qualifying_certificates_qualifying_certificates_component__WEBPACK_IMPORTED_MODULE_6__.QualifyingCertificatesComponent,
  data: {
    breadcrumb: 'شهادات طلب التأهيل'
  }
}, {
  path: src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.pages.qualifying.renewQualifyingList,
  component: _pages_renew_qualifying_list_renew_qualifying_list_component__WEBPACK_IMPORTED_MODULE_7__.RenewQualifyingListComponent,
  data: {
    breadcrumb: 'تجديد التأهيل'
  }
}];
class QualifyingRoutingModule {}
QualifyingRoutingModule.ɵfac = function QualifyingRoutingModule_Factory(t) {
  return new (t || QualifyingRoutingModule)();
};
QualifyingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: QualifyingRoutingModule
});
QualifyingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](QualifyingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 79554:
/*!******************************************************************!*\
  !*** ./src/app/modules/features/qualifying/qualifying.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualifyingModule": () => (/* binding */ QualifyingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 85959);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ 65132);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 26518);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 42219);
/* harmony import */ var _qualifying_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qualifying-routing.module */ 38279);
/* harmony import */ var _services_qualification_type_qualification_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/qualification-type/qualification-type.service */ 49699);
/* harmony import */ var _services_qualification_type_qualification_service_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/qualification-type/qualification-service-request.service */ 72710);
/* harmony import */ var _pages_requests_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/requests/requests.component */ 67921);
/* harmony import */ var _pages_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/create/create.component */ 46320);
/* harmony import */ var _pages_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/request-list/request-list.component */ 17617);
/* harmony import */ var _components_request_validation_popup_request_validation_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/request-validation-popup/request-validation-popup.component */ 45005);
/* harmony import */ var _pages_request_summary_request_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/request-summary/request-summary.component */ 94351);
/* harmony import */ var _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/requests/request-service.service */ 69946);
/* harmony import */ var _facilities_services_facilityProfile_facility_profile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../facilities/services/facilityProfile/facility-profile.service */ 13583);
/* harmony import */ var _components_commercial_registry_commercial_registry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/commercial-registry/commercial-registry.component */ 57970);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layout/layout.module */ 91855);
/* harmony import */ var _components_request_wafi_training_request_wafi_training_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/request-wafi-training/request-wafi-training.component */ 19017);
/* harmony import */ var _components_request_financial_capabilities_requirements_request_financial_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/request-financial-capabilities-requirements/request-financial-capabilities-requirements.component */ 38005);
/* harmony import */ var _components_request_job_requirements_and_human_resources_request_job_requirements_and_human_resources_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component */ 43723);
/* harmony import */ var _components_request_technical_capabilities_requirements_request_technical_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/request-technical-capabilities-requirements/request-technical-capabilities-requirements.component */ 58525);
/* harmony import */ var _components_request_certified_facility_engineers_request_certified_facility_engineers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/request-certified-facility-engineers/request-certified-facility-engineers.component */ 12099);
/* harmony import */ var _components_request_institutional_capabilities_and_additional_discriminatory_human_resources_request_institutional_capabilities_and_additional_discriminatory_human_resources_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component */ 12162);
/* harmony import */ var _components_request_distinctive_additional_technical_capabilities_request_distinctive_additional_technical_capabilities_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component */ 74966);
/* harmony import */ var _components_request_engineers_with_sufficient_training_for_the_engineering_consultant_request_engineers_with_sufficient_training_for_the_engineering_consultant_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component */ 20508);
/* harmony import */ var _components_request_accountants_completed_wafi_training_program_for_accounting_supervision_request_accountants_completed_wafi_training_program_for_accounting_supervision_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component */ 13118);
/* harmony import */ var _components_request_national_addresses_request_national_addresses_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/request-national-addresses/request-national-addresses.component */ 35607);
/* harmony import */ var _pages_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/request-details/request-details.component */ 32569);
/* harmony import */ var _components_request_data_request_data_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/request-data/request-data.component */ 54309);
/* harmony import */ var _components_result_of_request_study_result_of_request_study_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/result-of-request-study/result-of-request-study.component */ 57096);
/* harmony import */ var _components_request_events_log_request_events_log_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/request-events-log/request-events-log.component */ 67280);
/* harmony import */ var _components_certificate_certificate_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/certificate/certificate.component */ 24779);
/* harmony import */ var _pages_qualifying_certificates_qualifying_certificates_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/qualifying-certificates/qualifying-certificates.component */ 43377);
/* harmony import */ var _services_qualification_certificates_qualification_certificates_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/qualification-certificates/qualification-certificates.service */ 54363);
/* harmony import */ var _pages_renew_qualifying_list_renew_qualifying_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/renew-qualifying-list/renew-qualifying-list.component */ 45202);
/* harmony import */ var _services_renew_qualifying_list_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/renew-qualifying-list.service */ 39669);
/* harmony import */ var _components_engineering_certificate_engineering_certificate_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/engineering-certificate/engineering-certificate.component */ 32357);
/* harmony import */ var _components_accountant_certificate_accountant_certificate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/accountant-certificate/accountant-certificate.component */ 65187);
/* harmony import */ var _components_developer_certificate_developer_certificate_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/developer-certificate/developer-certificate.component */ 93304);
/* harmony import */ var _components_contribution_developer_certificate_contribution_developer_certificate_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/contribution-developer-certificate/contribution-developer-certificate.component */ 43615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ 86793);




// import { TranslateModule } from '@ngx-translate/core';




































class QualifyingModule {}
QualifyingModule.ɵfac = function QualifyingModule_Factory(t) {
  return new (t || QualifyingModule)();
};
QualifyingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({
  type: QualifyingModule
});
QualifyingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({
  providers: [_services_qualification_type_qualification_type_service__WEBPACK_IMPORTED_MODULE_2__.QualificationTypeService, _services_requests_request_service_service__WEBPACK_IMPORTED_MODULE_9__.RequestService,
  // RequestValidationService,
  _facilities_services_facilityProfile_facility_profile_service__WEBPACK_IMPORTED_MODULE_10__.FacilityProfileService, _services_qualification_type_qualification_service_request_service__WEBPACK_IMPORTED_MODULE_3__.QualificationServiceRequestService, _services_qualification_certificates_qualification_certificates_service__WEBPACK_IMPORTED_MODULE_29__.QualificationCertificatesService, _services_renew_qualifying_list_service__WEBPACK_IMPORTED_MODULE_31__.RenewQualifyingListService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_37__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
  // TranslateModule.forChild(),
  _angular_router__WEBPACK_IMPORTED_MODULE_39__.RouterModule, _qualifying_routing_module__WEBPACK_IMPORTED_MODULE_1__.QualifyingRoutingModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__.LayoutModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](QualifyingModule, {
    declarations: [_pages_requests_requests_component__WEBPACK_IMPORTED_MODULE_4__.RequestsComponent, _pages_create_create_component__WEBPACK_IMPORTED_MODULE_5__.CreateComponent, _pages_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_6__.RequestListComponent, _components_request_validation_popup_request_validation_popup_component__WEBPACK_IMPORTED_MODULE_7__.RequestValidationPopupComponent, _pages_request_summary_request_summary_component__WEBPACK_IMPORTED_MODULE_8__.RequestSummaryComponent, _components_commercial_registry_commercial_registry_component__WEBPACK_IMPORTED_MODULE_11__.CommercialRegistryComponent, _components_request_wafi_training_request_wafi_training_component__WEBPACK_IMPORTED_MODULE_13__.RequestWafiTrainingComponent, _components_request_financial_capabilities_requirements_request_financial_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_14__.RequestFinancialCapabilitiesRequirementsComponent, _components_request_job_requirements_and_human_resources_request_job_requirements_and_human_resources_component__WEBPACK_IMPORTED_MODULE_15__.RequestJobRequirementsAndHumanResourcesComponent, _components_request_technical_capabilities_requirements_request_technical_capabilities_requirements_component__WEBPACK_IMPORTED_MODULE_16__.RequestTechnicalCapabilitiesRequirementsComponent, _components_request_certified_facility_engineers_request_certified_facility_engineers_component__WEBPACK_IMPORTED_MODULE_17__.RequestCertifiedFacilityEngineersComponent, _components_request_institutional_capabilities_and_additional_discriminatory_human_resources_request_institutional_capabilities_and_additional_discriminatory_human_resources_component__WEBPACK_IMPORTED_MODULE_18__.RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent, _components_request_distinctive_additional_technical_capabilities_request_distinctive_additional_technical_capabilities_component__WEBPACK_IMPORTED_MODULE_19__.RequestDistinctiveAdditionalTechnicalCapabilitiesComponent, _components_request_engineers_with_sufficient_training_for_the_engineering_consultant_request_engineers_with_sufficient_training_for_the_engineering_consultant_component__WEBPACK_IMPORTED_MODULE_20__.RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent, _components_request_accountants_completed_wafi_training_program_for_accounting_supervision_request_accountants_completed_wafi_training_program_for_accounting_supervision_component__WEBPACK_IMPORTED_MODULE_21__.RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent, _components_request_national_addresses_request_national_addresses_component__WEBPACK_IMPORTED_MODULE_22__.RequestNationalAddressesComponent, _pages_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_23__.RequestDetailsComponent, _components_request_data_request_data_component__WEBPACK_IMPORTED_MODULE_24__.RequestDataComponent, _components_result_of_request_study_result_of_request_study_component__WEBPACK_IMPORTED_MODULE_25__.ResultOfRequestStudyComponent, _components_request_events_log_request_events_log_component__WEBPACK_IMPORTED_MODULE_26__.RequestEventsLogComponent, _components_certificate_certificate_component__WEBPACK_IMPORTED_MODULE_27__.CertificateComponent, _pages_qualifying_certificates_qualifying_certificates_component__WEBPACK_IMPORTED_MODULE_28__.QualifyingCertificatesComponent, _pages_renew_qualifying_list_renew_qualifying_list_component__WEBPACK_IMPORTED_MODULE_30__.RenewQualifyingListComponent, _components_engineering_certificate_engineering_certificate_component__WEBPACK_IMPORTED_MODULE_32__.EngineeringCertificateComponent, _components_accountant_certificate_accountant_certificate_component__WEBPACK_IMPORTED_MODULE_33__.AccountantCertificateComponent, _components_developer_certificate_developer_certificate_component__WEBPACK_IMPORTED_MODULE_34__.DeveloperCertificateComponent, _components_contribution_developer_certificate_contribution_developer_certificate_component__WEBPACK_IMPORTED_MODULE_35__.ContributionDeveloperCertificateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_37__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
    // TranslateModule.forChild(),
    _angular_router__WEBPACK_IMPORTED_MODULE_39__.RouterModule, _qualifying_routing_module__WEBPACK_IMPORTED_MODULE_1__.QualifyingRoutingModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__.LayoutModule]
  });
})();

/***/ }),

/***/ 54363:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/services/qualification-certificates/qualification-certificates.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationCertificatesService": () => (/* binding */ QualificationCertificatesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);




class QualificationCertificatesService {
  // getCertificatesByCustomerId= Configuration.APIs.SysTemplate.getCertificatesByCustomerId;
  // getCertificateByRequestId= Configuration.APIs.SysTemplate.getCertificateByRequestId;
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  getCertificatesByCustomerId(customerId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.SysTemplate.getCertificatesByCustomerId}/${customerId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  getCertificateByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.SysTemplate.getCertificatesByCustomerId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
}
QualificationCertificatesService.ɵfac = function QualificationCertificatesService_Factory(t) {
  return new (t || QualificationCertificatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
QualificationCertificatesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: QualificationCertificatesService,
  factory: QualificationCertificatesService.ɵfac
});

/***/ }),

/***/ 49699:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/services/qualification-type/qualification-type.service.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationTypeService": () => (/* binding */ QualificationTypeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);




class QualificationTypeService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  GetByCode(requestTypeCode, renewRequest) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.SysQualificationType.GetShowForWafiByCode}/${requestTypeCode}/${renewRequest}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res.isDone && res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
}
QualificationTypeService.ɵfac = function QualificationTypeService_Factory(t) {
  return new (t || QualificationTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
QualificationTypeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: QualificationTypeService,
  factory: QualificationTypeService.ɵfac
});

/***/ }),

/***/ 39669:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/features/qualifying/services/renew-qualifying-list.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenewQualifyingListService": () => (/* binding */ RenewQualifyingListService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);






class RenewQualifyingListService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.submitSuccessfullyEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  getExpiredQualificationPagingList(facilityId, pageIndex, pageSize) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    queryParams = queryParams.append("facilityId", facilityId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationRequestHeader.GetExpiredQualificationPagingList}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      return res.isDone ? res.data : null;
    }));
  }
}
RenewQualifyingListService.ɵfac = function RenewQualifyingListService_Factory(t) {
  return new (t || RenewQualifyingListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RenewQualifyingListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RenewQualifyingListService,
  factory: RenewQualifyingListService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_features_qualifying_qualifying_module_ts.js.map