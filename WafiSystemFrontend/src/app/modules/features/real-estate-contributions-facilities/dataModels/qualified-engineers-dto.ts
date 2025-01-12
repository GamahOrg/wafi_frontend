import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { QualificationSocialInsuranceEmployeeListDto } from "./qualification-social-insurance-employee-list-dto";

export interface QualifiedEngineersDto {
    id:string;
    facilityId:string;
    engineerName:string;
    trainingCertificateFile :SysFileManagerCreateUpdateDto;
}
