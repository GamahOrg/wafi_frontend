import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LicenseProjectEngineeringDataTapStatus } from '../../models/license-project-engineering-data-tap-status.model';
import { LicenseProjectInstantDeedResponseDto } from '../../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';

@Injectable()
export class SharedLicenseProjectService {
  private selectedDeed: LicenseProjectInstantDeedResponseDto | null = null;

  constructor() {}
  // LicenseProjectEngineeringDataTapStatus: BehaviorSubject<LicenseProjectEngineeringDataTapStatus | null> = new BehaviorSubject<LicenseProjectEngineeringDataTapStatus | null>(null)
  // getLicenseProjectEngineeringDataTapStatus(): Observable<LicenseProjectEngineeringDataTapStatus | null> {
  //   return this.LicenseProjectEngineeringDataTapStatus.asObservable();
  // }
  // updateLicenseProjectEngineeringDataTapStatus(licenseProjectEngineeringDataTapStatus: LicenseProjectEngineeringDataTapStatus): void {
  //   this.LicenseProjectEngineeringDataTapStatus.next(licenseProjectEngineeringDataTapStatus);
  // }
  setLicenseAvailabilityToUpdateInLocalStorage(
    availabilityToUpdate: boolean
  ): void {
    localStorage.setItem(
      'availabilityToUpdate',
      availabilityToUpdate ? 'true' : 'false'
    );
  }
  getAvailabilityToUpdateFromLocalStorage(): boolean | null {
    return localStorage.getItem('availabilityToUpdate') == 'true'
      ? true
      : false;
  }
  removeAvailabilityToUpdatefromLocalStorage(): void {
    localStorage.removeItem('availabilityToUpdate');
  }

  setLicenseAvailabilityToUpdateFarzInLocalStorage(
    availabilityToUpdate: boolean
  ): void {
    localStorage.setItem(
      'availabilityToUpdateFarz',
      availabilityToUpdate ? 'true' : 'false'
    );
  }
  getAvailabilityToUpdateFarzFromLocalStorage(): boolean | null {
    return localStorage.getItem('availabilityToUpdateFarz') == 'true'
      ? true
      : false;
  }
  removeAvailabilityToUpdateFarzfromLocalStorage(): void {
    localStorage.removeItem('availabilityToUpdateFarz');
  }

  setCorrectionLicenseAvailabilityToUpdateFarzInLocalStorage(
    availabilityToUpdate: boolean
  ): void {
    localStorage.setItem(
      'availabilityCorrectionToUpdateFarz',
      availabilityToUpdate ? 'true' : 'false'
    );
  }
  getCorrectionAvailabilityToUpdateFarzFromLocalStorage(): boolean | null {
    return localStorage.getItem('availabilityCorrectionToUpdateFarz') == 'true'
      ? true
      : false;
  }
  removeCorrectionAvailabilityToUpdateFarzfromLocalStorage(): void {
    localStorage.removeItem('availabilityCorrectionToUpdateFarz');
  }

  setCorrectionAvailabilityToUpdateFarzInLocalStorage(
    availabilityToUpdate: boolean
  ): void {
    localStorage.setItem(
      'availabilityToUpdateCorrectionFarz',
      availabilityToUpdate ? 'true' : 'false'
    );
  }
  getAvailabilityToUpdateCorrectionFarzFromLocalStorage(): boolean | null {
    return localStorage.getItem('availabilityToUpdateCorrectionFarz') == 'true'
      ? true
      : false;
  }
  removeAvailabilityToUpdateCorrectionFarzfromLocalStorage(): void {
    localStorage.removeItem('availabilityToUpdateCorrectionFarz');
  }


  setCorrectionUnitRequestIdInLocalStorage(correctionUnitRequestId: string): void {
    localStorage.setItem('correctionUnitRequestId', correctionUnitRequestId);
  }
  getCorrectionUnitRequestIdFromLocalStorage(): string | null {
    return localStorage.getItem('correctionUnitRequestId');
  }
  removeCorrectionUnitRequestIdfromLocalStorage(): void {
    localStorage.removeItem('correctionUnitRequestId');
  }

  setAllowCorrectionCompileInLocalStorage(allowCompile: boolean): void {
    localStorage.setItem('allowCorrectionCompile', allowCompile? 'true' : 'false');
  }
  getAllowCorrectionCompileFromLocalStorage(): boolean {
    return localStorage.getItem('allowCorrectionCompile')== 'true'
      ? true
      : false;;
  }
  removeAllowCorrectionCompilefromLocalStorage(): void {
    localStorage.removeItem('allowCorrectionCompile');
  }


  setLicenseProjectIdInLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('licenseProjectId', licenseProjectId);
  }
  getLicenseProjectIdStorage(): string | null {
    return localStorage.getItem('licenseProjectId');
  }
  setLicenseProjectNameInLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('licenseProjectName', licenseProjectId);
  }
  getLicenseProjectNameStorage(): string | null {
    return localStorage.getItem('licenseProjectName');
  }
  setIsProfileCompletedInLocalStorage(isProfileCompleted: string): void {
    localStorage.setItem('isProfileCompleted', isProfileCompleted);
  }
  getIsProfileCompletedStorage(): string | null {
    return localStorage.getItem('isProfileCompleted');
  }
  removeLicenseProjectIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectId');
  }
  removeLicenseProjectNamefromLocalStorage(): void {
    localStorage.removeItem('licenseProjectName');
  }

  setLicenseTypeCodeInLocalStorage(typeCode: string): void {
    localStorage.setItem('LicenseTypeCode', typeCode);
  }
  getLicenseTypeCodeStorage(): string | null {
    return localStorage.getItem('LicenseTypeCode');
  }
  removeLicenseTypeCodefromLocalStorage(): void {
    localStorage.removeItem('LicenseTypeCode');
  }

  setLicenseTypeNameInLocalStorage(name: string): void {
    localStorage.setItem('LicenseTypeName', name);
  }
  getLicenseTypeNameStorage(): string | null {
    return localStorage.getItem('LicenseTypeName');
  }

  setIsActiveTermsLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('IsActiveTerms', licenseProjectId);
  }
  getIsActiveTermsFlag(): string | null {
    return localStorage.getItem('IsActiveTerms');
  }
  removeIsActiveTermsFlag(): void {
    localStorage.removeItem('IsActiveTerms');
  }
  setQualificationTypeCodeInLocalStorage(typeCode: string): void {
    localStorage.setItem('typeCode', typeCode);
  }
  getQualificationTypeCodeStorage(): string | null {
    return localStorage.getItem('typeCode');
  }
  removeQualificationTypeCodefromLocalStorage(): void {
    localStorage.removeItem('typeCode');
  }
  setIsActivePaymentLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('IsActivePayment', licenseProjectId);
  }
  getIsActivePaymentFlag(): string | null {
    return localStorage.getItem('IsActivePayment');
  }
  removeIsActivePaymentFlag(): void {
    localStorage.removeItem('IsActivePayment');
  }

  setLicenseRequestIdInLocalStorage(licenseRequestId: string): void {
    localStorage.setItem('licenseRequestId', licenseRequestId);
  }
  getSelectedRequestIdFromLocalStorage(): string | null {
    let seclectRequest = localStorage.getItem('licenseRequestId');
    return seclectRequest as string;
  }
  removeLicenseRequestfromLocalStorage(): void {
    localStorage.removeItem('licenseRequestId');
  }
  setfacilityIdInLocalStorage(facilityId: string): void {
    localStorage.setItem('facilityId', facilityId);
  }
  getFacilityIdFromLocalStorage(): string | null {
    let seclectRequest = localStorage.getItem('facilityId');
    return seclectRequest as string;
  }
  removeFacilityIdfromLocalStorage(): void {
    localStorage.removeItem('facilityId');
  }

  setSelectedProjectIdToLocalStorage(licenseProjectId: string): void {
    localStorage.setItem('selectedLicenseProjectId_fromCertifiedProjects', licenseProjectId);
  }
  getSelectedProjectIdFromLocalStorage(): string | null {
    return localStorage.getItem('selectedLicenseProjectId_fromCertifiedProjects');
  }
  removeSelectedProjectIdFromLocalStorage(): void {
    localStorage.removeItem('selectedLicenseProjectId_fromCertifiedProjects');
  }

  setSelectedDeed(deed: LicenseProjectInstantDeedResponseDto): void {
    this.selectedDeed = deed;
  }

  getSelectedDeed(): LicenseProjectInstantDeedResponseDto | null {
    return this.selectedDeed;
  }

  clearSelectedDeed(): void {
    this.selectedDeed = null;
  }

  setLicenseProjectNatureTypeId(natureTypeId: string): void {
    localStorage.setItem('licenseProjectNatureTypeId', natureTypeId);
  }
  getLicenseProjectNatureTypeId(): string | null {
    let seclectRequest = localStorage.getItem('licenseProjectNatureTypeId');
    return seclectRequest as string;
  }
  removeLicenseProjectNatureTypeId(): void {
    localStorage.removeItem('licenseProjectNatureTypeId');
  }

  stripHtml(value: string): string {
    return value.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
  }
}
