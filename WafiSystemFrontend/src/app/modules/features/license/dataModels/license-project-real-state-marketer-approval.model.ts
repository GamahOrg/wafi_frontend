import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";
import { CustomerApproval } from "./customer-approval.model";
import { FacilityApproval } from "./facility-approval.model";
import { LicenseProjectShortApproval } from "./license-project-short-approval.model";

export interface LicenseProjectRealStateMarketerApproval {
    id: string;
    licenseProjectId: string;
    isApproved: boolean;
    approvedOn: string | null;
    delegatorCustomer: CustomerApproval | null;
    delegatorCustomerId: string | null;
    facility: FacilityApproval;
    licenseProject: LicenseProjectShortApproval;
    //
    licenseNumber: string | null;
    realStateMarketerId: string;
    licenseProjectRealStateMarketerAgreementFiles: FileManagerBE[];
}
