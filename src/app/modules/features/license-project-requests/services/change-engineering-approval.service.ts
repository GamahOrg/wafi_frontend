import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

export interface ChangeEngineeringStageDto {
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

export enum ChangeEngineeringRequestStepEnum {
  CreateRequest = 1,
  EngineeringApproval = 2,
  UnderStudy = 3,
  Payment = 4,
}

@Injectable()
export class ChangeEngineeringApprovalService {
  openProcessingNotesTrigger$ = new Subject<void>();

  constructor(private _httpClient: HttpClient) {}

  triggerOpenProcessingNotes(): void {
    this.openProcessingNotesTrigger$.next();
  }

  getChangeEngineeringStages(licenseProjectRequestId: string): Observable<ChangeEngineeringStageDto[]> {
    return this._httpClient.get<CoreResponseDTO<ChangeEngineeringStageDto[]>>(
      `${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.GetChangeEngineeringRequestStages}/${licenseProjectRequestId}`
    ).pipe(
      map(res => res.isDone && res.data ? res.data : [])
    );
  }

  getChangeEngineeringRequestLogs(licenseProjectRequestId: string): Observable<LicenseProjectRequestLogDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestLogDto[]>>(
      `${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.GetChangeEngineeringRequestLogs}/${licenseProjectRequestId}`
    ).pipe(
      map(res => res.isDone && res.data ? res.data : [])
    );
  }

  getChangeEngineeringRequestNotes(licenseProjectRequestId: string): Observable<LicenseProjectRequestNoteDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestNoteDto[]>>(
      `${Configuration.APIs.ChangeLicenseProjectEngineeringRequest.GetChangeEngineeringRequestNotes}/${licenseProjectRequestId}`
    ).pipe(
      map(res => res.isDone && res.data ? res.data : [])
    );
  }
}
