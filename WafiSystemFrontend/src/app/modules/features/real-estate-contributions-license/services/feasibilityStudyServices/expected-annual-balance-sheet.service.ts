import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseProjectAnnualBalanceSheetDto } from '../../models/feasibilityStudyDtos/license-project-annual-balance-sheet-dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectAnnualBalanceSheetCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-annual-balance-sheet-create-update-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class ExpectedAnnualBalanceSheetService {

  constructor(private _httpClient: HttpClient) { }

  private annualBalanceSheetSubject = new BehaviorSubject<LicenseProjectAnnualBalanceSheetDto|null>({} as LicenseProjectAnnualBalanceSheetDto);

  private annualBalanceSheetSubject$ = this.annualBalanceSheetSubject.asObservable();

  private annualBalanceSheetSubjectList = new BehaviorSubject<Array<LicenseProjectAnnualBalanceSheetDto>>([]);
    
  private annualBalanceSheetSubjectList$ = this.annualBalanceSheetSubjectList.asObservable();
  getProjectAnnualBalanceSheetObj(): Observable<LicenseProjectAnnualBalanceSheetDto|null> {
   return this.annualBalanceSheetSubject$;
 }
 setProjectAnnualBalanceSheetObj(LatestValue: LicenseProjectAnnualBalanceSheetDto|null) {
   return this.annualBalanceSheetSubject.next(LatestValue);
 }

 getExpectedAnnualBalanceSheetlist(): Observable<Array<LicenseProjectAnnualBalanceSheetDto>> {
  return this.annualBalanceSheetSubjectList$;
}
setAnnualBalanceSheetList(list: Array<LicenseProjectAnnualBalanceSheetDto>) {
  return this.annualBalanceSheetSubjectList.next(list) ;
  }

  GetByFeasibilityStudyId(feasibilityStudyId: string): Observable<LicenseProjectAnnualBalanceSheetDto[]> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectAnnualBalanceSheet.GetByFeasibilityStudyId}/${feasibilityStudyId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectAnnualBalanceSheetDto[];
      })
    )
  }
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.LicenseProjectAnnualBalanceSheet.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
 Save(model: LicenseProjectAnnualBalanceSheetCreateUpdateDto): Observable<LicenseProjectAnnualBalanceSheetDto[]> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectAnnualBalanceSheetCreateUpdateDto>>
    (Configuration.APIs.LicenseProjectAnnualBalanceSheet.Save, model).pipe(
      map((res: any) => {
        return res.data as LicenseProjectAnnualBalanceSheetDto[];
      })
    )
}
}
