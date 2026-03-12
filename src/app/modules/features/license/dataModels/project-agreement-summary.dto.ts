import { ApprovalRole } from './approval-role.model';

export interface ProjectAgreementSummaryDto {
  projectId: string;
  projectName: string;
  facilityName: string;
  commercialRegisterNumber: string;
  latestAgreementDate: string | null;
  agreementStatus: ProjectAgreementStatus;
  agreementStatusDisplayName: string;
  totalAgreementsCount: number;
  approvedAgreementsCount: number;
  pendingAgreementsCount: number;
  rejectedAgreementsCount: number;
  hasMultipleAgreements: boolean;
  typeCode: string;
  sourceEntityId: string;
  approvalRole: ApprovalRole;
}

export enum ProjectAgreementStatus {
  Approved = 1,
  Pending = 2,
  Rejected = 3
}
