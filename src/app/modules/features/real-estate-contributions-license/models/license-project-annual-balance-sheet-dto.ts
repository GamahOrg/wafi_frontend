import { SysYearCreateUpdateDto } from "./sys-year-create-update-dto";

export class LicenseProjectAnnualBalanceSheetDto {
    public id: string = "";
    public   yearId :string="";
    public   year = new SysYearCreateUpdateDto;
    public   licenseProjectFeasibilityStudyId:string="";
    public  findings :number|null=null;
    public  currentAssets :number|null=null;
    public  cashAndCashEquivalents :number|null=null;
    public  nonCurrentAssets :number|null=null;
    public  netCurrentAssets :number|null=null;
    public  preOperatingExpenses :number|null=null;
    public  employeeEndOfServiceAllowance :number|null=null;
    public  leaveAllowanceForEmployees :number|null=null;
    public  emergencyAllowance :number|null=null;
    public  projectPropertyRights :number|null=null;
    public  capital :number|null=null;
    public  profitsLossesMade :number|null=null; 
    public  groupOfCurrentAssets:number|null=null;
    public  totalCurrentAndNonCurrent:number|null=null;
    public  totalAssets:number|null=null;
    public  total:number|null=null;
    public  totalLiabilitiesAndRightsProperty:number|null=null;
}
