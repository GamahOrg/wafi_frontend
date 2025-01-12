import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LicenseProjectRequestDetailsDto } from '../../license/models/license-request-project-details-dto';
import { HttpClient } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CreateLicenseRequestProjectDto } from '../../license/models/create-license-project-request-dto';
import { UpdateClearanceEngineeringComponentDto } from '../../license/models/update-clearance-engineering-component-dto';
import { UpdateClearanceAccountantComponentDto } from '../../license/models/clearance-account-dto';
import { UpdateRealEstateDeveloperRequestDto } from '../../license/models/update-real-estate-developer-request-dto';
import { UserRequestTypeEnum } from '../../license/enums/user-request-type';
import { CreateRealEstateDeveloperRequestDto } from '../models/create-real-estate-developer-dto';

@Injectable()
export class CancelLicenseRequestService {

  selectedRequest$: BehaviorSubject<LicenseProjectRequestDetailsDto | null> = new BehaviorSubject<LicenseProjectRequestDetailsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  constructor(private _httpClient: HttpClient) { }

  getLicenseProjectDetailsById(
    licenseProjectId: String
  ): Observable<LicenseProjectRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectRequestDetailsDto>>(
        `${Configuration.APIs.LicenseProjectCancellationRequest
          .GetLicenseProjectDetails + licenseProjectId
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestDetailsDto>) => {
          return res.data as LicenseProjectRequestDetailsDto;
        })
      );
  }


  createCancelLicenseRequest(
    model: CreateLicenseRequestProjectDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.LincenseProjectRequest.AddLicenseProjectRequest}`,
      model
    );
  }
  createRealEstateDeveloper(
    model: CreateRealEstateDeveloperRequestDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.LicenseProjectCancellationRequest.AddRealEstateDeveloper}`,
      model
    );
  }

  updateEngineeringConsultantRequestData(
    model: UpdateClearanceEngineeringComponentDto,
    id: string
  ) {
    return this._httpClient.put(
      `${Configuration.APIs.LicenseProjectCancellationRequest
        .EditClearanceEngineering + id
      }`,
      model
    );
  }
  updateAccountantRequestData(
    model: UpdateClearanceAccountantComponentDto,
    id: string
  ) {
    return this._httpClient.put(
      `${Configuration.APIs.LicenseProjectCancellationRequest
        .EditClearanceAccount + id
      }`,
      model
    );
  }
  updateRealestateDeveloperRequestData(
    model: UpdateRealEstateDeveloperRequestDto,
    id: string
  ) {
    return this._httpClient.put(
      `${Configuration.APIs.LicenseProjectCancellationRequest
        .EditeRealStateDeveloper + id
      }`,
      model
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
  updateSelectedRequest(request: LicenseProjectRequestDetailsDto): void {
    this.selectedRequest$.next(request);
  }
}
