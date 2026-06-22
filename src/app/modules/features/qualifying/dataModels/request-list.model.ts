import { Customer } from "./customer.model";
import { QualificationRequestType } from "./qualification-request-type.model";
export interface Request {
    id: string,
    assignedOn: Date,
    requestCode: string,
    qualificationRequestTypeId: string,
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
    isRenewal: boolean;
    facilities: {
        facilityCode: string;
        commercialRegisterNumber: string;
        facilityName: string;
        id: string;
    },
    customers: Customer,
    qualificationRequestType: QualificationRequestType

}

export enum internalStatusId {
  //  None = 0,
  //  ///<summary>تم إضافة الطلب</summary>
  //  RequestAccepted = 1,
  //  ///<summary>تم إرسال الطلب للمدير ولم يتم التوزيع</summary>
  //  RequestVerifiedAssignedToAdmin = 2,
  //  ///<summary>تم إرسال الطلب للدراسة</summary>
  //  RequestIsBeingProcessed = 3,
  //  ///<summary>جارى دراسة الطلب</summary>
  //  RequestHasBeenSentForReview = 4,
  //  ///<summary>تم دراسة الطلب وإرسال الملاحظات</summary>
  //  RequestProcessedAndFeedbackSent = 5,
  //  ///<summary>تم معالجة الملاحظات وإرسال الطلب</summary>
  //  FeedbackProcessedAndRequestSent = 6,
  //  ///<summary>تم رفض الطلب</summary>
  //  RequestRejected = 7,
  //  ///<summary>تم الموافقة على الطلب</summary>
  //  RequTheRequestHasBeenApproved = 8,
  //  ///<summary>تم إصدار شهادة التأهيل</summary>
  //QualificationCertificateIssued = 9,
  ///<summary>تحت الدراسة</summary>
  UnderStudy = 1,
  ///<summary>إرسال الملاحظات</summary>
  SendingNotes = 2,
  ///<summary>معالجة الملاحظات</summary>
  ProcessingNotes = 3,
  ///<summary>تحت الدراسة بعد معالجة الملاحظات</summary>
  UnderStudyAfterProcessingNotes = 4,
  ///<summary>قبول الطلب وإصدار شهادة التأهيل</summary>
  RequestApproved = 5,
  ///<summary>رفض الطلب</summary>
  RequestRejected = 6,
  ///<summary>إلغاء الطلب </summary>
  RequestCanceled = 7,
  ///<summary>إصدار فاتورة سداد </summary>
  IssuingPaymentInvoice = 8,
  /// <summary>
  /// تم سداد الفاتورة
  /// </summary>
  PaidInvoice = 9,
  /// <summary>
  /// ملغي لعدم السداد
  /// </summary>
  CancelledDueToNonPayment = 10,
  /// <summary>
  /// منتهية
  /// </summary>
  Expired = 11,

  CancelledDueToNonProcessing = 12,
  /// <summary>
  ///قيد إصدار فاتورة
  /// </summary>
  PendingInvoiceIssuance = 13,
  ///<summary>مشطوب</summary>
  RequestRemoved = 14,
  /// <summary>
  ///معتمد
  /// </summary>
  Certified = 15,
  ///<summary>تأهيل معلق</summary>
  QualificationSuspended = 16,

}



