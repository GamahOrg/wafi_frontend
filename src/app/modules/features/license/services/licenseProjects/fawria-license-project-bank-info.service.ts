import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Configuration } from "../../../../../core/configurations/shared.config";
import { CoreResponseDTO } from "../../../../../core/models/core.model";

import { FawriaLicenseBankInfoDto } from "../../models/FawriaLicenseProject/fawria-license-bank-info-dto";
import { FawriaLicenseBankInfoResponseDto } from "../../models/FawriaLicenseProject/fawria-license-bank-info-response-dto";


@Injectable()
export class FawriaLicenseProjectBankInfoService {

  constructor(private _httpClient: HttpClient) { }


  

  SaveFawriaLicenseprojectBankInfo(
    obj: FawriaLicenseBankInfoDto
  ): Observable<CoreResponseDTO<any>> {

    return this._httpClient.post<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProject.SaveFawriaLicenseprojectBankInfoAsync,
      obj
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;
      })
    );
  }

  GetFawriaLicenseprojectBankInfoById(licenseProjectId: string): Observable<FawriaLicenseBankInfoResponseDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProject.GetFawriaLicenseprojectBankInfoById}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as FawriaLicenseBankInfoResponseDto;
      })
    )
  }

}
