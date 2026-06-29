import { LicenseProjectBuyerDto } from '../dataModels/license-project-buyer-dto';
import {
  LiceneProjectBeneficiaryTypeDto,
  LiceneProjectBeneficiaryTypeEnum,
  LicenseProjectExchangeDocumentMainItemDto,
  LicenseProjectExchangeDocumentSubItemDto,
  LiceneProjectExchangeDocumentStatusDto,
  LicenseProjectExchangeDocumentStatusEnum,
  LicenseProjectExchangeDocumentWithdrawalMethodDto,
  LicenseProjectExchangeDocumentWithdrawalMethodEnum,
  LicenseProjectExchangeDocumentInsuranceCompanyDto,
} from '../dataModels/license-project-exchange-document-paging-dto';
import { PaymentsCollectedForSoldUnitsDto } from '../dataModels/periodic-chartered-accountant-report-dto';
import { LicenseProjectFeasibilityStudyFullDto } from './LicenseProjectFeasibilityStudyFullDto';
import {
  LicenseProjectExchangeInsuranceDocumentFile,
  LicenseProjectExchangeBankGuaranteeDocumentFile,
} from './exchange-documents-details-response';
import { CustomerShortDto } from './facility-short-dto';
import { SysFileManagerCreateUpdateDto } from './license-request-project-details-dto';
import {
  PeriodicCharteredAccountantReportQuarterTypeDto,
  PeriodicCharteredAccountantReportQuarterTypeEnum,
  PeriodicCharteredAccountantReportStatusDto,
  PeriodicCharteredAccountantReportStatusEnum,
  PeriodicCharteredAccountantReportTypeDto,
  PeriodicCharteredAccountantReportTypeEnum,
} from './periodic-chartered-accountant-report-paging-list-dto';

export interface PeriodicCharteredAccountantReportDetailsDto {
  id: string;
  licenseProjectName: string;
  facilityName: string;
  depositDate: Date;
  reportTypeId: PeriodicCharteredAccountantReportTypeEnum;
  quarterTypeId?: PeriodicCharteredAccountantReportQuarterTypeEnum;
  reportStatusId?: PeriodicCharteredAccountantReportStatusEnum;
  rejectionNotes?: string;
  year?: number;
  month?: number;
  fromDate: Date;
  toDate: Date;
  createdOn: Date;
  //تاريخ انشاء التقرير
  reportCreationDate?: Date;
  //تاريخ اعتماد التقرير
  approvedOn?: Date;
  //تاريخ رفض التقرير
  rejectedOn?: Date;
  exchangeDocuments: PeriodicCharteredAccountantReportExchangeDocumentDto[];
  // اسم المطور العقاري
  developerName: string;
  //اسم الاستشاري
  engineeringConsultantName?: string;
  //اسم البنك
  bankName?: string;
  //ملحق رقم 1 البيانات الاساسية
  charteredAccountantOfficeName: string;
  // نوع الوحدات
  unitType?: string;
  // إجمالي عدد الوحدات
  totalUnitNumber?: number;
  // أمين الحساب
  accountKeeper?: string;
  // رقم حساب الضمان
  accountNumber?: string;
  // رقم ترخيص بيع وحدة على الخارطة
  certificateNumber?: string;
  // رقم الاتفاقية (يعرض بناءً على المشروع - للعرض فقط)
  agreementNumber?: string;
  // تاريخ الاتفاقية (يعرض بناءً على المشروع - للعرض فقط)
  agreementDate?: Date;
  // بيانات معد التقرير
  customerId: string;
  customer: CustomerShortDto;
  // سعر الأرض
  landPrice?: number;
  // إجمالي قيمة وحدات المشروع
  totalUnitsAmount?: number;
  // إجمالي قيمة تكاليف المشروع المتوقعة (تكاليف انشائية وغير انشائية)
  totalCost?: number;
  // التكلفة الانشائة المتوقعة
  expectedConstructionCost?: number;
  // اجمالي التكلفة الانشائية الفعلية
  actualConstructionCost: number;
  // هامش الربح المتوقع
  expectedProfile?: number;

  // العمليات المالية خلال الفترة (من حساب الضمان)
  financialTransactionsDuringPeriodFromEscrowAccountId?: string;
  financialTransactionsDuringPeriodFromEscrowAccount?: FinancialTransactionsDuringPeriodFromEscrowAccountDto;

  // العمليات المالية منذ البدء بالمشروع (من حساب الضمان)
  financialTransactionsBeginningOfProjectFromEscrowAccountId?: string;
  financialTransactionsBeginningOfProjectFromEscrowAccount?: FinancialTransactionsBeginningOfProjectFromEscrowAccountDto;

  // العمليات المالية خلال الفترة (من خارج حساب الضمان)
  financialTransactionsDuringPeriodOutEscrowAccountId?: string;
  financialTransactionsDuringPeriodOutEscrowAccount?: FinancialTransactionsDuringPeriodOutEscrowAccountDto;

  // العمليات المالية منذ البدء بالمشروع (من خارج حساب الضمان)
  financialTransactionsBeginningOfProjectOutEscrowAccountId?: string;
  financialTransactionsBeginningOfProjectOutEscrowAccount?: FinancialTransactionsBeginningOfProjectOutEscrowAccountDto;

  // إجمالي العمليات المدينة والدائن
  totalDebtOperations?: number;
  totalCreditOperations?: number;

  // حساب الضمان
  periodOpeningBalance?: number;
  periodClosingBalance?: number;
  closingBalanceBasedOnBankStatement?: number;
  bankStatementFile: SysFileManagerCreateUpdateDto;

  // تحليل موقف وحدات المشروع
  projectUnitsPositionAnalysis: ProjectUnitsPositionAnalysisDto[];

  // الدفعات المحصلة والخاصة بالوحدات المباعة الملغية
  paymentsCollectedForCancelledUnitsSolds: PaymentsCollectedForCancelledUnitsSoldDto[];

  // الدفعات المحصلة والخاصة بالوحدات المباعة خلال الفترة
  paymentsCollectedForSoldUnitsDto: PaymentsCollectedForSoldUnitsDto[];

  // الدفعات المحصلة والخاصة بالوحدات المباعة منذ بدأ المشروع
  paymentsCollectedForSoldUnitsFromBeginningDto: PaymentsCollectedForSoldUnitsDto[];

  // الإيداعات والدفعات
  periodicCharteredAccountantReportDeposits: PeriodicCharteredAccountantReportDepositDto[];
  periodicCharteredAccountantReportBatches: PeriodicCharteredAccountantReportBatchDto[];

  // القيود المالية
  periodicCharteredAccountantReportFinancialConstraintId?: string;
  periodicCharteredAccountantReportFinancialConstraint?: PeriodicCharteredAccountantReportFinancialConstraintDto;

  // النتائج والتوصيات
  resultsAndRecommendations?: string;

  // قائمة المركز المالي
  financialCenterFiles: FinancialCenterFileDto[];

  // روابط الكيانات الأخرى
  licenseProject: LicenseProjectDto;
  reportType: PeriodicCharteredAccountantReportTypeDto;
  quarterType: PeriodicCharteredAccountantReportQuarterTypeDto;
  reportStatus: PeriodicCharteredAccountantReportStatusDto;

  // تفاصيل الحسابات الفرعية في حساب الضمان
  constructionCostsAccountNumber?: string;
  constructionCostsAvailableAmount?: number;
  administrativeAndMarketingAccountNumber?: string;
  administrativeAndMarketingAvailableAmount?: number;
  custodyAccountNumber?: string;
  custodyAvailableAmount?: number;
  incentivesSubIBAN?: string;
  incentivesSubIBANAvailableAmount?: number;
  financingSubIBAN?: string;
  financingSubIBANAvailableAmount?: number;
  licenseProjectFeasibilityStudies?: LicenseProjectFeasibilityStudyFullDto[];
  licenseTypeCode?: string;
  rejectionCount: number;
}
//وثائق الصرف خلال فترة التقرير
export interface PeriodicCharteredAccountantReportExchangeDocumentDto {
  mainItemId: LicenseProjectExchangeDocumentMainItemEnum;
  subItemId: LicenseProjectExchangeDocumentSubItemEnum;
  documnetNumber: string;
  exchangeDate: Date;
  amount: number;
  approvalDate: Date;
  statment: string;
  liceneProjectBeneficiaryTypeId: LiceneProjectBeneficiaryTypeEnum;
  beneficiaryDescription: string;
  liceneProjectBeneficiaryType: LiceneProjectBeneficiaryTypeDto;
  mainItem: LicenseProjectExchangeDocumentMainItemDto;
  subItem: LicenseProjectExchangeDocumentSubItemDto;
  licenseProjectBuyer: LicenseProjectBuyerDto;

  // حالة الوثيقة
  statusId?: LicenseProjectExchangeDocumentStatusEnum;
  status?: LiceneProjectExchangeDocumentStatusDto;

  // اسم المستفيد (مشتري)
  buyerName?: string;
  // رقم الآيبان واسم البنك (في حال توفر بيانات التحويل البنكي - مرتبط بالباك إند)
  beneficiaryIban?: string;
  bankName?: string;

  // بند الصرف من جدول الكميات
  sysLicenseRelativeWeight?: { id?: string; elementName?: string };

  // نسبة الإنجاز
  projectProgressPercentage?: number;

  // أرقام الحسابات والأرصدة
  mainAccountNumber?: string;
  subAccountNumber?: string;
  availableAmountBeforeExchange?: number;
  remainingAmountAfterExchange?: number;

  // طريقة سحب مبلغ الحفظ
  withdrawalMethodId?: LicenseProjectExchangeDocumentWithdrawalMethodEnum;
  withdrawalMethod?: LicenseProjectExchangeDocumentWithdrawalMethodDto;

  // بيانات التأمين
  insurancePolicyNumber?: string;
  insuranceStartDate?: Date;
  insuranceEndDate?: Date;
  insuranceCompany?: LicenseProjectExchangeDocumentInsuranceCompanyDto;
  insuranceAttachment?: SysFileManagerCreateUpdateDto;
  licenseProjectExchangeInsuranceDocumentFiles?: LicenseProjectExchangeInsuranceDocumentFile[];

  // مرفق الضمان البنكي
  bankGuaranteeAttachment?: SysFileManagerCreateUpdateDto;
  licenseProjectExchangeBankGuaranteeDocumentFiles?: LicenseProjectExchangeBankGuaranteeDocumentFile[];
}

export interface SysDepositTypeDto {
  id: number;
  name: string;
}

export enum SysDepositTypeEnum {
  //إيداع شيك
  CheckDeposit = 1,
  //إيداع حوالة بنكية
  BankTransferDeposit = 2,
}

export enum LicenseProjectExchangeDocumentMainItemEnum {
  //تكاليف انشائية
  ConstructionCosts = 1,
  //مصاريف ادارية و تسويقية
  AdministrativeAndMarketingExpenses = 2,
  //حساب الحفظ
  CustodyAccount = 3,
  //ايداعات عملاء مستردة
  RefundableCustomerDeposits = 4,
  //عمولات بنكية
  BankCommissions = 5,
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
export interface FinancialTransactionsDuringPeriodFromEscrowAccountDto {
  id: string; // Unique identifier
  periodicCharteredAccountantReportId: string; // Reference to Periodic Chartered Accountant Report

  // تكاليف إنشائية (من حساب الضمان)
  constructionCosts?: number;
  // مصاريف ادارية وتسويقية (من حساب الضمان)
  administrativeMarketingExpenses?: number;
  // ايداعات عملاء مستردة
  refundableCustomerDeposits?: number;
  // عمولات بنكية
  bankCommissions?: number;
  // تكاليف انشائية - الحافز الوزارى
  constructionCostsMinisterialIncentiveBankFinancing?: number;
  // تكاليف انشائية - التمويل البنكى
  constructionCostsBankFinancing?: number;
  // مصاريف ادارية وتسويقية - التمويل البنكى
  administrativeMarketingExpensesBankFinancing?: number;
  // أخرى
  otherDebts?: number;

  // إجمالي العمليات المدينة
  totalDebtOperations?: number;
  // تحصيل من العملاء
  collectionsFromCustomers?: number;
  // تمويل بنكى
  bankFinancing?: number;
  // تمويل ذاتى
  selfFinancing?: number;
  // تمويل الوزارة
  ministryFinancing?: number;
  // أخرى دائنة
  otherCredits?: number;

  // إجمالي العمليات الدائنة
  totalCreditOperations?: number;
}

export interface FinancialTransactionsBeginningOfProjectFromEscrowAccountDto {
  // تكاليف إنشائية (من حساب الضمان)
  constructionCosts?: number;
  // مصاريف إدارية وتسويقية (من حساب الضمان)
  administrativeMarketingExpenses?: number;
  // ايداعات عملاء مستردة
  refundableCustomerDeposits?: number;
  // عمولات بنكية
  bankCommissions?: number;
  // تكاليف انشائية - الحافز الوزارى
  constructionCostsMinisterialIncentiveBankFinancing?: number;
  // تكاليف انشائية - التمويل البنكى
  constructionCostsBankFinancing?: number;
  // مصاريف ادارية وتسويقية - التمويل البنكى
  administrativeMarketingExpensesBankFinancing?: number;
  // أخرى
  otherDebts?: number;

  // إجمالي العمليات المدينة
  totalDebtOperations?: number;
  // تحصيل من العملاء
  collectionsFromCustomers?: number;
  // تمويل بنكى
  bankFinancing?: number;
  // تمويل ذاتى
  selfFinancing?: number;
  // تمويل الوزارة
  ministryFinancing?: number;
  // أخرى دائنة
  otherCredits?: number;

  // إجمالي العمليات الدائنة
  totalCreditOperations?: number;
}

export interface FinancialTransactionsDuringPeriodOutEscrowAccountDto {
  // تكاليف انشائية
  constructionCosts?: number;
  // مصاريف ادارية وتسويقية
  administrativeMarketingExpenses?: number;
  // ايداعات عملاء مستردة
  customerDepositRefunds?: number;
  // عمولات بنكية
  bankCommissions?: number;
  // أخرى مدينة
  otherDebts?: number;

  // إجمالي العمليات المدينة
  totalDebtOperations?: number;
  // تحصيل من العملاء
  collectionsFromCustomers?: number;
  // تمويل بنكى
  bankFinancing?: number;
  // تمويل ذاتى
  selfFinancing?: number;
  // تمويل الوزارة
  ministryFinancing?: number;
  // أخرى دائنة
  otherCredits?: number;

  // إجمالي العمليات الدائنة
  totalCreditOperations?: number;
}

export interface FinancialTransactionsBeginningOfProjectOutEscrowAccountDto {
  // تكاليف انشائية
  constructionCosts?: number;
  // مصاريف ادارية وتسويقية
  administrativeMarketingExpenses?: number;
  // ايداعات عملاء مستردة
  customerDepositRefunds?: number;
  // عمولات بنكية
  bankCommissions?: number;
  // أخرى مدينة
  otherDebts?: number;

  // إجمالي العمليات المدينة
  totalDebtOperations?: number;

  // تحصيل من العملاء
  collectionsFromCustomers?: number;
  // تمويل بنكى
  bankFinancing?: number;
  // تمويل ذاتى
  selfFinancing?: number;
  // تمويل الوزارة
  ministryFinancing?: number;
  // أخرى دائنة
  otherCredits?: number;

  // إجمالي العمليات الدائنة
  totalCreditOperations?: number;
}

export interface ProjectUnitsPositionAnalysisDto {
  // نوع الوحدات
  unitsType?: string;

  // إجمالي وحدات المشروع - عدد
  totalNumberLicenseProjectUnits?: number;

  // إجمالي وحدات المشروع - نسبة
  totalPercentageLicenseProjectUnits?: number;

  // إجمالي وحدات المشروع - قيمة
  totalValueLicenseProjectUnits?: number;

  // إجمالي الوحدات المباعة خلال الفترة - عدد
  totalNumberLicenseProjectUnitsSold?: number;

  // إجمالي الوحدات المباعة خلال الفترة - نسبة
  totalPercentageLicenseProjectUnitsSold?: number;

  // إجمالي الوحدلات المباعة خلال الفترة - قيمة
  totalValueLicenseProjectUnitsSold?: number;

  // إجمالي الوحدات المباعة منذ بداية المشروع -عدد
  totalNumberLicenseProjectUnitsSoldFromBeginning?: number;

  // إجمالي الوحدات المباعة منذ بداية المشروع - قيمة
  totalValueLicenseProjectUnitsFromBeginning?: number;

  // إجمالي الوحدات المباعة منذ بداية المشروع - نسبة
  totalPercentageLicenseProjectUnitsSoldFromBeginning?: number;

  // إجمالي الوحدات المتبقة للمشروع
  totalRemainingUnits?: number;

  // إجمالي الوحدات المتبقة للمشروع بناء على ما تم الحصول عليه من الشركة - قيمة
  totalValueRemainingUnits?: number;

  // إجمالي الوحدات المتبقة للمشروع بناء على ما تم الحصول عليه من الشركة - نسبة
  totalPercentageRemainingUnits?: number;

  // إجمالي المبالغ المحصلة من الوحدات المباعة
  totalAmountForUnitsSold?: number;

  // نسبة التحصيل من إجمالي قيمة الوحدات المباعة
  percentageTotalValueOfUnitsSold?: number;
}

export interface PaymentsCollectedForCancelledUnitsSoldDto {
  // اسم المشترى
  buyerName: string;

  // رقم الوحدة
  unitCode: string;

  // سعر الوحدة
  price: number;

  // تاريخ الإلغاء
  cancelledDate?: Date;

  // ما تم دفعة خلال الربع - الدفعات التى تم ارجاعها
  paidDuringQuarter?: number;

  // ما تم دفعة خلال الفترة - الدفعات التى تم ارجاعها
  paidDuringPeriod?: number;

  // إجمالي الدفعات
  totalPayments: number;

  // المتبقى
  remainingUnitPrice: number;
}

export interface PeriodicCharteredAccountantReportDepositDto {
  // رقم الوحدة السكنية/نوع التكاليف
  unitCodeOrExpenseType: string;

  // نوع الايداع
  sysDepositType: SysDepositTypeDto;

  // رقم الشيك أو الحوالة البنكية
  checkNumber: number;

  // تاريخ التوريد
  supplyDate: Date;

  // المبلغ بالريال
  riyalsAmount: number;

  // تاريخ الإيداع في البنك
  depositDate: Date;
}

export interface PeriodicCharteredAccountantReportBatchDto {
  // رقم الوحدة السكنية/نوع التكاليف
  unitCodeOrExpenseType: string;

  // نوع الايداع
  sysDepositType: SysDepositTypeDto;

  // رقم الشيك أو الحوالة البنكية
  checkNumber: number;

  // تاريخ التوريد
  supplyDate: Date;

  // المبلغ بالريال
  riyalsAmount: number;

  // تاريخ الخصم في البنك
  bankDebitDate: Date;
}

export interface PeriodicCharteredAccountantReportFinancialConstraintDto {
  // النسبة المسموح بها للمصاريف الإدارية والتسويقية
  allowablePercentageOfAdministrativeMarketingExpenses?: number;

  // إجمالي قيمة الوحدات المباعة والمحصل قيمتها
  totalValueOfUnitsSoldAndCollected?: number;

  // الحد المسموح التصرف به للمصاريف الإدارية والتسويقية
  allowedLimitForAdministrativeMarketingExpenses?: number;

  // إجمالي المبالغ الإدارية والتسويقية التي تم صرفها منذ بداية المشروع
  totalAdministrativeMarketingAmountsFromBeginningOfProject?: number;

  // المبلغ المتبقى
  remainingAmount?: number;

  // النسبة الواجب توفرها بحساب الحفظ
  percentageRequiredForSavingAccount?: number;

  // مبلغ الحافز
  incentiveAmount?: number;

  // هل نسبة تحصيل المبيعات وصلت إلى 80% من إجمالي قيمة المبيعات
  salesRateReached80Percentage?: number;

  // قيمة استرداد الدفعة الأولى
  firstPaymentRefundValue?: number;

  // هل نسبة تحصيل المبيعات وصلت إلى 90% من إجمالي قيمة المبيعات
  salesRateReached90Percentage?: number;

  // قيمة استرداد الدفعة الثانية
  secondPaymentRefundValue?: number;
}

export interface FinancialCenterFileDto {
  id: string;
  periodicCharteredAccountantReportId: string;
  fileId: string;
  file: SysFileManagerCreateUpdateDto;
}

export interface LicenseProjectDto {
  name: string;
}
