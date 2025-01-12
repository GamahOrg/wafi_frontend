import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { SysCityCreateUpdateDto } from './sys-city-create-update-dto';
import { FacilityShortDto } from './facility-short-dto';

export class LicenseProjectCharteredAccountantFullDto {
  id: string = '';
  licenseProjectId: string = '';
  cityId: string = '';
  commercialRegister: string = '';
  workDaysCount: number | null = null;
  charteredAccountantLicenseNumber: string = '';
  charteredAccountantId: string = '';
  optionalTerms: string = '';
  //charteredAccountantDelegatorSignModelFileId: string="";
  agreementDate: string = '';
  // charteredAccountantDelegatorSignModelFile: SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
  charteredAccountant: FacilityShortDto = new FacilityShortDto();
  city: SysCityCreateUpdateDto = new SysCityCreateUpdateDto();
  licenseProjectCharteredAccountantFiles: SysFileManagerCreateUpdateDto[] = [];
}
