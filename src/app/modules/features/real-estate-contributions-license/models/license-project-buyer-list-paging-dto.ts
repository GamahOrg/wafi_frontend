import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { FacilityShortDto } from "./facility-short-dto";

export interface LicenseProjectBuyerListPagingDto {
    id:string;
    name :string;
    nidNumber :string;
    mobile :string;
    facilityId :string;
    contractFileId :string;
     facility: FacilityShortDto
    statusId :number
     status :LicenseProjectBuyerStatusDto;
     contractFile: SysFileManagerCreateUpdateDto;
}
export interface LicenseProjectBuyerStatusDto
{
  id:number;
  name:string;
}
export enum LicenseProjectBuyerStatusEnum
{
  
  New = 1,
  Cerified = 2,
  Cancelled = 3,
  RejectCertified = 4
}
