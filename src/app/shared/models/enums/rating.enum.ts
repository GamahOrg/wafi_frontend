export enum RatingTriggerTypeEnum {
  /// المطور العقاري - بعد إصدار الرخصة بنجاح
  DeveloperAfterLicenseIssuance = 1, /// الاستشاري الهندسي - بعد الموافقة على اتفاقية الاستشاري
  EngineeringConsultantAfterAgreementApproval = 2, /// المحاسب القانوني - بعد الموافقة على اتفاقية المحاسب
  CharteredAccountantAfterAgreementApproval = 3, /// المالك - بعد الموافقة على آخر اتفاقية تطوير عقاري
  OwnerAfterDevelopmentAgreementApproval = 4,
  /// <summary>
  /// المطور العقاري - بعد انشاء عقد بيع الوحدة بنجاح
  /// </summary>
  DeveloperAfterContractIssued = 5,
      
  /// <summary>
  /// المشتري - بعد توثيق عقد بيع الوحده بنجاح
  /// </summary>
  BuyerAfterContractDocumented = 6,
  QualificationAfterInvoicePayment = 7,
  QualificationAfterDegreeUpgradeApproval = 8,
  ChangePlanRequestAfterApproval = 9,
  ChangeEngineeringConsultantRequestAfterApproval = 10,
  ChangeCharteredAccountantRequestAfterInvoicePayment = 11,
  /// المطور العقاري - بعد إلغاء تعليق التأهيل
  DeveloperQualificationSuspensionAfterCancellation = 12
}
export enum RatingTypeEnum {
  /// تقييم رضا المستخدم عن سهولة استخدام المنصة
  PlatformUsability = 1, /// تقييم توصية المستخدم للآخرين بالاستفادة من خدمات المنصة
  UserRecommendation = 2, /// تقييم سهولة استخدام خدمة الرخصة الفورية
  InstantLicenseServiceEaseOfUse = 3,
  DeveloperContractDocumentation = 4, // تقييم رضا المطور عن خدمة توثيق العقود
  BuyerContractDocumentation = 5, // تقييم رضا المشتري عن خدمة توثيق العقد الورقي
  BuyerUnifiedContractDocumentation = 6, // تقييم رضا المشتري عن خدمة توثيق العقد الموحد
  QualificationServiceExperience = 7, // تقييم تجربة خدمة التأهيل بعد سداد الفاتورة
  DegreeUpgradeApproval = 8, // تقييم تجربة طلب رفع درجة التأهيل بعد الموافقة
  ChangePlanRequestExperience = 9,
  ChangeEngineeringConsultantRequestExperience = 10,
  ChangeCharteredAccountantRequestExperience = 11,
  /// تقييم تجربة إلغاء تعليق تأهيل المطور العقاري
  DeveloperQualificationSuspensionCancellation = 12,
}
