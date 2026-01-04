import { LicenseProjectQuantitiesTableFileCreateUpdateDto } from "./project-basic-data.dto";

export class LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto {
    public licenseProjectQuantitiesTableFileCreateUpdateList :LicenseProjectQuantitiesTableFileCreateUpdateDto[]=[];
    public licenseProjectRelativeWeightList :LicenseProjectRelativeWeightCreateUpdateDto[]=[];
    public quantitiesTableAcknowledgment : boolean = false;
    public licenseProjectId : string = "";
}
export class LicenseProjectRelativeWeightCreateUpdateDto {
    id: string = "";
    elementValue: number = 0;
    licenseProjectId: string = "";
    licenseRelativeWeightId: string = "";
    modifiedReferenceWeight: number = 0;
    variancePercentage: number = 0;
  }
