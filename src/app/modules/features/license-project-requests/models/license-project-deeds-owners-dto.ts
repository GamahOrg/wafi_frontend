import { SysFileManagerCreateUpdateDto } from "../../../../shared/models/sys-file-manager-create-update-dto";

export interface LicenseProjectDeedsOwnersDto {
  id: string;
  licenseProjectLandOwnerId: string;
  ownerName: string;
  idNumber: string | null;
  owningArea: number | null;
  approvalStatus: number;
  rejectionReason: string | null;
  isOwnerByDeveloper: boolean | null;
  isCustomer: boolean | null;
  offlineOwnerApprovalFileId: string | null;
  offlineOwnerApprovalFile: SysFileManagerCreateUpdateDto | null;
}
