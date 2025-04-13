import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { SysProjectCategoryCreateUpdateDto } from "../../license/models/license-project.model";
import { SysProjectSubCategoryCreateUpdateDto } from "../models/license-project.model";

export class MainContributionData {

        id: string = "";
        contributionName :string="";
        contributionDescription :string="";
        contributionTypeId :string="";
       contributionCategoryId :string="";
        contributionSubCategoryId :string="";
         contributionServices :string="";
        contributionPlaceDescription :string="";
         contributionStartDate :string="";
         contributionEndDate :string="";
         contributionDuration :string="";
        isContributionStarted :boolean=false;
        contributionCompletionRate :number=0;
        contributionSellingValue :number=0;
        contributionCapitalValue :number=0;
        contributionRealEstateEvaluation :number=0;
         contributionDeveloperShare :number=0;
         contributionLandOwnerShare :number=0;
         contributionRealEstateEvaluationFromEvaluators:ContributionRealEstateEvaluationFromEvaluatorDto[]=[];
         contributionCapitalValueFromEvaluators:ContributionCapitalValueFromEvaluatorDto[]=[];
    }

    export class mainContributionDataCreateUpdate {

        id: string = "";
        contributionName :string="";
        contributionDescription :string="";
        contributionTypeId :number|null =null;
       contributionCategoryId :string="";
        contributionSubCategoryId :string="";
         contributionServices :string="";
        contributionPlaceDescription :string="";
         contributionStartDate :string="";
         contributionEndDate :string="";
         contributionDuration :string="";
        isContributionStarted :boolean=false;
        contributionCompletionRate :number=0;
        contributionSellingValue :number=0;
        contributionCapitalValue :number=0;
        contributionRealEstateEvaluation :number=0;
         contributionDeveloperShare :number=0;
         contributionLandOwnerShare :number=0;
         contributionRealEstateEvaluationFromEvaluators:ContributionRealEstateEvaluationFromEvaluatorCreateUpdateDto[]=[];
         contributionCapitalValueFromEvaluators:ContributionCapitalValueFromEvaluatorCreateUpdateDto[]=[];
    }

    export class ContributionCapitalValueFromEvaluatorCreateUpdateDto
    {
        id:string="";
        licenseProjectId :string="";
        contributionCapitalValueFromEvaluatorFileId :string="";
    }
    export class ContributionRealEstateEvaluationFromEvaluatorCreateUpdateDto
    {
        id:string="";
        licenseProjectId :string="";
        contributionRealEstateEvaluationFromEvaluatorFileId :string="";
    }

    export class ContributionCapitalValueFromEvaluatorDto
    {
        id:string="";
        licenseProjectId :string="";
        contributionCapitalValueFromEvaluatorFileId :string="";
        contributionCapitalValueFromEvaluatorFile :SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
    }
    export class ContributionRealEstateEvaluationFromEvaluatorDto
    {
        id:string="";
        licenseProjectId :string="";
        contributionRealEstateEvaluationFromEvaluatorFileId :string="";
          contributionRealEstateEvaluationFromEvaluatorFile:SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
    }

    export class FullContributionDataDto
{
    id: string = "";
    contributionName :string="";
    contributionDescription :string="";
    contributionTypeId :string="";
   contributionCategoryId :string="";
    contributionSubCategoryId :string="";
     contributionServices :string="";
    contributionPlaceDescription :string="";
     contributionStartDate :string="";
     contributionEndDate :string="";
     contributionDuration :number=0;
    isContributionStarted :boolean=false;
    contributionCompletionRate :number=0;
    contributionSellingValue :number=0;
    contributionCapitalValue :number=0;
    contributionRealEstateEvaluation :number=0;
     contributionDeveloperShare :number=0;
     contributionLandOwnerShare :number=0;
      projectContributionCategory? :SysProjectCategoryCreateUpdateDto;
       projectContributionSubCategory?:SysProjectSubCategoryCreateUpdateDto;
       sysContributionType?:SysContributionTypeCreateUpdateDto;
     contributionRealEstateEvaluationFromEvaluators:ContributionRealEstateEvaluationFromEvaluatorDto[]=[];
     contributionCapitalValueFromEvaluators:ContributionCapitalValueFromEvaluatorDto[]=[];
}
export interface SysContributionTypeCreateUpdateDto
{
id:number;
contributionType:string;
}