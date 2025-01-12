import { Customer } from "../../qualifying/dataModels/customer.model";
import { facilityDTO, requestPhase } from "../../qualifying/dataModels/request-details.model";
import { LicenseProject } from "./license-project.model";
import { licenseProjectZoneCaculations } from "./license-project-zone-caculations";

export interface LicenseRequestProcessingLogData {
  workflowDetailRequestStatus: requestPhase[];
  licenseRequestCustomerHeaderEventStatus: LicenseRequestCustomerHeaderEventStatus;
}

export interface LicenseDetails {
  studyPeriod: number
  isRenewal: boolean;
  remainingStudyPeriod: number  
  id: string;
  qualificationDegree:number;
  certificateNumber?:string;
  requestCode: string;
  periodTypeName: null | string;
  availabilityToUpdate: boolean | null;
  customerId: string;
  FacilityId: string;
  licenseRequestTypeId: string;
  createdOn: Date;
  facility: facilityDTO;
  customer: Customer;
  assignedOn: Date;
  availableForRenew: boolean | null;
  endOn: Date;
  externalStatus: string;
  externalStatusId: number
  facilityId: string
  finishedOn: Date
  internalStatus: string;
  internalStatusId: number
  isFinished: boolean
  isStudyNotAvailable: boolean
  licenseProjectId: string;
  lockReason: null
  lockedByEmployeeId: null
  ownerEmployeeId: null
  period: number
  price: number
  requestOn: Date
  startOn: Date;
  licenseRequestType: LicenseRequestType
  licenseRequestVersions: LicenseRequestVersions[]
  licenseProject: LicenseProject
  workflowDetailRequestStatus: requestPhase[]
  licenseRequestCustomerHeaderEventStatus: LicenseRequestCustomerHeaderEventStatus;
 
}
export interface LicenseRequestCustomerHeaderEventStatus {
  allowCompile: boolean
  allowCompileConditionalApproval: boolean
  allowCompileDeedMarginalization: boolean
  allowCompileGuaranteeLetterActivation: boolean
  allowCompileQWTable: boolean
  AllowCompileOpenBankAccount: boolean

  allowCompileId: number
  allowCompileConditionalApprovalId: number
  allowCompileDeedMarginalizationId: number
  allowCompileGuaranteeLetterActivationId: number
  allowCompileQWTableId: number
  AllowCompileOpenBankAccountId: number

  allowCompilePeriod: number
  allowCompileConditionalApprovalPeriod: number
  allowCompileDeedMarginalizationPeriod: number
  allowCompileGuaranteeLetterActivationPeriod: number
  allowCompileQWTablePeriod: number
  AllowCompileOpenBankAccountPeriod: number

  allowCompileRemainingPeriod: number
  allowCompileConditionalApprovalRemainingPeriod: number
  allowCompileDeedMarginalizationRemainingPeriod: number
  allowCompileGuaranteeLetterActivationRemainingPeriod: number
  allowCompileQWTableRemainingPeriod: number
  AllowCompileOpenBankAccountRemainingPeriod: number
}
export interface LicenseRequestVersions {
  isConditionalApproval: boolean
  assignedOn: Date
  availableForRenew: true
  endOn: Date
  externalStatusId: number
  finishedOn: Date
  id: string
  internalStatusId: number
  isFinished: boolean
  isStudyNotAvailable: boolean
  licenseRequestHeaderId: string
  lockReason: string
  lockedByEmployeeId: string
  ownerEmployeeId: string
  period: number
  price: number
  requestOn: Date
  startOn: Date
  requestCode: string,
  customerId: string,
  LicenseProjectId: string,
  FacilityId: string,
  licenseRequestTypeId: string,
  createdOn: Date,
  facility: facilityDTO,
  customer: Customer,
  licenseProject: LicenseProject,

  studyPeriod: number
  
  remainingStudyPeriod: number
}
export interface licenseRequestHeaderEventStatus {
  allowAssign: boolean;
  allowFeedBack: boolean;
  allowReject: boolean;
  allowApprove: boolean
}

export interface qualificationSocialInsuranceEmployeeListsDTO {
  name: string;
  employeeIdentificationNumber: string;
  id: string
}


export enum LicensePhaseTypes {
  done = 1,
  current = 2,
  next = 3,
}
export interface LicensePhase {
  phaseName: string;
  LicensePhaseStatus: string | null;
  lastUpdateOn: Date | null;
  phaseType: LicensePhaseTypes
}
export interface LicenseRequestType {
  description: string
  id: string
  licenseType: number
  name: string
  requestStudyingDuration: number
  typeCode: string
  workflowId: string
}

export interface LicenseRequestProcessingNotesDto {
  id: number,
  createdOn: Date,
  employeeName: string,
  departmentName: string,
  notes: string,
  isFinished: boolean,
  finishedOn: Date | null,
  isWithNotes: boolean,
}

export interface LicenseRequestLogsDto {
  id: number,
  licenseRequestVersionsId: string,
  description: string,
  createdOn: Date,
  hiddenForCustomer: boolean,
}