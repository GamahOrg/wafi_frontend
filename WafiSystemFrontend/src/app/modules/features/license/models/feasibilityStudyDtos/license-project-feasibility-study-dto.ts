import { LicenseProjectFeasibilityStudyFileDto } from "./license-project-feasibility-study-file-create-update-dto";
import { LicenseProjectMarketingPlanFileDto } from "./license-project-marketing-plan-file-dto";
import { LicenseProjectProposedScheduleFileDto } from "./license-project-proposed-schedule-file-dto";


export class LicenseProjectFeasibilityStudyDto {
  public id: string = "";
  public licenseProjectId: string = "";
  public landTotalSpace: number | null = null;
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
  public licenseProjectProposedScheduleFiles: LicenseProjectProposedScheduleFileDto[] = [];
  public licenseProjectMarketingPlanFiles: LicenseProjectMarketingPlanFileDto[] = [];
  public licenseProjectFeasibilityStudyFiles :LicenseProjectFeasibilityStudyFileDto[]=[];

}
