export class additionhrrequirementcreateupdatedto {
    id:string="";
    facilityId:string="";
    engineeringSupervisionForWafiSalesProjectsFileId :string|null=null;
    accountingSupervisionForWafiSalesProjectsFileId :string|null=null;
    addedExistSystemsApprovalCertifications:QualificationExistSystemsApprovalCertificationDto[]=[];
    addedLocalAndInternationalIssuedCertifications:QualificationLocalAndInternationalIssuedCertificationDto[]=[];
}
export class QualificationExistSystemsApprovalCertificationDto {
    id:string="00000000-0000-0000-0000-000000000000";
    existSystemsApprovalCertificationFileId :string|null=null;
    additionInstitutionalCapacityAndHumanResourcesId:string="";
}
export class QualificationLocalAndInternationalIssuedCertificationDto {
    id:string="00000000-0000-0000-0000-000000000000";
    LocalAndInternationalIssuedCertificationFileId :string|null=null;
    additionInstitutionalCapacityAndHumanResourcesId:string="";
}