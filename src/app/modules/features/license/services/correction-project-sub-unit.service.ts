import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectSubUnitDto, type LicenseProjectSubUnitCreateUpdateDto } from '../dataModels/project-sub-unit.dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import type { BaseResponse } from 'src/app/shared/models/base-response';

@Injectable()
export class CorrectionProjectSubUnitService {
constructor(private _httpClient: HttpClient) { }
selectedProjectSubUnitId: BehaviorSubject<string| null> = new BehaviorSubject<string | null>(null)
selectedProjectSubUnitTitle: BehaviorSubject<string| null> = new BehaviorSubject<string | null>(null)


updateSelectedProjectSubUnit(id: string): void {
  this.selectedProjectSubUnitId.next(id);
}
getSelectedProjectSubUnit(): Observable<string | null> {
  return this.selectedProjectSubUnitId.asObservable()
}

updateSelectedProjectSubUnitTitle(title: string): void {
  this.selectedProjectSubUnitTitle.next(title);
}

getSelectedProjectSubUnitTitle(): Observable<string | null> {
  return this.selectedProjectSubUnitTitle.asObservable()
}

GetByRequestHeaderId(id: string): Observable<CoreResponseDTO<ProjectSubUnitDto[]>> {
  return this._httpClient.get<CoreResponseDTO<ProjectSubUnitDto[]>>
    (`${Configuration.APIs.CorrectionLicenseProjectSubUnit.GetByRequestHeaderId}/${id}`)
}


addLicenseProjectSubUnit(model:LicenseProjectSubUnitCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectSubUnitCreateUpdateDto>> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectSubUnitCreateUpdateDto>>
    (`${Configuration.APIs.CorrectionLicenseProjectSubUnit.Create}`,model)
}
updateLicenseProjectSubUnit(model:LicenseProjectSubUnitCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectSubUnitCreateUpdateDto>> {
  return this._httpClient.put<CoreResponseDTO<LicenseProjectSubUnitCreateUpdateDto>>
    (`${Configuration.APIs.CorrectionLicenseProjectSubUnit.Update}`,model)
}

removeSubUnit(id: string): Observable<CoreResponseDTO<any>> {
  return this._httpClient.delete<CoreResponseDTO<any>>
    (`${Configuration.APIs.CorrectionLicenseProjectSubUnit.DeleteLicenseProjectSubUnitsAsync}/${id}`)
}


}


