import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  RatingDismissDto,
  UserRatingCreateDto,
  UserRatingUpdateDto,
  RatingStatusDto,
  LoginRatingsDto
} from '../../models/rating-request.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { BehaviorSubject, Observable ,map} from 'rxjs';

@Injectable()
export class RatingService {
  dismissRatingAction: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  submitRatingAction: BehaviorSubject<UserRatingUpdateDto | null> =
    new BehaviorSubject<UserRatingUpdateDto | null>(null);
    currentRatingData = new BehaviorSubject<UserRatingUpdateDto | null>(null);
  constructor(private _httpClient: HttpClient) {}
  updateSubmitRatingAction(value: UserRatingUpdateDto | null) {
    this.submitRatingAction.next(value);
  }
  updateDismissRatingAction(value: any) {
    this.dismissRatingAction.next(value);
  }
  dismissRating(request: RatingDismissDto) {
    return this._httpClient.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.Rating.Dismiss}`,
      request,
    );
  }
  createRating(request: UserRatingCreateDto) {
    return this._httpClient.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.Rating.Create}`,
      request,
    );
  }
  getInstantLicenseRatingStatus():Observable<RatingStatusDto[]|null|undefined> {
    return this._httpClient.get<CoreResponseDTO<RatingStatusDto[]>>(
      `${Configuration.APIs.Rating.GetInstantLicenseRatingStatus}`,
    ).pipe(
      map((res: CoreResponseDTO<RatingStatusDto[]>) => {
        return res?.isDone ? res.data : null;
      })
    );
  }
  getDeveloperContractDocumentationRatingStatusWithoutFacilityId():Observable<RatingStatusDto|null|undefined> {
    return this._httpClient.get<CoreResponseDTO<RatingStatusDto>>(
      Configuration.APIs.Rating.GetDeveloperContractDocumentationRatingStatus,
    ).pipe(
      map((res: CoreResponseDTO<RatingStatusDto>) => {
        return res.isDone ? res.data : null;
      })
    );
  }
  getBuyerContractDocumentationRatingStatus(isOldContract: boolean):Observable<RatingStatusDto|null|undefined> {
    return this._httpClient.get<CoreResponseDTO<RatingStatusDto>>(
      `${Configuration.APIs.Rating.GetBuyerContractDocumentationRatingStatus}?isOldContract=${isOldContract}`,
    ).pipe(
      map((res: CoreResponseDTO<RatingStatusDto>) => {
        return res.isDone ? res.data : null;
      })
    );
  }
  getAllLoginRatings(): Observable<LoginRatingsDto | null> {
    return this._httpClient.get<CoreResponseDTO<LoginRatingsDto>>(
      Configuration.APIs.Rating.GetAllLoginRatings,
    ).pipe(
      map((res: CoreResponseDTO<LoginRatingsDto>) => res?.isDone ? res.data ?? null : null)
    );
  }
}
