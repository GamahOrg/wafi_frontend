import { TokenResponse } from "src/app/shared/models/token-response.model";

export interface IdentityStatus {
    transactionId: string;
    token: TokenResponse | null;
    userTypeStatus: UserTypeStatus;
    isValid: boolean;
    userInfoUpdated: UserInfoUpdatedDto | null;
}

export interface UserInfoUpdatedDto {
    nationalId: string;
    fullName: string;
    firstName: string;
    nationalIdExpiryDate: string;
    nationalityId: string;
    nationality: string;
    dateOfBirth: string;
    gender: GenderEnum;
}

export enum GenderEnum {
    Male = 1,
    Female = 2
}

export enum UserTypeStatus {
    Employee = 1,
    NewEmployee,
    Customer,
    CustomerWithoutFacility,
    NewCustomer,
    Delegator,
    FinalBeneficiary,
    NotExist
}