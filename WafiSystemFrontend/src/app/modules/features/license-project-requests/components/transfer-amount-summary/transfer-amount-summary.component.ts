import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto } from '../../models/transfer-amount-between-subaccounts-in-escrow-dto';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from '../../services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { EditTransferAmountRequestComponent } from '../edit-transfer-amount-request/edit-transfer-amount-request.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-transfer-amount-summary',
  templateUrl: './transfer-amount-summary.component.html',
  styleUrls: ['./transfer-amount-summary.component.scss']
})
export class TransferAmountSummaryComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: TransferAmountsBetweenSubAccountsInEscrowAccountRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _transferAmountsBetweenSubaccountsInEscrowaccountRequestService: TransferAmountsBetweenSubaccountsInEscrowaccountRequestService,
    private _popupService: PopupService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,

  ) {}
  showButton: boolean = false;
  showEditButton() {
    this.showButton =
      this.changeRequestDetails.externalRequestStatusId ===
        LicenseProjectRequestStatusEnum.UnderCreation ||
      this.changeRequestDetails.externalRequestStatusId ===
        LicenseProjectRequestStatusEnum.CustomerFeedback;
  }
  ngOnInit(): void {
    this.getCharteredAccountId();
    this.observeDataIsUpdated();
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._transferAmountsBetweenSubaccountsInEscrowaccountRequestService.dataIsUpdate.subscribe(res=>{
        this.ObserveSelectedRequest()
      }));
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._transferAmountsBetweenSubaccountsInEscrowaccountRequestService.getDetails(this.id!).subscribe(
        (res) => {
          this.changeRequestDetails = res;
          this.showEditButton();
        }
      )
    );
  }
  openDialog(): void {
    let Data = {
      title: 'تعديل البيانات ',
      component: EditTransferAmountRequestComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
