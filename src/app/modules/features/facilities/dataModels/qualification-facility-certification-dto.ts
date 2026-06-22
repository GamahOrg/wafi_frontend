import { SysCertificationDegreeDto } from "src/app/shared/models/SysCertificationDegreeDto";
import { FileManagerBE } from "./financial-capability.model";

export class QualificationFacilityCertificationDto {
    id:string='00000000-0000-0000-0000-000000000000';
    certificationFile =new FileManagerBE();
    certificationDegree?: SysCertificationDegreeDto;
}
export class QualificationFacilityCertificationCreateUpdateDto {
    id:string='00000000-0000-0000-0000-000000000000';
    facilityId:string='';
    certificationFileId:string='';
}