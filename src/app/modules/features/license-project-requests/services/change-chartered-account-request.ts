import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangeCharteredAccountantRequestListDto } from '../models/change-chartered-accountant-request-dto';
import { ChangeCharteredAccountantRequestDetailsDto } from '../models/change-chartered-accountant-request-details-dto';
import { CreateOrUpdateChangeCharteredAccountantRequestDto } from '../models/create-update-change-chartered-accountant-request-dto';
import { FacilityShortDto } from '../../license/models/facility-short-dto';

@Injectable()
export class ChangeCharteredAccountantRequestService {

  selectedRequest$: BehaviorSubject<ChangeCharteredAccountantRequestDetailsDto | null> = new BehaviorSubject<ChangeCharteredAccountantRequestDetailsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  constructor(private _httpClient: HttpClient) { }
  getSelectedCharteredAccountantIdFromLocalStorage(): string | null {
    let projectDetails = localStorage.getItem('charteredAccountantIdRequestId');
    return projectDetails;
  }
  clearSelectedcharteredAccountantIdRequestIdFromLocalStorage(): void {
    localStorage.removeItem('charteredAccountantIdRequestId');
  }
  setSelectedSelectedcharteredAccountantIdRequestInLocalStorage(id: string): void {
    localStorage.setItem('charteredAccountantIdRequestId', id);
  }
  getChareteredAccountantRequestList(
    commercialRegister: string,
    typeCode: string,
    licenseProjectId: String
  ): Observable<ChangeCharteredAccountantRequestListDto> {
    return this._httpClient
      .get<CoreResponseDTO<ChangeCharteredAccountantRequestListDto>>(
        `${Configuration.APIs.CharteredAccountantRequest
          .GetChareteredAccountantRequestList +'/'+ commercialRegister + '/' + typeCode + '/' + licenseProjectId
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<ChangeCharteredAccountantRequestListDto>) => {
          return res.data as ChangeCharteredAccountantRequestListDto;
        })
      );
  }
  getChareteredAccountantRequestDetails(
    id: string
  ): Observable<ChangeCharteredAccountantRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<ChangeCharteredAccountantRequestDetailsDto>>(
        `${Configuration.APIs.CharteredAccountantRequest
          .GetChareteredAccountantRequestDetails +'/'+ id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<ChangeCharteredAccountantRequestDetailsDto>) => {
          return res.data as ChangeCharteredAccountantRequestDetailsDto;
        })
      );
  }
  validateCommercialRegister(commercialRegister: string, typeCode: string, licenseProjectId: string | null): Observable<CoreResponseDTO<FacilityShortDto>> {
    let url = `${Configuration.APIs.facility.validateCommercialRegister}`;
    return this._httpClient.get(`${url}/${commercialRegister}/${typeCode}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res;
      }))
  }
  saveChangeCharteredAccountantRequest(
    payload: CreateOrUpdateChangeCharteredAccountantRequestDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.CharteredAccountantRequest.SaveChangeCharteredAccountantRequest}`,
      payload
    );
  }
}