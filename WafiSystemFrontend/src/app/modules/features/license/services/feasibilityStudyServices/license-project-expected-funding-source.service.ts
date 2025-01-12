import { Injectable } from '@angular/core';
import { LicenseProjectExpectedFundingSourceDto } from '../../models/feasibilityStudyDtos/license-project-expected-funding-source-dto';
import { LicenseProjectExpectedFundingSourceCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-expected-funding-source-create-update-dto';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectExpectedFundingSourceService {

  constructor(private _httpClient: HttpClient) { }


  private ExpectedFundingSourceSubject = new BehaviorSubject<LicenseProjectExpectedFundingSourceDto|null>({} as LicenseProjectExpectedFundingSourceDto);

  private ExpectedFundingSourceSubject$ = this.ExpectedFundingSourceSubject.asObservable();

  private ExpectedFundingSourceSubjectList = new BehaviorSubject<Array<LicenseProjectExpectedFundingSourceDto>>([]);

  private ExpectedFundingSourceSubjectList$ = this.ExpectedFundingSourceSubjectList.asObservable();
  getProjectExpectedFundingSourceObj(): Observable<LicenseProjectExpectedFundingSourceDto|null> {
   return this.ExpectedFundingSourceSubject$;
 }
 setProjectExpectedFundingSourceObj(LatestValue: LicenseProjectExpectedFundingSourceDto) {
   return this.ExpectedFundingSourceSubject.next(LatestValue);
 }

 getExpectedExpectedFundingSourcelist(): Observable<Array<LicenseProjectExpectedFundingSourceDto>> {
  return this.ExpectedFundingSourceSubjectList$;
}
setExpectedFundingSourceList(list: Array<LicenseProjectExpectedFundingSourceDto>) {
  return this.ExpectedFundingSourceSubjectList.next(list) ;
  }

  GetByFeasibilityStudyId(feasibilityStudyId: string): Observable<LicenseProjectExpectedFundingSourceDto[]> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectExpectedFundingSource.GetByFeasibilityStudyId}/${feasibilityStudyId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectExpectedFundingSourceDto[];
      })
    )
  }
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.LicenseProjectExpectedFundingSource.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
 Save(model: LicenseProjectExpectedFundingSourceCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectExpectedFundingSourceDto[]>> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectExpectedFundingSourceCreateUpdateDto>>
    (Configuration.APIs.LicenseProjectExpectedFundingSource.Save, model).pipe(
      map((res: any) => {
        return res;
      })
    )
}
}
