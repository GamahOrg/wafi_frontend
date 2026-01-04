import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { ProjectUnitCodeDto, ProjectUnitCodesPaginationParams } from '../dataModels/project-unit-code.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { HttpClient } from '@angular/common/http';
import { ProjectUnit } from '../models/project-units';
import { LicenseProjectSubUnitsListCodeFile } from '../dataModels/license-project-sub-units-list-code-file';
import { Pagination } from '../../../../shared/models/pagination.model';

@Injectable()
export class ProjectUnitCodeService {

  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<ProjectUnitCodeDto>(new ProjectUnitCodeDto());
  private listObjSubject = new BehaviorSubject<ProjectUnitCodeDto[]>([]);

  getSubjectObj(): Observable<ProjectUnitCodeDto> {
    return this.objSubject.asObservable();
  }
  SetSubjectObj(LatestValue: ProjectUnitCodeDto) {
    return this.objSubject.next(LatestValue);
  }

  getSubjectListObjs(): Observable<ProjectUnitCodeDto[]> {
    return this.listObjSubject.asObservable();
  }
  SetSubjectListObjs(LatestValue: ProjectUnitCodeDto[]) {
    return this.listObjSubject.next(LatestValue);
  }
  // ProjectUnitCodeService
  private listObjSubjectPaginated =
    new BehaviorSubject<Pagination<ProjectUnitCodeDto[]> | null>(null);


  getSubjectListObjsPaginated(): Observable<Pagination<ProjectUnitCodeDto[]> | null> {
    return this.listObjSubjectPaginated.asObservable();
  }
  SetSubjectListObjsPaginated(latestValue: Pagination<ProjectUnitCodeDto[]>): void {
    this.listObjSubjectPaginated.next(latestValue);
  }
  private _refreshPaginatedList$ = new Subject<void>();

  triggerRefreshPaginatedList(): void {
    this._refreshPaginatedList$.next();
  }

  onRefreshPaginatedList(): Observable<void> {
    return this._refreshPaginatedList$.asObservable();
  }

  Save(projectUnits: ProjectUnitCodeDto): Observable<CoreResponseDTO<ProjectUnit[]>> {
    return this._httpClient.post<CoreResponseDTO<ProjectUnit[]>>
      (Configuration.APIs.LicenseProjectSubUnitsListCode.Save, projectUnits)
  }

  GetByProjectSubUnitId(projectId: string): Observable<CoreResponseDTO<ProjectUnitCodeDto[]>> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnitCodeDto[]>>
      (`${Configuration.APIs.LicenseProjectSubUnitsListCode.GetByProjectSubUnitId}/${projectId}`)

  }
  GetByProjectUnitId(projectId: string): Observable<CoreResponseDTO<ProjectUnitCodeDto[]>> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnitCodeDto[]>>
      (`${Configuration.APIs.LicenseProjectSubUnitsListCode.GetByProjectUnitId}/${projectId}`)
  }
  GetUnitsCodesListByProjectUnitId(projectId: string): Observable<CoreResponseDTO<ProjectUnitCodeDto[]>> {
    return this._httpClient.get<CoreResponseDTO<ProjectUnitCodeDto[]>>
      (`${Configuration.APIs.LicenseProjectSubUnitsListCode.GetUnitsCodesListByProjectUnitId}/${projectId}`)
  }
  GetUnitsCodesListByProjectUnitIdPaginated(
    params: ProjectUnitCodesPaginationParams
  ): Observable<Pagination<ProjectUnitCodeDto[]> | null> {

    return this._httpClient
      .post<CoreResponseDTO<Pagination<ProjectUnitCodeDto[]>>>(
        `${Configuration.APIs.LicenseProjectSubUnitsListCode.GetUnitsCodesListByProjectUnitIdPaginated}`,
        params
      )
      .pipe(
        map((res: CoreResponseDTO<Pagination<ProjectUnitCodeDto[]>>) => {
          return res.isDone
            ? (res.data as Pagination<ProjectUnitCodeDto[]>)
            : null;
        })
      );
  }

  Delete(id: string): Observable<CoreResponseDTO<ProjectUnitCodeDto[]>> {
    return this._httpClient.delete<CoreResponseDTO<ProjectUnitCodeDto[]>>
      (`${Configuration.APIs.LicenseProjectSubUnitsListCode.Delete}?id=${id}`)
  }

  saveFileData(fileData: LicenseProjectSubUnitsListCodeFile): Observable<any | null> {
    return this._httpClient.post<CoreResponseDTO<any>>(Configuration.APIs.LicenseProjectSubUnitsListCode.SaveFileData, fileData).pipe(
      map((res: CoreResponseDTO<any>) => {
        if (res.isDone) {
          return res
        } else {
          return null
        }
      })
    )
  }
  
  CreateExcel(licenseProjectId: string): Observable<any | null> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectSubUnitsListCode.createExcel}/${licenseProjectId}`,
      {
        reportProgress: true,
        observe: 'events',
        responseType: 'blob'
      }).pipe(
        map((res: any) => {
          if (res) {
            return res;
          } else {
            return null
          }
        })
      )
  }

}
