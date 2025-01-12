export class SysLicenseRequestPeriodDto {
    public id: string = "";
    public licenseRequestTypeId: string = "";
    public period: number = 0;
    public price: number = 0;
    public sysPeriodTypeId: number = 0;
    public sysPeriodType?:SysPeriodTypeDto;
}
export class SysPeriodTypeDto {
    public id: string = "";
    name: string = "";
}