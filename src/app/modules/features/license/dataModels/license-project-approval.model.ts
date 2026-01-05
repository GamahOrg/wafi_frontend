import { ApprovalRole } from "./approval-role.model";

export interface LicenseProjectApproval {
    id: string;
    projectId: string;
    facilityId: string;
    commercialRegisterNumber: string;
    facilityName: string;
    projectName: string;
    isApproved: boolean | null;
    approvedOn: string | null;
    role: string;
    approvalRole: ApprovalRole;
    delegateCustomerName:string
}
export interface SaveApproval {
    id: string;
    delegatorCustomerId:string;
    isApproved: boolean | null;
    approvalRole: ApprovalRole;
    nationalAddress?:string;
    rejectReason?:string;
}
export interface UpdateApproval {
    id: string;
    delegatorCustomerId:string;
    approvalRole: ApprovalRole;
}