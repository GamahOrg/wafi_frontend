import {SysFileManagerCreateUpdateDto} from "src/app/shared/models/sys-file-manager-create-update-dto";
import {
  LicenseProjectCharteredAccountantCreateUpdateDto
} from "./license-project-chartered-accountant-create-update-dto";
import { FacilityShortDto } from "../../models/facility-short-dto";

export interface LicenseProjectCharteredAccountantDto extends LicenseProjectCharteredAccountantCreateUpdateDto {
  charteredAccountantDelegatorSignModelFile: SysFileManagerCreateUpdateDto;
  charteredAccountant: FacilityShortDto;
}
