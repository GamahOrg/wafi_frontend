export interface ProjectListDto {
  id: string;
  name: string;
  developerName: string;
  startDate: Date;
  endDate: Date;
  licenseProjectId: string;
  certificateNumber: string;
  projectTypeName: string;
  unitsCount: number;
  licenseProjectNatureType: LicenseProjectNatureTypeDto;
  showUnits: boolean;
}

export interface LicenseProjectNatureTypeDto {
  id: number;
  natureTypeId: number;
  name: string;
}
