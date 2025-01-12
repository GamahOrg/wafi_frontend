import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { FacilityShortDto } from "./facility-short-dto";

export class LicenseProjectSubDeveloperFullDto {
         public id:string="";
        public  licenseProjectId :string="";
        public  subDeveloperLicenseProjectId :string="";
        public  delegatorName :string=""; 
        public  delegatorEmail :string=""; 
        public  delegatorMobile :string=""; 
        public  subDeveloperAgreementFileId :string="";
        public  isApproved :boolean=false;
        public  approvedOn :Date=new Date();
        public subDeveloperAgreementFile: SysFileManagerCreateUpdateDto  =new SysFileManagerCreateUpdateDto();
        public subDeveloperLicenseProject: FacilityShortDto  =new FacilityShortDto(); 
}
