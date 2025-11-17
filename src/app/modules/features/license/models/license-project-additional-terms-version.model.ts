export interface LicenseProjectAdditionalTermsVersionDto {
  id: string;
  licenseProjectId: string;
  verion: string;
  versionDate: Date;
  licenseProjectName: string;
  additionalTermsVersionItems: LicenseProjectAdditionalTermsVersionItemDto[];
}

export interface LicenseProjectAdditionalTermsVersionItemDto {
  id: string;
  itemNumber: number;
  // عنوان البند
  itemTitle?: string;
  // نص البند
  itemText: string;
  isMainTerm: boolean;
  parentId?: string;
}
