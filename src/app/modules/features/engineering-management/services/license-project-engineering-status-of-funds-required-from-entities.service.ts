import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BehaviorSubject,map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import  { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto } from '../models/license-project-engineering-status-of-funds-required-from-entities-dto';
import  { MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto } from '../models/master-license-project-engineering-status-of-funds-required-from-entities-dto';
import  { LicenseProjectEngineeringServiceTypeDto } from '../models/license-project-engineering-service-type-dto';
import  { LicenseProjectEngineeringAccreditationStatusDto } from '../models/license-project-engineering-accreditation-status-dto';
import  { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdateDto } from '../models/license-project-engineering-status-of-funds-required-from-entities-create-update-dto';

@Injectable()
export class LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService {

  
constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter();

  private licenseProjectEngineeringSupervisionPlannedReportDetailId = new BehaviorSubject<string|null>({} as string|null);

  private licenseProjectEngineeringSupervisionPlannedReportDetailId$ = this.licenseProjectEngineeringSupervisionPlannedReportDetailId.asObservable();
  getLicenseProjectEngineeringSupervisionPlannedReportDetailId(): Observable<string|null> {
   return this.licenseProjectEngineeringSupervisionPlannedReportDetailId$;
 }
 setLicenseProjectEngineeringSupervisionPlannedReportDetailIds(LatestValue: string) {
   return this.licenseProjectEngineeringSupervisionPlannedReportDetailId.next(LatestValue);
 }

 private licenseProjectEngineeringStatusOfFundsRequiredFromEntities = new BehaviorSubject<LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto|null>({} as LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto|null);

  private licenseProjectEngineeringStatusOfFundsRequiredFromEntities$ = this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.asObservable();
  getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities(): Observable<LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto|null> {
   return this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities$;
 }
 setLicenseProjectEngineeringStatusOfFundsRequiredFromEntities(LatestValue: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto) {
   return this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.next(LatestValue);
 }

  getLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList(licenseProjectId: string, monthDate: Date): Observable<MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto | null> {
      return this._httpClient.get<CoreResponseDTO<MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto>>(`${Configuration.APIs.LicenseProjectEngineeringStatusOfFundsRequiredFromEntities.GetLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList}/${licenseProjectId}/${monthDate}`).pipe(
        map((res: CoreResponseDTO<MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto>) => {
          return res.isDone ? res.data as MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto : null
        })
      );
    }
    getLicenseProjectEngineeringServiceTypeProjectDeliveryPhaseList(): Observable<LicenseProjectEngineeringServiceTypeDto[] | null> {
      return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringServiceTypeDto[]>>(`${Configuration.APIs.LicenseProjectEngineeringStatusOfFundsRequiredFromEntities.GetLicenseProjectEngineeringServiceTypeProjectDeliveryPhaseList}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringServiceTypeDto[]>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringServiceTypeDto[] : null
        })
      );
    }

    getLicenseProjectEngineeringServiceTypeDesignStageList(): Observable<LicenseProjectEngineeringServiceTypeDto[] | null> {
      return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringServiceTypeDto[]>>(`${Configuration.APIs.LicenseProjectEngineeringStatusOfFundsRequiredFromEntities.GetLicenseProjectEngineeringServiceTypeDesignStageList}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringServiceTypeDto[]>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringServiceTypeDto[] : null
        })
      );
    }

    getLicenseProjectEngineeringAccreditationStatusList(): Observable<LicenseProjectEngineeringAccreditationStatusDto[] | null> {
      return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringAccreditationStatusDto[]>>(`${Configuration.APIs.LicenseProjectEngineeringStatusOfFundsRequiredFromEntities.GetLicenseProjectEngineeringAccreditationStatusList}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringAccreditationStatusDto[]>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringAccreditationStatusDto[] : null
        })
      );
    }

    save(licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
        return this._httpClient.post<CoreResponseDTO<any>>
          (Configuration.APIs.LicenseProjectEngineeringStatusOfFundsRequiredFromEntities.Save, licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate).pipe(
            map((res: CoreResponseDTO<any>) => {
              return res.isDone ? res : null
            })
          )
      }
}
