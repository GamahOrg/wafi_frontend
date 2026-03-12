export interface LicenseProjectExchangeDocumentPagingDto {
  id: string;
  licenseProjectId: string;
  //البند الرئيسى
  mainItemId: number;
  //رقم الوثيقة
  documnetNumber: string;
  //تاريخ الصرف
  exchangeDate: Date;
  //المبلغ
  amount: number;
  //تاريخ الاعتماد
  approvalDate: Date;
  //رقم الدفعة
  batchNumber: string;
  //  البيان
  statment: string;
  // رقم الحساب الرئيسي
  accountNumber: string;
  //البند الرئيسي
  mainItem: LicenseProjectExchangeDocumentMainItemDto;
  //   البند الفرعي
  subItem: LicenseProjectExchangeDocumentSubItemDto;
  //المستفيد
  liceneProjectBeneficiaryType: LiceneProjectBeneficiaryTypeDto;
}

export interface LicenseProjectExchangeDocumentMainItemDto {
  id: number;
  name: string;
}

export interface LicenseProjectExchangeDocumentSubItemDto {
  id: number;
  name: string;
}

export interface LiceneProjectBeneficiaryTypeDto {
  id: number;
  name: string;
}

export interface LiceneProjectBeneficiaryTypeDto {
  id: number;
  name: string;
}

export interface LicenseProjectExchangeDocumentSubItemDto {
  id: number;
  name: string;
}
export interface LicenseProjectExchangeDocumentMainSubItemDto {
  subItemId: LicenseProjectExchangeDocumentSubItemEnum;
  mainItemId: LicenseProjectExchangeDocumentMainItemEnum;
  subItem: string;
  mainItem: string;
}
export enum LicenseProjectExchangeDocumentMainItemEnum {
  //حساب الضمان
  EscrowAccount = 1,
  //حافز وزارى
  MinisteriaIncentive = 2,
  //تمويل بنكى
  BankFinancing = 3,
  //تمويل ذاتى
  SelfFinancing = 4,
  //ايداعات عملاء مستردة
  RefundableCustomerDeposits = 5,
  //عمولات بنكية
  BankCommissions = 6,
  //حساب التكاليف الانشائية
  ConstructionCostCalculation = 7,
  //حساب الاداري والتسويقي
  AdministrativeMarketingCostCalculation = 8,
  //حساب الحفظ
  MaintenanceCostCalculation = 9,
}

export enum LicenseProjectExchangeDocumentSubItemEnum {
  //حافز وزارى
  MinisteriaIncentive = 1,
  //تمويل بنكى
  BankFinancing = 2,
  //تمويل ذاتى
  SelfFinancing = 3,
  //حساب الضمان
  EscrowAccount = 4,
  //أعمال
  Business = 5,
}

export enum LiceneProjectBeneficiaryTypeEnum {
  //مقاول
  Contractor = 1,
  //الاستشارى الهندسى
  EngineeringConsultant = 2,
  //وافى
  Wafi = 3,
  //المحاسب القانونى
  CharteredAccountant = 4,
  //مشترى
  Buyer = 5,
  //أخرى
  Others,
  //مورد
  Supplier = 7,
}

export enum LicenseProjectExchangeDocumentSubItemEnum {
  //تكاليف انشائية
  ConstructionCosts = 1,
  //مصاريف ادارية و تسويقية
  AdministrativeAndMarketingExpenses = 2,
  //حساب الحفظ
  CustodyAccount = 3,
  //استرداد عملاء
  CustomerRefund = 4,
  //استرداد الحافز
  IncentiveRefund = 5,
  //بنية فوقية
  Superstructure = 6,
  //بنية تحتية
  Infrastructure = 7,
  //أخرى
  Others = 8,
}

export enum LicenseProjectExchangeDocumentStatusEnum {
  PendingApproval = 1, // قيد الاعتماد
  Approved = 2, // معتمد
  Rejected = 3, // مرفوض
  IssuedDocument = 4, // تم إصدار وثيقة الصرف
  UnderEscrowAccountsReview = 5, //قيد مراجعة إدارة حسابات الضمان
}

export interface LicenseProjectExchangeDocumentWithdrawalMethodDto {
  id: number;
  name: string;
}

export interface LicenseProjectExchangeDocumentInsuranceCompanyDto {
  id: number;
  name: string;
}
export enum LicenseProjectExchangeDocumentWithdrawalMethodEnum {
  Insurance = 1,
  BankGuarantee = 2,
  CompletionOfCalendarYear = 3,
}
export enum LicenseProjectExchangeDocumentInsuranceCompanyEnum {
  Takaful = 1,
  Malath = 2,
  Tawuniya = 3,
  Other,
}

export interface LiceneProjectExchangeDocumentStatusDto {
  id: number;
  name: string;
}
