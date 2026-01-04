import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

export interface BankTermCondition {
  returnOrder: number;
  description: string;
  order: number
}

@Component({
  selector: 'app-bank-terms-conditions-popup',
  templateUrl: './bank-terms-conditions-popup.component.html',
  styleUrls: ['./bank-terms-conditions-popup.component.scss']
})
export class BankTermsConditionsPopupComponent implements OnInit {
  termsConditions: BankTermCondition[] = [];

  constructor(private _popupService: PopupService) { }

  ngOnInit(): void {
    // Get the terms conditions data from the popup service
    this._popupService.popupData.subscribe(data => {
      if (data.data && Array.isArray(data.data)) {
        this.termsConditions = data.data;
      }
    });
  }

  closePopup(): void {
    this._popupService.dismissDialog();
  }
}
