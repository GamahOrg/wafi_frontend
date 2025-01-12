import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { AdditionalServicesCreateUpdateDto, AdditionalServicesDto, SysLicenseProjectServicePeriodCreateUpdateDto } from '../../dataModels/additional-services.dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';

@Injectable()
export class LicenseProjectAdditionalServicesService {
    
    constructor(private _httpClient: HttpClient) { }

    private objSubject = new BehaviorSubject<AdditionalServicesDto>(new AdditionalServicesDto());
      
    private objSubject$ = this.objSubject.asObservable();

    private listObjSubject = new BehaviorSubject<AdditionalServicesDto[]>([]);
      
    private listObjSubject$ = this.listObjSubject.asObservable();
      
    getSubjectObj(): Observable<AdditionalServicesDto> {
      return this.objSubject$;
    }
    SetSubjectObj(LatestValue: AdditionalServicesDto) {
    return this.objSubject.next(LatestValue) ;
    }
    getSubjectListObjs(): Observable<AdditionalServicesDto[]> {
      return this.listObjSubject$;
    }
    SetSubjectListObjs(LatestValue: AdditionalServicesDto[]) {
    return this.listObjSubject.next(LatestValue) ;
    }
    GetByLicenseProjectId(id: string) {
      return this._httpClient.get<CoreResponseDTO<AdditionalServicesDto[]>>
        (`${Configuration.APIs.LicenseProjectService.GetByLicenseProjectId}/${id}`).pipe(
          map((res: CoreResponseDTO<AdditionalServicesDto[]>) => {
            return res.data;
          })
        )
    }

    Save(obj: AdditionalServicesCreateUpdateDto): Observable<CoreResponseDTO<AdditionalServicesDto[]>> {
      
      return this._httpClient.post<CoreResponseDTO<AdditionalServicesDto[]>>
        (Configuration.APIs.LicenseProjectService.Save,obj).pipe(
        map((res: CoreResponseDTO<AdditionalServicesDto[]>) => {
          return res;
        })
      )
    }
    GetSysLicenseProjectServiceDropDown(): Observable<DropDownNameDto[]> {
      return this._httpClient
          .get<CoreResponseDTO<DropDownNameDto[]>>(`${Configuration.APIs.SysLicenseProjectService.GetDropDown}`)
          .pipe(
              map((res: CoreResponseDTO<DropDownNameDto[]>) => {
                  return res.data as DropDownNameDto[];
              })
          );
  }
  GetSysLicenseProjectServicePeriodDropDown(): Observable<SysLicenseProjectServicePeriodCreateUpdateDto[]> {
    return this._httpClient
        .get<CoreResponseDTO<SysLicenseProjectServicePeriodCreateUpdateDto[]>>(`${Configuration.APIs.SysLicenseProjectServicePeriod.GetDropDown}`)
        .pipe(
            map((res: CoreResponseDTO<SysLicenseProjectServicePeriodCreateUpdateDto[]>) => {
                return res.data as SysLicenseProjectServicePeriodCreateUpdateDto[];
            })
        );
}
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.LicenseProjectService.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
  
}


