import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { EscrowAccountDto, LicenseProjectDetailsDto } from '../models/license-project.model';

@Injectable()
export class LicenseProjectService {

  constructor(private _httpClient: HttpClient) { }

  validateProjectForContractCreation(licenseProjectId: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProject.ValidateProjectForContractCreation}/${licenseProjectId}`
    );
  }
  getLicenseProjectDetails(licenseProjectId: string | null): Observable<any> {

    return this._httpClient.get<CoreResponseDTO<LicenseProjectDetailsDto>>(`${Configuration.APIs.LicenseProject.GetLicenseProjectDetails}/${licenseProjectId}`,)
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectDetailsDto>) => {
          return res.data as any;
        })
      );
  }

  getEscrowAccount(id: string | null): Observable<any> {
    return this._httpClient.get<CoreResponseDTO<EscrowAccountDto>>(`${Configuration.APIs.LicenseProject.GetEscrowAccount}/${id}`,)
      .pipe(
        map((res: CoreResponseDTO<EscrowAccountDto>) => {
          return res.data as any;
        })
      );
  }

  UpdateEscrowAccount(obj: EscrowAccountDto): Observable<CoreResponseDTO<any>> {
      return this._httpClient.put<CoreResponseDTO<any>>(Configuration.APIs.LicenseProject.UpdateEscrowAccount,obj).pipe(
          map((res: CoreResponseDTO<any>) => {
            return res;
          })
        )
   }

}
