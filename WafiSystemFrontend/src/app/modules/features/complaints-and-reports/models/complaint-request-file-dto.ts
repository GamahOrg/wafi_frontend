import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface ComplaintRequestFileDto {
    id:string;
    complaintRequestId:string;
    complaintFileId :string;
    complaintFile :SysFileManagerCreateUpdateDto;
}
