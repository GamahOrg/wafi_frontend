import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CustomerShortDto } from '../models/facility-short-dto';
import { LicenseRequestHeaderDto, ProjectLicenseRequestsParams } from '../dataModels/license-request-header-dto';
import { ProjectPartiesStatusDto } from '../models/project-parties-status-model';

@Injectable()
export class ProjectListService {

 
  constructor(private _httpClient : HttpClient) {}
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 
  private project = new BehaviorSubject<LicenseRequestHeaderDto|null>({} as LicenseRequestHeaderDto|null);
  private project$ = this.project.asObservable();

  getProject(): Observable<LicenseRequestHeaderDto|null> {
    return this.project$;
  }
  setProject(LatestValue: LicenseRequestHeaderDto) {
    return this.project.next(LatestValue);
  }
  
  getEngineeringConsultantProjectsList(params: ProjectLicenseRequestsParams): Observable<Pagination<LicenseRequestHeaderDto[]>| null> {
    return this._httpClient.post<CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>>(`${Configuration.APIs.LicenseProject.GetEngineeringConsultantProjectsList}`, params).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>) => {
        return res.isDone? res.data as Pagination<LicenseRequestHeaderDto[]>: null
      })
    );
  }  
  getDevelopereringConsultantProjectsList(params: ProjectLicenseRequestsParams): Observable<Pagination<LicenseRequestHeaderDto[]>| null> {
    return this._httpClient.post<CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>>(`${Configuration.APIs.LicenseProject.GetDeveloperProjectsList}`, params).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>) => {
        return res.isDone? res.data as Pagination<LicenseRequestHeaderDto[]>: null
      })
    );
  }

 
  UpdateProjectManagerOnProject(projectManagerId:string,licenseProjectId:string) : Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProject.UpdateProjectManagerOnProject}/${projectManagerId}/${licenseProjectId}`)
   }
  
  
   UpdateLicenseProjectStatus(licenseProjectId: string, statusId: string): Observable<CoreResponseDTO<any>> {
     return this._httpClient.get<CoreResponseDTO<any>>(
         `${Configuration.APIs.LicenseProject.GetProjectPartiesStatus}/${licenseProjectId}/${statusId}`,
         {}
     );
   }
   
   GetProjectPartiesStatus(licenseProjectId: string, isOwner: boolean): Observable<CoreResponseDTO<ProjectPartiesStatusDto[] | null>> {
     return this._httpClient.get<CoreResponseDTO<ProjectPartiesStatusDto[] | null>>(
         `${Configuration.APIs.LicenseProject.GetProjectPartiesStatus}/${licenseProjectId}/${isOwner}`,
         {}
     );
   }
   
   GenerateDraftVersionForProject(licenseProjectId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>(
        `${Configuration.APIs.LicenseProjectService.GenerateDraftVersionForProject}/${licenseProjectId}`,
        {}
    );
}

   GetSubCustomers(): Observable<CustomerShortDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>(Configuration.APIs.Customer.GetSubCustomers).pipe(
      map((res: CoreResponseDTO<CustomerShortDto[]>) => {
        if (res.data && res.data.length>0) {
          return res.data
        } else {
          return null
        }
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
