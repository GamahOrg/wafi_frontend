import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { LicenseProjectEngineeringDataTapStatus } from '../../models/license-project-engineering-data-tap-status.model';

@Injectable()
export class SharedLicenseProjectService {
  constructor() { }
  // LicenseProjectEngineeringDataTapStatus: BehaviorSubject<LicenseProjectEngineeringDataTapStatus | null> = new BehaviorSubject<LicenseProjectEngineeringDataTapStatus | null>(null)
  // getLicenseProjectEngineeringDataTapStatus(): Observable<LicenseProjectEngineeringDataTapStatus | null> {
  //   return this.LicenseProjectEngineeringDataTapStatus.asObservable();
  // }
  // updateLicenseProjectEngineeringDataTapStatus(licenseProjectEngineeringDataTapStatus: LicenseProjectEngineeringDataTapStatus): void {
  //   this.LicenseProjectEngineeringDataTapStatus.next(licenseProjectEngineeringDataTapStatus);
  // }
  setLicenseAvailabilityToUpdateInLocalStorage(availabilityToUpdate: boolean): void {
    localStorage.setItem('availabilityToUpdate', availabilityToUpdate ? "true" : "false")
  }
  getAvailabilityToUpdateFromLocalStorage(): boolean | null {
    return localStorage.getItem('availabilityToUpdate') == "true" ? true : false
  }
  removeAvailabilityToUpdatefromLocalStorage(): void {
    localStorage.removeItem('availabilityToUpdate')
  }
  setLicenseProjectIdInLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('licenseProjectId', licenseProjectId)
  }
  getLicenseProjectIdStorage(): string | null {
    return localStorage.getItem('licenseProjectId')
  }
  removeLicenseProjectIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectId')
  }
  setLicenseRequestIdInLocalStorage(licenseRequestId: string): void {
    localStorage.setItem('licenseRequestId', licenseRequestId)
  }
  getSelectedRequestIdFromLocalStorage(): string | null {
    let seclectRequest = localStorage.getItem("licenseRequestId")
    return seclectRequest as string
  }
  removeLicenseRequestfromLocalStorage(): void {
    localStorage.removeItem('licenseRequestId')
  }
  setfacilityIdInLocalStorage(facilityId: string): void {
    localStorage.setItem('facilityId', facilityId)
  }
  getFacilityIdFromLocalStorage(): string | null {
    let seclectRequest = localStorage.getItem("facilityId")
    return seclectRequest as string
  }
  removeFacilityIdfromLocalStorage(): void {
    localStorage.removeItem('facilityId')
  }


}
