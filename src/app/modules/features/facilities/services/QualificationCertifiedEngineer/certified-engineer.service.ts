import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { CertifiedEngineerDto } from '../../dataModels/certified-engineer-dto';
import { QualificationCertifiedEngineerCreateUpdateDto } from '../../dataModels/qualification-certified-engineer-create-update-dto';
import { QualificationCertifiedEngineerCourseDto } from '../../dataModels/qualification-certified-engineer-course-dto';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';

@Injectable()
export class CertifiedEngineerService {

  constructor(private _httpClient: HttpClient) { }
  private engSubject = new BehaviorSubject<CertifiedEngineerDto>( {} as CertifiedEngineerDto);

  private engSubject$ = this.engSubject.asObservable();

  private engSubjectList = new BehaviorSubject<Array<CertifiedEngineerDto>>([]);

  private engSubjectList$ = this.engSubjectList.asObservable();
  getCertifiedEngineerObj(): Observable<CertifiedEngineerDto> {
    return this.engSubject$;
  }
  SetFCertifiedEngineerObj(LatestValue: CertifiedEngineerDto) {
  return this.engSubject.next(LatestValue) ;
  }
  getCertifiedEngineerlist(): Observable<Array<CertifiedEngineerDto>> {
    return this.engSubjectList$;
  }
  setCertifiedEngineerList(list: Array<CertifiedEngineerDto>) {
    return this.engSubjectList.next(list) ;
    }

  GetFacilityById(facilityId: string,qualificationEngineerType:QualificationEngineerType): Observable<CertifiedEngineerDto[]> {
    return this._httpClient.get(`${Configuration.APIs.QualificationCertifiedEngineer.GetFacilityById}/${qualificationEngineerType}/${facilityId}`).pipe(
      map((res: any) => {
        return res.data as CertifiedEngineerDto[];
      })
    )
  }


  GetAllFacilityById(facilityId: string): Observable<CertifiedEngineerDto[]> {
    return this._httpClient.get(`${Configuration.APIs.QualificationCertifiedEngineer.GetAllFacilityById}/${facilityId}`).pipe(
      map((res: any) => {
        return res.data as CertifiedEngineerDto[];
      })
    )
  }

  GetFacilityByIdWithCourses(facilityId: string): Observable<CertifiedEngineerDto[]> {
    return this._httpClient.get(`${Configuration.APIs.QualificationCertifiedEngineer.GetFacilityByIdWithCourses}/${facilityId}`).pipe(
      map((res: any) => {
        return res.data as CertifiedEngineerDto[];
      })
    )
  }
   GetById(id: string) : Observable<QualificationCertifiedEngineerCreateUpdateDto | null>{
    return this._httpClient.get<CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>>
    (`${Configuration.APIs.QualificationCertifiedEngineer.GetById}?id=${id}`).pipe(
      map((res: CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>) => {
        return res.data ? res.data : null;
      })
    )
  }

  Create(model: QualificationCertifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>> {

    return this._httpClient.post<CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>>
      (Configuration.APIs.QualificationCertifiedEngineer.Create,model).pipe(
      map((res: CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>) => {
        return res;
      })
    )
  }
  Update(model: QualificationCertifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>> {
    return this._httpClient.put<CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>>
      (Configuration.APIs.QualificationCertifiedEngineer.Update,model).pipe(
      map((res: CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>) => {
        return res;
      })
    )
  }
  //      (Configuration.APIs.QualificationCertifiedEngineer.Save, model, { headers: { 'X-Skip-Error-Toast': 'true' } }).pipe(

  Save(model: QualificationCertifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<CertifiedEngineerDto[] | null>> {
    if(!model.id) model.id = '00000000-0000-0000-0000-000000000000';
    const headers = new HttpHeaders({ 'X-Skip-Error-Toast': 'true' });
    return this._httpClient.post<CoreResponseDTO<CertifiedEngineerDto[] | null>>
      (Configuration.APIs.QualificationCertifiedEngineer.Save, model, { headers }).pipe(
      map((res) => res)
    )
  }
  //      >(Configuration.APIs.QualificationCertifiedEngineer.SaveWithCourses, model, { headers: { 'X-Skip-Error-Toast': 'true' } })

  SaveWithCourses(model: QualificationCertifiedEngineerCreateUpdateDto): Observable<CoreResponseDTO<CertifiedEngineerDto[] | null>> {
    if(!model.id) model.id = '00000000-0000-0000-0000-000000000000';
    const headers = new HttpHeaders({ 'X-Skip-Error-Toast': 'true' });
    return this._httpClient.post<CoreResponseDTO<QualificationCertifiedEngineerCreateUpdateDto>>
      (Configuration.APIs.QualificationCertifiedEngineer.SaveWithCourses, model, { headers }).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  GetQualificationCertifiedEngineerCourse(qualificationCertifiedEngineerId: string): Observable<QualificationCertifiedEngineerCourseDto[]> {
    return this._httpClient.get(`${Configuration.APIs.QualificationCertifiedEngineer.GetQualificationCertifiedEngineerCourse}/${qualificationCertifiedEngineerId}`).pipe(
      map((res: any) => {
        return res.data as QualificationCertifiedEngineerCourseDto[];
      })
    )
  }

  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.QualificationCertifiedEngineer.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }

}



