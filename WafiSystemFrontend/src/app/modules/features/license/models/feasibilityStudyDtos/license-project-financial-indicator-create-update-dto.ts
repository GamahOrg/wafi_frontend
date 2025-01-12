export class LicenseProjectFinancialIndicatorCreateUpdateDto {
    
    public id:string="";
    public  yearId :string="";
    public  LicenseProjectFeasibilityStudyId :string="";
    public  totalProfit :number|null=null;
    public  netProfit :number|null=null;
    public  returnOnEquityInTheProject:number|null=null;
    public  returnOnProjectAssets :number|null=null;
    public  averageNetProfitLoss :number|null=null;
    public  assetsYearToYear :number|null=null;
    public  netRevenue :number|null=null;
    public  netIncreaseDecreaseInCashAndCashEquivalentsDuringTheFiscalYear :number|null=null;
    public  netPresentValue :number|null=null;
}
