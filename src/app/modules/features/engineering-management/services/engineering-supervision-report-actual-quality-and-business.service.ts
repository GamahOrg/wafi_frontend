import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectEngineeringActualRelativeWeightDto } from '../models/license-project-engineering-actual-relative-weight-dto';
import { LicenseProjectEngineeringMaterialExaminationDto } from '../models/license-project-engineering-material-examination-dto';
import { LicenseProjectEngineeringNonConformityReportDto } from '../models/license-project-engineering-non-conformity-report-dto';
import { LicenseProjectEngineeringWorksExaminationCreateUpdateDto, LicenseProjectEngineeringWorksExaminationPagingDto } from '../models/license-project-engineering-works-examination-paging-dto';
import { LicenseProjectEngineeringActualQualityPlanAndAssuranceDto } from '../models/license-project-engineering-actual-quality-plan-and-assurance-dto';
import { LicenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdateDto } from '../models/license-project-engineering-actual-quality-plan-and-assurance-create-update-dto';
import { SysLicenseProjectQualityStatusDto } from '../models/sys-license-project-quality-status-dto';
import { LicenseProjectEngineeringWorksExaminationDetails, SysLicenseProjectEngineeringWorksDto } from '../models/license-project-engineering-works-examination-details';
import { LicenseProjectEngineeringNonConformityReportCreateUpdateDto } from '../models/license-project-engineering-non-conformity-report-create-update-dto';
import { ConstructionWorkStatusActualDto } from '../models/construction-work-status-actual-dto';
import { ConstructionWorkStatusCreateUpdateDto } from '../models/construction-work-status-create-update-dto';
import { LicenseProjectEngineeringMaterialExaminationCreateUpdateDto } from '../models/license-project-engineering-material-examination-create-update-dto';


@Injectable()
export class EngineeringSupervisionReportActualQualityAndBusinessService {
  constructor(private _httpClient: HttpClient) { }

  submitSuccessfullyEventEmitter: EventEmitter<null> = new EventEmitter();
  private licenseProjectEngineeringActualRelativeWeight = new BehaviorSubject<LicenseProjectEngineeringActualRelativeWeightDto | null>(null);
  private licenseProjectEngineeringActualRelativeWeight$ = this.licenseProjectEngineeringActualRelativeWeight.asObservable();
  private licenseProjectEngineeringMaterialExamination = new BehaviorSubject<LicenseProjectEngineeringMaterialExaminationDto | null>(null);
  private licenseProjectEngineeringMaterialExamination$ = this.licenseProjectEngineeringMaterialExamination.asObservable();

  getLicenseProjectEngineeringActualRelativeWeightObj(): Observable<LicenseProjectEngineeringActualRelativeWeightDto | null> {
    return this.licenseProjectEngineeringActualRelativeWeight$;
  }

  setLicenseProjectEngineeringActualRelativeWeightObj(LatestValue: LicenseProjectEngineeringActualRelativeWeightDto) {
    return this.licenseProjectEngineeringActualRelativeWeight.next(LatestValue);
  }

  getLicenseProjectEngineeringMaterialExaminationObj(): Observable<LicenseProjectEngineeringMaterialExaminationDto | null> {
    return this.licenseProjectEngineeringMaterialExamination$;
  }

  setLicenseProjectEngineeringMaterialExaminationObj(LatestValue: LicenseProjectEngineeringMaterialExaminationDto) {
    return this.licenseProjectEngineeringMaterialExamination.next(LatestValue);
  }

  private licenseProjectEngineeringNonConformityReport = new BehaviorSubject<LicenseProjectEngineeringNonConformityReportDto | null>(null);
  private licenseProjectEngineeringNonConformityReport$ = this.licenseProjectEngineeringNonConformityReport.asObservable();
  getLicenseProjectEngineeringNonConformityReportObj(): Observable<LicenseProjectEngineeringNonConformityReportDto | null> {
    return this.licenseProjectEngineeringNonConformityReport$;
  }

  setLicenseProjectEngineeringNonConformityReportObj(LatestValue: LicenseProjectEngineeringNonConformityReportDto) {
    return this.licenseProjectEngineeringNonConformityReport.next(LatestValue);
  }

  private licenseProjectEngineeringWorksExamination = new BehaviorSubject<LicenseProjectEngineeringWorksExaminationPagingDto | null>(null);
  private licenseProjectEngineeringWorksExamination$ = this.licenseProjectEngineeringWorksExamination.asObservable();

  getLicenseProjectEngineeringWorksExamination(): Observable<LicenseProjectEngineeringWorksExaminationPagingDto | null> {
    return this.licenseProjectEngineeringWorksExamination$;
  }

  setLicenseProjectEngineeringWorksExamination(LatestValue: LicenseProjectEngineeringWorksExaminationPagingDto) {
    return this.licenseProjectEngineeringWorksExamination.next(LatestValue);
  }

  private licenseProjectEngineeringActualQualityPlanAndAssurance = new BehaviorSubject<LicenseProjectEngineeringActualQualityPlanAndAssuranceDto | null>(null);

  private licenseProjectEngineeringActualQualityPlanAndAssurance$ = this.licenseProjectEngineeringActualQualityPlanAndAssurance.asObservable();
  getLicenseProjectEngineeringActualQualityPlanAndAssuranceObj(): Observable<LicenseProjectEngineeringActualQualityPlanAndAssuranceDto | null> {
    return this.licenseProjectEngineeringActualQualityPlanAndAssurance$;
  }

  setLicenseProjectEngineeringActualQualityPlanAndAssuranceObj(LatestValue: LicenseProjectEngineeringActualQualityPlanAndAssuranceDto) {
    return this.licenseProjectEngineeringActualQualityPlanAndAssurance.next(
      LatestValue
    );
  }

  getLicenseProjectEngineeringActualQualityPlanAndAssurance(licenseProjectId: string, monthDate: Date): Observable<LicenseProjectEngineeringActualQualityPlanAndAssuranceDto | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringActualQualityPlanAndAssuranceDto>>(
      `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectEngineeringActualQualityPlanAndAssurance}/${licenseProjectId}/${monthDate}`)
      .pipe(map((res: CoreResponseDTO<LicenseProjectEngineeringActualQualityPlanAndAssuranceDto>) => {
        return res.isDone ? (res.data as LicenseProjectEngineeringActualQualityPlanAndAssuranceDto) : null;
      }
      )
      );
  }

  saveLicenseProjectEngineeringActualQualityPlanAndAssurance(licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate: LicenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.SaveLicenseProjectEngineeringActualQualityPlanAndAssurance, licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate)
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        })
      );
  }

  getLicenseProjectQualityStatusList(): Observable<SysLicenseProjectQualityStatusDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseProjectQualityStatusDto[]>>(`${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectQualityStatusList}`)
      .pipe(
        map((res: CoreResponseDTO<SysLicenseProjectQualityStatusDto[]>) => {
          return res.isDone
            ? (res.data as SysLicenseProjectQualityStatusDto[])
            : null;
        })
      );
  }

  getLicenseProjectEngineeringWorksExaminationList(monthDate: any, pageIndex: number, pageSize: number): Observable<Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]> | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('monthDate', monthDate);
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    return this._httpClient
      .get<CoreResponseDTO<Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]>>>(
        `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectEngineeringWorksExaminationList}`, { params: queryParams })
      .pipe(
        map((res: CoreResponseDTO<Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]>>) => {
          return res.isDone ? (res.data as Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]>) : null;
        })
      );
  }

  getLicenseProjectEngineeringWorksExaminationDetails(licenseProjectId: string, licenseProjectEngineeringSupervisionPlannedReportDetailId: string, sysLicenseProjectEngineeringWorksId: string): Observable<LicenseProjectEngineeringWorksExaminationDetails | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringWorksExaminationDetails>>(
      `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectEngineeringWorksExaminationDetails}/${licenseProjectId}/${licenseProjectEngineeringSupervisionPlannedReportDetailId}/${sysLicenseProjectEngineeringWorksId}`)
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringWorksExaminationDetails>) => {
          return res.isDone ? (res.data as LicenseProjectEngineeringWorksExaminationDetails) : null;
        }
        )
      );
  }

  saveLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExaminationCreateUpdate: LicenseProjectEngineeringWorksExaminationCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.SaveLicenseProjectEngineeringWorksExamination, licenseProjectEngineeringWorksExaminationCreateUpdate
      )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        })
      );
  }

  getSysLicenseProjectEngineeringWorkList(): Observable<SysLicenseProjectEngineeringWorksDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseProjectEngineeringWorksDto[]>>(
      `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetSysLicenseProjectEngineeringWorkList}`
    )
      .pipe(
        map((res: CoreResponseDTO<SysLicenseProjectEngineeringWorksDto[]>) => {
          return res.isDone
            ? (res.data as SysLicenseProjectEngineeringWorksDto[])
            : null;
        })
      );
  }

  deleteLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExaminationId: string): Observable<any | null> {
    return this._httpClient.get<CoreResponseDTO<SysLicenseProjectEngineeringWorksDto[]>>(
      `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.DeleteLicenseProjectEngineeringWorksExamination}/${licenseProjectEngineeringWorksExaminationId}`
    )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? (res.data as any) : null;
        })
      );
  }

  getLicenseProjectEngineeringMaterialExamination(licenseProjectId: string, monthDate: Date): Observable<LicenseProjectEngineeringMaterialExaminationDto | null> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectEngineeringMaterialExaminationDto>>(
        `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectEngineeringMaterialExamination}/${licenseProjectId}/${monthDate}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringMaterialExaminationDto>) => {
          return res.isDone
            ? (res.data as LicenseProjectEngineeringMaterialExaminationDto)
            : null;
        }
        )
      );
  }

  getLicenseProjectEngineeringNonConformityReport(licenseProjectId: string, monthDate: Date): Observable<LicenseProjectEngineeringNonConformityReportDto | null> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectEngineeringNonConformityReportDto>>(
        `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectEngineeringNonConformityReport}/${licenseProjectId}/${monthDate}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringNonConformityReportDto>) => {
          return res.isDone ? (res.data as LicenseProjectEngineeringNonConformityReportDto) : null;
        }
        )
      );
  }

  saveLicenseProjectEngineeringNonConformityReport(licenseProjectEngineeringNonConformityReportCreateUpdate: LicenseProjectEngineeringNonConformityReportCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>(
      Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.SaveLicenseProjectEngineeringNonConformityReport, licenseProjectEngineeringNonConformityReportCreateUpdate)
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        })
      );
  }

  saveLicenseProjectEngineeringMaterialExamination(licenseProjectEngineeringMaterialExaminationCreateUpdate: LicenseProjectEngineeringMaterialExaminationCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.SaveLicenseProjectEngineeringMaterialExamination, licenseProjectEngineeringMaterialExaminationCreateUpdate)
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        })
      );
  }

  getLicenseProjectEngineeringActualRelativeWeight(licenseProjectId: string, monthDate: any): Observable<LicenseProjectEngineeringActualRelativeWeightDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringActualRelativeWeightDto[]>>(
      `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetLicenseProjectEngineeringActualRelativeWeight}/${licenseProjectId}/${monthDate}`)
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringActualRelativeWeightDto[]>) => {
          return res.isDone ? (res.data as LicenseProjectEngineeringActualRelativeWeightDto[]) : null;
        }
        )
      );
  }

  getLicenseProjectActualRelativeWeightDetails(licenseProjectId: string, licenseRelativeWeightId: string, monthDate: Date): Observable<ConstructionWorkStatusActualDto | null> {
    return this._httpClient.get<CoreResponseDTO<ConstructionWorkStatusActualDto>>(
      `${Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.GetlicenseProjectActualRelativeWeightDetails}/${licenseProjectId}/${licenseRelativeWeightId}/${monthDate}`)
      .pipe(
        map((res: CoreResponseDTO<ConstructionWorkStatusActualDto>) => {
          return res.isDone ? (res.data as ConstructionWorkStatusActualDto) : null;
        })
      );
  }

  savelicenseProjectAcualRelativeWeightRates(constructionWorkStatusCreateUpdate: ConstructionWorkStatusCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>(
      Configuration.APIs.EngineeringSupervisionReportActualQualitySummary.SavelicenseProjectAcualRelativeWeightRates, constructionWorkStatusCreateUpdate)
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null;
        })
      );
  }

}
