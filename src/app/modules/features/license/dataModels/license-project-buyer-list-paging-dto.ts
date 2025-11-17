import { LicenseProjectDetailsDto } from '../../license-project-requests/models/license-project.model';
import { SysFileManagerCreateUpdateDto } from '../models/license-request-project-details-dto';
import { ProjectAddressDto } from './project-address.dto';

export interface LicenseProjectBuyerListPagingDto {
  id: string;
  contractFileId: string;
  contractFile: SysFileManagerCreateUpdateDto;
  licenseProjectId: string;
  licenseProjectBuyerTypeId: number;
  name: string;
  nidNumber: string;
  mobile: string;
  statusId: number;
  status: LicenseProjectBuyerStatusDto;
  licenseProjectBuyerType: LicenseProjectBuyerTypeEnum;
  licenseProject: LicenseProjectDataDto
  contractNumber: string;
}

export interface LicenseProjectDataDto {
  id: string;
  name: string;
  licenseProjectAddresses: ProjectAddressDto[];
}

export interface LicenseProjectBuyerStatusDto {
  id: number;
  name: string;
}
export interface LicenseProjectBuyerTypeEnum {
  id: number;
  name: string;
}
export enum LicenseProjectBuyerStatusEnum {
  New = 1,
  Cerified = 2,
  Refused = 3,
  RejectCertified = 4,
  Recovery = 5,
}
