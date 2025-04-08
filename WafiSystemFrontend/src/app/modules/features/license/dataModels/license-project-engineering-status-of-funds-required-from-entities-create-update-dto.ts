export interface LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdateDto {
    id:string;
     licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
     isForDelivery :boolean;
    //نوع الخدمة جهة الاعتماد
     serviceTypeId:number
    //حالة الاعتماد /الموافقة
    accreditationStatusId :number
    //تاريخ أول تقديم
     firstSubmissionDate:Date;
    //تاريخ اخر تقديم
    lastSubmissionDate :Date;
    //تاريخ الاعتماد النهائى
     finalApprovalDate :Date;
    //ملاحظات
     notes :string;
}

export enum accreditationStatus
{
    Released=1,
    Certified=2

}