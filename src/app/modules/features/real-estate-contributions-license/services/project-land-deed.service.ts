import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { DeedData, ProjectLandDeedCreateUpdateDto, ProjectLandDeedDto, type SaveLicenseProjectDeed } from '../dataModels/project-land-deed.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../dataModels/drop-down-name.dto';
import { OwnersDto } from '../../license/dataModels/project-land-deed.dto';

@Injectable()
export class ProjectLandDeedService {

  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<ProjectLandDeedDto>(new ProjectLandDeedDto());
  private deedIntegrationResponse = new BehaviorSubject<DeedData>(new DeedData());

  private objSubject$ = this.objSubject.asObservable();
  private listObjSubject = new BehaviorSubject<ProjectLandDeedDto[]>([]);
  private listObjSubject$ = this.listObjSubject.asObservable();

  private deedIntegrationResponse$ = this.deedIntegrationResponse.asObservable();
  getDeedIntegrationResponseDto(): Observable<DeedData> {
    return this.deedIntegrationResponse$;
  }
  SetDeedIntegrationResponseDto(LatestValue: DeedData) {
    return this.deedIntegrationResponse.next(LatestValue);
  }

  getSubjectObj(): Observable<ProjectLandDeedDto> {
    return this.objSubject$;
  }
  SetSubjectObj(LatestValue: ProjectLandDeedDto) {
    return this.objSubject.next(LatestValue);
  }
  getSubjectListObjs(): Observable<ProjectLandDeedDto[]> {
    return this.listObjSubject$;
  }
  SetSubjectListObjs(LatestValue: ProjectLandDeedDto[]) {
    return this.listObjSubject.next(LatestValue);
  }

  GetByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<ProjectLandDeedDto[]>>
      (`${Configuration.APIs.LicenseProjectDeed.GetByLicenseProjectId}/${id}`).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res.data;
        })
      )
  }

  Save(obj: ProjectLandDeedDto): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {

    return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
      (Configuration.APIs.LicenseProjectDeed.Save, obj)
  }

  SaveDeedData(obj: SaveLicenseProjectDeed): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {

    return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
      (Configuration.APIs.LicenseProjectDeed.SaveDeedData, obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res;
        })
      )
  }

  UpdateDeedOwners(obj: OwnersDto): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {

    return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
      (Configuration.APIs.LicenseProjectDeed.UpdateDeedOwners, obj)
  }

  ValidateDeedInfo(obj: ProjectLandDeedCreateUpdateDto): Observable<CoreResponseDTO<DeedData>> {
    return this._httpClient.post<CoreResponseDTO<DeedData>>
      (Configuration.APIs.LicenseProjectDeed.ValidateDeedInfoByNumber, obj)
  }

  Delete(id: string): Observable<any> {
    return this._httpClient.delete<any>
      (`${Configuration.APIs.LicenseProjectDeed.Delete}?id=${id}`)
  }

  GetSysLicenseProjectLandOwnerDeedTypeDropDown(): Observable<DropDownSubUnitTypeDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownSubUnitTypeDto[]>>(`${Configuration.APIs.SysLicenseProjectLandOwnerDeedType.GetDropDown}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownSubUnitTypeDto[]>) => {
          return res.data as DropDownSubUnitTypeDto[];
        })
      );
  }
}
