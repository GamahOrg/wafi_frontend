export interface LoginParams {
  userName: string,
  password: string,
  userType: UserType,
  loginUserType: LoginUserTypeEnum
}
export enum UserType {
  employee = 0,
  client = 1
}
export enum LoginUserTypeEnum {
  finalBeneficiary = 0, //مستفيد نهائى
  delegateWafiPartner = 1, //مفوض أحد شركاء وافى
  wafiPartner = 2, //أحد شركاء وافى
  Employee = 3
}