import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { exchangeRequestDetails } from '../../models/exchange-documents-details-response';
import { ExchangeDocumentService } from '../../services/exchange-document.service';
import { LicenseProjectExchangeDocumentMainItemEnum } from '../../dataModels/license-project-exchange-document-paging-dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-exchange-document-details-popup',
  templateUrl: './exchange-document-details-popup.component.html',
  styleUrls: ['./exchange-document-details-popup.component.scss'],
})
export class ExchangeDocumentDetailsPopupComponent implements OnInit {
  requestDetails: exchangeRequestDetails | null = null;
  mainItemEnum = LicenseProjectExchangeDocumentMainItemEnum;
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private _popupService: PopupService,
    private _exchangeDocumentService: ExchangeDocumentService,
  ) {}

  ngOnInit(): void {
    const popupData = this._popupService.popupData.getValue();
    const documentId = popupData?.data?.id;
    if (documentId) {
      this._exchangeDocumentService
        .getExchangeDocumentDetailWithCustomerInfo(documentId)
        .subscribe((res) => {
          if (res.isDone) {
            this.requestDetails = res.data ?? null;
          }
        });
    }
  }
}
