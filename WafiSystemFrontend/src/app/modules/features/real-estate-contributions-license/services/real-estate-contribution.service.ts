import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RealEstateContributionDto } from '../dataModels/real-estate-contribution-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';


@Injectable()
export class RealEstateContributionService {

  constructor(private _httpClient: HttpClient) { }

   GetByLicenseProjectId(id: string) : Observable<CoreResponseDTO<RealEstateContributionDto>>  {
    return this._httpClient.get<CoreResponseDTO<RealEstateContributionDto>>
      (`${Configuration.APIs.LicenseProject.GetRealEstateContributionFilesByLicenseProjectId}/${id}`)
  }

  Save(obj: RealEstateContributionDto): Observable<CoreResponseDTO<RealEstateContributionDto>> {
    
    return this._httpClient.post<CoreResponseDTO<RealEstateContributionDto>>
      (Configuration.APIs.LicenseProject.SaveRealEstateContributionFiles,obj).pipe(
      map((res: CoreResponseDTO<RealEstateContributionDto>) => {
        return res;
      })
    )
  } 


}
