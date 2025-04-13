import { FacilityShortDto } from "./facility-short-dto"

export interface LincenseProjectRequest{
    id:string,
    requestCode?: string,
    facility: FacilityShortDto,
    licenseProjectName:string,
    externalRequestStatusName: string,
    licenseProjectRequestTypeName: string,
    licenseProjectRequestTypeId:number,
    createdOn: Date
}

export interface LicenseRequestTypes{
    id : number,
    name : string
}