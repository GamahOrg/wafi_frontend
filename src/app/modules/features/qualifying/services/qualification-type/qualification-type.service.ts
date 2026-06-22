import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { QualificationTypeDto } from '../../dataModels/qualification-type-dto';

@Injectable()
export class QualificationTypeService {
  constructor(private _httpClient: HttpClient) { }

  GetByCode(requestTypeCode: string, renewRequest: boolean): Observable<QualificationTypeDto| null> {
    return this._httpClient.get<CoreResponseDTO<QualificationTypeDto>>(`${Configuration.APIs.SysQualificationType.GetShowForWafiByCode}/${requestTypeCode}/${renewRequest}`).pipe(
      map((res) => {
        if(res.isDone && res.data){
          return res.data;
        }else{
          return null
        }
      })
    )
  }

  isRemovedFacilityQualificationRequest(
    facilityId: string
  ): Observable<CoreResponseDTO<boolean>> {
    return this._httpClient.post<CoreResponseDTO<boolean>>(
      `${Configuration.APIs.QualificationRequestHeader.IsRemovedFacilityQualificationRequest}/${facilityId}`,
      {}
    );
  }

}
