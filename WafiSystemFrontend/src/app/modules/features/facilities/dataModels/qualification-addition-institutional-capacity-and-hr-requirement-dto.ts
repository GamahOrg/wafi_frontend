
import { SysFileManagerCreateUpdateDto } from "../../../../shared/models/sys-file-manager-create-update-dto";
import { FileManagerBE } from "./financial-capability.model";
export class QualificationAdditionInstitutionalCapacityAndHrRequirementDto {
      id:string="";
      accountingSupervisionForWafiSalesProjectsFile =new SysFileManagerCreateUpdateDto();
     engineeringSupervisionForWafiSalesProjectsFile =new SysFileManagerCreateUpdateDto();
     existSystemsApprovalCertifications:QualificationExistSystemsApprovalCertificationDto[] =[];
     localAndInternationalIssuedCertifications:QualificationLocalAndInternationalIssuedCertificationDto[]=[];
}
export class QualificationExistSystemsApprovalCertificationDto {
      id:string="00000000-0000-0000-0000-000000000000";
      existSystemsApprovalCertificationFile:FileManagerBE= new FileManagerBE();
}
export class QualificationLocalAndInternationalIssuedCertificationDto {
      id:string="00000000-0000-0000-0000-000000000000";
      localAndInternationalIssuedCertificationFile:FileManagerBE= new FileManagerBE();
}