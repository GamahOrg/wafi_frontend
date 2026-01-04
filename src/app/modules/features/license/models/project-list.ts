export interface ProjectListDto {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  licenseProjectId: string;
  certificateNumber: string;
  projectTypeName: string;
  unitsCount: number;
  licenseProjectNatureType: LicenseProjectNatureTypeDto;
}

export interface LicenseProjectNatureTypeDto {
  id: number;
  natureTypeId: number;
  name: string;
}
