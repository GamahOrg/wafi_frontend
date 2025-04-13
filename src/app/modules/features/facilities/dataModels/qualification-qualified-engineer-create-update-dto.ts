import { CertifiedEngineerDto } from "./certified-engineer-dto";

export class QualificationQualifiedEngineerCreateUpdateDto {
      id:string="";
      facilityId :string="";
      trainingCertificateFileId :string="";
      qualificationCertifiedEngineerId: string = "";
      qualificationCertifiedEngineer?: CertifiedEngineerDto;
}
