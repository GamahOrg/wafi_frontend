export enum internalStatusId {
    None = 0,
    ///<summary>تم إضافة الطلب</summary>
    RequestAccepted = 1,
    ///<summary>تم إرسال الطلب للمدير ولم يتم التوزيع</summary>
    RequestVerifiedAssignedToAdmin = 2,
    ///<summary>تم إرسال الطلب للدراسة</summary>
    RequestIsBeingProcessed = 3,
    ///<summary>جارى دراسة الطلب</summary>
    RequestHasBeenSentForReview = 4,
    ///<summary>تم دراسة الطلب وإرسال الملاحظات</summary>
    RequestProcessedAndFeedbackSent = 5,
    ///<summary>تم معالجة الملاحظات وإرسال الطلب</summary>
    FeedbackProcessedAndRequestSent = 6,
    ///<summary>تم رفض الطلب</summary>
    RequestRejected = 7,
    ///<summary>تم الموافقة على الطلب</summary>
    RequTheRequestHasBeenApproved = 8,
    ///<summary>تم إصدار شهادة التأهيل</summary>
    QualificationCertificateIssued = 9,
    ///<summary>تأهيل معلق</summary>
    QualificationSuspended = 16
  }