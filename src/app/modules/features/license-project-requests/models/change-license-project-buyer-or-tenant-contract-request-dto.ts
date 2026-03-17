import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestDto } from "./request-header-details";

export interface ChangeLicenseProjectBuyerOrTenantContractRequestDto {
    id:string;
     licenseProjectRequestId :string;
   licenseProjectRequest: LicenseProjectRequestDto 
//نموذج الطلب، موضحاً به أسباب طلب التغيير
  applicationFormFileId :string;
 applicationFormFile :SysFileManagerCreateUpdateDto
//نسخة من العقد
contarctCopyId :string;
 contarctCopy :SysFileManagerCreateUpdateDto
//موافقة مكتوبة من المشترين أو المستاجرين على التغيير فى عقودهم
writtenAgreementFromBuyerOrTenantId:string;
 writtenAgreementFromBuyerOrTenant :SysFileManagerCreateUpdateDto
}
export interface ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto {
    id:string;
     licenseProjectId :string;
    facilityId :string;
//نموذج الطلب، موضحاً به أسباب طلب التغيير
  applicationFormFileId :string;
//نسخة من العقد
contarctCopyId :string;
//موافقة مكتوبة من المشترين أو المستاجرين على التغيير فى عقودهم
writtenAgreementFromBuyerOrTenantId:string;
}