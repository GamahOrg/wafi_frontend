import { FacilityTypeCategory } from "../../../../shared/models/customer.model";
import { qualificationIssuesDocumentCreateUpdate } from "./facility-basic-info.model";

export interface UpdateFacilityBasicDataInfoAllTypesDto  {
  facilityTypeCategory: FacilityTypeCategory | null;
  isIssuesExist: boolean | null;
  facilityType: string | null;
  companyEstablishingContractFileId: string | null;
  socialInsuranceEmployeesListFileId: string | null;
  chamberOfCommerceMembershipNumber: string | null;
  saudiAuthorityOfEngineersLicenseNumber: string | null;
  saudiAuthorityForAuditorsAndAccountants: string | null;
  cityId: string | null;
  logoFileId: string | null;
  qualificationIssuesDocumentCreateUpdateDtos: qualificationIssuesDocumentCreateUpdate[],
  certificationFileId: string | null,
  certificationDegreeId: number | null,
  saudiAuthorityOfEngineersLicenseFileId: string | null,
  saudiAuthorityForAuditorsAndAccountantsFileId: string | null,
  id: string,

}
