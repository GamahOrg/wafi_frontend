import { FacilityShortDto } from "./facility-short-dto";
import { LicenseProjectRealStateMarketerAgreementFile } from "../dataModels/license-project-real-state-marketer/license-project-real-state-marketer-create-update-dto";

export class LicenseProjectRealStateMarketerFullDto {
    public id:string="";
    public  licenseProjectId :string=""
    public  realStateMarketerId :string=""
    public  licenseNumber :string=""
    public licenseProjectRealStateMarketerAgreementFiles :LicenseProjectRealStateMarketerAgreementFile[]=[];
    public realStateMarketer: FacilityShortDto =new  FacilityShortDto();
}
