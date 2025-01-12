import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectRealStateDeveloperDto } from '../../dataModels/project-real-state-developer.dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Observable, map } from 'rxjs';
import { CustomerShortDto } from '../../models/facility-short-dto';

@Injectable()
export class ProjectRealStateDeveloperService {
    
    constructor(private _httpClient: HttpClient) { }

  
  
    GetProjectRealStateDeveloperByLicenseProjectId(id: string):Observable<ProjectRealStateDeveloperDto> {
      return this._httpClient.get<CoreResponseDTO<ProjectRealStateDeveloperDto>>
        (`${Configuration.APIs.LicenseProject.GetProjectRealStateDeveloperByLicenseProjectId}/${id}`).pipe(
          map((res: CoreResponseDTO<ProjectRealStateDeveloperDto>) => {
            return  res?.data as ProjectRealStateDeveloperDto;
          })
        )
    }

    SaveProjectRealStateDeveloper(obj: ProjectRealStateDeveloperDto): Observable<CoreResponseDTO<ProjectRealStateDeveloperDto>> {
      
      return this._httpClient.post<CoreResponseDTO<ProjectRealStateDeveloperDto>>
        (Configuration.APIs.LicenseProject.SaveProjectRealStateDeveloper,obj).pipe(
        map((res: CoreResponseDTO<ProjectRealStateDeveloperDto>) => {
          return res;
        })
      )
    }
    deleteDelegator(id: string): Observable<CoreResponseDTO<any>> {
      return this._httpClient.delete<CoreResponseDTO<any>>
        (`${Configuration.APIs.licenseProjectDelegator.Delete}?id=${id}`).pipe(
          map((res) => {
            return res;
          })
        )
    }
    GetSubCustomers():Observable<CustomerShortDto[]> {
      return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
        (`${Configuration.APIs.Customer.GetSubCustomers}`).pipe(
          map((res: CoreResponseDTO<CustomerShortDto[]>) => {
            return  res?.data  as CustomerShortDto[];
          })
        )
    }
    GetFacilitySubCustomers(facilityId: string): Observable<CustomerShortDto[]> {
      return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
        (`${Configuration.APIs.Customer.GetFacilitySubCustomers}?facilityId=${facilityId}`).pipe(
          map((res: CoreResponseDTO<CustomerShortDto[]>) => {
            return res?.data as CustomerShortDto[];
          })
        )
    }
}
