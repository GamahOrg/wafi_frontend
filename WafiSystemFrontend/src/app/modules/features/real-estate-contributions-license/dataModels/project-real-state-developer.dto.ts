import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { facilityDTO } from "../../qualifying/dataModels/request-details.model";
import { CustomerShortDto, FacilityShortDto } from "../models/facility-short-dto";
import { Customer } from "../../qualifying/dataModels/customer.model";
import { areaResponse, cityResponse } from "../../real-estate-contributions-qualifying/dataModels/national-address.model";

export class ProjectRealStateDeveloperDto {
     id: string = "";
     //المدير التنفيذي (اجباري)
     executiveDirectorName: string = "";
     executiveDirectorEmail: string = "";
     executiveDirectorMobile: string = "";
     //ضابط الاتصال (اجباري)
     contactOfficerName: string = "";
     contactOfficerEmail: string = "";
     contactOfficerMobile: string = "";
     paymentReceiptFileId: string | null = null;
     // بيانات التواصل للمستفيد النهانى
     complaintEmail: string = "";
     salesEmail: string = "";
     licenseRequestHeaders: LicenseRequestHeaderDto[] = [];
     paymentReceiptFile: SysFileManagerCreateUpdateDto | null = null;
}
export class ProjectRealStateDeveloperCreateUpdateDto {
     id: string = "";
     //المدير التنفيذي (اجباري)
     executiveDirectorName: string = "";
     executiveDirectorEmail: string = "";
     executiveDirectorMobile: string = "";
     //ضابط الاتصال (اجباري)
     contactOfficerName: string = "";
     contactOfficerEmail: string = "";
     contactOfficerMobile: string = "";
     // بيانات التواصل للمستفيد النهانى
     complaintEmail: string = "";
     salesEmail: string = "";
     paymentReceiptFileId: string | null = null;
}

export class LicenseRequestHeaderDto {
     id: string = "";
     customerId: string = "";
     licenseProjectId: string = "";
     licenseProject:LicenseProject={} as LicenseProject;
     facilityId: string = "";
     licenseRequestTypeId: string = "";
     facility!: facilityDTO;
     licenseRequestVersions: LicenseRequestVersionDto[] = [];
     customer: Customer = {} as Customer;
     requestCode ?:string;
     certificateNumber ?:string;
     
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


export interface nationalAddressResponse {
    areas: areaResponse 
    sysCity: cityResponse 
  }

class LicenseRequestVersionDto {
     requestOn: Date = new Date();
     initialCertificateDate :Date=new Date();
}
export class LicenseProjectDelegatorsDto {

     id: string = "";
     licenseProjectId: string = "";
     delegatorAcknowledgment: boolean = false;
     signModelFileId: string = "";
     delegatorCustomerId : string = "";
     delegatorCustomer ?:CustomerShortDto
     delegatorSignModelFile: SysFileManagerCreateUpdateDto = new SysFileManagerCreateUpdateDto();
}
export class LicenseProjectDelegatorCreateUpdateDto {

     id: string = "";
     licenseProjectId: string = "";
     delegatorAcknowledgment: boolean = false;
     delegatorCustomerId : string = "";
     signModelFileId: string = "";
}
export class LicenseProjectMainRealStateDeveloperDto {
     id: string = "";
     licenseProjectId: string = "";
     mainRealStateDeveloperLicenseNumber: string = "";
     mainRealStateDeveloperId: string = "";
     mainRealStateDeveloperAgreementIsApproved: boolean = false;
     agreementDate: Date = new Date();
     mainRealStateDeveloperAgreementApprovedOn: Date = new Date();
     mainRealStateDeveloperAgreementFileId: string = "";
     mainRealStateDeveloperAgreementFile: SysFileManagerCreateUpdateDto = new SysFileManagerCreateUpdateDto();
     mainRealStateDeveloper: FacilityShortDto = new FacilityShortDto();

}

export class LicenseProjectMainRealStateDeveloperCreateUpdateDto {
     id: string = "";
     licenseProjectId: string = "";
     mainRealStateDeveloperLicenseNumber: string = "";
     mainRealStateDeveloperId: string = "";
     mainRealStateDeveloperAgreementIsApproved: boolean = false;
     agreementDate: Date = new Date();
     mainRealStateDeveloperAgreementApprovedOn: Date = new Date();
     mainRealStateDeveloperAgreementFileId: string = "";


}