import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicenseProjectFinancialIndicatorDto } from '../../models/feasibilityStudyDtos/license-project-financial-indicator-dto';
import { LicenseProjectFinancialIndicatorCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-financial-indicator-create-update-dto';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class LicenseProjectFinancialIndicatorService {

  constructor(private _httpClient: HttpClient) { }

  private FinancialIndicatorSubject = new BehaviorSubject<LicenseProjectFinancialIndicatorDto|null>({} as LicenseProjectFinancialIndicatorDto);

  private FinancialIndicatorSubject$ = this.FinancialIndicatorSubject.asObservable();

  private FinancialIndicatorSubjectList = new BehaviorSubject<Array<LicenseProjectFinancialIndicatorDto>>([]);

  private FinancialIndicatorSubjectList$ = this.FinancialIndicatorSubjectList.asObservable();
  getProjectFinancialIndicatorObj(): Observable<LicenseProjectFinancialIndicatorDto|null> {
   return this.FinancialIndicatorSubject$;
 }
 setProjectFinancialIndicatorObj(LatestValue: LicenseProjectFinancialIndicatorDto) {
   return this.FinancialIndicatorSubject.next(LatestValue);
 }

 getFinancialIndicatorSubjectListlist(): Observable<Array<LicenseProjectFinancialIndicatorDto>> {
  return this.FinancialIndicatorSubjectList$;
}
setFinancialIndicatorList(list: Array<LicenseProjectFinancialIndicatorDto>) {
  return this.FinancialIndicatorSubjectList.next(list) ;
  }

  GetByFeasibilityStudyId(feasibilityStudyId: string): Observable<LicenseProjectFinancialIndicatorDto[]> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProjectFinancialIndicator.GetByFeasibilityStudyId}/${feasibilityStudyId}`).pipe(
      map((res: any) => {
        return res.data as LicenseProjectFinancialIndicatorDto[];
      })
    )
  }
  Delete(id: string) : Observable<any>{
    return this._httpClient.delete<any>
    (`${Configuration.APIs.LicenseProjectFinancialIndicator.Delete}?id=${id}`).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
 Save(model: LicenseProjectFinancialIndicatorCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectFinancialIndicatorDto[]>> {
  return this._httpClient.post<CoreResponseDTO<LicenseProjectFinancialIndicatorCreateUpdateDto>>
    (Configuration.APIs.LicenseProjectFinancialIndicator.Save, model).pipe(
      map((res: any) => {
        return res;
      })
    )
}
}
