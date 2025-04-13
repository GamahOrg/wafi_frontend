import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectApproval, SaveApproval, UpdateApproval } from '../../dataModels/license-project-approval.model';
import { LicenseProjectMainRealStateDeveloperApproval } from '../../dataModels/license-project-main-real-state-developer-approval.model';
import { LicenseProjectSubDeveloperApproval } from '../../dataModels/license-project-sub-developer-approval.model';
import { LicenseProjectCharteredAccountantApproval } from '../../dataModels/license-project-chartered-accountant-approval.model';
import { LicenseProjectEngineeringConsultantApproval } from '../../dataModels/license-project-engineering-consultant-approval.model';
import { LicenseProjectRealStateMarketerApproval } from '../../dataModels/license-project-real-state-marketer-approval.model';
import { CustomerShortDto } from '../../models/facility-short-dto';

@Injectable()
export class LicenseRequestApprovalsService {

  constructor(private _httpClient: HttpClient) { }

  //LicenseProjectRealStateMarketerApproval
  private LicenseProjectRealStateMarketerApprovalBS: BehaviorSubject<LicenseProjectRealStateMarketerApproval | null> = new BehaviorSubject<LicenseProjectRealStateMarketerApproval | null>(null)
  private LicenseProjectRealStateMarketerApprovalBS$ = this.LicenseProjectRealStateMarketerApprovalBS.asObservable();
  getLicenseProjectRealStateMarketerApprovalBS(): Observable<LicenseProjectRealStateMarketerApproval|null> {
   return this.LicenseProjectRealStateMarketerApprovalBS$;
  }
  setLicenseProjectRealStateMarketerApprovalBS(LatestValue: LicenseProjectRealStateMarketerApproval) {
    return this.LicenseProjectRealStateMarketerApprovalBS.next(LatestValue);
   }
//LicenseProjectCharteredAccountantApproval
private LicenseProjectEngineeringConsultantApprovalBS: BehaviorSubject<LicenseProjectEngineeringConsultantApproval | null> = new BehaviorSubject<LicenseProjectEngineeringConsultantApproval | null>(null)
private LicenseProjectEngineeringConsultantApprovalBS$ = this.LicenseProjectEngineeringConsultantApprovalBS.asObservable();
getLicenseProjectEngineeringConsultantApprovalBS(): Observable<LicenseProjectEngineeringConsultantApproval|null> {
 return this.LicenseProjectEngineeringConsultantApprovalBS$;
}
setLicenseProjectEngineeringConsultantApprovalBS(LatestValue: LicenseProjectEngineeringConsultantApproval) {
 return this.LicenseProjectEngineeringConsultantApprovalBS.next(LatestValue);
}
//LicenseProjectCharteredAccountantApproval
private LicenseProjectCharteredAccountantApprovalBS: BehaviorSubject<LicenseProjectCharteredAccountantApproval | null> = new BehaviorSubject<LicenseProjectCharteredAccountantApproval | null>(null)
private LicenseProjectCharteredAccountantApprovalBS$ = this.LicenseProjectCharteredAccountantApprovalBS.asObservable();
getLicenseProjectCharteredAccountantApprovalBS(): Observable<LicenseProjectCharteredAccountantApproval|null> {
 return this.LicenseProjectCharteredAccountantApprovalBS$;
}
setLicenseProjectCharteredAccountantApprovalBS(LatestValue: LicenseProjectCharteredAccountantApproval) {
 return this.LicenseProjectCharteredAccountantApprovalBS.next(LatestValue);
}
//LicenseProjectSubDeveloperApproval
private LicenseProjectSubDeveloperApprovalBS: BehaviorSubject<LicenseProjectSubDeveloperApproval | null> = new BehaviorSubject<LicenseProjectSubDeveloperApproval | null>(null)
private LicenseProjectSubDeveloperApprovalBS$ = this.LicenseProjectSubDeveloperApprovalBS.asObservable();
getLicenseProjectSubDeveloperApprovalBS(): Observable<LicenseProjectSubDeveloperApproval|null> {
 return this.LicenseProjectSubDeveloperApprovalBS$;
}
setLicenseProjectSubDeveloperApprovalBS(LatestValue: LicenseProjectSubDeveloperApproval) {
 return this.LicenseProjectSubDeveloperApprovalBS.next(LatestValue);
}
//LicenseProjectMainRealStateDeveloperApproval
private LicenseProjectMainRealStateDeveloperApprovalBS: BehaviorSubject<LicenseProjectMainRealStateDeveloperApproval | null> = new BehaviorSubject<LicenseProjectMainRealStateDeveloperApproval | null>(null)
private LicenseProjectMainRealStateDeveloperApprovalBS$ = this.LicenseProjectMainRealStateDeveloperApprovalBS.asObservable();
getLicenseProjectMainRealStateDeveloperApprovalBS(): Observable<LicenseProjectMainRealStateDeveloperApproval|null> {
 return this.LicenseProjectMainRealStateDeveloperApprovalBS$;
}
setLicenseProjectMainRealStateDeveloperApprovalBS(LatestValue: LicenseProjectMainRealStateDeveloperApproval) {
 return this.LicenseProjectMainRealStateDeveloperApprovalBS.next(LatestValue);
}


  GetApprovals(facilityId: string): Observable<LicenseProjectApproval[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectApproval[]>>(`${Configuration.APIs.LicenseRequestService.GetApprovals}/${facilityId}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectApproval[]>) => {
        return res.isDone ? res.data as LicenseProjectApproval[] : null
      })
    )
  }

  GetApproval(id: string|undefined, approvalRole: number|undefined): Observable<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval>>(`${Configuration.APIs.LicenseRequestService.GetApproval}/${id}/${approvalRole}`).pipe(
      map((res: CoreResponseDTO<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval>) => {
        return res.isDone ? res.data as LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval : null
      })
    )
  }

  SaveApproval(SaveApprovalObj: SaveApproval): Observable<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval>>(Configuration.APIs.LicenseRequestService.SaveApproval, SaveApprovalObj).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data as  LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval : null
      })
    )
  }

  UpdateApproval(UpdateApprovalObj: UpdateApproval): Observable<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval>>(Configuration.APIs.LicenseRequestService.UpdateApproval, UpdateApprovalObj).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data as LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval : null
      })
    )
  }
  setLicenseSelectedApprovalInLocalStorage(selectedApproval: LicenseProjectApproval): void {
    localStorage.setItem('selectedApproval', JSON.stringify(selectedApproval))
  }
  getLicenseSelectedApprovalInLocalStorage(): LicenseProjectApproval {
    let selectedApproval = localStorage.getItem('selectedApproval');
    return selectedApproval && JSON.parse(selectedApproval)
  }

  GetSubCustomers():Observable<CustomerShortDto[]> {
    return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
      (`${Configuration.APIs.Customer.GetSubCustomers}`).pipe(
        map((res: CoreResponseDTO<CustomerShortDto[]>) => {
          return  res?.data  as CustomerShortDto[];
        })
      )
  }

  GetFacilitySubCustomers(facilityId: string): Observable<CustomerShortDto[]> {
    return this._httpClient.get<CoreResponseDTO<CustomerShortDto[]>>
      (`${Configuration.APIs.Customer.GetFacilitySubCustomers}?facilityId=${facilityId}`).pipe(
        map((res: CoreResponseDTO<CustomerShortDto[]>) => {
          return res?.data as CustomerShortDto[];
        })
      )
  }
}
