import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { FacilityBasicInfo, FacilityBasicUpdateInfo } from '../../dataModels/facility-basic-info.model';

@Injectable()
export class FacilityProfileService {
  facilityBasicDataBS: BehaviorSubject<FacilityBasicInfo> = new BehaviorSubject<FacilityBasicInfo>({} as FacilityBasicInfo)
  constructor(private _httpClient: HttpClient) { }



  GetFacilityById(GetById: string): Observable<FacilityBasicInfo> {
    return this._httpClient.get<CoreResponseDTO<FacilityBasicInfo>>(`${Configuration.APIs.facility.GetById}/${GetById}`).pipe(
      map((res: CoreResponseDTO<FacilityBasicInfo>) => {
        return res.data as FacilityBasicInfo
      })
    )
  }
  // update api
  // updatFacility(data : FacilityBasicUpdateInfo): Observable<FacilityBasicInfo>{
  //   return this._httpClient.put<CoreResponseDTO<FacilityBasicInfo>>(Configuration.APIs.facility.updat, data ).pipe(
  //     map((res: CoreResponseDTO<FacilityBasicInfo>) => {
  //       return res.data as FacilityBasicInfo
  //     })
  //   )
  // }

  updatFacility(obj: FacilityBasicUpdateInfo): Observable<CoreResponseDTO<FacilityBasicInfo>> {
    return this._httpClient.put<CoreResponseDTO<FacilityBasicInfo>>
      (Configuration.APIs.facility.update, obj).pipe(
        map((res: CoreResponseDTO<FacilityBasicInfo>) => {
          return res;
        })
      )
  }

  // update
  updateFacilityBasicDataBS(data: FacilityBasicInfo) {
    this.facilityBasicDataBS.next(data)
  }
  getFacilityBasicDataBS(): Observable<FacilityBasicInfo> {
    return this.facilityBasicDataBS.asObservable()
  }
}
