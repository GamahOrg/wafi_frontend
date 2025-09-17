import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LicenseProjectProblemPagingDto, LicenseProjectProblemsCountsDto, SysLevelTypeDto } from '../models/license-project-problem-paging-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectProblemDto } from '../models/license-project-problem-dto';
import { LicenseProjectDto } from '../models/license-project-risk-dto';
import { LicenseProjectProblemCreateUpdateDto } from '../models/license-project-problem-create-update-dto';

@Injectable({
  providedIn: 'root'
})
export class EngineeringManagementLicenseProjectProblemService {
  constructor(private _httpClient : HttpClient) {}
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter();

  private licenseProjectProblemId= new BehaviorSubject<string|null>(null);

  private licenseProjectProblemId$ = this.licenseProjectProblemId.asObservable();
  getLicenseProjectProblemId(): Observable<string|null> {
   return this.licenseProjectProblemId$;
 }
 setLicenseProjectProblemId(LatestValue: string) {
   return this.licenseProjectProblemId.next(LatestValue);
 }

  getLicenseProjectProblems(licenseProjectId:string, pageIndex: number, pageSize: number,monthDate:any): Observable<Pagination<LicenseProjectProblemPagingDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    if(monthDate)
    queryParams = queryParams.append("monthDate", monthDate);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectProblemPagingDto[]>>>(`${Configuration.APIs.LicenseProjectProblem.GetLicenseProjectProblems}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectProblemPagingDto[]>>) => {
        
        return res.isDone? res.data as Pagination<LicenseProjectProblemPagingDto[]>: null
        
      })
    );
  }
  GetLicenseProjectById(licenseProjectId : string) :Observable<LicenseProjectDto|null>{
    return this._httpClient.get<CoreResponseDTO<LicenseProjectDto>>(`${Configuration.APIs.LicenseProject.GetLicenseProjectById}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectDto>)=>{
        return res.isDone? res.data as LicenseProjectDto:null;
  
      })
    );
   }
   GetLicenseProjectProblemCounts(licenseProjectId : string,monthDate:any) :Observable<LicenseProjectProblemsCountsDto|null>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    if(monthDate)
    queryParams = queryParams.append("monthDate", monthDate);
    return this._httpClient.get<CoreResponseDTO<LicenseProjectProblemsCountsDto>>(`${Configuration.APIs.LicenseProjectProblem.GetLicenseProjectProblemCounts}`,{params:queryParams}).pipe(
      map((res: CoreResponseDTO<LicenseProjectProblemsCountsDto>)=>{
        return res.isDone? res.data as LicenseProjectProblemsCountsDto:null;
  
      })
    );
   }
   getLicenseProjectProblemById(licenseProjectProblemId : string) :Observable<LicenseProjectProblemDto|null>{
    return this._httpClient.get<CoreResponseDTO<LicenseProjectProblemDto>>(`${Configuration.APIs.LicenseProjectProblem.GetLicenseProjectProblemById}/${licenseProjectProblemId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectProblemDto>)=>{
        return res.isDone? res.data as LicenseProjectProblemDto:null;
  
      })
    );
   }

  

   save(licenseProjectProblemCreateUpdate: LicenseProjectProblemCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectProblem.Save, licenseProjectProblemCreateUpdate).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  } 
}
