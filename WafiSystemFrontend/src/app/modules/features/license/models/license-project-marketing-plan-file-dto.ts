import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectMarketingPlanFileDto {
    public id:string="";
    public  marketingPlanFileId :string="";
    public  marketingPlanFile =new SysFileManagerCreateUpdateDto;
    public  licenseProjectFeasibilityStudyId :string="";
}
