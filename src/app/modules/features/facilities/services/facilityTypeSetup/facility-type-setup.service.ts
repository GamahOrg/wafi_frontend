import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import {
  FacilityBusinessesAndCategoryTypesDto,
  UpdateFacilityTypeCategoryDto,
} from '../../dataModels/facility-type-setup.model';

@Injectable()
export class FacilityTypeSetupService {
  constructor(private _httpClient: HttpClient) {}

  GetFacilityBusinessesAndCategoryTypes(
    facilityId: string
  ): Observable<FacilityBusinessesAndCategoryTypesDto | null> {
    return this._httpClient
      .get<CoreResponseDTO<FacilityBusinessesAndCategoryTypesDto>>(
        `${Configuration.APIs.facility.GetFacilityBusinessesAndCategoryTypes}/${facilityId}`
      )
      .pipe(
        map((res: CoreResponseDTO<FacilityBusinessesAndCategoryTypesDto>) => {
          return res.data ?? null;
        })
      );
  }

  UpdateFacilityTypeCategory(
    dto: UpdateFacilityTypeCategoryDto
  ): Observable<CoreResponseDTO<any>> {
    return this._httpClient
      .post<CoreResponseDTO<any>>(
        Configuration.APIs.facility.UpdateFacilityTypeCategory,
        dto
      )
      .pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      );
  }
}
