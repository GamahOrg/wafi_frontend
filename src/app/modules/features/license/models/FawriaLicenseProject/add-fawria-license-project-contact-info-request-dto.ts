export interface AddFawriaLicenseprojectContactInfoRequestDto {
  licenseProjectId: string;
  delegatorCustomerId: string;
  contactCustomerId: string;
}
export interface LicenseProjectFawriaDeveloperListDto {
  id: string;
  employeeName: string;
  facilityName: string;
  commercialRegisterNumber: string;
  createdOn: Date;
  qualificationDegree: number;
}

export interface FacilityInfoForProjectFawriaDto {
  id: string;
  facilityName: string;
  qualificationDegree: number;
  facilityId: string;
  commercialRegisterNumber: string;
}

export interface AddLicenseProjectFawriaDto {
  facilityId: string;
}