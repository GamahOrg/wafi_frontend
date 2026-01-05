import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto } from "../../models/save-fawria-license-end-beneficiary-contacts-info-request-dto";
import { CoreResponseDTO } from "../../../../../core/models/core.model";
import { Configuration } from "../../../../../core/configurations/shared.config";
import { Observable, map } from "rxjs";
import { GetFawriaLicenseEndBeneficiaryContactsInfoResponseDto } from "../../models/get-fawria-license-end-beneficiary-contacts-info-response-dto";

@Injectable()
export class FawriaLicenseEndBeneficiaryContactsInfoService {

  constructor(private _httpClient: HttpClient) { }


  SaveFawriaEndBeneficiaryContactsInfoAsync(
    obj: SaveFawriaLicenseEndBeneficiaryContactsInfoRequestDto
  ): Observable<CoreResponseDTO<any>> {

    return this._httpClient.post<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProject.SaveFawriaEndBeneficiaryContactsInfoAsync,
      obj
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;
      })
    );
  }

  GetFawriaEndBeneficiaryContactsInfoById(licenseProjectId: string): Observable<GetFawriaLicenseEndBeneficiaryContactsInfoResponseDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProject.GetFawriaEndBeneficiaryContactsInfoById}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as GetFawriaLicenseEndBeneficiaryContactsInfoResponseDto;
      })
    )
  }


}
