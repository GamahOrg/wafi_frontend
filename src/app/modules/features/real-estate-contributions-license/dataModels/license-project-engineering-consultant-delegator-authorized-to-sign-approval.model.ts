import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";
import { CustomerApproval } from "./customer-approval.model";

export interface LicenseProjectEngineeringConsultantDelegatorAuthorizedToSignApproval {
    licenseProjectEngineeringConsultantId: string;
    delegatorCustomerId: string | null;
    delegatorCustomer: CustomerApproval | null;
    signModelFileId: string;
    delegatorAcknowledgment: boolean;
    engineeringConsultantDelegatorSignModelFile: FileManagerBE;
}
