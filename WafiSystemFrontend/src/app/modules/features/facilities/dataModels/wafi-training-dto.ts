import { FileManagerBE } from "./financial-capability.model";

export class WafiTrainingDto {
    id:string = '';
    facilityId :string = '';
    marketerTrainingCertificateFile :FileManagerBE | null= null;
    realEstateDevelopmentTrainingCertificateFile :FileManagerBE | null= null;
}

export class WafiTrainingCreateUpdateDto {
    id:string = '';
    facilityId :string = '';
    marketerTrainingCertificateFileId :string|null = null;
    realEstateDevelopmentTrainingCertificateFileId :string |null = null;
}