import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, Subject } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectRequestStatusEnum } from '../enums/license-project-request-status.enum';

export interface InvoiceData {
  id: string;
  invoiceRequestId: string | null;
  invoiceStatus: number | null;
  price: number;
  serviceID: number;
  quantity: number;
  typeOfInvoice: number;
  type: number;
  invDueDate: string;
}

export enum FacilityTypeCategoryEnum {
  Developer = 1,
  Accountant = 2,
  Engineering = 3,
  OwnerDeed = 4,
}

export enum ChangePlanRequestStepEnum {
  CreateRequest = 1,
  DeedOwnersApproval = 2,
  ConsultantAndAccountantCompletion = 3,
  UnderStudy = 4,
  BuyersApproval = 5,
}

export const ChangePlanRequestStepNames: Record<ChangePlanRequestStepEnum, string> = {
  [ChangePlanRequestStepEnum.CreateRequest]: 'إنشاء طلب تغيير خطة المشروع',
  [ChangePlanRequestStepEnum.DeedOwnersApproval]: 'إرسال الطلب لملاك الصكوك',
  [ChangePlanRequestStepEnum.ConsultantAndAccountantCompletion]: 'إرسال الطلب للاستشاري والمحاسب',
  [ChangePlanRequestStepEnum.UnderStudy]: 'دراسة الطلب من قبل الهيئة',
  [ChangePlanRequestStepEnum.BuyersApproval]: 'موافقة المشترين',
};

export interface ChangePlanApprovalListItemDto {
  id: string;
  licenseProjectRequestId: string;
  requestCode: string | null;
  projectName: string | null;
  createdOn: string | null;
  statusName: string | null;
  statusId: number | null;
  completionStatusName: string | null;
  remainingDays: number | null;
  showProcessNotesButton: boolean;
  ownerApprovalStatus: number | null;
  ownerApprovalStatusName: string | null;
  licenseProjectRequestTypeName:string;
}
export interface GetPartiesApprovalsListDto {
  id: string;
  requestCode?: string;
  requestTypeId: number;
  requestTypeName: string;
  projectName?: string;
  externalStatusId?: LicenseProjectRequestStatusEnum;
  externalStatusName?: string;
  createdOn?: string;
  completionStatusName: string;
  completionStatusId?: number | null;
  remainingDays?: number | null;
}
export interface ChangePlanApprovalListFilterDto {
  searchText?: string;
  pageNumber: number;
  pageSize: number;
  facilityId?: string;
  facilityTypeCategory?: number;
  externalStatusId?: LicenseProjectRequestStatusEnum;
}

export interface ChangePlanSoldUnitPagedDto {
  id: string;
  unitCode: string | null;
  buyerName: string | null;
  contractedHandoverDate: string;
  newUnitHandoverDate: string;
}

export interface ChangePlanSoldUnitsFilterDto {
  changePlanRequestId: string;
  pageNumber: number;
  pageSize: number;
  nIDNumber?: string;

}

export interface ChangePlanDeedOwnerApprovalDto {
  id: string;
  ownerName: string | null;
  idNumber: string | null;
  nationality: string | null;
  owningArea: number | null;
  approvalStatus: number;
  approvalStatusName: string | null;
  isOwnerByDeveloper: boolean | null;
  isCustomer: boolean | null;
  agreementReferenceNumber: string | null;
  agreementFile: SysFileDto | null;
}

export interface SysFileDto {
  id: string;
  fileDescription: string | null;
  filePath: string | null;
  fileType: string | null;
}

export interface ChangePlanApprovalDetailsDto {
  id: string;
  licenseProjectRequestId: string;
  facilityTypeCategory: number | null;
  requestCode: string | null;
  licenseNumber: string | null;
  facilityName: string | null;
  facilityPhone: string | null;
  projectStartDate: string | null;
  projectName: string | null;
  licenseProjecId: string | null;
  commercialRegisterNumber: string | null;
  facilityEmail: string | null;
  previousProjectEndDate: string | null;
  previousChangePlanCount: number;
  projectEndDate: string;
  twoEndDatesDifferenceDisplay: string | null;
  totalCumulativePreviousExtensionDurationDisplay: string | null;
  previousCumulativeExtensionDuration: number | null;
  totalCumulativeAfterRequestExtensionDurationDisplay: string | null;
  previousChangeRequestCount: number;
  justificationsAndReasons: string | null;
  hasForceMajeure: boolean;
  forceMajeureDocumentFileId: string | null;
  forceMajeureDocumentFile: SysFileDto | null;
  generatedModelFileId: string | null;
  generatedModelFile: SysFileDto | null;
  statusName: string | null;
  statusId: number | null;
  remainingDays: number | null;
  isConsultantRequirementsCompleted: boolean;
  isAccountantRequirementsCompleted: boolean;
  showProcessNotesButton: boolean;
  reasonsAndJustificationsForChangingProjectPlan: string | null;
  hasApprovedTimeSchedule: boolean;
  hasApprovedQuarterlyReport: boolean;
  isBeforeFirstQuarterEnd: boolean;
  totalProjectCosts: number | null;
  constructionCostsAvailableAmount: number | null;
  administrativeAndMarketingAvailableAmount: number | null;
  custodyAvailableAmount: number | null;
  pendingExchangeDocumentsAmount: number | null;
  latestBankStatementFileId: string | null;
  latestBankStatementFile: SysFileDto | null;
  deedOwners: ChangePlanDeedOwnerApprovalDto[];
  soldUnits: ChangePlanSoldUnitPagedDto[];
}

export interface UpdateDeedOwnerApprovalStatusDto {
  licenseProjectChangePlanRequestId: string;
  approvalStatus: number;
  rejectionReason?: string;
  facilityId?: string | null;
}


export interface UpdateChangePlanSoldUnitsApprovalStatusDto {
  licenseProjectChangePlanRequestId: string;
  changePlanSoldUnitIds: string[];
  approvalStatus: ChangePlanSoldUnitApprovalStatusEnum;
  rejectionReason: string | null;
}
export interface UpdateChangePlanEngineeringDto {
  id: string;
  reasonsAndJustificationsForChangingProjectPlan: string;
  isDraft: boolean;
}

export interface UpdateChangePlanAccountantDto {
  id: string;
  totalProjectCosts: number;
  latestBankStatementFileId?: string;
  isDraft: boolean;
}

export interface ProcessDeveloperNotesDto {
  id: string;
  justificationsAndReasons: string | null;
  hasForceMajeure: boolean;
  forceMajeureDocumentFileId: string | null;
}

export interface ProcessConsultantNotesDto {
  id: string;
  reasonsAndJustificationsForChangingProjectPlan: string | null;
}

export interface ProcessAccountantNotesDto {
  id: string;
  totalProjectCosts: number | null;
  latestBankStatementFileId: string | null;
}

export interface LicenseProjectRequestLogDto {
  description: string;
  createdOn: string;
  hiddenForCustomer: boolean;
  licenseProjectRequestId: string;
}

export interface LicenseProjectRequestNoteDto {
  id: string;
  notes: string;
  createdOn: string | null;
  licenseProjectRequestId: string;
}

// Status IDs used for button visibility
export const ChangePlanStatusEnum = {
  CustomerFeedback: 5,
  PendingConsultantAndAccountantCompletionAfterNotes: 24,
} as const;

export interface ChangePlanStageDto {
  id: string;
  licenseProjectRequestId: string;
  stepName: string;
  startDate: string | null;
  endDate: string | null;
  isCurrentStep: boolean;
  isVisible: boolean;
  status: 'completed' | 'active' | 'pending' | 'rejected';
  stepOrder: number;
  statusLabel: string;
  showDeedOwnersButton: boolean;
}
export interface UnitsBuyersChangePlanApprovalListFilterDto {
  searchText: string | null;
  pageNumber: number;
  pageSize: number;
  nIDNumber: string;
}
export interface UnitsBuyersChangePlanApprovalListResponseDto {
  id: string;
  licenseProjectRequestId: string;
  requestCode: string | null;
  projectName: string | null;
  createdOn: string | null;
  requestStatusName: string | null;
  stepStatusName: string | null;
  remainingDays: number | null;
  approvalStatus: ChangePlanSoldUnitApprovalStatusEnum;
  licenseProjectRequestTypeName:string;
}
export enum ChangePlanSoldUnitApprovalStatusEnum {
  PendingApproval = 1,
  Approved = 2,
  Rejected = 3
}
export interface PagedResult<T> {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  totalCount: number;
  results: T[];
}

@Injectable()
export class ChangePlanApprovalService {
  private selectedFacilityTypeCategory = new BehaviorSubject<number | null>(null);
  private selectedChangePlanId = new BehaviorSubject<string | null>(null);
  private selectedFacilityId = new BehaviorSubject<string | null>(null);
  private selectedApprovalStatus = new BehaviorSubject<number | null>(null);

  showProcessingNotesBtn$ = new BehaviorSubject<boolean>(false);
  openProcessingNotesTrigger$ = new Subject<void>();

  setShowProcessingNotesBtn(show: boolean): void {
    this.showProcessingNotesBtn$.next(show);
  }

  triggerOpenProcessingNotes(): void {
    this.openProcessingNotesTrigger$.next();
  }

  setSelectedApproval(id: string, facilityTypeCategory: number | null, facilityId?: string | null, approvalStatus?: number | null): void {
    this.selectedChangePlanId.next(id);
    this.selectedFacilityTypeCategory.next(facilityTypeCategory);
    this.selectedFacilityId.next(facilityId ?? null);
    this.selectedApprovalStatus.next(approvalStatus ?? null);
  }

  getSelectedChangePlanId(): string | null {
    return this.selectedChangePlanId.getValue();
  }

  getFacilityTypeCategory(): number | null {
    return this.selectedFacilityTypeCategory.getValue();
  }

  getSelectedFacilityId(): string | null {
    return this.selectedFacilityId.getValue();
  }

  getSelectedApprovalStatus(): number | null {
    return this.selectedApprovalStatus.getValue();
  }

  // Keep for backward compat
  setFacilityTypeCategory(value: number | null): void {
    this.selectedFacilityTypeCategory.next(value);
  }

  constructor(private _httpClient: HttpClient) { }

  getApprovalsList(filter: ChangePlanApprovalListFilterDto): Observable<CoreResponseDTO<PagedResult<ChangePlanApprovalListItemDto>>> {
    const params: any = {
      pageNumber: filter.pageNumber.toString(),
      pageSize: filter.pageSize.toString(),
      ...(filter.searchText ? { searchText: filter.searchText } : {}),
      ...(filter.facilityId ? { facilityId: filter.facilityId } : {}),
      ...(filter.facilityTypeCategory != null ? { facilityTypeCategory: filter.facilityTypeCategory.toString() } : {}),
    };
    return this._httpClient.get<CoreResponseDTO<PagedResult<ChangePlanApprovalListItemDto>>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.GetApprovalsList,
      { params }
    );
  }

  getPartiesApprovalsList(
    filter: ChangePlanApprovalListFilterDto
  ): Observable<CoreResponseDTO<PagedResult<GetPartiesApprovalsListDto>>> {

    let params = new HttpParams()
      .set('pageNumber', filter.pageNumber)
      .set('pageSize', filter.pageSize);

    if (filter.searchText) {
      params = params.set('searchText', filter.searchText);
    }

    if (filter.facilityId) {
      params = params.set('facilityId', filter.facilityId);
    }

    if (filter.facilityTypeCategory != null) {
      params = params.set('facilityTypeCategory', filter.facilityTypeCategory);
    }

    if (filter.externalStatusId != null) {
      params = params.set('externalStatusId', filter.externalStatusId);
    }

    return this._httpClient.get<CoreResponseDTO<PagedResult<GetPartiesApprovalsListDto>>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.GetPartiesApprovalsList,
      { params }
    );
  }

  getRequestStatuses(): Observable<{ id: LicenseProjectRequestStatusEnum; name: string }[]> {
    return this._httpClient
      .get<CoreResponseDTO<{ id: LicenseProjectRequestStatusEnum; name: string }[]>>(
        Configuration.APIs.LincenseProjectRequest.GetRequestStatuses,
      )
      .pipe(map((res) => res.data ?? []));
  }

  getApprovalDetails(id: string, facilityTypeCategory?: number, facilityId?: string): Observable<ChangePlanApprovalDetailsDto | null> {
    const params: any = {};
    if (facilityTypeCategory != null) {
      params.facilityTypeCategory = facilityTypeCategory.toString();
    }
    if (facilityId) {
      params.facilityId = facilityId;
    }
    return this._httpClient.get<CoreResponseDTO<ChangePlanApprovalDetailsDto>>(
      `${Configuration.APIs.LicenseProjectChangePlanRequest.GetApprovalDetails}/${id}`,
      { params }
    ).pipe(
      map(res => res.isDone ? res.data as ChangePlanApprovalDetailsDto : null)
    );
  }

  getSoldUnitsPaged(filter: ChangePlanSoldUnitsFilterDto): Observable<CoreResponseDTO<PagedResult<ChangePlanSoldUnitPagedDto>>> {
    const params = {
      changePlanRequestId: filter.changePlanRequestId,
      pageNumber: filter.pageNumber.toString(),
      pageSize: filter.pageSize.toString(),
    };
    return this._httpClient.get<CoreResponseDTO<PagedResult<ChangePlanSoldUnitPagedDto>>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.GetSoldUnitsPaged,
      { params }
    );
  }
  getSoldUnitsPagedForBuyer(filter: ChangePlanSoldUnitsFilterDto): Observable<CoreResponseDTO<PagedResult<ChangePlanSoldUnitPagedDto>>> {
    const params = {
      changePlanRequestId: filter.changePlanRequestId,
      pageNumber: filter.pageNumber.toString(),
      pageSize: filter.pageSize.toString(),
      nIDNumber: filter.nIDNumber?.toString() ?? "",
    };
    return this._httpClient.get<CoreResponseDTO<PagedResult<ChangePlanSoldUnitPagedDto>>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.GetSoldUnitsPaged,
      { params }
    );
  }

  updateDeedOwnerApprovalStatus(dto: UpdateDeedOwnerApprovalStatusDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.UpdateDeedOwnerApprovalStatus,
      dto
    );
  }
  updateChangePlanSoldUnitsApprovalStatusAsync(dto: UpdateChangePlanSoldUnitsApprovalStatusDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.UpdateChangePlanSoldUnitsApprovalStatusAsync,
      dto
    );
  }
  updateEngineeringRequirements(dto: UpdateChangePlanEngineeringDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.UpdateEngineeringRequirements,
      dto
    );
  }

  updateAccountantRequirements(dto: UpdateChangePlanAccountantDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.UpdateAccountantRequirements,
      dto
    );
  }

  getInvoice(licenseProjectRequestId: string): Observable<InvoiceData | null> {
    return this._httpClient.get<CoreResponseDTO<InvoiceData>>(
      `${Configuration.APIs.Fawtarah.GetLicenseProjectRequestInvoice}/${licenseProjectRequestId}`,
      { headers: { 'X-Skip-Error-Toast': 'true' } }
    ).pipe(
      map(res => res.isDone && res.data ? res.data : null),
      catchError(() => of(null))
    );
  }

  getChangePlanStages(licenseProjectRequestId: string): Observable<ChangePlanStageDto[]> {
    return this._httpClient.get<CoreResponseDTO<ChangePlanStageDto[]>>(
      `${Configuration.APIs.LicenseProjectChangePlanRequest.GetChangePlanStages}/${licenseProjectRequestId}`
    ).pipe(
      map(res => res.isDone && res.data ? res.data : [])
    );
  }

  getChangePlanFullDetails(licenseProjectRequestId: string, facilityId?: string): Observable<ChangePlanApprovalDetailsDto | null> {
    const params: any = {};
    if (facilityId) params.facilityId = facilityId;
    return this._httpClient.get<CoreResponseDTO<ChangePlanApprovalDetailsDto>>(
      `${Configuration.APIs.LicenseProjectChangePlanRequest.GetChangePlanFullDetails}/${licenseProjectRequestId}`,
      { params }
    ).pipe(
      map(res => res.isDone ? res.data as ChangePlanApprovalDetailsDto : null)
    );
  }

  getChangePlanRequestLogs(licenseProjectRequestId: string): Observable<LicenseProjectRequestLogDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestLogDto[]>>(
      `${Configuration.APIs.LicenseProjectChangePlanRequest.GetChangePlanRequestLogs}/${licenseProjectRequestId}`
    ).pipe(
      map(res => res.isDone && res.data ? res.data : [])
    );
  }

  getChangePlanRequestNotes(licenseProjectRequestId: string): Observable<LicenseProjectRequestNoteDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestNoteDto[]>>(
      `${Configuration.APIs.LicenseProjectChangePlanRequest.GetChangePlanRequestNotes}/${licenseProjectRequestId}`
    ).pipe(
      map(res => res.isDone && res.data ? res.data : [])
    );
  }

  processDeveloperNotes(dto: ProcessDeveloperNotesDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.ProcessDeveloperNotes, dto
    );
  }

  processConsultantNotes(dto: ProcessConsultantNotesDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.ProcessConsultantNotes, dto
    );
  }

  processAccountantNotes(dto: ProcessAccountantNotesDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.ProcessAccountantNotes, dto
    );
  }

  getUnitsBuyersApprovalsList(filter: UnitsBuyersChangePlanApprovalListFilterDto): Observable<CoreResponseDTO<PagedResult<UnitsBuyersChangePlanApprovalListResponseDto>>> {
    const params: any = {
      pageNumber: filter.pageNumber.toString(),
      pageSize: filter.pageSize.toString(),
      ...(filter.searchText ? { searchText: filter.searchText } : {}),
      ...(filter.nIDNumber ? { nIDNumber: filter.nIDNumber } : {}),
    };
    return this._httpClient.get<CoreResponseDTO<PagedResult<UnitsBuyersChangePlanApprovalListResponseDto>>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.GetUnitsBuyersApprovalsListAsync,
      { params }
    );
  }
}
