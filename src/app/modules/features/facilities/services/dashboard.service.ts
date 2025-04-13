import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CustomerDashBoardDto } from '../dataModels/customer-dash-board-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class DashboardService {

  constructor(private _httpClient: HttpClient) { }

  getCustomerDashboardData(): Observable<CustomerDashBoardDto> {
    return this._httpClient.get<CoreResponseDTO<CustomerDashBoardDto>>(`${Configuration.APIs.customerDashBoard.GetCustomerDashboardData}`).pipe(
      map((res: CoreResponseDTO<CustomerDashBoardDto>) => {
        return res.data as CustomerDashBoardDto
      })
    )
  }
}
