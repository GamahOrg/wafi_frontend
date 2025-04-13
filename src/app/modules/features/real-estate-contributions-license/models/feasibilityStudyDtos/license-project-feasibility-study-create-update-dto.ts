import { LicenseProjectFeasibilityStudyFileCreateUpdateDto } from "../../dataModels/license-project-feasibility-study-file-create-update-dto";
import { LicenseProjectMarketingPlanFileCreateUpdateDto } from "./license-project-marketing-plan-file-create-update-dto";
import { LicenseProjectProposedScheduleFileCreateUpdateDto } from "./license-project-proposed-schedule-file-create-update-dto";

export class LicenseProjectFeasibilityStudyCreateUpdateDto {
  id: string = "";
  public licenseProjectId: string = "";
  public landSpace: number | null = null;
  public residentialLandSpace: number | null = null;
  public totalProjectValue: number | null = null;
  public constructionCost: number | null = null;
  public consultantCost: number | null = null;
  public landPrice: number | null = null;
  public administrativeFees: number | null = null;
  public marketingFees: number | null = null;
  public profits: number | null = null;
  public assumptionsOnWhichTheStudyIsBased: string = "";
  public entityName: string = "";
  public phoneNumber: string = "";
  public mobileNumber: string = "";
  public emailAddress: string = "";
  public licenseProjectProposedScheduleFiles: LicenseProjectProposedScheduleFileCreateUpdateDto[] = [];
  public licenseProjectMarketingPlanFiles: LicenseProjectMarketingPlanFileCreateUpdateDto[] = [];
  public licenseProjectFeasibilityStudyFiles :LicenseProjectFeasibilityStudyFileCreateUpdateDto[]=[]; 
}
