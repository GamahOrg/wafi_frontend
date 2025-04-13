import { SysFileManagerCreateUpdateDto } from "../models/license-request-project-details-dto";

export interface LicenseProjectBuyerListPagingDto {
    id:string;
      
      contractFileId :string;
       contractFile: SysFileManagerCreateUpdateDto; 
       licenseProjectId :string;
         licenseProjectBuyerTypeId: number
         name :string;
         nidNumber :string;
         mobile :string;
         statusId :number
       status :LicenseProjectBuyerStatusDto;
        licenseProjectBuyerType: LicenseProjectBuyerTypeEnum
       contractNumber :string;
       
}
export interface LicenseProjectBuyerStatusDto
{
    id:number;
    name:string;
}
export interface LicenseProjectBuyerTypeEnum
{
    id:number;
    name:string;
}
export enum LicenseProjectBuyerStatusEnum
{
    
    New = 1,
    Cerified = 2,
    Cancelled = 3,
    RejectCertified = 4,
    Recovery=5
}