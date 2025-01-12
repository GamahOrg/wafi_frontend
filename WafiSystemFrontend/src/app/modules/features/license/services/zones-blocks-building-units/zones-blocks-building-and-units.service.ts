import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Zone } from '../../models/zone.model';
import { ProjectUnit, licenseProjectZones } from '../../models/project-units';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';

@Injectable()
export class ZonesBlocksBuildingAndUnitsService {
  projectZones: BehaviorSubject<Zone[] | null> = new BehaviorSubject<
    Zone[] | null
  >(null);
  selectedProjectZoneId: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  selectedProjectZoneTitle: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);
  selectedProjectUnit: BehaviorSubject<ProjectUnit | null> =
    new BehaviorSubject<ProjectUnit | null>(null);

  constructor(private _httpClient: HttpClient) {}

  // licenseProjectZone
  GetByLicenseProjectId(id: string): Observable<Zone[] | null> {
    return this._httpClient
      .get<CoreResponseDTO<Zone[]>>(
        `${Configuration.APIs.licenseProjectZone.GetByLicenseProjectId}/${id}`
      )
      .pipe(
        map((res: CoreResponseDTO<Zone[]>) => {
          if (res.data) {
            return res.data as Zone[];
          } else {
            return null;
          }
        })
      );
  }

  // save
  Save(zone: Zone): Observable<Zone[] | null> {
    return this._httpClient
      .post<CoreResponseDTO<Zone[]>>(
        `${Configuration.APIs.licenseProjectZone.Save}`,
        zone
      )
      .pipe(
        map((res: CoreResponseDTO<Zone[]>) => {
          
          if (res.data) {
            return res.data as Zone[];
          } else {
            return null;
          }
        })
      );
  }

  updateProjectZones(zones: Zone[]): void {
    this.projectZones.next(zones);
  }
  getProjectZones(): Observable<Zone[] | null> {
    return this.projectZones.asObservable();
  }
  updateSelectedProjectZone(id: string | null): void {
    this.selectedProjectZoneId.next(id);
  }
  getSelectedProjectZone(): Observable<string | null> {
    return this.selectedProjectZoneId.asObservable();
  }
  updateSelectedProjectZoneTitle(id: string | null): void {
    this.selectedProjectZoneTitle.next(id);
  }
  getSelectedProjectZoneTitle(): Observable<string | null> {
    return this.selectedProjectZoneTitle.asObservable();
  }
  updateSelectedProjectUnit(unit: ProjectUnit | null): void {
    this.selectedProjectUnit.next(unit);
  }
  getSelectedProjectUnit(): Observable<ProjectUnit | null> {
    return this.selectedProjectUnit.asObservable();
  }
  deleteZone(id: string): Observable<any | null> {
    return this._httpClient
      .delete<CoreResponseDTO<any>>(
        `${Configuration.APIs.licenseProjectZone.Delete}?id=${id}`
      )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          if (res) {
            return res;
          } else {
            return null;
          }
        })
      );
  }
}
