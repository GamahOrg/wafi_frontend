import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectHealthAndSafetyMonitoringDto } from '../models/license-project-health-and-safety-monitoring-dto';
import { SysLicenseProjectQualityStatusDto } from '../models/sys-license-project-quality-status-dto';
import { LicenseProjectHealthAndSafetyMonitoringCreateUpdateDto } from '../models/license-project-health-and-safety-monitoring-create-update-dto';

@Injectable()
export class LicenseProjectHealthAndSafetyMonitoringService {
  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter();

 private licenseProjectHealthAndSafetyMonitoring = new BehaviorSubject<LicenseProjectHealthAndSafetyMonitoringDto|null>({} as LicenseProjectHealthAndSafetyMonitoringDto|null);

  private licenseProjectHealthAndSafetyMonitoring$ = this.licenseProjectHealthAndSafetyMonitoring.asObservable();
  getLicenseProjectHealthAndSafetyMonitoring(): Observable<LicenseProjectHealthAndSafetyMonitoringDto|null> {
   return this.licenseProjectHealthAndSafetyMonitoring$;
 }
 setLicenseProjectHealthAndSafetyMonitoring(LatestValue: LicenseProjectHealthAndSafetyMonitoringDto) {
   return this.licenseProjectHealthAndSafetyMonitoring.next(LatestValue);
 }
  constructor(private _httpClient: HttpClient) { }


  getLicenseProjectQualityStatusList(): Observable<SysLicenseProjectQualityStatusDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseProjectQualityStatusDto[]>>
      (`${Configuration.APIs.LicenseProjectHealthAndSafetyMonitoring.GetLicenseProjectQualityStatusList}`).pipe(
        map((res: CoreResponseDTO<SysLicenseProjectQualityStatusDto[]>) => {
          return res.isDone ? res.data as SysLicenseProjectQualityStatusDto[] : null
        })
      )
  } 
  getLicenseProjectHealthAndSafetyMonitoringDetails(licenseProjectlId:string,monthDate:Date): Observable<LicenseProjectHealthAndSafetyMonitoringDto | null> {
  return this._httpClient.get<CoreResponseDTO<LicenseProjectHealthAndSafetyMonitoringDto>>
    (`${Configuration.APIs.LicenseProjectHealthAndSafetyMonitoring.GetLicenseProjectHealthAndSafetyMonitoringDetails}/${licenseProjectlId} /${monthDate}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectHealthAndSafetyMonitoringDto>) => {
        return res.isDone ? res.data as LicenseProjectHealthAndSafetyMonitoringDto: null
      })
    )
}
save(licenseProjectHealthAndSafetyMonitoringCreateUpdate: LicenseProjectHealthAndSafetyMonitoringCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
  return this._httpClient.post<CoreResponseDTO<any>>
    (Configuration.APIs.LicenseProjectHealthAndSafetyMonitoring.Save, licenseProjectHealthAndSafetyMonitoringCreateUpdate).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res : null
      })
    )
}
}
