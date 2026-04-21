import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { QualificationFacilityCertificationCreateUpdateDto, QualificationFacilityCertificationDto } from "./qualification-facility-certification-dto";

export interface QualificationTechnicalCapabilitiesRequirementCreateUpdateDto {
    id: string;
    isPreviousExperienceExist: boolean;
    facilityId: string;
    addedQualificationFacilityServiceProvidersCertificateNumbers?:QualificationFacilityServiceProvidersCertificateNumberDto[];
    addedQualificationFacilityCertifications?:QualificationFacilityCertificationCreateUpdateDto[];
}

export interface QualificationTechnicalCapabilitiesRequirementFullDto {
    id: string;
    facilityId?: string;
    isPreviousExperienceExist?: boolean;
    projects?: QualificationProjectFullDto[];
    qualificationFacilityServiceProvidersCertificateNumbers?:QualificationFacilityServiceProvidersCertificateNumberDto[];
    qualificationFacilityCertifications?:QualificationFacilityCertificationDto[];
}
export interface QualificationFacilityServiceProvidersCertificateNumberDto {
    id: string;
    certificationNumber : string;
    description? : string;
    qualificationTechnicalCapabilitiesRequirementId: string;
}
export interface QualificationProjectFullDto {
    id: string;
    projectName?: string;
    projectOwner?: string;
    executingContractor?: string;
    contractorClassification?: string;
    projectLocation?: string;
    unitsCount?: number;
    projectArea?: number;
    projectValue?: number;
    startDate?: Date;
    projectDuration?: number;
    achievementRate?: number;
    marketingStatus?: string;
    implementationMethodology?: string;
    projectScheduleFile?: SysFileManagerCreateUpdateDto;
    projectContractFiles?: QualificationProjectContractFileFullDto[];
    projectCategory?: ProjectCategoryDto;
    projectSubCategory?: ProjectSubCategoryDto;
    projectsProjectTypes?: ProjectTypesDto[];

    //#endregion CreateOrEdit extera properties
    technicalCapabilitiesRequirementsId?: string;
    projectCategoryId?: string;
    projectSubCategoryId?: string;
    projectScheduleFileId?: string;
    //#endregion
}

export interface QualificationProjectContractFileFullDto {
    id?: string;
    description?: string;
    fileManagerId?: string;
    sysFileManager?: SysFileManagerCreateUpdateDto;
}

export interface ProjectCategoryDto {
    id: string;
    categoryName?: string;
}

export interface ProjectSubCategoryDto {
    id: string;
    subCategoryName?: string;
    projectCategoryId?: string;
}

export interface ProjectTypesDto {
    id: string;
    projectTypeId?: string;
  projectTypeTypeName?: string;
  projectType: ProjectTypeFullDto
}

export interface ProjectTypeFullDto {
    id: string;
  typeName?: string;
  selected?: boolean;
}
