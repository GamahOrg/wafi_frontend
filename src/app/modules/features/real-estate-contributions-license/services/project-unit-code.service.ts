import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ProjectUnitCodeDto } from '../dataModels/project-unit-code.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { HttpClient } from '@angular/common/http';
import { ProjectUnit } from '../models/project-units';

@Injectable()
export class ProjectUnitCodeService {

  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<ProjectUnitCodeDto>(new ProjectUnitCodeDto());
  private listObjSubject = new BehaviorSubject<ProjectUnitCodeDto[]>([]);
    
  getSubjectObj(): Observable<ProjectUnitCodeDto> {
    return this.objSubject.asObservable();
  }
  SetSubjectObj(LatestValue: ProjectUnitCodeDto) {
  return this.objSubject.next(LatestValue) ;
  }
  getSubjectListObjs(): Observable<ProjectUnitCodeDto[]> {
    return this.listObjSubject.asObservable();
  }
  SetSubjectListObjs(LatestValue: ProjectUnitCodeDto[]) {
  return this.listObjSubject.next(LatestValue) ;
  }


  Save(projectUnits: ProjectUnitCodeDto): Observable<CoreResponseDTO<ProjectUnit[]>> {
    return this._httpClient.post<CoreResponseDTO<ProjectUnit[]>>
    (Configuration.APIs.LicenseProjectSubUnitsListCode.Save, projectUnits)
  }
  
  GetByProjectSubUnitId(projectId: string): Observable<CoreResponseDTO<ProjectUnitCodeDto[]>>  {
    return this._httpClient.get<CoreResponseDTO<ProjectUnitCodeDto[]>>
    (`${Configuration.APIs.LicenseProjectSubUnitsListCode.GetByProjectSubUnitId}/${projectId}`)
     
  }
  GetByProjectUnitId(projectId: string): Observable<CoreResponseDTO<ProjectUnitCodeDto[] >>  {
    return this._httpClient.get<CoreResponseDTO<ProjectUnitCodeDto[]>>
    (`${Configuration.APIs.LicenseProjectSubUnitsListCode.GetByProjectUnitId}/${projectId}`)
  }
  Delete(id: string) : Observable<CoreResponseDTO<ProjectUnitCodeDto[] >>{
    return this._httpClient.delete<CoreResponseDTO<ProjectUnitCodeDto[]>>
    (`${Configuration.APIs.LicenseProjectSubUnitsListCode.Delete}?id=${id}`)
  }
}
