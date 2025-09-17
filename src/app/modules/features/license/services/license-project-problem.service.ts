import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectProblemPagingDto } from '../dataModels/license-project-problem-paging-dto';
import { LicenseProjectDto } from '../dataModels/license-project-risk-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectProblemsCountsDto } from '../dataModels/license-project-problems-counts-dto';
import { LicenseProjectProblemDto } from '../dataModels/license-project-problem-dto';
import { LicenseProjectProblemCreateUpdateDto } from '../dataModels/license-project-problem-create-update-dto';
import { LicenseProjectProblemReplyDto } from '../../engineering-management/models/license-project-problem-dto';

@Injectable()
export class LicenseProjectProblemService {
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
    queryParams = queryParams.append("monthDate", monthDate);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectProblemPagingDto[]>>>(`${Configuration.APIs.LicenseProjectProblem.GetLicenseProjectProblems}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectProblemPagingDto[]>>) => {
        
        return res.isDone? res.data as Pagination<LicenseProjectProblemPagingDto[]>: null
        
      })
    );
  }
   getLicenseProjectProblemCounts(licenseProjectId : string,monthDate:any) :Observable<LicenseProjectProblemsCountsDto|null>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("monthDate", monthDate);
    return this._httpClient.get<CoreResponseDTO<LicenseProjectProblemsCountsDto>>(`${Configuration.APIs.LicenseProjectProblem.GetLicenseProjectProblemCounts}`,{params: queryParams}).pipe(
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

   saveLicenseProjectProblemReply(model: LicenseProjectProblemReplyDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseProjectProblem.SaveLicenseProjectProblemReply}`, model);
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
