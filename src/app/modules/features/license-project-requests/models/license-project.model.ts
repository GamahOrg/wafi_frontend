export interface LicenseProjectDetailsDto {
    id: string;
    name: string;
    facilityName: string;
    commercialRegisterNumber: string;
    developerCertifiedNumber:string;
    certifiedNumber: string;
    cityName: string;
    areaName: string;
    unitTypeName: string;
    charteredAccountantName: string | null;
    engineeringConsultantName: string | null;
    accountNumber: string | null;
    achievementRate: number | null;
    subUnitCount: number | null;
    unitsSellCount: number | null;
    bankName:string
    endOn: string | null;
}