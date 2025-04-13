import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectLandDto } from '../../dataModels/project-land.dto';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ProjectLandService {
    
    constructor(private _httpClient: HttpClient) { }

    GetLandDataByLicenseProjectId(id: string) {
      return this._httpClient.get<CoreResponseDTO<ProjectLandDto>>
        (`${Configuration.APIs.LicenseProject.GetLandDataByLicenseProjectId}/${id}`)
    }

    SaveLandData(obj: ProjectLandDto): Observable<CoreResponseDTO<ProjectLandDto>> {
      return this._httpClient.post<CoreResponseDTO<ProjectLandDto>>
        (Configuration.APIs.LicenseProject.SaveLandData,obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDto>) => {
          return res;
        })
      )
    }
    GetQualificationDegree(facilityId: string){      
      return this._httpClient.get<CoreResponseDTO<number|null>>
      (`${Configuration.APIs.QualificationRequestHeader.GetQualificationDegree}/${facilityId}`).pipe(
        map((res: CoreResponseDTO<number|null>) => {
          return res.data;
        })
      )
    }
}