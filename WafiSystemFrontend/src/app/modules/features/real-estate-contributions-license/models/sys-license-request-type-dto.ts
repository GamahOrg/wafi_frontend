import { SysLicenseRequestPeriodDto } from "./sys-license-request-period-dto";

export class SysLicenseRequestTypeDto {
    public id: string = "";
    public name: string = "";
    public typeCode: string = "";
    public workflowId: string = "";
    public description: string = "";
    public requestStudyingDuration: number = 0;
    public licenseType: number = 0;
    public licenseRequestPeriods: SysLicenseRequestPeriodDto[] = []
    public licenseRequestSteps: licenseRequestStep[] = []
}
export interface licenseRequestStep {
    discerption: string;
    id: string;
    licenseRequestTypeId: string;
    order: number
}