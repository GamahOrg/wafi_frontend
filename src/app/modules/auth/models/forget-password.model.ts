import { UserType } from "./login.model"

export interface verificationUserName {
    userName: string,
    userType: UserType
  }


  export interface verfificationOTP {
    userName: string,
    userType: UserType,
    otp:string
  }

  export interface resetPass {
    userName: string,
    token : string,
    newPassword : string
  }

