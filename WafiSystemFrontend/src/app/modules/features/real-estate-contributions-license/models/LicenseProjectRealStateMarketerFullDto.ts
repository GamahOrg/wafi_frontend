import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { FacilityShortDto } from "./facility-short-dto";

export class LicenseProjectRealStateMarketerFullDto {
    public id:string="";
    public  licenseProjectId :string=""
    public  realStateMarketerId :string=""
    public  licenseNumber :string="" 
    public  delegatorId: string=""
    public  delegatorName: string=""
    public  delegatorEmail: string=""
    public  delegatorMobile: string=""
    public  agreementFileId :string=""
    public  isApproved:boolean=false;
    public approvedOn: Date=new Date();
    public agreementFile :SysFileManagerCreateUpdateDto  =new SysFileManagerCreateUpdateDto();
    public realStateMarketer: FacilityShortDto =new  FacilityShortDto();
}
