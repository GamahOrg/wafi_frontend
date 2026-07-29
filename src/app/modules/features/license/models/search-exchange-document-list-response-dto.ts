import {
  LiceneProjectBeneficiaryTypeEnum,
  LicenseProjectExchangeDocumentMainItemEnum,
  LicenseProjectExchangeDocumentStatusEnum,
  LicenseProjectExchangeDocumentSubItemEnum,
} from '../dataModels/license-project-exchange-document-paging-dto';
import { LicenseProjectExchangeDocumentRejectionBy } from './exchange-documents-details-response';

export interface SearchExchangeDocumentListResponseDto {
  id: string;
  documnetNumber: string;
  licenseProjectName: string;
  licenseProjectId: string;
  liceneProjectBeneficiaryTypeId: LiceneProjectBeneficiaryTypeEnum;
  beneficiaryDescription: string | null;
  mainItemId: LicenseProjectExchangeDocumentMainItemEnum;
  mainItem: string;
  subItemId: LicenseProjectExchangeDocumentSubItemEnum | null;
  subItem: string | null;
  statusId: LicenseProjectExchangeDocumentStatusEnum | null;
  status: string | null;
  exchangeDate: Date | null;
  customerType: CustomerTypeEnum | null;
  licenseProjectExchangeDocumentRejectionBy: LicenseProjectExchangeDocumentRejectionBy | null;
}

export enum CustomerTypeEnum {
  ConsultantDelegator = 1,
  AccountantDelegator = 2,
  DeveloperDelegator = 3,
}
