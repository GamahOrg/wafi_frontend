import { Component, Input, OnInit } from '@angular/core';
import { InvoiceData } from '../../models/license-request-header-processing-step-model';
import { PopupService } from '../../../../../shared/services/popup/popup.service';


@Component({
  selector: 'app-fawria-license-complete-invoice-view',
  templateUrl: './fawria-license-complete-invoice-view.component.html',
  styleUrls: ['./fawria-license-complete-invoice-view.component.scss']
})
export class FawriaLicenseCompleteInvoiceViewComponent implements OnInit {
  @Input() invoiceData!: InvoiceData;


  constructor(private _popupService: PopupService) { }

  ngOnInit(): void {
    const popupData = this._popupService.popupData.getValue();
    if (popupData?.data?.invoiceData) {
      this.invoiceData = popupData.data.invoiceData;
    }
  }
}
