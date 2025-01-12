import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable()
export class LicenseProjectAccountantLocalStorageService {

  constructor(private _storageService: StorageService) { }

  setLicenseProjectId(licenseProjectId: string) {
    localStorage.setItem('licenseProjectId', licenseProjectId)
  }
  getLicenseProjectId() {
    return localStorage.getItem('licenseProjectId');
  }

}
