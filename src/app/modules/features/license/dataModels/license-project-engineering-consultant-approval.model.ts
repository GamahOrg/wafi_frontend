import { SysFileManagerCreateUpdateDto } from "../models/license-request-project-details-dto";
import { SysCityCreateUpdateDto } from "../models/sys-city-create-update-dto";
import { CustomerApproval } from "./customer-approval.model";
import { FacilityApproval } from "./facility-approval.model";
import { LicenseProjectEngineeringConsultantDelegatorAuthorizedToSignApproval } from "./license-project-engineering-consultant-delegator-authorized-to-sign-approval.model";
import { LicenseProjectShortApproval } from "./license-project-short-approval.model";

export interface LicenseProjectEngineeringConsultantApproval {
    id: string;
    licenseProjectId: string;
    isApproved: boolean;
    approvedOn: string | null;
    delegatorCustomerId: string | null;
    delegatorCustomer: CustomerApproval | null;
    facility: FacilityApproval;
    licenseProject: LicenseProjectShortApproval;
     agreementFileId: string | null;
      agreementFile: SysFileManagerCreateUpdateDto | null;
    //
    cityId: string;
    engineeringConsultantLicenseNumber: string | null;
    engineeringConsultantId: string;
    undertakeEngineeringStaffRaise: boolean | null;
    workDaysCount: number;
    optionalTerms: string | null;

    superviseStaffPMNumber: number;
    superviseStaffPMExperience: number;
    superviseStaffPMStartDate: string;
    superviseStaffPMMonthes: string | null;

    superviseStaffStructuralEngineerNumber: number;
    superviseStaffStructuralEngineerExperience: number;
    superviseStaffStructuralEngineerStartDate: string;
    superviseStaffStructuralEngineerMonthes: string | null;

    superviseStaffArchitectEngineerNumber: number;
    superviseStaffArchitectEngineerExperience: number;
    superviseStaffArchitectEngineerStartDate: string;
    superviseStaffArchitectEngineerMonthes: string | null;

    superviseStaffMechanicalEngineerNumber: number;
    superviseStaffMechanicalEngineerExperience: number;
    superviseStaffMechanicalEngineerStartDate: string;
    superviseStaffMechanicalEngineerMonthes: string | null;

    superviseStaffElectricalEngineerNumber: number;
    superviseStaffElectricalEngineerExperience: number;
    superviseStaffElectricalEngineerStartDate: string;
    superviseStaffElectricalEngineerMonthes: string | null;

    superviseStaffSurveyEngineerNumber: number;
    superviseStaffSurveyEngineerExperience: number;
    superviseStaffSurveyEngineerStartDate: string;
    superviseStaffSurveyEngineerMonthes: string | null;

    assistantStaffStructuralEngineerNumber: number;
    assistantStaffStructuralEngineerExperience: number;
    assistantStaffStructuralEngineerStartDate: string;
    assistantStaffStructuralEngineerMonthes: string | null;

    assistantStaffArchitectEngineerNumber: number;
    assistantStaffArchitectEngineerExperience: number;
    assistantStaffArchitectEngineerStartDate: string;
    assistantStaffArchitectEngineerMonthes: string | null;

    assistantStaffMechanicalEngineerNumber: number;
    assistantStaffMechanicalEngineerExperience: number;
    assistantStaffMechanicalEngineerStartDate: string;
    assistantStaffMechanicalEngineerMonthes: string | null;

    assistantStaffElectricalEngineerNumber: number;
    assistantStaffElectricalEngineerExperience: number;
    assistantStaffElectricalEngineerStartDate: string;
    assistantStaffElectricalEngineerMonthes: string | null;

    assistantStaffSurveyEngineerNumber: number;
    assistantStaffSurveyEngineerExperience: number;
    assistantStaffSurveyEngineerStartDate: string;
    assistantStaffSurveyEngineerMonthes: string | null;

    otherSpecialtiesDocumentControlSpecialistNumber: number;
    otherSpecialtiesDocumentControlSpecialistExperience: number;
    otherSpecialtiesDocumentControlSpecialistStartDate: string;
    otherSpecialtiesDocumentControlSpecialistMonthes: string | null;

    otherSpecialtiesHealthAndSafetySpecialistNumber: number;
    otherSpecialtiesHealthAndSafetySpecialistExperience: number;
    otherSpecialtiesHealthAndSafetySpecialistStartDate: string;
    otherSpecialtiesHealthAndSafetySpecialistMonthes: string | null;

    otherSpecialtiesQualityEngineerNumber: number;
    otherSpecialtiesQualityEngineerExperience: number;
    otherSpecialtiesQualityEngineerStartDate: string;
    otherSpecialtiesQualityEngineerMonthes: string | null;

    otherSpecialtiesPlanningEngineerNumber: number;
    otherSpecialtiesPlanningEngineerExperience: number;
    otherSpecialtiesPlanningEngineerStartDate: string;
    otherSpecialtiesPlanningEngineerMonthes: string | null;

    otherSpecialtiesBlockQuantitiesNumber: number;
    otherSpecialtiesBlockQuantitiesExperience: number;
    otherSpecialtiesBlockQuantitiesStartDate: string;
    otherSpecialtiesBlockQuantitiesMonthes: string | null;

    endorsementIncreaseEngineeringStaff: boolean;
    licenseProjectEngineeringConsultantAuthorizedToSignDelegators: LicenseProjectEngineeringConsultantDelegatorAuthorizedToSignApproval[];
    city: SysCityCreateUpdateDto;
}
