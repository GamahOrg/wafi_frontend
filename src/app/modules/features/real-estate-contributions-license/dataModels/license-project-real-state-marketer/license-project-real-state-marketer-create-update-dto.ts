import {SysFileManagerCreateUpdateDto} from "../../../../../shared/models/sys-file-manager-create-update-dto";

export interface LicenseProjectRealStateMarketerCreateUpdateDto {
  licenseProjectId: string;
  id: any;
  realStateMarketerId: string;
  licenseNumber: string;
licenseProjectRealStateMarketerAgreementFiles: LicenseProjectRealStateMarketerAgreementFile[];
}
export interface LicenseProjectRealStateMarketerAgreementFile
{
    id:string
    licenseProjectRealStateMarketerId :string
      agreementFileId : string
      agreementFile:SysFileManagerCreateUpdateDto;

}
