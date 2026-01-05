import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { Customer } from "../../qualifying/dataModels/customer.model";
import { EmployeeLookupDto } from "./project-business-case-report-dto";
import { SysLicenseRequestTypeCreateUpdateDto } from "./sys-license-request-type-create-update-dto";

export interface licenseRequest {
  id: string,
  isRenewal: boolean;
  assignedOn: Date,
  requestCode: string,
  licenseRequestTypeId: string,
  period: number,
  price: number,
  requestFrom: Date,
  requestTo: null,
  ownerEmployeeId: null,
  requestOn: Date,
  isStudyNotAvailable: boolean,
  internalStatusId: internalStatusId,
  externalStatusId: number,
  internalStatus: null,
  externalStatus: null,
  isLocked: boolean,
  lockedOn: Date,
  lockedByEmployeeId: null,
  availableForRenew: null,
  lockReason: null,
  customerId: string,
  licenseProjectId: string,
  facilityId: string,
  createdOn: Date,

  facility: {
    facilityCode: string;
    commercialRegisterNumber: string;
    facilityName: string;
    id: string;
  },
  licenseProject?:{
    name:string
  }
  customer?: Customer,
  creatorEmployee?: CreatorEmployeeDto,
  licenseRequestType: SysLicenseRequestTypeCreateUpdateDto
  periodTypeId: number,
  periodType: periodType
}

export interface CreatorEmployeeDto{
  employeeName: string;
  profileImageFile: SysFileManagerCreateUpdateDto | null;
  nidnumber: string;
  id: string;
}

export enum internalStatusId {
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
  Draft = 1,
  ///<summary>تحت الدراسة</summary>
  UnderStudy = 2,
  ///<summary>إرسال الملاحظات</summary>
  SendingNotes = 3,
  ///<summary>معالجة الملاحظات</summary>
  ProcessingNotes = 4,
  ///<summary>إلغاء الطلب</summary>
  RequestCanceled = 5,
  ///<summary>تم قبول الطلب وإصدار الرخصة المبدائية وإستكمال الرخصة</summary>
  RequestApprovedAndInitialLicenseIssuedAndBeingCompleted = 6,
  ///<summary>تم قبول الطلب وإصدار الرخصة وجارى إعتمادها</summary>
  RequestApprovedAndLicenseIssuedAndBeingCertified = 7,
  ///<summary>رفض الطلب</summary>
  RequestRejected = 8,
  ///<summary>استكمال إجراءات ما بعد الرخصة المبدئية</summary>
  CompleteProceduresAfterInitialLicenseIssued = 9,
  ///<summary>الموافقة المشروطة</summary>
  ConditionalApproval = 10,
  ///<summary>معالجة ملاحظات الموافقة المشروطة</summary>
  ProcessingConditionalApprovalNotes = 11,
  ///<summary>دراسة الموافقة المشروطه</summary>
  UnderConditionalApprovalStudy = 12,
  ///<summary>رفض الموافقة المشروطه</summary>
  ConditionalApprovalRejected = 13,
  ///<summary>تم قبول الموافقة المشروطة</summary>
  ConditionalApprovalApproved = 14,
  ///<summary>دراسة ما بعد الموافقة المشروطة</summary>
  ConditionalApprovalUnderStudy = 15,
  ///<summary>معالجة ملاحظات ما بعد الموافقة المشروطة</summary>
  ConditionalApprovalProcessingNotes = 16,
  ///<summary>إعتماد الطلب</summary>
  RequestCertified = 17,
  ///<summary>تم إعتماد الطلب وإصدار الرخصة</summary>
  RequestCertifiedAndFinallicenseIssued = 18
}

export interface periodType {
  name: string;
  id: number
}
