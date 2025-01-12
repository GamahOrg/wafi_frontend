import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRightOfSaudisToOwnRealEstateFileDto } from "./license-project-right-of-saudis-to-own-real-estate-file-dto";
import { LicenseProjectOwnershipApprovedDocumentDto } from "./license-project-ownership-approved-document-dto";
import { LicenseProjectAdvertisingFormsElectronicFileDto } from "./license-project-advertising-forms-electronic-file-dto";
import { LicenseProjectLicenseDocumentDto } from "./license-project-license-document-dto";
import { LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto } from "./license-project-right-of-saudis-to-own-real-estate-file-create-update-dto";
import { LicenseProjectOwnershipApprovedDocumentCreateUpdateDto } from "./license-project-ownership-approved-document-create-update-dto";
import { LicenseProjectAdvertisingFormsElectronicFileCreateUpdateDto } from "./license-project-advertising-forms-electronic-file-create-update-dto";
import { LicenseProjectLicenseDocumentCreateUpdateDto } from "./license-project-license-document-create-update-dto";

export class ExternalProjectDataDto {
    public id:string="";
    public  financialGuaranteeOfProjectOwnershipFileId :string="";
    public  financialGuaranteeOfProjectOwnershipFile =new SysFileManagerCreateUpdateDto();
    public  licenseProjectRightOfSaudisToOwnRealEstateFiles :LicenseProjectRightOfSaudisToOwnRealEstateFileDto[]=[]
    public  licenseProjectOwnershipApprovedDocuments:LicenseProjectOwnershipApprovedDocumentDto[]=[];
    public  licenseProjectAdvertisingFormsElectronicFiles:LicenseProjectAdvertisingFormsElectronicFileDto[]=[];
    public  licenseProjectLicenseDocuments:LicenseProjectLicenseDocumentDto[]=[];
}
export class ExternalProjectDataCreateUpdateDto {
    public id:string="";
    public  financialGuaranteeOfProjectOwnershipFileId :string="";
    public  licenseProjectRightOfSaudisToOwnRealEstateFiles :LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto[]=[]
    public  licenseProjectOwnershipApprovedDocuments:LicenseProjectOwnershipApprovedDocumentCreateUpdateDto[]=[];
    public  licenseProjectAdvertisingFormsElectronicFiles:LicenseProjectAdvertisingFormsElectronicFileCreateUpdateDto[]=[];
    public  licenseProjectLicenseDocuments:LicenseProjectLicenseDocumentCreateUpdateDto[]=[];
}
export class ProjectDocumentDataDto {
    public id:string="";
    public  financialGuaranteeOfProjectOwnershipFile =new SysFileManagerCreateUpdateDto();
    public  licenseProjectRightOfSaudisToOwnRealEstateFiles :LicenseProjectRightOfSaudisToOwnRealEstateFileDto[]=[]
    public  licenseProjectOwnershipApprovedDocuments:LicenseProjectOwnershipApprovedDocumentDto[]=[];
    public  licenseProjectLicenseDocuments:LicenseProjectLicenseDocumentDto[]=[];
}
export class ProjectDocumentDataCreateUpdateDto {
    public id:string="";
    public  licenseProjectRightOfSaudisToOwnRealEstateFiles :LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto[]=[]
    public  licenseProjectOwnershipApprovedDocuments:LicenseProjectOwnershipApprovedDocumentCreateUpdateDto[]=[];
    public  licenseProjectLicenseDocuments:LicenseProjectLicenseDocumentCreateUpdateDto[]=[];
}