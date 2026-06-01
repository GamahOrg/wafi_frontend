import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { InvoiceData } from '../../services/change-plan-approval.service';

@Component({
  selector: 'app-license-project-request-invoice-view',
  templateUrl: './license-project-request-invoice-view.component.html',
})
export class LicenseProjectRequestInvoiceViewComponent implements OnInit {
  invoiceData!: InvoiceData;

  constructor(private _popupService: PopupService) {}

  ngOnInit(): void {
    const popupData = this._popupService.popupData.getValue();
    if (popupData?.data?.invoiceData) {
      this.invoiceData = popupData.data.invoiceData;
    }
  }
}
