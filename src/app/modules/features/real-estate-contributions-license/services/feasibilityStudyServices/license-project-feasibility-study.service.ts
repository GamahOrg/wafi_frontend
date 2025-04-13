import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectFeasibilityStudyDto } from '../../models/feasibilityStudyDtos/license-project-feasibility-study-dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectFeasibilityStudyCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-feasibility-study-create-update-dto';

@Injectable()
export class LicenseProjectFeasibilityStudyService {

  constructor(private _httpClient: HttpClient) { }


  private feasibilityStudyId = new BehaviorSubject<string|null>({} as string|null);

 private feasibilityStudyId$ = this.feasibilityStudyId.asObservable();
 getFeasibilityStudyId(): Observable<string|null> {
  return this.feasibilityStudyId$;
}
setFeasibilityStudyId(LatestValue: string) {
  return this.feasibilityStudyId.next(LatestValue);
}
  GetByLicenseProjectId(licenseProjectId: string): Observable<LicenseProjectFeasibilityStudyDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectFeasibilityStudy.GetByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectFeasibilityStudyDto;
      })
    )
  }

  Save(model: LicenseProjectFeasibilityStudyCreateUpdateDto): Observable<LicenseProjectFeasibilityStudyDto> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectFeasibilityStudyCreateUpdateDto>>
      (Configuration.APIs.LicenseProjectFeasibilityStudy.Save, model).pipe(
        map((res: any) => {
          return res.data as LicenseProjectFeasibilityStudyDto;
        })
      )
  }
}
