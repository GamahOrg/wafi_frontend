export interface UpdateChangePlanForEngineeringConsultantDto {
    id:string;
    licenseProjectRequestId :string;

    //أسباب ومبررات تغيير خطة المشروع
    reasonsAndJustificationsForChangingProjectPlan :string;
    //ملف جدول زمني للمشروع
    projecTimelineFileAttachments :ProjecTimelineFileAttachmentCreateUpdateDto[];
    //صور للمشروع
     licenseProjectRequestChangePlanProjectAttachments :LicenseProjectRequestChangePlanProjectAttachmentCreateUpdateDto[];
    //نسبة إنجاز المشروع
    achievementRate :number;
      //حالة بدا المشروع الخاصة بمكتب الاستشاري الهندسي
      isProjectStartedForEngineeringConsultant:boolean;
    //آخرتقرير هندسي
   lastEngineeringReportId:string;
}
export interface LicenseProjectRequestChangePlanProjectAttachmentCreateUpdateDto
{
    id:string;
    licenseProjectRequestChangePlanId :string;
    documentFileId :string;
}
export interface ProjecTimelineFileAttachmentCreateUpdateDto
{
id:string;
licenseProjectRequestChangePlanId :string;
documentFileId :string;
}
