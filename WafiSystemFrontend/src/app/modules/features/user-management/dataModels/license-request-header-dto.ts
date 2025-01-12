import { Customer } from "../../qualifying/dataModels/customer.model";
import { areaResponse, cityResponse } from "../../qualifying/dataModels/national-address.model";


export interface LicenseRequestHeaderDto {
    id:string;
    requestCode :string;
    certificateNumber :string;
    facility :facilityDto;
    licenseProject: LicenseProject
   
}
export interface LicenseProject
{
    id:string;
   name :string;
   projectCode :string; 
   licenseProjectEngineeringConsultants:EngineeringConsultantDto[];
}

export interface EngineeringConsultantDto
{
 // المهندس المدير للمشروع
 projectManagerCustomerId :string;
 projectManagerCustomer :Customer;
}
export interface facilityDto
{
    facilityName:string;
    qualificationNationalAddressDetails?: nationalAddressResponse[];
}

export interface nationalAddressResponse {
    areas: areaResponse 
    sysCity: cityResponse 
  }