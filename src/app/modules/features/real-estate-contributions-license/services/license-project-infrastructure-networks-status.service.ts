import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto } from '../models/engineering-supervision-planned-report-detail-for-infrastructure-monthly-dto';
import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectInfrastructureNetworksStatusDto } from '../models/license-project-infrastructure-networks-status-dto';
import { SysLicenseInfrastructureElementDto } from '../models/sys-license-infrastructure-element-dto';
import { LicenseProjectInfrastructureNetworksStatusCreateUpdateDto } from '../models/license-project-infrastructure-networks-status-create-update-dto';

@Injectable()
export class LicenseProjectInfrastructureNetworksStatusService {

  private engineeringSupervisionPlannedReportDetailForInfrastructureMonthly = new BehaviorSubject<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto|null>({} as EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto|null);

  private engineeringSupervisionPlannedReportDetailForInfrastructureMonthly$ = this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly.asObservable();
  getEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(): Observable<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto|null> {
   return this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly$;
 }
 setEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(LatestValue: EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto) {
   return this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly.next(LatestValue);
 }
  constructor(private _httpClient: HttpClient) { }
  GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId(licenseProjectEngineeringSupervisionPlannedReportDetailId: string): Observable<LicenseProjectInfrastructureNetworksStatusDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectInfrastructureNetworksStatusDto[]>>
      (`${Configuration.APIs.LicenseProjectInfrastructureNetworksStatus.GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId}/${licenseProjectEngineeringSupervisionPlannedReportDetailId}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectInfrastructureNetworksStatusDto[]>) => {
          return res.isDone ? res.data as LicenseProjectInfrastructureNetworksStatusDto[] : null
        })
      )
  } 
GetLicenseInfrastructureElement(monthDate:Date,licenseProjectlId:string): Observable<SysLicenseInfrastructureElementDto[] | null> {
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
}
