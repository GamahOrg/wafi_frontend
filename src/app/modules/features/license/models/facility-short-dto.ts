import { NationalityModel } from "src/app/modules/real-estate-contributions-auth/models/nationality.model";

export class FacilityShortDto {
  public id: string = "";
  public facilityCode: string = "";
  public commercialRegisterNumber: string = "";
  public facilityName: string = "";
  public certificateNumber: string = "";
  public facilityType: string = "";
  public engineerLicenseNumber: string = "";
  public saudiAuthorityOfEngineersLicenseNumber: string = "";
  public saudiAuthorityForAuditorsAndAccountants: string = "";
  public facilityCity: string = "";
  public facilityArea: string = "";
  public commercialRegisterStartDate:Date=new Date();
  public commercialRegisterEndDate:Date=new Date();
}

export interface CustomerShortDto {
  id:string;
  customerCode: string;
  fullName: string ;
  jobTitle: string;
  mobile1: string;
  mobile2: string;
  email: string;
  nidnumber: string;
  nationalityId: string;
  facility: FacilityShortDto;
  nationality?:NationalityModel;
  dateOfBirth?:Date;
  isSelected?:boolean;
}
