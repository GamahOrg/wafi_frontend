import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export interface LicenseProjectRequestChangePlanFullDto {
    id:string;
    licenseProjectRequestId :string;



    //تاريخ نهاية المشروع الجديد
    projectEndDate :Date;
    //مبررات ومشفوعات تغيير خطة
    justificationsAndReasons :string;
    //خطاب موافقة المشترين
    buyersApprovalLetterFileId :string;
    buyersApprovalLetterFile:SysFileManagerCreateUpdateDto
   
    //خطاب اعتماد تاريخ بداية ونهاية المشروع بعد التعديل من الجهة الحكومية
    approvalLetterForStartEndDateId :string;
    approvalLetterForStartEndDate:SysFileManagerCreateUpdateDto;
   
    //أسباب ومبررات تغيير خطة المشروع
    reasonsAndJustificationsForChangingProjectPlan :string;
    //ملف جدول زمني للمشروع
    projecTimelineFileAttachments :ProjecTimelineFileAttachmentDto[];
    //صور للمشروع
    licenseProjectRequestChangePlanProjectAttachments :LicenseProjectRequestChangePlanProjectAttachmentDto[]
    //نسبة إنجاز المشروع
     achievementRate:number;
         //حالة بدا المشروع الخاصة بمكتب الاستشاري الهندسي
    isProjectStartedForEngineeringConsultant:boolean;
    //أخر تقرير هندسي
     lastEngineeringReportId :string;
    lastEngineeringReport: SysFileManagerCreateUpdateDto
   

    //التكاليف الإجمالية للمشروع (غير شاملة ثمن الأرض) مُحدثة لتاريخ الطلب
   totalProjectCosts :number;
    //رصيد حساب الضمان
    escrowAccountBalance: number;
     //حالة بدا المشروع الخاصه بالمحاسب القانوني
   isProjectStartedCharteredAccountant:boolean;
    //أخر تقرير مالي
     lastFinancialReportId :string;
     lastFinancialReport :SysFileManagerCreateUpdateDto
    //حالة وجود وحدات مباعة
     isThereUnitsSold :boolean;
 //قائمة الوحدات المباعة
   soldUnitsAttachmentId :string;
   soldUnitsAttachment :SysFileManagerCreateUpdateDto;
   
     commercialRegisterNumber :string;
     facilityName:string;
     projectManagerFacilityName:string;
     charteredAccountantFacilityName:string;
     licenseNumber :string;
    licenseExpirationDate :Date;
   projectName :string;
   projectCity :string;
    projectUniteType :string;
    projectUniteCounts :number;
   startOn:Date;
     endOn :Date;
}
export interface ProjecTimelineFileAttachmentDto
{
    id:string
    licenseProjectRequestChangePlanId :string;
    documentFileId :string;
    documentFile: SysFileManagerCreateUpdateDto
}
export interface LicenseProjectRequestChangePlanProjectAttachmentDto
{
id:string;
 licenseProjectRequestChangePlanId :string;
 documentFileId :string;
documentFile :SysFileManagerCreateUpdateDto
}
