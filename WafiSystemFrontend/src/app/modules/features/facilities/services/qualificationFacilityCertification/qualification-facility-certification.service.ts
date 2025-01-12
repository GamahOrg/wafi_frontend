import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { QualificationFacilityCertificationCreateUpdateDto, QualificationFacilityCertificationDto } from '../../dataModels/qualification-facility-certification-dto';

@Injectable()
export class QualificationFacilityCertificationService {
  constructor(private _httpClient: HttpClient) { }
  private objSubject = new BehaviorSubject<QualificationFacilityCertificationDto>(new QualificationFacilityCertificationDto());

  private objSubject$ = this.objSubject.asObservable();

  private objSubjectList = new BehaviorSubject<Array<QualificationFacilityCertificationDto>>([]);

  private objSubjectList$ = this.objSubjectList.asObservable();
  getObj(): Observable<QualificationFacilityCertificationDto> {
    return this.objSubject$;
  }
  SetObj(LatestValue: QualificationFacilityCertificationDto) {
    return this.objSubject.next(LatestValue);
  }
  getListOfObjects(): Observable<Array<QualificationFacilityCertificationDto>> {
    return this.objSubjectList$;
  }
  setListOfObjects(list: Array<QualificationFacilityCertificationDto>) {
    return this.objSubjectList.next(list);
  }

  GetByFacilityId(facilityId: string): Observable<QualificationFacilityCertificationDto[]| null> {
    return this._httpClient.get<CoreResponseDTO<QualificationFacilityCertificationDto[]>>(`${Configuration.APIs.QualificationFacilityCertification.GetByFacilityId}/${facilityId}`).pipe(
      map((res) => {
        return res.data ? res.data : null;
      })
    )
  }
  GetById(id: string): Observable<QualificationFacilityCertificationCreateUpdateDto | null> {
    return this._httpClient.get<CoreResponseDTO<QualificationFacilityCertificationCreateUpdateDto>>
      (`${Configuration.APIs.QualificationFacilityCertification.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<QualificationFacilityCertificationCreateUpdateDto>) => {
          return res.data ? res.data : null;
        })
      )
  }

  Create(model: QualificationFacilityCertificationCreateUpdateDto): Observable<QualificationFacilityCertificationDto[] | null> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';
    return this._httpClient.post<CoreResponseDTO<QualificationFacilityCertificationDto[]>>
      (Configuration.APIs.QualificationFacilityCertification.Create, model).pipe(
        map(res => {
          return res.data ? res.data : null;
        })
      )
  }
  Delete(id: string): Observable<CoreResponseDTO<any>> {
    return this._httpClient.delete<CoreResponseDTO<any>>
      (`${Configuration.APIs.QualificationFacilityCertification.Delete}?id=${id}`).pipe(
        map((res) => {
          return res;
        })
      )
  }

}
