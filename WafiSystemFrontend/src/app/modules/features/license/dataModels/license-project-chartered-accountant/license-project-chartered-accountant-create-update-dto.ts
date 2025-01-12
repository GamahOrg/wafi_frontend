import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';

export class LicenseProjectCharteredAccountantCreateUpdateDto {
  id: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectId: string = '';
  cityId: string = '';
  commercialRegister: string = '';
  workDaysCount: number = 0;
  charteredAccountantLicenseNumber: string = '';
  charteredAccountantId: string = '';
  optionalTerms: string = '';
  CharteredAccountantFilesId?: string[] = [];
  licenseProjectCharteredAccountantFiles: SysFileManagerCreateUpdateDto[] = [];
  //delegatorSignModelFileId: string = "";
  // agreementDate: string = "";
  /*  delegatorName: string = "";
  delegatorEmail: string = "";
  delegatorMobile: string = "";
  delegatorIdentityNumber: string = "";
  charteredAccountantDelegatorSignModelFileId: string = "";
  licenseProjectCharteredAccountantDelegators?: LicenseProjectCharteredAccountantDelegatorCreateUpdateDto[] = []; */
}

export class LicenseProjectCharteredAccountantDelegatorCreateUpdateDto {
  id: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectCharteredAccountantId: string = '';
  delegatorName: string = '';
  identityNumber: string = '';
  signModelFileId: string = '';
  delegatorAcknowledgment: boolean = false;
  charteredAccountantDelegatorSignModelFile?: SysFileManagerCreateUpdateDto =
    new SysFileManagerCreateUpdateDto();
}
