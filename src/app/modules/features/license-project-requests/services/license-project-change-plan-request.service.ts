import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Configuration } from "../../../../core/configurations/shared.config";
import { CoreResponseDTO } from "../../../../core/models/core.model";
import { Observable, map } from "rxjs";
import { ChangeRequestLicenseProjectDetailsDto } from "../models/change-request-license-project-details-dto";
import { LicenseProjectChangePlanSaveDto } from "../models/license-project-change-plan-save-dto";

@Injectable()
export class LicenseProjectChangePlanRequestService {

  constructor(private _httpClient: HttpClient) { }

  getLicenseProjectDetails(licenseProjectId: string | null): Observable<any> {
    return this._httpClient.get<CoreResponseDTO<ChangeRequestLicenseProjectDetailsDto>>
      (`${Configuration.APIs.LicenseProjectChangePlanRequest.GetLicenseProjectDetails}/${licenseProjectId}`)
      .pipe(
        map((res: CoreResponseDTO<ChangeRequestLicenseProjectDetailsDto>) => res.data as any)
      );
  }

  getDraftById(requestId: string): Observable<any> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectChangePlanRequest.GetDraftById}/${requestId}`
    ).pipe(
      map((res: CoreResponseDTO<any>) => res.data as any)
    );
  }

 

  update(payload: LicenseProjectChangePlanSaveDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.put<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectChangePlanRequest.Update,
      payload
    );
  }
}
