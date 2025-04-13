import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { RequestNotesData } from '../../models/request-notes-data.model';

@Injectable()
export class RequestNotesService {

  private LicenseProcessingLogFileIds = new BehaviorSubject<string[]>([]);
  private LicenseProcessingLogFileIds$ = this.LicenseProcessingLogFileIds.asObservable();

  RequestNotes$: BehaviorSubject<RequestNotesData | null> = new BehaviorSubject<RequestNotesData | null>(null)

  getFilesIds(): Observable<string[]> {
    return this.LicenseProcessingLogFileIds$
   }
  setFilesIds(list: string[]) {
    return this.LicenseProcessingLogFileIds.next(list) ;
    }


  constructor() { }
}
