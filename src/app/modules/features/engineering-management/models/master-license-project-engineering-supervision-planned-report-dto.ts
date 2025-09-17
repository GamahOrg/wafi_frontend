import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import {
  areaResponse,
  cityResponse,
} from '../../qualifying/dataModels/national-address.model';

export interface MasterLicenseProjectEngineeringSupervisionPlannedReportDto {
  id: string;
  name: string;
  projectCode: string;
  startOn: Date;
  endOn: Date;
  buildingFlatArea: Number;
  landTotalSpace: Number;
  landValue: Number;
  //التكلفة الانشائية المتوقعة (ريال سعودي)
  expectedConstructionCost: number;
  //المقاول
  contractor: string;
  //مقاول البنية التحتية
  infrastructureContractor: string | null;
  //استشاري أعمال البنية التحتية
  infrastructureConsultant: string | null;
  //تكلفة أعمال البنية التحتية (ر.س.)
  infrastructureCost: number | null;
  //تاريخ بداية الأعمال التعاقدي
  contractualStartDate: Date;
  //تاريخ نهاية الأعمال التعاقدي
  contractualFinishDate: Date;
  monthsCount: Number;
  zonesCount: Number;
  uniteCount: Number;
  blockCount: Number;
  buildingsCount: Number;
  facility: FacilityShortDto;
  //   licenseProjectEngineeringSupervisionPlannedReportDetails:LicenseProjectEngineeringSupervisionPlannedReportDetailDto[];
  licenseProjectEngineeringSupervisionPlannedReportAttachments: LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto[];
  licenseProjectEngineeringConsultants: EngineeringConsultantDto[];
  licenseProjectAddresses: LicenseProjectAddressesDto[];
}

export interface LicenseProjectEngineeringInfrastructureDto {
  id: string;
  //مقاول البنية التحتية
  infrastructureContractor: string | null;
  //استشاري أعمال البنية التحتية
  infrastructureConsultant: string | null;
  //تكلفة أعمال البنية التحتية (ر.س.)
  infrastructureCost: number | null;
}

export class FacilityShortDto {
  public id: string = '';
  public facilityCode: string = '';
  public commercialRegisterNumber: string = '';
  public facilityName: string = '';
  public certificateNumber: string = '';
  public facilityType: string = '';
  public engineerLicenseNumber: string = '';
  public saudiAuthorityOfEngineersLicenseNumber: string = '';
  public saudiAuthorityForAuditorsAndAccountants: string = '';
  public facilityCity: string = '';
  public facilityArea: string = '';
  public customers: CustomerShortDto | undefined;
}
export class LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto {
  id: string = '';
  licenseProjectId: string = '';
  generalSiteMapFileId: string = '';
  generalSiteMapFile: SysFileManagerCreateUpdateDto =
    new SysFileManagerCreateUpdateDto();
}
export interface LicenseProjectEngineeringSupervisionPlannedReportDetailDto {
  id: string;
  licenseProjectId: string;
  monthDate: Date;
  monthName: string;
  //نسب الإنجاز المخططة الشهرية للمشروع
  projectMonthlyPlannedCompletionRate: Number;
  //إجمالي عدد العمالة المخطط للشهر
  monthlyTotalPlannedEmployees: Number;
  //نسبه الانجاز المخططه التراكميه
  cumulativeplannedcompletionpercentage: Number;
  // نسبة الإنجاز المخططة الشهريةالخاصة بالبنيه التحتيه
  infrastructureMonthlyPlannedCompletionRate: Number;
  //التكلفة الانشائية المتوقعة خلال الشهر
  projectMonthlyPlannedMonthCost: number;
  //اجمال التكلفة الانشائية المتوقعة خلال الشهر
  expectedConstructionCostDuringMonth: number;
}

export interface CustomerShortDto {
  id: string;
  customerCode: string;
  fullName: string;
  jobTitle: string;
  mobile1: string;
  mobile2: string;
  email: string;
  nidnumber: string;
  nationalityId: string;
}

export interface EngineeringConsultantDto {
  id: string;
  // المهندس المدير للمشروع
  projectManagerCustomerId: string;
  projectManagerCustomer: CustomerShortDto;
  engineeringConsultant: FacilityShortDto;
}
export interface LicenseProjectAddressesDto {
  id: string;
  neighborhoodName: string;
  areas: areaResponse;
  cities: cityResponse;
}

export interface LicenseProjectEngineeringSupervisionPlannedReportStudyNoteCreateUpdateDto {
  id: string;
  licenseProjectId: string;
  notes: string;
}
export interface EngineeringSupervisionPlannedReportStudyNoteDto {
  id: string;
  notes: string;
}
