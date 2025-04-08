import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { EngineeringSupervisionPlannedReportActualInfrastructureDto } from '../dataModels/engineering-supervision-planned-report-actual-infrastructure-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ActualInfrastructureCreateUpdateDto } from '../dataModels/actual-infrastructure-create-update-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { HttpClient } from '@angular/common/http';
import { LicenseProjectConnectionWithServicesProviderDto, SysLicenseProjectActivationStatusDto,SysLicenseProjectTieConnectionStatusDto,SysLicenseProjectServiceTypeStatusDto } from '../dataModels/license-project-connection-with-services-provider-dto';
import { LicenseProjectConnectionWithServicesProviderCreateUpdateDto } from '../dataModels/license-project-connection-with-services-provider-create-update-dto';
import { ActualLicenseProjectInfrastructureNetworksStatusCreateUpdateDto } from '../dataModels/actual-license-project-infrastructure-networks-status-create-update-dto';
import { ActualLicenseProjectInfrastructureNetworksStatusDto } from '../dataModels/actual-license-project-infrastructure-networks-status-dto';

@Injectable()
export class EngineeringSupervisionPlannedReportActualInfrastructureService {

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter();


  private actualLicenseProjectInfrastructureNetworksStatusDto = new BehaviorSubject<ActualLicenseProjectInfrastructureNetworksStatusDto|null>({} as ActualLicenseProjectInfrastructureNetworksStatusDto|null);
 
  private actualLicenseProjectInfrastructureNetworksStatusDto$ = this.actualLicenseProjectInfrastructureNetworksStatusDto.asObservable();
  getActualLicenseProjectInfrastructureNetworksStatusDto(): Observable<ActualLicenseProjectInfrastructureNetworksStatusDto|null> {
   return this.actualLicenseProjectInfrastructureNetworksStatusDto$;
 }
 setActualLicenseProjectInfrastructureNetworksStatusDto(LatestValue: ActualLicenseProjectInfrastructureNetworksStatusDto) {
   return this.actualLicenseProjectInfrastructureNetworksStatusDto.next(LatestValue);
 }




 
  private engineeringSupervisionPlannedReportActualInfrastructureDto = new BehaviorSubject<EngineeringSupervisionPlannedReportActualInfrastructureDto|null>({} as EngineeringSupervisionPlannedReportActualInfrastructureDto|null);
 
   private engineeringSupervisionPlannedReportActualInfrastructureDto$ = this.engineeringSupervisionPlannedReportActualInfrastructureDto.asObservable();
   getEngineeringSupervisionPlannedReportActualInfrastructureDto(): Observable<EngineeringSupervisionPlannedReportActualInfrastructureDto|null> {
    return this.engineeringSupervisionPlannedReportActualInfrastructureDto$;
  }
  setEngineeringSupervisionPlannedReportActualInfrastructureDto(LatestValue: EngineeringSupervisionPlannedReportActualInfrastructureDto) {
    return this.engineeringSupervisionPlannedReportActualInfrastructureDto.next(LatestValue);
  }


  
  private licenseProjectConnectionWithServicesProviderDto = new BehaviorSubject<LicenseProjectConnectionWithServicesProviderDto|null>({} as LicenseProjectConnectionWithServicesProviderDto|null);
 
  private licenseProjectConnectionWithServicesProviderDto$ = this.licenseProjectConnectionWithServicesProviderDto.asObservable();
  getLicenseProjectConnectionWithServicesProviderDto(): Observable<LicenseProjectConnectionWithServicesProviderDto|null> {
   return this.licenseProjectConnectionWithServicesProviderDto$;
 }
 setLicenseProjectConnectionWithServicesProviderDto(LatestValue: LicenseProjectConnectionWithServicesProviderDto) {
   return this.licenseProjectConnectionWithServicesProviderDto.next(LatestValue);
 }

   constructor(private _httpClient: HttpClient) { }
 
 
 
   getLicenseProjectEngineeringActualInfrastructureRates(licenseProjectlId:string,monthDate:Date): Observable<EngineeringSupervisionPlannedReportActualInfrastructureDto | null> {
   return this._httpClient.get<CoreResponseDTO<EngineeringSupervisionPlannedReportActualInfrastructureDto>>
     (`${Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.GetLicenseProjectEngineeringActualInfrastructureRates}/${licenseProjectlId} /${monthDate}`).pipe(
       map((res: CoreResponseDTO<EngineeringSupervisionPlannedReportActualInfrastructureDto>) => {
         return res.isDone ? res.data as EngineeringSupervisionPlannedReportActualInfrastructureDto: null
       })
     )
 }
 
 saveLicenseProjectEngineeringActualInfrastructureRates(actualInfrastructureCreateUpdateDto: ActualInfrastructureCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
   return this._httpClient.post<CoreResponseDTO<any>>
     (Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.SaveLicenseProjectEngineeringActualInfrastructureRates, actualInfrastructureCreateUpdateDto).pipe(
       map((res: CoreResponseDTO<any>) => {
         return res.isDone ? res : null
       })
     )
 }

 getLicenseProjectConnectionWithServicesProvider(licenseProjectlId:string,monthDate:Date): Observable<LicenseProjectConnectionWithServicesProviderDto | null> {
  return this._httpClient.get<CoreResponseDTO<LicenseProjectConnectionWithServicesProviderDto>>
    (`${Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.GetLicenseProjectConnectionWithServicesProvider}/${licenseProjectlId} /${monthDate}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectConnectionWithServicesProviderDto>) => {
        return res.isDone ? res.data as LicenseProjectConnectionWithServicesProviderDto: null
      })
    )
}
saveLicenseProjectConnectionWithServicesProvider(licenseProjectConnectionWithServicesProviderCreateUpdate: LicenseProjectConnectionWithServicesProviderCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
  return this._httpClient.post<CoreResponseDTO<any>>
    (Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.SaveLicenseProjectConnectionWithServicesProvider, licenseProjectConnectionWithServicesProviderCreateUpdate).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res : null
      })
    )
}



getSysLicenseProjectActivationStatusoList(): Observable<SysLicenseProjectActivationStatusDto[] | null> {
  return this._httpClient.get<CoreResponseDTO<SysLicenseProjectActivationStatusDto[]>>
    (`${Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.GetSysLicenseProjectActivationStatusoList}`).pipe(
      map((res: CoreResponseDTO<SysLicenseProjectActivationStatusDto[]>) => {
        return res.isDone ? res.data as SysLicenseProjectActivationStatusDto[]: null
      })
    )
}

getSysLicenseProjectServiceTypeStatusList(): Observable<SysLicenseProjectServiceTypeStatusDto[] | null> {
  return this._httpClient.get<CoreResponseDTO<SysLicenseProjectServiceTypeStatusDto[]>>
    (`${Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.GetSysLicenseProjectServiceTypeStatusList}`).pipe(
      map((res: CoreResponseDTO<SysLicenseProjectServiceTypeStatusDto[]>) => {
        return res.isDone ? res.data as SysLicenseProjectServiceTypeStatusDto[]: null
      })
    )
}


getSysLicenseProjectTieConnectionStatusList(): Observable<SysLicenseProjectTieConnectionStatusDto[] | null> {
  return this._httpClient.get<CoreResponseDTO<SysLicenseProjectTieConnectionStatusDto[]>>
    (`${Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.GetSysLicenseProjectTieConnectionStatusList}`).pipe(
      map((res: CoreResponseDTO<SysLicenseProjectTieConnectionStatusDto[]>) => {
        return res.isDone ? res.data as SysLicenseProjectTieConnectionStatusDto[]: null
      })
    )
}


getActualLicenseInfrastructureElement(licenseProjectlId:string,monthDate:Date): Observable<ActualLicenseProjectInfrastructureNetworksStatusDto[] | null> {
  return this._httpClient.get<CoreResponseDTO<ActualLicenseProjectInfrastructureNetworksStatusDto[]>>
    (`${Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.GetActualLicenseInfrastructureElement}/${licenseProjectlId} /${monthDate}`).pipe(
      map((res: CoreResponseDTO<ActualLicenseProjectInfrastructureNetworksStatusDto[]>) => {
        return res.isDone ? res.data as ActualLicenseProjectInfrastructureNetworksStatusDto[]: null
      })
    )
}
SaveActual(actualLicenseProjectInfrastructureNetworksStatusCreateUpdate: ActualLicenseProjectInfrastructureNetworksStatusCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
  return this._httpClient.post<CoreResponseDTO<any>>
    (Configuration.APIs.EngineeringSupervisionReportActualInfrastructure.SaveActual, actualLicenseProjectInfrastructureNetworksStatusCreateUpdate).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res : null
      })
    )
}
}
