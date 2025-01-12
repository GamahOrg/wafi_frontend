import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class LicenseProjectRequestAttachmentDto {
      id:string="";
      licenseProjectId :string="";
      operationAndMaintenanceAcknowledgment:boolean=false;
      specifiedProtocolsDurationCommitmentFileId :string="";
      projectMarketingFileId :string="";
      specifiedProtocolsDurationCommitmentFile: SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
      projectMarketingFile : SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
}
