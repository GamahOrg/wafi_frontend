export interface LicenseProjectDetachedUnits {
    licenseProjectSubUnits: LicenseProjectDetachedUnit[];
}
export interface LicenseProjectDetachedUnit {
    id: string;
    licenseProjectId: string | null;
    subUnitTypeId: number;
    subUnitCount: number;
}
export interface LicenseProjectDetachedUnitRequestDetails {
    id: string;
    licenseProjectId: string | null;
    subUnitTypeId: number;
    subUnitCount: number;
    subUnitType: SubUnitType
}
export interface SubUnitType{
    id: number;
    name: string
} 