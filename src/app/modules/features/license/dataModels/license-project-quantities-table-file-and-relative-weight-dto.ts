import { LicenseProjectQuantitiesTableFileDto } from "./project-basic-data.dto";

export class LicenseProjectQuantitiesTableFileAndRelativeWeightDto {
    public licenseProjectQuantitiesTableFileList :LicenseProjectQuantitiesTableFileDto[]=[];
    public licenseProjectRelativeWeightList :LicenseProjectRelativeWeightDto[]=[];
    public quantitiesTableAcknowledgment : boolean = false;
}
export class LicenseProjectRelativeWeightDto {
    id: string = "";
    elementName: string = '';
    elementValue: number = 0;
    modifiedRelativeWeight:number = 0;
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
    evaluateEquationTo100?: boolean = false;
    maximumAllowedVariancePercentage: number = 0;
    minimumValue:number = 0;
    maximumValue:number = 0;
  }
