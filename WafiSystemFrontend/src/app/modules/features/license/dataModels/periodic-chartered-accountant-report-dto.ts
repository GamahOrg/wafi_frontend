import { CustomerShortDto } from "../models/facility-short-dto";
import { SysFileManagerCreateUpdateDto } from "../models/license-request-project-details-dto";
import { LicenseProjectBuyerDto } from "./license-project-buyer-dto";
import { LiceneProjectBeneficiaryTypeDto, LicenseProjectExchangeDocumentMainItemDto, LicenseProjectExchangeDocumentSubItemDto } from "./license-project-exchange-document-paging-dto";
import { LicenseProjectDto } from "./license-project-risk-dto";

export interface PeriodicCharteredAccountantReportDto {
    id:string;
     licenseProjectId:string;
      reportTypeId :number;
     quarterTypeId  :number;
     month  :number;
     year  :number;
     fromDate : Date;
     toDate: Date;
    //وثائق الصرف خلال فترة التقرير
      exchangeDocuments :PeriodicCharteredAccountantReportExchangeDocumentDto[];
   
    //اسم مكتب المحاسب القانونى
     charteredAccountantOfficeName :string;
   
    //نوع الوحدات
     unitType :string;
    //اجمالى عدد الوحدات
     totalUnitNumber :number
    //أمين الحساب
    accountKeeper :string;
    //رقم حساب الضمان
      accountNumber:string;
   
    //رقم ترخيص بيع وحدة على الخارطة
   
     certificateNumber :string;
    //بيانات معد التقرير
      customerId :string;
       customer: CustomerShortDto
    //سعر الأرض
     landPrice :number
    //اجمالى قيمة وحدات المشروع
     totalUnitsAmount:number
    //اجمالى قيمة تكاليف المشروع المتوقعة (تكاليف انشائية وغير انشائية)
     totalCost:number
    //التكلفة الانشائة المتوقعة
     expectedConstructionCost :number
    //هامش الربح المتوقع
     expectedProfile :number
  
   
 
  //العمليات المالية خلال الفترة (من حساب الضمان)
     financialTransactionsDuringPeriodFromEscrowAccountId:string
       financialTransactionsDuringPeriodFromEscrowAccount :FinancialTransactionsDuringPeriodFromEscrowAccountDto;
  
   
   
 
     financialTransactionsBeginningOfProjectFromEscrowAccountId:string
       financialTransactionsBeginningOfProjectFromEscrowAccount :FinancialTransactionsBeginningOfProjectFromEscrowAccountDto;
   

   
   
      financialTransactionsDuringPeriodOutEscrowAccountId:string
       financialTransactionsDuringPeriodOutEscrowAccount :FinancialTransactionsDuringPeriodOutEscrowAccountDto;

   
     financialTransactionsBeginningOfProjectOutEscrowAccountId :string
       financialTransactionsBeginningOfProjectOutEscrowAccount :FinancialTransactionsBeginningOfProjectOutEscrowAccountDto;
   
    //إجمالى العمليات المدينة
    totalDebtOperations :number
    //إجمالى العمليات الدائنة
     totalCreditOperations :number
   
   
    //رصيد افتتاح الفترة
     periodOpeningBalance :number
    //رصيد اغلاق الفترة
      periodClosingBalance :number
   
       projectUnitsPositionAnalysis :ProjectUnitsPositionAnalysisDto[];
   
       paymentsCollectedForCancelledUnitsSolds :PaymentsCollectedForCancelledUnitsSoldDto[];
   
    //جدول ادناه يوضح الإيداعات التي لم تظهر في حساب البنك حتى تاريخه “يستطيع إضافة أكثر من عنصر”
      periodicCharteredAccountantReportDeposits :PeriodicCharteredAccountantReportDepositDto[];
    //جدول ادناه يوضح دفعات لم يتم خصمها في حساب البنك حتى تاريخه “يستطيع إضافة أكثر من عنصر”
      periodicCharteredAccountantReportBatches :PeriodicCharteredAccountantReportBatchDto[];
   
   
   
   
      periodicCharteredAccountantReportFinancialConstraintId :string;
       periodicCharteredAccountantReportFinancialConstraint :PeriodicCharteredAccountantReportFinancialConstraintDto;
   
   
     resultsAndRecommendations:string;
   
     financialCenterFiles :FinancialCenterFileDto[];
       LicenseProject :LicenseProjectDto;
       reportType :PeriodicCharteredAccountantReportTypeDto;
       quarterType: PeriodicCharteredAccountantReportQuarterTypeDto;
}
export interface FinancialCenterFileDto
{
    id:string;
    periodicCharteredAccountantReportId :string;
   fileId :string;
   file :SysFileManagerCreateUpdateDto;
}
export interface PeriodicCharteredAccountantReportTypeDto
{
    id:number;
    name :string;
   
}
export interface PeriodicCharteredAccountantReportQuarterTypeDto
{
    id:number;
    name :string;
   
}
export enum PeriodicCharteredAccountantReportQuarterTypeEnum
{
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4
}
export enum PeriodicCharteredAccountantReportTypeEnum
{
    
        //شهرى
        Monthly = 1,
        //ربعى
        Quarter = 2,
        //عن فترة
        Period = 3
}
export interface PeriodicCharteredAccountantReportFinancialConstraintDto
{
    id:string;
    periodicCharteredAccountantReportId :string;
//النسبة المسموح بها للمصاريف الإدارية والتسويقية
 allowablePercentageOfAdministrativeMarketingExpenses :number;
//إجمالي قيمة الوحدات المباعة والمحصل قيمتها
 totalValueOfUnitsSoldAndCollected :number;
//الحد المسموح التصرف به للمصاريف الإدارية والتسويقية
 allowedLimitForAdministrativeMarketingExpenses :number;
//إجمالي المبالغ الإدارية والتسويقية التي تم صرفها منذ بداية المشروع
 totalAdministrativeMarketingAmountsFromBeginningOfProject :number;
//المبلغ المتبقى
 remainingAmount :number;
//النسبة الواجب توفرها بحساب الحفظ
 percentageRequiredForSavingAccount :number;

//مبلغ الحافز
 incentiveAmount :number;
//هل نسبة تحصيل المبيعات وصلت الى 80% من اجمالى قيمة المبيعات
salesRateReached80Percentage :boolean;
//قيمة استرداد الدفعة الأولى
 firstPaymentRefundValue :number;
//هل نسبة تحصيل المبيعات وصلت الى 90% من اجمالى قيمة المبيعات
 salesRateReached90Percentage :boolean;
//قيمة استرداد الدفعة الثانية
 secondPaymentRefundValue :number;

}
export interface PeriodicCharteredAccountantReportBatchDto
{
    id:string;
     periodicCharteredAccountantReportId :string;
//رقم الوحدة السكنية/نوع التكاليف
 unitCodeOrExpenseType :string;
//رقم الشيك
 checkNumber :number;
//تاريخ التوريد
supplyDate :Date;
//المبلغ بالريال
 riyalsAmount :number;
//تاريخ الخصم فى البنك
 bankDebitDate :Date;

}
export interface PeriodicCharteredAccountantReportDepositDto
{
    id:string;
    periodicCharteredAccountantReportId :string;
//رقم الوحدة السكنية/نوع التكاليف
unitCodeOrExpenseType :string;
//رقم الشيك
checkNumber :number;
//تاريخ التوريد
supplyDate :Date;
//المبلغ بالريال
riyalsAmount :number;
//تاريخ الخصم فى البنك
depositDate :Date;
}
export interface PaymentsCollectedForCancelledUnitsSoldDto
{
id:string;
periodicCharteredAccountantReportId :string;
//اسم المشترى
buyerName :string;
//رقم الوحدة
unitCode :string;
//سعر الوحدة
 price :number;
//تاريخ الالغاء
cancelledDate :Date;
//ما تم دفعة خلال الفترة - الدفعات التى تم ارجاعها
 paidDuringPeriod:number;
//إجمالى الدفعات
 totalPayments:number;
//المتبقى
 remainingUnitPrice :number;
}
export interface ProjectUnitsPositionAnalysisDto
{
    id:string;
    periodicCharteredAccountantReportId :string;
//نوع الوحدات
  unitsType:string;
//إجمالى وحدات المشروع -عدد
 totalNumberLicenseProjectUnits :number;
//إجمالى وحدات المشروع - نسبة
 totalPercentageLicenseProjectUnits :number;
//إجمالى وحدات المشروع - قيمة
 totalValueLicenseProjectUnits :number;
//إجمالى الوحدات المباعة خلال الفترة - عدد
  totalNumberLicenseProjectUnitsSold :number;

//إجمالى الوحدات المباعة خلال الفترة - نسبة
 totalPercentageLicenseProjectUnitsSold :number;

//إجمالى الوحدلات المباعة خلال الفترة - قيمة
  totalValueLicenseProjectUnitsSold :number;

//إجمالى الوحدات المباعة منذ بداية المشروع -عدد
 totalNumberLicenseProjectUnitsSoldFromBeginning :number;
//إجمالى الوحدات المباعة منذ بداية المشروع - قيمة
  totalValueLicenseProjectUnitsFromBeginning :number;
//إجمالى الوحدات المباعة منذ بداية المشروع - نسبة
 totalPercentageLicenseProjectUnitsSoldFromBeginning :number;

//إجمالى الوحدات المتبقة للمشروع
 totalRemainingUnits :number;
//إجمالى الوحدات المتبقة للمشروع بناء على ما تم الحصول عليه من الشركة - قيمة
  totalValueRemainingUnits :number;

//إجمالى الوحدات المتبقة للمشروع بناء على ما تم الحصول عليه من الشركة - نسبة
 totalPercentageRemainingUnits :number;

//إجمالى المبالغ المحصلة من الوحدات المباعة
 totalAmountForUnitsSold :number;
//نسبة التحصيل من إجمالى قيمة الوحدات المباعة
  percentageTotalValueOfUnitsSold :number;
}
export interface FinancialTransactionsBeginningOfProjectOutEscrowAccountDto
{
    id:string;
     periodicCharteredAccountantReportId :string;
//تكاليف انشائية
 constructionCosts :number
//مصاريف ادارية وتسويقية
 administrativeMarketingExpenses :number
//ايداعات عملاء مستردة
 customerDepositRefunds :number
//عمولات بنكية
 bankCommissions :number
//أخرى مدينة
 otherDebts :number

//إجمالى العمليات المدينة
 totalDebtOperations :number

//تحصيل من العملاء
 collectionsFromCustomers :number
//تمويل بنكى
 bankFinancing :number
//تمويل ذاتى
 selfFinancing :number
//تمويل الوزارة
 ministryFinancing :number
//أخرى دائنة
 otherCredits :number
//إجمالى العمليات الدائنة
 totalCreditOperations :number
}
export interface FinancialTransactionsDuringPeriodOutEscrowAccountDto
{
    id:string;
    periodicCharteredAccountantReportId :string;
    //تكاليف انشائية
    constructionCosts :number
    //مصاريف ادارية وتسويقية
     administrativeMarketingExpenses :number
    //ايداعات عملاء مستردة
     customerDepositRefunds :number
    //عمولات بنكية
     bankCommissions :number
    //أخرى مدينة
     otherDebts :number
   
    //إجمالى العمليات المدينة
    totalDebtOperations :number
    //تحصيل من العملاء
     collectionsFromCustomers :number
    //تمويل بنكى
    bankFinancing :number
    //تمويل ذاتى
     selfFinancing :number
    //تمويل الوزارة
    ministryFinancing :number
    //أخرى دائنة
     otherCredits :number
   
    //إجمالى العمليات الدائنة
    totalCreditOperations :number
}
export interface FinancialTransactionsBeginningOfProjectFromEscrowAccountDto
{
    id:string;
     periodicCharteredAccountantReportId :string;
//تكاليف إنشائية (من حساب الضمان)
 constructionCosts :number
//مصاريف إدارية وتسويقية (من حساب الضمان)
 administrativeMarketingExpenses :number
//ايداعات عملاء مستردة
 refundableCustomerDeposits :number
//عمولات بنكية
 bankCommissions :number
//تكاليف انشائية - الحافز الوزارى
 constructionCostsMinisterialIncentiveBankFinancing :number
//تكاليف انشائية - التمويل البنكى
 constructionCostsBankFinancing :number
//مصاريف ادارية وتسويقية - التمويل البنكى
 administrativeMarketingExpensesBankFinancing :number
//أخرى
 otherDebts :number
//إجمالى العمليات المدينة
 totalDebtOperations :number
//تحصيل من العملاء
 collectionsFromCustomers :number
//تمويل بنكى
 bankFinancing :number
//تمويل ذاتى
 selfFinancing :number
//تمويل الوزارة
 ministryFinancing :number
//أخرى دائنة
 otherCredits :number
//إجمالى العمليات الدائنة
 totalCreditOperations :number
}
export interface FinancialTransactionsDuringPeriodFromEscrowAccountDto
{
    id:string;
   periodicCharteredAccountantReportId:string;
//تكاليف إنشائية (من حساب الضمان)
 constructionCosts :number
//مصاريف ادارية وتسويقية (من حساب الضمان)
 administrativeMarketingExpenses :number
//ايداعات عملاء مستردة
 refundableCustomerDeposits :number
//عمولات بنكية
 bankCommissions :number
//تكاليف انشائية - الحافز الوزارى
 constructionCostsMinisterialIncentiveBankFinancing :number
//تكاليف انشائية - التمويل البنكى
 constructionCostsBankFinancing :number
//مصاريف ادارية وتسويقية - التمويل البنكى
 administrativeMarketingExpensesBankFinancing :number
//أخرى
 otherDebts :number

//إجمالي العمليات المدينة
 totalDebtOperations :number
//تحصيل من العملاء
 collectionsFromCustomers :number
//تمويل بنكى
 bankFinancing :number
//تمويل ذاتى
 selfFinancing :number
//تمويل الوزارة
 ministryFinancing :number
//أخرى دائنة
 otherCredits :number

//إجمالى العمليات الدائنة
 totalCreditOperations :number
}
export interface PeriodicCharteredAccountantReportExchangeDocumentDto
{
     id:string;
    periodicCharteredAccountantReportId :string;
    //البند الرئيسى
    mainItemId :number;
    //البند الفراعى
     subItemId :number;
    //رقم الوثيقة
    documnetNumber :string;
    //تاريخ الصرف
    exchangeDate :Date
    //المبلغ
     amount:number;
    //تاريخ الاعتماد
     approvalDate :Date;
    //البيان
    statment :string;
    //المستفيد
     liceneProjectBeneficiaryTypeId:number;
    //وصف المستفيد
     beneficiaryDescription:string;
    //سجل المشترين
   licenseProjectBuyerId:string;
    liceneProjectBeneficiaryType:LiceneProjectBeneficiaryTypeDto
    mainItem :LicenseProjectExchangeDocumentMainItemDto;
     subItem :LicenseProjectExchangeDocumentSubItemDto
       licenseProjectBuyer: LicenseProjectBuyerDto
}
export interface PeriodicCharteredAccountantReportCreateUpdateDto
{
    id:string;
    licenseProjectId:string;
     reportTypeId :number;
    quarterTypeId  :number;
    month  :number;
    year  :number;
    fromDate : Date;
    toDate: Date;
    //اجمالى قيمة وحدات المشروع
    totalUnitsAmount:number
    //اجمالى قيمة تكاليف المشروع المتوقعة (تكاليف انشائية وغير انشائية)
     totalCost:number
    //التكلفة الانشائة المتوقعة
     expectedConstructionCost :number
    //هامش الربح المتوقع
     expectedProfile :number;
     //العمليات المالية خلال الفترة (من خارج حساب الضمان)
     financialTransactionsDuringPeriodOutEscrowAccountId:string;
      financialTransactionsDuringPeriodOutEscrowAccount :FinancialTransactionsDuringPeriodOutEscrowAccountDto
     //جدول ادناه يوضح الإيداعات التي لم تظهر في حساب البنك حتى تاريخه “يستطيع إضافة أكثر من عنصر”
     periodicCharteredAccountantReportDeposits :PeriodicCharteredAccountantReportDepositDto[];
     //جدول ادناه يوضح دفعات لم يتم خصمها في حساب البنك حتى تاريخه “يستطيع إضافة أكثر من عنصر”
     periodicCharteredAccountantReportBatches:PeriodicCharteredAccountantReportBatchDto[];
    //   النتائج والتوصيات
     resultsAndRecommendations :string;
      //رصيد افتتاح الفترة
      periodOpeningBalance :number
     financialCenterFiles:FinancialCenterFileCreateUpdateDto[];
           
}

export interface FinancialCenterFileCreateUpdateDto
{
    id:string;
    periodicCharteredAccountantReportId:string;
    fileId:string;
}
export interface FilterDto
{
    licenseProjectId:string;
     reportTypeId :number;
    quarterTypeId  :number;
    month  :number;
    year  :number;
    fromDate : Date;
    toDate: Date;
}