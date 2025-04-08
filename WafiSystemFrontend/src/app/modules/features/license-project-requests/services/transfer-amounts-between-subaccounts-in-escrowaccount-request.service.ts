import { EventEmitter, Injectable } from '@angular/core';
import { CreateOrUpdateTransferAmountsBetweenSubAccountsInEscrowAccountRequestDto, TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto } from '../models/transfer-amount-between-subaccounts-in-escrow-dto';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class TransferAmountsBetweenSubaccountsInEscrowaccountRequestService {
  selectedRequest$: BehaviorSubject<TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto | null> = new BehaviorSubject<TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  
  constructor(private _httpClient: HttpClient) {}

  getDetails(
    id: string
  ): Observable<TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto> {
    return this._httpClient
      .get<CoreResponseDTO<TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto>>(
        `${
          Configuration.APIs.TransferAmountsBetweenSubAccountsInEscrowAccountRequest
            .GetDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto>) => {
          return res.data as TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto;
        })
      );
  }
  saveTransferAmountsBetweenSubAccountsInEscrowAccount(
    dto: CreateOrUpdateTransferAmountsBetweenSubAccountsInEscrowAccountRequestDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.TransferAmountsBetweenSubAccountsInEscrowAccountRequest.SaveTransferAmountsBetweenSubAccountsInEscrowAccount}`,
      dto
    );
  }
  
}
