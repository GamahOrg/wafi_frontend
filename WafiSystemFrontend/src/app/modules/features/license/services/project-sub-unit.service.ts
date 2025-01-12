import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectSubUnitDto } from '../dataModels/project-sub-unit.dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ProjectSubUnitService {
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

GetByLicenseProjectId(id: string): Observable<CoreResponseDTO<ProjectSubUnitDto[]>> {
  return this._httpClient.get<CoreResponseDTO<ProjectSubUnitDto[]>>
    (`${Configuration.APIs.LicenseProjectSubUnit.GetByLicenseProjectId}/${id}`)
}


}


