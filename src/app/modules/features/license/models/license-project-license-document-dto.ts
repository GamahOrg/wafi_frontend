import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectLicenseDocumentDto {
    public id:string="";
    public  licenseProjectsId :string="";
    public  licenseDocumentFileId :string="";
    public licenseDocumentFile=new  SysFileManagerCreateUpdateDto  ;
}
