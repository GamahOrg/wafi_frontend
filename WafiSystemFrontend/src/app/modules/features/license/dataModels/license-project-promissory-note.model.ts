import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
// gerieve
export interface LicenseProjectPromissoryNoteDto {
    id: string;
    licenseProjectId: string;
    isPowerOfAttorneyToOtherThanDeveloper: boolean;
    licenseProjectPromissoryNoteIncorporationContracts: LicenseProjectPromissoryNoteIncorporationContractDto[];
    creationDate: string | null;
    creationPlace: string | null;
    value: number | null;
    valueToWords: string | null;
    editor: string | null;
    editorIdentityNumber: string | null;
    editorTitle: string | null;
    licenseProjectPromissoryNotePowerOfAttorneies: LicenseProjectPromissoryNotePowerOfAttorneyDto[]; // if isPowerOfAttorneyToOtherThanDeveloper ==false
}
export interface LicenseProjectPromissoryNoteIncorporationContractDto {
    id: string;
    licenseProjectPromissoryNoteId: string;
    incorporationContractFileId: string; 
    incorporationContractFile: SysFileManagerCreateUpdateDto;
}

export interface LicenseProjectPromissoryNotePowerOfAttorneyDto {
    id: string;
    licenseProjectPromissoryNoteId: string;
    name: string;
    legalStatus: string;
    identityNumber: string;
    mobile: string;
    licenseProjectPromissoryNotePowerOfAttorneyFiles: LicenseProjectPromissoryNotePowerOfAttorneyFileDto[];
}

export interface LicenseProjectPromissoryNotePowerOfAttorneyFileDto {
    id: string;
    licenseProjectPromissoryNotePowerOfAttorneyId: string;
    powerOfAttorneyFileId: string;
    powerOfAttorneyFile: SysFileManagerCreateUpdateDto;
}

// create

export interface LicenseProjectPromissoryNoteCreateDto {
    id: string;
    licenseProjectId: string;
    isPowerOfAttorneyToOtherThanDeveloper: boolean;
    licenseProjectPromissoryNoteIncorporationContracts:  string[];
    creationDate: Date | null;
    creationPlace: string | null;
    value: number | null;
    editor: string | null;
    editorIdentityNumber: string | null;
    editorTitle: string | null;
    licenseProjectPromissoryNotePowerOfAttorney:  LicenseProjectPromissoryNotePowerOfAttorneyCreateDto; // if isPowerOfAttorneyToOtherThanDeveloper ==false
}
export interface LicenseProjectPromissoryNotePowerOfAttorneyCreateDto {
    id: string;
    licenseProjectPromissoryNoteId: string;
    name: string;
    legalStatus: string;
    identityNumber: string;
    mobile: string;
    licenseProjectPromissoryNotePowerOfAttorneyFiles: string[];
}