import { CertifiedEngineerDto } from "./certified-engineer-dto";

export class QualificationQualifiedAccountantCreateUpdateDto {
      id:string="";
      facilityId :string="";
      trainingCertificateFileId :string="";
      qualificationCertifiedEngineerId :string="";
      qualificationCertifiedEngineer?:CertifiedEngineerDto
}
