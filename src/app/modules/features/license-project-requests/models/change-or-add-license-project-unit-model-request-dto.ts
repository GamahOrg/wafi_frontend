import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestDto } from "./request-header-details";

export interface ChangeOrAddLicenseProjectUnitModelRequestDto {
    id:string;
      licenseProjectRequestId :string;
       licenseProjectRequest :LicenseProjectRequestDto 
   
    //نموذج الطلب، موضحاً به مبررات الطلب ومتضمناً تعهد بعدم التعديل على الوحدات المباعة
    applicationFormFileId :string;
    applicationFormFile :SysFileManagerCreateUpdateDto
   
    //البرنامج الزمني شامل كافة منحنيات البرنامج الزمني
   timelineIncludingAllTimelineCurvesId :string;
     timelineIncludingAllTimelineCurves :SysFileManagerCreateUpdateDto
   
    //جدول الأوزان النسبية المحدث
    updatedRelativeWeightsTableId :string;
       updatedRelativeWeightsTable :SysFileManagerCreateUpdateDto;
}
