import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class SysLicenseBeneficiaryContractFormDto {
    public id :string="";
    public  description :string="";
    public  contractFormFileId :string="";
    public  contractFormFile :SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
}
