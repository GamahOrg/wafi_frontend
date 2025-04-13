
import { SysFileManagerCreateUpdateDto } from "../../../../shared/models/sys-file-manager-create-update-dto";

export interface CertifiedEngineerDto {
    id: string;
    facilityId: string;
    professionalLicenseNumber: string;
    engineerName : string;
    identityNumber :string;
    trainingCertificateFile: SysFileManagerCreateUpdateDto;
}
