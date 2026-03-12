import {
  LiceneProjectBeneficiaryTypeEnum,
  LicenseProjectExchangeDocumentMainItemEnum,
  LicenseProjectExchangeDocumentSubItemEnum,
  LicenseProjectExchangeDocumentStatusEnum,
} from '../dataModels/license-project-exchange-document-paging-dto';

export interface LicenseProjectExchangeDocumentsOnProjectPagingDto {
  id: string;
  licenseProjectId: string;
  licenseProjectName: string;
  documentNumber: string;
  licenseProjectBeneficiaryTypeId: LiceneProjectBeneficiaryTypeEnum;
  beneficiaryDescription: string | null;
  mainItemId: LicenseProjectExchangeDocumentMainItemEnum;
  mainItem: string;
  subItemId: LicenseProjectExchangeDocumentSubItemEnum | null;
  subItem: string | null;
  statusId: LicenseProjectExchangeDocumentStatusEnum | null;
}
