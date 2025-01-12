import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { licenseProjectSubUnitsListCodes, licenseProjectUnits, licenseProjectZones } from "../models/project-units";
import { LicenseProjectQualityNoticeReplyDto } from "./license-project-quality-notice-reply-dto";

export interface LicenseProjectQualityNoticeDto {
    id:string;
    licenseProjectId :string;
     //رقم الاشعار
      code :string;
     //كود القطاع
     sectorCode :string;
      ownerTypeId :number;
     //الزون
     zoneId :string;
       zone: licenseProjectZones;
 
     //البلوك
    licenseProjectUnitId :string;
      licenseProjectUnit :licenseProjectUnits;
     //الملاحظات
      notes :string;
     //الملاحظة متكررة
     isRepeated :boolean;
     //حالة الاشعار
    isClosed :boolean;
     //تاريخ غلق الاشعار
     closedDate:Date;
     //الاجراء التصحيحى المتخذ
     correctiveActionTakenId :number;
     correctiveActionTaken:SysCorrectiveActionTakenDto
     //نوع الملاحظة
     noteTypeId :number;
      noteType :SysQualityNoticeNoteTypeDto;
     //الملاحظة متعلقة
      qualityNoticeRelatedNoteTypeId :number;
     qualityNoticeRelatedNoteType:SysQualityNoticeRelatedNoteTypeDto;
     //الهندس المسؤول
     employeeId :string;
    employee:EmpolyeeByAdminIdResponse;
     //الادوار
      licenseProjectQualityNoticeFloors:LicenseProjectQualityNoticeFloorDto[];
     //الوحدات
      licenseProjectQualityNoticeUnits :LicenseProjectQualityNoticeUnitDto[];
     //صور الملاحظة
      licenseProjectQualityNoticeImages:LicenseProjectQualityNoticeImageDto[];
     //الردود
    licenseProjectQualityNoticeReplies :LicenseProjectQualityNoticeReplyDto[];
 }
 export interface LicenseProjectQualityNoticeFloorDto
 {
     id:string;
     licenseProjectUnitId :string;
     licenseProjectQualityNoticeId :string;
    licenseProjectUnit :licenseProjectSubUnitsListCodes;
 }
 export interface LicenseProjectQualityNoticeUnitDto
 {
     id:string;
     licenseProjectUnitId :string;
     licenseProjectQualityNoticeId :string;
    licenseProjectUnit :licenseProjectSubUnitsListCodes;
 }
 
 export interface LicenseProjectQualityNoticeImageDto
 {
     id:string;
     lmageFileId :string;
     licenseProjectQualityNoticeId :string;
     imageFile :SysFileManagerCreateUpdateDto;
 }
 export interface EmpolyeeByAdminIdResponse{
    employeeName: string,
    id: string
}
export interface SysCorrectiveActionTakenDto {
    id:number;
    name:string;
}
export interface SysQualityNoticeNoteTypeDto {
    id:number;
    name:string;
}
export interface SysQualityNoticeRelatedNoteTypeDto {
    id:number;
    name:string;
}
export interface LicenseProjectQualityNoticePagingDto {
    id:string;
     //رقم الاشعار
      code :string;
     //حالة الاشعار
      isClosed :boolean;
     //تاريخ غلق الاشعار
     closedDate :Date;
}
