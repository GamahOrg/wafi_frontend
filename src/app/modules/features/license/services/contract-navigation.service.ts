import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ContractNavigationData {
  contractId: string;
  contractFileId: string;
  unitCode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContractNavigationService {
  private contractDataSubject = new BehaviorSubject<ContractNavigationData | null>(null);
  public contractData$: Observable<ContractNavigationData | null> = this.contractDataSubject.asObservable();

  constructor() { }

  setContractData(data: ContractNavigationData): void {
    this.contractDataSubject.next(data);
  }

  getContractData(): ContractNavigationData | null {
    return this.contractDataSubject.value;
  }

  clearContractData(): void {
    this.contractDataSubject.next(null);
  }
}
