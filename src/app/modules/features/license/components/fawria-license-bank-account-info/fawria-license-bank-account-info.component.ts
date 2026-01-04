import { Component } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectBankAccountInformationDto } from '../../models/license-request-header-processing-step-model';

@Component({
  selector: 'app-fawria-license-bank-account-info',
  templateUrl: './fawria-license-bank-account-info.component.html',
  styleUrls: ['./fawria-license-bank-account-info.component.scss'],
})
export class FawriaLicenseBankAccountInfoComponent {
  constructor(private _popupService: PopupService) {}

  banAccount?: LicenseProjectBankAccountInformationDto;

  ngOnInit(): void {
    const popupData = this._popupService.popupData.getValue();
    if (popupData?.data?.bankAccount) {
      this.banAccount = popupData.data.bankAccount;
    }
  }
}
