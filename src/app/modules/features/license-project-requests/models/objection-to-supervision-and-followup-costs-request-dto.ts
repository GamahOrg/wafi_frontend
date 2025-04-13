import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectRequestStatusEnum } from '../enums/license-project-request-status.enum';

export interface CreateOrUpdateObjectionToSupervisionAndFollowupCostsRequestDto {
  id?: string;
  licenseProjectRequestId: string;
  licenseProjectId: string;
  facilityId: string;

  // نموذج الطلب
  applicationFormFileId?: string;

  // خطاب من المطور موضحا به سبب الاعتراض
  developerLetterForObjectionId?: string;

  // مستندات داعمة من المطور
  supportingDocumentsFromDeveloperId?: string;
}
export interface ObjectionToSupervisionAndFollowupCostsRequestDetailsDto {
  id: string;
  licenseProjectId: string;
  licenseProjectRequestId: string;
  projectName?: string;
  externalRequestStatusId: LicenseProjectRequestStatusEnum;
  applicationFormFile?: SysFileManagerCreateUpdateDto;
  developerLetterForObjection?: SysFileManagerCreateUpdateDto;
  supportingDocumentsFromDeveloper?: SysFileManagerCreateUpdateDto;
}
