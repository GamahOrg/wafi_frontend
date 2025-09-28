import { OwnerTypeEnum } from "./license-project-recommendations";

export interface LicenseProjectProblemPagingDto {
    id:string;
    createdOn:Date;
    licenseProjectId :string;
    ownerTypeId: OwnerTypeEnum;

    //الرقم
    number :string;
    //نوع المشكلة
    problemTypeId:string;
    //وصف المشكلة
    description :string;
    //تاريخ الحدوث
   issueDate :Date;
    //الشدة
    levelTypeId :number;
    //المالك
    RiskOwnerId :number;
    //الحل المقترح
   recommendedAction:string;
    //تاريخ الاغلاق المقترح
    ExpectedClosureDate :Date;
    //الحالة
    statusId :number;
    //تاريخ الاغلاق الفعلى
    actualClosureDate:Date;
      riskOwner :SysOwnerTypeDto
      levelType :SysLevelTypeDto;
      problemType :SysLicenseProjectRiskTypeDto;
      status :SysStatusIssueTypeDto
      levelClassValue:string;
      statusClassValue:string;
      daysPassed:number;
}
export interface SysLevelTypeDto
{
    id:number;
    name:string;
}
export interface SysStatusIssueTypeDto
{
    id:number;
    name:string;
}
export enum levelType
{
    high=1,
    medium=2,
    low=3,
}
export enum status
{
    closed=1,
    opened=2,
}

export interface SysOwnerTypeDto {
  id: number;
  name: string;
}
export interface SysLicenseProjectRiskTypeDto {
  id: number;
  name: string;
}
export interface LicenseProjectProblemsCountsDto {
  closedProblemsNumber :number
  openedProblemsNumber :number
}


export enum statusProblem
{
    closed=1,
    opened=2,
}
