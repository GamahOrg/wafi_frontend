import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectQuantitiesTableFileCreateUpdateDto, LicenseProjectQuantitiesTableFileDto } from '../../dataModels/project-basic-data.dto';
import { Observable, map } from 'rxjs';
import { LicenseProjectQuantitiesTableFileAndRelativeWeightDto } from '../../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import { LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto } from '../../dataModels/license-project-quantities-table-file-relative-weights-create-update-dto';

@Injectable()
export class QuantitiesTableFilesService {

  constructor(private _httpClient: HttpClient) { }

  GetByLicenseProjectId(licenseProjectId: string |null): Observable<LicenseProjectQuantitiesTableFileAndRelativeWeightDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectQuantitiesTableFiles.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectQuantitiesTableFileAndRelativeWeightDto;
      })
    )
  }
  Save(model: LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto): Observable<LicenseProjectQuantitiesTableFileAndRelativeWeightDto> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectQuantitiesTableFileAndRelativeWeightDto>>
      (Configuration.APIs.LicenseProjectQuantitiesTableFiles.Save, model).pipe(
        map((res: CoreResponseDTO<LicenseProjectQuantitiesTableFileAndRelativeWeightDto>) => {
          return res.data as LicenseProjectQuantitiesTableFileAndRelativeWeightDto;
        })
      )
  }
}
