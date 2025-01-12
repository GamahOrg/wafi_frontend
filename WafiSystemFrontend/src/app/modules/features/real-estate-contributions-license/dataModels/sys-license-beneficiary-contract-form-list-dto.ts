import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { SysLicenseBeneficiaryContractFormDto } from './sys-license-beneficiary-contract-form-dto';

export class SysLicenseBeneficiaryContractFormListDto {
  public licenseProjectId: string = '';
  public beneficiaryContractFormApproval: boolean = false;
  public sysLicenseBeneficiaryContractFormDtos: SysLicenseBeneficiaryContractFormDto[] =
    [];
  BeneficiaryFilesId?: string[] = [];
  beneficiaryFiles: SysFileManagerCreateUpdateDto[] = [];
}

export class LicenseBeneficiaryContractNewItemsListDto {
  public itemNumber: string = '';
  public itemTitle: string = '';
  public itemContent: string = '';
}
