import { ComplaintRequestFileCreateDto } from "./complaint-request-file-create-dto";

export interface ComplaintRequestCreateUpdateDto {
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
