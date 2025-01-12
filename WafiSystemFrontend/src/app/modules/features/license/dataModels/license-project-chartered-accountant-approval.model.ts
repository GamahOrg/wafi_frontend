import { SysCityCreateUpdateDto } from "../models/sys-city-create-update-dto";
import { CustomerApproval } from "./customer-approval.model";
import { FacilityApproval } from "./facility-approval.model";
import { LicenseProjectCharteredAccountantDelegatorAuthorizedToSignCreateUpdate } from "./license-project-chartered-accountant-delegator-authorized-to-sign-create-update.model";
import { LicenseProjectShortApproval } from "./license-project-short-approval.model";

export interface LicenseProjectCharteredAccountantApproval {
    id: string;
    licenseProjectId: string;
    isApproved: boolean;
    approvedOn: string | null;
    delegatorCustomerId: string | null;
    delegatorCustomer: CustomerApproval | null;
    facility: FacilityApproval;
    licenseProject: LicenseProjectShortApproval;
    //
    charteredAccountantLicenseNumber: string;
    charteredAccountantId: string;
    charteredAccountantAgreementIsApproved: boolean | null;
    workDaysCount: number;
    optionalTerms: string;
    cityId: string;
    licenseProjectCharteredAccountantAuthorizedToSignDelegators: LicenseProjectCharteredAccountantDelegatorAuthorizedToSignCreateUpdate[];
    city: SysCityCreateUpdateDto;
}
