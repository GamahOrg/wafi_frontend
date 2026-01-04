import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectModelCreateUpdateDto, LicenseProjectModelDto } from '../dataModels/license-project-model.dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../dataModels/drop-down-name.dto';
import { LicenseRequestUnitFacilitiesDto } from '../dataModels/license-facilities-dto';

@Injectable()
export class ProjectModelService {
constructor(private _httpClient: HttpClient) { }

private objSubject = new BehaviorSubject<LicenseProjectModelDto>(new LicenseProjectModelDto());
private objSubject$ = this.objSubject.asObservable();

private listObjSubject = new BehaviorSubject<LicenseProjectModelDto[]>([]);

private listObjSubject$ = this.listObjSubject.asObservable();


getSubjectListObjs(): Observable<LicenseProjectModelDto[]> {
  return this.listObjSubject$;
}
SetSubjectListObjs(LatestValue: LicenseProjectModelDto[]) {
return this.listObjSubject.next(LatestValue) ;
}

getSubjectObj(): Observable<LicenseProjectModelDto> {
  return this.objSubject$;
}
SetSubjectObj(LatestValue: LicenseProjectModelDto) {
return this.objSubject.next(LatestValue) ;
}


// GetDropDown(): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
//   return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
//     (`${Configuration.APIs.LicenseProjectModel.GetDropDown}`)
// }
GetDropDown(id: string): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
  return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
    (`${Configuration.APIs.LicenseProjectModel.GetByLicenseProjectId}/${id}`)
}
GetByProjectSubUnitId(id: string) : Observable<CoreResponseDTO<LicenseProjectModelDto[]>>{
  return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
    (`${Configuration.APIs.LicenseProjectModel.GetByProjectSubUnitId}/${id}`)
}
GetByProjectUnitId(id: string) : Observable<CoreResponseDTO<LicenseProjectModelDto[]>>{
  return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
    (`${Configuration.APIs.LicenseProjectModel.GetByProjectUnitId}/${id}`)
}
Delete(id: string) : Observable<CoreResponseDTO<LicenseProjectModelDto[]>>{
  return this._httpClient.delete<CoreResponseDTO<LicenseProjectModelDto[]>>
  (`${Configuration.APIs.LicenseProjectModel.Delete}?id=${id}`)
}
Save(obj: LicenseProjectModelCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectModelDto[]>>
    (Configuration.APIs.LicenseProjectModel.Save,obj)
}
  GetLicenseRequestUnitFacilitiesList(): Observable<LicenseRequestUnitFacilitiesDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseRequestUnitFacilitiesDto[]>>
      (`${Configuration.APIs.LicenseProjectModel.GetLicenseRequestUnitFacilitiesList}`).pipe(
        map((res: CoreResponseDTO<LicenseRequestUnitFacilitiesDto[]>) => {
          return res?.data as LicenseRequestUnitFacilitiesDto[];
        })
      )
  }
GetSysLicenseProjectSubUnitTypeDropDown(): Observable<DropDownSubUnitTypeDto[] | null> {
  return this._httpClient
      .get<CoreResponseDTO<DropDownSubUnitTypeDto[]>>(`${Configuration.APIs.SysLicenseProjectSubUnitType.GetDropDown}`)
      .pipe(
          map((res: CoreResponseDTO<DropDownSubUnitTypeDto[]>) => {
            if (res.data) {
              return res.data as DropDownSubUnitTypeDto[];
            } else {
              return null;
            }
          })
      );
}

}

