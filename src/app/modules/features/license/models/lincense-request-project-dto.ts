import { FacilityShortDto } from "./facility-short-dto"

export interface LincenseProjectRequest {
  id: string,
  requestCode?: string,
  facility: FacilityShortDto,
  licenseProjectName: string,
  externalRequestStatusId: number,
  externalRequestStatusName: string,
  licenseProjectRequestTypeName: string,
  licenseProjectRequestTypeId: number,
  createdOn: Date
}

export interface LicenseRequestTypes {
  id: number,
  name: string,
  description?: string,
  serviceCategory: number // 1=ProjectServices, 2=GeneralServices
}

export interface LicenseProjectRequestValidationResultDto {
  isValid: boolean;
  errorCode?: number;
  message?: string;
  licenseRequestId?: string;
}

export interface LicenseProjectRequestStepDto {
  id: string;
  description: string;
  order: number;
}

export interface LicenseProjectRequestTypeDetailsDto {
  id: number;
  name: string;
  description?: string;
  targetAudience?: string;
  paymentMethod?: string;
  studyPeriodInDays?: number;
  completionTimeInMinutes?: number;
  steps: LicenseProjectRequestStepDto[];
}

export interface CreateDraftLicenseProjectRequestDto {
  licenseProjectId: string;
  facilityId: string;
  licenseProjectRequestType: number;
  isFromRequirementsApproval: boolean;
}
export interface CreateInitialLicenseProjectChangePlanRequestDto {
  licenseProjectId: string;
  facilityId: string;
  customerId: string;
  isFromRequirementsApproval: boolean;
}
