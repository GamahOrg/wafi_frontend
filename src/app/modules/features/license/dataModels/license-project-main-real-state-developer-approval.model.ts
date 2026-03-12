import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";
import { CustomerApproval } from "./customer-approval.model";
import { FacilityApproval } from "./facility-approval.model";
import { LicenseProjectShortApproval } from "./license-project-short-approval.model";

export interface LicenseProjectMainRealStateDeveloperApproval {
    id: string;
    licenseProjectId: string;
    isApproved: boolean;
    approvedOn: string | null;
    owningAmount: number | null;
    delegatorCustomerId: string | null;
    delegatorCustomer: CustomerApproval | null;
    facility: FacilityApproval;
    licenseProject: LicenseProjectShortApproval;
    //
    mainRealStateDeveloperLicenseNumber: string;
    mainRealStateDeveloperId: string;
    mainRealStateDeveloperAgreementIsApproved: boolean | null;
    agreementDate: string | null;
    mainRealStateDeveloperAgreementApprovedOn: string | null;
    mainRealStateDeveloperAgreementFileId: string;
    mainRealStateDeveloperAgreementFile: FileManagerBE;
}
