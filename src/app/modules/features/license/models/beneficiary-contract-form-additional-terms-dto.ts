import { SysLicenseBeneficiaryContractFormDto } from '../dataModels/sys-license-beneficiary-contract-form-dto';

export class BeneficiaryContractFormAdditionalTermsDto {
  id: string = '';
  licenseBeneficiaryContractFormId: string | null = null;
  licenseProjectId: string = '';
  itemNumber: number = 0;
  itemTitle: string | null = null;
  itemText: string = '';
  additionalTermsAcknowledgment: boolean = false;
  isMainTerm: boolean = false;
  parentId: string | null = null;
  isActive?: boolean = true;
  createdOn = '';
  licenseBeneficiaryContractForm: SysLicenseBeneficiaryContractFormDto = new SysLicenseBeneficiaryContractFormDto();
}
