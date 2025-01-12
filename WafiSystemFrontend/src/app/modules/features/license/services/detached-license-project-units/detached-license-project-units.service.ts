import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseProjectDetachedUnit, LicenseProjectDetachedUnits } from '../../dataModels/license-project-detached-unit.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { DropDownSubUnitTypeDto } from '../../dataModels/drop-down-name.dto';

@Injectable()
export class DetachedLicenseProjectUnitsService {
  detachedUnits$: BehaviorSubject<LicenseProjectDetachedUnit[] | null> = new BehaviorSubject<LicenseProjectDetachedUnit[] | null>(null)
  unitTypeLookup$: BehaviorSubject<DropDownSubUnitTypeDto[] | null> = new BehaviorSubject<DropDownSubUnitTypeDto[] | null>(null)
  constructor(private _httpClient: HttpClient) { }
  updateDetachedUnits(licenseProjectDetachedUnit: LicenseProjectDetachedUnit[] | null): void {
    this.detachedUnits$.next(licenseProjectDetachedUnit)
  }
  
  getDetachedUnits(): Observable<LicenseProjectDetachedUnit[] | null> {
    return this.detachedUnits$.asObservable()
  }

  updateUnitTypeLookup(licenseProjectDetachedUnit: DropDownSubUnitTypeDto[] | null): void {
    this.unitTypeLookup$.next(licenseProjectDetachedUnit)
  }

  getUnitTypeLookup(): Observable<DropDownSubUnitTypeDto[] | null> {
    return this.unitTypeLookup$.asObservable()
  }

  SaveLicenseProjectSubUnitsAsync(licenseProjectDetachedUnits: LicenseProjectDetachedUnits): Observable<LicenseProjectDetachedUnits | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectDetachedUnits>>(Configuration.APIs.LicenseProjectSubUnit.SaveLicenseProjectSubUnitsAsync, licenseProjectDetachedUnits).pipe(
      map((res: CoreResponseDTO<LicenseProjectDetachedUnits>) => {
        return res.data  ? res.data as LicenseProjectDetachedUnits : null
      })
    )
  }

  DeleteLicenseProjectSubUnitsAsync(DetachedUnitId: string): Observable<boolean> {
    return this._httpClient.get<CoreResponseDTO<boolean>>(`${Configuration.APIs.LicenseProjectSubUnit.DeleteLicenseProjectSubUnitsAsync}/${DetachedUnitId}`).pipe(
      map((res: CoreResponseDTO<boolean>) => {
        return res.isDone ? true : false
      })
    )
  }

  GetLicenseProjectSubUnitsByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectDetachedUnits | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectDetachedUnits>>(`${Configuration.APIs.LicenseProjectSubUnit.GetLicenseProjectSubUnitsByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectDetachedUnits>) => {
        return res.data ? res.data as LicenseProjectDetachedUnits : null
      })
    )
  }
  
}
