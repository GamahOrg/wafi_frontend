import { SysLicenseBeneficiaryContractFormDto } from "../dataModels/sys-license-beneficiary-contract-form-dto";

export class BeneficiaryContractFormAdditionalTermsDto {
          id:string="";
          licenseBeneficiaryContractFormId: string="";
          licenseProjectId: string="";          
          itemNumber : number=0;
          itemText : string="";
          additionalTermsAcknowledgment :boolean=false;
          licenseBeneficiaryContractForm: SysLicenseBeneficiaryContractFormDto=new SysLicenseBeneficiaryContractFormDto();
}
