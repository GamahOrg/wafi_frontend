import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { QualificationQualificatedAccountantDto } from '../../dataModels/qualification-qualificated-accountant-dto';
import { QualificationQualifiedAccountantCreateUpdateDto } from '../../dataModels/qualification-qualified-accountant-create-update-dto';

@Injectable()
export class QualificatedAccountantService {

  constructor(private _httpClient: HttpClient) { }
  private accSubject = new BehaviorSubject<QualificationQualificatedAccountantDto>({}as QualificationQualificatedAccountantDto);

  private accSubject$ = this.accSubject.asObservable();

  private accSubjectList = new BehaviorSubject<Array<QualificationQualificatedAccountantDto>>([]);

  private accSubjectList$ = this.accSubjectList.asObservable();
  getCertifiedAccountantrObj(): Observable<QualificationQualificatedAccountantDto> {
    return this.accSubject$;
  }
  SetFCertifiedAccountantrObj(LatestValue: QualificationQualificatedAccountantDto) {
  return this.accSubject.next(LatestValue) ;
  }
getCertifiedAccountantrlist(): Observable<Array<QualificationQualificatedAccountantDto>> {
    return this.accSubjectList$;
  }
  SetFCertifiedAccountantrList(list: Array<QualificationQualificatedAccountantDto>) {
    return this.accSubjectList.next(list) ;
    }
  GetFacilityById(facilityId: string): Observable<QualificationQualificatedAccountantDto[]> {
    return this._httpClient.get(`${Configuration.APIs.QualificationQualifiedAccountant.GetFacilityById}/${facilityId}`).pipe(
      map((res: any) => {
        return res.data as QualificationQualificatedAccountantDto[];
      })
    )
  }
  GetById(id: string) : Observable<QualificationQualifiedAccountantCreateUpdateDto | null>{
    return this._httpClient.get<CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>>
    (`${Configuration.APIs.QualificationQualifiedAccountant.GetById}?id=${id}`).pipe(
      map((res: CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>) => {
        return res.data ?  res.data : null;
      })
    )
  }

  Create(model: QualificationQualifiedAccountantCreateUpdateDto): Observable<CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>> {

    return this._httpClient.post<CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>>
      (Configuration.APIs.QualificationQualifiedAccountant.Create,model).pipe(
      map((res: CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>) => {
        return res;
      })
    )
  }
  Update(model: QualificationQualifiedAccountantCreateUpdateDto): Observable<CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>> {
    return this._httpClient.put<CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>>
      (Configuration.APIs.QualificationQualifiedAccountant.Update,model).pipe(
      map((res: CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>) => {
        return res;
      })
    )
  }
  Save(model: QualificationQualifiedAccountantCreateUpdateDto): Observable<CoreResponseDTO<QualificationQualificatedAccountantDto[]>> {
    if(!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<QualificationQualifiedAccountantCreateUpdateDto>>
      (Configuration.APIs.QualificationQualifiedAccountant.Save,model).pipe(
      map((res:any) => {
        return res;

      })
    )
  }
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.QualificationQualifiedAccountant.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
}
