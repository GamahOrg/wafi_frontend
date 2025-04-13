export interface ComplaintRequest {
    id:string;
    customerId:string;
    customerName:string;
    nIDNumber:string;
    facilityName:string;
    commercialRegisterNumber:string;
    email:string;
    phone:string;
   description:string;
    complaintRequestTypeId:number;
     complaintRequestStatusId:number;
   
    ComplaintRequestFiles :ComplaintRequestFileCreateDto[];
}
export interface ComplaintRequestFileCreateDto
{
    id:string;
    complaintRequestId :string;
    complaintFileId :string;
}
export interface ComplaintRequestTypeDto
{
    id:number;
    name:string;
}