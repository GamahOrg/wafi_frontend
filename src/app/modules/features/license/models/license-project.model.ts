import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import {
  licenseProjectAddresses,
  licenseProjectConstructionLicenses,
  licenseProjectDesignFiles,
  licenseProjectPlanAccordingApprovedStandardsFiles,
  licenseProjectZones,
} from './project-units';
import { SysLicenseBeneficiaryContractFormListDto } from '../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { LicenseProjectCharteredAccountantFullDto } from './LicenseProjectCharteredAccountantFullDto';
import { LicenseProjectEngineeringConsultantFullDto } from './LicenseProjectEngineeringConsultantFullDto';
import { LicenseProjectFeasibilityStudyFullDto } from './LicenseProjectFeasibilityStudyFullDto';
import { LicenseProjectRealStateMarketerFullDto } from './LicenseProjectRealStateMarketerFullDto';
import { LicenseProjectRelativeWeightDto } from '../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import { ProjectSizeEnum } from '../dataModels/project-basic-data.dto';
import {
  LicenseProjectDelegatorsDto,
  LicenseProjectMainRealStateDeveloperDto,
} from '../dataModels/project-real-state-developer.dto';
import { licenseProjectZoneCaculations } from './license-project-zone-caculations';
import { LicenseProjectExternalAddressDto } from '../dataModels/project-external-address.model';
import {
  ExternalProjectDataDto,
  ProjectDocumentDataDto,
} from './external-project-data-dto';
import { BankingAccountDto } from '../dataModels/banking-account-dto';
import { LicenseProjectExhibitionDto } from '../dataModels/license-project-exhibition-dto';
import { VisitorEngineeringConsultantDto } from '../dataModels/visitor-engineering-consultant-dto';
import { BeneficiaryContractFormAdditionalTermsDto } from './beneficiary-contract-form-additional-terms-dto';
import { LicenseProjectDeveloperDto } from '../dataModels/license-project-developer-dto';
import { LicenseProjectRequestAttachmentDto } from '../dataModels/license-project-request-attachment-dto';
import { LicenseProjectDetachedUnitRequestDetails } from '../dataModels/license-project-detached-unit.model';
import { LicenseProjectFinancialStatementDto } from './LicenseProjectFinancialStatementDto';
import { LicenseProjectPromissoryNoteDto } from '../dataModels/license-project-promissory-note.model';
import { LicenseProjectSubDeveloperDto } from '../dataModels/license-project-sub-developer/license-project-sub-developer-dto';
import { CustomerShortDto } from './facility-short-dto';
import { ProjectLandDeedDto } from '../dataModels/project-land-deed.dto';
import { LicenseProjectScopeEnum } from '../../real-estate-contributions-license/dataModels/project-basic-data.dto';
import { LicenseProjectBusinessPaymentModel, LicenseProjectBusinessPaymentTemplateModel } from './business-payment.model';

export interface LicenseProject {
  //دراسة الجدوى
  licenseProjectFeasibilityStudies: LicenseProjectFeasibilityStudyFullDto[];
  licenseProjectCharteredAccountants: LicenseProjectCharteredAccountantFullDto[];
  licenseProjectEngineeringConsultants: LicenseProjectEngineeringConsultantFullDto[];
  licenseProjectDesignFiles: licenseProjectDesignFiles[];
  licenseProjectPlanAccordingApprovedStandardsFiles: licenseProjectPlanAccordingApprovedStandardsFiles[];
  licenseProjectQuantitiesTableFiles: LicenseProjectQuantitiesTableFileDto[];
  licenseProjectRealStateMarketers: LicenseProjectRealStateMarketerFullDto[];
  licenseProjectServices: any;
  licenseProjectSubDevelopers: LicenseProjectSubDeveloperDto[];
  sysLicenseBeneficiary: SysLicenseBeneficiaryContractFormListDto;
  licenseProjectBeneficiaryContractFormAdditionalTerms: BeneficiaryContractFormAdditionalTermsDto[];
  licenseProjectAddresses: licenseProjectAddresses[];
  licenseProjectExternalAddresses: LicenseProjectExternalAddressDto[];
  licenseProjectDeeds: ProjectLandDeedDto[];
  licenseProjectZones: licenseProjectZones[];
  licenseProjectConstructionLicenses: licenseProjectConstructionLicenses[];
  licenseProjectDelegators: LicenseProjectDelegatorsDto[];
  quantitiesTableAcknowledgment: boolean;
  availabilityToUpdate: boolean;
  projectAccountKeeper: AccountKeeperDto;
  bankingAccount: BankingAccountDto;
  projectRealStateDeveloper: ProjectRealStateDeveloperDto;
  projectMainData: LicenseProjectMainDataDto;
  //بيانات المشروع
  projectLandData: LicenseProjectLandDataDto;
  externalProjectData: ExternalProjectDataDto;
  projectDocumentData: ProjectDocumentDataDto;
  licenseProjectRelativeWeights: LicenseProjectRelativeWeightDto[];
  financialGuaranteeOfProjectOwnershipFile: SysFileManagerCreateUpdateDto;
  licenseProjectZoneCaculations: licenseProjectZoneCaculations;
  licenseProjectMainRealStateDevelopers: LicenseProjectMainRealStateDeveloperDto[];
  licenseProjectExhibitions: LicenseProjectExhibitionDto[];
  licenseProjectVisitorEngineeringConsultants: VisitorEngineeringConsultantDto[];
  licenseProjectDevelopers: LicenseProjectDeveloperDto[];
  LicenseProjectRequestAttachments: LicenseProjectRequestAttachmentDto[];
  licenseProjectSubUnits: LicenseProjectDetachedUnitRequestDetails[];
  licenseProjectFinancialStatements: LicenseProjectFinancialStatementDto[];
  licenseProjectPromissoryNotes: LicenseProjectPromissoryNoteDto[];
  licenseProjectBusinessPayments: LicenseProjectBusinessPaymentModel[];
  isCorrectionPrevented: boolean;
}
export interface SysBank {
  name: string;
}
export interface LicenseProjectMainDataDto {
  //بيانات المشروع
  name: string;
  projectDescription: string;
  projectServices: string;
  typeId: string;
  categoryId: string;
  subCategoryId: string;
  licenseProjectScopeId: string;
  startOn: string;
  endOn: string;
  achievementRate: string;
  engineeringConsultantReportFileId: string;
  quantitiesTableAcknowledgment: boolean;
  engineeringConsultantReportFile: SysFileManagerCreateUpdateDto;
  licenseProjectQuantitiesTableFiles: LicenseProjectQuantitiesTableFileDto[];
  category: SysProjectCategoryCreateUpdateDto;
  subCategory: SysProjectSubCategoryCreateUpdateDto;
  projectSize: ProjectSizeEnum;
  sysLicenseProjectType: SysLicenseProjectTypeCreateUpdateDto;
  licenseProjectScope: SysLicenseProjectScopeDto;
}
export interface LicenseProjectLandDataDto {
  landTotalSpace: string;
  landValue: string;
  buildingFlatArea: string;
  landOwnerApproval: string;
  sellingSpace: number;
}
export interface SysLicenseProjectScopeDto {
  name: string;
  code: LicenseProjectScopeEnum;
}
export interface SysProjectCategoryCreateUpdateDto {
  categoryName: string;
}
export interface SysProjectSubCategoryCreateUpdateDto {
  subCategoryName: string;
}
export interface SysLicenseProjectTypeCreateUpdateDto {
  name: string;
}
export interface LicenseProjectQuantitiesTableFileDto {
  quantitiesTableFile: SysFileManagerCreateUpdateDto;
}
export interface AccountKeeperDto {
  accountNumber: string;
  bankId: string;
  // accountKeeperName: string
  accountKeeperMobile: string;
  accountKeeperTelephone: string;
  accountKeeperEmail: string;
  accountKeeperExtentionNumber: string;
  accountKeeperAgreementFileId: string;
  accountKeeperJobTitle: string;
  accountKeeperFax: string;
  accountKeeperAgreementFile: SysFileManagerCreateUpdateDto;
  sysBank: SysBank;
}
export interface ProjectRealStateDeveloperDto {
  //المدير التنفيذي (اجباري)
  executiveDirectorName: string;
  executiveDirectorEmail: string;
  executiveDirectorMobile: string;
  //ضابط الاتصال (اجباري)
  contactOfficerName: string;
  contactOfficerEmail: string;
  contactOfficerMobile: string;
  // المفوض
  delegatorCustomer?: CustomerShortDto;
  paymentReceiptFile: SysFileManagerCreateUpdateDto;
}
