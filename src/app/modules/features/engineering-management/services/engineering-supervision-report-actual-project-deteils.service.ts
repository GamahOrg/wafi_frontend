import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { unitslist, zonelist } from '../models/planed-engineer-project-details';
import { LicenseProjectEngineeringProjectZonesBlocksDetailActualDto } from '../models/license-project-engineering-project-zones-blocks-detail-actual-dto';

@Injectable()
export class EngineeringSupervisionReportActualProjectDeteilsService {

  constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter();

  private licenseProjectUnit = new BehaviorSubject<unitslist | null>(null);

  private licenseProjectUnit$ = this.licenseProjectUnit.asObservable();
  getLicenseProjectUnit(): Observable<unitslist | null> {
    return this.licenseProjectUnit$;
  }
  setLicenseProjectUnit(LatestValue: unitslist) {
    return this.licenseProjectUnit.next(LatestValue);
  }


  getZonesList(id: string | null): Observable<CoreResponseDTO<zonelist[]>> {
    return this._httpClient.get<CoreResponseDTO<zonelist[]>>(`${Configuration.APIs.PlannedEngineerProjectDetails.GetByLicenseProjectId}/${id}`);
  }




  getLicenseProjectBuildingBlocks(id: string | null, pageIndex: number, pageSize: number): Observable<Pagination<unitslist[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    if (id)
      queryParams = queryParams.append("zoneId", id);
    return this._httpClient.get<CoreResponseDTO<Pagination<unitslist[]>>>(`${Configuration.APIs.PlannedEngineerProjectDetails.GetLicenseProjectBuildingBlocks}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<unitslist[]>>) => {
        if (res.isDone) {
          return res.data as Pagination<unitslist[]>;
        } else {
          return {} as Pagination<unitslist[]>
        }
      })
    );
  }



  getLicenseProjectEngineeringProjectZonesBlocksDetailActual(licenseProjectId: string, monthDate: Date, licenseProjectUnitId: string): Observable<LicenseProjectEngineeringProjectZonesBlocksDetailActualDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringProjectZonesBlocksDetailActualDto>>
      (`${Configuration.APIs.EngineeringSupervisionReportActualProjectDetails.GetLicenseProjectEngineeringProjectZonesBlocksDetailActual}/${licenseProjectId}/${monthDate}/${licenseProjectUnitId}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringProjectZonesBlocksDetailActualDto>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringProjectZonesBlocksDetailActualDto : null
        })
      )
  }

  saveLicenseProjectEngineeringProjectZonesBlocksDetail(licenseProjectEngineeringProjectZonesBlocksDetailActual: LicenseProjectEngineeringProjectZonesBlocksDetailActualDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.EngineeringSupervisionReportActualProjectDetails.SaveLicenseProjectEngineeringProjectZonesBlocksDetail, licenseProjectEngineeringProjectZonesBlocksDetailActual).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  }
}
