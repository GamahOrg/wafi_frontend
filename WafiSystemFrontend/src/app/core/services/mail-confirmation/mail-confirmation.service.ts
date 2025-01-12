import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class MailConfirmationService {

  constructor(private _httpClient: HttpClient) { }
  
  ConfirmEmail(customerId: string): Observable<boolean> {
    return this._httpClient.get<CoreResponseDTO<any>>(`${Configuration.APIs.Customer.ConfirmEmail}/${customerId}`).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone
      })
    )
  }
}
