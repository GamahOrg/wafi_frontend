import { SysFileManagerCreateUpdateDto } from "../../license/models/license-request-project-details-dto";
import { Customer } from "../../qualifying/dataModels/customer.model";
import {LicenseProjectRequestDto } from "./request-header-details";


export interface ChangeLicenseProjectDelegatorRequestDto {
    id:string;
   licenseProjectRequestId:string;
   licenseProjectRequest:LicenseProjectRequestDto;
   projectName:string

//فلاج لتحديد نوع المفوضين سيتم حذفهم من المشروع او اضافتهم
  isRemovableRequest:boolean;

//نموذج الطلب
applicationFormFileId :string;
 applicationFormFile: SysFileManagerCreateUpdateDto;

//قائمة المفوضين
 changeLicenseProjectDelegatorList:ChangeLicenseProjectDelegatorListDto[];
}
export interface ChangeLicenseProjectDelegatorListDto {
    id:string;
    changeLicenseProjectDelegatorRequestId :string;

delegatorCustomerId :string;
  delegatorCustomer :Customer;
}
export interface ChangeLicenseProjectDelegatorRequestCreatUpdateDto
{
    id:string;
    licenseProjectId :string;
    acknowledgement:string;
   facilityId :string;
    //فلاج لتحديد نوع المفوضين سيتم حذفهم من المشروع او اضافتهم
    isRemovableRequest :boolean;
   
    //نموذج الطلب
     applicationFormFileId:string;
   
    //قائمة المفوضين
     changeLicenseProjectDelegatorList:ChangeLicenseProjectDelegatorListCreateUpdateDto[];
}
export interface ChangeLicenseProjectDelegatorListCreateUpdateDto
{
  id:string;
changeLicenseProjectDelegatorRequestId :string;
 delegatorCustomerId :string;
}