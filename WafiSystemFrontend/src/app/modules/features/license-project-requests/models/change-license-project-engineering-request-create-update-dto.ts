export interface ChangeLicenseProjectEngineeringRequestCreateUpdateDto {
    id:string;
     licenseProjectId :string;
    facilityId :string;
//المكتب الاستشارى الجديد
 engineeringFacilityId :string;
//نموذج الطلب، موضحاً به أسباب طلب التغيير
 reasons :string;
//اتفاقية المكتب الاستشارى البديل
 alternativeConsultingOfficeAgreementId :string;
//اقرار مخالصة المكتب الاستشارى السابق
 clearanceEngineeringConsultantFileId :string;
//تقرير المكتب الاستشاري السابق عن المشروع
 previousConsultingOfficeReportId :string;
}
