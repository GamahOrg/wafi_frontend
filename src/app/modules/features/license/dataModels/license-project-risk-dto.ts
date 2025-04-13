import { licenseProjectAddresses } from "../models/project-units";

export interface LicenseProjectRiskDto {
    id:string;
    licenseProjectId :string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
      //رقم الخطر
        riskNumber :string;
      //وصف المخاطر
        description :string;
        riskTypeId :number;
      //الأستمرارية
        continuityId :number
      //التأثير
        effect :number;
      //الاحتمالية
        probability :number;
      //وصف التأثير
        effectDescription :string;
      ///خطة الاستجابة استراتيجية الاحتواء
      responsePlanContainmentStrategy :string;
      //مالك الحل
       solutionOwnerId :number;
      //الحالة
       riskStatusId :number;

        solutionOwner :SysOwnerTypeDto;
        continuity: SysContinuityDto;
        riskType :SysLicenseProjectRiskTypeDto; 
        riskStatus :SysRiskStatusDto;
      //الجهات المسؤولة
    licenseProjectRiskResponsibleParties :LicenseProjectRiskResponsiblePartyDto[]
   licenseProject :LicenseProjectDto;
}
export interface SysOwnerTypeDto
{
  id:number;
  name:string;
}
export interface SysContinuityDto
{
  id:number;
  name:string;
}
export interface SysLicenseProjectRiskTypeDto
{
  id:number;
  name:string;
}
export interface SysRiskStatusDto
{
  id:number;
  name:string;
}
export interface LicenseProjectRiskResponsiblePartyDto
{
    id:number;
    responsiblePartyId:number;
    licenseProjectRiskId :string;
    responsibleParty :SysResponsiblePartyDto;
}
export interface SysResponsiblePartyDto
{
  id:number;
  name:string;
}

export interface LicenseProjectRiskPagingDto
{
  id:string;
  licenseProjectId :string;
    //رقم الخطر
      riskNumber :string;
    //وصف المخاطر
      description :string;
      riskTypeId :number;
    //الأستمرارية
      continuityId :number
    //التأثير
      effect :number;
    //الاحتمالية
      probability :number;
    //وصف التأثير
      effectDescription :string;
    ///خطة الاستجابة استراتيجية الاحتواء
    responsePlanContainmentStrategy :string;
    //الحالة
     riskStatusId :number;

      continuity: SysContinuityDto;
      riskType :SysLicenseProjectRiskTypeDto; 
      riskStatus :SysRiskStatusDto;
      priorityClassValue:string;
      statusClassValue:string;
}
export interface LicenseProjectDto
{
  id:string;
   name :string;
   projectCode :string;
   accountNumber :string;
   licenseProjectAddresses:licenseProjectAddresses[];
}
export interface LicenseProjectRiskCountsDto
{
        closedRisksNumber:number; 
        expectedRisksNumber :number; 
        turningIntoProblemRisksNumber :number; 
}
export interface LicenseProjectRiskCreateUpdateDto
{
  id:string;
  licenseProjectId :string;
   licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    //وصف المخاطر
      description :string;
      riskTypeId :number;
    //الأستمرارية
      continuityId :number
    //التأثير
      effect :number;
    //الاحتمالية
      probability :number;
    //وصف التأثير
      effectDescription :string;
    ///خطة الاستجابة استراتيجية الاحتواء
    responsePlanContainmentStrategy :string;
    //مالك الحل
     solutionOwnerId :number;
    //الحالة
     riskStatusId :number;
     riskResponsiblePartyIds:number[];
}

export enum RiskStatus
{
        turnOnProblem=1, 
        closed =2,
        opened=3,
}
