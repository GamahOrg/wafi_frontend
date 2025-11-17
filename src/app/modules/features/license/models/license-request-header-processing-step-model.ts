export interface LicenseRequestHeaderProcessingStepDto {
  id: string;
  licenseProjectId: string;
  licenseRequestHeaderId: string;
  stepId: number;
  stepStatusId: number;
  isCurrentStep: boolean;
  startAt: string;
  endAt: string;
  isRequestSent: boolean;
  isFinished: boolean;
  stepStatus: LicenseRequestHeaderStepStatusDto;
  step: LicenseRequestHeaderStepTypeDto;
}

export interface LicenseRequestHeaderStepTypeDto {
  id: number;
  name: string;
  order: number;
  isActive: boolean;
}

export interface LicenseRequestHeaderStepStatusDto {
  id: number;
  name: string;
}

export enum LicenseRequestHeaderStepStatusEnum {
  //تم انشاء الطلب
  RequestCreated = 1,

  //قيد الاعتماد
  PendingApproval = 2,

  //تم اعتماد اتفاقيات الملاك
  OwnersAgreementsApproved = 3,

  //رفض بعض الملاك
  SomeOwnersRejected = 4,

  //تم اعتماد اتفاقيات المحاسب والاستشارى
  AccountantAndConsultantAgreementsApproved = 5,

  //رفض أحد الأطراف
  OnePartyRejected = 6,

  //تم السداد
  PaymentCompleted = 7,

  //فشل النظام
  SystemFailure = 8,

  //إلغاء الرخصة
  LicenseCancelled = 9,

  //فشل التكامل
  IntegrationFailed = 10,

  //رفض البنك
  BankRejected = 11,

  //نجاح التكامل
  IntegrationSucceeded = 12,

  //تم تهميش جميع الصكوك
  AllDeedsMarginalized = 13,

  //تم إصدار الرخصة
  LicenseIssued = 14,
}

export enum LicenseRequestHeaderStepTypeEnum {
  //انشاء طلب الرخصة
  CreateLicenseRequest = 1,

  //إرسال الإتفاقيات لملاك الصكوك
  SendAgreementsToDeedOwners = 2,

  //إرسال الإتفاقيات للمحاسب والاستشارى
  SendAgreementsToAccountantAndConsultant = 3,

  //سداد الفاتورة
  PayInvoice = 4,

  //فتح حساب الضمان
  OpenEscrowAccount = 5,

  //تهميش الصكوك
  MarginalizeDeeds = 6,

  //إصدار الرخصة
  IssueLicense = 7,
}
