import { SysLicenseProjectEngineeringWorksDto } from "./license-project-engineering-works-examination-details";

export interface LicenseProjectEngineeringWorksExaminationPagingDto {
    id:string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
   //الأعمال
    sysLicenseProjectEngineeringWorksId :string;
   //عدد طلبات فحص الأعمال المعتمد – عن فترة التقرير
    noOfApproved :number;
   //عدد طلبات فحص الأعمال غير المعتمد – عن فترة التقرير
    noOfRejected :number;
   //عدد طلبات فحص الأعمال تحت المراجعة – عن فترة التقرير
    noOfUnderReview :number;
   //الملاحظات
    notes :string;
sysLicenseProjectEngineeringWorks :SysLicenseProjectEngineeringWorksDto;
    
}
export interface LicenseProjectEngineeringWorksExaminationCreateUpdateDto
{
    id:string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
   //الأعمال
    sysLicenseProjectEngineeringWorksId :string;
   //عدد طلبات فحص الأعمال المعتمد – عن فترة التقرير
    noOfApproved :number;
   //عدد طلبات فحص الأعمال غير المعتمد – عن فترة التقرير
    noOfRejected :number;
   //عدد طلبات فحص الأعمال تحت المراجعة – عن فترة التقرير
    noOfUnderReview :number;
   //الملاحظات
    notes :string;
}