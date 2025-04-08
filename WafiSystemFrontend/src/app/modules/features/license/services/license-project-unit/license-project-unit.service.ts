import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectUnit } from '../../models/project-units';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { Zone } from '../../models/zone.model';

@Injectable()
export class LicenseProjectUnitService {

  constructor(private _httpClient: HttpClient) { }
  selectedProjectUnitId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  selectedProjectUnitTypeId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  selectedProjectUnitTitle: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  projectUnits = new BehaviorSubject<ProjectUnit[]>([]);

  getProjectUnits(): Observable<ProjectUnit[]> {
    return this.projectUnits.asObservable();
  }
  setProjectUnits(LatestValue: ProjectUnit[]) {
    return this.projectUnits.next(LatestValue);
  }
  updateSelectedProjectUnit(id: string): void {
    this.selectedProjectUnitId.next(id);
  }
  getSelectedProjectUnit(): Observable<string | null> {
    return this.selectedProjectUnitId.asObservable()
  }
  updateSelectedProjectUnitTypeId(id: string): void {
    this.selectedProjectUnitTypeId.next(id);
  }
  getSelectedProjectUnitTypeId(): Observable<string | null> {
    return this.selectedProjectUnitTypeId.asObservable()
  }
  updateSelectedProjectUnitTitle(title: string): void {
    this.selectedProjectUnitTitle.next(title);
  }
  getSelectedProjectUnitTitle(): Observable<string | null> {
    return this.selectedProjectUnitTitle.asObservable()
  }
  Save(projectUnits: ProjectUnit): Observable<Zone[] | null> {
    return this._httpClient.post<CoreResponseDTO<Zone[]>>(Configuration.APIs.LicenseProjectUnit.Save, projectUnits).pipe(
      map((res: CoreResponseDTO<Zone[]>) => {
        if (res.data) {
          return res.data as Zone[]
        } else {
          return null
        }
      })
    )
  }





  GetByZoneId(zoneId: string): Observable<ProjectUnit[] | null> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnit[]>>(`${Configuration.APIs.LicenseProjectUnit.GetByZoneId}/${zoneId}`).pipe(
      map((res: CoreResponseDTO<any[]>) => {
        if (res.data) {
          return res.data as ProjectUnit[]
        } else {
          return null
        }
      })
    )
  }

  getUnitType(): Observable<DropDownNameDto[] | null> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownNameDto[]>>(`${Configuration.APIs.SysLicenseProjectUnitType.Get}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownNameDto[]>) => {
          if (res.data) {
            return res.data as DropDownNameDto[];
          } else {
            return null;

          }
        })
      );
  }

  getStageNumber(): Observable<DropDownNameDto[] | null> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownNameDto[]>>(`${Configuration.APIs.SysLicenseProjectStageNumber.Get}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownNameDto[]>) => {
          if (res.data) {
            return res.data as DropDownNameDto[];
          } else {
            return null;

          }
        })
      );
  }
  GetByLicenseProjectId(projectId: string): Observable<ProjectUnit[] | null> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnit[]>>(`${Configuration.APIs.LicenseProjectUnit.GetByLicenseProjectId}/${projectId}`).pipe(
      map((res: CoreResponseDTO<ProjectUnit[]>) => {
        if (res.data) {
          return res.data as ProjectUnit[]
        } else {
          return null
        }
      })
    )
  }

  deleteProjectUnit(id: string): Observable<ProjectUnit[] | null> {
    return this._httpClient.delete<CoreResponseDTO<ProjectUnit[]>>(`${Configuration.APIs.LicenseProjectUnit.Delete}?id=${id}`).pipe(
        map((res: CoreResponseDTO<ProjectUnit[]>) => {
          if (res.data) {
            return res.data as ProjectUnit[]
          } else {
            return null
          }
        })
      )
  }

  deleteUnit(id: string): Observable<CoreResponseDTO<ProjectUnit[] | null>> {
    return this._httpClient.delete<CoreResponseDTO<ProjectUnit[]>>(`${Configuration.APIs.LicenseProjectUnit.Delete}?id=${id}`).pipe(
        map((res: CoreResponseDTO<ProjectUnit[]>) => {
          return res;
        })
      )
  }
}
