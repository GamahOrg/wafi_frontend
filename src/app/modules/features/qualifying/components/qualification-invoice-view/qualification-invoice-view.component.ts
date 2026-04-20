import { Component, OnInit } from '@angular/core';
import { QualificationInvoiceData } from '../../dataModels/request-details.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-qualification-invoice-view',
  templateUrl: './qualification-invoice-view.component.html',
  styleUrls: ['./qualification-invoice-view.component.scss']
})
export class QualificationInvoiceViewComponent implements OnInit {
  invoiceData!: QualificationInvoiceData;

  constructor(private _popupService: PopupService) {}

  ngOnInit(): void {
    const popupData = this._popupService.popupData.getValue();
    if (popupData?.data?.invoiceData) {
      this.invoiceData = popupData.data.invoiceData;
    }
  }
}
