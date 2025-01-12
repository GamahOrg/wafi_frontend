import { SysYearCreateUpdateDto } from "./sys-year-create-update-dto";

export class LicenseProjectExpectedIncomeDto {
    public id: string = "";
    public  yearId: string="";
    public year=new  SysYearCreateUpdateDto;
    public  licenseProjectFeasibilityStudyId : string="";
    public  totalRevenue :number|null=null;
    public  landCost :number|null=null;
    public  costs :number|null=null;
    public  advancePayments:number|null=null;
    public  infrastructureWorks :number|null=null;
    public  externalStructureWorks :number|null=null;
    public  finishes :number|null=null;
    public  foundationFixturesAndEquipment :number|null=null;
    public  connectionFeesDefectRemovalAndLinkingServices:number|null=null;
    public  deliveryCharges :number|null=null;
    public  newOtherClause:number|null=null;
    public  descriptionOfNewClause : string="";
    public  deesForDefectsInConstruction :number|null=null;
    public  designFees :number|null=null;
    public  supervisionFees :number|null=null;
    public  administrativeAndGeneralFees :number|null=null;
    public  rentalFees :number|null=null;
    public  energyFees :number|null=null;
    public  communicationFees :number|null=null;
    public  auditFees :number|null=null;
    public  bankCommission :number|null=null;
    public  governmentalFees :number|null=null;
    public  technicalPrograms :number|null=null;
    public  insuranceFees :number|null=null;
    public  variousFees :number|null=null;
    public  employmentFees :number|null=null;
    public  stationeryAndPublications :number|null=null;
    public  travelAndTransportationFees :number|null=null;
    public  deviceConsumption :number|null=null;
    public  amortizationOfPreOperatingFees :number|null=null;
    public  salariesAndWages :number|null=null;
    public  marketingAndCoverageAndAdvertisingFees :number|null=null;
    public  otherFees :number|null=null;
    public  emergencyAllowance:number|null=null;
    public  zakatFees :number|null=null;
    public  taxFees :number|null=null;
    public  netRevenue:number|null=null;
    public  totalConstructionCostsAndConstruction:number|null=null;
    public  totalConstructionExpensesAndConstruction:number|null=null;
    public  totalSupervisionExpenses:number|null=null;
    public  totalAdministrativeExpensesAndGenerality:number|null=null;
    public  totalProfit:number|null=null;
    public  totalExpensesAndBurdensOther:number|null=null;
    public  netProfitLossBeforeCalculatingZakatTax:number|null=null;
    public  netProfitLossAfterCalculatingZakatTax:number|null=null;
  

}
