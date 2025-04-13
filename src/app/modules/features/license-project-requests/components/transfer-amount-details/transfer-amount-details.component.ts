import { Component } from '@angular/core';
import { TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto } from '../../models/transfer-amount-between-subaccounts-in-escrow-dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from '../../services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-transfer-amount-details',
  templateUrl: './transfer-amount-details.component.html',
  styleUrls: ['./transfer-amount-details.component.scss']
})
export class TransferAmountDetailsComponent {
 subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _transferAmountsBetweenSubaccountsInEscrowaccountRequestService: TransferAmountsBetweenSubaccountsInEscrowaccountRequestService,
  ) {}
  ngOnInit(): void {
    this.getCharteredAccountId();
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._transferAmountsBetweenSubaccountsInEscrowaccountRequestService.getDetails(this.id!).subscribe(
        (res:any) => {
          this.changeRequestDetails = res;
        }
      )
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
