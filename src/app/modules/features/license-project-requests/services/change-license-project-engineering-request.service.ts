import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ChangeLicenseProjectEngineeringRequestDto } from '../models/change-license-project-engineering-request-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ChangeLicenseProjectEngineeringRequestCreateUpdateDto } from '../models/change-license-project-engineering-request-create-update-dto';
import { ChangeEngineeringRequestDraftDto } from '../models/change-engineering-request-draft-dto';
import { SaveChangeEngineeringRequestDto } from '../models/save-change-engineering-request-dto';
import { FacilityShortDto } from '../models/request-header-details';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Injectable()
export class ChangeLicenseProjectEngineeringRequestService {

  constructor(private _httpClient: HttpClient) { }

  // Request ID from route param - shared across tab components
  private changeEngineerRequestId = new BehaviorSubject<string | null>(null);
  changeEngineerRequestId$ = this.changeEngineerRequestId.asObservable();
  setChangeEngineerRequestId(id: string) { this.changeEngineerRequestId.next(id); }
  getChangeEngineerRequestId(): string | null { return this.changeEngineerRequestId.value; }

  // Read-only mode flag - shared with dynamically rendered tab components
  private _readOnly = new BehaviorSubject<boolean>(false);
  setReadOnly(value: boolean): void { this._readOnly.next(value); }
  isReadOnly(): boolean { return this._readOnly.value; }
  resetReadOnly(): void { this._readOnly.next(false); }

  private licenseProjectRequestChangeEngineer = new BehaviorSubject<ChangeLicenseProjectEngineeringRequestDto | null>({} as ChangeLicenseProjectEngineeringRequestDto | null);

  private licenseProjectRequestChangeEngineer$ = this.licenseProjectRequestChangeEngineer.asObservable();
  getLicenseProjectRequestChangeEngineer(): Observable<ChangeLicenseProjectEngineeringRequestDto | null> {
    return this.licenseProjectRequestChangeEngineer$;
  }
  setLicenseProjectRequestChangeEngineer(LatestValue: ChangeLicenseProjectEngineeringRequestDto) {
    return this.licenseProjectRequestChangeEngineer.next(LatestValue);
  }
  resetLicenseProjectRequestChangeEngineer(): void {
    this.licenseProjectRequestChangeEngineer.next(null);
  }


  getLicenseProjectDetailsById(licenseProjectRequestId: string): Observable<ChangeLicenseProjectEngineeringRequestDto | null> {
    return this._httpClient.get<CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>>(`${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.GetChangeLicenseProjectEngineeringRequestDetail}/${licenseProjectRequestId}`).pipe(
      map((res: CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>) => {
        return res.isDone ? res.data as ChangeLicenseProjectEngineeringRequestDto : null;

      })
    );
  }
  save(changePlanForRealEstateDeveloper: ChangeLicenseProjectEngineeringRequestCreateUpdateDto): Observable<CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>> {
    return this._httpClient.post<CoreResponseDTO<ChangeLicenseProjectEngineeringRequestDto>>(
      Configuration.APIs.ChangeLicenseProjectEngineeringRequest.Save,
      changePlanForRealEstateDeveloper
    );
  }
  validateCommercialRegister(commercialRegister: string, typeCode: string, licenseProjectId: string | null): Observable<any | null> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.facility.validateCommercialRegister}/${commercialRegister}/${typeCode}/${licenseProjectId}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data as any : null;

      }))
  }

  getDraftById(requestId: string): Observable<ChangeEngineeringRequestDraftDto | null> {
    return this._httpClient.get<CoreResponseDTO<ChangeEngineeringRequestDraftDto>>(
      `${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.GetDraftById}/${requestId}`
    ).pipe(
      map((res: CoreResponseDTO<ChangeEngineeringRequestDraftDto>) => {
        return res.isDone ? res.data as ChangeEngineeringRequestDraftDto : null;
      })
    );
  }

  updateDraft(payload: SaveChangeEngineeringRequestDto): Observable<CoreResponseDTO<ChangeEngineeringRequestDraftDto>> {
    return this._httpClient.put<CoreResponseDTO<ChangeEngineeringRequestDraftDto>>(
      Configuration.APIs.ChangeLicenseProjectEngineeringRequest.UpdateDraft,
      payload
    );
  }

}
