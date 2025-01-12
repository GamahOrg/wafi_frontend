import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectProposedScheduleFileDto {
    public id:string="";
    public  proposedScheduleFileId :string="";
    public proposedScheduleFile=new  SysFileManagerCreateUpdateDto  ;
    public  licenseProjectFeasibilityStudyId :string="";
}
