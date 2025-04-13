export class SysLicenseRequestTypeCreateUpdateDto {
    public id:string="";
    public  name :string="";
    public  typeCode :string="";
    public  description :string="";
    public  workflowId :string="";
    public  requestStudyingDuration :number=0;
    public  licenseType :number=0;
    public showForWafi: boolean=false;
    public showForRealStateContribution: boolean=false;
}
