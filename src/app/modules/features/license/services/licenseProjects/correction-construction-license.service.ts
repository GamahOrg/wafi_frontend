import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaladyDto, ConstructionLicenseCreateUpdateDto, ConstructionLicenseDto, ConstructionLicenseIntegrationDto } from '../../dataModels/construction-license.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class CorrectionConstructionLicenseService {

    constructor(private _httpClient: HttpClient) { }

    private objSubject = new BehaviorSubject<ConstructionLicenseDto>(new ConstructionLicenseDto());

    private objSubject$ = this.objSubject.asObservable();

    private listObjSubject = new BehaviorSubject<ConstructionLicenseDto[]>([]);

    private listObjSubject$ = this.listObjSubject.asObservable();

    getSubjectObj(): Observable<ConstructionLicenseDto> {
      return this.objSubject$;
    }
    SetSubjectObj(LatestValue: ConstructionLicenseDto) {
    return this.objSubject.next(LatestValue) ;
    }
    getSubjectListObjs(): Observable<ConstructionLicenseDto[]> {
      return this.listObjSubject$;
    }
    SetSubjectListObjs(LatestValue: ConstructionLicenseDto[]) {
    return this.listObjSubject.next(LatestValue) ;
    }

    GetByLicenseProjectId(id: string) {
      return this._httpClient.get<CoreResponseDTO<ConstructionLicenseDto[]>>
        (`${Configuration.APIs.LicenseProjectConstructionLicense.GetByLicenseProjectId}/${id}`).pipe(
          map((res: CoreResponseDTO<ConstructionLicenseDto[]>) => {
            return res.data;
          })
        )
    }

    GetCorrectionLicenseConstructionNotTiedToDeed(id: string) {
      return this._httpClient.get<CoreResponseDTO<ConstructionLicenseDto[]>>
        (`${Configuration.APIs.LicenseProjectConstructionLicense.GetCorrectionLicenseConstructionNotTiedToDeed}/${id}`).pipe(
          map((res: CoreResponseDTO<ConstructionLicenseDto[]>) => {
            return res.data;
          })
        )
    }

    Save(obj: ConstructionLicenseCreateUpdateDto): Observable<CoreResponseDTO<ConstructionLicenseDto[]>> {

      return this._httpClient.post<CoreResponseDTO<ConstructionLicenseDto[]>>
        (Configuration.APIs.LicenseProjectConstructionLicense.Save,obj).pipe(
        map((res: CoreResponseDTO<ConstructionLicenseDto[]>) => {
          return res;
        })
      )
    }

    ValidateConstructionLicenseInfo(obj: BaladyDto): Observable<CoreResponseDTO<ConstructionLicenseIntegrationDto>> {
      return this._httpClient.post<CoreResponseDTO<ConstructionLicenseIntegrationDto>>
        (Configuration.APIs.LicenseProjectConstructionLicense.ValidateLicenseNumberFromBaladyIntegration, obj).pipe(
          map((res: CoreResponseDTO<ConstructionLicenseIntegrationDto>) => {
            return res;
          })
        )
    }

    Delete(id: string) : Observable<any>{
      return this._httpClient.delete<any>
      (`${Configuration.APIs.LicenseProjectConstructionLicense.CorrectionDelete}?id=${id}`).pipe(
        map((res:any) => {
          return res;
        })
      )
    }

}
