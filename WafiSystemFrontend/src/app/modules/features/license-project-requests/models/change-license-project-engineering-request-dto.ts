import { SysFileManagerCreateUpdateDto } from "../../license/models/license-request-project-details-dto";
import { FacilityShortDto, LicenseProjectRequestDto } from "./request-header-details";

export interface ChangeLicenseProjectEngineeringRequestDto {
    id:string;
     licenseProjectRequestId :string;
  licenseProjectRequest :LicenseProjectRequestDto;

//المكتب الاستشارى الجديد
 engineeringFacilityId :string;
  engineeringFacility: FacilityShortDto

//المكتب الاستشارى السابق
 previousEngineeringFacilityId:string;
 previousEngineeringFacility: FacilityShortDto

//نموذج الطلب، موضحاً به أسباب طلب التغيير
  reasons:string;
//اتفاقية المكتب الاستشارى البديل
 alternativeConsultingOfficeAgreementId :string;
 alternativeConsultingOfficeAgreement: SysFileManagerCreateUpdateDto;

//اقرار مخالصة المكتب الاستشارى السابق
 clearanceEngineeringConsultantFileId :string;
 clearanceEngineeringConsultantFile : SysFileManagerCreateUpdateDto;

//تقرير المكتب الاستشاري السابق عن المشروع
 previousConsultingOfficeReportId :string;
previousConsultingOfficeReport : SysFileManagerCreateUpdateDto;
}
