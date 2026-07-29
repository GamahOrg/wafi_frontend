import { LicenseProjectFeasibilityStudyFileDto } from "./feasibilityStudyDtos/license-project-feasibility-study-file-create-update-dto";
import { LicenseProjectAnnualBalanceSheetDto } from "./license-project-annual-balance-sheet-dto";
import { LicenseProjectAnnualCashFlowDto } from "./license-project-annual-cash-flow-dto";
import { LicenseProjectExpectedFundingSourceDto } from "./license-project-expected-funding-source-dto";
import { LicenseProjectExpectedIncomeDto } from "./license-project-expected-income-dto";
import { LicenseProjectFinancialIndicatorDto } from "./license-project-financial-indicator-dto";
import { LicenseProjectMarketingPlanFileDto } from "./license-project-marketing-plan-file-dto";
import { LicenseProjectProposedScheduleFileDto } from "./license-project-proposed-schedule-file-dto";

export class LicenseProjectFeasibilityStudyFullDto {

  public id: string = "";
  public licenseProjectId: string = "";
  public landTotalSpace: string | null = null;
  public landSpace: number | null = null;
  public residentialLandSpace: number | null = null;
  public totalProjectValue: number | null = null;
  public constructionCost: number | null = null;
  public consultantCost: number | null = null;
  public landPrice: number | null = null;
  public administrativeFees: number | null = null;
  public marketingFees: number | null = null;
  public profits: number | null = null;
  public years: number | null = null;
  public totalRevenue: number | null = null;
  public assumptionsOnWhichTheStudyIsBased: string = "";
  public entityName: string = "";
  public phoneNumber: string = "";
  public mobileNumber: string = "";
  public emailAddress: string = "";
  public infrastructureDevelopmentCosts: number | null = null;
  public totalConstructionCosts: number | null = null;
  public totalNonConstructionCosts: number | null = null;
  public totalLandCost: number | null = null;
  public totalSalesValue: number | null = null;
  public totalProjectCosts: number | null = null;
  public expectedNetProfit: number | null = null;
  public averageSalesPricePerMeter: number | null = null;
  public averageConstructionCostPerMeter: number | null = null;

  public licenseProjectProposedScheduleFiles: LicenseProjectProposedScheduleFileDto[] = [];
  public licenseProjectMarketingPlanFiles: LicenseProjectMarketingPlanFileDto[] = [];
  public licenseProjectExpectedIncomes: LicenseProjectExpectedIncomeDto[] = [];
  public licenseProjectAnnualBalanceSheets: LicenseProjectAnnualBalanceSheetDto[] = [];
  public licenseProjectAnnualCashFlows: LicenseProjectAnnualCashFlowDto[] = [];
  public licenseProjectFinancialIndicators: LicenseProjectFinancialIndicatorDto[] = [];
  public licenseProjectExpectedFundingSources: LicenseProjectExpectedFundingSourceDto[] = [];
  public licenseProjectFeasibilityStudyFiles :LicenseProjectFeasibilityStudyFileDto[]=[];
}
