export class LicenseProjectRelativeWeightCreateUpdateDto {
  id: string = "";
  elementValue: number = 0;
  licenseProjectId: string = "";
  licenseRelativeWeightId: string = "";
  modifiedReferenceWeight: number = 0;
}

export class LicenseProjectRelativeWeightDto {
  id: string = "";
  elementValue: number = 0;
  licenseProjectId: string = "";
  licenseRelativeWeightId: string = "";
  modifiedReferenceWeight: number = 0;
  sysLicenseRelativeWeight: SysLicenseRelativeWeightDto = new SysLicenseRelativeWeightDto();
}

export class SysLicenseRelativeWeightDto {
  id: string = "";
  elementName: string = "";
  order: number = 0;
  referenceWeight: number = 0;
}

export interface LicenseProjectEngineeringConstructionWorkStatusDto {
  licenseProjectId: string;
  licenseProjectRelativeWeightId: string;
}
