import { FacilityShortDto } from '../../license/models/facility-short-dto';
import { ChangeLicenseProjectEngineeringConsultantCreateUpdateDto } from './change-license-project-engineering-consultant-create-update-dto';

export interface ChangeLicenseProjectEngineeringConsultantDto
  extends ChangeLicenseProjectEngineeringConsultantCreateUpdateDto {
  commercialRegister?: string;
  engineeringConsultant: FacilityShortDto;
}
