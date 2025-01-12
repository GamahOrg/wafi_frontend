import { FileManagerBE } from "src/app/modules/features/facilities/dataModels/financial-capability.model";

export class AdditionTechnicalCapabilitiesRequirementsDto {
    id: string = '';
    wafiProjectLicenseFile:FileManagerBE= new FileManagerBE();
    marketingSellingLicenseFile:FileManagerBE= new FileManagerBE();
    qualificationContsAndDevsServiceProvidersCertificateNumbers:QualificationContsAndDevsServiceProvidersCertificateNumberCreateUpdateDto[]=[];
    qualificationCompletedSmallOrMediumProjectsLicenses:QualificationCompletedSmallOrMediumProjectsLicenseDto[]=[];
}
export class AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    wafiProjectLicenseFileId: string|null = null;
    marketingSellingLicenseFileId: string |null = null;
    facilityId: string = '';
    qualificationContsAndDevsServiceProvidersCertificateNumbers:QualificationContsAndDevsServiceProvidersCertificateNumberCreateUpdateDto[]=[];
    addedQualificationCompletedSmallOrMediumProjectsLicenses:QualificationCompletedSmallOrMediumProjectsLicenseCreateUpdateDto[]=[];
}

export class QualificationContsAndDevsServiceProvidersCertificateNumberCreateUpdateDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    certificateNumber : string = '';
    description : string = '';
}
export class QualificationCompletedSmallOrMediumProjectsLicenseCreateUpdateDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    projectsLicenseFileId:string|null = null;
    qualificationAdditionTechnicalCapabilitiesRequirementId:string = '';
}
export class QualificationCompletedSmallOrMediumProjectsLicenseDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    projectsLicenseFileId:string|null = null;
    sysFileManager:FileManagerBE = new FileManagerBE();
}