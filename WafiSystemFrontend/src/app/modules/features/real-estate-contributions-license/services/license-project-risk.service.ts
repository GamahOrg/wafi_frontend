import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO} from 'src/app/core/models/core.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectDto, LicenseProjectRiskCountsDto, LicenseProjectRiskCreateUpdateDto, LicenseProjectRiskDto, LicenseProjectRiskPagingDto } from '../dataModels/license-project-risk-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class LicenseProjectRiskService {

  constructor(private _httpClient : HttpClient) {}
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter();
  private licenseProjectRiskId= new BehaviorSubject<string|null>(null);
  private licenseProjectRiskId$ = this.licenseProjectRiskId.asObservable();
  getLicenseProjectRiskId(): Observable<string|null> {
   return this.licenseProjectRiskId$;
 }
 setLicenseProjectRiskId(LatestValue: string) {
   return this.licenseProjectRiskId.next(LatestValue);
 }
  getLicenseProjectRisks(licenseProjectId:string, pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectRiskPagingDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectRiskPagingDto[]>>>(`${Configuration.APIs.LicenseProjectRisk.GetLicenseProjectRisks}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectRiskPagingDto[]>>) => {
        
        return res.isDone? res.data as Pagination<LicenseProjectRiskPagingDto[]>: null
        
      })
    );
  }

   getLicenseProjectRiskCounts(licenseProjectId : string) :Observable<LicenseProjectRiskCountsDto|null>{
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRiskCountsDto>>(`${Configuration.APIs.LicenseProjectRisk.GetLicenseProjectRiskCounts}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRiskCountsDto>)=>{
        return res.isDone? res.data as LicenseProjectRiskCountsDto:null;
  
      })
    );
   }
   getLicenseProjectRiskById(licenseProjectRiskId : string) :Observable<LicenseProjectRiskDto|null>{
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRiskDto>>(`${Configuration.APIs.LicenseProjectRisk.GetLicenseProjectRiskById}/${licenseProjectRiskId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectRiskDto>)=>{
        return res.isDone? res.data as LicenseProjectRiskDto:null;
  
      })
    );
   }
   
   save(licenseProjectRiskCreateUpdate: LicenseProjectRiskCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectRisk.Save, licenseProjectRiskCreateUpdate).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  } 
}
