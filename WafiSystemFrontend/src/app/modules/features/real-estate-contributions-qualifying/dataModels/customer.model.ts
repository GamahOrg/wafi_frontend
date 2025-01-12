import { nationality } from "./nationality.model";
import { facilityDTO } from "./request-details.model";

export interface Customer {
    customerCode: string;
    fullName: string;
    mobile1: string;
    mobile2: string;
    email: string;
    id: string;
    nidnumber: string;
    facility: null | facilityDTO
    jobTitle: string
    nationality: nationality | null
    nationalityId: string

}
