import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDepositDocumentService } from '../../services/license-deposit-document.service';
import { LicenseDepositDocumentDetailsDto } from '../../models/license-deposit-document-model/deposit-document-details-dto';

@Component({
  selector: 'app-license-deposit-document-details',
  templateUrl: './license-deposit-document-details.component.html',
  styleUrls: ['./license-deposit-document-details.component.scss']
})
export class LicenseDepositDocumentDetailsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  selectedRequest: LicenseDepositDocumentDetailsDto|null = null
  licenseDepositDocumentId: string = '00000000-0000-0000-0000-000000000000';
  constructor(
    private _licenseDepositDocument: LicenseDepositDocumentService
  ) {}
  ngOnInit(): void {
    this.getLicenseDepositDocumentId();
  }

  getLicenseDepositDocumentId()
  {
    this.licenseDepositDocumentId = this._licenseDepositDocument.getLicenseProjectDepositDocumentIdStorage() as string
    if(this.licenseDepositDocumentId){
      this._licenseDepositDocument
      .GetDepositDocumentDetails(this.licenseDepositDocumentId)
      .subscribe((result) => {
          this.selectedRequest = result;
      });
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
