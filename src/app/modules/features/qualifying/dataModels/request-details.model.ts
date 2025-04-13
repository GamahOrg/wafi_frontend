import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { Customer } from './customer.model';
import { QualificationRequestType } from './qualification-request-type.model';
import {
  facilityBusinessType,
  facilityOwnerDto,
  qualificationIssuesDocument,
} from '../../facilities/dataModels/facility-basic-info.model';
import { QualificationQualificatedAccountantDto } from '../../facilities/dataModels/qualification-qualificated-accountant-dto';
import { AdditionTechnicalCapabilitiesRequirementsDto } from '../../facilities/dataModels/additionTechnicalCapabilitiesRequirements.model';
import { CertifiedEngineerDto } from '../../facilities/dataModels/certified-engineer-dto';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../facilities/dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from '../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { QualifiedEngineersDto } from '../../facilities/dataModels/qualified-engineers-dto';
import { WafiTrainingDto } from '../../facilities/dataModels/wafi-training-dto';
import { nationalAddressResponse } from './national-address.model';
import { financialCapabilityResponse } from './financial-capability.model';

export interface qualificationRequestHeaderEventStatus {
  allowAssign: boolean;
  allowFeedBack: boolean;
  allowReject: boolean;
  allowApprove: boolean;

  allowAssignPeriod: number
  allowFeedBackPeriod: boolean,
  allowRejectPeriod: boolean,
  allowApprovePeriod: boolean,

  allowAssignRemainingPeriod: number;
  allowFeedBackRemainingPeriod: boolean,
  allowRejectRemainingPeriod: boolean,
  allowApproveRemainingPeriod: boolean,
}

export interface qualificationSocialInsuranceEmployeeListsDTO {
  name: string;
  employeeIdentificationNumber: string;
  id: string;
}
export interface facilityDTO {

  facilityCode: string;
  commercialRegisterNumber: string;
  isIssuesExist: boolean;
  commercialRegisterStartDate: Date;
  commercialRegisterEndDate: Date;
  saudiAuthorityForAuditorsAndAccountants: null | string;
  facilityName: string;
  availabilityToUpdate: boolean;
  facilityType: string;
  socialInsuranceCertificateNumber: string;
  website: null | string;
  registrationDateTime: Date;
  isActive: boolean;
  isLocked: null | boolean;
  lockedTo: null | boolean;
  id: string;
  email: null | string;
  telephone: null | string;
  fax: null | string;
  postalCode: null | string;
  poBox: null | string;
  capitalNumber: null | string;
  qualificationIssuesDocuments: qualificationIssuesDocument[];
  facilityOwners: facilityOwnerDto[]
  companyEstablishingContractFileManager: SysFileManagerCreateUpdateDto | null;
  qualificationValFileManager: null | SysFileManagerCreateUpdateDto;
  cooperativeSocietyLicensingFileManager: null | SysFileManagerCreateUpdateDto;
  facilityBusinessTypes: facilityBusinessType[];
  chamberOfCommerceMembershipNumber: string;
  previouslyQualifiedFacilityCommercialRegistrationNumber: null | string;
  companyCodeInFinancialMarket: null | string;
  saudiAuthorityOfEngineersLicenseNumber: string;
  qualificationSocialInsuranceEmployeeLists: qualificationSocialInsuranceEmployeeListsDTO[];
  qualificationQualificatedAccountants?: QualificationQualificatedAccountantDto[];
  qualificationQualificatedEngineers?: QualifiedEngineersDto[];
  qualificationNationalAddressDetailDto?: nationalAddressResponse[];
  qualificationAdditionInstitutionalCapacityAndHrRequirements?: QualificationAdditionInstitutionalCapacityAndHrRequirementDto[];
  additionTechnicalCapabilitiesRequirements?: AdditionTechnicalCapabilitiesRequirementsDto[];
  qualificationCertifiedEngineers?: CertifiedEngineerDto[];
  technicalCapabilitiesRequirements?: QualificationTechnicalCapabilitiesRequirementFullDto[];
  qualificationWafiTrainings?: WafiTrainingDto[];
  qualificationFinancialCapabilityRequirements?: financialCapabilityResponse[];
  qualificationInstitutionalCapacityAndHrRequirements?: QualificationInstitutionalCapacityAndHrRequirementDto[];
  qualificationNationalAddressDetails: nationalAddressResponse[]
  socialInsuranceEmployeesListFileManager: null | SysFileManagerCreateUpdateDto;
  socialInsuranceEmployeesListFileId:string;
}
export interface RequestDetails {
  requestCode: string;
  customersId: string;
  qualificationRequestType: QualificationRequestType;
  qualificationRequestTypeId: string;
  sysEmployee: null;
  customers: Customer;
  qualificationRequestHeaderEventStatus: qualificationRequestHeaderEventStatus;
  cooperativeSocietyLicensingFile: null | SysFileManagerCreateUpdateDto;
  facilities: facilityDTO;
  period: string;
  price: string;
  requestFrom: Date;
  requestTo: Date;
  ownerEmployeeId: string;
  requestOn: Date;
  isStudyNotAvailable: boolean;
  internalStatus: string;
  internalStatusId: number
  externalStatus: string;
  externalStatusId: number;
  isFinished: boolean;
  finishedOn: Date;
  lockedByEmployeeId: null | string;
  availableForRenew: null | boolean;
  assignedOn: string;
  lockReason: null | string;
  id: string;
  workflowDetailRequestStatus: requestPhase[];
  isRenewal:boolean
  // requestStatusInternalStatus: status;
  // requestStatusExternalStatus: status;

// new for sla
studyPeriod: number
remainingStudyPeriod: number
// allowCompileStudyPeriod: number
// allowCompileRemainingStudyPeriod: number

}
export interface status {
  id: number;
  statusName: string
}
export enum RequestPhaseTypes {
  done = 1,
  current = 2,
  next = 3,
}
export interface requestPhase {
  phaseName: string;
  requestPhaseStatus: string | null;
  lastUpdateOn: Date | null;
  phaseType: RequestPhaseTypes;
}


