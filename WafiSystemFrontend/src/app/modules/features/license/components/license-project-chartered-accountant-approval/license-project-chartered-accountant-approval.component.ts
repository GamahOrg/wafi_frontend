import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectCharteredAccountantApproval } from '../../dataModels/license-project-chartered-accountant-approval.model';

@Component({
  selector: 'app-license-project-chartered-accountant-approval',
  templateUrl: './license-project-chartered-accountant-approval.component.html',
  styleUrls: ['./license-project-chartered-accountant-approval.component.scss']
})
export class LicenseProjectCharteredAccountantApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectCharteredData!: LicenseProjectCharteredAccountantApproval | null
  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }

  ngOnInit(): void {
    this.getLicenseprojectCharteredData()
  }

  getLicenseprojectCharteredData() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectCharteredAccountantApprovalBS().subscribe(res => {
        this.projectCharteredData = res
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
