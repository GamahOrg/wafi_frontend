export interface CreateUpdateChangePlanForRealEstateDeveloperDto {
    id:string;
    licenseProjectRequestId :string;
//تاريخ نهاية المشروع الجديد
 projectEndDate :Date;
//مبررات ومشفوعات تغيير خطة
justificationsAndReasons:string;
//خطاب موافقة المشترين
 buyersApprovalLetterFileId :string;
//خطاب اعتماد تاريخ بداية ونهاية المشروع بعد التعديل من الجهة الحكومية
 approvalLetterForStartEndDateId:string;

}


export interface CreateChangePlanForRealEstateDeveloperDto {
    licenseProjectId: string;
    facilityId: string;
    projectEndDate: string;
    justificationsAndReasons: string | null;
    buyersApprovalLetterFileId: string;
    approvalLetterForStartEndDateId: string | null;
}