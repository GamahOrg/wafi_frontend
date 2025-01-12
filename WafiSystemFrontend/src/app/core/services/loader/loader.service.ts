import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  showLoader:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  constructor() { }
}
