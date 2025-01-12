import { Direction } from '@angular/cdk/bidi';
import { UserType } from 'src/app/modules/real-estate-contributions-auth/models/login.model';

export interface OtpConfig {
  length: number;
  direction: Direction;
}
export interface GenerateOTPByUserNameRequestDto {
  userName: string;
  userType: UserType;
}

export interface ValidateOTPByUserNameRequestDto {
  userName: string;
  userType: UserType;
  OTP: string;
}
