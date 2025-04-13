import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";
import { CustomerApproval } from "./customer-approval.model";
import { FacilityApproval } from "./facility-approval.model";
import { LicenseProjectShortApproval } from "./license-project-short-approval.model";

export interface LicenseProjectSubDeveloperApproval {
    id: string;
    licenseProjectId: string;
    isApproved: boolean;
    approvedOn: string | null;
    delegatorCustomerId: string | null;
    delegatorCustomer: CustomerApproval | null;
    facility: FacilityApproval;
    licenseProject: LicenseProjectShortApproval;
    //
    subDeveloperLicenseProjectId: string | null;
    subDeveloperId: string;
    subDeveloperAgreementFileId: string;
    subDeveloperAgreementFile: FileManagerBE;
}
