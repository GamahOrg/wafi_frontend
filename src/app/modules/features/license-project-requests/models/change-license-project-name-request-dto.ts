import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestDto } from "./request-header-details";

export interface ChangeLicenseProjectNameRequestDto {
    id:string;
   licenseProjectRequestId :string;
       licenseProjectRequest :LicenseProjectRequestDto;
       projectName :string;
    //نموذج الطلب، موضحاً به البنود التي تم تعديلها والأسباب
     applicationFormFileId :string;
     applicationFormFile :SysFileManagerCreateUpdateDto;
    //نموذج عقد البيع/التأجير متضمناً الاسم الجديد للمشروع
     salesOrRentalContractId :string;
   salesOrRentalContract :SysFileManagerCreateUpdateDto;
}
export interface ChangeLicenseProjectNameRequestCreateUpdateDto {
    id:string;
    licenseProjectId :string;
   facilityId :string;
  projectName :string;
    //نموذج الطلب، موضحاً به البنود التي تم تعديلها والأسباب
     applicationFormFileId :string;
    //نموذج عقد البيع/التأجير متضمناً الاسم الجديد للمشروع
     salesOrRentalContractId :string;
}
