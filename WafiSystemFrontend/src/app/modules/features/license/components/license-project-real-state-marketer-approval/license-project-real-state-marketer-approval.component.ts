import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectRealStateMarketerApproval } from '../../dataModels/license-project-real-state-marketer-approval.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-real-state-marketer-approval',
  templateUrl: './license-project-real-state-marketer-approval.component.html',
  styleUrls: ['./license-project-real-state-marketer-approval.component.scss']
})
export class LicenseProjectRealStateMarketerApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseRequestApprovalData!: LicenseProjectRealStateMarketerApproval | null

  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }

  ngOnInit(): void {
    this.getLicenseRequestApproval()
  }


  getLicenseRequestApproval() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectRealStateMarketerApprovalBS().subscribe(res => {
        this.licenseRequestApprovalData = res
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


}
