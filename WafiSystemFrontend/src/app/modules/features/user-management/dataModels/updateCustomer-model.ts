import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';

export interface updateCustomerData {
  id: string;
  mobile1: string;
  mobile2: string;
  email: string;
  profileImageFileId: string;
  profileImageFile: SysFileManagerCreateUpdateDto | null;
  LoginUserType: LoginUserTypeEnum;
}
