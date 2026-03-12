import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineerApprovalDataService {
  private approvalDetailsSubject = new BehaviorSubject<any>(null);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  approvalDetails$: Observable<any> = this.approvalDetailsSubject.asObservable();
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  setApprovalDetails(data: any): void {
    this.approvalDetailsSubject.next(data);
  }

  getApprovalDetails(): any {
    return this.approvalDetailsSubject.getValue();
  }

  setLoading(loading: boolean): void {
    this.isLoadingSubject.next(loading);
  }

  reset(): void {
    this.approvalDetailsSubject.next(null);
    this.isLoadingSubject.next(false);
  }
}
