import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { CustomerShortDto } from '../../models/facility-short-dto';

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
  charteredAccountantDelegatorSignModelFileId: string = ""; */
  licenseProjectCharteredAccountantAuthorizedToSignDelegators?: LicenseProjectCharteredAccountantDelegatorCreateUpdateDto[] = [];
  licenseProjectCharteredAccountantPayments?: LicenseProjectCharteredAccountantPaymentsDto[];
  contarctValue?: number;
  financialReportApprovalPeriodInDays?: number;
  paymentDeadline?: string;
}

export class LicenseProjectCharteredAccountantDelegatorCreateUpdateDto {
  id: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectCharteredAccountantId: string = '';
  delegatorCustomerId: string = '';
  delegatorCustomer: CustomerShortDto = undefined as any;
  delegatorName: string = '';
  identityNumber: string = '';
  signModelFileId: string = '';
  delegatorAcknowledgment: boolean = false;
  charteredAccountantDelegatorSignModelFile?: SysFileManagerCreateUpdateDto =
    new SysFileManagerCreateUpdateDto();
}


export interface LicenseProjectCharteredAccountantPaymentsDto {
  id: string;
   //البند
  item: string;
 //الكمية
  quantity: number;
 //السعر للوحدة
  unitPrice: number;
 //الوصف
  description: string;
  licenseProjectCharteredAccountantId: string;
}