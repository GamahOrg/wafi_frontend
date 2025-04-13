import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { LicenseAccountantDetailsDto } from "../../models/license-accountant-request-model/license-accountant-request-details-dto";
import { Configuration } from "src/app/core/configurations/shared.config";
import { LicenseAccountantNameDto } from "../../models/license-accountant-request-model/license-account-name-dto";
import { CreateOrUpdateAccountantRequestDto } from "../../models/license-accountant-request-model/create-or-update-license-accountant-dto";

@Injectable()
export class LicenseAccountantRequestService {

  constructor(private _httpClient: HttpClient) { }

  getLicenseAccountantDetailsById(id : string) :Observable<LicenseAccountantDetailsDto|null>{
    return this._httpClient.get<CoreResponseDTO<LicenseAccountantDetailsDto>>(`${Configuration.APIs.LicenseAccountantRequest.GetLicenseAccountDetails}/${id}`).pipe(
      map((res: CoreResponseDTO<LicenseAccountantDetailsDto>)=>{
        return res.isDone? res.data as LicenseAccountantDetailsDto:null;
      })
    );
   }
   getLicenseAccountantNameById(id : string) :Observable<LicenseAccountantNameDto|null>{
    return this._httpClient.get<CoreResponseDTO<LicenseAccountantNameDto>>(`${Configuration.APIs.LicenseAccountantRequest.GetLicenseAccountantName}/${id}`).pipe(
      map((res: CoreResponseDTO<LicenseAccountantNameDto>)=>{
        return res.isDone? res.data as LicenseAccountantNameDto:null;
      })
    );
   }
   CreateLicenseAccountant(dto:CreateOrUpdateAccountantRequestDto) :Observable<any>{
    return this._httpClient.post(`${Configuration.APIs.LicenseAccountantRequest.CreateLicenseAccountant}`, dto);
   }
   UpdateLicenseAccountant(dto:CreateOrUpdateAccountantRequestDto,id:string) :Observable<any>{
    return this._httpClient.put(`${Configuration.APIs.LicenseAccountantRequest.UpdateLicenseAccountant}/${id}`, dto);
   }
}