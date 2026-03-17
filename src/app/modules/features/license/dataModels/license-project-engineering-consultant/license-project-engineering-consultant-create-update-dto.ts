import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { Customer } from '../../../qualifying/dataModels/customer.model';
import { CustomerShortDto } from '../../models/facility-short-dto';

export interface LicenseProjectEngineeringConsultantCreateUpdateDto {
  id: any;
  licenseProjectId: string;
  cityId: string| null;
  workDaysCount: number;
  engineeringConsultantLicenseNumber: string;
  engineeringConsultantId: string;
  commercialRegister: string;
  optionalTerms: string;
  superviseStaffPMNumber: number;
  superviseStaffPMExperience: number;
  superviseStaffPMStartDate: Date;
  superviseStaffStructuralEngineerNumber: number;
  superviseStaffStructuralEngineerExperience: number;
  superviseStaffStructuralEngineerStartDate: Date;
  superviseStaffArchitectEngineerNumber: number;
  superviseStaffArchitectEngineerExperience: number;
  superviseStaffArchitectEngineerStartDate: Date;
  superviseStaffMechanicalEngineerNumber: number;
  superviseStaffMechanicalEngineerExperience: number;
  superviseStaffMechanicalEngineerStartDate: Date;
  superviseStaffElectricalEngineerNumber: number;
  superviseStaffElectricalEngineerExperience: number;
  superviseStaffElectricalEngineerStartDate: Date;
  superviseStaffSurveyEngineerNumber: number;
  superviseStaffSurveyEngineerExperience: number;
  superviseStaffSurveyEngineerStartDate: Date;
  assistantStaffStructuralEngineerNumber: number;
  assistantStaffStructuralEngineerExperience: number;
  assistantStaffStructuralEngineerStartDate: Date;
  assistantStaffArchitectEngineerNumber: number;
  assistantStaffArchitectEngineerExperience: number;
  assistantStaffArchitectEngineerStartDate: Date;
  assistantStaffMechanicalEngineerNumber: number;
  assistantStaffMechanicalEngineerExperience: number;
  assistantStaffMechanicalEngineerStartDate: Date;
  assistantStaffElectricalEngineerNumber: number;
  assistantStaffElectricalEngineerExperience: number;
  assistantStaffElectricalEngineerStartDate: Date;
  assistantStaffSurveyEngineerNumber: number;
  assistantStaffSurveyEngineerExperience: number;
  assistantStaffSurveyEngineerStartDate: Date;
  otherSpecialtiesDocumentControlSpecialistNumber: number;
  otherSpecialtiesDocumentControlSpecialistExperience: number;
  otherSpecialtiesDocumentControlSpecialistStartDate: Date;
  otherSpecialtiesHealthAndSafetySpecialistNumber: number;
  otherSpecialtiesHealthAndSafetySpecialistExperience: number;
  otherSpecialtiesHealthAndSafetySpecialistStartDate: Date;
  otherSpecialtiesQualityEngineerNumber: number;
  otherSpecialtiesQualityEngineerExperience: number;
  otherSpecialtiesQualityEngineerStartDate: Date;
  otherSpecialtiesPlanningEngineerNumber: number;
  otherSpecialtiesPlanningEngineerExperience: number;
  otherSpecialtiesPlanningEngineerStartDate: Date;
  otherSpecialtiesBlockQuantitiesNumber: number;
  otherSpecialtiesBlockQuantitiesExperience: number;
  otherSpecialtiesBlockQuantitiesStartDate: Date;
  //engineeringConsultantDelegatorSignModelFileId: any;
  superviseStaffPMMonthes: string[];
  superviseStaffStructuralEngineerMonthes: string[];
  superviseStaffArchitectEngineerMonthes: string[];
  superviseStaffMechanicalEngineerMonthes: string[];
  superviseStaffElectricalEngineerMonthes: string[];
  superviseStaffSurveyEngineerMonthes: string[];
  assistantStaffStructuralEngineerMonthes: string[];
  assistantStaffArchitectEngineerMonthes: string[];
  assistantStaffMechanicalEngineerMonthes: string[];
  assistantStaffElectricalEngineerMonthes: string[];
  assistantStaffSurveyEngineerMonthes: string[];
  otherSpecialtiesDocumentControlSpecialistMonthes: string[];
  otherSpecialtiesHealthAndSafetySpecialistMonthes: string[];
  otherSpecialtiesQualityEngineerMonthes: string[];
  otherSpecialtiesPlanningEngineerMonthes: string[];
  otherSpecialtiesBlockQuantitiesMonthes: string[];
  licenseProjectEngineeringConsultantFiles?: SysFileManagerCreateUpdateDto[];
  EngineeringConsultantFileId?: string[];
  licenseProjectEngineeringConsultantAuthorizedToSignDelegators?: LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto[];
  // licenseProjectEngineeringConsultantDelegators: LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto[];

  licenseProjectEngineeringConsultantPayments?: LicenseProjectEngineeringConsultantPaymentsDto[];
  contarctValue?: number;
  financialReportApprovalPeriodInDays?: number;
  paymentDeadline?: string;

  executiveDirectorName?: string | null;
  executiveDirectorEmail?: string | null;
  executiveDirectorMobile?: string | null;
}

export class LicenseProjectEngineeringConsultantDelegatorCreateUpdateDto {
  id: string = '00000000-0000-0000-0000-000000000000';
  licenseProjectEngineeringConsultantId: string = '';
  delegatorCustomerId: string = '';
  delegatorCustomer: CustomerShortDto = undefined as any;
  // delegatorName: string = "";
  // identityNumber: string = "";
  signModelFileId: string | null = null;
  delegatorAcknowledgment: boolean = false;
  engineeringConsultantDelegatorSignModelFile?: SysFileManagerCreateUpdateDto =
    new SysFileManagerCreateUpdateDto();
}

export interface LicenseProjectEngineeringConsultantPaymentsDto {
  id: string;
   //البند
  item: string;
 //الكمية
  quantity: number;
 //السعر للوحدة
  unitPrice: number;
 //الوصف
  description: string;
  licenseProjectEngineeringConsultantId: string;
}