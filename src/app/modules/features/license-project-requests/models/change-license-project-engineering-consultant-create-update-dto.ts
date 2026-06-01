import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { CustomerShortDto } from '../../license/models/facility-short-dto';

export interface ChangeLicenseProjectEngineeringConsultantCreateUpdateDto {
  changeLicenseProjectEngineeringRequestId: string;
  engineeringFacilityId?: string;
  engineeringConsultantLicenseNumber?: string;
  cityId?: string | null;
  financialReportApprovalPeriodInDays?: number;
  contarctValue?: number;
  paymentDeadline?: string;
  payments?: ChangeLicenseProjectEngineeringRequestPaymentDto[];
  delegators?: ChangeLicenseProjectEngineeringRequestDelegatorDto[];
}

export class ChangeLicenseProjectEngineeringRequestDelegatorDto {
  id: string = '00000000-0000-0000-0000-000000000000';
  changeLicenseProjectEngineeringRequestId: string = '';
  delegatorCustomerId: string = '';
  delegatorCustomer: CustomerShortDto = undefined as any;
  signModelFileId: string | null = null;
  delegatorAcknowledgment: boolean = false;
  engineeringConsultantDelegatorSignModelFile?: SysFileManagerCreateUpdateDto =
    new SysFileManagerCreateUpdateDto();
}

export interface ChangeLicenseProjectEngineeringRequestPaymentDto {
  id: string;
  item: string;
  quantity: number;
  unitPrice: number;
  description: string;
  changeLicenseProjectEngineeringRequestId: string;
}
