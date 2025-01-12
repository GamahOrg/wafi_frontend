export interface CreateLicenseRequestHeaderDto {
    facilityId: string;
    periodTypeId: string;
    requestTypeCode: string;
    period: number;
    startDate: Date | null;
}

export enum SysPeriodTypeEnum {
    OneYear = 0,
    TwoYears = 1,
    Years = 2,
    OneMonth = 3,
    TwoMonths = 4,
    Months = 5,
    OneDay = 6,
    TwoDays = 7,
    Days = 8,
    oneWeek = 9,
    TwoWeeks = 10,
    Weeks = 11
}