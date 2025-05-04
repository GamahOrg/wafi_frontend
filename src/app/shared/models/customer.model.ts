import { LoginUserTypeEnum } from "src/app/modules/auth/models/login.model";
import { SysFileManagerCreateUpdateDto } from "./sys-file-manager-create-update-dto";
import { TokenResponse } from "./token-response.model";

export class customerResponse {
  id: string = '';
  nidnumber: string = '';
  fullName: string = '';
  nationality: string = '';
  mobile1: string = '';
  mobile2: string = '';
  email: string = '';
  loginUserType: LoginUserTypeEnum | null = null;
  facilities: facilityResponse[] = [];
  isDelegator: boolean = false;
  isEmployee: boolean = false;
  isProjectManager: boolean = false;
  profileImageFile: SysFileManagerCreateUpdateDto | null = null;
  profileImageFileId: string = '';
  registrationDateTime?:Date;
}
export interface YaqeenCustomer {
  nidnumber: string;
  shortName: string;
  fullName: string;
  nationality: string;
  mobile1: string;
  mobile2: string;
  email: string;
  jobTitle?: string;
  // Website?: string;
}

export interface RegistrationResponse {
  status: RegistrationStatus,
  customer: customerResponse,
  nafathValidationNumber: number,
  transactionId: string
}

export interface registration {
  nIdNumber: string
  nIdType: nIdType,
  month: number,
  year: number | null
}
export enum nIdType {
  citizen = 0,
  resident = 1
}
export enum RegistrationStatus {
  wrongId = 0,
  rightId = 1,
  existIdWithoutFacility = 2,
  customerIsExist = 3,
  isDelegator = 4,
  finalBeneficiary = 5
}

export class EmployeeFacilityRegistrationDto {
  isNewFacility: boolean = false;
  facilityRegistration: facilityResponse = new facilityResponse();
}

// Facility
export class facilityResponse {
  id: string = '';
  facilityCode: string = '';
  commercialRegisterNumber?: string = '';
  entity700Number?:string='';
  facilityName: string = '';
  commercialRegisterStartDate: Date = new Date();
  commercialRegisterEndDate: Date = new Date();
  facilityType: string = '';
  facilityBusinessTypes: facilityBusinessType[] = [];
  token?: TokenResponse;

}

export class facilityBusinessType {
  id: string = '';
  businessType: string = '';
}



export interface RegisterationCustomerResponseDto {
  customerId: string | null;
  token: TokenModel | null;
}

export interface TokenModel {
  accessToken: string | null;
  refreshToken: string | null;
}
