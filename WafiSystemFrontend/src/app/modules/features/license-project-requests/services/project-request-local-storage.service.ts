import { Injectable } from '@angular/core';

@Injectable()
export class ProjectRequestLocalStorageService {

  constructor() { }

  getSelectedProjectLicenseRequestIdFromLocalStorage(): string | null {
    let projectDetails = localStorage.getItem('licenseProjectRequestId');
    return projectDetails;
  }
  clearSelectedProjectLicenseRequestFromLocalStorage(): void {
    localStorage.removeItem('licenseProjectRequestId');
  }
  setSelectedSelectedProjectLicenseRequestIdInLocalStorage(id: string): void {
    localStorage.setItem('licenseProjectRequestId', id);
  }

  getSelectedLicenseRequestTypeFromLocalStorage(): string | null {
    let projectDetails = localStorage.getItem('typeId');
    return projectDetails;
  }
  clearSelectedLicenseRequestTypeFromLocalStorage(): void {
    localStorage.removeItem('typeId');
  }
  setSelectedSelectedLicenseRequestTypeInLocalStorage(id: string): void {
    localStorage.setItem('typeId', id);
  }
}
