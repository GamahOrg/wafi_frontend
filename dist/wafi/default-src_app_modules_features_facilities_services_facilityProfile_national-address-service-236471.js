"use strict";
(self["webpackChunkWafi"] = self["webpackChunkWafi"] || []).push([["default-src_app_modules_features_facilities_services_facilityProfile_national-address-service-236471"],{

/***/ 51103:
/*!**********************************************************************!*\
  !*** ./src/app/modules/features/facilities/dataModels/area.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areaResponseBE": () => (/* binding */ areaResponseBE),
/* harmony export */   "areaResponseFE": () => (/* binding */ areaResponseFE)
/* harmony export */ });
class areaResponseBE {
  constructor() {
    this.id = "";
    this.areaName = "";
  }
}
class areaResponseFE {
  constructor(_areaResponseBE) {
    this._areaResponseBE = _areaResponseBE;
    this.Id = "";
    this.AreaName = "";
    this.Id = _areaResponseBE.id;
    this.AreaName = _areaResponseBE.areaName;
  }
}

/***/ }),

/***/ 44465:
/*!**********************************************************************!*\
  !*** ./src/app/modules/features/facilities/dataModels/city.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cityResponseBE": () => (/* binding */ cityResponseBE),
/* harmony export */   "cityResponseFE": () => (/* binding */ cityResponseFE)
/* harmony export */ });
class cityResponseBE {
  constructor() {
    this.id = "";
    this.cityName = "";
    this.areasId = "";
  }
}
class cityResponseFE {
  constructor(_cityResponseBE) {
    this._cityResponseBE = _cityResponseBE;
    this.Id = "";
    this.CityName = "";
    this.AreaId = "";
    this.Id = _cityResponseBE.id;
    this.CityName = _cityResponseBE.cityName;
    this.AreaId = _cityResponseBE.areasId;
  }
}

/***/ }),

/***/ 24811:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/features/facilities/dataModels/national-address.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nationalAddressDto": () => (/* binding */ nationalAddressDto),
/* harmony export */   "nationalAddressResponseBE": () => (/* binding */ nationalAddressResponseBE),
/* harmony export */   "nationalAddressResponseFE": () => (/* binding */ nationalAddressResponseFE)
/* harmony export */ });
/* harmony import */ var _area_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area.model */ 51103);
/* harmony import */ var _city_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.model */ 44465);
/* harmony import */ var _qualification_broker_document_type_create_update_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualification-broker-document-type-create-update-dto */ 68484);



class nationalAddressDto {
  constructor() {
    this.id = "";
    this.buildingNumber = "";
    this.streetName = "";
    this.neighborhoodName = "";
    this.postalCode = "";
    this.unitNumber = "";
    this.additionalNumber = "";
    this.facilityId = "";
    this.citiesId = "";
    this.areasId = "";
    this.brokerDocumentTypeId = 0;
    this.documentNumber = "";
  }
}
class nationalAddressResponseBE {
  constructor() {
    this.id = "";
    this.buildingNumber = "";
    this.streetName = "";
    this.neighborhoodName = "";
    this.postalCode = "";
    this.unitNumber = "";
    this.additionalNumber = "";
    this.citiesId = "";
    this.areasId = "";
    this.brokerDocumentTypeId = 0;
    this.documentNumber = "";
    this.brokerDocumentType = new _qualification_broker_document_type_create_update_dto__WEBPACK_IMPORTED_MODULE_2__.QualificationBrokerDocumentTypeCreateUpdateDto();
    this.areas = new _area_model__WEBPACK_IMPORTED_MODULE_0__.areaResponseBE();
    this.sysCity = new _city_model__WEBPACK_IMPORTED_MODULE_1__.cityResponseBE();
  }
}
class nationalAddressResponseFE {
  constructor(_nationalAddressResponseBE) {
    this._nationalAddressResponseBE = _nationalAddressResponseBE;
    this.Id = "";
    this.BuildingNumber = "";
    this.StreetName = "";
    this.NeighborhoodName = "";
    this.PostalCode = "";
    this.UnitNumber = "";
    this.AdditionalNumber = "";
    this.CityId = "";
    this.AreaId = "";
    this.brokerDocumentTypeId = 0;
    this.documentNumber = "";
    this.brokerDocumentType = new _qualification_broker_document_type_create_update_dto__WEBPACK_IMPORTED_MODULE_2__.QualificationBrokerDocumentTypeCreateUpdateDto();
    this.Area = new _area_model__WEBPACK_IMPORTED_MODULE_0__.areaResponseFE(new _area_model__WEBPACK_IMPORTED_MODULE_0__.areaResponseBE());
    this.City = new _city_model__WEBPACK_IMPORTED_MODULE_1__.cityResponseFE(new _city_model__WEBPACK_IMPORTED_MODULE_1__.cityResponseBE());
    this.Id = _nationalAddressResponseBE.id;
    this.BuildingNumber = _nationalAddressResponseBE.buildingNumber;
    this.StreetName = _nationalAddressResponseBE.streetName;
    this.NeighborhoodName = _nationalAddressResponseBE.neighborhoodName;
    this.PostalCode = _nationalAddressResponseBE.postalCode;
    this.UnitNumber = _nationalAddressResponseBE.unitNumber;
    this.AdditionalNumber = _nationalAddressResponseBE.additionalNumber;
    this.CityId = _nationalAddressResponseBE.citiesId;
    this.AreaId = _nationalAddressResponseBE.areasId;
    this.brokerDocumentTypeId = _nationalAddressResponseBE.brokerDocumentTypeId;
    this.documentNumber = _nationalAddressResponseBE.documentNumber;
    this.brokerDocumentType = _nationalAddressResponseBE.brokerDocumentType;
    this.Area = new _area_model__WEBPACK_IMPORTED_MODULE_0__.areaResponseFE(_nationalAddressResponseBE.areas);
    this.City = new _city_model__WEBPACK_IMPORTED_MODULE_1__.cityResponseFE(_nationalAddressResponseBE.sysCity);
  }
}

/***/ }),

/***/ 68484:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/features/facilities/dataModels/qualification-broker-document-type-create-update-dto.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualificationBrokerDocumentTypeCreateUpdateDto": () => (/* binding */ QualificationBrokerDocumentTypeCreateUpdateDto)
/* harmony export */ });
class QualificationBrokerDocumentTypeCreateUpdateDto {
  constructor() {
    this.id = "";
    this.brokerDocumentTypeName = "";
  }
}

/***/ }),

/***/ 43879:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/features/facilities/services/facilityProfile/national-address-service/national-address.service.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NationalAddressService": () => (/* binding */ NationalAddressService)
/* harmony export */ });
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 53756);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var src_app_modules_features_facilities_dataModels_national_address_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/features/facilities/dataModels/national-address.model */ 24811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 63448);






class NationalAddressService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.objSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new src_app_modules_features_facilities_dataModels_national_address_model__WEBPACK_IMPORTED_MODULE_1__.nationalAddressResponseFE(new src_app_modules_features_facilities_dataModels_national_address_model__WEBPACK_IMPORTED_MODULE_1__.nationalAddressResponseBE()));
    this.objSubject$ = this.objSubject.asObservable();
  }
  getSubjectObj() {
    return this.objSubject$;
  }
  SetSubjectObj(LatestValue) {
    return this.objSubject.next(LatestValue);
  }
  GetFacilityById(facilityId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationNationalAddressDetail.GetByFacilityId}/${facilityId}`).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res == null || res.data == null) {
        return null;
      }
      return new src_app_modules_features_facilities_dataModels_national_address_model__WEBPACK_IMPORTED_MODULE_1__.nationalAddressResponseFE(res.data);
    }));
  }
  Save(model) {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';
    return this._httpClient.post(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationNationalAddressDetail.Save, model).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res == null || res.data == null) {
        return null;
      }
      return res;
    }));
  }
  GetAreasDropDown() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.Area.GetDropDown}`).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res == null || res.data == null) {
        return null;
      }
      return res.data;
    }));
  }
  GetCitiessDropDown() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.City.GetDropDown}`).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res == null || res.data == null) {
        return null;
      }
      return res.data;
    }));
  }
  GetById(id) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationNationalAddressDetail.GetById}?id=${id}`).pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      if (res == null || res.data == null) {
        return null;
      }
      return res.data;
    }));
  }
}
NationalAddressService.ɵfac = function NationalAddressService_Factory(t) {
  return new (t || NationalAddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
NationalAddressService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NationalAddressService,
  factory: NationalAddressService.ɵfac
});

/***/ }),

/***/ 44429:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/features/facilities/services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalCapabilitiesRequirementsService": () => (/* binding */ TechnicalCapabilitiesRequirementsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53756);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63448);




class TechnicalCapabilitiesRequirementsService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.technicalCapabilitiesRequirementsBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
    this.projectTOEdit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  }
  UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(data) {
    this.technicalCapabilitiesRequirementsBehaviorSubject.next(data);
  }
  Save(technicalCapabilitiesRequirement) {
    if (!technicalCapabilitiesRequirement.id) technicalCapabilitiesRequirement.id = '00000000-0000-0000-0000-000000000000';
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationTechnicalCapabilitiesRequirement.Save}`, technicalCapabilitiesRequirement).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
  GetByFacilityId(facilityId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationTechnicalCapabilitiesRequirement.GetByFacilityId}/${facilityId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  GetProjectCategory() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ProjectCategory.Get}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  GetProjectSubCategoryDropDown() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ProjectSubCategory.Get}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  GetProjectTypeDropDown() {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.ProjectType.Get}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  SaveQualificationProject(project) {
    return this._httpClient.post(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationProject.Save}`, project).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
  DeleteQualificationProject(projectId) {
    return this._httpClient.delete(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.QualificationProject.Delete}?id=${projectId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
}
TechnicalCapabilitiesRequirementsService.ɵfac = function TechnicalCapabilitiesRequirementsService_Factory(t) {
  return new (t || TechnicalCapabilitiesRequirementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
TechnicalCapabilitiesRequirementsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TechnicalCapabilitiesRequirementsService,
  factory: TechnicalCapabilitiesRequirementsService.ɵfac
});

/***/ }),

/***/ 85335:
/*!**************************************************************************!*\
  !*** ./src/app/modules/features/license/models/external-status.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalStatus": () => (/* binding */ ExternalStatus)
/* harmony export */ });
var ExternalStatus;
(function (ExternalStatus) {
  ///<summary>مسودة</summary>
  ExternalStatus[ExternalStatus["Draft"] = 1] = "Draft";
  ///<summary>جارى مراجعة الطلب</summary>
  ExternalStatus[ExternalStatus["ReqIsBeingReviewed"] = 2] = "ReqIsBeingReviewed";
  ///<summary>جارى دراسة الطلب</summary>
  ExternalStatus[ExternalStatus["ReqIsBeingStudied"] = 3] = "ReqIsBeingStudied";
  ///<summary> تم دراسة الطلب وإرسال الملاحظات</summary> 
  ExternalStatus[ExternalStatus["ReqStudiedAndFeedbackSent"] = 4] = "ReqStudiedAndFeedbackSent";
  /// <summary>تم معالجة الملاحظات وإرسال الطلب </summary>
  ExternalStatus[ExternalStatus["NotesCompiledAndReqSent"] = 5] = "NotesCompiledAndReqSent";
  ///<summary> تم دراسة الطلب وإرسال الملاحظات لمقدم الطلب</summary> 
  ExternalStatus[ExternalStatus["ReqStudiedAndFeedbackSentForCustomer"] = 6] = "ReqStudiedAndFeedbackSentForCustomer";
  ///<summary>تم قبول الطلب وإصدار الرخصة وجارى إعتمادها</summary>
  ExternalStatus[ExternalStatus["ReqApprovedLicIssuedAndBeingCertified"] = 7] = "ReqApprovedLicIssuedAndBeingCertified";
  ///<summary>تم قبول الطلب وإصدار الرخصة المبدئية وجارى إستكمال إجراءات الرخصة</summary>
  ExternalStatus[ExternalStatus["ReqApprovedInitialLicIssuedAndBeingCompleted"] = 8] = "ReqApprovedInitialLicIssuedAndBeingCompleted";
  ///<summary>تم الموافقة المشروطه على الطلب</summary>
  ExternalStatus[ExternalStatus["ReqHasConditionalApproval"] = 9] = "ReqHasConditionalApproval";
  ///<summary>تم الموافقة المشروطه على الطلب وارسال الشروط لمقدم الطلب</summary>
  ExternalStatus[ExternalStatus["ReqHasConditionalApprovalConditionsSentForCustomer"] = 10] = "ReqHasConditionalApprovalConditionsSentForCustomer";
  ///<summary>تم رفض الطلب</summary>
  ExternalStatus[ExternalStatus["ReqRejected"] = 11] = "ReqRejected";
  ///<summary>تم قبول الموافقة المشروطه وإصدار الرخصة وجارى إعتمادها</summary>
  ExternalStatus[ExternalStatus["ReqConditionalApprovalApprovedLicIssuedAndBeingCertified"] = 12] = "ReqConditionalApprovalApprovedLicIssuedAndBeingCertified";
  ///<summary>تم معالجة شروط الموافقة المشروطه وإرسال الطلب</summary>
  ExternalStatus[ExternalStatus["ConditionalApprovalNotesCompiledAndReqSent"] = 13] = "ConditionalApprovalNotesCompiledAndReqSent";
  ///<summary>تم قبول الموافقة المشروطه وإصدار الرخصة المبدئية وجارى إستكمال إجراءات الرخصة</summary>
  ExternalStatus[ExternalStatus["ReqConditionalApprovalApprovedLicIssuedAndBeingCompleted"] = 14] = "ReqConditionalApprovalApprovedLicIssuedAndBeingCompleted";
  ///<summary>تم رفض الموافقة المشروطه ورفض الطلب</summary>
  ExternalStatus[ExternalStatus["ReqConditionalApprovalRejectedAndReqRejected"] = 15] = "ReqConditionalApprovalRejectedAndReqRejected";
  ///<summary>تم إعتماد الرخصة وإصدارها</summary>
  ExternalStatus[ExternalStatus["LicHasBeenApprovedAndIssued"] = 16] = "LicHasBeenApprovedAndIssued";
})(ExternalStatus || (ExternalStatus = {}));

/***/ }),

/***/ 40779:
/*!*********************************************************************!*\
  !*** ./src/app/modules/features/license/models/license-requests.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internalStatusId": () => (/* binding */ internalStatusId)
/* harmony export */ });
var internalStatusId;
(function (internalStatusId) {
  // None = 0,
  // ///<summary>تم إضافة الطلب</summary>
  // RequestAccepted = 1,
  // ///<summary>تم إرسال الطلب للمدير ولم يتم التوزيع</summary>
  // RequestVerifiedAssignedToAdmin = 2,
  // ///<summary>تم إرسال الطلب للدراسة</summary>
  // RequestIsBeingProcessed = 3,
  // ///<summary>جارى دراسة الطلب</summary>
  // RequestHasBeenSentForReview = 4,
  // ///<summary>تم دراسة الطلب وإرسال الملاحظات</summary>
  // RequestProcessedAndFeedbackSent = 5,
  // ///<summary>تم معالجة الملاحظات وإرسال الطلب</summary>
  // FeedbackProcessedAndRequestSent = 6,
  // ///<summary>تم رفض الطلب</summary>
  // RequestRejected = 7,
  // ///<summary>تم الموافقة على الطلب</summary>
  // RequTheRequestHasBeenApproved = 8,
  // ///<summary>تم إصدار شهادة التأهيل</summary>
  // QualificationCertificateIssued = 9
  ///<summary>مسودة</summary>
  internalStatusId[internalStatusId["Draft"] = 1] = "Draft";
  ///<summary>تحت الدراسة</summary>
  internalStatusId[internalStatusId["UnderStudy"] = 2] = "UnderStudy";
  ///<summary>إرسال الملاحظات</summary>
  internalStatusId[internalStatusId["SendingNotes"] = 3] = "SendingNotes";
  ///<summary>معالجة الملاحظات</summary>
  internalStatusId[internalStatusId["ProcessingNotes"] = 4] = "ProcessingNotes";
  ///<summary>إلغاء الطلب</summary>
  internalStatusId[internalStatusId["RequestCanceled"] = 5] = "RequestCanceled";
  ///<summary>تم قبول الطلب وإصدار الرخصة المبدائية وإستكمال الرخصة</summary>
  internalStatusId[internalStatusId["RequestApprovedAndInitialLicenseIssuedAndBeingCompleted"] = 6] = "RequestApprovedAndInitialLicenseIssuedAndBeingCompleted";
  ///<summary>تم قبول الطلب وإصدار الرخصة وجارى إعتمادها</summary>
  internalStatusId[internalStatusId["RequestApprovedAndLicenseIssuedAndBeingCertified"] = 7] = "RequestApprovedAndLicenseIssuedAndBeingCertified";
  ///<summary>رفض الطلب</summary>
  internalStatusId[internalStatusId["RequestRejected"] = 8] = "RequestRejected";
  ///<summary>استكمال إجراءات ما بعد الرخصة المبدئية</summary>
  internalStatusId[internalStatusId["CompleteProceduresAfterInitialLicenseIssued"] = 9] = "CompleteProceduresAfterInitialLicenseIssued";
  ///<summary>الموافقة المشروطة</summary>
  internalStatusId[internalStatusId["ConditionalApproval"] = 10] = "ConditionalApproval";
  ///<summary>معالجة ملاحظات الموافقة المشروطة</summary>
  internalStatusId[internalStatusId["ProcessingConditionalApprovalNotes"] = 11] = "ProcessingConditionalApprovalNotes";
  ///<summary>دراسة الموافقة المشروطه</summary>
  internalStatusId[internalStatusId["UnderConditionalApprovalStudy"] = 12] = "UnderConditionalApprovalStudy";
  ///<summary>رفض الموافقة المشروطه</summary>
  internalStatusId[internalStatusId["ConditionalApprovalRejected"] = 13] = "ConditionalApprovalRejected";
  ///<summary>تم قبول الموافقة المشروطة</summary>
  internalStatusId[internalStatusId["ConditionalApprovalApproved"] = 14] = "ConditionalApprovalApproved";
  ///<summary>دراسة ما بعد الموافقة المشروطة</summary>
  internalStatusId[internalStatusId["ConditionalApprovalUnderStudy"] = 15] = "ConditionalApprovalUnderStudy";
  ///<summary>معالجة ملاحظات ما بعد الموافقة المشروطة</summary>
  internalStatusId[internalStatusId["ConditionalApprovalProcessingNotes"] = 16] = "ConditionalApprovalProcessingNotes";
  ///<summary>إعتماد الطلب</summary>
  internalStatusId[internalStatusId["RequestCertified"] = 17] = "RequestCertified";
  ///<summary>تم إعتماد الطلب وإصدار الرخصة</summary>
  internalStatusId[internalStatusId["RequestCertifiedAndFinallicenseIssued"] = 18] = "RequestCertifiedAndFinallicenseIssued";
})(internalStatusId || (internalStatusId = {}));

/***/ }),

/***/ 68104:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/features/license/services/license-request-header.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseRequestHeaderService": () => (/* binding */ LicenseRequestHeaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/configurations/shared.config */ 6311);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 63448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86793);





class LicenseRequestHeaderService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  getLicensesRequests(pageIndex, pageSize, searchText, currentSortColumn, currentSortOrder) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchText", searchText);
    if (currentSortOrder) {
      queryParams = queryParams.set("sortType", currentSortOrder);
    }
    if (currentSortColumn) {
      queryParams = queryParams.append("columnName", currentSortColumn);
    }
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.GetLicenseRequests}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  getLicenseRequestsByEmployeeId(pageIndex, pageSize, searchText) {
    let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchText", searchText);
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.GetLicenseRequestsByEmployeeId}`, {
      params: queryParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.data;
    }));
  }
  GetLicenseRequestHeaderByRequestId(requestId) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.GetFacilityByRequestId}/${requestId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  GetCertifiedLicenseData(id) {
    return this._httpClient.get(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.GetCertifiedLicenseData}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
  UpdateCertifiedLicenseData(updateCertifiedLicenseDataDto, id) {
    return this._httpClient.put(src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.UpdateCertifiedLicenseData + '/' + id, updateCertifiedLicenseDataDto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res.isDone ? res : null;
    }));
  }
  Delete(id) {
    return this._httpClient.delete(`${src_app_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.LicenseRequestHeader.Delete}?id=${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    }));
  }
}
LicenseRequestHeaderService.ɵfac = function LicenseRequestHeaderService_Factory(t) {
  return new (t || LicenseRequestHeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
LicenseRequestHeaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LicenseRequestHeaderService,
  factory: LicenseRequestHeaderService.ɵfac
});

/***/ }),

/***/ 37086:
/*!*********************************************************************!*\
  !*** ./src/app/shared/models/sys-file-manager-create-update-dto.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SysFileManagerCreateUpdateDto": () => (/* binding */ SysFileManagerCreateUpdateDto)
/* harmony export */ });
class SysFileManagerCreateUpdateDto {
  constructor() {
    this.id = '00000000-0000-0000-0000-000000000000';
    this.fileDescription = "";
    this.filePath = "";
    this.fileType = "";
  }
}

/***/ }),

/***/ 82705:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/lookups/city-service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityService": () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var _core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/configurations/shared.config */ 6311);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 20965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86793);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63448);




class CityService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getList() {
    let url = `${_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.City.GetDropDown}`;
    return this.httpClient.get(url);
  }
  getListWithChambersOfCommerceCityCodeAsync() {
    return this.httpClient.get(`${_core_configurations_shared_config__WEBPACK_IMPORTED_MODULE_0__.Configuration.APIs.City.GetListWithChambersOfCommerceCityCodeAsync}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    }));
  }
}
CityService.ɵfac = function CityService_Factory(t) {
  return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
CityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CityService,
  factory: CityService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_features_facilities_services_facilityProfile_national-address-service-236471.js.map