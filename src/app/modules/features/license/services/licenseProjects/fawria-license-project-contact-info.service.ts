import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Configuration } from "../../../../../core/configurations/shared.config";
import { CoreResponseDTO } from "../../../../../core/models/core.model";
import { ProjectRealStateDeveloperDto } from "../../dataModels/project-real-state-developer.dto";
import { AddFawriaLicenseprojectContactInfoRequestDto } from "../../models/FawriaLicenseProject/add-fawria-license-project-contact-info-request-dto";
import { GetFawriaLicenseprojectContactInfoDto } from "../../models/FawriaLicenseProject/get-fawria-license-contacts-info-dto";

@Injectable()
export class FawriaLicenseProjectContactInfoService {

  constructor(private _httpClient: HttpClient) { }


  SaveFawriaLicenseProjectContactInfo(
    obj: AddFawriaLicenseprojectContactInfoRequestDto
  ): Observable<CoreResponseDTO<any>> {

    return this._httpClient.post<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProject.SaveFawriaLicenseprojectContactInfo,
      obj
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;
      })
    );
  }

  GetFawriaContactsInfoByProjectId(licenseProjectId: string): Observable<GetFawriaLicenseprojectContactInfoDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProject.GetFawriaContactsInfoById}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as GetFawriaLicenseprojectContactInfoDto;
      })
    )
  }


}


