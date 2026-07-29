import {
  LiceneProjectBeneficiaryTypeEnum,
  LicenseProjectExchangeDocumentMainItemEnum,
  LicenseProjectExchangeDocumentSubItemEnum,
  LicenseProjectExchangeDocumentStatusEnum,
} from '../dataModels/license-project-exchange-document-paging-dto';
import { LicenseProjectExchangeDocumentRejectionBy } from './exchange-documents-details-response';

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
  statusName: string | null;
  exchangeDate: Date | null;
  licenseProjectExchangeDocumentRejectionBy: LicenseProjectExchangeDocumentRejectionBy | null;
}
