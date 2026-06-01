export enum LicenseProjectRequestStatusEnum {
  ///<summary>تحت الانشاء</summary>
  UnderCreation = 0,

  ///<summary>جديد</summary>
  New = 1,

  ///<summary>انتهاء عمل أحد الأطراف</summary>
  PartyStudyFinished = 2,

  ///<summary>انتهاء دراسة جميع الأطراف</summary>
  PartiesStudyFinished = 3,

  ///<summary>تحت الدراسة</summary>
  UnderStudy = 4,

  ///<summary>معالجة الملاحظات</summary>
  CustomerFeedback = 5,

  ///<summary>تم إعادة المعالجة بعد الملاحظات</summary>
  RevisedAfterFeedback = 6,

  ///<summary>مقبول</summary>
  Approved = 7,

  ///<summary>مرفوض</summary>
  Rejected = 8,

  ///<summary>مرسل لأطراف الطلب</summary>
  SendToParties = 9,

  ///<summary>تم اعتماد الطلب</summary>
  Certified = 10,

  ///<summary>تم سداد الفاتورة</summary>
  PaidInvoice = 11,

  ///<summary>قيد إصدار فاتورة سداد</summary>
  PaymentInvoicePending = 12,

  ///<summary>ملغي لعدم السداد</summary>
  CancelledDueToNonPayment = 13,

  ///<summary>قيد موافقة ملاك الصكوك</summary>
  PendingDeedOwnersApproval = 14,

  ///<summary>قيد استكمال الاستشاري والمحاسب</summary>
  PendingConsultantAndAccountantCompletion = 15,

  ///<summary>قيد موافقة المشترين</summary>
  PendingBuyersApproval = 16,

  ///<summary>قيد سداد الفاتورة</summary>
  PendingPayment = 17,

  ///<summary>ملغي لرفض ملاك الصكوك</summary>
  CancelledDeedOwnersRejection = 18,

  ///<summary>ملغي لعدم المعالجة</summary>
  CancelledNoProcessing = 19,

  ///<summary>ملغي لعدم استكمال الاستشاري أو المحاسب</summary>
  CancelledConsultantOrAccountantIncomplete = 20,

  ///<summary>ملغي لرفض المشترين</summary>
  CancelledBuyersRejection = 21,

  ///<summary>ملغي لانتهاء مهلة موافقات الملاك</summary>
  CancelledDeedOwnersApprovalTimeout = 23,

  ///<summary>قيد استكمال الاستشاري والمحاسب بعد الملاحظات</summary>
  PendingConsultantAndAccountantCompletionAfterNotes = 24,

  ///<summary>قيد اعتماد المحاسب الجديد</summary>
  PendingAccountantApproval = 25,

  ///<summary>مرفوض من المحاسب الجديد</summary>
  RejectedFromNewAccountant = 26,

  ///<summary>قيد اعتماد الاستشاري الجديد</summary>
  PendingEngineeringApproval = 27,

  ///<summary>مرفوض من الاستشاري الجديد</summary>
  RejectedFromNewConsultant = 28
}
