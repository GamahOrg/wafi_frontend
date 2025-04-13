export enum LicenseInternalStatus {
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
    RequestCertifiedAndFinallicenseIssued = 18
 }
 