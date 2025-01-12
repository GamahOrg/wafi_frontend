
export interface LicenseProjectLandOwnerInfoDto {
    facility: FacilityShortDto;
    licenseProjectLandOwner: LicenseProjectLandOwnerDto;
}

export interface FacilityShortDto  {
    id:string;
    facilityCode: string;
    commercialRegisterNumber: string;
    facilityName: string;
    certificateNumber: string;
    facilityType: string;
    engineerLicenseNumber: string;
    saudiAuthorityOfEngineersLicenseNumber: string | null;
    saudiAuthorityForAuditorsAndAccountants: string | null;
    facilityCity: string;
    facilityArea: string;
}

export interface LicenseProjectLandOwnerDto  {
    id:string;
    typeId: string;
    licenseProjectsId: string;
    nationalIdOrCRA: string | null;
    name: string | null;
    mobileNumber: string | null;
    agreementFileId: string | null;
    type: SysLicenseProjectLandOwnerTypeDto;
    licenseProjectOwnerDeeds: LicenseProjectOwnerDeedDto[];
    isApproved?:boolean;
}

export interface LicenseProjectOwnerDeedDto  {
    id:string;
    licenseProjectLandOwnerId: string;
    licenseProjectDeedId: string;
    licenseProjectLandOwner: LicenseProjectLandOwnerDto;
    licenseProjectDeed: LicenseProjectDeedDto;
}

export interface LicenseProjectDeedDto  {
    id:string;
    licenseProjectsId: string;
    typeId: string;
    number: string;
    space: number;
    imageFileId: string | null;
    issueOn: string;
    isApproved: boolean;
    approvedOn: string | null;
    ownersCount: number | null;
    type: SysLicenseProjectLandOwnerDeedTypeDto;
    licenseProjectOwnerDeeds: LicenseProjectOwnerDeedDto[];
}

export interface SysLicenseProjectLandOwnerDeedTypeDto  {
    id:string;
    name: string;
}

export interface SysLicenseProjectLandOwnerTypeDto  {
    id:string;
    name: string;
}