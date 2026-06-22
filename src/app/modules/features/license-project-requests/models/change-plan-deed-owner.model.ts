export interface ChangePlanDeedOwnerDto {
  id: string;
  licenseProjectChangePlanRequestId: string;
  licenseProjectLandOwnerId: string;
  ownerName: string | null;
  idNumber: string | null;
  owningArea: number | null;
  approvalStatus: ChangePlanDeedOwnerApprovalStatusEnum;
  rejectionReason: string | null;
  offlineOwnerApprovalFileId: string | null;
}

export enum ChangePlanDeedOwnerApprovalStatusEnum {
  PendingApproval = 1,
  Approved = 2,
  Rejected = 3
}
