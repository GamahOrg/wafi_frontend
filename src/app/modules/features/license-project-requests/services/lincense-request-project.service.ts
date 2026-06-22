import { Injectable } from '@angular/core';
import {
  CreateDraftLicenseProjectRequestDto,
  CreateInitialLicenseProjectChangePlanRequestDto,
  LicenseProjectRequestTypeDetailsDto,
  LicenseProjectRequestValidationResultDto,
  LicenseRequestTypes,
  LincenseProjectRequest,
} from '../../license/models/lincense-request-project-dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateLicenseRequestProjectDto } from '../../license/models/create-license-project-request-dto';
import { BanksDDL, licenseProjectByFacilityIdDto, type LicenseProjectDDL } from '../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestDetailsDto } from '../../license/models/license-request-project-details-dto';
import { UpdateClearanceEngineeringComponentDto } from '../../license/models/update-clearance-engineering-component-dto';
import { UpdateClearanceAccountantComponentDto } from '../../license/models/clearance-account-dto';
import { licenseActivationRequestDetailsDto } from '../../license/models/license-activation-request-details-dto';
import { UpdateRealEstateDeveloperRequestDto } from '../../license/models/update-real-estate-developer-request-dto';
import { UserRequestTypeEnum } from '../../license/enums/user-request-type';
import { LicenseProjectRequestTypeEnum } from '../enums/license-project-request-type.enum';

@Injectable()
export class LincenseRequestProjectService {
  projectDetails$: BehaviorSubject<LicenseProjectRequestDetailsDto | null> =
    new BehaviorSubject<LicenseProjectRequestDetailsDto | null>(null);

  projectActiveRequestDetails$: BehaviorSubject<licenseActivationRequestDetailsDto | null> =
    new BehaviorSubject<licenseActivationRequestDetailsDto | null>(null);

  constructor(private _httpClient: HttpClient) {}
  getLicensesProjectRequestList(
    pageIndex: number,
    pageSize: number,
    facilityId: string,
    searchText?: string
  ): Observable<Pagination<LincenseProjectRequest[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    queryParams = queryParams.append('facilityId', facilityId);
    if (searchText) {
      queryParams = queryParams.append('searchText', searchText);
    }
    return this._httpClient
      .get<CoreResponseDTO<Pagination<LincenseProjectRequest[]>>>(
        `${Configuration.APIs.LincenseProjectRequest.GetLincenseRequestProject}`,
        { params: queryParams }
      )
      .pipe(
        map((res: CoreResponseDTO<Pagination<LincenseProjectRequest[]>>) => {
          return res.data as Pagination<LincenseProjectRequest[]>;
        })
      );
  }
  getLicenseProjectRequestPrice(licenseProjectId: string | null, licenseProjectType: number): Observable<any> {
    let params = new HttpParams();

    if (licenseProjectId) {
      params = params.set('licenseProjectId', licenseProjectId);
    }
    params = params.set('licenseProjectType', licenseProjectType);

    return this._httpClient
      .get<CoreResponseDTO<any>>(
        `${Configuration.APIs.LincenseProjectRequest.GetLicenseProjectRequestPrice}`,{ params }
      )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.data as any;
        })
      );
  }
  getLicenseRequestTypes(): Observable<LicenseRequestTypes[]> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseRequestTypes[]>>(
        `${Configuration.APIs.LincenseProjectRequest.GetLicenseRequestType}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseRequestTypes[]>) => {
          return res.data as LicenseRequestTypes[];
        })
      );
  }
  getLicenseProjectByFacilityId(
    facilityId: String
  ): Observable<licenseProjectByFacilityIdDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<licenseProjectByFacilityIdDto[]>>(
        `${
          Configuration.APIs.LicenseProject.GetLicenseProjectByFacilityId +
          facilityId
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<licenseProjectByFacilityIdDto[]>) => {
          return res.data as licenseProjectByFacilityIdDto[];
        })
      );
  }
  getLicenseProjectByType(facilityId: String,licenseProjectRequestTypeEnum:LicenseProjectRequestTypeEnum): Observable<LicenseProjectDDL[]> {
    
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectDDL[]>>(
        `${
          Configuration.APIs.LicenseProject.GetLicenseProjectByType +'/'+
          facilityId
        }?licenseProjectRequestTypeEnum=${licenseProjectRequestTypeEnum}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectDDL[]>) => {
          return res.data as LicenseProjectDDL[];
        })
      );
  }
 
  getRequestType(
    licenseRequestId: string,
    facilityId: String
  ): Observable<UserRequestTypeEnum> {
    return this._httpClient
      .get<CoreResponseDTO<UserRequestTypeEnum>>(
        `${Configuration.APIs.LincenseProjectRequest.GetUserRequestType}?requestId=${licenseRequestId}&facilityId=${facilityId}`
      )
      .pipe(
        map((res: CoreResponseDTO<UserRequestTypeEnum>) => {
          return res.data as UserRequestTypeEnum;
        })
      );
  }

  getLicenseProjectDetailsById(
    licenseProjectId: String
  ): Observable<LicenseProjectRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectRequestDetailsDto>>(
        `${
          Configuration.APIs.LicenseProjectCancellationRequest
            .GetLicenseProjectDetails + licenseProjectId
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestDetailsDto>) => {
          return res.data as LicenseProjectRequestDetailsDto;
        })
      );
  }
  createLicenseRequest(
    payload: CreateLicenseRequestProjectDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.LincenseProjectRequest.AddLicenseProjectRequest}`,
      payload
    );
  }
  updateClearanceEngineeringConsultant(
    payload: UpdateClearanceEngineeringComponentDto,
    id: string
  ) {
    return this._httpClient.put(
      `${
        Configuration.APIs.LicenseProjectCancellationRequest
          .EditClearanceEngineering + id
      }`,
      payload
    );
  }
  updateClearanceAccountant(
    payload: UpdateClearanceAccountantComponentDto,
    id: string
  ) {
    return this._httpClient.put(
      `${
        Configuration.APIs.LicenseProjectCancellationRequest
          .EditClearanceAccount + id
      }`,
      payload
    );
  }
  updateRealestateDeveloper(
    payload: UpdateRealEstateDeveloperRequestDto,
    id: string
  ) {
    return this._httpClient.put(
      `${
        Configuration.APIs.LicenseProjectCancellationRequest
          .EditeRealStateDeveloper + id
      }`,
      payload
    );
  }

  validateRequest(
    projectId: string,
    requestType: number
  ): Observable<LicenseProjectRequestValidationResultDto> {
    return this._httpClient
      .post<CoreResponseDTO<LicenseProjectRequestValidationResultDto>>(
        Configuration.APIs.LincenseProjectRequest.ValidateRequest,
        { projectId, licenseProjectRequestType: requestType }
      )
      .pipe(
        map((res) => res.data as LicenseProjectRequestValidationResultDto)
      );
  }

  getRequestTypeDetails(
    requestTypeId: number
  ): Observable<LicenseProjectRequestTypeDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectRequestTypeDetailsDto>>(
        `${Configuration.APIs.LincenseProjectRequest.GetRequestTypeDetails}?requestTypeId=${requestTypeId}`
      )
      .pipe(
        map((res) => res.data as LicenseProjectRequestTypeDetailsDto)
      );
  }
  GetLicenseProjectType(
    licenseProjectId: string
  ): Observable<string> {
    return this._httpClient
      .get<CoreResponseDTO<string>>(
        `${Configuration.APIs.LincenseProjectRequest.GetLicenseProjectType}?licenseProjectId=${licenseProjectId}`
      )
      .pipe(
        map((res) => res.data as string)
      );
  }

  createDraftRequest(
    payload: CreateDraftLicenseProjectRequestDto
  ): Observable<string> {
    return this._httpClient
      .post<CoreResponseDTO<string>>(
        Configuration.APIs.LincenseProjectRequest.CreateDraftRequest,
        payload
      )
      .pipe(
        map((res) => res.data as string)
      );
  }
  createDraftRequestInitial(
    payload: CreateInitialLicenseProjectChangePlanRequestDto
  ): Observable<string> {
    return this._httpClient
      .post<CoreResponseDTO<string>>(
        Configuration.APIs.LicenseProjectChangePlanRequest.CreateInitialLicenseProjectChangePlanRequest,
        payload
      )
      .pipe(
        map((res) => res.data as string)
      );
  }

  getSelectedActiveProjectRequestIdFromLocalStorage(): string | null {
    let projectDetails = localStorage.getItem('licenseProjectRequestId');
    return projectDetails;
  }
  clearActiveProjectRequestFromLocalStorage(): void {
    localStorage.removeItem('licenseProjectRequestId');
  }
  setSelectedActiveProjectRequestIdInLocalStorage(id: string): void {
    localStorage.setItem('licenseProjectRequestId', id);
  }

  getSelectedRequestIdFromLocalStorage(): string | null {
    let projectDetails = localStorage.getItem('projectDetails');
    return projectDetails;
  }
  clearRequestFromLocalStorage(): void {
    localStorage.removeItem('projectDetails');
  }
  setSelectedRequestIdInLocalStorage(id: string): void {
    localStorage.setItem('projectDetails', id);
  }
  setUpDegreeSelectedRequestIdInLocalStorage(id: string): void {
    localStorage.setItem('seclectRequest', id);
  }

  
}
