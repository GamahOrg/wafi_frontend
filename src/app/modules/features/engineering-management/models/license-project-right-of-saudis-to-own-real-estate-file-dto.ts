import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectRightOfSaudisToOwnRealEstateFileDto {
    public id:string="";
    public  licenseProjectId :string="";
    public  rightOfSaudisToOwnRealEstateFileId :string="";
    public   rightOfSaudisToOwnRealEstateFile = new SysFileManagerCreateUpdateDto  ;
}
