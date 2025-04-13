import { SysLevelTypeDto, SysStatusIssueTypeDto } from "./license-project-problem-paging-dto";
import { LicenseProjectDto, SysLicenseProjectRiskTypeDto, SysOwnerTypeDto, SysResponsiblePartyDto } from "./license-project-risk-dto";

export interface LicenseProjectProblemDto {
    id:string;
    licenseProjectId :string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId :string;

   //الرقم
    number :string;
   //نوع المشكلة
   problemTypeId :number;
   //وصف المشكلة
   description :string;
   //تاريخ الحدوث
     issueDate :Date;
   //الشدة
     levelTypeId :number;
   //المالك
   riskOwnerId :number;
   //الحل المقترح
     recommendedAction :string;
   //تاريخ الاغلاق المقترح
    expectedClosureDate :Date;
   //الحالة
    statusId :number;
   //تاريخ الاغلاق الفعلى
   actualClosureDate :Date;
   riskOwner :SysOwnerTypeDto;
   levelType :SysLevelTypeDto;
     problemType: SysLicenseProjectRiskTypeDto
     status :SysStatusIssueTypeDto
   //الجهة المسؤولة عن الحل فى حالة الحدوث
     licenseProjectProblemResponsibleParties  :LicenseProjectProblemResponsiblePartyDto[];
     licenseProject:LicenseProjectDto
     daysPassed:number;
}
export interface LicenseProjectProblemResponsiblePartyDto
{
    responsiblePartyId :number;
     licenseProjectProblemId :string;
     responsibleParty  :SysResponsiblePartyDto
}
