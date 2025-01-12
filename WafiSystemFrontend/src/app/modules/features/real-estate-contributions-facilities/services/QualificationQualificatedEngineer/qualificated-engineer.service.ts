import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { QualificationQualifiedEngineerCreateUpdateDto } from '../../dataModels/qualification-qualified-engineer-create-update-dto';
import { QualifiedEngineersDto } from '../../dataModels/qualified-engineers-dto';

@Injectable()
export class QualificatedEngineerService {

  constructor(private _httpClient: HttpClient) { }
  private engSubject = new BehaviorSubject<QualifiedEngineersDto>({} as QualifiedEngineersDto);

  private engSubject$ = this.engSubject.asObservable();
  private engSubjectList = new BehaviorSubject<Array<QualifiedEngineersDto>>([]);

  private engSubjectList$ = this.engSubjectList.asObservable();
  getQualifiedEngineerObj(): Observable<QualifiedEngineersDto> {
    return this.engSubject$;
  }
  SetFQualifiedEngineerObj(LatestValue: QualifiedEngineersDto) {
    return this.engSubject.next(LatestValue);
  }
  getQualifiedEngineerlist(): Observable<Array<QualifiedEngineersDto>> {
    return this.engSubjectList$;
  }
  setQualifiedEngineerList(list: Array<QualifiedEngineersDto>) {
    return this.engSubjectList.next(list);
  }

  GetFacilityById(facilityId: string): Observable<QualifiedEngineersDto[]> {
    return this._httpClient.get(`${Configuration.APIs.QualificationQualifiedEngineer.GetFacilityById}/${facilityId}`).pipe(
      map((res: any) => {
        return res.data as QualifiedEngineersDto[];
      })
    )
  }
  GetById(id: string): Observable<QualificationQualifiedEngineerCreateUpdateDto | null> {
    return this._httpClient.get<CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>>
      (`${Configuration.APIs.QualificationQualifiedEngineer.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>) => {
          return res.data ? res.data : null;
        })
      )
  }

  Create(model: QualificationQualifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>> {

    return this._httpClient.post<CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>>
      (Configuration.APIs.QualificationQualifiedEngineer.Create, model).pipe(
        map((res: CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>) => {
          return res;
        })
      )
  }
  Update(model: QualificationQualifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>> {
    return this._httpClient.put<CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>>
      (Configuration.APIs.QualificationQualifiedEngineer.Update, model).pipe(
        map((res: CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>) => {
          return res;
        })
      )
  }
  Save(model: QualificationQualifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<QualifiedEngineersDto[]>> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<QualificationQualifiedEngineerCreateUpdateDto>>
      (Configuration.APIs.QualificationQualifiedEngineer.Save, model).pipe(
        map((res: any) => {
          return res;
        })
      )
  }
  Delete(id: string): Observable<any> {
    return this._httpClient.delete<any>
      (`${Configuration.APIs.QualificationQualifiedEngineer.Delete}?id=${id}`).pipe(
        map((res: any) => {
          return res;
        })
      )
  }
}
