import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { RequestTimeLineService } from '../../services/request-time-line.service';
import { LicenseRequestLogsDto } from '../../models/license-details.model';

@Component({
  selector: 'app-request-time-line',
  templateUrl: './request-time-line.component.html',
  styleUrls: ['./request-time-line.component.scss']
})
export class RequestTimeLineComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  requestLogs: null | LicenseRequestLogsDto[] = null;
  // selectedRequestID: string = "084E95A6-88E8-4FE2-8153-0A94A4166DB6";
  selectedRequestID: string | null = "";

  constructor(private _requestTimeLineService: RequestTimeLineService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseDetailService: LicenseDetailsService,
    )
  {}
  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated()
  }
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._licenseDetailService.dataIsUpdate.subscribe(res => {
        this.GetLicenseRequestLogsByRequestId();
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    // this._licenseDetailsService.clearRequestFromLocalStorage();
  }

  GetLicenseRequestLogsByRequestId() {
    this.subscriptions.push(
      this._requestTimeLineService.GetLicenseRequestLogsByRequestId(this.selectedRequestID as string).subscribe(res => {
        if(res) this.requestLogs = res;
      }))
  }
  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._sharedLicenseProjectService.getSelectedRequestIdFromLocalStorage()
    if (this.selectedRequestID) this.GetLicenseRequestLogsByRequestId();
  };

}
