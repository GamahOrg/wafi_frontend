import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ApprovalDto } from '../../models/approval';

@Injectable()
export class ProjectApprovalsService {
  private ApprovalSubject = new BehaviorSubject<boolean>(false);
      
    private ApprovalSubject$ = this.ApprovalSubject.asObservable();
  private listApprovalsSubject = new BehaviorSubject<ApprovalDto[]>([]);
      
  private listApprovalsSubject$ = this.listApprovalsSubject.asObservable();
  constructor(private _httpClient: HttpClient) { }
  
  GetProjectApprovalsByProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<string[]>>
      (`${Configuration.APIs.LicenseProject.GetProjectApprovalsByProjectId}/${id}`)
  }
  getApprovalSubject(): Observable<boolean> {
    return this.ApprovalSubject$;
  }
  SetApprovalSubject(LatestValue: boolean) {
  return this.ApprovalSubject.next(LatestValue) ;
  }
}
