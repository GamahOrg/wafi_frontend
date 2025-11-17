import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import {
  CreateCancellationRequestDto,
  ApproveCancellationRequestDto,
  RejectCancellationRequestDto,
  LicenseProjectBuyerCancellationRequestDto,
  LicenseProjectBuyerCancellationRequestFilterDto
} from '../models/real-state-developer-dto';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable()
export class LicenseProjectBuyerCancellationRequestService {

  constructor(private http: HttpClient) { }

  /**
   * Create a new buyer contract cancellation request
   * @param request - CreateCancellationRequestDto containing licenseProjectBuyerId and cancelRequestReason
   * @returns Observable<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>>
   */
  createCancellationRequest(
    request: CreateCancellationRequestDto
  ): Observable<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>> {
    return this.http.post<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>>(
      Configuration.APIs.LicenseProjectBuyerCancellationRequest.Create,
      request
    );
  }

  /**
   * Approve a cancellation request
   * @param request - ApproveCancellationRequestDto containing cancellationRequestId
   * @returns Observable<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>>
   */
  approveCancellationRequest(
    request: ApproveCancellationRequestDto
  ): Observable<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>> {
    return this.http.post<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>>(
      Configuration.APIs.LicenseProjectBuyerCancellationRequest.Approve,
      request
    );
  }

  /**
   * Reject a cancellation request
   * @param request - RejectCancellationRequestDto containing cancellationRequestId and rejectReason
   * @returns Observable<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>>
   */
  rejectCancellationRequest(
    request: RejectCancellationRequestDto
  ): Observable<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>> {
    return this.http.post<CoreResponseDTO<LicenseProjectBuyerCancellationRequestDto>>(
      Configuration.APIs.LicenseProjectBuyerCancellationRequest.Reject,
      request
    );
  }

  /**
   * Get paged list of cancellation requests
   * @param filter - LicenseProjectBuyerCancellationRequestFilterDto containing search, status, and pagination parameters
   * @returns Observable<CoreResponseDTO<Pagination<LicenseProjectBuyerCancellationRequestDto[]>>>
   */
  getPagedList(
    filter: LicenseProjectBuyerCancellationRequestFilterDto
  ): Observable<CoreResponseDTO<Pagination<LicenseProjectBuyerCancellationRequestDto[]>>> {
    return this.http.post<CoreResponseDTO<Pagination<LicenseProjectBuyerCancellationRequestDto[]>>>(
      Configuration.APIs.LicenseProjectBuyerCancellationRequest.GetPagedList,
      filter
    );
  }
}
