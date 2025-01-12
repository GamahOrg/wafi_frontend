import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { RegistrationResponse, registration, YaqeenCustomer } from 'src/app/shared/models/customer.model';

@Injectable()
export class YaqeenService {

  constructor(private _httpClient: HttpClient) { }
  yaqeenCustomer: BehaviorSubject<YaqeenCustomer | null> = new BehaviorSubject<YaqeenCustomer | null>(null);
  getYakeenDetails(registrationObj: registration): Observable<YaqeenCustomer | null> {
    console.log("registrationObj", registrationObj)
    return this._httpClient.post<CoreResponseDTO<YaqeenCustomer>>(`${Configuration.APIs.Integration.GetYakeenDetails}`, registrationObj).pipe(
      map((res: CoreResponseDTO<YaqeenCustomer>) => {
        return res.isDone ? res.data as YaqeenCustomer : null
      })
    )
  }
  updateYaqeenCustomer(yaqeenCustomer: YaqeenCustomer) {
    this.yaqeenCustomer.next(yaqeenCustomer)
  }
  getYaqeenCustomer(): Observable<YaqeenCustomer | null> {
    return this.yaqeenCustomer.asObservable()
  }
}
