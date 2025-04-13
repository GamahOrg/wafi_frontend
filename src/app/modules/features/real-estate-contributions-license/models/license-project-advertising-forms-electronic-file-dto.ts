import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectAdvertisingFormsElectronicFileDto {
    public id:string="";
    public  licenseProjectId :string="";
    public  advertisingFormsElectronicFileId :string="";
    public advertisingFormsElectronicFile=new  SysFileManagerCreateUpdateDto  ;
}
