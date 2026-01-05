import { Component, Input, OnInit } from '@angular/core';
import { LicenseCertificateDto } from '../../models/license-certification.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-off-plan-sale-license',
  templateUrl: './off-plan-sale-license.component.html',
  styleUrls: ['./off-plan-sale-license.component.scss']
})
export class OffPlanSaleLicenseComponent implements OnInit {
  @Input() certificateData!: LicenseCertificateDto;

  constructor(private _popupService: PopupService) {}

  ngOnInit(): void {
    const popupData = this._popupService.popupData.getValue();
    if (popupData?.data?.certificateData) {
      this.certificateData = popupData.data.certificateData;
    }
  }
}
