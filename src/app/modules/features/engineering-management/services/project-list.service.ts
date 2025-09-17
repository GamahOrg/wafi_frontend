import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseRequestHeaderDto, ProjectLicenseRequestsParams } from '../models/license-request-header-dto';
import { CustomerShortDto } from '../../license/models/facility-short-dto';

@Injectable()
export class ProjectListService {

  constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter()
  private project = new BehaviorSubject<LicenseRequestHeaderDto | null>({} as LicenseRequestHeaderDto | null);
  private project$ = this.project.asObservable();

  getProject(): Observable<LicenseRequestHeaderDto | null> {
    return this.project$;
  }
  setProject(LatestValue: LicenseRequestHeaderDto) {
    return this.project.next(LatestValue);
  }

  getEngineeringConsultantProjectsList(params: ProjectLicenseRequestsParams): Observable<Pagination<LicenseRequestHeaderDto[]> | null> {
    return this._httpClient.post<CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>>(`${Configuration.APIs.LicenseProject.GetEngineeringConsultantProjectsList}`, params).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>) => {
        return res.isDone ? res.data as Pagination<LicenseRequestHeaderDto[]> : null
      })
    );
  }
  getDeveloperProjectsList(params: ProjectLicenseRequestsParams): Observable<Pagination<LicenseRequestHeaderDto[]> | null> {
    return this._httpClient.post<CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>>(`${Configuration.APIs.LicenseProject.GetDeveloperProjectsList}`, params).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseRequestHeaderDto[]>>) => {
        return res.isDone ? res.data as Pagination<LicenseRequestHeaderDto[]> : null
      })
    );
  }


  UpdateProjectManagerOnProject(projectManagerId: string, licenseProjectId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProject.UpdateProjectManagerOnProject}/${projectManagerId}/${licenseProjectId}`)
  }
  UpdateLicenseProjectStatus(licenseProjectId: string, statusId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProject.UpdateLicenseProjectStatus}/${licenseProjectId}/${statusId}`,
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
