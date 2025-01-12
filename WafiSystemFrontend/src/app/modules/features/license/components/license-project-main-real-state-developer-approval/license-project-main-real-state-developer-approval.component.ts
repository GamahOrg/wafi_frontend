import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectMainRealStateDeveloperApproval } from '../../dataModels/license-project-main-real-state-developer-approval.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-license-project-main-real-state-developer-approval',
  templateUrl: './license-project-main-real-state-developer-approval.component.html',
  styleUrls: ['./license-project-main-real-state-developer-approval.component.scss']
})
export class LicenseProjectMainRealStateDeveloperApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  mainRealStateDeveloperApproval!: LicenseProjectMainRealStateDeveloperApproval;
  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectMainRealStateDeveloperApprovalBS().subscribe((obj) => {
        this.mainRealStateDeveloperApproval = obj as LicenseProjectMainRealStateDeveloperApproval;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}







