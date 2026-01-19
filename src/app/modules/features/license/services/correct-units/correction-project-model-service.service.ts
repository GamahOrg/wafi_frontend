import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Configuration } from "../../../../../core/configurations/shared.config";
import { CoreResponseDTO } from "../../../../../core/models/core.model";
import { LicenseRequestUnitFacilitiesDto } from "../../dataModels/license-facilities-dto";
import { LicenseProjectModelCreateUpdateDto, LicenseProjectModelDto } from "../../dataModels/license-project-model.dto";
import { BehaviorSubject, Observable, map } from "rxjs";
import { DropDownSubUnitTypeDto } from "../../dataModels/drop-down-name.dto";

@Injectable()
export class CorrectionProjectModelService {
  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<LicenseProjectModelDto>(new LicenseProjectModelDto());
  private objSubject$ = this.objSubject.asObservable();

  private listObjSubject = new BehaviorSubject<LicenseProjectModelDto[]>([]);

  private listObjSubject$ = this.listObjSubject.asObservable();


  getSubjectListObjs(): Observable<LicenseProjectModelDto[]> {
    return this.listObjSubject$;
  }
  SetSubjectListObjs(LatestValue: LicenseProjectModelDto[]) {
    return this.listObjSubject.next(LatestValue);
  }

  getSubjectObj(): Observable<LicenseProjectModelDto> {
    return this.objSubject$;
  }
  SetSubjectObj(LatestValue: LicenseProjectModelDto) {
    return this.objSubject.next(LatestValue);
  }


  // GetDropDown(): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
  //   return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
  //     (`${Configuration.APIs.LicenseProjectModel.GetDropDown}`)
  // }
  GetDropDown(id: string): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectModel.GetByLicenseProjectId}/${id}`)
  }
  GetByProjectSubUnitId(id: string): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectModel.GetByProjectSubUnitId}/${id}`)
  }
  GetByProjectUnitId(id: string): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectModelDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectModel.GetByProjectUnitId}/${id}`)
  }
  Delete(id: string): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
    return this._httpClient.delete<CoreResponseDTO<LicenseProjectModelDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectModel.Delete}?id=${id}`)
  }
  Save(obj: LicenseProjectModelCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectModelDto[]>> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectModelDto[]>>
      (Configuration.APIs.CorrectionLicenseProjectModel.Save, obj)
  }
  GetLicenseRequestUnitFacilitiesList(): Observable<LicenseRequestUnitFacilitiesDto[]> {
    return this._httpClient.get<CoreResponseDTO<LicenseRequestUnitFacilitiesDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectModel.GetLicenseRequestUnitFacilitiesList}`).pipe(
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
