import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { facilityDTO } from "../../qualifying/dataModels/request-details.model";
import { LicenseProjectCharteredAccountantDto } from "./license-project-chartered-accountant/license-project-chartered-accountant-dto";
import { CustomerShortDto, FacilityShortDto } from "../models/facility-short-dto";
import { nationality } from "../../qualifying/dataModels/nationality.model";
import { Customer } from "../../qualifying/dataModels/customer.model";

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
     // بيانات التواصل للمستفيد النهانى
     complaintEmail: string = "";
     salesEmail: string = "";
     paymentReceiptFileId: string | null = null;
   // المفوض
    delegatorCustomerId : string = "";
    delegatorCustomer ?: CustomerShortDto
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
     facilityId: string = "";
     licenseRequestTypeId: string = "";
     facility!: facilityDTO;
     licenseRequestVersions: LicenseRequestVersionDto[] = [];
     customer: Customer = {} as Customer
}


class LicenseRequestVersionDto {
     requestOn: Date = new Date();
}
export class LicenseProjectDelegatorsDto {

     id: string = "";
     licenseProjectId: string = "";
     delegatorCustomerId : string = "";
     delegatorAcknowledgment: boolean = false;
     signModelFileId: string = "";
     delegatorCustomer?:  CustomerShortDto ;
     delegatorSignModelFile: SysFileManagerCreateUpdateDto = new SysFileManagerCreateUpdateDto();
}
export class LicenseProjectDelegatorCreateUpdateDto {

     id: string = "";
     licenseProjectId: string = "";
     delegatorCustomerId : string = "";
     delegatorAcknowledgment: boolean = false;
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