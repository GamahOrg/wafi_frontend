export interface LicenseProjectExchangeDocumentPagingDto {
    id:string;
    licenseProjectId :string;
    //البند الرئيسى
    mainItemId :number;
    //رقم الوثيقة
    documnetNumber :string;
    //تاريخ الصرف
    exchangeDate :Date;
    //المبلغ
    amount :number;
    //تاريخ الاعتماد
    approvalDate :Date;
    //رقم الدفعة
    batchNumber :string;
   
      mainItem :LicenseProjectExchangeDocumentMainItemDto;
}
export interface LicenseProjectExchangeDocumentMainItemDto
{
    id:number;
     name :string;

}
export interface LiceneProjectBeneficiaryTypeDto
{
    id:number;
    name :string;
}
export interface LicenseProjectExchangeDocumentSubItemDto
{
    id:number;
    name :string;
}
export enum LicenseProjectExchangeDocumentMainItemEnum
{
    //تكاليف انشائية
    ConstructionCosts = 1,
    //مصاريف ادارية و تسويقية
    AdministrativeAndMarketingExpenses = 2,
    //حساب الحفظ
    CustodyAccount = 3,
    //ايداعات عملاء مستردة
    RefundableCustomerDeposits = 4,
    //عمولات بنكية
    BankCommissions = 5
}
export enum LicenseProjectExchangeDocumentSubItemEnum
{
    //حافز وزارى
    MinisteriaIncentive = 1,
    //تمويل بنكى
    BankFinancing = 2,
    //تمويل ذاتى
    SelfFinancing = 3,
    //حساب الضمان
    EscrowAccount = 4,
    //أعمال
    Business = 5
}

export enum LiceneProjectBeneficiaryTypeEnum
{
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
    Others
}