import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Configuration } from "../../../../core/configurations/shared.config";
import { Observable, map } from "rxjs";
import { CoreResponseDTO } from "../../../../core/models/core.model";
import { ProjectLandDeedDto } from "../dataModels/project-land-deed.dto";
import { DeedHeaderProjectDataDto, LicenseProjectInstantDeedResponseDto, UpdateTotalAreaForProjectDto } from "../dataModels/license-project-instant-deed-response-dto";

@Injectable()
export class ProjectInstantLicenseDeedService {

  constructor(private _httpClient: HttpClient) { }
  closeDialog: EventEmitter<any> = new EventEmitter<any>();


  GetDeedHeaderProjectData(id: string) {
    return this._httpClient.get<CoreResponseDTO<DeedHeaderProjectDataDto>>
      (`${Configuration.APIs.LicenseProject.GetDeedHeaderProjectData}/${id}`).pipe(
        map((res: CoreResponseDTO<DeedHeaderProjectDataDto>) => {
          return res.data;
        })
      )
  }

  GetInstantDeedsByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectInstantDeedResponseDto[]>>
      (`${Configuration.APIs.LicenseProjectDeed.GetInstantDeedsByLicenseProjectId}/${id}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectInstantDeedResponseDto[]>) => {
          return res.data;
        })
      )
  }

  GetNatureTypeIdByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<boolean>>
      (`${Configuration.APIs.LicenseProjectDeed.GetNatureTypeIdByLicenseProjectId}/${id}`).pipe(
        map((res: CoreResponseDTO<boolean>) => {
          return res;
        })
      )
  }

  DeleteInstantDeed(id: string): Observable<any> {
    return this._httpClient.delete<any>
      (`${Configuration.APIs.LicenseProjectDeed.DeleteInstantDeeds}/${id}`)
  }


  UpdateTotalAreaForProject(obj: UpdateTotalAreaForProjectDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectDeed.UpdateTotalAreaForProject, obj)
  }



}
