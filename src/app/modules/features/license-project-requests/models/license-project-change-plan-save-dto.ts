export interface LicenseProjectChangePlanSoldUnitDto {
  licenseProjectBuyerId: string;
  newUnitHandoverDate: string | null;
}

export interface LicenseProjectChangePlanDeedOwnerDto {
  licenseProjectLandOwnerId: string;
  offlineOwnerApprovalFileId: string | null;
  isOwnerByDeveloper: boolean | null;
  isCustomer: boolean | null;
}

export interface LicenseProjectChangePlanSaveDto {
  requestId?: string | null;
  licenseProjectId: string;
  customerId: string;
  facilityId: string;

  newProjectEndDate: string | null;
  previousProjectEndDate: string | null;

  changePlanJustification: string | null;
  hasCoerciveCircumstance: boolean | null;
  coerciveCircumstanceFileId: string | null;
  twoDatesDifference: number | null;
  totalCumulativePreviousExtensionDurationDaysAfterRequest: number | null;
  soldUnits: LicenseProjectChangePlanSoldUnitDto[];
  deedOwners: LicenseProjectChangePlanDeedOwnerDto[];
  isDraft: boolean;
  previousChangeRequestCount: number | null;
  totalCumulativePreviousExtensionDurationDisplay: string | null;
  twoEndDatesDifferenceDisplay: string | null;
  totalCumulativeAfterRequestExtensionDurationDisplay: string | null;
}
