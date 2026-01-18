import type { LicenseProjectRequestStatusEnum } from "../enums/license-project-request-status.enum";
import type { LicenseProjectRequestTypeEnum } from "../enums/license-project-request-type.enum";

export interface LicenseProjectRequestDto {
    id:string;
    requestCode: string | null;
    licenseProjectId: string;
    facilityId: string;
    customerId: string;
    sendDate: string | null;
    isFinished:boolean | null;
    externalRequestStatusId: LicenseProjectRequestStatusEnum | null;
    internalRequestStatusId: LicenseProjectRequestStatusEnum | null;
    engineeringConsultantStatusId: LicenseProjectRequestStatusEnum | null;
    accountantRequestStatusId: LicenseProjectRequestStatusEnum | null;
    licenseProjectRequestTypeId: LicenseProjectRequestTypeEnum;
    facility: FacilityShortDto;
    customer: CustomerShortDto;
    externalRequestStatus: LicenseProjectRequestStatusDto | null;
    internalRequestStatus: LicenseProjectRequestStatusDto | null;
    engineeringConsultantStatus: LicenseProjectRequestStatusDto | null;
    accountantRequestStatus: LicenseProjectRequestStatusDto | null;
    licenseProjectRequestType: LicenseProjectRequestTypeDto;
    licenseProjectRequestEventStatus: LicenseProjectRequestEventStatusDto;
    workflowDetailRequestStatus: RequestPhase[];
    licenseProjectFarzRequestStatusId?:number;
    licenseProjectFarzRequestStatusName?:string;
  price: number;
  createdOn?: string;
}

export interface FacilityShortDto  {
    id: string;
    facilityCode: string;
    commercialRegisterNumber: string;
    facilityName: string;
    certificateNumber: string;
    facilityType: string;
    engineerLicenseNumber: string;
    saudiAuthorityOfEngineersLicenseNumber: string | null;
    saudiAuthorityForAuditorsAndAccountants: string | null;
    facilityCity: string;
    facilityArea: string;
    commercialRegisterStartDate: string;
    commercialRegisterEndDate: string;
}

export interface CustomerShortDto  {
    id: string;
    customerCode: string;
    fullName: string;
    jobTitle: string | null;
    mobile1: string;
    mobile2: string | null;
    email: string;
    nidnumber: string;
    nationalityId: string;
    isActive: boolean;
    facility: FacilityShortDto;
  nationality?: SysNationalityCreateUpdateDto;
  nationalityName?: string;
}

export interface LicenseProjectRequestStatusDto  {
    id: LicenseProjectRequestStatusEnum;

    name: string;
}

export interface LicenseProjectRequestTypeDto  {
    id: LicenseProjectRequestTypeEnum;
    name: string;
}

export interface LicenseProjectRequestEventStatusDto {
    requestId: number;
    isLastStudyStep: boolean;
    allowExecute: boolean;
    allowAssign: boolean;
    allowFeedback: boolean;
    allowCustomerFeedback: boolean;
    allowReject: boolean;
    allowApprove: boolean;
    allowCertify: boolean;
    allowCompile: boolean;
    allowExecutePeriod: number;
    allowCompilePeriod: number;
    allowFeedbackPeriod: number;
    allowCustomerFeedbackPeriod: number;
    allowRejectPeriod: number;
    allowApprovePeriod: number;
    allowCertifyPeriod: number;
    allowCompileRemainingPeriod: number;
    allowExecuteRemainingStudyPeriod: number;
    allowFeedbackRemainingStudyPeriod: number;
    allowCustomerFeedbackRemainingStudyPeriod: number;
    allowRejectRemainingStudyPeriod: number;
    allowApproveRemainingStudyPeriod: number;
    allowCertifyRemainingStudyPeriod: number;
}
// export interface LicenseProjectRequestEventStatusDto {
//     requestId: number;
//     isLastStudyStep: boolean;
//     allowAssign: boolean;
//     allowFeedback: boolean;
//     allowCustomerFeedback: boolean;
//     allowReject: boolean;
//     allowApprove: boolean;
//     allowCertify: boolean;
//     allowFeedbackPeriod: number;
//     allowCustomerFeedbackPeriod: number;
//     allowRejectPeriod: number;
//     allowApprovePeriod: number;
//     allowCertifyPeriod: number;
//     allowFeedbackRemainingStudyPeriod: number;
//     allowCustomerFeedbackRemainingStudyPeriod: number;
//     allowRejectRemainingStudyPeriod: number;
//     allowApproveRemainingStudyPeriod: number;
//     allowCertifyRemainingStudyPeriod: number;
// }

export interface RequestPhase  {
    id:number;
    phaseName: string;
    lastUpdateOn: string | null;
    requestPhaseStatus: string | null;
    phaseType: RequestPhaseTypes;
}

export enum RequestPhaseTypes {
    Done = 1,
    Current = 2,
    Next = 3
}

export interface SysNationalityCreateUpdateDto  {
    id:string;
    nationalityName: string;
}
