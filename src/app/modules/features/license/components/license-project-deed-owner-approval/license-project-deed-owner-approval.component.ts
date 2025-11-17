import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectEngineeringConsultantApproval } from '../../dataModels/license-project-engineering-consultant-approval.model';
import { environment } from 'src/environments/environment';
import { LicenseProjectDeedOwnerApproval } from '../../dataModels/license-project-deed-owner-approval.model';

@Component({
  selector: 'app-license-project-deed-owner-approval',
  templateUrl: './license-project-deed-owner-approval.component.html',
  styleUrls: ['./license-project-deed-owner-approval.component.scss']
})
export class LicenseProjectDeedOwnerApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  deedOwnerApproval!: LicenseProjectDeedOwnerApproval;
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectDeedOwnerApprovalBS().subscribe((obj) => {
        this.deedOwnerApproval = obj as LicenseProjectDeedOwnerApproval;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}










