import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseProjectAnnualCashFlowCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-annual-cash-flow-create-update-dto';
import { LicenseProjectAnnualCashFlowDto } from '../../models/feasibilityStudyDtos/license-project-annual-cash-flow-dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectAnnualCashFlowService {

  constructor(private _httpClient: HttpClient) { }

  
  private AnnualCashFlowSubject = new BehaviorSubject<LicenseProjectAnnualCashFlowDto|null>({} as LicenseProjectAnnualCashFlowDto);

  private AnnualCashFlowSubject$ = this.AnnualCashFlowSubject.asObservable();

  private AnnualCashFlowSubjectList = new BehaviorSubject<Array<LicenseProjectAnnualCashFlowDto>>([]);
    
  private AnnualCashFlowSubjectList$ = this.AnnualCashFlowSubjectList.asObservable();
  getProjectAnnualCashFlowObj(): Observable<LicenseProjectAnnualCashFlowDto|null> {
   return this.AnnualCashFlowSubject$;
 }
 setProjectAnnualCashFlowObj(LatestValue: LicenseProjectAnnualCashFlowDto) {
   return this.AnnualCashFlowSubject.next(LatestValue);
 }

 getExpectedAnnualCashFlowlist(): Observable<Array<LicenseProjectAnnualCashFlowDto>> {
  return this.AnnualCashFlowSubjectList$;
}
setAnnualCashFlowList(list: Array<LicenseProjectAnnualCashFlowDto>) {
  return this.AnnualCashFlowSubjectList.next(list) ;
  }

  GetByFeasibilityStudyId(feasibilityStudyId: string): Observable<LicenseProjectAnnualCashFlowDto[]> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectAnnualCashFlow.GetByFeasibilityStudyId}/${feasibilityStudyId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectAnnualCashFlowDto[];
      })
    )
  }
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.LicenseProjectAnnualCashFlow.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
 Save(model: LicenseProjectAnnualCashFlowCreateUpdateDto): Observable<LicenseProjectAnnualCashFlowDto[]> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectAnnualCashFlowCreateUpdateDto>>
    (Configuration.APIs.LicenseProjectAnnualCashFlow.Save, model).pipe(
      map((res: any) => {
        return res.data as LicenseProjectAnnualCashFlowDto[];
      })
    )
}
}
