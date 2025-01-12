import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class RealEstateContributionDto {
    id:string="";
    financialMarketInstitutionAgreementFileId:string="";
    contributorDirectorAgreementFileId:string="";
    shareholderContractFormFileId :string="";
    contributorDirectorAgreementFile: SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
    financialMarketInstitutionAgreementFile : SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
    shareholderContractFormFile : SysFileManagerCreateUpdateDto=new SysFileManagerCreateUpdateDto();
}
