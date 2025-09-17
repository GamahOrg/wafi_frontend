import { ProjectStatusDto } from 'src/app/shared/models/projectstatus.dto';
import { Customer } from '../../qualifying/dataModels/customer.model';
import { areaResponse, cityResponse } from '../../qualifying/dataModels/national-address.model';

export interface LicenseRequestHeaderDto {
  id: string;
  requestCode: string;
  certificateNumber: string;
  licenseProject: LicenseProject;
  licenseRequestVersions: LicenseRequestVersionCreateUpdateDto[];
}
export interface LicenseProject {
  id: string;
  name: string;
  projectCode: string;
  licenseProjectEngineeringConsultants: EngineeringConsultantDto[];
  sysLicenseProjectStatus: ProjectStatusDto;
}

export interface EngineeringConsultantDto {
  // المهندس المدير للمشروع
  projectManagerCustomerId: string;
  projectManagerCustomer: Customer;
}

export interface nationalAddressResponse {
  areas: areaResponse;
  sysCity: cityResponse;
}

export interface LicenseRequestVersionCreateUpdateDto {
  initialCertificateDate: Date;
}

export class ProjectLicenseRequestsParams {
  pageIndex: number = 1;
  pageSize: number = 10;
  searchText?: string;
}

export class FilterProjectList {
  currentSelectedFacilityId?: string | null=null;
  pageIndex: number = 1;
  pageSize: number = 10;
  searchText?: string;
}
