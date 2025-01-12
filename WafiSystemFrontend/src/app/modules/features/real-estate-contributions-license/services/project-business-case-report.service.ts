import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ProjectBusinessCaseReportPagingDto } from '../dataModels/project-business-case-report-paging-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ProjectBusinessCaseReportDto } from '../dataModels/project-business-case-report-dto';
import { ProjectBusinessCaseReportCreateUpdateDto } from '../dataModels/project-business-case-report-create-update-dto';

@Injectable()
export class ProjectBusinessCaseReportService {

  constructor(private _httpClient : HttpClient) {}
  showprojectBusinessCaseReporDetails = new EventEmitter<string>();
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter() 
  private projectBusinessCaseReportId= new BehaviorSubject<string|null>(null);
  private projectBusinessCaseReportId$ = this.projectBusinessCaseReportId.asObservable();
  getProjectBusinessCaseReportId(): Observable<string|null> {
   return this.projectBusinessCaseReportId$;
 }
 setProjectBusinessCaseReportId(LatestValue: string) {
   return this.projectBusinessCaseReportId.next(LatestValue);
 }
  getProjectBusinessCaseReports(licenseProjectId:string, pageIndex: number, pageSize: number): Observable<Pagination<ProjectBusinessCaseReportPagingDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<ProjectBusinessCaseReportPagingDto[]>>>(`${Configuration.APIs.ProjectBusinessCaseReport.GetProjectBusinessCaseReportList}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<ProjectBusinessCaseReportPagingDto[]>>) => {
        
        return res.isDone? res.data as Pagination<ProjectBusinessCaseReportPagingDto[]>: null
        
      })
    );
  }
  getProjectBusinessCaseReportById(projectBusinessCaseReportId : string) :Observable<ProjectBusinessCaseReportDto|null>{
    return this._httpClient.get<CoreResponseDTO<ProjectBusinessCaseReportDto>>(`${Configuration.APIs.ProjectBusinessCaseReport.GetProjectBusinessCaseReportById}/${projectBusinessCaseReportId}`).pipe(
      map((res: CoreResponseDTO<ProjectBusinessCaseReportDto>)=>{
        return res.isDone? res.data as ProjectBusinessCaseReportDto:null;
  
      })
    );
   }
   save(ProjectBusinessCaseReport: ProjectBusinessCaseReportCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.ProjectBusinessCaseReport.Save, ProjectBusinessCaseReport).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  } 
}
