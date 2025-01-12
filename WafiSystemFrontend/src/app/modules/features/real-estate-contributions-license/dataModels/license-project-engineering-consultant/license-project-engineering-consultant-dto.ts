import {SysFileManagerCreateUpdateDto} from "src/app/shared/models/sys-file-manager-create-update-dto";
import {LicenseProjectEngineeringConsultantCreateUpdateDto
} from "./license-project-engineering-consultant-create-update-dto";
import { FacilityShortDto } from "../../models/facility-short-dto";

export interface LicenseProjectEngineeringConsultantDto extends LicenseProjectEngineeringConsultantCreateUpdateDto {
  numberOfMonths: number[];
  engineeringConsultantDelegatorSignModelFile?: SysFileManagerCreateUpdateDto;
  engineeringConsultant:  FacilityShortDto ;
}

