import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectInfrastructureNetworksStatusDto } from '../dataModels/license-project-infrastructure-networks-status-dto';
import { HttpClient } from '@angular/common/http';
import { SysLicenseInfrastructureElementDto } from '../dataModels/sys-license-infrastructure-element-dto';
import { LicenseProjectInfrastructureNetworksStatusCreateUpdateDto } from '../dataModels/license-project-infrastructure-networks-status-create-update-dto';
import { EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto } from '../dataModels/engineering-supervision-planned-report-detail-for-infrastructure-monthly-dto';

@Injectable()
export class LicenseProjectInfrastructureNetworksStatusService {

  private engineeringSupervisionPlannedReportDetailForInfrastructureMonthly = new BehaviorSubject<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto|null>({} as EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto|null);

  private engineeringSupervisionPlannedReportDetailForInfrastructureMonthly$ = this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly.asObservable();
  
  constructor(private _httpClient: HttpClient) { }
  GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId(licenseProjectEngineeringSupervisionPlannedReportDetailId: string): Observable<LicenseProjectInfrastructureNetworksStatusDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectInfrastructureNetworksStatusDto[]>>
      (`${Configuration.APIs.LicenseProjectInfrastructureNetworksStatus.GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId}/${licenseProjectEngineeringSupervisionPlannedReportDetailId}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectInfrastructureNetworksStatusDto[]>) => {
          return res.isDone ? res.data as LicenseProjectInfrastructureNetworksStatusDto[] : null
        })
      )
  } 

  GetLicenseInfrastructureElement(monthDate:Date, licenseProjectlId:string): Observable<SysLicenseInfrastructureElementDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseInfrastructureElementDto[]>>
      (`${Configuration.APIs.LicenseProjectInfrastructureNetworksStatus.GetLicenseInfrastructureElement}/${monthDate} /${licenseProjectlId}`).pipe(
        map((res: CoreResponseDTO<SysLicenseInfrastructureElementDto[]>) => {
          return res.isDone ? res.data as SysLicenseInfrastructureElementDto[] : null
        })
      )
  }

  Save(list: LicenseProjectInfrastructureNetworksStatusCreateUpdateDto[]): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectInfrastructureNetworksStatus.Save, list).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res.data : null
        })
      )
  }

  Delete(id: string): Observable<any> {
    return this._httpClient.delete<any>
      (`${Configuration.APIs.LicenseProjectInfrastructureNetworksStatus.Delete}?id=${id}`).pipe(
        map((res: any) => {
          return res;
        })
      )
  }

  getEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(): Observable<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto|null> {
    return this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly$;
  }

  setEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(LatestValue: EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto) {
    return this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly.next(LatestValue);
  }

}
