import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  RequestDetails,
  facilityDTO,
} from '../../dataModels/request-details.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FacilityBasicInfo } from '../../../facilities/dataModels/facility-basic-info.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Request } from '../../dataModels/request-list.model';
import { QualificationQualificatedAccountantDto } from '../../../facilities/dataModels/qualification-qualificated-accountant-dto';
import { CertifiedEngineerDto } from '../../../facilities/dataModels/certified-engineer-dto';
import { AdditionTechnicalCapabilitiesRequirementsDto } from '../../../facilities/dataModels/additionTechnicalCapabilitiesRequirements.model';
import { QualifiedEngineersDto } from '../../../facilities/dataModels/qualified-engineers-dto';
import { financialCapabilityResponse } from '../../dataModels/financial-capability.model';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { nationalAddressResponse } from '../../dataModels/national-address.model';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from '../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { WafiTrainingDto } from '../../../facilities/dataModels/wafi-training-dto';
import { RequestNotes } from '../../dataModels/request-notes.model';
import { RequestLogDto } from '../../dataModels/request-log-dto';
import { QualificationRequestType } from '../../dataModels/qualification-request-type.model';

@Injectable()
export class RequestService {

  requestSummary$: BehaviorSubject<RequestDetails | null> =
    new BehaviorSubject<RequestDetails | null>(null);

  facility$: BehaviorSubject<facilityDTO[] | null> = new BehaviorSubject<
    facilityDTO[] | null
  >(null);
  AccountantsCompletedWafiTrainingProgramForAccountingSupervision$: BehaviorSubject<QualificationQualificatedAccountantDto[] | null> = new BehaviorSubject<QualificationQualificatedAccountantDto[] | null>(null)
  CertifiedFacilityEngineers$: BehaviorSubject<CertifiedEngineerDto[] | null> = new BehaviorSubject<CertifiedEngineerDto[] | null>(null)
  DistinctiveAdditionalTechnicalCapabilities$: BehaviorSubject<AdditionTechnicalCapabilitiesRequirementsDto[] | null> = new BehaviorSubject<AdditionTechnicalCapabilitiesRequirementsDto[] | null>(null)
  EngineersWithSufficientTrainingForTheEngineeringConsultan$: BehaviorSubject<QualifiedEngineersDto[] | null> = new BehaviorSubject<QualifiedEngineersDto[] | null>(null)
  FacilityBasicInfo$: BehaviorSubject<facilityDTO | null> = new BehaviorSubject<facilityDTO | null>(null)
  FinancialCapabilitiesRequirements$: BehaviorSubject<financialCapabilityResponse[] | null> = new BehaviorSubject<financialCapabilityResponse[] | null>(null)
  InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$: BehaviorSubject<QualificationAdditionInstitutionalCapacityAndHrRequirementDto[] | null> = new BehaviorSubject<QualificationAdditionInstitutionalCapacityAndHrRequirementDto[] | null>(null)
  JobRequirementsAndHumanResources$: BehaviorSubject<QualificationInstitutionalCapacityAndHrRequirementDto[] | null> = new BehaviorSubject<QualificationInstitutionalCapacityAndHrRequirementDto[] | null>(null)
  NationalAddresses$: BehaviorSubject<nationalAddressResponse[] | null> = new BehaviorSubject<nationalAddressResponse[] | null>(null)
  TechnicalCapabilitiesRequirements$: BehaviorSubject<QualificationTechnicalCapabilitiesRequirementFullDto[] | null> = new BehaviorSubject<QualificationTechnicalCapabilitiesRequirementFullDto[] | null>(null)
  WafiTraining$: BehaviorSubject<WafiTrainingDto[] | null> = new BehaviorSubject<WafiTrainingDto[] | null>(null)
  seclectRequest$: BehaviorSubject<RequestDetails[] | null> = new BehaviorSubject<RequestDetails[] | null>(null)
  AssignedEmpolyee$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  // RequestNotes$: BehaviorSubject<RequestNotesData | null> = new BehaviorSubject<RequestNotesData | null>(null)
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  constructor(private _httpClient: HttpClient) { }

  CreateRequestSummary(request: RequestDetails) {
    this.requestSummary$.next(request);
    console.log(this.requestSummary$.asObservable());
  }

  // get
  getRequestSummary(): Observable<RequestDetails | null> {
    return this.requestSummary$.asObservable();
  }

  CreateFacility(facility: facilityDTO[]) {
    this.facility$.next(facility);
  }

  // get
  getFacility(): Observable<facilityDTO[] | null> {
    return this.facility$.asObservable();
  }

  GetDraftRequestByFacilityId(
    facilityId: string,
    requestTypeCode: string
  ): Observable<facilityDTO[]> {
    return this._httpClient
      .get<CoreResponseDTO<facilityDTO[]>>(
        `${Configuration.APIs.facility.getDraftRequestByFacilityId}/${facilityId}/${requestTypeCode}`
      )
      .pipe(
        map((res: CoreResponseDTO<facilityDTO[]>) => {
          return res.data as facilityDTO[];
        })
      );
  }

  // GetRequestByCode(requestCode: string): Observable<RequestDetails> {
  //   return this._httpClient
  //     .get<CoreResponseDTO<RequestDetails>>(
  //       `${Configuration.APIs.QualificationRequestHeader.getRequestByCode}/${requestCode}`
  //     )
  //     .pipe(
  //       map((res: CoreResponseDTO<RequestDetails>) => {
  //         return res.data as RequestDetails;
  //       })
  //     );
  // }
  GetQualificationRequestHeaderByRequestId(requestId: string): Observable<RequestDetails[] | null> {
    return this._httpClient.get<CoreResponseDTO<RequestDetails[]>>(`${Configuration.APIs.QualificationRequestHeader.GetFacilityByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<RequestDetails[]>) => {
        if (res.data && res.data.length > 0) {
          return res.data as RequestDetails[];
        } else {
          return null
        }
      })
    );
  }

  getQualificationRequests(pageIndex: number, pageSize: number,searchText:string,currentSortColumn: string | null,currentSortOrder: 'asc' | 'desc' | null): Observable<Pagination<Request[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("searchText", searchText);
    if (currentSortOrder) {
      queryParams = queryParams.set("sortType", currentSortOrder);
    }
    if (currentSortColumn) {
      queryParams = queryParams.append("columnName", currentSortColumn);
    }
  
    return this._httpClient.get<CoreResponseDTO<Pagination<Request[]>>>(`${Configuration.APIs.QualificationRequestHeader.GetQualificationRequests}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<Request[]>>) => {
        return res.data as Pagination<Request[]>;
      })
    );
  }
  setSelectedRequestIdInLocalStorage(id: string): void {
    localStorage.setItem("seclectRequest", id)
  }
  getSelectedRequestIdFromLocalStorage(): string | null {
    let seclectRequest = localStorage.getItem("seclectRequest")
    return seclectRequest
  }
  clearRequestFromLocalStorage(): void {
    localStorage.removeItem("seclectRequest")
  }
  setRequestCodeInLocalStorage(code: string): void {
    localStorage.setItem('requestCode', code);
  }
  getRequestCodeFromLocalStorage(): string | null {
    let code = localStorage.getItem('requestCode');
    return code
  }
  clearRequestCodeFromLocalStorage(): void {
    localStorage.removeItem('requestCode');
  }
  setFacilityIdInLocalStorage(id: string): void {
    localStorage.setItem('facilityId', id);
  }
  getFacilityIdFromLocalStorage(): string | null {
    let code = localStorage.getItem('facilityId');
    return code
  }
  clearFacilityIdFromLocalStorage(): void {
    localStorage.removeItem('facilityId');
  }
  GetRequestNotesByRequestId(requestId: string): Observable<RequestNotes[] | null> {
    return this._httpClient.get<CoreResponseDTO<RequestNotes[]>>(`${Configuration.APIs.QualificationRequestProcessingLog.GetByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<RequestNotes[]>) => {
        if (res.data && res.data.length > 0) {
          return res.data
        } else {
          return null
        }
      })
    )
  }
  GetRequestLogByRequestId(requestId: string): Observable<CoreResponseDTO<RequestLogDto[]>> {
    return this._httpClient.get<CoreResponseDTO<RequestLogDto[]>>(`${Configuration.APIs.QualificationRequestLog.GetByRequestId}/${requestId}`).pipe(
      map((res) => {
        return res;
      })
    )
  }

  compile(requestId: string, notes: string): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.QualificationServiceRequest.Compile}`, { requestId, notes }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }

  GetSysqualificationType(): Observable<QualificationRequestType[] | null> {
    return this._httpClient.get<CoreResponseDTO<QualificationRequestType[]>>(`${Configuration.APIs.SysQualificationTypeInfo.GetForWafi}`).pipe(
      map((res: CoreResponseDTO<QualificationRequestType[]>) => {
        if (res.isDone) {

          return res.data as QualificationRequestType[];
        } else {
          return null
        }
      })
    );
  }
}
