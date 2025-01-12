import { LoginUserTypeEnum } from "./login.model";

// Contact
export class contactFE {
  userName: string = '';
  shortName: string = '';
  password: string = '';
  customerId: string = '';
  facilityId: string = '';
  mobile1: string = '';
  mobile2: string = '';
  email: string = '';
  jobTitle?: string = '';
  // Website?: string = '';
  nidnumber: string ="";
  fullName: string ="";
  nationality: string ="";
  loginUserType: LoginUserTypeEnum | null = null;
}

