import { NationalityModel } from "src/app/modules/auth/models/nationality.model";

export interface RelatedCustomerListDto{
    id:string;
    customerCode: string;
    fullName: string ;
    jobTitle: string;
    mobile1: string;
    mobile2: string;
    email: string;
    nidnumber: string;
    nationalityId: string;
    nationality?:NationalityModel;
}