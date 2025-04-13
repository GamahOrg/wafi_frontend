import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { QualificationSocialInsuranceEmployeeListDto } from "./qualification-social-insurance-employee-list-dto";
import { CertifiedEngineerDto } from "./certified-engineer-dto";


export interface QualificationQualificatedAccountantDto {
      id:string;
     facilityId:string;
     trainingCertificateFile : SysFileManagerCreateUpdateDto;
     qualificationCertifiedEngineerId?:string;
     qualificationCertifiedEngineer:CertifiedEngineerDto
}

