import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectExhibitionDto 
{
    id:string="";
    licenseProjectId :string="";
    exhibitionName :string="";
    headquarter :string="";
    participationDate :Date=new Date();
    showPeriod :number=0;
    leaseContractFileId :string="";
    leaseContractFile :SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
}