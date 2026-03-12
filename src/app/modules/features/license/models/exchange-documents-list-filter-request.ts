import { LicenseProjectExchangeDocumentStatusEnum } from './../dataModels/license-project-exchange-document-paging-dto';

export interface GetExchangeDocumentListFilterRequest {
  licenseProjectId: string;
  pageIndex: number;
  pageSize: number;
  documentNumber?: string | null;
  statusId?: LicenseProjectExchangeDocumentStatusEnum;
}
