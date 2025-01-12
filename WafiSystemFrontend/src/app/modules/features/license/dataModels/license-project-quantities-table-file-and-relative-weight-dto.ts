import { LicenseProjectQuantitiesTableFileDto } from "./project-basic-data.dto";

export class LicenseProjectQuantitiesTableFileAndRelativeWeightDto {
    public licenseProjectQuantitiesTableFileList :LicenseProjectQuantitiesTableFileDto[]=[];
    public licenseProjectRelativeWeightList :LicenseProjectRelativeWeightDto[]=[];
    public quantitiesTableAcknowledgment : boolean = false;
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
