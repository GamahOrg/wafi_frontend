import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {
  ChangeLicenseAccountantRequestDataDto,
  UpdateRequestDataPageDto,
  SaveAgreementDataPageDto,
  ChangeLicenseProjectAdditionalTermDto,
  GetAgreementDataPageResponseDto,
} from '../models/change-license-project-accountant-request-data-dto';
import { PagedResult } from './change-plan-approval.service';
import { SysFileDto } from '../models/change-license-project-accountant-request-data-dto';
import { LicenseProjectRequestStatusEnum } from '../enums/license-project-request-status.enum';

export interface ChangeAccountantRequestDetailsDto {
  licenseProjectRequestId: string;
  requestCode: string;
  requestStatus: string;
  requestStatusId: LicenseProjectRequestStatusEnum;
  licenseProjectName: string;
  licenseProjectNumber: string;
  licenseProjectCity: string;
  developerName: string;
  developerPhone: string;
  developer700Number: string;
  licenseProjectEndDate: string;
  newAccountantName: string;
  newAccountant700Number: string;
  justificationsAndReasons: string;
  quarterReportFile: SysFileDto | null;
  workDeliveryReportFile: SysFileDto | null;
  licenseProjectSubUnits: { [key: string]: number };
  totalSoldUnits: number;
  workDonePercentage: number;
  agreementFile: SysFileDto | null;
  isActionRequired: boolean;
}

export interface ChangeAccountantRequestsListItemDto {
  id: string;
  licenseProjectRequestId: string;
  requestCode: string | null;
  projectName: string | null;
  createdOn: string | null;
  statusName: string | null;
  statusId: number | null;
  completionStatusName: string | null;
  remainingDays: number | null;
}

export interface ChangeAccountantRequestsListFilterDto {
  searchText?: string;
  pageNumber: number;
  pageSize: number;
  facilityId?: string;
}

export interface RequestStepDto {
  stepName: string;
  stepStatus: string;
  stepDate: string | null;
}

export interface ApproveOrRejectChangeAccountantRequestDto {
  requestId: string;
  isApproved: boolean;
  rejectionReason?: string | null;
}

@Injectable()
export class ChangeLicenseProjectAccountantRequestService {
  selectedRequestData$: BehaviorSubject<ChangeLicenseAccountantRequestDataDto | null> =
    new BehaviorSubject<ChangeLicenseAccountantRequestDataDto | null>(null);

  constructor(private _httpClient: HttpClient) {}

  getRequestDataPage(
    licenseProjectRequestId: string
  ): Observable<ChangeLicenseAccountantRequestDataDto> {
    return this._httpClient
      .get<CoreResponseDTO<ChangeLicenseAccountantRequestDataDto>>(
        `${Configuration.APIs.ChangeAccountantLicenseRequest.GetRequestDataPage}/${licenseProjectRequestId}`
      )
      .pipe(
        map(
          (res: CoreResponseDTO<ChangeLicenseAccountantRequestDataDto>) =>
            res.data as ChangeLicenseAccountantRequestDataDto
        )
      );
  }

  updateRequestDataPage(
    dto: UpdateRequestDataPageDto,
    licenseProjectRequestId: string
  ): Observable<any> {
    return this._httpClient.put(
      `${Configuration.APIs.ChangeAccountantLicenseRequest.UpdateRequestDataPage}/${licenseProjectRequestId}`,
      dto
    );
  }

  updateAgreementDataPage(dto: SaveAgreementDataPageDto): Observable<any> {
    return this._httpClient.put(
      Configuration.APIs.ChangeAccountantLicenseRequest.UpdateAgreementDataPage,
      dto
    );
  }

  saveTermsData(terms: ChangeLicenseProjectAdditionalTermDto[]): Observable<any> {
    return this._httpClient.post(
      Configuration.APIs.ChangeLicenseProjectPartiesAdditionalTerms.SaveTermsData,
      terms
    );
  }

  getAllAdditionalTerms(
    licenseProjectRequestId: string,
    termsPartType: number
  ): Observable<CoreResponseDTO<ChangeLicenseProjectAdditionalTermDto[]>> {
    return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectAdditionalTermDto[]>>(
      `${Configuration.APIs.ChangeLicenseProjectPartiesAdditionalTerms.GetAllAdditionalAsync}/${licenseProjectRequestId}/${termsPartType}`
    );
  }

  deleteAdditionalTerm(id: string): Observable<any> {
    return this._httpClient.delete(
      `${Configuration.APIs.ChangeLicenseProjectPartiesAdditionalTerms.DeleteAdditionalTermAsync}/${id}`
    );
  }

  getRequestAgreementDataPage(
    licenseProjectRequestId: string
  ): Observable<CoreResponseDTO<GetAgreementDataPageResponseDto>> {
    return this._httpClient.get<CoreResponseDTO<GetAgreementDataPageResponseDto>>(
      `${Configuration.APIs.ChangeAccountantLicenseRequest.GetRequestAgreementDataPage}/${licenseProjectRequestId}`
    );
  }

  generateDraftAgreements(agreementsType: number, licenseProjectRequestId: string): Observable<string | null> {
    const params = new HttpParams()
      .set('agreementsType', agreementsType.toString())
      .set('licenseProjectRequestId', licenseProjectRequestId);

    return this._httpClient.get<CoreResponseDTO<string>>(
      Configuration.APIs.ChangeLicenseProjectPartiesAdditionalTerms.GenerateDraftAgreements,
      { params }
    ).pipe(
      map((res) => (res.isDone && res.data ? res.data as string : null))
    );
  }

  getRequestsListForNewAccountant(
    filter: ChangeAccountantRequestsListFilterDto
  ): Observable<CoreResponseDTO<PagedResult<ChangeAccountantRequestsListItemDto>>> {

    return this._httpClient.post<CoreResponseDTO<PagedResult<ChangeAccountantRequestsListItemDto>>>(
      Configuration.APIs.ChangeAccountantLicenseRequest.GetRequestsListForNewAccountant,
      filter
    );
  }

  getRequestDetails(
    licenseProjectRequestId: string
  ): Observable<CoreResponseDTO<ChangeAccountantRequestDetailsDto>> {
    const params = new HttpParams().set('licenseProjectRequestId', licenseProjectRequestId);
    return this._httpClient.get<CoreResponseDTO<ChangeAccountantRequestDetailsDto>>(
      Configuration.APIs.ChangeAccountantLicenseRequest.GetRequestDetails,
      { params }
    );
  }

  approveRejectChangeAccountantRequest(
    dto: ApproveOrRejectChangeAccountantRequestDto
  ): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>(
      Configuration.APIs.ChangeAccountantLicenseRequest.ApproveRejectChangeAccountantRequest,
      dto
    );
  }

  getRequestSteps(licenseProjectRequestId: string): Observable<RequestStepDto[]> {
    const params = new HttpParams().set('licenseProjectRequestId', licenseProjectRequestId);
    return this._httpClient
      .get<CoreResponseDTO<RequestStepDto[]>>(
        Configuration.APIs.ChangeAccountantLicenseRequest.GetRequestSteps,
        { params }
      )
      .pipe(map(res => res.data ?? []));
  }
}
