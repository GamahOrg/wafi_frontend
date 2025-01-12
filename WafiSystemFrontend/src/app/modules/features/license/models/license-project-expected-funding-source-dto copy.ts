import { SysFundingTypeCreateUpdateDto } from "./sys-funding-type-create-update-dto";

export class LicenseProjectExpectedFundingSourceDto {
    public id:string="";
    public   fundingTypeId :string="";
    public  fundingType=new SysFundingTypeCreateUpdateDto;
    public   licenseProjectFeasibilityStudyId :string="";
    public financingTypeDescription :string="";
    public  funderNationalNumber :string="";
    public  funderEmailAddress :string="";
    public  funderPhoneNumber :string="";
}
