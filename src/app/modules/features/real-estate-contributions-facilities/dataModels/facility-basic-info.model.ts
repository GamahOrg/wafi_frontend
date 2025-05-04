import { CityWithChambersOfCommerceCityCodeDto } from "src/app/shared/models/lookups/city-dto";
import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { facilityOwnerDto } from "../../facilities/dataModels/facility-basic-info.model";

export interface FacilityBasicInfo {
  facilityCode: string;
  crNationalNumber: string;
  commercialRegisterNumber: string;
  entity700Number:string,
  previouslyQualifiedFacilityEntity700Number:string,
  isIssuesExist: boolean;
  commercialRegisterStartDate: Date;
  saudiAuthorityOfEngineersLicenseNumber: string;
  companyEstablishingContractFileId: string;
  saudiAuthorityForAuditorsAndAccountants: null | string;
  commercialRegisterEndDate: Date;
  facilityName: string;
  companyCodeInFinancialMarket: null | string;
  previouslyQualifiedFacilityCommercialRegistrationNumber: null | string;
  facilityType: string;
  chamberOfCommerceMembershipNumber: string;
  socialInsuranceCertificateNumber: string;
  website: null | string;
  capitalNumber: string;
  registrationDateTime: Date;
  isActive: boolean;
  isLocked: null | boolean;
  lockedTo: null | boolean;
  customersId: string;
  cooperativeSocietyLicensingFileManager: null | SysFileManagerCreateUpdateDto;
  facilityBusinessTypes: facilityBusinessType[]
  qualificationFacilityCertifications: qualificationFacilityCertification[];
  qualificationIssuesDocuments: qualificationIssuesDocument[];
  companyEstablishingContractFileManager: SysFileManagerCreateUpdateDto | null;
  qualificationSocialInsuranceEmployeeLists: qualificationSocialInsuranceEmployee[];
  facilityOwners: facilityOwnerDto[]
  id: string;
  qualificationFacilityServiceProvidersCertificateNumbers: qualificationFacilityServiceProvidersCertificateNumbers[];
  socialInsuranceEmployeesListFileManager: null | SysFileManagerCreateUpdateDto;
  socialInsuranceEmployeesListFileId:string;
  city: CityWithChambersOfCommerceCityCodeDto;
  // realEstateMarketerQualificationRequirements: realEstateMarketerQualificationRequirements[]
  // qualificationBrokerRequirements: qualificationBrokerRequirement[]
}

// fileManger
export interface qualificationFacilityCertification {
  certificationFile: SysFileManagerCreateUpdateDto,
  id: string
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
  qualificationFacilityServiceProvidersCertificateNumbers: qualificationFacilityServiceProvidersCertificateNumbersDTO[], // added
  companyCodeInFinancialMarket: string,
  cooperativeSocietyLicensingFileId: string,
  website: string,
  companyEstablishingContractFileId: string,
  chamberOfCommerceMembershipNumber: string,
  cityId: string,
  socialInsuranceCertificateNumber: string,
  saudiAuthorityOfEngineersLicenseNumber: string,
  saudiAuthorityForAuditorsAndAccountants: string,
  previouslyQualifiedFacilityCommercialRegistrationNumber: string,
  isIssuesExist: boolean;
  socialInsuranceEmployeesListFileId:string;
  // qualificationRealEstateMarketerRequirementCreateUpdateDto: qualificationRealEstateMarketerRequirementCreateUpdate,
  // qualificationBrokerRequirementCreateUpdate: qualificationBrokerRequirementCreateUpdateDTO,

  qualificationIssuesDocumentCreateUpdateDtos: qualificationIssuesDocumentCreateUpdate[],

  // qualificationFacilityCertificationCreateUpdateDto: qualificationFacilityCertificationCreateUpdateDto,
  // QualificationFacilityCertification: qualificationFacilityCertification
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
export interface qualificationFacilityServiceProvidersCertificateNumbers {
  certificationNumber: string,
  description: string,
  id: string,
  facilityId: string,
}
// expoct interface qualificationFacilityCertificationCreateUpdate {

// }
