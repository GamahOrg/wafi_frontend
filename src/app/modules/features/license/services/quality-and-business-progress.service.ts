import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectEngineeringMonthlyConsultantStaffRatesDto } from '../dataModels/license-project-engineering-monthly-consultant-staff-rates-dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { MasterConstructionWorkStatusDto } from '../dataModels/master-construction-work-status-dto';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectEngineeringRelativeWeightDto } from '../dataModels/license-project-engineering-relative-weight-dto';
import { LicenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateDto } from '../dataModels/license-project-engineering-monthly-consultant-staff-rates-create-update-dto';
import { ConstructionWorkStatusCreateUpdateDto } from '../dataModels/construction-work-status-create-update-dto';

@Injectable()
export class QualityAndBusinessProgressService {

  constructor(private _httpClient: HttpClient) { }
  private licenseProjectRelativeWeightId= new BehaviorSubject<string|null>(null);

  private licenseProjectRelativeWeightId$ = this.licenseProjectRelativeWeightId.asObservable();
  getLicenseProjectRelativeWeightId(): Observable<string|null> {
   return this.licenseProjectRelativeWeightId$;
 }
 setLicenseProjectRelativeWeightId(LatestValue: string) {
   return this.licenseProjectRelativeWeightId.next(LatestValue);
 }
  
  GetLicenseProjectEngineeringMonthlyConsultantStaffRates(licenseProjectId: string, year: number): Observable<LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[] | null> {

    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[]>>(`${Configuration.APIs.QualityAndBusinessProgress.GetLicenseProjectEngineeringMonthlyConsultantStaffRates}/${licenseProjectId}/${year}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[]>) => {
       
        return res.isDone ? res.data as LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[] : null

      })
    );
  }
  GetlicenseProjectRelativeWeightList(licenseProjectId: string,licenseProjectRelativeWeightId:string, year: number): Observable<MasterConstructionWorkStatusDto | null> {

    return this._httpClient.get<CoreResponseDTO<MasterConstructionWorkStatusDto>>(`${Configuration.APIs.QualityAndBusinessProgress.GetlicenseProjectRelativeWeightList}/${licenseProjectId}/${licenseProjectRelativeWeightId}/${year}`).pipe(
      map((res: CoreResponseDTO<MasterConstructionWorkStatusDto>) => {
       
        return res.isDone ? res.data as MasterConstructionWorkStatusDto : null

      })
    );
  }
  GetLicenseProjectEngineeringRelativeWeight(licenseProjectId: string, pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectEngineeringRelativeWeightDto[]>| null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("licenseProjectId", licenseProjectId);
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseProjectEngineeringRelativeWeightDto[]>>>(`${Configuration.APIs.QualityAndBusinessProgress.GetLicenseProjectEngineeringRelativeWeight}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseProjectEngineeringRelativeWeightDto[]>>) => {
       
        return res.isDone? res.data as Pagination<LicenseProjectEngineeringRelativeWeightDto[]>: null
      })
    );
  }

  SaveLicenseProjectEngineeringMonthlyConsultantStaffRates(list: LicenseProjectEngineeringMonthlyConsultantStaffRatesCreateUpdateDto[]): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.QualityAndBusinessProgress.SaveLicenseProjectEngineeringMonthlyConsultantStaffRates, list).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res.data : null
        })
      )
  } 
  SavelicenseProjectRelativeWeightRates(list: ConstructionWorkStatusCreateUpdateDto[]): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.QualityAndBusinessProgress.SavelicenseProjectRelativeWeightRates, list).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res.data : null
        })
      )
  } 
}
