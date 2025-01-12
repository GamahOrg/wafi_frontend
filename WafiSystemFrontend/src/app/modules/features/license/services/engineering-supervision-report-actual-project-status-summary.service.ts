import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectDto, LicenseProjectEngineeringActualReportDetailsDto } from '../dataModels/license-project-engineering-actual-report-details-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { MasterLicenseProjectEngineeringSupervisionPlannedReportDto } from '../dataModels/master-license-project-engineering-supervision-planned-report-dto';
import { LicenseProjectEngineeringActualReportMonthDetailsDto } from '../dataModels/license-project-engineering-actual-report-month-details-dto';
import { LicenseProjectEngineeringActualReportMonthDetailsCreateUpdateDto } from '../dataModels/license-project-engineering-actual-report-month-details-create-update-dto';

@Injectable()
export class EngineeringSupervisionReportActualProjectStatusSummaryService {


  constructor(private _httpClient: HttpClient) { }

  submitSuccessfullyEventEmitter : EventEmitter<null> = new EventEmitter();
  private monthDate= new BehaviorSubject<Date|null>(null);

  private monthDate$ = this.monthDate.asObservable();
  getmonthDate(): Observable<Date|null> {
   return this.monthDate$;
 }
 setmonthDate(LatestValue: Date) {
   return this.monthDate.next(LatestValue);
 }
  getActualProjectStatusDetails(licenseProjectId: string,monthDate:Date,currenrYear:number): Observable<LicenseProjectEngineeringActualReportDetailsDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringActualReportDetailsDto>>
      (`${Configuration.APIs.EngineeringSupervisionReportActualProjectStatusSummary.GetActualProjectStatusDetails}/${licenseProjectId}/${monthDate}/${currenrYear}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringActualReportDetailsDto>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringActualReportDetailsDto : null
        })
      )
  }
  getActualProjectStatusMonthDetails(licenseProjectId: string,monthDate:Date): Observable<LicenseProjectEngineeringActualReportMonthDetailsDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringActualReportMonthDetailsDto>>
      (`${Configuration.APIs.EngineeringSupervisionReportActualProjectStatusSummary.GetActualProjectStatusMonthDetails}/${licenseProjectId}/${monthDate}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringActualReportMonthDetailsDto>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringActualReportMonthDetailsDto : null
        })
      )
  }
  GetLicenseProjectData(licenseProjectId: string): Observable<LicenseProjectDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectDto>>
      (`${Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.GetLicenseProjectEngineeringDetails}/${licenseProjectId}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectDto>) => {
          return res.isDone ? res.data as LicenseProjectDto : null
        })
      )
  }

  SaveLicenseProjectEngineeringActualReportMonthDetails(licenseProjectEngineeringActualReportMonthDetailsCreateUpdate: LicenseProjectEngineeringActualReportMonthDetailsCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.EngineeringSupervisionReportActualProjectStatusSummary.SaveLicenseProjectEngineeringActualReportMonthDetails, licenseProjectEngineeringActualReportMonthDetailsCreateUpdate).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  } 

}
