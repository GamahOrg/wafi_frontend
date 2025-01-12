import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectLandOwnerCreateUpdateDto, ProjectLandOwnerDto, SaveDeedLandOwnersDto, SysLicenseProjectLandOwnerTypeCreateUpdateDto } from '../dataModels/project-land-owner.dto';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ProjectLandDeedDto } from '../dataModels/project-land-deed.dto';

@Injectable()
export class ProjectLandOwnerService {
    
    constructor(private _httpClient: HttpClient) { }

    
    GetByLicenseProjectId(id: string) {
      return this._httpClient.get<CoreResponseDTO<ProjectLandOwnerDto[]>>
        (`${Configuration.APIs.LicenseProjectLandOwner.GetByLicenseProjectId}/${id}`).pipe(
          map((res: CoreResponseDTO<ProjectLandOwnerDto[]>) => {
            return res.data;
          })
        )
    }
    GetByDeedId(id: string) {
      return this._httpClient.get<CoreResponseDTO<ProjectLandOwnerDto[]>>
        (`${Configuration.APIs.LicenseProjectLandOwner.GetByDeedId}/${id}`).pipe(
          map((res: CoreResponseDTO<ProjectLandOwnerDto[]>) => {
            return res.data;
          })
        )
    }
    Save(obj: ProjectLandOwnerCreateUpdateDto): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {
      
      return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
        (Configuration.APIs.LicenseProjectLandOwner.Save,obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res;
        })
      )
    }
    SaveListOfDeedOwners(obj: SaveDeedLandOwnersDto): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {
      
      return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
        (Configuration.APIs.LicenseProjectLandOwner.SaveListOfDeedOwners,obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res;
        })
      )
    }
    Delete(id: string) : Observable<any>{
      return this._httpClient.delete<any>
      (`${Configuration.APIs.LicenseProjectLandOwner.Delete}?id=${id}`).pipe(
        map((res:any) => {
          return res;
        })
      )
    }
    GetSysLicenseProjectLandOwnerTypeDropDown(): Observable<SysLicenseProjectLandOwnerTypeCreateUpdateDto[]> {
      return this._httpClient
          .get<CoreResponseDTO<SysLicenseProjectLandOwnerTypeCreateUpdateDto[]>>(`${Configuration.APIs.SysLicenseProjectLandOwnerType.GetDropDown}`)
          .pipe(
              map((res: CoreResponseDTO<SysLicenseProjectLandOwnerTypeCreateUpdateDto[]>) => {
                  return res.data as SysLicenseProjectLandOwnerTypeCreateUpdateDto[];
              })
          );
    }
}