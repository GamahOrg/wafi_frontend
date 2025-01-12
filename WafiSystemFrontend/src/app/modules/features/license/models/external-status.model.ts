export enum ExternalStatus {
    ///<summary>مسودة</summary>
    Draft = 1,
    ///<summary>جارى مراجعة الطلب</summary>
    ReqIsBeingReviewed = 2,
    ///<summary>جارى دراسة الطلب</summary>
    ReqIsBeingStudied = 3,
    ///<summary> تم دراسة الطلب وإرسال الملاحظات</summary> 
    ReqStudiedAndFeedbackSent = 4,
    /// <summary>تم معالجة الملاحظات وإرسال الطلب </summary>
    NotesCompiledAndReqSent = 5,
    ///<summary> تم دراسة الطلب وإرسال الملاحظات لمقدم الطلب</summary> 
    ReqStudiedAndFeedbackSentForCustomer = 6,
    ///<summary>تم قبول الطلب وإصدار الرخصه وجارى إعتمادها</summary>
    ReqApprovedLicIssuedAndBeingCertified = 7,
    ///<summary>تم قبول الطلب وإصدار الرخصه المبدئية وجارى إستكمال إجراءات الرخصه</summary>
    ReqApprovedInitialLicIssuedAndBeingCompleted = 8,
    ///<summary>تم الموافقة المشروطه على الطلب</summary>
    ReqHasConditionalApproval = 9,
    ///<summary>تم الموافقة المشروطه على الطلب وارسال الشروط لمقدم الطلب</summary>
    ReqHasConditionalApprovalConditionsSentForCustomer = 10,
    ///<summary>تم رفض الطلب</summary>
    ReqRejected = 11,
    ///<summary>تم قبول الموافقة المشروطه وإصدار الرخصه وجارى إعتمادها</summary>
    ReqConditionalApprovalApprovedLicIssuedAndBeingCertified = 12,
    ///<summary>تم معالجة شروط الموافقة المشروطه وإرسال الطلب</summary>
    ConditionalApprovalNotesCompiledAndReqSent = 13,
    ///<summary>تم قبول الموافقة المشروطه وإصدار الرخصه المبدئية وجارى إستكمال إجراءات الرخصه</summary>
    ReqConditionalApprovalApprovedLicIssuedAndBeingCompleted = 14,
    ///<summary>تم رفض الموافقة المشروطه ورفض الطلب</summary>
    ReqConditionalApprovalRejectedAndReqRejected = 15,
    ///<summary>تم إعتماد الرخصه وإصدارها</summary>
    LicHasBeenApprovedAndIssued = 16
}
