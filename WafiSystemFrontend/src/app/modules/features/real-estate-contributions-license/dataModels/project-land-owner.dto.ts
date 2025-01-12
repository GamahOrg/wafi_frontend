import { LandOwnerType } from "src/app/core/enums/land-owner-type.enum";
import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class ProjectLandOwnerDto {
    id:string = '';
    typeId:string = '';
    typeName:string|undefined = '';
    landDeedId : string = "";
    licenseProjectsId:string = '';
    nationalIdOrCRA:string = '';
    name:string = '';
    mobileNumber:string = ''; 
    agreementFileId:string|null = null;
    selected:boolean= false;
    agreementFile:SysFileManagerCreateUpdateDto |null= null;
}
export class ProjectLandOwnerCreateUpdateDto {
    id:string = '';
    typeId:string = '';
    landDeedId : string = "";
    licenseProjectsId:string = '';
    nationalIdOrCRA:string = '';
    name:string = '';
    mobileNumber:string = ''; 
    agreementFileId:string |null = null;
}
export class ProjectLandOwnerDeedCreateUpdateDto {
    id:string = '';
   
}
export class SaveDeedLandOwnersDto
{
    listOfOwnerIds : string[] = [];
    deedId :string = '';
    licenseProjectsId :string = '';
}
export class SysLicenseProjectLandOwnerTypeCreateUpdateDto{
    id:string = '';
    name:string = '';
    type:LandOwnerType = LandOwnerType.Company;
}
export class SysLicenseProjectLandOwnerTypeDto
{
    name:string="";
    type :number=0;
}