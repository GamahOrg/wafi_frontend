import { FileManagerBE } from "src/app/modules/features/facilities/dataModels/financial-capability.model";

export class QualificationInstitutionalCapacityAndHrRequirementDto {
    id: string = '';
    laborRegulationCertificateFile :FileManagerBE = new FileManagerBE();
    occupationalSafetyAndHealthFile :FileManagerBE = new FileManagerBE();
    organizationalStructureFile :FileManagerBE = new FileManagerBE();
    saudizationCertificateFile :FileManagerBE = new FileManagerBE();
    socialResponsibilityProgramsFiles:QualificationSocialResponsibilityProgramsFileDto[] = []
}

export class QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    facilityId: string = '00000000-0000-0000-0000-000000000000';
    organizationalStructureFileId: string|null = null;
    laborRegulationCertificateFileId: string|null = null;
    occupationalSafetyAndHealthFileId: string|null = null;
    saudizationCertificateFileId: string|null = null;
    addedSocialResponsibilityProgramsFiles:QualificationSocialResponsibilityProgramsFileCreateUpdateDto[] = []
}
export class QualificationSocialResponsibilityProgramsFileDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    socialResponsibilityProgramFile:FileManagerBE = new FileManagerBE();
}
export class QualificationSocialResponsibilityProgramsFileCreateUpdateDto {
    id: string = '00000000-0000-0000-0000-000000000000';
    qualificationInstitutionalCapacityAndHrRequirementId: string = '00000000-0000-0000-0000-000000000000';
    socialResponsibilityProgramFileId: string|null = null;
}
