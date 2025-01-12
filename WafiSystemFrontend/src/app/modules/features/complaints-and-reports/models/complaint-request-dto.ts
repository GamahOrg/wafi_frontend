import { ComplaintCustomerDto } from "./complaint-customer-dto";
import { ComplaintRequestFileDto } from "./complaint-request-file-dto";
import { ComplaintRequestStatusDto, ComplaintRequestTypeDto } from "./complaint-request-type-dto";

export interface ComplaintRequestDto {
    id:string;
    customerId:string;
     customerName :string;
   nidNumber :string;
   facilityName :string;
    commercialRegisterNumber :string;
     email :string;
     phone :string;
     description :string;
    complaintRequestTypeId :number;
   complaintRequestStatusId :number;
    customer ?: ComplaintCustomerDto;
    complaintRequestFiles :ComplaintRequestFileDto[];
    complaintRequestType:ComplaintRequestTypeDto
    complaintRequestStatus:ComplaintRequestStatusDto
}
