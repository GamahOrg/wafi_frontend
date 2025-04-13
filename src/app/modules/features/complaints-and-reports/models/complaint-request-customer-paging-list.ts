import { ComplaintRequestStatusDto, ComplaintRequestTypeDto } from "./complaint-request-type-dto";

export interface ComplaintRequestCustomerPagingList {
    id:string;
    customerName:string;
    nidNumber:string;
    facilityName:string;
    commercialRegisterNumber:string;
    email:string;
    phone:string;
   description:string;
     complaintRequestType:ComplaintRequestTypeDto
     complaintRequestStatus:ComplaintRequestStatusDto
}
