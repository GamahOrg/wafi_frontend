export interface LincenseProjectRequest{
    id:string,
    requestCode?: string,
    facilityName: string,
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