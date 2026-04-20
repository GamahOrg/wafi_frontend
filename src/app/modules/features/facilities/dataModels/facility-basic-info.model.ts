
import { CityWithChambersOfCommerceCityCodeDto } from "src/app/shared/models/lookups/city-dto";
import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface FacilityBasicInfo {
  facilityCode: string;
  commercialRegisterNumber: string;
  entity700Number:string,
  previouslyQualifiedFacilityEntity700Number:string,
  isIssuesExist: boolean;
  availabilityToUpdate: boolean;
  capitalNumber: null | string;
  commercialRegisterStartDate: Date;
  saudiAuthorityOfEngineersLicenseNumber: string;
  saudiAuthorityOfEngineersLicenseFileId: string;
  saudiAuthorityOfEngineersLicenseFile: null | SysFileManagerCreateUpdateDto;
  companyEstablishingContractFileId: string;
  saudiAuthorityForAuditorsAndAccountants: null | string;
  saudiAuthorityForAuditorsAndAccountantsFileId: string;
  saudiAuthorityForAuditorsAndAccountantsFile: null | SysFileManagerCreateUpdateDto;
  commercialRegisterEndDate: Date;
  facilityName: string;
  crNationalNumber: string;
  companyCodeInFinancialMarket: null | string;
  previouslyQualifiedFacilityCommercialRegistrationNumber: null | string;
  facilityType: string;
  chamberOfCommerceMembershipNumber: string;
  cityId: string;
  socialInsuranceCertificateNumber: string;
  website: null | string;
  fax : string;
  email :null | string;
  poBox : string;
  postalCode : string;
  telephone : string;
  registrationDateTime: Date;
  isActive: boolean;
  isLocked: null | boolean;
  lockedTo: null | boolean;
  customersId: string;
  cooperativeSocietyLicensingFileManager: null | SysFileManagerCreateUpdateDto;
  qualificationValFileManagerId:string;
  logoFileId:string;
  qualificationValFileManager: null | SysFileManagerCreateUpdateDto;
  logoFile: null | SysFileManagerCreateUpdateDto;
  facilityBusinessTypes: facilityBusinessType[]
  qualificationFacilityCertifications: qualificationFacilityCertification[];
  qualificationIssuesDocuments: qualificationIssuesDocument[];
  companyEstablishingContractFileManager: SysFileManagerCreateUpdateDto | null;
  qualificationSocialInsuranceEmployeeLists: qualificationSocialInsuranceEmployee[];
  facilityOwners: facilityOwnerDto[]
  id: string;
  socialInsuranceEmployeesListFileId:string;
  socialInsuranceEmployeesListFileManager: null | SysFileManagerCreateUpdateDto;
  qualificationFacilityServiceProvidersCertificateNumbers: qualificationFacilityServiceProvidersCertificateNumbers[];
  city?: CityWithChambersOfCommerceCityCodeDto;
  // realEstateMarketerQualificationRequirements: realEstateMarketerQualificationRequirements[]
  // qualificationBrokerRequirements: qualificationBrokerRequirement[]

}

// fileManger
export interface qualificationFacilityCertification {
  certificationFile: SysFileManagerCreateUpdateDto,
  id: string
}
export interface facilityOwnerDto
{
     ownerName:string
     nidnumber:string
     email: null | string
     ownerNationalityAR:null | string
     relationType:null | string
     mobile:null | string
}
export interface qualificationSocialInsuranceEmployee {
  name: string
  employeeIdentificationNumber: string
}
export interface facilityBusinessType {
  name: string
  businessType: string
}
export interface realEstateMarketerQualificationRequirements {
  facilityId: string,
  passingMarketerCertificateFile: SysFileManagerCreateUpdateDto,
  id: string

}

export interface qualificationIssuesDocument {
  facilityId: string,
  fileManager: SysFileManagerCreateUpdateDto | null,
  id: string
}
export interface qualificationBrokerRequirement {
  brokerDocumentTypeId: string,
  ownershipDocumentNumber: string | null,
  rentDocumentNumber: string | null,
  passingBrokerCertificateFileId: string | null,
  brokerDocumentType: string,
  passingBrokerCertificateFile: SysFileManagerCreateUpdateDto | null,
  id: string
}
export interface FacilityBasicUpdateInfo {
  id: string,
  entity700Number:string,
  previouslyQualifiedFacilityEntity700Number:string,
  crNationalNumber: string,
  qualificationFacilityServiceProvidersCertificateNumbers: qualificationFacilityServiceProvidersCertificateNumbersDTO[], // added
  companyCodeInFinancialMarket: string,
  cooperativeSocietyLicensingFileId: string,
  website: string,
  fax : string;
  email : string;
  poBox : string;
  postalCode : string;
  telephone : string;
  companyEstablishingContractFileId: string,
  chamberOfCommerceMembershipNumber: string,
  cityId: string,
  socialInsuranceCertificateNumber: string,
  saudiAuthorityOfEngineersLicenseNumber: string,
  saudiAuthorityForAuditorsAndAccountants: string,
  previouslyQualifiedFacilityCommercialRegistrationNumber: string,
  commercialRegisterNumber: string | null,
  isIssuesExist: boolean;
  socialInsuranceEmployeesListFileManager: null | SysFileManagerCreateUpdateDto;
  socialInsuranceEmployeesListFileId:string;

  // qualificationRealEstateMarketerRequirementCreateUpdateDto: qualificationRealEstateMarketerRequirementCreateUpdate,
  // qualificationBrokerRequirementCreateUpdate: qualificationBrokerRequirementCreateUpdateDTO,

  qualificationIssuesDocumentCreateUpdateDtos: qualificationIssuesDocumentCreateUpdate[],

  // qualificationFacilityCertificationCreateUpdateDto: qualificationFacilityCertificationCreateUpdateDto,
  // QualificationFacilityCertification: qualificationFacilityCertification
  qualificationValFileManagerId:string;
  logoFileId:string;
}
export enum brokerDocumentType {
  'TitleDeed' = 1,
  'RentContract' = 2,
}
export interface qualificationRealEstateMarketerRequirementCreateUpdate {
  id: string,
  facilityId: string,
  passingMarketerBrokerCertificateFileId: string
}
export interface qualificationBrokerRequirementCreateUpdateDTO {
  id: string,
  brokerDocumentTypeId: brokerDocumentType,
  facilityId: string,
  // ownershipDocumentNumber: string | null,
  // rentDocumentNumber: string,
  documentNumber: string | null,
  passingBrokerCertificateFileId: string
}
export interface qualificationIssuesDocumentCreateUpdate {
  id: string,
  fileManagerId: string,
  facilityId: string
}
export interface qualificationFacilityCertificationCreateUpdateDto {
  id: string,
  facilityId: string,
  certificationFileId: string
}
export interface qualificationFacilityServiceProvidersCertificateNumbersDTO {
  certificationNumber: string,
  description: string,
  id: string,
  facilityId: string
}
/**
 * Slim request DTO matching UpdateFacilityBasicInfoDto on the backend.
 * Contains only the fields present in the Edit Facility Basic Info form.
 */
export interface UpdateFacilityBasicInfoRequest {
  id: string;
  entity700Number?: string;
  socialInsuranceCertificateNumber?: string;
  website?: string;
  telephone?: string;
  fax?: string;
  postalCode?: string;
  email?: string;
  poBox?: string;
  cooperativeSocietyLicensingFileId?: string;
}

export interface qualificationFacilityServiceProvidersCertificateNumbers {
  certificationNumber: string,
  description: string,
  id: string,
  facilityId: string,
}
// expoct interface qualificationFacilityCertificationCreateUpdate {

// }
