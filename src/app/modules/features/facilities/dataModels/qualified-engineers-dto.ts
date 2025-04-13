import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface QualifiedEngineersDto {
    id:string;
    facilityId:string;
    engineerName : string;
    trainingCertificateFile :SysFileManagerCreateUpdateDto;
}
