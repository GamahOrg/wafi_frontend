import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LicenseProjectExpectedIncomeDto } from '../../models/feasibilityStudyDtos/license-project-expected-income-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectExpectedIncomeCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-expected-income-create-update-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectExpectedIncomeService {

  constructor(private _httpClient: HttpClient) { }

  private expectedIncomeSubject = new BehaviorSubject<LicenseProjectExpectedIncomeDto|null>({} as LicenseProjectExpectedIncomeDto);

  private expectedIncomeSubject$ = this.expectedIncomeSubject.asObservable();

  private expectedIncomeSubjectList = new BehaviorSubject<Array<LicenseProjectExpectedIncomeDto>>([]);
    
  private expectedIncomeSubjectList$ = this.expectedIncomeSubjectList.asObservable();
  getProjectExpectedIncomeObj(): Observable<LicenseProjectExpectedIncomeDto|null> {
   return this.expectedIncomeSubject$;
 }
 setProjectExpectedIncomeObj(LatestValue: LicenseProjectExpectedIncomeDto) {
   return this.expectedIncomeSubject.next(LatestValue);
 }

 getExpectedIncomeSubjectListlist(): Observable<Array<LicenseProjectExpectedIncomeDto>> {
  return this.expectedIncomeSubjectList$;
}
setExpectedIncomeList(list: Array<LicenseProjectExpectedIncomeDto>) {
  return this.expectedIncomeSubjectList.next(list) ;
  }

  GetByFeasibilityStudyId(feasibilityStudyId: string): Observable<LicenseProjectExpectedIncomeDto[]> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectExpectedIncome.GetByFeasibilityStudyId}/${feasibilityStudyId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectExpectedIncomeDto[];
      })
    )
  }
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.LicenseProjectExpectedIncome.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
 Save(model: LicenseProjectExpectedIncomeCreateUpdateDto): Observable<LicenseProjectExpectedIncomeDto[]> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectExpectedIncomeCreateUpdateDto>>
    (Configuration.APIs.LicenseProjectExpectedIncome.Save, model).pipe(
      map((res: any) => {
        return res.data as LicenseProjectExpectedIncomeDto[];
      })
    )
}
}
