import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectRequestStatusEnum } from '../enums/license-project-request-status.enum';

export interface TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto {
  id: string
  licenseProjectRequestId: string;
  licenseProjectId: string;
  externalRequestStatusId: LicenseProjectRequestStatusEnum;
  applicationFormFile: SysFileManagerCreateUpdateDto;
  consultingEngineering: SysFileManagerCreateUpdateDto;
  charteredAccountantReport: SysFileManagerCreateUpdateDto;
  projectName: string;
  bankReport: SysFileManagerCreateUpdateDto;
}
export interface CreateOrUpdateTransferAmountsBetweenSubAccountsInEscrowAccountRequestDto {
  id?: string
  licenseProjectRequestId: string;
  facilityId: string;
  licenseProjectId: string;
  externalRequestStatusId: LicenseProjectRequestStatusEnum;
  applicationFormFileId: string;
  consultingEngineeringId: string;
  charteredAccountantReportId: string;
  bankReportId: string;
}
