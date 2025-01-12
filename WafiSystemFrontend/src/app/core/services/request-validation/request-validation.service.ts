import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestValidation } from '../../models/request-validation.model';
import { QualificationRequestData } from '../../models/qualification-request-data.model';

@Injectable()
export class RequestValidationService {
  Requestvalidation$: BehaviorSubject<RequestValidation | null> = new BehaviorSubject<RequestValidation | null>(null);
  qualificationRequestData$: BehaviorSubject<QualificationRequestData | null> = new BehaviorSubject<QualificationRequestData | null>(null);

  constructor() { }
  updateRequestValidation(data: RequestValidation | null): void {
    this.Requestvalidation$.next(data);
  }
  getRequestValidation(): Observable<RequestValidation | null> {
    return this.Requestvalidation$.asObservable();
  }
  
  updateQualificationRequestData(data: QualificationRequestData | null): void {
    this.qualificationRequestData$.next(data);
  }
  getQualificationRequestData(): Observable<QualificationRequestData | null> {
    return this.qualificationRequestData$.asObservable();
  }
}
