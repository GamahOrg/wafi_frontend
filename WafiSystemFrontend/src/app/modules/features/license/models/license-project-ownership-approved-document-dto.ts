import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectOwnershipApprovedDocumentDto {
    public id:string="";
    public  LicenseProjectsId :string="";
    public  ownershipApprovedDocumentFileId :string="";
    public   ownershipApprovedDocumentFile =new  SysFileManagerCreateUpdateDto  ;
}
