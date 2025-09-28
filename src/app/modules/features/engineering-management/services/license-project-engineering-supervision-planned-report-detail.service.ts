import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { EngineeringSupervisionPlannedReportStudyNoteDto, LicenseProjectEngineeringInfrastructureDto, LicenseProjectEngineeringSupervisionPlannedReportStudyNoteCreateUpdateDto, MasterLicenseProjectEngineeringSupervisionPlannedReportDto } from '../models/master-license-project-engineering-supervision-planned-report-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto, MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto } from '../models/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto } from '../models/master-license-project-engineering-supervision-planned-details-dto';
import { LicenseProjectEngineeringDataTapStatus } from '../models/license-project-engineering-data-tap-status.model';
import { EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto } from '../models/engineering-supervision-planned-report-detail-for-infrastructure-monthly-dto';
import { LicenseProjectEngineeringReportDetailsCertifiedDto } from '../models/accountant-monthly-report-dto';
@Injectable()
export class LicenseProjectEngineeringSupervisionPlannedReportDetailService {

  constructor(private _httpClient: HttpClient) { }
  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter();
  licenseProjectEngineeringInfrastructure: EventEmitter<MasterLicenseProjectEngineeringSupervisionPlannedReportDto | null> = new EventEmitter();

  private engineerinSupervisionPlannedReportAllowToEdit = new BehaviorSubject<boolean | null>({} as boolean | null);

  private engineerinSupervisionPlannedReportAllowToEdit$ = this.engineerinSupervisionPlannedReportAllowToEdit.asObservable();

  getEngineerinSupervisionPlannedReportAllowToEdit(): Observable<boolean | null> {
    return this.engineerinSupervisionPlannedReportAllowToEdit$;
  }

  setEngineerinSupervisionPlannedReportAllowToEdit(LatestValue: boolean) {
    return this.engineerinSupervisionPlannedReportAllowToEdit.next(LatestValue);
  }

  GetLicenseProjectEngineeringDetails(licenseProjectId: string): Observable<MasterLicenseProjectEngineeringSupervisionPlannedReportDto | null> {
    return this._httpClient.get<CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedReportDto>>
      (`${Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.GetLicenseProjectEngineeringDetails}/${licenseProjectId}`).pipe(
        map((res: CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedReportDto>) => {
          return res.isDone ? res.data as MasterLicenseProjectEngineeringSupervisionPlannedReportDto : null
        })
      )
  }

  SaveLicenseProjectEngineeringDetails(obj: any): Observable<MasterLicenseProjectEngineeringSupervisionPlannedReportDto | null> {
    return this._httpClient.post<CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedReportDto>>
      (Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.SaveLicenseProjectEngineeringDetails, obj).pipe(
        map((res: CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedReportDto>) => {
          return res.isDone ? res.data as MasterLicenseProjectEngineeringSupervisionPlannedReportDto : null
        })
      )
  }

  UpdateLicenseProjectEngineeringInfrastructure(obj: LicenseProjectEngineeringInfrastructureDto): Observable<MasterLicenseProjectEngineeringSupervisionPlannedReportDto | null> {
    return this._httpClient.post<CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedReportDto>>
      (Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.UpdateLicenseProjectEngineeringInfrastructure, obj).pipe(
        map((res: CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedReportDto>) => {
          return res.isDone ? res.data as MasterLicenseProjectEngineeringSupervisionPlannedReportDto : null
        })
      )
  }


  GetLicenseProjectEngineeringCompletionAndEmploymentRates(licenseProjectId: string, year: number): Observable<MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto | null> {
    return this._httpClient.get<CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto>>(`${Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.GetLicenseProjectEngineeringCompletionAndEmploymentRates}/${licenseProjectId}/${year}`).pipe(
      map((res: CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto>) => {
        return res.isDone ? res.data as MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto : null
      })
    );
  }

  SaveLicenseProjectEngineeringCompletionAndEmploymentRates(list: LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[]): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.SaveLicenseProjectEngineeringCompletionAndEmploymentRates, list).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res.data : null
        })
      )
  }

  SaveLicenseProjectEngineeringInfrastructureRates(list: LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[]): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.EngineeringSupervisionReportInfrastructure.SaveLicenseProjectEngineeringInfrastructureRates, list).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res.data : null
        })
      )
  }

  GetLicenseProjectEngineeringInfrastructureRates(licenseProjectId: string, year: number): Observable<MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto | null> {
    return this._httpClient.get<CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto>>(`${Configuration.APIs.EngineeringSupervisionReportInfrastructure.GetLicenseProjectEngineeringInfrastructureRates}/${licenseProjectId}/${year}`).pipe(
      map((res: CoreResponseDTO<MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto>) => {
        return res.isDone ? res.data as MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto : null
      })
    );
  }

  GetLicenseProjectEngineeringDataTapStatus(licenseProjectId: string): Observable<LicenseProjectEngineeringDataTapStatus | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringDataTapStatus>>
      (`${Configuration.APIs.EngineeringSupervisionReportProjectStatusSummary.GetLicenseProjectEngineeringDataTapStatus}/${licenseProjectId}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringDataTapStatus>) => {
          return res.isDone ? res.data as LicenseProjectEngineeringDataTapStatus : null
        })
      )
  }

  GetEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(licenseProjectId: string, year: number): Observable<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto[]>>
      (`${Configuration.APIs.EngineeringSupervisionReportInfrastructure.GetEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly}/${licenseProjectId}/${year}`).pipe(
        map((res: CoreResponseDTO<EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto[]>) => {
          return res.isDone ? res.data as EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto[] : null
        })
      )
  }

  SendPlannedReport(licenseProjectId: string | null): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.PlannedEngineerProjectDetails.SendPlannedReport}/${licenseProjectId}`);
  }

  CompilePlannedReport(licenseProjectEngineeringSupervisionPlannedReportStudyNote: LicenseProjectEngineeringSupervisionPlannedReportStudyNoteCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.PlannedEngineerProjectDetails.CompilePlannedReport, licenseProjectEngineeringSupervisionPlannedReportStudyNote).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res ? res.data : null
        })
      )
  }

  GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote(licenseProjectId: string): Observable<EngineeringSupervisionPlannedReportStudyNoteDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<EngineeringSupervisionPlannedReportStudyNoteDto[]>>(`${Configuration.APIs.PlannedEngineerProjectDetails.GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<EngineeringSupervisionPlannedReportStudyNoteDto[]>) => {
        return res.isDone ? res.data as EngineeringSupervisionPlannedReportStudyNoteDto[] : null
      })
    );
  }

}
