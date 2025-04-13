export interface licenseActivationRequestDetailsDto {
  id: string;
  justificationsAndReasons: string;
  commercialRegisterNumber: string;
  facilityName: string;
  licenseProjectName: string;
  certificateNumber: string;
  licenseEndDate: Date;
  cityName: string;
  licenseProjectSubUnitType: string[];
  landTotalSpace: number;
  subUnitCount: number;
  projectStartDate: Date;
  projectEndDate: Date;
  licenseProjectActivationRequestFiles:any[];
}
