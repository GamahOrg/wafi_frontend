import { SysYearCreateUpdateDto } from "./sys-year-create-update-dto";

export class LicenseProjectAnnualCashFlowDto {
    public id: string = "";
    public   yearId :string|null=null;
    public  year =new SysYearCreateUpdateDto;
    public   licenseProjectFeasibilityStudyId :string="";
    public  cashFlowsCollectedForTheProject :number|null=null;
    public  amountsCollectedFromOperationsSaleUnits :number|null=null;
    public  totalCashFlowsCollected :number|null=null;
    public  projectCashFlows :number|null=null;
    public  contractorPayments :number|null=null;
    public  marketingAndAdvertisingPayments :number|null=null;
    public  designPayments :number|null=null;
    public  supervisionPayments:number|null=null;
    public  paymentsOfAdministrativeAndGeneralFees:number|null=null;
    public  landCostPayments :number|null=null;
    public  pcPurchasePayments :number|null=null;
    public  zakatPayments :number|null=null;
    public  loanPaidToOwnerOfTheProjectExpectedFinancingFees :number|null=null;
    public  totalCashFlowPaid :number|null=null;
    public  netIncreaseDecreaseInCash :number|null=null;
    public  cashBalanceAtBeginningOfThePeriod :number|null=null;
    public  balanceOfCashAndCashEquivalentsAtTheEndOfThePeriod :number|null=null;
}
