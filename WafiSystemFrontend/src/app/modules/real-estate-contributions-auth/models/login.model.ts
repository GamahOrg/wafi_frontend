export interface LoginParams {
  userName: string,
  password: string,
  loginUserType: LoginUserTypeEnum,
  userType: UserType
}
export enum UserType {
  employee = 0,
  client = 1
}
export enum LoginUserTypeEnum {
  finalBeneficiary = 0, //مستفيد نهائى
  delegateWafiPartner = 1, //مفوض أحد شركاء وافى
  wafiPartner = 2, //أحد شركاء وافى
  Employee=3
}