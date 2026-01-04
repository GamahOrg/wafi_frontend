import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {
  AddLicenseProjectFawriaDto,
  FacilityInfoForProjectFawriaDto,
  LicenseProjectFawriaDeveloperListDto,
} from '../models/FawriaLicenseProject/add-fawria-license-project-contact-info-request-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { Pagination } from 'src/app/shared/models/pagination.model';
@Injectable({
  providedIn: 'root',
})
export class LicenseProjectFawriaDeveloperService {
  constructor(private _http: HttpClient) {}

  /**
   * Get all license project fawria developers
   * @returns Observable of Pagination containing list of developers
   */
  getAll(
    pageIndex: number,
    pageSize: number
  ): Observable<Pagination<LicenseProjectFawriaDeveloperListDto[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageIndex', pageIndex);
    queryParams = queryParams.append('pageSize', pageSize);
    return this._http
      .get<CoreResponseDTO<Pagination<LicenseProjectFawriaDeveloperListDto[]>>>(
        `${Configuration.APIs.LicenseProjectFawria.GetAll}`,
        { params: queryParams }
      )
      .pipe(
        map(
          (
            res: CoreResponseDTO<
              Pagination<LicenseProjectFawriaDeveloperListDto[]>
            >
          ) => {
            return res.data as Pagination<
              LicenseProjectFawriaDeveloperListDto[]
            >;
          }
        )
      );
  }

  /**
   * Check if a commercial register number exists and get facility info
   * @param commercialRegisterNumber - The commercial register number to check
   * @returns Observable of DataResponse containing facility information
   */
  checkCommercialRegisterNumber(
    commercialRegisterNumber: string
  ): Observable<CoreResponseDTO<FacilityInfoForProjectFawriaDto>> {
    const params = new HttpParams().set(
      'commercialRegisterNumber',
      commercialRegisterNumber
    );

    return this._http.get<CoreResponseDTO<FacilityInfoForProjectFawriaDto>>(
      Configuration.APIs.LicenseProjectFawria.CheckCommercialRegisterNumber,
      { params }
    );
  }

  /**
   * Add a new license project fawria
   * @param data - The data for adding license project fawria
   * @returns Observable of CoreResponseDTO<any>
   */
  addLicenseProjectFawria(
    data: AddLicenseProjectFawriaDto
  ): Observable<CoreResponseDTO<any>> {
    return this._http.post<CoreResponseDTO<any>>(
      Configuration.APIs.LicenseProjectFawria.AddLicenseProjectFawria,
      data
    );
  }

  IsFawriaLicenseAllow(facilityId: string): Observable<boolean> {
    const params = new HttpParams().set('facilityId',facilityId);
    return this._http.get<boolean>(
      Configuration.APIs.LicenseProjectFawria.IsFawriaLicenseAllow,
      { params }
    );
  }

  deleteLicenseProjectEngineeringWorksExamination(id: string): Observable<any | null> {
    return this._http.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectFawria.DeleteLicenseProjectFawriaDeveloper}/${id}`
    )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      );
  }
}
