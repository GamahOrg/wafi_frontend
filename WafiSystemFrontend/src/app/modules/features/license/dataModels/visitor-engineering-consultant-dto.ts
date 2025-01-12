import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class VisitorEngineeringConsultantDto {
    id:string="";
     licenseProjectId :string="";
     engineeringConsultantLicenseNumber :string="";
     commercialRegisterNumber :string="";
    facilityName :string="";
    facilityType :string="";
    agreementFileId :string="";
    agreementFile:SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto()
}
