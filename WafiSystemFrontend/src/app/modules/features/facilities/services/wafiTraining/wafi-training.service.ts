import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { WafiTrainingCreateUpdateDto, WafiTrainingDto } from '../../dataModels/wafi-training-dto';

@Injectable()
export class WafiTrainingService {
  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<WafiTrainingDto|null>(null);
    
  private objSubject$ = this.objSubject.asObservable();
    
  getSubjectObj(): Observable<WafiTrainingDto|null> {
    return this.objSubject$;
  }
  SetSubjectObj(LatestValue: WafiTrainingDto|null) {
  return this.objSubject.next(LatestValue) ;
  }


  GetByFacilityId(facilityId: string): Observable<WafiTrainingDto|null> {
    return this._httpClient.get<CoreResponseDTO<WafiTrainingDto>>
      (`${Configuration.APIs.QualificationWafiTraining.GetByFacilityId}/${facilityId}`).pipe(
      map((res: CoreResponseDTO<WafiTrainingDto>) => {
        return res.data ? res.data : null;
      })
    )
  }

  Save(obj: WafiTrainingCreateUpdateDto): Observable<CoreResponseDTO<WafiTrainingDto>> {
    if(!obj.id) obj.id = '00000000-0000-0000-0000-000000000000';
    
    return this._httpClient.post<CoreResponseDTO<WafiTrainingDto>>
      (Configuration.APIs.QualificationWafiTraining.Save,obj).pipe(
      map((res: CoreResponseDTO<WafiTrainingDto>) => {
        return res;
      })
    )
  }
  GetById(id: string) : Observable<WafiTrainingCreateUpdateDto | null>{
    return this._httpClient.get<CoreResponseDTO<WafiTrainingCreateUpdateDto>>
    (`${Configuration.APIs.QualificationWafiTraining.GetById}?id=${id}`).pipe(
      map((res: CoreResponseDTO<WafiTrainingCreateUpdateDto>) => {
        if(res.data){
          return res.data ;
        }else{
          return null
        }
      })
    )
  }

}