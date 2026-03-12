import { LicenseProjectAgreementStatusEnum } from '../enums/license-project-agreement-status.enum';
import { SysFileManagerCreateUpdateDto } from '../models/license-request-project-details-dto';
import { SysCityCreateUpdateDto } from '../models/sys-city-create-update-dto';
import { FacilityApproval } from './facility-approval.model';
import { LicenseProjectShortApproval } from './license-project-short-approval.model';

export interface LicenseProjectDeedOwnerApproval {
  id: string;
  licenseProjectId: string;
  cityId: string;
  isApproved: boolean;
  approvedOn: string | null;
  agreementStatusEnum: LicenseProjectAgreementStatusEnum;
  ownerName: string;
  idNumber: string | null;
  idType: string | null;
  sexType: string | null;
  birthDateYear: number | null;
  birthDateMonth: number | null;
  birthDateDay: number | null;
  mobileNo: string | null;
  ownerType: string | null;
  nationality: string | null;
  agreementFileId: string | null;
  agreementFile: SysFileManagerCreateUpdateDto | null;
  facility: FacilityApproval;
  licenseProject: LicenseProjectShortApproval;
  city: SysCityCreateUpdateDto;
  rejectReason:string;
  isFacilityOwner:boolean;
  deedNumber?:string;
  licenseNumber?:string;
  constructionLicenseFile?:SysFileManagerCreateUpdateDto | null;
  identityTypeCode?:number;
  typeCode?:number;
}
